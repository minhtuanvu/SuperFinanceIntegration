define("flxSelectTPP", function() {
    return function(controller) {
        var flxSelectTPP = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65dp",
            "id": "flxSelectTPP",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSelectTPP.setDefaultUnit(kony.flex.DP);
        var imgTPP = new kony.ui.Image2({
            "centerY": "50%",
            "height": "25dp",
            "id": "imgTPP",
            "imageWhenFailed": "imagedrag.png",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxLblTPP = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxLblTPP",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 70,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "45%"
        }, {}, {});
        flxLblTPP.setDefaultUnit(kony.flex.DP);
        var lblTPP = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTPP",
            "isVisible": true,
            "left": 0,
            "skin": "sknLbl424242SSPReg30px",
            "text": "Label",
            "textStyle": {},
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxLblTPP.add(lblTPP);
        var lblSeparator = new kony.ui.Label({
            "bottom": "0dp",
            "height": "1dp",
            "id": "lblSeparator",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlblSeparatorf6f6f6",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var imgChevron = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgChevron",
            "isVisible": true,
            "right": "15dp",
            "skin": "slImage",
            "src": "chevron_1.png",
            "width": "31dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxDaysLeft = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxDaysLeft",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "50dp",
            "skin": "slFbox",
            "width": "40%",
            "zIndex": 1
        }, {}, {});
        flxDaysLeft.setDefaultUnit(kony.flex.DP);
        var lblDaysLeft = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDaysLeft",
            "isVisible": true,
            "right": "2dp",
            "skin": "sknLbl727272SSPReg34Px",
            "text": "Label",
            "textStyle": {},
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
        flxDaysLeft.add(lblDaysLeft);
        flxSelectTPP.add(imgTPP, flxLblTPP, lblSeparator, imgChevron, flxDaysLeft);
        return flxSelectTPP;
    }
})