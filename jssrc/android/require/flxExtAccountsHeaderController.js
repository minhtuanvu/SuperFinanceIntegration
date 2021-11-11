define("userflxExtAccountsHeaderController", {
    //Type your controller code here
});
define("flxExtAccountsHeaderControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxExtAccountsHeaderController", ["userflxExtAccountsHeaderController", "flxExtAccountsHeaderControllerActions"], function() {
    var controller = require("userflxExtAccountsHeaderController");
    var controllerActions = ["flxExtAccountsHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
