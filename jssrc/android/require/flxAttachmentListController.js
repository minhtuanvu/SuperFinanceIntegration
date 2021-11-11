define("userflxAttachmentListController", {
    //Type your controller code here 
    removeClicked: function() {
        var currentForm = kony.application.getCurrentForm();
        currentForm.setContentOffset({
            x: "0%",
            y: "0%"
        }, true);
        currentForm.flxConfirmationPopUp.setVisibility(true);
        currentForm.flxConfirmationPopUp.flxYes.onClick = this.deleteAttachment;
        currentForm.flxConfirmationPopUp.flxNo.onClick = this.closeAttachmentsPopup;
    },
    deleteAttachment: function() {
        var index = kony.application.getCurrentForm().segAttachmentsList.selectedRowIndex;
        var sectionIndex = index[0];
        var rowIndex = index[1];
        var deletedAttachment = kony.application.getCurrentForm().segAttachmentsList.data[rowIndex];
        kony.application.getCurrentForm().segAttachmentsList.removeAt(rowIndex, sectionIndex);
        this.closeAttachmentsPopup();
        var controller = _kony.mvc.GetController('frmEuropeVerifyTransferDetails', true);
        controller.removeAttachments(deletedAttachment);
    },
    closeAttachmentsPopup: function() {
        var currentForm = kony.application.getCurrentForm();
        currentForm.flxConfirmationPopUp.setVisibility(false);
    },
});
define("flxAttachmentListControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_f2d58bfa29e74b7fa81fe1d4e1f5ddb0: function AS_FlexContainer_f2d58bfa29e74b7fa81fe1d4e1f5ddb0(eventobject, context) {
        var self = this;
        return self.removeClicked.call(this);
    }
});
define("flxAttachmentListController", ["userflxAttachmentListController", "flxAttachmentListControllerActions"], function() {
    var controller = require("userflxAttachmentListController");
    var controllerActions = ["flxAttachmentListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
