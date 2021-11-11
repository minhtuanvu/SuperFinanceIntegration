define("userflxMMConfirmationController", {
    //Type your controller code here
});
define("flxMMConfirmationControllerActions", {
    //Type your controller code here
});
define("flxMMConfirmationController", ["userflxMMConfirmationController", "flxMMConfirmationControllerActions"], function() {
    var controller = require("userflxMMConfirmationController");
    var controllerActions = ["flxMMConfirmationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
