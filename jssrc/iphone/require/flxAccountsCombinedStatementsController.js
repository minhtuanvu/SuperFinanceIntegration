define("userflxAccountsCombinedStatementsController", {
    //Type your controller code here 
    toggleSegRowCheckBox: function(context) {
        this.executeOnParent("toggleSegmentRowCheckbox", context);
    }
});
define("flxAccountsCombinedStatementsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_c1fd4fa7f5ea4f4da5b9c484ccdd07b6: function AS_FlexContainer_c1fd4fa7f5ea4f4da5b9c484ccdd07b6(eventobject, context) {
        var self = this;
        return self.toggleSegRowCheckBox.call(this, context);
    }
});
define("flxAccountsCombinedStatementsController", ["userflxAccountsCombinedStatementsController", "flxAccountsCombinedStatementsControllerActions"], function() {
    var controller = require("userflxAccountsCombinedStatementsController");
    var controllerActions = ["flxAccountsCombinedStatementsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
