define("userflxdesinationaccountController", {
    //Type your controller code here 
});
define("flxdesinationaccountControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxdesinationaccountController", ["userflxdesinationaccountController", "flxdesinationaccountControllerActions"], function() {
    var controller = require("userflxdesinationaccountController");
    var controllerActions = ["flxdesinationaccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
