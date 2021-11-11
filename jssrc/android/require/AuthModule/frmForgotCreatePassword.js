define("AuthModule/frmForgotCreatePassword", function() {
    return function(controller) {
        function addWidgetsfrmForgotCreatePassword() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-5dp",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxHeaderShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
            var customHeader = new com.kmb.common.customHeader({
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
                        "isVisible": true
                    },
                    "flxBack": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.ForgotCredentials.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.btnRight.onClick = controller.AS_Button_j4fd09b548f54d51bb0108e43eae39be;
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var lblCreateNewPassword = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblCreateNewPassword",
                "isVisible": true,
                "skin": "sknLbl424242SSP55px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.CreateNewPassword"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "25dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblNewPassword = new kony.ui.Label({
                "id": "lblNewPassword",
                "isVisible": true,
                "left": "30dp",
                "right": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.NewPassword"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "25dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxPassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxPassword",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxPassword.setDefaultUnit(kony.flex.DP);
            var imgMaskUnmask = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgMaskUnmask",
                "isVisible": true,
                "right": "9%",
                "skin": "slImage",
                "src": "viewicon.png",
                "width": "15dp",
                "zIndex": 7
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtNewPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtNewPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "onDone": controller.AS_TextField_h92f876e33dc472c84606d4ccab08810,
                "onTextChange": controller.AS_TextField_be5b39c964454eaca8783939d9d794a9,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.common.EnterNewPassword"),
                "secureTextEntry": true,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxPassword.add(imgMaskUnmask, txtNewPassword);
            var flxSecurityRequirements = new kony.ui.FlexContainer({
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
            }, {}, {});
            flxSecurityRequirements.setDefaultUnit(kony.flex.DP);
            var lblSecurityRequirements = new kony.ui.Label({
                "id": "lblSecurityRequirements",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.passwordtitle"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxRule1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxRule1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRule1.setDefaultUnit(kony.flex.DP);
            var flxDot = new kony.ui.FlexContainer({
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
            }, {}, {});
            flxDot.setDefaultUnit(kony.flex.DP);
            flxDot.add();
            var lblRule1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRule1",
                "isVisible": true,
                "left": "23dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.charLimitNote"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRule1.add(flxDot, lblRule1);
            var flxRule2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxRule2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRule2.setDefaultUnit(kony.flex.DP);
            var flxDot1 = new kony.ui.FlexContainer({
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
            }, {}, {});
            flxDot1.setDefaultUnit(kony.flex.DP);
            flxDot1.add();
            var lblRule2 = new kony.ui.Label({
                "height": "20dp",
                "id": "lblRule2",
                "isVisible": true,
                "left": "23dp",
                "right": "0dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.containNoNote"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRule2.add(flxDot1, lblRule2);
            var flxRule3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": 20,
                "id": "flxRule3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRule3.setDefaultUnit(kony.flex.DP);
            var flxDot2 = new kony.ui.FlexContainer({
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
            }, {}, {});
            flxDot2.setDefaultUnit(kony.flex.DP);
            flxDot2.add();
            var lblRule3 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRule3",
                "isVisible": true,
                "left": "23dp",
                "right": "0dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.upercaseLetterNote"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRule3.add(flxDot2, lblRule3);
            var flxRule4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxRule4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRule4.setDefaultUnit(kony.flex.DP);
            var flxDot3 = new kony.ui.FlexContainer({
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
            }, {}, {});
            flxDot3.setDefaultUnit(kony.flex.DP);
            flxDot3.add();
            var lblRule4 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRule4",
                "isVisible": true,
                "left": "23dp",
                "right": "0dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.lowercaseLetterNote"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRule4.add(flxDot3, lblRule4);
            var flxRule5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxRule5",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRule5.setDefaultUnit(kony.flex.DP);
            var flxDot5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxDot5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "sknFlxFD3F2FCircle",
                "top": "10dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxDot5.setDefaultUnit(kony.flex.DP);
            flxDot5.add();
            var lblRule5 = new kony.ui.Label({
                "id": "lblRule5",
                "isVisible": true,
                "left": "23dp",
                "right": "0dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.invalidChar"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRule5.add(flxDot5, lblRule5);
            var flxRule6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxRule6",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRule6.setDefaultUnit(kony.flex.DP);
            var flxDot6 = new kony.ui.FlexContainer({
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
            }, {}, {});
            flxDot6.setDefaultUnit(kony.flex.DP);
            flxDot6.add();
            var lblRule6 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRule6",
                "isVisible": true,
                "left": "23dp",
                "right": "0dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.caseSenstive"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRule6.add(flxDot6, lblRule6);
            var rtxRulesPwd = new kony.ui.RichText({
                "id": "rtxRulesPwd",
                "isVisible": true,
                "left": "10dp",
                "linkSkin": "defRichTextLink",
                "right": "10dp",
                "skin": "sknrtxfd3f2fSSp95pr",
                "top": "40dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSecurityRequirements.add(lblSecurityRequirements, flxRule1, flxRule2, flxRule3, flxRule4, flxRule5, flxRule6, rtxRulesPwd);
            var lblReEnterNewPassword = new kony.ui.Label({
                "id": "lblReEnterNewPassword",
                "isVisible": true,
                "left": "30dp",
                "right": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.ReEnterNewPassword"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxReenterPassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxReenterPassword",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxReenterPassword.setDefaultUnit(kony.flex.DP);
            var txtReEnterPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50.00%",
                "centerY": "50.00%",
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtReEnterPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "onTextChange": controller.AS_TextField_gd229cc9523646dfabe2362260bcc975,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.Forgot.ReEnterNewPassword"),
                "secureTextEntry": true,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgPasswordsMatch = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgPasswordsMatch",
                "isVisible": true,
                "right": "9%",
                "skin": "slImage",
                "src": "tickmark.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxReenterPassword.add(txtReEnterPassword, imgPasswordsMatch);
            var btnUpdatePassword = new kony.ui.Button({
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnUpdatePassword",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_ce03fcc04c4d4378a355dcbaa4497ee0,
                "skin": "sknBtna0a0a0SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.UpdatePassword"),
                "top": "30dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMainContainer.add(lblCreateNewPassword, lblNewPassword, flxPassword, flxSecurityRequirements, lblReEnterNewPassword, flxReenterPassword, btnUpdatePassword);
            var flxPopup = new kony.ui.FlexContainer({
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
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var customPopup = new com.kmb.common.customPopup({
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxMainContainer, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmForgotCreatePassword,
            "enabledForIdleTimeout": true,
            "id": "frmForgotCreatePassword",
            "init": controller.AS_Form_c2cf6abb111947c08cea3c53589f48c4,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_bf368211a1ed42dda4007a81fa285b1f(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.ForgotCredentials.Title")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});