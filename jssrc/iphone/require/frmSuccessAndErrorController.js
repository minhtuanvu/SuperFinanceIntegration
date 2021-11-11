define("userfrmSuccessAndErrorController", {
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.flxSuccess.isVisible = false;
        this.view.flxError.isVisible = true;
        this.setFlowActions();
    },
    setFlowActions: function() {
        var scope = this;
        this.view.flxError.btnTryAgain.onClick = function() {
            var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMod.presentationController.onLogout();
        };
    }
});
define("frmSuccessAndErrorControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_g7a4ac510d724900962ab8a7a740cd6d: function AS_FlexContainer_g7a4ac510d724900962ab8a7a740cd6d(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmForgotMain");
    },
    AS_Form_db74225001ca465f83574b896a9af2c4: function AS_Form_db74225001ca465f83574b896a9af2c4(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("frmSuccessAndErrorController", ["userfrmSuccessAndErrorController", "frmSuccessAndErrorControllerActions"], function() {
    var controller = require("userfrmSuccessAndErrorController");
    var controllerActions = ["frmSuccessAndErrorControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
