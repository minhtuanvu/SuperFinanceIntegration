define("flxMonthlyStatements", function() {
    return function(controller) {
        var flxMonthlyStatements = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "56dp",
            "id": "flxMonthlyStatements",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMonthlyStatements.setDefaultUnit(kony.flex.DP);
        var lblSeparator = new kony.ui.Label({
            "height": "1dp",
            "id": "lblSeparator",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLblSeparatore3e3e3",
            "textStyle": {},
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var btnMonth = new kony.ui.Button({
            "id": "btnMonth",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknBtnffffff424242SSP26px",
            "text": "Button",
            "top": "16dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
        flxMonthlyStatements.add(lblSeparator, btnMonth);
        return flxMonthlyStatements;
    }
})