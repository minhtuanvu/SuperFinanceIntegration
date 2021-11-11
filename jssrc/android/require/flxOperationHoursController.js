define("userflxOperationHoursController", {
    //Type your controller code here
});
define("flxOperationHoursControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxOperationHoursController", ["userflxOperationHoursController", "flxOperationHoursControllerActions"], function() {
    var controller = require("userflxOperationHoursController");
    var controllerActions = ["flxOperationHoursControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
