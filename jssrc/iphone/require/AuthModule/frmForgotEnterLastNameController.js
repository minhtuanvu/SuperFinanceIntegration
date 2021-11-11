define("AuthModule/userfrmForgotEnterLastNameController", {
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.txtNewPassword.setFocus(true);
        this.view.flxPopup.setVisibility(false);
        this.initActions();
        this.renderTitleBar();
        this.handleData();
        this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.ForgotLoginCredentials");
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.title = kony.i18n.getLocalizedString("kony.mb.ForgotLoginCredentials");
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.view.txtNewPassword.setFocus(true);
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
    handleData: function() {
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var forgotObj = authModule.presentationController.getForgotObjectForView();
        if (!forgotObj.userlastname) {
            this.view.txtNewPassword.text = "";
            this.view.btnUpdatePassword.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnUpdatePassword.setEnabled(false);
        }
    },
    initActions: function() {
        this.view.btnUpdatePassword.onClick = this.validateUserName;
        this.view.customHeader.flxBack.onClick = this.goBack;
        this.view.customHeader.btnRight.onClick = this.onCancel;
        this.view.txtNewPassword.onTextChange = this.onLastNameTextChange;
    },
    onLastNameTextChange: function() {
        if (this.view.txtNewPassword.text === "") {
            this.view.btnUpdatePassword.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnUpdatePassword.setEnabled(false);
        } else {
            this.view.btnUpdatePassword.skin = "sknBtn0095e426pxEnabled";
            this.view.btnUpdatePassword.setEnabled(true);
        }
    },
    validateUserName: function() {
        var lastName = this.view.txtNewPassword.text;
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToSSN(lastName);
    },
    bindViewError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
    goBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.clearStack();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToLogin();
    },
    onCancel: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.clearStack();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToLogin();
    }
});
define("AuthModule/frmForgotEnterLastNameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_bca535d933294115b6f52552a731b32a: function AS_Button_bca535d933294115b6f52552a731b32a(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_FlexContainer_b36153b67ba942a2aae35f1f9ef4d000: function AS_FlexContainer_b36153b67ba942a2aae35f1f9ef4d000(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_da8197074f2e43f1a1d0e20dfde5dd69: function AS_Form_da8197074f2e43f1a1d0e20dfde5dd69(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ca1ba59b895d46689d370aeec4845dd6: function AS_Form_ca1ba59b895d46689d370aeec4845dd6(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_a7abc4c2e9834f4a8f05b73576ec5cfa: function AS_BarButtonItem_a7abc4c2e9834f4a8f05b73576ec5cfa(eventobject) {
        var self = this;
        var navManager = applicationManager.getNavigationManager();
        navManager.clearStack();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToLogin();
    },
    AS_BarButtonItem_bb01710ab2274df68dff399556ff4159: function AS_BarButtonItem_bb01710ab2274df68dff399556ff4159(eventobject) {
        var self = this;
        this.onCancel();
    }
});
define("AuthModule/frmForgotEnterLastNameController", ["AuthModule/userfrmForgotEnterLastNameController", "AuthModule/frmForgotEnterLastNameControllerActions"], function() {
    var controller = require("AuthModule/userfrmForgotEnterLastNameController");
    var controllerActions = ["AuthModule/frmForgotEnterLastNameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
