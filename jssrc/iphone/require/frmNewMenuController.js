define("userfrmNewMenuController", {
    //Type your controller code here
});
define("frmNewMenuControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmNewMenuController", ["userfrmNewMenuController", "frmNewMenuControllerActions"], function() {
    var controller = require("userfrmNewMenuController");
    var controllerActions = ["frmNewMenuControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
