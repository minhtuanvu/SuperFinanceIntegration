define("userflxAccountsHeaderController", {
    //Type your controller code here
});
define("flxAccountsHeaderControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAccountsHeaderController", ["userflxAccountsHeaderController", "flxAccountsHeaderControllerActions"], function() {
    var controller = require("userflxAccountsHeaderController");
    var controllerActions = ["flxAccountsHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
