define("userflxAccountsNoImageEuroController", {
    //Type your controller code here 
});
define("flxAccountsNoImageEuroControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAccountsNoImageEuroController", ["userflxAccountsNoImageEuroController", "flxAccountsNoImageEuroControllerActions"], function() {
    var controller = require("userflxAccountsNoImageEuroController");
    var controllerActions = ["flxAccountsNoImageEuroControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
