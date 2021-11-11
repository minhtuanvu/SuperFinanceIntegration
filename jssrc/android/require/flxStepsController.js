define("userflxStepsController", {
    //Type your controller code here
});
define("flxStepsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxStepsController", ["userflxStepsController", "flxStepsControllerActions"], function() {
    var controller = require("userflxStepsController");
    var controllerActions = ["flxStepsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
