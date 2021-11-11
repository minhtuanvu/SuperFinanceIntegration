define("flxLanguage", function() {
    return function(controller) {
        var flxLanguage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxLanguage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxLanguage.setDefaultUnit(kony.flex.DP);
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
        var lblLanguage = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblLanguage",
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
        var imgCheckbox = new kony.ui.Image2({
            "centerY": "50%",
            "height": "35dp",
            "id": "imgCheckbox",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "radiobuttoninactive.png",
            "width": "35dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
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
        flxLanguage.add(imgFlag, lblLanguage, imgCheckbox, lblSeparator);
        return flxLanguage;
    }
})