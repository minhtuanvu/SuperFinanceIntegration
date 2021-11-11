define("userflxFilterAccountsHeaderExpCollapseController", {
    //Type your controller code here
    onViewCreated: function() {
        try {
            this.view.flxContent.onClick = this.rowOnClick;
        } catch (exc) {
            kony.print("Exception in onViewCreated!!!" + exc);
        }
    },
    rowOnClick: function(eventobject, context) {
        try {
            kony.print("Entered rowonClick");
            var secIndex = context["sectionIndex"];
            var rowIndex = context["rowIndex"];
            this.executeOnParent("headerSelectionDetected", {
                section: secIndex,
                row: rowIndex
            });
        } catch (exc) {
            kony.print("exception in rowonClick!!!" + exc);
        }
    },
});
define("flxFilterAccountsHeaderExpCollapseControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxFilterAccountsHeaderExpCollapseController", ["userflxFilterAccountsHeaderExpCollapseController", "flxFilterAccountsHeaderExpCollapseControllerActions"], function() {
    var controller = require("userflxFilterAccountsHeaderExpCollapseController");
    var controllerActions = ["flxFilterAccountsHeaderExpCollapseControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
