define("flxYears", function() {
    return function(controller) {
        var flxYears = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlxF6F6F6BgRadius29px",
            "height": "52dp",
            "id": "flxYears",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxYears.setDefaultUnit(kony.flex.DP);
        var lblYear = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblYear",
            "isVisible": true,
            "skin": "sknlbl424242SSPR15dp",
            "text": "Label",
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
        flxYears.add(lblYear);
        return flxYears;
    }
})