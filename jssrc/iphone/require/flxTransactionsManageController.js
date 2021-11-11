define("userflxTransactionsManageController", {
    //Type your controller code here
});
define("flxTransactionsManageControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTransactionsManageController", ["userflxTransactionsManageController", "flxTransactionsManageControllerActions"], function() {
    var controller = require("userflxTransactionsManageController");
    var controllerActions = ["flxTransactionsManageControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
