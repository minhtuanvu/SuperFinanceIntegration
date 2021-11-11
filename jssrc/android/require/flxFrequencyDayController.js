define("userflxFrequencyDayController", {
    //Type your controller code here 
});
define("flxFrequencyDayControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxFrequencyDayController", ["userflxFrequencyDayController", "flxFrequencyDayControllerActions"], function() {
    var controller = require("userflxFrequencyDayController");
    var controllerActions = ["flxFrequencyDayControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
