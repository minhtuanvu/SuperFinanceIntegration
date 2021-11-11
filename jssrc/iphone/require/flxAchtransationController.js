define("userflxAchtransationController", {
    //Type your controller code here 
});
define("flxAchtransationControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAchtransationController", ["userflxAchtransationController", "flxAchtransationControllerActions"], function() {
    var controller = require("userflxAchtransationController");
    var controllerActions = ["flxAchtransationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
