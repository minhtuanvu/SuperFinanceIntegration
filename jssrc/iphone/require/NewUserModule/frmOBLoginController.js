define("NewUserModule/userfrmOBLoginController", {
    timerCounter: 0,
    init: function() {
        var FormValidator = require("FormValidatorManager")
        this.fv = new FormValidator(2);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.fv.submissionView(this.view.btnLogIn);
        this.view.tbxUsername.setFocus(true);
        this.view.flxPopup.setVisibility(false);
        this.view.tbxUsername.text = "";
        this.view.tbxPassword.text = "";
        this.view.tbxUsername.onTextChange = this.validateUsername;
        this.view.tbxPassword.onTextChange = this.validatePassword;
        this.view.btnCancel.onClick = this.onCancel;
        this.view.btnLogIn.onClick = this.onLogin;
        this.view.imgPwdVisiblityToggle.onTouchEnd = this.maskUnmaskText;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    validateUsername: function() {
        var text = this.view.tbxUsername.text;
        this.fv.checkAndUpdateStatusForNull(0, text);
    },
    validatePassword: function() {
        var text = this.view.tbxPassword.text;
        this.fv.checkAndUpdateStatusForNull(1, text);
    },
    onCancel: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.clearStack();
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    maskUnmaskText: function() {
        if (this.view.imgPwdVisiblityToggle.src === "viewactive.png") {
            this.view.tbxPassword.secureTextEntry = false;
            this.view.imgPwdVisiblityToggle.src = "viewicon.png";
            this.view.forceLayout();
        } else {
            this.view.tbxPassword.secureTextEntry = true;
            this.view.imgPwdVisiblityToggle.src = "viewactive.png";
            this.view.forceLayout();
        }
    },
    onLogin: function() {
        var data = {
            "username": this.view.tbxUsername.text,
            "password": this.view.tbxPassword.text
        };
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.NUOLogin(data, this);
    },
    bindGenericError: function(msg) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
});
define("NewUserModule/frmOBLoginControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_h7fac806874f4ed782bcfd56778f4612: function AS_FlexContainer_h7fac806874f4ed782bcfd56778f4612(eventobject) {
        var self = this;
        this.customAlertPopUpFlxCancelOnClick();
    },
    AS_Form_f6bb8a6b7f224d4cb54a9fd448b45245: function AS_Form_f6bb8a6b7f224d4cb54a9fd448b45245(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_g6901881d074452ea065024d657c48c5: function AS_Form_g6901881d074452ea065024d657c48c5(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_TextField_b1967963ee25426d98f8621042f23cdc: function AS_TextField_b1967963ee25426d98f8621042f23cdc(eventobject, changedtext) {
        var self = this;
        return self.resetSkinsOfUsernameAndPwd.call(this);
    },
    AS_TextField_afad49684c4846dbbc6d840c9f982402: function AS_TextField_afad49684c4846dbbc6d840c9f982402(eventobject, changedtext) {
        var self = this;
        return self.resetSkinsOfUsernameAndPwd.call(this);
    }
});
define("NewUserModule/frmOBLoginController", ["NewUserModule/userfrmOBLoginController", "NewUserModule/frmOBLoginControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBLoginController");
    var controllerActions = ["NewUserModule/frmOBLoginControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
