define("flxInstrument", function() {
    return function(controller) {
        var flxInstrument = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxInstrument",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxInstrument.setDefaultUnit(kony.flex.DP);
        var lblInstrumentName = new kony.ui.Label({
            "id": "lblInstrumentName",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSPReg46px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblInstrumentDet = new kony.ui.Label({
            "id": "lblInstrumentDet",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272Reg28px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxBottomBorder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxBottomBorder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknflxe3e3e3border",
            "top": "7dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBottomBorder.setDefaultUnit(kony.flex.DP);
        flxBottomBorder.add();
        flxInstrument.add(lblInstrumentName, lblInstrumentDet, flxBottomBorder);
        return flxInstrument;
    }
})