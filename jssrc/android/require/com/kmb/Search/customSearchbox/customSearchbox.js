define(function() {
    return function(controller) {
        var customSearchbox = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "40dp",
            "id": "customSearchbox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "customSearchbox"), extendConfig({}, controller.args[1], "customSearchbox"), extendConfig({}, controller.args[2], "customSearchbox"));
        customSearchbox.setDefaultUnit(kony.flex.DP);
        var flxSearchMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSearchMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlx1a98ff",
            "top": "-0.50%",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxSearchMain"), extendConfig({}, controller.args[1], "flxSearchMain"), extendConfig({}, controller.args[2], "flxSearchMain"));
        flxSearchMain.setDefaultUnit(kony.flex.DP);
        var imgSearchIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgSearchIcon",
            "isVisible": true,
            "left": "30dp",
            "skin": "slImage",
            "src": "search.png",
            "width": "15dp",
            "zIndex": 10
        }, controller.args[0], "imgSearchIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearchIcon"), extendConfig({}, controller.args[2], "imgSearchIcon"));
        var flxSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "69.80%",
            "id": "flxSearch",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-2%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0.20%",
            "width": "11%",
            "zIndex": 12
        }, controller.args[0], "flxSearch"), extendConfig({}, controller.args[1], "flxSearch"), extendConfig({}, controller.args[2], "flxSearch"));
        flxSearch.setDefaultUnit(kony.flex.DP);
        var imgSearch = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgSearch",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "searchblue.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "imgSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearch"), extendConfig({}, controller.args[2], "imgSearch"));
        flxSearch.add(imgSearch);
        var tbxSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "sknTbxSSPf1f1f1B",
            "height": "80%",
            "id": "tbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Search by zipcode, city, street....",
            "secureTextEntry": false,
            "skin": "sknTbxSSPf1f1f1B",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "tbxSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [35, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "tbxSearch"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
            "placeholderSkin": "sknTbxPlaceholderDefault",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxSearch"));
        var btnCancel = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnffffffSSP28px",
            "id": "btnCancel",
            "isVisible": true,
            "right": "25dp",
            "skin": "sknBtnffffffSSP28px",
            "text": "Cancel",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 12
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({}, controller.args[2], "btnCancel"));
        flxSearchMain.add(imgSearchIcon, flxSearch, tbxSearch, btnCancel);
        var flxHeaderShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-5dp",
            "clipBounds": true,
            "height": "5dp",
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
        customSearchbox.add(flxSearchMain, flxHeaderShadow);
        return customSearchbox;
    }
})