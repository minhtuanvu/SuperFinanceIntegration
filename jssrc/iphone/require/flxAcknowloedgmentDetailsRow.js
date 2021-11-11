define("flxAcknowloedgmentDetailsRow", function() {
    return function(controller) {
        var flxAcknowloedgmentDetailsRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAcknowloedgmentDetailsRow",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAcknowloedgmentDetailsRow.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLbl727272ssp40px",
            "text": "Reference ID",
            "textStyle": {},
            "top": "11dp",
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
        var flxcontent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxcontent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxcontent.setDefaultUnit(kony.flex.DP);
        var flxAccountType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "6dp",
            "clipBounds": true,
            "height": "22dp",
            "id": "flxAccountType",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15dp",
            "isModalContainer": false,
            "skin": "sknflxe3e3e3border",
            "top": "5dp",
            "width": "22dp",
            "zIndex": 1
        }, {}, {});
        flxAccountType.setDefaultUnit(kony.flex.DP);
        var imgAccountType = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "45%",
            "height": "11dp",
            "id": "imgAccountType",
            "isVisible": true,
            "skin": "slImage",
            "src": "personalaccount.png",
            "width": "11dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAccountType.add(imgAccountType);
        var lblDetails = new kony.ui.Label({
            "bottom": "6dp",
            "id": "lblDetails",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLbl000000424242SSP34PxTab",
            "text": "Label",
            "textStyle": {},
            "top": "6dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxcontent.add(flxAccountType, lblDetails);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5.33%",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "89.33%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxAcknowloedgmentDetailsRow.add(lblTitle, flxcontent, flxSeparator);
        return flxAcknowloedgmentDetailsRow;
    }
})