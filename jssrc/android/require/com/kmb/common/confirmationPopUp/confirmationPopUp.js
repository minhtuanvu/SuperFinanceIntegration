define(function() {
    return function(controller) {
        var confirmationPopUp = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "confirmationPopUp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "confirmationPopUp"), extendConfig({}, controller.args[1], "confirmationPopUp"), extendConfig({}, controller.args[2], "confirmationPopUp"));
        confirmationPopUp.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "120dp",
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxffffffB",
            "width": "80%",
            "zIndex": 200
        }, controller.args[0], "flxContainer"), extendConfig({}, controller.args[1], "flxContainer"), extendConfig({}, controller.args[2], "flxContainer"));
        flxContainer.setDefaultUnit(kony.flex.DP);
        var lblMsg = new kony.ui.Label(extendConfig({
            "centerX": "50.00%",
            "centerY": "35%",
            "id": "lblMsg",
            "isVisible": true,
            "skin": "sknlbl424242SSPR15dp",
            "text": "Are you sure you want to deactivate user?",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMsg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMsg"));
        var flxBtns = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxBtns",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBtns"), extendConfig({}, controller.args[1], "flxBtns"), extendConfig({}, controller.args[2], "flxBtns"));
        flxBtns.setDefaultUnit(kony.flex.DP);
        var flxSep1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSep1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3op50",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSep1"), extendConfig({}, controller.args[1], "flxSep1"), extendConfig({}, controller.args[2], "flxSep1"));
        flxSep1.setDefaultUnit(kony.flex.DP);
        flxSep1.add();
        var flxBottom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBottom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%"
        }, controller.args[0], "flxBottom"), extendConfig({}, controller.args[1], "flxBottom"), extendConfig({}, controller.args[2], "flxBottom"));
        flxBottom.setDefaultUnit(kony.flex.DP);
        var flxNo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_onClickflxNo_bd0d842b5bb2404a910f97e982f6883d,
            "skin": "slFbox",
            "width": "49%",
            "zIndex": 1
        }, controller.args[0], "flxNo"), extendConfig({}, controller.args[1], "flxNo"), extendConfig({}, controller.args[2], "flxNo"));
        flxNo.setDefaultUnit(kony.flex.DP);
        var lblNo = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "95%",
            "id": "lblNo",
            "isVisible": true,
            "skin": "sknlbl004B95SSPR13dp",
            "text": kony.i18n.getLocalizedString("kony.mb.common.AlertNo"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNo"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNo"));
        flxNo.add(lblNo);
        var flxSep2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSep2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3op50",
            "width": "1dp",
            "zIndex": 1
        }, controller.args[0], "flxSep2"), extendConfig({}, controller.args[1], "flxSep2"), extendConfig({}, controller.args[2], "flxSep2"));
        flxSep2.setDefaultUnit(kony.flex.DP);
        flxSep2.add();
        var flxYes = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxYes",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_onClickflxYes_eb7984a57ee54eb38f24da996709e3b4,
            "skin": "slFbox",
            "width": "49%",
            "zIndex": 1
        }, controller.args[0], "flxYes"), extendConfig({}, controller.args[1], "flxYes"), extendConfig({}, controller.args[2], "flxYes"));
        flxYes.setDefaultUnit(kony.flex.DP);
        var lblYes = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "95%",
            "id": "lblYes",
            "isVisible": true,
            "skin": "sknlbl004B95SSPR13dp",
            "text": kony.i18n.getLocalizedString("kony.mb.common.AlertYes"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblYes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblYes"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblYes"));
        flxYes.add(lblYes);
        flxBottom.add(flxNo, flxSep2, flxYes);
        flxBtns.add(flxSep1, flxBottom);
        flxContainer.add(lblMsg, flxBtns);
        confirmationPopUp.add(flxContainer);
        return confirmationPopUp;
    }
})