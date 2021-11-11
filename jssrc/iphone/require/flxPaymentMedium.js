define("flxPaymentMedium", function() {
    return function(controller) {
        var flxPaymentMedium = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "blur": {
                "enabled": false,
                "value": 0
            },
            "clipBounds": true,
            "focusSkin": "sknFlxf9f9f9",
            "id": "flxPaymentMedium",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxPaymentMedium.setDefaultUnit(kony.flex.DP);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "17dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var imgChevron = new kony.ui.Image2({
            "centerY": 50,
            "height": "40dp",
            "id": "imgChevron",
            "isVisible": true,
            "right": 20,
            "skin": "slImage",
            "src": "chevronright.png",
            "top": "0dp",
            "width": "40dp",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "20dp",
            "right": "50dp",
            "skin": "sknLbl4176A4SSPReg26px",
            "text": "Normal Payment",
            "textStyle": {},
            "top": "9dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblDescription = new kony.ui.Label({
            "id": "lblDescription",
            "isVisible": true,
            "left": "20dp",
            "right": "80dp",
            "skin": "sknLbl727272S112",
            "text": "This is a description of normal payment. Plus adding a second line. Now adding 3rd line and checking.",
            "textStyle": {},
            "top": "35dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 3],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxPaymentMedium.add(flxSeparator, imgChevron, lblTitle, lblDescription);
        return flxPaymentMedium;
    }
})