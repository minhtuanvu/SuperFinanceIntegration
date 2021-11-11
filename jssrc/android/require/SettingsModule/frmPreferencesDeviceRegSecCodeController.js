define("SettingsModule/userfrmPreferencesDeviceRegSecCodeController", {
    keypadString: '',
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxPopup.setVisibility(false);
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.updateInputBullets();
        this.initActions();
        this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnVerify.setEnabled(false);
        this.clearKeyPadString();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
        this.view.customHeader.btnRight.onClick = function() {
            var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
        };
        this.view.btnVerify.onClick = this.btnVerifyOnClick;
        this.view.btnReSend.onClick = function() {};
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
            this.view.btnVerify.skin = "sknBtn0095e426pxEnabled";
            this.view.btnVerify.setEnabled(true);
        } else {
            this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnVerify.setEnabled(false);
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
        this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnVerify.setEnabled(false);
    },
    btnVerifyOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var settings = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settings.presentationController.updateDeviceRegistration();
    },
    bindGenericError: function(errorMsg) {
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    clearKeyPadString: function() {
        for (var i = 0; i < 6; i++) {
            this.clearKeypadChar();
        }
    }
});
define("SettingsModule/frmPreferencesDeviceRegSecCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_afd2ee5992794bb4879f51bf17368b53: function AS_Form_afd2ee5992794bb4879f51bf17368b53(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_j88395090e5845d98e1cd9712afb8464: function AS_BarButtonItem_j88395090e5845d98e1cd9712afb8464(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    },
    AS_Button_abe2b0b1cb6d4ce7984ee66fac82585f: function AS_Button_abe2b0b1cb6d4ce7984ee66fac82585f(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_e3ccd88beccb4fa99b6419fd37f43c58: function AS_Button_e3ccd88beccb4fa99b6419fd37f43c58(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_fe6ffb5d1a534f94811ec5df93e8971e: function AS_Button_fe6ffb5d1a534f94811ec5df93e8971e(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_cf7df958813f4036a93cb7b7fda05933: function AS_Button_cf7df958813f4036a93cb7b7fda05933(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_d365b24c3e8e4859bd6d888338f7c6e3: function AS_Button_d365b24c3e8e4859bd6d888338f7c6e3(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_e158bf44166b42da9bfe811ab4c3ab58: function AS_Button_e158bf44166b42da9bfe811ab4c3ab58(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_ee2dcffa72f34eec9da8ec582cc167b8: function AS_Button_ee2dcffa72f34eec9da8ec582cc167b8(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_ff692473f32d4bff8eeffb8a1496f4bd: function AS_Button_ff692473f32d4bff8eeffb8a1496f4bd(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_e94cf1dbc4114ab6b337cf3793c55ad1: function AS_Button_e94cf1dbc4114ab6b337cf3793c55ad1(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_e8b2d03196ea4777a2836b5af707770d: function AS_Button_e8b2d03196ea4777a2836b5af707770d(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_fa1a31303f9341638faf98b51f0853de: function AS_Image_fa1a31303f9341638faf98b51f0853de(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("SettingsModule/frmPreferencesDeviceRegSecCodeController", ["SettingsModule/userfrmPreferencesDeviceRegSecCodeController", "SettingsModule/frmPreferencesDeviceRegSecCodeControllerActions"], function() {
    var controller = require("SettingsModule/userfrmPreferencesDeviceRegSecCodeController");
    var controllerActions = ["SettingsModule/frmPreferencesDeviceRegSecCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
