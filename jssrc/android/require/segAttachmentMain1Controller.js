define("usersegAttachmentMain1Controller", {
    //Type your controller code here 
    removeClicked: function(eventObject, context) {
        var currentForm = kony.application.getCurrentForm();
        currentForm.setContentOffset({
            x: "0%",
            y: "0%"
        }, true);
        currentForm.flxConfirmationPopUp.setVisibility(true);
        currentForm.flxConfirmationPopUp.flxYes.onClick = this.deleteAttachment.bind(this, context.rowIndex);
        currentForm.flxConfirmationPopUp.flxNo.onClick = this.closeAttachmentsPopup;
    },
    deleteAttachment: function(rowIndex) {
        var deletedAttachment = kony.application.getCurrentForm().segAttachments.data[rowIndex];
        kony.application.getCurrentForm().segAttachments.removeAt(rowIndex);
        this.closeAttachmentsPopup();
        var formName = kony.application.getCurrentForm().id;
        var controller = _kony.mvc.GetController(formName, true);
        controller.removeAttachments(deletedAttachment);
    },
    closeAttachmentsPopup: function() {
        var currentForm = kony.application.getCurrentForm();
        currentForm.flxConfirmationPopUp.setVisibility(false);
    },
});
define("segAttachmentMain1ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_c28a58fa27a6434d801382f107d3dbdc: function AS_FlexContainer_c28a58fa27a6434d801382f107d3dbdc(eventobject, context) {
        var self = this;
        return self.removeClicked.call(this, eventobject, context);
    }
});
define("segAttachmentMain1Controller", ["usersegAttachmentMain1Controller", "segAttachmentMain1ControllerActions"], function() {
    var controller = require("usersegAttachmentMain1Controller");
    var controllerActions = ["segAttachmentMain1ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
