define("userflxAlertsPrefController", {
    //Type your controller code here
});
define("flxAlertsPrefControllerActions", {
    //Type your controller code here
});
define("flxAlertsPrefController", ["userflxAlertsPrefController", "flxAlertsPrefControllerActions"], function() {
    var controller = require("userflxAlertsPrefController");
    var controllerActions = ["flxAlertsPrefControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
