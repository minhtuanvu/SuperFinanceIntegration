define("SettingsModule/userfrmPreferencesResetStep2Controller", {
    keypadString: '',
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    showPinCode: function() {
        this.view.flxPopup.setVisibility(false);
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.updateInputBullets();
        this.initActions();
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
        this.view.customHeader.flxBack.onClick = function() {
            var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesResetStep1");
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
        if (this.keypadString.length === 6) return;
        this.keypadString = this.keypadString + char;
        this.updateInputBullets();
        if (this.keypadString.length === 6) {
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
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmPreferencesResetStep3", this.keypadString);
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesResetStep3");
    },
    clearKeyPadString: function() {
        for (var i = 0; i < 6; i++) {
            this.clearKeypadChar();
        }
    }
});
define("SettingsModule/frmPreferencesResetStep2ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_ea261b2d40ef4a1f82fb3f58177ca228: function AS_Button_ea261b2d40ef4a1f82fb3f58177ca228(eventobject) {
        var self = this;
        this.btnNextOnClick();
    },
    AS_Form_e338cb1e514842cdae26c46e86970efc: function AS_Form_e338cb1e514842cdae26c46e86970efc(eventobject) {
        var self = this;
        this.showPinCode();
    },
    AS_BarButtonItem_i182dedbedd9461b896555f66ba54aec: function AS_BarButtonItem_i182dedbedd9461b896555f66ba54aec(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesPin");
    },
    AS_Button_d100ad8d7eb34d909e18c1a448d96f87: function AS_Button_d100ad8d7eb34d909e18c1a448d96f87(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_c137df008714404a8bc4bdb949ede750: function AS_Button_c137df008714404a8bc4bdb949ede750(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_if8581fab94e4d7f9edea87f88f2e0ae: function AS_Button_if8581fab94e4d7f9edea87f88f2e0ae(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_b011d6b0d0c148ccb1826ac1a23648b5: function AS_Button_b011d6b0d0c148ccb1826ac1a23648b5(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_da3a79755ba44d378153825bf5d8728b: function AS_Button_da3a79755ba44d378153825bf5d8728b(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_gff2505325ff4f8da1f9eec700e18911: function AS_Button_gff2505325ff4f8da1f9eec700e18911(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_fadc24d90357421895bec4e7685a9609: function AS_Button_fadc24d90357421895bec4e7685a9609(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_ad898d858cf44248a9c71331238c2df0: function AS_Button_ad898d858cf44248a9c71331238c2df0(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_eeab40a081e94822bf7ec792907b8e7b: function AS_Button_eeab40a081e94822bf7ec792907b8e7b(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_j3beb9d26e9840a6bdc0ec8e80b4385e: function AS_Button_j3beb9d26e9840a6bdc0ec8e80b4385e(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_j422b864fc5a4eaa9e7c6df81bfcab6b: function AS_Image_j422b864fc5a4eaa9e7c6df81bfcab6b(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("SettingsModule/frmPreferencesResetStep2Controller", ["SettingsModule/userfrmPreferencesResetStep2Controller", "SettingsModule/frmPreferencesResetStep2ControllerActions"], function() {
    var controller = require("SettingsModule/userfrmPreferencesResetStep2Controller");
    var controllerActions = ["SettingsModule/frmPreferencesResetStep2ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
