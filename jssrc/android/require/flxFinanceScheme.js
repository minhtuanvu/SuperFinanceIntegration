define("flxFinanceScheme", function() {
    return function(controller) {
        var flxFinanceScheme = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxFinanceScheme",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skninActive",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxFinanceScheme.setDefaultUnit(kony.flex.DP);
        var flxCircles = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "15dp",
            "id": "flxCircles",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0ca3d9ee081704b",
            "top": "0",
            "width": "15dp"
        }, {}, {});
        flxCircles.setDefaultUnit(kony.flex.DP);
        flxCircles.add();
        var lblSchemeName = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "lblSchemeName",
            "isVisible": true,
            "left": "25dp",
            "skin": "CopydefLabel0ce8cd0e12fb348",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSchemePercent = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "lblSchemePercent",
            "isVisible": true,
            "right": "20dp",
            "skin": "CopydefLabel0ce8cd0e12fb348",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxFinanceScheme.add(flxCircles, lblSchemeName, lblSchemePercent);
        return flxFinanceScheme;
    }
})