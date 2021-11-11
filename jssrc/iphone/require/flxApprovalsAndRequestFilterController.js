define("userflxApprovalsAndRequestFilterController", {
    //Type your controller code here 
});
define("flxApprovalsAndRequestFilterControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxApprovalsAndRequestFilterController", ["userflxApprovalsAndRequestFilterController", "flxApprovalsAndRequestFilterControllerActions"], function() {
    var controller = require("userflxApprovalsAndRequestFilterController");
    var controllerActions = ["flxApprovalsAndRequestFilterControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
