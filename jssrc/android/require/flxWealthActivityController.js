define("userflxWealthActivityController", {
    //Type your controller code here 
});
define("flxWealthActivityControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxWealthActivityController", ["userflxWealthActivityController", "flxWealthActivityControllerActions"], function() {
    var controller = require("userflxWealthActivityController");
    var controllerActions = ["flxWealthActivityControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
