define("flxSelectCurrency", function() {
    return function(controller) {
        var flxSelectCurrency = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65dp",
            "id": "flxSelectCurrency",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSelectCurrency.setDefaultUnit(kony.flex.DP);
        var imgFlag = new kony.ui.Image2({
            "centerY": "50%",
            "height": "25dp",
            "id": "imgFlag",
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
        var lblCurrencyType = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCurrencyType",
            "isVisible": true,
            "left": "70dp",
            "skin": "sknLbl424242SSPReg30px",
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
        var flxCurrencyCode = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxCurrencyCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "62dp",
            "skin": "slFbox",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxCurrencyCode.setDefaultUnit(kony.flex.DP);
        var lblCurrencySymbol = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCurrencySymbol",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl727272SSPReg34Px",
            "text": "()",
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
        var lblCurrencyShortName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCurrencyShortName",
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
        flxCurrencyCode.add(lblCurrencySymbol, lblCurrencyShortName);
        flxSelectCurrency.add(imgFlag, lblCurrencyType, lblSeparator, imgChevron, flxCurrencyCode);
        return flxSelectCurrency;
    }
})