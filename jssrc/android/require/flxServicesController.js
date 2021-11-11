define("userflxServicesController", {
    //Type your controller code here
});
define("flxServicesControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxServicesController", ["userflxServicesController", "flxServicesControllerActions"], function() {
    var controller = require("userflxServicesController");
    var controllerActions = ["flxServicesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
