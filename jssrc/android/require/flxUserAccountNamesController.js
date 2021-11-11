define("userflxUserAccountNamesController", {
    //Type your controller code here 
});
define("flxUserAccountNamesControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxUserAccountNamesController", ["userflxUserAccountNamesController", "flxUserAccountNamesControllerActions"], function() {
    var controller = require("userflxUserAccountNamesController");
    var controllerActions = ["flxUserAccountNamesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
