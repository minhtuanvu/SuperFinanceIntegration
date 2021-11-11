define("userflxOnBoardingOptionController", {
    //Type your controller code here
});
define("flxOnBoardingOptionControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxOnBoardingOptionController", ["userflxOnBoardingOptionController", "flxOnBoardingOptionControllerActions"], function() {
    var controller = require("userflxOnBoardingOptionController");
    var controllerActions = ["flxOnBoardingOptionControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
