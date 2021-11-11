define("flxContactType", function() {
    return function(controller) {
        var flxContactType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxContactType",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxContactType.setDefaultUnit(kony.flex.DP);
        var flxContactTypeMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxContactTypeMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {}, {});
        flxContactTypeMain.setDefaultUnit(kony.flex.DP);
        var lblContactType = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblContactType",
            "isVisible": true,
            "left": 0,
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxContactTypeMain.add(lblContactType);
        flxContactType.add(flxContactTypeMain);
        return flxContactType;
    }
})