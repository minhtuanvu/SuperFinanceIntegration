define("userflxConsentController", {
    //Type your controller code here
});
define("flxConsentControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxConsentController", ["userflxConsentController", "flxConsentControllerActions"], function() {
    var controller = require("userflxConsentController");
    var controllerActions = ["flxConsentControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
