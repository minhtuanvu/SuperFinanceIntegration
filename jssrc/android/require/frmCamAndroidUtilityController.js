define("userfrmCamAndroidUtilityController", {
    //Type your controller code here
});
define("frmCamAndroidUtilityControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmCamAndroidUtilityController", ["userfrmCamAndroidUtilityController", "frmCamAndroidUtilityControllerActions"], function() {
    var controller = require("userfrmCamAndroidUtilityController");
    var controllerActions = ["frmCamAndroidUtilityControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
