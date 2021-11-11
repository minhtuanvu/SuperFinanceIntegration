define("userflxAlertListController", {
    //Type your controller code here
});
define("flxAlertListControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAlertListController", ["userflxAlertListController", "flxAlertListControllerActions"], function() {
    var controller = require("userflxAlertListController");
    var controllerActions = ["flxAlertListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
