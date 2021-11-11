define("flxSelectUserId", function() {
    return function(controller) {
        var flxSelectUserId = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxSelectUserId",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSelectUserId.setDefaultUnit(kony.flex.DP);
        var lblUserId = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblUserId",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl424242SSPR15px",
            "text": "john.bailey",
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
        var imgIsUserSelected = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgIsUserSelected",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "radiobtn.png",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSelectUserId.add(lblUserId, imgIsUserSelected);
        return flxSelectUserId;
    }
})