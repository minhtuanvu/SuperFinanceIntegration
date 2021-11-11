define("TransferModuleEurope/frmEuropeTransferAmount", function() {
    return function(controller) {
        function addWidgetsfrmEuropeTransferAmount() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": false,
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
            var flxToAndFrom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "142dp",
                "id": "flxToAndFrom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
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
                "text": "$42,333333333",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblFromavailableBal = new kony.ui.Label({
                "id": "lblFromavailableBal",
                "isVisible": true,
                "right": "-5dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.availableBalance"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFromAvailableBalance.add(lblFromBalanceValue, lblFromavailableBal);
            var flxFromAccountValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFromAccountValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxFromAccountValue.setDefaultUnit(kony.flex.DP);
            var lblFromAccountValue = new kony.ui.Label({
                "id": "lblFromAccountValue",
                "isVisible": true,
                "maxWidth": "50%",
                "right": "50dp",
                "skin": "sknLblWishesSF",
                "text": "My Checking ....2343",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgPersonal = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgPersonal",
                "isVisible": true,
                "right": "10dp",
                "skin": "slImage",
                "src": "personalaccount.png",
                "top": "15dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFromAccountValue.add(lblFromAccountValue, imgPersonal);
            flxFromAccount.add(lblFromAccount, flxFromImage, flxFromAvailableBalance, flxFromAccountValue);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "70dp",
                "width": "90%",
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
                "top": "74dp",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
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
                "text": "$42,304.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblToAvailableBalance = new kony.ui.Label({
                "id": "lblToAvailableBalance",
                "isVisible": true,
                "right": "-5dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.availableBalance"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxToAvailableBalance.add(lblToBalanceValue, lblToAvailableBalance);
            var flxToAccountValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxToAccountValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxToAccountValue.setDefaultUnit(kony.flex.DP);
            var lblToAccountValue = new kony.ui.Label({
                "id": "lblToAccountValue",
                "isVisible": true,
                "maxWidth": "50%",
                "right": "50dp",
                "skin": "sknLblWishesSF",
                "text": "My Savings ....1268",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgIcon = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgIcon",
                "isVisible": true,
                "left": "144dp",
                "right": "10dp",
                "skin": "slImage",
                "src": "personalaccount.png",
                "top": "15dp",
                "width": "20dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToAccountValue.add(lblToAccountValue, imgIcon);
            flxToAccount.add(lblToAccount, flxToImage, flxToAvailableBalance, flxToAccountValue);
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblToAccountValueDisabled = new kony.ui.Label({
                "id": "lblToAccountValueDisabled",
                "isVisible": true,
                "right": "50dp",
                "skin": "sknMMGreyLabel",
                "text": "My Savings ....1268",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblToAvailableBalanceDisabled = new kony.ui.Label({
                "id": "lblToAvailableBalanceDisabled",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.availableBalance"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxToAvailableBalanceDisabled.add(lblToBalanceValueDisabled, lblToAvailableBalanceDisabled);
            flxToAccountDisabled.add(lblToAccountDisabled, lblToAccountValueDisabled, flxToAvailableBalanceDisabled);
            var flxSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "140dp",
                "width": "90%",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "16dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxAmountWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxAmountWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
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
                "skin": "sknLblTransTitleSF",
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
            var flxDigits = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDigits",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxDigits.setDefaultUnit(kony.flex.DP);
            var lblAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAmount",
                "isVisible": true,
                "left": "25dp",
                "skin": "sknLblTransTitleSF",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblExtension = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblExtension",
                "isVisible": true,
                "left": "0dp",
                "right": "40dp",
                "skin": "sknLblTransTitleSF",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDigits.add(lblAmount, lblExtension);
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
            flxAmountWrapper.add(lblDollar, flxDigits, flxClearAmount);
            flxAmount.add(lblAmountTitle, flxAmountWrapper);
            var flxLoanAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxLoanAmount",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "150dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLoanAmount.setDefaultUnit(kony.flex.DP);
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
            var flxTabsBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTabsBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxTabsBg.setDefaultUnit(kony.flex.DP);
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
            }, {});
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
            }, {});
            flxTabsBg.add(btnDueAmount, btnOtherAmount);
            flxTabsWrap.add(flxTabsBg);
            flxMainTabs.add(flxTabsWrap);
            var lblError = new kony.ui.Label({
                "id": "lblError",
                "isVisible": false,
                "left": "30dp",
                "skin": "sknLblREDSSPReg22px",
                "text": "Error",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblLoanAmountTitle = new kony.ui.Label({
                "id": "lblLoanAmountTitle",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxLoanAmountWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxLoanAmountWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "2dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLoanAmountWrapper.setDefaultUnit(kony.flex.DP);
            var lblLoanDollar = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLoanDollar",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblTransTitleSF",
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
            var flxLoanDigits = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoanDigits",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "flxBlueFocus",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxLoanDigits.setDefaultUnit(kony.flex.DP);
            var lblLoanAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLoanAmount",
                "isVisible": true,
                "left": "25dp",
                "skin": "sknLblTransTitleSF",
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
            var lblLoanExtension = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLoanExtension",
                "isVisible": true,
                "left": "0dp",
                "right": "40dp",
                "skin": "sknLblTransTitleSF",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLoanDigits.add(lblLoanAmount, lblLoanExtension);
            var flxLoanClearAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoanClearAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "46dp",
                "zIndex": 5
            }, {}, {});
            flxLoanClearAmount.setDefaultUnit(kony.flex.DP);
            var imgLoanClose = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "16dp",
                "id": "imgLoanClose",
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
            flxLoanClearAmount.add(imgLoanClose);
            flxLoanAmountWrapper.add(lblLoanDollar, flxLoanDigits, flxLoanClearAmount);
            flxLoanAmount.add(flxMainTabs, lblError, lblLoanAmountTitle, flxLoanAmountWrapper);
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
                "left": "55dp",
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
                "left": "97dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "65dp",
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
            var lblCurrencyUnderline = new kony.ui.Label({
                "bottom": "0dp",
                "height": "2dp",
                "id": "lblCurrencyUnderline",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlble3e3e3Border100px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
            var lblExtensionWithFlag = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblExtensionWithFlag",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblA0A0A0ssp66px",
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
            flxFlagDigits.add(lblAmountWithFlag, lblExtensionWithFlag);
            var lblAmountUnderline = new kony.ui.Label({
                "bottom": "0dp",
                "height": "2dp",
                "id": "lblAmountUnderline",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlble3e3e3Border100px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAmountValue.add(flxFlagDigits, lblAmountUnderline);
            flxAmountWithFlag.add(imgFlag, flxCurrency, flxAmountValue);
            var flxExchangeRateMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxExchangeRateMain",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "220dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExchangeRateMain.setDefaultUnit(kony.flex.DP);
            var flxExchangeRate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxExchangeRate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExchangeRate.setDefaultUnit(kony.flex.DP);
            var lblExchangeRate = new kony.ui.Label({
                "id": "lblExchangeRate",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.ExchangeRate"),
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
            flxExchangeRate.add(lblExchangeRate);
            var flxYouSent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxYouSent",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxYouSent.setDefaultUnit(kony.flex.DP);
            var lblYouSent = new kony.ui.Label({
                "id": "lblYouSent",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "You Sent",
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
            flxYouSent.add(lblYouSent);
            flxExchangeRateMain.add(flxExchangeRate, flxYouSent);
            var btnContinue = new kony.ui.Button({
                "bottom": "5dp",
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
            flxMainContainer.add(flxToAndFrom, flxAmount, flxLoanAmount, flxAmountWithFlag, flxExchangeRateMain, btnContinue);
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
                    "btnDecimalSeperator": {
                        "isVisible": true
                    },
                    "btnOne": {
                        "left": "4%",
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
            keypad.btnDecimalSeperator.onClick = controller.AS_Button_d78eda181d3641e69b234607168dd2e1;
            keypad.btnEight.onClick = controller.AS_Button_j17a39fdbd734a13ba5f2c2367a1fdc2;
            keypad.btnFive.onClick = controller.AS_Button_c16851916b57457289aff8031e29d778;
            keypad.btnFour.onClick = controller.AS_Button_f0eff7ee6a364a36bde891a5d1a0c372;
            keypad.btnNine.onClick = controller.AS_Button_ba2c856251ba466194316fd18b49fadd;
            keypad.btnOne.onClick = controller.AS_Button_cf3354ed091545619996da59563f7bd1;
            keypad.btnSeven.onClick = controller.AS_Button_af71dc58eab845b19b11f7d93338c824;
            keypad.btnSix.onClick = controller.AS_Button_c9cadcee52e6417c8f87b2e9ec89cc62;
            keypad.btnThree.onClick = controller.AS_Button_g97a5e9542274e98bef2c46d8ea262eb;
            keypad.btnTwo.onClick = controller.AS_Button_g24815c3889f45f8a350fadb706d6de6;
            keypad.btnZero.onClick = controller.AS_Button_feb483046a60481d8e4939fa0fc24e8f;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_ieb904a915ed4ed7b72c81e77743d933;
            var btnDot = new kony.ui.Button({
                "bottom": "0dp",
                "height": "24%",
                "id": "btnDot",
                "isVisible": false,
                "left": "0dp",
                "onClick": controller.AS_Button_d23d51e093dd46e694c2be82da34c643,
                "skin": "sknBtnKeybad",
                "text": ",",
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxMainContainer, flxKeypad, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmEuropeTransferAmount,
            "enabledForIdleTimeout": true,
            "id": "frmEuropeTransferAmount",
            "init": controller.AS_Form_b3018b1ba7f24bd985cd9bec7597a0ad,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_e44169ac4c3a443789efeffe06c24b0b,
            "preShow": function(eventobject) {
                controller.AS_Form_je0958fdd67843aab351a1325e37ab4b(eventobject);
            },
            "skin": "sknFrmBgSF",
            "title": kony.i18n.getLocalizedString("kony.mb.common.Amount")
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