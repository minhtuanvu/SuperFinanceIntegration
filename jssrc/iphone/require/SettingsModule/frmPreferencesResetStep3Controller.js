define("SettingsModule/userfrmPreferencesResetStep3Controller", {
    keypadString: '',
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    showPinCode: function() {
        this.view.flxPopup.setVisibility(false);
        this.updateInputBullets();
        this.initActions();
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
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
        var updatedPin = navManager.getCustomInfo("frmPreferencesResetStep3");
        if (this.keypadString === updatedPin) {
            var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMode.presentationController.updatePin(this.keypadString);
        } else {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.Please.enter.a.valild.pin"), this.clearKeyPadString);
        }
    },
    clearKeyPadString: function() {
        for (var i = 0; i < 6; i++) {
            this.clearKeypadChar();
        }
    }
});
define("SettingsModule/frmPreferencesResetStep3ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_cbca7fa4ea4c482da52da00d7d8d00b0: function AS_Button_cbca7fa4ea4c482da52da00d7d8d00b0(eventobject) {
        var self = this;
        this.btnNextOnClick();
    },
    AS_Form_ca0b4da517394083a6988240361274b7: function AS_Form_ca0b4da517394083a6988240361274b7(eventobject) {
        var self = this;
        this.showPinCode();
    },
    AS_BarButtonItem_if9c3b449fe2450389d732cfc7e69a88: function AS_BarButtonItem_if9c3b449fe2450389d732cfc7e69a88(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesPin");
    },
    AS_Button_d90c231c96274431bcb3c308285cf472: function AS_Button_d90c231c96274431bcb3c308285cf472(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_b36985193eb64bfb9694fa7754d839a4: function AS_Button_b36985193eb64bfb9694fa7754d839a4(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_da11392a141140f79141bbc2b0d257d9: function AS_Button_da11392a141140f79141bbc2b0d257d9(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_g065faad1d21471f8584f80eff44d653: function AS_Button_g065faad1d21471f8584f80eff44d653(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_c37de76dc9184fd3a72bf0a7ea263c16: function AS_Button_c37de76dc9184fd3a72bf0a7ea263c16(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_fca8ad19565547099a9dc695e03da722: function AS_Button_fca8ad19565547099a9dc695e03da722(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_cb235bf59bac4167b1a58772ec25f71a: function AS_Button_cb235bf59bac4167b1a58772ec25f71a(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_b9f5f3a84e2f489d93e29380a386f801: function AS_Button_b9f5f3a84e2f489d93e29380a386f801(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_ebbafb3c5f6645cea0c08b363f7cce6e: function AS_Button_ebbafb3c5f6645cea0c08b363f7cce6e(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_de09c4c286284462be18b2891399c49a: function AS_Button_de09c4c286284462be18b2891399c49a(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_bb468d28339b40e7a22887a2bb780ac8: function AS_Image_bb468d28339b40e7a22887a2bb780ac8(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("SettingsModule/frmPreferencesResetStep3Controller", ["SettingsModule/userfrmPreferencesResetStep3Controller", "SettingsModule/frmPreferencesResetStep3ControllerActions"], function() {
    var controller = require("SettingsModule/userfrmPreferencesResetStep3Controller");
    var controllerActions = ["SettingsModule/frmPreferencesResetStep3ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
