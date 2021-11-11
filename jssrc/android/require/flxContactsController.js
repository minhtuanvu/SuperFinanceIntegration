define("userflxContactsController", {
    //Type your controller code here
});
define("flxContactsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxContactsController", ["userflxContactsController", "flxContactsControllerActions"], function() {
    var controller = require("userflxContactsController");
    var controllerActions = ["flxContactsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
