define("userflxLanguageController", {
    //Type your controller code here
});
define("flxLanguageControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxLanguageController", ["userflxLanguageController", "flxLanguageControllerActions"], function() {
    var controller = require("userflxLanguageController");
    var controllerActions = ["flxLanguageControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
