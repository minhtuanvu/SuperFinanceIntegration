define("userflxWealthAccountsDashboardHeaderController", {
    //Type your controller code here 
});
define("flxWealthAccountsDashboardHeaderControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxWealthAccountsDashboardHeaderController", ["userflxWealthAccountsDashboardHeaderController", "flxWealthAccountsDashboardHeaderControllerActions"], function() {
    var controller = require("userflxWealthAccountsDashboardHeaderController");
    var controllerActions = ["flxWealthAccountsDashboardHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
