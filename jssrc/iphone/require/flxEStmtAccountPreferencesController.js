define("userflxEStmtAccountPreferencesController", {
    //Type your controller code here
});
define("flxEStmtAccountPreferencesControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxEStmtAccountPreferencesController", ["userflxEStmtAccountPreferencesController", "flxEStmtAccountPreferencesControllerActions"], function() {
    var controller = require("userflxEStmtAccountPreferencesController");
    var controllerActions = ["flxEStmtAccountPreferencesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
