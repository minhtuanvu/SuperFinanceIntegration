define("userflxAccountsNoImageCurController", {
    //Type your controller code here 
});
define("flxAccountsNoImageCurControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAccountsNoImageCurController", ["userflxAccountsNoImageCurController", "flxAccountsNoImageCurControllerActions"], function() {
    var controller = require("userflxAccountsNoImageCurController");
    var controllerActions = ["flxAccountsNoImageCurControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
