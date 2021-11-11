define("userfrmAlreadyEnrolledController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmAlreadyEnrolledPreShow: function() {
        this.setFlowActions();
        this.setPreshowData();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setPreshowData: function() {},
    setFlowActions: function() {
        var scopeObj = this;
        this.view.btnLoginHere.onClick = function() {
            scopeObj.navToLogin();
        };
        this.view.btnChangeDetails.onClick = function() {
            scopeObj.navToChangeDetails();
        };
    },
    navToLogin: function() {
        var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.resetEnrollObj();
    },
    navToChangeDetails: function() {
        var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmEnrollLastName");
    },
});
define("frmAlreadyEnrolledControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_g377ee87228b4966a960d71b31ace021: function AS_Form_g377ee87228b4966a960d71b31ace021(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e6c07ed8004b4feea886e08fa99e5423: function AS_Form_e6c07ed8004b4feea886e08fa99e5423(eventobject) {
        var self = this;
        this.frmAlreadyEnrolledPreShow();
    }
});
define("frmAlreadyEnrolledController", ["userfrmAlreadyEnrolledController", "frmAlreadyEnrolledControllerActions"], function() {
    var controller = require("userfrmAlreadyEnrolledController");
    var controllerActions = ["frmAlreadyEnrolledControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
