define(function() {
    return function(controller) {
        var DateView = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "DateView",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "DateView"), extendConfig({}, controller.args[1], "DateView"), extendConfig({}, controller.args[2], "DateView"));
        DateView.setDefaultUnit(kony.flex.DP);
        var rtDate = new kony.ui.RichText(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "rtDate",
            "isVisible": true,
            "linkSkin": "defRichTextLink",
            "skin": "sknRTextBgFFFFFFFSSPa0a0a048PxTab",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "rtDate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rtDate"), extendConfig({}, controller.args[2], "rtDate"));
        DateView.add(rtDate);
        return DateView;
    }
})