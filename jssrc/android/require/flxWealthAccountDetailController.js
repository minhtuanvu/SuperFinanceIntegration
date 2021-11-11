define("userflxWealthAccountDetailController", {
    //Type your controller code here 
});
define("flxWealthAccountDetailControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxWealthAccountDetailController", ["userflxWealthAccountDetailController", "flxWealthAccountDetailControllerActions"], function() {
    var controller = require("userflxWealthAccountDetailController");
    var controllerActions = ["flxWealthAccountDetailControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
