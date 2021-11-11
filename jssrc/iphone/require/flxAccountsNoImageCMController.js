define("userflxAccountsNoImageCMController", {
    //Type your controller code here 
});
define("flxAccountsNoImageCMControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAccountsNoImageCMController", ["userflxAccountsNoImageCMController", "flxAccountsNoImageCMControllerActions"], function() {
    var controller = require("userflxAccountsNoImageCMController");
    var controllerActions = ["flxAccountsNoImageCMControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
