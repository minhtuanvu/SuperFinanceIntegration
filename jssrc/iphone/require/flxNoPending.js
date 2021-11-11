define("flxNoPending", function() {
    return function(controller) {
        var flxNoPending = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "80dp",
            "id": "flxNoPending",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxNoPending.setDefaultUnit(kony.flex.DP);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxContent.setDefaultUnit(kony.flex.DP);
        var imgWarning = new kony.ui.Image2({
            "centerY": "50%",
            "height": "25dp",
            "id": "imgWarning",
            "isVisible": true,
            "left": "19dp",
            "skin": "slImage",
            "src": "info_icon.png",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTransactionPending = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTransactionPending",
            "isVisible": true,
            "left": "55dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.NoPendingTransactionsApproval"),
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxContent.add(imgWarning, lblTransactionPending);
        flxNoPending.add(flxSeparator, flxContent);
        return flxNoPending;
    }
})