define("userflxSegBenNoDelController", {
    //Type your controller code here 
});
define("flxSegBenNoDelControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSegBenNoDelController", ["userflxSegBenNoDelController", "flxSegBenNoDelControllerActions"], function() {
    var controller = require("userflxSegBenNoDelController");
    var controllerActions = ["flxSegBenNoDelControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
