define("SettingsModule/userfrmProfileChangeAndUpdatePasswordController", {
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.setFlowActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getDeviceUtilManager().detectDynamicInstrumentation();
        this.setFormUI();
    },
    setFormUI: function() {
        let scopeObj = this;
        var obj = applicationManager.getNavigationManager().getCustomInfo("frmProfileChangeAndUpdatePassword");
        if (obj.errorMessage) {
            scopeObj.view.updatePassword.showErrorMessage(obj.errorMessage);
        }
    },
    setFlowActions: function() {
        var scopeObj = this;
        scopeObj.view.updatePassword.onCancel = function() {
            let settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
        };
        scopeObj.view.updatePassword.onSuccessCallback = function(response) {
            scopeObj.setErrorMessageAndLogout(kony.i18n.getLocalizedString('kony.mb.profile.changePassword'));
        };
        scopeObj.view.updatePassword.onFailureCallback = function(response) {
            scopeObj.setErrorMessageAndLogout(response.errorMessage);
        };
    },
    setErrorMessageAndLogout: function(msg) {
        if (msg) {
            let loginData = applicationManager.getNavigationManager().getCustomInfo("frmLoginToast");
            loginData = loginData ? loginData : {};
            loginData.postupdateusernameandpassword = msg;
            applicationManager.getNavigationManager().setCustomInfo("frmLoginToast", loginData);
        }
        const authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.passwordUpdateLogout();
    },
});
define("SettingsModule/frmProfileChangeAndUpdatePasswordControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f961560a878c4b2fa0d1e06a1d78b14d: function AS_Form_f961560a878c4b2fa0d1e06a1d78b14d(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e49a045d18cc4c728064ed4eff072799: function AS_Form_e49a045d18cc4c728064ed4eff072799(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_g3fcd8181b0b4648801861e99b7772b0: function AS_BarButtonItem_g3fcd8181b0b4648801861e99b7772b0(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    }
});
define("SettingsModule/frmProfileChangeAndUpdatePasswordController", ["SettingsModule/userfrmProfileChangeAndUpdatePasswordController", "SettingsModule/frmProfileChangeAndUpdatePasswordControllerActions"], function() {
    var controller = require("SettingsModule/userfrmProfileChangeAndUpdatePasswordController");
    var controllerActions = ["SettingsModule/frmProfileChangeAndUpdatePasswordControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
