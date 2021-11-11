define("flxChequeDepositRowController", ["userflxChequeDepositRowController", "flxChequeDepositRowControllerActions"], function() {
    var controller = require("userflxChequeDepositRowController");
    var controllerActions = ["flxChequeDepositRowControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
