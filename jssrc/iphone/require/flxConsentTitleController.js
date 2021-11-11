define("userflxConsentTitleController", {
    //Type your controller code here
});
define("flxConsentTitleControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxConsentTitleController", ["userflxConsentTitleController", "flxConsentTitleControllerActions"], function() {
    var controller = require("userflxConsentTitleController");
    var controllerActions = ["flxConsentTitleControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
