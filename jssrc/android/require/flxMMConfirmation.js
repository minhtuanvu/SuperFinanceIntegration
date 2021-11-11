define("flxMMConfirmation", function() {
    return function(controller) {
        var flxMMConfirmation = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxMMConfirmation",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMMConfirmation.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272ssp40px",
            "text": "Reference ID",
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
        var flxRightWrapper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxRightWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxRightWrapper.setDefaultUnit(kony.flex.DP);
        var lblValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblValue",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknlbl424242ssp40px",
            "text": "12334556788",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRightWrapper.add(lblValue);
        var imgdottedline = new kony.ui.Image2({
            "bottom": "1dp",
            "height": "2dp",
            "id": "imgdottedline",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "slImage",
            "src": "line.png",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMMConfirmation.add(lblTitle, flxRightWrapper, imgdottedline);
        return flxMMConfirmation;
    }
})