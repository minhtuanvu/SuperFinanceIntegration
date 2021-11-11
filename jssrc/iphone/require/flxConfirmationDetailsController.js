define("userflxConfirmationDetailsController", {
    //Type your controller code here 
});
define("flxConfirmationDetailsControllerActions", {
    //Type your controller code here 
});
define("flxConfirmationDetailsController", ["userflxConfirmationDetailsController", "flxConfirmationDetailsControllerActions"], function() {
    var controller = require("userflxConfirmationDetailsController");
    var controllerActions = ["flxConfirmationDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
