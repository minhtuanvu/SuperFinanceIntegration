define(function() {
    return function(controller) {
        var HeaderSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "HeaderSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "HeaderSF"), extendConfig({}, controller.args[1], "HeaderSF"), extendConfig({}, controller.args[2], "HeaderSF"));
        HeaderSF.setDefaultUnit(kony.flex.DP);
        var flxMainSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxMainSF"), extendConfig({}, controller.args[1], "flxMainSF"), extendConfig({}, controller.args[2], "flxMainSF"));
        flxMainSF.setDefaultUnit(kony.flex.DP);
        var flxMenuSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxMenuSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flxMenuSF"), extendConfig({}, controller.args[1], "flxMenuSF"), extendConfig({}, controller.args[2], "flxMenuSF"));
        flxMenuSF.setDefaultUnit(kony.flex.DP);
        var imgMenuSF = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "25dp",
            "id": "imgMenuSF",
            "isVisible": true,
            "skin": "slImage",
            "src": "menu_fusion.png",
            "width": "25dp",
            "zIndex": 1
        }, controller.args[0], "imgMenuSF"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMenuSF"), extendConfig({}, controller.args[2], "imgMenuSF"));
        flxMenuSF.add(imgMenuSF);
        var flxLifestyleSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxLifestyleSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "flxLifestyleSF"), extendConfig({}, controller.args[1], "flxLifestyleSF"), extendConfig({}, controller.args[2], "flxLifestyleSF"));
        flxLifestyleSF.setDefaultUnit(kony.flex.DP);
        var lblLifestyleSF = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblLifestyleSF",
            "isVisible": true,
            "skin": "sknLblLifestyleHeaderSF",
            "text": "Lifestyle",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblLifestyleSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLifestyleSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLifestyleSF"));
        var flxHighlight1SF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5%",
            "clipBounds": true,
            "height": "3dp",
            "id": "flxHighlight1SF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15%",
            "isModalContainer": false,
            "skin": "sknHighlightHeaderSF",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "flxHighlight1SF"), extendConfig({}, controller.args[1], "flxHighlight1SF"), extendConfig({}, controller.args[2], "flxHighlight1SF"));
        flxHighlight1SF.setDefaultUnit(kony.flex.DP);
        flxHighlight1SF.add();
        flxLifestyleSF.add(lblLifestyleSF, flxHighlight1SF);
        var flxWorkSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxWorkSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "flxWorkSF"), extendConfig({}, controller.args[1], "flxWorkSF"), extendConfig({}, controller.args[2], "flxWorkSF"));
        flxWorkSF.setDefaultUnit(kony.flex.DP);
        var lblWorkSF = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblWorkSF",
            "isVisible": true,
            "skin": "sknLblNormalHeaderSF",
            "text": "Work",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblWorkSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWorkSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblWorkSF"));
        var flxHighlight2SF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5%",
            "clipBounds": true,
            "height": "3dp",
            "id": "flxHighlight2SF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15%",
            "isModalContainer": false,
            "skin": "sknHighlightHeaderSF",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "flxHighlight2SF"), extendConfig({}, controller.args[1], "flxHighlight2SF"), extendConfig({}, controller.args[2], "flxHighlight2SF"));
        flxHighlight2SF.setDefaultUnit(kony.flex.DP);
        flxHighlight2SF.add();
        flxWorkSF.add(lblWorkSF, flxHighlight2SF);
        var flxWealthSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxWealthSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "flxWealthSF"), extendConfig({}, controller.args[1], "flxWealthSF"), extendConfig({}, controller.args[2], "flxWealthSF"));
        flxWealthSF.setDefaultUnit(kony.flex.DP);
        var lblWealthSF = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblWealthSF",
            "isVisible": true,
            "skin": "sknLblNormalHeaderSF",
            "text": "Wealth",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblWealthSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWealthSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblWealthSF"));
        var flxHighlight3SF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5%",
            "clipBounds": true,
            "height": "3dp",
            "id": "flxHighlight3SF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15%",
            "isModalContainer": false,
            "skin": "sknHighlightHeaderSF",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "flxHighlight3SF"), extendConfig({}, controller.args[1], "flxHighlight3SF"), extendConfig({}, controller.args[2], "flxHighlight3SF"));
        flxHighlight3SF.setDefaultUnit(kony.flex.DP);
        flxHighlight3SF.add();
        flxWealthSF.add(lblWealthSF, flxHighlight3SF);
        flxMainSF.add(flxMenuSF, flxLifestyleSF, flxWorkSF, flxWealthSF);
        HeaderSF.add(flxMainSF);
        return HeaderSF;
    }
})