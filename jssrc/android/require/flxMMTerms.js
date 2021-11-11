define("flxMMTerms", function() {
    return function(controller) {
        var flxMMTerms = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMMTerms",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMMTerms.setDefaultUnit(kony.flex.DP);
        var lblDot = new kony.ui.Label({
            "id": "lblDot",
            "isVisible": true,
            "left": "40dp",
            "skin": "sknMMDot",
            "text": ".",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "-1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTerms = new kony.ui.Label({
            "id": "lblTerms",
            "isVisible": true,
            "left": "60dp",
            "right": "40dp",
            "skin": "sknMMTerms",
            "text": "You can manage how and when you receive  p2p notificationsYou can manage how and when you receive  p2p notifications",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "4dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 6],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxMMTerms.add(lblDot, lblTerms);
        return flxMMTerms;
    }
})