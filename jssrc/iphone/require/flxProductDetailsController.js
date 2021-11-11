define("userflxProductDetailsController", {
    //Type your controller code here
});
define("flxProductDetailsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxProductDetailsController", ["userflxProductDetailsController", "flxProductDetailsControllerActions"], function() {
    var controller = require("userflxProductDetailsController");
    var controllerActions = ["flxProductDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
