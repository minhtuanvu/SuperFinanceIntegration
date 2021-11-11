define("userflxStatementsController", {
    //Type your controller code here
});
define("flxStatementsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxStatementsController", ["userflxStatementsController", "flxStatementsControllerActions"], function() {
    var controller = require("userflxStatementsController");
    var controllerActions = ["flxStatementsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
