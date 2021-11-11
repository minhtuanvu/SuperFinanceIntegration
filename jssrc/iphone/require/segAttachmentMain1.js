define("segAttachmentMain1", function() {
    return function(controller) {
        var segAttachmentMain1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "slFbox",
            "height": "52dp",
            "id": "segAttachmentMain1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        segAttachmentMain1.setDefaultUnit(kony.flex.DP);
        var flxAttachment = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50.00%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "42dp",
            "id": "flxAttachment",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf9f9f9Bordere3e3e3R4px",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxAttachment.setDefaultUnit(kony.flex.DP);
        var imgAttachment = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgAttachment",
            "isVisible": true,
            "left": "16dp",
            "skin": "slImage",
            "src": "pdf_image.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblAttachment = new kony.ui.Label({
            "centerY": "50%",
            "height": "35dp",
            "id": "lblAttachment",
            "isVisible": true,
            "left": "45dp",
            "skin": "sknLbl0095e4SSPRegular26px",
            "text": "Statement Dec.pdf",
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
        var flxRemoveAttachment = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "35dp",
            "id": "flxRemoveAttachment",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_c28a58fa27a6434d801382f107d3dbdc,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "35dp",
            "zIndex": 1
        }, {}, {});
        flxRemoveAttachment.setDefaultUnit(kony.flex.DP);
        var imgRemoveAttachment = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgRemoveAttachment",
            "isVisible": true,
            "skin": "slImage",
            "src": "download.png",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRemoveAttachment.add(imgRemoveAttachment);
        var lblAttachmentId = new kony.ui.Label({
            "id": "lblAttachmentId",
            "isVisible": false,
            "left": "176dp",
            "text": "Label",
            "textStyle": {},
            "top": "3dp",
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
        flxAttachment.add(imgAttachment, lblAttachment, flxRemoveAttachment, lblAttachmentId);
        segAttachmentMain1.add(flxAttachment);
        return segAttachmentMain1;
    }
})