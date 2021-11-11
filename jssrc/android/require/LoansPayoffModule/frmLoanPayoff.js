define("LoansPayoffModule/frmLoanPayoff", function() {
    return function(controller) {
        function addWidgetsfrmLoanPayoff() {
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
                        "isVisible": true,
                        "text": "Cancel"
                    },
                    "flxHeaderShadow": {
                        "isVisible": false,
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
                        "text": kony.i18n.getLocalizedString("kony.mb.loans.PayOffLoan")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_d429bfcf2e0d4c6dacef6a9ae7a9612d;
            flxHeader.add(customHeader);
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
                "skin": "sknTransparentBs",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContainerHomeLoan.setDefaultUnit(kony.flex.DP);
            var flxFromAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxFromAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFromAccount.setDefaultUnit(kony.flex.DP);
            var lblFromAccount = new kony.ui.Label({
                "id": "lblFromAccount",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.FromAccount"),
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
            var lblFromAccountValue = new kony.ui.Label({
                "height": "22dp",
                "id": "lblFromAccountValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "My Checking ....2343",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "13dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblLoanEndDate = new kony.ui.Label({
                "id": "lblLoanEndDate",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "11/05/2020",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "36%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBank = new kony.ui.Label({
                "height": "18dp",
                "id": "lblBank",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl3e4f56SSPLight24px",
                "text": "HDFC Bank",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "53dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblavailableBalance = new kony.ui.Label({
                "id": "lblavailableBalance",
                "isVisible": true,
                "right": "18dp",
                "skin": "sknLbl3e4f56SSPLight24px",
                "text": kony.i18n.getLocalizedString("kony.mb.loans.ActualLoanEndDate"),
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
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "30dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSeparator2.setDefaultUnit(kony.flex.DP);
            flxSeparator2.add();
            flxFromAccount.add(lblFromAccount, lblFromAccountValue, lblLoanEndDate, lblBank, lblavailableBalance, flxSeparator, flxSeparator2);
            var flxBalDetailsHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
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
                "text": kony.i18n.getLocalizedString("kony.mb.loans.LoanDetails"),
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
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalDetContainerHL.setDefaultUnit(kony.flex.DP);
            var lblOrgnlLoanAmt = new kony.ui.Label({
                "id": "lblOrgnlLoanAmt",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.currBal"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDue = new kony.ui.Label({
                "bottom": 10,
                "id": "lblDue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accounts.CurrentDue"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "114dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPrincipalBal = new kony.ui.Label({
                "id": "lblPrincipalBal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.loans.TotalPrincipal"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "52dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPrincipalAmt = new kony.ui.Label({
                "id": "lblPrincipalAmt",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.loans.TotalInterest"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "84dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblOutstandingBalVal = new kony.ui.Label({
                "id": "lblOutstandingBalVal",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$23909.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCurrentDue = new kony.ui.Label({
                "id": "lblCurrentDue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$23909.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "114dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPrincipalBalVal = new kony.ui.Label({
                "id": "lblPrincipalBalVal",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "-$909.0",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "52dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblInterest = new kony.ui.Label({
                "id": "lblInterest",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "-$609.0",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "84dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBalDetContainerHL.add(lblOrgnlLoanAmt, lblDue, lblPrincipalBal, lblPrincipalAmt, lblOutstandingBalVal, lblCurrentDue, lblPrincipalBalVal, lblInterest);
            var flxInterestDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxInterestDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
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
                "text": kony.i18n.getLocalizedString("kony.mb.loans.PayOffDetails"),
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
                "isVisible": false,
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccNoValueHL = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblAccNoValueHL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "XXXXXXXXXX2390",
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
            var flxAccNoToggleHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxAccNoToggleHL",
                "isVisible": false,
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
            var flxTransferDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "48dp",
                "id": "flxTransferDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxTransferDate.setDefaultUnit(kony.flex.DP);
            var lblTransferDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTransferDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("kony.mb.mm.TransferDate"),
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
            var flxRightWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "48dp",
                "id": "flxRightWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxRightWrapper.setDefaultUnit(kony.flex.DP);
            var imgArrow = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgArrow",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron_1.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblValue",
                "isVisible": true,
                "right": "50dp",
                "skin": "sknMMBlueLabel",
                "text": "04/03/2020",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRightWrapper.add(imgArrow, lblValue);
            var flxSepartaor = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSepartaor",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSepartaor.setDefaultUnit(kony.flex.DP);
            flxSepartaor.add();
            flxTransferDate.add(lblTransferDate, flxRightWrapper, flxSepartaor);
            flxAccDetailContainerHL.add(flxAccountNumberHL, flxTransferDate);
            var flxInterestDetContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxInterestDetContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInterestDetContainer.setDefaultUnit(kony.flex.DP);
            var lblInterestRate = new kony.ui.Label({
                "id": "lblInterestRate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.loans.PayoffAmount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblInterestRateValue = new kony.ui.Label({
                "id": "lblInterestRateValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$2109.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblInterestPaid = new kony.ui.Label({
                "bottom": 10,
                "id": "lblInterestPaid",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.loans.PayoffPenalty"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "70dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblInterestPaidValue = new kony.ui.Label({
                "id": "lblInterestPaidValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "14%",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "70dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblIntPaidLastYear = new kony.ui.Label({
                "id": "lblIntPaidLastYear",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.interestPaidLY"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "84dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblIntPaidLastYearValue = new kony.ui.Label({
                "id": "lblIntPaidLastYearValue",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$609.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "84dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblLastPmtAmt = new kony.ui.Label({
                "id": "lblLastPmtAmt",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.LastPaymentAmt"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "84dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblLastPmtAmtValue = new kony.ui.Label({
                "id": "lblLastPmtAmtValue",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$609.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "84dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblLastPmtDate = new kony.ui.Label({
                "id": "lblLastPmtDate",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.LastPaymentDate"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "116dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblLastPmtDateValue = new kony.ui.Label({
                "id": "lblLastPmtDateValue",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "11/23/2018",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "116dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPayOffAmt = new kony.ui.Label({
                "bottom": "20dp",
                "id": "lblPayOffAmt",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.payoffAmt"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "148dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPayOffAmtValue = new kony.ui.Label({
                "bottom": "20dp",
                "id": "lblPayOffAmtValue",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$798797.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "148dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSep = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "55dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep.setDefaultUnit(kony.flex.DP);
            flxSep.add();
            flxInterestDetContainer.add(lblInterestRate, lblInterestRateValue, lblInterestPaid, lblInterestPaidValue, lblIntPaidLastYear, lblIntPaidLastYearValue, lblLastPmtAmt, lblLastPmtAmtValue, lblLastPmtDate, lblLastPmtDateValue, lblPayOffAmt, lblPayOffAmtValue, flxSep);
            var flxAccDetailsHL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxAccDetailsHL",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
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
            var flxSeperatorHL3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorHL3",
                "isVisible": false,
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
            flxContainerHomeLoan.add(flxFromAccount, flxBalDetailsHL, flxSeperatorHL, flxBalDetContainerHL, flxInterestDetails, flxDivider, flxAccDetailContainerHL, flxInterestDetContainer, flxAccDetailsHL, flxSeperatorHL1, flxSeperatorHL3);
            var flxPopupNickName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
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
            }, {});
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
            }, {});
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
            }, {});
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
            }, {});
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
            var btnLoanContinue = new kony.ui.Button({
                "bottom": "10dp",
                "centerX": "49.70%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnLoanContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
                "text": "Continue",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(flxHeader, flxContainerHomeLoan, flxPopupNickName, flxPopup, btnLoanContinue);
        };
        return [{
            "addWidgets": addWidgetsfrmLoanPayoff,
            "enabledForIdleTimeout": true,
            "id": "frmLoanPayoff",
            "init": controller.AS_Form_b86fb24b31bf4b1d8ace1d52b7b224b7,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_b1684971d7c94f7aa4fd97d0a130cea0,
            "preShow": function(eventobject) {
                controller.AS_Form_g7ae4569d6834fb587767707fbacfff6(eventobject);
            },
            "skin": "sknFrmoa78d1Gradient50",
            "title": kony.i18n.getLocalizedString("kony.mb.loans.PayOffLoan")
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