define("userflxContractsCollapsedController", {
    //Type your controller code here 
});
define("flxContractsCollapsedControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxContractsCollapsedController", ["userflxContractsCollapsedController", "flxContractsCollapsedControllerActions"], function() {
    var controller = require("userflxContractsCollapsedController");
    var controllerActions = ["flxContractsCollapsedControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
