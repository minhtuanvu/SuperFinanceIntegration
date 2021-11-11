define("flxAdditionalFeatures", function() {
    return function(controller) {
        var flxAdditionalFeatures = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAdditionalFeatures",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAdditionalFeatures.setDefaultUnit(kony.flex.DP);
        var imgDot = new kony.ui.Image2({
            "height": "6dp",
            "id": "imgDot",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "pageoffdot.png",
            "top": "10dp",
            "width": "6dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblProfileHeading = new kony.ui.Label({
            "bottom": 0,
            "id": "lblProfileHeading",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLbl424242SSP22px26",
            "text": "Profile",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxAdditionalFeatures.add(imgDot, lblProfileHeading);
        return flxAdditionalFeatures;
    }
})