define("userflxUserDetailsController", {
    //Type your controller code here 
});
define("flxUserDetailsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxUserDetailsController", ["userflxUserDetailsController", "flxUserDetailsControllerActions"], function() {
    var controller = require("userflxUserDetailsController");
    var controllerActions = ["flxUserDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
