define(function() {
    return function(controller) {
        var customHeaderTablet = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "56dp",
            "id": "customHeaderTablet",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "customHeaderTablet"), extendConfig({}, controller.args[1], "customHeaderTablet"), extendConfig({}, controller.args[2], "customHeaderTablet"));
        customHeaderTablet.setDefaultUnit(kony.flex.DP);
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
            "skin": "sknFlx1a98ffTab",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "14dp",
            "id": "flxBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "21dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "14dp",
            "zIndex": 1
        }, controller.args[0], "flxBack"), extendConfig({}, controller.args[1], "flxBack"), extendConfig({}, controller.args[2], "flxBack"));
        flxBack.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "14dp",
            "id": "imgBack",
            "isVisible": true,
            "skin": "slImage",
            "src": "backbutton_1.png",
            "width": "14dp",
            "zIndex": 1
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        flxBack.add(imgBack);
        var lblHeaderTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHeaderTitle",
            "isVisible": true,
            "left": "70dp",
            "skin": "sknLblffffffSSP30pxTab",
            "text": "Title",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHeaderTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeaderTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblHeaderTitle"));
        var flxSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSearch",
            "isVisible": false,
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
            "height": "15dp",
            "id": "imgSearch",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "searchicon_1.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearch"), extendConfig({}, controller.args[2], "imgSearch"));
        flxSearch.add(imgSearch);
        var btnRight = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknTtleRtBtn1a98ffffffff26pxTab",
            "id": "btnRight",
            "isVisible": true,
            "right": "19dp",
            "skin": "sknTtleRtBtn1a98ffffffff26pxTab",
            "text": "Button",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnRight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRight"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnRight"));
        var btnLeft = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "btnLeft",
            "isVisible": false,
            "left": "6.25%",
            "skin": "sknBtnffffffTab",
            "text": "Button",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnLeft"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLeft"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnLeft"));
        flxHeader.add(flxBack, lblHeaderTitle, flxSearch, btnRight, btnLeft);
        var flxHeaderShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-10dp",
            "clipBounds": true,
            "height": "10dp",
            "id": "flxHeaderShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeaderShadow"), extendConfig({}, controller.args[1], "flxHeaderShadow"), extendConfig({}, controller.args[2], "flxHeaderShadow"));
        flxHeaderShadow.setDefaultUnit(kony.flex.DP);
        flxHeaderShadow.add();
        customHeaderTablet.add(flxHeader, flxHeaderShadow);
        return customHeaderTablet;
    }
})