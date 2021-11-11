define("flxPulldownheader", function() {
    return function(controller) {
        var flxPulldownheader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPulldownheader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxPulldownheader.setDefaultUnit(kony.flex.DP);
        var flxSeperatorTop = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperatorTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeperatorTop.setDefaultUnit(kony.flex.DP);
        flxSeperatorTop.add();
        var flxRecentTranactions = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "52dp",
            "id": "flxRecentTranactions",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBG345985",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRecentTranactions.setDefaultUnit(kony.flex.DP);
        var lblRecentTransactions = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblRecentTransactions",
            "isVisible": true,
            "skin": "sknLblB8DCFF",
            "text": "Recent Transactions",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxRecentTranactions.add(lblRecentTransactions);
        var flxSeperatorBottom = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperatorBottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeperatorBottom.setDefaultUnit(kony.flex.DP);
        flxSeperatorBottom.add();
        flxPulldownheader.add(flxSeperatorTop, flxRecentTranactions, flxSeperatorBottom);
        return flxPulldownheader;
    }
})