define("userflxWealthOverviewController", {
    //Type your controller code here 
});
define("flxWealthOverviewControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxWealthOverviewController", ["userflxWealthOverviewController", "flxWealthOverviewControllerActions"], function() {
    var controller = require("userflxWealthOverviewController");
    var controllerActions = ["flxWealthOverviewControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
