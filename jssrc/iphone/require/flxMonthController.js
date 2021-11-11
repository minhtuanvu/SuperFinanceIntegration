define("userflxMonthController", {
    //Type your controller code here
});
define("flxMonthControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxMonthController", ["userflxMonthController", "flxMonthControllerActions"], function() {
    var controller = require("userflxMonthController");
    var controllerActions = ["flxMonthControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
