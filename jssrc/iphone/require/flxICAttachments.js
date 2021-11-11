define("flxICAttachments", function() {
    return function(controller) {
        var flxICAttachments = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxICAttachments",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxICAttachments.setDefaultUnit(kony.flex.DP);
        var flxAttachmentMainContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxAttachmentMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Bdr8Px",
            "top": "0dp",
            "width": "88%"
        }, {}, {});
        flxAttachmentMainContainer.setDefaultUnit(kony.flex.DP);
        var imgAttachment = new kony.ui.Image2({
            "centerY": "50%",
            "height": "25dp",
            "id": "imgAttachment",
            "isVisible": true,
            "left": "18dp",
            "src": "pdf.png",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblAttachment = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblAttachment",
            "isVisible": true,
            "left": "5%",
            "skin": "sknMMBlueLabel",
            "text": "Document 123.pdf",
            "textStyle": {},
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxAttachmentRemove = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAttachmentRemove",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%"
        }, {}, {});
        flxAttachmentRemove.setDefaultUnit(kony.flex.DP);
        var imgRemove = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgRemove",
            "isVisible": true,
            "right": "12dp",
            "src": "clear_1x.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAttachmentRemove.add(imgRemove);
        flxAttachmentMainContainer.add(imgAttachment, lblAttachment, flxAttachmentRemove);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxICAttachments.add(flxAttachmentMainContainer, flxSeparator);
        return flxICAttachments;
    }
})