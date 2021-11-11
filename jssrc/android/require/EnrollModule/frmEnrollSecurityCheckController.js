define("EnrollModule/userfrmEnrollSecurityCheckController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmSecurityCheckPreShow: function() {
        this.setFlowActions();
        this.setPreshowData();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    setFlowActions: function() {
        var scopeObj = this;
        this.view.customHeader.flxBack.onClick = function() {
            scopeObj.navBack();
        };
        this.view.customHeader.btnRight.onClick = function() {
            scopeObj.onClickCancel();
        };
        this.view.flxCVV.onClick = function() {
            scopeObj.getAllCards();
            //       scopeObj.navToCVV();
        };
        this.view.flxSecurityCode.onClick = function() {
            scopeObj.triggerOTP();
        };
    },
    setPreshowData: function() {
        this.view.customHeader.flxBack.isVisible = true;
        this.view.customHeader.lblLocateUs.text = "Security Check";
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    },
    navBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onClickCancel: function() {
        var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.resetEnrollObj();
    },
    navToCVV: function() {
        var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmEnrollCVV");
    },
    navToSecurityCode: function() {
        var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmEnrollSecurity");
    },
    /**
     *Code to fetch all cards for the entered SSN
     */
    getAllCards: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollModule.presentationController.getCardsForEnroll();
    },
    /**
     * Code to trigger OTP for the Mobile Number
     */
    triggerOTP: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollModule.presentationController.requestOTP();
    },
    /*
     *Code to show error message
     */
    bindViewError: function(msg) {
        var scope = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scope, msg);
    }
});
define("EnrollModule/frmEnrollSecurityCheckControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_gf3ed60b012241e891cfa9369d7cc22c: function AS_Button_gf3ed60b012241e891cfa9369d7cc22c(eventobject) {
        var self = this;
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_a6c2f11db0e24c63930bec97a7a957fe: function AS_Form_a6c2f11db0e24c63930bec97a7a957fe(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d3e22f232a4447c8aad8b7ddd9de3b15: function AS_Form_d3e22f232a4447c8aad8b7ddd9de3b15(eventobject) {
        var self = this;
        this.frmSecurityCheckPreShow();
    },
    AS_BarButtonItem_f71234a8c5f74627a08fdec29b396260: function AS_BarButtonItem_f71234a8c5f74627a08fdec29b396260(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("EnrollModule/frmEnrollSecurityCheckController", ["EnrollModule/userfrmEnrollSecurityCheckController", "EnrollModule/frmEnrollSecurityCheckControllerActions"], function() {
    var controller = require("EnrollModule/userfrmEnrollSecurityCheckController");
    var controllerActions = ["EnrollModule/frmEnrollSecurityCheckControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
