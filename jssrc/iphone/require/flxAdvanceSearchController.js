define("userflxAdvanceSearchController", {
    //Type your controller code here
});
define("flxAdvanceSearchControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAdvanceSearchController", ["userflxAdvanceSearchController", "flxAdvanceSearchControllerActions"], function() {
    var controller = require("userflxAdvanceSearchController");
    var controllerActions = ["flxAdvanceSearchControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
