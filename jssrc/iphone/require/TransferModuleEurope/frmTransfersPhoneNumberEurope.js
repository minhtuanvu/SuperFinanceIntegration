define("TransferModuleEurope/frmTransfersPhoneNumberEurope", function() {
    return function(controller) {
        function addWidgetsfrmTransfersPhoneNumberEurope() {
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
                        "left": "20%",
                        "text": "Beneficiary's Phone Number",
                        "width": "60%"
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
                "height": "68%",
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
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
            var lblEnterInfoSubtitle = new kony.ui.Label({
                "bottom": "12dp",
                "centerX": "50.00%",
                "id": "lblEnterInfoSubtitle",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.p2p.enterPhoneNo"),
                "textStyle": {},
                "top": "19dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxRecurrenceNumber.add(lblEnterInfoSubtitle);
            var flxInputPhone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "49.00%",
                "clipBounds": true,
                "height": "48dp",
                "id": "flxInputPhone",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflxe3e3e3border",
                "top": "150dp",
                "width": "335dp",
                "zIndex": 1
            }, {}, {});
            flxInputPhone.setDefaultUnit(kony.flex.DP);
            var txtPhoneNumber = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "txtPhoneNumber",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterPhoneNo"),
                "secureTextEntry": false,
                "skin": "sknTbxBordere3e3e3Radius4px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "defTextBoxPlaceholder",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
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
            var lblPhoneNumber = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneNumber",
                "isVisible": true,
                "left": "10dp",
                "maxWidth": "60%",
                "skin": "sknLbl4242421SSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.p2p.enterPhoneNo"),
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
            var lblOpenBracket = new kony.ui.Label({
                "height": "100%",
                "id": "lblOpenBracket",
                "isVisible": false,
                "left": "0dp",
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
            flxInputPhone.add(txtPhoneNumber, lblPlus, lblPhoneNumber, lblOpenBracket, lblCloseBracket, flxCode);
            var btnVerify = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50.00%",
                "focusSkin": "sknBtn055BAFSSPSemiBold26px",
                "height": "48dp",
                "id": "btnVerify",
                "isVisible": true,
                "left": "23dp",
                "right": "23dp",
                "skin": "sknBtnE2E9F0Rounded",
                "text": kony.i18n.getLocalizedString("kony.mb.common.save"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxInputPhoneLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxInputPhoneLine",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "top": "195dp",
                "width": "250dp",
                "zIndex": 1
            }, {}, {});
            flxInputPhoneLine.setDefaultUnit(kony.flex.DP);
            flxInputPhoneLine.add();
            flxMainContainer.add(flxRecurrenceNumber, flxInputPhone, btnVerify, flxInputPhoneLine);
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
                    "btnFour": {
                        "left": "0dp",
                        "top": "0dp"
                    },
                    "btnOne": {
                        "left": "0dp",
                        "top": "0dp"
                    },
                    "btnSeven": {
                        "left": "0dp",
                        "top": "0dp"
                    },
                    "btnThree": {
                        "right": "2dp"
                    },
                    "btnTwo": {
                        "centerX": "50.00%",
                        "top": "0dp"
                    },
                    "imgClearKeypad": {
                        "centerY": "50.00%",
                        "right": "0.47%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            keypad.btnEight.onClick = controller.AS_Button_dbe99a4ad1034520ba1521c72da16d89;
            keypad.btnFive.onClick = controller.AS_Button_g6490ff8ab0b49638cdb0af863c330be;
            keypad.btnFour.onClick = controller.AS_Button_dcbfa6fda52d42afb9b1a5e925929bd7;
            keypad.btnNine.onClick = controller.AS_Button_b874a30780194781b743902cd6a9c901;
            keypad.btnOne.onClick = controller.AS_Button_j66da00585a548c28186a8e9a94caff9;
            keypad.btnSeven.onClick = controller.AS_Button_f54cd4d798f74ae98ba45086cbbf50b6;
            keypad.btnSix.onClick = controller.AS_Button_e833b1c3516a426eb02d41eb6c5b288f;
            keypad.btnThree.onClick = controller.AS_Button_jf0b510478dc4f3d9121c0d59b245525;
            keypad.btnTwo.onClick = controller.AS_Button_f979a09590f54f1fb524be4032a533fe;
            keypad.btnZero.onClick = controller.AS_Button_e56e668bcbc6486192e92b5cbfdc12ca;
            keypad.imgClearKeypad.onDownloadComplete = controller.AS_Image_h92566d02fa64e6b81d186208d24e691;
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
            this.add(flxHeader, flxMainContainer, flxKeypad, flxPopup);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_f89ce3215ea94c8c97202c090c2b124f,
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
            "addWidgets": addWidgetsfrmTransfersPhoneNumberEurope,
            "enabledForIdleTimeout": true,
            "id": "frmTransfersPhoneNumberEurope",
            "init": controller.AS_Form_dfa2d6ccf2c34e81b4ccc6d28e81067b,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_ac12af6576434eb3929c224659cfba92(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Beneficiary's Phone Number"
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
                "hidesBackButton": false,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});