define(function() {
    return function(controller) {
        var login = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "24%",
            "id": "login",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "postShow": controller.AS_FlexContainer_a60aa9609fdc45ada7136af89e5dae64,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_c38ba148e1f74878bcc7e3a440504855(eventobject);
            },
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "login"), extendConfig({}, controller.args[1], "login"), extendConfig({}, controller.args[2], "login"));
        login.setDefaultUnit(kony.flex.DP);
        var flxLoginPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxLoginPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%"
        }, controller.args[0], "flxLoginPassword"), extendConfig({}, controller.args[1], "flxLoginPassword"), extendConfig({}, controller.args[2], "flxLoginPassword"));
        flxLoginPassword.setDefaultUnit(kony.flex.DP);
        var flxContent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0%",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxContent"), extendConfig({}, controller.args[1], "flxContent"), extendConfig({}, controller.args[2], "flxContent"));
        flxContent.setDefaultUnit(kony.flex.DP);
        var flxSCALoginContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSCALoginContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSCALoginContainer"), extendConfig({}, controller.args[1], "flxSCALoginContainer"), extendConfig({}, controller.args[2], "flxSCALoginContainer"));
        flxSCALoginContainer.setDefaultUnit(kony.flex.DP);
        var lblErrorMessage = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblErrorMessage",
            "isVisible": false,
            "maxHeight": "50dp",
            "skin": "CopyCopysknLblEE",
            "text": "Failed to Login.",
            "textStyle": {},
            "top": "20dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblErrorMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorMessage"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblErrorMessage"));
        var flxMultipleUserIDs = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "51dp",
            "id": "flxMultipleUserIDs",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxFFFFFFBorderE9E9E9Radius4px",
            "top": "20dp",
            "width": "90%",
            "zIndex": 10
        }, controller.args[0], "flxMultipleUserIDs"), extendConfig({}, controller.args[1], "flxMultipleUserIDs"), extendConfig({}, controller.args[2], "flxMultipleUserIDs"));
        flxMultipleUserIDs.setDefaultUnit(kony.flex.DP);
        var lblSelectedUserTag = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSelectedUserTag",
            "isVisible": true,
            "left": "16dp",
            "skin": "skn424242SSPR15px",
            "text": "Selected user:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSelectedUserTag"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelectedUserTag"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSelectedUserTag"));
        var lblSelectedUserId = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSelectedUserId",
            "isVisible": true,
            "left": "125dp",
            "skin": "sknLbl727272SSPR15px",
            "textStyle": {},
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSelectedUserId"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelectedUserId"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSelectedUserId"));
        var imgRightArrow = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "13dp",
            "id": "imgRightArrow",
            "isVisible": true,
            "right": "23dp",
            "skin": "slImage",
            "src": "arrowright.png",
            "width": "13dp",
            "zIndex": 1
        }, controller.args[0], "imgRightArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgRightArrow"), extendConfig({}, controller.args[2], "imgRightArrow"));
        flxMultipleUserIDs.add(lblSelectedUserTag, lblSelectedUserId, imgRightArrow);
        var flxSingleUserID = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "51dp",
            "id": "flxSingleUserID",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxBgF6F6F6Border1pxE3E3E3Rad4px",
            "top": "20dp",
            "width": "90%",
            "zIndex": 10
        }, controller.args[0], "flxSingleUserID"), extendConfig({}, controller.args[1], "flxSingleUserID"), extendConfig({}, controller.args[2], "flxSingleUserID"));
        flxSingleUserID.setDefaultUnit(kony.flex.DP);
        var lblUserId = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblUserId",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLbl727272SSPR15px",
            "textStyle": {},
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblUserId"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserId"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblUserId"));
        flxSingleUserID.add(lblUserId);
        var flxCantSignIn = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxCantSignIn",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "90%"
        }, controller.args[0], "flxCantSignIn"), extendConfig({}, controller.args[1], "flxCantSignIn"), extendConfig({}, controller.args[2], "flxCantSignIn"));
        flxCantSignIn.setDefaultUnit(kony.flex.DP);
        var lblCantSignIn = new kony.ui.Label(extendConfig({
            "id": "lblCantSignIn",
            "isVisible": true,
            "left": 0,
            "skin": "sknLbl004B95SSPRegular26px",
            "text": kony.i18n.getLocalizedString("kony.mb.login.cannotLogin"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCantSignIn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCantSignIn"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCantSignIn"));
        flxCantSignIn.add(lblCantSignIn);
        var btnLogIn = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtn055BAFSSPSemiBold26px",
            "height": "48dp",
            "id": "btnLogIn",
            "isVisible": true,
            "skin": "sknBtn0095e426pxEnabled",
            "text": kony.i18n.getLocalizedString("kony.mb.login.logIn"),
            "top": "20dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnLogIn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLogIn"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnLogIn"));
        flxSCALoginContainer.add(lblErrorMessage, flxMultipleUserIDs, flxSingleUserID, flxCantSignIn, btnLogIn);
        var tbxUsername = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "tbxUsername",
            "isVisible": false,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.login.username"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "sknTbx424242SSPRegular28px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "12%",
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
        var tbxPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "tbxPassword",
            "isVisible": false,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.login.password"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "sknTbx424242SSPRegular28px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "35%",
            "zIndex": 3
        }, controller.args[0], "tbxPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxPassword"), extendConfig({
            "autoCorrect": false,
            "closeButtonText": "Cancel",
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxPassword"));
        var flxPwdVisiblityToggle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxPwdVisiblityToggle",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "84.70%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "35%",
            "width": "33dp",
            "zIndex": 10
        }, controller.args[0], "flxPwdVisiblityToggle"), extendConfig({}, controller.args[1], "flxPwdVisiblityToggle"), extendConfig({}, controller.args[2], "flxPwdVisiblityToggle"));
        flxPwdVisiblityToggle.setDefaultUnit(kony.flex.DP);
        var imgPwdVisiblityToggle = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgPwdVisiblityToggle",
            "isVisible": true,
            "skin": "slImage",
            "src": "view.png",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "imgPwdVisiblityToggle"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPwdVisiblityToggle"), extendConfig({}, controller.args[2], "imgPwdVisiblityToggle"));
        flxPwdVisiblityToggle.add(imgPwdVisiblityToggle);
        var flxForgot = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "6%",
            "id": "flxForgot",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "maxWidth": "45%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "65%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "flxForgot"), extendConfig({}, controller.args[1], "flxForgot"), extendConfig({}, controller.args[2], "flxForgot"));
        flxForgot.setDefaultUnit(kony.flex.DP);
        var lblForgotPwd = new kony.ui.Label(extendConfig({
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
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblForgotPwd"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblForgotPwd"));
        flxForgot.add(lblForgotPwd);
        var lblRememberMe = new kony.ui.Label(extendConfig({
            "height": "45dp",
            "id": "lblRememberMe",
            "isVisible": false,
            "right": "85dp",
            "skin": "sknLbl424242SSPRegular26px",
            "text": kony.i18n.getLocalizedString("kony.mb.login.rememberMe"),
            "textStyle": {},
            "top": "60%",
            "width": "35%",
            "zIndex": 3
        }, controller.args[0], "lblRememberMe"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRememberMe"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRememberMe"));
        var flxCheckBox = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxCheckBox",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "60.50%",
            "width": "155dp",
            "zIndex": 3
        }, controller.args[0], "flxCheckBox"), extendConfig({}, controller.args[1], "flxCheckBox"), extendConfig({}, controller.args[2], "flxCheckBox"));
        flxCheckBox.setDefaultUnit(kony.flex.DP);
        var imgCheckBox = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgCheckBox",
            "isVisible": false,
            "right": "10dp",
            "skin": "slImage",
            "src": "remembermetick.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgCheckBox"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCheckBox"), extendConfig({}, controller.args[2], "imgCheckBox"));
        var flxSwitchBackground = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "30dp",
            "id": "flxSwitchBackground",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "10dp",
            "skin": "sknflxa0a0a0Switch",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "flxSwitchBackground"), extendConfig({}, controller.args[1], "flxSwitchBackground"), extendConfig({}, controller.args[2], "flxSwitchBackground"));
        flxSwitchBackground.setDefaultUnit(kony.flex.DP);
        var flxSwitch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "47%",
            "clipBounds": false,
            "height": "28dp",
            "id": "flxSwitch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxffffffa0a0a0100px",
            "width": "28dp",
            "zIndex": 2
        }, controller.args[0], "flxSwitch"), extendConfig({}, controller.args[1], "flxSwitch"), extendConfig({}, controller.args[2], "flxSwitch"));
        flxSwitch.setDefaultUnit(kony.flex.DP);
        flxSwitch.add();
        var flxSwitchShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "49.33%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxSwitchShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadowSwitch",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flxSwitchShadow"), extendConfig({}, controller.args[1], "flxSwitchShadow"), extendConfig({}, controller.args[2], "flxSwitchShadow"));
        flxSwitchShadow.setDefaultUnit(kony.flex.DP);
        flxSwitchShadow.add();
        flxSwitchBackground.add(flxSwitch, flxSwitchShadow);
        var switchRememberMe = new kony.ui.Switch(extendConfig({
            "centerY": "50%",
            "height": "32dp",
            "id": "switchRememberMe",
            "isVisible": true,
            "leftSideText": "     ",
            "right": "0dp",
            "rightSideText": "     ",
            "selectedIndex": 0,
            "skin": "sknSwitch0095e4Op100pr000000Op10pr",
            "width": "55dp",
            "zIndex": 1
        }, controller.args[0], "switchRememberMe"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "switchRememberMe"), extendConfig({
            "nativeThumbLook": true
        }, controller.args[2], "switchRememberMe"));
        flxCheckBox.add(imgCheckBox, flxSwitchBackground, switchRememberMe);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxButtons",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "88%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var flxOpenNewAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "50%",
            "id": "flxOpenNewAccount",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "50%",
            "zIndex": 3
        }, controller.args[0], "flxOpenNewAccount"), extendConfig({}, controller.args[1], "flxOpenNewAccount"), extendConfig({}, controller.args[2], "flxOpenNewAccount"));
        flxOpenNewAccount.setDefaultUnit(kony.flex.DP);
        var lblOpenNewAccount = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblOpenNewAccount",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl004B95SSPRegular26px",
            "text": kony.i18n.getLocalizedString("kony.mb.login.openNewAccount"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblOpenNewAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOpenNewAccount"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblOpenNewAccount"));
        flxOpenNewAccount.add(lblOpenNewAccount);
        flxButtons.add(flxOpenNewAccount);
        flxContent.add(flxSCALoginContainer, tbxUsername, tbxPassword, flxPwdVisiblityToggle, flxForgot, lblRememberMe, flxCheckBox, flxButtons);
        flxLoginPassword.add(flxContent);
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
        login.add(flxLoginPassword, sdk);
        return login;
    }
})