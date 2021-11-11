define("userflxForexDashboardController", {
    //Type your controller code here 
});
define("flxForexDashboardControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxForexDashboardController", ["userflxForexDashboardController", "flxForexDashboardControllerActions"], function() {
    var controller = require("userflxForexDashboardController");
    var controllerActions = ["flxForexDashboardControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
