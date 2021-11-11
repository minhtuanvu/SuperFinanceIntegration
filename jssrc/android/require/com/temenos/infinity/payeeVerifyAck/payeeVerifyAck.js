define(function() {
    return function(controller) {
        var payeeVerifyAck = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "payeeVerifyAck",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "postShow": controller.AS_FlexContainer_h73be2b52f874c43815714538cb3d001,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_fb1508d3c7734caf814fd4ef95872628(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "payeeVerifyAck"), extendConfig({}, controller.args[1], "payeeVerifyAck"), extendConfig({}, controller.args[2], "payeeVerifyAck"));
        payeeVerifyAck.setDefaultUnit(kony.flex.DP);
        var flxMainContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "0dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "ICSknScrFlxffffff",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxMainWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMainWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxMainWrapper"), extendConfig({}, controller.args[1], "flxMainWrapper"), extendConfig({}, controller.args[2], "flxMainWrapper"));
        flxMainWrapper.setDefaultUnit(kony.flex.DP);
        var flxAcknowledgmentSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "220dp",
            "id": "flxAcknowledgmentSuccess",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "7.40%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "85.50%",
            "zIndex": 3
        }, controller.args[0], "flxAcknowledgmentSuccess"), extendConfig({}, controller.args[1], "flxAcknowledgmentSuccess"), extendConfig({}, controller.args[2], "flxAcknowledgmentSuccess"));
        flxAcknowledgmentSuccess.setDefaultUnit(kony.flex.DP);
        var imgAcknowledgmentSuccess = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgAcknowledgmentSuccess",
            "isVisible": true,
            "skin": "slImage",
            "src": "confirmation_2.png",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgAcknowledgmentSuccess"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAcknowledgmentSuccess"), extendConfig({}, controller.args[2], "imgAcknowledgmentSuccess"));
        var lblAcknowledgmentSuccess = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblAcknowledgmentSuccess",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknBlackSemibold24PxNew",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Payee"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "19dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblAcknowledgmentSuccess"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAcknowledgmentSuccess"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAcknowledgmentSuccess"));
        var lblReference = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblReference",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknBlack20PxNew",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Payee"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "22dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReference"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReference"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblReference"));
        var lblReferenceValue = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblReferenceValue",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknBlack20PxNew",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Payee"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReferenceValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReferenceValue"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblReferenceValue"));
        flxAcknowledgmentSuccess.add(imgAcknowledgmentSuccess, lblAcknowledgmentSuccess, lblReference, lblReferenceValue);
        var flxAcknowledgmentError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "220dp",
            "id": "flxAcknowledgmentError",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "7.40%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "100dp",
            "width": "85.50%",
            "zIndex": 3
        }, controller.args[0], "flxAcknowledgmentError"), extendConfig({}, controller.args[1], "flxAcknowledgmentError"), extendConfig({}, controller.args[2], "flxAcknowledgmentError"));
        flxAcknowledgmentError.setDefaultUnit(kony.flex.DP);
        var imgAcknowledgmentError = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgAcknowledgmentError",
            "isVisible": true,
            "skin": "slImage",
            "src": "error_1.png",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgAcknowledgmentError"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAcknowledgmentError"), extendConfig({}, controller.args[2], "imgAcknowledgmentError"));
        var lblAcknowledgmentError = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblAcknowledgmentError",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknBlackSemibold24PxNew",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Payee"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "19dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "lblAcknowledgmentError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAcknowledgmentError"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAcknowledgmentError"));
        flxAcknowledgmentError.add(imgAcknowledgmentError, lblAcknowledgmentError);
        var flxDetailContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetailContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 110
        }, controller.args[0], "flxDetailContainer"), extendConfig({}, controller.args[1], "flxDetailContainer"), extendConfig({}, controller.args[2], "flxDetailContainer"));
        flxDetailContainer.setDefaultUnit(kony.flex.DP);
        var flx1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "14dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx1"), extendConfig({}, controller.args[1], "flx1"), extendConfig({}, controller.args[2], "flx1"));
        flx1.setDefaultUnit(kony.flex.DP);
        var lblField1 = new kony.ui.Label(extendConfig({
            "id": "lblField1",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl3New",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.PayeeFullName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField1"));
        var lblFieldValue1 = new kony.ui.Label(extendConfig({
            "id": "lblFieldValue1",
            "isVisible": true,
            "left": "20dp",
            "right": "120dp",
            "skin": "ICSknLbl2New",
            "text": "John Bailey",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25dp",
            "zIndex": 1
        }, controller.args[0], "lblFieldValue1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFieldValue1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFieldValue1"));
        var lblSeparator1 = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator1",
            "isVisible": false,
            "left": "20dp",
            "right": "34dp",
            "skin": "ICSknlblSeparator1",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "87%",
            "zIndex": 3
        }, controller.args[0], "lblSeparator1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator1"));
        var lblField1Edit = new kony.ui.Label(extendConfig({
            "bottom": "6dp",
            "id": "lblField1Edit",
            "isVisible": true,
            "right": "34dp",
            "skin": "ICSknLblBlueEditNew",
            "text": "Edit",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField1Edit"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1Edit"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField1Edit"));
        flx1.add(lblField1, lblFieldValue1, lblSeparator1, lblField1Edit);
        var flx2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "9dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx2"), extendConfig({}, controller.args[1], "flx2"), extendConfig({}, controller.args[2], "flx2"));
        flx2.setDefaultUnit(kony.flex.DP);
        var lblField2 = new kony.ui.Label(extendConfig({
            "id": "lblField2",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl3New",
            "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountNumber"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField2"));
        var lblFieldValue2 = new kony.ui.Label(extendConfig({
            "id": "lblFieldValue2",
            "isVisible": true,
            "left": "20dp",
            "right": "120dp",
            "skin": "ICSknLbl2New",
            "text": "XXXX-XXXX-XXXX-XXXX",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25dp",
            "zIndex": 1
        }, controller.args[0], "lblFieldValue2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFieldValue2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFieldValue2"));
        var lblSeparator2 = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator2",
            "isVisible": true,
            "left": "20dp",
            "right": "34dp",
            "skin": "ICSknlblSeparator1",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "lblSeparator2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator2"));
        var lblField2Edit = new kony.ui.Label(extendConfig({
            "bottom": "6dp",
            "id": "lblField2Edit",
            "isVisible": true,
            "right": "34dp",
            "skin": "ICSknLblBlueEditNew",
            "text": "Edit",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField2Edit"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2Edit"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField2Edit"));
        flx2.add(lblField2, lblFieldValue2, lblSeparator2, lblField2Edit);
        var flx3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "9dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx3"), extendConfig({}, controller.args[1], "flx3"), extendConfig({}, controller.args[2], "flx3"));
        flx3.setDefaultUnit(kony.flex.DP);
        var lblField3 = new kony.ui.Label(extendConfig({
            "id": "lblField3",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl3New",
            "text": kony.i18n.getLocalizedString("kony.mb.common.phoneNo"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField3"));
        var lblFieldValue3 = new kony.ui.Label(extendConfig({
            "id": "lblFieldValue3",
            "isVisible": true,
            "left": "20dp",
            "right": "120dp",
            "skin": "ICSknLbl2New",
            "text": "950-238-3965",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25dp",
            "zIndex": 1
        }, controller.args[0], "lblFieldValue3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFieldValue3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFieldValue3"));
        var lblSeparator3 = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator3",
            "isVisible": true,
            "left": "20dp",
            "right": "34dp",
            "skin": "ICSknlblSeparator1",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "lblSeparator3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator3"));
        var lblField3Edit = new kony.ui.Label(extendConfig({
            "bottom": "6dp",
            "id": "lblField3Edit",
            "isVisible": true,
            "right": "34dp",
            "skin": "ICSknLblBlueEditNew",
            "text": "Edit",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField3Edit"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField3Edit"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField3Edit"));
        flx3.add(lblField3, lblFieldValue3, lblSeparator3, lblField3Edit);
        var flx4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "11dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx4"), extendConfig({}, controller.args[1], "flx4"), extendConfig({}, controller.args[2], "flx4"));
        flx4.setDefaultUnit(kony.flex.DP);
        var lblField4 = new kony.ui.Label(extendConfig({
            "id": "lblField4",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl3New",
            "text": kony.i18n.getLocalizedString("kony.mb.common.RelationNumber"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField4"));
        var lblFieldValue4 = new kony.ui.Label(extendConfig({
            "id": "lblFieldValue4",
            "isVisible": true,
            "left": "20dp",
            "right": "120dp",
            "skin": "ICSknLbl424242SSP26pxNew",
            "text": "96325874123",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25dp",
            "zIndex": 1
        }, controller.args[0], "lblFieldValue4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFieldValue4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFieldValue4"));
        var lblSeparator4 = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator4",
            "isVisible": true,
            "left": "20dp",
            "right": "34dp",
            "skin": "ICSknlblSeparator1",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "lblSeparator4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator4"));
        var lblField4Edit = new kony.ui.Label(extendConfig({
            "bottom": "6dp",
            "id": "lblField4Edit",
            "isVisible": true,
            "right": "34dp",
            "skin": "ICSknLblBlueEditNew",
            "text": "Edit",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField4Edit"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField4Edit"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField4Edit"));
        flx4.add(lblField4, lblFieldValue4, lblSeparator4, lblField4Edit);
        var flx5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "11dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx5"), extendConfig({}, controller.args[1], "flx5"), extendConfig({}, controller.args[2], "flx5"));
        flx5.setDefaultUnit(kony.flex.DP);
        var lblField5 = new kony.ui.Label(extendConfig({
            "id": "lblField5",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl3New",
            "text": kony.i18n.getLocalizedString("kony.mb.common.PolicyNumber"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField5"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField5"));
        var lblFieldValue5 = new kony.ui.Label(extendConfig({
            "id": "lblFieldValue5",
            "isVisible": true,
            "left": "20dp",
            "right": "120dp",
            "skin": "ICSknLbl2New",
            "text": "21XX-XXXX-XXXX-7868",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25dp",
            "zIndex": 1
        }, controller.args[0], "lblFieldValue5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFieldValue5"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFieldValue5"));
        var lblField5Edit = new kony.ui.Label(extendConfig({
            "bottom": "6dp",
            "id": "lblField5Edit",
            "isVisible": true,
            "right": "34dp",
            "skin": "ICSknLblBlueEditNew",
            "text": "Edit",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField5Edit"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField5Edit"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField5Edit"));
        var lblSeparator5 = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator5",
            "isVisible": true,
            "left": "20dp",
            "right": "34dp",
            "skin": "ICSknlblSeparator1",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "87%",
            "zIndex": 3
        }, controller.args[0], "lblSeparator5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator5"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator5"));
        flx5.add(lblField5, lblFieldValue5, lblField5Edit, lblSeparator5);
        var flx6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "11dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx6"), extendConfig({}, controller.args[1], "flx6"), extendConfig({}, controller.args[2], "flx6"));
        flx6.setDefaultUnit(kony.flex.DP);
        var lblSeparator6 = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator6",
            "isVisible": true,
            "left": "20dp",
            "right": "34dp",
            "skin": "ICSknlblSeparatorNew",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "lblSeparator6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator6"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator6"));
        var lblField6 = new kony.ui.Label(extendConfig({
            "id": "lblField6",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl3New",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.PayeeAddress"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField6"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField6"));
        var lblFieldValue6 = new kony.ui.Label(extendConfig({
            "id": "lblFieldValue6",
            "isVisible": true,
            "left": "20dp",
            "right": "120dp",
            "skin": "ICSknLbl2New",
            "text": "535 Freda Apt, Maryland, Austin, US, 728292",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25dp",
            "zIndex": 1
        }, controller.args[0], "lblFieldValue6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFieldValue6"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFieldValue6"));
        var lblField6Edit = new kony.ui.Label(extendConfig({
            "bottom": "6dp",
            "id": "lblField6Edit",
            "isVisible": true,
            "right": "34dp",
            "skin": "ICSknLblBlueEditNew",
            "text": "Edit",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField6Edit"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField6Edit"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField6Edit"));
        flx6.add(lblSeparator6, lblField6, lblFieldValue6, lblField6Edit);
        var flx7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "11dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx7"), extendConfig({}, controller.args[1], "flx7"), extendConfig({}, controller.args[2], "flx7"));
        flx7.setDefaultUnit(kony.flex.DP);
        var lblSeparator7 = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator7",
            "isVisible": true,
            "left": "20dp",
            "right": "34dp",
            "skin": "ICSknlblSeparatorNew",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "lblSeparator7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator7"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator7"));
        var lblField7 = new kony.ui.Label(extendConfig({
            "id": "lblField7",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl3New",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.PayeeAddress"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "6dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField7"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField7"));
        var lblFieldValue7 = new kony.ui.Label(extendConfig({
            "id": "lblFieldValue7",
            "isVisible": true,
            "left": "20dp",
            "right": "120dp",
            "skin": "ICSknLbl2New",
            "text": "535 Freda Apt, Maryland, Austin, US, 728292",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25dp",
            "zIndex": 1
        }, controller.args[0], "lblFieldValue7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFieldValue7"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFieldValue7"));
        var lblField7Edit = new kony.ui.Label(extendConfig({
            "bottom": "6dp",
            "id": "lblField7Edit",
            "isVisible": true,
            "right": "34dp",
            "skin": "ICSknLblBlueEditNew",
            "text": "Edit",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "lblField7Edit"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField7Edit"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField7Edit"));
        flx7.add(lblSeparator7, lblField7, lblFieldValue7, lblField7Edit);
        var flxDummy = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxDummy",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDummy"), extendConfig({}, controller.args[1], "flxDummy"), extendConfig({}, controller.args[2], "flxDummy"));
        flxDummy.setDefaultUnit(kony.flex.DP);
        var lblSeparator8 = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator8",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSeparator1",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "9dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "lblSeparator8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator8"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator8"));
        flxDummy.add(lblSeparator8);
        flxDetailContainer.add(flx1, flx2, flx3, flx4, flx5, flx6, flx7, flxDummy);
        var flxEditFields = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxEditFields",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxEditFields"), extendConfig({}, controller.args[1], "flxEditFields"), extendConfig({}, controller.args[2], "flxEditFields"));
        flxEditFields.setDefaultUnit(kony.flex.DP);
        var lblEditField1 = new kony.ui.Label(extendConfig({
            "id": "lblEditField1",
            "isVisible": true,
            "left": "28dp",
            "skin": "ICSknLbl2New",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.NameOnBill"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "24dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEditField1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEditField1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEditField1"));
        var txtEditValue1 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "40dp",
            "id": "txtEditValue1",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "maxTextLength": null,
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "secureTextEntry": false,
            "skin": "ICSknTbx424242SSPRegular28px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "5dp",
            "width": "89%",
            "zIndex": 1
        }, controller.args[0], "txtEditValue1"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [8, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtEditValue1"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx424242SSPRegular28px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtEditValue1"));
        var lblEditField2 = new kony.ui.Label(extendConfig({
            "id": "lblEditField2",
            "isVisible": true,
            "left": "28dp",
            "skin": "ICSknLbl2New",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.AccNickName"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEditField2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEditField2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEditField2"));
        var txtEditValue2 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "40dp",
            "id": "txtEditValue2",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "maxTextLength": null,
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "secureTextEntry": false,
            "skin": "ICSknTbx424242SSPRegular28px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "5dp",
            "width": "89%",
            "zIndex": 1
        }, controller.args[0], "txtEditValue2"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [8, 0, 0, 0],
            "paddingInPixel": true
        }, controller.args[1], "txtEditValue2"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "ICSknTbx424242SSPRegular28px",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtEditValue2"));
        flxEditFields.add(lblEditField1, txtEditValue1, lblEditField2, txtEditValue2);
        flxMainWrapper.add(flxAcknowledgmentSuccess, flxAcknowledgmentError, flxDetailContainer, flxEditFields);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
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
            "zIndex": 4
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btn1 = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "focusSkin": "ICSknBtn1",
            "height": "40dp",
            "id": "btn1",
            "isVisible": true,
            "right": "20dp",
            "skin": "defBtnNormal",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.PayBill"),
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btn1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn1"), extendConfig({}, controller.args[2], "btn1"));
        var btn2 = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50.00%",
            "focusSkin": "ICSknBtn1",
            "height": "40dp",
            "id": "btn2",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "defBtnNormal",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.DeletePayee"),
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btn2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn2"), extendConfig({}, controller.args[2], "btn2"));
        var btnError = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50.00%",
            "focusSkin": "ICSknBtn1",
            "height": "40dp",
            "id": "btnError",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "defBtnNormal",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.DeletePayee"),
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnError"), extendConfig({}, controller.args[2], "btnError"));
        flxButtons.add(btn1, btn2, btnError);
        flxMainContainer.add(flxMainWrapper, flxButtons);
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10.50%",
            "id": "flxPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknFlxf2New",
            "top": "0dp",
            "width": "100%",
            "zIndex": 200
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
        var flxPopupWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPopupWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPopupWrapper"), extendConfig({}, controller.args[1], "flxPopupWrapper"), extendConfig({}, controller.args[2], "flxPopupWrapper"));
        flxPopupWrapper.setDefaultUnit(kony.flex.DP);
        var imgPopup = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgPopup",
            "isVisible": true,
            "left": "30dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgPopup"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPopup"), extendConfig({}, controller.args[2], "imgPopup"));
        var lblPopup = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblPopup",
            "isVisible": true,
            "left": "65dp",
            "right": "20dp",
            "skin": "ICSknLblffffffSSPReg2New",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "zIndex": 1
        }, controller.args[0], "lblPopup"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPopup"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPopup"));
        flxPopupWrapper.add(imgPopup, lblPopup);
        flxPopup.add(flxPopupWrapper);
        payeeVerifyAck.add(flxMainContainer, flxPopup);
        return payeeVerifyAck;
    }
})