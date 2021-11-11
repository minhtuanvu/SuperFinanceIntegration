define("ManageCardsModule/frmCardManageOldCVV", function() {
    return function(controller) {
        function addWidgetsfrmCardManageOldCVV() {
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
                        "isVisible": false
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
                        "left": "5%",
                        "text": "Activate Card"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxImgCardCVVView = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxImgCardCVVView",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 107
            }, {}, {});
            flxImgCardCVVView.setDefaultUnit(kony.flex.DP);
            var imgCardCVV = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "id": "imgCardCVV",
                "isVisible": true,
                "skin": "slImage",
                "src": "cardcvv.png",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCross = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "454dp",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxCross",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "73dp",
                "skin": "slFbox",
                "width": "40dp",
                "zIndex": 2
            }, {}, {});
            flxCross.setDefaultUnit(kony.flex.DP);
            var imgCross = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgCross",
                "isVisible": true,
                "skin": "slImage",
                "src": "closeimg.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCross.add(imgCross);
            flxImgCardCVVView.add(imgCardCVV, flxCross);
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
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxMainContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "110dp",
                "clipBounds": false,
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
                "isVisible": false,
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
                "textStyle": {},
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
            flxSecurityCode.add(lblEnterInfoTitle);
            var lblEnterInfoSubtitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterInfoSubtitle",
                "isVisible": true,
                "skin": "sknLbl424242SSPLight46px",
                "text": "Enter Old Card CVV",
                "textStyle": {},
                "top": "35dp",
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
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "minWidth": "100dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var lblEnterOldCVV = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterOldCVV",
                "isVisible": true,
                "skin": "sknLbl424242SSP22px26",
                "text": "In order to activate this card please enter the CVV code on the back of your card.",
                "textStyle": {},
                "top": "0dp",
                "width": "72%",
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDetails.add(lblEnterOldCVV);
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblError",
                "isVisible": false,
                "skin": "sknLblF54B5E26px",
                "text": "Code Expired. Try again",
                "textStyle": {},
                "top": "12dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxInputOldCVV = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxInputOldCVV",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "35dp",
                "width": "80dp",
                "zIndex": 1
            }, {}, {});
            flxInputOldCVV.setDefaultUnit(kony.flex.DP);
            var lblCVVOne = new kony.ui.Label({
                "height": "30dp",
                "id": "lblCVVOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "lblWhiteDot",
                "text": "•",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblCVVTwo = new kony.ui.Label({
                "height": "30dp",
                "id": "lblCVVTwo",
                "isVisible": true,
                "left": "10dp",
                "skin": "lblWhiteDot",
                "text": "•",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblCVVThree = new kony.ui.Label({
                "height": "30dp",
                "id": "lblCVVThree",
                "isVisible": true,
                "left": "10dp",
                "skin": "lblWhiteDot",
                "text": "•",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxInputCVVBorder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxInputCVVBorder",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "-80dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "33dp",
                "width": "80dp",
                "zIndex": 1
            }, {}, {});
            flxInputCVVBorder.setDefaultUnit(kony.flex.DP);
            var flxOldCVVBdr1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxOldCVVBdr1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxOldCVVBdr1.setDefaultUnit(kony.flex.DP);
            flxOldCVVBdr1.add();
            var flxOldCVVBdr2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxOldCVVBdr2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxOldCVVBdr2.setDefaultUnit(kony.flex.DP);
            flxOldCVVBdr2.add();
            var flxOldCVVBdr3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxOldCVVBdr3",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxOldCVVBdr3.setDefaultUnit(kony.flex.DP);
            flxOldCVVBdr3.add();
            flxInputCVVBorder.add(flxOldCVVBdr1, flxOldCVVBdr2, flxOldCVVBdr3);
            flxInputOldCVV.add(lblCVVOne, lblCVVTwo, lblCVVThree, flxInputCVVBorder);
            var flxCVVCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxCVVCode",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "30dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxCVVCode.setDefaultUnit(kony.flex.DP);
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
                "overrides": {
                    "customSecurityCode": {
                        "width": "100%"
                    },
                    "flxDash0": {
                        "isVisible": true
                    },
                    "flxDash1": {
                        "isVisible": true
                    },
                    "flxDash2": {
                        "isVisible": true,
                        "left": "0dp"
                    },
                    "flxDash3": {
                        "isVisible": true,
                        "left": "0dp"
                    },
                    "flxDash4": {
                        "isVisible": true,
                        "left": "0dp"
                    },
                    "flxDash5": {
                        "isVisible": true
                    },
                    "flxDash6": {
                        "isVisible": true
                    },
                    "flxDash7": {
                        "isVisible": true
                    },
                    "flxInputSecurityCodeBorder": {
                        "width": "100%"
                    },
                    "flxTextKA": {
                        "centerX": "viz.val_cleared",
                        "left": "0dp",
                        "top": "0dp",
                        "width": "100%"
                    },
                    "lblText0": {
                        "isVisible": true
                    },
                    "lblText1": {
                        "isVisible": true
                    },
                    "lblText2": {
                        "centerX": "viz.val_cleared",
                        "isVisible": true,
                        "left": "0dp"
                    },
                    "lblText3": {
                        "centerX": "viz.val_cleared",
                        "left": "0dp"
                    },
                    "lblText4": {
                        "centerX": "viz.val_cleared",
                        "left": "0dp"
                    },
                    "lblText5": {
                        "isVisible": true
                    },
                    "lblText6": {
                        "isVisible": true
                    },
                    "lblText7": {
                        "isVisible": true
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxCVVCode.add(customSecurityCode2);
            var btnFindMyCVV = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn0095e428px",
                "height": "40dp",
                "id": "btnFindMyCVV",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": "Where can I find my CVV code?",
                "top": "35dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
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
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSecurityTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityTwo",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSecurityThree = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityThree",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSecurityFour = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityFour",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSecurityFive = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecurityFive",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSecuritySix = new kony.ui.Label({
                "height": "100%",
                "id": "lblSecuritySix",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
                "textStyle": {},
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblTimeRemaining = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTimeRemaining",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknlbl424242SSPReg32",
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
            flxResendTimer.add(lblResendin, lblTimeRemaining);
            var flxBottomContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "140dp",
                "id": "flxBottomContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBottomContainer.setDefaultUnit(kony.flex.DP);
            flxBottomContainer.add();
            flxMainContent.add(flxSecurityCode, lblEnterInfoSubtitle, flxDetails, lblError, flxInputOldCVV, flxCVVCode, btnFindMyCVV, flxInputSecurityCode, flxResendTimer, flxBottomContainer);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "skin": "sknBtna0a0a0SSPReg26px",
                "text": "Continue",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxMainContainer.add(flxMainContent, btnContinue);
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
            this.add(flxHeader, flxImgCardCVVView, flxMainContainer, flxKeypad);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_aaf4d98e86ba4413a5f4923164677cfc,
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
            "addWidgets": addWidgetsfrmCardManageOldCVV,
            "enabledForIdleTimeout": true,
            "id": "frmCardManageOldCVV",
            "init": controller.AS_Form_hadb5a98167144a3bd466f019e7056d4,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_i17f1e53c7e443b7a845d129b822d4a5(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.preferences.DeviceRegistration")
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
                "leftBarButtonItems": [],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});