define("CampaignManagement/userfrmCreditAccountController", {
    //Type your controller code here 
});
define("CampaignManagement/frmCreditAccountControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CampaignManagement/frmCreditAccountController", ["CampaignManagement/userfrmCreditAccountController", "CampaignManagement/frmCreditAccountControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmCreditAccountController");
    var controllerActions = ["CampaignManagement/frmCreditAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
