define(function() {
    return function(controller) {
        var manageBillerNative = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "manageBillerNative",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_g6f6b392e7f2438880d4a28075d06610(eventobject);
            },
            "skin": "ICSknSlFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "manageBillerNative"), extendConfig({}, controller.args[1], "manageBillerNative"), extendConfig({}, controller.args[2], "manageBillerNative"));
        manageBillerNative.setDefaultUnit(kony.flex.DP);
        var flxMainAllPayees = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainAllPayees",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxMainAllPayees"), extendConfig({}, controller.args[1], "flxMainAllPayees"), extendConfig({}, controller.args[2], "flxMainAllPayees"));
        flxMainAllPayees.setDefaultUnit(kony.flex.DP);
        var flxMainContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "70dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": false,
            "horizontalScrollIndicator": true,
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "55dp",
            "id": "flxSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "25dp",
            "isModalContainer": false,
            "skin": "sknFlx1a98ff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxSearch"), extendConfig({}, controller.args[1], "flxSearch"), extendConfig({}, controller.args[2], "flxSearch"));
        flxSearch.setDefaultUnit(kony.flex.DP);
        var flxSearchMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSearchMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
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
        var tbxSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "sknTbxSSPf1f1f1B",
            "height": "35dp",
            "id": "tbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "19dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.common.SearchByPayeeName"),
            "right": "19dp",
            "secureTextEntry": false,
            "skin": "sknTbxSSPf1f1f1B",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "tbxSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [7, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxSearch"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
            "placeholderSkin": "sknTbxPlaceholderDefault",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxSearch"));
        flxSearchMain.add(imgSearchIcon, tbxSearch);
        var flxSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1000
        }, controller.args[0], "flxSeperator"), extendConfig({}, controller.args[1], "flxSeperator"), extendConfig({}, controller.args[2], "flxSeperator"));
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        flxSearch.add(flxSearchMain, flxSeperator);
        var flxShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxShadow"), extendConfig({}, controller.args[1], "flxShadow"), extendConfig({}, controller.args[2], "flxShadow"));
        flxShadow.setDefaultUnit(kony.flex.DP);
        flxShadow.add();
        var segPayeesList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "data": [{
                "imgAccountType": "",
                "imgBox1": "",
                "imgBox2": "",
                "imgBox3": "",
                "imgebill": "",
                "lblBox1": "",
                "lblBox2": "",
                "lblBox3": "",
                "lblField1": "",
                "lblField2": "",
                "lblTrashIcon": ""
            }, {
                "imgAccountType": "",
                "imgBox1": "",
                "imgBox2": "",
                "imgBox3": "",
                "imgebill": "",
                "lblBox1": "",
                "lblBox2": "",
                "lblBox3": "",
                "lblField1": "",
                "lblField2": "",
                "lblTrashIcon": ""
            }, {
                "imgAccountType": "",
                "imgBox1": "",
                "imgBox2": "",
                "imgBox3": "",
                "imgebill": "",
                "lblBox1": "",
                "lblBox2": "",
                "lblBox3": "",
                "lblField1": "",
                "lblField2": "",
                "lblTrashIcon": ""
            }, {
                "imgAccountType": "",
                "imgBox1": "",
                "imgBox2": "",
                "imgBox3": "",
                "imgebill": "",
                "lblBox1": "",
                "lblBox2": "",
                "lblBox3": "",
                "lblField1": "",
                "lblField2": "",
                "lblTrashIcon": ""
            }, {
                "imgAccountType": "",
                "imgBox1": "",
                "imgBox2": "",
                "imgBox3": "",
                "imgebill": "",
                "lblBox1": "",
                "lblBox2": "",
                "lblBox3": "",
                "lblField1": "",
                "lblField2": "",
                "lblTrashIcon": ""
            }, {
                "imgAccountType": "",
                "imgBox1": "",
                "imgBox2": "",
                "imgBox3": "",
                "imgebill": "",
                "lblBox1": "",
                "lblBox2": "",
                "lblBox3": "",
                "lblField1": "",
                "lblField2": "",
                "lblTrashIcon": ""
            }],
            "groupCells": false,
            "id": "segPayeesList",
            "isVisible": true,
            "left": "0dp",
            "minHeight": "85%",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegf9f9f9",
            "rowTemplate": "flxSwipe",
            "scrollingEvents": {
                "onReachingEnd": controller.AS_Segment_a58cbefc867c49ad81aed925caadc6b0
            },
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "e3e3e300",
            "separatorRequired": false,
            "showScrollbars": false,
            "top": "55dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxAccountType": "flxAccountType",
                "flxBox1": "flxBox1",
                "flxBox2": "flxBox2",
                "flxBox3": "flxBox3",
                "flxMain": "flxMain",
                "flxRightContainer": "flxRightContainer",
                "flxRow1": "flxRow1",
                "flxRow2": "flxRow2",
                "flxSeparator": "flxSeparator",
                "flxSwipe": "flxSwipe",
                "imgAccountType": "imgAccountType",
                "imgBox1": "imgBox1",
                "imgBox2": "imgBox2",
                "imgBox3": "imgBox3",
                "imgebill": "imgebill",
                "lblBox1": "lblBox1",
                "lblBox2": "lblBox2",
                "lblBox3": "lblBox3",
                "lblField1": "lblField1",
                "lblField2": "lblField2",
                "lblTrashIcon": "lblTrashIcon"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segPayeesList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segPayeesList"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": true,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segPayeesList"));
        var flxNoTransactions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxNoTransactions",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "55dp",
            "width": "100%",
            "zIndex": 50
        }, controller.args[0], "flxNoTransactions"), extendConfig({}, controller.args[1], "flxNoTransactions"), extendConfig({}, controller.args[2], "flxNoTransactions"));
        flxNoTransactions.setDefaultUnit(kony.flex.DP);
        var lblNoTransaction = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblNoTransaction",
            "isVisible": true,
            "skin": "sknlbl727272SSP93pr",
            "text": kony.i18n.getLocalizedString("kony.mb.billpay.noAccounts"),
            "textStyle": {},
            "top": "200dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, controller.args[0], "lblNoTransaction"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoTransaction"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNoTransaction"));
        flxNoTransactions.add(lblNoTransaction);
        flxMainContainer.add(flxSearch, flxShadow, segPayeesList, flxNoTransactions);
        var btnAllPayees = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "focusSkin": "sknBtn004B9526pxFocus",
            "height": "40dp",
            "id": "btnAllPayees",
            "isVisible": true,
            "left": "20dp",
            "onClick": controller.AS_Button_h6c78081d2c64894982344a6e3162fbb,
            "right": "20dp",
            "skin": "sknBtn0095e426pxEnabled",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.AddPayee"),
            "zIndex": 3
        }, controller.args[0], "btnAllPayees"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAllPayees"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAllPayees"));
        flxMainAllPayees.add(flxMainContainer, btnAllPayees);
        var flxPopUps = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPopUps",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPopUps"), extendConfig({}, controller.args[1], "flxPopUps"), extendConfig({}, controller.args[2], "flxPopUps"));
        flxPopUps.setDefaultUnit(kony.flex.DP);
        var flxCustomGroupPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCustomGroupPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlx000000Op50",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxCustomGroupPopup"), extendConfig({}, controller.args[1], "flxCustomGroupPopup"), extendConfig({}, controller.args[2], "flxCustomGroupPopup"));
        flxCustomGroupPopup.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "ICSknFlxffffffBorder",
            "width": "77%",
            "zIndex": 200
        }, controller.args[0], "flxContainer"), extendConfig({}, controller.args[1], "flxContainer"), extendConfig({}, controller.args[2], "flxContainer"));
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxImg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "70dp",
            "id": "flxImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknSlFbox",
            "top": "20dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "flxImg"), extendConfig({}, controller.args[1], "flxImg"), extendConfig({}, controller.args[2], "flxImg"));
        flxImg.setDefaultUnit(kony.flex.DP);
        var imgConfirm = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgConfirm",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "confirmation_tick.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgConfirm"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgConfirm"), extendConfig({}, controller.args[2], "imgConfirm"));
        flxImg.add(imgConfirm);
        var lblMessage = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblMessage",
            "isVisible": true,
            "skin": "skn000000SSPSemiBold24PX",
            "text": "Successfully deleted the payee",
            "textStyle": {},
            "top": "20dp",
            "width": "74.50%",
            "zIndex": 1
        }, controller.args[0], "lblMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMessage"));
        var lblMessage2 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblMessage2",
            "isVisible": false,
            "skin": "sknlbl727272SSP93pr",
            "text": "Unwanted error happened please start the activation process again.",
            "textStyle": {},
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblMessage2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMessage2"));
        var btn1 = new kony.ui.Button(extendConfig({
            "bottom": "15dp",
            "centerX": "50%",
            "height": "48dp",
            "id": "btn1",
            "isVisible": true,
            "skin": "ICSknBtn0095e4RoundedffffffSSP45px",
            "text": kony.i18n.getLocalizedString("kony.mb.statusMessage.done"),
            "top": "20dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btn1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn1"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btn1"));
        var btn2 = new kony.ui.Button(extendConfig({
            "bottom": "15dp",
            "centerX": "50%",
            "height": "48dp",
            "id": "btn2",
            "isVisible": false,
            "skin": "ICSknBtn003e75Bor003e75",
            "text": kony.i18n.getLocalizedString("kony.mb.statusMessage.done"),
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btn2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn2"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btn2"));
        flxContainer.add(flxImg, lblMessage, lblMessage2, btn1, btn2);
        flxCustomGroupPopup.add(flxContainer);
        flxPopUps.add(flxCustomGroupPopup);
        manageBillerNative.add(flxMainAllPayees, flxPopUps);
        return manageBillerNative;
    }
})