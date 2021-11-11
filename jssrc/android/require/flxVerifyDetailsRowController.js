define("userflxVerifyDetailsRowController", {
    //Type your controller code here 
});
define("flxVerifyDetailsRowControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxVerifyDetailsRowController", ["userflxVerifyDetailsRowController", "flxVerifyDetailsRowControllerActions"], function() {
    var controller = require("userflxVerifyDetailsRowController");
    var controllerActions = ["flxVerifyDetailsRowControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
