define(function() {
    return function(controller) {
        var SCAComponent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "SCAComponent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_c8ad6e3c6b2445c6b8916c5b00f60e4d(eventobject);
            },
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "SCAComponent"), extendConfig({}, controller.args[1], "SCAComponent"), extendConfig({}, controller.args[2], "SCAComponent"));
        SCAComponent.setDefaultUnit(kony.flex.DP);
        var lblInfo = new kony.ui.Label(extendConfig({
            "id": "lblInfo",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLbl004B95SSPRegular26px",
            "text": "This will be a SCA Component and it has to be replaced",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblInfo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblInfo"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblInfo"));
        var btnContinue = new kony.ui.Button(extendConfig({
            "focusSkin": "slButtonGlossRed",
            "height": "50dp",
            "id": "btnContinue",
            "isVisible": true,
            "left": "50dp",
            "skin": "defBtnNormal",
            "text": "Complete Transaction",
            "top": "20dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "btnContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContinue"), extendConfig({}, controller.args[2], "btnContinue"));
        var btnClose = new kony.ui.Button(extendConfig({
            "focusSkin": "slButtonGlossRed",
            "height": "50dp",
            "id": "btnClose",
            "isVisible": true,
            "left": "50dp",
            "skin": "defBtnNormal",
            "text": "Close",
            "top": "20dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "btnClose"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnClose"), extendConfig({}, controller.args[2], "btnClose"));
        SCAComponent.add(lblInfo, btnContinue, btnClose);
        return SCAComponent;
    }
})