define(function() {
    return function(controller) {
        var SecureCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "SecureCode",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_g65d606b873b49159f56a1abc4c1b3ea(eventobject);
            },
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "SecureCode"), extendConfig({}, controller.args[1], "SecureCode"), extendConfig({}, controller.args[2], "SecureCode"));
        SecureCode.setDefaultUnit(kony.flex.DP);
        var lblCode = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblCode",
            "isVisible": true,
            "maxNumberOfLines": 1,
            "skin": "sknLbl979797SSP70pxTab",
            "textStyle": {
                "letterSpacing": 12,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCode"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCode"));
        SecureCode.add(lblCode);
        return SecureCode;
    }
})