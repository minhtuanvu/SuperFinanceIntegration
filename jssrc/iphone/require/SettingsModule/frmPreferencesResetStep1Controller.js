define("SettingsModule/userfrmPreferencesResetStep1Controller", {
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
        var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMode.presentationController.verifyCurrPin(this.keypadString);
    },
    clearKeyPadString: function() {
        for (var i = 0; i < 6; i++) {
            this.clearKeypadChar();
        }
    }
});
define("SettingsModule/frmPreferencesResetStep1ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_d70217be1a7742cfb753ee039188d7bc: function AS_Button_d70217be1a7742cfb753ee039188d7bc(eventobject) {
        var self = this;
        this.btnNextOnClick();
    },
    AS_Form_d980899d900c47bdab62f2f93da3c9ea: function AS_Form_d980899d900c47bdab62f2f93da3c9ea(eventobject) {
        var self = this;
        this.showPinCode();
    },
    AS_Button_e5489887b3d747c5a222911a3faacef1: function AS_Button_e5489887b3d747c5a222911a3faacef1(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_i52e6ab31ae0449886bd6003a242abac: function AS_Button_i52e6ab31ae0449886bd6003a242abac(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_icaa641e35ff4331ac3d3e2fe0b25792: function AS_Button_icaa641e35ff4331ac3d3e2fe0b25792(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_df0c99aac45c4edbb8bc9ba09b09315d: function AS_Button_df0c99aac45c4edbb8bc9ba09b09315d(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_dbfb460e3b0f4fda81546232999b2fe5: function AS_Button_dbfb460e3b0f4fda81546232999b2fe5(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_d844e2366d8748998054dfc1cd9bc119: function AS_Button_d844e2366d8748998054dfc1cd9bc119(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_cf7526afbb5446a28e56384c5a5d2f46: function AS_Button_cf7526afbb5446a28e56384c5a5d2f46(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_f5053993586346bf9c02928d147f0a00: function AS_Button_f5053993586346bf9c02928d147f0a00(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_gc9e12e0e082494d8f7cdaeacf965da2: function AS_Button_gc9e12e0e082494d8f7cdaeacf965da2(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_df3cb6b40a2f4598826bac66d6223963: function AS_Button_df3cb6b40a2f4598826bac66d6223963(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_a139af7b286647cc952913a8b3e9c78c: function AS_Image_a139af7b286647cc952913a8b3e9c78c(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("SettingsModule/frmPreferencesResetStep1Controller", ["SettingsModule/userfrmPreferencesResetStep1Controller", "SettingsModule/frmPreferencesResetStep1ControllerActions"], function() {
    var controller = require("SettingsModule/userfrmPreferencesResetStep1Controller");
    var controllerActions = ["SettingsModule/frmPreferencesResetStep1ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
