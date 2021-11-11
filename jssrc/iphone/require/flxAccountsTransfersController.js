define("userflxAccountsTransfersController", {
    //Type your controller code here 
});
define("flxAccountsTransfersControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAccountsTransfersController", ["userflxAccountsTransfersController", "flxAccountsTransfersControllerActions"], function() {
    var controller = require("userflxAccountsTransfersController");
    var controllerActions = ["flxAccountsTransfersControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
