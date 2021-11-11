define("AuthModule/userfrmDevRegPinConfirmationController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.view.btnSetAsDefault.onClick = this.goToDefaultLogin;
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
    },
    showPopUpMsg: function() {
        var navManager = applicationManager.getNavigationManager();
        var msgData = navManager.getCustomInfo("frmDevRegPinConfirmation");
        if ((msgData.popUpMsg !== null) && (msgData.popUpMsg !== "")) {
            var scopeObj = this;
            applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj, msgData.popUpMsg);
        }
        msgData.popUpMsg = "";
        navManager.setCustomInfo("frmDevRegPinConfirmation", msgData);
    },
    goToDefaultLogin: function() {
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var navManager = applicationManager.getNavigationManager();
        authMod.presentationController.setPinflag(true);
        authMod.presentationController.setDefaultMode("pin");
        var data = {
            loginMode: "pin"
        };
        navManager.setCustomInfo("frmDefaultLogin", data);
        authMod.presentationController.commonFunctionForNavigation("frmDefaultLogin");
    },
    skipAction: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.defaultLoginToAccounts();
    }
});
define("AuthModule/frmDevRegPinConfirmationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_f944d9524f59433c88eae0bb6e738dd6: function AS_Button_f944d9524f59433c88eae0bb6e738dd6(eventobject) {
        var self = this;
        this.skipAction();
    },
    AS_Form_f4be0bb2efd246b883fd611c6e4ea1f6: function AS_Form_f4be0bb2efd246b883fd611c6e4ea1f6(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c6d13dfa91a04513b30dfbd26e1482ef: function AS_Form_c6d13dfa91a04513b30dfbd26e1482ef(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_f6153e8b70ab49bfbb8745464d42c03b: function AS_BarButtonItem_f6153e8b70ab49bfbb8745464d42c03b(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmTransfers");
    }
});
define("AuthModule/frmDevRegPinConfirmationController", ["AuthModule/userfrmDevRegPinConfirmationController", "AuthModule/frmDevRegPinConfirmationControllerActions"], function() {
    var controller = require("AuthModule/userfrmDevRegPinConfirmationController");
    var controllerActions = ["AuthModule/frmDevRegPinConfirmationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
