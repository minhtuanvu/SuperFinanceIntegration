define("userflxCuratedNewsSFController", {
    //Type your controller code here 
});
define("flxCuratedNewsSFControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCuratedNewsSFController", ["userflxCuratedNewsSFController", "flxCuratedNewsSFControllerActions"], function() {
    var controller = require("userflxCuratedNewsSFController");
    var controllerActions = ["flxCuratedNewsSFControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
