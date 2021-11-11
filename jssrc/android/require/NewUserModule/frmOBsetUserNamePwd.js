define("NewUserModule/frmOBsetUserNamePwd", function() {
    return function(controller) {
        function addWidgetsfrmOBsetUserNamePwd() {
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
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
                    "customHeader": {
                        "height": "100%"
                    },
                    "flxBack": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.Forgot.CreateAccount")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.btnRight.onClick = controller.AS_Button_a5cc95c82dd84759898c0f08d28de5a5;
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxUsernamePasswordWrapper = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxUsernamePasswordWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUsernamePasswordWrapper.setDefaultUnit(kony.flex.DP);
            var lblUsernameTitle = new kony.ui.Label({
                "id": "lblUsernameTitle",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.username"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxProgressBackgroundHeader0c4fe27b0f4e245 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "41dp",
                "id": "CopyflxProgressBackgroundHeader0c4fe27b0f4e245",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            CopyflxProgressBackgroundHeader0c4fe27b0f4e245.setDefaultUnit(kony.flex.DP);
            var txtUsername = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtUsername",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "maxTextLength": null,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.common.EnterUsernameHere"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
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
            CopyflxProgressBackgroundHeader0c4fe27b0f4e245.add(txtUsername);
            var flxSecurityRequirementsUsername = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSecurityRequirementsUsername",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "89%",
                "zIndex": 100
            }, {}, {});
            flxSecurityRequirementsUsername.setDefaultUnit(kony.flex.DP);
            var lblSecurityRequirementsUsername = new kony.ui.Label({
                "id": "lblSecurityRequirementsUsername",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.usernametitle"),
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
            var flxRuleUsername1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxRuleUsername1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRuleUsername1.setDefaultUnit(kony.flex.DP);
            var flxDotUsername1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxDotUsername1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "sknFlxFD3F2FCircle",
                "top": "14dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxDotUsername1.setDefaultUnit(kony.flex.DP);
            flxDotUsername1.add();
            var lblRuleUsername1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRuleUsername1",
                "isVisible": true,
                "left": "23dp",
                "right": "0dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.UsernameRule1"),
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
            flxRuleUsername1.add(flxDotUsername1, lblRuleUsername1);
            var flxRuleUsername2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxRuleUsername2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRuleUsername2.setDefaultUnit(kony.flex.DP);
            var flxDotUsername2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxDotUsername2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "sknFlxFD3F2FCircle",
                "top": "14dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxDotUsername2.setDefaultUnit(kony.flex.DP);
            flxDotUsername2.add();
            var lblRuleUsername2 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRuleUsername2",
                "isVisible": true,
                "left": "23dp",
                "right": "0dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.UsernameRule2"),
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
            flxRuleUsername2.add(flxDotUsername2, lblRuleUsername2);
            var flxRuleUsername3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxRuleUsername3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-4dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRuleUsername3.setDefaultUnit(kony.flex.DP);
            var flxDotUsername3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxDotUsername3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "sknFlxFD3F2FCircle",
                "top": "14dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxDotUsername3.setDefaultUnit(kony.flex.DP);
            flxDotUsername3.add();
            var lblRuleUsername3 = new kony.ui.Label({
                "id": "lblRuleUsername3",
                "isVisible": true,
                "left": "23dp",
                "right": "0dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.UsernameRule3"),
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
            flxRuleUsername3.add(flxDotUsername3, lblRuleUsername3);
            var flxRuleUsername4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxRuleUsername4",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRuleUsername4.setDefaultUnit(kony.flex.DP);
            var flxDotUsername4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxDotUsername4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "sknFlxFD3F2FCircle",
                "top": "14dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxDotUsername4.setDefaultUnit(kony.flex.DP);
            flxDotUsername4.add();
            var lblRuleUsername4 = new kony.ui.Label({
                "centerY": "47.47%",
                "id": "lblRuleUsername4",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.UsernameRule4"),
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
            flxRuleUsername4.add(flxDotUsername4, lblRuleUsername4);
            var flxRuleUsername5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxRuleUsername5",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRuleUsername5.setDefaultUnit(kony.flex.DP);
            var flxDotUsername5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxDotUsername5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "sknFlxFD3F2FCircle",
                "top": "14dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxDotUsername5.setDefaultUnit(kony.flex.DP);
            flxDotUsername5.add();
            var lblRuleUsername5 = new kony.ui.Label({
                "centerY": "47.47%",
                "id": "lblRuleUsername5",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.UsernameRule5"),
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
            flxRuleUsername5.add(flxDotUsername5, lblRuleUsername5);
            var flxRuleUsername6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxRuleUsername6",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRuleUsername6.setDefaultUnit(kony.flex.DP);
            var flxDotUsername6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxDotUsername6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "sknFlxFD3F2FCircle",
                "top": "14dp",
                "width": "7dp",
                "zIndex": 1
            }, {}, {});
            flxDotUsername6.setDefaultUnit(kony.flex.DP);
            flxDotUsername6.add();
            var lblRuleUsername6 = new kony.ui.Label({
                "centerY": "47.47%",
                "id": "lblRuleUsername6",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblSSPRegFD3F2F28px",
                "text": kony.i18n.getLocalizedString("kony.mb.securityReq.UsernameRule6"),
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
            flxRuleUsername6.add(flxDotUsername6, lblRuleUsername6);
            var rtxRulesUsername = new kony.ui.RichText({
                "id": "rtxRulesUsername",
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
            flxSecurityRequirementsUsername.add(lblSecurityRequirementsUsername, flxRuleUsername1, flxRuleUsername2, flxRuleUsername3, flxRuleUsername4, flxRuleUsername5, flxRuleUsername6, rtxRulesUsername);
            var lblPasswordTitle = new kony.ui.Label({
                "id": "lblPasswordTitle",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.login.password"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "90%",
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
                "height": "41dp",
                "id": "flxPassword",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxPassword.setDefaultUnit(kony.flex.DP);
            var txtPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "maxTextLength": null,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.common.EnterPasswordHere"),
                "right": "20dp",
                "secureTextEntry": true,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
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
            var imgMaskUnmask = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgMaskUnmask",
                "isVisible": true,
                "right": "8%",
                "skin": "slImage",
                "src": "viewicon.png",
                "width": "18dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPassword.add(txtPassword, imgMaskUnmask);
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
            var lblReEnterTitle = new kony.ui.Label({
                "id": "lblReEnterTitle",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.EnrollSignUp.ReEnterPass"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxProgressBackgroundHeader0h5beeec3ea4742 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "41dp",
                "id": "CopyflxProgressBackgroundHeader0h5beeec3ea4742",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "8dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            CopyflxProgressBackgroundHeader0h5beeec3ea4742.setDefaultUnit(kony.flex.DP);
            var txtReEnterPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtReEnterPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "maxTextLength": null,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.common.ReEnterPasswordHere"),
                "right": "20dp",
                "secureTextEntry": true,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
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
                "height": "18dp",
                "id": "imgPasswordsMatch",
                "isVisible": true,
                "right": "8%",
                "skin": "slImage",
                "src": "tickmark.png",
                "width": "18dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxProgressBackgroundHeader0h5beeec3ea4742.add(txtReEnterPassword, imgPasswordsMatch);
            var CopyflxProgressBackgroundHeader0ba627a17ecbb4d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "CopyflxProgressBackgroundHeader0ba627a17ecbb4d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "50dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            CopyflxProgressBackgroundHeader0ba627a17ecbb4d.setDefaultUnit(kony.flex.DP);
            var btnContinueUsernamePassword = new kony.ui.Button({
                "bottom": "0%",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinueUsernamePassword",
                "isVisible": true,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxProgressBackgroundHeader0ba627a17ecbb4d.add(btnContinueUsernamePassword);
            flxUsernamePasswordWrapper.add(lblUsernameTitle, CopyflxProgressBackgroundHeader0c4fe27b0f4e245, flxSecurityRequirementsUsername, lblPasswordTitle, flxPassword, flxSecurityRequirements, lblReEnterTitle, CopyflxProgressBackgroundHeader0h5beeec3ea4742, CopyflxProgressBackgroundHeader0ba627a17ecbb4d);
            flxMainContainer.add(flxUsernamePasswordWrapper);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "70dp",
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
                "overrides": {
                    "customPopup": {
                        "height": "100%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            var flxProgress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4dp",
                "id": "flxProgress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "54dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxProgress.setDefaultUnit(kony.flex.DP);
            var flxProgressBackgroundHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressBackgroundHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxda8b08Op20",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxProgressBackgroundHeader.setDefaultUnit(kony.flex.DP);
            flxProgressBackgroundHeader.add();
            var flxProgressHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "90%",
                "skin": "sknFlxda8b08",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxProgressHeader.setDefaultUnit(kony.flex.DP);
            flxProgressHeader.add();
            flxProgress.add(flxProgressBackgroundHeader, flxProgressHeader);
            this.add(flxHeader, flxMainContainer, flxPopup, flxProgress);
        };
        return [{
            "addWidgets": addWidgetsfrmOBsetUserNamePwd,
            "enabledForIdleTimeout": true,
            "id": "frmOBsetUserNamePwd",
            "init": controller.AS_Form_d44d9df7a46042edb891a00df8dc7d7a,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_d318f7744f5748ec824f0bdf0e9a97b1(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.Forgot.CreateAccount")
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
            "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
        }]
    }
});