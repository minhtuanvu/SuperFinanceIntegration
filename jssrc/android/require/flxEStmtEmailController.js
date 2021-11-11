define("userflxEStmtEmailController", {
    //Type your controller code here
});
define("flxEStmtEmailControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxEStmtEmailController", ["userflxEStmtEmailController", "flxEStmtEmailControllerActions"], function() {
    var controller = require("userflxEStmtEmailController");
    var controllerActions = ["flxEStmtEmailControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
