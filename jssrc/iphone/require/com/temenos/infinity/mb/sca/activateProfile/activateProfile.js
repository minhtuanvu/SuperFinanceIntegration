define(function() {
    return function(controller) {
        var activateProfile = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "activateProfile",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": true,
            "postShow": controller.AS_FlexContainer_c0980f892c414e0caa06e92c8ff32042,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_a2d7964c35074ea8a4a837bfc937c020(eventobject);
            },
            "right": "0dp",
            "skin": "CopyCopysknFlxBgFFFFFF",
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
            "skin": "CopyCopysknFlx",
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
            "skin": "CopyCopysknLblffffffSSP",
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
            "height": "60%",
            "id": "flxProfileActivationScreen",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": true,
            "skin": "CopyCopyslFbox3",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxProfileActivationScreen"), extendConfig({}, controller.args[1], "flxProfileActivationScreen"), extendConfig({}, controller.args[2], "flxProfileActivationScreen"));
        flxProfileActivationScreen.setDefaultUnit(kony.flex.DP);
        var flxTopMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTopMessage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxBgFFFFFShadowBottomA6A6A6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTopMessage"), extendConfig({}, controller.args[1], "flxTopMessage"), extendConfig({}, controller.args[2], "flxTopMessage"));
        flxTopMessage.setDefaultUnit(kony.flex.DP);
        var lblMessage = new kony.ui.Label(extendConfig({
            "bottom": "11dp",
            "id": "lblMessage",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "CopyCopysknLbl2",
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
            "height": "190dp",
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
            "right": "20dp",
            "skin": "CopyCopysknLblEE",
            "text": "Incorrect username or activation code",
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
        var flxUsername = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxUsername",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "30dp",
            "width": "100%"
        }, controller.args[0], "flxUsername"), extendConfig({}, controller.args[1], "flxUsername"), extendConfig({}, controller.args[2], "flxUsername"));
        flxUsername.setDefaultUnit(kony.flex.DP);
        var tbxUsername = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "0dp",
            "focusSkin": "CopyCopytbxBlueFocus",
            "height": "48dp",
            "id": "tbxUsername",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Username",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxFontSSPR",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
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
            "placeholderSkin": "CopyCopysknTbxA",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxUsername"));
        var lblUsername = new kony.ui.Label(extendConfig({
            "id": "lblUsername",
            "isVisible": true,
            "left": "20dp",
            "skin": "CopyCopysknLbl2",
            "text": "Username:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblUsername"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUsername"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblUsername"));
        flxUsername.add(tbxUsername, lblUsername);
        var flxActivationCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "75dp",
            "id": "flxActivationCode",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%"
        }, controller.args[0], "flxActivationCode"), extendConfig({}, controller.args[1], "flxActivationCode"), extendConfig({}, controller.args[2], "flxActivationCode"));
        flxActivationCode.setDefaultUnit(kony.flex.DP);
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
            "src": "viewicon_4_1.png",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "imgActivationCodeVisiblityToggle"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgActivationCodeVisiblityToggle"), extendConfig({}, controller.args[2], "imgActivationCodeVisiblityToggle"));
        flxActivationCodeVisiblityToggle.add(imgActivationCodeVisiblityToggle);
        var tbxActivationCode = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "0dp",
            "focusSkin": "CopyCopytbxBlueFocus",
            "height": "48dp",
            "id": "tbxActivationCode",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Activation Code",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxFontSSPR",
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
            "placeholderSkin": "CopyCopysknTbxA",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxActivationCode"));
        var lblActivationCode = new kony.ui.Label(extendConfig({
            "id": "lblActivationCode",
            "isVisible": true,
            "left": "20dp",
            "skin": "CopyCopysknLbl2",
            "text": "Activation Code:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblActivationCode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblActivationCode"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblActivationCode"));
        flxActivationCode.add(flxActivationCodeVisiblityToggle, tbxActivationCode, lblActivationCode);
        flxCredentials.add(lblErrorMessage, flxUsername, flxActivationCode);
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
            "focusSkin": "CopyCopysknBtn1",
            "height": "40dp",
            "id": "btnVerify",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "CopyCopysknBtn",
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
        flxProfileActivationScreen.add(flxTopMessage, flxCredentials, flxBtnVerify);
        var flxCreatePassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCreatePassword",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": true,
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
            "skin": "sknFlxBgFFFFFShadowBottomA6A6A6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCreatePasswordMessage"), extendConfig({}, controller.args[1], "flxCreatePasswordMessage"), extendConfig({}, controller.args[2], "flxCreatePasswordMessage"));
        flxCreatePasswordMessage.setDefaultUnit(kony.flex.DP);
        var lblCreateNewPassword = new kony.ui.Label(extendConfig({
            "bottom": "11dp",
            "centerX": "50%",
            "id": "lblCreateNewPassword",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknLbl727272SSPR114pct",
            "text": "Create a password to sign onto online banking using password",
            "textStyle": {},
            "top": "11dp",
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
            "skin": "CopyCopysknLblEE",
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
            "skin": "CopyCopysknLbl2",
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
            "focusSkin": "CopyCopytbxBlueFocus",
            "height": "48dp",
            "id": "tbxNewPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.common.EnterNewPassword"),
            "right": "0dp",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxFontSSPR",
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
            "bottom": "0dp",
            "focusSkin": "CopyCopytbxBlueFocus",
            "height": "48dp",
            "id": "tbxReEnterPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.Forgot.ReEnterNewPassword"),
            "right": "0dp",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxFontSSPR",
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
            "src": "tickmark_4_1.png",
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
            "focusSkin": "CopyCopysknBtn1",
            "height": "40dp",
            "id": "btnSetPassword",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "CopyCopysknBtn",
            "text": "Create Password",
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
        var flxSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60%",
            "id": "flxSuccess",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": true,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 30
        }, controller.args[0], "flxSuccess"), extendConfig({}, controller.args[1], "flxSuccess"), extendConfig({}, controller.args[2], "flxSuccess"));
        flxSuccess.setDefaultUnit(kony.flex.DP);
        var imgGreenTick = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgGreenTick",
            "isVisible": true,
            "skin": "slImage",
            "src": "confirmation_tick_3_1.png",
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
            "skin": "CopyCopysknlbl1",
            "text": "Profile Activated",
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
            "skin": "CopyCopysknLbl2",
            "text": "We have activated your profile successfully.  Please continue to enable Face ID/Biometric.",
            "textStyle": {},
            "top": "50dp",
            "width": "80%",
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
            "focusSkin": "CopyCopysknBtn1",
            "height": "40dp",
            "id": "btnDone",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "CopyCopysknBtn",
            "text": "Continue",
            "zIndex": 1
        }, controller.args[0], "btnDone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDone"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnDone"));
        flxSuccess.add(imgGreenTick, flxSuccessMessage, btnDone);
        var flxPin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPin",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": true,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxPin"), extendConfig({}, controller.args[1], "flxPin"), extendConfig({}, controller.args[2], "flxPin"));
        flxPin.setDefaultUnit(kony.flex.DP);
        var flxCreatePin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCreatePin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFShadowBottomA6A6A6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCreatePin"), extendConfig({}, controller.args[1], "flxCreatePin"), extendConfig({}, controller.args[2], "flxCreatePin"));
        flxCreatePin.setDefaultUnit(kony.flex.DP);
        var lblCreatePin = new kony.ui.Label(extendConfig({
            "bottom": "11dp",
            "centerX": "50%",
            "id": "lblCreatePin",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "CopyCopysknLbl",
            "text": "Please create a PIN to use to log onto Infinity",
            "textStyle": {},
            "top": "11dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCreatePin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCreatePin"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCreatePin"));
        flxCreatePin.add(lblCreatePin);
        var lblErrorPin = new kony.ui.Label(extendConfig({
            "id": "lblErrorPin",
            "isVisible": false,
            "left": "20dp",
            "skin": "CopyCopysknLblEE",
            "text": "Failed to create a pin!",
            "textStyle": {},
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblErrorPin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorPin"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblErrorPin"));
        var flxPinFields = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "170dp",
            "id": "flxPinFields",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPinFields"), extendConfig({}, controller.args[1], "flxPinFields"), extendConfig({}, controller.args[2], "flxPinFields"));
        flxPinFields.setDefaultUnit(kony.flex.DP);
        var flxNewPin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxNewPin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "flxNewPin"), extendConfig({}, controller.args[1], "flxNewPin"), extendConfig({}, controller.args[2], "flxNewPin"));
        flxNewPin.setDefaultUnit(kony.flex.DP);
        var lblPin = new kony.ui.Label(extendConfig({
            "id": "lblPin",
            "isVisible": true,
            "left": "10dp",
            "skin": "CopyCopysknLbl2",
            "text": "PIN",
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
            "left": "0dp",
            "placeholder": "Enter PIN",
            "right": "0dp",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxFontSSPR",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "width": "100%",
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
            "right": "6dp",
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
            "src": "viewicon_4_1.png",
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
            "bottom": "0dp",
            "clipBounds": true,
            "height": "75dp",
            "id": "flxReEnterPin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "zIndex": 1
        }, controller.args[0], "flxReEnterPin"), extendConfig({}, controller.args[1], "flxReEnterPin"), extendConfig({}, controller.args[2], "flxReEnterPin"));
        flxReEnterPin.setDefaultUnit(kony.flex.DP);
        var lblReEnterPin = new kony.ui.Label(extendConfig({
            "id": "lblReEnterPin",
            "isVisible": true,
            "left": "10dp",
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
            "left": "0dp",
            "placeholder": "Re-enter PIN",
            "right": "0dp",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxFontSSPR",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "width": "100%",
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
            "right": "6dp",
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
            "src": "tickmark_4_1.png",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "imgReEnterPinMatch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgReEnterPinMatch"), extendConfig({}, controller.args[2], "imgReEnterPinMatch"));
        flxReEnterPinMatch.add(imgReEnterPinMatch);
        flxReEnterPin.add(lblReEnterPin, tbxReEnterPin, flxReEnterPinMatch);
        flxPinFields.add(flxNewPin, flxReEnterPin);
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
        var flxBtnSetPin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxBtnSetPin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxBtnSetPin"), extendConfig({}, controller.args[1], "flxBtnSetPin"), extendConfig({}, controller.args[2], "flxBtnSetPin"));
        flxBtnSetPin.setDefaultUnit(kony.flex.DP);
        var btnSetPin = new kony.ui.Button(extendConfig({
            "focusSkin": "CopyCopysknBtn1",
            "height": "40dp",
            "id": "btnSetPin",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "CopyCopysknBtn",
            "text": "Continue",
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "btnSetPin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSetPin"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSetPin"));
        flxBtnSetPin.add(btnSetPin);
        flxPin.add(flxCreatePin, lblErrorPin, flxPinFields, flxPinPasswordPolicy, flxBtnSetPin);
        var flxPasswordSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60%",
            "id": "flxPasswordSuccess",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": true,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 30
        }, controller.args[0], "flxPasswordSuccess"), extendConfig({}, controller.args[1], "flxPasswordSuccess"), extendConfig({}, controller.args[2], "flxPasswordSuccess"));
        flxPasswordSuccess.setDefaultUnit(kony.flex.DP);
        var imgGreenIcon = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgGreenIcon",
            "isVisible": true,
            "skin": "slImage",
            "src": "confirmation_tick_3_1.png",
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
        var lblPasswordSuccess = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblPasswordSuccess",
            "isVisible": true,
            "skin": "CopyCopysknlbl1",
            "text": "Profile Activated",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPasswordSuccess"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPasswordSuccess"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPasswordSuccess"));
        var lblDescription = new kony.ui.Label(extendConfig({
            "id": "lblDescription",
            "isVisible": true,
            "left": "30dp",
            "right": "30dp",
            "skin": "CopyCopysknLbl2",
            "text": "We have activated your profile successfully.  \nPlease continue to configure Face ID  or Fingerprint & Create online banking password",
            "textStyle": {},
            "top": "50dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDescription"));
        flxStatus.add(lblPasswordSuccess, lblDescription);
        var btnSignIn = new kony.ui.Button(extendConfig({
            "bottom": "0%",
            "focusSkin": "CopyCopysknBtn1",
            "height": "40dp",
            "id": "btnSignIn",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "CopyCopysknBtn",
            "text": "Continue",
            "zIndex": 1
        }, controller.args[0], "btnSignIn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSignIn"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSignIn"));
        flxPasswordSuccess.add(imgGreenIcon, flxStatus, btnSignIn);
        flxMainContainer.add(flxProfileActivationScreen, flxCreatePassword, flxSuccess, flxPin, flxPasswordSuccess);
        var sdk = new com.temenos.hidapprove.sdk(extendConfig({
            "height": "100%",
            "id": "sdk",
            "isVisible": false,
            "left": "-2dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "CopyslFbox0je89e7fdee944e",
            "top": "0dp",
            "width": "100%",
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
        activateProfile.add(flxHeader, flxMainContainer, sdk);
        return activateProfile;
    }
})