define("SettingsModule/userfrmProfileChangePasswordController", {
    onNavigate: function(param) {
        var self = this;
        if (param === "password") {
            this.view.customHeader.lblLocateUs.text = "CHANGE PASSWORD";
            this.view.title = "CHANGE PASSWORD";
        } else if (param === "username") {
            this.view.customHeader.lblLocateUs.text = "CHANGE USERNAME";
            this.view.title = "CHANGE USERNAME";
        }
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmProfileChangePassword: function() {
        this.setFlowActions();
        this.setPreshowData();
        this.updateUserName();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setFlowActions: function() {
        var scopeObj = this;
        this.view.customHeader.flxBack.onClick = function() {
            scopeObj.navToSettings();
        };
        this.view.flxSecurityCode.onClick = function() {
            scopeObj.navToSecurityCode();
        };
        this.view.customHeader.btnRight.onClick = function() {
            var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
        };
    },
    setPreshowData: function() {
        this.view.customHeader.flxBack.isVisible = true;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.flxChangePasswordMain.top = "56dp";
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.flxChangePasswordMain.top = "0dp";
        }
    },
    navToSettings: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    navToSecurityCode: function() {
        var navManager = applicationManager.getNavigationManager();
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        if (this.view.customHeader.lblLocateUs.text === "CHANGE PASSWORD" || this.view.customHeader.lblLocateUs.text === "Change Password") {
            navManager.setCustomInfo('frmProfileSecurityCode', 'password');
            settingsMod.presentationController.commonFunctionForNavigation("frmProfileSecurityCode");
        } else {
            navManager.setCustomInfo('frmProfileSecurityCode', 'username');
            settingsMod.presentationController.commonFunctionForNavigation("frmProfileSecurityCode");
        }
    },
    updateUserName: function() {
        var navManager = applicationManager.getNavigationManager();
        var userName = navManager.getCustomInfo('frmProfileChangePassword');
        this.view.lblSecurityCheck.text = "Hi! " + userName;
    }
});
define("SettingsModule/frmProfileChangePasswordControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_aa551331175646db97fc236170a8c44c: function AS_Form_aa551331175646db97fc236170a8c44c(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_h887e5a31486436885548d5189565300: function AS_Form_h887e5a31486436885548d5189565300(eventobject) {
        var self = this;
        this.frmProfileChangePassword();
    },
    AS_BarButtonItem_d8dbb4b5cb114269825c215df19140ba: function AS_BarButtonItem_d8dbb4b5cb114269825c215df19140ba(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmLogin");
    }
});
define("SettingsModule/frmProfileChangePasswordController", ["SettingsModule/userfrmProfileChangePasswordController", "SettingsModule/frmProfileChangePasswordControllerActions"], function() {
    var controller = require("SettingsModule/userfrmProfileChangePasswordController");
    var controllerActions = ["SettingsModule/frmProfileChangePasswordControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
