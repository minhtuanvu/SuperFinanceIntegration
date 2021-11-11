define("userflxGoalsTypeController", {
    //Type your controller code here 
});
define("flxGoalsTypeControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxGoalsTypeController", ["userflxGoalsTypeController", "flxGoalsTypeControllerActions"], function() {
    var controller = require("userflxGoalsTypeController");
    var controllerActions = ["flxGoalsTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
