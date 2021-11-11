define("ChequeManagementModule/frmChequeTransactionDetails", function() {
    return function(controller) {
        function addWidgetsfrmChequeTransactionDetails() {
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
                    "customHeader": {
                        "isVisible": true
                    },
                    "flxHeader": {
                        "left": "0%"
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
                        "centerX": "50%",
                        "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.chequeDetails"),
                        "left": "viz.val_cleared",
                        "width": "35%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxStopChequeDetails = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxStopChequeDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 400
            }, {}, {});
            flxStopChequeDetails.setDefaultUnit(kony.flex.DP);
            var flxMainTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
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
            var lblTransfer = new kony.ui.Label({
                "id": "lblTransfer",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequemgmt.chequeNumber"),
                "textStyle": {},
                "top": "8dp",
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
            var lblTransferValue = new kony.ui.Label({
                "height": "22dp",
                "id": "lblTransferValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP140prBold",
                "text": "12002",
                "textStyle": {},
                "top": "30dp",
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
            var flxStatus = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxStatus",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "28%"
            }, {}, {});
            flxStatus.setDefaultUnit(kony.flex.DP);
            var lblSuccess = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSuccess",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.successful"),
                "textStyle": {},
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
            var flxDot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "35%",
                "id": "flxDot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "sknFlx57CE42Circle",
                "width": "10%",
                "zIndex": 1
            }, {}, {});
            flxDot.setDefaultUnit(kony.flex.DP);
            flxDot.add();
            flxStatus.add(lblSuccess, flxDot);
            flxMainTrans.add(lblTransfer, lblTransferValue, flxStatus);
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
            var lblTransferredToTrans = new kony.ui.Label({
                "id": "lblTransferredToTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.From"),
                "textStyle": {},
                "top": "8dp",
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
            var lblTransferredToValueTrans = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblTransferredToValueTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Little John...8982",
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
            var lblAccTypeTrans = new kony.ui.Label({
                "bottom": "9dp",
                "id": "lblAccTypeTrans",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
                "textStyle": {},
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
            flxTransferredToTrans.add(flxSeperatorTrans, lblTransferredToTrans, lblTransferredToValueTrans, lblAccTypeTrans);
            var flxTransferredToP2P = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxTransferredToP2P",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferredToP2P.setDefaultUnit(kony.flex.DP);
            var flxSeperatorP2P = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorP2P",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorP2P.setDefaultUnit(kony.flex.DP);
            flxSeperatorP2P.add();
            var lblTransferredToP2P = new kony.ui.Label({
                "id": "lblTransferredToP2P",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.payeeName"),
                "textStyle": {},
                "top": "8dp",
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
            var lblTransferredToValueP2P = new kony.ui.Label({
                "id": "lblTransferredToValueP2P",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Little John...8982",
                "textStyle": {},
                "top": "30dp",
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
            var lblAccTypeP2P = new kony.ui.Label({
                "bottom": "9dp",
                "id": "lblAccTypeP2P",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
                "textStyle": {},
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
            var lblPhoneNo = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblPhoneNo",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "628-190-1123",
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
            flxTransferredToP2P.add(flxSeperatorP2P, lblTransferredToP2P, lblTransferredToValueP2P, lblAccTypeP2P, lblPhoneNo);
            var flxTransferredFromTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxTransferredFromTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferredFromTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans1.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans1.add();
            var lblTransferredFromTrans = new kony.ui.Label({
                "id": "lblTransferredFromTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.requestDate"),
                "textStyle": {},
                "top": "8dp",
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
            var lblTransferredFromValueTrans = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblTransferredFromValueTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "JohnChecking...8082",
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
            var lblAccTypeFromTrans = new kony.ui.Label({
                "bottom": "9dp",
                "id": "lblAccTypeFromTrans",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
                "textStyle": {},
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
            flxTransferredFromTrans.add(flxSeperatorTrans1, lblTransferredFromTrans, lblTransferredFromValueTrans, lblAccTypeFromTrans);
            var flxDescTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxDescTrans",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDescTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans3.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans3.add();
            var lblDescTrans = new kony.ui.Label({
                "id": "lblDescTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.chequeDate"),
                "textStyle": {},
                "top": "8dp",
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
            var lblDescValueTrans = new kony.ui.Label({
                "id": "lblDescValueTrans",
                "isVisible": true,
                "left": "20dp",
                "maxNumberOfLines": 3,
                "skin": "sknLbl424242SSP26px",
                "text": "Wire transfer to ABC DE",
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "8dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
            flxDescTrans.add(flxSeperatorTrans3, lblDescTrans, lblDescValueTrans, FlexContainer0c4807086df9243);
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
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans4.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans4.add();
            var lblTransactionDateTrans = new kony.ui.Label({
                "id": "lblTransactionDateTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.refNumber"),
                "textStyle": {},
                "top": "8dp",
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
            var lblTransDateValueTrans = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblTransDateValueTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "04/17/2018",
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
            flxTransactionDateTrans.add(flxSeperatorTrans4, lblTransactionDateTrans, lblTransDateValueTrans);
            var flxFrequencyTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxFrequencyTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFrequencyTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans5.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans5.add();
            var lblFrequencyTrans = new kony.ui.Label({
                "id": "lblFrequencyTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.reason"),
                "textStyle": {},
                "top": "8dp",
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
            var lblFreqTransValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblFreqTransValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Monthly Once",
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
            flxFrequencyTrans.add(flxSeperatorTrans5, lblFrequencyTrans, lblFreqTransValue);
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
            var lblRecurrenceTrans = new kony.ui.Label({
                "id": "lblRecurrenceTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.amount"),
                "textStyle": {},
                "top": "8dp",
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
            var lblRecurrenceValueTrans = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblRecurrenceValueTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "2nd (out of total 10)",
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
            var flxSeperatorTrans7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans7.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans7.add();
            flxRecurrenceTrans.add(lblRecurrenceTrans, lblRecurrenceValueTrans, flxSeperatorTrans7);
            var flxReferenceNoTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxReferenceNoTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReferenceNoTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans6.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans6.add();
            var lblReferenceNoTrans = new kony.ui.Label({
                "id": "lblReferenceNoTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.cheques"),
                "textStyle": {},
                "top": "8dp",
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
            var lblReferenceNoValueTrans = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblReferenceNoValueTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "9898279382479823",
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
            flxReferenceNoTrans.add(flxSeperatorTrans6, lblReferenceNoTrans, lblReferenceNoValueTrans);
            var flxIBAN = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxIBAN",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIBAN.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans8.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans8.add();
            var lblIBAN = new kony.ui.Label({
                "id": "lblIBAN",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.fee"),
                "textStyle": {},
                "top": "5dp",
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
                "bottom": "8dp",
                "id": "lblIBANValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "123456789009876543211234567890",
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
            flxIBAN.add(flxSeperatorTrans8, lblIBAN, lblIBANValue);
            var flxCurrencyTransfer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrencyTransfer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCurrencyTransfer.setDefaultUnit(kony.flex.DP);
            var flxSeperator11 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator11",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator11.setDefaultUnit(kony.flex.DP);
            flxSeperator11.add();
            var lblCurrencyTransfer = new kony.ui.Label({
                "id": "lblCurrencyTransfer",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.Currency"),
                "textStyle": {},
                "top": "12dp",
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
            var lblCurrencyValueTransfer = new kony.ui.Label({
                "bottom": "12dp",
                "id": "lblCurrencyValueTransfer",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Dollar ($)",
                "textStyle": {},
                "top": 5,
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCurrencyTransfer.add(flxSeperator11, lblCurrencyTransfer, lblCurrencyValueTransfer);
            var flxConvertedAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxConvertedAmount",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConvertedAmount.setDefaultUnit(kony.flex.DP);
            var flxSeperator12 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator12",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator12.setDefaultUnit(kony.flex.DP);
            flxSeperator12.add();
            var lblConvertedAmount = new kony.ui.Label({
                "id": "lblConvertedAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.ConvertedValue"),
                "textStyle": {},
                "top": "12dp",
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
            var lblConvertedValue = new kony.ui.Label({
                "bottom": "12dp",
                "id": "lblConvertedValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Dollar ($)",
                "textStyle": {},
                "top": 5,
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxConvertedAmount.add(flxSeperator12, lblConvertedAmount, lblConvertedValue);
            var flxTransactionFeeTransfer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTransactionFeeTransfer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionFeeTransfer.setDefaultUnit(kony.flex.DP);
            var flxSeperatorConvertedAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorConvertedAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorConvertedAmount.setDefaultUnit(kony.flex.DP);
            flxSeperatorConvertedAmount.add();
            var lblTransactionFeeTransfer = new kony.ui.Label({
                "id": "lblTransactionFeeTransfer",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.TransactionFees"),
                "textStyle": {},
                "top": "12dp",
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
            var lblTransactionFeeValueTransfer = new kony.ui.Label({
                "bottom": "12dp",
                "id": "lblTransactionFeeValueTransfer",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$5",
                "textStyle": {},
                "top": 5,
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxTransactionFeeTransfer.add(flxSeperatorConvertedAmount, lblTransactionFeeTransfer, lblTransactionFeeValueTransfer);
            var flxNotesTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxNotesTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
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
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxSeperator13.setDefaultUnit(kony.flex.DP);
            flxSeperator13.add();
            var lblNotesTrans = new kony.ui.Label({
                "id": "lblNotesTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.notes"),
                "textStyle": {},
                "top": "12dp",
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
            var lblNotesValueTrans = new kony.ui.Label({
                "id": "lblNotesValueTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Party with friends.",
                "textStyle": {},
                "top": 30,
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeparator14 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator14",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeparator14.setDefaultUnit(kony.flex.DP);
            flxSeparator14.add();
            flxNotesTrans.add(flxSeperator13, lblNotesTrans, lblNotesValueTrans, flxSeparator14);
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
            var btnRevokeRequest = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnRevokeRequest",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.revokeRequest"),
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnDisputetTransactionTrans = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnDisputetTransactionTrans",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.sendMessage"),
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnCancelTransactionTrans = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnCancelTransactionTrans",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.cancelTransaction"),
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnCancelThisOccurenceTrans = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnCancelThisOccurenceTrans",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.recurrence.CancelThisOccurence"),
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnCancelSeriesTrans = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnCancelSeriesTrans",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.recurrence.CancelSeries"),
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxButtonsTrans.add(btnRevokeRequest, btnDisputetTransactionTrans, btnCancelTransactionTrans, btnCancelThisOccurenceTrans, btnCancelSeriesTrans);
            flxStopChequeDetails.add(flxMainTrans, flxTransferredToTrans, flxTransferredToP2P, flxTransferredFromTrans, flxDescTrans, flxTransactionDateTrans, flxFrequencyTrans, flxRecurrenceTrans, flxReferenceNoTrans, flxIBAN, flxCurrencyTransfer, flxConvertedAmount, flxTransactionFeeTransfer, flxNotesTrans, flxSeperatorTrans9, flxButtonsTrans);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "0dp",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 106
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "height": "60dp",
                "id": "customFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 300,
                "overrides": {
                    "flxBillSelected": {
                        "isVisible": false
                    },
                    "flxMoreSelect": {
                        "isVisible": false
                    },
                    "flxTransferSel": {
                        "isVisible": false
                    },
                    "imgAccounts": {
                        "src": "accounts.png"
                    },
                    "imgBillPay": {
                        "src": "billpay.png"
                    },
                    "imgMore": {
                        "src": "more.png"
                    },
                    "imgTransfer": {
                        "src": "transfer.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxFooter.add(customFooter);
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "60dp",
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
                "right": "0dp",
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
                "right": "0dp",
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
                "right": "-50dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 3
            }, {}, {});
            flxHamburgerDummy.setDefaultUnit(kony.flex.DP);
            flxHamburgerDummy.add();
            flxHamburgerWrapper.add(flxHamburgerContainer, flxHamburgerDummy);
            flxHamburger.add(flxHamburgerWrapper);
            var flxChequeBookDetails = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxChequeBookDetails",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 400
            }, {}, {});
            flxChequeBookDetails.setDefaultUnit(kony.flex.DP);
            var flxChequeBooks = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxChequeBooks",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChequeBooks.setDefaultUnit(kony.flex.DP);
            var lblNumberOfBooks = new kony.ui.Label({
                "centerY": "50%",
                "height": "22dp",
                "id": "lblNumberOfBooks",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP140prBold",
                "text": "2 Books(25 Leaves)",
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
            var lblStatus = new kony.ui.Label({
                "bottom": "17dp",
                "id": "lblStatus",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.successful"),
                "textStyle": {},
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
            flxChequeBooks.add(lblNumberOfBooks, lblStatus);
            var flxAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccount.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperatorTrans0f124d78a146742 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorTrans0f124d78a146742",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorTrans0f124d78a146742.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorTrans0f124d78a146742.add();
            var lblAccount = new kony.ui.Label({
                "id": "lblAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.account"),
                "textStyle": {},
                "top": "8dp",
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
            var lblAccountValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblAccountValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Little John...8982",
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
            var lblAccountType = new kony.ui.Label({
                "bottom": "9dp",
                "id": "lblAccountType",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
                "textStyle": {},
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
            flxAccount.add(CopyflxSeperatorTrans0f124d78a146742, lblAccount, lblAccountValue, lblAccountType);
            var flxRequestDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxRequestDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRequestDate.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperatorP0c84951e04e6a4f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorP0c84951e04e6a4f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorP0c84951e04e6a4f.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorP0c84951e04e6a4f.add();
            var lblRequestDate = new kony.ui.Label({
                "id": "lblRequestDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.requestDate"),
                "textStyle": {},
                "top": "8dp",
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
            var lblRequestDateValue = new kony.ui.Label({
                "id": "lblRequestDateValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Little John...8982",
                "textStyle": {},
                "top": "30dp",
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
            flxRequestDate.add(CopyflxSeperatorP0c84951e04e6a4f, lblRequestDate, lblRequestDateValue);
            var flxReferenceNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxReferenceNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReferenceNumber.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperatorTrans0gf0c8b9ad06241 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorTrans0gf0c8b9ad06241",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorTrans0gf0c8b9ad06241.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorTrans0gf0c8b9ad06241.add();
            var lblReferenceNumber = new kony.ui.Label({
                "id": "lblReferenceNumber",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.refNumber"),
                "textStyle": {},
                "top": "8dp",
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
            var lblRefValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblRefValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "JohnChecking...8082",
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
            flxReferenceNumber.add(CopyflxSeperatorTrans0gf0c8b9ad06241, lblReferenceNumber, lblRefValue);
            var flxDeliveryType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxDeliveryType",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDeliveryType.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperatorTrans0e95ff641ccde40 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorTrans0e95ff641ccde40",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorTrans0e95ff641ccde40.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorTrans0e95ff641ccde40.add();
            var lblDeliveryType = new kony.ui.Label({
                "id": "lblDeliveryType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.deliveryType"),
                "textStyle": {},
                "top": "8dp",
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
            var lblDeliveryTypeValue = new kony.ui.Label({
                "id": "lblDeliveryTypeValue",
                "isVisible": true,
                "left": "20dp",
                "maxNumberOfLines": 3,
                "skin": "sknLbl424242SSP26px",
                "text": "Wire transfer to ABC DE",
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "8dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDeliveryType.add(CopyflxSeperatorTrans0e95ff641ccde40, lblDeliveryType, lblDeliveryTypeValue);
            var flxAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddress.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperatorTrans0a3823e0134ed40 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorTrans0a3823e0134ed40",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorTrans0a3823e0134ed40.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorTrans0a3823e0134ed40.add();
            var lblAddress = new kony.ui.Label({
                "id": "lblAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.address"),
                "textStyle": {},
                "top": "8dp",
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
            var lblAddressValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblAddressValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "9898279382479823",
                "textStyle": {},
                "top": "30dp",
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
            flxAddress.add(CopyflxSeperatorTrans0a3823e0134ed40, lblAddress, lblAddressValue);
            var flxFee = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxFee",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFee.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperatorTrans0gf91a72195894b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorTrans0gf91a72195894b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorTrans0gf91a72195894b.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorTrans0gf91a72195894b.add();
            var lblFee = new kony.ui.Label({
                "id": "lblFee",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.fee"),
                "textStyle": {},
                "top": "5dp",
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
            var lblFeeValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblFeeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "123456789009876543211234567890",
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
            flxFee.add(CopyflxSeperatorTrans0gf91a72195894b, lblFee, lblFeeValue);
            var flxNotes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxNotes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNotes.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperator0a822155c03944a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperator0a822155c03944a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperator0a822155c03944a.setDefaultUnit(kony.flex.DP);
            CopyflxSeperator0a822155c03944a.add();
            var lblNotes = new kony.ui.Label({
                "id": "lblNotes",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.notes"),
                "textStyle": {},
                "top": "12dp",
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
            var lblNotesValue = new kony.ui.Label({
                "id": "lblNotesValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Party with friends.",
                "textStyle": {},
                "top": 30,
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopyflxSeparator0df5fc78bfc0947 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeparator0df5fc78bfc0947",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeparator0df5fc78bfc0947.setDefaultUnit(kony.flex.DP);
            CopyflxSeparator0df5fc78bfc0947.add();
            flxNotes.add(CopyflxSeperator0a822155c03944a, lblNotes, lblNotesValue, CopyflxSeparator0df5fc78bfc0947);
            var CopyflxSeperatorTrans0i0a6e86aa4b847 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorTrans0i0a6e86aa4b847",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "10dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorTrans0i0a6e86aa4b847.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorTrans0i0a6e86aa4b847.add();
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnCancel = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnCancel",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.cancelRequest"),
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxButtons.add(btnCancel);
            flxChequeBookDetails.add(flxChequeBooks, flxAccount, flxRequestDate, flxReferenceNumber, flxDeliveryType, flxAddress, flxFee, flxNotes, CopyflxSeperatorTrans0i0a6e86aa4b847, flxButtons);
            var flxChequeDetails = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxChequeDetails",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 400
            }, {}, {});
            flxChequeDetails.setDefaultUnit(kony.flex.DP);
            var flxChequeNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxChequeNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChequeNumber.setDefaultUnit(kony.flex.DP);
            var lblChequeNumber = new kony.ui.Label({
                "id": "lblChequeNumber",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequemgmt.chequeNumber"),
                "textStyle": {},
                "top": "8dp",
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
            var lblChequeNumberValue = new kony.ui.Label({
                "height": "22dp",
                "id": "lblChequeNumberValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP140prBold",
                "text": "12002",
                "textStyle": {},
                "top": "30dp",
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
            var lblSuccesful = new kony.ui.Label({
                "bottom": "17dp",
                "id": "lblSuccesful",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.successful"),
                "textStyle": {},
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
            flxChequeNumber.add(lblChequeNumber, lblChequeNumberValue, lblSuccesful);
            var flxFrom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxFrom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFrom.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperatorTrans0e9b1b50c820e4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorTrans0e9b1b50c820e4c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorTrans0e9b1b50c820e4c.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorTrans0e9b1b50c820e4c.add();
            var lblFrom = new kony.ui.Label({
                "id": "lblFrom",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.From"),
                "textStyle": {},
                "top": "8dp",
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
            var lblFromValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblFromValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Little John...8982",
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
            var lblAcType = new kony.ui.Label({
                "bottom": "9dp",
                "id": "lblAcType",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
                "textStyle": {},
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
            flxFrom.add(CopyflxSeperatorTrans0e9b1b50c820e4c, lblFrom, lblFromValue, lblAcType);
            var flexPayeeName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flexPayeeName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexPayeeName.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperatorP0fd11f60fd25d42 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorP0fd11f60fd25d42",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorP0fd11f60fd25d42.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorP0fd11f60fd25d42.add();
            var lblPayeeName = new kony.ui.Label({
                "id": "lblPayeeName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.payeeName"),
                "textStyle": {},
                "top": "8dp",
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
            var lblPayeeValue = new kony.ui.Label({
                "id": "lblPayeeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Little John...8982",
                "textStyle": {},
                "top": "30dp",
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
            flexPayeeName.add(CopyflxSeperatorP0fd11f60fd25d42, lblPayeeName, lblPayeeValue);
            var flexAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flexAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexAmount.setDefaultUnit(kony.flex.DP);
            var lblAmount = new kony.ui.Label({
                "id": "lblAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.amount"),
                "textStyle": {},
                "top": "8dp",
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
            var lblAmountValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblAmountValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "2nd (out of total 10)",
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
            var CopyflxSeperatorTrans0ia12b6d0137a4d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorTrans0ia12b6d0137a4d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorTrans0ia12b6d0137a4d.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorTrans0ia12b6d0137a4d.add();
            flexAmount.add(lblAmount, lblAmountValue, CopyflxSeperatorTrans0ia12b6d0137a4d);
            var flexDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flexDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexDate.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperatorTrans0df972239c62f41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorTrans0df972239c62f41",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorTrans0df972239c62f41.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorTrans0df972239c62f41.add();
            var lblDate = new kony.ui.Label({
                "id": "lblDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.date"),
                "textStyle": {},
                "top": "8dp",
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
            var lblDateValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblDateValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "JohnChecking...8082",
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
            flexDate.add(CopyflxSeperatorTrans0df972239c62f41, lblDate, lblDateValue);
            var flexReferenceNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flexReferenceNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexReferenceNumber.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperatorTrans0gd9743d1b21f46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorTrans0gd9743d1b21f46",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorTrans0gd9743d1b21f46.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorTrans0gd9743d1b21f46.add();
            var lblRefNumber = new kony.ui.Label({
                "id": "lblRefNumber",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.refNumber"),
                "textStyle": {},
                "top": "8dp",
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
            var lblRefeValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblRefeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "04/17/2018",
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
            flexReferenceNumber.add(CopyflxSeperatorTrans0gd9743d1b21f46, lblRefNumber, lblRefeValue);
            var flexReason = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flexReason",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexReason.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperatorTrans0ce06c636b5054e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorTrans0ce06c636b5054e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorTrans0ce06c636b5054e.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorTrans0ce06c636b5054e.add();
            var lblReason = new kony.ui.Label({
                "id": "lblReason",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.reason"),
                "textStyle": {},
                "top": "8dp",
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
            var lblReasonVal = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblReasonVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Monthly Once",
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
            flexReason.add(CopyflxSeperatorTrans0ce06c636b5054e, lblReason, lblReasonVal);
            var flexNotes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flexNotes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexNotes.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperator0a3a62be2822b40 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperator0a3a62be2822b40",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperator0a3a62be2822b40.setDefaultUnit(kony.flex.DP);
            CopyflxSeperator0a3a62be2822b40.add();
            var lblNote = new kony.ui.Label({
                "id": "lblNote",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.notes"),
                "textStyle": {},
                "top": "12dp",
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
            var lblNotesVal = new kony.ui.Label({
                "id": "lblNotesVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Party with friends.",
                "textStyle": {},
                "top": 30,
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopyflxSeparator0ab0e1ba5b25746 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeparator0ab0e1ba5b25746",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeparator0ab0e1ba5b25746.setDefaultUnit(kony.flex.DP);
            CopyflxSeparator0ab0e1ba5b25746.add();
            flexNotes.add(CopyflxSeperator0a3a62be2822b40, lblNote, lblNotesVal, CopyflxSeparator0ab0e1ba5b25746);
            var CopyflxSeperatorTrans0f333d33ec9164b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorTrans0f333d33ec9164b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "10dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorTrans0f333d33ec9164b.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorTrans0f333d33ec9164b.add();
            var flexButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flexButtons",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flexButtons.setDefaultUnit(kony.flex.DP);
            var buttonRevokeRequest = new kony.ui.Button({
                "bottom": "0dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "buttonRevokeRequest",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.revokeRequest"),
                "top": "20dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var buttonSendMessage = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "buttonSendMessage",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.chequeManagement.sendMessage"),
                "top": "20dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flexButtons.add(buttonRevokeRequest, buttonSendMessage);
            flxChequeDetails.add(flxChequeNumber, flxFrom, flexPayeeName, flexAmount, flexDate, flexReferenceNumber, flexReason, flexNotes, CopyflxSeperatorTrans0f333d33ec9164b, flexButtons);
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
            this.add(flxHeader, flxStopChequeDetails, flxFooter, flxHamburger, flxChequeBookDetails, flxChequeDetails, flxPopup);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_jf13b61fed314228b9c52a22552eb887,
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
            "action": controller.AS_BarButtonItem_eb4b183ee0174dc4a9ee361bfeb95cd1,
            "metaData": {
                "title": ""
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
            "addWidgets": addWidgetsfrmChequeTransactionDetails,
            "enabledForIdleTimeout": true,
            "id": "frmChequeTransactionDetails",
            "init": controller.AS_Form_aeae676807da468bb4e7b97b954244fb,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_ad3ec0882b864af094dcfe64bd6811f7,
            "preShow": function(eventobject) {
                controller.AS_Form_dc633fef173b4c1cb542b1ca5282e62f(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.chequeManagement.chequeDetails")
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