define(function() {
    return function(controller) {
        var StepsHeaderSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "20%",
            "id": "StepsHeaderSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "StepsHeaderSF"), extendConfig({}, controller.args[1], "StepsHeaderSF"), extendConfig({}, controller.args[2], "StepsHeaderSF"));
        StepsHeaderSF.setDefaultUnit(kony.flex.DP);
        var flxHeaderSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHeaderSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxHeaderSF",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxHeaderSF"), extendConfig({}, controller.args[1], "flxHeaderSF"), extendConfig({}, controller.args[2], "flxHeaderSF"));
        flxHeaderSF.setDefaultUnit(kony.flex.DP);
        var flxRL1SF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "7dp",
            "id": "flxRL1SF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "32.50%",
            "isModalContainer": false,
            "skin": "sknFlxStepGreyIndicatorSF",
            "top": "15%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "flxRL1SF"), extendConfig({}, controller.args[1], "flxRL1SF"), extendConfig({}, controller.args[2], "flxRL1SF"));
        flxRL1SF.setDefaultUnit(kony.flex.DP);
        flxRL1SF.add();
        var lblStepsNoSF = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblStepsNoSF",
            "isVisible": true,
            "left": "35%",
            "skin": "sknlblStepNoSF",
            "text": "Step 1/3",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblStepsNoSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStepsNoSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblStepsNoSF"));
        var flxProgressIndicatorSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "5%",
            "id": "flxProgressIndicatorSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxBlackIndicatorSF",
            "top": "15%",
            "width": "84%"
        }, controller.args[0], "flxProgressIndicatorSF"), extendConfig({}, controller.args[1], "flxProgressIndicatorSF"), extendConfig({}, controller.args[2], "flxProgressIndicatorSF"));
        flxProgressIndicatorSF.setDefaultUnit(kony.flex.DP);
        var flxStep1SF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxStep1SF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxGreenProgressBgSF",
            "top": "0",
            "width": "33.33%"
        }, controller.args[0], "flxStep1SF"), extendConfig({}, controller.args[1], "flxStep1SF"), extendConfig({}, controller.args[2], "flxStep1SF"));
        flxStep1SF.setDefaultUnit(kony.flex.DP);
        flxStep1SF.add();
        flxProgressIndicatorSF.add(flxStep1SF);
        flxHeaderSF.add(flxRL1SF, lblStepsNoSF, flxProgressIndicatorSF);
        StepsHeaderSF.add(flxHeaderSF);
        return StepsHeaderSF;
    }
})