define("userflxExternalAccountsController", {
    //Type your controller code here
});
define("flxExternalAccountsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxExternalAccountsController", ["userflxExternalAccountsController", "flxExternalAccountsControllerActions"], function() {
    var controller = require("userflxExternalAccountsController");
    var controllerActions = ["flxExternalAccountsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
