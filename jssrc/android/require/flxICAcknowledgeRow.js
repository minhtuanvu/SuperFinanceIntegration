define("flxICAcknowledgeRow", function() {
    return function(controller) {
        var flxICAcknowledgeRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxICAcknowledgeRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxICAcknowledgeRow.setDefaultUnit(kony.flex.DP);
        var lblFieldLabel = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblFieldLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727245px",
            "text": "Field Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblFieldValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblFieldValue",
            "isVisible": true,
            "right": "0dp",
            "skin": "ICSknLbl42424245PX",
            "text": "Field Value",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxICAcknowledgeRow.add(lblFieldLabel, lblFieldValue, flxSeparator);
        return flxICAcknowledgeRow;
    }
})