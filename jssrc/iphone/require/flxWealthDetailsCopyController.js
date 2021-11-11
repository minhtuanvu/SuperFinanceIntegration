define("userflxWealthDetailsCopyController", {
    onViewCreated: function(eObj) {
        try {
            this.view.flxClick.onClick = this.onActionSelect;
        } catch (exc) {
            alert("Click Exception" + JSON.stringify(exc));
        }
    },
    onActionSelect: function(widgetInfo, context) {
        var rowIndex = context["rowIndex"];
        var myInfo = {
            row: rowIndex
        };
        var currentFormObject = kony.application.getCurrentForm();
        currentFormObject.segmentDetailsWealth.onActionSelect(myInfo);
    }
});
define("flxWealthDetailsCopyControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxWealthDetailsCopyController", ["userflxWealthDetailsCopyController", "flxWealthDetailsCopyControllerActions"], function() {
    var controller = require("userflxWealthDetailsCopyController");
    var controllerActions = ["flxWealthDetailsCopyControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
