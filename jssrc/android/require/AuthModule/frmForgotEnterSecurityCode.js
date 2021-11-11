define("AuthModule/frmForgotEnterSecurityCode", function() {
    return function(controller) {
        function addWidgetsfrmForgotEnterSecurityCode() {
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
                        "isVisible": true
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
            customHeader.flxBack.onClick = controller.AS_FlexContainer_g7a4ac510d724900962ab8a7a740cd6d;
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
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
            var flxCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCode.setDefaultUnit(kony.flex.DP);
            var lblEnterInfoTitle = new kony.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "id": "lblEnterInfoTitle",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.EnterSecurityCodeTitle"),
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
            flxCode.add(lblEnterInfoTitle);
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
                "top": "60dp",
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
                "height": "50dp",
                "id": "flxInputSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "150dp",
                "width": "170dp",
                "zIndex": 1
            }, {}, {});
            flxInputSecurityCode.setDefaultUnit(kony.flex.DP);
            var lblSecurityOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "lblWhiteDot",
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
                "skin": "lblWhiteDot",
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
                "skin": "lblWhiteDot",
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
                "skin": "lblWhiteDot",
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
                "skin": "lblWhiteDot",
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
                "skin": "lblWhiteDot",
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
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxInputSecurityCodeBorder",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "-170dp",
                "isModalContainer": false,
                "skin": "slFbox",
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
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.forgot.ResendNoHyphen"),
                "top": "200dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnVerify = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnVerify",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_df499898d2f9402c9710088a9d563164,
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
            flxMainContainer.add(flxCode, lblEnterInfoSubtitle, flxInputSecurityCode, btnReSend, btnVerify);
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
                "overrides": {}
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            keypad.btnEight.onClick = controller.AS_Button_b3e6f07f5fd94af9936d40a4296b3d84;
            keypad.btnFive.onClick = controller.AS_Button_j9d911d95ad342f18cd3ef7584890f81;
            keypad.btnFour.onClick = controller.AS_Button_dd060757283f46f286a7e3cbf0809323;
            keypad.btnNine.onClick = controller.AS_Button_h764c0886ec04401893d7e1513782888;
            keypad.btnOne.onClick = controller.AS_Button_da85512aae1946ab9688fa755a1a2eac;
            keypad.btnSeven.onClick = controller.AS_Button_e88a653f77bc477da4b10a6d9112a219;
            keypad.btnSix.onClick = controller.AS_Button_db2cfa52c55b4832adb14ca9970210d3;
            keypad.btnThree.onClick = controller.AS_Button_f8dd5f33727d433eac544aaf34c67921;
            keypad.btnTwo.onClick = controller.AS_Button_bd4616ab9c574cafb4880155a497c120;
            keypad.btnZero.onClick = controller.AS_Button_i9f4738f679e46ada9a41a0d560981f8;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_ab0be93e0f864bd6a58d9525f5194cec;
            flxKeypad.add(keypad);
            this.add(flxHeader, flxMainContainer, flxPopup, flxKeypad);
        };
        return [{
            "addWidgets": addWidgetsfrmForgotEnterSecurityCode,
            "enabledForIdleTimeout": true,
            "id": "frmForgotEnterSecurityCode",
            "init": controller.AS_Form_a1f66ff33ff94e1ca6a5cff4db952d02,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_c603c682f08e48db816333019842c835(eventobject);
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