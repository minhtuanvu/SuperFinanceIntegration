define("userflxReasonsController", {
    //Type your controller code here
});
define("flxReasonsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxReasonsController", ["userflxReasonsController", "flxReasonsControllerActions"], function() {
    var controller = require("userflxReasonsController");
    var controllerActions = ["flxReasonsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
