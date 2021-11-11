define("userflxSecurityQuestionOptionsController", {
    //Type your controller code here
});
define("flxSecurityQuestionOptionsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSecurityQuestionOptionsController", ["userflxSecurityQuestionOptionsController", "flxSecurityQuestionOptionsControllerActions"], function() {
    var controller = require("userflxSecurityQuestionOptionsController");
    var controllerActions = ["flxSecurityQuestionOptionsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
