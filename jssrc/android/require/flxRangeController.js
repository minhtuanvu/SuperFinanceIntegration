define("userflxRangeController", {
    //Type your controller code here
});
define("flxRangeControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxRangeController", ["userflxRangeController", "flxRangeControllerActions"], function() {
    var controller = require("userflxRangeController");
    var controllerActions = ["flxRangeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
