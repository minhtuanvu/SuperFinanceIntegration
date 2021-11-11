define("flxWealthMarket", function() {
    return function(controller) {
        var flxWealthMarket = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxWealthMarket",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxWealthMarket.setDefaultUnit(kony.flex.DP);
        var flxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "94%",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "90%"
        }, {}, {});
        flxContent.setDefaultUnit(kony.flex.DP);
        var lblMarketName = new kony.ui.Label({
            "centerY": "50.00%",
            "id": "lblMarketName",
            "isVisible": true,
            "maxNumberOfLines": 2,
            "maxWidth": "30%",
            "skin": "sknlbl727272SSP17px",
            "text": "NASDAQ COMPOSITE",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAmount = new kony.ui.Label({
            "centerY": "50.00%",
            "id": "lblAmount",
            "isVisible": true,
            "maxWidth": "30%",
            "skin": "sknlbl727272SSP17px",
            "text": "$1234,6789.000",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblProfitLoss = new kony.ui.Label({
            "centerY": "50.00%",
            "id": "lblProfitLoss",
            "isVisible": true,
            "maxWidth": "20%",
            "skin": "sknIWlbl2F8523SemiBold15px",
            "text": "+15.45 (+14.8%)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "37%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxContent.add(lblMarketName, lblAmount, lblProfitLoss);
        var flxShortSeperator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxShortSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxShortSeperator.setDefaultUnit(kony.flex.DP);
        flxShortSeperator.add();
        flxWealthMarket.add(flxContent, flxShortSeperator);
        return flxWealthMarket;
    }
})