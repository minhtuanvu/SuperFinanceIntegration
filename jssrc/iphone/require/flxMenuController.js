define("userflxMenuController", {
    //Type your controller code here
});
define("flxMenuControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxMenuController", ["userflxMenuController", "flxMenuControllerActions"], function() {
    var controller = require("userflxMenuController");
    var controllerActions = ["flxMenuControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
