define("userflxDownloadOptionsController", {
    //Type your controller code here 
});
define("flxDownloadOptionsControllerActions", {
    //Type your controller code here 
});
define("flxDownloadOptionsController", ["userflxDownloadOptionsController", "flxDownloadOptionsControllerActions"], function() {
    var controller = require("userflxDownloadOptionsController");
    var controllerActions = ["flxDownloadOptionsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
