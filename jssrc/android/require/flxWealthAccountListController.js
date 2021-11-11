define("userflxWealthAccountListController", {
    //Type your controller code here 
});
define("flxWealthAccountListControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxWealthAccountListController", ["userflxWealthAccountListController", "flxWealthAccountListControllerActions"], function() {
    var controller = require("userflxWealthAccountListController");
    var controllerActions = ["flxWealthAccountListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
