define("CampaignManagement/userfrmDepositsAcknowledgementController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "NO", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.setVisibility(false);
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.view.btnDashboard.onClick = this.navToAccounts;
    },
    navToAccounts: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        campaignMod.presentationController.updateCampaigningAndNavToAccounts("deposits"); //createDeposit
    }
});
define("CampaignManagement/frmDepositsAcknowledgementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f56b4bdba3fb4a2c92b55ea1462693ef: function AS_Form_f56b4bdba3fb4a2c92b55ea1462693ef(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_j22901cbccb1486c99eaeaed3a952bdf: function AS_Form_j22901cbccb1486c99eaeaed3a952bdf(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("CampaignManagement/frmDepositsAcknowledgementController", ["CampaignManagement/userfrmDepositsAcknowledgementController", "CampaignManagement/frmDepositsAcknowledgementControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmDepositsAcknowledgementController");
    var controllerActions = ["CampaignManagement/frmDepositsAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
