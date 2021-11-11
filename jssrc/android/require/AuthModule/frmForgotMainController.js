define("AuthModule/userfrmForgotMainController", {
    onNavigate: function(obj) {},
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxPopup.setVisibility(false);
        this.initActions();
        this.setUserName();
        this.renderTitleBar();
        this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.ForgotLoginCredentials");
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.title = kony.i18n.getLocalizedString("kony.mb.ForgotLoginCredentials");
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    renderTitleBar: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (!isIphone) {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    },
    initActions: function() {
        this.view.customHeader.btnRight.onClick = this.onCancel;
        this.view.customHeader.flxBack.onClick = this.goBack;
        this.view.flxSelectCVV.onClick = this.loginWithUsername;
        this.view.flxSelectSecurityCode.onClick = this.navigateToMFAScreen;
        this.view.lblUsernameListBox.onSelection = this.setUser;
    },
    setUserName: function() {
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var forgotObj = authModule.presentationController.getForgotObjectForView();
        // var userName = forgotObj.UserName;
        var userlist = authModule.presentationController.userList;
        this.view.rtxForgotInfo.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.forgot.wefoundyouwith") + "</br> " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.username") + " " + userlist[0][0] + "</b>";
        this.view.rtxSelectCVV.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.forgot.loginas") + " " + userlist[0][0];
        this.view.flxUsernameList.setVisibility(true);
        this.view.lblUsernameListBox.onSelection = this.setUser;
        this.view.lblUsernameListBox.masterData = userlist;
        this.view.lblUsernameListBox.selectedKey = this.view.lblUsernameListBox.masterData[0][0];
    },
    setUser: function() {
        this.view.rtxForgotInfo.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.forgot.wefoundyouwith") + "</br> " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.username") + " " + this.view.lblUsernameListBox.selectedKeyValue[0] + "</b>";
        this.view.rtxSelectCVV.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.forgot.loginas") + " " + this.view.lblUsernameListBox.selectedKeyValue[0];
    },
    goBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onCancel: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.clearStack();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToLogin();
    },
    loginWithUsername: function() {
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var forgotObj = authModule.presentationController.getForgotObjectForView();
        var userName = this.view.lblUsernameListBox.selectedKeyValue[0];
        authModule.presentationController.navigateToLogin(userName);
    },
    navigateToResetPassword: function() {
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.commonFunctionForNavigation("frmForgotSelectMethod");
    },
    navigateToMFAScreen: function() {
        var selectedUserName = this.view.lblUsernameListBox.selectedKeyValue;
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToMFA(selectedUserName);
    }
});
define("AuthModule/frmForgotMainControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_e0bc99d1d27441c2b6966a1951462ea1: function AS_FlexContainer_e0bc99d1d27441c2b6966a1951462ea1(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_c3bb9f3b2d0c4bcc9c94fef6b64cc1b1: function AS_Form_c3bb9f3b2d0c4bcc9c94fef6b64cc1b1(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e69bee8d00d0418ca365257a1fa7d2e8: function AS_Form_e69bee8d00d0418ca365257a1fa7d2e8(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_g319e0839beb441083d27d4b6f63453f: function AS_BarButtonItem_g319e0839beb441083d27d4b6f63453f(eventobject) {
        var self = this;
        this.onCancel();
    }
});
define("AuthModule/frmForgotMainController", ["AuthModule/userfrmForgotMainController", "AuthModule/frmForgotMainControllerActions"], function() {
    var controller = require("AuthModule/userfrmForgotMainController");
    var controllerActions = ["AuthModule/frmForgotMainControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
