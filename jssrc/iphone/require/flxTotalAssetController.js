define("userflxTotalAssetController", {
    //Type your controller code here 
});
define("flxTotalAssetControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTotalAssetController", ["userflxTotalAssetController", "flxTotalAssetControllerActions"], function() {
    var controller = require("userflxTotalAssetController");
    var controllerActions = ["flxTotalAssetControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
