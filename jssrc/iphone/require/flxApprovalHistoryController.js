define("userflxApprovalHistoryController", {
    //Type your controller code here 
});
define("flxApprovalHistoryControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxApprovalHistoryController", ["userflxApprovalHistoryController", "flxApprovalHistoryControllerActions"], function() {
    var controller = require("userflxApprovalHistoryController");
    var controllerActions = ["flxApprovalHistoryControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
