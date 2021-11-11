define("userflxDirectionsController", {
    //Type your controller code here
});
define("flxDirectionsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDirectionsController", ["userflxDirectionsController", "flxDirectionsControllerActions"], function() {
    var controller = require("userflxDirectionsController");
    var controllerActions = ["flxDirectionsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
