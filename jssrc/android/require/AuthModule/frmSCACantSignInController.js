define("AuthModule/userfrmSCACantSignInController", {
    //Type your controller code here 
    preShow: function() {
        this.setFlowActions();
    },
    setFlowActions: function() {
        let scopeObj = this;
        this.view.cantSignIn.navigateToLogin = scopeObj.navigateToLogin;
        this.view.cantSignIn.activateProfile = scopeObj.activateProfile;
    },
    navigateToLogin: function() {
        let scopeObj = this;
        var navManager = applicationManager.getNavigationManager();
        navManager.clearStack();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToLogin();
    },
    activateProfile: function() {
        let scopeObj = this;
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.commonFunctionForNavigation("frmEnrollActivateProfile");
    }
});
define("AuthModule/frmSCACantSignInControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ad99787f85ec48329ae4d59e7c4696db: function AS_Form_ad99787f85ec48329ae4d59e7c4696db(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});
define("AuthModule/frmSCACantSignInController", ["AuthModule/userfrmSCACantSignInController", "AuthModule/frmSCACantSignInControllerActions"], function() {
    var controller = require("AuthModule/userfrmSCACantSignInController");
    var controllerActions = ["AuthModule/frmSCACantSignInControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
