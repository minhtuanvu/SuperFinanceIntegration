define("flxGuidelines", function() {
    return function(controller) {
        var flxGuidelines = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGuidelines",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox"
        }, {}, {});
        flxGuidelines.setDefaultUnit(kony.flex.DP);
        var lblBullet = new kony.ui.Label({
            "height": "9dp",
            "id": "lblBullet",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLblcfcfcfOp100cfcfcf100Radius",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "9dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblService = new kony.ui.Label({
            "bottom": "5dp",
            "id": "lblService",
            "isVisible": true,
            "left": "40dp",
            "right": "30dp",
            "skin": "sknLbl424242SSP93pr",
            "text": "ATM- 24 Hours",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxGuidelines.add(lblBullet, lblService);
        return flxGuidelines;
    }
})