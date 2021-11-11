define("ChequeManagementModule/frmChequeNumber", function() {
    return function(controller) {
        function addWidgetsfrmChequeNumber() {
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
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "centerX": "50%",
                        "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.chequeNumber"),
                        "isVisible": true,
                        "left": "viz.val_cleared",
                        "width": "40%"
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
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxSingleCheque = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "300dp",
                "id": "flxSingleCheque",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSingleCheque.setDefaultUnit(kony.flex.DP);
            var flxheaderChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxheaderChange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf8f8f8",
                "top": "0dp",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxheaderChange.setDefaultUnit(kony.flex.DP);
            var lblReEnterAccNo = new kony.ui.Label({
                "id": "lblReEnterAccNo",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.pleaseChequeNumber"),
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
            flxheaderChange.add(lblReEnterAccNo);
            var lblError = new kony.ui.Label({
                "id": "lblError",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLblff00000RegularErrorMsg",
                "text": "Error.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxChequeNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxChequeNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxChequeNumber.setDefaultUnit(kony.flex.DP);
            var flxChequeWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxChequeWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "flxBlueFocus",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxChequeWrapper.setDefaultUnit(kony.flex.DP);
            var lblChequeNumber = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblChequeNumber",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl424242SSP28px",
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
            flxChequeWrapper.add(lblChequeNumber);
            var lblCheqNumber = new kony.ui.Label({
                "height": "25dp",
                "id": "lblCheqNumber",
                "isVisible": true,
                "left": "32dp",
                "skin": "sknMMGreyLabel",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.cheqnumber"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "13dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxChequeNumber.add(flxChequeWrapper, lblCheqNumber);
            flxSingleCheque.add(flxheaderChange, lblError, flxChequeNumber);
            var flxInformation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "75dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxInformation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%"
            }, {}, {});
            flxInformation.setDefaultUnit(kony.flex.DP);
            var flxInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInfo.setDefaultUnit(kony.flex.DP);
            var imgInfo = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25dp",
                "id": "imgInfo",
                "isVisible": true,
                "left": "22dp",
                "skin": "slImage",
                "src": "info_icon.png",
                "top": "3dp",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblInfo = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblInfo",
                "isVisible": true,
                "left": "12dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.pleaseNote"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInfo.add(imgInfo, lblInfo);
            var lblWarning = new kony.ui.Label({
                "id": "lblWarning",
                "isVisible": true,
                "left": "21dp",
                "skin": "sknMMGreyLabel",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.chargeableService"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "50dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInformation.add(flxInfo, lblWarning);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "50dp",
                "id": "btnContinue",
                "isVisible": true,
                "skin": "sknBtnE2E9F0SSP31PX",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "width": "90%",
                "zIndex": 50
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMainContainer.add(flxSingleCheque, flxInformation, btnContinue);
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
                "overrides": {
                    "imgClear": {
                        "src": "cancelkeypad.png"
                    },
                    "imgClearKeypad": {
                        "centerY": "45.24%",
                        "right": "0.00%",
                        "src": "transparentbox.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            keypad.btnEight.onClick = controller.AS_Button_ab348c740e13405b85db057f0ada20e0;
            keypad.btnFive.onClick = controller.AS_Button_e64c5906d80e426e9304afb09a9460d4;
            keypad.btnFour.onClick = controller.AS_Button_h7f063827414421eb3ad6734426c825f;
            keypad.btnNine.onClick = controller.AS_Button_d65e2b276a9f4a15b1733797f708e875;
            keypad.btnOne.onClick = controller.AS_Button_b1be19563f814a51b7ab31877b5954f2;
            keypad.btnSeven.onClick = controller.AS_Button_bee1c7cf64ee4df580f96efae63cd62d;
            keypad.btnSix.onClick = controller.AS_Button_jdcc4bbe26c541e39b783ebe38f951bb;
            keypad.btnThree.onClick = controller.AS_Button_g61f491aec2049778653276546b3458c;
            keypad.btnTwo.onClick = controller.AS_Button_e8ed86db1b8b4047bc056e77aef22522;
            keypad.btnZero.onClick = controller.AS_Button_e323863770a840aeb5ce3fb3930b451b;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_a3a1c3188c74401892b7cee38cfa4fbc;
            var btnDot = new kony.ui.Button({
                "bottom": "0dp",
                "height": "24%",
                "id": "btnDot",
                "isVisible": false,
                "left": "0dp",
                "onClick": controller.AS_Button_i7b2bbdfab4744ef917cab71739b92df,
                "skin": "sknBtnKeybad",
                "text": ".",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeypad.add(keypad, btnDot);
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
            this.add(flxHeader, flxMainContainer, flxKeypad, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmChequeNumber,
            "enabledForIdleTimeout": true,
            "id": "frmChequeNumber",
            "init": controller.AS_Form_h8ec2073022d4ec2a1be4ca1296066e3,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_d9bc6d64bfd94259a249b34af40a7db1,
            "preShow": function(eventobject) {
                controller.AS_Form_e9d4b3199f414834b11164791210640d(eventobject);
            },
            "skin": "sknFrmf9f9f9",
            "title": kony.i18n.getLocalizedString("kony.mb.CM.chequeNumber")
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