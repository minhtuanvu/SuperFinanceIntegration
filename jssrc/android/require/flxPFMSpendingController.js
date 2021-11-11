define("userflxPFMSpendingController", {
    //Type your controller code here
});
define("flxPFMSpendingControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxPFMSpendingController", ["userflxPFMSpendingController", "flxPFMSpendingControllerActions"], function() {
    var controller = require("userflxPFMSpendingController");
    var controllerActions = ["flxPFMSpendingControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
