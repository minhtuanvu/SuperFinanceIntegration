define("userflxICAttachmentsController", {
    //Type your controller code here 
    onViewCreated: function() {
        try {
            this.view.flxAttachmentRemove.onClick = this.rowOnClick;
        } catch (exc) {
            kony.print("Exception in onViewCreated!!!" + exc);
        }
    },
    rowOnClick: function(eventobject, context) {
        try {
            kony.print("Entered rowonClick");
            var secIndex = context["sectionIndex"];
            var rowIndex = context["rowIndex"];
            var controller = _kony.mvc.GetController("MakeATransfer", true);
            controller.showRemoveAttachment({
                section: secIndex,
                row: rowIndex
            });
        } catch (exc) {
            //alert(JSON.stringify(exc));
            console.error(exc);
            kony.print("exception in rowonClick!!!" + exc);
        }
    },
});
define("flxICAttachmentsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxICAttachmentsController", ["userflxICAttachmentsController", "flxICAttachmentsControllerActions"], function() {
    var controller = require("userflxICAttachmentsController");
    var controllerActions = ["flxICAttachmentsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
