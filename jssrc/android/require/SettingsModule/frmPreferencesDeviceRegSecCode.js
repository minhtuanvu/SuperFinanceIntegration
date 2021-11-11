define("SettingsModule/frmPreferencesDeviceRegSecCode", function() {
    return function(controller) {
        function addWidgetsfrmPreferencesDeviceRegSecCode() {
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
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.preferences.DeviceRegistration")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": true,
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
            var flxInforHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxInforHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInforHeader.setDefaultUnit(kony.flex.DP);
            var lblEnterInfoTitle = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEnterInfoTitle",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.EnterSecurityCodeTitle"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInforHeader.add(lblEnterInfoTitle);
            var lblEnterInfoSubtitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterInfoSubtitle",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.EnterSecurityCodeSubTitle"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "56dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxInputSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxInputSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "105dp",
                "width": "170dp",
                "zIndex": 1
            }, {}, {});
            flxInputSecurityCode.setDefaultUnit(kony.flex.DP);
            var lblSecurityOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSecurityTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityTwo",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSecurityThree = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityThree",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSecurityFour = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityFour",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSecurityFive = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityFive",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSecuritySix = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecuritySix",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxInputSecurityCodeBorder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxInputSecurityCodeBorder",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "-170dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "33dp",
                "width": "170dp",
                "zIndex": 1
            }, {}, {});
            flxInputSecurityCodeBorder.setDefaultUnit(kony.flex.DP);
            var flxSecurityOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSecurityOne",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxSecurityOne.setDefaultUnit(kony.flex.DP);
            flxSecurityOne.add();
            var flxSecurityTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSecurityTwo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxSecurityTwo.setDefaultUnit(kony.flex.DP);
            flxSecurityTwo.add();
            var flxSecurityThree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSecurityThree",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxSecurityThree.setDefaultUnit(kony.flex.DP);
            flxSecurityThree.add();
            var flxSecurityFour = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSecurityFour",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxSecurityFour.setDefaultUnit(kony.flex.DP);
            flxSecurityFour.add();
            var flxSecurityFive = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSecurityFive",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxSecurityFive.setDefaultUnit(kony.flex.DP);
            flxSecurityFive.add();
            var flxSecuritySix = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSecuritySix",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxSecuritySix.setDefaultUnit(kony.flex.DP);
            flxSecuritySix.add();
            flxInputSecurityCodeBorder.add(flxSecurityOne, flxSecurityTwo, flxSecurityThree, flxSecurityFour, flxSecurityFive, flxSecuritySix);
            flxInputSecurityCode.add(lblSecurityOne, lblSecurityTwo, lblSecurityThree, lblSecurityFour, lblSecurityFive, lblSecuritySix, flxInputSecurityCodeBorder);
            var btnReSend = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn0095e428px",
                "height": "40dp",
                "id": "btnReSend",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.ReSend"),
                "top": "165dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnVerify = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtnDarkTheme",
                "height": "40dp",
                "id": "btnVerify",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtna0a0a0SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Verify"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMainContainer.add(flxInforHeader, lblEnterInfoSubtitle, flxInputSecurityCode, btnReSend, btnVerify);
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
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "32%",
                "id": "flxKeypad",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxF5F6FB",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxKeypad.setDefaultUnit(kony.flex.DP);
            var keypad = new com.kmb.common.keypad({
                "height": "100%",
                "id": "keypad",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "imgClear": {
                        "src": "cancelkeypad.png"
                    },
                    "imgClearKeypad": {
                        "src": "transparentbox.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            keypad.btnEight.onClick = controller.AS_Button_abe2b0b1cb6d4ce7984ee66fac82585f;
            keypad.btnFive.onClick = controller.AS_Button_e3ccd88beccb4fa99b6419fd37f43c58;
            keypad.btnFour.onClick = controller.AS_Button_fe6ffb5d1a534f94811ec5df93e8971e;
            keypad.btnNine.onClick = controller.AS_Button_cf7df958813f4036a93cb7b7fda05933;
            keypad.btnOne.onClick = controller.AS_Button_d365b24c3e8e4859bd6d888338f7c6e3;
            keypad.btnSeven.onClick = controller.AS_Button_e158bf44166b42da9bfe811ab4c3ab58;
            keypad.btnSix.onClick = controller.AS_Button_ee2dcffa72f34eec9da8ec582cc167b8;
            keypad.btnThree.onClick = controller.AS_Button_ff692473f32d4bff8eeffb8a1496f4bd;
            keypad.btnTwo.onClick = controller.AS_Button_e94cf1dbc4114ab6b337cf3793c55ad1;
            keypad.btnZero.onClick = controller.AS_Button_e8b2d03196ea4777a2836b5af707770d;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_fa1a31303f9341638faf98b51f0853de;
            flxKeypad.add(keypad);
            this.add(flxHeader, flxMainContainer, flxPopup, flxKeypad);
        };
        return [{
            "addWidgets": addWidgetsfrmPreferencesDeviceRegSecCode,
            "enabledForIdleTimeout": true,
            "id": "frmPreferencesDeviceRegSecCode",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_afd2ee5992794bb4879f51bf17368b53(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.preferences.DeviceRegistration")
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