define("DisputeTransactions/frmDTAcknowledgement", function() {
    return function(controller) {
        function addWidgetsfrmDTAcknowledgement() {
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
                        "isVisible": false
                    },
                    "flxBack": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "isVisible": true,
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "centerX": "50%",
                        "text": kony.i18n.getLocalizedString("kony.mb.MM.Acknowledgement"),
                        "left": "20dp",
                        "width": "45%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxConfirmation = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxConfirmation",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConfirmation.setDefaultUnit(kony.flex.DP);
            var flxSuccess = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSuccess",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxSuccess.setDefaultUnit(kony.flex.DP);
            var imgGreenTick = new kony.ui.Image2({
                "centerX": "50%",
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
                "centerX": "50%",
                "id": "lblSuccessMessage",
                "isVisible": true,
                "left": "40dp",
                "right": "39dp",
                "skin": "sknLbl000000SSPSemiBold48px",
                "text": kony.i18n.getLocalizedString("kony.mb.disputedTransactions.SuccessfulTransaction"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "312dp",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSavedRecipient = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSavedRecipient",
                "isVisible": true,
                "skin": "sknLbl000000424242SSP34PxTab",
                "text": kony.i18n.getLocalizedString("kony.mb.Dispute.WeHaveNotifiedBank"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "312dp",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 5],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSuccess.add(imgGreenTick, lblSuccessMessage, lblSavedRecipient);
            var flxReferenceNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxReferenceNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReferenceNumber.setDefaultUnit(kony.flex.DP);
            var flxSeperatorReferenceTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorReferenceTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorReferenceTop.setDefaultUnit(kony.flex.DP);
            flxSeperatorReferenceTop.add();
            var flxReferenceNumberLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxReferenceNumberLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxReferenceNumberLabel.setDefaultUnit(kony.flex.DP);
            var lblReference = new kony.ui.Label({
                "id": "lblReference",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.RequestID"),
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
            var lblReferenceColon = new kony.ui.Label({
                "id": "lblReferenceColon",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxReferenceNumberLabel.add(lblReference, lblReferenceColon);
            var lblReferenceValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblReferenceValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "0987654321",
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
            flxReferenceNumber.add(flxSeperatorReferenceTop, flxReferenceNumberLabel, lblReferenceValue);
            var flxFromAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxFromAccount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFromAccount.setDefaultUnit(kony.flex.DP);
            var flxSeperatorFromAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorFromAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorFromAccount.setDefaultUnit(kony.flex.DP);
            flxSeperatorFromAccount.add();
            var flxFromAccountLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxFromAccountLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxFromAccountLabel.setDefaultUnit(kony.flex.DP);
            var lblFromAccount = new kony.ui.Label({
                "id": "lblFromAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.FromAccount"),
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
            var lblFromAccountColon = new kony.ui.Label({
                "id": "lblFromAccountColon",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxFromAccountLabel.add(lblFromAccount, lblFromAccountColon);
            var lblFromAccountValue = new kony.ui.Label({
                "id": "lblFromAccountValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "My Checkings....2343",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblFromBankName = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblFromBankName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": "Bank Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFromAccount.add(flxSeperatorFromAccount, flxFromAccountLabel, lblFromAccountValue, lblFromBankName);
            var flxToAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxToAccount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToAccount.setDefaultUnit(kony.flex.DP);
            var flxSeperartorToAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperartorToAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperartorToAccount.setDefaultUnit(kony.flex.DP);
            flxSeperartorToAccount.add();
            var flxToAccountLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxToAccountLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxToAccountLabel.setDefaultUnit(kony.flex.DP);
            var lblToAccount = new kony.ui.Label({
                "id": "lblToAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.ToAccount"),
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
            var lblToAccountColon = new kony.ui.Label({
                "id": "lblToAccountColon",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxToAccountLabel.add(lblToAccount, lblToAccountColon);
            var lblToAccountValue = new kony.ui.Label({
                "id": "lblToAccountValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Little John...8982",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblToBankName = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblToBankName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": "Bank Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxToAccount.add(flxSeperartorToAccount, flxToAccountLabel, lblToAccountValue, lblToBankName);
            var flxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmount.setDefaultUnit(kony.flex.DP);
            var flxSeperatorAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorAmount.setDefaultUnit(kony.flex.DP);
            flxSeperatorAmount.add();
            var flxAmountLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAmountLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxAmountLabel.setDefaultUnit(kony.flex.DP);
            var lblAmount = new kony.ui.Label({
                "id": "lblAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
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
            var lblAmountColon = new kony.ui.Label({
                "id": "lblAmountColon",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxAmountLabel.add(lblAmount, lblAmountColon);
            var lblAmountValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblAmountValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "$200.00",
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
            flxAmount.add(flxSeperatorAmount, flxAmountLabel, lblAmountValue);
            var flxDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDescription",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDescription.setDefaultUnit(kony.flex.DP);
            var flxSeperatorDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorDescription.setDefaultUnit(kony.flex.DP);
            flxSeperatorDescription.add();
            var flxDescriptionLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDescriptionLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxDescriptionLabel.setDefaultUnit(kony.flex.DP);
            var lblDescription = new kony.ui.Label({
                "id": "lblDescription",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.Accounts.Description"),
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
            var lblDescriptionColon = new kony.ui.Label({
                "id": "lblDescriptionColon",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxDescriptionLabel.add(lblDescription, lblDescriptionColon);
            var lblDescriptionValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblDescriptionValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Bill Pay to John",
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
            flxDescription.add(flxSeperatorDescription, flxDescriptionLabel, lblDescriptionValue);
            var flxTransactionDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTransactionDate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionDate.setDefaultUnit(kony.flex.DP);
            var lblSeperatorTransactionDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "lblSeperatorTransactionDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            lblSeperatorTransactionDate.setDefaultUnit(kony.flex.DP);
            lblSeperatorTransactionDate.add();
            var flxTransactionDateLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTransactionDateLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxTransactionDateLabel.setDefaultUnit(kony.flex.DP);
            var lblTransactionDateColon = new kony.ui.Label({
                "id": "lblTransactionDateColon",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.transactionDate"),
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
            var lblTransactionDate = new kony.ui.Label({
                "id": "lblTransactionDate",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxTransactionDateLabel.add(lblTransactionDateColon, lblTransactionDate);
            var lblTransactionDateValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblTransactionDateValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "04/17/2018",
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
            flxTransactionDate.add(lblSeperatorTransactionDate, flxTransactionDateLabel, lblTransactionDateValue);
            var flxRecurrenceType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxRecurrenceType",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRecurrenceType.setDefaultUnit(kony.flex.DP);
            var lblSeperatorRecurrenceType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "lblSeperatorRecurrenceType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            lblSeperatorRecurrenceType.setDefaultUnit(kony.flex.DP);
            lblSeperatorRecurrenceType.add();
            var flxRecurrenceTypeLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxRecurrenceTypeLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxRecurrenceTypeLabel.setDefaultUnit(kony.flex.DP);
            var lblRecurrenceType = new kony.ui.Label({
                "id": "lblRecurrenceType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.recurrenceType"),
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
            var lblRecurrenceTypeColon = new kony.ui.Label({
                "id": "lblRecurrenceTypeColon",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxRecurrenceTypeLabel.add(lblRecurrenceType, lblRecurrenceTypeColon);
            var lblRecurrenceTypeValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblRecurrenceTypeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Monthly Once",
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
            flxRecurrenceType.add(lblSeperatorRecurrenceType, flxRecurrenceTypeLabel, lblRecurrenceTypeValue);
            var flxReference = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxReference",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReference.setDefaultUnit(kony.flex.DP);
            var lblseperatorrefernce = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "lblseperatorrefernce",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            lblseperatorrefernce.setDefaultUnit(kony.flex.DP);
            lblseperatorrefernce.add();
            var lbltransreferenceLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "lbltransreferenceLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            lbltransreferenceLabel.setDefaultUnit(kony.flex.DP);
            var lbltransreference = new kony.ui.Label({
                "id": "lbltransreference",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.referenceNo"),
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
            var lbltransreferenceColon = new kony.ui.Label({
                "id": "lbltransreferenceColon",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            lbltransreferenceLabel.add(lbltransreference, lbltransreferenceColon);
            var lbltransreferencevalue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lbltransreferencevalue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Monthly Once",
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
            flxReference.add(lblseperatorrefernce, lbltransreferenceLabel, lbltransreferencevalue);
            var flxCategory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCategory",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCategory.setDefaultUnit(kony.flex.DP);
            var flxSeparatorCategory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorCategory",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeparatorCategory.setDefaultUnit(kony.flex.DP);
            flxSeparatorCategory.add();
            var flxCategoryLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCategoryLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxCategoryLabel.setDefaultUnit(kony.flex.DP);
            var lblCategoryLabel = new kony.ui.Label({
                "id": "lblCategoryLabel",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("knoy.mb.CardManagement.Category"),
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
            var lblCategoryColon = new kony.ui.Label({
                "id": "lblCategoryColon",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxCategoryLabel.add(lblCategoryLabel, lblCategoryColon);
            var lblCategoryValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblCategoryValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Online Shopping",
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
            flxCategory.add(flxSeparatorCategory, flxCategoryLabel, lblCategoryValue);
            var flxMerchantAddressName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMerchantAddressName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMerchantAddressName.setDefaultUnit(kony.flex.DP);
            var flxMerchantAddressNameSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxMerchantAddressNameSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxMerchantAddressNameSeparator.setDefaultUnit(kony.flex.DP);
            flxMerchantAddressNameSeparator.add();
            var flxMerchantAddressNameLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMerchantAddressNameLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxMerchantAddressNameLabel.setDefaultUnit(kony.flex.DP);
            var lblMerchantAddressName = new kony.ui.Label({
                "id": "lblMerchantAddressName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("knoy.mb.CardManagement.MerchantAddressName"),
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
            var lblMerchantAddressNameColon = new kony.ui.Label({
                "id": "lblMerchantAddressNameColon",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxMerchantAddressNameLabel.add(lblMerchantAddressName, lblMerchantAddressNameColon);
            var lblMerchantAddressNameValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblMerchantAddressNameValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Picadelly, US",
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
            flxMerchantAddressName.add(flxMerchantAddressNameSeparator, flxMerchantAddressNameLabel, lblMerchantAddressNameValue);
            var flxMerchantCity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMerchantCity",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMerchantCity.setDefaultUnit(kony.flex.DP);
            var flxMerchantCityColon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxMerchantCityColon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxMerchantCityColon.setDefaultUnit(kony.flex.DP);
            flxMerchantCityColon.add();
            var flxMerchantCityLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMerchantCityLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxMerchantCityLabel.setDefaultUnit(kony.flex.DP);
            var lblMerchantCity = new kony.ui.Label({
                "id": "lblMerchantCity",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("knoy.mb.CardManagement.MerchantCity"),
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
            var lblMerchantCItyColon = new kony.ui.Label({
                "id": "lblMerchantCItyColon",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxMerchantCityLabel.add(lblMerchantCity, lblMerchantCItyColon);
            var lblMerchantCityValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblMerchantCityValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Sacremento",
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
            flxMerchantCity.add(flxMerchantCityColon, flxMerchantCityLabel, lblMerchantCityValue);
            var flxNote = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNote",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNote.setDefaultUnit(kony.flex.DP);
            var lblSeperatorNote = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "lblSeperatorNote",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            lblSeperatorNote.setDefaultUnit(kony.flex.DP);
            lblSeperatorNote.add();
            var flxNoteLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNoteLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxNoteLabel.setDefaultUnit(kony.flex.DP);
            var lblNote = new kony.ui.Label({
                "id": "lblNote",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.note"),
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
            var lblNoteColon = new kony.ui.Label({
                "id": "lblNoteColon",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxNoteLabel.add(lblNote, lblNoteColon);
            var lblNoteValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblNoteValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "For party with friends",
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
            flxNote.add(lblSeperatorNote, flxNoteLabel, lblNoteValue);
            var flxReason = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxReason",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReason.setDefaultUnit(kony.flex.DP);
            var lblSeperatorReason = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "lblSeperatorReason",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            lblSeperatorReason.setDefaultUnit(kony.flex.DP);
            lblSeperatorReason.add();
            var flxReasonLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxReasonLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxReasonLabel.setDefaultUnit(kony.flex.DP);
            var lblReason = new kony.ui.Label({
                "id": "lblReason",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.disputedTransactions.SelectReasonForDispute"),
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
            var lblReasonColon = new kony.ui.Label({
                "id": "lblReasonColon",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxReasonLabel.add(lblReason, lblReasonColon);
            var lblReasonValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblReasonValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Billing Error",
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
            flxReason.add(lblSeperatorReason, flxReasonLabel, lblReasonValue);
            var flxDisputeDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDisputeDescription",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDisputeDescription.setDefaultUnit(kony.flex.DP);
            var lblDisputeDescriptionSeperatoe = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "lblDisputeDescriptionSeperatoe",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            lblDisputeDescriptionSeperatoe.setDefaultUnit(kony.flex.DP);
            lblDisputeDescriptionSeperatoe.add();
            var flxDisputeDescriptionLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDisputeDescriptionLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxDisputeDescriptionLabel.setDefaultUnit(kony.flex.DP);
            var lblDisputeDescription = new kony.ui.Label({
                "id": "lblDisputeDescription",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.Accounts.Description"),
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
            var lblDisputeDescriptionColon = new kony.ui.Label({
                "id": "lblDisputeDescriptionColon",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
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
            flxDisputeDescriptionLabel.add(lblDisputeDescription, lblDisputeDescriptionColon);
            var lblDisputeDescriptionValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblDisputeDescriptionValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Billing Error",
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
            flxDisputeDescription.add(lblDisputeDescriptionSeperatoe, flxDisputeDescriptionLabel, lblDisputeDescriptionValue);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "12dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "reverseLayoutDirection": false,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnViewRequests = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnViewRequests",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.disputedTransactions.ViewRequests"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnBackToAccounts = new kony.ui.Button({
                "bottom": "85dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnBackToAccounts",
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
            flxButtons.add(btnViewRequests, btnBackToAccounts);
            flxConfirmation.add(flxSuccess, flxReferenceNumber, flxFromAccount, flxToAccount, flxAmount, flxDescription, flxTransactionDate, flxRecurrenceType, flxReference, flxCategory, flxMerchantAddressName, flxMerchantCity, flxNote, flxReason, flxDisputeDescription, flxSeperator, flxButtons);
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
                "src": "rejected.png",
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
                "text": kony.i18n.getLocalizedString("kony.mb.dispute.disputeRequestFailed"),
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
            this.add(flxHeader, flxConfirmation, flxFailure);
        };
        return [{
            "addWidgets": addWidgetsfrmDTAcknowledgement,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmDTAcknowledgement",
            "init": controller.AS_Form_gb56912dc3054efebc23edbb5d0e0c6f,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_c8c34112cef0443cbcc7340961c7c83e(eventobject);
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