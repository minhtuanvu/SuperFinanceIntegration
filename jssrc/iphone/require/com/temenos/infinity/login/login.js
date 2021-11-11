define(function() {
    return function(controller) {
        var login = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "37%",
            "id": "login",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_e2ef78bb792845b18f2173d77a63e13c(eventobject);
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
        var tbxUsername = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "tbxUsername",
            "isVisible": true,
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
            "isVisible": true,
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
            "isVisible": true,
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
            "isVisible": true,
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
            "isVisible": true,
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
            "isVisible": true,
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
        var btnLogIn = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtn055BAFSSPSemiBold26px",
            "height": "40dp",
            "id": "btnLogIn",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtn0095e426pxEnabled",
            "text": kony.i18n.getLocalizedString("kony.mb.login.logIn"),
            "top": "82%",
            "zIndex": 1
        }, controller.args[0], "btnLogIn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLogIn"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnLogIn"));
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
        flxContent.add(tbxUsername, tbxPassword, flxPwdVisiblityToggle, flxForgot, lblRememberMe, flxCheckBox, btnLogIn, flxButtons);
        flxLoginPassword.add(flxContent);
        login.add(flxLoginPassword);
        return login;
    }
})