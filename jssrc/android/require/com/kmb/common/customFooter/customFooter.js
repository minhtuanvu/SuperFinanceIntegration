define(function() {
    return function(controller) {
        var customFooter = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "60dp",
            "id": "customFooter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 300
        }, controller.args[0], "customFooter"), extendConfig({}, controller.args[1], "customFooter"), extendConfig({}, controller.args[2], "customFooter"));
        customFooter.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "flxContainer"), extendConfig({}, controller.args[1], "flxContainer"), extendConfig({}, controller.args[2], "flxContainer"));
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxAccounts = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAccounts",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "flxAccounts"), extendConfig({}, controller.args[1], "flxAccounts"), extendConfig({}, controller.args[2], "flxAccounts"));
        flxAccounts.setDefaultUnit(kony.flex.DP);
        var imgAccounts = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "28dp",
            "id": "imgAccounts",
            "isVisible": true,
            "skin": "slImage",
            "src": "accounts.png",
            "top": "8dp",
            "width": "32dp",
            "zIndex": 1
        }, controller.args[0], "imgAccounts"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAccounts"), extendConfig({}, controller.args[2], "imgAccounts"));
        var lblAccounts = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblAccounts",
            "isVisible": true,
            "skin": "sknLblA0A0A0SSP20px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.accounts"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAccounts"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccounts"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAccounts"));
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
            "skin": "sknFlx004b95",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccSelect"), extendConfig({}, controller.args[1], "flxAccSelect"), extendConfig({}, controller.args[2], "flxAccSelect"));
        flxAccSelect.setDefaultUnit(kony.flex.DP);
        flxAccSelect.add();
        flxAccounts.add(imgAccounts, lblAccounts, flxAccSelect);
        var flxTransfer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTransfer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "flxTransfer"), extendConfig({}, controller.args[1], "flxTransfer"), extendConfig({}, controller.args[2], "flxTransfer"));
        flxTransfer.setDefaultUnit(kony.flex.DP);
        var imgTransfer = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "28dp",
            "id": "imgTransfer",
            "isVisible": true,
            "skin": "slImage",
            "src": "transfer.png",
            "top": "8dp",
            "width": "32dp",
            "zIndex": 1
        }, controller.args[0], "imgTransfer"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTransfer"), extendConfig({}, controller.args[2], "imgTransfer"));
        var lblTransfer = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblTransfer",
            "isVisible": true,
            "skin": "sknLblA0A0A0SSP20px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.transfer"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTransfer"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTransfer"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTransfer"));
        var flxTransferSel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "4dp",
            "id": "flxTransferSel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx004b95",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTransferSel"), extendConfig({}, controller.args[1], "flxTransferSel"), extendConfig({}, controller.args[2], "flxTransferSel"));
        flxTransferSel.setDefaultUnit(kony.flex.DP);
        flxTransferSel.add();
        flxTransfer.add(imgTransfer, lblTransfer, flxTransferSel);
        var flxBillPay = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBillPay",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "flxBillPay"), extendConfig({}, controller.args[1], "flxBillPay"), extendConfig({}, controller.args[2], "flxBillPay"));
        flxBillPay.setDefaultUnit(kony.flex.DP);
        var imgBillPay = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "28dp",
            "id": "imgBillPay",
            "isVisible": true,
            "skin": "slImage",
            "src": "billpay.png",
            "top": "8dp",
            "width": "32dp",
            "zIndex": 1
        }, controller.args[0], "imgBillPay"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBillPay"), extendConfig({}, controller.args[2], "imgBillPay"));
        var lblBillPay = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblBillPay",
            "isVisible": true,
            "skin": "sknLblA0A0A0SSP20px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.billPay"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBillPay"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBillPay"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblBillPay"));
        var flxBillSelected = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "4dp",
            "id": "flxBillSelected",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx004b95",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBillSelected"), extendConfig({}, controller.args[1], "flxBillSelected"), extendConfig({}, controller.args[2], "flxBillSelected"));
        flxBillSelected.setDefaultUnit(kony.flex.DP);
        flxBillSelected.add();
        flxBillPay.add(imgBillPay, lblBillPay, flxBillSelected);
        var flxMore = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMore",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "flxMore"), extendConfig({}, controller.args[1], "flxMore"), extendConfig({}, controller.args[2], "flxMore"));
        flxMore.setDefaultUnit(kony.flex.DP);
        var imgMore = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "28dp",
            "id": "imgMore",
            "isVisible": true,
            "skin": "slImage",
            "src": "more.png",
            "top": "8dp",
            "width": "32dp",
            "zIndex": 1
        }, controller.args[0], "imgMore"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMore"), extendConfig({}, controller.args[2], "imgMore"));
        var lblMore = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblMore",
            "isVisible": true,
            "skin": "sknLblA0A0A0SSP20px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.menu"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMore"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMore"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMore"));
        var flxMoreSelect = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "4dp",
            "id": "flxMoreSelect",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx004b95",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMoreSelect"), extendConfig({}, controller.args[1], "flxMoreSelect"), extendConfig({}, controller.args[2], "flxMoreSelect"));
        flxMoreSelect.setDefaultUnit(kony.flex.DP);
        flxMoreSelect.add();
        flxMore.add(imgMore, lblMore, flxMoreSelect);
        flxContainer.add(flxAccounts, flxTransfer, flxBillPay, flxMore);
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
            "zIndex": 1
        }, controller.args[0], "flxTypeOneShadow"), extendConfig({}, controller.args[1], "flxTypeOneShadow"), extendConfig({}, controller.args[2], "flxTypeOneShadow"));
        flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
        flxTypeOneShadow.add();
        customFooter.add(flxContainer, flxTypeOneShadow);
        return customFooter;
    }
})