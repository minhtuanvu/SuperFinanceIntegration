define("TransferModule/frmTransferConfirmation", function() {
    return function(controller) {
        function addWidgetsfrmTransferConfirmation() {
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
                    "flxHeader": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.transfer.ConfirmTransfer"),
                        "right": "viz.val_cleared"
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
                "bottom": "60dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxConfirmationMain",
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
            flxConfirmationMain.setDefaultUnit(kony.flex.DP);
            var flxTransferAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxTransferAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferAmount.setDefaultUnit(kony.flex.DP);
            var flxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxAmount.setDefaultUnit(kony.flex.DP);
            var lblFromAccount = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblFromAccount",
                "isVisible": true,
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.FromAccount"),
                "textStyle": {},
                "top": "18dp",
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
            var lblFromAccountValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblFromAccountValue",
                "isVisible": true,
                "skin": "sknLbl424242SSPReg62px",
                "text": "$500.00",
                "textStyle": {},
                "top": "35dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAmount.add(lblFromAccount, lblFromAccountValue);
            var flxConfirmationDetails = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "460dp",
                "horizontalScrollIndicator": true,
                "id": "flxConfirmationDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "80dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxConfirmationDetails.setDefaultUnit(kony.flex.DP);
            var flxFromAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "72dp",
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
            var flxSeparator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "70dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeparator1.setDefaultUnit(kony.flex.DP);
            flxSeparator1.add();
            var imgdottedline = new kony.ui.Image2({
                "height": "2dp",
                "id": "imgdottedline",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "slImage",
                "src": "line.png",
                "top": "0dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFromAccountDetails = new kony.ui.Label({
                "id": "lblFromAccountDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.FromAccount"),
                "textStyle": {},
                "top": "11dp",
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
            var lblFromAccountValueDetails = new kony.ui.Label({
                "id": "lblFromAccountValueDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "My Checking ....2343",
                "textStyle": {},
                "top": "29dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblBank = new kony.ui.Label({
                "bottom": "7dp",
                "height": "18dp",
                "id": "lblBank",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl3e4f56SSPLight24px",
                "text": "HDFC Bank",
                "textStyle": {},
                "top": "50dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgdottedline2 = new kony.ui.Image2({
                "bottom": "0dp",
                "height": "2dp",
                "id": "imgdottedline2",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "slImage",
                "src": "line.png",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparator11 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator11",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeparator11.setDefaultUnit(kony.flex.DP);
            flxSeparator11.add();
            flxFromAccount.add(flxSeparator1, imgdottedline, lblFromAccountDetails, lblFromAccountValueDetails, lblBank, imgdottedline2, flxSeparator11);
            var flxPayeeName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "72dp",
                "id": "flxPayeeName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPayeeName.setDefaultUnit(kony.flex.DP);
            var imgdottedline3 = new kony.ui.Image2({
                "height": "2dp",
                "id": "imgdottedline3",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "slImage",
                "src": "line.png",
                "top": "0dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblPayeeName = new kony.ui.Label({
                "id": "lblPayeeName",
                "isVisible": true,
                "left": "19dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.ToAccount"),
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
            var lblPayeeNameValue = new kony.ui.Label({
                "id": "lblPayeeNameValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Bill Moron….8979",
                "textStyle": {},
                "top": "28dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblPayeeAddress = new kony.ui.Label({
                "bottom": "7dp",
                "height": "18dp",
                "id": "lblPayeeAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl3e4f56SSPLight24px",
                "text": "2189 Schmeler Flats Apt. 166",
                "textStyle": {},
                "top": "48dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgdottedline4 = new kony.ui.Image2({
                "bottom": "0dp",
                "height": "2dp",
                "id": "imgdottedline4",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "slImage",
                "src": "line.png",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparator22 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator22",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeparator22.setDefaultUnit(kony.flex.DP);
            flxSeparator22.add();
            flxPayeeName.add(imgdottedline3, lblPayeeName, lblPayeeNameValue, lblPayeeAddress, imgdottedline4, flxSeparator22);
            var flxTransferFrequency = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTransferFrequency",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferFrequency.setDefaultUnit(kony.flex.DP);
            var lblTransferFrequency = new kony.ui.Label({
                "id": "lblTransferFrequency",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.frequency"),
                "textStyle": {},
                "top": "7dp",
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
            var lblTransferFrequencyValue = new kony.ui.Label({
                "bottom": "7dp",
                "height": "18dp",
                "id": "lblTransferFrequencyValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.frequency.ContinueUntilCancel"),
                "textStyle": {},
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "zIndex": 1
            }, {}, {});
            flxSeparator2.setDefaultUnit(kony.flex.DP);
            flxSeparator2.add();
            flxTransferFrequency.add(lblTransferFrequency, lblTransferFrequencyValue, flxSeparator2);
            var flxTransferDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "56dp",
                "id": "flxTransferDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferDate.setDefaultUnit(kony.flex.DP);
            var lblTransferDate = new kony.ui.Label({
                "id": "lblTransferDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.transfersDate"),
                "textStyle": {},
                "top": "7dp",
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
            var lblTransferDateValue = new kony.ui.Label({
                "bottom": "7dp",
                "height": "18dp",
                "id": "lblTransferDateValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "MM/DD/YYYY",
                "textStyle": {},
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeparatorTransferDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorTransferDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "zIndex": 1
            }, {}, {});
            flxSeparatorTransferDate.setDefaultUnit(kony.flex.DP);
            flxSeparatorTransferDate.add();
            var imgdottedline5 = new kony.ui.Image2({
                "bottom": "0dp",
                "height": "2dp",
                "id": "imgdottedline5",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "slImage",
                "src": "line.png",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparator33 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator33",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeparator33.setDefaultUnit(kony.flex.DP);
            flxSeparator33.add();
            flxTransferDate.add(lblTransferDate, lblTransferDateValue, flxSeparatorTransferDate, imgdottedline5, flxSeparator33);
            var flxFrequencyType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxFrequencyType",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFrequencyType.setDefaultUnit(kony.flex.DP);
            var lblFrequencyType = new kony.ui.Label({
                "id": "lblFrequencyType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.Duration"),
                "textStyle": {},
                "top": "7dp",
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
            var lblFrequencyTypeValue = new kony.ui.Label({
                "bottom": "7dp",
                "height": "18dp",
                "id": "lblFrequencyTypeValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.frequency.ContinueUntilCancel"),
                "textStyle": {},
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeparator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "zIndex": 1
            }, {}, {});
            flxSeparator3.setDefaultUnit(kony.flex.DP);
            flxSeparator3.add();
            flxFrequencyType.add(lblFrequencyType, lblFrequencyTypeValue, flxSeparator3);
            var flxRecurrence = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "56dp",
                "id": "flxRecurrence",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRecurrence.setDefaultUnit(kony.flex.DP);
            var lblRecurrence = new kony.ui.Label({
                "id": "lblRecurrence",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.frequency.NumberofRecurrence"),
                "textStyle": {},
                "top": "7dp",
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
            var lblRecurrenceValue = new kony.ui.Label({
                "bottom": "7dp",
                "height": "18dp",
                "id": "lblRecurrenceValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.frequency.ContinueUntilCancel"),
                "textStyle": {},
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeparatorRecurrence = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorRecurrence",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "zIndex": 1
            }, {}, {});
            flxSeparatorRecurrence.setDefaultUnit(kony.flex.DP);
            flxSeparatorRecurrence.add();
            var imgdottedline6 = new kony.ui.Image2({
                "bottom": "0dp",
                "height": "2dp",
                "id": "imgdottedline6",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "slImage",
                "src": "line.png",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparator44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator44",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "zIndex": 1
            }, {}, {});
            flxSeparator44.setDefaultUnit(kony.flex.DP);
            flxSeparator44.add();
            flxRecurrence.add(lblRecurrence, lblRecurrenceValue, flxSeparatorRecurrence, imgdottedline6, flxSeparator44);
            var flxStartDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxStartDate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStartDate.setDefaultUnit(kony.flex.DP);
            var lblStartDate = new kony.ui.Label({
                "id": "lblStartDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.StartDate"),
                "textStyle": {},
                "top": "7dp",
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
            var lblStartDateValue = new kony.ui.Label({
                "bottom": "7dp",
                "height": "18dp",
                "id": "lblStartDateValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.frequency.ContinueUntilCancel"),
                "textStyle": {},
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxStartDate.add(lblStartDate, lblStartDateValue);
            var flxEndDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxEndDate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEndDate.setDefaultUnit(kony.flex.DP);
            var lblEndDateTitle = new kony.ui.Label({
                "id": "lblEndDateTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.EndDate"),
                "textStyle": {},
                "top": "7dp",
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
            var lblEndDateValue = new kony.ui.Label({
                "bottom": "7dp",
                "height": "18dp",
                "id": "lblEndDateValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.frequency.ContinueUntilCancel"),
                "textStyle": {},
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeparatorEndDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorEndDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "zIndex": 1
            }, {}, {});
            flxSeparatorEndDate.setDefaultUnit(kony.flex.DP);
            flxSeparatorEndDate.add();
            flxEndDate.add(lblEndDateTitle, lblEndDateValue, flxSeparatorEndDate);
            var segDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblKey": "Start Date",
                    "lblValue": "Continue until you cancel"
                }, {
                    "lblKey": "Start Date",
                    "lblValue": "Continue until you cancel"
                }, {
                    "lblKey": "Start Date",
                    "lblValue": "Continue until you cancel"
                }],
                "groupCells": false,
                "id": "segDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxTransferConfirmation",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSeparator": "flxSeparator",
                    "flxTransferConfirmation": "flxTransferConfirmation",
                    "lblKey": "lblKey",
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
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "110dp",
                "id": "flxDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxDescription.setDefaultUnit(kony.flex.DP);
            var lblDescription = new kony.ui.Label({
                "id": "lblDescription",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.DescriptionOptional"),
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
            var txtareaDescription = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknTxtareaffffffBordere3e3e3SSPReg28pxRadius3px",
                "height": "70dp",
                "id": "txtareaDescription",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "numberOfVisibleLines": 3,
                "placeholder": "Enter Here ",
                "right": "20dp",
                "skin": "sknTxtareaffffffBordere3e3e3SSPReg28pxRadius3px",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "35dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
                "showCloseButton": true,
                "showProgressIndicator": false,
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            var txtDescription = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknTbx424242SSPRegular28px",
                "height": "40dp",
                "id": "txtDescription",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": "Enter Here",
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxBordere3e3e3Radius4px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "35dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxPlaceholdera0a0a0",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxDescription.add(lblDescription, txtareaDescription, txtDescription);
            flxConfirmationDetails.add(flxFromAccount, flxPayeeName, flxTransferFrequency, flxTransferDate, flxFrequencyType, flxRecurrence, flxStartDate, flxEndDate, segDetails, flxSeparator, flxDescription);
            flxTransferAmount.add(flxAmount, flxConfirmationDetails);
            flxConfirmationMain.add(flxTransferAmount);
            var flxbtnConfirm = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "70dp",
                "id": "flxbtnConfirm",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxbtnConfirm.setDefaultUnit(kony.flex.DP);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_jd58db7a25244a08af4ccce2c79d033b,
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.Confirm"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxbtnConfirm.add(btnContinue);
            this.add(flxHeader, flxConfirmationMain, flxbtnConfirm);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_i96ac28b57af4d96ae169694ecd89626,
            "metaData": {
                "title": "Cancel"
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
            "addWidgets": addWidgetsfrmTransferConfirmation,
            "enabledForIdleTimeout": true,
            "id": "frmTransferConfirmation",
            "init": controller.AS_Form_c34776372475469ea4fb849481f275a2,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_cf1ed2fda2d5498ba0349c7e80a43ce2(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.transfer.ConfirmTransfer")
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