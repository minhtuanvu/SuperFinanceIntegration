define(function() {
    return function(controller) {
        var inputPhoneNumber = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "38dp",
            "id": "inputPhoneNumber",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_d50d967d2f924fbb944922208c30b6d9(eventobject);
            },
            "skin": "sknFlxffffffTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "inputPhoneNumber"), extendConfig({}, controller.args[1], "inputPhoneNumber"), extendConfig({}, controller.args[2], "inputPhoneNumber"));
        inputPhoneNumber.setDefaultUnit(kony.flex.DP);
        var flxInputPhoneNo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxInputPhoneNo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxInputPhoneNo"), extendConfig({}, controller.args[1], "flxInputPhoneNo"), extendConfig({}, controller.args[2], "flxInputPhoneNo"));
        flxInputPhoneNo.setDefaultUnit(kony.flex.DP);
        var lblInputPhoneNumber = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblInputPhoneNumber",
            "isVisible": true,
            "skin": "sknLbl424242SSP62PxTab",
            "text": "(___)___-____",
            "textStyle": {},
            "top": "4dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblInputPhoneNumber"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblInputPhoneNumber"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblInputPhoneNumber"));
        flxInputPhoneNo.add(lblInputPhoneNumber);
        inputPhoneNumber.add(flxInputPhoneNo);
        return inputPhoneNumber;
    }
})