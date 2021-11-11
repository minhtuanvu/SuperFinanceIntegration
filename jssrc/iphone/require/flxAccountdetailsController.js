define("userflxAccountdetailsController", {
    //Type your controller code here
});
define("flxAccountdetailsControllerActions", {
    //Type your controller code here
});
define("flxAccountdetailsController", ["userflxAccountdetailsController", "flxAccountdetailsControllerActions"], function() {
    var controller = require("userflxAccountdetailsController");
    var controllerActions = ["flxAccountdetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
