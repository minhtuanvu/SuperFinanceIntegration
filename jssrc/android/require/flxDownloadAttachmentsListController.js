define("userflxDownloadAttachmentsListController", {
    //Type your controller code here 
    downloadSingleFile: function() {
        var index = kony.application.getCurrentForm().segDownloadAttachments.selectedRowIndex;
        if (index.length > 0) {
            var rowIndex = index[1];
            if (rowIndex !== null) {
                var downloadedAttachment = kony.application.getCurrentForm().segDownloadAttachments.data[rowIndex];
                var formName = kony.application.getCurrentForm().id;
                var controller = _kony.mvc.GetController(formName, true);
                controller.downloadSingleFile(downloadedAttachment);
            }
        }
    }
});
define("flxDownloadAttachmentsListControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_afc81afc8aee40bbb8287245194749f0: function AS_FlexContainer_afc81afc8aee40bbb8287245194749f0(eventobject, context) {
        var self = this;
        return self.downloadSingleFile.call(this);
    }
});
define("flxDownloadAttachmentsListController", ["userflxDownloadAttachmentsListController", "flxDownloadAttachmentsListControllerActions"], function() {
    var controller = require("userflxDownloadAttachmentsListController");
    var controllerActions = ["flxDownloadAttachmentsListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
