define("userflxAchFilelistController", {
    //Type your controller code here 
});
define("flxAchFilelistControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAchFilelistController", ["userflxAchFilelistController", "flxAchFilelistControllerActions"], function() {
    var controller = require("userflxAchFilelistController");
    var controllerActions = ["flxAchFilelistControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
