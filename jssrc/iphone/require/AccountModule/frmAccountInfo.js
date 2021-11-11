define("AccountModule/frmAccountInfo", function() {
    return function(controller) {
        function addWidgetsfrmAccountInfo() {
            this.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "ICSknFlxffffff",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
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
                        "isVisible": true,
                        "text": "Edit"
                    },
                    "flxHeaderShadow": {
                        "zIndex": 100
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
                        "centerY": "50%",
                        "isVisible": true,
                        "text": "Family Checking Account"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_d429bfcf2e0d4c6dacef6a9ae7a9612d;
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMainContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxContainerCheckingAcc = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxContainerCheckingAcc",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContainerCheckingAcc.setDefaultUnit(kony.flex.DP);
            var flxBankDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxBankDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBankDetails.setDefaultUnit(kony.flex.DP);
            var imgBank = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgBank",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "bankofamerica.png",
                "top": "27dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBankName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBankName",
                "isVisible": true,
                "left": "61dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Bank of America",
                "textStyle": {},
                "top": "13dp",
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
            flxBankDetails.add(imgBank, lblBankName);
            var flxBalDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxBalDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalDetails.setDefaultUnit(kony.flex.DP);
            var lblBalanceDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBalanceDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.accountSummary"),
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
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxShadowBottomInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxShadowBottomInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottom",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowBottomInfo.setDefaultUnit(kony.flex.DP);
            flxShadowBottomInfo.add();
            var flxTypeOneShadowInfo1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxTypeOneShadowInfo1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadowInfo1.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadowInfo1.add();
            flxBalDetails.add(lblBalanceDetails, flxShadow, flxShadowBottomInfo, flxTypeOneShadowInfo1);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var flxBalDetContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBalDetContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalDetContainer.setDefaultUnit(kony.flex.DP);
            var lblAvailBal = new kony.ui.Label({
                "id": "lblAvailBal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
                "textStyle": {},
                "top": "20dp",
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
            var lblCurrBal = new kony.ui.Label({
                "id": "lblCurrBal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.currBal"),
                "textStyle": {},
                "top": "52dp",
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
            var lblPendingDeposit = new kony.ui.Label({
                "id": "lblPendingDeposit",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.pendingDeposit"),
                "textStyle": {},
                "top": "84dp",
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
            var lblPendingWithdraw = new kony.ui.Label({
                "id": "lblPendingWithdraw",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.pendingWithdrawal"),
                "textStyle": {},
                "top": "116dp",
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
            var lblBlockedAmount = new kony.ui.Label({
                "id": "lblBlockedAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.blockedAmout"),
                "textStyle": {},
                "top": "148dp",
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
            var lblAvailBalValue = new kony.ui.Label({
                "id": "lblAvailBalValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "-$00000.00",
                "textStyle": {},
                "top": "20dp",
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
            var lblCurrBalValue = new kony.ui.Label({
                "id": "lblCurrBalValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "-$000.0",
                "textStyle": {},
                "top": "52dp",
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
            var lblPendingDepValue = new kony.ui.Label({
                "id": "lblPendingDepValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "-$000.0",
                "textStyle": {},
                "top": "84dp",
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
            var lblWithdrawValue = new kony.ui.Label({
                "id": "lblWithdrawValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "-$000.0",
                "textStyle": {},
                "top": "116dp",
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
            var lblBlockedAmountValue = new kony.ui.Label({
                "id": "lblBlockedAmountValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$000.0",
                "textStyle": {},
                "top": "148dp",
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
            var lblOverdraftLimit = new kony.ui.Label({
                "id": "lblOverdraftLimit",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.overdraftLimit"),
                "textStyle": {},
                "top": "180dp",
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
            var lblOverdraftLimitValue = new kony.ui.Label({
                "bottom": "20dp",
                "id": "lblOverdraftLimitValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$000.0",
                "textStyle": {},
                "top": "180dp",
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
            flxBalDetContainer.add(lblAvailBal, lblCurrBal, lblPendingDeposit, lblPendingWithdraw, lblBlockedAmount, lblAvailBalValue, lblCurrBalValue, lblPendingDepValue, lblWithdrawValue, lblBlockedAmountValue, lblOverdraftLimit, lblOverdraftLimitValue);
            var flxIntDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxIntDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIntDetails.setDefaultUnit(kony.flex.DP);
            var lblIntDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblIntDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.interestDetails"),
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
            var flxShadow1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadow1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadow1.setDefaultUnit(kony.flex.DP);
            flxShadow1.add();
            var flxShadowBottomInfo1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxShadowBottomInfo1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottom",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowBottomInfo1.setDefaultUnit(kony.flex.DP);
            flxShadowBottomInfo1.add();
            var flxTypeOneShadowInfo3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxTypeOneShadowInfo3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadowInfo3.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadowInfo3.add();
            flxIntDetails.add(lblIntDetails, flxShadow1, flxShadowBottomInfo1, flxTypeOneShadowInfo3);
            var flxSeperator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator4.setDefaultUnit(kony.flex.DP);
            flxSeperator4.add();
            var flxIntDetContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxIntDetContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIntDetContainer.setDefaultUnit(kony.flex.DP);
            var lblPaidOn = new kony.ui.Label({
                "id": "lblPaidOn",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.paidOn"),
                "textStyle": {},
                "top": "20dp",
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
            var lblLastPaidInt = new kony.ui.Label({
                "id": "lblLastPaidInt",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.lastPaidInterest"),
                "textStyle": {},
                "top": "52dp",
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
            var lblCreditInterestRate = new kony.ui.Label({
                "id": "lblCreditInterestRate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.creditIntRate"),
                "textStyle": {},
                "top": "84dp",
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
            var lblPaidInterestYTD = new kony.ui.Label({
                "bottom": "20dp",
                "id": "lblPaidInterestYTD",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.paidInterest"),
                "textStyle": {},
                "top": "116dp",
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
            var lblPaidOnValue = new kony.ui.Label({
                "id": "lblPaidOnValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "03/20/2020",
                "textStyle": {},
                "top": "20dp",
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
            var lblLastPaidIntValue = new kony.ui.Label({
                "id": "lblLastPaidIntValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "-$000.0",
                "textStyle": {},
                "top": "52dp",
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
            var lblCreditInterestRateValue = new kony.ui.Label({
                "id": "lblCreditInterestRateValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "0%",
                "textStyle": {},
                "top": "84dp",
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
            var lblPaidInterestYTDValue = new kony.ui.Label({
                "bottom": "20dp",
                "id": "lblPaidInterestYTDValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "-$000.0",
                "textStyle": {},
                "top": "116dp",
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
            flxIntDetContainer.add(lblPaidOn, lblLastPaidInt, lblCreditInterestRate, lblPaidInterestYTD, lblPaidOnValue, lblLastPaidIntValue, lblCreditInterestRateValue, lblPaidInterestYTDValue);
            var flxAccDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAccDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccDetails.setDefaultUnit(kony.flex.DP);
            var lblAccountDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAccountDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountInfo"),
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
            var flxShadow2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadow2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadow2.setDefaultUnit(kony.flex.DP);
            flxShadow2.add();
            var flxShadowBottomInfo2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxShadowBottomInfo2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottom",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowBottomInfo2.setDefaultUnit(kony.flex.DP);
            flxShadowBottomInfo2.add();
            var flxTypeOneShadowInfo2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxTypeOneShadowInfo2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadowInfo2.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadowInfo2.add();
            flxAccDetails.add(lblAccountDetails, flxShadow2, flxShadowBottomInfo2, flxTypeOneShadowInfo2);
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            var flxAccDetailContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAccDetailContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxAccDetailContainer.setDefaultUnit(kony.flex.DP);
            var flxAccountNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxAccountNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "14dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountNumber.setDefaultUnit(kony.flex.DP);
            var lblAccNum = new kony.ui.Label({
                "id": "lblAccNum",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.accNumber"),
                "textStyle": {},
                "top": "10dp",
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
            var lblAccNoValue = new kony.ui.Label({
                "id": "lblAccNoValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            var flxAccNoToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "65.72%",
                "clipBounds": true,
                "height": "75%",
                "id": "flxAccNoToggle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "146dp",
                "skin": "slFbox",
                "top": "40dp",
                "width": "33dp",
                "zIndex": 1
            }, {}, {});
            flxAccNoToggle.setDefaultUnit(kony.flex.DP);
            var imgAccNoToggle = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgAccNoToggle",
                "isVisible": true,
                "skin": "slImage",
                "src": "view.png",
                "width": "17dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccNoToggle.add(imgAccNoToggle);
            flxAccountNumber.add(lblAccNum, lblAccNoValue, flxAccNoToggle);
            var flxRoutingNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxRoutingNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoutingNumber.setDefaultUnit(kony.flex.DP);
            var lblRoutingNo = new kony.ui.Label({
                "id": "lblRoutingNo",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.routingNumber"),
                "textStyle": {},
                "top": "10dp",
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
            var lblRoutingNoValue = new kony.ui.Label({
                "id": "lblRoutingNoValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            var flxRouteNoToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxRouteNoToggle",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "33dp",
                "zIndex": 1
            }, {}, {});
            flxRouteNoToggle.setDefaultUnit(kony.flex.DP);
            var imgRouteNoToggle = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgRouteNoToggle",
                "isVisible": true,
                "skin": "slImage",
                "src": "view.png",
                "width": "17dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRouteNoToggle.add(imgRouteNoToggle);
            flxRoutingNumber.add(lblRoutingNo, lblRoutingNoValue, flxRouteNoToggle);
            var flxIBAN = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxIBAN",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIBAN.setDefaultUnit(kony.flex.DP);
            var lblIBAN = new kony.ui.Label({
                "id": "lblIBAN",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                "textStyle": {},
                "top": "10dp",
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
            var lblIBANValue = new kony.ui.Label({
                "id": "lblIBANValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxIBAN.add(lblIBAN, lblIBANValue);
            var flxSwiftCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxSwiftCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSwiftCode.setDefaultUnit(kony.flex.DP);
            var lblSwiftCode = new kony.ui.Label({
                "id": "lblSwiftCode",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.swiftCode"),
                "textStyle": {},
                "top": "10dp",
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
            var lblSwiftCodeValue = new kony.ui.Label({
                "id": "lblSwiftCodeValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxSwiftCode.add(lblSwiftCode, lblSwiftCodeValue);
            var flxAccType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxAccType",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccType.setDefaultUnit(kony.flex.DP);
            var lblAccType = new kony.ui.Label({
                "id": "lblAccType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountType"),
                "textStyle": {},
                "top": "10dp",
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
            var lblAccTypeValue = new kony.ui.Label({
                "id": "lblAccTypeValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Personal Checking Account",
                "textStyle": {},
                "top": "10dp",
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
            flxAccType.add(lblAccType, lblAccTypeValue);
            var flxAccHolder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxAccHolder",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccHolder.setDefaultUnit(kony.flex.DP);
            var lblAccHolder = new kony.ui.Label({
                "id": "lblAccHolder",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.customerName"),
                "textStyle": {},
                "top": "10dp",
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
            var lblAccHoldrValue = new kony.ui.Label({
                "id": "lblAccHoldrValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxAccHolder.add(lblAccHolder, lblAccHoldrValue);
            var flxJointAccHolder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxJointAccHolder",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxJointAccHolder.setDefaultUnit(kony.flex.DP);
            var lblJointAccHolder = new kony.ui.Label({
                "id": "lblJointAccHolder",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.jointholder1"),
                "textStyle": {},
                "top": "10dp",
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
            var lblJointAccHoldrValue = new kony.ui.Label({
                "id": "lblJointAccHoldrValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxJointAccHolder.add(lblJointAccHolder, lblJointAccHoldrValue);
            var flxjointAccountHolder2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxjointAccountHolder2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxjointAccountHolder2.setDefaultUnit(kony.flex.DP);
            var lblJointAccountHolder2 = new kony.ui.Label({
                "id": "lblJointAccountHolder2",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.jointholder2"),
                "textStyle": {},
                "top": "10dp",
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
            var lblJointAccountHolderValue2 = new kony.ui.Label({
                "id": "lblJointAccountHolderValue2",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxjointAccountHolder2.add(lblJointAccountHolder2, lblJointAccountHolderValue2);
            var flxJointAccountHolder3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxJointAccountHolder3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxJointAccountHolder3.setDefaultUnit(kony.flex.DP);
            var lblJointAccountHolder3 = new kony.ui.Label({
                "id": "lblJointAccountHolder3",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.jointholder3"),
                "textStyle": {},
                "top": "10dp",
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
            var lblJointAccountHolderValue3 = new kony.ui.Label({
                "id": "lblJointAccountHolderValue3",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxJointAccountHolder3.add(lblJointAccountHolder3, lblJointAccountHolderValue3);
            var flxJointAccountHolder4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxJointAccountHolder4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxJointAccountHolder4.setDefaultUnit(kony.flex.DP);
            var lblJointAccountHolder4 = new kony.ui.Label({
                "id": "lblJointAccountHolder4",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.jointholder4"),
                "textStyle": {},
                "top": "10dp",
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
            var lblJointAccountHolderValue4 = new kony.ui.Label({
                "id": "lblJointAccountHolderValue4",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxJointAccountHolder4.add(lblJointAccountHolder4, lblJointAccountHolderValue4);
            var flxJointAccountHolder5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxJointAccountHolder5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxJointAccountHolder5.setDefaultUnit(kony.flex.DP);
            var lblJointAccountHolder5 = new kony.ui.Label({
                "id": "lblJointAccountHolder5",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.jointholder5"),
                "textStyle": {},
                "top": "10dp",
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
            var lblJointAccountHolderValue5 = new kony.ui.Label({
                "id": "lblJointAccountHolderValue5",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxJointAccountHolder5.add(lblJointAccountHolder5, lblJointAccountHolderValue5);
            var flxAccNickName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxAccNickName",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccNickName.setDefaultUnit(kony.flex.DP);
            var lblAccNickName = new kony.ui.Label({
                "id": "lblAccNickName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.AccNickName"),
                "textStyle": {},
                "top": "10dp",
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
            var lblAccNickNameVal = new kony.ui.Label({
                "id": "lblAccNickNameVal",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxAccNickName.add(lblAccNickName, lblAccNickNameVal);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "19dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            flxAccDetailContainer.add(flxAccountNumber, flxRoutingNumber, flxIBAN, flxSwiftCode, flxAccType, flxAccHolder, flxJointAccHolder, flxjointAccountHolder2, flxJointAccountHolder3, flxJointAccountHolder4, flxJointAccountHolder5, flxAccNickName, flxSeperator3);
            var btnCallBank = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnCallBank",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.callBank"),
                "top": "20dp",
                "width": "88.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnMsgBank = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnMsgBank",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.msgBank"),
                "top": "20dp",
                "width": "88.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxContainerCheckingAcc.add(flxBankDetails, flxBalDetails, flxSeperator, flxBalDetContainer, flxIntDetails, flxSeperator4, flxIntDetContainer, flxAccDetails, flxSeperator2, flxAccDetailContainer, btnCallBank, btnMsgBank);
            var flxExternalAccountContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxExternalAccountContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExternalAccountContainer.setDefaultUnit(kony.flex.DP);
            var flxExternalAccountBankDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxExternalAccountBankDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExternalAccountBankDetails.setDefaultUnit(kony.flex.DP);
            var imgExternalAccountBank = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgExternalAccountBank",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "bankofamerica.png",
                "top": "27dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblExternalAccountBankName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblExternalAccountBankName",
                "isVisible": true,
                "left": "61dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Bank of America",
                "textStyle": {},
                "top": "13dp",
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
            var lblExpiryDetails = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblExpiryDetails",
                "isVisible": true,
                "maxNumberOfLines": 5,
                "right": "0dp",
                "skin": "sknlblFF5D6E",
                "text": "Your connection has expired",
                "textStyle": {},
                "top": "13dp",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxExternalAccountBankDetails.add(imgExternalAccountBank, lblExternalAccountBankName, lblExpiryDetails);
            var flxExternalAccountBalDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxExternalAccountBalDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExternalAccountBalDetails.setDefaultUnit(kony.flex.DP);
            var lblExternalAccountBalanceDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblExternalAccountBalanceDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.balDetails"),
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
            var flxExternalAccountShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxExternalAccountShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxExternalAccountShadow.setDefaultUnit(kony.flex.DP);
            flxExternalAccountShadow.add();
            flxExternalAccountBalDetails.add(lblExternalAccountBalanceDetails, flxExternalAccountShadow);
            var flxExternalAccountSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxExternalAccountSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxExternalAccountSeperator.setDefaultUnit(kony.flex.DP);
            flxExternalAccountSeperator.add();
            var flxExternalAccountBalDetContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxExternalAccountBalDetContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExternalAccountBalDetContainer.setDefaultUnit(kony.flex.DP);
            var lblExternalAccountAvailBal = new kony.ui.Label({
                "id": "lblExternalAccountAvailBal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
                "textStyle": {},
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 1],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblExternalAccountAvailBalValue = new kony.ui.Label({
                "id": "lblExternalAccountAvailBalValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "-$00000.00",
                "textStyle": {},
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 1],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxExternalAccountBalDetContainer.add(lblExternalAccountAvailBal, lblExternalAccountAvailBalValue);
            var flxExternalAccountDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxExternalAccountDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExternalAccountDetails.setDefaultUnit(kony.flex.DP);
            var lblExternalAccountDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblExternalAccountDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountDetails"),
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
            var flxExternalAccountShadow2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxExternalAccountShadow2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxExternalAccountShadow2.setDefaultUnit(kony.flex.DP);
            flxExternalAccountShadow2.add();
            flxExternalAccountDetails.add(lblExternalAccountDetails, flxExternalAccountShadow2);
            var flxExternalAccountSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxExternalAccountSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxExternalAccountSeperator2.setDefaultUnit(kony.flex.DP);
            flxExternalAccountSeperator2.add();
            var flxExternalAccountDetailContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxExternalAccountDetailContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxExternalAccountDetailContainer.setDefaultUnit(kony.flex.DP);
            var flxExternalAccountNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxExternalAccountNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "14dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExternalAccountNumber.setDefaultUnit(kony.flex.DP);
            var lblExternalAccountNum = new kony.ui.Label({
                "id": "lblExternalAccountNum",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.accNumber"),
                "textStyle": {},
                "top": "10dp",
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
            var lblExternalAccountNoValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblExternalAccountNoValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            var flxExternalAccountNoToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxExternalAccountNoToggle",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "33dp",
                "zIndex": 1
            }, {}, {});
            flxExternalAccountNoToggle.setDefaultUnit(kony.flex.DP);
            var imgExternalAccountNoToggle = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgExternalAccountNoToggle",
                "isVisible": true,
                "skin": "slImage",
                "src": "view.png",
                "width": "17dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxExternalAccountNoToggle.add(imgExternalAccountNoToggle);
            flxExternalAccountNumber.add(lblExternalAccountNum, lblExternalAccountNoValue, flxExternalAccountNoToggle);
            var flxIBANExternalAcc = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxIBANExternalAcc",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIBANExternalAcc.setDefaultUnit(kony.flex.DP);
            var lblIBANExternalAcc = new kony.ui.Label({
                "id": "lblIBANExternalAcc",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                "textStyle": {},
                "top": "10dp",
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
            var lblIBANValueExternalAcc = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblIBANValueExternalAcc",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxIBANExternalAcc.add(lblIBANExternalAcc, lblIBANValueExternalAcc);
            var flxExternalAccountType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxExternalAccountType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExternalAccountType.setDefaultUnit(kony.flex.DP);
            var lblExternalAccountType = new kony.ui.Label({
                "id": "lblExternalAccountType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountType"),
                "textStyle": {},
                "top": "10dp",
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
            var lblExternalAccountTypeValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblExternalAccountTypeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxExternalAccountType.add(lblExternalAccountType, lblExternalAccountTypeValue);
            var flxExternalAccountHolder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxExternalAccountHolder",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExternalAccountHolder.setDefaultUnit(kony.flex.DP);
            var lblExternalAccountHolder = new kony.ui.Label({
                "id": "lblExternalAccountHolder",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.accountHolder"),
                "textStyle": {},
                "top": "10dp",
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
            var lblExternalAccountHoldrValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblExternalAccountHoldrValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxExternalAccountHolder.add(lblExternalAccountHolder, lblExternalAccountHoldrValue);
            var flxExternalAccountBankName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxExternalAccountBankName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExternalAccountBankName.setDefaultUnit(kony.flex.DP);
            var lblExternalAccountBankNameKey = new kony.ui.Label({
                "id": "lblExternalAccountBankNameKey",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.externalAccounts.bankName"),
                "textStyle": {},
                "top": "10dp",
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
            var lblExternalAccountBankNameValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblExternalAccountBankNameValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxExternalAccountBankName.add(lblExternalAccountBankNameKey, lblExternalAccountBankNameValue);
            var flxExternalAccountNickName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "14dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxExternalAccountNickName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExternalAccountNickName.setDefaultUnit(kony.flex.DP);
            var lblExternalAccountNickName = new kony.ui.Label({
                "id": "lblExternalAccountNickName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.AccNickName"),
                "textStyle": {},
                "top": "10dp",
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
            var lblExternalAccountNickNameVal = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblExternalAccountNickNameVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxExternalAccountNickName.add(lblExternalAccountNickName, lblExternalAccountNickNameVal);
            flxExternalAccountDetailContainer.add(flxExternalAccountNumber, flxIBANExternalAcc, flxExternalAccountType, flxExternalAccountHolder, flxExternalAccountBankName, flxExternalAccountNickName);
            var flxbtmSperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxbtmSperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "1dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxbtmSperator.setDefaultUnit(kony.flex.DP);
            flxbtmSperator.add();
            var btnRenew = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnRenew",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": "Renew Connection",
                "top": "20dp",
                "width": "88.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxExternalAccountContainer.add(flxExternalAccountBankDetails, flxExternalAccountBalDetails, flxExternalAccountSeperator, flxExternalAccountBalDetContainer, flxExternalAccountDetails, flxExternalAccountSeperator2, flxExternalAccountDetailContainer, flxbtmSperator, btnRenew);
            var flxContainerCreditCard = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxContainerCreditCard",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContainerCreditCard.setDefaultUnit(kony.flex.DP);
            var flxBankDetailsCC = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxBankDetailsCC",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBankDetailsCC.setDefaultUnit(kony.flex.DP);
            var imgBankCC = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgBankCC",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "bankofamerica.png",
                "top": "27dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBankNameCC = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBankNameCC",
                "isVisible": true,
                "left": "61dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Bank of America",
                "textStyle": {},
                "top": "13dp",
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
            flxBankDetailsCC.add(imgBankCC, lblBankNameCC);
            var flxBalDetailsCC = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxBalDetailsCC",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalDetailsCC.setDefaultUnit(kony.flex.DP);
            var lblBalanceDetailsCC = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBalanceDetailsCC",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.balDetails"),
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
            var flxShadowCC = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadowCC",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadowCC.setDefaultUnit(kony.flex.DP);
            flxShadowCC.add();
            var flxTypeOneShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxTypeOneShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadow.add();
            var flxShadowBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxShadowBottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottom",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowBottom.setDefaultUnit(kony.flex.DP);
            flxShadowBottom.add();
            flxBalDetailsCC.add(lblBalanceDetailsCC, flxShadowCC, flxTypeOneShadow, flxShadowBottom);
            var flxSeperatorCC = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorCC",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorCC.setDefaultUnit(kony.flex.DP);
            flxSeperatorCC.add();
            var flxBalSummary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "70dp",
                "id": "flxBalSummary",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalSummary.setDefaultUnit(kony.flex.DP);
            var flxOutstandingBal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxOutstandingBal",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 110
            }, {}, {});
            flxOutstandingBal.setDefaultUnit(kony.flex.DP);
            var lblOutstandingBalance = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblOutstandingBalance",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal"),
                "textStyle": {},
                "top": "5dp",
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
            var lblOutstandingBalValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblOutstandingBalValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl0a78d1SSP30px",
                "text": "$0,000.00",
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
            flxOutstandingBal.add(lblOutstandingBalance, lblOutstandingBalValue);
            var flxUpcomingBal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxUpcomingBal",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "50%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 110
            }, {}, {});
            flxUpcomingBal.setDefaultUnit(kony.flex.DP);
            var lblUpcomingBal = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblUpcomingBal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.dueAmt"),
                "textStyle": {},
                "top": "5dp",
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
            var lblUpcomingBalvalue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblUpcomingBalvalue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl0a78d1SSP30px",
                "text": "$000.00",
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
            var flxDueDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "flxDueDate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxDueDate.setDefaultUnit(kony.flex.DP);
            var lblDueDateValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDueDateValue",
                "isVisible": true,
                "right": 0,
                "skin": "sknLbl727272SSPReg22px",
                "text": "12/01/2018",
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
            var lblDueDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDueDate",
                "isVisible": true,
                "right": 5,
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.dueDate"),
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
            flxDueDate.add(lblDueDateValue, lblDueDate);
            flxUpcomingBal.add(lblUpcomingBal, lblUpcomingBalvalue, flxDueDate);
            flxBalSummary.add(flxOutstandingBal, flxUpcomingBal);
            var flxDividerCC = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxDividerCC",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxDividerCC.setDefaultUnit(kony.flex.DP);
            flxDividerCC.add();
            var flxBalDetContainerCC = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBalDetContainerCC",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalDetContainerCC.setDefaultUnit(kony.flex.DP);
            var lblCurrentBalance = new kony.ui.Label({
                "id": "lblCurrentBalance",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availCred"),
                "textStyle": {},
                "top": "20dp",
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
            var lblCreditLmt = new kony.ui.Label({
                "id": "lblCreditLmt",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.creditLimit"),
                "textStyle": {},
                "top": "52dp",
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
            var lblRwdBal = new kony.ui.Label({
                "id": "lblRwdBal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.rewrdBal"),
                "textStyle": {},
                "top": "212dp",
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
            var lblntRate = new kony.ui.Label({
                "bottom": "20dp",
                "id": "lblntRate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.interestRate"),
                "textStyle": {},
                "top": "244dp",
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
            var lblCurrentBalanceValue = new kony.ui.Label({
                "id": "lblCurrentBalanceValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$00000.00",
                "textStyle": {},
                "top": "20dp",
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
            var lblCreditLmtValue = new kony.ui.Label({
                "id": "lblCreditLmtValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$000.0",
                "textStyle": {},
                "top": "52dp",
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
            var lblRwdBalValue = new kony.ui.Label({
                "id": "lblRwdBalValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "212dp",
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
            var lblntRateValue = new kony.ui.Label({
                "bottom": "20dp",
                "id": "lblntRateValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "0%",
                "textStyle": {},
                "top": "244dp",
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
            var lblLastStmtBal = new kony.ui.Label({
                "id": "lblLastStmtBal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.account.lastStatementBalance"),
                "textStyle": {},
                "top": "84dp",
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
            var lblLastStmtBalValue = new kony.ui.Label({
                "id": "lblLastStmtBalValue",
                "isVisible": true,
                "right": 20,
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "84dp",
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
            var lblMinDueAmnt = new kony.ui.Label({
                "id": "lblMinDueAmnt",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.account.minimumDueAmount"),
                "textStyle": {},
                "top": "116dp",
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
            var lblMinDueAmntValue = new kony.ui.Label({
                "id": "lblMinDueAmntValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "116dp",
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
            var lblLastPmtAmnt = new kony.ui.Label({
                "id": "lblLastPmtAmnt",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.account.lastPaymentAmount"),
                "textStyle": {},
                "top": "148dp",
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
            var lblLastPmtAmntValue = new kony.ui.Label({
                "id": "lblLastPmtAmntValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "148dp",
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
            var lblLstPmntDate = new kony.ui.Label({
                "id": "lblLstPmntDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.account.lastPaymentDate"),
                "textStyle": {},
                "top": "180dp",
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
            var lblLstPmntDateValue = new kony.ui.Label({
                "id": "lblLstPmntDateValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "180dp",
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
            flxBalDetContainerCC.add(lblCurrentBalance, lblCreditLmt, lblRwdBal, lblntRate, lblCurrentBalanceValue, lblCreditLmtValue, lblRwdBalValue, lblntRateValue, lblLastStmtBal, lblLastStmtBalValue, lblMinDueAmnt, lblMinDueAmntValue, lblLastPmtAmnt, lblLastPmtAmntValue, lblLstPmntDate, lblLstPmntDateValue);
            var flxAccDetailsCC = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAccDetailsCC",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccDetailsCC.setDefaultUnit(kony.flex.DP);
            var lblAccountDetailsCC = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAccountDetailsCC",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountDetails"),
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
            var flxShadowCC1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadowCC1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadowCC1.setDefaultUnit(kony.flex.DP);
            flxShadowCC1.add();
            var flxTypeOneShadow1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxTypeOneShadow1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadow1.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadow1.add();
            var flxShadowBottom1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxShadowBottom1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottom",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowBottom1.setDefaultUnit(kony.flex.DP);
            flxShadowBottom1.add();
            flxAccDetailsCC.add(lblAccountDetailsCC, flxShadowCC1, flxTypeOneShadow1, flxShadowBottom1);
            var flxSeperatorCC1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorCC1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorCC1.setDefaultUnit(kony.flex.DP);
            flxSeperatorCC1.add();
            var flxAccDetailContainerCC = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAccDetailContainerCC",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxAccDetailContainerCC.setDefaultUnit(kony.flex.DP);
            var flxAccountNumberCC = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAccountNumberCC",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "14dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountNumberCC.setDefaultUnit(kony.flex.DP);
            var lblAccNumCC = new kony.ui.Label({
                "id": "lblAccNumCC",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.accNumber"),
                "textStyle": {},
                "top": "10dp",
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
            var lblAccNoValueCC = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblAccNoValueCC",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            var flxAccNoToggleCC = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxAccNoToggleCC",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "33dp",
                "zIndex": 1
            }, {}, {});
            flxAccNoToggleCC.setDefaultUnit(kony.flex.DP);
            var imgAccNoToggleCC = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgAccNoToggleCC",
                "isVisible": true,
                "skin": "slImage",
                "src": "view.png",
                "width": "17dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccNoToggleCC.add(imgAccNoToggleCC);
            flxAccountNumberCC.add(lblAccNumCC, lblAccNoValueCC, flxAccNoToggleCC);
            var flxIBANAccDetail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxIBANAccDetail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIBANAccDetail.setDefaultUnit(kony.flex.DP);
            var lblIBANAccDetail = new kony.ui.Label({
                "id": "lblIBANAccDetail",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                "textStyle": {},
                "top": "10dp",
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
            var lblIBANValueAccDetail = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblIBANValueAccDetail",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxIBANAccDetail.add(lblIBANAccDetail, lblIBANValueAccDetail);
            var flxCardType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxCardType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCardType.setDefaultUnit(kony.flex.DP);
            var lblCardType = new kony.ui.Label({
                "id": "lblCardType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.cardType"),
                "textStyle": {},
                "top": "10dp",
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
            var lblCardTypeValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblCardTypeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxCardType.add(lblCardType, lblCardTypeValue);
            var flxCardHolderName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxCardHolderName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCardHolderName.setDefaultUnit(kony.flex.DP);
            var lblCardHolderName = new kony.ui.Label({
                "id": "lblCardHolderName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.cardHolderName"),
                "textStyle": {},
                "top": "10dp",
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
            var lblCardHolderNameVal = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblCardHolderNameVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxCardHolderName.add(lblCardHolderName, lblCardHolderNameVal);
            var flxCardIssueDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxCardIssueDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCardIssueDate.setDefaultUnit(kony.flex.DP);
            var lblCardIssueDate = new kony.ui.Label({
                "id": "lblCardIssueDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.cardIssueDate"),
                "textStyle": {},
                "top": "10dp",
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
            var lblCardIssueDateVal = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblCardIssueDateVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "09/20/2018",
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
            flxCardIssueDate.add(lblCardIssueDate, lblCardIssueDateVal);
            var flxNickName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "14dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxNickName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNickName.setDefaultUnit(kony.flex.DP);
            var lblNickName = new kony.ui.Label({
                "id": "lblNickName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.AccNickName"),
                "textStyle": {},
                "top": "10dp",
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
            var lblNickNameValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblNickNameValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxNickName.add(lblNickName, lblNickNameValue);
            flxAccDetailContainerCC.add(flxAccountNumberCC, flxIBANAccDetail, flxCardType, flxCardHolderName, flxCardIssueDate, flxNickName);
            var flxSeperatorCC3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorCC3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorCC3.setDefaultUnit(kony.flex.DP);
            flxSeperatorCC3.add();
            var btnCallBankCC = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnCallBankCC",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.callBank"),
                "top": "20dp",
                "width": "88.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnMsgBankCC = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnMsgBankCC",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.msgBank"),
                "top": "20dp",
                "width": "88.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxContainerCreditCard.add(flxBankDetailsCC, flxBalDetailsCC, flxSeperatorCC, flxBalSummary, flxDividerCC, flxBalDetContainerCC, flxAccDetailsCC, flxSeperatorCC1, flxAccDetailContainerCC, flxSeperatorCC3, btnCallBankCC, btnMsgBankCC);
            var flxContainerHomeLoan = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxContainerHomeLoan",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContainerHomeLoan.setDefaultUnit(kony.flex.DP);
            var flxBankDetailsHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxBankDetailsHL",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBankDetailsHL.setDefaultUnit(kony.flex.DP);
            var imgBankHL = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgBankHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "bankofamerica.png",
                "top": "27dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBankNameHL = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBankNameHL",
                "isVisible": true,
                "left": "61dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Bank of America",
                "textStyle": {},
                "top": "13dp",
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
            flxBankDetailsHL.add(imgBankHL, lblBankNameHL);
            var flxBalDetailsHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxBalDetailsHL",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalDetailsHL.setDefaultUnit(kony.flex.DP);
            var lblBalanceDetailsHL = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBalanceDetailsHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.balDetails"),
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
            var flxShadowHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadowHL",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadowHL.setDefaultUnit(kony.flex.DP);
            flxShadowHL.add();
            flxBalDetailsHL.add(lblBalanceDetailsHL, flxShadowHL);
            var flxSeperatorHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorHL",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorHL.setDefaultUnit(kony.flex.DP);
            flxSeperatorHL.add();
            var flxBalDetContainerHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBalDetContainerHL",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalDetContainerHL.setDefaultUnit(kony.flex.DP);
            var flxOutstandingBalance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxOutstandingBalance",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOutstandingBalance.setDefaultUnit(kony.flex.DP);
            var lblOutstandingBalHL = new kony.ui.Label({
                "id": "lblOutstandingBalHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal"),
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
            var lblOutstandingBalVal = new kony.ui.Label({
                "id": "lblOutstandingBalVal",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$00000.00",
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
            flxOutstandingBalance.add(lblOutstandingBalHL, lblOutstandingBalVal);
            var flxPrincipalAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPrincipalAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPrincipalAmount.setDefaultUnit(kony.flex.DP);
            var lblPrincipalAmt = new kony.ui.Label({
                "id": "lblPrincipalAmt",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.principalAmt"),
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
            var lblPrincipalAmtVal = new kony.ui.Label({
                "id": "lblPrincipalAmtVal",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "-$000.0",
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
            flxPrincipalAmount.add(lblPrincipalAmt, lblPrincipalAmtVal);
            var flxTotalOverdue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTotalOverdue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTotalOverdue.setDefaultUnit(kony.flex.DP);
            var lblTotalOverdue = new kony.ui.Label({
                "id": "lblTotalOverdue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Loans.TotalOverdue"),
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
            var lblTotalOverdueValue = new kony.ui.Label({
                "id": "lblTotalOverdueValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "-$000.0",
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
            flxTotalOverdue.add(lblTotalOverdue, lblTotalOverdueValue);
            var flxCurrentOverdue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrentOverdue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCurrentOverdue.setDefaultUnit(kony.flex.DP);
            var lblCurrentDue = new kony.ui.Label({
                "id": "lblCurrentDue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accounts.CurrentDue"),
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
            var lblCurrentDueValue = new kony.ui.Label({
                "id": "lblCurrentDueValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "-$000.0",
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
            flxCurrentOverdue.add(lblCurrentDue, lblCurrentDueValue);
            var flxDueDateBal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDueDateBal",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDueDateBal.setDefaultUnit(kony.flex.DP);
            var lblDueDateDetail = new kony.ui.Label({
                "id": "lblDueDateDetail",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.dueDate"),
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
            var lblDueDateDetailValue = new kony.ui.Label({
                "id": "lblDueDateDetailValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "-$000.0",
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
            flxDueDateBal.add(lblDueDateDetail, lblDueDateDetailValue);
            flxBalDetContainerHL.add(flxOutstandingBalance, flxPrincipalAmount, flxTotalOverdue, flxCurrentOverdue, flxDueDateBal);
            var flxInterestDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxInterestDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInterestDetails.setDefaultUnit(kony.flex.DP);
            var lblInterestDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblInterestDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.interestDetails"),
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
            var flxShadowHL1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadowHL1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadowHL1.setDefaultUnit(kony.flex.DP);
            flxShadowHL1.add();
            flxInterestDetails.add(lblInterestDetails, flxShadowHL1);
            var flxDivider = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxDivider",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxDivider.setDefaultUnit(kony.flex.DP);
            flxDivider.add();
            var flxInterestDetContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxInterestDetContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInterestDetContainer.setDefaultUnit(kony.flex.DP);
            var flxInterestRate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxInterestRate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInterestRate.setDefaultUnit(kony.flex.DP);
            var lblInterestRate = new kony.ui.Label({
                "id": "lblInterestRate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.interestRate"),
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
            var lblInterestRateValue = new kony.ui.Label({
                "id": "lblInterestRateValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "0%",
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
            flxInterestRate.add(lblInterestRate, lblInterestRateValue);
            var flxInterestYTD = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxInterestYTD",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInterestYTD.setDefaultUnit(kony.flex.DP);
            var lblInterestPaid = new kony.ui.Label({
                "id": "lblInterestPaid",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.interestPaidYTD"),
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
            var lblInterestPaidValue = new kony.ui.Label({
                "id": "lblInterestPaidValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$0000.00",
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
            flxInterestYTD.add(lblInterestPaid, lblInterestPaidValue);
            var flxInstallmentAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxInstallmentAmount",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInstallmentAmount.setDefaultUnit(kony.flex.DP);
            var lblInstallmentAmount = new kony.ui.Label({
                "id": "lblInstallmentAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.installmentAmount"),
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
            var lblInstallmentAmountValue = new kony.ui.Label({
                "id": "lblInstallmentAmountValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "0%",
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
            flxInstallmentAmount.add(lblInstallmentAmount, lblInstallmentAmountValue);
            var flxRepaymentFreq = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxRepaymentFreq",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRepaymentFreq.setDefaultUnit(kony.flex.DP);
            var lblRepaymentFrequency = new kony.ui.Label({
                "id": "lblRepaymentFrequency",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.repaymentFrequency"),
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
            var lblRepaymentFrequencyValue = new kony.ui.Label({
                "id": "lblRepaymentFrequencyValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "0%",
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
            flxRepaymentFreq.add(lblRepaymentFrequency, lblRepaymentFrequencyValue);
            var flxLastPaymentAmt = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxLastPaymentAmt",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLastPaymentAmt.setDefaultUnit(kony.flex.DP);
            var lblLastPmtAmt = new kony.ui.Label({
                "id": "lblLastPmtAmt",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.LastPaymentAmt"),
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
            var lblLastPmtAmtValue = new kony.ui.Label({
                "id": "lblLastPmtAmtValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$000.00",
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
            flxLastPaymentAmt.add(lblLastPmtAmt, lblLastPmtAmtValue);
            var flxLastPaymentDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxLastPaymentDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLastPaymentDate.setDefaultUnit(kony.flex.DP);
            var lblLastPmtDate = new kony.ui.Label({
                "id": "lblLastPmtDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.LastPaymentDate"),
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
            var lblLastPmtDateValue = new kony.ui.Label({
                "id": "lblLastPmtDateValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "11/23/2018",
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
            flxLastPaymentDate.add(lblLastPmtDate, lblLastPmtDateValue);
            var flxSanctionedAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSanctionedAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSanctionedAmount.setDefaultUnit(kony.flex.DP);
            var lblSanctionedAmount = new kony.ui.Label({
                "id": "lblSanctionedAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.SanctionedAmount"),
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
            var lblSanctionedAmountValue = new kony.ui.Label({
                "id": "lblSanctionedAmountValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$00000.00",
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
            flxSanctionedAmount.add(lblSanctionedAmount, lblSanctionedAmountValue);
            var flxSanctionedDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSanctionedDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSanctionedDate.setDefaultUnit(kony.flex.DP);
            var lblSanctionedDate = new kony.ui.Label({
                "id": "lblSanctionedDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.sanctionedDate"),
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
            var lblSanctionedDateValue = new kony.ui.Label({
                "id": "lblSanctionedDateValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$00000.00",
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
            flxSanctionedDate.add(lblSanctionedDate, lblSanctionedDateValue);
            var flxPrincipalAmountInterest = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPrincipalAmountInterest",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPrincipalAmountInterest.setDefaultUnit(kony.flex.DP);
            var lblPrincipalAmount = new kony.ui.Label({
                "id": "lblPrincipalAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.principalAmt"),
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
            var lblPrincipalAmountValue = new kony.ui.Label({
                "id": "lblPrincipalAmountValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$00000.00",
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
            flxPrincipalAmountInterest.add(lblPrincipalAmount, lblPrincipalAmountValue);
            var flxMaturityDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMaturityDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMaturityDate.setDefaultUnit(kony.flex.DP);
            var lblMaturityDateDetail = new kony.ui.Label({
                "id": "lblMaturityDateDetail",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.maturityDate"),
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
            var lblMaturityDateDetailValue = new kony.ui.Label({
                "id": "lblMaturityDateDetailValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$00000.00",
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
            flxMaturityDate.add(lblMaturityDateDetail, lblMaturityDateDetailValue);
            flxInterestDetContainer.add(flxInterestRate, flxInterestYTD, flxInstallmentAmount, flxRepaymentFreq, flxLastPaymentAmt, flxLastPaymentDate, flxSanctionedAmount, flxSanctionedDate, flxPrincipalAmountInterest, flxMaturityDate);
            var flxAccDetailsHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxAccDetailsHL",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccDetailsHL.setDefaultUnit(kony.flex.DP);
            var lblAccountDetailsHL = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAccountDetailsHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountDetails"),
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
            var flxShadowHL3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadowHL3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadowHL3.setDefaultUnit(kony.flex.DP);
            flxShadowHL3.add();
            flxAccDetailsHL.add(lblAccountDetailsHL, flxShadowHL3);
            var flxSeperatorHL1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorHL1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorHL1.setDefaultUnit(kony.flex.DP);
            flxSeperatorHL1.add();
            var flxAccDetailContainerHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAccDetailContainerHL",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxAccDetailContainerHL.setDefaultUnit(kony.flex.DP);
            var flxAccountNumberHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAccountNumberHL",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "14dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountNumberHL.setDefaultUnit(kony.flex.DP);
            var lblAccNumHL = new kony.ui.Label({
                "id": "lblAccNumHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.accNumber"),
                "textStyle": {},
                "top": "10dp",
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
            var lblAccNoValueHL = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblAccNoValueHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            var flxAccNoToggleHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxAccNoToggleHL",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "33dp",
                "zIndex": 1
            }, {}, {});
            flxAccNoToggleHL.setDefaultUnit(kony.flex.DP);
            var imgAccNoToggleHL = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgAccNoToggleHL",
                "isVisible": true,
                "skin": "slImage",
                "src": "view.png",
                "width": "17dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccNoToggleHL.add(imgAccNoToggleHL);
            flxAccountNumberHL.add(lblAccNumHL, lblAccNoValueHL, flxAccNoToggleHL);
            var flxAccTypeHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAccTypeHL",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccTypeHL.setDefaultUnit(kony.flex.DP);
            var lblAccTypeHL = new kony.ui.Label({
                "id": "lblAccTypeHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountType"),
                "textStyle": {},
                "top": "10dp",
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
            var lblAccTypeValHL = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblAccTypeValHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxAccTypeHL.add(lblAccTypeHL, lblAccTypeValHL);
            var flxRoutingNumberHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxRoutingNumberHL",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoutingNumberHL.setDefaultUnit(kony.flex.DP);
            var lblRoutingNumberHL = new kony.ui.Label({
                "id": "lblRoutingNumberHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Manage.RoutingNumber"),
                "textStyle": {},
                "top": "10dp",
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
            var lblRoutingNumberHLValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblRoutingNumberHLValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxRoutingNumberHL.add(lblRoutingNumberHL, lblRoutingNumberHLValue);
            var flxLoanTypeHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxLoanTypeHL",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLoanTypeHL.setDefaultUnit(kony.flex.DP);
            var lblLoanType = new kony.ui.Label({
                "id": "lblLoanType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.LoanType"),
                "textStyle": {},
                "top": "10dp",
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
            var lblLoanTypeValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblLoanTypeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxLoanTypeHL.add(lblLoanType, lblLoanTypeValue);
            var flxSwiftCodeHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxSwiftCodeHL",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSwiftCodeHL.setDefaultUnit(kony.flex.DP);
            var lblSwiftCodeHL = new kony.ui.Label({
                "id": "lblSwiftCodeHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.swiftCode"),
                "textStyle": {},
                "top": "10dp",
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
            var lblSwiftCodeValueHL = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblSwiftCodeValueHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxSwiftCodeHL.add(lblSwiftCodeHL, lblSwiftCodeValueHL);
            var flxCustomerNameHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxCustomerNameHL",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCustomerNameHL.setDefaultUnit(kony.flex.DP);
            var lblCustomerNameHL = new kony.ui.Label({
                "id": "lblCustomerNameHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.customerName"),
                "textStyle": {},
                "top": "10dp",
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
            var lblCustomerNameValueHL = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblCustomerNameValueHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxCustomerNameHL.add(lblCustomerNameHL, lblCustomerNameValueHL);
            var flxPropertyAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxPropertyAddress",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPropertyAddress.setDefaultUnit(kony.flex.DP);
            var lblPropertyAddress = new kony.ui.Label({
                "id": "lblPropertyAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.propertyAddress"),
                "textStyle": {},
                "top": "10dp",
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
            var lblPropertyAddressValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblPropertyAddressValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.propertyAddress"),
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
            flxPropertyAddress.add(lblPropertyAddress, lblPropertyAddressValue);
            var flxOriginationDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxOriginationDate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOriginationDate.setDefaultUnit(kony.flex.DP);
            var lblLoanOriginationDate = new kony.ui.Label({
                "id": "lblLoanOriginationDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.loanOriginationDate"),
                "textStyle": {},
                "top": "10dp",
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
            var lblLoanOriginationDateVal = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblLoanOriginationDateVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "12/09/2015",
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
            flxOriginationDate.add(lblLoanOriginationDate, lblLoanOriginationDateVal);
            var flxJointAccHolderHL1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxJointAccHolderHL1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxJointAccHolderHL1.setDefaultUnit(kony.flex.DP);
            var lblJointAccHolderHL1 = new kony.ui.Label({
                "id": "lblJointAccHolderHL1",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.jointholder1"),
                "textStyle": {},
                "top": "10dp",
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
            var lblJointAccHoldrValueHL1 = new kony.ui.Label({
                "id": "lblJointAccHoldrValueHL1",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxJointAccHolderHL1.add(lblJointAccHolderHL1, lblJointAccHoldrValueHL1);
            var flxjointAccountHolderHL2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxjointAccountHolderHL2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxjointAccountHolderHL2.setDefaultUnit(kony.flex.DP);
            var lblJointAccountHolderHL2 = new kony.ui.Label({
                "id": "lblJointAccountHolderHL2",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.jointholder2"),
                "textStyle": {},
                "top": "10dp",
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
            var lblJointAccountHolderValueHL2 = new kony.ui.Label({
                "id": "lblJointAccountHolderValueHL2",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxjointAccountHolderHL2.add(lblJointAccountHolderHL2, lblJointAccountHolderValueHL2);
            var flxJointAccountHolderHL3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxJointAccountHolderHL3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxJointAccountHolderHL3.setDefaultUnit(kony.flex.DP);
            var lblJointAccountHolderHL3 = new kony.ui.Label({
                "id": "lblJointAccountHolderHL3",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.jointholder3"),
                "textStyle": {},
                "top": "10dp",
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
            var lblJointAccountHolderValueHL3 = new kony.ui.Label({
                "id": "lblJointAccountHolderValueHL3",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxJointAccountHolderHL3.add(lblJointAccountHolderHL3, lblJointAccountHolderValueHL3);
            var flxJointAccountHolderHL4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxJointAccountHolderHL4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxJointAccountHolderHL4.setDefaultUnit(kony.flex.DP);
            var lblJointAccountHolderHL4 = new kony.ui.Label({
                "id": "lblJointAccountHolderHL4",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.jointholder4"),
                "textStyle": {},
                "top": "10dp",
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
            var lblJointAccountHolderValueHL4 = new kony.ui.Label({
                "id": "lblJointAccountHolderValueHL4",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxJointAccountHolderHL4.add(lblJointAccountHolderHL4, lblJointAccountHolderValueHL4);
            var flxJointAccountHolderHL5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxJointAccountHolderHL5",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxJointAccountHolderHL5.setDefaultUnit(kony.flex.DP);
            var lblJointAccountHolderHL5 = new kony.ui.Label({
                "id": "lblJointAccountHolderHL5",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.jointholder5"),
                "textStyle": {},
                "top": "10dp",
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
            var lblJointAccountHolderValueHL5 = new kony.ui.Label({
                "id": "lblJointAccountHolderValueHL5",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "10dp",
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
            flxJointAccountHolderHL5.add(lblJointAccountHolderHL5, lblJointAccountHolderValueHL5);
            flxAccDetailContainerHL.add(flxAccountNumberHL, flxAccTypeHL, flxRoutingNumberHL, flxLoanTypeHL, flxSwiftCodeHL, flxCustomerNameHL, flxPropertyAddress, flxOriginationDate, flxJointAccHolderHL1, flxjointAccountHolderHL2, flxJointAccountHolderHL3, flxJointAccountHolderHL4, flxJointAccountHolderHL5);
            var flxSeperatorHL3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorHL3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "14dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorHL3.setDefaultUnit(kony.flex.DP);
            flxSeperatorHL3.add();
            var btnCallBankHL = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnCallBankHL",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.callBank"),
                "top": "20dp",
                "width": "88.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnMsgBankHL = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnMsgBankHL",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.msgBank"),
                "top": "20dp",
                "width": "88.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxContainerHomeLoan.add(flxBankDetailsHL, flxBalDetailsHL, flxSeperatorHL, flxBalDetContainerHL, flxInterestDetails, flxDivider, flxInterestDetContainer, flxAccDetailsHL, flxSeperatorHL1, flxAccDetailContainerHL, flxSeperatorHL3, btnCallBankHL, btnMsgBankHL);
            var flxContainerDepositAccount = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxContainerDepositAccount",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContainerDepositAccount.setDefaultUnit(kony.flex.DP);
            var flxBankName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxBankName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBankName.setDefaultUnit(kony.flex.DP);
            var imgBankLogo = new kony.ui.Image2({
                "centerY": "50%",
                "height": "45dp",
                "id": "imgBankLogo",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "bankofamerica.png",
                "top": "27dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var blBankNameDA = new kony.ui.Label({
                "centerY": "50%",
                "id": "blBankNameDA",
                "isVisible": true,
                "left": "71dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Bank of America",
                "textStyle": {},
                "top": "13dp",
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
            flxBankName.add(imgBankLogo, blBankNameDA);
            var flxBalDetailsDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxBalDetailsDA",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalDetailsDA.setDefaultUnit(kony.flex.DP);
            var lblBalanceDetailsDA = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBalanceDetailsDA",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.accountSummary"),
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
            var flxShadowDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadowDA",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadowDA.setDefaultUnit(kony.flex.DP);
            flxShadowDA.add();
            var flxShadowDABottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxShadowDABottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottom",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadowDABottom.setDefaultUnit(kony.flex.DP);
            flxShadowDABottom.add();
            flxBalDetailsDA.add(lblBalanceDetailsDA, flxShadowDA, flxShadowDABottom);
            var flxSeperatorDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorDA",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorDA.setDefaultUnit(kony.flex.DP);
            flxSeperatorDA.add();
            var flxBalDetContainerDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBalDetContainerDA",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalDetContainerDA.setDefaultUnit(kony.flex.DP);
            var lblAvailBalDA = new kony.ui.Label({
                "id": "lblAvailBalDA",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
                "textStyle": {},
                "top": "20dp",
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
            var lblCurrBalDA = new kony.ui.Label({
                "id": "lblCurrBalDA",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.currBal"),
                "textStyle": {},
                "top": "20dp",
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
            var lblInterestEarned = new kony.ui.Label({
                "id": "lblInterestEarned",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.interestEarned"),
                "textStyle": {},
                "top": "52dp",
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
            var lblMaturityAmt = new kony.ui.Label({
                "id": "lblMaturityAmt",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.maturityAmount"),
                "textStyle": {},
                "top": "84dp",
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
            var lblMaturityDate = new kony.ui.Label({
                "id": "lblMaturityDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.maturityDate"),
                "textStyle": {},
                "top": "84dp",
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
            var lblCustomerNameDA = new kony.ui.Label({
                "id": "lblCustomerNameDA",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.customerName"),
                "textStyle": {},
                "top": "116dp",
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
            var lblAvailBalValueDA = new kony.ui.Label({
                "id": "lblAvailBalValueDA",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$00000.00",
                "textStyle": {},
                "top": "20dp",
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
            var lblCurrBalValueDA = new kony.ui.Label({
                "id": "lblCurrBalValueDA",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$000.00",
                "textStyle": {},
                "top": "20dp",
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
            var lblInterestEarnedValue = new kony.ui.Label({
                "id": "lblInterestEarnedValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$000.00",
                "textStyle": {},
                "top": "52dp",
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
            var lblMaturityAmtValue = new kony.ui.Label({
                "id": "lblMaturityAmtValue",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$00.00",
                "textStyle": {},
                "top": "84dp",
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
            var lblMaturityDateValue = new kony.ui.Label({
                "id": "lblMaturityDateValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "04/11/2018",
                "textStyle": {},
                "top": "84dp",
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
            var lblCustomerNameValueDA = new kony.ui.Label({
                "bottom": "20dp",
                "id": "lblCustomerNameValueDA",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "116dp",
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
            flxBalDetContainerDA.add(lblAvailBalDA, lblCurrBalDA, lblInterestEarned, lblMaturityAmt, lblMaturityDate, lblCustomerNameDA, lblAvailBalValueDA, lblCurrBalValueDA, lblInterestEarnedValue, lblMaturityAmtValue, lblMaturityDateValue, lblCustomerNameValueDA);
            var flxIntDetailsDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50dp",
                "id": "flxIntDetailsDA",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIntDetailsDA.setDefaultUnit(kony.flex.DP);
            var lblInterestDetailsDA = new kony.ui.Label({
                "centerY": "49.58%",
                "id": "lblInterestDetailsDA",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.interestDetail"),
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
            var flxShadowDA2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadowDA2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadowDA2.setDefaultUnit(kony.flex.DP);
            flxShadowDA2.add();
            var flxShadowDABottom2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxShadowDABottom2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottom",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadowDABottom2.setDefaultUnit(kony.flex.DP);
            flxShadowDABottom2.add();
            flxIntDetailsDA.add(lblInterestDetailsDA, flxShadowDA2, flxShadowDABottom2);
            var flxSeperatorDA2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorDA2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorDA2.setDefaultUnit(kony.flex.DP);
            flxSeperatorDA2.add();
            var flxIntDetContainerDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxIntDetContainerDA",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIntDetContainerDA.setDefaultUnit(kony.flex.DP);
            var lblMaturityOption = new kony.ui.Label({
                "id": "lblMaturityOption",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.maturityOption"),
                "textStyle": {},
                "top": "20dp",
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
            var lblMaturityOptionValue = new kony.ui.Label({
                "id": "lblMaturityOptionValue",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "0%",
                "textStyle": {},
                "top": "20dp",
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
            var lblLastPaidInterest = new kony.ui.Label({
                "id": "lblLastPaidInterest",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.lastPaidInterest"),
                "textStyle": {},
                "top": "20dp",
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
            var lblLastPaidInterestValue = new kony.ui.Label({
                "id": "lblLastPaidInterestValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "0",
                "textStyle": {},
                "top": "20dp",
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
            var lblDividentRate = new kony.ui.Label({
                "id": "lblDividentRate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.creditIntRate"),
                "textStyle": {},
                "top": "52dp",
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
            var lblDividentRateValue = new kony.ui.Label({
                "id": "lblDividentRateValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "0%",
                "textStyle": {},
                "top": "52dp",
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
            var lblPaidOnDA = new kony.ui.Label({
                "id": "lblPaidOnDA",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.paidOn"),
                "textStyle": {},
                "top": "84dp",
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
            var lblPaidOnValueDA = new kony.ui.Label({
                "id": "lblPaidOnValueDA",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "10/10/2018",
                "textStyle": {},
                "top": "84dp",
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
            var lblDividentPaid = new kony.ui.Label({
                "id": "lblDividentPaid",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.paidInterest"),
                "textStyle": {},
                "top": "116dp",
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
            var lblDividentPaidValue = new kony.ui.Label({
                "id": "lblDividentPaidValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$000.00",
                "textStyle": {},
                "top": "116dp",
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
            var lblSettlementAccount = new kony.ui.Label({
                "id": "lblSettlementAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.settlementAccount"),
                "textStyle": {},
                "top": "148dp",
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
            var lblSettlementAccountValue = new kony.ui.Label({
                "bottom": "20dp",
                "id": "lblSettlementAccountValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "textStyle": {},
                "top": "148dp",
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
            flxIntDetContainerDA.add(lblMaturityOption, lblMaturityOptionValue, lblLastPaidInterest, lblLastPaidInterestValue, lblDividentRate, lblDividentRateValue, lblPaidOnDA, lblPaidOnValueDA, lblDividentPaid, lblDividentPaidValue, lblSettlementAccount, lblSettlementAccountValue);
            var flxAccDetailsDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAccDetailsDA",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccDetailsDA.setDefaultUnit(kony.flex.DP);
            var lblAccountDetailsDA = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAccountDetailsDA",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountInfo"),
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
            var flxShadowDA1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadowDA1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadowDA1.setDefaultUnit(kony.flex.DP);
            flxShadowDA1.add();
            var flxShadowDABottom1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxShadowDABottom1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottom",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadowDABottom1.setDefaultUnit(kony.flex.DP);
            flxShadowDABottom1.add();
            flxAccDetailsDA.add(lblAccountDetailsDA, flxShadowDA1, flxShadowDABottom1);
            var flxSeperatorDA1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorDA1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorDA1.setDefaultUnit(kony.flex.DP);
            flxSeperatorDA1.add();
            var flxAccDetailContainerDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAccDetailContainerDA",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxAccDetailContainerDA.setDefaultUnit(kony.flex.DP);
            var flxAccountNumberDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAccountNumberDA",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "14dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountNumberDA.setDefaultUnit(kony.flex.DP);
            var lblAccNumDA = new kony.ui.Label({
                "id": "lblAccNumDA",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.accNumber"),
                "textStyle": {},
                "top": "10dp",
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
            var lblAccNoValueDA = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblAccNoValueDA",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            var flxAccNoToggleDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxAccNoToggleDA",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "33dp",
                "zIndex": 1
            }, {}, {});
            flxAccNoToggleDA.setDefaultUnit(kony.flex.DP);
            var imgAccNoToggleDA = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgAccNoToggleDA",
                "isVisible": true,
                "skin": "slImage",
                "src": "view.png",
                "width": "17dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccNoToggleDA.add(imgAccNoToggleDA);
            flxAccountNumberDA.add(lblAccNumDA, lblAccNoValueDA, flxAccNoToggleDA);
            var flxCustomerNameDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxCustomerNameDA",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCustomerNameDA.setDefaultUnit(kony.flex.DP);
            var lblDACustomerName = new kony.ui.Label({
                "id": "lblDACustomerName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.customerName"),
                "textStyle": {},
                "top": "10dp",
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
            var lblDACustomerNameValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblDACustomerNameValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxCustomerNameDA.add(lblDACustomerName, lblDACustomerNameValue);
            var flxAccHolderDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAccHolderDA",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccHolderDA.setDefaultUnit(kony.flex.DP);
            var lbllAccHolderDA = new kony.ui.Label({
                "id": "lbllAccHolderDA",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.primaryAccHolder"),
                "textStyle": {},
                "top": "10dp",
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
            var lbllAccHolderValueDA = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lbllAccHolderValueDA",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxAccHolderDA.add(lbllAccHolderDA, lbllAccHolderValueDA);
            var flxJointAccHolderDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "14dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxJointAccHolderDA",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxJointAccHolderDA.setDefaultUnit(kony.flex.DP);
            var lblJointAccHolderDA = new kony.ui.Label({
                "id": "lblJointAccHolderDA",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.jointAccHolder"),
                "textStyle": {},
                "top": "10dp",
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
            var lblJointAccHolderValueDA = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblJointAccHolderValueDA",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxJointAccHolderDA.add(lblJointAccHolderDA, lblJointAccHolderValueDA);
            var flxIBANDepositAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxIBANDepositAccount",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIBANDepositAccount.setDefaultUnit(kony.flex.DP);
            var lblIBANDepositAccount = new kony.ui.Label({
                "id": "lblIBANDepositAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                "textStyle": {},
                "top": "10dp",
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
            var lblIBANValueDepositAccount = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblIBANValueDepositAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxIBANDepositAccount.add(lblIBANDepositAccount, lblIBANValueDepositAccount);
            var flxNickNameDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "14dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxNickNameDA",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNickNameDA.setDefaultUnit(kony.flex.DP);
            var lblNickNameDA = new kony.ui.Label({
                "id": "lblNickNameDA",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.nickName"),
                "textStyle": {},
                "top": "10dp",
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
            var lblNickNameDAValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblNickNameDAValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            flxNickNameDA.add(lblNickNameDA, lblNickNameDAValue);
            flxAccDetailContainerDA.add(flxAccountNumberDA, flxCustomerNameDA, flxAccHolderDA, flxJointAccHolderDA, flxIBANDepositAccount, flxNickNameDA);
            var btnCallBankDA = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnCallBankDA",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.callBank"),
                "top": "20dp",
                "width": "88.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnMsgBankDA = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnMsgBankDA",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.msgBank"),
                "top": "20dp",
                "width": "88.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxContainerDepositAccount.add(flxBankName, flxBalDetailsDA, flxSeperatorDA, flxBalDetContainerDA, flxIntDetailsDA, flxSeperatorDA2, flxIntDetContainerDA, flxAccDetailsDA, flxSeperatorDA1, flxAccDetailContainerDA, btnCallBankDA, btnMsgBankDA);
            flxMainContainer.add(flxContainerCheckingAcc, flxExternalAccountContainer, flxContainerCreditCard, flxContainerHomeLoan, flxContainerDepositAccount);
            var flxInformation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "95%",
                "id": "flxInformation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxInformation.setDefaultUnit(kony.flex.DP);
            var information = new com.temenos.infinity.accountdetails.information({
                "height": "100%",
                "id": "information",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "information": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            information.titleTab1 = "{\"Savings\":\"Account Summary\",\"Checking\":\"Account Summary\",\"Loan\":\"Balance Details\",\"Mortgage\":\"Balance Details\",\"Deposit\":\"Account Summary\",\"CreditCard\":\"Account Summary\"}";
            information.visibleTab3 = true;
            information.visibleTab4 = false;
            information.amountFormat = "{ \"locale\":\"\", \"positiveFormat\" : \"{CS}{D}\", \"negativeFormat\" : \"-({CS}{D})\", \"fractionDigits\":\"2\"}";
            information.visibleTab2 = true;
            information.objectServiceName = "";
            information.accountTypeContextPath = "{$.c.Accounts[0].accountType}";
            information.bankNameSkin = "{\"skin\":\"ICSknLbl72727215pxSSPR\"}";
            information.dateFormat = "{\"format\" : \"m/d/Y\"}";
            information.maskingRequired = "{\"MASKING\" : true}";
            information.nickName = "{$.c.Accounts[0].nickName}";
            information.currencyCodeContextPath = "{$.c.Accounts[0].currencyCode}";
            information.titleTab2 = "{\"Savings\":\"Interest Detail\",\"Checking\":\"Interest Detail\",\"Loan\":\"Interest Detail\",\"Mortgage\":\"Interest Detail\",\"Deposit\":\"Interest Detail\",\"CreditCard\":\"Balance & Bill Detail\"}";
            information.titleTab3 = "{\"Savings\":\"Account Info\",\"Checking\":\"Account Info\",\"Loan\":\"Account Info\",\"Mortgage\":\"Account Info\",\"Deposit\":\"Account Info\",\"CreditCard\":\"Account Info\"}";
            information.titleTab4 = "";
            information.field1LabelTab1 = "{\"Savings\":\"{i.kony.mb.accdetails.availBal}:\",\"Checking\":\"{i.kony.mb.accdetails.availBal}:\",\"Loan\":\"{i.kony.mb.accdetails.principalAmt}:\",\"Mortgage\":\"{i.kony.mb.accdetails.principalAmt}:\",\"Deposit\":\"{i.kony.mb.accdetails.currBal}:\",\"CreditCard\":\"{i.kony.mb.accdetails.currBal}:\"}";
            information.objectName = "";
            information.tabHeaderSkin = "{\"skin\":\"ICSknLbl424242SSPR18px\"}";
            information.backendDateFormat = "{\"format\" : \"Y-m-d\"}";
            information.accountNumberFormat = "{\"format\" : \"\\\\d(?=\\\\d{4})\", \"replaceCharacter\" : \"X\",  \"modifiers\" : \"g\"}";
            information.accountName = "{$.c.Accounts[0].accountName}";
            information.operationName = "getAccountDetails";
            information.field1LabelTab2 = "{\"Savings\":\"{i.kony.mb.accdetails.paidOn}:\",\"Checking\":\"{i.kony.mb.accdetails.paidOn}:\",\"Loan\":\"{i.kony.mb.accdetails.interestRate}:\",\"Mortgage\":\"{i.kony.mb.accdetails.interestRate}:\",\"Deposit\":\"{i.kony.mb.accdetails.lastPaidInterest}:\",\"CreditCard\":\"{i.kony.mb.account.minimumDueAmount}:\"}";
            information.field1LabelTab3 = "{\"Savings\":\"{i.kony.mb.accdetails.routingNumber}:\",\"Checking\":\"{i.kony.mb.accdetails.routingNumber}:\",\"Deposit\":{\"default\":\"{i.kony.mb.accdetails.primaryAccHolder}:\",\"business\":\"{i.kony.mb.accdetails.CompanyName}:\"}}";
            information.field1LabelTab4 = "";
            information.field1ValueTab1 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].availableBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].availableBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].originalAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].originalAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].currentBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].currentBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.labelNameSkin = "{\"skin\":\"ICSknLbl72727215pxSSPR\"}";
            information.userTypeContextPath = "{$.c.userType}";
            information.maskVizIcon = "{\"maskeyeicon\":\"view.png\"}";
            information.noOfEllipsis = 3;
            information.field1TypeTab1 = "DetailsAmount";
            information.field1ValueTab2 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].lastPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].lastPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].interestRate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].interestRate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].dividendLastPaidAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].minimumDue}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field1ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].routingNumber}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].routingNumber}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].accountHolder.fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.criteria = "{\"accountID\":\"{$.c.Accounts[0].accountID}\",\"accountType\":\"{$.c.Accounts[0].accountType}\"}";
            information.field1ValueTab4 = "";
            information.defaultValueSkin = "{\"skin\":\"ICSknLbl42424215pxSSPR\"}";
            information.unmaskVizIcon = "{\"unmaskeyeicon\":\"strikedeyeicon.png\"}";
            information.noOfCharacters = 14;
            information.field2LabelTab1 = "{\"Savings\":\"{i.kony.mb.accdetails.currBal}:\",\"Checking\":\"{i.kony.mb.accdetails.currBal}:\",\"Loan\":\"{i.kony.mb.accdetails.outstandingBal}:\",\"Mortgage\":\"{i.kony.mb.accdetails.outstandingBal}:\"}";
            information.field1TypeTab2 = "{\"Savings\":\"Date\",\"Checking\":\"Date\",\"Loan\":\"Percentage\",\"Mortgage\":\"Percentage\",\"Deposit\":\"DetailsAmount\",\"CreditCard\":\"DetailsAmount\"}";
            information.field1TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\",\"Deposit\":\"Label\"}";
            information.serviceIdentifier = "S1";
            information.field1TypeTab4 = "";
            information.dateValueSkin = "{\"skin\":\"ICSknLbl42424215pxSSPR\"}";
            information.businessAccount = "{$.c.Accounts[0].isBusinessAccount}";
            information.field2ValueTab1 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].currentBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].currentBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].outstandingBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].outstandingBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field2LabelTab2 = "{\"Savings\":\"{i.kony.mb.accdetails.creditIntRate}:\",\"Checking\":\"{i.kony.mb.accdetails.creditIntRate}:\",\"Loan\":\"{i.kony.mb.accdetails.interestPaidYTD}:\",\"Mortgage\":\"{i.kony.mb.accdetails.interestPaidYTD}:\",\"Deposit\":\"{i.kony.mb.accdetails.paidInterest}:\",\"CreditCard\":\"{i.i18n.accountDetail.paymentDueDate}:\"}";
            information.field2LabelTab3 = "{\"Savings\":\"{i.kony.mb.accdetails.accNumber}:\",\"Checking\":\"{i.kony.mb.accdetails.accNumber}:\",\"Loan\":\"{i.kony.mb.accdetails.accNumber}:\",\"Mortgage\":\"{i.kony.mb.accdetails.accNumber}:\",\"Deposit\":\"{i.kony.mb.accdetails.accNumber}:\",\"CreditCard\":{\"default\":\"{i.kony.mb.accdetails.primaryAccHolder}:\",\"business\":\"{i.kony.mb.accdetails.CompanyName}:\"}}";
            information.field2LabelTab4 = "";
            information.percentageValueSkin = "{\"skin\":\"ICSknLbl42424215pxSSPR\"}";
            information.field2ValueTab4 = "";
            information.field2TypeTab1 = "{\"Savings\":\"DetailsAmount\",\"Checking\":\"DetailsAmount\",\"Loan\":\"DetailsAmount\",\"Mortgage\":\"DetailsAmount\"}";
            information.field2ValueTab2 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].dividendRate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].dividendRate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].interestPaidYTD}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].interestPaidYTD}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].dividendPaidYTD}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].dueDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field2ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].accountID}\",\"width\":\"\",\"labelWidth\":\"\",\"left\":\"10dp\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\",\"reverseLayoutDirection\":true},\"Checking\":{\"value\":\"{$.c.Accounts[0].accountID}\",\"width\":\"\",\"labelWidth\":\"\",\"left\":\"10dp\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\",\"reverseLayoutDirection\":true},\"Loan\":{\"value\":\"{$.c.Accounts[0].accountID}\",\"width\":\"\",\"labelWidth\":\"\",\"left\":\"10dp\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\",\"reverseLayoutDirection\":true},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].accountID}\",\"width\":\"\",\"labelWidth\":\"\",\"left\":\"10dp\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\",\"reverseLayoutDirection\":true},\"Deposit\":{\"value\":\"{$.c.Accounts[0].accountID}\",\"width\":\"\",\"labelWidth\":\"\",\"left\":\"10dp\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\",\"reverseLayoutDirection\":true},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].accountHolder.fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.positiveValueSkin = "{\"skin\":\"ICSknLbl42424215pxSSPR\"}";
            information.field3LabelTab1 = "{\"Savings\":\"{i.kony.mb.accdetails.pendingDeposits}:\",\"Checking\":\"{i.kony.mb.accdetails.pendingDeposits}:\",\"Loan\":\"{i.kony.mb.Loans.TotalOverdue}:\",\"Mortgage\":\"{i.kony.mb.Loans.TotalOverdue}:\",\"CreditCard\":\"{i.kony.mb.accdetails.availCred}:\"}";
            information.field2TypeTab2 = "{\"Savings\":\"Percentage\",\"Checking\":\"Percentage\",\"Loan\":\"DetailsAmount\",\"Mortgage\":\"DetailsAmount\",\"Deposit\":\"DetailsAmount\",\"CreditCard\":\"Date\"}";
            information.field2TypeTab3 = "{\"Savings\":\"AccountNumberNative\",\"Checking\":\"AccountNumberNative\",\"Loan\":\"AccountNumberNative\",\"Mortgage\":\"AccountNumberNative\",\"Deposit\":\"AccountNumberNative\",\"CreditCard\":\"Label\"}";
            information.field2TypeTab4 = "";
            information.negativeValueSkin = "{\"skin\":\"sknlblff000015pxSSPR\"}";
            information.field3ValueTab1 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].pendingDeposit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].pendingDeposit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].paymentDue}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].paymentDue}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].availableCredit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field3LabelTab2 = "{\"Loan\":\"{i.kony.mb.accdetails.repaymentFrequency}:\",\"Mortgage\":\"{i.kony.mb.accdetails.repaymentFrequency}:\",\"Deposit\":\"{i.kony.mb.accdetails.settlementAccount}:\",\"CreditCard\":\"{i.kony.mb.account.lastStatementBalance}:\"}";
            information.field3LabelTab3 = "{\"Savings\":{\"default\":\"{i.kony.mb.accdetails.customerName}:\",\"business\":\"{i.kony.mb.accdetails.CompanyName}:\"},\"Checking\":{\"default\":\"{i.kony.mb.accdetails.customerName}:\",\"business\":\"{i.kony.mb.accdetails.CompanyName}:\"},\"Loan\":\"{i.kony.mb.accountdetails.accountType}:\",\"Mortgage\":\"{i.kony.mb.accountdetails.accountType}:\",\"Deposit\":\"{i.kony.mb.accdetails.jointAccHolder}:\",\"CreditCard\":\"{i.kony.mb.accdetails.cardIssueDate}:\"}";
            information.field3LabelTab4 = "";
            information.accountNumberSkin = "{\"skin\":\"ICSknLbl42424215pxSSPR\"}";
            information.field3TypeTab1 = "DetailsAmount";
            information.field3ValueTab2 = "{\"Loan\":{\"value\":\"{$.c.Accounts[0].rePaymentFrequency}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].rePaymentFrequency}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].payoutAccount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].lastStatementBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field3ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].accountHolder.fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].accountHolder.fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].openingDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].accountType}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].accountType}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].jointHolder}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field3ValueTab4 = "";
            information.maskIconSkin = "{\"skin\":\"sknGlyster72727215Px\"}";
            information.unmaskIconSkin = "{\"skin\":\"sknGlyster72727215Px\"}";
            information.field4LabelTab1 = "{\"Savings\":\"{i.kony.mb.accdetails.pendingWithdrawals}:\",\"Checking\":\"{i.kony.mb.accdetails.pendingWithdrawals}:\",\"Loan\":\"{i.kony.mb.accounts.CurrentDue}:\",\"Mortgage\":\"{i.kony.mb.accounts.CurrentDue}:\",\"Deposit\":\"{i.kony.mb.accdetails.maturityDate}\",\"CreditCard\":\"{i.kony.mb.accdetails.currDueAmt}:\"}";
            information.field3TypeTab2 = "{\"Loan\":\"Label\",\"Mortgage\":\"Label\",\"Deposit\":\"Label\",\"CreditCard\":\"DetailsAmount\"}";
            information.field3TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\",\"CreditCard\":\"Date\",\"Loan\":\"Label\",\"Mortgage\":\"Label\",\"Deposit\":\"Label\"}";
            information.field3TypeTab4 = "";
            information.field4LabelTab2 = "";
            information.field4ValueTab1 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].pendingWithdrawal}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].pendingWithdrawal}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].nextPaymentAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].nextPaymentAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].maturityDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].currentAmountDue}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field4LabelTab3 = "{\"Savings\":\"{i.kony.mb.accdetails.swiftCode}:\",\"Checking\":\"{i.kony.mb.accdetails.swiftCode}:\",\"Loan\":\"{i.kony.mb.accdetails.routingNumber}:\",\"Mortgage\":\"{i.kony.mb.accdetails.routingNumber}:\"}";
            information.field4LabelTab4 = "";
            information.buttonSkin = "{\"skin\":\"ICSknLbl003E7515pxSSPR\"}";
            information.field4ValueTab2 = "";
            information.field4TypeTab1 = "{\"Savings\":\"DetailsAmount\",\"Checking\":\"DetailsAmount\",\"Loan\":\"DetailsAmount\",\"Mortgage\":\"DetailsAmount\",\"Deposit\":\"Date\",\"CreditCard\":\"DetailsAmount\"}";
            information.field4ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].swiftCode}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].swiftCode}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].routingNumber}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].routingNumber}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field4ValueTab4 = "";
            information.editLabelSkin = "{\"skin\":\"ICSknLblSSPf5f5f515Px\"}";
            information.field4TypeTab2 = "";
            information.field5LabelTab1 = "";
            information.field4TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\",\"Loan\":\"Label\",\"Mortgage\":\"Label\"}";
            information.field4TypeTab4 = "";
            information.pageHeaderLabelSkin = "{\"skin\":\"ICSknHeaderFFF34px\"}";
            information.field5LabelTab2 = "{\"Loan\":\"{i.kony.mb.account.lastPaymentAmount}:\",\"Mortgage\":\"{i.kony.mb.account.lastPaymentAmount}:\"}";
            information.field5ValueTab1 = "";
            information.field5LabelTab3 = "{\"Savings\":{\"default\":\"{i.kony.mb.accdetails.jointholder1}:\",\"business\":\"{i.kony.mb.accdetails.customerName}\"},\"Checking\":{\"default\":\"{i.kony.mb.accdetails.jointholder1}:\",\"business\":\"{i.kony.mb.accdetails.customerName}\"},\"Loan\":\"{i.kony.mb.accdetails.swiftCode}:\",\"Mortgage\":\"{i.kony.mb.accdetails.swiftCode}:\"}";
            information.field5LabelTab4 = "";
            information.headerBgSkin = "{\"skin\":\"ICSknFlxBg003e7515px\"}";
            information.field5ValueTab2 = "{\"Loan\":{\"value\":\"{$.c.Accounts[0].lastPaymentAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].lastPaymentAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field5TypeTab1 = "";
            information.field5ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].jointHolders[0].fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].jointHolders[0].fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].swiftCode}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].swiftCode}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field5ValueTab4 = "";
            information.bankNameBGSkin = "{\"skin\":\"ICSknFlxffffffShadowNoborder\"}";
            information.field5TypeTab2 = "DetailsAmount";
            information.field6LabelTab1 = "{\"Savings\":\"{i.kony.mb.accdetails.overdraftLimit}:\",\"Checking\":\"{i.kony.mb.accdetails.overdraftLimit}:\",\"Loan\":\"{i.kony.mb.accdetails.dueDate}:\",\"Mortgage\":\"{i.kony.mb.accdetails.dueDate}:\",\"CreditCard\":\"{i.kony.mb.accdetails.creditLimit}:\",\"Deposit\":\"{i.kony.mb.accdetails.interestAccrued}:\"}";
            information.field5TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\",\"CreditCard\":\"Amount\",\"Loan\":\"Label\",\"Mortgage\":\"Label\"}";
            information.field5TypeTab4 = "";
            information.tabHeaderBGSkin = "{\"skin\":\"ICSknFlxF6F6F6\"}";
            information.field6LabelTab2 = "{\"Savings\":\"{i.kony.mb.accdetails.lastPaidInterest}:\",\"Checking\":\"{i.kony.mb.accdetails.lastPaidInterest}:\",\"Loan\":\"{i.kony.mb.account.lastPaymentDate}:\",\"Mortgage\":\"{i.kony.mb.account.lastPaymentDate}:\",\"Deposit\":\"{i.kony.mb.accdetails.creditIntRate}:\",\"CreditCard\":\"{i.kony.mb.account.lastPaymentAmount}:\"}";
            information.field6LabelTab3 = "{\"Savings\":{\"default\":\"{i.kony.mb.accdetails.jointholder2}:\",\"business\":\"\"},\"Checking\":{\"default\":\"{i.kony.mb.accdetails.jointholder2}:\",\"business\":\"\"},\"Loan\":{\"default\":\"{i.kony.mb.accdetails.customerName}:\",\"business\":\"{i.kony.mb.accdetails.CompanyName}:\"},\"Mortgage\":{\"default\":\"{i.kony.mb.accdetails.customerName}:\",\"business\":\"{i.kony.mb.accdetails.CompanyName}:\"}}";
            information.field6LabelTab4 = "";
            information.field6ValueTab1 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].transferLimit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].transferLimit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].nextPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].nextPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].creditLimit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].accruedInterest}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.tabDetailsBGSkin = "{\"skin\":\"ICSknFlxffffffShadowNoborder\"}";
            information.field6TypeTab1 = "{\"Savings\":\"DetailsAmount\",\"Checking\":\"DetailsAmount\",\"Loan\":\"Date\",\"Mortgage\":\"Date\",\"CreditCard\":\"DetailsAmount\",\"Deposit\":\"DetailsAmount\"}";
            information.field6ValueTab2 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].dividendLastPaidAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].dividendLastPaidAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].lastPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].lastPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].dividendRate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].lastPaymentAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field6ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].jointHolders[1].fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].jointHolders[1].fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].accountHolder.fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].accountHolder.fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field6ValueTab4 = "";
            information.field7LabelTab1 = "";
            information.field6TypeTab2 = "{\"Savings\":\"DetailsAmount\",\"Checking\":\"DetailsAmount\",\"Loan\":\"Date\",\"Mortgage\":\"Date\",\"Deposit\":\"Percentage\",\"CreditCard\":\"DetailsAmount\"}";
            information.field6TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\",\"Loan\":\"Label\",\"Mortgage\":\"Label\"}";
            information.field6TypeTab4 = "";
            information.field7ValueTab1 = "";
            information.field7LabelTab2 = "{\"Savings\":\"{i.kony.mb.accdetails.paidInterest}:\",\"Checking\":\"{i.kony.mb.accdetails.paidInterest}:\",\"Loan\":\"{i.kony.mb.accdetails.SanctionedAmount}:\",\"Mortgage\":\"{i.kony.mb.accdetails.SanctionedAmount}:\",\"Deposit\":\"{i.kony.mb.accdetails.paidOn}:\",\"CreditCard\":\"{i.kony.mb.account.lastPaymentDate}:\"}";
            information.field7LabelTab3 = "{\"Savings\":\"{i.kony.mb.TransfersEurope.IBAN}:\",\"Checking\":\"{i.kony.mb.TransfersEurope.IBAN}:\"}";
            information.field7LabelTab4 = "";
            information.field7TypeTab1 = "";
            information.field7ValueTab2 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].dividendPaidYTD}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].dividendPaidYTD}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].sanctionedAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].sanctionedAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].dividendLastPaidDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].lastPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field7ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].IBAN}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].IBAN}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field7ValueTab4 = "";
            information.field7TypeTab2 = "{\"Savings\":\"DetailsAmount\",\"Checking\":\"DetailsAmount\",\"Loan\":\"DetailsAmount\",\"Mortgage\":\"DetailsAmount\",\"Deposit\":\"Date\",\"CreditCard\":\"Date\"}";
            information.field8LabelTab1 = "";
            information.field7TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\"}";
            information.field7TypeTab4 = "";
            information.field8LabelTab2 = "{\"Savings\":\"{i.kony.mb.accdetails.interestAccrued}:\",\"Checking\":\"{i.kony.mb.accdetails.interestAccrued}:\",\"Loan\":\"{i.kony.mb.accdetails.sanctionedDate}:\",\"Mortgage\":\"{i.kony.mb.accdetails.sanctionedDate}:\",\"CreditCard\":\"{i.kony.mb.accdetails.rewrdBal}:\"}";
            information.field8ValueTab1 = "";
            information.field8LabelTab3 = "{\"Savings\":{\"default\":\"{i.kony.mb.accdetails.jointholder3}:\",\"business\":\"\"},\"Checking\":{\"default\":\"{i.kony.mb.accdetails.jointholder3}:\",\"business\":\"\"},\"Loan\":\"{i.kony.mb.accdetails.jointAccHolder}:\",\"Mortgage\":\"{i.kony.mb.accdetails.jointAccHolder}:\"}";
            information.field8LabelTab4 = "";
            information.field8ValueTab2 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].accruedInterest}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].accruedInterest}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].sanctionedDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].sanctionedDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].availableCredit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field8TypeTab1 = "";
            information.field8ValueTab3 = "{\"Savings\":{\"value\":{\"default\":\"{$.c.Accounts[0].jointHolders[2].fullname}\",\"business\":\"\"},\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":{\"default\":\"{$.c.Accounts[0].jointHolders[2].fullname}\",\"business\":\"\"},\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].jointHolders[0].fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].jointHolders[0].fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field8ValueTab4 = "";
            information.field8TypeTab2 = "{\"Savings\":\"DetailsAmount\",\"Checking\":\"DetailsAmount\",\"Loan\":\"Date\",\"Mortgage\":\"Date\",\"CreditCard\":\"DetailsAmount\"}";
            information.field9LabelTab1 = "";
            information.field8TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\",\"Loan\":\"Label\",\"Mortgage\":\"Label\"}";
            information.field8TypeTab4 = "";
            information.field9LabelTab2 = "{\"Loan\":\"{i.kony.mb.accdetails.principalAmt}:\",\"Mortgage\":\"{i.kony.mb.accdetails.principalAmt}:\",\"CreditCard\":\"{i.kony.mb.accdetails.interestRate}:\",\"Deposit\":\"{i.kony.mb.accdetails.interestDue}:\"}";
            information.field9ValueTab1 = "";
            information.field9LabelTab3 = "{\"Savings\":{\"default\":\"{i.kony.mb.accdetails.jointholder4}:\",\"business\":\"\"},\"Checking\":{\"default\":\"{i.kony.mb.accdetails.jointholder4}:\",\"business\":\"\"}}";
            information.field9LabelTab4 = "";
            information.field9ValueTab2 = "{\"CreditCard\":{\"value\":\"{$.c.Accounts[0].interestRate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].originalAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].originalAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].termInterestDue}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field9TypeTab1 = "";
            information.field9ValueTab3 = "{\"Savings\":{\"value\":{\"default\":\"{$.c.Accounts[0].jointHolders[3].fullname}\",\"business\":\"\"},\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":{\"default\":\"{$.c.Accounts[0].jointHolders[3].fullname}\",\"business\":\"\"},\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field9ValueTab4 = "";
            information.field9TypeTab2 = "{\"CreditCard\":\"Percentage\",\"Loan\":\"DetailsAmount\",\"Mortgage\":\"DetailsAmount\",\"Deposit\":\"DetailsAmount\"}";
            information.field10LabelTab1 = "";
            information.field9TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\"}";
            information.field9TypeTab4 = "";
            information.field10LabelTab2 = "{\"Loan\":\"{i.kony.mb.accdetails.maturityDate}:\",\"Mortgage\":\"{i.kony.mb.accdetails.maturityDate}:\",\"Deposit\":\"{i.kony.mb.accdetails.dueDate}:\"}";
            information.field10ValueTab1 = "";
            information.field10LabelTab3 = "{\"Savings\":{\"default\":\"{i.kony.mb.accdetails.jointholder5}:\",\"business\":\"\"},\"Checking\":{\"default\":\"{i.kony.mb.accdetails.jointholder5}:\",\"business\":\"\"}}";
            information.field10LabelTab4 = "";
            information.field10ValueTab2 = "{\"Loan\":{\"value\":\"{$.c.Accounts[0].maturityDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].maturityDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].interestDueDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field10TypeTab1 = "";
            information.field10ValueTab3 = "{\"Savings\":{\"value\":{\"default\":\"{$.c.Accounts[0].jointHolders[4].fullname}\",\"business\":\"\"},\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":{\"default\":\"{$.c.Accounts[0].jointHolders[4].fullname}\",\"business\":\"\"},\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field10ValueTab4 = "";
            information.field10TypeTab2 = "Date";
            information.field10TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\"}";
            information.field10TypeTab4 = "";
            flxInformation.add(information);
            flxContainer.add(flxHeader, flxMainContainer, flxInformation);
            var flxPopupNickName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxPopupNickName",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f2a5b0bfd49a49",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxPopupNickName.setDefaultUnit(kony.flex.DP);
            var flxPopupContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "40dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "200dp",
                "id": "flxPopupContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxPopupDocuments",
                "width": "88%",
                "zIndex": 5
            }, {}, {});
            flxPopupContainer.setDefaultUnit(kony.flex.DP);
            var btnEditNickName = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnEditNickName",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.editNickName"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxSeperatorone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorone",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorone.setDefaultUnit(kony.flex.DP);
            flxSeperatorone.add();
            var btnRefresh = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnRefresh",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.Accounts.refresh"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxSeperatortwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatortwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatortwo.setDefaultUnit(kony.flex.DP);
            flxSeperatortwo.add();
            var btnDelete = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnDelete",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.externalBank.DeleteAccount"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxSeperatorthree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorthree",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorthree.setDefaultUnit(kony.flex.DP);
            flxSeperatorthree.add();
            var btnCancel = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnCancel",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxPopupContainer.add(btnEditNickName, flxSeperatorone, btnRefresh, flxSeperatortwo, btnDelete, flxSeperatorthree, btnCancel);
            var flxDismiss = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "140dp",
                "clipBounds": true,
                "id": "flxDismiss",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDismiss.setDefaultUnit(kony.flex.DP);
            flxDismiss.add();
            flxPopupNickName.add(flxPopupContainer, flxDismiss);
            this.add(flxContainer, flxPopupNickName);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_e3a32e80874c420facb54bd9bbd6cdd9,
            "metaData": {
                "title": "Edit"
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
            "addWidgets": addWidgetsfrmAccountInfo,
            "enabledForIdleTimeout": true,
            "id": "frmAccountInfo",
            "init": controller.AS_Form_i66ea33b044345b09089a7d5197fd2ca,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_f896c8a84f9a44568ac73b6c305fb9cc(eventobject);
            },
            "skin": "sknFrmoa78d1Gradient50",
            "title": "Family Checking Account"
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