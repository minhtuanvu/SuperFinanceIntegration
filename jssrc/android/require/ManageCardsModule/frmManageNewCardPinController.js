define("ManageCardsModule/userfrmManageNewCardPinController", {
    keypadString: '',
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    showPinCode: function() {
        this.view.imgPin.src = "pin_icon.png"
        this.view.flxPopup.setVisibility(false);
        this.updateInputBullets();
        this.initActions();
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
        this.view.btnNext.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnNext.setEnabled(false);
        this.clearKeyPadString();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        this.view.btnNext.onClick = this.btnNextOnClick;
    },
    //KEYPAD OPS:
    updateInputBullets: function() {
        var scope = this;
        var widgets = this.view["flxInputSecurityCode"].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
        }
        for (var i = this.keypadString.length; i < widgets.length - 1; i++) {
            widgets[i].skin = "sknLble3e3e3SSP60px";
        }
        this.view.forceLayout();
    },
    setKeypadChar: function(char) {
        if (this.keypadString.length === 4) return;
        this.keypadString = this.keypadString + char;
        this.updateInputBullets();
        if (this.keypadString.length === 4) {
            this.view.btnNext.skin = "sknBtn0095e426pxEnabled";
            this.view.btnNext.setEnabled(true);
        } else {
            this.view.btnNext.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnNext.setEnabled(false);
        }
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
        this.view.btnNext.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnNext.setEnabled(false);
    },
    bindGenericError: function(errorMsg) {
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    btnNextOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
        manageCardsModule.presentationController.navigateToConfirmPin(this.keypadString);
    },
    clearKeyPadString: function() {
        for (var i = 0; i < 4; i++) {
            this.clearKeypadChar();
        }
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    cancelCommon: function() {
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
        manageCardsModule.presentationController.cancelCommon();
    }
});
define("ManageCardsModule/frmManageNewCardPinControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_g81b54001711457b86a79fb20676b1f3: function AS_Button_g81b54001711457b86a79fb20676b1f3(eventobject) {
        var self = this;
        this.btnNextOnClick();
    },
    AS_Form_f126a48745c24b3ca5e97eadd73261f9: function AS_Form_f126a48745c24b3ca5e97eadd73261f9(eventobject) {
        var self = this;
        this.showPinCode();
    },
    AS_BarButtonItem_c2a358405aad4cf68b6cca7aa3b1bbf3: function AS_BarButtonItem_c2a358405aad4cf68b6cca7aa3b1bbf3(eventobject) {
        var self = this;
        this.cancelCommon();
    },
    AS_Button_c4da5e8eba494be68a8f65d898091fae: function AS_Button_c4da5e8eba494be68a8f65d898091fae(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_d53d317981b34651a5dfe9449037e0e1: function AS_Button_d53d317981b34651a5dfe9449037e0e1(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_g12c41f7d4f44baa8e9cc87d7fe65a83: function AS_Button_g12c41f7d4f44baa8e9cc87d7fe65a83(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_d492f031b65c4e5f8cda40913c370729: function AS_Button_d492f031b65c4e5f8cda40913c370729(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_j10a1fd551194261b4068e6f19817044: function AS_Button_j10a1fd551194261b4068e6f19817044(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_d0e966f905334fc29f82305a1502f8c0: function AS_Button_d0e966f905334fc29f82305a1502f8c0(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_f74bc8f3769b43fc9ce5dd3a538145f3: function AS_Button_f74bc8f3769b43fc9ce5dd3a538145f3(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_c1f7024068374a2c9e6f9a5f60b115ab: function AS_Button_c1f7024068374a2c9e6f9a5f60b115ab(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_e9a09788f5f3498eb6eb84b4939f8363: function AS_Button_e9a09788f5f3498eb6eb84b4939f8363(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_d4a18122409a4fbaac72904bfe9f3177: function AS_Button_d4a18122409a4fbaac72904bfe9f3177(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_j57f694a7b8049c3b038d9be9f227fa0: function AS_Image_j57f694a7b8049c3b038d9be9f227fa0(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("ManageCardsModule/frmManageNewCardPinController", ["ManageCardsModule/userfrmManageNewCardPinController", "ManageCardsModule/frmManageNewCardPinControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmManageNewCardPinController");
    var controllerActions = ["ManageCardsModule/frmManageNewCardPinControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
