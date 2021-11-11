define("flxCombinedStatementShowFilter", function() {
    return function(controller) {
        var flxCombinedStatementShowFilter = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCombinedStatementShowFilter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCombinedStatementShowFilter.setDefaultUnit(kony.flex.DP);
        var flxAccounts = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknflxf6f6f6Radius0px",
            "height": "58dp",
            "id": "flxAccounts",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxEBEBEB",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxAccounts.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblName",
            "isVisible": true,
            "skin": "sknLbl007aFFSSP",
            "text": "View All Accounts",
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
        var flxAccountsSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxAccountsSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxe",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxAccountsSeparator.setDefaultUnit(kony.flex.DP);
        flxAccountsSeparator.add();
        flxAccounts.add(lblName, flxAccountsSeparator);
        flxCombinedStatementShowFilter.add(flxAccounts);
        return flxCombinedStatementShowFilter;
    }
})