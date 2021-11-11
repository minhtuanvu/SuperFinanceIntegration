define("userflxBankTimingsController", {
    //Type your controller code here
});
define("flxBankTimingsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxBankTimingsController", ["userflxBankTimingsController", "flxBankTimingsControllerActions"], function() {
    var controller = require("userflxBankTimingsController");
    var controllerActions = ["flxBankTimingsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
