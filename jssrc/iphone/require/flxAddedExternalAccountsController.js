define("userflxAddedExternalAccountsController", {
    onViewCreated: function(eObj) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start flxAddedExternalAccountsController : onViewCreated ####");
            var currentForm = navManager.getCurrentForm();
            if (currentForm !== "frmExternalAccountsList") this.view.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
                fingers: 1
            }, this.swipeGestureHandler);
        } catch (exc) {
            loggerManager.log("#### in catch " + JSON.stringify(exc) + " ####");
        }
    },
    swipeGestureHandler: function(widgetInfo, gestureInfo, context) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start flxAddedExternalAccountsController : swipeGestureHandler ####");
            var mswipeDirection = gestureInfo.swipeDirection;
            var secIndex = context["sectionIndex"];
            var rowIndex = context["rowIndex"];
            var myInfo = {
                section: secIndex,
                row: rowIndex,
                swipeDirection: mswipeDirection
            };
            this.executeOnParent("swipeDetected", myInfo);
        } catch (exc) {
            loggerManager.log("#### in catch " + JSON.stringify(exc) + " ####");
        }
    },
    onDeleteRow: function(eventobject, context) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start flxAddedExternalAccountsController : onDeleteRow ####");
            var secIndex = context["sectionIndex"];
            var rowIndex = context["rowIndex"];
            this.executeOnParent("deleteRowDetected", {
                section: secIndex,
                row: rowIndex
            });
        } catch (exc) {
            loggerManager.log("#### in catch " + JSON.stringify(exc) + " ####");
        }
    }
});
define("flxAddedExternalAccountsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_c4637f4a13bf44bc8d43b03734acee6e: function AS_FlexContainer_c4637f4a13bf44bc8d43b03734acee6e(eventobject, context) {
        var self = this;
        this.onDeleteRow(eventobject, context);
    }
});
define("flxAddedExternalAccountsController", ["userflxAddedExternalAccountsController", "flxAddedExternalAccountsControllerActions"], function() {
    var controller = require("userflxAddedExternalAccountsController");
    var controllerActions = ["flxAddedExternalAccountsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
