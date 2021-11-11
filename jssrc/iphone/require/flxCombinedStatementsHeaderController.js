define("userflxCombinedStatementsHeaderController", {
    onSectionClick: function(context) {
        this.executeOnParent("sectionClicked", context);
    },
    toggleCheckBox: function(context) {
        this.executeOnParent("toggleSegmentAccountCheckbox", context);
    },
});
define("flxCombinedStatementsHeaderControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_ac650cd4012c4f648b82aae03273687c: function AS_FlexContainer_ac650cd4012c4f648b82aae03273687c(eventobject, context) {
        var self = this;
        return self.onSectionClick.call(this, context);
    },
    AS_FlexContainer_eb7a16aaebd44d94974c4f1f9f6c6afc: function AS_FlexContainer_eb7a16aaebd44d94974c4f1f9f6c6afc(eventobject, context) {
        var self = this;
        return self.toggleCheckBox.call(this, context);
    }
});
define("flxCombinedStatementsHeaderController", ["userflxCombinedStatementsHeaderController", "flxCombinedStatementsHeaderControllerActions"], function() {
    var controller = require("userflxCombinedStatementsHeaderController");
    var controllerActions = ["flxCombinedStatementsHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
