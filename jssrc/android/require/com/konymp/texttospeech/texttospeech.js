define(function() {
    return function(controller) {
        var texttospeech = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "10%",
            "id": "texttospeech",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onDestroy": controller.AS_FlexContainer_de67dcdd554b4d40902dcaa1da7a9691,
            "onHide": controller.AS_FlexContainer_e602f4e666f74e508f1f34758db6fa5c,
            "skin": "CopykonympttsflxImage",
            "top": "0%",
            "width": "12%"
        }, controller.args[0], "texttospeech"), extendConfig({}, controller.args[1], "texttospeech"), extendConfig({}, controller.args[2], "texttospeech"));
        texttospeech.setDefaultUnit(kony.flex.DP);
        var flxImage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_e529f5a1dde7448bbf62fef8e3662139,
            "skin": "CopykonympttsflxImage",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxImage"), extendConfig({}, controller.args[1], "flxImage"), extendConfig({}, controller.args[2], "flxImage"));
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgSpeechOn = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgSpeechOn",
            "isVisible": false,
            "left": "0%",
            "skin": "slImage",
            "src": "konymp_tts_audio_on_1.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgSpeechOn"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSpeechOn"), extendConfig({}, controller.args[2], "imgSpeechOn"));
        var imgSpeechOff = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgSpeechOff",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "konymp_tts_audio_off_1.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgSpeechOff"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSpeechOff"), extendConfig({}, controller.args[2], "imgSpeechOff"));
        flxImage.add(imgSpeechOn, imgSpeechOff);
        texttospeech.add(flxImage);
        return texttospeech;
    }
})