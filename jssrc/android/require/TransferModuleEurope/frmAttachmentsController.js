define("TransferModuleEurope/userfrmAttachmentsController", {
    //Type your controller code here 
    onNavigate: function() {
        this.postShow();
    },
    postShow: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        var navMan = applicationManager.getNavigationManager();
        var downloadAttachments = navMan.getCustomInfo("downloadAttachments");
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
        this.view.flxBack.onClick = this.navigateToTransferDetails;
        this.view.segDownloadAttachments.setData(attachmentsData);
        this.view.btnDownload.onClick = function() {
            if (downloadAttachments.length > 0) {
                for (var i = 0; i < downloadAttachments.length; i++) {
                    var transMod = applicationManager.getModulesPresentationController("TransferModule");
                    transMod.downloadAttachments(false, downloadAttachments, i);
                    var downloadURL = navMan.getCustomInfo("downloadURL");
                    kony.application.openURL(downloadURL);
                }
            }
        };
    },
    navigateToTransferDetails: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    downloadSingleFile: function(dataItem) {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.downloadAttachments(true, dataItem, 0);
        var navMan = applicationManager.getNavigationManager();
        var downloadURL = navMan.getCustomInfo("downloadURL");
        kony.application.openURL(downloadURL);
    },
});
define("TransferModuleEurope/frmAttachmentsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b8e1831f3f5b40ac94edcbe2fd6a57bd: function AS_Form_b8e1831f3f5b40ac94edcbe2fd6a57bd(eventobject) {
        var self = this;
        return self.onNavigate.call(this);
    }
});
define("TransferModuleEurope/frmAttachmentsController", ["TransferModuleEurope/userfrmAttachmentsController", "TransferModuleEurope/frmAttachmentsControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmAttachmentsController");
    var controllerActions = ["TransferModuleEurope/frmAttachmentsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
