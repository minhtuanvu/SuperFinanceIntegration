define("userflxWealthNBRecentActivityController", {
    //Type your controller code here 
});
define("flxWealthNBRecentActivityControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxWealthNBRecentActivityController", ["userflxWealthNBRecentActivityController", "flxWealthNBRecentActivityControllerActions"], function() {
    var controller = require("userflxWealthNBRecentActivityController");
    var controllerActions = ["flxWealthNBRecentActivityControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
