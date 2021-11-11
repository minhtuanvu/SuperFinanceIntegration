define("flxStatementYears", function() {
    return function(controller) {
        var flxStatementYears = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxStatementYears",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxStatementYears.setDefaultUnit(kony.flex.DP);
        var lblReason = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblReason",
            "isVisible": true,
            "left": "74dp",
            "skin": "sknLbl727272SSPR15px",
            "text": "Phone Number",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxStatementYears.add(lblReason);
        return flxStatementYears;
    }
})