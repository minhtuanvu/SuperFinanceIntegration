define("userflxtmpContainerController", {
    //Type your controller code here 
    onClickDelete: function(eventobject, context) {
        var row_index = (context.rowIndex);
        this.executeOnParent("deleteService", row_index);
    }
});
define("flxtmpContainerControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_e66c67cebd064509a782d6a21b6c7af6: function AS_Button_e66c67cebd064509a782d6a21b6c7af6(eventobject, context) {
        var self = this;
        this.onClickDelete(eventobject, context);
    }
});
define("flxtmpContainerController", ["userflxtmpContainerController", "flxtmpContainerControllerActions"], function() {
    var controller = require("userflxtmpContainerController");
    var controllerActions = ["flxtmpContainerControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
