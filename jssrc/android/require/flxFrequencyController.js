define("userflxFrequencyController", {
    //Type your controller code here
});
define("flxFrequencyControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxFrequencyController", ["userflxFrequencyController", "flxFrequencyControllerActions"], function() {
    var controller = require("userflxFrequencyController");
    var controllerActions = ["flxFrequencyControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
