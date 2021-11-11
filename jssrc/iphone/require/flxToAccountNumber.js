define("flxToAccountNumber", function() {
    return function(controller) {
        var flxToAccountNumber = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "120dp",
            "id": "flxToAccountNumber",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxToAccountNumber.setDefaultUnit(kony.flex.DP);
        var flxNickName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxNickName",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxNickName.setDefaultUnit(kony.flex.DP);
        var lblNickName = new kony.ui.Label({
            "id": "lblNickName",
            "isVisible": true,
            "left": "19dp",
            "skin": "sknLbla0a0a0SSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.p2p.recipientName"),
            "textStyle": {},
            "top": "5dp",
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
        var lblNickNameValue = new kony.ui.Label({
            "height": "18dp",
            "id": "lblNickNameValue",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP28px",
            "text": "Linda",
            "textStyle": {},
            "top": "28dp",
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
        flxNickName.add(lblNickName, lblNickNameValue);
        var flxIBAN = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxIBAN",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "58dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxIBAN.setDefaultUnit(kony.flex.DP);
        var lblIBAN = new kony.ui.Label({
            "id": "lblIBAN",
            "isVisible": true,
            "left": "19dp",
            "skin": "sknLbla0a0a0SSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.addBen.accNo"),
            "textStyle": {},
            "top": "7dp",
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
        var lblIBANValue = new kony.ui.Label({
            "bottom": "7dp",
            "height": "18dp",
            "id": "lblIBANValue",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP28px",
            "text": "FR 4567 7456 3425 4532 1423 4356 321 ",
            "textStyle": {},
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
        flxIBAN.add(lblIBAN, lblIBANValue);
        var lblSeparator = new kony.ui.Label({
            "bottom": "1dp",
            "height": "2dp",
            "id": "lblSeparator",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknlblSeparatorf6f6f6",
            "textStyle": {},
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxToAccountNumber.add(flxNickName, flxIBAN, lblSeparator);
        return flxToAccountNumber;
    }
})