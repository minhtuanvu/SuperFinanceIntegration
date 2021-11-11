define("flxMessagesWithoutReqIdCategoryController", ["userflxMessagesWithoutReqIdCategoryController", "flxMessagesWithoutReqIdCategoryControllerActions"], function() {
    var controller = require("userflxMessagesWithoutReqIdCategoryController");
    var controllerActions = ["flxMessagesWithoutReqIdCategoryControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
