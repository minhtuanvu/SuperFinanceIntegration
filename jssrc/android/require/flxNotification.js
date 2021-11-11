define("flxNotification", function() {
    return function(controller) {
        var flxNotification = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNotification",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxNotification.setDefaultUnit(kony.flex.DP);
        var flxNotificationInner = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNotificationInner",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxNotificationInner.setDefaultUnit(kony.flex.DP);
        var lblNotification = new kony.ui.Label({
            "id": "lblNotification",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLbl42424215pxSSPR",
            "text": "Sign in Notification",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxNotificationInner.add(lblNotification);
        var lblDateTime = new kony.ui.Label({
            "bottom": "20dp",
            "id": "lblDateTime",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl72727215pxSSPR",
            "text": "02/12/2021, 10:30am",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxNotification.add(flxNotificationInner, lblDateTime);
        return flxNotification;
    }
})