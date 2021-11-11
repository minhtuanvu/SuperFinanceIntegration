define("userflxAccountNamesController", {
    //Type your controller code here 
});
define("flxAccountNamesControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAccountNamesController", ["userflxAccountNamesController", "flxAccountNamesControllerActions"], function() {
    var controller = require("userflxAccountNamesController");
    var controllerActions = ["flxAccountNamesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
