define(function() {
    return function(controller) {
        var activateProfile = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "activateProfile",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_faa0bed728714d9b9532ce6d4c931770(eventobject);
            },
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "activateProfile"), extendConfig({}, controller.args[1], "activateProfile"), extendConfig({}, controller.args[2], "activateProfile"));
        activateProfile.setDefaultUnit(kony.flex.DP);
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
            "skin": "sknFlx1a98ff",
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
            "centerY": "50%",
            "id": "lblScreenName",
            "isVisible": true,
            "left": "15%",
            "maxNumberOfLines": 1,
            "skin": "sknLblffffffSSP30px",
            "text": "Profile Activation",
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
            "focusSkin": "sknBtnffffffSSP28px",
            "height": "100%",
            "id": "btnCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknBtnffffffSSP28px",
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
            "clipBounds": true,
            "height": "93%",
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
        var flxProfileActivationScreen = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70%",
            "id": "flxProfileActivationScreen",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxProfileActivationScreen"), extendConfig({}, controller.args[1], "flxProfileActivationScreen"), extendConfig({}, controller.args[2], "flxProfileActivationScreen"));
        flxProfileActivationScreen.setDefaultUnit(kony.flex.DP);
        var flxTopMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "58dp",
            "id": "flxTopMessage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTopMessage"), extendConfig({}, controller.args[1], "flxTopMessage"), extendConfig({}, controller.args[2], "flxTopMessage"));
        flxTopMessage.setDefaultUnit(kony.flex.DP);
        var lblMessage = new kony.ui.Label(extendConfig({
            "id": "lblMessage",
            "isVisible": true,
            "left": "34dp",
            "right": "34dp",
            "skin": "sknLbl727272SSPR114pct",
            "text": "Please enter user ID and Activation code that was sent to your email and phone",
            "textStyle": {},
            "top": "11dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMessage"));
        flxTopMessage.add(lblMessage);
        var flxCredentials = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "150dp",
            "id": "flxCredentials",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCredentials"), extendConfig({}, controller.args[1], "flxCredentials"), extendConfig({}, controller.args[2], "flxCredentials"));
        flxCredentials.setDefaultUnit(kony.flex.DP);
        var lblErrorMessage = new kony.ui.Label(extendConfig({
            "id": "lblErrorMessage",
            "isVisible": false,
            "left": "20dp",
            "skin": "sknLblEE0005SSPR114pct",
            "text": "Incorrect username or activation code!",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblErrorMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorMessage"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblErrorMessage"));
        var tbxUsername = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "tbxBlueFocus",
            "height": "48dp",
            "id": "tbxUsername",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.login.username"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "sknTbxFontSSPR727272BdrE9E9E9",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "30dp",
            "zIndex": 2
        }, controller.args[0], "tbxUsername"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxUsername"), extendConfig({
            "autoCorrect": false,
            "closeButtonText": "Cancel",
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxUsername"));
        var tbxActivationCode = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "0dp",
            "focusSkin": "tbxBlueFocus",
            "height": "48dp",
            "id": "tbxActivationCode",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Activation Code",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "sknTbxFontSSPR727272BdrE9E9E9",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "zIndex": 3
        }, controller.args[0], "tbxActivationCode"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxActivationCode"), extendConfig({
            "autoCorrect": false,
            "closeButtonText": "Cancel",
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxActivationCode"));
        var flxActivationCodeVisiblityToggle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "9dp",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxActivationCodeVisiblityToggle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "26dp",
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 10
        }, controller.args[0], "flxActivationCodeVisiblityToggle"), extendConfig({}, controller.args[1], "flxActivationCodeVisiblityToggle"), extendConfig({}, controller.args[2], "flxActivationCodeVisiblityToggle"));
        flxActivationCodeVisiblityToggle.setDefaultUnit(kony.flex.DP);
        var imgActivationCodeVisiblityToggle = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgActivationCodeVisiblityToggle",
            "isVisible": true,
            "skin": "slImage",
            "src": "viewicon.png",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "imgActivationCodeVisiblityToggle"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgActivationCodeVisiblityToggle"), extendConfig({}, controller.args[2], "imgActivationCodeVisiblityToggle"));
        flxActivationCodeVisiblityToggle.add(imgActivationCodeVisiblityToggle);
        flxCredentials.add(lblErrorMessage, tbxUsername, tbxActivationCode, flxActivationCodeVisiblityToggle);
        var flxBtnVerify = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxBtnVerify",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50dp",
            "width": "100%"
        }, controller.args[0], "flxBtnVerify"), extendConfig({}, controller.args[1], "flxBtnVerify"), extendConfig({}, controller.args[2], "flxBtnVerify"));
        flxBtnVerify.setDefaultUnit(kony.flex.DP);
        var btnVerify = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtn055BAFSSPSemiBold26px",
            "height": "40dp",
            "id": "btnVerify",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtn0095e426pxEnabled",
            "text": "Verify",
            "zIndex": 1
        }, controller.args[0], "btnVerify"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnVerify"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnVerify"));
        flxBtnVerify.add(btnVerify);
        var flxForgot = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "5%",
            "id": "flxForgot",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "maxWidth": "45%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "4%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "flxForgot"), extendConfig({}, controller.args[1], "flxForgot"), extendConfig({}, controller.args[2], "flxForgot"));
        flxForgot.setDefaultUnit(kony.flex.DP);
        var lblForgotPwd = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "40.10%",
            "id": "lblForgotPwd",
            "isVisible": true,
            "left": "1dp",
            "skin": "sknLbl004B95SSPRegular26px",
            "text": kony.i18n.getLocalizedString("kony.mb.login.cannotLogin"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblForgotPwd"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblForgotPwd"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblForgotPwd"));
        flxForgot.add(lblForgotPwd);
        flxProfileActivationScreen.add(flxTopMessage, flxCredentials, flxBtnVerify, flxForgot);
        var flxCreatePassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCreatePassword",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxCreatePassword"), extendConfig({}, controller.args[1], "flxCreatePassword"), extendConfig({}, controller.args[2], "flxCreatePassword"));
        flxCreatePassword.setDefaultUnit(kony.flex.DP);
        var flxCreatePasswordMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCreatePasswordMessage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCreatePasswordMessage"), extendConfig({}, controller.args[1], "flxCreatePasswordMessage"), extendConfig({}, controller.args[2], "flxCreatePasswordMessage"));
        flxCreatePasswordMessage.setDefaultUnit(kony.flex.DP);
        var lblCreateNewPassword = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblCreateNewPassword",
            "isVisible": true,
            "left": "60dp",
            "right": "60dp",
            "skin": "sknLbl727272SSPR114pct",
            "text": "Create new password",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCreateNewPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCreateNewPassword"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCreateNewPassword"));
        flxCreatePasswordMessage.add(lblCreateNewPassword);
        var lblErrorMsgPasswordCreation = new kony.ui.Label(extendConfig({
            "id": "lblErrorMsgPasswordCreation",
            "isVisible": false,
            "left": "20dp",
            "skin": "sknLblEE0005SSPR114pct",
            "text": "Failed to create a new password!",
            "textStyle": {},
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblErrorMsgPasswordCreation"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorMsgPasswordCreation"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblErrorMsgPasswordCreation"));
        var flxPasswordFields = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "170dp",
            "id": "flxPasswordFields",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPasswordFields"), extendConfig({}, controller.args[1], "flxPasswordFields"), extendConfig({}, controller.args[2], "flxPasswordFields"));
        flxPasswordFields.setDefaultUnit(kony.flex.DP);
        var flxNewPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxNewPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "flxNewPassword"), extendConfig({}, controller.args[1], "flxNewPassword"), extendConfig({}, controller.args[2], "flxNewPassword"));
        flxNewPassword.setDefaultUnit(kony.flex.DP);
        var lblNewPassword = new kony.ui.Label(extendConfig({
            "id": "lblNewPassword",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLbl727272SSPR114pct",
            "text": kony.i18n.getLocalizedString("kony.mb.Forgot.NewPassword"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
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
            "bottom": "0dp",
            "focusSkin": "tbxBlueFocus",
            "height": "48dp",
            "id": "tbxNewPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.common.EnterNewPassword"),
            "right": "0dp",
            "secureTextEntry": false,
            "skin": "sknTbxFontSSPR727272BdrE9E9E9",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "tbxNewPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxNewPassword"), extendConfig({
            "autoCorrect": false,
            "closeButtonText": "Cancel",
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
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
            "right": "6dp",
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
            "src": "viewicon.png",
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
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "75dp",
            "id": "flxReEnterPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "zIndex": 1
        }, controller.args[0], "flxReEnterPassword"), extendConfig({}, controller.args[1], "flxReEnterPassword"), extendConfig({}, controller.args[2], "flxReEnterPassword"));
        flxReEnterPassword.setDefaultUnit(kony.flex.DP);
        var lblReEnterPassword = new kony.ui.Label(extendConfig({
            "id": "lblReEnterPassword",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLbl727272SSPR114pct",
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
            "bottom": "0dp",
            "focusSkin": "tbxBlueFocus",
            "height": "48dp",
            "id": "tbxReEnterPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.Forgot.ReEnterNewPassword"),
            "right": "0dp",
            "secureTextEntry": false,
            "skin": "sknTbxFontSSPR727272BdrE9E9E9",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "width": "100%",
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
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
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
            "right": "6dp",
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
        flxPasswordFields.add(flxNewPassword, flxReEnterPassword);
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
            "zIndex": 100
        }, controller.args[0], "flxSecurityRequirements"), extendConfig({}, controller.args[1], "flxSecurityRequirements"), extendConfig({}, controller.args[2], "flxSecurityRequirements"));
        flxSecurityRequirements.setDefaultUnit(kony.flex.DP);
        var lblSecurityRequirements = new kony.ui.Label(extendConfig({
            "id": "lblSecurityRequirements",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblSSPRegFD3F2F28px",
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
        var flxRule1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxRule1",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30dp",
            "isModalContainer": false,
            "right": "30dp",
            "skin": "slFbox",
            "top": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxRule1"), extendConfig({}, controller.args[1], "flxRule1"), extendConfig({}, controller.args[2], "flxRule1"));
        flxRule1.setDefaultUnit(kony.flex.DP);
        var flxDot = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "7dp",
            "id": "flxDot",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "sknFlxFD3F2FCircle",
            "top": "14dp",
            "width": "7dp",
            "zIndex": 1
        }, controller.args[0], "flxDot"), extendConfig({}, controller.args[1], "flxDot"), extendConfig({}, controller.args[2], "flxDot"));
        flxDot.setDefaultUnit(kony.flex.DP);
        flxDot.add();
        var lblRule1 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblRule1",
            "isVisible": true,
            "left": "23dp",
            "skin": "sknLblSSPRegFD3F2F28px",
            "text": kony.i18n.getLocalizedString("kony.mb.securityReq.charLimitNote"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRule1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRule1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRule1"));
        flxRule1.add(flxDot, lblRule1);
        var flxRule2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRule2",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30dp",
            "isModalContainer": false,
            "right": "30dp",
            "skin": "slFbox",
            "top": "40dp",
            "zIndex": 1
        }, controller.args[0], "flxRule2"), extendConfig({}, controller.args[1], "flxRule2"), extendConfig({}, controller.args[2], "flxRule2"));
        flxRule2.setDefaultUnit(kony.flex.DP);
        var flxDot1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7dp",
            "id": "flxDot1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "sknFlxFD3F2FCircle",
            "top": "7dp",
            "width": "7dp",
            "zIndex": 1
        }, controller.args[0], "flxDot1"), extendConfig({}, controller.args[1], "flxDot1"), extendConfig({}, controller.args[2], "flxDot1"));
        flxDot1.setDefaultUnit(kony.flex.DP);
        flxDot1.add();
        var lblRule2 = new kony.ui.Label(extendConfig({
            "height": "20dp",
            "id": "lblRule2",
            "isVisible": true,
            "left": "23dp",
            "right": "0dp",
            "skin": "sknLblSSPRegFD3F2F28px",
            "text": kony.i18n.getLocalizedString("kony.mb.securityReq.containNoNote"),
            "textStyle": {},
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "lblRule2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRule2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRule2"));
        flxRule2.add(flxDot1, lblRule2);
        var flxRule3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRule3",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30dp",
            "isModalContainer": false,
            "right": "30dp",
            "skin": "slFbox",
            "top": "60dp",
            "zIndex": 1
        }, controller.args[0], "flxRule3"), extendConfig({}, controller.args[1], "flxRule3"), extendConfig({}, controller.args[2], "flxRule3"));
        flxRule3.setDefaultUnit(kony.flex.DP);
        var flxDot2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7dp",
            "id": "flxDot2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "sknFlxFD3F2FCircle",
            "top": "7dp",
            "width": "7dp",
            "zIndex": 1
        }, controller.args[0], "flxDot2"), extendConfig({}, controller.args[1], "flxDot2"), extendConfig({}, controller.args[2], "flxDot2"));
        flxDot2.setDefaultUnit(kony.flex.DP);
        flxDot2.add();
        var lblRule3 = new kony.ui.Label(extendConfig({
            "height": "20dp",
            "id": "lblRule3",
            "isVisible": true,
            "left": "23dp",
            "right": "0dp",
            "skin": "sknLblSSPRegFD3F2F28px",
            "text": kony.i18n.getLocalizedString("kony.mb.securityReq.upercaseLetterNote"),
            "textStyle": {},
            "top": 0,
            "zIndex": 1
        }, controller.args[0], "lblRule3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRule3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRule3"));
        flxRule3.add(flxDot2, lblRule3);
        var flxRule4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRule4",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30dp",
            "isModalContainer": false,
            "right": "30dp",
            "skin": "slFbox",
            "top": "80dp",
            "zIndex": 1
        }, controller.args[0], "flxRule4"), extendConfig({}, controller.args[1], "flxRule4"), extendConfig({}, controller.args[2], "flxRule4"));
        flxRule4.setDefaultUnit(kony.flex.DP);
        var flxDot3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7dp",
            "id": "flxDot3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "sknFlxFD3F2FCircle",
            "top": "7dp",
            "width": "7dp",
            "zIndex": 1
        }, controller.args[0], "flxDot3"), extendConfig({}, controller.args[1], "flxDot3"), extendConfig({}, controller.args[2], "flxDot3"));
        flxDot3.setDefaultUnit(kony.flex.DP);
        flxDot3.add();
        var lblRule4 = new kony.ui.Label(extendConfig({
            "height": "20dp",
            "id": "lblRule4",
            "isVisible": true,
            "left": "23dp",
            "right": "0dp",
            "skin": "sknLblSSPRegFD3F2F28px",
            "text": kony.i18n.getLocalizedString("kony.mb.securityReq.lowercaseLetterNote"),
            "textStyle": {},
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "lblRule4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRule4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRule4"));
        flxRule4.add(flxDot3, lblRule4);
        var flxRule5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRule5",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30dp",
            "isModalContainer": false,
            "right": "30dp",
            "skin": "slFbox",
            "top": "100dp",
            "zIndex": 1
        }, controller.args[0], "flxRule5"), extendConfig({}, controller.args[1], "flxRule5"), extendConfig({}, controller.args[2], "flxRule5"));
        flxRule5.setDefaultUnit(kony.flex.DP);
        var flxDot5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7dp",
            "id": "flxDot5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "sknFlxFD3F2FCircle",
            "top": "7dp",
            "width": "7dp",
            "zIndex": 1
        }, controller.args[0], "flxDot5"), extendConfig({}, controller.args[1], "flxDot5"), extendConfig({}, controller.args[2], "flxDot5"));
        flxDot5.setDefaultUnit(kony.flex.DP);
        flxDot5.add();
        var lblRule5 = new kony.ui.Label(extendConfig({
            "height": "20dp",
            "id": "lblRule5",
            "isVisible": true,
            "left": "23dp",
            "right": "0dp",
            "skin": "sknLblSSPRegFD3F2F28px",
            "text": kony.i18n.getLocalizedString("kony.mb.securityReq.invalidChar"),
            "textStyle": {},
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "lblRule5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRule5"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRule5"));
        flxRule5.add(flxDot5, lblRule5);
        var flxRule6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxRule6",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30dp",
            "isModalContainer": false,
            "right": "30dp",
            "skin": "slFbox",
            "top": "120dp",
            "zIndex": 1
        }, controller.args[0], "flxRule6"), extendConfig({}, controller.args[1], "flxRule6"), extendConfig({}, controller.args[2], "flxRule6"));
        flxRule6.setDefaultUnit(kony.flex.DP);
        var flxDot6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7dp",
            "id": "flxDot6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "sknFlxFD3F2FCircle",
            "top": "7dp",
            "width": "7dp",
            "zIndex": 1
        }, controller.args[0], "flxDot6"), extendConfig({}, controller.args[1], "flxDot6"), extendConfig({}, controller.args[2], "flxDot6"));
        flxDot6.setDefaultUnit(kony.flex.DP);
        flxDot6.add();
        var lblRule6 = new kony.ui.Label(extendConfig({
            "height": "20dp",
            "id": "lblRule6",
            "isVisible": true,
            "left": "23dp",
            "right": "0dp",
            "skin": "sknLblSSPRegFD3F2F28px",
            "text": kony.i18n.getLocalizedString("kony.mb.securityReq.caseSenstive"),
            "textStyle": {},
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "lblRule6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRule6"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRule6"));
        flxRule6.add(flxDot6, lblRule6);
        var rtxRulesPwd = new kony.ui.RichText(extendConfig({
            "id": "rtxRulesPwd",
            "isVisible": true,
            "left": "30dp",
            "linkSkin": "defRichTextLink",
            "right": "20dp",
            "skin": "sknrtxfd3f2fSSp95pr",
            "top": "30dp",
            "zIndex": 1
        }, controller.args[0], "rtxRulesPwd"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rtxRulesPwd"), extendConfig({
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "rtxRulesPwd"));
        flxSecurityRequirements.add(lblSecurityRequirements, flxRule1, flxRule2, flxRule3, flxRule4, flxRule5, flxRule6, rtxRulesPwd);
        var flxBtnSetPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxBtnSetPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxBtnSetPassword"), extendConfig({}, controller.args[1], "flxBtnSetPassword"), extendConfig({}, controller.args[2], "flxBtnSetPassword"));
        flxBtnSetPassword.setDefaultUnit(kony.flex.DP);
        var btnSetPassword = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtn055BAFSSPSemiBold26px",
            "height": "40dp",
            "id": "btnSetPassword",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtn0095e426pxEnabled",
            "text": "Set Password",
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "btnSetPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSetPassword"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSetPassword"));
        flxBtnSetPassword.add(btnSetPassword);
        flxCreatePassword.add(flxCreatePasswordMessage, lblErrorMsgPasswordCreation, flxPasswordFields, flxSecurityRequirements, flxBtnSetPassword);
        var flxProfileActivatedSuccessful = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60%",
            "id": "flxProfileActivatedSuccessful",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 30
        }, controller.args[0], "flxProfileActivatedSuccessful"), extendConfig({}, controller.args[1], "flxProfileActivatedSuccessful"), extendConfig({}, controller.args[2], "flxProfileActivatedSuccessful"));
        flxProfileActivatedSuccessful.setDefaultUnit(kony.flex.DP);
        var imgGreenTick = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgGreenTick",
            "isVisible": true,
            "skin": "slImage",
            "src": "confirmation_tick.png",
            "top": "100dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgGreenTick"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgGreenTick"), extendConfig({}, controller.args[2], "imgGreenTick"));
        var flxSuccessMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSuccessMessage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "190dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSuccessMessage"), extendConfig({}, controller.args[1], "flxSuccessMessage"), extendConfig({}, controller.args[2], "flxSuccessMessage"));
        flxSuccessMessage.setDefaultUnit(kony.flex.DP);
        var lblActivatedSuccessfully = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblActivatedSuccessfully",
            "isVisible": true,
            "skin": "sknlbl000000SSPSemiBold72px",
            "text": "Activated Successfully",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblActivatedSuccessfully"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblActivatedSuccessfully"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblActivatedSuccessfully"));
        var lblActivationDescription = new kony.ui.Label(extendConfig({
            "id": "lblActivationDescription",
            "isVisible": true,
            "left": "30dp",
            "right": "30dp",
            "skin": "sknLbl727272SSPR114pct",
            "text": "We have activated your profile successfully.  \nPlease sign in to continue",
            "textStyle": {},
            "top": "50dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblActivationDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblActivationDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblActivationDescription"));
        flxSuccessMessage.add(lblActivatedSuccessfully, lblActivationDescription);
        var btnDone = new kony.ui.Button(extendConfig({
            "bottom": "0%",
            "focusSkin": "sknBtn055BAFSSPSemiBold26px",
            "height": "40dp",
            "id": "btnDone",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtn0095e426pxEnabled",
            "text": "Done",
            "zIndex": 1
        }, controller.args[0], "btnDone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDone"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnDone"));
        flxProfileActivatedSuccessful.add(imgGreenTick, flxSuccessMessage, btnDone);
        flxMainContainer.add(flxProfileActivationScreen, flxCreatePassword, flxProfileActivatedSuccessful);
        activateProfile.add(flxHeader, flxMainContainer);
        return activateProfile;
    }
})