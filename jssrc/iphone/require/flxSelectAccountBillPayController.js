define("userflxSelectAccountBillPayController", {
    //Type your controller code here 
});
define("flxSelectAccountBillPayControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSelectAccountBillPayController", ["userflxSelectAccountBillPayController", "flxSelectAccountBillPayControllerActions"], function() {
    var controller = require("userflxSelectAccountBillPayController");
    var controllerActions = ["flxSelectAccountBillPayControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
