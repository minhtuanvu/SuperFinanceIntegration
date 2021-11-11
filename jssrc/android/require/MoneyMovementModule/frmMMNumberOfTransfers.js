define("MoneyMovementModule/frmMMNumberOfTransfers", function() {
    return function(controller) {
        function addWidgetsfrmMMNumberOfTransfers() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.MM.NumberOfTransfers")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_d2416954b5d6438ebf3434c66e6a5d6d;
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
            var flxDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.12%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDescription.setDefaultUnit(kony.flex.DP);
            var lblDescription = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblDescription",
                "isVisible": true,
                "left": "0dp",
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.RepeatingTransfers"),
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
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknMMSeperator",
                "top": "56dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxDescription.add(lblDescription, flxSeparator);
            var flxRecurrence = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxRecurrence",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "57dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRecurrence.setDefaultUnit(kony.flex.DP);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
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
            var flxRecurrenceWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxRecurrenceWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "flxBlueFocus",
                "top": "35%",
                "zIndex": 1
            }, {}, {});
            flxRecurrenceWrapper.setDefaultUnit(kony.flex.DP);
            var lblNumber = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNumber",
                "isVisible": true,
                "left": "10dp",
                "skin": "skinlblDarkened",
                "text": "0",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "80%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxClearAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxClearAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 5
            }, {}, {});
            flxClearAmount.setDefaultUnit(kony.flex.DP);
            var imgClose = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgClose",
                "isVisible": true,
                "skin": "slImage",
                "src": "closecircle.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClearAmount.add(imgClose);
            flxRecurrenceWrapper.add(lblNumber, flxClearAmount);
            flxRecurrence.add(btnContinue, flxRecurrenceWrapper);
            flxRecurrenceNumberMain.add(flxDescription, flxRecurrence);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "32%",
                "id": "flxKeypad",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
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
            keypad.btnEight.onClick = controller.AS_Button_gc752c937ed04c5d98edae6219bd7548;
            keypad.btnFive.onClick = controller.AS_Button_aab70d801cdf470db17d1d14ed1c1a72;
            keypad.btnFour.onClick = controller.AS_Button_c6b5ed3337074cd0996871e66184be70;
            keypad.btnNine.onClick = controller.AS_Button_f395a79bb4074d50879c205b2a4837af;
            keypad.btnOne.onClick = controller.AS_Button_j2066a7bffe545828aca5cb1629d3517;
            keypad.btnSeven.onClick = controller.AS_Button_dfc3232031b744fbaa8a15e3bf7b7ce0;
            keypad.btnSix.onClick = controller.AS_Button_deee8d02ce324e76b236cb1d0e2a7ee9;
            keypad.btnThree.onClick = controller.AS_Button_dca40ccc1a574504835faf8dab90cb02;
            keypad.btnTwo.onClick = controller.AS_Button_a00291d362f441aab9d6f460a6809514;
            keypad.btnZero.onClick = controller.AS_Button_d05055cc355b42f58ee74be11b5c9ab4;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_ef0037fbbe084f2095afba09f3c9f575;
            flxKeypad.add(keypad);
            this.add(flxHeader, flxRecurrenceNumberMain, flxKeypad);
        };
        return [{
            "addWidgets": addWidgetsfrmMMNumberOfTransfers,
            "enabledForIdleTimeout": true,
            "id": "frmMMNumberOfTransfers",
            "init": controller.AS_Form_f1bd45b61fde4a02a0723776727b7c97,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_i750284c64d346f4a8acf92c04ab7950(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.MM.NumberOfTransfers")
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