define("userflxUserTransactionMgmtController", {
    //Type your controller code here 
});
define("flxUserTransactionMgmtControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxUserTransactionMgmtController", ["userflxUserTransactionMgmtController", "flxUserTransactionMgmtControllerActions"], function() {
    var controller = require("userflxUserTransactionMgmtController");
    var controllerActions = ["flxUserTransactionMgmtControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
