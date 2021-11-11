define("userflxApprovalsAndReqHeaderController", {
    //Type your controller code here 
});
define("flxApprovalsAndReqHeaderControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxApprovalsAndReqHeaderController", ["userflxApprovalsAndReqHeaderController", "flxApprovalsAndReqHeaderControllerActions"], function() {
    var controller = require("userflxApprovalsAndReqHeaderController");
    var controllerActions = ["flxApprovalsAndReqHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
