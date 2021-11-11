define("CampaignManagement/userfrmDepositTermsAndConditionsController", {
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
        campaignMod.presentationController.commonFunctionForNavigation("frmDepositsConfirmation");
    }
});
define("CampaignManagement/frmDepositTermsAndConditionsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e5e3b26eb1314c2dba9e142f7a0e6e06: function AS_Form_e5e3b26eb1314c2dba9e142f7a0e6e06(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_cdb5d5bcc2f3425396c1d009327ebcc4: function AS_Form_cdb5d5bcc2f3425396c1d009327ebcc4(eventobject) {
        var self = this;
        this.preshow();
    },
    AS_BarButtonItem_fa3ed62d498c464ba51a8e3511ef0941: function AS_BarButtonItem_fa3ed62d498c464ba51a8e3511ef0941(eventobject) {
        var self = this;
        this.onCloseOfTermsAndConditions();
    }
});
define("CampaignManagement/frmDepositTermsAndConditionsController", ["CampaignManagement/userfrmDepositTermsAndConditionsController", "CampaignManagement/frmDepositTermsAndConditionsControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmDepositTermsAndConditionsController");
    var controllerActions = ["CampaignManagement/frmDepositTermsAndConditionsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
