define("userflxTransfersRowTemplateController", {
    onViewCreated: function(eObj) {
        try {
            this.view.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
                fingers: 1
            }, this.swipeGestureHandler);
        } catch (exc) {
            alert("Swipe Exception" + JSON.stringify(exc));
        }
    },
    swipeGestureHandler: function(widgetInfo, gestureInfo, context) {
        var mswipeDirection = gestureInfo.swipeDirection;
        var secIndex = context["sectionIndex"];
        var rowIndex = context["rowIndex"];
        var myInfo = {
            section: secIndex,
            row: rowIndex,
            swipeDirection: mswipeDirection
        };
        this.executeOnParent("swipeRowOption", myInfo);
    }
});
define("flxTransfersRowTemplateControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTransfersRowTemplateController", ["userflxTransfersRowTemplateController", "flxTransfersRowTemplateControllerActions"], function() {
    var controller = require("userflxTransfersRowTemplateController");
    var controllerActions = ["flxTransfersRowTemplateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
