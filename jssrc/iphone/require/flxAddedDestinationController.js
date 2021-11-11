define("userflxAddedDestinationController", {
    //Type your controller code here
});
define("flxAddedDestinationControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAddedDestinationController", ["userflxAddedDestinationController", "flxAddedDestinationControllerActions"], function() {
    var controller = require("userflxAddedDestinationController");
    var controllerActions = ["flxAddedDestinationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
