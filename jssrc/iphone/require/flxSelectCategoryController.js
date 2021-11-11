define("userflxSelectCategoryController", {
    //Type your controller code here
});
define("flxSelectCategoryControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSelectCategoryController", ["userflxSelectCategoryController", "flxSelectCategoryControllerActions"], function() {
    var controller = require("userflxSelectCategoryController");
    var controllerActions = ["flxSelectCategoryControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
