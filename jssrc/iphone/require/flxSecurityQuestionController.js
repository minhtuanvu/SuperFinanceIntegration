define("userflxSecurityQuestionController", {
    //Type your controller code here
});
define("flxSecurityQuestionControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSecurityQuestionController", ["userflxSecurityQuestionController", "flxSecurityQuestionControllerActions"], function() {
    var controller = require("userflxSecurityQuestionController");
    var controllerActions = ["flxSecurityQuestionControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
