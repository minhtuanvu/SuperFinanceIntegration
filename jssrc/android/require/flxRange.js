define("flxRange", function() {
    return function(controller) {
        var flxRange = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "slFbox",
            "height": "45dp",
            "id": "flxRange",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox"
        }, {}, {});
        flxRange.setDefaultUnit(kony.flex.DP);
        var lblRange = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblRange",
            "isVisible": true,
            "left": "3.13%",
            "skin": "sknlbl727272SSP93pr",
            "text": "5 Miles",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSeparator = new kony.ui.Label({
            "bottom": "0%",
            "height": "1dp",
            "id": "lblSeparator",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLble4e4e4Op100",
            "text": "5 Miles",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgCheckbox = new kony.ui.Image2({
            "centerY": "50%",
            "height": "17dp",
            "id": "imgCheckbox",
            "isVisible": true,
            "right": "3.13%",
            "skin": "slImage",
            "src": "radiobuttoninactive.png",
            "width": "17dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRange.add(lblRange, lblSeparator, imgCheckbox);
        return flxRange;
    }
})