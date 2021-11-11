define("userflxAcknowloedgmentRowController", {
    //Type your controller code here
});
define("flxAcknowloedgmentRowControllerActions", {
    //Type your controller code here
});
define("flxAcknowloedgmentRowController", ["userflxAcknowloedgmentRowController", "flxAcknowloedgmentRowControllerActions"], function() {
    var controller = require("userflxAcknowloedgmentRowController");
    var controllerActions = ["flxAcknowloedgmentRowControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
