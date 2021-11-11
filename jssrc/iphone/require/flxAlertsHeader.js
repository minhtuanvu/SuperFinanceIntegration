define("flxAlertsHeader", function() {
    return function(controller) {
        var flxAlertsHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "42dp",
            "id": "flxAlertsHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF4F4F4",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAlertsHeader.setDefaultUnit(kony.flex.DP);
        var lblAlertsHeader = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAlertsHeader",
            "isVisible": true,
            "skin": "sknLbl3e4f56SSPLight24px",
            "text": "Promotional Alerts will get auto dismiss after 30 days",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxAlertsHeader.add(lblAlertsHeader);
        return flxAlertsHeader;
    }
})