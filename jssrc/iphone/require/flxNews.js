define("flxNews", function() {
    return function(controller) {
        var flxNews = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNews",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxNews.setDefaultUnit(kony.flex.DP);
        var flxRow1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRow1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxRow1.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPR15px",
            "text": "Bloomberg",
            "textStyle": {},
            "top": 8,
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblTime = new kony.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl727272SSPR15px",
            "text": "1h ago",
            "textStyle": {},
            "top": 8,
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxRow1.add(lblTitle, lblTime);
        var lblNews = new kony.ui.Label({
            "id": "lblNews",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSPSemiBold26px",
            "text": "Amazon to offer permanent roles to 70% of 175,000 new U.S. hiresAmazon to offer permanent roles to 70% of 175,000 new U.S. hires",
            "textStyle": {},
            "top": "10dp",
            "width": "90%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "2dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "minWidth": "100%",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxe3e3e3",
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxNews.add(flxRow1, lblNews, flxSeparator);
        return flxNews;
    }
})