define("CampaignManagement/userfrmFromAccountController", {
    //Type your controller code here 
});
define("CampaignManagement/frmFromAccountControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CampaignManagement/frmFromAccountController", ["CampaignManagement/userfrmFromAccountController", "CampaignManagement/frmFromAccountControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmFromAccountController");
    var controllerActions = ["CampaignManagement/frmFromAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
