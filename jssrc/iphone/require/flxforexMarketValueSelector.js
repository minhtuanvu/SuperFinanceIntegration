define("flxforexMarketValueSelector", function() {
    return function(controller) {
        var flxforexMarketValueSelector = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxforexMarketValueSelector",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxforexMarketValueSelector.setDefaultUnit(kony.flex.DP);
        var lblCurrency = new kony.ui.Label({
            "id": "lblCurrency",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPR",
            "text": "Label",
            "textStyle": {},
            "top": "10dp",
            "width": "90.40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblmarketValue = new kony.ui.Label({
            "id": "lblmarketValue",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSPR25px",
            "text": "Label",
            "textStyle": {},
            "top": "2dp",
            "width": "90.40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxSpace = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxSpace",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSpace.setDefaultUnit(kony.flex.DP);
        flxSpace.add();
        var flxSeparatorAP = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorAP",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparatorAP.setDefaultUnit(kony.flex.DP);
        flxSeparatorAP.add();
        flxforexMarketValueSelector.add(lblCurrency, lblmarketValue, flxSpace, flxSeparatorAP);
        return flxforexMarketValueSelector;
    }
})