define("ManageCardsModule/userfrmManageNewCardConfirmPinController", {
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
        this.view.lblerror.setVisibility(false);
        this.view.btnNext.onClick = this.btnNextOnClick;
        this.view.customHeader.flxBack.onClick = function() {
            var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesResetStep2");
        };
        this.view.customHeader.btnRight.onClick = function() {
            var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesPin");
        };
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
        var data = applicationManager.getCardsManager().getCardObject()
        if (this.keypadString.length === 4) {
            if (data.pinNumber === this.keypadString) {
                this.view.lblerror.setVisibility(false);
                this.view.btnNext.skin = "sknBtn0095e426pxEnabled";
                this.view.btnNext.setEnabled(true);
            } else {
                this.view.lblerror.setVisibility(true);
                this.view.btnNext.skin = "sknBtna0a0a0SSPReg26px";
                this.view.btnNext.setEnabled(false);
            }
        } else {
            this.view.lblerror.setVisibility(false);
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
    btnNextOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
        manageCardsModule.presentationController.applyNewCard();
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
    },
    bindGenericError: function(msg) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    }
});
define("ManageCardsModule/frmManageNewCardConfirmPinControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_b4e2f26c59574bf5b631df65b39942ef: function AS_Button_b4e2f26c59574bf5b631df65b39942ef(eventobject) {
        var self = this;
        this.btnNextOnClick();
    },
    AS_Form_c892e1add938451583963eefa8d2c22b: function AS_Form_c892e1add938451583963eefa8d2c22b(eventobject) {
        var self = this;
        this.showPinCode();
    },
    AS_BarButtonItem_d2da3d41a920432e883f09a4f5ecd3c3: function AS_BarButtonItem_d2da3d41a920432e883f09a4f5ecd3c3(eventobject) {
        var self = this;
        this.cancelCommon();
    },
    AS_Button_ca0ed01a56164c5d8fd0a547c05d6962: function AS_Button_ca0ed01a56164c5d8fd0a547c05d6962(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_d092dea65bd646669214af6b43fe3870: function AS_Button_d092dea65bd646669214af6b43fe3870(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_d858bb7b67bb4b00965391df5cff088e: function AS_Button_d858bb7b67bb4b00965391df5cff088e(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_c845c8e17bfd46658cd65e3c718610ca: function AS_Button_c845c8e17bfd46658cd65e3c718610ca(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_f02a8674ea82424faaad2597a8202d75: function AS_Button_f02a8674ea82424faaad2597a8202d75(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_cefcef0ad3f5401daafc09a3f6868712: function AS_Button_cefcef0ad3f5401daafc09a3f6868712(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_a1f0390774c942a68eac39684e2426c7: function AS_Button_a1f0390774c942a68eac39684e2426c7(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_e8f7f61db46747b1bade51f6af32564d: function AS_Button_e8f7f61db46747b1bade51f6af32564d(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_b63bbc4247c8450a927d69350462243b: function AS_Button_b63bbc4247c8450a927d69350462243b(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_a068882d144d449890046bcfe6a36603: function AS_Button_a068882d144d449890046bcfe6a36603(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_h2885d4e2fe84d69ab58f7721502a111: function AS_Image_h2885d4e2fe84d69ab58f7721502a111(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("ManageCardsModule/frmManageNewCardConfirmPinController", ["ManageCardsModule/userfrmManageNewCardConfirmPinController", "ManageCardsModule/frmManageNewCardConfirmPinControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmManageNewCardConfirmPinController");
    var controllerActions = ["ManageCardsModule/frmManageNewCardConfirmPinControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
