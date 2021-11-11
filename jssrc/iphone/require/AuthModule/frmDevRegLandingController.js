define("AuthModule/userfrmDevRegLandingController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else this.view.flxHeader.isVisible = false;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.view.btnNoThanks.onClick = this.onNoThanksClick.bind(this);
        this.setDetails();
    },
    onNoThanksClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.defaultLoginToAccounts();
        authMode.presentationController.setDeviceRegisterflag(false);
    },
    setDetails: function() {
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var Phoneno = authMode.presentationController.getMobileNo();
        this.view.lblMobNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(Phoneno);
        var userEmail = authMode.presentationController.getEmail();
        this.view.lblEmailIdValue.text = applicationManager.getDataProcessorUtility().maskAccountEmail(userEmail);
    }
});
define("AuthModule/frmDevRegLandingControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_e4c5558cfcbd426daa54c7a7e3a64852: function AS_Button_e4c5558cfcbd426daa54c7a7e3a64852(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmDevRegSecCode");
    },
    AS_Form_edc932272eae4b4d8b357d4bf53d518f: function AS_Form_edc932272eae4b4d8b357d4bf53d518f(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_dcf023c0b2754db8929b53a224e6e948: function AS_Form_dcf023c0b2754db8929b53a224e6e948(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("AuthModule/frmDevRegLandingController", ["AuthModule/userfrmDevRegLandingController", "AuthModule/frmDevRegLandingControllerActions"], function() {
    var controller = require("AuthModule/userfrmDevRegLandingController");
    var controllerActions = ["AuthModule/frmDevRegLandingControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
