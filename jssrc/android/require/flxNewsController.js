define("userflxNewsController", {
    //Type your controller code here 
});
define("flxNewsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxNewsController", ["userflxNewsController", "flxNewsControllerActions"], function() {
    var controller = require("userflxNewsController");
    var controllerActions = ["flxNewsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
