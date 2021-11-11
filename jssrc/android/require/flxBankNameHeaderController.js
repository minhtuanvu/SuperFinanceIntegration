define("userflxBankNameHeaderController", {
    //Type your controller code here
});
define("flxBankNameHeaderControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxBankNameHeaderController", ["userflxBankNameHeaderController", "flxBankNameHeaderControllerActions"], function() {
    var controller = require("userflxBankNameHeaderController");
    var controllerActions = ["flxBankNameHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
