define("userflxFiltertypeController", {
    //Type your controller code here 
});
define("flxFiltertypeControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxFiltertypeController", ["userflxFiltertypeController", "flxFiltertypeControllerActions"], function() {
    var controller = require("userflxFiltertypeController");
    var controllerActions = ["flxFiltertypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
