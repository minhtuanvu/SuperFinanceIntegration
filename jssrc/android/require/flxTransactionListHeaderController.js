define("flxTransactionListHeaderController", ["userflxTransactionListHeaderController", "flxTransactionListHeaderControllerActions"], function() {
    var controller = require("userflxTransactionListHeaderController");
    var controllerActions = ["flxTransactionListHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
