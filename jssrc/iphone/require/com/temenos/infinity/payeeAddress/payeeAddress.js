define(function() {
    return function(controller) {
        var payeeAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "payeeAddress",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_d9406264882140a38d762d1ba734a43a(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "payeeAddress"), extendConfig({}, controller.args[1], "payeeAddress"), extendConfig({}, controller.args[2], "payeeAddress"));
        payeeAddress.setDefaultUnit(kony.flex.DP);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "bottom": "80dp",
            "clipBounds": true,
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "55dp",
            "id": "flxSearch",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "25dp",
            "isModalContainer": false,
            "skin": "ICSknFlx",
            "top": "-1dp",
            "width": "100%",
            "zIndex": 20
        }, controller.args[0], "flxSearch"), extendConfig({}, controller.args[1], "flxSearch"), extendConfig({}, controller.args[2], "flxSearch"));
        flxSearch.setDefaultUnit(kony.flex.DP);
        var flxSearchMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxSearchMain",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
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
            "src": "search_6.png",
            "width": "15dp",
            "zIndex": 10
        }, controller.args[0], "imgSearchIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearchIcon"), extendConfig({}, controller.args[2], "imgSearchIcon"));
        var tbxSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "ICSknTbxSSPfNew",
            "height": "35dp",
            "id": "tbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.ExternalAccounts.Search"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTbxSSPfNew",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "tbxSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [35, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "tbxSearch"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
            "placeholderSkin": "ICSknTbxPlaceholderDefault1New",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxSearch"));
        var flxShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-5dp",
            "clipBounds": true,
            "height": "5dp",
            "id": "flxShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSknFlxHeaderShadowNew",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxShadow"), extendConfig({}, controller.args[1], "flxShadow"), extendConfig({}, controller.args[2], "flxShadow"));
        flxShadow.setDefaultUnit(kony.flex.DP);
        flxShadow.add();
        flxSearchMain.add(imgSearchIcon, tbxSearch, flxShadow);
        flxSearch.add(flxSearchMain);
        var flxScrollMain = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": 0,
            "bounces": true,
            "clipBounds": false,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxScrollMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "ICSknFlxScrlffffff",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxScrollMain"), extendConfig({}, controller.args[1], "flxScrollMain"), extendConfig({}, controller.args[2], "flxScrollMain"));
        flxScrollMain.setDefaultUnit(kony.flex.DP);
        var flxMainScrollWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMainScrollWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainScrollWrapper"), extendConfig({}, controller.args[1], "flxMainScrollWrapper"), extendConfig({}, controller.args[2], "flxMainScrollWrapper"));
        flxMainScrollWrapper.setDefaultUnit(kony.flex.DP);
        var flxError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxError",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxError"), extendConfig({}, controller.args[1], "flxError"), extendConfig({}, controller.args[2], "flxError"));
        flxError.setDefaultUnit(kony.flex.DP);
        var lblErrorPrompt = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblErrorPrompt",
            "isVisible": true,
            "left": 20,
            "right": 20,
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.EnterAccNo"),
            "textStyle": {},
            "top": "4dp",
            "zIndex": 1
        }, controller.args[0], "lblErrorPrompt"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorPrompt"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblErrorPrompt"));
        flxError.add(lblErrorPrompt);
        var lblField1 = new kony.ui.Label(extendConfig({
            "id": "lblField1",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLabelNew",
            "text": kony.i18n.getLocalizedString("kony.mb.common.AddressLineOne"),
            "textStyle": {},
            "top": "19dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblField1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField1"));
        var flx1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flx1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flx1"), extendConfig({}, controller.args[1], "flx1"), extendConfig({}, controller.args[2], "flx1"));
        flx1.setDefaultUnit(kony.flex.DP);
        var txtValue1 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "ICSknTbx72727215PxNew",
            "height": "40dp",
            "id": "txtValue1",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTbx72727215PxNew",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtValue1"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtValue1"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTbxA1New",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtValue1"));
        flx1.add(txtValue1);
        var lblField2 = new kony.ui.Label(extendConfig({
            "id": "lblField2",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLabelNew",
            "text": kony.i18n.getLocalizedString("kony.mb.common.AddressLineTwo"),
            "textStyle": {},
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblField2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField2"));
        var flx2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flx2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "6dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flx2"), extendConfig({}, controller.args[1], "flx2"), extendConfig({}, controller.args[2], "flx2"));
        flx2.setDefaultUnit(kony.flex.DP);
        var txtValue2 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "ICSknTbx72727215PxNew",
            "height": "40dp",
            "id": "txtValue2",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.common.optional"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTbx72727215PxNew",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "-5dp",
            "zIndex": 3
        }, controller.args[0], "txtValue2"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtValue2"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTbxA1New",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtValue2"));
        flx2.add(txtValue2);
        var lblField3 = new kony.ui.Label(extendConfig({
            "id": "lblField3",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLabelNew",
            "text": kony.i18n.getLocalizedString("kony.mb.common.City"),
            "textStyle": {},
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblField3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField3"));
        var flx3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flx3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flx3"), extendConfig({}, controller.args[1], "flx3"), extendConfig({}, controller.args[2], "flx3"));
        flx3.setDefaultUnit(kony.flex.DP);
        var txtValue3 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "ICSknTbx72727215PxNew",
            "height": "40dp",
            "id": "txtValue3",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTbx72727215PxNew",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtValue3"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtValue3"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTbxA1New",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtValue3"));
        flx3.add(txtValue3);
        var lblField4 = new kony.ui.Label(extendConfig({
            "id": "lblField4",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLabelNew",
            "text": kony.i18n.getLocalizedString("kony.mb.common.State"),
            "textStyle": {},
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblField4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField4"));
        var flx4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flx4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flx4"), extendConfig({}, controller.args[1], "flx4"), extendConfig({}, controller.args[2], "flx4"));
        flx4.setDefaultUnit(kony.flex.DP);
        var txtValue4 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "ICSknTbx72727215PxNew",
            "height": "40dp",
            "id": "txtValue4",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTbx72727215PxNew",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtValue4"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtValue4"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTbxA1New",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtValue4"));
        flx4.add(txtValue4);
        var lblField5 = new kony.ui.Label(extendConfig({
            "id": "lblField5",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLabelNew",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Country"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField5"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField5"));
        var flx5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flx5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flx5"), extendConfig({}, controller.args[1], "flx5"), extendConfig({}, controller.args[2], "flx5"));
        flx5.setDefaultUnit(kony.flex.DP);
        var txtValue5 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "ICSknTbx72727215PxNew",
            "height": "40dp",
            "id": "txtValue5",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTbx72727215PxNew",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtValue5"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtValue5"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTbxA1New",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtValue5"));
        flx5.add(txtValue5);
        var lblField6 = new kony.ui.Label(extendConfig({
            "id": "lblField6",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLabelNew",
            "text": kony.i18n.getLocalizedString("kony.mb.common.ZipCode"),
            "textStyle": {},
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblField6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField6"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField6"));
        var flx6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flx6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flx6"), extendConfig({}, controller.args[1], "flx6"), extendConfig({}, controller.args[2], "flx6"));
        flx6.setDefaultUnit(kony.flex.DP);
        var txtValue6 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "ICSknTbx72727215PxNew",
            "height": "40dp",
            "id": "txtValue6",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTbx72727215PxNew",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "2dp",
            "zIndex": 3
        }, controller.args[0], "txtValue6"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtValue6"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTbxA1New",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtValue6"));
        flx6.add(txtValue6);
        var flxDummy = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxDummy",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxDummy"), extendConfig({}, controller.args[1], "flxDummy"), extendConfig({}, controller.args[2], "flxDummy"));
        flxDummy.setDefaultUnit(kony.flex.DP);
        flxDummy.add();
        flxMainScrollWrapper.add(flxError, lblField1, flx1, lblField2, flx2, lblField3, flx3, lblField4, flx4, lblField5, flx5, lblField6, flx6, flxDummy);
        flxScrollMain.add(flxMainScrollWrapper);
        var flxSpaceDummy = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxSpaceDummy",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSpaceDummy"), extendConfig({}, controller.args[1], "flxSpaceDummy"), extendConfig({}, controller.args[2], "flxSpaceDummy"));
        flxSpaceDummy.setDefaultUnit(kony.flex.DP);
        flxSpaceDummy.add();
        flxMainContainer.add(flxSearch, flxScrollMain, flxSpaceDummy);
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10.50%",
            "id": "flxPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknFlxfNew",
            "top": "0dp",
            "width": "100%",
            "zIndex": 201
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
        var flxPopupWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPopupWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPopupWrapper"), extendConfig({}, controller.args[1], "flxPopupWrapper"), extendConfig({}, controller.args[2], "flxPopupWrapper"));
        flxPopupWrapper.setDefaultUnit(kony.flex.DP);
        var imgPopup = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgPopup",
            "isVisible": true,
            "left": "30dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgPopup"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPopup"), extendConfig({}, controller.args[2], "imgPopup"));
        var lblPopup = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblPopup",
            "isVisible": true,
            "left": "65dp",
            "right": "20dp",
            "skin": "ICSknLblffffffSSPReg1New",
            "text": "Label",
            "textStyle": {},
            "zIndex": 1
        }, controller.args[0], "lblPopup"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPopup"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPopup"));
        flxPopupWrapper.add(imgPopup, lblPopup);
        flxPopup.add(flxPopupWrapper);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "30dp",
            "clipBounds": false,
            "height": "40dp",
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btn1 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "ICSknbtnfocus003e75New",
            "height": "40dp",
            "id": "btn1",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknbtne2e9f0New",
            "text": kony.i18n.getLocalizedString("kony.mb.common.save"),
            "zIndex": 3
        }, controller.args[0], "btn1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn1"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btn1"));
        flxButtons.add(btn1);
        payeeAddress.add(flxMainContainer, flxPopup, flxButtons);
        return payeeAddress;
    }
})