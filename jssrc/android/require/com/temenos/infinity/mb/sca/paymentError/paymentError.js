define(function() {
    return function(controller) {
        var paymentError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "paymentError",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_a17f660a8b1a453eb3a4d3f9a79343a8(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "paymentError"), extendConfig({}, controller.args[1], "paymentError"), extendConfig({}, controller.args[2], "paymentError"));
        paymentError.setDefaultUnit(kony.flex.DP);
        var flxPaymentErrorWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPaymentErrorWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPaymentErrorWrapper"), extendConfig({}, controller.args[1], "flxPaymentErrorWrapper"), extendConfig({}, controller.args[2], "flxPaymentErrorWrapper"));
        flxPaymentErrorWrapper.setDefaultUnit(kony.flex.DP);
        var flxPaymentErrorHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "flxPaymentErrorHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx003e75Bg",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPaymentErrorHeader"), extendConfig({}, controller.args[1], "flxPaymentErrorHeader"), extendConfig({}, controller.args[2], "flxPaymentErrorHeader"));
        flxPaymentErrorHeader.setDefaultUnit(kony.flex.DP);
        var flxBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxBack",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flxBack"), extendConfig({}, controller.args[1], "flxBack"), extendConfig({}, controller.args[2], "flxBack"));
        flxBack.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgBack",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        flxBack.add(imgBack);
        var lblAcknowledgement = new kony.ui.Label(extendConfig({
            "id": "lblAcknowledgement",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknHeaderFFF34px",
            "text": kony.i18n.getLocalizedString("kony.mb.sca.Acknowledgement"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "50dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAcknowledgement"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAcknowledgement"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAcknowledgement"));
        flxPaymentErrorHeader.add(flxBack, lblAcknowledgement);
        var flxTransactionDenied = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTransactionDenied",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "28%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTransactionDenied"), extendConfig({}, controller.args[1], "flxTransactionDenied"), extendConfig({}, controller.args[2], "flxTransactionDenied"));
        flxTransactionDenied.setDefaultUnit(kony.flex.DP);
        var imgDeclined = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgDeclined",
            "isVisible": true,
            "skin": "slImage",
            "src": "error.png",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgDeclined"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgDeclined"), extendConfig({}, controller.args[2], "imgDeclined"));
        var lblErrorTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblErrorTitle",
            "isVisible": true,
            "skin": "sknSSPSemiBold24px000000",
            "text": kony.i18n.getLocalizedString("kony.mb.sca.transferFailed"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "24dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblErrorTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblErrorTitle"));
        var lblErrorDescription = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblErrorDescription",
            "isVisible": true,
            "skin": "sknLblSSPR16px727272",
            "text": kony.i18n.getLocalizedString("kony.mb.sca.approvalRequestFailed"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "23dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblErrorDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorDescription"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblErrorDescription"));
        flxTransactionDenied.add(imgDeclined, lblErrorTitle, lblErrorDescription);
        var flxButtonsBottom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "34dp",
            "clipBounds": true,
            "id": "flxButtonsBottom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxButtonsBottom"), extendConfig({}, controller.args[1], "flxButtonsBottom"), extendConfig({}, controller.args[2], "flxButtonsBottom"));
        flxButtonsBottom.setDefaultUnit(kony.flex.DP);
        var btnTryAgain = new kony.ui.Button(extendConfig({
            "height": "48dp",
            "id": "btnTryAgain",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnBg003E75Border1pxFont15pxFFFFFF",
            "text": kony.i18n.getLocalizedString("kony.mb.sca.tryAgain"),
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "btnTryAgain"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTryAgain"), extendConfig({}, controller.args[2], "btnTryAgain"));
        var btnNewPayment = new kony.ui.Button(extendConfig({
            "height": "48dp",
            "id": "btnNewPayment",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnBgFFFFFFBorder1px003E7540px",
            "text": kony.i18n.getLocalizedString("kony.mb.sca.newTransfer"),
            "top": "20dp",
            "zIndex": 1
        }, controller.args[0], "btnNewPayment"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNewPayment"), extendConfig({}, controller.args[2], "btnNewPayment"));
        flxButtonsBottom.add(btnTryAgain, btnNewPayment);
        flxPaymentErrorWrapper.add(flxPaymentErrorHeader, flxTransactionDenied, flxButtonsBottom);
        paymentError.add(flxPaymentErrorWrapper);
        return paymentError;
    }
})