define(function() {
    return function(controller) {
        var customFooter = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "80dp",
            "id": "customFooter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffffShadowdcdde1",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "customFooter"), extendConfig({}, controller.args[1], "customFooter"), extendConfig({}, controller.args[2], "customFooter"));
        customFooter.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "4%",
            "isModalContainer": false,
            "right": "4%",
            "top": "0dp",
            "zIndex": 2
        }, controller.args[0], "flxContainer"), extendConfig({}, controller.args[1], "flxContainer"), extendConfig({}, controller.args[2], "flxContainer"));
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxAccounts = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAccounts",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "9.09%",
            "zIndex": 3
        }, controller.args[0], "flxAccounts"), extendConfig({}, controller.args[1], "flxAccounts"), extendConfig({}, controller.args[2], "flxAccounts"));
        flxAccounts.setDefaultUnit(kony.flex.DP);
        var imgAccounts = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "40dp",
            "id": "imgAccounts",
            "isVisible": true,
            "skin": "slImage",
            "src": "accounts.png",
            "top": "10dp",
            "width": "50dp",
            "zIndex": 4
        }, controller.args[0], "imgAccounts"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAccounts"), extendConfig({}, controller.args[2], "imgAccounts"));
        var flxAccSelect = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "4dp",
            "id": "flxAccSelect",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx004b95Tab",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccSelect"), extendConfig({}, controller.args[1], "flxAccSelect"), extendConfig({}, controller.args[2], "flxAccSelect"));
        flxAccSelect.setDefaultUnit(kony.flex.DP);
        flxAccSelect.add();
        var lblAccounts = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblAccounts",
            "isVisible": true,
            "text": "Accounts",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAccounts"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccounts"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAccounts"));
        flxAccounts.add(imgAccounts, flxAccSelect, lblAccounts);
        var flxTransfer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTransfer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "9.09%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "9.09%",
            "zIndex": 3
        }, controller.args[0], "flxTransfer"), extendConfig({}, controller.args[1], "flxTransfer"), extendConfig({}, controller.args[2], "flxTransfer"));
        flxTransfer.setDefaultUnit(kony.flex.DP);
        var imgTransfer = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "40dp",
            "id": "imgTransfer",
            "isVisible": true,
            "skin": "slImage",
            "src": "maketransfer.png",
            "top": "10dp",
            "width": "50dp",
            "zIndex": 4
        }, controller.args[0], "imgTransfer"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTransfer"), extendConfig({}, controller.args[2], "imgTransfer"));
        var flxTransferSelect = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "4dp",
            "id": "flxTransferSelect",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx004b95Tab",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTransferSelect"), extendConfig({}, controller.args[1], "flxTransferSelect"), extendConfig({}, controller.args[2], "flxTransferSelect"));
        flxTransferSelect.setDefaultUnit(kony.flex.DP);
        flxTransferSelect.add();
        var lblTransfer = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblTransfer",
            "isVisible": true,
            "text": "Transfer",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTransfer"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTransfer"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTransfer"));
        flxTransfer.add(imgTransfer, flxTransferSelect, lblTransfer);
        var flxBillPay = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBillPay",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "9.09%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "9.09%",
            "zIndex": 3
        }, controller.args[0], "flxBillPay"), extendConfig({}, controller.args[1], "flxBillPay"), extendConfig({}, controller.args[2], "flxBillPay"));
        flxBillPay.setDefaultUnit(kony.flex.DP);
        var imgBillPay = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "40dp",
            "id": "imgBillPay",
            "isVisible": true,
            "skin": "slImage",
            "src": "billpay.png",
            "top": "10dp",
            "width": "50dp",
            "zIndex": 4
        }, controller.args[0], "imgBillPay"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBillPay"), extendConfig({}, controller.args[2], "imgBillPay"));
        var flxBillPaySelect = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "4dp",
            "id": "flxBillPaySelect",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx004b95Tab",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBillPaySelect"), extendConfig({}, controller.args[1], "flxBillPaySelect"), extendConfig({}, controller.args[2], "flxBillPaySelect"));
        flxBillPaySelect.setDefaultUnit(kony.flex.DP);
        flxBillPaySelect.add();
        var lblBillPay = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblBillPay",
            "isVisible": true,
            "text": "Bill Pay",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBillPay"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBillPay"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBillPay"));
        flxBillPay.add(imgBillPay, flxBillPaySelect, lblBillPay);
        var flxDeposits = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDeposits",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "9.09%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "9.09%",
            "zIndex": 3
        }, controller.args[0], "flxDeposits"), extendConfig({}, controller.args[1], "flxDeposits"), extendConfig({}, controller.args[2], "flxDeposits"));
        flxDeposits.setDefaultUnit(kony.flex.DP);
        var imgDeposits = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "40dp",
            "id": "imgDeposits",
            "isVisible": true,
            "skin": "slImage",
            "src": "checkdepositimg.png",
            "top": "10dp",
            "width": "50dp",
            "zIndex": 4
        }, controller.args[0], "imgDeposits"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgDeposits"), extendConfig({}, controller.args[2], "imgDeposits"));
        var flxDepositsSelect = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "4dp",
            "id": "flxDepositsSelect",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx004b95Tab",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDepositsSelect"), extendConfig({}, controller.args[1], "flxDepositsSelect"), extendConfig({}, controller.args[2], "flxDepositsSelect"));
        flxDepositsSelect.setDefaultUnit(kony.flex.DP);
        flxDepositsSelect.add();
        var lblDeposits = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblDeposits",
            "isVisible": true,
            "text": "Deposits",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDeposits"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDeposits"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDeposits"));
        flxDeposits.add(imgDeposits, flxDepositsSelect, lblDeposits);
        var flxMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMessage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "9.09%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "9.09%",
            "zIndex": 3
        }, controller.args[0], "flxMessage"), extendConfig({}, controller.args[1], "flxMessage"), extendConfig({}, controller.args[2], "flxMessage"));
        flxMessage.setDefaultUnit(kony.flex.DP);
        var imgMessage = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "40dp",
            "id": "imgMessage",
            "isVisible": true,
            "skin": "slImage",
            "src": "message.png",
            "top": "10dp",
            "width": "50dp",
            "zIndex": 4
        }, controller.args[0], "imgMessage"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMessage"), extendConfig({}, controller.args[2], "imgMessage"));
        var flxMessageSelect = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "4dp",
            "id": "flxMessageSelect",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx004b95Tab",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMessageSelect"), extendConfig({}, controller.args[1], "flxMessageSelect"), extendConfig({}, controller.args[2], "flxMessageSelect"));
        flxMessageSelect.setDefaultUnit(kony.flex.DP);
        flxMessageSelect.add();
        var lblMessage = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblMessage",
            "isVisible": true,
            "text": "Message",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMessage"));
        flxMessage.add(imgMessage, flxMessageSelect, lblMessage);
        var flxMenu = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "9.09%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "9.09%",
            "zIndex": 3
        }, controller.args[0], "flxMenu"), extendConfig({}, controller.args[1], "flxMenu"), extendConfig({}, controller.args[2], "flxMenu"));
        flxMenu.setDefaultUnit(kony.flex.DP);
        var imgMenu = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "40dp",
            "id": "imgMenu",
            "isVisible": true,
            "skin": "slImage",
            "src": "more.png",
            "top": "10dp",
            "width": "50dp",
            "zIndex": 4
        }, controller.args[0], "imgMenu"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMenu"), extendConfig({}, controller.args[2], "imgMenu"));
        var flxMenuSelect = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "4dp",
            "id": "flxMenuSelect",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx004b95Tab",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMenuSelect"), extendConfig({}, controller.args[1], "flxMenuSelect"), extendConfig({}, controller.args[2], "flxMenuSelect"));
        flxMenuSelect.setDefaultUnit(kony.flex.DP);
        flxMenuSelect.add();
        var lblMenu = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblMenu",
            "isVisible": true,
            "text": "More",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMenu"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMenu"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMenu"));
        flxMenu.add(imgMenu, flxMenuSelect, lblMenu);
        flxContainer.add(flxAccounts, flxTransfer, flxBillPay, flxDeposits, flxMessage, flxMenu);
        var flxTypeOneShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7dp",
            "id": "flxTypeOneShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadowInverted",
            "top": "-7dp",
            "width": "100%",
            "zIndex": 200
        }, controller.args[0], "flxTypeOneShadow"), extendConfig({}, controller.args[1], "flxTypeOneShadow"), extendConfig({}, controller.args[2], "flxTypeOneShadow"));
        flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
        flxTypeOneShadow.add();
        customFooter.add(flxContainer, flxTypeOneShadow);
        return customFooter;
    }
})