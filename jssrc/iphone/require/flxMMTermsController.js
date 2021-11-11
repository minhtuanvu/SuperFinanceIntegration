define("userflxMMTermsController", {
    //Type your controller code here
});
define("flxMMTermsControllerActions", {
    /*
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxMMTermsController", ["userflxMMTermsController", "flxMMTermsControllerActions"], function() {
    var controller = require("userflxMMTermsController");
    var controllerActions = ["flxMMTermsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
