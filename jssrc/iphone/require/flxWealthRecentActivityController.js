define("userflxWealthRecentActivityController", {
    //Type your controller code here 
});
define("flxWealthRecentActivityControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxWealthRecentActivityController", ["userflxWealthRecentActivityController", "flxWealthRecentActivityControllerActions"], function() {
    var controller = require("userflxWealthRecentActivityController");
    var controllerActions = ["flxWealthRecentActivityControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
