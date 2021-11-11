define("flxTransactionsListController", ["userflxTransactionsListController", "flxTransactionsListControllerActions"], function() {
    var controller = require("userflxTransactionsListController");
    var controllerActions = ["flxTransactionsListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
