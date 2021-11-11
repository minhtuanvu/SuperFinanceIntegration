define("userflxRecentHeaderController", {
    //Type your controller code here 
});
define("flxRecentHeaderControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxRecentHeaderController", ["userflxRecentHeaderController", "flxRecentHeaderControllerActions"], function() {
    var controller = require("userflxRecentHeaderController");
    var controllerActions = ["flxRecentHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
