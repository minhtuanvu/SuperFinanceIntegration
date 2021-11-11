define(function() {
    return function(controller) {
        var customSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "95dp",
            "id": "customSearch",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlx1a98ff",
            "top": "0%",
            "width": "100%"
        }, controller.args[0], "customSearch"), extendConfig({}, controller.args[1], "customSearch"), extendConfig({}, controller.args[2], "customSearch"));
        customSearch.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
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
            "left": "6.25%",
            "isModalContainer": false,
            "top": "0%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxBack"), extendConfig({}, controller.args[1], "flxBack"), extendConfig({}, controller.args[2], "flxBack"));
        flxBack.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgBack",
            "isVisible": true,
            "left": "0%",
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
            "skin": "sknLblffffffSSP30px",
            "text": "LOCATE US",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLocateUs"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLocateUs"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLocateUs"));
        var btnCancel = new kony.ui.Button(extendConfig({
            "centerY": "50.00%",
            "focusSkin": "sknBtn0095e428px",
            "id": "btnCancel",
            "isVisible": true,
            "right": "6.25%",
            "skin": "sknBtnffffffSSP28px",
            "text": "Cancel",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnCancel"));
        flxHeader.add(flxBack, lblLocateUs, btnCancel);
        var flxHeaderSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxHeaderSeparator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0.00%",
            "isModalContainer": false,
            "skin": "sknBtnBg000000Op10Tab",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeaderSeparator"), extendConfig({}, controller.args[1], "flxHeaderSeparator"), extendConfig({}, controller.args[2], "flxHeaderSeparator"));
        flxHeaderSeparator.setDefaultUnit(kony.flex.DP);
        flxHeaderSeparator.add();
        var flxSearchMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxSearchMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "-0.50%",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxSearchMain"), extendConfig({}, controller.args[1], "flxSearchMain"), extendConfig({}, controller.args[2], "flxSearchMain"));
        flxSearchMain.setDefaultUnit(kony.flex.DP);
        var tbxSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknTbxSSPf1f1f1B",
            "height": "35dp",
            "id": "tbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "placeholder": "Search by zipcode, city, street....",
            "secureTextEntry": false,
            "skin": "sknTbxSSPf1f1f1B",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "87%",
            "zIndex": 1
        }, controller.args[0], "tbxSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [35, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "tbxSearch"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
            "placeholderSkin": "sknTbxPlaceholderDefault",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxSearch"));
        var imgSearchIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgSearchIcon",
            "isVisible": true,
            "left": "-85%",
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
        flxSearchMain.add(tbxSearch, imgSearchIcon, flxSearch);
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
        customSearch.add(flxHeader, flxHeaderSeparator, flxSearchMain, flxHeaderShadow);
        return customSearch;
    }
})