define("userflxMMHeaderController", {
    //Type your controller code here
});
define("flxMMHeaderControllerActions", {
    //Type your controller code here
});
define("flxMMHeaderController", ["userflxMMHeaderController", "flxMMHeaderControllerActions"], function() {
    var controller = require("userflxMMHeaderController");
    var controllerActions = ["flxMMHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
