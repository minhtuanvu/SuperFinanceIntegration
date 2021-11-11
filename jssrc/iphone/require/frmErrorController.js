define("userfrmErrorController", {
    //Type your controller code here
});
define("frmErrorControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmErrorController", ["userfrmErrorController", "frmErrorControllerActions"], function() {
    var controller = require("userfrmErrorController");
    var controllerActions = ["frmErrorControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
