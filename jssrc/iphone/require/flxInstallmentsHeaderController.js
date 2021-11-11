define("userflxInstallmentsHeaderController", {
    //Type your controller code here 
    onSectionClick: function(context) {
        this.executeOnParent("sectionClicked", context);
    }
});
define("flxInstallmentsHeaderControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_a6205b0ec0a04b53861cbb516c98108b: function AS_FlexContainer_a6205b0ec0a04b53861cbb516c98108b(eventobject, context) {
        var self = this;
        return self.onSectionClick.call(this, context);
    }
});
define("flxInstallmentsHeaderController", ["userflxInstallmentsHeaderController", "flxInstallmentsHeaderControllerActions"], function() {
    var controller = require("userflxInstallmentsHeaderController");
    var controllerActions = ["flxInstallmentsHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
