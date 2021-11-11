define("SettingsModule/userfrmPreferencesFaceIdController", {
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
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
    },
    imgbackAction: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    }
});
define("SettingsModule/frmPreferencesFaceIdControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_b6edbc45eae343f984a06310395afc7c: function AS_FlexContainer_b6edbc45eae343f984a06310395afc7c(eventobject) {
        var self = this;
        this.imgbackAction();
    },
    AS_Form_f9df0bd8b1c2441eba83431c13d51cd3: function AS_Form_f9df0bd8b1c2441eba83431c13d51cd3(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_dd7bbc2eded0463eb4ecc411ad850af3: function AS_Form_dd7bbc2eded0463eb4ecc411ad850af3(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e5dcd0ea0a6248e586c76aa0902a57ec: function AS_BarButtonItem_e5dcd0ea0a6248e586c76aa0902a57ec(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    }
});
define("SettingsModule/frmPreferencesFaceIdController", ["SettingsModule/userfrmPreferencesFaceIdController", "SettingsModule/frmPreferencesFaceIdControllerActions"], function() {
    var controller = require("SettingsModule/userfrmPreferencesFaceIdController");
    var controllerActions = ["SettingsModule/frmPreferencesFaceIdControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
