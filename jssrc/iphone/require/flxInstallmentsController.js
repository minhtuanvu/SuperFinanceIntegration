define("userflxInstallmentsController", {
    //Type your controller code here 
});
define("flxInstallmentsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxInstallmentsController", ["userflxInstallmentsController", "flxInstallmentsControllerActions"], function() {
    var controller = require("userflxInstallmentsController");
    var controllerActions = ["flxInstallmentsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
