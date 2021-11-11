define(function() {
    return function(controller) {
        var customHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "customHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "customHeader"), extendConfig({}, controller.args[1], "customHeader"), extendConfig({}, controller.args[2], "customHeader"));
        customHeader.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlx1a98ff",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxBack"), extendConfig({}, controller.args[1], "flxBack"), extendConfig({}, controller.args[2], "flxBack"));
        flxBack.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgBack",
            "isVisible": true,
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        flxBack.add(imgBack);
        var lblLocateUs = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblLocateUs",
            "isVisible": true,
            "left": "15%",
            "maxNumberOfLines": 1,
            "skin": "sknLblffffffSSP30px",
            "text": "LOCATE US",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblLocateUs"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLocateUs"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLocateUs"));
        var flxSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "6.25%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxSearch"), extendConfig({}, controller.args[1], "flxSearch"), extendConfig({}, controller.args[2], "flxSearch"));
        flxSearch.setDefaultUnit(kony.flex.DP);
        var imgSearch = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "24dp",
            "id": "imgSearch",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "searchicon.png",
            "width": "24dp",
            "zIndex": 1
        }, controller.args[0], "imgSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearch"), extendConfig({}, controller.args[2], "imgSearch"));
        flxSearch.add(imgSearch);
        var btnRight = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnffffffSSP28px",
            "height": "100%",
            "id": "btnRight",
            "isVisible": false,
            "right": "20dp",
            "skin": "sknBtnffffffSSP28px",
            "text": "Button",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnRight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRight"), extendConfig({}, controller.args[2], "btnRight"));
        var btnLeft = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtn0095e428px",
            "height": "100%",
            "id": "btnLeft",
            "isVisible": false,
            "left": "6.25%",
            "skin": "sknBtnffffffSSP28px",
            "text": "Button",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnLeft"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLeft"), extendConfig({}, controller.args[2], "btnLeft"));
        flxHeader.add(flxBack, lblLocateUs, flxSearch, btnRight, btnLeft);
        var flxHeaderShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-10dp",
            "clipBounds": true,
            "height": "10dp",
            "id": "flxHeaderShadow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeaderShadow"), extendConfig({}, controller.args[1], "flxHeaderShadow"), extendConfig({}, controller.args[2], "flxHeaderShadow"));
        flxHeaderShadow.setDefaultUnit(kony.flex.DP);
        flxHeaderShadow.add();
        customHeader.add(flxHeader, flxHeaderShadow);
        return customHeader;
    }
})