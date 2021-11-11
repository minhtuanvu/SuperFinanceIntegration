define("userflxSelectCardsController", {
    //Type your controller code here
});
define("flxSelectCardsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSelectCardsController", ["userflxSelectCardsController", "flxSelectCardsControllerActions"], function() {
    var controller = require("userflxSelectCardsController");
    var controllerActions = ["flxSelectCardsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
