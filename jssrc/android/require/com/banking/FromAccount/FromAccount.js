define(function() {
    return function(controller) {
        var FromAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "141dp",
            "id": "FromAccount",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_a4675c5a356f46aa98126d6885e08127(eventobject);
            },
            "skin": "sknFlxBgF9F9F9Tab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "FromAccount"), extendConfig({}, controller.args[1], "FromAccount"), extendConfig({}, controller.args[2], "FromAccount"));
        FromAccount.setDefaultUnit(kony.flex.DP);
        var lblFromAccount = new kony.ui.Label(extendConfig({
            "id": "lblFromAccount",
            "isVisible": true,
            "left": "31dp",
            "skin": "sknLbla0a0a0SSP30pxTab",
            "text": kony.i18n.getLocalizedString("kony.tab.BillPay.FromAccount"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFromAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFromAccount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFromAccount"));
        var btnChange = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnBgffffffF0a78D1SSP30PxTab",
            "id": "btnChange",
            "isVisible": true,
            "onClick": controller.AS_onActionHandler_c365d8347ec740ecb7b2217f63b9cd54,
            "right": 0,
            "skin": "sknBtnBgffffffF0a78D1SSP30PxTab",
            "text": kony.i18n.getLocalizedString("kony.tab.common.Change"),
            "top": "109dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnChange"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnChange"), extendConfig({}, controller.args[2], "btnChange"));
        var flxAccountContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxAccountContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "44dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountContainer"), extendConfig({}, controller.args[1], "flxAccountContainer"), extendConfig({}, controller.args[2], "flxAccountContainer"));
        flxAccountContainer.setDefaultUnit(kony.flex.DP);
        var flxAccountHolderLeft = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAccountHolderLeft",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "31dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxAccountHolderLeft"), extendConfig({}, controller.args[1], "flxAccountHolderLeft"), extendConfig({}, controller.args[2], "flxAccountHolderLeft"));
        flxAccountHolderLeft.setDefaultUnit(kony.flex.DP);
        var lblFromAccountValue = new kony.ui.Label(extendConfig({
            "id": "lblFromAccountValue",
            "isVisible": true,
            "skin": "sknLbl424242SSP30PxTab",
            "text": "My Checking ....2343",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFromAccountValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFromAccountValue"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFromAccountValue"));
        var lblBank = new kony.ui.Label(extendConfig({
            "id": "lblBank",
            "isVisible": true,
            "skin": "sknLbl727272SSP26pxTab",
            "text": "HDFC Bank",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblBank"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBank"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblBank"));
        flxAccountHolderLeft.add(lblFromAccountValue, lblBank);
        var flxAccountHolderRight = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAccountHolderRight",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "right": "30dp",
            "skin": "slFbox",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "flxAccountHolderRight"), extendConfig({}, controller.args[1], "flxAccountHolderRight"), extendConfig({}, controller.args[2], "flxAccountHolderRight"));
        flxAccountHolderRight.setDefaultUnit(kony.flex.DP);
        var lblBalanceValue = new kony.ui.Label(extendConfig({
            "id": "lblBalanceValue",
            "isVisible": true,
            "skin": "sknLbl424242SSP30PxTab",
            "text": "$42,304.00",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblBalanceValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBalanceValue"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblBalanceValue"));
        var lblavailableBalance = new kony.ui.Label(extendConfig({
            "id": "lblavailableBalance",
            "isVisible": true,
            "skin": "sknLbl727272SSP26pxTab",
            "text": kony.i18n.getLocalizedString("kony.mb.common.AvailableBalance"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblavailableBalance"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblavailableBalance"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblavailableBalance"));
        flxAccountHolderRight.add(lblBalanceValue, lblavailableBalance);
        flxAccountContainer.add(flxAccountHolderLeft, flxAccountHolderRight);
        var flxSeperatorTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "40dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperatorTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxSeperatorTop"), extendConfig({}, controller.args[1], "flxSeperatorTop"), extendConfig({}, controller.args[2], "flxSeperatorTop"));
        flxSeperatorTop.setDefaultUnit(kony.flex.DP);
        flxSeperatorTop.add();
        var flxSeparatorBottom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorBottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxSeparatorBottom"), extendConfig({}, controller.args[1], "flxSeparatorBottom"), extendConfig({}, controller.args[2], "flxSeparatorBottom"));
        flxSeparatorBottom.setDefaultUnit(kony.flex.DP);
        flxSeparatorBottom.add();
        FromAccount.add(lblFromAccount, btnChange, flxAccountContainer, flxSeperatorTop, flxSeparatorBottom);
        return FromAccount;
    }
})