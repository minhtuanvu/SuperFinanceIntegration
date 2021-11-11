define("CampaignManagement/userfrmFinancialHelpAcknowledgementController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "NO", currentForm);
    },
    preShow: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.setVisibility(false);
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.view.btnDashboard.onClick = this.navToAccounts;
    },
    navToAccounts: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        campMod.presentationController.updateCampaigningAndNavToAccounts("FinancialHelp");
    },
});
define("CampaignManagement/frmFinancialHelpAcknowledgementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ef80229bfb574541b373fce99e2e9138: function AS_Form_ef80229bfb574541b373fce99e2e9138(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f606461dab624193935ab945a0ad19bb: function AS_Form_f606461dab624193935ab945a0ad19bb(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("CampaignManagement/frmFinancialHelpAcknowledgementController", ["CampaignManagement/userfrmFinancialHelpAcknowledgementController", "CampaignManagement/frmFinancialHelpAcknowledgementControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmFinancialHelpAcknowledgementController");
    var controllerActions = ["CampaignManagement/frmFinancialHelpAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
