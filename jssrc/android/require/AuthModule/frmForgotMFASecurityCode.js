define("AuthModule/frmForgotMFASecurityCode", function() {
    return function(controller) {
        function addWidgetsfrmForgotMFASecurityCode() {
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
                    "customHeader": {
                        "isVisible": true
                    },
                    "flxBack": {
                        "isVisible": false
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
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.enroll.securityCode")
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
            var flxMainContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMainContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxMainContent.setDefaultUnit(kony.flex.DP);
            var flxSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSecurityCode.setDefaultUnit(kony.flex.DP);
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
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSecurityCode.add(lblEnterInfoTitle);
            var lblEnterInfoSubtitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterInfoSubtitle",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MFA.6DigitCode"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "minWidth": "100dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var lblEnterSAC = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterSAC",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Enter Secure Access sent on your 9*****8865 & p********************@Kony.com",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4dp",
                "width": "85%",
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblYour = new kony.ui.Label({
                "id": "lblYour",
                "isVisible": false,
                "left": "37dp",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "46dp",
                "width": "300dp",
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDetails.add(lblEnterSAC, lblYour);
            var lblError = new kony.ui.Label({
                "centerX": "53%",
                "id": "lblError",
                "isVisible": true,
                "skin": "sknLblF54B5E26px",
                "text": "Code Expired. Try again",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxCode.setDefaultUnit(kony.flex.DP);
            var customSecurityCode2 = new com.commom.customSecurityCode({
                "height": "100%",
                "id": "customSecurityCode2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
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
            flxCode.add(customSecurityCode2);
            var btnReSend = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn0095e428px",
                "height": "40dp",
                "id": "btnReSend",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.ReSend"),
                "top": "0dp",
                "width": "70dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxInputSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxInputSecurityCode",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
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
                "skin": "sknFlx979797",
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
                "skin": "sknFlx979797",
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
                "skin": "sknFlx979797",
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
                "skin": "sknFlx979797",
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
                "skin": "sknFlx979797",
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
                "skin": "sknFlx979797",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxSecuritySix.setDefaultUnit(kony.flex.DP);
            flxSecuritySix.add();
            flxInputSecurityCodeBorder.add(flxSecurityOne, flxSecurityTwo, flxSecurityThree, flxSecurityFour, flxSecurityFive, flxSecuritySix);
            flxInputSecurityCode.add(lblSecurityOne, lblSecurityTwo, lblSecurityThree, lblSecurityFour, lblSecurityFive, lblSecuritySix, flxInputSecurityCodeBorder);
            var flxResendTimer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxResendTimer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxResendTimer.setDefaultUnit(kony.flex.DP);
            var lblResendin = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "50%",
                "id": "lblResendin",
                "isVisible": true,
                "skin": "sknlbl424242SSPReg32",
                "text": kony.i18n.getLocalizedString("kony.mb.MFA.Resendin"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTimeRemaining = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTimeRemaining",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknlbl424242SSPReg32",
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
            flxResendTimer.add(lblResendin, lblTimeRemaining);
            flxMainContent.add(flxSecurityCode, lblEnterInfoSubtitle, flxDetails, lblError, flxCode, btnReSend, flxInputSecurityCode, flxResendTimer);
            var flxBottomContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "120dp",
                "id": "flxBottomContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBottomContainer.setDefaultUnit(kony.flex.DP);
            var btnVerify = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
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
            flxBottomContainer.add(btnVerify);
            flxMainContainer.add(flxMainContent, flxBottomContainer);
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
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
            flxKeypad.add(keypad);
            this.add(flxHeader, flxMainContainer, flxKeypad);
        };
        return [{
            "addWidgets": addWidgetsfrmForgotMFASecurityCode,
            "enabledForIdleTimeout": true,
            "id": "frmForgotMFASecurityCode",
            "init": controller.AS_Form_eeaddacfe2f0499f88ac421a28efa492,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_b5caaf9ceae8471b891bee07f36dbf77(eventobject);
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