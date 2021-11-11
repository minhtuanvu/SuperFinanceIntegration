define("userflxAccountPreviewController", {
    //Type your controller code here
});
define("flxAccountPreviewControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAccountPreviewController", ["userflxAccountPreviewController", "flxAccountPreviewControllerActions"], function() {
    var controller = require("userflxAccountPreviewController");
    var controllerActions = ["flxAccountPreviewControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
