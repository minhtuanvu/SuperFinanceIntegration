define("userflxWealthMarketController", {
    //Type your controller code here 
});
define("flxWealthMarketControllerActions", {
    //Type your controller code here 
});
define("flxWealthMarketController", ["userflxWealthMarketController", "flxWealthMarketControllerActions"], function() {
    var controller = require("userflxWealthMarketController");
    var controllerActions = ["flxWealthMarketControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
