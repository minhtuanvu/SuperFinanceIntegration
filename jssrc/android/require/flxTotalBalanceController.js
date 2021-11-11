define("userflxTotalBalanceController", {
    //Type your controller code here 
});
define("flxTotalBalanceControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTotalBalanceController", ["userflxTotalBalanceController", "flxTotalBalanceControllerActions"], function() {
    var controller = require("userflxTotalBalanceController");
    var controllerActions = ["flxTotalBalanceControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
