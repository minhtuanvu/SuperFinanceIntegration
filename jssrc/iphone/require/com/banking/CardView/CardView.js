define(function() {
    return function(controller) {
        var CardView = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "CardView",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onTouchStart": controller.AS_FlexContainer_a1907d08991a477fa21fb5705bac4e86,
            "skin": "sknflxffffffBorderf1f1f13pxTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "CardView"), extendConfig({}, controller.args[1], "CardView"), extendConfig({}, controller.args[2], "CardView"));
        CardView.setDefaultUnit(kony.flex.DP);
        var flxImg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "45dp",
            "zIndex": 1
        }, controller.args[0], "flxImg"), extendConfig({}, controller.args[1], "flxImg"), extendConfig({}, controller.args[2], "flxImg"));
        flxImg.setDefaultUnit(kony.flex.DP);
        var imgIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "24dp",
            "id": "imgIcon",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "22dp",
            "zIndex": 1
        }, controller.args[0], "imgIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon"), extendConfig({}, controller.args[2], "imgIcon"));
        var flxSepaartor2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSepaartor2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxBGF1F1F1Tab",
            "top": "0dp",
            "width": "1dp",
            "zIndex": 1
        }, controller.args[0], "flxSepaartor2"), extendConfig({}, controller.args[1], "flxSepaartor2"), extendConfig({}, controller.args[2], "flxSepaartor2"));
        flxSepaartor2.setDefaultUnit(kony.flex.DP);
        flxSepaartor2.add();
        flxImg.add(imgIcon, flxSepaartor2);
        var flxArrow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxArrow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "flxArrow"), extendConfig({}, controller.args[1], "flxArrow"), extendConfig({}, controller.args[2], "flxArrow"));
        flxArrow.setDefaultUnit(kony.flex.DP);
        var imgArrowCVV = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "14dp",
            "id": "imgArrowCVV",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "calenderarrowright_3.png",
            "width": "7dp",
            "zIndex": 1
        }, controller.args[0], "imgArrowCVV"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrowCVV"), extendConfig({}, controller.args[2], "imgArrowCVV"));
        flxArrow.add(imgArrowCVV);
        var rtxCardView = new kony.ui.RichText(extendConfig({
            "centerY": "50%",
            "height": "45dp",
            "id": "rtxCardView",
            "isVisible": true,
            "left": "53dp",
            "linkSkin": "defRichTextLink",
            "right": "50dp",
            "skin": "sknRtx424242SSP26pxTab",
            "zIndex": 1
        }, controller.args[0], "rtxCardView"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rtxCardView"), extendConfig({
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "rtxCardView"));
        CardView.add(flxImg, flxArrow, rtxCardView);
        return CardView;
    }
})