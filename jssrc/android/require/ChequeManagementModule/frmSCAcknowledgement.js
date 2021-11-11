define("ChequeManagementModule/frmSCAcknowledgement", function() {
    return function(controller) {
        function addWidgetsfrmSCAcknowledgement() {
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
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "isVisible": false,
                        "src": "backbutton_1.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "text": kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement"),
                        "left": "30%",
                        "top": "viz.val_cleared",
                        "width": "65%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxConfirmationMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "830dp",
                "horizontalScrollIndicator": true,
                "id": "flxConfirmationMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConfirmationMain.setDefaultUnit(kony.flex.DP);
            var flxConfirmation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxConfirmation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "zIndex": 1
            }, {}, {});
            flxConfirmation.setDefaultUnit(kony.flex.DP);
            var flxSuccess = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSuccess",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxSuccess.setDefaultUnit(kony.flex.DP);
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
                "top": 0,
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var imgGreenTick = new kony.ui.Image2({
                "centerX": "50.00%",
                "height": "60dp",
                "id": "imgGreenTick",
                "isVisible": true,
                "skin": "slImage",
                "src": "confirmation_tick.png",
                "top": "20dp",
                "width": "60dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSuccessMessage = new kony.ui.Label({
                "bottom": "12dp",
                "centerX": "50.00%",
                "id": "lblSuccessMessage",
                "isVisible": true,
                "skin": "sknlbl000000SSPSemiBold24px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.stopChequeAcknowledgement"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "95dp",
                "width": "85%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxSuccess.add(flxSeperator, imgGreenTick, lblSuccessMessage, flxSeparator);
            flxConfirmation.add(flxSuccess);
            var flxConfirmationDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxConfirmationDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConfirmationDetails.setDefaultUnit(kony.flex.DP);
            var flxReferenceNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxReferenceNo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReferenceNo.setDefaultUnit(kony.flex.DP);
            var flxLine = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine.setDefaultUnit(kony.flex.DP);
            flxLine.add();
            var flxReferenceDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22dp",
                "id": "flxReferenceDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "9dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReferenceDetails.setDefaultUnit(kony.flex.DP);
            var lblReferenceNo = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReferenceNo",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.referenceNumber"),
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
            var lblSemicolon = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSemicolon",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxReferenceDetails.add(lblReferenceNo, lblSemicolon);
            var flxReferenceValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "23dp",
                "id": "flxReferenceValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReferenceValue.setDefaultUnit(kony.flex.DP);
            var lblReferenceNumber = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReferenceNumber",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "45423792753",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxReferenceValue.add(lblReferenceNumber);
            flxReferenceNo.add(flxLine, flxReferenceDetails, flxReferenceValue);
            var flxAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxAccount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccount.setDefaultUnit(kony.flex.DP);
            var flxLine1 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine1.setDefaultUnit(kony.flex.DP);
            flxLine1.add();
            var flxAccountDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22dp",
                "id": "flxAccountDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "9dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountDetails.setDefaultUnit(kony.flex.DP);
            var lblAccountDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAccountDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.tab.BillPay.FromAccount"),
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
            var lblSemicolon1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSemicolon1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxAccountDetails.add(lblAccountDetails, lblSemicolon1);
            var flxAccountValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "23dp",
                "id": "flxAccountValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountValue.setDefaultUnit(kony.flex.DP);
            var lblFromAccount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFromAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "My Checking Account ...3254",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAccountValue.add(lblFromAccount);
            flxAccount.add(flxLine1, flxAccountDetails, flxAccountValue);
            var flxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmount.setDefaultUnit(kony.flex.DP);
            var flxLine9 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine9.setDefaultUnit(kony.flex.DP);
            flxLine9.add();
            var flxAmountDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22dp",
                "id": "flxAmountDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "9dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmountDetails.setDefaultUnit(kony.flex.DP);
            var lblAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
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
            var lblSemicolon9 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSemicolon9",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxAmountDetails.add(lblAmount, lblSemicolon9);
            var flxAmountValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "23dp",
                "id": "flxAmountValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmountValue.setDefaultUnit(kony.flex.DP);
            var lblAmountValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAmountValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$500.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAmountValue.add(lblAmountValue);
            flxAmount.add(flxLine9, flxAmountDetails, flxAmountValue);
            var flxPayeeName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxPayeeName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPayeeName.setDefaultUnit(kony.flex.DP);
            var flxLine2 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine2.setDefaultUnit(kony.flex.DP);
            flxLine2.add();
            var flxPayeeLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22dp",
                "id": "flxPayeeLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "9dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPayeeLabel.setDefaultUnit(kony.flex.DP);
            var lblPayee = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPayee",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.payeeName"),
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
            var lblSemicolon2 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSemicolon2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxPayeeLabel.add(lblPayee, lblSemicolon2);
            var flxPayee = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "23dp",
                "id": "flxPayee",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPayee.setDefaultUnit(kony.flex.DP);
            var lblPayeeName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPayeeName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "John Will",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPayee.add(lblPayeeName);
            flxPayeeName.add(flxLine2, flxPayeeLabel, flxPayee);
            var flxChequeType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxChequeType",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChequeType.setDefaultUnit(kony.flex.DP);
            var flxLine3 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine3.setDefaultUnit(kony.flex.DP);
            flxLine3.add();
            var flxCheque = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22dp",
                "id": "flxCheque",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "9dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCheque.setDefaultUnit(kony.flex.DP);
            var lblCheque = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCheque",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.chequeType"),
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
            var lblSemicolon3 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSemicolon3",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxCheque.add(lblCheque, lblSemicolon3);
            var flxType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "23dp",
                "id": "flxType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxType.setDefaultUnit(kony.flex.DP);
            var lblChequeType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblChequeType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "Single",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxType.add(lblChequeType);
            flxChequeType.add(flxLine3, flxCheque, flxType);
            var flxChequeNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxChequeNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChequeNumber.setDefaultUnit(kony.flex.DP);
            var flxLine4 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine4.setDefaultUnit(kony.flex.DP);
            flxLine4.add();
            var flxChequeDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22dp",
                "id": "flxChequeDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "9dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChequeDetails.setDefaultUnit(kony.flex.DP);
            var lblChequeNum = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblChequeNum",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.chequeNumber"),
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
            var lblSemicolon4 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSemicolon4",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxChequeDetails.add(lblChequeNum, lblSemicolon4);
            var flxChequeNumberValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "23dp",
                "id": "flxChequeNumberValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChequeNumberValue.setDefaultUnit(kony.flex.DP);
            var lblChequeNumber = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblChequeNumber",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "7575654",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxChequeNumberValue.add(lblChequeNumber);
            flxChequeNumber.add(flxLine4, flxChequeDetails, flxChequeNumberValue);
            var flxFee = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxFee",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFee.setDefaultUnit(kony.flex.DP);
            var flxLine5 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine5.setDefaultUnit(kony.flex.DP);
            flxLine5.add();
            var flxFeeDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22dp",
                "id": "flxFeeDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "9dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFeeDetails.setDefaultUnit(kony.flex.DP);
            var lblFeeDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFeeDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("Kony.mb.CM.feeAck"),
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
            var lblSemicolon5 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSemicolon5",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxFeeDetails.add(lblFeeDetails, lblSemicolon5);
            var flxFeeValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "23dp",
                "id": "flxFeeValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFeeValue.setDefaultUnit(kony.flex.DP);
            var lblFee = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFee",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$5.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFeeValue.add(lblFee);
            flxFee.add(flxLine5, flxFeeDetails, flxFeeValue);
            var flxIssueDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxIssueDate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIssueDate.setDefaultUnit(kony.flex.DP);
            var flxLine10 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine10",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine10.setDefaultUnit(kony.flex.DP);
            flxLine10.add();
            var flxIssueDateDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22dp",
                "id": "flxIssueDateDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "9dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIssueDateDetails.setDefaultUnit(kony.flex.DP);
            var lblIssueDateTitle = new kony.ui.Label({
                "centerY": "50.43%",
                "id": "lblIssueDateTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.issueDate"),
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
            var lblSemicolon10 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSemicolon10",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxIssueDateDetails.add(lblIssueDateTitle, lblSemicolon10);
            var flxIssueDateValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "23dp",
                "id": "flxIssueDateValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIssueDateValue.setDefaultUnit(kony.flex.DP);
            var lblIssueDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblIssueDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "05/06/2020",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": "250dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxIssueDateValue.add(lblIssueDate);
            flxIssueDate.add(flxLine10, flxIssueDateDetails, flxIssueDateValue);
            var flxReason = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxReason",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReason.setDefaultUnit(kony.flex.DP);
            var flxLine6 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine6.setDefaultUnit(kony.flex.DP);
            flxLine6.add();
            var flxReasonLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22dp",
                "id": "flxReasonLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "9dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReasonLabel.setDefaultUnit(kony.flex.DP);
            var lblReasonTitle = new kony.ui.Label({
                "centerY": "50.43%",
                "id": "lblReasonTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Reason"),
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
            var lblSemicolon6 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSemicolon6",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxReasonLabel.add(lblReasonTitle, lblSemicolon6);
            var flxReasonValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "23dp",
                "id": "flxReasonValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReasonValue.setDefaultUnit(kony.flex.DP);
            var lblReason = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReason",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "Cheque Destroyed",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": "250dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxReasonValue.add(lblReason);
            flxReason.add(flxLine6, flxReasonLabel, flxReasonValue);
            var flxNotes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxNotes",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNotes.setDefaultUnit(kony.flex.DP);
            var flxLine7 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine7.setDefaultUnit(kony.flex.DP);
            flxLine7.add();
            var flxNotesDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22dp",
                "id": "flxNotesDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "9dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNotesDetails.setDefaultUnit(kony.flex.DP);
            var lblNotesTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNotesTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.notes"),
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
            var lblSemicolon7 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSemicolon7",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxNotesDetails.add(lblNotesTitle, lblSemicolon7);
            var flxNotesValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "23dp",
                "id": "flxNotesValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNotesValue.setDefaultUnit(kony.flex.DP);
            var lblNotes = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNotes",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNotesValue.add(lblNotes);
            var flxLine8 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine8.setDefaultUnit(kony.flex.DP);
            flxLine8.add();
            flxNotes.add(flxLine7, flxNotesDetails, flxNotesValue, flxLine8);
            flxConfirmationDetails.add(flxReferenceNo, flxAccount, flxAmount, flxPayeeName, flxChequeType, flxChequeNumber, flxFee, flxIssueDate, flxReason, flxNotes);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "145dp",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnBack = new kony.ui.Button({
                "bottom": "80dp",
                "centerX": "49.97%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "45dp",
                "id": "btnBack",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.disputedTransactions.BackToAccounts"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnView = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "49.97%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "45dp",
                "id": "btnView",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.disputedTransactions.ViewRequests"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtons.add(btnBack, btnView);
            flxConfirmationMain.add(flxConfirmation, flxConfirmationDetails, flxButtons);
            this.add(flxHeader, flxConfirmationMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSCAcknowledgement,
            "enabledForIdleTimeout": true,
            "id": "frmSCAcknowledgement",
            "init": controller.AS_Form_h9bbfd3c2fec464ca15591a98965a690,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_e0492e8c2e2642fe811899348e78c797(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement")
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