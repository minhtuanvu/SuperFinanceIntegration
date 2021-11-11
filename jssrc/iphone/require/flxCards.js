define("flxCards", function() {
    return function(controller) {
        var flxCards = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxCards",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxCards.setDefaultUnit(kony.flex.DP);
        var flxCheckbox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCheckbox",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "6.25%",
            "skin": "slFbox",
            "top": "0%",
            "width": "10%",
            "zIndex": 1
        }, {}, {});
        flxCheckbox.setDefaultUnit(kony.flex.DP);
        var imgCheckbox = new kony.ui.Image2({
            "centerY": "50%",
            "height": "17dp",
            "id": "imgCheckbox",
            "isVisible": false,
            "right": "0%",
            "skin": "slImage",
            "src": "radiobuttoninactive.png",
            "width": "17dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCheckbox.add(imgCheckbox);
        var lblSeparator = new kony.ui.Label({
            "bottom": "0%",
            "height": "1dp",
            "id": "lblSeparator",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLble4e4e4Op100",
            "text": "5 Miles",
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
        var flxAccountName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxAccountName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "80%",
            "zIndex": 1
        }, {}, {});
        flxAccountName.setDefaultUnit(kony.flex.DP);
        var lblCard = new kony.ui.Label({
            "id": "lblCard",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "70%",
            "skin": "sknLbl72727SSPReg26px",
            "text": "Label",
            "textStyle": {},
            "top": "0dp",
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
        var lblAccountNumber = new kony.ui.Label({
            "id": "lblAccountNumber",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl72727SSPReg26px",
            "text": " ",
            "textStyle": {},
            "top": "0dp",
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
        flxAccountName.add(lblCard, lblAccountNumber);
        flxCards.add(flxCheckbox, lblSeparator, flxAccountName);
        return flxCards;
    }
})