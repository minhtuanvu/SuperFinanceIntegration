define("MoneyMovementModule/frmMMTransferAmount", function() {
    return function(controller) {
        function addWidgetsfrmMMTransferAmount() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Amount")
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
                "bottom": "31.98%",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxToAndFrom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxToAndFrom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxToAndFrom.setDefaultUnit(kony.flex.DP);
            var flxFromAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "72dp",
                "id": "flxFromAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFromAccount.setDefaultUnit(kony.flex.DP);
            var lblFromAccount = new kony.ui.Label({
                "id": "lblFromAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("kony.mb.common.from"),
                "textStyle": {},
                "top": "15dp",
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
            var flxFromAccountValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxFromAccountValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": 50,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%"
            }, {}, {});
            flxFromAccountValue.setDefaultUnit(kony.flex.DP);
            var lblFromAccountValue = new kony.ui.Label({
                "id": "lblFromAccountValue",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknMMBlueLabel",
                "text": "My Savings ....1234",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flximgFromAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "13dp",
                "id": "flximgFromAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "flxIconShadow7px7d7d7dBorder1pxe3e3e3",
                "top": "0dp",
                "width": "13dp"
            }, {}, {});
            flximgFromAccount.setDefaultUnit(kony.flex.DP);
            var imgFromAccountValue = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "11dp",
                "id": "imgFromAccountValue",
                "isVisible": true,
                "skin": "slImage",
                "src": "personalaccount.png",
                "width": "11dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flximgFromAccount.add(imgFromAccountValue);
            flxFromAccountValue.add(lblFromAccountValue, flximgFromAccount);
            var flxFromImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxFromImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "11%",
                "zIndex": 2
            }, {}, {});
            flxFromImage.setDefaultUnit(kony.flex.DP);
            var imgFromRightArrow = new kony.ui.Image2({
                "centerY": "49.82%",
                "height": "20dp",
                "id": "imgFromRightArrow",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFromImage.add(imgFromRightArrow);
            var flxFromAvailableBalance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFromAvailableBalance",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxFromAvailableBalance.setDefaultUnit(kony.flex.DP);
            var lblFromBalanceValue = new kony.ui.Label({
                "id": "lblFromBalanceValue",
                "isVisible": true,
                "left": 10,
                "right": "50dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": "$00,0000",
                "textStyle": {},
                "top": "35dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblFromavailableBal = new kony.ui.Label({
                "id": "lblFromavailableBal",
                "isVisible": true,
                "right": "-5dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.availableBalance"),
                "textStyle": {},
                "top": "35dp",
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
            flxFromAvailableBalance.add(lblFromBalanceValue, lblFromavailableBal);
            flxFromAccount.add(lblFromAccount, flxFromAccountValue, flxFromImage, flxFromAvailableBalance);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "72dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var flxToAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "72dp",
                "id": "flxToAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "73dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToAccount.setDefaultUnit(kony.flex.DP);
            var lblToAccount = new kony.ui.Label({
                "id": "lblToAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("kony.mb.common.To"),
                "textStyle": {},
                "top": "15dp",
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
            var flxToAccountValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18dp",
                "id": "flxToAccountValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": 50,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%"
            }, {}, {});
            flxToAccountValue.setDefaultUnit(kony.flex.DP);
            var lblToAccountValue = new kony.ui.Label({
                "id": "lblToAccountValue",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknMMBlueLabel",
                "text": "My Savings ....1234",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flximgToAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "13dp",
                "id": "flximgToAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "flxIconShadow7px7d7d7dBorder1pxe3e3e3",
                "top": "0dp",
                "width": "13dp"
            }, {}, {});
            flximgToAccount.setDefaultUnit(kony.flex.DP);
            var imgToAccountValue = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "11dp",
                "id": "imgToAccountValue",
                "isVisible": true,
                "skin": "slImage",
                "src": "businessaccount.png",
                "width": "11dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flximgToAccount.add(imgToAccountValue);
            flxToAccountValue.add(lblToAccountValue, flximgToAccount);
            var flxToImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxToImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "11%",
                "zIndex": 2
            }, {}, {});
            flxToImage.setDefaultUnit(kony.flex.DP);
            var imgToRightArrow = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgToRightArrow",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToImage.add(imgToRightArrow);
            var flxToAvailableBalance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxToAvailableBalance",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "100%"
            }, {}, {});
            flxToAvailableBalance.setDefaultUnit(kony.flex.DP);
            var lblToBalanceValue = new kony.ui.Label({
                "id": "lblToBalanceValue",
                "isVisible": true,
                "left": 10,
                "right": "50dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": "$00,000.00",
                "textStyle": {},
                "top": "35dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblToAvailableBalance = new kony.ui.Label({
                "id": "lblToAvailableBalance",
                "isVisible": true,
                "right": "-5dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.availableBalance"),
                "textStyle": {},
                "top": "35dp",
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
            flxToAvailableBalance.add(lblToBalanceValue, lblToAvailableBalance);
            flxToAccount.add(lblToAccount, flxToAccountValue, flxToImage, flxToAvailableBalance);
            var flxToAccountDisabled = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxToAccountDisabled",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "72dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToAccountDisabled.setDefaultUnit(kony.flex.DP);
            var lblToAccountDisabled = new kony.ui.Label({
                "id": "lblToAccountDisabled",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.To"),
                "textStyle": {},
                "top": "15dp",
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
            var lblToAccountValueDisabled = new kony.ui.Label({
                "id": "lblToAccountValueDisabled",
                "isVisible": true,
                "right": "50dp",
                "skin": "sknMMGreyLabel",
                "text": "My Savings ....1268",
                "textStyle": {},
                "top": "15dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxToAvailableBalanceDisabled = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxToAvailableBalanceDisabled",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxToAvailableBalanceDisabled.setDefaultUnit(kony.flex.DP);
            var lblToBalanceValueDisabled = new kony.ui.Label({
                "id": "lblToBalanceValueDisabled",
                "isVisible": true,
                "left": 10,
                "right": "50dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": "$42,304.00",
                "textStyle": {},
                "top": "35dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblToAvailableBalanceDisabled = new kony.ui.Label({
                "id": "lblToAvailableBalanceDisabled",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.availableBalance"),
                "textStyle": {},
                "top": "35dp",
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
            flxToAvailableBalanceDisabled.add(lblToBalanceValueDisabled, lblToAvailableBalanceDisabled);
            flxToAccountDisabled.add(lblToAccountDisabled, lblToAccountValueDisabled, flxToAvailableBalanceDisabled);
            var flxSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "145dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSeparator2.setDefaultUnit(kony.flex.DP);
            flxSeparator2.add();
            flxToAndFrom.add(flxFromAccount, flxSeperator, flxToAccount, flxToAccountDisabled, flxSeparator2);
            var flxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "67dp",
                "clipBounds": true,
                "height": "82dp",
                "id": "flxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "150dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmount.setDefaultUnit(kony.flex.DP);
            var lblAmountTitle = new kony.ui.Label({
                "id": "lblAmountTitle",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
                "textStyle": {},
                "top": "16dp",
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
                "skin": "flxBlueFocus",
                "top": "38dp",
                "zIndex": 1
            }, {}, {});
            flxAmountWrapper.setDefaultUnit(kony.flex.DP);
            var lblDollar = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDollar",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblA0A0A0SSP42px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAmount",
                "isVisible": true,
                "left": "10dp",
                "right": "50dp",
                "skin": "sknLblA0A0A0SSP42px",
                "text": "0.00",
                "textStyle": {},
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAmountWrapper.add(lblDollar, lblAmount);
            var flxClearAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxClearAmount",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "right": "25dp",
                "skin": "slFbox",
                "top": "38dp",
                "width": "46dp",
                "zIndex": 5
            }, {}, {});
            flxClearAmount.setDefaultUnit(kony.flex.DP);
            var imgClose = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "16dp",
                "id": "imgClose",
                "isVisible": true,
                "skin": "slImage",
                "src": "closecircle.png",
                "width": "16dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClearAmount.add(imgClose);
            flxAmount.add(lblAmountTitle, flxAmountWrapper, flxClearAmount);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
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
            }, {
                "showProgressIndicator": false
            });
            var flxOtrAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxOtrAmount",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "215dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOtrAmount.setDefaultUnit(kony.flex.DP);
            var tbxOtrErr = new kony.ui.RichText({
                "id": "tbxOtrErr",
                "isVisible": false,
                "left": "31dp",
                "skin": "sknRtxFF0000SSPR21px",
                "text": "You cannot pay more than the due amount.",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblOtrAmtTitle = new kony.ui.Label({
                "id": "lblOtrAmtTitle",
                "isVisible": true,
                "left": "33dp",
                "skin": "sknLbl727272SSPReg28pxTab",
                "text": "Amount",
                "textStyle": {},
                "top": "7dp",
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
            var flxOtrAmtWpr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxOtrAmtWpr",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "23dp",
                "isModalContainer": false,
                "right": "23dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "0dp",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxOtrAmtWpr.setDefaultUnit(kony.flex.DP);
            var lblDollarOtherAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDollarOtherAmount",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblA0A0A0SSP42px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblOtherAmount = new kony.ui.Label({
                "centerY": "50.00%",
                "id": "lblOtherAmount",
                "isVisible": true,
                "left": "25dp",
                "right": "50dp",
                "skin": "sknLblA0A0A0SSP42px",
                "text": "0.00",
                "textStyle": {},
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxClearOtherAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxClearOtherAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "9dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "46dp",
                "zIndex": 5
            }, {}, {});
            flxClearOtherAmount.setDefaultUnit(kony.flex.DP);
            var imgCloseOtrAmt = new kony.ui.Image2({
                "centerX": "63%",
                "centerY": "50%",
                "height": "16dp",
                "id": "imgCloseOtrAmt",
                "isVisible": true,
                "right": 16,
                "skin": "slImage",
                "src": "closecircle.png",
                "width": "16dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClearOtherAmount.add(imgCloseOtrAmt);
            flxOtrAmtWpr.add(lblDollarOtherAmount, lblOtherAmount, flxClearOtherAmount);
            flxOtrAmount.add(tbxOtrErr, lblOtrAmtTitle, flxOtrAmtWpr);
            var flxDueAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "67dp",
                "clipBounds": true,
                "id": "flxDueAmount",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "215dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDueAmount.setDefaultUnit(kony.flex.DP);
            var tbxDueErr = new kony.ui.RichText({
                "id": "tbxDueErr",
                "isVisible": false,
                "left": "31dp",
                "linkSkin": "defRichTextLink",
                "right": "23dp",
                "skin": "sknRtxFF0000SSPR21px",
                "text": "Currently there are no pending dues on your account.",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDueAmtTitle = new kony.ui.Label({
                "id": "lblDueAmtTitle",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Amount",
                "textStyle": {},
                "top": "16dp",
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
            var flxDueAmtWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxDueAmtWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "23dp",
                "isModalContainer": false,
                "right": "23dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "0dp",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxDueAmtWrapper.setDefaultUnit(kony.flex.DP);
            var lblDollarDueAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDollarDueAmount",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblA0A0A0SSP42px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDueAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDueAmount",
                "isVisible": true,
                "left": "25dp",
                "right": "50dp",
                "skin": "sknLblA0A0A0SSP42px",
                "text": "0.00",
                "textStyle": {},
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxClearDueAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxClearDueAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "46dp",
                "zIndex": 5
            }, {}, {});
            flxClearDueAmount.setDefaultUnit(kony.flex.DP);
            var CopyimgClose0b58f91d3def749 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "16dp",
                "id": "CopyimgClose0b58f91d3def749",
                "isVisible": false,
                "right": "16dp",
                "skin": "slImage",
                "src": "closecircle.png",
                "width": "16dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClearDueAmount.add(CopyimgClose0b58f91d3def749);
            flxDueAmtWrapper.add(lblDollarDueAmount, lblDueAmount, flxClearDueAmount);
            flxDueAmount.add(tbxDueErr, lblDueAmtTitle, flxDueAmtWrapper);
            var flxAmountBtns = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAmountBtns",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "7dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "163dp",
                "width": "96.18%",
                "zIndex": 1
            }, {}, {});
            flxAmountBtns.setDefaultUnit(kony.flex.DP);
            var flxMainTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxMainTabs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainTabs.setDefaultUnit(kony.flex.DP);
            var flxTabsWrap = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTabsWrap",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxTabsWrap.setDefaultUnit(kony.flex.DP);
            var flxTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTabs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxTabs.setDefaultUnit(kony.flex.DP);
            var btnDueAmount = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnFFFFFFBdr10px",
                "height": "35dp",
                "id": "btnDueAmount",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.dueAmt"),
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnOtherAmount = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknbtn000000SSPSemiBold15px",
                "height": "35dp",
                "id": "btnOtherAmount",
                "isVisible": true,
                "right": "1dp",
                "skin": "sknBtnBorderAlternate",
                "text": kony.i18n.getLocalizedString("kony.mb.Loans.OtherAmount"),
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxTabs.add(btnDueAmount, btnOtherAmount);
            flxTabsWrap.add(flxTabs);
            flxMainTabs.add(flxTabsWrap);
            flxAmountBtns.add(flxMainTabs);
            var flxAmountWithFlag = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "67dp",
                "clipBounds": true,
                "height": "82dp",
                "id": "flxAmountWithFlag",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "150dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmountWithFlag.setDefaultUnit(kony.flex.DP);
            var imgFlag = new kony.ui.Image2({
                "centerY": "52%",
                "height": "23dp",
                "id": "imgFlag",
                "isVisible": true,
                "left": "50dp",
                "skin": "slImage",
                "src": "euro.png",
                "width": "32dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCurrency = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxCurrency",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "92dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCurrency.setDefaultUnit(kony.flex.DP);
            var lblCurrency = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCurrency",
                "isVisible": true,
                "left": "1dp",
                "right": "1dp",
                "skin": "sknLbl424242SSPReg60px",
                "text": "EUR",
                "textStyle": {},
                "top": "0dp",
                "width": "80dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblCurrencyUnderline = new kony.ui.Label({
                "bottom": "0dp",
                "height": "2dp",
                "id": "lblCurrencyUnderline",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlble3e3e3Border100px",
                "textStyle": {},
                "width": "65dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCurrency.add(lblCurrency, lblCurrencyUnderline);
            var flxAmountValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxAmountValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "172dp",
                "isModalContainer": false,
                "right": "54dp",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 1
            }, {}, {});
            flxAmountValue.setDefaultUnit(kony.flex.DP);
            var flxFlagDigits = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFlagDigits",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxFlagDigits.setDefaultUnit(kony.flex.DP);
            var lblAmountWithFlag = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAmountWithFlag",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0ssp66px",
                "textStyle": {},
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
            flxFlagDigits.add(lblAmountWithFlag);
            var lblAmountUnderline = new kony.ui.Label({
                "bottom": "0dp",
                "height": "2dp",
                "id": "lblAmountUnderline",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlble3e3e3Border100px",
                "textStyle": {},
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAmountValue.add(flxFlagDigits, lblAmountUnderline);
            flxAmountWithFlag.add(imgFlag, flxCurrency, flxAmountValue);
            flxMainContainer.add(flxToAndFrom, flxAmount, btnContinue, flxOtrAmount, flxDueAmount, flxAmountBtns, flxAmountWithFlag);
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
                    "btnOne": {
                        "left": "0dp",
                        "top": "0dp"
                    },
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
            keypad.btnEight.onClick = controller.AS_Button_af03e01a08d74577883a579721ec4ffe;
            keypad.btnFive.onClick = controller.AS_Button_c8533e48560f43c2ac17a7132692d73c;
            keypad.btnFour.onClick = controller.AS_Button_fe40053bdfd648569131b5a3e583f322;
            keypad.btnNine.onClick = controller.AS_Button_h381d25ab7e6485697f55ac3882ccac7;
            keypad.btnOne.onClick = controller.AS_Button_b913b80ed7134b5caf8c2a4134c904c7;
            keypad.btnSeven.onClick = controller.AS_Button_b87d499ad0fb47afb7739d92c7df3d44;
            keypad.btnSix.onClick = controller.AS_Button_f29984f275044a94a8eb9ba2d71582f6;
            keypad.btnThree.onClick = controller.AS_Button_gb5456a74fcc46f8873538364608ea86;
            keypad.btnTwo.onClick = controller.AS_Button_bbb7fef56cdb4066a01f657d61d0a728;
            keypad.btnZero.onClick = controller.AS_Button_gfbbf318e92b4ce4aacd58df6b221111;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_bef0553132904e1c90e66471ec99e2ec;
            var btnDot = new kony.ui.Button({
                "bottom": "0dp",
                "height": "24%",
                "id": "btnDot",
                "isVisible": false,
                "left": "0dp",
                "onClick": controller.AS_Button_c2b6b11f637f42efa5bae537a42959c1,
                "skin": "sknBtnKeybad",
                "text": ".",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxMainContainer, flxKeypad, flxPopup);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_c0a4aa1f55ef44968ce69b917a8a4e4f,
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
            "action": controller.AS_BarButtonItem_ce88ee48a90c454984d76648a921bf20,
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
            "addWidgets": addWidgetsfrmMMTransferAmount,
            "enabledForIdleTimeout": true,
            "id": "frmMMTransferAmount",
            "init": controller.AS_Form_h53b48e9fc9b44178c419a66135da80a,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_cf2e29191b3d448e96af62ea6976a3cc,
            "preShow": function(eventobject) {
                controller.AS_Form_e3ccfdb4c29a47fdbea51b2b89fda5ed(eventobject);
            },
            "skin": "sknFrmf9f9f9",
            "title": kony.i18n.getLocalizedString("kony.mb.common.Amount")
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