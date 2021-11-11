define("PayAPersonModule/frmP2PRecPhoneNo", function() {
    return function(controller) {
        function addWidgetsfrmP2PRecPhoneNo() {
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
                "top": "0dp",
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
                "zIndex": 1,
                "overrides": {
                    "btnRight": {
                        "isVisible": true,
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
                    },
                    "customHeader": {
                        "height": "100%",
                        "zIndex": 1
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.p2p.recPhoneNo")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxRecurrenceNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxRecurrenceNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRecurrenceNumber.setDefaultUnit(kony.flex.DP);
            var lblEnterPhoneNo = new kony.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "id": "lblEnterPhoneNo",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.p2p.enterPhoneNo"),
                "textStyle": {},
                "top": "15dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxRecurrenceNumber.add(lblEnterPhoneNo);
            var flxInputPhoneNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxInputPhoneNo",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "90dp",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxInputPhoneNo.setDefaultUnit(kony.flex.DP);
            var lblOpenBrace = new kony.ui.Label({
                "height": "100%",
                "id": "lblOpenBrace",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "(",
                "textStyle": {},
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit1 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit1",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit2 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit2",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit3 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit3",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblCloseBrace = new kony.ui.Label({
                "height": "100%",
                "id": "lblCloseBrace",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": ")",
                "textStyle": {},
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit4 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit4",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit5 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit5",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit6 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit6",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblHyphen = new kony.ui.Label({
                "height": "100%",
                "id": "lblHyphen",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "-",
                "textStyle": {},
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit7 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit7",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit8 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit8",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit9 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit9",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDigit10 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit10",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxInputPhoneNo.add(lblOpenBrace, lblDigit1, lblDigit2, lblDigit3, lblCloseBrace, lblDigit4, lblDigit5, lblDigit6, lblHyphen, lblDigit7, lblDigit8, lblDigit9, lblDigit10);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtna0a0a0SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnPickFromContacts = new kony.ui.Button({
                "focusSkin": "sknbtnf6f6f6Focus98pr",
                "height": "40dp",
                "id": "btnPickFromContacts",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426px",
                "text": kony.i18n.getLocalizedString("kony.mb.p2p.pickFromContacts"),
                "top": "210dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxOr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "26dp",
                "id": "flxOr",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxRounded3e4f56Op10",
                "top": "161dp",
                "width": "26dp",
                "zIndex": 1
            }, {}, {});
            flxOr.setDefaultUnit(kony.flex.DP);
            var lblOr = new kony.ui.Label({
                "centerX": "46%",
                "centerY": "45%",
                "id": "lblOr",
                "isVisible": true,
                "skin": "sknlbl727272SSPSSP79pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Or"),
                "textStyle": {
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxOr.add(lblOr);
            var flxInputPhone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "49%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxInputPhone",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "100dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInputPhone.setDefaultUnit(kony.flex.DP);
            var lblPlus = new kony.ui.Label({
                "height": "100%",
                "id": "lblPlus",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg60px",
                "text": "+",
                "textStyle": {},
                "top": "0dp",
                "width": "17dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblOpenBracket = new kony.ui.Label({
                "height": "100%",
                "id": "lblOpenBracket",
                "isVisible": false,
                "left": "5dp",
                "skin": "sknLbl424242SSPReg60px",
                "text": "(",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxCode",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxCode.setDefaultUnit(kony.flex.DP);
            var flxInputCodeLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxInputCodeLine",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5dp",
                "isModalContainer": false,
                "right": "5dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxInputCodeLine.setDefaultUnit(kony.flex.DP);
            flxInputCodeLine.add();
            var lblCode = new kony.ui.Label({
                "centerX": "50%",
                "height": "100%",
                "id": "lblCode",
                "isVisible": true,
                "skin": "sknLbl424242SSPReg35px",
                "text": "879",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCode.add(flxInputCodeLine, lblCode);
            var lblCloseBracket = new kony.ui.Label({
                "height": "100%",
                "id": "lblCloseBracket",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg60px",
                "text": ")",
                "textStyle": {},
                "top": "0dp",
                "width": "12dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblPhoneNumber = new kony.ui.Label({
                "centerX": "50%",
                "height": "100%",
                "id": "lblPhoneNumber",
                "isVisible": true,
                "maxWidth": "60%",
                "skin": "sknLbl424242SSPReg35px",
                "text": "1234567890123",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxInputPhone.add(lblPlus, lblOpenBracket, flxCode, lblCloseBracket, lblPhoneNumber);
            var flxInputPhoneLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxInputPhoneLine",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "top": "150dp",
                "width": "250dp",
                "zIndex": 1
            }, {}, {});
            flxInputPhoneLine.setDefaultUnit(kony.flex.DP);
            flxInputPhoneLine.add();
            flxMain.add(flxRecurrenceNumber, flxInputPhoneNo, btnContinue, btnPickFromContacts, flxOr, flxInputPhone, flxInputPhoneLine);
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
            keypad.btnEight.onClick = controller.AS_Button_d995428196c94d1992d34e7680ead2d7;
            keypad.btnFive.onClick = controller.AS_Button_c29becbf3bf2448faec6815fe47620c2;
            keypad.btnFour.onClick = controller.AS_Button_f1671d383324483c86104e017fa68a98;
            keypad.btnNine.onClick = controller.AS_Button_ee1f4c4192904e4f934349eb25ff3430;
            keypad.btnOne.onClick = controller.AS_Button_i7f9f5abb3664e5fb694af8feb4212a6;
            keypad.btnSeven.onClick = controller.AS_Button_ie3bcc135a944dd8baa8de8a0961937b;
            keypad.btnSix.onClick = controller.AS_Button_a0158c26af96430caa4ed3bfd9e600dd;
            keypad.btnThree.onClick = controller.AS_Button_i93a76d23b8647f791038f00a879241a;
            keypad.btnTwo.onClick = controller.AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828;
            keypad.btnZero.onClick = controller.AS_Button_jd2f9ffdd6924b03bb0175998407e8d3;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_b8275a188bb543bda67ceee35f4a8969;
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
            this.add(flxHeader, flxMain, flxKeypad, flxPopup);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_a35f7fd8ec4d4653966f24ce347e6ba4,
            "metaData": {
                "image": "backbutton.png"
            },
            "id": "LBarBtnItem0"
        });
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_f44ace0b937a4d3aab1aa4dda574f7f9,
            "metaData": {
                "title": "Cancel"
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmP2PRecPhoneNo,
            "enabledForIdleTimeout": true,
            "id": "frmP2PRecPhoneNo",
            "init": controller.AS_Form_ddac5b07857c4349b4663bad7c072efa,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_a8403027eb1743ebbf78c818e6c10caa(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.p2p.recPhoneNo")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": true,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});