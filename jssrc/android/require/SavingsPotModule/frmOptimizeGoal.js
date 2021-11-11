define("SavingsPotModule/frmOptimizeGoal", function() {
    return function(controller) {
        function addWidgetsfrmOptimizeGoal() {
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
                    "btnLeft": {
                        "isVisible": false
                    },
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true
                    },
                    "flxHeader": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "text": kony.i18n.getLocalizedString("i18n.SavingsPot.OptimizeGoal"),
                        "left": "15%",
                        "width": "65%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "38%",
                "id": "flxKeypad",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxF5F6FB",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxKeypad.setDefaultUnit(kony.flex.DP);
            var keypad = new com.kmb.common.keypad({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "height": "85%",
                "id": "keypad",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "overrides": {
                    "imgClear": {
                        "src": "cancelkeypad.png"
                    },
                    "imgClearKeypad": {
                        "centerY": "45.24%",
                        "right": "0.00%",
                        "src": "transparentbox.png"
                    },
                    "keypad": {
                        "bottom": "0dp",
                        "height": "85%",
                        "top": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            keypad.btnEight.onClick = controller.AS_Button_aafc0ce91842457a9e67cb5e9ee08e38;
            keypad.btnFive.onClick = controller.AS_Button_b050129e4c9e40ba9fbc80271dca25bc;
            keypad.btnFour.onClick = controller.AS_Button_gea1b9a4cbe94d61b8341c279adc328d;
            keypad.btnNine.onClick = controller.AS_Button_g769d98e644e4ffabc8b0035efb2dc7f;
            keypad.btnOne.onClick = controller.AS_Button_j26a78bda6da440ab75ea48e3e5b1a1d;
            keypad.btnSeven.onClick = controller.AS_Button_ea10f2a81f43418b9e9758d53d01c304;
            keypad.btnSix.onClick = controller.AS_Button_g0d9479bd23148c0884b15085549cb98;
            keypad.btnThree.onClick = controller.AS_Button_f1bd99dd5ad9474384a77fba93e9dc0f;
            keypad.btnTwo.onClick = controller.AS_Button_de084ecc648b493dbfde3872a6ac990a;
            keypad.btnZero.onClick = controller.AS_Button_e8255b4b9d0e41b182d67289015d6299;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_fc3243a85ede4e32887876bf9e9c6079;
            var flxsep = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxsep",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxsep.setDefaultUnit(kony.flex.DP);
            flxsep.add();
            var flxDone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15%",
                "id": "flxDone",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDone.setDefaultUnit(kony.flex.DP);
            var lblDone = new kony.ui.Label({
                "id": "lblDone",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknlblDone",
                "text": "Done",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDone.add(lblDone);
            var btnDot = new kony.ui.Button({
                "bottom": "0dp",
                "height": "24%",
                "id": "btnDot",
                "isVisible": false,
                "left": "0dp",
                "onClick": controller.AS_Button_fe734ee1666140df9e47dcabe451d1f4,
                "skin": "sknBtnKeybad",
                "text": "Done",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeypad.add(keypad, flxsep, flxDone, btnDot);
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
            var flxMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "55dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxGoalName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "98dp",
                "id": "flxGoalName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxGoalName.setDefaultUnit(kony.flex.DP);
            var lblGoalname = new kony.ui.Label({
                "bottom": "15dp",
                "height": "40dp",
                "id": "lblGoalname",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblffffffSSPBold33px",
                "text": "Tesla Electric car",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100dp",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            flxGoalName.add(lblGoalname, flxGradient);
            var flxFrom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxFrom",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFBorderE9E9E9shadow",
                "top": "-30dp",
                "width": "90%",
                "zIndex": 5
            }, {}, {});
            flxFrom.setDefaultUnit(kony.flex.DP);
            var lblFrom = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFrom",
                "isVisible": true,
                "left": "60dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("i18n.SavingsPot.Datetoachieve"),
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
            var lblFromValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFromValue",
                "isVisible": true,
                "left": "40dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "20 May 2020",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "9dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSeperatorFrom = new kony.ui.Label({
                "bottom": "1dp",
                "centerX": "50%",
                "height": "1dp",
                "id": "lblSeperatorFrom",
                "isVisible": true,
                "left": 0,
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFrom.add(lblFrom, lblFromValue, lblSeperatorFrom);
            var flxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "19%",
                "id": "flxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmount.setDefaultUnit(kony.flex.DP);
            var lblAmountTitle = new kony.ui.Label({
                "id": "lblAmountTitle",
                "isVisible": true,
                "left": "19dp",
                "skin": "sknLbl424242SSPSemiBold26px",
                "text": "Goal Amount",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "38dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxError",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "19dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6dp",
                "width": "92%"
            }, {}, {});
            flxError.setDefaultUnit(kony.flex.DP);
            var lblError = new kony.ui.Label({
                "id": "lblError",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknLblREDSSPReg22px",
                "text": "Monthly Debit Amount is greater than Goal Amount",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxError.add(lblError);
            var tbxAmount = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "tbxAmount",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": "Placeholder",
                "right": "20dp",
                "secureTextEntry": false,
                "text": "0",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "38dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [8, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxAmountWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxAmountWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "65dp",
                "zIndex": 1
            }, {}, {});
            flxAmountWrapper.setDefaultUnit(kony.flex.DP);
            var lblDollar = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDollar",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAmount",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": "0.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAmountWrapper.add(lblDollar, lblAmount);
            flxAmount.add(lblAmountTitle, flxError, tbxAmount, flxAmountWrapper);
            var flxMonthlyDebit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "140dp",
                "id": "flxMonthlyDebit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMonthlyDebit.setDefaultUnit(kony.flex.DP);
            var lblMonthlyDebit = new kony.ui.Label({
                "height": "30dp",
                "id": "lblMonthlyDebit",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl42424SemiBold22px",
                "text": kony.i18n.getLocalizedString("i18n.SavingsPot.MonthlyAmount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "40dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMonthlyDebitValue = new kony.ui.Label({
                "height": "30dp",
                "id": "lblMonthlyDebitValue",
                "isVisible": true,
                "right": "50dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "$ 200.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "40dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgChevron = new kony.ui.Image2({
                "height": "19dp",
                "id": "imgChevron",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "segmentarrow.png",
                "top": "45dp",
                "width": "19dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSlider = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxSlider",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "70dp",
                "width": "91%"
            }, {}, {});
            flxSlider.setDefaultUnit(kony.flex.DP);
            var SliderAmount = new kony.ui.Slider({
                "centerX": "50.00%",
                "height": "60dp",
                "id": "SliderAmount",
                "isVisible": true,
                "leftSkin": "slSliderBlue",
                "max": 10000,
                "min": 0,
                "rightSkin": "slSliderRightBlue",
                "selectedValue": 0,
                "step": 1000,
                "thumbImage": "slider_android.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {
                "maxLabelSkin": "slSliderminvalue424242",
                "minLabelSkin": "slSliderminvalue424242",
                "thickness": 5
            });
            var lblMinValue = new kony.ui.Label({
                "bottom": "2dp",
                "id": "lblMinValue",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "$0",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMaxValue = new kony.ui.Label({
                "bottom": "2dp",
                "id": "lblMaxValue",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "$10000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSlider.add(SliderAmount, lblMinValue, lblMaxValue);
            var lblSeperatorAddress = new kony.ui.Label({
                "bottom": "1dp",
                "centerX": "50%",
                "height": "2dp",
                "id": "lblSeperatorAddress",
                "isVisible": true,
                "left": 0,
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMonthlyDebit.add(lblMonthlyDebit, lblMonthlyDebitValue, imgChevron, flxSlider, lblSeperatorAddress);
            var flxMonths = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "140dp",
                "id": "flxMonths",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMonths.setDefaultUnit(kony.flex.DP);
            var lblMonths = new kony.ui.Label({
                "height": "30dp",
                "id": "lblMonths",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl42424SemiBold22px",
                "text": "Period of Months",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "40dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMonthsValue = new kony.ui.Label({
                "height": "30dp",
                "id": "lblMonthsValue",
                "isVisible": true,
                "right": "50dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "30 Months",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "40dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgChevronMonth = new kony.ui.Image2({
                "height": "19dp",
                "id": "imgChevronMonth",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "segmentarrow.png",
                "top": "45dp",
                "width": "19dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSepMonth = new kony.ui.Label({
                "bottom": "1dp",
                "centerX": "50%",
                "height": "2dp",
                "id": "lblSepMonth",
                "isVisible": true,
                "left": 0,
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxMonthsSlider = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxMonthsSlider",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "70dp",
                "width": "91%"
            }, {}, {});
            flxMonthsSlider.setDefaultUnit(kony.flex.DP);
            var SliderMonth = new kony.ui.Slider({
                "centerX": "50.03%",
                "height": "60dp",
                "id": "SliderMonth",
                "isVisible": true,
                "leftSkin": "slSliderBlue",
                "max": 60,
                "min": 0,
                "rightSkin": "slSliderRightBlue",
                "selectedValue": 0,
                "step": 5,
                "thumbImage": "slider_android.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {
                "maxLabelSkin": "slSliderminvalue424242",
                "minLabelSkin": "slSliderminvalue424242",
                "thickness": 5
            });
            var lblMinVal = new kony.ui.Label({
                "bottom": "2dp",
                "id": "lblMinVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "0",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMaxVal = new kony.ui.Label({
                "bottom": "2dp",
                "id": "lblMaxVal",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "60",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMonthsSlider.add(SliderMonth, lblMinVal, lblMaxVal);
            flxMonths.add(lblMonths, lblMonthsValue, imgChevronMonth, lblSepMonth, flxMonthsSlider);
            var flxButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "130dp",
                "id": "flxButton",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxButton.setDefaultUnit(kony.flex.DP);
            var btnContinue = new kony.ui.Button({
                "bottom": "30dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "skin": "sknBtn055BAF26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButton.add(btnContinue);
            flxMain.add(flxGoalName, flxFrom, flxAmount, flxMonthlyDebit, flxMonths, flxButton);
            this.add(flxHeader, flxKeypad, flxPopup, flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmOptimizeGoal,
            "enabledForIdleTimeout": true,
            "id": "frmOptimizeGoal",
            "init": controller.AS_Form_af1b7ef7c8ef4a1e91933cea412ae006,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_j0c80864be2b4978b094c60a5c0a5b24,
            "preShow": function(eventobject) {
                controller.AS_Form_hda45814ef244814824d75622bb37ae5(eventobject);
            },
            "skin": "sknFrmf9f9f9",
            "title": kony.i18n.getLocalizedString("i18n.SavingsPot.OptimizeGoal")
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