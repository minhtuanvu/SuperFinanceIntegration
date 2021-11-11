define("SettingsModule/userfrmPreferencesDeviceDeRegistrationController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scope = this;
        this.view.btnRegisterDevice.onClick = this.btnRegisterDeviceOnClick;
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
    },
    btnRegisterDeviceOnClick: function() {
        var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMode.presentationController.deRegisterDevice(this);
    }
});
define("SettingsModule/frmPreferencesDeviceDeRegistrationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b1b2c36c7a3b4bdd8e7ada4906095f44: function AS_Form_b1b2c36c7a3b4bdd8e7ada4906095f44(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_b38c8ac6ea2b4aee96a21fc7c4af916e: function AS_BarButtonItem_b38c8ac6ea2b4aee96a21fc7c4af916e(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    }
});
define("SettingsModule/frmPreferencesDeviceDeRegistrationController", ["SettingsModule/userfrmPreferencesDeviceDeRegistrationController", "SettingsModule/frmPreferencesDeviceDeRegistrationControllerActions"], function() {
    var controller = require("SettingsModule/userfrmPreferencesDeviceDeRegistrationController");
    var controllerActions = ["SettingsModule/frmPreferencesDeviceDeRegistrationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
