define(function() {
    return function(controller) {
        var search = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "search",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_d2d6923b07ff44d9a47f94c3b7502d80(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "search"), extendConfig({}, controller.args[1], "search"), extendConfig({}, controller.args[2], "search"));
        search.setDefaultUnit(kony.flex.DP);
        var flxSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSearch",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSearch"), extendConfig({}, controller.args[1], "flxSearch"), extendConfig({}, controller.args[2], "flxSearch"));
        flxSearch.setDefaultUnit(kony.flex.DP);
        var flxSearchWithCancel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSearchWithCancel",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSearchWithCancel"), extendConfig({}, controller.args[1], "flxSearchWithCancel"), extendConfig({}, controller.args[2], "flxSearchWithCancel"));
        flxSearchWithCancel.setDefaultUnit(kony.flex.DP);
        var flxSearchContent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSearchContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxSearchContent"), extendConfig({}, controller.args[1], "flxSearchContent"), extendConfig({}, controller.args[2], "flxSearchContent"));
        flxSearchContent.setDefaultUnit(kony.flex.DP);
        var imgSearchIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "21dp",
            "id": "imgSearchIcon",
            "isVisible": true,
            "left": "32dp",
            "skin": "slImage",
            "src": "search_2.png",
            "width": "21dp",
            "zIndex": 10
        }, controller.args[0], "imgSearchIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearchIcon"), extendConfig({}, controller.args[2], "imgSearchIcon"));
        var tbxSearchBox = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "ICSknTbxSSPR42424215px",
            "height": "80%",
            "id": "tbxSearchBox",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "21dp",
            "placeholder": kony.i18n.getLocalizedString("i18n.Search.PlaceholderText"),
            "right": "21dp",
            "secureTextEntry": false,
            "skin": "ICSknTbxSSPR42424215px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "75%",
            "zIndex": 1
        }, controller.args[0], "tbxSearchBox"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxSearchBox"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTbxPlaceholderSSPR42424215px",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxSearchBox"));
        var btnCancel = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "ICSknBtnCancelHelfff15px",
            "id": "btnCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknBtnCancelHelfff15px",
            "text": "Cancel",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 12
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnCancel"));
        flxSearchContent.add(imgSearchIcon, tbxSearchBox, btnCancel);
        var flxSearchShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-5dp",
            "clipBounds": true,
            "height": "5dp",
            "id": "flxSearchShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxShadow000fff",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSearchShadow"), extendConfig({}, controller.args[1], "flxSearchShadow"), extendConfig({}, controller.args[2], "flxSearchShadow"));
        flxSearchShadow.setDefaultUnit(kony.flex.DP);
        flxSearchShadow.add();
        flxSearchWithCancel.add(flxSearchContent, flxSearchShadow);
        var flxSearchWithAdvancedFilter = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSearchWithAdvancedFilter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSearchWithAdvancedFilter"), extendConfig({}, controller.args[1], "flxSearchWithAdvancedFilter"), extendConfig({}, controller.args[2], "flxSearchWithAdvancedFilter"));
        flxSearchWithAdvancedFilter.setDefaultUnit(kony.flex.DP);
        var flxContents = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxContents",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxContents"), extendConfig({}, controller.args[1], "flxContents"), extendConfig({}, controller.args[2], "flxContents"));
        flxContents.setDefaultUnit(kony.flex.DP);
        var imgSearch = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "21dp",
            "id": "imgSearch",
            "isVisible": true,
            "left": "32dp",
            "skin": "slImage",
            "src": "search_2.png",
            "width": "21dp",
            "zIndex": 10
        }, controller.args[0], "imgSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearch"), extendConfig({}, controller.args[2], "imgSearch"));
        var tbxSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "ICSknTbxSSPR42424215px",
            "height": "80%",
            "id": "tbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "21dp",
            "placeholder": kony.i18n.getLocalizedString("i18n.Search.PlaceholderText"),
            "right": "21dp",
            "secureTextEntry": false,
            "skin": "ICSknTbxSSPR42424215px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "tbxSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxSearch"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTbxPlaceholderSSPR42424215px",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxSearch"));
        var imgAdvancedSearchIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgAdvancedSearchIcon",
            "isVisible": true,
            "right": "23dp",
            "skin": "slImage",
            "src": "advancedsearch.png",
            "width": "30dp",
            "zIndex": 10
        }, controller.args[0], "imgAdvancedSearchIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAdvancedSearchIcon"), extendConfig({}, controller.args[2], "imgAdvancedSearchIcon"));
        flxContents.add(imgSearch, tbxSearch, imgAdvancedSearchIcon);
        var flxShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-5dp",
            "clipBounds": true,
            "height": "5dp",
            "id": "flxShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxShadow000fff",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxShadow"), extendConfig({}, controller.args[1], "flxShadow"), extendConfig({}, controller.args[2], "flxShadow"));
        flxShadow.setDefaultUnit(kony.flex.DP);
        flxShadow.add();
        flxSearchWithAdvancedFilter.add(flxContents, flxShadow);
        flxSearch.add(flxSearchWithCancel, flxSearchWithAdvancedFilter);
        search.add(flxSearch);
        return search;
    }
})