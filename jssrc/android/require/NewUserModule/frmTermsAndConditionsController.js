define("NewUserModule/userfrmTermsAndConditionsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.customHeader.flxSearch.isVisible = false;
            this.view.flxTermsConditions.top = "56dp";
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.flxTermsConditions.top = "0dp";
        }
        this.view.flxTermsConditions.scrollsToTop = true;
        this.view.customHeader.flxBack.onClick = this.onCloseTnC;
        this.view.rtxTermsConditionsValue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TermsAndConditions.message");
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onCloseTnC: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.commonFunctionForNavigation("frmOBCreditCheck");
    }
});
define("NewUserModule/frmTermsAndConditionsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f839b18da8a3429b914619c1cdc3f2ea: function AS_Form_f839b18da8a3429b914619c1cdc3f2ea(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_gc36cc0a9cc447bfa49a55fecb2a695f: function AS_Form_gc36cc0a9cc447bfa49a55fecb2a695f(eventobject) {
        var self = this;
        this.preshow();
    },
    AS_BarButtonItem_f33cbf6a1fa94e00ac744dad5cfc9989: function AS_BarButtonItem_f33cbf6a1fa94e00ac744dad5cfc9989(eventobject) {
        var self = this;
        this.onCloseTnC();
    }
});
define("NewUserModule/frmTermsAndConditionsController", ["NewUserModule/userfrmTermsAndConditionsController", "NewUserModule/frmTermsAndConditionsControllerActions"], function() {
    var controller = require("NewUserModule/userfrmTermsAndConditionsController");
    var controllerActions = ["NewUserModule/frmTermsAndConditionsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
