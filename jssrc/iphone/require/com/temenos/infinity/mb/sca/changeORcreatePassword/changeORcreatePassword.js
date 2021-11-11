define(function() {
    return function(controller) {
        var changeORcreatePassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "changeORcreatePassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_b0f692849e524f36aa89b323e321af25(eventobject);
            },
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "changeORcreatePassword"), extendConfig({}, controller.args[1], "changeORcreatePassword"), extendConfig({}, controller.args[2], "changeORcreatePassword"));
        changeORcreatePassword.setDefaultUnit(kony.flex.DP);
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
            "zIndex": 10
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
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
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
            "centerY": "50.00%",
            "id": "lblScreenName",
            "isVisible": true,
            "left": "15.04%",
            "maxNumberOfLines": 1,
            "skin": "sknLblffffffSSP30px",
            "text": "Change Password",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "65%",
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
            "isVisible": true,
            "right": "20dp",
            "skin": "CopyCopysknBtnffffffSSP",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
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
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxffffff",
            "top": "56dp",
            "zIndex": 1
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxTopMsg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90dp",
            "id": "flxTopMsg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxTopMsg"), extendConfig({}, controller.args[1], "flxTopMsg"), extendConfig({}, controller.args[2], "flxTopMsg"));
        flxTopMsg.setDefaultUnit(kony.flex.DP);
        var lblTopMsg = new kony.ui.Label(extendConfig({
            "id": "lblTopMsg",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLbl42424215pxSSPR",
            "text": "Create a password to sign in online banking using password",
            "textStyle": {},
            "top": "20dp",
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
        var flxGradient = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxGradient",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxGradientEEEEEEToFFFFFF",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxGradient"), extendConfig({}, controller.args[1], "flxGradient"), extendConfig({}, controller.args[2], "flxGradient"));
        flxGradient.setDefaultUnit(kony.flex.DP);
        flxGradient.add();
        flxTopMsg.add(lblTopMsg, flxGradient);
        var flxChangeORCreatePassword = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "90dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxChangeORCreatePassword",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "90dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxChangeORCreatePassword"), extendConfig({}, controller.args[1], "flxChangeORCreatePassword"), extendConfig({}, controller.args[2], "flxChangeORCreatePassword"));
        flxChangeORCreatePassword.setDefaultUnit(kony.flex.DP);
        var flxErrorMsg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxErrorMsg",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%"
        }, controller.args[0], "flxErrorMsg"), extendConfig({}, controller.args[1], "flxErrorMsg"), extendConfig({}, controller.args[2], "flxErrorMsg"));
        flxErrorMsg.setDefaultUnit(kony.flex.DP);
        var lblErrorMsg = new kony.ui.Label(extendConfig({
            "id": "lblErrorMsg",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknLblEE0005SSPR114pct",
            "text": "Failed to create a new password!",
            "textStyle": {},
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "lblErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorMsg"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblErrorMsg"));
        flxErrorMsg.add(lblErrorMsg);
        var flxCurrentPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCurrentPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCurrentPassword"), extendConfig({}, controller.args[1], "flxCurrentPassword"), extendConfig({}, controller.args[2], "flxCurrentPassword"));
        flxCurrentPassword.setDefaultUnit(kony.flex.DP);
        var lblCurrentPassword = new kony.ui.Label(extendConfig({
            "id": "lblCurrentPassword",
            "isVisible": true,
            "left": "30dp",
            "skin": "CopyCopysknLbl2",
            "text": kony.i18n.getLocalizedString("kony.mb.Profile.CurrentPassword"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCurrentPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCurrentPassword"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCurrentPassword"));
        var tbxCurrentPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopytbxBlueFocus",
            "height": "48dp",
            "id": "tbxCurrentPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.Profile.EnterCurrentPassword"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxFontSSPR",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "24dp",
            "zIndex": 1
        }, controller.args[0], "tbxCurrentPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxCurrentPassword"), extendConfig({
            "autoCorrect": false,
            "closeButtonText": "Cancel",
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
            "placeholderSkin": "CopyCopysknTbxA",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxCurrentPassword"));
        var flxCurrentPasswordVisiblityToggle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "9dp",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCurrentPasswordVisiblityToggle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "30dp",
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 10
        }, controller.args[0], "flxCurrentPasswordVisiblityToggle"), extendConfig({}, controller.args[1], "flxCurrentPasswordVisiblityToggle"), extendConfig({}, controller.args[2], "flxCurrentPasswordVisiblityToggle"));
        flxCurrentPasswordVisiblityToggle.setDefaultUnit(kony.flex.DP);
        var imgCurrentPasswordVisiblityToggle = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgCurrentPasswordVisiblityToggle",
            "isVisible": true,
            "skin": "slImage",
            "src": "viewicon_4_1.png",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "imgCurrentPasswordVisiblityToggle"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCurrentPasswordVisiblityToggle"), extendConfig({}, controller.args[2], "imgCurrentPasswordVisiblityToggle"));
        flxCurrentPasswordVisiblityToggle.add(imgCurrentPasswordVisiblityToggle);
        flxCurrentPassword.add(lblCurrentPassword, tbxCurrentPassword, flxCurrentPasswordVisiblityToggle);
        var flxNewPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNewPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNewPassword"), extendConfig({}, controller.args[1], "flxNewPassword"), extendConfig({}, controller.args[2], "flxNewPassword"));
        flxNewPassword.setDefaultUnit(kony.flex.DP);
        var lblNewPassword = new kony.ui.Label(extendConfig({
            "id": "lblNewPassword",
            "isVisible": true,
            "left": "30dp",
            "skin": "CopyCopysknLbl2",
            "text": kony.i18n.getLocalizedString("kony.mb.Forgot.NewPassword"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNewPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNewPassword"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNewPassword"));
        var tbxNewPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopytbxBlueFocus",
            "height": "48dp",
            "id": "tbxNewPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.common.EnterNewPassword"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxFontSSPR",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "24dp",
            "zIndex": 1
        }, controller.args[0], "tbxNewPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxNewPassword"), extendConfig({
            "autoCorrect": false,
            "closeButtonText": "Cancel",
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
            "placeholderSkin": "CopyCopysknTbxA",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxNewPassword"));
        var flxNewPasswordVisiblityToggle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "9dp",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxNewPasswordVisiblityToggle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "30dp",
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 10
        }, controller.args[0], "flxNewPasswordVisiblityToggle"), extendConfig({}, controller.args[1], "flxNewPasswordVisiblityToggle"), extendConfig({}, controller.args[2], "flxNewPasswordVisiblityToggle"));
        flxNewPasswordVisiblityToggle.setDefaultUnit(kony.flex.DP);
        var imgNewPasswordVisiblityToggle = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgNewPasswordVisiblityToggle",
            "isVisible": true,
            "skin": "slImage",
            "src": "viewicon_4_1.png",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "imgNewPasswordVisiblityToggle"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgNewPasswordVisiblityToggle"), extendConfig({}, controller.args[2], "imgNewPasswordVisiblityToggle"));
        flxNewPasswordVisiblityToggle.add(imgNewPasswordVisiblityToggle);
        flxNewPassword.add(lblNewPassword, tbxNewPassword, flxNewPasswordVisiblityToggle);
        var flxReEnterPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxReEnterPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterPassword"), extendConfig({}, controller.args[1], "flxReEnterPassword"), extendConfig({}, controller.args[2], "flxReEnterPassword"));
        flxReEnterPassword.setDefaultUnit(kony.flex.DP);
        var lblReEnterPassword = new kony.ui.Label(extendConfig({
            "id": "lblReEnterPassword",
            "isVisible": true,
            "left": "30dp",
            "skin": "CopyCopysknLbl2",
            "text": kony.i18n.getLocalizedString("kony.mb.Forgot.ReEnterNewPassword"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblReEnterPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReEnterPassword"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReEnterPassword"));
        var tbxReEnterPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopytbxBlueFocus",
            "height": "48dp",
            "id": "tbxReEnterPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.Forgot.ReEnterNewPassword"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxFontSSPR",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "24dp",
            "zIndex": 3
        }, controller.args[0], "tbxReEnterPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxReEnterPassword"), extendConfig({
            "autoCorrect": false,
            "closeButtonText": "Cancel",
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
            "placeholderSkin": "CopyCopysknTbxA",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxReEnterPassword"));
        var flxReEnterPasswordMatch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "9dp",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxReEnterPasswordMatch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "30dp",
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 10
        }, controller.args[0], "flxReEnterPasswordMatch"), extendConfig({}, controller.args[1], "flxReEnterPasswordMatch"), extendConfig({}, controller.args[2], "flxReEnterPasswordMatch"));
        flxReEnterPasswordMatch.setDefaultUnit(kony.flex.DP);
        var imgReEnterPasswordMatch = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgReEnterPasswordMatch",
            "isVisible": true,
            "skin": "slImage",
            "src": "tickmark.png",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "imgReEnterPasswordMatch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgReEnterPasswordMatch"), extendConfig({}, controller.args[2], "imgReEnterPasswordMatch"));
        flxReEnterPasswordMatch.add(imgReEnterPasswordMatch);
        flxReEnterPassword.add(lblReEnterPassword, tbxReEnterPassword, flxReEnterPasswordMatch);
        var flxSecurityRequirements = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSecurityRequirements",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSecurityRequirements"), extendConfig({}, controller.args[1], "flxSecurityRequirements"), extendConfig({}, controller.args[2], "flxSecurityRequirements"));
        flxSecurityRequirements.setDefaultUnit(kony.flex.DP);
        var lblSecurityRequirements = new kony.ui.Label(extendConfig({
            "id": "lblSecurityRequirements",
            "isVisible": true,
            "left": "30dp",
            "skin": "CopyCopysknLblSSPRegFD",
            "text": kony.i18n.getLocalizedString("kony.mb.securityReq.passwordtitle"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSecurityRequirements"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecurityRequirements"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSecurityRequirements"));
        var rtxRulesPwd = new kony.ui.RichText(extendConfig({
            "id": "rtxRulesPwd",
            "isVisible": true,
            "left": "30dp",
            "linkSkin": "defRichTextLink",
            "right": "20dp",
            "skin": "CopyCopysknrtxfd",
            "text": "- Must be between 8-24 characters\\n\n- Must contain one number\\n\n- Must contain one uppercase letter\\n\n- Must contain one lowercase letter\\n",
            "top": "30dp",
            "zIndex": 1
        }, controller.args[0], "rtxRulesPwd"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rtxRulesPwd"), extendConfig({
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "rtxRulesPwd"));
        flxSecurityRequirements.add(lblSecurityRequirements, rtxRulesPwd);
        flxChangeORCreatePassword.add(flxErrorMsg, flxCurrentPassword, flxNewPassword, flxReEnterPassword, flxSecurityRequirements);
        var btnCreatePassword = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "height": "50dp",
            "id": "btnCreatePassword",
            "isVisible": false,
            "skin": "sknBtnBg003E75Border1pxRad4pxFont15pxFFFFFF",
            "text": "Create Password",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "btnCreatePassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCreatePassword"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnCreatePassword"));
        var btnChangePassword = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "height": "50dp",
            "id": "btnChangePassword",
            "isVisible": true,
            "skin": "sknBtnBg003E75Border1pxRad4pxFont15pxFFFFFF",
            "text": "Change Password",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "btnChangePassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnChangePassword"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnChangePassword"));
        flxMainContainer.add(flxTopMsg, flxChangeORCreatePassword, btnCreatePassword, btnChangePassword);
        var flxSuccessContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxSuccessContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "54dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSuccessContainer"), extendConfig({}, controller.args[1], "flxSuccessContainer"), extendConfig({}, controller.args[2], "flxSuccessContainer"));
        flxSuccessContainer.setDefaultUnit(kony.flex.DP);
        var flxSucess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxSucess",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "12%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxSucess"), extendConfig({}, controller.args[1], "flxSucess"), extendConfig({}, controller.args[2], "flxSucess"));
        flxSucess.setDefaultUnit(kony.flex.DP);
        var imgSuccess = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgSuccess",
            "isVisible": true,
            "skin": "slImage",
            "src": "confirmation_tick.png",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgSuccess"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSuccess"), extendConfig({}, controller.args[2], "imgSuccess"));
        var lblSuccessHeader = new kony.ui.Label(extendConfig({
            "id": "lblSuccessHeader",
            "isVisible": true,
            "left": 0,
            "skin": "sknSSPSemiBold24px000000",
            "text": "Password Created",
            "textStyle": {},
            "top": "17dp",
            "width": "100%",
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
            "left": "0dp",
            "skin": "sknLblSSPR16px727272",
            "text": "New password has been created successfully.  You can now sign in to online banking using this password.",
            "textStyle": {},
            "top": "12dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSuccessBody"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSuccessBody"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSuccessBody"));
        flxSucess.add(imgSuccess, lblSuccessHeader, lblSuccessBody);
        var btnBack2Settings = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "height": "50dp",
            "id": "btnBack2Settings",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnBg003E75Border1pxRad4pxFont15pxFFFFFF",
            "text": "Back to Settings",
            "zIndex": 1
        }, controller.args[0], "btnBack2Settings"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnBack2Settings"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnBack2Settings"));
        flxSuccessContainer.add(flxSucess, btnBack2Settings);
        var sdk = new com.temenos.hidapprove.sdk(extendConfig({
            "height": "100%",
            "id": "sdk",
            "isVisible": false,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
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
        changeORcreatePassword.add(flxHeader, flxMainContainer, flxSuccessContainer, sdk);
        return changeORcreatePassword;
    }
})