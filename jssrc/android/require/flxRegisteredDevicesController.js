define("userflxRegisteredDevicesController", {
    //Type your controller code here 
});
define("flxRegisteredDevicesControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxRegisteredDevicesController", ["userflxRegisteredDevicesController", "flxRegisteredDevicesControllerActions"], function() {
    var controller = require("userflxRegisteredDevicesController");
    var controllerActions = ["flxRegisteredDevicesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
