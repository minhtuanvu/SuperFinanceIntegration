define("AuthModule/userfrmDevRegFaceIdSetAsDefaultController", {
    //  timerCounter:0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    faceIdPreShow: function() {
        //     this.view.btnEnable.setVisibility(false);
        //     this.view.flxBottomContainer.setVisibility(true);
        //     this.view.flxSeperator.setVisibility(true);
        this.view.customHeader.btnRight.setVisibility(true);
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.btnSetAsDefault.onClick = this.btnSetAsDefaultOnClick;
        var navManager = applicationManager.getNavigationManager();
        var flags = navManager.getCustomInfo("frmDevRegFaceIdSetAsDefault");
        if (flags) {
            if ((flags.popUpMsg !== null) && (flags.popUpMsg !== "")) {
                var scopeObj = this;
                applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj, flags.popUpMsg);
            }
            flags.popUpMsg = null;
            navManager.setCustomInfo("frmDevRegFaceIdSetAsDefault", flags);
        }
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    btnSetAsDefaultOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.setBiometricCredentials();
        authMod.presentationController.setFaceIdflag(true);
        authMod.presentationController.setDefaultMode("faceid");
        var data = {
            loginMode: "faceid"
        };
        navManager.setCustomInfo("frmDefaultLogin", data);
        authMod.presentationController.commonFunctionForNavigation("frmDefaultLogin");
    },
    btnSkipOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.defaultLoginToAccounts();
    },
    imgbackAction: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    }
});
define("AuthModule/frmDevRegFaceIdSetAsDefaultControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_b8f47fab365d4c69b4e63c8c9b52c2b0: function AS_Button_b8f47fab365d4c69b4e63c8c9b52c2b0(eventobject) {
        var self = this;
        this.btnSkipOnClick();
    },
    AS_FlexContainer_eea0cf9717db4f99bb141bb87da0837a: function AS_FlexContainer_eea0cf9717db4f99bb141bb87da0837a(eventobject) {
        var self = this;
        this.imgbackAction();
    },
    AS_Form_ecbc5945aa214881a47b2201705d19f8: function AS_Form_ecbc5945aa214881a47b2201705d19f8(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a4cbd144122240c1aa23ab9d5b94f93a: function AS_Form_a4cbd144122240c1aa23ab9d5b94f93a(eventobject) {
        var self = this;
        return self.faceIdPreShow.call(this);
    },
    AS_BarButtonItem_db3c146492ee4b988cb4f589a9d6d9c7: function AS_BarButtonItem_db3c146492ee4b988cb4f589a9d6d9c7(eventobject) {
        var self = this;
        this.btnSkipOnClick();
    }
});
define("AuthModule/frmDevRegFaceIdSetAsDefaultController", ["AuthModule/userfrmDevRegFaceIdSetAsDefaultController", "AuthModule/frmDevRegFaceIdSetAsDefaultControllerActions"], function() {
    var controller = require("AuthModule/userfrmDevRegFaceIdSetAsDefaultController");
    var controllerActions = ["AuthModule/frmDevRegFaceIdSetAsDefaultControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
