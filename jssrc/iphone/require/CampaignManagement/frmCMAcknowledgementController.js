define("CampaignManagement/userfrmCMAcknowledgementController", {
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
        this.view.btnDashboard.onClick = this.updateAccounts;
    },
    updateAccounts: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        campaignMod.presentationController.updateCampaigningAndNavToAccounts("loans");
    }
});
define("CampaignManagement/frmCMAcknowledgementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a63f987c9bb54a31a252fe926ae658d3: function AS_Form_a63f987c9bb54a31a252fe926ae658d3(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a3ff9850152440e7b4718d401fa9311e: function AS_Form_a3ff9850152440e7b4718d401fa9311e(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("CampaignManagement/frmCMAcknowledgementController", ["CampaignManagement/userfrmCMAcknowledgementController", "CampaignManagement/frmCMAcknowledgementControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmCMAcknowledgementController");
    var controllerActions = ["CampaignManagement/frmCMAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
