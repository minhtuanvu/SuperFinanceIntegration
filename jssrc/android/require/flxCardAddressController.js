define("userflxCardAddressController", {
    //Type your controller code here
});
define("flxCardAddressControllerActions", {
    /*
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCardAddressController", ["userflxCardAddressController", "flxCardAddressControllerActions"], function() {
    var controller = require("userflxCardAddressController");
    var controllerActions = ["flxCardAddressControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
