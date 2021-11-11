define("userflxSecurityQnAController", {
    //Type your controller code here
});
define("flxSecurityQnAControllerActions", {
    /*
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSecurityQnAController", ["userflxSecurityQnAController", "flxSecurityQnAControllerActions"], function() {
    var controller = require("userflxSecurityQnAController");
    var controllerActions = ["flxSecurityQnAControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
