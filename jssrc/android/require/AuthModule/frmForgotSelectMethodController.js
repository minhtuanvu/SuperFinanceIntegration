define("AuthModule/userfrmForgotSelectMethodController", {
    timerCounter: 0,
    onNavigate: function(obj) {},
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxPopup.setVisibility(false);
        this.setUserName();
        this.initActions();
        this.renderTitleBar();
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
        this.view.flxSelectCVV.onClick = this.onSelectCVV;
        this.view.flxSelectSecurityCode.onClick = this.onSelectSecurityCode;
        this.view.customHeader.flxBack.onClick = this.goBack;
        this.view.customHeader.btnRight.onClick = this.onCancel;
    },
    onSelectCVV: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToCVV();
    },
    onSelectSecurityCode: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.requestOTP();
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
    setUserName: function() {
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var forgotObj = authModule.presentationController.getForgotObjectForView();
        var userName = forgotObj.UserName;
        this.view.lblUserName.text = "Hi! " + userName;
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("AuthModule/frmForgotSelectMethodControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_bbb32a4fc1014614a96803915745ed14: function AS_Form_bbb32a4fc1014614a96803915745ed14(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_jbf0490456984f77ab0e3a39d7bda84f: function AS_Form_jbf0490456984f77ab0e3a39d7bda84f(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_f3154b51a48d4dc0b1ebf1131442dbb4: function AS_BarButtonItem_f3154b51a48d4dc0b1ebf1131442dbb4(eventobject) {
        var self = this;
        this.onCancel();
    }
});
define("AuthModule/frmForgotSelectMethodController", ["AuthModule/userfrmForgotSelectMethodController", "AuthModule/frmForgotSelectMethodControllerActions"], function() {
    var controller = require("AuthModule/userfrmForgotSelectMethodController");
    var controllerActions = ["AuthModule/frmForgotSelectMethodControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
