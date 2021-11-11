define("SettingsModule/userfrmProfileChangeUsernameController", {
    onNavigate: function(param) {
        var self = this;
        if (param === "password") {
            this.view.customHeader.lblLocateUs.text = "Change Password";
            this.view.title = "Change Password";
        } else if (param === "username") {
            this.view.customHeader.lblLocateUs.text = "Change Username";
            this.view.title = "Change Username";
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
        this.onNavigate("username");
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setFlowActions: function() {
        var scopeObj = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
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
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    },
    navToSecurityCode: function() {
        if (this.view.customHeader.lblLocateUs.text === "Change Password") {} else {
            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo('frmProfileSecurityCode', 'username');
            var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmProfileSecurityCode");
        }
    },
    updateUserName: function() {
        var navManager = applicationManager.getNavigationManager();
        var userName = navManager.getCustomInfo('frmProfileChangeUsername');
        this.view.lblSecurityCheck.text = "Hi " + userName;
    }
});
define("SettingsModule/frmProfileChangeUsernameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e86c71fa24894f359d56099abc697d18: function AS_Form_e86c71fa24894f359d56099abc697d18(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i1902f3db3994f53afc8df1ff6e81309: function AS_Form_i1902f3db3994f53afc8df1ff6e81309(eventobject) {
        var self = this;
        this.frmProfileChangePassword();
    },
    AS_BarButtonItem_de113e8df31c4efb8e755a2b3a2a65a1: function AS_BarButtonItem_de113e8df31c4efb8e755a2b3a2a65a1(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    }
});
define("SettingsModule/frmProfileChangeUsernameController", ["SettingsModule/userfrmProfileChangeUsernameController", "SettingsModule/frmProfileChangeUsernameControllerActions"], function() {
    var controller = require("SettingsModule/userfrmProfileChangeUsernameController");
    var controllerActions = ["SettingsModule/frmProfileChangeUsernameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
