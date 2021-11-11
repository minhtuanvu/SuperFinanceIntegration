define("flxChargesBreakdown", function() {
    return function(controller) {
        var flxChargesBreakdown = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxChargesBreakdown",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxChargesBreakdown.setDefaultUnit(kony.flex.DP);
        var flxCharge = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCharge",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCharge.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272ssp40px",
            "text": "Reference ID",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "11dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDetails = new kony.ui.Label({
            "bottom": "6dp",
            "id": "lblDetails",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl000000424242SSP34PxTab",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCharge.add(lblTitle, lblDetails);
        flxChargesBreakdown.add(flxCharge);
        return flxChargesBreakdown;
    }
})