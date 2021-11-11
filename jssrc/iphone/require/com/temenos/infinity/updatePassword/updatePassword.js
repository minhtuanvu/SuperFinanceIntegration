define(function() {
    return function(controller) {
        var updatePassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "updatePassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_e564d53257be4972858358a31615c321(eventobject);
            },
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "updatePassword"), extendConfig({}, controller.args[1], "updatePassword"), extendConfig({}, controller.args[2], "updatePassword"));
        updatePassword.setDefaultUnit(kony.flex.DP);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "56dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffffShadow",
            "top": "0dp",
            "width": "100%",
            "zIndex": 30
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var customHeader = new com.kmb.common.customHeader(extendConfig({
            "height": "100%",
            "id": "customHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_DEFAULT,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "btnRight": {
                    "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                    "isVisible": true,
                    "zIndex": 10
                },
                "flxSearch": {
                    "isVisible": false
                },
                "imgBack": {
                    "src": "backbutton.png"
                },
                "lblLocateUs": {
                    "text": kony.i18n.getLocalizedString("kony.mb.ProfileChangeAndUpdatePassword.Title")
                }
            }
        }, controller.args[0], "customHeader"), extendConfig({
            "overrides": {}
        }, controller.args[1], "customHeader"), extendConfig({
            "overrides": {}
        }, controller.args[2], "customHeader"));
        flxHeader.add(customHeader);
        var flxSignUpContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "80%",
            "horizontalScrollIndicator": true,
            "id": "flxSignUpContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "15dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSignUpContainer"), extendConfig({}, controller.args[1], "flxSignUpContainer"), extendConfig({}, controller.args[2], "flxSignUpContainer"));
        flxSignUpContainer.setDefaultUnit(kony.flex.DP);
        var lblCurrentPassword = new kony.ui.Label(extendConfig({
            "id": "lblCurrentPassword",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLbl424242SSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.Profile.CurrentPassword"),
            "textStyle": {},
            "top": "1%",
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
        var flxPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "41dp",
            "id": "flxPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxPassword"), extendConfig({}, controller.args[1], "flxPassword"), extendConfig({}, controller.args[2], "flxPassword"));
        flxPassword.setDefaultUnit(kony.flex.DP);
        var txtCurrentPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtCurrentPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "maxTextLength": null,
            "placeholder": kony.i18n.getLocalizedString("kony.mb.Profile.EnterCurrentPassword"),
            "right": "20dp",
            "secureTextEntry": true,
            "skin": "sknTbx424242SSPRegular28px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "zIndex": 1
        }, controller.args[0], "txtCurrentPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtCurrentPassword"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtCurrentPassword"));
        var flxPwdVisiblityToggle2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxPwdVisiblityToggle2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "22dp",
            "skin": "slFbox",
            "width": "33dp",
            "zIndex": 1
        }, controller.args[0], "flxPwdVisiblityToggle2"), extendConfig({}, controller.args[1], "flxPwdVisiblityToggle2"), extendConfig({}, controller.args[2], "flxPwdVisiblityToggle2"));
        flxPwdVisiblityToggle2.setDefaultUnit(kony.flex.DP);
        var imghideOrShowPwd2 = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "18dp",
            "id": "imghideOrShowPwd2",
            "isVisible": true,
            "onTouchEnd": controller.AS_Image_e574aac4b7a34c6bb004031fdf7d6685,
            "skin": "slImage",
            "src": "viewicon.png",
            "width": "18dp",
            "zIndex": 3
        }, controller.args[0], "imghideOrShowPwd2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imghideOrShowPwd2"), extendConfig({}, controller.args[2], "imghideOrShowPwd2"));
        flxPwdVisiblityToggle2.add(imghideOrShowPwd2);
        flxPassword.add(txtCurrentPassword, flxPwdVisiblityToggle2);
        var lblNewPassword = new kony.ui.Label(extendConfig({
            "id": "lblNewPassword",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLbl424242SSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.UpdatePassword.NewPassword"),
            "textStyle": {},
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblNewPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNewPassword"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNewPassword"));
        var flxNewPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "41dp",
            "id": "flxNewPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxNewPassword"), extendConfig({}, controller.args[1], "flxNewPassword"), extendConfig({}, controller.args[2], "flxNewPassword"));
        flxNewPassword.setDefaultUnit(kony.flex.DP);
        var txtNewPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtNewPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "maxTextLength": null,
            "placeholder": kony.i18n.getLocalizedString("kony.mb.Profile.EnterNewPassword"),
            "right": "20dp",
            "secureTextEntry": true,
            "skin": "sknTbx424242SSPRegular28px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "zIndex": 1
        }, controller.args[0], "txtNewPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtNewPassword"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtNewPassword"));
        var flxPwdVisiblityToggle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxPwdVisiblityToggle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "22dp",
            "skin": "slFbox",
            "width": "33dp",
            "zIndex": 1
        }, controller.args[0], "flxPwdVisiblityToggle"), extendConfig({}, controller.args[1], "flxPwdVisiblityToggle"), extendConfig({}, controller.args[2], "flxPwdVisiblityToggle"));
        flxPwdVisiblityToggle.setDefaultUnit(kony.flex.DP);
        var imghideOrShowPwd = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "18dp",
            "id": "imghideOrShowPwd",
            "isVisible": true,
            "onTouchEnd": controller.AS_Image_e574aac4b7a34c6bb004031fdf7d6685,
            "skin": "slImage",
            "src": "viewicon.png",
            "width": "18dp",
            "zIndex": 3
        }, controller.args[0], "imghideOrShowPwd"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imghideOrShowPwd"), extendConfig({}, controller.args[2], "imghideOrShowPwd"));
        flxPwdVisiblityToggle.add(imghideOrShowPwd);
        flxNewPassword.add(txtNewPassword, flxPwdVisiblityToggle);
        var flxSecurityRequirements = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSecurityRequirements",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "89%",
            "zIndex": 100
        }, controller.args[0], "flxSecurityRequirements"), extendConfig({}, controller.args[1], "flxSecurityRequirements"), extendConfig({}, controller.args[2], "flxSecurityRequirements"));
        flxSecurityRequirements.setDefaultUnit(kony.flex.DP);
        var lblSecurityRequirements = new kony.ui.Label(extendConfig({
            "id": "lblSecurityRequirements",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLblSSPRegFD3F2F28px",
            "text": kony.i18n.getLocalizedString("kony.mb.securityReq.passwordtitle"),
            "textStyle": {},
            "top": "15dp",
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
            "left": "10dp",
            "linkSkin": "defRichTextLink",
            "right": "10dp",
            "skin": "sknrtxfd3f2fSSp95pr",
            "text": "<li>Test</li><li>Test</li><li>Test</li><li>Test</li>",
            "top": "40dp",
            "zIndex": 1
        }, controller.args[0], "rtxRulesPwd"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rtxRulesPwd"), extendConfig({
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "rtxRulesPwd"));
        flxSecurityRequirements.add(lblSecurityRequirements, rtxRulesPwd);
        var lblRenterNewPassword = new kony.ui.Label(extendConfig({
            "id": "lblRenterNewPassword",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLbl424242SSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.Profile.ReEnterPass"),
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRenterNewPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRenterNewPassword"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRenterNewPassword"));
        var flxReEnterNewPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "41dp",
            "id": "flxReEnterNewPassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxReEnterNewPassword"), extendConfig({}, controller.args[1], "flxReEnterNewPassword"), extendConfig({}, controller.args[2], "flxReEnterNewPassword"));
        flxReEnterNewPassword.setDefaultUnit(kony.flex.DP);
        var txtReEnterPass = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtReEnterPass",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "maxTextLength": null,
            "placeholder": kony.i18n.getLocalizedString("kony.mb.Profile.ReEnterPass"),
            "right": "20dp",
            "secureTextEntry": true,
            "skin": "sknTbx424242SSPRegular28px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "zIndex": 1
        }, controller.args[0], "txtReEnterPass"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtReEnterPass"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtReEnterPass"));
        var imgRenterPass = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "18dp",
            "id": "imgRenterPass",
            "isVisible": true,
            "right": "29dp",
            "skin": "slImage",
            "src": "tickmark.png",
            "width": "18dp",
            "zIndex": 3
        }, controller.args[0], "imgRenterPass"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgRenterPass"), extendConfig({}, controller.args[2], "imgRenterPass"));
        flxReEnterNewPassword.add(txtReEnterPass, imgRenterPass);
        flxSignUpContainer.add(lblCurrentPassword, flxPassword, lblNewPassword, flxNewPassword, flxSecurityRequirements, lblRenterNewPassword, flxReEnterNewPassword);
        flxMainContainer.add(flxHeader, flxSignUpContainer);
        var btnUpdate = new kony.ui.Button(extendConfig({
            "bottom": "15dp",
            "centerX": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "40dp",
            "id": "btnUpdate",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknBtn0095e4RoundedffffffSSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.Profile.UpdatePassword"),
            "width": "89%",
            "zIndex": 1
        }, controller.args[0], "btnUpdate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnUpdate"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnUpdate"));
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10.50%",
            "id": "flxPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxf54b5e",
            "top": "0dp",
            "width": "100%",
            "zIndex": 200
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
        var customPopup = new com.kmb.common.customPopup(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "height": "100%",
            "id": "customPopup",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_DEFAULT,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "imgPopup": {
                    "src": "imagedrag.png"
                }
            }
        }, controller.args[0], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[1], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[2], "customPopup"));
        flxPopup.add(customPopup);
        updatePassword.add(flxMainContainer, btnUpdate, flxPopup);
        return updatePassword;
    }
})