define("userflxSearchAddressController", {
    //Type your controller code here
});
define("flxSearchAddressControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSearchAddressController", ["userflxSearchAddressController", "flxSearchAddressControllerActions"], function() {
    var controller = require("userflxSearchAddressController");
    var controllerActions = ["flxSearchAddressControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
