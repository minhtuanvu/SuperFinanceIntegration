define("BillPayModule/frmBillPayPayeeDetails", function() {
    return function(controller) {
        function addWidgetsfrmBillPayPayeeDetails() {
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
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
            flxSeparatorHeader.add();
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
                        "text": "..."
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.BillPayPayeeDetails.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxSeparatorHeader, customHeader);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderSearchbox",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "height": "40dp",
                "id": "customSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "customSearchbox": {
                        "top": "0dp"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "140dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxToastDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxToastDummy",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToastDummy.setDefaultUnit(kony.flex.DP);
            flxToastDummy.add();
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxUpcommingBillDetails = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxUpcommingBillDetails",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "-5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUpcommingBillDetails.setDefaultUnit(kony.flex.DP);
            var lblUpcomingDueBill = new kony.ui.Label({
                "id": "lblUpcomingDueBill",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("Kony.mb.EBill.UpcomingDueBill"),
                "textStyle": {},
                "top": "17dp",
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
            var lblAmount = new kony.ui.Label({
                "id": "lblAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP32px",
                "text": "$23.93",
                "textStyle": {},
                "top": "35dp",
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
            var flxDueDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxDueDate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "57dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDueDate.setDefaultUnit(kony.flex.DP);
            var lblDueDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDueDate",
                "isVisible": true,
                "left": 20,
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
            var lblDueDateValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDueDateValue",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbl424242SSP22px",
                "text": "05/05/2018",
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
            flxDueDate.add(lblDueDate, lblDueDateValue);
            var flxLastPayment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxLastPayment",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "75dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLastPayment.setDefaultUnit(kony.flex.DP);
            var lbllastPayment = new kony.ui.Label({
                "centerY": "50%",
                "id": "lbllastPayment",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("Kony.mb.EBill.lastPaymentOf"),
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
            var lblLastPaymentAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLastPaymentAmount",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbl424242SSP22px",
                "text": "$21.32",
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
            var lblOn = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOn",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("Kony.mb.EBill.on"),
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
            var lblLastPaymentDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLastPaymentDate",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLbl424242SSP22px",
                "text": "04/04/2018",
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
            flxLastPayment.add(lbllastPayment, lblLastPaymentAmount, lblOn, lblLastPaymentDate);
            var flxShadow2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 48,
                "clipBounds": true,
                "height": "6dp",
                "id": "flxShadow2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottomToTop",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow2.setDefaultUnit(kony.flex.DP);
            flxShadow2.add();
            var flxViewAllPayments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "48dp",
                "id": "flxViewAllPayments",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxViewAllPayments.setDefaultUnit(kony.flex.DP);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var lblViewAllPayments = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblViewAllPayments",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPReg30px",
                "text": kony.i18n.getLocalizedString("Kony.mb.EBill.ViewAllPayments"),
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
            flxViewAllPayments.add(flxSeperator, lblViewAllPayments);
            var btnViewBill = new kony.ui.Button({
                "focusSkin": "sknbtnf6f6f6SSP0a78d191pr",
                "height": "35dp",
                "id": "btnViewBill",
                "isVisible": true,
                "left": "20dp",
                "right": "52.50%",
                "skin": "sknBtn0a78d1Border0a78d13Px",
                "text": kony.i18n.getLocalizedString("Kony.mb.EBill.ViewBill"),
                "top": "115dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnPayBill = new kony.ui.Button({
                "focusSkin": "sknbtnf6f6f6SSP0a78d191pr",
                "height": "35dp",
                "id": "btnPayBill",
                "isVisible": true,
                "left": "52.50%",
                "right": "20dp",
                "skin": "sknBtn0a78d1Border0a78d13Px",
                "text": kony.i18n.getLocalizedString("Kony.mb.EBill.payBill"),
                "top": "115dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxUpcommingBillDetails.add(lblUpcomingDueBill, lblAmount, flxDueDate, flxLastPayment, flxShadow2, flxViewAllPayments, btnViewBill, btnPayBill);
            var lblPayeeFullName = new kony.ui.Label({
                "id": "lblPayeeFullName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.PayeeFullName"),
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
            var flxpayeefullname = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxpayeefullname",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3dp",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxpayeefullname.setDefaultUnit(kony.flex.DP);
            var flxAccountType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "17dp",
                "id": "flxAccountType",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "right": "7dp",
                "skin": "sknflxe3e3e3border",
                "top": 3,
                "width": "18dp",
                "zIndex": 1
            }, {}, {});
            flxAccountType.setDefaultUnit(kony.flex.DP);
            var imgAccountType = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "45%",
                "height": "11dp",
                "id": "imgAccountType",
                "isVisible": true,
                "skin": "slImage",
                "src": "personalaccount.png",
                "width": "11dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountType.add(imgAccountType);
            var lblPayeeFullNameValue = new kony.ui.Label({
                "id": "lblPayeeFullNameValue",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Stanford University",
                "textStyle": {},
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
            flxpayeefullname.add(flxAccountType, lblPayeeFullNameValue);
            var lbleBillStatus = new kony.ui.Label({
                "id": "lbleBillStatus",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.eBillStatus"),
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
            var flxebill = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxebill",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxebill.setDefaultUnit(kony.flex.DP);
            var imgebill = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgebill",
                "isVisible": true,
                "left": "0dp",
                "right": "8dp",
                "skin": "slImage",
                "src": "ebill.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lbleBillStatusValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lbleBillStatusValue",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.Active"),
                "textStyle": {},
                "top": "0dp",
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
            flxebill.add(imgebill, lbleBillStatusValue);
            var lblAccountNumber = new kony.ui.Label({
                "id": "lblAccountNumber",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": "Account Number",
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
            var lblAccountNumberValue = new kony.ui.Label({
                "id": "lblAccountNumberValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "21XX-XXXX-XXXX-7868",
                "textStyle": {},
                "top": "0dp",
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
            var lblPayeeAddress = new kony.ui.Label({
                "id": "lblPayeeAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.PayeeAddress"),
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
            var lblPayeeAddressValue = new kony.ui.Label({
                "id": "lblPayeeAddressValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "535 Freda Apt, Maryland, Austin, US, 728292",
                "textStyle": {},
                "top": "0dp",
                "width": "60%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblNameOnBill = new kony.ui.Label({
                "id": "lblNameOnBill",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.NameOnBill"),
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblNameOnBillValue = new kony.ui.Label({
                "id": "lblNameOnBillValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Yogish Shettigar",
                "textStyle": {},
                "top": "0dp",
                "width": "87%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblNickName = new kony.ui.Label({
                "id": "lblNickName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.Manage.NickName"),
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblNickNameValue = new kony.ui.Label({
                "id": "lblNickNameValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Kid’s School Account",
                "textStyle": {},
                "top": "0dp",
                "width": "87%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblLinkedWith = new kony.ui.Label({
                "id": "lblLinkedWith",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": "Linked With",
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblLinkedWithValue = new kony.ui.Label({
                "id": "lblLinkedWithValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "0 Customer IDs",
                "textStyle": {},
                "top": "0dp",
                "width": "87%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxMainContainer.add(flxToastDummy, flxShadow, flxUpcommingBillDetails, lblPayeeFullName, flxpayeefullname, lbleBillStatus, flxebill, lblAccountNumber, lblAccountNumberValue, lblPayeeAddress, lblPayeeAddressValue, lblNameOnBill, lblNameOnBillValue, lblNickName, lblNickNameValue, lblLinkedWith, lblLinkedWithValue);
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            var flxEditOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEditOptions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f2a5b0bfd49a49",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxEditOptions.setDefaultUnit(kony.flex.DP);
            var flxEditOptionsActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "7%",
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxEditOptionsActions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxPopupDocuments",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxEditOptionsActions.setDefaultUnit(kony.flex.DP);
            var btnEditPayeeAddress = new kony.ui.Button({
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnEditPayeeAddress",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.EditPayeeAddress"),
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
            var lblSeparatorPopupDocuments = new kony.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "lblSeparatorPopupDocuments",
                "isVisible": true,
                "left": "-2%",
                "skin": "sknLbl0095e4SSPRegular26px",
                "textStyle": {},
                "top": "-1dp",
                "width": "105%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnEditLinkedRecipient = new kony.ui.Button({
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnEditLinkedRecipient",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": "Edit Linked Customer ID",
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
            var lblSeperatorPopUpLinkedRecipient = new kony.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "lblSeperatorPopUpLinkedRecipient",
                "isVisible": true,
                "left": "-2%",
                "skin": "sknLbl0095e4SSPRegular26px",
                "textStyle": {},
                "top": "-1dp",
                "width": "105%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnEditNickName = new kony.ui.Button({
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnEditNickName",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.EditNickName"),
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
            flxEditOptionsActions.add(btnEditPayeeAddress, lblSeparatorPopupDocuments, btnEditLinkedRecipient, lblSeperatorPopUpLinkedRecipient, btnEditNickName);
            flxEditOptions.add(flxEditOptionsActions);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 0,
                "clipBounds": true,
                "id": "flxButtons",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnPayAPerson = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnPayAPerson",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.PayBill"),
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnDeactivateEBill = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnDeactivateEBill",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("Kony.mb.EBill.DeactivateEBill"),
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnActivateEBill = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnActivateEBill",
                "isVisible": false,
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("Kony.mb.EBill.ActivateEBill"),
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnDeleteRecipient = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnDeleteRecipient",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.DeletePayee"),
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxButtons.add(btnPayAPerson, btnDeactivateEBill, btnActivateEBill, btnDeleteRecipient);
            var flxScrollMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 0,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxScrollMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxScrollMain.setDefaultUnit(kony.flex.DP);
            var payeeDetailsNative = new com.temenos.infinity.payeeDetailsNative({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "payeeDetailsNative",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "ICSknSlFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "payeeDetailsNative": {
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
            payeeDetailsNative.keySkin = "{\"skin\":\"sknLbla0a0a022px\"}";
            payeeDetailsNative.dateFormat = "{\"format\" : \"d-m-Y\"}";
            payeeDetailsNative.fieldCount = "8";
            payeeDetailsNative.valueSkin = "{\"skin\":\"sknLbl424242SSP26px\"}";
            payeeDetailsNative.amountFormat = "{ \"locale\":\"\", \"positiveFormat\" : \"{CS}{D}\", \"negativeFormat\" : \"-({CS}{D})\", \"fractionDigits\":\"2\"}";
            payeeDetailsNative.field1Key = "{\"text\":\"Payee Full Name:\"}";
            payeeDetailsNative.backendDateFormat = "{\"format\" : \"Y-m-d\"}";
            payeeDetailsNative.field1Value = "{\"mapping\":\"{$.c.payeeName}\",\"type\":\"Label\",\"widgetProps\":{\"height\":\"19dp\",\"width\":\"100%\"},\"widgetPropLabel\":{\"width\":\"100%\"}}";
            payeeDetailsNative.actionButtonSkin = "{\"skin\":\"sknBtn0095e426pxEnabled\"}";
            payeeDetailsNative.field2Key = "{\"text\":\"eBill Status:\"}";
            payeeDetailsNative.accountNumberFormat = "{\"format\":\"\\\\d(?=\\\\d{4})\",\"replaceCharacter\":\"X\",\"modifiers\":\"g\"}";
            payeeDetailsNative.field2Value = "{\"Condition1\":{\"condition\":{\"{$.c.eBillStatus}\":\"1\"},\"mapping\":\"{$.c.eBillStatus}\",\"text\":\"Active\",\"type\":\"eBill\",\"image\":\"activeebill.png\",\"widgetProps\":{\"height\":\"19dp\",\"width\":\"100%\"},\"widgetPropLabel\":{\"width\":\"100%\"}},\"Condition2\":{\"condition\":{\"{$.c.eBillStatus}\":\"0\"},\"mapping\":\"{$.c.eBillStatus}\",\"text\":\"Inactive\",\"type\":\"eBill\",\"image\":\"inactiveebill.png\",\"widgetProps\":{\"height\":\"19dp\",\"width\":\"100%\"},\"widgetPropLabel\":{\"width\":\"100%\"}}}";
            payeeDetailsNative.accountNumberMasking = "{\"masking\":false}";
            payeeDetailsNative.field3Key = "{\"text\":\"Account Number:\"}";
            payeeDetailsNative.field3Value = "{\"mapping\":\"{$.c.accountNumber}\",\"type\":\"AccountNumber\",\"widgetProps\":{\"height\":\"19dp\",\"width\":\"100%\"},\"widgetPropLabel\":{\"width\":\"100%\"}}";
            payeeDetailsNative.field4Key = "{\"text\":\"Payee Address:\"}";
            payeeDetailsNative.field4Value = "{\"mapping\":\"{$.c.addressLine1}, {$.c.addressLine2}, {$.c.cityName}, {$.c.state},{$.c.country},{$.c.zipCode}\",\"type\":\"Label\",\"widgetProps\":{\"height\":\"60dp\",\"width\":\"100%\"},\"widgetPropLabel\":{\"width\":\"100%\"}}";
            payeeDetailsNative.field5Key = "{\"text\":\"Name to be appeared on bill:\"}";
            payeeDetailsNative.field5Value = "{\"mapping\":\"{$.c.nameOnBill}\",\"type\":\"Label\",\"widgetProps\":{\"height\":\"19dp\",\"width\":\"100%\"},\"widgetPropLabel\":{\"width\":\"100%\"}}";
            payeeDetailsNative.field6Key = "{\"text\":\"Nickname:\"}";
            payeeDetailsNative.field6Value = "{\"mapping\":\"{$.c.payeeNickName}\",\"type\":\"Label\",\"widgetProps\":{\"height\":\"19dp\",\"width\":\"100%\"},\"widgetPropLabel\":{\"width\":\"100%\"}}";
            payeeDetailsNative.field7Key = "{\"text\":\"Linked With:\"}";
            payeeDetailsNative.field7Value = "{\"mapping\":\"{$.c.noOfCustomersLinked} Customer(s)\",\"type\":\"Label\",\"widgetProps\":{\"height\":\"19dp\",\"width\":\"100%\"},\"widgetPropLabel\":{\"width\":\"100%\"}}";
            payeeDetailsNative.field8Key = "";
            payeeDetailsNative.field8Value = "";
            payeeDetailsNative.actionButton = "{\"Condition1\":{\"condition\":{\"{$.c.eBillStatus}\":\"1\"},\"action\":{\"level\":\"Form\",\"method\":\"payBill\"},\"text\":\"Pay Bill\",\"entitlement\":[\"BILL_PAY_CREATE\"]},\"Condition2\":{\"condition\":{\"{$.c.eBillStatus}\":\"0\"},\"action\":{\"level\":\"Form\",\"method\":\"activateEBill\"},\"text\":\"Activate eBill\",\"entitlement\":[\"BILL_PAY_ACTIVATE_OR_DEACTIVATE_EBILL\"]}}";
            flxScrollMain.add(payeeDetailsNative);
            var flxLinksWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLinksWrapper",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 11
            }, {}, {});
            flxLinksWrapper.setDefaultUnit(kony.flex.DP);
            var quicklinksNative = new com.temenos.infinity.quicklinksNative({
                "height": "100%",
                "id": "quicklinksNative",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "quicklinksNative": {
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
            quicklinksNative.sknLink = "ICSkn000000Op0";
            quicklinksNative.accountType = "";
            quicklinksNative.sknLinkValue = "ICSknLblFFFFFF15PxSSP";
            quicklinksNative.link1CTA = "{\"Active\":{\"text\":\"View Activity\",\"action\":\"viewAllPayments\",\"context\":\"\",\"entitlement\":[\"BILL_PAY_VIEW_PAYMENTS\"],\"entitlement_action\":false},\"Inactive\":{\"text\":\"View Activity\",\"action\":\"viewAllPayments\",\"context\":\"\",\"entitlement\":[\"BILL_PAY_VIEW_PAYMENTS\"],\"entitlement_action\":false}}";
            quicklinksNative.sknAddLink = "ICSkn000000Op0";
            quicklinksNative.link2CTA = "{\"Active\":{\"text\":\"Deactivate\",\"action\":\"showDeActivatePopup\",\"context\":\"\",\"entitlement\":[\"BILL_PAY_ACTIVATE_OR_DEACTIVATE_EBILL\"],\"entitlement_action\":false},\"Inactive\":{\"text\":\"Activate\",\"action\":\"activateEBill\",\"context\":\"\",\"entitlement\":[\"BILL_PAY_ACTIVATE_OR_DEACTIVATE_EBILL\"],\"entitlement_action\":false}}";
            quicklinksNative.sknAddLinkValue = "ICSknLbl007AFF100PSSP";
            quicklinksNative.link3CTA = "{\"Active\":{\"text\":\"Edit Nickname\",\"action\":\"editNickName\",\"context\":\"\",\"entitlement\":[\"BILL_PAY_CREATE_PAYEES\"],\"entitlement_action\":false},\"Inactive\":{\"text\":\"Edit Nickname\",\"action\":\"editNickName\",\"context\":\"\",\"entitlement\":[\"BILL_PAY_CREATE_PAYEES\"],\"entitlement_action\":false}}";
            quicklinksNative.sknAddLinkSeperator = "ICSknFlx000000BGP";
            quicklinksNative.link4CTA = "{\"Active\":{\"text\":\"Edit Payee Address\",\"action\":\"editAddress\",\"context\":\"\",\"entitlement\":[\"BILL_PAY_CREATE_PAYEES\"],\"entitlement_action\":false},\"Inactive\":{\"text\":\"Edit Payee Address\",\"action\":\"editAddress\",\"context\":\"\",\"entitlement\":[\"BILL_PAY_CREATE_PAYEES\"],\"entitlement_action\":false}}";
            quicklinksNative.sknContainer = "ICSknFlxFFFFFF10PFFFFFFR";
            quicklinksNative.link5CTA = "{\"Active\":{\"text\":\"Edit Linked IDs\",\"action\":\"editLinkedIDs\",\"context\":\"\",\"entitlement\":[\"BILL_PAY_CREATE_PAYEES\"],\"entitlement_action\":false},\"Inactive\":{\"text\":\"Edit Linked IDs\",\"action\":\"editLinkedIDs\",\"context\":\"\",\"entitlement\":[\"BILL_PAY_CREATE_PAYEES\"],\"entitlement_action\":false}}";
            quicklinksNative.sknBackground = "ICSkn000000BG50P";
            quicklinksNative.link6CTA = "{\"Active\":{\"text\":\"Delete\",\"action\":\"showDeletePopup\",\"context\":\"\",\"entitlement\":[\"BILL_PAY_DELETE_PAYEES\"],\"entitlement_action\":false},\"Inactive\":{\"text\":\"Delete\",\"action\":\"showDeletePopup\",\"context\":\"\",\"entitlement\":[\"BILL_PAY_DELETE_PAYEES\"],\"entitlement_action\":false}}";
            quicklinksNative.sknCancelLink = "ICSknLbl007AFF100PSSPBold";
            quicklinksNative.link7CTA = "";
            quicklinksNative.link8CTA = "";
            quicklinksNative.link9CTA = "";
            quicklinksNative.link10CTA = "";
            quicklinksNative.isPrimaryVisible = false;
            quicklinksNative.linkCancel = "{\"text\":\"Cancel\",\"action\":\"hideQuickLinks\",\"context\":\"\"}";
            flxLinksWrapper.add(quicklinksNative);
            this.add(flxHeader, flxHeaderSearchbox, flxMainContainer, flxPopup, flxEditOptions, flxButtons, flxScrollMain, flxLinksWrapper);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_h04c156ea2c948429cc40eb2aaba9a78,
            "metaData": {
                "title": "..."
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
            "addWidgets": addWidgetsfrmBillPayPayeeDetails,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmBillPayPayeeDetails",
            "init": controller.AS_Form_a70874837d8946eb9bf8956dac77ef25,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_acc884571dd143769c3c04d229786b57(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.BillPayPayeeDetails.Title")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": false,
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