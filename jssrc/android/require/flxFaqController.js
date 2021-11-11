define("userflxFaqController", {
    //Type your controller code here
});
define("flxFaqControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxFaqController", ["userflxFaqController", "flxFaqControllerActions"], function() {
    var controller = require("userflxFaqController");
    var controllerActions = ["flxFaqControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
