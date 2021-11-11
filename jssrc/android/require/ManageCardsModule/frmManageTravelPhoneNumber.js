define("ManageCardsModule/frmManageTravelPhoneNumber", function() {
    return function(controller) {
        function addWidgetsfrmManageTravelPhoneNumber() {
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
                        "isVisible": true,
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.cardManage.ContactPhoneNumber")
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
                "clipBounds": true,
                "height": "59%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90dp",
                "id": "flxDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDescription.setDefaultUnit(kony.flex.DP);
            var lblEnterPhoneNumberHeader = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterPhoneNumberHeader",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.PhonenumberMessage"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDescription.add(lblEnterPhoneNumberHeader);
            var flxInputPhoneNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxInputPhoneNo",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "100dp",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxInputPhoneNo.setDefaultUnit(kony.flex.DP);
            var lblOpenBrace = new kony.ui.Label({
                "height": "100%",
                "id": "lblOpenBrace",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "(",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "7%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDigit1 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit1",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "7%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDigit2 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit2",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "7%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDigit3 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit3",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "7%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCloseBrace = new kony.ui.Label({
                "height": "100%",
                "id": "lblCloseBrace",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": ")",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "5%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDigit4 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit4",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "7%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDigit5 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit5",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "7%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDigit6 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit6",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "7%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblHyphen = new kony.ui.Label({
                "height": "100%",
                "id": "lblHyphen",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "-",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "7%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDigit7 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit7",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "7%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDigit8 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit8",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "7%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDigit9 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit9",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "7%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDigit10 = new kony.ui.Label({
                "height": "100%",
                "id": "lblDigit10",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "7%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInputPhoneNo.add(lblOpenBrace, lblDigit1, lblDigit2, lblDigit3, lblCloseBrace, lblDigit4, lblDigit5, lblDigit6, lblHyphen, lblDigit7, lblDigit8, lblDigit9, lblDigit10);
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
                "top": "120dp",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "17dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblOpenBracket = new kony.ui.Label({
                "height": "100%",
                "id": "lblOpenBracket",
                "isVisible": false,
                "left": "5dp",
                "skin": "sknLbl424242SSPReg60px",
                "text": "(",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCode.add(flxInputCodeLine, lblCode);
            var lblCloseBracket = new kony.ui.Label({
                "height": "100%",
                "id": "lblCloseBracket",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknLbl424242SSPReg60px",
                "text": ")",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "12dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneNumber = new kony.ui.Label({
                "centerX": "50%",
                "height": "100%",
                "id": "lblPhoneNumber",
                "isVisible": true,
                "maxWidth": "60%",
                "skin": "sknLbl424242SSPReg35px",
                "text": "1234567890123",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInputPhone.add(lblPlus, lblOpenBracket, flxCode, lblCloseBracket, lblPhoneNumber);
            var lblNote = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNote",
                "isVisible": true,
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.PhonenumberNote"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "190dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnContinue = new kony.ui.Button({
                "bottom": "60dp",
                "focusSkin": "sknBtn055BAF26px",
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
            }, {});
            var btnSkip = new kony.ui.Button({
                "bottom": "10dp",
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius4px",
                "height": "40dp",
                "id": "btnSkip",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e428px",
                "text": "Skip",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
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
                "top": "170dp",
                "width": "250dp",
                "zIndex": 1
            }, {}, {});
            flxInputPhoneLine.setDefaultUnit(kony.flex.DP);
            flxInputPhoneLine.add();
            flxMain.add(flxDescription, flxInputPhoneNo, flxInputPhone, lblNote, btnContinue, btnSkip, flxInputPhoneLine);
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
            keypad.btnFive.onClick = controller.AS_Button_c80317ce605047b082c5464d12f5ff20;
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
            this.add(flxHeader, flxMain, flxKeypad);
        };
        return [{
            "addWidgets": addWidgetsfrmManageTravelPhoneNumber,
            "enabledForIdleTimeout": true,
            "id": "frmManageTravelPhoneNumber",
            "init": controller.AS_Form_g2868ee68aca4017aab47016e9160162,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_ife73d8f12b449a1bd6a869fafae1cec(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.cardManage.ContactPhoneNumber")
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