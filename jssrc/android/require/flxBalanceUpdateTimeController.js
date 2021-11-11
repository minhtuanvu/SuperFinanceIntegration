define("userflxBalanceUpdateTimeController", {
    //Type your controller code here
});
define("flxBalanceUpdateTimeControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxBalanceUpdateTimeController", ["userflxBalanceUpdateTimeController", "flxBalanceUpdateTimeControllerActions"], function() {
    var controller = require("userflxBalanceUpdateTimeController");
    var controllerActions = ["flxBalanceUpdateTimeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
