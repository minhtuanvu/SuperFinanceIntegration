define(function() {
    return function(controller) {
        var barcodeqrscanner = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "40%",
            "id": "barcodeqrscanner",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "barcodeqrscanner"), extendConfig({}, controller.args[1], "barcodeqrscanner"), extendConfig({}, controller.args[2], "barcodeqrscanner"));
        barcodeqrscanner.setDefaultUnit(kony.flex.DP);
        var ncScan = new kony.ui.NativeContainer(extendConfig({
            "height": "100%",
            "id": "ncScan",
            "isVisible": true,
            "left": "0dp",
            "onCleanup": controller.AS_NativeContainer_ib1d2a18722c4a269eb3cc8152749836,
            "onCreated": controller.AS_NativeContainer_d9228af85144405da7da7c3201ed7354,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "ncScan"), extendConfig({}, controller.args[1], "ncScan"), extendConfig({}, controller.args[2], "ncScan"));
        var flxClose = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12.50%",
            "id": "flxClose",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_f186359e1a1e4774a434bd5e475c21bf,
            "skin": "slFbox",
            "top": "1%",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "flxClose"), extendConfig({}, controller.args[1], "flxClose"), extendConfig({}, controller.args[2], "flxClose"));
        flxClose.setDefaultUnit(kony.flex.DP);
        var imgClose = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgClose",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "close.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClose"), extendConfig({}, controller.args[2], "imgClose"));
        flxClose.add(imgClose);
        var flxCamera = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12.50%",
            "id": "flxCamera",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "73%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_c0b4981f42204767b8c06781f1d6e016,
            "skin": "slFbox",
            "top": "1%",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "flxCamera"), extendConfig({}, controller.args[1], "flxCamera"), extendConfig({}, controller.args[2], "flxCamera"));
        flxCamera.setDefaultUnit(kony.flex.DP);
        var imgCamera = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgCamera",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "switch_cam_1_2_1_6.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgCamera"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCamera"), extendConfig({}, controller.args[2], "imgCamera"));
        flxCamera.add(imgCamera);
        var flxFlash = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12.50%",
            "id": "flxFlash",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "86%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_j654c960f92a4e1ba498d832bde17d7f,
            "skin": "slFbox",
            "top": "1%",
            "width": "12.50%",
            "zIndex": 1
        }, controller.args[0], "flxFlash"), extendConfig({}, controller.args[1], "flxFlash"), extendConfig({}, controller.args[2], "flxFlash"));
        flxFlash.setDefaultUnit(kony.flex.DP);
        var imgFlash = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgFlash",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "flash_1_2_1_6.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgFlash"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFlash"), extendConfig({}, controller.args[2], "imgFlash"));
        flxFlash.add(imgFlash);
        barcodeqrscanner.add(ncScan, flxClose, flxCamera, flxFlash);
        return barcodeqrscanner;
    }
})