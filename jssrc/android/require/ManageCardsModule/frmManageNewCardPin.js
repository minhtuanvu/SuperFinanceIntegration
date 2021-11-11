define("ManageCardsModule/frmManageNewCardPin", function() {
    return function(controller) {
        function addWidgetsfrmManageNewCardPin() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 100
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
                    "flxHeader": {
                        "left": "-0.36%",
                        "top": "0.00%"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.cards.newCardRequest")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": false,
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
            var imgPin = new kony.ui.Image2({
                "centerX": "50%",
                "height": "50dp",
                "id": "imgPin",
                "isVisible": true,
                "skin": "slImage",
                "src": "pin.png",
                "top": "31dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSetYourPin = new kony.ui.Label({
                "centerX": "50.00%",
                "id": "lblSetYourPin",
                "isVisible": true,
                "skin": "sknLbl727272SSPLight36px",
                "text": kony.i18n.getLocalizedString("kony.mb.cards.setNewPin"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPinDesc = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblPinDesc",
                "isVisible": true,
                "maxNumberOfLines": null,
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cards.setNewPinDesc"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "15dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxInputSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "55%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxInputSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "40dp",
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
                "isVisible": false,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1,
                "blur": {
                    "enabled": true,
                    "value": 0
                }
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
                "isVisible": false,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1,
                "blur": {
                    "enabled": true,
                    "value": 0
                }
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
            flxMainContainer.add(imgPin, lblSetYourPin, lblPinDesc, flxInputSecurityCode);
            var btnNext = new kony.ui.Button({
                "bottom": "35%",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnNext",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_g81b54001711457b86a79fb20676b1f3,
                "right": "20dp",
                "skin": "sknBtna0a0a0SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.continue"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
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
            keypad.btnEight.onClick = controller.AS_Button_c4da5e8eba494be68a8f65d898091fae;
            keypad.btnFive.onClick = controller.AS_Button_d53d317981b34651a5dfe9449037e0e1;
            keypad.btnFour.onClick = controller.AS_Button_g12c41f7d4f44baa8e9cc87d7fe65a83;
            keypad.btnNine.onClick = controller.AS_Button_d492f031b65c4e5f8cda40913c370729;
            keypad.btnOne.onClick = controller.AS_Button_j10a1fd551194261b4068e6f19817044;
            keypad.btnSeven.onClick = controller.AS_Button_d0e966f905334fc29f82305a1502f8c0;
            keypad.btnSix.onClick = controller.AS_Button_f74bc8f3769b43fc9ce5dd3a538145f3;
            keypad.btnThree.onClick = controller.AS_Button_c1f7024068374a2c9e6f9a5f60b115ab;
            keypad.btnTwo.onClick = controller.AS_Button_e9a09788f5f3498eb6eb84b4939f8363;
            keypad.btnZero.onClick = controller.AS_Button_d4a18122409a4fbaac72904bfe9f3177;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_j57f694a7b8049c3b038d9be9f227fa0;
            flxKeypad.add(keypad);
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
            this.add(flxHeader, flxMainContainer, btnNext, flxKeypad, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmManageNewCardPin,
            "enabledForIdleTimeout": true,
            "id": "frmManageNewCardPin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_f126a48745c24b3ca5e97eadd73261f9(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.cards.newCardRequest")
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