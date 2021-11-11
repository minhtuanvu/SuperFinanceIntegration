define("FeedBackModule/userfrmFeedbackEntryController", {
    //Type your controller code here
});
define("FeedBackModule/frmFeedbackEntryControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("FeedBackModule/frmFeedbackEntryController", ["FeedBackModule/userfrmFeedbackEntryController", "FeedBackModule/frmFeedbackEntryControllerActions"], function() {
    var controller = require("FeedBackModule/userfrmFeedbackEntryController");
    var controllerActions = ["FeedBackModule/frmFeedbackEntryControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
