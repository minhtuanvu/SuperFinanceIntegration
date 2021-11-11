define("userflxContactTypeController", {
    //Type your controller code here 
});
define("flxContactTypeControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxContactTypeController", ["userflxContactTypeController", "flxContactTypeControllerActions"], function() {
    var controller = require("userflxContactTypeController");
    var controllerActions = ["flxContactTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
