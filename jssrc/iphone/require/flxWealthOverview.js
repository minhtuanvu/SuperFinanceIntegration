define("flxWealthOverview", function() {
    return function(controller) {
        var flxWealthOverview = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxWealthOverview",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxWealthOverview.setDefaultUnit(kony.flex.DP);
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
        var lblDate = new kony.ui.Label({
            "id": "lblDate",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 2,
            "maxWidth": "30%",
            "skin": "sknLbl424242SSP93pr",
            "text": "10/31/2020",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "15dp",
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxPortfolio = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPortfolio",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "33%"
        }, {}, {});
        flxPortfolio.setDefaultUnit(kony.flex.DP);
        var lblPercentage = new kony.ui.Label({
            "id": "lblPercentage",
            "isVisible": true,
            "left": "0",
            "maxWidth": "30%",
            "skin": "sknIWlbl2F8523SSPR15px",
            "text": "+14.25%",
            "textStyle": {},
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblAmount = new kony.ui.Label({
            "id": "lblAmount",
            "isVisible": true,
            "left": "0",
            "maxWidth": "30%",
            "skin": "ICSknLblSSP42424213px",
            "text": "+14.25%",
            "textStyle": {},
            "top": 2,
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxPortfolio.add(lblPercentage, lblAmount);
        var lblProfitLoss = new kony.ui.Label({
            "id": "lblProfitLoss",
            "isVisible": true,
            "maxWidth": "20%",
            "skin": "sknIWlbl2F8523SSPR15px",
            "text": "+15.45 (+14.8%)",
            "textStyle": {},
            "top": "15dp",
            "width": "37%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxContent.add(lblDate, flxPortfolio, lblProfitLoss);
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
        flxWealthOverview.add(flxContent, flxShortSeperator);
        return flxWealthOverview;
    }
})