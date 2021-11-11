define("flexSelectCurrencyContainer", function() {
    return function(controller) {
        var flexSelectCurrencyContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65dp",
            "id": "flexSelectCurrencyContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flexSelectCurrencyContainer.setDefaultUnit(kony.flex.DP);
        var imgFlag = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgFlag",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "22dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCurrencyType = new kony.ui.Label({
            "id": "lblCurrencyType",
            "isVisible": true,
            "left": "70dp",
            "skin": "sknlbl424242ssp40px",
            "text": "Label",
            "textStyle": {},
            "top": "22dp",
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
            "bottom": "1dp",
            "height": "1dp",
            "id": "lblSeparator",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblSeparatore3e3e3",
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
        var imgRadio = new kony.ui.Image2({
            "height": "30dp",
            "id": "imgRadio",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "radiobuttoninactive_big.png",
            "top": "22dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexSelectCurrencyContainer.add(imgFlag, lblCurrencyType, lblSeparator, imgRadio);
        return flexSelectCurrencyContainer;
    }
})