define("userflxTransHeaderNoDropDownController", {
    //Type your controller code here
    onSectionClick: function(context) {
        this.executeOnParent("sectionClicked", context);
    }
});
define("flxTransHeaderNoDropDownControllerActions", {
    //Type your controller code here
    onSectionClick: function(context) {
        this.executeOnParent("sectionClicked", context);
    }
});
define("flxTransHeaderNoDropDownController", ["userflxTransHeaderNoDropDownController", "flxTransHeaderNoDropDownControllerActions"], function() {
    var controller = require("userflxTransHeaderNoDropDownController");
    var controllerActions = ["flxTransHeaderNoDropDownControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
