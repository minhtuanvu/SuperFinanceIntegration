define("userflxDashboardsController", {
    //Type your controller code here 
});
define("flxDashboardsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDashboardsController", ["userflxDashboardsController", "flxDashboardsControllerActions"], function() {
    var controller = require("userflxDashboardsController");
    var controllerActions = ["flxDashboardsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
