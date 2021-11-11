define("userflxApprovalsAndRequestHistoryController", {
    //Type your controller code here 
});
define("flxApprovalsAndRequestHistoryControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxApprovalsAndRequestHistoryController", ["userflxApprovalsAndRequestHistoryController", "flxApprovalsAndRequestHistoryControllerActions"], function() {
    var controller = require("userflxApprovalsAndRequestHistoryController");
    var controllerActions = ["flxApprovalsAndRequestHistoryControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
