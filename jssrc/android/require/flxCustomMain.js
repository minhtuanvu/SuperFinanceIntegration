define("flxCustomMain", function() {
    return function(controller) {
        var flxCustomMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "focusSkin": "sknflx424242",
            "id": "flxCustomMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf9f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCustomMain.setDefaultUnit(kony.flex.DP);
        var lblHead = new kony.ui.Label({
            "id": "lblHead",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLbl949494SSPReg30px",
            "text": "Label",
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
        var lblValue = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblValue",
            "isVisible": true,
            "left": "5%",
            "skin": "newSknLblTab",
            "text": "Label",
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
        var flxline = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxline",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "5%",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "90%"
        }, {}, {});
        flxline.setDefaultUnit(kony.flex.DP);
        flxline.add();
        flxCustomMain.add(lblHead, lblValue, flxline);
        return flxCustomMain;
    }
})