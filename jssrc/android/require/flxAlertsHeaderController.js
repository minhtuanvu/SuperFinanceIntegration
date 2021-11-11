define("userflxAlertsHeaderController", {
    //Type your controller code here 
});
define("flxAlertsHeaderControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAlertsHeaderController", ["userflxAlertsHeaderController", "flxAlertsHeaderControllerActions"], function() {
    var controller = require("userflxAlertsHeaderController");
    var controllerActions = ["flxAlertsHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
