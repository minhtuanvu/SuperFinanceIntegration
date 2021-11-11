define("flxDownloadAttachmentsList", function() {
    return function(controller) {
        var flxDownloadAttachmentsList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDownloadAttachmentsList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxDownloadAttachmentsList.setDefaultUnit(kony.flex.DP);
        var flxDownloadAttachments = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "37dp",
            "id": "flxDownloadAttachments",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxE5E5EABorder17px",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDownloadAttachments.setDefaultUnit(kony.flex.DP);
        var lblAttachment = new kony.ui.Label({
            "id": "lblAttachment",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLbl007aFFSSPBold",
            "text": "Label",
            "textStyle": {},
            "top": "7dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxDownloadAttachment = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxDownloadAttachment",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_afc81afc8aee40bbb8287245194749f0,
            "right": "10dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, {}, {});
        flxDownloadAttachment.setDefaultUnit(kony.flex.DP);
        var imgDownloadAttachment = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgDownloadAttachment",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "download.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDownloadAttachment.add(imgDownloadAttachment);
        flxDownloadAttachments.add(lblAttachment, flxDownloadAttachment);
        flxDownloadAttachmentsList.add(flxDownloadAttachments);
        return flxDownloadAttachmentsList;
    }
})