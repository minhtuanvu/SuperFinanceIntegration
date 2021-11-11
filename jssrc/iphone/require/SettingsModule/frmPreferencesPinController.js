define("SettingsModule/userfrmPreferencesPinController", {
    timerCounter: 0,
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
        this.showPopUpMsg();
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
        this.view.btnSetAsDefault.onClick = this.btnSetAsDefaultOnClick;
        this.view.btnChangePin.onClick = this.btnChangePinOnClick;
    },
    showPopUpMsg: function() {
        var navManager = applicationManager.getNavigationManager();
        var msgData = navManager.getCustomInfo("frmPreferencesPin");
        if ((msgData.popUpMsg !== null) && (msgData.popUpMsg !== "")) {
            var scopeObj = this;
            applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj, msgData.popUpMsg);
        }
        msgData.popUpMsg = "";
        navManager.setCustomInfo("frmPreferencesPin", msgData);
    },
    btnChangePinOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesResetStep1");
    },
    btnSetAsDefaultOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.setPinflag(true);
        authMod.presentationController.setDefaultMode("pin");
        var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        var tempData = settingsModule.presentationController.getAuthModeData();
        settingsModule.presentationController.getDevDetails();
        tempData.popUpMsg = kony.i18n.getLocalizedString("kony.mb.PIN.is.set.as.Default.Login");
        navManager.setCustomInfo("frmPreferencesDefaultLogin", tempData);
        settingsModule.presentationController.commonFunctionForNavigation("frmPreferencesDefaultLogin");
    },
    bindViewSuccess: function(msg) {
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    }
});
define("SettingsModule/frmPreferencesPinControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_gf52ca5c722d41fe88f14b4b47d48f36: function AS_Form_gf52ca5c722d41fe88f14b4b47d48f36(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_c190f3ecf6be4cfd8301956db38dc03a: function AS_BarButtonItem_c190f3ecf6be4cfd8301956db38dc03a(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    }
});
define("SettingsModule/frmPreferencesPinController", ["SettingsModule/userfrmPreferencesPinController", "SettingsModule/frmPreferencesPinControllerActions"], function() {
    var controller = require("SettingsModule/userfrmPreferencesPinController");
    var controllerActions = ["SettingsModule/frmPreferencesPinControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
