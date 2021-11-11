define("userflxSegHeaderCashPosController", {
    //Type your controller code here 
});
define("flxSegHeaderCashPosControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSegHeaderCashPosController", ["userflxSegHeaderCashPosController", "flxSegHeaderCashPosControllerActions"], function() {
    var controller = require("userflxSegHeaderCashPosController");
    var controllerActions = ["flxSegHeaderCashPosControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
