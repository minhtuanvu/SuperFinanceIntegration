define("userflxAchlistController", {
    //Type your controller code here 
});
define("flxAchlistControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAchlistController", ["userflxAchlistController", "flxAchlistControllerActions"], function() {
    var controller = require("userflxAchlistController");
    var controllerActions = ["flxAchlistControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
