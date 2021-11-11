define("DisputeTransactions/frmDTConfirm", function() {
    return function(controller) {
        function addWidgetsfrmDTConfirm() {
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
                        "centerX": "52%",
                        "text": kony.i18n.getLocalizedString("kony.mb.disputedTransactions.ConfirmDisputeTransactions"),
                        "left": "20dp",
                        "width": "70%"
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
                "skin": "sknFlxScrlffffff",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConfirmation.setDefaultUnit(kony.flex.DP);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var flxWireTransfer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "72dp",
                "id": "flxWireTransfer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWireTransfer.setDefaultUnit(kony.flex.DP);
            var lblTransferDescription = new kony.ui.Label({
                "id": "lblTransferDescription",
                "isVisible": true,
                "left": "20dp",
                "maxNumberOfLines": 1,
                "maxWidth": "40%",
                "skin": "sknLbl424242SSPLight13px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.wireTransfer"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "17dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransferValue = new kony.ui.Label({
                "id": "lblTransferValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPSB18px",
                "text": "$200.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "38dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDisputeStatus = new kony.ui.Label({
                "bottom": "16dp",
                "id": "lblDisputeStatus",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl04a615SSPReg32px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.successful"),
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
            flxWireTransfer.add(lblTransferDescription, lblTransferValue, lblDisputeStatus);
            var flxToAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxToAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
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
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperartorToAccount.setDefaultUnit(kony.flex.DP);
            flxSeperartorToAccount.add();
            var lblToAccountValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblToAccountValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Little John...8982",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "28dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblToBankType = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblToBankType",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": "Checking Account",
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
                "text": kony.i18n.getLocalizedString("kony.mb.common.To"),
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
            var lblToColon = new kony.ui.Label({
                "id": "lblToColon",
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
            flxToAccountLabel.add(lblToAccount, lblToColon);
            flxToAccount.add(flxSeperartorToAccount, lblToAccountValue, lblToBankType, flxToAccountLabel);
            var flxFromAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
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
                "text": kony.i18n.getLocalizedString("kony.mb.common.from"),
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
            var lblFromColon = new kony.ui.Label({
                "id": "lblFromColon",
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
            flxFromAccountLabel.add(lblFromAccount, lblFromColon);
            var lblFromAccountValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblFromAccountValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "My Checkings....2343",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "28dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblFromBankType = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblFromBankType",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": "Checking Account",
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
            flxFromAccount.add(flxSeperatorFromAccount, flxFromAccountLabel, lblFromAccountValue, lblFromBankType);
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
            var lblDescColon = new kony.ui.Label({
                "id": "lblDescColon",
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
            flxDescriptionLabel.add(lblDescription, lblDescColon);
            var lblDescriptionValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblDescriptionValue",
                "isVisible": true,
                "left": "20dp",
                "maxNumberOfLines": 3,
                "skin": "sknlbl424242SSPR15px",
                "text": "Bill pay To Me",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": "90%",
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
                "reverseLayoutDirection": false,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxTransactionDateLabel.setDefaultUnit(kony.flex.DP);
            var lblTransactionDate = new kony.ui.Label({
                "id": "lblTransactionDate",
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
            var lblDateColon = new kony.ui.Label({
                "id": "lblDateColon",
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
            flxTransactionDateLabel.add(lblTransactionDate, lblDateColon);
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
            var lblTypeColon = new kony.ui.Label({
                "id": "lblTypeColon",
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
            flxRecurrenceTypeLabel.add(lblRecurrenceType, lblTypeColon);
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
            var lblRefColon = new kony.ui.Label({
                "id": "lblRefColon",
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
            flxReferenceNumberLabel.add(lblReference, lblRefColon);
            var lblReferenceValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblReferenceValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
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
            flxDetails.add(flxWireTransfer, flxToAccount, flxFromAccount, flxDescription, flxTransactionDate, flxRecurrenceType, flxReferenceNumber, flxCategory, flxMerchantAddressName, flxMerchantCity, flxNote, flxReason);
            var flxDescriptionOptional = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDescriptionOptional",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDescriptionOptional.setDefaultUnit(kony.flex.DP);
            var flxSeperatorDescriptionOptional = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorDescriptionOptional",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorDescriptionOptional.setDefaultUnit(kony.flex.DP);
            flxSeperatorDescriptionOptional.add();
            var lblDescriptionOptional = new kony.ui.Label({
                "id": "lblDescriptionOptional",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPR15px",
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
            var txtbxDescOptional = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextAreaFocus",
                "height": "60dp",
                "id": "txtbxDescOptional",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": 20,
                "numberOfVisibleLines": 3,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.Europe.AttachmentsOptional"),
                "right": 20,
                "skin": "skntxtarea424242SSP100",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": 35
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            flxDescriptionOptional.add(flxSeperatorDescriptionOptional, lblDescriptionOptional, txtbxDescOptional);
            var btnContinue = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnContinue",
                "isVisible": true,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.tab.common.Continue"),
                "top": "20dp",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxConfirmation.add(flxDetails, flxDescriptionOptional, btnContinue);
            this.add(flxHeader, flxConfirmation);
        };
        return [{
            "addWidgets": addWidgetsfrmDTConfirm,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmDTConfirm",
            "init": controller.AS_Form_h04e58ff2f764f50aeed81dd5c2c0267,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_f126f98c53c648d4a58090b2c0ec2fd9(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.disputedTransactions.ConfirmDisputeTransactions")
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