define("DisputeTransactions/frmDisputeTransactionDetails", function() {
    return function(controller) {
        function addWidgetsfrmDisputeTransactionDetails() {
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
                "zIndex": 4
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
                        "isVisible": false,
                        "text": "EDIT"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton_1.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.transaction.disputeTransaction")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxTransfers = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxTransfers",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 400
            }, {}, {});
            flxTransfers.setDefaultUnit(kony.flex.DP);
            var flxMainTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxMainTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainTrans.setDefaultUnit(kony.flex.DP);
            var lblTransferDescription = new kony.ui.Label({
                "id": "lblTransferDescription",
                "isVisible": true,
                "left": "20dp",
                "maxNumberOfLines": 1,
                "maxWidth": "40%",
                "skin": "sknLbl424242SSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.transfer"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "8dp",
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
                "right": "20dp",
                "skin": "sknLbl424242SSP28px",
                "text": "$200.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDisputeDate = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblDisputeDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "20/12/2020",
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
            var lblDisputeStatus = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblDisputeStatus",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl727272SSPReg22px",
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
            flxMainTrans.add(lblTransferDescription, lblTransferValue, lblDisputeDate, lblDisputeStatus);
            var flxDisputeId = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxDisputeId",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDisputeId.setDefaultUnit(kony.flex.DP);
            var flxDisputeIdLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDisputeIdLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {}, {});
            flxDisputeIdLabel.setDefaultUnit(kony.flex.DP);
            var lblDisputeId = new kony.ui.Label({
                "id": "lblDisputeId",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDIsputeIdColon = new kony.ui.Label({
                "id": "lblDIsputeIdColon",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 110
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDisputeIdLabel.add(lblDisputeId, lblDIsputeIdColon);
            var lblDisputeIdValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblDisputeIdValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "0987654321",
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
            var flxSeparatorTrans1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorTrans1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeparatorTrans1.setDefaultUnit(kony.flex.DP);
            flxSeparatorTrans1.add();
            flxDisputeId.add(flxDisputeIdLabel, lblDisputeIdValue, flxSeparatorTrans1);
            var flxRecurrenceTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxRecurrenceTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRecurrenceTrans.setDefaultUnit(kony.flex.DP);
            var flxReferenceLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxReferenceLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {}, {});
            flxReferenceLabel.setDefaultUnit(kony.flex.DP);
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
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblReferenceSemicolon = new kony.ui.Label({
                "id": "lblReferenceSemicolon",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 110
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxReferenceLabel.add(lblReference, lblReferenceSemicolon);
            var lblReferenceValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblReferenceValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "0987654321",
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
            var flxSeperatorTrans7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans7.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans7.add();
            flxRecurrenceTrans.add(flxReferenceLabel, lblReferenceValue, flxSeperatorTrans7);
            var flxTransferredToTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxTransferredToTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferredToTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans.add();
            var flxTransferredFromLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTransferredFromLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxTransferredFromLabel.setDefaultUnit(kony.flex.DP);
            var lblTransferredToTrans = new kony.ui.Label({
                "id": "lblTransferredToTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.FromAccount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblFromSemicolon = new kony.ui.Label({
                "id": "lblFromSemicolon",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 110
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTransferredFromLabel.add(lblTransferredToTrans, lblFromSemicolon);
            var lblTransferredFromValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblTransferredFromValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Little John...8982",
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
            var lblAccTypeTrans = new kony.ui.Label({
                "bottom": "9dp",
                "id": "lblAccTypeTrans",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
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
            flxTransferredToTrans.add(flxSeperatorTrans, flxTransferredFromLabel, lblTransferredFromValue, lblAccTypeTrans);
            var flxTransferredTo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxTransferredTo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferredTo.setDefaultUnit(kony.flex.DP);
            var flxSeperatorP2P = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorP2P",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorP2P.setDefaultUnit(kony.flex.DP);
            flxSeperatorP2P.add();
            var flxTransferredToLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTransferredToLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxTransferredToLabel.setDefaultUnit(kony.flex.DP);
            var lblTransferredTo = new kony.ui.Label({
                "id": "lblTransferredTo",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.ToAccount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblToSemicolon = new kony.ui.Label({
                "id": "lblToSemicolon",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 110
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTransferredToLabel.add(lblTransferredTo, lblToSemicolon);
            var lblTransferredToValue = new kony.ui.Label({
                "id": "lblTransferredToValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Little John...8982",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccTypeP2P = new kony.ui.Label({
                "bottom": "9dp",
                "id": "lblAccTypeP2P",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
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
            var lblPhoneNo = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblPhoneNo",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "628-190-1123",
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
            flxTransferredTo.add(flxSeperatorP2P, flxTransferredToLabel, lblTransferredToValue, lblAccTypeP2P, lblPhoneNo);
            var flxTransactionDateTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxTransactionDateTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionDateTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans4.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans4.add();
            var flxTransactionDateLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
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
            var lblTransactionDateTrans = new kony.ui.Label({
                "id": "lblTransactionDateTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.DisputeTransaction.DateofTransaction"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDateSemicolon = new kony.ui.Label({
                "id": "lblDateSemicolon",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 110
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTransactionDateLabel.add(lblTransactionDateTrans, lblDateSemicolon);
            var lblTransDateValueTrans = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblTransDateValueTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "04/17/2018",
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
            flxTransactionDateTrans.add(flxSeperatorTrans4, flxTransactionDateLabel, lblTransDateValueTrans);
            var flxTransactionType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxTransactionType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionType.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans1.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans1.add();
            var flxTransactionTypeLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTransactionTypeLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxTransactionTypeLabel.setDefaultUnit(kony.flex.DP);
            var lblTransactionType = new kony.ui.Label({
                "id": "lblTransactionType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.transactionType"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionTypeSemicolon = new kony.ui.Label({
                "id": "lblTransactionTypeSemicolon",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 110
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTransactionTypeLabel.add(lblTransactionType, lblTransactionTypeSemicolon);
            var lblTransactionTypeValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblTransactionTypeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Internal Transfer",
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
            var lblAccTypeFromTrans = new kony.ui.Label({
                "bottom": "9dp",
                "id": "lblAccTypeFromTrans",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
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
            flxTransactionType.add(flxSeperatorTrans1, flxTransactionTypeLabel, lblTransactionTypeValue, lblAccTypeFromTrans);
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
            var flxSeperatorTrans3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans3.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans3.add();
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
                "text": kony.i18n.getLocalizedString("kony.mb.common.Reason"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblReasonSemicolon = new kony.ui.Label({
                "id": "lblReasonSemicolon",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 110
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxReasonLabel.add(lblReason, lblReasonSemicolon);
            var lblDescValueTrans = new kony.ui.Label({
                "id": "lblDescValueTrans",
                "isVisible": true,
                "left": "20dp",
                "maxNumberOfLines": 3,
                "skin": "sknlbl424242SSPR15px",
                "text": "Wire transfer to ABC DEF GHI JKL MNO PQR STU VWXYZ sdfghjkl",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "8dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var FlexContainer0c4807086df9243 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "FlexContainer0c4807086df9243",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            FlexContainer0c4807086df9243.setDefaultUnit(kony.flex.DP);
            FlexContainer0c4807086df9243.add();
            flxReason.add(flxSeperatorTrans3, flxReasonLabel, lblDescValueTrans, FlexContainer0c4807086df9243);
            var flxNotesTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNotesTrans",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNotesTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperator13 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator13",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator13.setDefaultUnit(kony.flex.DP);
            flxSeperator13.add();
            var flxNotesLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNotesLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxNotesLabel.setDefaultUnit(kony.flex.DP);
            var lblNotesTrans = new kony.ui.Label({
                "id": "lblNotesTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.notes"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblNotesSemicolon = new kony.ui.Label({
                "id": "lblNotesSemicolon",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 110
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNotesLabel.add(lblNotesTrans, lblNotesSemicolon);
            var lblNotesValueTrans = new kony.ui.Label({
                "id": "lblNotesValueTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 8,
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyFlexContainer0g8890569ed5d47 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "CopyFlexContainer0g8890569ed5d47",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            CopyFlexContainer0g8890569ed5d47.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0g8890569ed5d47.add();
            flxNotesTrans.add(flxSeperator13, flxNotesLabel, lblNotesValueTrans, CopyFlexContainer0g8890569ed5d47);
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
            var flxSep = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSep.setDefaultUnit(kony.flex.DP);
            flxSep.add();
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
            var lblDescHeader = new kony.ui.Label({
                "id": "lblDescHeader",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.Accounts.Description"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDescSemicolon = new kony.ui.Label({
                "id": "lblDescSemicolon",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbla0a0a013px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.semicolon"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 110
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDescriptionLabel.add(lblDescHeader, lblDescSemicolon);
            var lblDesc = new kony.ui.Label({
                "id": "lblDesc",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyFlexContainer0j32ea5fea9ef45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "CopyFlexContainer0j32ea5fea9ef45",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            CopyFlexContainer0j32ea5fea9ef45.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0j32ea5fea9ef45.add();
            flxDisputeDescription.add(flxSep, flxDescriptionLabel, lblDesc, CopyFlexContainer0j32ea5fea9ef45);
            var flxSeperatorTrans9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "10dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans9.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans9.add();
            var flxButtonsTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxButtonsTrans",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxButtonsTrans.setDefaultUnit(kony.flex.DP);
            var btnCancelRequest = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnCancelRequest",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.DisputeTransaction.CancelRequest"),
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSendMessage = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnSendMessage",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.SendMessage"),
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtonsTrans.add(btnCancelRequest, btnSendMessage);
            flxTransfers.add(flxMainTrans, flxDisputeId, flxRecurrenceTrans, flxTransferredToTrans, flxTransferredTo, flxTransactionDateTrans, flxTransactionType, flxReason, flxNotesTrans, flxDisputeDescription, flxSeperatorTrans9, flxButtonsTrans);
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburger",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxHamburger.setDefaultUnit(kony.flex.DP);
            var flxHamburgerWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHamburgerWrapper.setDefaultUnit(kony.flex.DP);
            var flxHamburgerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "50dp",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 10
            }, {}, {});
            flxHamburgerContainer.setDefaultUnit(kony.flex.DP);
            var Hamburger = new com.kmb.common.Hamburger({
                "height": "100%",
                "id": "Hamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "imgLogout": {
                        "src": "logout.png"
                    },
                    "imgUser": {
                        "src": "userimg.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHamburgerContainer.add(Hamburger);
            var flxHamburgerDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburgerDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 3
            }, {}, {});
            flxHamburgerDummy.setDefaultUnit(kony.flex.DP);
            flxHamburgerDummy.add();
            flxHamburgerWrapper.add(flxHamburgerContainer, flxHamburgerDummy);
            flxHamburger.add(flxHamburgerWrapper);
            this.add(flxHeader, flxTransfers, flxHamburger);
        };
        return [{
            "addWidgets": addWidgetsfrmDisputeTransactionDetails,
            "enabledForIdleTimeout": true,
            "id": "frmDisputeTransactionDetails",
            "init": controller.AS_Form_ff7a3658e62d45b88cf95089e3138c04,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_a1accc6be3334bc285b1f263659b0ed4(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.transaction.disputeTransaction")
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