define("userCopyflxtmpContainerController", {
    //Type your controller code here 
    onClickDelete: function(eventobject, context) {
        var row_index = (context.rowIndex);
        this.executeOnParent("deleteService", row_index);
    }
});
define("CopyflxtmpContainerControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_ef20af1c62de4553988b2b947f43fcd6: function AS_Button_ef20af1c62de4553988b2b947f43fcd6(eventobject, context) {
        var self = this;
        this.onClickDelete(eventobject, context);
    }
});
define("CopyflxtmpContainerController", ["userCopyflxtmpContainerController", "CopyflxtmpContainerControllerActions"], function() {
    var controller = require("userCopyflxtmpContainerController");
    var controllerActions = ["CopyflxtmpContainerControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
