define("userflxEmptyRowController", {
    //Type your controller code here
});
define("flxEmptyRowControllerActions", {
    /*
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxEmptyRowController", ["userflxEmptyRowController", "flxEmptyRowControllerActions"], function() {
    var controller = require("userflxEmptyRowController");
    var controllerActions = ["flxEmptyRowControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
