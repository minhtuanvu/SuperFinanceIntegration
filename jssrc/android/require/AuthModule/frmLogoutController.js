define("AuthModule/userfrmLogoutController", {
    //Type your controller code here 
    init: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(scope, "YES", currentForm);
        this.view.btnLogIn.onClick = scope.signInOnClick;
    },
    preshow: function() {
        if (scope_AuthPresenter.isLogoutScreen && !scope_AuthPresenter.isPasswordUpdated) {
            this.view.flxSuccess.setVisibility(true);
            this.view.flxeBanking.setVisibility(false);
            this.view.flxUpdatePassword.setVisibility(false);
        } else if (!scope_AuthPresenter.isLogoutScreen && !scope_AuthPresenter.isPasswordUpdated) {
            this.view.flxSuccess.setVisibility(false);
            this.view.flxeBanking.setVisibility(true);
            this.view.flxUpdatePassword.setVisibility(false);
        } else {
            this.view.flxSuccess.setVisibility(false);
            this.view.flxeBanking.setVisibility(false);
            this.view.flxUpdatePassword.setVisibility(true);
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    signInOnClick: function() {
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.signInFromLogoutScreen();
    }
});
define("AuthModule/frmLogoutControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f824c96d565f4432b2a24d5744f1ee97: function AS_Form_f824c96d565f4432b2a24d5744f1ee97(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_g88f9761a6fd496490fea878d48dafc2: function AS_Form_g88f9761a6fd496490fea878d48dafc2(eventobject) {
        var self = this;
        this.preshow();
    }
});
define("AuthModule/frmLogoutController", ["AuthModule/userfrmLogoutController", "AuthModule/frmLogoutControllerActions"], function() {
    var controller = require("AuthModule/userfrmLogoutController");
    var controllerActions = ["AuthModule/frmLogoutControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
