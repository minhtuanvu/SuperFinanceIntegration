define("userflxTransferConfirmationController", {
    //Type your controller code here
});
define("flxTransferConfirmationControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTransferConfirmationController", ["userflxTransferConfirmationController", "flxTransferConfirmationControllerActions"], function() {
    var controller = require("userflxTransferConfirmationController");
    var controllerActions = ["flxTransferConfirmationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
