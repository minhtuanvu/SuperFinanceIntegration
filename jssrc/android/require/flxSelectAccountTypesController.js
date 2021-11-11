define("userflxSelectAccountTypesController", {
    //Type your controller code here
});
define("flxSelectAccountTypesControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSelectAccountTypesController", ["userflxSelectAccountTypesController", "flxSelectAccountTypesControllerActions"], function() {
    var controller = require("userflxSelectAccountTypesController");
    var controllerActions = ["flxSelectAccountTypesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
