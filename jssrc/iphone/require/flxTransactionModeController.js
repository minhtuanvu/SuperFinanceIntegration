define("userflxTransactionModeController", {
    //Type your controller code here
});
define("flxTransactionModeControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTransactionModeController", ["userflxTransactionModeController", "flxTransactionModeControllerActions"], function() {
    var controller = require("userflxTransactionModeController");
    var controllerActions = ["flxTransactionModeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
