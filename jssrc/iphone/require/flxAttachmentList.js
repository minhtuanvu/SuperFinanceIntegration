define("flxAttachmentList", function() {
    return function(controller) {
        var flxAttachmentList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "47dp",
            "id": "flxAttachmentList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAttachmentList.setDefaultUnit(kony.flex.DP);
        var flxAttachments = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "37dp",
            "id": "flxAttachments",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxE5E5EABorder17px",
            "top": "3dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxAttachments.setDefaultUnit(kony.flex.DP);
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
        var flxRemoveAttachment = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxRemoveAttachment",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_f2d58bfa29e74b7fa81fe1d4e1f5ddb0,
            "right": "10dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, {}, {});
        flxRemoveAttachment.setDefaultUnit(kony.flex.DP);
        var imgRemoveAttachment = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgRemoveAttachment",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "remove_attachment.png",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRemoveAttachment.add(imgRemoveAttachment);
        var lblAttachedDocumentID = new kony.ui.Label({
            "id": "lblAttachedDocumentID",
            "isVisible": false,
            "left": "84dp",
            "skin": "slLabel",
            "textStyle": {},
            "top": "5dp",
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
        flxAttachments.add(lblAttachment, flxRemoveAttachment, lblAttachedDocumentID);
        flxAttachmentList.add(flxAttachments);
        return flxAttachmentList;
    }
})