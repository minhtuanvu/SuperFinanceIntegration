define("userflxTransactionsController", {
    //Type your controller code here
});
define("flxTransactionsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTransactionsController", ["userflxTransactionsController", "flxTransactionsControllerActions"], function() {
    var controller = require("userflxTransactionsController");
    var controllerActions = ["flxTransactionsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
