define("userflxWorkTransSFController", {
    //Type your controller code here 
});
define("flxWorkTransSFControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxWorkTransSFController", ["userflxWorkTransSFController", "flxWorkTransSFControllerActions"], function() {
    var controller = require("userflxWorkTransSFController");
    var controllerActions = ["flxWorkTransSFControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
