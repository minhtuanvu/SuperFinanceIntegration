define("TransferModuleEurope/frmEuropeVerifyTransferDetails", function() {
    return function(controller) {
        function addWidgetsfrmEuropeVerifyTransferDetails() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.MM.VerifyTransferDetails"),
                        "left": "15%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxReviewMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "70dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxReviewMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReviewMain.setDefaultUnit(kony.flex.DP);
            var flxMMAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMMAmount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMMAmount.setDefaultUnit(kony.flex.DP);
            var flxToAccountEditFlow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "48dp",
                "id": "flxToAccountEditFlow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxToAccountEditFlow.setDefaultUnit(kony.flex.DP);
            var lblToAccountEdit = new kony.ui.Label({
                "id": "lblToAccountEdit",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("kony.mb.common.To"),
                "textStyle": {},
                "top": "15dp",
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
            var lblToAccountValueEdit = new kony.ui.Label({
                "id": "lblToAccountValueEdit",
                "isVisible": true,
                "right": "50dp",
                "skin": "sknMMBlueLabel",
                "text": "My Checking ....2343",
                "textStyle": {},
                "top": "15dp",
                "width": "50%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxToAccountEditFlow.add(lblToAccountEdit, lblToAccountValueEdit);
            var flxToAndFrom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "146dp",
                "id": "flxToAndFrom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxToAndFrom.setDefaultUnit(kony.flex.DP);
            var flxFromAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "72dp",
                "id": "flxFromAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
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
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
                "centerY": "50%",
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
                "skin": "f9f9",
                "top": "0dp",
                "width": "100.00%"
            }, {}, {});
            flxFromAvailableBalance.setDefaultUnit(kony.flex.DP);
            var lblFromBalanceValue = new kony.ui.Label({
                "id": "lblFromBalanceValue",
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
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
            var imgWarning = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgWarning",
                "isVisible": false,
                "left": "148dp",
                "right": "5dp",
                "skin": "slImage",
                "src": "warninground.png",
                "top": "35dp",
                "width": "20dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFromAvailableBalance.add(lblFromBalanceValue, lblFromavailableBal, imgWarning);
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
                "skin": "sknMMBlueLabel",
                "text": "My Checking ....2343",
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgPersonal = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgPersonal",
                "isVisible": true,
                "left": "142dp",
                "right": "10dp",
                "skin": "slImage",
                "src": "personalaccount.png",
                "top": "15dp",
                "width": "20dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFromAccountValue.add(lblFromAccountValue, imgPersonal);
            flxFromAccount.add(lblFromAccount, flxFromImage, flxFromAvailableBalance, flxFromAccountValue);
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "70dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            var flxToAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "72dp",
                "id": "flxToAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
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
                "textStyle": {},
                "top": "15dp",
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
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxToAvailableBalance",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
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
                "skin": "sknMMBlueLabel",
                "text": "My Savings ....1268",
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgIcon = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgIcon",
                "isVisible": true,
                "right": "10dp",
                "skin": "slImage",
                "src": "personalaccount.png",
                "top": "13dp",
                "width": "20dp",
                "zIndex": 1
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
                "height": "72dp",
                "id": "flxToAccountDisabled",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "74dp",
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
                "height": "1dp",
                "id": "flxSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "140dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparator2.setDefaultUnit(kony.flex.DP);
            flxSeparator2.add();
            var flxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "72dp",
                "id": "flxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "146dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmount.setDefaultUnit(kony.flex.DP);
            var lblAmount = new kony.ui.Label({
                "id": "lblAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
                "textStyle": {},
                "top": "15dp",
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
            var lblAmountValue = new kony.ui.Label({
                "id": "lblAmountValue",
                "isVisible": true,
                "right": "50dp",
                "skin": "sknMMBlueLabel",
                "text": "$ 500",
                "textStyle": {},
                "top": "15dp",
                "width": "50%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxAmountImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxAmountImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "11%",
                "zIndex": 2
            }, {}, {});
            flxAmountImage.setDefaultUnit(kony.flex.DP);
            var imgAmountRightArrow = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgAmountRightArrow",
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
            flxAmountImage.add(imgAmountRightArrow);
            var flxAmountDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAmountDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxAmountDetails.setDefaultUnit(kony.flex.DP);
            var lblYouSendValue = new kony.ui.Label({
                "id": "lblYouSendValue",
                "isVisible": true,
                "left": 10,
                "right": "50dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": "You send € 553,84",
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
            var lblExchangeRateValue = new kony.ui.Label({
                "id": "lblExchangeRateValue",
                "isVisible": true,
                "right": "-5dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": "1,00 EUR=0,90 GBP",
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
            flxAmountDetails.add(lblYouSendValue, lblExchangeRateValue);
            flxAmount.add(lblAmount, lblAmountValue, flxAmountImage, flxAmountDetails);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "210dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxToAndFrom.add(flxFromAccount, flxSeperator1, flxToAccount, flxToAccountDisabled, flxSeparator2, flxAmount, flxSeperator);
            var flxConfirmationDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxConfirmationDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxConfirmationDetails.setDefaultUnit(kony.flex.DP);
            var segDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgArrow": "",
                    "lblTitle": "",
                    "lblValue": ""
                }],
                "groupCells": false,
                "id": "segDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxMMReview",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxMMReview": "flxMMReview",
                    "flxRightWrapper": "flxRightWrapper",
                    "flxSepartaor": "flxSepartaor",
                    "imgArrow": "imgArrow",
                    "lblTitle": "lblTitle",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 4
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var flxAttachment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAttachment",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxAttachment.setDefaultUnit(kony.flex.DP);
            var flxWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "48dp",
                "id": "flxWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxWrapper.setDefaultUnit(kony.flex.DP);
            var lblTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.Attachments"),
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
            var flxAddIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "37dp",
                "id": "flxAddIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_a75a591a97b7424985d9759e0eda1679,
                "right": 20,
                "skin": "slFbox",
                "width": "37dp",
                "zIndex": 1
            }, {}, {});
            flxAddIcon.setDefaultUnit(kony.flex.DP);
            var imgAdd = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "imgAdd",
                "isVisible": true,
                "left": "19dp",
                "skin": "slImage",
                "src": "add_attachment.png",
                "top": "15dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAddIcon.add(imgAdd);
            flxWrapper.add(lblTitle, flxAddIcon);
            var flxAttachmentsError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAttachmentsError",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "96%",
                "zIndex": 200
            }, {}, {});
            flxAttachmentsError.setDefaultUnit(kony.flex.DP);
            var lblAttachmentError = new kony.ui.Label({
                "id": "lblAttachmentError",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblee0005SSPReg15px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.AttachmentTypeErrorMsg1"),
                "textStyle": {},
                "top": "12dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAttachmentsError.add(lblAttachmentError);
            var flxAttachmentsList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAttachmentsList",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "16dp",
                "width": "98%",
                "zIndex": 1
            }, {}, {});
            flxAttachmentsList.setDefaultUnit(kony.flex.DP);
            var segAttachmentsList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgRemoveAttachment": "remove_attachment.png",
                    "lblAttachedDocumentID": "Label",
                    "lblAttachment": "Attachment1"
                }, {
                    "imgRemoveAttachment": "remove_attachment.png",
                    "lblAttachedDocumentID": "Label",
                    "lblAttachment": "Attachment2"
                }, {
                    "imgRemoveAttachment": "remove_attachment.png",
                    "lblAttachedDocumentID": "Label",
                    "lblAttachment": "Attachment3"
                }],
                "groupCells": false,
                "id": "segAttachmentsList",
                "isVisible": true,
                "left": "4%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAttachmentList",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAttachmentList": "flxAttachmentList",
                    "flxAttachments": "flxAttachments",
                    "flxRemoveAttachment": "flxRemoveAttachment",
                    "imgRemoveAttachment": "imgRemoveAttachment",
                    "lblAttachedDocumentID": "lblAttachedDocumentID",
                    "lblAttachment": "lblAttachment"
                },
                "width": "92%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_ROW_SELECT,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxAttachmentsList.add(segAttachmentsList);
            flxAttachment.add(flxWrapper, flxAttachmentsError, flxAttachmentsList);
            var flxInsufficientFunds = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxInsufficientFunds",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "ICSknFlxffffffBorder1Px333333",
                "top": "10dp",
                "width": "95%"
            }, {}, {});
            flxInsufficientFunds.setDefaultUnit(kony.flex.DP);
            var imgInsufficientFunds = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgInsufficientFunds",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "warninground.png",
                "top": 10,
                "width": "20dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblInsufficientFunds = new kony.ui.Label({
                "id": "lblInsufficientFunds",
                "isVisible": true,
                "left": 40,
                "right": "20dp",
                "skin": "sknSSPRegular00000048px",
                "text": kony.i18n.getLocalizedString("kony.mb.EuropeTransfers.InsufficientFunds"),
                "textStyle": {},
                "top": 7,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxInsufficientFunds.add(imgInsufficientFunds, lblInsufficientFunds);
            flxConfirmationDetails.add(segDetails, flxAttachment, flxInsufficientFunds);
            flxMMAmount.add(flxToAccountEditFlow, flxToAndFrom, flxConfirmationDetails);
            flxReviewMain.add(flxMMAmount);
            var flxbtnTransfer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "70dp",
                "id": "flxbtnTransfer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxbtnTransfer.setDefaultUnit(kony.flex.DP);
            var flxSepartaor = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepartaor",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSepartaor.setDefaultUnit(kony.flex.DP);
            flxSepartaor.add();
            var btnTransfer = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnTransfer",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
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
            flxbtnTransfer.add(flxSepartaor, btnTransfer);
            var flxConfirmationPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxConfirmationPopUp",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxConfirmationPopUp.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "centerY": "50.00%",
                "clipBounds": true,
                "height": "147dp",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxffffffB",
                "width": "76.80%",
                "zIndex": 200
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var lblMsg = new kony.ui.Label({
                "bottom": "23dp",
                "centerX": "50.00%",
                "centerY": 50,
                "id": "lblMsg",
                "isVisible": true,
                "skin": "sknlbl424242SSPR15dp",
                "text": "Are you sure, do you want to remove this attachment?",
                "textStyle": {},
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxBtns = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "52dp",
                "id": "flxBtns",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "CopyslFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBtns.setDefaultUnit(kony.flex.DP);
            var flxSep1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep1.setDefaultUnit(kony.flex.DP);
            flxSep1.add();
            var flxBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBottom",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%"
            }, {}, {});
            flxBottom.setDefaultUnit(kony.flex.DP);
            var flxYes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxYes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "49%",
                "zIndex": 1
            }, {}, {});
            flxYes.setDefaultUnit(kony.flex.DP);
            var lblYes = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "id": "lblYes",
                "isVisible": true,
                "skin": "sknlbl004B95SSPR15dp",
                "text": kony.i18n.getLocalizedString("kony.mb.common.AlertYes"),
                "textStyle": {},
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxYes.add(lblYes);
            var flxSep2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSep2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3op50",
                "top": "0",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxSep2.setDefaultUnit(kony.flex.DP);
            flxSep2.add();
            var flxNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "49%",
                "zIndex": 1
            }, {}, {});
            flxNo.setDefaultUnit(kony.flex.DP);
            var lblNo = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "id": "lblNo",
                "isVisible": true,
                "skin": "sknlbl004B95SSPR15dp",
                "text": kony.i18n.getLocalizedString("kony.mb.common.AlertNo"),
                "textStyle": {},
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNo.add(lblNo);
            flxBottom.add(flxYes, flxSep2, flxNo);
            flxBtns.add(flxSep1, flxBottom);
            flxContainer.add(lblMsg, flxBtns);
            flxConfirmationPopUp.add(flxContainer);
            var flxActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxActions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxActions.setDefaultUnit(kony.flex.DP);
            var flxActionSheetContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "30dp",
                "clipBounds": true,
                "id": "flxActionSheetContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5%",
                "maxHeight": "100%",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxActionSheetContent.setDefaultUnit(kony.flex.DP);
            var flxActionSheetOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxActionSheetOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFboxf9f9f9",
                "top": "-3dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxActionSheetOptions.setDefaultUnit(kony.flex.DP);
            var flxCamera = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "57dp",
                "id": "flxCamera",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxCamera.setDefaultUnit(kony.flex.DP);
            var Camera = new kony.ui.Camera({
                "height": "57dp",
                "id": "Camera",
                "isVisible": true,
                "left": "0",
                "skin": "sknBtn007affSSPSemiBold",
                "text": "Camera",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
                "enableOverlay": false,
                "nativeUserInterface": true
            });
            flxCamera.add(Camera);
            var flxPhoto = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "57dp",
                "id": "flxPhoto",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPhoto.setDefaultUnit(kony.flex.DP);
            var flxSeperator01 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator01",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlx7e7e7e",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator01.setDefaultUnit(kony.flex.DP);
            flxSeperator01.add();
            var btnPhoto = new kony.ui.Button({
                "focusSkin": "sknBtn007affSSPSemiBold",
                "height": "57dp",
                "id": "btnPhoto",
                "isVisible": true,
                "left": "0.00%",
                "skin": "sknBtn007affSSPSemiBold",
                "text": "Photo & Video Library",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxPhoto.add(flxSeperator01, btnPhoto);
            var flxDocument = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "57dp",
                "id": "flxDocument",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDocument.setDefaultUnit(kony.flex.DP);
            var btnDocument = new kony.ui.Button({
                "height": "57dp",
                "id": "btnDocument",
                "isVisible": true,
                "left": "0.00%",
                "skin": "sknBtn007affSSPSemiBold",
                "text": "Document",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var flxSeperator02 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator02",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlx7e7e7e",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator02.setDefaultUnit(kony.flex.DP);
            flxSeperator02.add();
            flxDocument.add(btnDocument, flxSeperator02);
            flxActionSheetOptions.add(flxCamera, flxPhoto, flxDocument);
            var flxCancel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCancel",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "konympassknFlxFFFFFFBGRounded10",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCancel.setDefaultUnit(kony.flex.DP);
            var btnClose = new kony.ui.Button({
                "height": "57dp",
                "id": "btnClose",
                "isVisible": true,
                "left": "0.00%",
                "skin": "sknBtn007affSSPSemiBold",
                "text": "Cancel",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxCancel.add(btnClose);
            flxActionSheetContent.add(flxActionSheetOptions, flxCancel);
            flxActions.add(flxActionSheetContent);
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
            this.add(flxHeader, flxReviewMain, flxbtnTransfer, flxConfirmationPopUp, flxActions, flxPopup);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_de7b3a15f82f4de9b209146e21f81c94,
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
            "action": controller.AS_BarButtonItem_e9e88d82512641978dd4b10f422712d9,
            "metaData": {
                "title": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
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
            "addWidgets": addWidgetsfrmEuropeVerifyTransferDetails,
            "enabledForIdleTimeout": true,
            "id": "frmEuropeVerifyTransferDetails",
            "init": controller.AS_Form_j173ed6bc42d4113be2edeb845b0b17a,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_c2a833f6e3c2452693fa1daa165f4de5,
            "preShow": function(eventobject) {
                controller.AS_Form_ad526e81f1054b65bc4aae99d71ca37a(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.MM.VerifyTransferDetails")
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