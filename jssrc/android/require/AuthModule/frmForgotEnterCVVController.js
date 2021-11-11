define("AuthModule/userfrmForgotEnterCVVController", {
    keypadString: '',
    timerCounter: 0,
    cardNumber: '',
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxPopup.setVisibility(false);
        this.initActions();
        this.handleData();
        this.renderTitleBar();
        this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.ForgotLoginCredentials");
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.title = kony.i18n.getLocalizedString("kony.mb.ForgotLoginCredentials");
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    handleData: function() {
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var forgotObj = authModule.presentationController.getForgotObjectForView();
        if (!forgotObj.cvv) {
            this.setCardData();
        }
        this.keypadString = "";
        this.updateInputBullets();
    },
    renderTitleBar: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (!isIphone) {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    },
    showCards: function() {
        if (this.view.segCards.isVisible === true) {
            this.view.segCards.isVisible = false;
            this.view.flxInputCVV.isVisible = true;
            this.view.imgArrow.src = "arrowdown.png";
        } else {
            this.view.segCards.isVisible = true;
            this.view.flxInputCVV.isVisible = false;
            this.view.imgArrow.src = "arrowup.png";
        }
    },
    segSelection: function() {
        var selectedCardData = this.view.segCards.selectedRowItems[0];
        this.view.lblSelectedCardValue.text = selectedCardData.lblCard;
        this.cardNumber = selectedCardData.cardNumber;
    },
    initActions: function() {
        this.view.customHeader.flxBack.onClick = this.goBack;
        this.view.customHeader.btnRight.onClick = this.onCancel;
        this.view.flxDropdown.onClick = this.selectCard;
        this.view.segCards.onRowClick = this.onCardSelect;
    },
    selectCard: function() {
        this.showCards();
    },
    onCardSelect: function() {
        this.segSelection();
        this.toggleCheckbox();
        this.showCards();
    },
    goBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onCancel: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.clearStack();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToLogin();
    },
    showCreatePassword: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        if (this.cardNumber !== "") {
            var cvv = this.keypadString;
            var cardNumber = this.cardNumber;
            var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authModule.presentationController.validateCVV(cvv, cardNumber);
        } else {
            var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n(kony.mb.forgot.selectCard);
            this.bindGenericError(errorMsg);
        }
    },
    updateInputBullets: function() {
        var scope = this;
        var widgets = this.view["flxInputCVV"].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
        }
        for (var i = this.keypadString.length; i < widgets.length - 1; i++) {
            widgets[i].skin = "lblWhiteDot";
        }
        if (this.keypadString.length !== 3) {
            this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnVerify.setEnabled(false);
        } else {
            this.view.btnVerify.skin = "sknBtn0095e426pxEnabled";
            this.view.btnVerify.setEnabled(true);
        }
        this.view.forceLayout();
    },
    setKeypadChar: function(char) {
        if (this.keypadString.length === 3) return;
        this.keypadString = this.keypadString + char;
        this.updateInputBullets();
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets();
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            this.updateInputBullets();
        }
    },
    setCardData: function() {
        var scope = this;
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var forgotObj = authModule.presentationController.getForgotObjectForView();
        var cardsData = forgotObj.cardsData;
        cardsData = applicationManager.getDataProcessorUtility().getCardDescription(cardsData);
        var data = [];
        var dataMap = {
            "imgCheckbox": "imgCheckbox",
            "lblCard": "lblCard",
            "lblSeparator": "lblSeparator",
        };
        for (var i in cardsData) {
            var item = cardsData[i];
            data.push({
                "imgCheckbox": {
                    "src": "radiobuttoninactive.png"
                },
                "lblCard": item.cardDescription,
                "lblSeparator": ".",
                "cardNumber": item.cardNumber
            });
        }
        this.view.lblSelectedCardValue.text = data[0].lblCard;
        this.cardNumber = data[0].cardNumber;
        data[0].imgCheckbox = {
            "src": "radiobtn.png"
        };
        this.view.segCards.widgetDataMap = dataMap;
        //Default card data - first card is selected by default
        this.view.segCards.setData(data);
        this.view.forceLayout();
    },
    toggleCheckbox: function() {
        var index = this.view.segCards.selectedIndex;
        var rowIndex = index[1];
        var data = this.view.segCards.data;
        for (var i = 0; i < data.length; i++) data[i].imgCheckbox.src = "radiobuttoninactive.png";
        data[rowIndex].imgCheckbox.src = "radiobtn.png";
        this.view.segCards.setData(data);
        this.view.forceLayout();
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("AuthModule/frmForgotEnterCVVControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_c9516f568c5441eaa673de7a216e10e6: function AS_Button_c9516f568c5441eaa673de7a216e10e6(eventobject) {
        var self = this;
        this.showCreatePassword();
    },
    AS_FlexContainer_af08ad13aadf45fe88e03af544bdda7a: function AS_FlexContainer_af08ad13aadf45fe88e03af544bdda7a(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmForgot");
    },
    AS_Form_b2d8a5f195e34b368821ebc0e8ca83fc: function AS_Form_b2d8a5f195e34b368821ebc0e8ca83fc(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d2c7f4009a29481c87789db6c3e95eb4: function AS_Form_d2c7f4009a29481c87789db6c3e95eb4(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_cb3ef535752e44c4ba228d1a72d67d97: function AS_BarButtonItem_cb3ef535752e44c4ba228d1a72d67d97(eventobject) {
        var self = this;
        this.onCancel();
    },
    AS_Button_e91678f1e43a41e2bfe58a001515bd8f: function AS_Button_e91678f1e43a41e2bfe58a001515bd8f(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_acb704c8e0e446348baace83f281b28c: function AS_Button_acb704c8e0e446348baace83f281b28c(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_e5d6e53b58a74342bd244381a3945e3c: function AS_Button_e5d6e53b58a74342bd244381a3945e3c(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_dbc67333e66f45d89c3049ac85e98f97: function AS_Button_dbc67333e66f45d89c3049ac85e98f97(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_e3de559a67e94091bf39b6ca95034ed4: function AS_Button_e3de559a67e94091bf39b6ca95034ed4(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_e072961820894efcb500f617a9b10830: function AS_Button_e072961820894efcb500f617a9b10830(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_c1eaab752ed349a1a78506cfd14a2f86: function AS_Button_c1eaab752ed349a1a78506cfd14a2f86(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_d39dcb857a864c7985698776a7804f71: function AS_Button_d39dcb857a864c7985698776a7804f71(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_gd47a2c8bacd4e809f9c289a7d560d69: function AS_Button_gd47a2c8bacd4e809f9c289a7d560d69(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_abf10fcff57f4c6da212d36355e3d3f2: function AS_Image_abf10fcff57f4c6da212d36355e3d3f2(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("AuthModule/frmForgotEnterCVVController", ["AuthModule/userfrmForgotEnterCVVController", "AuthModule/frmForgotEnterCVVControllerActions"], function() {
    var controller = require("AuthModule/userfrmForgotEnterCVVController");
    var controllerActions = ["AuthModule/frmForgotEnterCVVControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
