define("userflxApprovalListHeadController", {
    //Type your controller code here 
});
define("flxApprovalListHeadControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxApprovalListHeadController", ["userflxApprovalListHeadController", "flxApprovalListHeadControllerActions"], function() {
    var controller = require("userflxApprovalListHeadController");
    var controllerActions = ["flxApprovalListHeadControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
