define(function() {
    return function(controller) {
        var StepsLeftSide = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "StepsLeftSide",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "StepsLeftSide"), extendConfig({}, controller.args[1], "StepsLeftSide"), extendConfig({}, controller.args[2], "StepsLeftSide"));
        StepsLeftSide.setDefaultUnit(kony.flex.DP);
        var flxMainSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxStepsBGSF",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainSF"), extendConfig({}, controller.args[1], "flxMainSF"), extendConfig({}, controller.args[2], "flxMainSF"));
        flxMainSF.setDefaultUnit(kony.flex.DP);
        var lblStepsLeftSideSF = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblStepsLeftSideSF",
            "isVisible": true,
            "skin": "sknlblInfoStep1SF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "lblStepsLeftSideSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStepsLeftSideSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblStepsLeftSideSF"));
        flxMainSF.add(lblStepsLeftSideSF);
        StepsLeftSide.add(flxMainSF);
        return StepsLeftSide;
    }
})