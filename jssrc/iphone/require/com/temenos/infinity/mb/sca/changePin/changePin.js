define(function() {
    return function(controller) {
        var changePin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "changePin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_i70a5d0f7a5e42c99f906d55cd871f59(eventobject);
            },
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "changePin"), extendConfig({}, controller.args[1], "changePin"), extendConfig({}, controller.args[2], "changePin"));
        changePin.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "56dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlx003e75Bg",
            "top": "0%",
            "width": "100%",
            "zIndex": 30
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "onTouchEnd": controller.AS_FlexContainer_b1710b68751d4342b63882f6f3ea4ba1,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%",
            "zIndex": 2
        }, controller.args[0], "flxBack"), extendConfig({}, controller.args[1], "flxBack"), extendConfig({}, controller.args[2], "flxBack"));
        flxBack.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgBack",
            "isVisible": true,
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        flxBack.add(imgBack);
        var lblScreenName = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblScreenName",
            "isVisible": true,
            "maxNumberOfLines": 1,
            "skin": "sknLblffffffSSP30px",
            "text": "Change Pin",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblScreenName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblScreenName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblScreenName"));
        var btnCancel = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "CopyCopysknBtnffffffSSP",
            "height": "100%",
            "id": "btnCancel",
            "isVisible": false,
            "onClick": controller.AS_Button_g0fd73ce30e743e18ad1f32efbdb017f,
            "right": "20dp",
            "skin": "CopyCopysknBtnffffffSSP",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnCancel"));
        flxHeader.add(flxBack, lblScreenName, btnCancel);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "56dp",
            "width": "100%",
            "zIndex": 30
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxPin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPin",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": true,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxPin"), extendConfig({}, controller.args[1], "flxPin"), extendConfig({}, controller.args[2], "flxPin"));
        flxPin.setDefaultUnit(kony.flex.DP);
        var flxTopMsg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTopMsg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFShadowBottomA6A6A6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTopMsg"), extendConfig({}, controller.args[1], "flxTopMsg"), extendConfig({}, controller.args[2], "flxTopMsg"));
        flxTopMsg.setDefaultUnit(kony.flex.DP);
        var lblTopMsg = new kony.ui.Label(extendConfig({
            "bottom": "11dp",
            "centerX": "50%",
            "id": "lblTopMsg",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLbl42424215pxSSPR",
            "text": "Please enter the current pin and choose your new pin",
            "textStyle": {},
            "top": "11dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTopMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTopMsg"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTopMsg"));
        flxTopMsg.add(lblTopMsg);
        var flxErrorPin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxErrorPin",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxErrorPin"), extendConfig({}, controller.args[1], "flxErrorPin"), extendConfig({}, controller.args[2], "flxErrorPin"));
        flxErrorPin.setDefaultUnit(kony.flex.DP);
        var lblErrorPin = new kony.ui.Label(extendConfig({
            "id": "lblErrorPin",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknLblEE0005SSPR114pct",
            "text": "Failed to change pin!",
            "textStyle": {},
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "lblErrorPin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorPin"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblErrorPin"));
        flxErrorPin.add(lblErrorPin);
        var flxPinFields = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPinFields",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPinFields"), extendConfig({}, controller.args[1], "flxPinFields"), extendConfig({}, controller.args[2], "flxPinFields"));
        flxPinFields.setDefaultUnit(kony.flex.DP);
        var flxCurrentPin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxCurrentPin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxCurrentPin"), extendConfig({}, controller.args[1], "flxCurrentPin"), extendConfig({}, controller.args[2], "flxCurrentPin"));
        flxCurrentPin.setDefaultUnit(kony.flex.DP);
        var lblCurrentPin = new kony.ui.Label(extendConfig({
            "id": "lblCurrentPin",
            "isVisible": true,
            "left": "30dp",
            "skin": "CopyCopysknLbl2",
            "text": "Current PIN",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblCurrentPin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCurrentPin"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCurrentPin"));
        var tbxCurrentPin = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "0dp",
            "focusSkin": "CopyCopytbxBlueFocus",
            "height": "48dp",
            "id": "tbxCurrentPin",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
            "left": "20dp",
            "placeholder": "Enter Current PIN",
            "right": "20dp",
            "secureTextEntry": true,
            "skin": "CopyCopysknTbxFontSSPR",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "zIndex": 3
        }, controller.args[0], "tbxCurrentPin"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxCurrentPin"), extendConfig({
            "autoCorrect": false,
            "closeButtonText": "Cancel",
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
            "placeholderSkin": "CopyCopysknTbxA",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxCurrentPin"));
        var flxCurrentPinToggle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "9dp",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCurrentPinToggle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "26dp",
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 10
        }, controller.args[0], "flxCurrentPinToggle"), extendConfig({}, controller.args[1], "flxCurrentPinToggle"), extendConfig({}, controller.args[2], "flxCurrentPinToggle"));
        flxCurrentPinToggle.setDefaultUnit(kony.flex.DP);
        var imgCurrentPinVisiblityToggle = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgCurrentPinVisiblityToggle",
            "isVisible": true,
            "skin": "slImage",
            "src": "viewicon.png",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "imgCurrentPinVisiblityToggle"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCurrentPinVisiblityToggle"), extendConfig({}, controller.args[2], "imgCurrentPinVisiblityToggle"));
        flxCurrentPinToggle.add(imgCurrentPinVisiblityToggle);
        flxCurrentPin.add(lblCurrentPin, tbxCurrentPin, flxCurrentPinToggle);
        var flxNewPin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxNewPin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxNewPin"), extendConfig({}, controller.args[1], "flxNewPin"), extendConfig({}, controller.args[2], "flxNewPin"));
        flxNewPin.setDefaultUnit(kony.flex.DP);
        var lblPin = new kony.ui.Label(extendConfig({
            "id": "lblPin",
            "isVisible": true,
            "left": "30dp",
            "skin": "CopyCopysknLbl2",
            "text": "New PIN",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblPin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPin"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPin"));
        var tbxNewPin = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "0dp",
            "focusSkin": "CopyCopytbxBlueFocus",
            "height": "48dp",
            "id": "tbxNewPin",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
            "left": "20dp",
            "placeholder": "Enter New PIN",
            "right": "20dp",
            "secureTextEntry": true,
            "skin": "CopyCopysknTbxFontSSPR",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "zIndex": 3
        }, controller.args[0], "tbxNewPin"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxNewPin"), extendConfig({
            "autoCorrect": false,
            "closeButtonText": "Cancel",
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
            "placeholderSkin": "CopyCopysknTbxA",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxNewPin"));
        var flxNewPinToggle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "9dp",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxNewPinToggle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "26dp",
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 10
        }, controller.args[0], "flxNewPinToggle"), extendConfig({}, controller.args[1], "flxNewPinToggle"), extendConfig({}, controller.args[2], "flxNewPinToggle"));
        flxNewPinToggle.setDefaultUnit(kony.flex.DP);
        var imgNewPinVisiblityToggle = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgNewPinVisiblityToggle",
            "isVisible": true,
            "skin": "slImage",
            "src": "viewicon.png",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "imgNewPinVisiblityToggle"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgNewPinVisiblityToggle"), extendConfig({}, controller.args[2], "imgNewPinVisiblityToggle"));
        flxNewPinToggle.add(imgNewPinVisiblityToggle);
        flxNewPin.add(lblPin, tbxNewPin, flxNewPinToggle);
        var flxReEnterPin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxReEnterPin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxReEnterPin"), extendConfig({}, controller.args[1], "flxReEnterPin"), extendConfig({}, controller.args[2], "flxReEnterPin"));
        flxReEnterPin.setDefaultUnit(kony.flex.DP);
        var lblReEnterPin = new kony.ui.Label(extendConfig({
            "id": "lblReEnterPin",
            "isVisible": true,
            "left": "30dp",
            "skin": "CopyCopysknLbl2",
            "text": "Re-enter PIN",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblReEnterPin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReEnterPin"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReEnterPin"));
        var tbxReEnterPin = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "0dp",
            "focusSkin": "CopyCopytbxBlueFocus",
            "height": "48dp",
            "id": "tbxReEnterPin",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
            "left": "20dp",
            "placeholder": "Re-enter PIN",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxFontSSPR",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "zIndex": 3
        }, controller.args[0], "tbxReEnterPin"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxReEnterPin"), extendConfig({
            "autoCorrect": false,
            "closeButtonText": "Cancel",
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
            "placeholderSkin": "CopyCopysknTbxA",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxReEnterPin"));
        var flxReEnterPinMatch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "9dp",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxReEnterPinMatch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "26dp",
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 10
        }, controller.args[0], "flxReEnterPinMatch"), extendConfig({}, controller.args[1], "flxReEnterPinMatch"), extendConfig({}, controller.args[2], "flxReEnterPinMatch"));
        flxReEnterPinMatch.setDefaultUnit(kony.flex.DP);
        var imgReEnterPinMatch = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgReEnterPinMatch",
            "isVisible": true,
            "skin": "slImage",
            "src": "tickmark.png",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "imgReEnterPinMatch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgReEnterPinMatch"), extendConfig({}, controller.args[2], "imgReEnterPinMatch"));
        flxReEnterPinMatch.add(imgReEnterPinMatch);
        flxReEnterPin.add(lblReEnterPin, tbxReEnterPin, flxReEnterPinMatch);
        flxPinFields.add(flxCurrentPin, flxNewPin, flxReEnterPin);
        var flxPinPasswordPolicy = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPinPasswordPolicy",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxPinPasswordPolicy"), extendConfig({}, controller.args[1], "flxPinPasswordPolicy"), extendConfig({}, controller.args[2], "flxPinPasswordPolicy"));
        flxPinPasswordPolicy.setDefaultUnit(kony.flex.DP);
        var lblPinPolicyRequirements = new kony.ui.Label(extendConfig({
            "id": "lblPinPolicyRequirements",
            "isVisible": true,
            "left": "30dp",
            "skin": "CopyCopysknLblSSPRegFD",
            "text": kony.i18n.getLocalizedString("kony.mb.securityReq.passwordtitle"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPinPolicyRequirements"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPinPolicyRequirements"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPinPolicyRequirements"));
        var rtxRulesPin = new kony.ui.RichText(extendConfig({
            "id": "rtxRulesPin",
            "isVisible": true,
            "left": "30dp",
            "linkSkin": "defRichTextLink",
            "right": "20dp",
            "skin": "CopyCopysknrtxfd",
            "top": "30dp",
            "zIndex": 1
        }, controller.args[0], "rtxRulesPin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rtxRulesPin"), extendConfig({
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "rtxRulesPin"));
        flxPinPasswordPolicy.add(lblPinPolicyRequirements, rtxRulesPin);
        var flxBtnChangePin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxBtnChangePin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "30dp",
            "width": "100%"
        }, controller.args[0], "flxBtnChangePin"), extendConfig({}, controller.args[1], "flxBtnChangePin"), extendConfig({}, controller.args[2], "flxBtnChangePin"));
        flxBtnChangePin.setDefaultUnit(kony.flex.DP);
        var btnChangePin = new kony.ui.Button(extendConfig({
            "focusSkin": "CopyCopysknBtn1",
            "height": "40dp",
            "id": "btnChangePin",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnBg003E75Border1pxRad4pxFont15pxFFFFFF",
            "text": "Continue",
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "btnChangePin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnChangePin"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnChangePin"));
        flxBtnChangePin.add(btnChangePin);
        flxPin.add(flxTopMsg, flxErrorPin, flxPinFields, flxPinPasswordPolicy, flxBtnChangePin);
        var flxSuccessMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSuccessMessage",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": true,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 30
        }, controller.args[0], "flxSuccessMessage"), extendConfig({}, controller.args[1], "flxSuccessMessage"), extendConfig({}, controller.args[2], "flxSuccessMessage"));
        flxSuccessMessage.setDefaultUnit(kony.flex.DP);
        var imgGreenIcon = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgGreenIcon",
            "isVisible": true,
            "skin": "slImage",
            "src": "confirmation_tick_3.png",
            "top": "100dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgGreenIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgGreenIcon"), extendConfig({}, controller.args[2], "imgGreenIcon"));
        var flxStatus = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxStatus",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "190dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxStatus"), extendConfig({}, controller.args[1], "flxStatus"), extendConfig({}, controller.args[2], "flxStatus"));
        flxStatus.setDefaultUnit(kony.flex.DP);
        var lblSuccessHeader = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSuccessHeader",
            "isVisible": true,
            "skin": "sknSSPSemiBold24px000000",
            "text": "Pin Changed",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSuccessHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSuccessHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSuccessHeader"));
        var lblSuccessBody = new kony.ui.Label(extendConfig({
            "id": "lblSuccessBody",
            "isVisible": true,
            "left": "30dp",
            "right": "30dp",
            "skin": "sknLblSSPR16px727272",
            "text": "You have changed your pin successfully.  \nPlease use this to sign in .",
            "textStyle": {},
            "top": "50dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSuccessBody"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSuccessBody"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSuccessBody"));
        flxStatus.add(lblSuccessHeader, lblSuccessBody);
        var btnSignIn = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "focusSkin": "CopyCopysknBtn1",
            "height": "40dp",
            "id": "btnSignIn",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnBg003E75Border1pxRad4pxFont15pxFFFFFF",
            "text": "Sign In",
            "zIndex": 1
        }, controller.args[0], "btnSignIn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSignIn"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSignIn"));
        flxSuccessMessage.add(imgGreenIcon, flxStatus, btnSignIn);
        flxMainContainer.add(flxPin, flxSuccessMessage);
        var sdk = new com.temenos.hidapprove.sdk(extendConfig({
            "height": "100%",
            "id": "sdk",
            "isVisible": false,
            "left": "-5dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "-4dp",
            "width": "100%",
            "zIndex": 210,
            "overrides": {
                "sdk": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "sdk"), extendConfig({
            "overrides": {}
        }, controller.args[1], "sdk"), extendConfig({
            "overrides": {}
        }, controller.args[2], "sdk"));
        sdk.pushId = "";
        changePin.add(flxHeader, flxMainContainer, sdk);
        return changePin;
    }
})