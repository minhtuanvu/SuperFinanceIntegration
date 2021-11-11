define("ChequeManagementModule/frmCMConfirmation", function() {
    return function(controller) {
        function addWidgetsfrmCMConfirmation() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
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
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "isVisible": false,
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "centerX": "50%",
                        "text": kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement"),
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
            var flxConfirmationMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "70dp",
                "clipBounds": true,
                "id": "flxConfirmationMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConfirmationMain.setDefaultUnit(kony.flex.DP);
            var flxConfirmation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "150dp",
                "id": "flxConfirmation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConfirmation.setDefaultUnit(kony.flex.DP);
            var flxSuccess = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSuccess",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
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
                "centerX": "50%",
                "height": "60dp",
                "id": "imgGreenTick",
                "isVisible": true,
                "skin": "slImage",
                "src": "confirmation_tick.png",
                "top": "13dp",
                "width": "60dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSuccessMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSuccessMessage",
                "isVisible": true,
                "skin": "sknlbl000000SSPSemiBold24px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.acknowledgementText"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "75dp",
                "width": "80%",
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
            var flxConfirmationDetails = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxConfirmationDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "150dp",
                "verticalScrollIndicator": true,
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
                "centerX": "50%",
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
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
                "height": "30dp",
                "id": "flxReferenceDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
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
                "left": "5dp",
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
                "height": "30dp",
                "id": "flxReferenceValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReferenceValue.setDefaultUnit(kony.flex.DP);
            var lblReferenceValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReferenceValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
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
            flxReferenceValue.add(lblReferenceValue);
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
                "centerX": "50%",
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
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
                "height": "30dp",
                "id": "flxAccountDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
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
                "text": kony.i18n.getLocalizedString("kony.mb.CM.account"),
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
                "left": "5dp",
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
                "height": "30dp",
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
            var lblAccountValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAccountValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
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
            flxAccountValue.add(lblAccountValue);
            flxAccount.add(flxLine1, flxAccountDetails, flxAccountValue);
            var flxDateofRequest = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxDateofRequest",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDateofRequest.setDefaultUnit(kony.flex.DP);
            var flxLine2 = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine2.setDefaultUnit(kony.flex.DP);
            flxLine2.add();
            var flxDateLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxDateLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDateLabel.setDefaultUnit(kony.flex.DP);
            var lblDateofRequest = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDateofRequest",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.dateOfRequest"),
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
                "left": "5dp",
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
            flxDateLabel.add(lblDateofRequest, lblSemicolon2);
            var flxDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDate.setDefaultUnit(kony.flex.DP);
            var lblDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
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
            flxDate.add(lblDate);
            flxDateofRequest.add(flxLine2, flxDateLabel, flxDate);
            var flxChequeBooks = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxChequeBooks",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChequeBooks.setDefaultUnit(kony.flex.DP);
            var flxLine3 = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine3.setDefaultUnit(kony.flex.DP);
            flxLine3.add();
            var flxChequebook = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxChequebook",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChequebook.setDefaultUnit(kony.flex.DP);
            var lblChequebook = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblChequebook",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.chequeBook"),
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
                "left": "5dp",
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
            flxChequebook.add(lblChequebook, lblSemicolon3);
            var flxNoofCheques = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxNoofCheques",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNoofCheques.setDefaultUnit(kony.flex.DP);
            var lblNoofCheques = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNoofCheques",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
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
            flxNoofCheques.add(lblNoofCheques);
            flxChequeBooks.add(flxLine3, flxChequebook, flxNoofCheques);
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
            var flxLine4 = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine4.setDefaultUnit(kony.flex.DP);
            flxLine4.add();
            var flxFeeDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxFeeDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFeeDetails.setDefaultUnit(kony.flex.DP);
            var lblFee = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFee",
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
            var lblSemicolon4 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSemicolon4",
                "isVisible": false,
                "left": "5dp",
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
            flxFeeDetails.add(lblFee, lblSemicolon4);
            var flxFeeAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxFeeAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFeeAmount.setDefaultUnit(kony.flex.DP);
            var lblFeeAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFeeAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
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
            flxFeeAmount.add(lblFeeAmount);
            flxFee.add(flxLine4, flxFeeDetails, flxFeeAmount);
            var flxDeliveryType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxDeliveryType",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDeliveryType.setDefaultUnit(kony.flex.DP);
            var flxLine5 = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine5.setDefaultUnit(kony.flex.DP);
            flxLine5.add();
            var flxDeliveryTypeDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxDeliveryTypeDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDeliveryTypeDetails.setDefaultUnit(kony.flex.DP);
            var lblDeliveryDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDeliveryDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.deliveryType"),
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
                "isVisible": true,
                "left": "5dp",
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
            flxDeliveryTypeDetails.add(lblDeliveryDetails, lblSemicolon5);
            var flxDeliveryTypeValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxDeliveryTypeValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDeliveryTypeValue.setDefaultUnit(kony.flex.DP);
            var lblDeliveryTypeValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDeliveryTypeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
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
            flxDeliveryTypeValue.add(lblDeliveryTypeValue);
            flxDeliveryType.add(flxLine5, flxDeliveryTypeDetails, flxDeliveryTypeValue);
            var flxAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxAddress",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddress.setDefaultUnit(kony.flex.DP);
            var flxLine6 = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine6.setDefaultUnit(kony.flex.DP);
            flxLine6.add();
            var flxAddressLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxAddressLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddressLabel.setDefaultUnit(kony.flex.DP);
            var lblAddress = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.address"),
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
                "left": "5dp",
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
            flxAddressLabel.add(lblAddress, lblSemicolon6);
            var flxAddressValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxAddressValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddressValue.setDefaultUnit(kony.flex.DP);
            var lblAddressDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAddressDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
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
            flxAddressValue.add(lblAddressDetails);
            flxAddress.add(flxLine6, flxAddressLabel, flxAddressValue);
            var flxDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxDescription",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDescription.setDefaultUnit(kony.flex.DP);
            var flxLine7 = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine7.setDefaultUnit(kony.flex.DP);
            flxLine7.add();
            var flxDescriptionDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxDescriptionDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDescriptionDetails.setDefaultUnit(kony.flex.DP);
            var lblDescription = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDescription",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.description"),
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
                "left": "5dp",
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
            flxDescriptionDetails.add(lblDescription, lblSemicolon7);
            var flxDescriptionValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxDescriptionValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDescriptionValue.setDefaultUnit(kony.flex.DP);
            var lblDescriptionValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDescriptionValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
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
            flxDescriptionValue.add(lblDescriptionValue);
            var flxLine8 = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine8.setDefaultUnit(kony.flex.DP);
            flxLine8.add();
            flxDescription.add(flxLine7, flxDescriptionDetails, flxDescriptionValue, flxLine8);
            flxConfirmationDetails.add(flxReferenceNo, flxAccount, flxDateofRequest, flxChequeBooks, flxFee, flxDeliveryType, flxAddress, flxDescription);
            flxConfirmationMain.add(flxConfirmation, flxConfirmationDetails);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "70dp",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnDashboard = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnDashboard",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.backToCM"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtons.add(btnDashboard);
            var flxFailure = new kony.ui.FlexContainer({
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxFailure",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxScrlffffff0j1a2b91bf84447",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFailure.setDefaultUnit(kony.flex.DP);
            var flxNoTransfer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "47.37%",
                "clipBounds": true,
                "id": "flxNoTransfer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxNoTransfer.setDefaultUnit(kony.flex.DP);
            var imgCross = new kony.ui.Image2({
                "centerX": "50.00%",
                "height": "72dp",
                "id": "imgCross",
                "isVisible": true,
                "skin": "slImage",
                "src": "error.png",
                "top": "17%",
                "width": "73dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblMessage",
                "isVisible": true,
                "skin": "sknLbl424242SSP55px",
                "text": kony.i18n.getLocalizedString("kony.cm.errorMsg"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "40dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblError",
                "isVisible": true,
                "skin": "sknLbl424242SSPReg30px",
                "text": "We couldn't schedule your transfer at this time. Please try again later.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "80%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNoTransfer.add(imgCross, lblMessage, lblError);
            var btnToAccount = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnToAccount",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MyAccounts.Title"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFailure.add(flxNoTransfer, btnToAccount);
            this.add(flxHeader, flxConfirmationMain, flxButtons, flxFailure);
        };
        return [{
            "addWidgets": addWidgetsfrmCMConfirmation,
            "bounces": false,
            "enabledForIdleTimeout": true,
            "id": "frmCMConfirmation",
            "init": controller.AS_Form_b9143e61ded749dc851b72d92a493e03,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_b2d5f65a3eed49e3bd0236dd358785ce,
            "preShow": function(eventobject) {
                controller.AS_Form_ieb1ffef106c4e4f85b8fe74e76f672a(eventobject);
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