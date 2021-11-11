define("userflxTasksAchievedSFController", {
    //Type your controller code here 
});
define("flxTasksAchievedSFControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTasksAchievedSFController", ["userflxTasksAchievedSFController", "flxTasksAchievedSFControllerActions"], function() {
    var controller = require("userflxTasksAchievedSFController");
    var controllerActions = ["flxTasksAchievedSFControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
