define("userflxMyGoalsController", {
    //Type your controller code here 
});
define("flxMyGoalsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxMyGoalsController", ["userflxMyGoalsController", "flxMyGoalsControllerActions"], function() {
    var controller = require("userflxMyGoalsController");
    var controllerActions = ["flxMyGoalsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
