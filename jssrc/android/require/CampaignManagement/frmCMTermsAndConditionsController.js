define("CampaignManagement/userfrmCMTermsAndConditionsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.customHeader.flxBack.onClick = this.onCloseOfTermsAndConditions;
        //this.view.rtxTermsConditionsValue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TermsAndConditions.message");
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onCloseOfTermsAndConditions: function() {
        var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        campaignMod.presentationController.commonFunctionForNavigation("frmShortTermLoanConfirmation");
    }
});
define("CampaignManagement/frmCMTermsAndConditionsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_iee85830a38d4037abb662e5027b4da5: function AS_Form_iee85830a38d4037abb662e5027b4da5(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e565ccdcdf7b45cc918886453fd2f039: function AS_Form_e565ccdcdf7b45cc918886453fd2f039(eventobject) {
        var self = this;
        this.preshow();
    },
    AS_BarButtonItem_c0b35bb1f23b4287bd88cd95c7c596c1: function AS_BarButtonItem_c0b35bb1f23b4287bd88cd95c7c596c1(eventobject) {
        var self = this;
        this.onCloseOfTermsAndConditions();
    }
});
define("CampaignManagement/frmCMTermsAndConditionsController", ["CampaignManagement/userfrmCMTermsAndConditionsController", "CampaignManagement/frmCMTermsAndConditionsControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmCMTermsAndConditionsController");
    var controllerActions = ["CampaignManagement/frmCMTermsAndConditionsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
