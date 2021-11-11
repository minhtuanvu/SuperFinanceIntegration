define("SettingsModule/frmProfileUsername", function() {
    return function(controller) {
        function addWidgetsfrmProfileUsername() {
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
                "zIndex": 30
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.ProfileChangeUsername.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxUsername = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxUsername",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUsername.setDefaultUnit(kony.flex.DP);
            var lblEnterUsername = new kony.ui.Label({
                "id": "lblEnterUsername",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a0SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Profile.YourCurrentUsername"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPreviousUsername = new kony.ui.Label({
                "bottom": "9dp",
                "id": "lblPreviousUsername",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "john.doe123",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUsername.add(lblEnterUsername, lblPreviousUsername);
            var lblLastName = new kony.ui.Label({
                "id": "lblLastName",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.Profile.EnterNewUsername"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxTbxUsername = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTbxUsername",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "11dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxTbxUsername.setDefaultUnit(kony.flex.DP);
            var tbxUsername = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "tbxUsername",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.common.EnterHere"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
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
            flxTbxUsername.add(tbxUsername);
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
            flxRuleUsername6.add(flxDotUsername6, lblRuleUsername6);
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
            flxSecurityRequirementsUsername.add(lblSecurityRequirementsUsername, flxRuleUsername1, flxRuleUsername2, flxRuleUsername3, flxRuleUsername4, flxRuleUsername5, flxRuleUsername6, rtxRulesPwd);
            var flxButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxButton",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "30dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxButton.setDefaultUnit(kony.flex.DP);
            var btnContinue = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
                "text": kony.i18n.getLocalizedString("kony.mb.Profile.UpdateUsername"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButton.add(btnContinue);
            flxMainContainer.add(flxUsername, lblLastName, flxTbxUsername, flxSecurityRequirementsUsername, flxButton);
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
            "addWidgets": addWidgetsfrmProfileUsername,
            "enabledForIdleTimeout": true,
            "id": "frmProfileUsername",
            "init": controller.AS_Form_e3c18c660402470786e9e884bc504ad5,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_ba50b00b7a7441c4b1ef72c5ff21ffad(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.ProfileChangeUsername.Title")
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