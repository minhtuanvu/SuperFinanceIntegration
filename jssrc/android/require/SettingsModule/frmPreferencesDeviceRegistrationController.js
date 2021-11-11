define("SettingsModule/userfrmPreferencesDeviceRegistrationController", {
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
        var navManager = applicationManager.getNavigationManager();
        var status = navManager.getCustomInfo("frmPreferencesDeviceRegistration");
        if (status.isRememberMeOn === false) {
            this.view.lblRegisterDevice2.text = kony.i18n.getLocalizedString("kony.mb.preferences.DeviceRegistrationError");
            this.view.flxBtn.setVisibility(false);
            this.view.lblRegisterDevice3.setVisibility(false);
        } else {
            this.view.lblRegisterDevice2.text = kony.i18n.getLocalizedString("kony.mb.preferences.ThisDeviceIsNotYetRegisteredForMobileBankingPeriod");
            this.view.flxBtn.setVisibility(true);
            this.view.lblRegisterDevice3.setVisibility(true);
        }
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var deviceManager = applicationManager.getDeviceUtilManager();
        deviceManager.detectDynamicInstrumentation();
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.btnRight.onClick = function() {
            var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
        };
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
        this.view.btnRegisterDevice.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var settings = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settings.presentationController.updateDeviceRegistration();
        };
    }
});
define("SettingsModule/frmPreferencesDeviceRegistrationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d40fc79f89714cf5a8c643fa005d1fc0: function AS_Form_d40fc79f89714cf5a8c643fa005d1fc0(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e73758056d584afdb83c0e305e6a88f7: function AS_BarButtonItem_e73758056d584afdb83c0e305e6a88f7(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    }
});
define("SettingsModule/frmPreferencesDeviceRegistrationController", ["SettingsModule/userfrmPreferencesDeviceRegistrationController", "SettingsModule/frmPreferencesDeviceRegistrationControllerActions"], function() {
    var controller = require("SettingsModule/userfrmPreferencesDeviceRegistrationController");
    var controllerActions = ["SettingsModule/frmPreferencesDeviceRegistrationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
