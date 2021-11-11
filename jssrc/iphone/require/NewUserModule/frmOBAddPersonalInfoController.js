define("NewUserModule/userfrmOBAddPersonalInfoController", {
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.flxEnter.onClick = this.onSelectManually;
        this.view.customHeader.flxBack.onClick = this.onBack;
        this.view.customHeader.btnRight.onClick = this.onClose;
        this.view.flxScan.onClick = this.onClickScanCard;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    onClose: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.onClose();
    },
    onClickScanCard: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        //this.getCurrentAddress();
        NUOMod.presentationController.getUserCurrentAddress();
        NUOMod.presentationController.isOCRScanSelected = "true";
    },
    onSelectManually: function() {
        var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        //this.getCurrentAddress();
        NUOMod.presentationController.isOCRScanSelected = "false";
        NUOMod.presentationController.navOnClickManuallySelected();
        //NUOMod.presentationController.commonFunctionForNavigation("frmOBEditFirstLastName");
    },
    bindGenericError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
    getCurrentAddress: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        if (NUOMod.presentationController.userPersonalInfo !== "true") {
            NUOMod.presentationController.getUserCurrentAddress();
        } else {
            kony.print("user already entered address");
        }
    }
});
define("NewUserModule/frmOBAddPersonalInfoControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_jf0e6933af72420a8b122beccbbfee1a: function AS_Form_jf0e6933af72420a8b122beccbbfee1a(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a603c4c4379343da898e690844202ddd: function AS_Form_a603c4c4379343da898e690844202ddd(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e93a61ff119b47f48c5e4c34647e1762: function AS_BarButtonItem_e93a61ff119b47f48c5e4c34647e1762(eventobject) {
        var self = this;
        this.onClose();
    }
});
define("NewUserModule/frmOBAddPersonalInfoController", ["NewUserModule/userfrmOBAddPersonalInfoController", "NewUserModule/frmOBAddPersonalInfoControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBAddPersonalInfoController");
    var controllerActions = ["NewUserModule/frmOBAddPersonalInfoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
