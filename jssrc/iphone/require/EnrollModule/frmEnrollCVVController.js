define("EnrollModule/userfrmEnrollCVVController", {
    timerCounter: 0,
    keypadString: '',
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmEnrollCVVPreshow: function() {
        this.setFlowActions();
        this.setPreshowData();
        this.clearCVV();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    setFlowActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            scope.navToSecurityCheck();
        };
        this.view.customHeader.btnRight.onClick = function() {
            scope.onClickCancel();
        };
        this.view.segCards.onRowClick = function() {
            scope.hideCards();
            scope.EnterCVV();
        };
        this.view.flxDropdown.onClick = function() {
            scope.showCards();
        };
        this.view.flxInputCVV.onClick = function() {
            scope.EnterCVV();
        };
        this.view.btnVerify.onClick = function() {
            scope.navToEnrollSignUp();
        };
    },
    setPreshowData: function() {
        this.view.customHeader.flxBack.isVisible = true;
        this.view.customHeader.lblLocateUs.text = "CVV Number";
        this.view.flxSelectedCard.setVisibility(true);
        this.view.segCards.isVisible = false;
        this.setCardData();
        this.showCVV();
        this.view.flxBottom.bottom = "32%";
        this.view.flxKeypad.isVisible = true;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    },
    navToSecurityCheck: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    setCardData: function() {
        var self = this;
        var navManager = applicationManager.getNavigationManager();
        var cardsData = navManager.getCustomInfo("frmEnrollCVV");
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
                    "isvisible": false
                },
                "lblCard": item.cardDescription,
                "lblSeparator": ".",
                "cardNumber": item.cardNumber
            });
        }
        this.view.segCards.widgetDataMap = dataMap;
        //Default card data - first card is selected by default
        this.view.lblSelectedCardValue.text = data[0].lblCard;
        this.view.segCards.selectedRowIndex = [0, 0];
        //data[0].imgCheckbox = {"src" : ""};
        this.view.segCards.setData(data);
        this.view.forceLayout();
    },
    toggleCheckbox: function() {
        var index = this.view.segCards.selectedIndex;
        var rowIndex = index[1];
        var data = this.view.segCards.data;
        //     for(var i = 0 ; i<data.length; i++)
        //       data[i].imgCheckbox.src = "radiobuttoninactive.png";
        //     data[rowIndex].imgCheckbox.src = "radiobtn.png";
        this.view.segCards.setData(data);
        this.view.forceLayout();
    },
    onClickCancel: function() {
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.resetEnrollObj();
    },
    hideCards: function() {
        this.view.segCards.isVisible = false;
        var selectedRow = this.view.segCards.selectedRowIndex[1];
        this.selectedRowIndex = selectedRow;
        var selectedCard = this.view.segCards.data[selectedRow];
        this.view.lblSelectedCardValue.text = selectedCard.lblCard;
        this.toggleCheckbox();
    },
    showCards: function() {
        if (this.view.segCards.isVisible === false) {
            this.view.lblSelectedCardValue.text = "";
            this.view.segCards.isVisible = true;
            this.view.flxKeypad.isVisible = false;
            this.view.flxBottom.bottom = "0dp";
            this.view.imgDropdown.src = "arrowup.png";
        } else {
            this.view.segCards.isVisible = false;
            this.view.imgDropdown.src = "arrowdown.png";
        }
    },
    EnterCVV: function() {
        this.view.flxBottom.bottom = "32%";
        this.view.segCards.isVisible = false;
        this.view.flxKeypad.isVisible = true;
        this.view.forceLayout();
    },
    showCVV: function() {
        var scope = this;
        this.keypadString = '';
        this.incompleteCVVCodeView();
        this.updateInputBullets("flxInputCVV");
    },
    navToAlreadyEnrolled: function() {
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmAlreadyEnrolled");
    },
    navToEnrollAccInfo: function() {
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmEnrollAccinfo");
    },
    /**
     * code to check the cvv is valid or not
     */
    navToEnrollSignUp: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var scope = this;
        var CVV = scope.keypadString;
        if (CVV === null || CVV.length === 0) {
            this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enterSSN"));
        } else {
            var selectedRow = this.selectedRowIndex;
            if (this.view.segCards.selectedRowIndex) {
                selectedRow = this.view.segCards.selectedRowIndex[1];
            }
            var selectedCard = this.view.segCards.data[0];
            if (selectedRow && selectedRow !== undefined && selectedRow !== "" && selectedRow !== null) {
                selectedCard = this.view.segCards.data[selectedRow];
            }
            var cardNumber = selectedCard.cardNumber;
            var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
            enrollModule.presentationController.validateCVV(cardNumber, CVV);
        }
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        if (this.keypadString.length === 3) {
            this.enterSecurityCodePostAction();
        } else if (this.keypadString.length < 3) {
            this.incompleteCVVCodeView();
        } else if (this.keypadString.length > 3) {
            this.keypadString = this.keypadString.slice(0, 3);
            return;
        }
        this.updateInputBullets("flxInputCVV");
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets("flxInputCVV");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 6) {
                this.incompleteCVVCodeView();
            }
            this.updateInputBullets("flxInputCVV");
        }
    },
    updateInputBullets: function(inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
            // widgets[i].text = this.keypadString[i];
            widgets[i].text = "•";
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            widgets[i].skin = "lblBlueFocus";
            widgets[i].text = '_';
        }
        this.view.forceLayout();
    },
    enterSecurityCodePostAction: function() {
        this.view.btnVerify.setEnabled(true);
        this.view.btnVerify.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.flxInputCVV.forceLayout();
    },
    incompleteCVVCodeView: function() {
        this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnVerify.setEnabled(false);
        this.view.flxInputCVV.forceLayout();
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    clearCVV: function() {
        var widgets = this.view["flxInputCVV"].widgets();
        for (var i = 0; i < 3; i++) {
            widgets[i].text = '_';
        }
        this.view.forceLayout();
    }
});
define("EnrollModule/frmEnrollCVVControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_b0ccb43967484e689f812eefa8f4d19d: function AS_Button_b0ccb43967484e689f812eefa8f4d19d(eventobject) {
        var self = this;
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_fb76c49afc3f41d4a29da640e34f02cd: function AS_Form_fb76c49afc3f41d4a29da640e34f02cd(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e449edd296b44838bb617506412f4b08: function AS_Form_e449edd296b44838bb617506412f4b08(eventobject) {
        var self = this;
        this.frmEnrollCVVPreshow();
    },
    AS_BarButtonItem_fb6a41d7207c467f93cc98f82405fd44: function AS_BarButtonItem_fb6a41d7207c467f93cc98f82405fd44(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    AS_Button_d995428196c94d1992d34e7680ead2d7: function AS_Button_d995428196c94d1992d34e7680ead2d7(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_ed83428d3bee48d5a809b7336cea9553: function AS_Button_ed83428d3bee48d5a809b7336cea9553(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_f1671d383324483c86104e017fa68a98: function AS_Button_f1671d383324483c86104e017fa68a98(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_ee1f4c4192904e4f934349eb25ff3430: function AS_Button_ee1f4c4192904e4f934349eb25ff3430(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_i7f9f5abb3664e5fb694af8feb4212a6: function AS_Button_i7f9f5abb3664e5fb694af8feb4212a6(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_ie3bcc135a944dd8baa8de8a0961937b: function AS_Button_ie3bcc135a944dd8baa8de8a0961937b(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_a0158c26af96430caa4ed3bfd9e600dd: function AS_Button_a0158c26af96430caa4ed3bfd9e600dd(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_i93a76d23b8647f791038f00a879241a: function AS_Button_i93a76d23b8647f791038f00a879241a(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828: function AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_jd2f9ffdd6924b03bb0175998407e8d3: function AS_Button_jd2f9ffdd6924b03bb0175998407e8d3(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_b8275a188bb543bda67ceee35f4a8969: function AS_Image_b8275a188bb543bda67ceee35f4a8969(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("EnrollModule/frmEnrollCVVController", ["EnrollModule/userfrmEnrollCVVController", "EnrollModule/frmEnrollCVVControllerActions"], function() {
    var controller = require("EnrollModule/userfrmEnrollCVVController");
    var controllerActions = ["EnrollModule/frmEnrollCVVControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
