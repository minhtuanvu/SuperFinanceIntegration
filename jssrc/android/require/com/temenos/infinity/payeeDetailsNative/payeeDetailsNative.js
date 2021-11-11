define(function() {
    return function(controller) {
        var payeeDetailsNative = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "payeeDetailsNative",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onHide": controller.AS_FlexContainer_ja809d297ee340f9910fec29f4badec9,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_a8fb6b905b5c40f891c55a35bca80cd3(eventobject);
            },
            "skin": "ICSknSlFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "payeeDetailsNative"), extendConfig({}, controller.args[1], "payeeDetailsNative"), extendConfig({}, controller.args[2], "payeeDetailsNative"));
        payeeDetailsNative.setDefaultUnit(kony.flex.DP);
        var flxMainPayeeDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainPayeeDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxMainPayeeDetails"), extendConfig({}, controller.args[1], "flxMainPayeeDetails"), extendConfig({}, controller.args[2], "flxMainPayeeDetails"));
        flxMainPayeeDetails.setDefaultUnit(kony.flex.DP);
        var flxMainContainerPayeeDetails = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "70dp",
            "bounces": true,
            "clipBounds": false,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxMainContainerPayeeDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknTransparentBs",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxMainContainerPayeeDetails"), extendConfig({}, controller.args[1], "flxMainContainerPayeeDetails"), extendConfig({}, controller.args[2], "flxMainContainerPayeeDetails"));
        flxMainContainerPayeeDetails.setDefaultUnit(kony.flex.DP);
        var flxShadowPayeeDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxShadowPayeeDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxShadowPayeeDetails"), extendConfig({}, controller.args[1], "flxShadowPayeeDetails"), extendConfig({}, controller.args[2], "flxShadowPayeeDetails"));
        flxShadowPayeeDetails.setDefaultUnit(kony.flex.DP);
        flxShadowPayeeDetails.add();
        var flxUpcommingBillDetails = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxUpcommingBillDetails"), extendConfig({}, controller.args[1], "flxUpcommingBillDetails"), extendConfig({}, controller.args[2], "flxUpcommingBillDetails"));
        flxUpcommingBillDetails.setDefaultUnit(kony.flex.DP);
        var lblUpcomingDueBill = new kony.ui.Label(extendConfig({
            "id": "lblUpcomingDueBill",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP22px",
            "text": kony.i18n.getLocalizedString("Kony.mb.EBill.UpcomingDueBill"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "17dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblUpcomingDueBill"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUpcomingDueBill"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUpcomingDueBill"));
        var lblAmount = new kony.ui.Label(extendConfig({
            "id": "lblAmount",
            "isVisible": true,
            "left": "20dp",
            "text": "$23.93",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "35dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAmount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAmount"));
        var flxDueDate = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxDueDate",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "57dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDueDate"), extendConfig({}, controller.args[1], "flxDueDate"), extendConfig({}, controller.args[2], "flxDueDate"));
        flxDueDate.setDefaultUnit(kony.flex.DP);
        var lblDueDate = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblDueDate",
            "isVisible": true,
            "left": 20,
            "skin": "sknLbl727272SSPReg22px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.dueDate"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDueDate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDueDate"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDueDate"));
        var lblDueDateValue = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblDueDateValue",
            "isVisible": true,
            "left": "2dp",
            "skin": "sknLbl424242SSP22px",
            "text": "05/05/2018",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDueDateValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDueDateValue"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDueDateValue"));
        flxDueDate.add(lblDueDate, lblDueDateValue);
        var flxLastPayment = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxLastPayment",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "75dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLastPayment"), extendConfig({}, controller.args[1], "flxLastPayment"), extendConfig({}, controller.args[2], "flxLastPayment"));
        flxLastPayment.setDefaultUnit(kony.flex.DP);
        var lbllastPayment = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lbllastPayment",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": kony.i18n.getLocalizedString("Kony.mb.EBill.lastPaymentOf"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lbllastPayment"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbllastPayment"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lbllastPayment"));
        var lblLastPaymentAmount = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblLastPaymentAmount",
            "isVisible": true,
            "left": "2dp",
            "skin": "sknLbl424242SSP22px",
            "text": "$21.32",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLastPaymentAmount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLastPaymentAmount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLastPaymentAmount"));
        var lblOn = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblOn",
            "isVisible": true,
            "left": "2dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": kony.i18n.getLocalizedString("Kony.mb.EBill.on"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblOn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOn"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblOn"));
        var lblLastPaymentDate = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblLastPaymentDate",
            "isVisible": true,
            "left": "2dp",
            "skin": "sknLbl424242SSP22px",
            "text": "04/04/2018",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLastPaymentDate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLastPaymentDate"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLastPaymentDate"));
        flxLastPayment.add(lbllastPayment, lblLastPaymentAmount, lblOn, lblLastPaymentDate);
        var flxShadow2 = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxShadow2"), extendConfig({}, controller.args[1], "flxShadow2"), extendConfig({}, controller.args[2], "flxShadow2"));
        flxShadow2.setDefaultUnit(kony.flex.DP);
        flxShadow2.add();
        var flxViewAllPayments = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxViewAllPayments",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxViewAllPayments"), extendConfig({}, controller.args[1], "flxViewAllPayments"), extendConfig({}, controller.args[2], "flxViewAllPayments"));
        flxViewAllPayments.setDefaultUnit(kony.flex.DP);
        var CopyflxSeperator0f5febecdffba4e = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "CopyflxSeperator0f5febecdffba4e",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxe1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "CopyflxSeperator0f5febecdffba4e"), extendConfig({}, controller.args[1], "CopyflxSeperator0f5febecdffba4e"), extendConfig({}, controller.args[2], "CopyflxSeperator0f5febecdffba4e"));
        CopyflxSeperator0f5febecdffba4e.setDefaultUnit(kony.flex.DP);
        CopyflxSeperator0f5febecdffba4e.add();
        var lblViewAllPayments = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblViewAllPayments",
            "isVisible": true,
            "skin": "sknLbl0095e4SSPReg30px",
            "text": kony.i18n.getLocalizedString("Kony.mb.EBill.ViewAllPayments"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblViewAllPayments"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblViewAllPayments"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblViewAllPayments"));
        flxViewAllPayments.add(CopyflxSeperator0f5febecdffba4e, lblViewAllPayments);
        var btnViewBill = new kony.ui.Button(extendConfig({
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
        }, controller.args[0], "btnViewBill"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnViewBill"), extendConfig({}, controller.args[2], "btnViewBill"));
        var btnPayBill = new kony.ui.Button(extendConfig({
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
        }, controller.args[0], "btnPayBill"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPayBill"), extendConfig({}, controller.args[2], "btnPayBill"));
        flxUpcommingBillDetails.add(lblUpcomingDueBill, lblAmount, flxDueDate, flxLastPayment, flxShadow2, flxViewAllPayments, btnViewBill, btnPayBill);
        var flxGroup1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGroup1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "20dp",
            "width": "90%"
        }, controller.args[0], "flxGroup1"), extendConfig({}, controller.args[1], "flxGroup1"), extendConfig({}, controller.args[2], "flxGroup1"));
        flxGroup1.setDefaultUnit(kony.flex.DP);
        var lblField1 = new kony.ui.Label(extendConfig({
            "id": "lblField1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a022px",
            "text": kony.i18n.getLocalizedString("kony.mb.Manage.NickName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField1"));
        var flxValueField1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxValueField1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "3dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxValueField1"), extendConfig({}, controller.args[1], "flxValueField1"), extendConfig({}, controller.args[2], "flxValueField1"));
        flxValueField1.setDefaultUnit(kony.flex.DP);
        var flximg1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flximg1",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "7dp",
            "skin": "ICSknflxe",
            "width": "36dp",
            "zIndex": 1
        }, controller.args[0], "flximg1"), extendConfig({}, controller.args[1], "flximg1"), extendConfig({}, controller.args[2], "flximg1"));
        flximg1.setDefaultUnit(kony.flex.DP);
        var imgFieldValue1 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "imgFieldValue1",
            "isVisible": true,
            "skin": "slImage",
            "src": "ebill.png",
            "width": "36dp"
        }, controller.args[0], "imgFieldValue1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFieldValue1"), extendConfig({}, controller.args[2], "imgFieldValue1"));
        flximg1.add(imgFieldValue1);
        flxValueField1.add(flximg1);
        flxGroup1.add(lblField1, flxValueField1);
        var flxGroup2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGroup2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "13dp",
            "width": "90%"
        }, controller.args[0], "flxGroup2"), extendConfig({}, controller.args[1], "flxGroup2"), extendConfig({}, controller.args[2], "flxGroup2"));
        flxGroup2.setDefaultUnit(kony.flex.DP);
        var lblField2 = new kony.ui.Label(extendConfig({
            "id": "lblField2",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a022px",
            "text": kony.i18n.getLocalizedString("kony.mb.Manage.NickName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField2"));
        var flxValueField2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxValueField2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "3dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxValueField2"), extendConfig({}, controller.args[1], "flxValueField2"), extendConfig({}, controller.args[2], "flxValueField2"));
        flxValueField2.setDefaultUnit(kony.flex.DP);
        var flximg2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flximg2",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "7dp",
            "skin": "ICSknflxe",
            "width": "36dp",
            "zIndex": 1
        }, controller.args[0], "flximg2"), extendConfig({}, controller.args[1], "flximg2"), extendConfig({}, controller.args[2], "flximg2"));
        flximg2.setDefaultUnit(kony.flex.DP);
        var imgFieldValue2 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "imgFieldValue2",
            "isVisible": true,
            "skin": "slImage",
            "src": "ebill.png",
            "width": "36dp"
        }, controller.args[0], "imgFieldValue2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFieldValue2"), extendConfig({}, controller.args[2], "imgFieldValue2"));
        flximg2.add(imgFieldValue2);
        flxValueField2.add(flximg2);
        flxGroup2.add(lblField2, flxValueField2);
        var flxGroup3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGroup3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "13dp",
            "width": "90%"
        }, controller.args[0], "flxGroup3"), extendConfig({}, controller.args[1], "flxGroup3"), extendConfig({}, controller.args[2], "flxGroup3"));
        flxGroup3.setDefaultUnit(kony.flex.DP);
        var lblField3 = new kony.ui.Label(extendConfig({
            "id": "lblField3",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a022px",
            "text": kony.i18n.getLocalizedString("kony.mb.Manage.NickName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField3"));
        var flxValueField3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxValueField3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "3dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxValueField3"), extendConfig({}, controller.args[1], "flxValueField3"), extendConfig({}, controller.args[2], "flxValueField3"));
        flxValueField3.setDefaultUnit(kony.flex.DP);
        var flximg3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flximg3",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "7dp",
            "skin": "ICSknflxe",
            "width": "36dp",
            "zIndex": 1
        }, controller.args[0], "flximg3"), extendConfig({}, controller.args[1], "flximg3"), extendConfig({}, controller.args[2], "flximg3"));
        flximg3.setDefaultUnit(kony.flex.DP);
        var imgFieldValue3 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "imgFieldValue3",
            "isVisible": true,
            "skin": "slImage",
            "src": "ebill.png",
            "width": "36dp"
        }, controller.args[0], "imgFieldValue3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFieldValue3"), extendConfig({}, controller.args[2], "imgFieldValue3"));
        flximg3.add(imgFieldValue3);
        flxValueField3.add(flximg3);
        flxGroup3.add(lblField3, flxValueField3);
        var flxGroup4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGroup4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "13dp",
            "width": "90%"
        }, controller.args[0], "flxGroup4"), extendConfig({}, controller.args[1], "flxGroup4"), extendConfig({}, controller.args[2], "flxGroup4"));
        flxGroup4.setDefaultUnit(kony.flex.DP);
        var lblField4 = new kony.ui.Label(extendConfig({
            "id": "lblField4",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a022px",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.PayeeAddress"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField4"));
        var flxValueField4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxValueField4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "3dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxValueField4"), extendConfig({}, controller.args[1], "flxValueField4"), extendConfig({}, controller.args[2], "flxValueField4"));
        flxValueField4.setDefaultUnit(kony.flex.DP);
        var flximg4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flximg4",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "7dp",
            "skin": "ICSknflxe",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flximg4"), extendConfig({}, controller.args[1], "flximg4"), extendConfig({}, controller.args[2], "flximg4"));
        flximg4.setDefaultUnit(kony.flex.DP);
        var imgFieldValue4 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "imgFieldValue4",
            "isVisible": true,
            "skin": "slImage",
            "src": "ebill.png",
            "width": "36dp"
        }, controller.args[0], "imgFieldValue4"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFieldValue4"), extendConfig({}, controller.args[2], "imgFieldValue4"));
        flximg4.add(imgFieldValue4);
        flxValueField4.add(flximg4);
        flxGroup4.add(lblField4, flxValueField4);
        var flxGroup5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGroup5",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "13dp",
            "width": "90%"
        }, controller.args[0], "flxGroup5"), extendConfig({}, controller.args[1], "flxGroup5"), extendConfig({}, controller.args[2], "flxGroup5"));
        flxGroup5.setDefaultUnit(kony.flex.DP);
        var lblField5 = new kony.ui.Label(extendConfig({
            "id": "lblField5",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a022px",
            "text": kony.i18n.getLocalizedString("kony.mb.Manage.NickName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField5"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField5"));
        var flxValueField5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxValueField5",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "3dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxValueField5"), extendConfig({}, controller.args[1], "flxValueField5"), extendConfig({}, controller.args[2], "flxValueField5"));
        flxValueField5.setDefaultUnit(kony.flex.DP);
        var flximg5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flximg5",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "7dp",
            "skin": "ICSknflxe",
            "width": "36dp",
            "zIndex": 1
        }, controller.args[0], "flximg5"), extendConfig({}, controller.args[1], "flximg5"), extendConfig({}, controller.args[2], "flximg5"));
        flximg5.setDefaultUnit(kony.flex.DP);
        var imgFieldValue5 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "imgFieldValue5",
            "isVisible": true,
            "skin": "slImage",
            "src": "ebill.png",
            "width": "36dp"
        }, controller.args[0], "imgFieldValue5"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFieldValue5"), extendConfig({}, controller.args[2], "imgFieldValue5"));
        flximg5.add(imgFieldValue5);
        flxValueField5.add(flximg5);
        flxGroup5.add(lblField5, flxValueField5);
        var flxGroup6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGroup6",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "13dp",
            "width": "90%"
        }, controller.args[0], "flxGroup6"), extendConfig({}, controller.args[1], "flxGroup6"), extendConfig({}, controller.args[2], "flxGroup6"));
        flxGroup6.setDefaultUnit(kony.flex.DP);
        var lblField6 = new kony.ui.Label(extendConfig({
            "id": "lblField6",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a022px",
            "text": kony.i18n.getLocalizedString("kony.mb.Manage.NickName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField6"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField6"));
        var flxValueField6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxValueField6",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "3dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxValueField6"), extendConfig({}, controller.args[1], "flxValueField6"), extendConfig({}, controller.args[2], "flxValueField6"));
        flxValueField6.setDefaultUnit(kony.flex.DP);
        var flximg6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flximg6",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "7dp",
            "skin": "ICSknflxe",
            "width": "36dp",
            "zIndex": 1
        }, controller.args[0], "flximg6"), extendConfig({}, controller.args[1], "flximg6"), extendConfig({}, controller.args[2], "flximg6"));
        flximg6.setDefaultUnit(kony.flex.DP);
        var imgFieldValue6 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "imgFieldValue6",
            "isVisible": true,
            "skin": "slImage",
            "src": "ebill.png",
            "width": "36dp"
        }, controller.args[0], "imgFieldValue6"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFieldValue6"), extendConfig({}, controller.args[2], "imgFieldValue6"));
        flximg6.add(imgFieldValue6);
        flxValueField6.add(flximg6);
        flxGroup6.add(lblField6, flxValueField6);
        var flxGroup7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGroup7",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "13dp",
            "width": "90%"
        }, controller.args[0], "flxGroup7"), extendConfig({}, controller.args[1], "flxGroup7"), extendConfig({}, controller.args[2], "flxGroup7"));
        flxGroup7.setDefaultUnit(kony.flex.DP);
        var lblField7 = new kony.ui.Label(extendConfig({
            "id": "lblField7",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a022px",
            "text": kony.i18n.getLocalizedString("kony.mb.Manage.NickName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField7"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField7"));
        var flxValueField7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxValueField7",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "3dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxValueField7"), extendConfig({}, controller.args[1], "flxValueField7"), extendConfig({}, controller.args[2], "flxValueField7"));
        flxValueField7.setDefaultUnit(kony.flex.DP);
        var flximg7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flximg7",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "7dp",
            "skin": "ICSknflxe",
            "width": "36dp",
            "zIndex": 1
        }, controller.args[0], "flximg7"), extendConfig({}, controller.args[1], "flximg7"), extendConfig({}, controller.args[2], "flximg7"));
        flximg7.setDefaultUnit(kony.flex.DP);
        var imgFieldValue7 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "imgFieldValue7",
            "isVisible": true,
            "skin": "slImage",
            "src": "ebill.png",
            "width": "36dp"
        }, controller.args[0], "imgFieldValue7"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFieldValue7"), extendConfig({}, controller.args[2], "imgFieldValue7"));
        flximg7.add(imgFieldValue7);
        flxValueField7.add(flximg7);
        flxGroup7.add(lblField7, flxValueField7);
        var flxGroup8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxGroup8",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "13dp",
            "width": "90%"
        }, controller.args[0], "flxGroup8"), extendConfig({}, controller.args[1], "flxGroup8"), extendConfig({}, controller.args[2], "flxGroup8"));
        flxGroup8.setDefaultUnit(kony.flex.DP);
        var lblField8 = new kony.ui.Label(extendConfig({
            "id": "lblField8",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a022px",
            "text": kony.i18n.getLocalizedString("kony.mb.Manage.NickName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField8"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField8"));
        var flxValueField8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxValueField8",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "3dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxValueField8"), extendConfig({}, controller.args[1], "flxValueField8"), extendConfig({}, controller.args[2], "flxValueField8"));
        flxValueField8.setDefaultUnit(kony.flex.DP);
        var flximg8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flximg8",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "7dp",
            "skin": "ICSknflxe",
            "width": "36dp",
            "zIndex": 1
        }, controller.args[0], "flximg8"), extendConfig({}, controller.args[1], "flximg8"), extendConfig({}, controller.args[2], "flximg8"));
        flximg8.setDefaultUnit(kony.flex.DP);
        var imgFieldValue8 = new kony.ui.Image2(extendConfig({
            "id": "imgFieldValue8",
            "isVisible": true,
            "skin": "slImage",
            "src": "ebill.png",
            "width": "36dp"
        }, controller.args[0], "imgFieldValue8"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFieldValue8"), extendConfig({}, controller.args[2], "imgFieldValue8"));
        flximg8.add(imgFieldValue8);
        flxValueField8.add(flximg8);
        flxGroup8.add(lblField8, flxValueField8);
        flxMainContainerPayeeDetails.add(flxShadowPayeeDetails, flxUpcommingBillDetails, flxGroup1, flxGroup2, flxGroup3, flxGroup4, flxGroup5, flxGroup6, flxGroup7, flxGroup8);
        var btnAction = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "focusSkin": "sknBtn004B9526pxFocus",
            "height": "40dp",
            "id": "btnAction",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnDarkTheme",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.AddPayee"),
            "zIndex": 10
        }, controller.args[0], "btnAction"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAction"), extendConfig({}, controller.args[2], "btnAction"));
        flxMainPayeeDetails.add(flxMainContainerPayeeDetails, btnAction);
        var flxEditOptions = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxEditOptions"), extendConfig({}, controller.args[1], "flxEditOptions"), extendConfig({}, controller.args[2], "flxEditOptions"));
        flxEditOptions.setDefaultUnit(kony.flex.DP);
        var flxEditOptionsActions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "7%",
            "centerX": "50%",
            "clipBounds": true,
            "height": "100dp",
            "id": "flxEditOptionsActions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxPopupDocuments",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "flxEditOptionsActions"), extendConfig({}, controller.args[1], "flxEditOptionsActions"), extendConfig({}, controller.args[2], "flxEditOptionsActions"));
        flxEditOptionsActions.setDefaultUnit(kony.flex.DP);
        var btnEditPayeeAddress = new kony.ui.Button(extendConfig({
            "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
            "height": "50%",
            "id": "btnEditPayeeAddress",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknBtn",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.EditPayeeAddress"),
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnEditPayeeAddress"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEditPayeeAddress"), extendConfig({}, controller.args[2], "btnEditPayeeAddress"));
        var lblSeparatorPopupDocuments = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "1dp",
            "id": "lblSeparatorPopupDocuments",
            "isVisible": true,
            "left": "-2%",
            "skin": "sknLbl0095e4SSPRegular26px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "-1dp",
            "width": "105%",
            "zIndex": 2
        }, controller.args[0], "lblSeparatorPopupDocuments"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparatorPopupDocuments"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparatorPopupDocuments"));
        var btnEditNickName = new kony.ui.Button(extendConfig({
            "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
            "height": "50%",
            "id": "btnEditNickName",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknBtn",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.EditNickName"),
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnEditNickName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEditNickName"), extendConfig({}, controller.args[2], "btnEditNickName"));
        flxEditOptionsActions.add(btnEditPayeeAddress, lblSeparatorPopupDocuments, btnEditNickName);
        flxEditOptions.add(flxEditOptionsActions);
        var flxPopUps = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPopUps",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPopUps"), extendConfig({}, controller.args[1], "flxPopUps"), extendConfig({}, controller.args[2], "flxPopUps"));
        flxPopUps.setDefaultUnit(kony.flex.DP);
        var flxPopupsMB = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10.50%",
            "id": "flxPopupsMB",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxf54b5e",
            "top": "0dp",
            "width": "100%",
            "zIndex": 200
        }, controller.args[0], "flxPopupsMB"), extendConfig({}, controller.args[1], "flxPopupsMB"), extendConfig({}, controller.args[2], "flxPopupsMB"));
        flxPopupsMB.setDefaultUnit(kony.flex.DP);
        var customPopup = new com.kmb.common.customPopup(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "height": "100%",
            "id": "customPopup",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_DEFAULT,
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "imgPopup": {
                    "src": "imagedrag.png"
                }
            }
        }, controller.args[0], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[1], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[2], "customPopup"));
        flxPopupsMB.add(customPopup);
        var flxCustomGroupPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCustomGroupPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlx000000Op50",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxCustomGroupPopup"), extendConfig({}, controller.args[1], "flxCustomGroupPopup"), extendConfig({}, controller.args[2], "flxCustomGroupPopup"));
        flxCustomGroupPopup.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxffffffB",
            "width": "80%",
            "zIndex": 200
        }, controller.args[0], "flxContainer"), extendConfig({}, controller.args[1], "flxContainer"), extendConfig({}, controller.args[2], "flxContainer"));
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxImg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "70dp",
            "id": "flxImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "20dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "flxImg"), extendConfig({}, controller.args[1], "flxImg"), extendConfig({}, controller.args[2], "flxImg"));
        flxImg.setDefaultUnit(kony.flex.DP);
        var img1 = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "img1",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "confirmation_tick.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "img1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "img1"), extendConfig({}, controller.args[2], "img1"));
        flxImg.add(img1);
        var lblMessage = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblMessage",
            "isVisible": true,
            "skin": "skn000000BoldSsps",
            "text": "Custom group has been edited successfully",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMessage"));
        var btnDone = new kony.ui.Button(extendConfig({
            "bottom": "15dp",
            "centerX": "50%",
            "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
            "height": "48dp",
            "id": "btnDone",
            "isVisible": true,
            "skin": "sknBtn0095e4RoundedffffffSSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.statusMessage.done"),
            "top": "20dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnDone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDone"), extendConfig({}, controller.args[2], "btnDone"));
        flxContainer.add(flxImg, lblMessage, btnDone);
        flxCustomGroupPopup.add(flxContainer);
        flxPopUps.add(flxPopupsMB, flxCustomGroupPopup);
        payeeDetailsNative.add(flxMainPayeeDetails, flxEditOptions, flxPopUps);
        return payeeDetailsNative;
    }
})