define("TransferModuleEurope/frmBeneficiaryDetailsEurope", function() {
    return function(controller) {
        function addWidgetsfrmBeneficiaryDetailsEurope() {
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
                    "btnLeft": {
                        "isVisible": false
                    },
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Edit"),
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "isVisible": true,
                        "src": "backbutton_1.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "centerX": "55%",
                        "text": kony.i18n.getLocalizedString("kony.mb.TranfersEurope.BeneficiaryDetails"),
                        "left": "15%",
                        "top": "viz.val_cleared",
                        "width": "55%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxBenConfirmation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "85dp",
                "clipBounds": true,
                "id": "flxBenConfirmation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxBenConfirmation.setDefaultUnit(kony.flex.DP);
            var flxConfirmationMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
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
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "150dp",
                "id": "flxConfirmation",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "f9f9",
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
                "centerX": "50.00%",
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
                "centerX": "50.00%",
                "id": "lblSuccessMessage",
                "isVisible": true,
                "skin": "sknlbl000000SSPSemiBold24px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.stopChequeAcknowledgement"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "75dp",
                "width": "95%",
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
            var flxBeneficiaryDetails = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "650dp",
                "horizontalScrollIndicator": true,
                "id": "flxBeneficiaryDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxBeneficiaryDetails.setDefaultUnit(kony.flex.DP);
            var flxConfirmationDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
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
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
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
            var flxReferenceNoDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxReferenceNoDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReferenceNoDetails.setDefaultUnit(kony.flex.DP);
            var lblReferenceNo = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReferenceNo",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.ReferenceID"),
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
            flxReferenceNoDetails.add(lblReferenceNo, lblSemicolon);
            var flxReferenceNoValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxReferenceNoValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReferenceNoValue.setDefaultUnit(kony.flex.DP);
            var lblReferenceNoValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReferenceNoValue",
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
            flxReferenceNoValue.add(lblReferenceNoValue);
            flxReferenceNo.add(flxLine, flxReferenceNoDetails, flxReferenceNoValue);
            var flxBenName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxBenName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBenName.setDefaultUnit(kony.flex.DP);
            var flxLine1 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine1.setDefaultUnit(kony.flex.DP);
            flxLine1.add();
            var flxBenNameDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxBenNameDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBenNameDetails.setDefaultUnit(kony.flex.DP);
            var lblBenNameDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBenNameDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.BenName.Title"),
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
            flxBenNameDetails.add(lblBenNameDetails, lblSemicolon1);
            var flxBenNameValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxBenNameValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBenNameValue.setDefaultUnit(kony.flex.DP);
            var lblBenNameValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBenNameValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "Georgios Spyroun",
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
            flxBenNameValue.add(lblBenNameValue);
            flxBenName.add(flxLine1, flxBenNameDetails, flxBenNameValue);
            var flxAccountNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAccountNo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountNo.setDefaultUnit(kony.flex.DP);
            var flxLine9 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine9",
                "isVisible": false,
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
            var flxAccountNoDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxAccountNoDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountNoDetails.setDefaultUnit(kony.flex.DP);
            var lblAccountNo = new kony.ui.Label({
                "centerY": "50.00%",
                "id": "lblAccountNo",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.accNumber"),
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
            flxAccountNoDetails.add(lblAccountNo, lblSemicolon9);
            var flxAccountNoValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxAccountNoValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountNoValue.setDefaultUnit(kony.flex.DP);
            var lblAccountNoValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAccountNoValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "000065423899",
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
            flxAccountNoValue.add(lblAccountNoValue);
            flxAccountNo.add(flxLine9, flxAccountNoDetails, flxAccountNoValue);
            var flxPaymentMethod = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxPaymentMethod",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPaymentMethod.setDefaultUnit(kony.flex.DP);
            var flxLine2 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine2.setDefaultUnit(kony.flex.DP);
            flxLine2.add();
            var flxPaymentMethodDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxPaymentMethodDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPaymentMethodDetails.setDefaultUnit(kony.flex.DP);
            var lblPaymentMethod = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPaymentMethod",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.PaymentMethod"),
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
            flxPaymentMethodDetails.add(lblPaymentMethod, lblSemicolon2);
            var flxPaymentMethodValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxPaymentMethodValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPaymentMethodValue.setDefaultUnit(kony.flex.DP);
            var lblPaymentMethodValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPaymentMethodValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "Eurobank Internal",
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
            flxPaymentMethodValue.add(lblPaymentMethodValue);
            flxPaymentMethod.add(flxLine2, flxPaymentMethodDetails, flxPaymentMethodValue);
            var flxSwiftCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxSwiftCode",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSwiftCode.setDefaultUnit(kony.flex.DP);
            var flxLine3 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine3.setDefaultUnit(kony.flex.DP);
            flxLine3.add();
            var flxSwiftCodeDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxSwiftCodeDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSwiftCodeDetails.setDefaultUnit(kony.flex.DP);
            var lblSwiftCode = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSwiftCode",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.accountdetails.swiftCode"),
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
            flxSwiftCodeDetails.add(lblSwiftCode, lblSemicolon3);
            var flxSwiftCodeValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxSwiftCodeValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSwiftCodeValue.setDefaultUnit(kony.flex.DP);
            var lblSwiftCodeValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSwiftCodeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "CRBA GR AA 000",
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
            flxSwiftCodeValue.add(lblSwiftCodeValue);
            flxSwiftCode.add(flxLine3, flxSwiftCodeDetails, flxSwiftCodeValue);
            var flxBankAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxBankAddress",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBankAddress.setDefaultUnit(kony.flex.DP);
            var flxLine4 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine4.setDefaultUnit(kony.flex.DP);
            flxLine4.add();
            var flxBankAddressDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxBankAddressDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBankAddressDetails.setDefaultUnit(kony.flex.DP);
            var lblBankAddress = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBankAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.WireTransfer.BankAddress"),
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
            flxBankAddressDetails.add(lblBankAddress, lblSemicolon4);
            var flxBankAddressValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxBankAddressValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBankAddressValue.setDefaultUnit(kony.flex.DP);
            var lblBankAddressValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBankAddressValue",
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
            flxBankAddressValue.add(lblBankAddressValue);
            flxBankAddress.add(flxLine4, flxBankAddressDetails, flxBankAddressValue);
            var flxNicknameBen = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxNicknameBen",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNicknameBen.setDefaultUnit(kony.flex.DP);
            var flxLine5 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine5",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine5.setDefaultUnit(kony.flex.DP);
            flxLine5.add();
            var flxNicknameBenDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxNicknameBenDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNicknameBenDetails.setDefaultUnit(kony.flex.DP);
            var lblNicknameBenDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNicknameBenDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.Manage.NickName"),
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
            flxNicknameBenDetails.add(lblNicknameBenDetails, lblSemicolon5);
            var flxNicknameBenValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxNicknameBenValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNicknameBenValue.setDefaultUnit(kony.flex.DP);
            var lblNicknameBen = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNicknameBen",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "Uncle G",
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
            flxNicknameBenValue.add(lblNicknameBen);
            flxNicknameBen.add(flxLine5, flxNicknameBenDetails, flxNicknameBenValue);
            var flxBenAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxBenAddress",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBenAddress.setDefaultUnit(kony.flex.DP);
            var flxLine10 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine10",
                "isVisible": false,
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
            var flxBenAddressDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxBenAddressDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBenAddressDetails.setDefaultUnit(kony.flex.DP);
            var lblBenAddressTitle = new kony.ui.Label({
                "centerY": "50.43%",
                "id": "lblBenAddressTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.TansfersEurope.BeneficiaryAddress"),
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
            flxBenAddressDetails.add(lblBenAddressTitle, lblSemicolon10);
            var flxBenAddressValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxBenAddressValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBenAddressValue.setDefaultUnit(kony.flex.DP);
            var lblBenAddress = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBenAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "498 Main Street, London, United Kingdom",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": "350dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBenAddressValue.add(lblBenAddress);
            flxBenAddress.add(flxLine10, flxBenAddressDetails, flxBenAddressValue);
            var flxBenPhoneNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxBenPhoneNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBenPhoneNumber.setDefaultUnit(kony.flex.DP);
            var flxLine6 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine6",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine6.setDefaultUnit(kony.flex.DP);
            flxLine6.add();
            var flxBenPhoneNumberDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxBenPhoneNumberDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBenPhoneNumberDetails.setDefaultUnit(kony.flex.DP);
            var lblBenPhoneNumberTitle = new kony.ui.Label({
                "centerY": "49.15%",
                "id": "lblBenPhoneNumberTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.phoneNo"),
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
            flxBenPhoneNumberDetails.add(lblBenPhoneNumberTitle, lblSemicolon6);
            var flxBenPhoneNumberValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxBenPhoneNumberValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBenPhoneNumberValue.setDefaultUnit(kony.flex.DP);
            var lblBenPhoneNumber = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBenPhoneNumber",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "0139 1234567",
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
            flxBenPhoneNumberValue.add(lblBenPhoneNumber);
            flxBenPhoneNumber.add(flxLine6, flxBenPhoneNumberDetails, flxBenPhoneNumberValue);
            var flxBenEmailAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxBenEmailAddress",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBenEmailAddress.setDefaultUnit(kony.flex.DP);
            var flxLine7 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine7",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine7.setDefaultUnit(kony.flex.DP);
            flxLine7.add();
            var flxBenEmailAddressDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxBenEmailAddressDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBenEmailAddressDetails.setDefaultUnit(kony.flex.DP);
            var lblBenEmailAddressTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBenEmailAddressTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.EmailAddress"),
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
            flxBenEmailAddressDetails.add(lblBenEmailAddressTitle, lblSemicolon7);
            var flxBenEmailAddressValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxBenEmailAddressValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBenEmailAddressValue.setDefaultUnit(kony.flex.DP);
            var lblBenEmailAddress = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBenEmailAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "g_spyr@email.com",
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
            flxBenEmailAddressValue.add(lblBenEmailAddress);
            var flxLine8 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine8",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine8.setDefaultUnit(kony.flex.DP);
            flxLine8.add();
            flxBenEmailAddress.add(flxLine7, flxBenEmailAddressDetails, flxBenEmailAddressValue, flxLine8);
            var flxLinkedWithCustomers = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxLinkedWithCustomers",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLinkedWithCustomers.setDefaultUnit(kony.flex.DP);
            var flxLine12 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine12",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLine12.setDefaultUnit(kony.flex.DP);
            flxLine12.add();
            var flxLinkedWithDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxLinkedWithDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLinkedWithDetails.setDefaultUnit(kony.flex.DP);
            var lblLinkedWithTitle = new kony.ui.Label({
                "centerY": "50.43%",
                "id": "lblLinkedWithTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl949494SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.billPay.LinkedWith"),
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
            var lblSemicolon12 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSemicolon12",
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
            flxLinkedWithDetails.add(lblLinkedWithTitle, lblSemicolon12);
            var flxLinkedWithValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxLinkedWithValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLinkedWithValue.setDefaultUnit(kony.flex.DP);
            var lblLinkedWith = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLinkedWith",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "6 Customer ID(s)",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": "350dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLinkedWithValue.add(lblLinkedWith);
            flxLinkedWithCustomers.add(flxLine12, flxLinkedWithDetails, flxLinkedWithValue);
            flxConfirmationDetails.add(flxReferenceNo, flxBenName, flxAccountNo, flxPaymentMethod, flxSwiftCode, flxBankAddress, flxNicknameBen, flxBenAddress, flxBenPhoneNumber, flxBenEmailAddress, flxLinkedWithCustomers);
            flxBeneficiaryDetails.add(flxConfirmationDetails);
            flxConfirmationMain.add(flxConfirmation, flxBeneficiaryDetails);
            flxBenConfirmation.add(flxConfirmationMain);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "65dp",
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
            var flxLine11 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine11",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLine11.setDefaultUnit(kony.flex.DP);
            flxLine11.add();
            var btnBack = new kony.ui.Button({
                "bottom": "0dp",
                "centerX": "49.97%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnBack",
                "isVisible": true,
                "left": "23dp",
                "right": "23dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.makeAPayment"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnView = new kony.ui.Button({
                "bottom": "10dp",
                "centerX": "49.97%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnView",
                "isVisible": false,
                "left": "23dp",
                "right": "23dp",
                "skin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.disputedTransactions.ViewRequests"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtons.add(flxLine11, btnBack, btnView);
            var flxAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAdditionalOptions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1070
            }, {}, {});
            flxAdditionalOptions.setDefaultUnit(kony.flex.DP);
            var flxPerformAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 80,
                "clipBounds": true,
                "id": "flxPerformAdditionalOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "10dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 2
            }, {}, {});
            flxPerformAdditionalOptions.setDefaultUnit(kony.flex.DP);
            var flxNickname = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxNickname",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNickname.setDefaultUnit(kony.flex.DP);
            var lblNickname = new kony.ui.Label({
                "centerX": "50.04%",
                "centerY": "50.00%",
                "id": "lblNickname",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.AccInfoEdit.Title"),
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
            var flxSeparatorNickname = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparatorNickname",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorNickname.setDefaultUnit(kony.flex.DP);
            flxSeparatorNickname.add();
            flxNickname.add(lblNickname, flxSeparatorNickname);
            var flxAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddress.setDefaultUnit(kony.flex.DP);
            var lblAddress = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblAddress",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfileEditAddress.Title"),
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
            var flxSeparatorAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparatorAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorAddress.setDefaultUnit(kony.flex.DP);
            flxSeparatorAddress.add();
            flxAddress.add(lblAddress, flxSeparatorAddress);
            var flxPhonenumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxPhonenumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPhonenumber.setDefaultUnit(kony.flex.DP);
            var lblPhonenumber = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "id": "lblPhonenumber",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.EditPhonenumber"),
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
            var flxSeparatorPhonenumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparatorPhonenumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorPhonenumber.setDefaultUnit(kony.flex.DP);
            flxSeparatorPhonenumber.add();
            flxPhonenumber.add(lblPhonenumber, flxSeparatorPhonenumber);
            var flxEmailID = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxEmailID",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEmailID.setDefaultUnit(kony.flex.DP);
            var lblEmailID = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEmailID",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.EditEmailAddress"),
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
            var flxSeparatorEmailID = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparatorEmailID",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorEmailID.setDefaultUnit(kony.flex.DP);
            flxSeparatorEmailID.add();
            flxEmailID.add(lblEmailID, flxSeparatorEmailID);
            var flxRemoveProfilePicture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxRemoveProfilePicture",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRemoveProfilePicture.setDefaultUnit(kony.flex.DP);
            var lblRemoveProfilePicture = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblRemoveProfilePicture",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.profilePersonalDetails.RemoveProfilePicture"),
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
            var Copyflxs0a346519724b140 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "Copyflxs0a346519724b140",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Copyflxs0a346519724b140.setDefaultUnit(kony.flex.DP);
            Copyflxs0a346519724b140.add();
            flxRemoveProfilePicture.add(lblRemoveProfilePicture, Copyflxs0a346519724b140);
            var flxEditPhoneNumbers = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxEditPhoneNumbers",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEditPhoneNumbers.setDefaultUnit(kony.flex.DP);
            var lblEditPhoneNumbers = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEditPhoneNumbers",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.EditPhoneNumbers"),
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
            var flxse = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxse",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxse.setDefaultUnit(kony.flex.DP);
            flxse.add();
            flxEditPhoneNumbers.add(lblEditPhoneNumbers, flxse);
            var flxEditLinkedCustomer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxEditLinkedCustomer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEditLinkedCustomer.setDefaultUnit(kony.flex.DP);
            var lblEditLinkedCustomer = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEditLinkedCustomer",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.mb/billpay.EditLinkedId"),
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
            var flxSeparatorLinkedCustomer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparatorLinkedCustomer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorLinkedCustomer.setDefaultUnit(kony.flex.DP);
            flxSeparatorLinkedCustomer.add();
            flxEditLinkedCustomer.add(lblEditLinkedCustomer, flxSeparatorLinkedCustomer);
            var flxRemoveBeneficiary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxRemoveBeneficiary",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRemoveBeneficiary.setDefaultUnit(kony.flex.DP);
            var lblRemoveBeneficiary = new kony.ui.Label({
                "centerX": "50.04%",
                "centerY": "50.00%",
                "id": "lblRemoveBeneficiary",
                "isVisible": true,
                "skin": "sknLblFF3B30SSP34px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.RemoveBeneficiary"),
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
            flxRemoveBeneficiary.add(lblRemoveBeneficiary);
            flxPerformAdditionalOptions.add(flxNickname, flxAddress, flxPhonenumber, flxEmailID, flxRemoveProfilePicture, flxEditPhoneNumbers, flxEditLinkedCustomer, flxRemoveBeneficiary);
            var flxCancelOption = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxCancelOption",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "isModalContainer": false,
                "right": "10dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 1070
            }, {}, {});
            flxCancelOption.setDefaultUnit(kony.flex.DP);
            var flxCancel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxCancel",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1070
            }, {}, {});
            flxCancel.setDefaultUnit(kony.flex.DP);
            var lblCancel = new kony.ui.Label({
                "centerX": "50.43%",
                "centerY": "50.33%",
                "id": "lblCancel",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("kony.tab.common.CANCEL"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1070
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCancel.add(lblCancel);
            flxCancelOption.add(flxCancel);
            var flxTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "230dp",
                "clipBounds": true,
                "id": "flxTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTop.setDefaultUnit(kony.flex.DP);
            flxTop.add();
            flxAdditionalOptions.add(flxPerformAdditionalOptions, flxCancelOption, flxTop);
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
            this.add(flxHeader, flxBenConfirmation, flxButtons, flxAdditionalOptions, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmBeneficiaryDetailsEurope,
            "enabledForIdleTimeout": true,
            "id": "frmBeneficiaryDetailsEurope",
            "init": controller.AS_Form_d10a62827207450d82302956733a9d0b,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_ha2567a69e05422a94225d07d2060aba,
            "preShow": function(eventobject) {
                controller.AS_Form_ebd1bfed75ff497b8b98eb5087dabc58(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.TranfersEurope.BeneficiaryDetails")
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