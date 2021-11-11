define("flxSecurityQnA", function() {
    return function(controller) {
        var flxSecurityQnA = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSecurityQnA",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSecurityQnA.setDefaultUnit(kony.flex.DP);
        var lblQuestion = new kony.ui.Label({
            "id": "lblQuestion",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Your first school name?",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var tbxAnswer = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "10dp",
            "focusSkin": "tbxBlueFocus",
            "height": "50dp",
            "id": "tbxAnswer",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.MFA.AnswerPlaceholder"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "40dp",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "sknTbxPlaceholdera0a0a0",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        flxSecurityQnA.add(lblQuestion, tbxAnswer);
        return flxSecurityQnA;
    }
})