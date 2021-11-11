define("userflxTravelDestinationController", {
    //Type your controller code here
});
define("flxTravelDestinationControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTravelDestinationController", ["userflxTravelDestinationController", "flxTravelDestinationControllerActions"], function() {
    var controller = require("userflxTravelDestinationController");
    var controllerActions = ["flxTravelDestinationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
