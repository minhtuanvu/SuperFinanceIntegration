define("CampaignManagement/userfrmSpecialBonusAcknowledgmentController", {
    navigateToDashboard: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        accountMod.presentationController.updateCampaigningAndNavToAccounts("specialBonus");
    }
});
define("CampaignManagement/frmSpecialBonusAcknowledgmentControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_acf159698b5240c7958642125152f2e6: function AS_Button_acf159698b5240c7958642125152f2e6(eventobject) {
        var self = this;
        this.navigateToDashboard();
    }
});
define("CampaignManagement/frmSpecialBonusAcknowledgmentController", ["CampaignManagement/userfrmSpecialBonusAcknowledgmentController", "CampaignManagement/frmSpecialBonusAcknowledgmentControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmSpecialBonusAcknowledgmentController");
    var controllerActions = ["CampaignManagement/frmSpecialBonusAcknowledgmentControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
