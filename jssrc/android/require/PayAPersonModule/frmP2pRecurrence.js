define("PayAPersonModule/frmP2pRecurrence", function() {
    return function(controller) {
        function addWidgetsfrmP2pRecurrence() {
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
                "zIndex": 8
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
                        "text": kony.i18n.getLocalizedString("kony.mb.transaction.recurrence")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_c98fc7edf0ea46cc87d04b46ad58d083;
            flxHeader.add(customHeader);
            var flxRecurrenceNumberMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": true,
                "id": "flxRecurrenceNumberMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRecurrenceNumberMain.setDefaultUnit(kony.flex.DP);
            var flxRecurrenceNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
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
            var lblflxRecurrenceNumber = new kony.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "id": "lblflxRecurrenceNumber",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.RecurrenceNumber"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxDetails",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var imgDetails = new kony.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "imgDetails",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "info.png",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDetails.add(imgDetails);
            flxRecurrenceNumber.add(lblflxRecurrenceNumber, flxDetails);
            var flxRecurrenceNumberValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxRecurrenceNumberValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "105dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRecurrenceNumberValue.setDefaultUnit(kony.flex.DP);
            var flxInputRecurrenceNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxInputRecurrenceNumber",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "45dp",
                "width": "100dp",
                "zIndex": 1
            }, {}, {});
            flxInputRecurrenceNumber.setDefaultUnit(kony.flex.DP);
            var lblRecurrenceNumberOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblRecurrenceNumberOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblRecurrenceNumberTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblRecurrenceNumberTwo",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblRecurrenceNumberThree = new kony.ui.Label({
                "height": "100%",
                "id": "lblRecurrenceNumberThree",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInputRecurrenceNumber.add(lblRecurrenceNumberOne, lblRecurrenceNumberTwo, lblRecurrenceNumberThree);
            var flxInputRecurrenceNumbertbx = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxInputRecurrenceNumbertbx",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "45dp",
                "width": "100dp",
                "zIndex": 1
            }, {}, {});
            flxInputRecurrenceNumbertbx.setDefaultUnit(kony.flex.DP);
            var tbxRecurrenceNumber = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "skntbx979797229pr",
                "height": "100%",
                "id": "tbxRecurrenceNumber",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "maxTextLength": 3,
                "secureTextEntry": false,
                "skin": "skntbx979797229pr",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxInputRecurrenceNumbertbx.add(tbxRecurrenceNumber);
            var flxDummyInput = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxDummyInput",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "45dp",
                "width": "100dp",
                "zIndex": 2
            }, {}, {});
            flxDummyInput.setDefaultUnit(kony.flex.DP);
            var CopylblRecurrenceNumberTwo0hb7176976fa34c = new kony.ui.Label({
                "height": "100%",
                "id": "CopylblRecurrenceNumberTwo0hb7176976fa34c",
                "isVisible": true,
                "left": "0dp",
                "skin": "lblBlueFocus",
                "text": "_____",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDummyInput.add(CopylblRecurrenceNumberTwo0hb7176976fa34c);
            flxRecurrenceNumberValue.add(flxInputRecurrenceNumber, flxInputRecurrenceNumbertbx, flxDummyInput);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnOnBoardingInactive",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRecurrenceNumberMain.add(flxRecurrenceNumber, flxRecurrenceNumberValue, btnContinue);
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
                "zIndex": 5
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
            keypad.btnEight.onClick = controller.AS_Button_fe17aa3f9c134ceaba4f0b4307809089;
            keypad.btnFive.onClick = controller.AS_Button_df0d1a1eeb6c4e37af20fa89f580ac79;
            keypad.btnFour.onClick = controller.AS_Button_g21ccb1e0aa64bada87756e4a335c632;
            keypad.btnNine.onClick = controller.AS_Button_jcefc73fc44d4a35ba93da5dedcc1fe3;
            keypad.btnOne.onClick = controller.AS_Button_f8c6f7940e1a43579e19e675d8a2659f;
            keypad.btnSeven.onClick = controller.AS_Button_b82af1cd12644430bc32a22636fbecef;
            keypad.btnSix.onClick = controller.AS_Button_e07ad692203d457790a74a821af7c955;
            keypad.btnThree.onClick = controller.AS_Button_fe6a7227ee7b4ca9bc2c0f933a0bb351;
            keypad.btnTwo.onClick = controller.AS_Button_e2128d45f5e94fcc85e492ac104c70aa;
            keypad.btnZero.onClick = controller.AS_Button_h067e162fc9345da99585d343d887fc3;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_h06747e2dadc4fdb88cc1a43838554aa;
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxRecurrenceNumberMain, flxKeypad, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmP2pRecurrence,
            "enabledForIdleTimeout": true,
            "id": "frmP2pRecurrence",
            "init": controller.AS_Form_e75e88b671714e05a510a89a62bd5d95,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_cf40a4c7905f460fb29d019f7a83ead1(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.transaction.recurrence")
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