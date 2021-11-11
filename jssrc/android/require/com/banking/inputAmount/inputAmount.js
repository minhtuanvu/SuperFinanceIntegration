define(function() {
    return function(controller) {
        var inputAmount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "48dp",
            "id": "inputAmount",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_h81b53ad46c14c15b2463601284c7b95(eventobject);
            },
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "inputAmount"), extendConfig({}, controller.args[1], "inputAmount"), extendConfig({}, controller.args[2], "inputAmount"));
        inputAmount.setDefaultUnit(kony.flex.DP);
        var flxSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "right": 0,
            "skin": "sknFlxBg9B9B9BTab",
            "width": "80%",
            "zIndex": 5
        }, controller.args[0], "flxSeparator"), extendConfig({}, controller.args[1], "flxSeparator"), extendConfig({}, controller.args[2], "flxSeparator"));
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var lblDollar = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblDollar",
            "isVisible": true,
            "left": "10.50%",
            "skin": "sknLbl4a4a4aSSP50PxTab",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDollar"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDollar"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDollar"));
        var lblAmount = new kony.ui.Label(extendConfig({
            "centerY": "50.00%",
            "height": "95%",
            "id": "lblAmount",
            "isVisible": true,
            "left": "14%",
            "skin": "sknLbl4a4a4aSSP72PxTab",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblAmount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAmount"));
        inputAmount.add(flxSeparator, lblDollar, lblAmount);
        return inputAmount;
    }
})