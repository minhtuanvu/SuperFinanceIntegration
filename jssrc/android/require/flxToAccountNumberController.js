define("userflxToAccountNumberController", {
    //Type your controller code here
});
define("flxToAccountNumberControllerActions", {
    //Type your controller code here
});
define("flxToAccountNumberController", ["userflxToAccountNumberController", "flxToAccountNumberControllerActions"], function() {
    var controller = require("userflxToAccountNumberController");
    var controllerActions = ["flxToAccountNumberControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
