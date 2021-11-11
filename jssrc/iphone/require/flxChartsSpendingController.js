define("userflxChartsSpendingController", {
    //Type your controller code here
});
define("flxChartsSpendingControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxChartsSpendingController", ["userflxChartsSpendingController", "flxChartsSpendingControllerActions"], function() {
    var controller = require("userflxChartsSpendingController");
    var controllerActions = ["flxChartsSpendingControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
