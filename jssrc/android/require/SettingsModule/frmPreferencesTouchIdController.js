define("SettingsModule/userfrmPreferencesTouchIdController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.lblNote.text = kony.i18n.getLocalizedString("kony.mb.preferences.WouldYouLikeToUseTouchIdToLoginUsingYourBiometricsInsteadOfEnteringYourUsernameAndPassword?");
        } else {
            this.view.flxHeader.isVisible = true;
            this.view.lblNote.text = kony.i18n.getLocalizedString("kony.mb.preferences.UseDeviceBiometrics");
        }
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
        this.view.btnSetAsDefault.onClick = this.setTouchIdDefaultMode;
    },
    setTouchIdDefaultMode: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.setBiometricCredentials();
        authMod.presentationController.setTouchIdflag(true);
        authMod.presentationController.setDefaultMode("touchid");
        var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsModule.presentationController.getDevDetails();
        var tempData = settingsModule.presentationController.getAuthModeData();
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (isIphone) tempData.popUpMsg = kony.i18n.getLocalizedString("kony.mb.Touch.Id.is.set.a.Default.Login");
        else tempData.popUpMsg = kony.i18n.getLocalizedString("kony.mb.devReg.defaultSignInChanged");
        navManager.setCustomInfo("frmPreferencesDefaultLogin", tempData);
        settingsModule.presentationController.commonFunctionForNavigation("frmPreferencesDefaultLogin");
    }
});
define("SettingsModule/frmPreferencesTouchIdControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_cba77b2ee45b4ed0a03f30d88de63afd: function AS_Form_cba77b2ee45b4ed0a03f30d88de63afd(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_b6a38b969b7941d09eb9dfeada81baf1: function AS_BarButtonItem_b6a38b969b7941d09eb9dfeada81baf1(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    }
});
define("SettingsModule/frmPreferencesTouchIdController", ["SettingsModule/userfrmPreferencesTouchIdController", "SettingsModule/frmPreferencesTouchIdControllerActions"], function() {
    var controller = require("SettingsModule/userfrmPreferencesTouchIdController");
    var controllerActions = ["SettingsModule/frmPreferencesTouchIdControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
