define("userflxExternalBanksController", {
    //Type your controller code here
});
define("flxExternalBanksControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxExternalBanksController", ["userflxExternalBanksController", "flxExternalBanksControllerActions"], function() {
    var controller = require("userflxExternalBanksController");
    var controllerActions = ["flxExternalBanksControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
