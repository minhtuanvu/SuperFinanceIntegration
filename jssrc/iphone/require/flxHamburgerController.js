define("userflxHamburgerController", {
    //Type your controller code here
});
define("flxHamburgerControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxHamburgerController", ["userflxHamburgerController", "flxHamburgerControllerActions"], function() {
    var controller = require("userflxHamburgerController");
    var controllerActions = ["flxHamburgerControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
