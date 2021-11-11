define(function() {
    return function(controller) {
        var rejectPopUp = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "rejectPopUp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx000000Op50",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "rejectPopUp"), extendConfig({}, controller.args[1], "rejectPopUp"), extendConfig({}, controller.args[2], "rejectPopUp"));
        rejectPopUp.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxffffffB",
            "width": "80%",
            "zIndex": 200
        }, controller.args[0], "flxContainer"), extendConfig({}, controller.args[1], "flxContainer"), extendConfig({}, controller.args[2], "flxContainer"));
        flxContainer.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "65dp",
            "skin": "sknLbl494949semibold45px",
            "text": "Reject",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTitle"));
        var lblContent = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblContent",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlbl424242SSPR15dp",
            "text": "Are you sure you want to reject?",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblContent"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContent"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblContent"));
        var lblContentreject = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblContentreject",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknlbl424242SSPR15dp",
            "text": "Enter the reason before you reject",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblContentreject"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContentreject"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblContentreject"));
        var txtRejectreason = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "sknTbxBordere3e3e3A0A0A0SSPRegular28px",
            "height": "40dp",
            "id": "txtRejectreason",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "7.50%",
            "placeholder": "Enter here",
            "secureTextEntry": false,
            "skin": "sknTbxBordere3e3e3A0A0A0SSPRegular28px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "15dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "txtRejectreason"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtRejectreason"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "tbxPlaceholdere3e3e3SSP29px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtRejectreason"));
        var flxBtns = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "60dp",
            "id": "flxBtns",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBtns"), extendConfig({}, controller.args[1], "flxBtns"), extendConfig({}, controller.args[2], "flxBtns"));
        flxBtns.setDefaultUnit(kony.flex.DP);
        var flxSep1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSep1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3op50",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSep1"), extendConfig({}, controller.args[1], "flxSep1"), extendConfig({}, controller.args[2], "flxSep1"));
        flxSep1.setDefaultUnit(kony.flex.DP);
        flxSep1.add();
        var flxBottom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBottom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%"
        }, controller.args[0], "flxBottom"), extendConfig({}, controller.args[1], "flxBottom"), extendConfig({}, controller.args[2], "flxBottom"));
        flxBottom.setDefaultUnit(kony.flex.DP);
        var flxCancel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCancel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "49%",
            "zIndex": 1
        }, controller.args[0], "flxCancel"), extendConfig({}, controller.args[1], "flxCancel"), extendConfig({}, controller.args[2], "flxCancel"));
        flxCancel.setDefaultUnit(kony.flex.DP);
        var lblNo = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblNo",
            "isVisible": true,
            "skin": "sknlbl004B95SSPR13dp",
            "text": kony.i18n.getLocalizedString("kony.mb.nuo.Cancel"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNo"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNo"));
        flxCancel.add(lblNo);
        var flxSep2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSep2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3op50",
            "width": "2dp",
            "zIndex": 1
        }, controller.args[0], "flxSep2"), extendConfig({}, controller.args[1], "flxSep2"), extendConfig({}, controller.args[2], "flxSep2"));
        flxSep2.setDefaultUnit(kony.flex.DP);
        flxSep2.add();
        var flxReject = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxReject",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "49%",
            "zIndex": 1
        }, controller.args[0], "flxReject"), extendConfig({}, controller.args[1], "flxReject"), extendConfig({}, controller.args[2], "flxReject"));
        flxReject.setDefaultUnit(kony.flex.DP);
        var lblYes = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblYes",
            "isVisible": true,
            "skin": "sknlbl004B95SSPR13dp",
            "text": kony.i18n.getLocalizedString("kony.mb.OnBoarding.Reject"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblYes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblYes"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblYes"));
        flxReject.add(lblYes);
        flxBottom.add(flxCancel, flxSep2, flxReject);
        flxBtns.add(flxSep1, flxBottom);
        flxContainer.add(lblTitle, lblContent, lblContentreject, txtRejectreason, flxBtns);
        rejectPopUp.add(flxContainer);
        return rejectPopUp;
    }
})