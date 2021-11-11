define("userflxCombinedAccountsController", {
    //Type your controller code here 
});
define("flxCombinedAccountsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCombinedAccountsController", ["userflxCombinedAccountsController", "flxCombinedAccountsControllerActions"], function() {
    var controller = require("userflxCombinedAccountsController");
    var controllerActions = ["flxCombinedAccountsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
