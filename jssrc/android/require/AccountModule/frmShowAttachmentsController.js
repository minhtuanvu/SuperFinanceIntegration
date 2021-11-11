define("AccountModule/userfrmShowAttachmentsController", {
    //Type your controller code here 
    onNavigate: function() {
        this.postShow();
    },
    postShow: function() {
        var accMod = applicationManager.getModulesPresentationController("AccountModule");
        var navMan = applicationManager.getNavigationManager();
        var downloadAttachments = navMan.getCustomInfo("attachmentsList");
        if (downloadAttachments.length === 1) {
            this.view.btnDownload.text = applicationManager.getPresentationUtility().getStringFromi18n("i18n.common.Download");
        } else {
            this.view.btnDownload.text = applicationManager.getPresentationUtility().getStringFromi18n("i18n.common.DownloadAll");
        }
        var attachmentsData = [];
        for (var i = 0; i < downloadAttachments.length; i++) {
            attachmentsData[i] = {};
            attachmentsData[i].fileName = downloadAttachments[i].fileName;
            attachmentsData[i].fileID = downloadAttachments[i].fileID;
            attachmentsData[i]["imgDownloadAttachment"] = {
                "src": "download.png"
            };
        }
        this.view.segDownloadAttachments.widgetDataMap = {
            "lblAttachment": "fileName",
            "imgDownloadAttachment": "imgDownloadAttachment",
        };
        this.view.flxBack.onClick = this.navigateToTransactionDetails;
        this.view.segDownloadAttachments.setData(attachmentsData);
        this.view.btnDownload.onClick = function() {
            if (downloadAttachments.length > 0) {
                for (var i = 0; i < downloadAttachments.length; i++) {
                    var accMod = applicationManager.getModulesPresentationController("AccountModule");
                    accMod.downloadAttachments(false, downloadAttachments, i);
                    var downloadURL = navMan.getCustomInfo("downloadURL");
                    kony.application.openURL(downloadURL);
                }
            }
        };
    },
    navigateToTransactionDetails: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    downloadSingleFile: function(dataItem) {
        var accMod = applicationManager.getModulesPresentationController("AccountModule");
        var navMan = applicationManager.getNavigationManager();
        accMod.downloadAttachments(true, dataItem, 0);
        var downloadURL = navMan.getCustomInfo("downloadURL");
        kony.application.openURL(downloadURL);
    },
});
define("AccountModule/frmShowAttachmentsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_g4a56a9c842d4da490ee695eb714097c: function AS_Form_g4a56a9c842d4da490ee695eb714097c(eventobject) {
        var self = this;
        return self.onNavigate.call(this);
    }
});
define("AccountModule/frmShowAttachmentsController", ["AccountModule/userfrmShowAttachmentsController", "AccountModule/frmShowAttachmentsControllerActions"], function() {
    var controller = require("AccountModule/userfrmShowAttachmentsController");
    var controllerActions = ["AccountModule/frmShowAttachmentsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
