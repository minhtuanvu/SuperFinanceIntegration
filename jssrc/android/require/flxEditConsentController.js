define("userflxEditConsentController", {
    //Type your controller code here
});
define("flxEditConsentControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxEditConsentController", ["userflxEditConsentController", "flxEditConsentControllerActions"], function() {
    var controller = require("userflxEditConsentController");
    var controllerActions = ["flxEditConsentControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
