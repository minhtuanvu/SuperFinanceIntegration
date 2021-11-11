define(function() {
    return function(controller) {
        var noAccounts = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "335dp",
            "id": "noAccounts",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "noAccounts"), extendConfig({}, controller.args[1], "noAccounts"), extendConfig({}, controller.args[2], "noAccounts"));
        noAccounts.setDefaultUnit(kony.flex.DP);
        var flxNoAccounts = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "322dp",
            "id": "flxNoAccounts",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxNoAccounts",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxNoAccounts"), extendConfig({}, controller.args[1], "flxNoAccounts"), extendConfig({}, controller.args[2], "flxNoAccounts"));
        flxNoAccounts.setDefaultUnit(kony.flex.DP);
        var flxImgInfo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "35dp",
            "id": "flxImgInfo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "94dp",
            "isModalContainer": false,
            "skin": "sknFlxInfoImg",
            "top": "40dp",
            "width": "35dp",
            "zIndex": 20
        }, controller.args[0], "flxImgInfo"), extendConfig({}, controller.args[1], "flxImgInfo"), extendConfig({}, controller.args[2], "flxImgInfo"));
        flxImgInfo.setDefaultUnit(kony.flex.DP);
        var imginfo = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imginfo",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "infofull.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 20
        }, controller.args[0], "imginfo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imginfo"), extendConfig({}, controller.args[2], "imginfo"));
        flxImgInfo.add(imginfo);
        var lblNoAccounts = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblNoAccounts",
            "isVisible": true,
            "left": "80dp",
            "skin": "sknLblNoAccounts",
            "text": "No accounts available.",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "35dp",
            "width": "88%",
            "zIndex": 20
        }, controller.args[0], "lblNoAccounts"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoAccounts"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNoAccounts"));
        var lblOpenAcct = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblOpenAcct",
            "isVisible": true,
            "left": "83dp",
            "skin": "sknLblOpenAccounts",
            "text": "Please select the link below to open an account with us.",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "88%",
            "zIndex": 20
        }, controller.args[0], "lblOpenAcct"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOpenAcct"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblOpenAcct"));
        var btnOpenAccount = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnOpenAcct",
            "height": "48dp",
            "id": "btnOpenAccount",
            "isVisible": true,
            "left": "74dp",
            "skin": "sknBtnOpenAcct",
            "text": "Open New Account",
            "top": "35dp",
            "width": "88%",
            "zIndex": 20
        }, controller.args[0], "btnOpenAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOpenAccount"), extendConfig({}, controller.args[2], "btnOpenAccount"));
        flxNoAccounts.add(flxImgInfo, lblNoAccounts, lblOpenAcct, btnOpenAccount);
        var flxHeaderShadows = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12dp",
            "id": "flxHeaderShadows",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf9f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeaderShadows"), extendConfig({}, controller.args[1], "flxHeaderShadows"), extendConfig({}, controller.args[2], "flxHeaderShadows"));
        flxHeaderShadows.setDefaultUnit(kony.flex.DP);
        var flxTypeOneShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "6dp",
            "id": "flxTypeOneShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow2",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxTypeOneShadow"), extendConfig({}, controller.args[1], "flxTypeOneShadow"), extendConfig({}, controller.args[2], "flxTypeOneShadow"));
        flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
        flxTypeOneShadow.add();
        var flxShadowBottom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxShadowBottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadowBottom2",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxShadowBottom"), extendConfig({}, controller.args[1], "flxShadowBottom"), extendConfig({}, controller.args[2], "flxShadowBottom"));
        flxShadowBottom.setDefaultUnit(kony.flex.DP);
        flxShadowBottom.add();
        flxHeaderShadows.add(flxTypeOneShadow, flxShadowBottom);
        noAccounts.add(flxNoAccounts, flxHeaderShadows);
        return noAccounts;
    }
})