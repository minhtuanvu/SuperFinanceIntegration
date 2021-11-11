define("userflxAcknowloedgmentRowEuroController", {
    //Type your controller code here
});
define("flxAcknowloedgmentRowEuroControllerActions", {
    //Type your controller code here
});
define("flxAcknowloedgmentRowEuroController", ["userflxAcknowloedgmentRowEuroController", "flxAcknowloedgmentRowEuroControllerActions"], function() {
    var controller = require("userflxAcknowloedgmentRowEuroController");
    var controllerActions = ["flxAcknowloedgmentRowEuroControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
