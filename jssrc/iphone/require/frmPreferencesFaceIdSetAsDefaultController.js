define("userfrmPreferencesFaceIdSetAsDefaultController", {
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
        //     	this.view.customHeader.btnRight.setVisibility(true);
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.btnSetAsDefault.onClick = this.btnSetAsDefaultOnClick;
        var navManager = applicationManager.getNavigationManager();
        var flags = navManager.getCustomInfo("frmPreferencesFaceIdSetAsDefault");
        if (flags) {
            if ((flags.popUpMsg !== null) && (flags.popUpMsg !== "")) {
                var scopeObj = this;
                applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj, flags.popUpMsg);
            }
            flags.popUpMsg = null;
            navManager.setCustomInfo("frmPreferencesFaceIdSetAsDefault", flags);
        }
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    btnSetAsDefaultOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.setBiometricCredentials();
        authMod.presentationController.setDefaultMode("faceid");
        var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsModule.presentationController.getDevDetails();
        var tempData = settingsModule.presentationController.getAuthModeData();
        tempData.popUpMsg = "Face ID is set as Default Login";
        navManager.setCustomInfo("frmPreferencesDefaultLogin", tempData);
        settingsModule.presentationController.commonFunctionForNavigation("frmPreferencesDefaultLogin");
    },
    imgbackAction: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    }
});
define("frmPreferencesFaceIdSetAsDefaultControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_ec9b39971536429a831590aba51fb5cd: function AS_FlexContainer_ec9b39971536429a831590aba51fb5cd(eventobject) {
        var self = this;
        this.imgbackAction();
    },
    AS_Form_d3fa4ca03faf434ba41e8c4e6b2b471b: function AS_Form_d3fa4ca03faf434ba41e8c4e6b2b471b(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ffa0b2b0b36149be9b04be4599a10a2a: function AS_Form_ffa0b2b0b36149be9b04be4599a10a2a(eventobject) {
        var self = this;
        this.faceIdPreShow();
    }
});
define("frmPreferencesFaceIdSetAsDefaultController", ["userfrmPreferencesFaceIdSetAsDefaultController", "frmPreferencesFaceIdSetAsDefaultControllerActions"], function() {
    var controller = require("userfrmPreferencesFaceIdSetAsDefaultController");
    var controllerActions = ["frmPreferencesFaceIdSetAsDefaultControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
