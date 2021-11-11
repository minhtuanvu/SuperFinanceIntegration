define("userflxSelectAccountsController", {
    //Type your controller code here 
});
define("flxSelectAccountsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSelectAccountsController", ["userflxSelectAccountsController", "flxSelectAccountsControllerActions"], function() {
    var controller = require("userflxSelectAccountsController");
    var controllerActions = ["flxSelectAccountsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
