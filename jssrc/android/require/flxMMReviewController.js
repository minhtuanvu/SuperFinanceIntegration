define("userflxMMReviewController", {
    //Type your controller code here
});
define("flxMMReviewControllerActions", {
    //Type your controller code here
});
define("flxMMReviewController", ["userflxMMReviewController", "flxMMReviewControllerActions"], function() {
    var controller = require("userflxMMReviewController");
    var controllerActions = ["flxMMReviewControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
