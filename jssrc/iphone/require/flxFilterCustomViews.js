define("flxFilterCustomViews", function() {
    return function(controller) {
        var flxFilterCustomViews = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxFilterCustomViews",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxFilterCustomViews.setDefaultUnit(kony.flex.DP);
        var flxContentCV = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxContentCV",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxContentCV.setDefaultUnit(kony.flex.DP);
        var lblNameCV = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblNameCV",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSP26px",
            "text": "Custom Views",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "60%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxSeparatorCV = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorCV",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "sknFlxe3e3e3",
            "zIndex": 2
        }, {}, {});
        flxSeparatorCV.setDefaultUnit(kony.flex.DP);
        flxSeparatorCV.add();
        var flxManage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxManage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "width": "30%",
            "zIndex": 2
        }, {}, {});
        flxManage.setDefaultUnit(kony.flex.DP);
        var lblManage = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblManage",
            "isVisible": true,
            "maxNumberOfLines": 1,
            "right": 20,
            "skin": "sknLbl004B95SSPRegular26px",
            "text": kony.i18n.getLocalizedString("kony.mb.FilterAccounts.Manage"),
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxManage.add(lblManage);
        flxContentCV.add(lblNameCV, flxSeparatorCV, flxManage);
        flxFilterCustomViews.add(flxContentCV);
        return flxFilterCustomViews;
    }
})