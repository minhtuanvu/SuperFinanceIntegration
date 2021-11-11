define(function() {
    return function(controller) {
        var MakeATransfer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "MakeATransfer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_a157b376de054fc0a10e9f6a63b2d74e(eventobject);
            },
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "MakeATransfer"), extendConfig({}, controller.args[1], "MakeATransfer"), extendConfig({}, controller.args[2], "MakeATransfer"));
        MakeATransfer.setDefaultUnit(kony.flex.DP);
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf54b5e",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
        var customPopup = new com.kmb.common.customPopup(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "height": "100%",
            "id": "customPopup",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_DEFAULT,
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "imgPopup": {
                    "src": "errormessage.png",
                    "top": "10dp"
                },
                "lblPopup": {
                    "top": "10dp"
                }
            }
        }, controller.args[0], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[1], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[2], "customPopup"));
        flxPopup.add(customPopup);
        var flxFromAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFromAccount",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFromAccount"), extendConfig({}, controller.args[1], "flxFromAccount"), extendConfig({}, controller.args[2], "flxFromAccount"));
        flxFromAccount.setDefaultUnit(kony.flex.DP);
        var flxFromHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxFromHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFromHeader"), extendConfig({}, controller.args[1], "flxFromHeader"), extendConfig({}, controller.args[2], "flxFromHeader"));
        flxFromHeader.setDefaultUnit(kony.flex.DP);
        var flxFromTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxFromTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFromTop"), extendConfig({}, controller.args[1], "flxFromTop"), extendConfig({}, controller.args[2], "flxFromTop"));
        flxFromTop.setDefaultUnit(kony.flex.DP);
        var flxBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxBack"), extendConfig({}, controller.args[1], "flxBack"), extendConfig({}, controller.args[2], "flxBack"));
        flxBack.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        flxBack.add(imgBack);
        var btnCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnCancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnCancel"));
        flxFromTop.add(flxBack, btnCancel);
        var lblTransferFrom = new kony.ui.Label(extendConfig({
            "id": "lblTransferFrom",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Transfer From",
            "textStyle": {},
            "top": "11dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblTransferFrom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTransferFrom"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTransferFrom"));
        var flxFromSearchWithClose = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5dp",
            "clipBounds": true,
            "height": "36dp",
            "id": "flxFromSearchWithClose",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxFromSearchWithClose"), extendConfig({}, controller.args[1], "flxFromSearchWithClose"), extendConfig({}, controller.args[2], "flxFromSearchWithClose"));
        flxFromSearchWithClose.setDefaultUnit(kony.flex.DP);
        var flxFromContents = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFromContents",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxBg003e7515px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxFromContents"), extendConfig({}, controller.args[1], "flxFromContents"), extendConfig({}, controller.args[2], "flxFromContents"));
        flxFromContents.setDefaultUnit(kony.flex.DP);
        var imgFromSearch = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgFromSearch",
            "isVisible": true,
            "left": "30dp",
            "src": "search_1.png",
            "width": "15dp",
            "zIndex": 10
        }, controller.args[0], "imgFromSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFromSearch"), extendConfig({}, controller.args[2], "imgFromSearch"));
        var tbxFromSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "ICSknTbxSSPR42424215px",
            "height": "87%",
            "id": "tbxFromSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Search by account name or number",
            "secureTextEntry": false,
            "skin": "ICSknTbxSSPR42424215px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "tbxFromSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [9, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxFromSearch"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTbxPlaceholderSSPR42424215px",
            "showClearButton": false,
            "showCloseButton": false,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxFromSearch"));
        var imgFromCloseIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgFromCloseIcon",
            "isVisible": false,
            "right": "31dp",
            "src": "closeicon.PNG",
            "width": "16dp",
            "zIndex": 10
        }, controller.args[0], "imgFromCloseIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFromCloseIcon"), extendConfig({}, controller.args[2], "imgFromCloseIcon"));
        flxFromContents.add(imgFromSearch, tbxFromSearch, imgFromCloseIcon);
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
        flxFromSearchWithClose.add(flxFromContents, flxShadow);
        flxFromHeader.add(flxFromTop, lblTransferFrom, flxFromSearchWithClose);
        var flxFromDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxFromDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFromDescription"), extendConfig({}, controller.args[1], "flxFromDescription"), extendConfig({}, controller.args[2], "flxFromDescription"));
        flxFromDescription.setDefaultUnit(kony.flex.DP);
        var lblFromDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblFromDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": "Select an account to transfer from",
            "textStyle": {},
            "top": "13dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblFromDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFromDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFromDescription"));
        flxFromDescription.add(lblFromDescription);
        var flxSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator"), extendConfig({}, controller.args[1], "flxSeparator"), extendConfig({}, controller.args[2], "flxSeparator"));
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var segFromAccounts = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [
                [{
                        "imgChevron": "",
                        "lblHeaderName": ""
                    },
                    [{
                        "imgIcon": "",
                        "imgIcon1": "",
                        "imgIcon12": "",
                        "imgIcon2": "",
                        "imgIcon3": "",
                        "imgIcon31": "",
                        "imgIcon4": "",
                        "lblField1": "",
                        "lblField2": "",
                        "lblField3": "",
                        "lblField4": "",
                        "lblNoRecords": ""
                    }]
                ]
            ],
            "groupCells": false,
            "height": "481dp",
            "id": "segFromAccounts",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowTemplate": "flxUnifiedTransferRowTemplate",
            "scrollingEvents": {},
            "sectionHeaderTemplate": "flxUnifiedTransferHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxField1": "flxField1",
                "flxField3": "flxField3",
                "flxGroup1": "flxGroup1",
                "flxGroup2": "flxGroup2",
                "flxGroup3": "flxGroup3",
                "flxGroup4": "flxGroup4",
                "flxIcon1": "flxIcon1",
                "flxIcon2": "flxIcon2",
                "flxIcon3": "flxIcon3",
                "flxIcon4": "flxIcon4",
                "flxImgChevron": "flxImgChevron",
                "flxNoRecords": "flxNoRecords",
                "flxRow": "flxRow",
                "flxSeparator": "flxSeparator",
                "flxUnifiedTransferHeader": "flxUnifiedTransferHeader",
                "flxUnifiedTransferRowTemplate": "flxUnifiedTransferRowTemplate",
                "flxUpShadow": "flxUpShadow",
                "imgChevron": "imgChevron",
                "imgIcon": "imgIcon",
                "imgIcon1": "imgIcon1",
                "imgIcon12": "imgIcon12",
                "imgIcon2": "imgIcon2",
                "imgIcon3": "imgIcon3",
                "imgIcon31": "imgIcon31",
                "imgIcon4": "imgIcon4",
                "lblField1": "lblField1",
                "lblField2": "lblField2",
                "lblField3": "lblField3",
                "lblField4": "lblField4",
                "lblHeaderName": "lblHeaderName",
                "lblNoRecords": "lblNoRecords"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segFromAccounts"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segFromAccounts"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segFromAccounts"));
        var flxFromNoResults = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxFromNoResults",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFromNoResults"), extendConfig({}, controller.args[1], "flxFromNoResults"), extendConfig({}, controller.args[2], "flxFromNoResults"));
        flxFromNoResults.setDefaultUnit(kony.flex.DP);
        var lblNoFromResults = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "25dp",
            "id": "lblNoFromResults",
            "isVisible": true,
            "left": "36%",
            "right": "35%",
            "skin": "ICSknLbl72727234px",
            "text": "No results found",
            "textStyle": {},
            "top": "74dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblNoFromResults"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoFromResults"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNoFromResults"));
        flxFromNoResults.add(lblNoFromResults);
        flxFromAccount.add(flxFromHeader, flxFromDescription, flxSeparator, segFromAccounts, flxFromNoResults);
        var flxToAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxToAccount",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxToAccount"), extendConfig({}, controller.args[1], "flxToAccount"), extendConfig({}, controller.args[2], "flxToAccount"));
        flxToAccount.setDefaultUnit(kony.flex.DP);
        var flxToAccountMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxToAccountMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxToAccountMain"), extendConfig({}, controller.args[1], "flxToAccountMain"), extendConfig({}, controller.args[2], "flxToAccountMain"));
        flxToAccountMain.setDefaultUnit(kony.flex.DP);
        var flxToHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxToHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxToHeader"), extendConfig({}, controller.args[1], "flxToHeader"), extendConfig({}, controller.args[2], "flxToHeader"));
        flxToHeader.setDefaultUnit(kony.flex.DP);
        var flxToTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxToTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxToTop"), extendConfig({}, controller.args[1], "flxToTop"), extendConfig({}, controller.args[2], "flxToTop"));
        flxToTop.setDefaultUnit(kony.flex.DP);
        var flxToBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxToBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxToBack"), extendConfig({}, controller.args[1], "flxToBack"), extendConfig({}, controller.args[2], "flxToBack"));
        flxToBack.setDefaultUnit(kony.flex.DP);
        var imgToBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgToBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgToBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgToBack"), extendConfig({}, controller.args[2], "imgToBack"));
        flxToBack.add(imgToBack);
        var btnToCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnToCancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnToCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnToCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnToCancel"));
        flxToTop.add(flxToBack, btnToCancel);
        var lbltransferTo = new kony.ui.Label(extendConfig({
            "id": "lbltransferTo",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Transfer To ",
            "textStyle": {},
            "top": "11dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lbltransferTo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbltransferTo"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lbltransferTo"));
        var flxToSearchWithClose = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "36dp",
            "id": "flxToSearchWithClose",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxToSearchWithClose"), extendConfig({}, controller.args[1], "flxToSearchWithClose"), extendConfig({}, controller.args[2], "flxToSearchWithClose"));
        flxToSearchWithClose.setDefaultUnit(kony.flex.DP);
        var flxToContents = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxToContents",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxBg003e7515px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxToContents"), extendConfig({}, controller.args[1], "flxToContents"), extendConfig({}, controller.args[2], "flxToContents"));
        flxToContents.setDefaultUnit(kony.flex.DP);
        var imgToSearch = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgToSearch",
            "isVisible": true,
            "left": "30dp",
            "src": "search_1.png",
            "width": "15dp",
            "zIndex": 10
        }, controller.args[0], "imgToSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgToSearch"), extendConfig({}, controller.args[2], "imgToSearch"));
        var tbxToSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "ICSknTbxSSPR42424215px",
            "height": "87%",
            "id": "tbxToSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Search by account name or number",
            "secureTextEntry": false,
            "skin": "ICSknTbxSSPR42424215px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "tbxToSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [9, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxToSearch"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTbxPlaceholderSSPR42424215px",
            "showClearButton": false,
            "showCloseButton": false,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxToSearch"));
        var imgToCloseIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgToCloseIcon",
            "isVisible": false,
            "right": "31dp",
            "src": "closeicon.PNG",
            "width": "16dp",
            "zIndex": 10
        }, controller.args[0], "imgToCloseIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgToCloseIcon"), extendConfig({}, controller.args[2], "imgToCloseIcon"));
        flxToContents.add(imgToSearch, tbxToSearch, imgToCloseIcon);
        var flxToShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-5dp",
            "clipBounds": true,
            "height": "5dp",
            "id": "flxToShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxShadow000fff",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxToShadow"), extendConfig({}, controller.args[1], "flxToShadow"), extendConfig({}, controller.args[2], "flxToShadow"));
        flxToShadow.setDefaultUnit(kony.flex.DP);
        flxToShadow.add();
        flxToSearchWithClose.add(flxToContents, flxToShadow);
        flxToHeader.add(flxToTop, lbltransferTo, flxToSearchWithClose);
        var flxToDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxToDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxToDescription"), extendConfig({}, controller.args[1], "flxToDescription"), extendConfig({}, controller.args[2], "flxToDescription"));
        flxToDescription.setDefaultUnit(kony.flex.DP);
        var lblToDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblToDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": "Select a recipient to transfer to",
            "textStyle": {},
            "top": "13dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblToDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblToDescription"));
        flxToDescription.add(lblToDescription);
        var flxToSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxToSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxToSeparator"), extendConfig({}, controller.args[1], "flxToSeparator"), extendConfig({}, controller.args[2], "flxToSeparator"));
        flxToSeparator.setDefaultUnit(kony.flex.DP);
        flxToSeparator.add();
        var segToAccounts = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "30dp",
            "data": [
                [{
                        "imgChevron": "",
                        "lblHeaderName": ""
                    },
                    [{
                        "imgIcon": "",
                        "imgIcon1": "",
                        "imgIcon12": "",
                        "imgIcon2": "",
                        "imgIcon3": "",
                        "imgIcon31": "",
                        "imgIcon4": "",
                        "lblField1": "",
                        "lblField2": "",
                        "lblField3": "",
                        "lblField4": "",
                        "lblNoRecords": ""
                    }]
                ]
            ],
            "groupCells": false,
            "height": "62%",
            "id": "segToAccounts",
            "isVisible": true,
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowTemplate": "flxUnifiedTransferRowTemplate",
            "scrollingEvents": {},
            "sectionHeaderTemplate": "flxUnifiedTransferHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxField1": "flxField1",
                "flxField3": "flxField3",
                "flxGroup1": "flxGroup1",
                "flxGroup2": "flxGroup2",
                "flxGroup3": "flxGroup3",
                "flxGroup4": "flxGroup4",
                "flxIcon1": "flxIcon1",
                "flxIcon2": "flxIcon2",
                "flxIcon3": "flxIcon3",
                "flxIcon4": "flxIcon4",
                "flxImgChevron": "flxImgChevron",
                "flxNoRecords": "flxNoRecords",
                "flxRow": "flxRow",
                "flxSeparator": "flxSeparator",
                "flxUnifiedTransferHeader": "flxUnifiedTransferHeader",
                "flxUnifiedTransferRowTemplate": "flxUnifiedTransferRowTemplate",
                "flxUpShadow": "flxUpShadow",
                "imgChevron": "imgChevron",
                "imgIcon": "imgIcon",
                "imgIcon1": "imgIcon1",
                "imgIcon12": "imgIcon12",
                "imgIcon2": "imgIcon2",
                "imgIcon3": "imgIcon3",
                "imgIcon31": "imgIcon31",
                "imgIcon4": "imgIcon4",
                "lblField1": "lblField1",
                "lblField2": "lblField2",
                "lblField3": "lblField3",
                "lblField4": "lblField4",
                "lblHeaderName": "lblHeaderName",
                "lblNoRecords": "lblNoRecords"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segToAccounts"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segToAccounts"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segToAccounts"));
        var flxNoResults = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxNoResults",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNoResults"), extendConfig({}, controller.args[1], "flxNoResults"), extendConfig({}, controller.args[2], "flxNoResults"));
        flxNoResults.setDefaultUnit(kony.flex.DP);
        var lblNoToResults = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "19dp",
            "id": "lblNoToResults",
            "isVisible": true,
            "left": "36%",
            "right": "35%",
            "skin": "ICSknLbl72727234px",
            "text": "No results found",
            "textStyle": {},
            "top": "74dp",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "lblNoToResults"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoToResults"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNoToResults"));
        var btnToTransferNewPayee = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "id": "btnToTransferNewPayee",
            "isVisible": true,
            "left": "116dp",
            "right": "116dp",
            "skin": "ICSknBtn4176A434px",
            "text": "Transfer To New Payee",
            "top": "113dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnToTransferNewPayee"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnToTransferNewPayee"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnToTransferNewPayee"));
        flxNoResults.add(lblNoToResults, btnToTransferNewPayee);
        flxToAccountMain.add(flxToHeader, flxToDescription, flxToSeparator, segToAccounts, flxNoResults);
        var flxTransferToNewPayee = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "2dp",
            "clipBounds": true,
            "height": "70dp",
            "id": "flxTransferToNewPayee",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "f9f9",
            "width": "100%"
        }, controller.args[0], "flxTransferToNewPayee"), extendConfig({}, controller.args[1], "flxTransferToNewPayee"), extendConfig({}, controller.args[2], "flxTransferToNewPayee"));
        flxTransferToNewPayee.setDefaultUnit(kony.flex.DP);
        var btnTransferNewPayee = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "focusSkin": "ICBtn003E7534px",
            "height": "48dp",
            "id": "btnTransferNewPayee",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICBtn003E7534px",
            "text": "Transfer to New Payee",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnTransferNewPayee"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTransferNewPayee"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnTransferNewPayee"));
        flxTransferToNewPayee.add(btnTransferNewPayee);
        flxToAccount.add(flxToAccountMain, flxTransferToNewPayee);
        var flxAmount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAmount",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxAmount"), extendConfig({}, controller.args[1], "flxAmount"), extendConfig({}, controller.args[2], "flxAmount"));
        flxAmount.setDefaultUnit(kony.flex.DP);
        var flxAmountMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70%",
            "id": "flxAmountMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAmountMain"), extendConfig({}, controller.args[1], "flxAmountMain"), extendConfig({}, controller.args[2], "flxAmountMain"));
        flxAmountMain.setDefaultUnit(kony.flex.DP);
        var flxAmountHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAmountHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAmountHeaderTop"), extendConfig({}, controller.args[1], "flxAmountHeaderTop"), extendConfig({}, controller.args[2], "flxAmountHeaderTop"));
        flxAmountHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxAmountTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAmountTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAmountTop"), extendConfig({}, controller.args[1], "flxAmountTop"), extendConfig({}, controller.args[2], "flxAmountTop"));
        flxAmountTop.setDefaultUnit(kony.flex.DP);
        var flxAmountBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxAmountBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxAmountBack"), extendConfig({}, controller.args[1], "flxAmountBack"), extendConfig({}, controller.args[2], "flxAmountBack"));
        flxAmountBack.setDefaultUnit(kony.flex.DP);
        var imgAmountBack = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgAmountBack",
            "isVisible": true,
            "left": "0dp",
            "src": "backbutton_1.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgAmountBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAmountBack"), extendConfig({}, controller.args[2], "imgAmountBack"));
        flxAmountBack.add(imgAmountBack);
        var btnAmountCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnAmountCancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnAmountCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAmountCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnAmountCancel"));
        flxAmountTop.add(flxAmountBack, btnAmountCancel);
        var lblAmountHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblAmountHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Amount",
            "textStyle": {},
            "top": "11dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblAmountHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmountHeader"));
        flxAmountHeaderTop.add(flxAmountTop, lblAmountHeader);
        var flxAmountScrollContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "60%",
            "horizontalScrollIndicator": true,
            "id": "flxAmountScrollContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxAmountScrollContainer"), extendConfig({}, controller.args[1], "flxAmountScrollContainer"), extendConfig({}, controller.args[2], "flxAmountScrollContainer"));
        flxAmountScrollContainer.setDefaultUnit(kony.flex.DP);
        var flxAmountContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAmountContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAmountContainer"), extendConfig({}, controller.args[1], "flxAmountContainer"), extendConfig({}, controller.args[2], "flxAmountContainer"));
        flxAmountContainer.setDefaultUnit(kony.flex.DP);
        var flxAmountToAndFromAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAmountToAndFromAccount",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf9f9f9",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxAmountToAndFromAccount"), extendConfig({}, controller.args[1], "flxAmountToAndFromAccount"), extendConfig({}, controller.args[2], "flxAmountToAndFromAccount"));
        flxAmountToAndFromAccount.setDefaultUnit(kony.flex.DP);
        var flxAmountFromAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxAmountFromAccount",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAmountFromAccount"), extendConfig({}, controller.args[1], "flxAmountFromAccount"), extendConfig({}, controller.args[2], "flxAmountFromAccount"));
        flxAmountFromAccount.setDefaultUnit(kony.flex.DP);
        var lblFromAccount = new kony.ui.Label(extendConfig({
            "id": "lblFromAccount",
            "isVisible": true,
            "left": "21dp",
            "skin": "sknMMLeftLabels",
            "text": kony.i18n.getLocalizedString("kony.mb.common.from"),
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFromAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFromAccount"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFromAccount"));
        var flxFromAccountValue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "21dp",
            "id": "flxFromAccountValue",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": 50,
            "skin": "slFbox",
            "top": "15dp",
            "width": "100%"
        }, controller.args[0], "flxFromAccountValue"), extendConfig({}, controller.args[1], "flxFromAccountValue"), extendConfig({}, controller.args[2], "flxFromAccountValue"));
        flxFromAccountValue.setDefaultUnit(kony.flex.DP);
        var lblFromAccountValue = new kony.ui.Label(extendConfig({
            "id": "lblFromAccountValue",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "My Savings ....1234",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFromAccountValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFromAccountValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFromAccountValue"));
        var flximgFromAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "13dp",
            "id": "flximgFromAccount",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "flxIconShadow7px7d7d7dBorder1pxe3e3e3",
            "top": "0dp",
            "width": "13dp"
        }, controller.args[0], "flximgFromAccount"), extendConfig({}, controller.args[1], "flximgFromAccount"), extendConfig({}, controller.args[2], "flximgFromAccount"));
        flximgFromAccount.setDefaultUnit(kony.flex.DP);
        var imgFromAccountValue = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "11dp",
            "id": "imgFromAccountValue",
            "isVisible": true,
            "skin": "slImage",
            "src": "personalaccount.png",
            "width": "11dp"
        }, controller.args[0], "imgFromAccountValue"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFromAccountValue"), extendConfig({}, controller.args[2], "imgFromAccountValue"));
        flximgFromAccount.add(imgFromAccountValue);
        flxFromAccountValue.add(lblFromAccountValue, flximgFromAccount);
        var flxFromImage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxFromImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "11%",
            "zIndex": 2
        }, controller.args[0], "flxFromImage"), extendConfig({}, controller.args[1], "flxFromImage"), extendConfig({}, controller.args[2], "flxFromImage"));
        flxFromImage.setDefaultUnit(kony.flex.DP);
        var imgFromRightArrow = new kony.ui.Image2(extendConfig({
            "centerY": "49.82%",
            "height": "20dp",
            "id": "imgFromRightArrow",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 2
        }, controller.args[0], "imgFromRightArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFromRightArrow"), extendConfig({}, controller.args[2], "imgFromRightArrow"));
        flxFromImage.add(imgFromRightArrow);
        var flxFromAvailableBalance = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFromAvailableBalance",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFromAvailableBalance"), extendConfig({}, controller.args[1], "flxFromAvailableBalance"), extendConfig({}, controller.args[2], "flxFromAvailableBalance"));
        flxFromAvailableBalance.setDefaultUnit(kony.flex.DP);
        var lblFromBalanceValue = new kony.ui.Label(extendConfig({
            "id": "lblFromBalanceValue",
            "isVisible": true,
            "left": 10,
            "right": "50dp",
            "skin": "sknLbla0a0a0SSP26px",
            "text": "$00,0000",
            "textStyle": {},
            "top": "35dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFromBalanceValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFromBalanceValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFromBalanceValue"));
        var lblFromavailableBal = new kony.ui.Label(extendConfig({
            "id": "lblFromavailableBal",
            "isVisible": true,
            "right": "-5dp",
            "skin": "sknLbla0a0a0SSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.MM.availableBalance"),
            "textStyle": {},
            "top": "35dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFromavailableBal"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFromavailableBal"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFromavailableBal"));
        flxFromAvailableBalance.add(lblFromBalanceValue, lblFromavailableBal);
        flxAmountFromAccount.add(lblFromAccount, flxFromAccountValue, flxFromImage, flxFromAvailableBalance);
        var flxSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator"), extendConfig({}, controller.args[1], "flxSeperator"), extendConfig({}, controller.args[2], "flxSeperator"));
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        var flxAmountToAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxAmountToAccount",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAmountToAccount"), extendConfig({}, controller.args[1], "flxAmountToAccount"), extendConfig({}, controller.args[2], "flxAmountToAccount"));
        flxAmountToAccount.setDefaultUnit(kony.flex.DP);
        var lblToAccount = new kony.ui.Label(extendConfig({
            "id": "lblToAccount",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": kony.i18n.getLocalizedString("kony.mb.common.To"),
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblToAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToAccount"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblToAccount"));
        var flxToAccountValue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "21dp",
            "id": "flxToAccountValue",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": 50,
            "skin": "slFbox",
            "top": "15dp",
            "width": "100%"
        }, controller.args[0], "flxToAccountValue"), extendConfig({}, controller.args[1], "flxToAccountValue"), extendConfig({}, controller.args[2], "flxToAccountValue"));
        flxToAccountValue.setDefaultUnit(kony.flex.DP);
        var lblToAccountValue = new kony.ui.Label(extendConfig({
            "id": "lblToAccountValue",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "My Savings ....1234",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblToAccountValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToAccountValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblToAccountValue"));
        var flximgToAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "13dp",
            "id": "flximgToAccount",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "flxIconShadow7px7d7d7dBorder1pxe3e3e3",
            "top": "0dp",
            "width": "13dp"
        }, controller.args[0], "flximgToAccount"), extendConfig({}, controller.args[1], "flximgToAccount"), extendConfig({}, controller.args[2], "flximgToAccount"));
        flximgToAccount.setDefaultUnit(kony.flex.DP);
        var imgToAccountValue = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "11dp",
            "id": "imgToAccountValue",
            "isVisible": true,
            "skin": "slImage",
            "src": "business.png",
            "width": "11dp"
        }, controller.args[0], "imgToAccountValue"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgToAccountValue"), extendConfig({}, controller.args[2], "imgToAccountValue"));
        flximgToAccount.add(imgToAccountValue);
        flxToAccountValue.add(lblToAccountValue, flximgToAccount);
        var flxToImage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxToImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "11%",
            "zIndex": 2
        }, controller.args[0], "flxToImage"), extendConfig({}, controller.args[1], "flxToImage"), extendConfig({}, controller.args[2], "flxToImage"));
        flxToImage.setDefaultUnit(kony.flex.DP);
        var imgToRightArrow = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgToRightArrow",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 2
        }, controller.args[0], "imgToRightArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgToRightArrow"), extendConfig({}, controller.args[2], "imgToRightArrow"));
        flxToImage.add(imgToRightArrow);
        var flxToAvailableBalance = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxToAvailableBalance",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "100%"
        }, controller.args[0], "flxToAvailableBalance"), extendConfig({}, controller.args[1], "flxToAvailableBalance"), extendConfig({}, controller.args[2], "flxToAvailableBalance"));
        flxToAvailableBalance.setDefaultUnit(kony.flex.DP);
        var lblToBalanceValue = new kony.ui.Label(extendConfig({
            "id": "lblToBalanceValue",
            "isVisible": true,
            "left": 10,
            "right": "50dp",
            "skin": "sknLbla0a0a0SSP26px",
            "text": "$00,000.00",
            "textStyle": {},
            "top": "35dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblToBalanceValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToBalanceValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblToBalanceValue"));
        var lblToAvailableBalance = new kony.ui.Label(extendConfig({
            "id": "lblToAvailableBalance",
            "isVisible": true,
            "right": "-5dp",
            "skin": "sknLbla0a0a0SSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.MM.availableBalance"),
            "textStyle": {},
            "top": "35dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblToAvailableBalance"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToAvailableBalance"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblToAvailableBalance"));
        flxToAvailableBalance.add(lblToBalanceValue, lblToAvailableBalance);
        flxAmountToAccount.add(lblToAccount, flxToAccountValue, flxToImage, flxToAvailableBalance);
        var flxToAccountDisabled = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxToAccountDisabled",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxToAccountDisabled"), extendConfig({}, controller.args[1], "flxToAccountDisabled"), extendConfig({}, controller.args[2], "flxToAccountDisabled"));
        flxToAccountDisabled.setDefaultUnit(kony.flex.DP);
        var lblToAccountDisabled = new kony.ui.Label(extendConfig({
            "id": "lblToAccountDisabled",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbla0a0a022px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.To"),
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblToAccountDisabled"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToAccountDisabled"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblToAccountDisabled"));
        var lblToAccountValueDisabled = new kony.ui.Label(extendConfig({
            "id": "lblToAccountValueDisabled",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMGreyLabel",
            "text": "My Savings ....1268",
            "textStyle": {},
            "top": "15dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblToAccountValueDisabled"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToAccountValueDisabled"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblToAccountValueDisabled"));
        var flxToAvailableBalanceDisabled = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxToAvailableBalanceDisabled",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxToAvailableBalanceDisabled"), extendConfig({}, controller.args[1], "flxToAvailableBalanceDisabled"), extendConfig({}, controller.args[2], "flxToAvailableBalanceDisabled"));
        flxToAvailableBalanceDisabled.setDefaultUnit(kony.flex.DP);
        var lblToBalanceValueDisabled = new kony.ui.Label(extendConfig({
            "id": "lblToBalanceValueDisabled",
            "isVisible": true,
            "left": 10,
            "right": "50dp",
            "skin": "sknLbla0a0a0SSP26px",
            "text": "$42,304.00",
            "textStyle": {},
            "top": "35dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblToBalanceValueDisabled"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToBalanceValueDisabled"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblToBalanceValueDisabled"));
        var lblToAvailableBalanceDisabled = new kony.ui.Label(extendConfig({
            "id": "lblToAvailableBalanceDisabled",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbla0a0a0SSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.MM.availableBalance"),
            "textStyle": {},
            "top": "35dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblToAvailableBalanceDisabled"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToAvailableBalanceDisabled"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblToAvailableBalanceDisabled"));
        flxToAvailableBalanceDisabled.add(lblToBalanceValueDisabled, lblToAvailableBalanceDisabled);
        flxToAccountDisabled.add(lblToAccountDisabled, lblToAccountValueDisabled, flxToAvailableBalanceDisabled);
        var flxSeparator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSeparator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator1"), extendConfig({}, controller.args[1], "flxSeparator1"), extendConfig({}, controller.args[2], "flxSeparator1"));
        flxSeparator1.setDefaultUnit(kony.flex.DP);
        flxSeparator1.add();
        flxAmountToAndFromAccount.add(flxAmountFromAccount, flxSeperator, flxAmountToAccount, flxToAccountDisabled, flxSeparator1);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "2dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblAmountErrorMsg = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "30dp",
            "id": "lblAmountErrorMsg",
            "isVisible": false,
            "left": "10dp",
            "skin": "ICSknLblEE000534px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAmountErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountErrorMsg"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmountErrorMsg"));
        var flxCurrencyAndAmount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "95dp",
            "id": "flxCurrencyAndAmount",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCurrencyAndAmount"), extendConfig({}, controller.args[1], "flxCurrencyAndAmount"), extendConfig({}, controller.args[2], "flxCurrencyAndAmount"));
        flxCurrencyAndAmount.setDefaultUnit(kony.flex.DP);
        var flxSelectCurrency = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "95dp",
            "id": "flxSelectCurrency",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "5%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "36%",
            "zIndex": 1
        }, controller.args[0], "flxSelectCurrency"), extendConfig({}, controller.args[1], "flxSelectCurrency"), extendConfig({}, controller.args[2], "flxSelectCurrency"));
        flxSelectCurrency.setDefaultUnit(kony.flex.DP);
        var lblCurrencyTitle = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblCurrencyTitle",
            "isVisible": true,
            "left": "2dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Label",
            "textStyle": {},
            "top": "22dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCurrencyTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCurrencyTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCurrencyTitle"));
        var flxCurrencyWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxCurrencyWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "1dp",
            "width": "77%",
            "zIndex": 1
        }, controller.args[0], "flxCurrencyWrapper"), extendConfig({}, controller.args[1], "flxCurrencyWrapper"), extendConfig({}, controller.args[2], "flxCurrencyWrapper"));
        flxCurrencyWrapper.setDefaultUnit(kony.flex.DP);
        var lblCurrency = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "25dp",
            "id": "lblCurrency",
            "isVisible": true,
            "left": "10dp",
            "right": "5dp",
            "skin": "ICSknLbl42424234px",
            "text": "USD($)",
            "textStyle": {},
            "width": "59dp",
            "zIndex": 5
        }, controller.args[0], "lblCurrency"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCurrency"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCurrency"));
        var imgCurrenySelection = new kony.ui.Image2(extendConfig({
            "centerX": 6,
            "centerY": "50%",
            "height": "15dp",
            "id": "imgCurrenySelection",
            "isVisible": true,
            "left": "0dp",
            "src": "arrowdown.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 5
        }, controller.args[0], "imgCurrenySelection"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCurrenySelection"), extendConfig({}, controller.args[2], "imgCurrenySelection"));
        flxCurrencyWrapper.add(lblCurrency, imgCurrenySelection);
        flxSelectCurrency.add(lblCurrencyTitle, flxCurrencyWrapper);
        var flxMainAmount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "95dp",
            "id": "flxMainAmount",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "top": "0dp",
            "width": "55%",
            "zIndex": 5
        }, controller.args[0], "flxMainAmount"), extendConfig({}, controller.args[1], "flxMainAmount"), extendConfig({}, controller.args[2], "flxMainAmount"));
        flxMainAmount.setDefaultUnit(kony.flex.DP);
        var lblAmountTitle = new kony.ui.Label(extendConfig({
            "id": "lblAmountTitle",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {},
            "top": "22dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAmountTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmountTitle"));
        var flxAmountWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxAmountWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "1dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "flxAmountWrapper"), extendConfig({}, controller.args[1], "flxAmountWrapper"), extendConfig({}, controller.args[2], "flxAmountWrapper"));
        flxAmountWrapper.setDefaultUnit(kony.flex.DP);
        var lblDollar = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblDollar",
            "isVisible": false,
            "left": "10dp",
            "skin": "sknLblA0A0A0SSP42px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, controller.args[0], "lblDollar"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDollar"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDollar"));
        var lblAmount = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "lblAmount",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLblA0A0A0SSP42px",
            "text": "0.00",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, controller.args[0], "lblAmount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmount"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmount"));
        var flxClearAmount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxClearAmount",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "130dp",
            "isModalContainer": false,
            "right": "10dp",
            "skin": "slFbox",
            "top": "3dp",
            "width": "46dp",
            "zIndex": 5
        }, controller.args[0], "flxClearAmount"), extendConfig({}, controller.args[1], "flxClearAmount"), extendConfig({}, controller.args[2], "flxClearAmount"));
        flxClearAmount.setDefaultUnit(kony.flex.DP);
        var imgClose = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "16dp",
            "id": "imgClose",
            "isVisible": true,
            "skin": "slImage",
            "src": "closecircle.png",
            "width": "16dp",
            "zIndex": 1
        }, controller.args[0], "imgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClose"), extendConfig({}, controller.args[2], "imgClose"));
        flxClearAmount.add(imgClose);
        flxAmountWrapper.add(lblDollar, lblAmount, flxClearAmount);
        var txtAmount = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "48dp",
            "id": "txtAmount",
            "isVisible": false,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "6dp",
            "placeholder": "0.00",
            "secureTextEntry": false,
            "skin": "ICSknTxt003E751px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "207dp",
            "zIndex": 1
        }, controller.args[0], "txtAmount"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtAmount"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAmount"));
        flxMainAmount.add(lblAmountTitle, flxAmountWrapper, txtAmount);
        flxCurrencyAndAmount.add(flxSelectCurrency, flxMainAmount);
        flxMain.add(lblAmountErrorMsg, flxCurrencyAndAmount);
        flxAmountContainer.add(flxAmountToAndFromAccount, flxMain);
        flxAmountScrollContainer.add(flxAmountContainer);
        flxAmountMain.add(flxAmountHeaderTop, flxAmountScrollContainer);
        var btnContinue = new kony.ui.Button(extendConfig({
            "bottom": "35%",
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "48dp",
            "id": "btnContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "btnContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContinue"));
        var flxAmountKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "34%",
            "id": "flxAmountKeypad",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FB",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxAmountKeypad"), extendConfig({}, controller.args[1], "flxAmountKeypad"), extendConfig({}, controller.args[2], "flxAmountKeypad"));
        flxAmountKeypad.setDefaultUnit(kony.flex.DP);
        var flxKeypadRowOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxKeypadRowOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowOne"), extendConfig({}, controller.args[1], "flxKeypadRowOne"), extendConfig({}, controller.args[2], "flxKeypadRowOne"));
        flxKeypadRowOne.setDefaultUnit(kony.flex.DP);
        var btnOne = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnOne",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "1",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnOne"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOne"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOne"));
        var btnTwo = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnTwo",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "2",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnTwo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTwo"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnTwo"));
        var btnThree = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnThree",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "3",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnThree"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnThree"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnThree"));
        flxKeypadRowOne.add(btnOne, btnTwo, btnThree);
        var flxKeypadRowTwo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxKeypadRowTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowTwo"), extendConfig({}, controller.args[1], "flxKeypadRowTwo"), extendConfig({}, controller.args[2], "flxKeypadRowTwo"));
        flxKeypadRowTwo.setDefaultUnit(kony.flex.DP);
        var btnFour = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnFour",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "4",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnFour"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFour"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnFour"));
        var btnFive = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnFive",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "5",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnFive"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFive"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnFive"));
        var btnSix = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnSix",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "6",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnSix"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSix"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSix"));
        flxKeypadRowTwo.add(btnFour, btnFive, btnSix);
        var flxKeypadRowThree = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxKeypadRowThree",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowThree"), extendConfig({}, controller.args[1], "flxKeypadRowThree"), extendConfig({}, controller.args[2], "flxKeypadRowThree"));
        flxKeypadRowThree.setDefaultUnit(kony.flex.DP);
        var btnSeven = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnSeven",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "7",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnSeven"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSeven"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSeven"));
        var btnEight = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnEight",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "8",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnEight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEight"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnEight"));
        var btnNine = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNine",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "9",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNine"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNine"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNine"));
        flxKeypadRowThree.add(btnSeven, btnEight, btnNine);
        var flxKeypadRowFour = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxKeypadRowFour",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowFour"), extendConfig({}, controller.args[1], "flxKeypadRowFour"), extendConfig({}, controller.args[2], "flxKeypadRowFour"));
        flxKeypadRowFour.setDefaultUnit(kony.flex.DP);
        var btnZero = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnZero",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "0",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnZero"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnZero"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnZero"));
        var imgClearKeypad = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "imgClearKeypad",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 10
        }, controller.args[0], "imgClearKeypad"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClearKeypad"), extendConfig({}, controller.args[2], "imgClearKeypad"));
        var imgClear = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgClear",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "imgClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClear"), extendConfig({}, controller.args[2], "imgClear"));
        var btnDecimalSeperator = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnDecimalSeperator",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": ",",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnDecimalSeperator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDecimalSeperator"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnDecimalSeperator"));
        flxKeypadRowFour.add(btnZero, imgClearKeypad, imgClear, btnDecimalSeperator);
        flxAmountKeypad.add(flxKeypadRowOne, flxKeypadRowTwo, flxKeypadRowThree, flxKeypadRowFour);
        flxAmount.add(flxAmountMain, btnContinue, flxAmountKeypad);
        var flxFrequencySelection = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFrequencySelection",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFrequencySelection"), extendConfig({}, controller.args[1], "flxFrequencySelection"), extendConfig({}, controller.args[2], "flxFrequencySelection"));
        flxFrequencySelection.setDefaultUnit(kony.flex.DP);
        var flxFrequencyHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxFrequencyHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFrequencyHeaderTop"), extendConfig({}, controller.args[1], "flxFrequencyHeaderTop"), extendConfig({}, controller.args[2], "flxFrequencyHeaderTop"));
        flxFrequencyHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxFrequencyTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxFrequencyTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFrequencyTop"), extendConfig({}, controller.args[1], "flxFrequencyTop"), extendConfig({}, controller.args[2], "flxFrequencyTop"));
        flxFrequencyTop.setDefaultUnit(kony.flex.DP);
        var flxFrequencyBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxFrequencyBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxFrequencyBack"), extendConfig({}, controller.args[1], "flxFrequencyBack"), extendConfig({}, controller.args[2], "flxFrequencyBack"));
        flxFrequencyBack.setDefaultUnit(kony.flex.DP);
        var imgFrequencyBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgFrequencyBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgFrequencyBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFrequencyBack"), extendConfig({}, controller.args[2], "imgFrequencyBack"));
        flxFrequencyBack.add(imgFrequencyBack);
        var btnFrequenxyCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnFrequenxyCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnFrequenxyCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFrequenxyCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnFrequenxyCancel"));
        flxFrequencyTop.add(flxFrequencyBack, btnFrequenxyCancel);
        var lblFrequencyHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "45dp",
            "id": "lblFrequencyHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Frequency",
            "textStyle": {},
            "top": "9dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblFrequencyHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFrequencyHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFrequencyHeader"));
        flxFrequencyHeaderTop.add(flxFrequencyTop, lblFrequencyHeader);
        var flxMainContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "60dp",
            "bounces": true,
            "centerX": "50%",
            "clipBounds": false,
            "enableScrolling": true,
            "height": "70%",
            "horizontalScrollIndicator": true,
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknScrFlxffffff",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxSpace = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxSpace",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSpace"), extendConfig({}, controller.args[1], "flxSpace"), extendConfig({}, controller.args[2], "flxSpace"));
        flxSpace.setDefaultUnit(kony.flex.DP);
        flxSpace.add();
        var segFrequencyOptions = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblFrequency": "Once"
            }, {
                "lblFrequency": "Daily"
            }, {
                "lblFrequency": "Weekly"
            }, {
                "lblFrequency": "Every Two Weeks"
            }, {
                "lblFrequency": "Monthly"
            }, {
                "lblFrequency": "Quarterly"
            }, {
                "lblFrequency": "Every Six Months"
            }, {
                "lblFrequency": "Annually"
            }],
            "groupCells": false,
            "id": "segFrequencyOptions",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegf9f9f9",
            "rowSkin": "segTransparant",
            "rowTemplate": "flxFrequency",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorRequired": false,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxFrequency": "flxFrequency",
                "flxMain": "flxMain",
                "lblFrequency": "lblFrequency"
            },
            "widgetSkin": "segTransparant",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segFrequencyOptions"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segFrequencyOptions"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": true,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segFrequencyOptions"));
        flxMainContainer.add(flxSpace, segFrequencyOptions);
        flxFrequencySelection.add(flxFrequencyHeaderTop, flxMainContainer);
        var flxCurrencySelection = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCurrencySelection",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCurrencySelection"), extendConfig({}, controller.args[1], "flxCurrencySelection"), extendConfig({}, controller.args[2], "flxCurrencySelection"));
        flxCurrencySelection.setDefaultUnit(kony.flex.DP);
        var flxCurrencyHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCurrencyHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCurrencyHeaderTop"), extendConfig({}, controller.args[1], "flxCurrencyHeaderTop"), extendConfig({}, controller.args[2], "flxCurrencyHeaderTop"));
        flxCurrencyHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxCurrencyTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCurrencyTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCurrencyTop"), extendConfig({}, controller.args[1], "flxCurrencyTop"), extendConfig({}, controller.args[2], "flxCurrencyTop"));
        flxCurrencyTop.setDefaultUnit(kony.flex.DP);
        var flxCurrencyBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCurrencyBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxCurrencyBack"), extendConfig({}, controller.args[1], "flxCurrencyBack"), extendConfig({}, controller.args[2], "flxCurrencyBack"));
        flxCurrencyBack.setDefaultUnit(kony.flex.DP);
        var imgCurrencyBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgCurrencyBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgCurrencyBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCurrencyBack"), extendConfig({}, controller.args[2], "imgCurrencyBack"));
        flxCurrencyBack.add(imgCurrencyBack);
        var btnCurrencyCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnCurrencyCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnCurrencyCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCurrencyCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnCurrencyCancel"));
        flxCurrencyTop.add(flxCurrencyBack, btnCurrencyCancel);
        var lblCurrencyHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblCurrencyHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Currency",
            "textStyle": {},
            "top": "11dp",
            "width": "150dp",
            "zIndex": 1
        }, controller.args[0], "lblCurrencyHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCurrencyHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCurrencyHeader"));
        flxCurrencyHeaderTop.add(flxCurrencyTop, lblCurrencyHeader);
        var flxCurrencyMainContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "60dp",
            "bounces": true,
            "centerX": "50%",
            "clipBounds": false,
            "enableScrolling": true,
            "height": "400dp",
            "horizontalScrollIndicator": true,
            "id": "flxCurrencyMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknScrFlxffffff",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxCurrencyMainContainer"), extendConfig({}, controller.args[1], "flxCurrencyMainContainer"), extendConfig({}, controller.args[2], "flxCurrencyMainContainer"));
        flxCurrencyMainContainer.setDefaultUnit(kony.flex.DP);
        var flxSpaceCurrency = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxSpaceCurrency",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSpaceCurrency"), extendConfig({}, controller.args[1], "flxSpaceCurrency"), extendConfig({}, controller.args[2], "flxSpaceCurrency"));
        flxSpaceCurrency.setDefaultUnit(kony.flex.DP);
        flxSpaceCurrency.add();
        var segCurrencyOptions = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblFrequency": "USD"
            }, {
                "lblFrequency": "EUR"
            }, {
                "lblFrequency": "GBP"
            }, {
                "lblFrequency": "YEN"
            }, {
                "lblFrequency": "INR"
            }],
            "groupCells": false,
            "id": "segCurrencyOptions",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegf9f9f9",
            "rowSkin": "segTransparant",
            "rowTemplate": "flxFrequency",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorRequired": false,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxFrequency": "flxFrequency",
                "flxMain": "flxMain",
                "lblFrequency": "lblFrequency"
            },
            "widgetSkin": "segTransparant",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segCurrencyOptions"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segCurrencyOptions"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": true,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segCurrencyOptions"));
        flxCurrencyMainContainer.add(flxSpaceCurrency, segCurrencyOptions);
        flxCurrencySelection.add(flxCurrencyHeaderTop, flxCurrencyMainContainer);
        var flxAccountNumber = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAccountNumber",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumber"), extendConfig({}, controller.args[1], "flxAccountNumber"), extendConfig({}, controller.args[2], "flxAccountNumber"));
        flxAccountNumber.setDefaultUnit(kony.flex.DP);
        var flxAccountNumberMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAccountNumberMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxAccountNumberMain"), extendConfig({}, controller.args[1], "flxAccountNumberMain"), extendConfig({}, controller.args[2], "flxAccountNumberMain"));
        flxAccountNumberMain.setDefaultUnit(kony.flex.DP);
        var flxAccountNumberHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAccountNumberHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberHeader"), extendConfig({}, controller.args[1], "flxAccountNumberHeader"), extendConfig({}, controller.args[2], "flxAccountNumberHeader"));
        flxAccountNumberHeader.setDefaultUnit(kony.flex.DP);
        var flxAccountNumberTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAccountNumberTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberTop"), extendConfig({}, controller.args[1], "flxAccountNumberTop"), extendConfig({}, controller.args[2], "flxAccountNumberTop"));
        flxAccountNumberTop.setDefaultUnit(kony.flex.DP);
        var flxAccountNumberBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxAccountNumberBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberBack"), extendConfig({}, controller.args[1], "flxAccountNumberBack"), extendConfig({}, controller.args[2], "flxAccountNumberBack"));
        flxAccountNumberBack.setDefaultUnit(kony.flex.DP);
        var imgAccountNumberBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgAccountNumberBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgAccountNumberBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAccountNumberBack"), extendConfig({}, controller.args[2], "imgAccountNumberBack"));
        flxAccountNumberBack.add(imgAccountNumberBack);
        var btnAccountNumberCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnAccountNumberCancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnAccountNumberCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAccountNumberCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnAccountNumberCancel"));
        flxAccountNumberTop.add(flxAccountNumberBack, btnAccountNumberCancel);
        var lblAccountNumber = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblAccountNumber",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountNumber"),
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblAccountNumber"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccountNumber"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAccountNumber"));
        flxAccountNumberHeader.add(flxAccountNumberTop, lblAccountNumber);
        var flxAccountNumberDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxAccountNumberDescription",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberDescription"), extendConfig({}, controller.args[1], "flxAccountNumberDescription"), extendConfig({}, controller.args[2], "flxAccountNumberDescription"));
        flxAccountNumberDescription.setDefaultUnit(kony.flex.DP);
        var lblAccountNumberDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAccountNumberDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": kony.i18n.getLocalizedString("kony.reqCode.EnterAccountNumber"),
            "textStyle": {},
            "top": "13dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblAccountNumberDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccountNumberDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAccountNumberDescription"));
        flxAccountNumberDescription.add(lblAccountNumberDescription);
        var flxAccountNumberSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxAccountNumberSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberSeparator"), extendConfig({}, controller.args[1], "flxAccountNumberSeparator"), extendConfig({}, controller.args[2], "flxAccountNumberSeparator"));
        flxAccountNumberSeparator.setDefaultUnit(kony.flex.DP);
        flxAccountNumberSeparator.add();
        var flxAccountNumberMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "33%",
            "id": "flxAccountNumberMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxAccountNumberMainContainer"), extendConfig({}, controller.args[1], "flxAccountNumberMainContainer"), extendConfig({}, controller.args[2], "flxAccountNumberMainContainer"));
        flxAccountNumberMainContainer.setDefaultUnit(kony.flex.DP);
        var lblAccNoErrorMsg = new kony.ui.Label(extendConfig({
            "bottom": "-44dp",
            "centerX": "50%",
            "height": "38dp",
            "id": "lblAccNoErrorMsg",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {},
            "top": "7dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblAccNoErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccNoErrorMsg"), extendConfig({
            "textCopyable": true,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAccNoErrorMsg"));
        var flxAccountNumberWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxAccountNumberWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "CopysknFlxffffff",
            "top": "64dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberWrapper"), extendConfig({}, controller.args[1], "flxAccountNumberWrapper"), extendConfig({}, controller.args[2], "flxAccountNumberWrapper"));
        flxAccountNumberWrapper.setDefaultUnit(kony.flex.DP);
        var flxInputAccNo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxInputAccNo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10dp",
            "isModalContainer": false,
            "right": "10dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "95%",
            "zIndex": 1
        }, controller.args[0], "flxInputAccNo"), extendConfig({}, controller.args[1], "flxInputAccNo"), extendConfig({}, controller.args[2], "flxInputAccNo"));
        flxInputAccNo.setDefaultUnit(kony.flex.DP);
        var lblDigit1 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit1",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit1"));
        var lblDigit2 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit2",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit2"));
        var lblDigit3 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit3",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit3"));
        var lblDigit4 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit4",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit4"));
        var lblDigit5 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit5",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit5"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit5"));
        var lblDigit6 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit6",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit6"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit6"));
        var lblDigit7 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit7",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit7"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit7"));
        var lblDigit8 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit8",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit8"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit8"));
        var lblDigit9 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit9",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit9"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit9"));
        var lblDigit10 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit10",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit10"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit10"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit10"));
        var lblDigit11 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit11",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit11"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit11"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit11"));
        var lblDigit12 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit12",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit12"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit12"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit12"));
        var lblDigit13 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit13",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit13"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit13"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit13"));
        var lblDigit14 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit14",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit14"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit14"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit14"));
        var lblDigit15 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit15",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit15"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit15"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit15"));
        var lblDigit16 = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblDigit16",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl94949487px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit16"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit16"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit16"));
        flxInputAccNo.add(lblDigit1, lblDigit2, lblDigit3, lblDigit4, lblDigit5, lblDigit6, lblDigit7, lblDigit8, lblDigit9, lblDigit10, lblDigit11, lblDigit12, lblDigit13, lblDigit14, lblDigit15, lblDigit16);
        flxAccountNumberWrapper.add(flxInputAccNo);
        var flxAccountNumberInputLine = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxAccountNumberInputLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "13dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberInputLine"), extendConfig({}, controller.args[1], "flxAccountNumberInputLine"), extendConfig({}, controller.args[2], "flxAccountNumberInputLine"));
        flxAccountNumberInputLine.setDefaultUnit(kony.flex.DP);
        flxAccountNumberInputLine.add();
        var flxAccountNumberorIBANWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxAccountNumberorIBANWrapper",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "25%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberorIBANWrapper"), extendConfig({}, controller.args[1], "flxAccountNumberorIBANWrapper"), extendConfig({}, controller.args[2], "flxAccountNumberorIBANWrapper"));
        flxAccountNumberorIBANWrapper.setDefaultUnit(kony.flex.DP);
        var txtAccountNumberorIBAN = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "ICSknTxt003E751px",
            "height": "47dp",
            "id": "txtAccountNumberorIBAN",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "placeholder": "Enter Account Number or IBAN",
            "right": "5%",
            "secureTextEntry": true,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtAccountNumberorIBAN"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtAccountNumberorIBAN"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAccountNumberorIBAN"));
        flxAccountNumberorIBANWrapper.add(txtAccountNumberorIBAN);
        flxAccountNumberMainContainer.add(lblAccNoErrorMsg, flxAccountNumberWrapper, flxAccountNumberInputLine, flxAccountNumberorIBANWrapper);
        flxAccountNumberMain.add(flxAccountNumberHeader, flxAccountNumberDescription, flxAccountNumberSeparator, flxAccountNumberMainContainer);
        var btnAccNumberContinue = new kony.ui.Button(extendConfig({
            "bottom": "34%",
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "48dp",
            "id": "btnAccNumberContinue",
            "isVisible": true,
            "left": "7%",
            "right": "7%",
            "skin": "ICSknBtnE2E9F0t42424234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "86%",
            "zIndex": 1
        }, controller.args[0], "btnAccNumberContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAccNumberContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAccNumberContinue"));
        var flxAccountNumberKeyboard = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "33%",
            "id": "flxAccountNumberKeyboard",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FB",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxAccountNumberKeyboard"), extendConfig({}, controller.args[1], "flxAccountNumberKeyboard"), extendConfig({}, controller.args[2], "flxAccountNumberKeyboard"));
        flxAccountNumberKeyboard.setDefaultUnit(kony.flex.DP);
        var flxRowOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRowOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRowOne"), extendConfig({}, controller.args[1], "flxRowOne"), extendConfig({}, controller.args[2], "flxRowOne"));
        flxRowOne.setDefaultUnit(kony.flex.DP);
        var btnNumber1 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "1",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber1"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumber1"));
        var btnNumber2 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber2",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "2",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber2"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumber2"));
        var btnNumber3 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber3",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "3",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber3"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumber3"));
        flxRowOne.add(btnNumber1, btnNumber2, btnNumber3);
        var flxRowTwo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRowTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRowTwo"), extendConfig({}, controller.args[1], "flxRowTwo"), extendConfig({}, controller.args[2], "flxRowTwo"));
        flxRowTwo.setDefaultUnit(kony.flex.DP);
        var btnNumber4 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber4",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "4",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber4"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumber4"));
        var btnNumber5 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber5",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "5",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber5"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumber5"));
        var btnNumber6 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber6",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "6",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber6"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumber6"));
        flxRowTwo.add(btnNumber4, btnNumber5, btnNumber6);
        var flxRowThree = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRowThree",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRowThree"), extendConfig({}, controller.args[1], "flxRowThree"), extendConfig({}, controller.args[2], "flxRowThree"));
        flxRowThree.setDefaultUnit(kony.flex.DP);
        var btnNumber7 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber7",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "7",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber7"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumber7"));
        var btnNumber8 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber8",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "8",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber8"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumber8"));
        var btnNumber9 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber9",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "9",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber9"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumber9"));
        flxRowThree.add(btnNumber7, btnNumber8, btnNumber9);
        var flxRowFour = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRowFour",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRowFour"), extendConfig({}, controller.args[1], "flxRowFour"), extendConfig({}, controller.args[2], "flxRowFour"));
        flxRowFour.setDefaultUnit(kony.flex.DP);
        var btnNumber0 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumber0",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "0",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumber0"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumber0"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumber0"));
        var imgKeypadClear = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "imgKeypadClear",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 10
        }, controller.args[0], "imgKeypadClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgKeypadClear"), extendConfig({}, controller.args[2], "imgKeypadClear"));
        var imgClearOption = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgClearOption",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "imgClearOption"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClearOption"), extendConfig({}, controller.args[2], "imgClearOption"));
        var btnDecimalKeySeparator = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnDecimalKeySeparator",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": ",",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnDecimalKeySeparator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDecimalKeySeparator"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnDecimalKeySeparator"));
        flxRowFour.add(btnNumber0, imgKeypadClear, imgClearOption, btnDecimalKeySeparator);
        flxAccountNumberKeyboard.add(flxRowOne, flxRowTwo, flxRowThree, flxRowFour);
        flxAccountNumber.add(flxAccountNumberMain, btnAccNumberContinue, flxAccountNumberKeyboard);
        var flxReEnterAccountNumber = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxReEnterAccountNumber",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxReEnterAccountNumber"), extendConfig({}, controller.args[1], "flxReEnterAccountNumber"), extendConfig({}, controller.args[2], "flxReEnterAccountNumber"));
        flxReEnterAccountNumber.setDefaultUnit(kony.flex.DP);
        var flxReEnterAccountNumberMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxReEnterAccountNumberMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberMain"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberMain"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberMain"));
        flxReEnterAccountNumberMain.setDefaultUnit(kony.flex.DP);
        var flxReEnterAccountNumberHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxReEnterAccountNumberHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberHeader"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberHeader"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberHeader"));
        flxReEnterAccountNumberHeader.setDefaultUnit(kony.flex.DP);
        var flxReEnterAccountNumberTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxReEnterAccountNumberTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberTop"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberTop"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberTop"));
        flxReEnterAccountNumberTop.setDefaultUnit(kony.flex.DP);
        var flxReEnterAccountNumberBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxReEnterAccountNumberBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberBack"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberBack"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberBack"));
        flxReEnterAccountNumberBack.setDefaultUnit(kony.flex.DP);
        var imgReEnterAccountNumberBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgReEnterAccountNumberBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgReEnterAccountNumberBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgReEnterAccountNumberBack"), extendConfig({}, controller.args[2], "imgReEnterAccountNumberBack"));
        flxReEnterAccountNumberBack.add(imgReEnterAccountNumberBack);
        var btnReEnterAccountNumberCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnReEnterAccountNumberCancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnReEnterAccountNumberCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnReEnterAccountNumberCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnReEnterAccountNumberCancel"));
        flxReEnterAccountNumberTop.add(flxReEnterAccountNumberBack, btnReEnterAccountNumberCancel);
        var lblReEnterAccountNumber = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblReEnterAccountNumber",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Account Number",
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblReEnterAccountNumber"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReEnterAccountNumber"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReEnterAccountNumber"));
        flxReEnterAccountNumberHeader.add(flxReEnterAccountNumberTop, lblReEnterAccountNumber);
        var flxReEnterAccountNumberDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxReEnterAccountNumberDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberDescription"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberDescription"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberDescription"));
        flxReEnterAccountNumberDescription.setDefaultUnit(kony.flex.DP);
        var lblReEnterAccountNumberDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblReEnterAccountNumberDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": "Re-enter the payee account number",
            "textStyle": {},
            "top": "13dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblReEnterAccountNumberDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReEnterAccountNumberDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReEnterAccountNumberDescription"));
        flxReEnterAccountNumberDescription.add(lblReEnterAccountNumberDescription);
        var flxReEnterAccountNumberSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxReEnterAccountNumberSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberSeparator"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberSeparator"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberSeparator"));
        flxReEnterAccountNumberSeparator.setDefaultUnit(kony.flex.DP);
        flxReEnterAccountNumberSeparator.add();
        var flxReEnterAccountNumberMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "36%",
            "id": "flxReEnterAccountNumberMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxReEnterAccountNumberMainContainer"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberMainContainer"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberMainContainer"));
        flxReEnterAccountNumberMainContainer.setDefaultUnit(kony.flex.DP);
        var lblReEnterAccNoErrorMsg = new kony.ui.Label(extendConfig({
            "bottom": "-44dp",
            "centerX": "50%",
            "id": "lblReEnterAccNoErrorMsg",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {},
            "top": "10dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblReEnterAccNoErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReEnterAccNoErrorMsg"), extendConfig({
            "textCopyable": true,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReEnterAccNoErrorMsg"));
        var flxReEnterAccountNumberWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxReEnterAccountNumberWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "CopysknFlxffffff",
            "top": "64dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberWrapper"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberWrapper"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberWrapper"));
        flxReEnterAccountNumberWrapper.setDefaultUnit(kony.flex.DP);
        var flxReInputAccNo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxReInputAccNo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10dp",
            "isModalContainer": false,
            "right": "10dp",
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxReInputAccNo"), extendConfig({}, controller.args[1], "flxReInputAccNo"), extendConfig({}, controller.args[2], "flxReInputAccNo"));
        flxReInputAccNo.setDefaultUnit(kony.flex.DP);
        var lblDigit01 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit01",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit01"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit01"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit01"));
        var lblDigit02 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit02",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit02"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit02"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit02"));
        var lblDigit03 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit03",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit03"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit03"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit03"));
        var lblDigit04 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit04",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit04"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit04"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit04"));
        var lblDigit05 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit05",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit05"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit05"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit05"));
        var lblDigit06 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit06",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit06"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit06"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit06"));
        var lblDigit07 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit07",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit07"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit07"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit07"));
        var lblDigit08 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit08",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit08"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit08"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit08"));
        var lblDigit09 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit09",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit09"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit09"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit09"));
        var lblDigit010 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit010",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit010"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit010"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit010"));
        var lblDigit011 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit011",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit011"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit011"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit011"));
        var lblDigit012 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit012",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit012"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit012"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit012"));
        var lblDigit013 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit013",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit013"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit013"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit013"));
        var lblDigit014 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit014",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit014"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit014"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit014"));
        var lblDigit015 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit015",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit015"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit015"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit015"));
        var lblDigit016 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDigit016",
            "isVisible": true,
            "left": "8dp",
            "skin": "ICSknLbl42424255px",
            "textStyle": {},
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDigit016"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDigit016"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDigit016"));
        flxReInputAccNo.add(lblDigit01, lblDigit02, lblDigit03, lblDigit04, lblDigit05, lblDigit06, lblDigit07, lblDigit08, lblDigit09, lblDigit010, lblDigit011, lblDigit012, lblDigit013, lblDigit014, lblDigit015, lblDigit016);
        flxReEnterAccountNumberWrapper.add(flxReInputAccNo);
        var flxReEnterAccountNumberInputLine = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxReEnterAccountNumberInputLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "13dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxReEnterAccountNumberInputLine"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberInputLine"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberInputLine"));
        flxReEnterAccountNumberInputLine.setDefaultUnit(kony.flex.DP);
        flxReEnterAccountNumberInputLine.add();
        var flxReAccountNumberorIBANWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxReAccountNumberorIBANWrapper",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "top": "48dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReAccountNumberorIBANWrapper"), extendConfig({}, controller.args[1], "flxReAccountNumberorIBANWrapper"), extendConfig({}, controller.args[2], "flxReAccountNumberorIBANWrapper"));
        flxReAccountNumberorIBANWrapper.setDefaultUnit(kony.flex.DP);
        var txtReAccountNumberorIBAN = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "ICSknTxt003E751px",
            "height": "47dp",
            "id": "txtReAccountNumberorIBAN",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "placeholder": "Enter Re-Account Number or IBAN",
            "right": "5%",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtReAccountNumberorIBAN"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtReAccountNumberorIBAN"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtReAccountNumberorIBAN"));
        flxReAccountNumberorIBANWrapper.add(txtReAccountNumberorIBAN);
        flxReEnterAccountNumberMainContainer.add(lblReEnterAccNoErrorMsg, flxReEnterAccountNumberWrapper, flxReEnterAccountNumberInputLine, flxReAccountNumberorIBANWrapper);
        flxReEnterAccountNumberMain.add(flxReEnterAccountNumberHeader, flxReEnterAccountNumberDescription, flxReEnterAccountNumberSeparator, flxReEnterAccountNumberMainContainer);
        var btnReEnterAccNumberContinue = new kony.ui.Button(extendConfig({
            "bottom": "34%",
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "48dp",
            "id": "btnReEnterAccNumberContinue",
            "isVisible": true,
            "left": "7%",
            "right": "7%",
            "skin": "ICSknBtnE2E9F0t42424234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "86%",
            "zIndex": 1
        }, controller.args[0], "btnReEnterAccNumberContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnReEnterAccNumberContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnReEnterAccNumberContinue"));
        var flxReEnterAccountNumberKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "33%",
            "id": "flxReEnterAccountNumberKeypad",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FB",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxReEnterAccountNumberKeypad"), extendConfig({}, controller.args[1], "flxReEnterAccountNumberKeypad"), extendConfig({}, controller.args[2], "flxReEnterAccountNumberKeypad"));
        flxReEnterAccountNumberKeypad.setDefaultUnit(kony.flex.DP);
        var flxRow1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRow1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRow1"), extendConfig({}, controller.args[1], "flxRow1"), extendConfig({}, controller.args[2], "flxRow1"));
        flxRow1.setDefaultUnit(kony.flex.DP);
        var btnNumberOne = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberOne",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "1",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberOne"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberOne"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumberOne"));
        var btnNumberTwo = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberTwo",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "2",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberTwo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberTwo"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumberTwo"));
        var btnNumberThree = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberThree",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "3",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberThree"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberThree"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumberThree"));
        flxRow1.add(btnNumberOne, btnNumberTwo, btnNumberThree);
        var flxRow2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRow2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRow2"), extendConfig({}, controller.args[1], "flxRow2"), extendConfig({}, controller.args[2], "flxRow2"));
        flxRow2.setDefaultUnit(kony.flex.DP);
        var btnNumberFour = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberFour",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "4",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberFour"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberFour"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumberFour"));
        var btnNumberFive = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberFive",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "5",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberFive"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberFive"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumberFive"));
        var btnNumberSix = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberSix",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "6",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberSix"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberSix"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumberSix"));
        flxRow2.add(btnNumberFour, btnNumberFive, btnNumberSix);
        var flxRow3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRow3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRow3"), extendConfig({}, controller.args[1], "flxRow3"), extendConfig({}, controller.args[2], "flxRow3"));
        flxRow3.setDefaultUnit(kony.flex.DP);
        var btnNumberSeven = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberSeven",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "7",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberSeven"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberSeven"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumberSeven"));
        var btnNumberEight = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberEight",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "8",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberEight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberEight"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumberEight"));
        var btnNumberNine = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberNine",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "9",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberNine"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberNine"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumberNine"));
        flxRow3.add(btnNumberSeven, btnNumberEight, btnNumberNine);
        var flxRow4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxRow4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRow4"), extendConfig({}, controller.args[1], "flxRow4"), extendConfig({}, controller.args[2], "flxRow4"));
        flxRow4.setDefaultUnit(kony.flex.DP);
        var btnNumberZero = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNumberZero",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "0",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNumberZero"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNumberZero"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNumberZero"));
        var imgKeypadClearButton = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "imgKeypadClearButton",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 10
        }, controller.args[0], "imgKeypadClearButton"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgKeypadClearButton"), extendConfig({}, controller.args[2], "imgKeypadClearButton"));
        var imgClearButton = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgClearButton",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "imgClearButton"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClearButton"), extendConfig({}, controller.args[2], "imgClearButton"));
        var btnDecimalSeparatorKey = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnDecimalSeparatorKey",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": ",",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnDecimalSeparatorKey"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDecimalSeparatorKey"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnDecimalSeparatorKey"));
        flxRow4.add(btnNumberZero, imgKeypadClearButton, imgClearButton, btnDecimalSeparatorKey);
        flxReEnterAccountNumberKeypad.add(flxRow1, flxRow2, flxRow3, flxRow4);
        flxReEnterAccountNumber.add(flxReEnterAccountNumberMain, btnReEnterAccNumberContinue, flxReEnterAccountNumberKeypad);
        var flxRecipientsName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRecipientsName",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxRecipientsName"), extendConfig({}, controller.args[1], "flxRecipientsName"), extendConfig({}, controller.args[2], "flxRecipientsName"));
        flxRecipientsName.setDefaultUnit(kony.flex.DP);
        var flxRecipientsNameMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRecipientsNameMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRecipientsNameMain"), extendConfig({}, controller.args[1], "flxRecipientsNameMain"), extendConfig({}, controller.args[2], "flxRecipientsNameMain"));
        flxRecipientsNameMain.setDefaultUnit(kony.flex.DP);
        var flxRecipientsNameHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRecipientsNameHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRecipientsNameHeader"), extendConfig({}, controller.args[1], "flxRecipientsNameHeader"), extendConfig({}, controller.args[2], "flxRecipientsNameHeader"));
        flxRecipientsNameHeader.setDefaultUnit(kony.flex.DP);
        var flxRecipientsNameTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRecipientsNameTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRecipientsNameTop"), extendConfig({}, controller.args[1], "flxRecipientsNameTop"), extendConfig({}, controller.args[2], "flxRecipientsNameTop"));
        flxRecipientsNameTop.setDefaultUnit(kony.flex.DP);
        var flxRecipientsNameBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxRecipientsNameBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxRecipientsNameBack"), extendConfig({}, controller.args[1], "flxRecipientsNameBack"), extendConfig({}, controller.args[2], "flxRecipientsNameBack"));
        flxRecipientsNameBack.setDefaultUnit(kony.flex.DP);
        var imgRecipientsNameBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgRecipientsNameBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgRecipientsNameBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgRecipientsNameBack"), extendConfig({}, controller.args[2], "imgRecipientsNameBack"));
        flxRecipientsNameBack.add(imgRecipientsNameBack);
        var btnRecipientsNameCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnRecipientsNameCancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnRecipientsNameCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRecipientsNameCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnRecipientsNameCancel"));
        flxRecipientsNameTop.add(flxRecipientsNameBack, btnRecipientsNameCancel);
        var lblRecipientsNameHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblRecipientsNameHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("i18n.unified.recipientsName"),
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblRecipientsNameHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRecipientsNameHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRecipientsNameHeader"));
        flxRecipientsNameHeader.add(flxRecipientsNameTop, lblRecipientsNameHeader);
        var flxRecipientsNameDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxRecipientsNameDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRecipientsNameDescription"), extendConfig({}, controller.args[1], "flxRecipientsNameDescription"), extendConfig({}, controller.args[2], "flxRecipientsNameDescription"));
        flxRecipientsNameDescription.setDefaultUnit(kony.flex.DP);
        var lblRecipientsNameDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblRecipientsNameDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": kony.i18n.getLocalizedString("i18n.unified.enterRecipientsName"),
            "textStyle": {},
            "top": "13dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRecipientsNameDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRecipientsNameDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRecipientsNameDescription"));
        flxRecipientsNameDescription.add(lblRecipientsNameDescription);
        var flxRecipientsnameSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxRecipientsnameSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRecipientsnameSeparator"), extendConfig({}, controller.args[1], "flxRecipientsnameSeparator"), extendConfig({}, controller.args[2], "flxRecipientsnameSeparator"));
        flxRecipientsnameSeparator.setDefaultUnit(kony.flex.DP);
        flxRecipientsnameSeparator.add();
        var flxRecipientsNameMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "39.41%",
            "id": "flxRecipientsNameMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxRecipientsNameMainContainer"), extendConfig({}, controller.args[1], "flxRecipientsNameMainContainer"), extendConfig({}, controller.args[2], "flxRecipientsNameMainContainer"));
        flxRecipientsNameMainContainer.setDefaultUnit(kony.flex.DP);
        var flxRecipientsNameWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxRecipientsNameWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "top": "48dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRecipientsNameWrapper"), extendConfig({}, controller.args[1], "flxRecipientsNameWrapper"), extendConfig({}, controller.args[2], "flxRecipientsNameWrapper"));
        flxRecipientsNameWrapper.setDefaultUnit(kony.flex.DP);
        var txtRecipientName = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "ICSknTxt003E751px",
            "height": "47dp",
            "id": "txtRecipientName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.P2P.EnterRecipientName"),
            "right": "5%",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtRecipientName"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtRecipientName"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtRecipientName"));
        flxRecipientsNameWrapper.add(txtRecipientName);
        var btnRecipientsNameContinue = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "48dp",
            "id": "btnRecipientsNameContinue",
            "isVisible": true,
            "left": "7%",
            "right": "7%",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "86%",
            "zIndex": 1
        }, controller.args[0], "btnRecipientsNameContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRecipientsNameContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnRecipientsNameContinue"));
        flxRecipientsNameMainContainer.add(flxRecipientsNameWrapper, btnRecipientsNameContinue);
        flxRecipientsNameMain.add(flxRecipientsNameHeader, flxRecipientsNameDescription, flxRecipientsnameSeparator, flxRecipientsNameMainContainer);
        flxRecipientsName.add(flxRecipientsNameMain);
        var flxFXRateReference = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFXRateReference",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFXRateReference"), extendConfig({}, controller.args[1], "flxFXRateReference"), extendConfig({}, controller.args[2], "flxFXRateReference"));
        flxFXRateReference.setDefaultUnit(kony.flex.DP);
        var flxFXRateReferenceMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFXRateReferenceMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFXRateReferenceMain"), extendConfig({}, controller.args[1], "flxFXRateReferenceMain"), extendConfig({}, controller.args[2], "flxFXRateReferenceMain"));
        flxFXRateReferenceMain.setDefaultUnit(kony.flex.DP);
        var flxFXRateReferenceHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "120dp",
            "id": "flxFXRateReferenceHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFXRateReferenceHeader"), extendConfig({}, controller.args[1], "flxFXRateReferenceHeader"), extendConfig({}, controller.args[2], "flxFXRateReferenceHeader"));
        flxFXRateReferenceHeader.setDefaultUnit(kony.flex.DP);
        var flxFXRateReferenceTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxFXRateReferenceTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFXRateReferenceTop"), extendConfig({}, controller.args[1], "flxFXRateReferenceTop"), extendConfig({}, controller.args[2], "flxFXRateReferenceTop"));
        flxFXRateReferenceTop.setDefaultUnit(kony.flex.DP);
        var flxFXRateReferenceBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxFXRateReferenceBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxFXRateReferenceBack"), extendConfig({}, controller.args[1], "flxFXRateReferenceBack"), extendConfig({}, controller.args[2], "flxFXRateReferenceBack"));
        flxFXRateReferenceBack.setDefaultUnit(kony.flex.DP);
        var imgFXRateReferenceBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgFXRateReferenceBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgFXRateReferenceBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFXRateReferenceBack"), extendConfig({}, controller.args[2], "imgFXRateReferenceBack"));
        flxFXRateReferenceBack.add(imgFXRateReferenceBack);
        var btnFXRateCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnFXRateCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnFXRateCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFXRateCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnFXRateCancel"));
        flxFXRateReferenceTop.add(flxFXRateReferenceBack, btnFXRateCancel);
        var lblFXRateReferenceHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblFXRateReferenceHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "FX Reference Rate",
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblFXRateReferenceHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFXRateReferenceHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFXRateReferenceHeader"));
        flxFXRateReferenceHeader.add(flxFXRateReferenceTop, lblFXRateReferenceHeader);
        var flXMainFXRate = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "46.92%",
            "id": "flXMainFXRate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flXMainFXRate"), extendConfig({}, controller.args[1], "flXMainFXRate"), extendConfig({}, controller.args[2], "flXMainFXRate"));
        flXMainFXRate.setDefaultUnit(kony.flex.DP);
        var flxFXMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFXMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxFXMainContainer"), extendConfig({}, controller.args[1], "flxFXMainContainer"), extendConfig({}, controller.args[2], "flxFXMainContainer"));
        flxFXMainContainer.setDefaultUnit(kony.flex.DP);
        var lblFXRateErrorMsg = new kony.ui.Label(extendConfig({
            "bottom": "-20dp",
            "centerX": "50%",
            "height": "38dp",
            "id": "lblFXRateErrorMsg",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {},
            "top": "15dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "lblFXRateErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFXRateErrorMsg"), extendConfig({
            "textCopyable": true,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFXRateErrorMsg"));
        var lblFxRateReference = new kony.ui.Label(extendConfig({
            "id": "lblFxRateReference",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {},
            "top": "28dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFxRateReference"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFxRateReference"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFxRateReference"));
        var flxFxRateWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxFxRateWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "3dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFxRateWrapper"), extendConfig({}, controller.args[1], "flxFxRateWrapper"), extendConfig({}, controller.args[2], "flxFxRateWrapper"));
        flxFxRateWrapper.setDefaultUnit(kony.flex.DP);
        var txtFXRateReference = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "47dp",
            "id": "txtFXRateReference",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Enter FX rate reference",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxt003E751px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtFXRateReference"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtFXRateReference"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtFXRateReference"));
        flxFxRateWrapper.add(txtFXRateReference);
        flxFXMainContainer.add(lblFXRateErrorMsg, lblFxRateReference, flxFxRateWrapper);
        flXMainFXRate.add(flxFXMainContainer);
        flxFXRateReferenceMain.add(flxFXRateReferenceHeader, flXMainFXRate);
        var btnFxRateContinue = new kony.ui.Button(extendConfig({
            "bottom": "35%",
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "48dp",
            "id": "btnFxRateContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "335dp",
            "zIndex": 1
        }, controller.args[0], "btnFxRateContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFxRateContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnFxRateContinue"));
        flxFXRateReference.add(flxFXRateReferenceMain, btnFxRateContinue);
        var flxPayeeNickname = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPayeeNickname",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_e32f8172086249c2a9837f5a68ded3a0,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPayeeNickname"), extendConfig({}, controller.args[1], "flxPayeeNickname"), extendConfig({}, controller.args[2], "flxPayeeNickname"));
        flxPayeeNickname.setDefaultUnit(kony.flex.DP);
        var flxPayeeNicknameMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPayeeNicknameMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNicknameMain"), extendConfig({}, controller.args[1], "flxPayeeNicknameMain"), extendConfig({}, controller.args[2], "flxPayeeNicknameMain"));
        flxPayeeNicknameMain.setDefaultUnit(kony.flex.DP);
        var flxPayeeNicknameHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "120dp",
            "id": "flxPayeeNicknameHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNicknameHeader"), extendConfig({}, controller.args[1], "flxPayeeNicknameHeader"), extendConfig({}, controller.args[2], "flxPayeeNicknameHeader"));
        flxPayeeNicknameHeader.setDefaultUnit(kony.flex.DP);
        var flxPayeeNicknameTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPayeeNicknameTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNicknameTop"), extendConfig({}, controller.args[1], "flxPayeeNicknameTop"), extendConfig({}, controller.args[2], "flxPayeeNicknameTop"));
        flxPayeeNicknameTop.setDefaultUnit(kony.flex.DP);
        var flxPayeeNicknameBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxPayeeNicknameBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNicknameBack"), extendConfig({}, controller.args[1], "flxPayeeNicknameBack"), extendConfig({}, controller.args[2], "flxPayeeNicknameBack"));
        flxPayeeNicknameBack.setDefaultUnit(kony.flex.DP);
        var imgPayeeNicknameBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgPayeeNicknameBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgPayeeNicknameBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPayeeNicknameBack"), extendConfig({}, controller.args[2], "imgPayeeNicknameBack"));
        flxPayeeNicknameBack.add(imgPayeeNicknameBack);
        var btnPayeeNicknameCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnPayeeNicknameCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnPayeeNicknameCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPayeeNicknameCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnPayeeNicknameCancel"));
        flxPayeeNicknameTop.add(flxPayeeNicknameBack, btnPayeeNicknameCancel);
        var blPayeeNicknameHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "blPayeeNicknameHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Payee Nickname",
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "blPayeeNicknameHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "blPayeeNicknameHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "blPayeeNicknameHeader"));
        flxPayeeNicknameHeader.add(flxPayeeNicknameTop, blPayeeNicknameHeader);
        var flxPayeeNicknameDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxPayeeNicknameDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNicknameDescription"), extendConfig({}, controller.args[1], "flxPayeeNicknameDescription"), extendConfig({}, controller.args[2], "flxPayeeNicknameDescription"));
        flxPayeeNicknameDescription.setDefaultUnit(kony.flex.DP);
        var lblPayeeNicknameDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblPayeeNicknameDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": "Enter the payee nickname",
            "textStyle": {},
            "top": "13dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPayeeNicknameDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPayeeNicknameDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPayeeNicknameDescription"));
        flxPayeeNicknameDescription.add(lblPayeeNicknameDescription);
        var flxPayeeNicknameSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxPayeeNicknameSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNicknameSeparator"), extendConfig({}, controller.args[1], "flxPayeeNicknameSeparator"), extendConfig({}, controller.args[2], "flxPayeeNicknameSeparator"));
        flxPayeeNicknameSeparator.setDefaultUnit(kony.flex.DP);
        flxPayeeNicknameSeparator.add();
        var flxPayeeNicknameMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "39.41%",
            "id": "flxPayeeNicknameMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxPayeeNicknameMainContainer"), extendConfig({}, controller.args[1], "flxPayeeNicknameMainContainer"), extendConfig({}, controller.args[2], "flxPayeeNicknameMainContainer"));
        flxPayeeNicknameMainContainer.setDefaultUnit(kony.flex.DP);
        var flxPayeeNicknameWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPayeeNicknameWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNicknameWrapper"), extendConfig({}, controller.args[1], "flxPayeeNicknameWrapper"), extendConfig({}, controller.args[2], "flxPayeeNicknameWrapper"));
        flxPayeeNicknameWrapper.setDefaultUnit(kony.flex.DP);
        var txtPayeeNickname = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "47dp",
            "id": "txtPayeeNickname",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxt003E751px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "47dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtPayeeNickname"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtPayeeNickname"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtPayeeNickname"));
        var btnPayeeNicknameContinue = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "48dp",
            "id": "btnPayeeNicknameContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "btnPayeeNicknameContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPayeeNicknameContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnPayeeNicknameContinue"));
        flxPayeeNicknameWrapper.add(txtPayeeNickname, btnPayeeNicknameContinue);
        flxPayeeNicknameMainContainer.add(flxPayeeNicknameWrapper);
        flxPayeeNicknameMain.add(flxPayeeNicknameHeader, flxPayeeNicknameDescription, flxPayeeNicknameSeparator, flxPayeeNicknameMainContainer);
        flxPayeeNickname.add(flxPayeeNicknameMain);
        var flxIntermediaryBIC = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxIntermediaryBIC",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxIntermediaryBIC"), extendConfig({}, controller.args[1], "flxIntermediaryBIC"), extendConfig({}, controller.args[2], "flxIntermediaryBIC"));
        flxIntermediaryBIC.setDefaultUnit(kony.flex.DP);
        var flxIntermediaryBICMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxIntermediaryBICMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIntermediaryBICMain"), extendConfig({}, controller.args[1], "flxIntermediaryBICMain"), extendConfig({}, controller.args[2], "flxIntermediaryBICMain"));
        flxIntermediaryBICMain.setDefaultUnit(kony.flex.DP);
        var flxIntermediaryHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxIntermediaryHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIntermediaryHeader"), extendConfig({}, controller.args[1], "flxIntermediaryHeader"), extendConfig({}, controller.args[2], "flxIntermediaryHeader"));
        flxIntermediaryHeader.setDefaultUnit(kony.flex.DP);
        var flxIntermediaryTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxIntermediaryTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIntermediaryTop"), extendConfig({}, controller.args[1], "flxIntermediaryTop"), extendConfig({}, controller.args[2], "flxIntermediaryTop"));
        flxIntermediaryTop.setDefaultUnit(kony.flex.DP);
        var flxntermediaryBICBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxntermediaryBICBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxntermediaryBICBack"), extendConfig({}, controller.args[1], "flxntermediaryBICBack"), extendConfig({}, controller.args[2], "flxntermediaryBICBack"));
        flxntermediaryBICBack.setDefaultUnit(kony.flex.DP);
        var imgIntermediaryBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgIntermediaryBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgIntermediaryBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIntermediaryBack"), extendConfig({}, controller.args[2], "imgIntermediaryBack"));
        flxntermediaryBICBack.add(imgIntermediaryBack);
        var btnIntermediaryCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnIntermediaryCancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnIntermediaryCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnIntermediaryCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnIntermediaryCancel"));
        flxIntermediaryTop.add(flxntermediaryBICBack, btnIntermediaryCancel);
        var lblIntermediaryBICHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblIntermediaryBICHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Intermediary BIC",
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblIntermediaryBICHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblIntermediaryBICHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblIntermediaryBICHeader"));
        flxIntermediaryHeader.add(flxIntermediaryTop, lblIntermediaryBICHeader);
        var flXMainIntermediaryBIC = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50.33%",
            "id": "flXMainIntermediaryBIC",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flXMainIntermediaryBIC"), extendConfig({}, controller.args[1], "flXMainIntermediaryBIC"), extendConfig({}, controller.args[2], "flXMainIntermediaryBIC"));
        flXMainIntermediaryBIC.setDefaultUnit(kony.flex.DP);
        var flxIntermediaryBICMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxIntermediaryBICMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxIntermediaryBICMainContainer"), extendConfig({}, controller.args[1], "flxIntermediaryBICMainContainer"), extendConfig({}, controller.args[2], "flxIntermediaryBICMainContainer"));
        flxIntermediaryBICMainContainer.setDefaultUnit(kony.flex.DP);
        var lblIntermediaryBIC = new kony.ui.Label(extendConfig({
            "id": "lblIntermediaryBIC",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {},
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblIntermediaryBIC"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblIntermediaryBIC"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblIntermediaryBIC"));
        var flxIntermediaryBICWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "51dp",
            "id": "flxIntermediaryBICWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "12%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIntermediaryBICWrapper"), extendConfig({}, controller.args[1], "flxIntermediaryBICWrapper"), extendConfig({}, controller.args[2], "flxIntermediaryBICWrapper"));
        flxIntermediaryBICWrapper.setDefaultUnit(kony.flex.DP);
        var txtIntermediaryBIC = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "ICSknTxt003E751px",
            "height": "47dp",
            "id": "txtIntermediaryBIC",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Enter Intermediary BIC",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "1dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtIntermediaryBIC"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtIntermediaryBIC"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtIntermediaryBIC"));
        flxIntermediaryBICWrapper.add(txtIntermediaryBIC);
        var btnIntermediaryBICContinue = new kony.ui.Button(extendConfig({
            "bottom": "0dp",
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "48dp",
            "id": "btnIntermediaryBICContinue",
            "isVisible": true,
            "left": "20dp",
            "right": 20,
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "335dp",
            "zIndex": 1
        }, controller.args[0], "btnIntermediaryBICContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnIntermediaryBICContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnIntermediaryBICContinue"));
        flxIntermediaryBICMainContainer.add(lblIntermediaryBIC, flxIntermediaryBICWrapper, btnIntermediaryBICContinue);
        flXMainIntermediaryBIC.add(flxIntermediaryBICMainContainer);
        flxIntermediaryBICMain.add(flxIntermediaryHeader, flXMainIntermediaryBIC);
        var flxIntermediaryBICKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "218dp",
            "id": "flxIntermediaryBICKeypad",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FB",
            "top": "67%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxIntermediaryBICKeypad"), extendConfig({}, controller.args[1], "flxIntermediaryBICKeypad"), extendConfig({}, controller.args[2], "flxIntermediaryBICKeypad"));
        flxIntermediaryBICKeypad.setDefaultUnit(kony.flex.DP);
        var CopyflxE0a114d4792b7940 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "CopyflxE0a114d4792b7940",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "CopyflxE0a114d4792b7940"), extendConfig({}, controller.args[1], "CopyflxE0a114d4792b7940"), extendConfig({}, controller.args[2], "CopyflxE0a114d4792b7940"));
        CopyflxE0a114d4792b7940.setDefaultUnit(kony.flex.DP);
        var CopybtnE0i021560cbbf045 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "CopybtnE0i021560cbbf045",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "1",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "CopybtnE0i021560cbbf045"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopybtnE0i021560cbbf045"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "CopybtnE0i021560cbbf045"));
        var CopybtnE0e75e0ff534454a = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "CopybtnE0e75e0ff534454a",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "2",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "CopybtnE0e75e0ff534454a"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopybtnE0e75e0ff534454a"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "CopybtnE0e75e0ff534454a"));
        var CopybtnE0b3a10ea31e3744 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "CopybtnE0b3a10ea31e3744",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "3",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "CopybtnE0b3a10ea31e3744"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopybtnE0b3a10ea31e3744"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "CopybtnE0b3a10ea31e3744"));
        CopyflxE0a114d4792b7940.add(CopybtnE0i021560cbbf045, CopybtnE0e75e0ff534454a, CopybtnE0b3a10ea31e3744);
        var CopyflxE0h9074be163c146 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "CopyflxE0h9074be163c146",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "CopyflxE0h9074be163c146"), extendConfig({}, controller.args[1], "CopyflxE0h9074be163c146"), extendConfig({}, controller.args[2], "CopyflxE0h9074be163c146"));
        CopyflxE0h9074be163c146.setDefaultUnit(kony.flex.DP);
        var CopybtnE0d10e6d3ecfa546 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "CopybtnE0d10e6d3ecfa546",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "4",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "CopybtnE0d10e6d3ecfa546"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopybtnE0d10e6d3ecfa546"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "CopybtnE0d10e6d3ecfa546"));
        var CopybtnE0g216967b90cc44 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "CopybtnE0g216967b90cc44",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "5",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "CopybtnE0g216967b90cc44"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopybtnE0g216967b90cc44"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "CopybtnE0g216967b90cc44"));
        var CopybtnE0a54620a842814a = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "CopybtnE0a54620a842814a",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "6",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "CopybtnE0a54620a842814a"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopybtnE0a54620a842814a"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "CopybtnE0a54620a842814a"));
        CopyflxE0h9074be163c146.add(CopybtnE0d10e6d3ecfa546, CopybtnE0g216967b90cc44, CopybtnE0a54620a842814a);
        var CopyflxE0f4353c6da5d548 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "CopyflxE0f4353c6da5d548",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "CopyflxE0f4353c6da5d548"), extendConfig({}, controller.args[1], "CopyflxE0f4353c6da5d548"), extendConfig({}, controller.args[2], "CopyflxE0f4353c6da5d548"));
        CopyflxE0f4353c6da5d548.setDefaultUnit(kony.flex.DP);
        var CopybtnE0a9ebd85f0a3540 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "CopybtnE0a9ebd85f0a3540",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "7",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "CopybtnE0a9ebd85f0a3540"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopybtnE0a9ebd85f0a3540"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "CopybtnE0a9ebd85f0a3540"));
        var CopybtnE0de91908943954d = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "CopybtnE0de91908943954d",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "8",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "CopybtnE0de91908943954d"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopybtnE0de91908943954d"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "CopybtnE0de91908943954d"));
        var CopybtnE0f5637273596a48 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "CopybtnE0f5637273596a48",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "9",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "CopybtnE0f5637273596a48"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopybtnE0f5637273596a48"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "CopybtnE0f5637273596a48"));
        CopyflxE0f4353c6da5d548.add(CopybtnE0a9ebd85f0a3540, CopybtnE0de91908943954d, CopybtnE0f5637273596a48);
        var CopyflxE0gda5b7e0f65249 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "CopyflxE0gda5b7e0f65249",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "CopyflxE0gda5b7e0f65249"), extendConfig({}, controller.args[1], "CopyflxE0gda5b7e0f65249"), extendConfig({}, controller.args[2], "CopyflxE0gda5b7e0f65249"));
        CopyflxE0gda5b7e0f65249.setDefaultUnit(kony.flex.DP);
        var CopybtnE0cd5e27bdbbd14d = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "CopybtnE0cd5e27bdbbd14d",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "0",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "CopybtnE0cd5e27bdbbd14d"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopybtnE0cd5e27bdbbd14d"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "CopybtnE0cd5e27bdbbd14d"));
        var CopyimgE0b64d9cc493d642 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "CopyimgE0b64d9cc493d642",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 10
        }, controller.args[0], "CopyimgE0b64d9cc493d642"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyimgE0b64d9cc493d642"), extendConfig({}, controller.args[2], "CopyimgE0b64d9cc493d642"));
        var CopyimgE0aee6dbb429284a = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "CopyimgE0aee6dbb429284a",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "CopyimgE0aee6dbb429284a"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyimgE0aee6dbb429284a"), extendConfig({}, controller.args[2], "CopyimgE0aee6dbb429284a"));
        var CopybtnE0c86cdc5ea6334f = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "CopybtnE0c86cdc5ea6334f",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": ",",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "CopybtnE0c86cdc5ea6334f"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopybtnE0c86cdc5ea6334f"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "CopybtnE0c86cdc5ea6334f"));
        CopyflxE0gda5b7e0f65249.add(CopybtnE0cd5e27bdbbd14d, CopyimgE0b64d9cc493d642, CopyimgE0aee6dbb429284a, CopybtnE0c86cdc5ea6334f);
        flxIntermediaryBICKeypad.add(CopyflxE0a114d4792b7940, CopyflxE0h9074be163c146, CopyflxE0f4353c6da5d548, CopyflxE0gda5b7e0f65249);
        flxIntermediaryBIC.add(flxIntermediaryBICMain, flxIntermediaryBICKeypad);
        var flxE2E = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxE2E",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxE2E"), extendConfig({}, controller.args[1], "flxE2E"), extendConfig({}, controller.args[2], "flxE2E"));
        flxE2E.setDefaultUnit(kony.flex.DP);
        var flxE2EMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxE2EMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxE2EMain"), extendConfig({}, controller.args[1], "flxE2EMain"), extendConfig({}, controller.args[2], "flxE2EMain"));
        flxE2EMain.setDefaultUnit(kony.flex.DP);
        var flxE2EHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxE2EHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxE2EHeader"), extendConfig({}, controller.args[1], "flxE2EHeader"), extendConfig({}, controller.args[2], "flxE2EHeader"));
        flxE2EHeader.setDefaultUnit(kony.flex.DP);
        var flxE2ETop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxE2ETop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxE2ETop"), extendConfig({}, controller.args[1], "flxE2ETop"), extendConfig({}, controller.args[2], "flxE2ETop"));
        flxE2ETop.setDefaultUnit(kony.flex.DP);
        var flxE2EBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxE2EBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxE2EBack"), extendConfig({}, controller.args[1], "flxE2EBack"), extendConfig({}, controller.args[2], "flxE2EBack"));
        flxE2EBack.setDefaultUnit(kony.flex.DP);
        var imgE2EBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgE2EBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgE2EBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgE2EBack"), extendConfig({}, controller.args[2], "imgE2EBack"));
        flxE2EBack.add(imgE2EBack);
        var btnE2ECancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnE2ECancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnE2ECancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnE2ECancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnE2ECancel"));
        flxE2ETop.add(flxE2EBack, btnE2ECancel);
        var lblE2EHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblE2EHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "E2E Ref",
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblE2EHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblE2EHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblE2EHeader"));
        flxE2EHeader.add(flxE2ETop, lblE2EHeader);
        var flXMainE2E = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50.33%",
            "id": "flXMainE2E",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flXMainE2E"), extendConfig({}, controller.args[1], "flXMainE2E"), extendConfig({}, controller.args[2], "flXMainE2E"));
        flXMainE2E.setDefaultUnit(kony.flex.DP);
        var flxE2EMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxE2EMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxE2EMainContainer"), extendConfig({}, controller.args[1], "flxE2EMainContainer"), extendConfig({}, controller.args[2], "flxE2EMainContainer"));
        flxE2EMainContainer.setDefaultUnit(kony.flex.DP);
        var lblE2E = new kony.ui.Label(extendConfig({
            "id": "lblE2E",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {},
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblE2E"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblE2E"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblE2E"));
        var flxE2EWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxE2EWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "12%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxE2EWrapper"), extendConfig({}, controller.args[1], "flxE2EWrapper"), extendConfig({}, controller.args[2], "flxE2EWrapper"));
        flxE2EWrapper.setDefaultUnit(kony.flex.DP);
        var txtE2E = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "height": "47dp",
            "id": "txtE2E",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Enter E2E Ref",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxt003E751px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "1dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtE2E"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtE2E"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtE2E"));
        flxE2EWrapper.add(txtE2E);
        var btnE2EContinue = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "height": "48dp",
            "id": "btnE2EContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "btnE2EContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnE2EContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnE2EContinue"));
        flxE2EMainContainer.add(lblE2E, flxE2EWrapper, btnE2EContinue);
        flXMainE2E.add(flxE2EMainContainer);
        flxE2EMain.add(flxE2EHeader, flXMainE2E);
        var flxE2EKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "213dp",
            "id": "flxE2EKeypad",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FB",
            "top": "67%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxE2EKeypad"), extendConfig({}, controller.args[1], "flxE2EKeypad"), extendConfig({}, controller.args[2], "flxE2EKeypad"));
        flxE2EKeypad.setDefaultUnit(kony.flex.DP);
        var flxE2EKeypadRowOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxE2EKeypadRowOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxE2EKeypadRowOne"), extendConfig({}, controller.args[1], "flxE2EKeypadRowOne"), extendConfig({}, controller.args[2], "flxE2EKeypadRowOne"));
        flxE2EKeypadRowOne.setDefaultUnit(kony.flex.DP);
        var btnE2EOne = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnE2EOne",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "1",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnE2EOne"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnE2EOne"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnE2EOne"));
        var btnE2ETwo = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnE2ETwo",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "2",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnE2ETwo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnE2ETwo"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnE2ETwo"));
        var btnE2EThree = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnE2EThree",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "3",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnE2EThree"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnE2EThree"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnE2EThree"));
        flxE2EKeypadRowOne.add(btnE2EOne, btnE2ETwo, btnE2EThree);
        var flxE2EKeypadRowTwo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxE2EKeypadRowTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxE2EKeypadRowTwo"), extendConfig({}, controller.args[1], "flxE2EKeypadRowTwo"), extendConfig({}, controller.args[2], "flxE2EKeypadRowTwo"));
        flxE2EKeypadRowTwo.setDefaultUnit(kony.flex.DP);
        var btnE2EFour = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnE2EFour",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "4",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnE2EFour"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnE2EFour"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnE2EFour"));
        var btnE2EFive = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnE2EFive",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "5",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnE2EFive"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnE2EFive"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnE2EFive"));
        var btnE2ESix = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnE2ESix",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "6",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnE2ESix"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnE2ESix"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnE2ESix"));
        flxE2EKeypadRowTwo.add(btnE2EFour, btnE2EFive, btnE2ESix);
        var flxE2EKeypadRowThree = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxE2EKeypadRowThree",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxE2EKeypadRowThree"), extendConfig({}, controller.args[1], "flxE2EKeypadRowThree"), extendConfig({}, controller.args[2], "flxE2EKeypadRowThree"));
        flxE2EKeypadRowThree.setDefaultUnit(kony.flex.DP);
        var btnE2ESeven = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnE2ESeven",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "7",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnE2ESeven"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnE2ESeven"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnE2ESeven"));
        var btnE2EEight = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnE2EEight",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "8",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnE2EEight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnE2EEight"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnE2EEight"));
        var btnE2ENine = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnE2ENine",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "9",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnE2ENine"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnE2ENine"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnE2ENine"));
        flxE2EKeypadRowThree.add(btnE2ESeven, btnE2EEight, btnE2ENine);
        var flxE2EKeypadRowFour = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxE2EKeypadRowFour",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxE2EKeypadRowFour"), extendConfig({}, controller.args[1], "flxE2EKeypadRowFour"), extendConfig({}, controller.args[2], "flxE2EKeypadRowFour"));
        flxE2EKeypadRowFour.setDefaultUnit(kony.flex.DP);
        var btnE2EZero = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnE2EZero",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "0",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnE2EZero"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnE2EZero"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnE2EZero"));
        var imgE2EClearKeypad = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "imgE2EClearKeypad",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 10
        }, controller.args[0], "imgE2EClearKeypad"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgE2EClearKeypad"), extendConfig({}, controller.args[2], "imgE2EClearKeypad"));
        var imgE2EClear = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgE2EClear",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "imgE2EClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgE2EClear"), extendConfig({}, controller.args[2], "imgE2EClear"));
        var btnE2EDecimalSeperator = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnE2EDecimalSeperator",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": ",",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnE2EDecimalSeperator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnE2EDecimalSeperator"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnE2EDecimalSeperator"));
        flxE2EKeypadRowFour.add(btnE2EZero, imgE2EClearKeypad, imgE2EClear, btnE2EDecimalSeperator);
        flxE2EKeypad.add(flxE2EKeypadRowOne, flxE2EKeypadRowTwo, flxE2EKeypadRowThree, flxE2EKeypadRowFour);
        flxE2E.add(flxE2EMain, flxE2EKeypad);
        var flxRequiredCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRequiredCode",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCode"), extendConfig({}, controller.args[1], "flxRequiredCode"), extendConfig({}, controller.args[2], "flxRequiredCode"));
        flxRequiredCode.setDefaultUnit(kony.flex.DP);
        var flxRequiredCodeMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "87.44%",
            "id": "flxRequiredCodeMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeMain"), extendConfig({}, controller.args[1], "flxRequiredCodeMain"), extendConfig({}, controller.args[2], "flxRequiredCodeMain"));
        flxRequiredCodeMain.setDefaultUnit(kony.flex.DP);
        var flxRequiredCodeHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRequiredCodeHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeHeader"), extendConfig({}, controller.args[1], "flxRequiredCodeHeader"), extendConfig({}, controller.args[2], "flxRequiredCodeHeader"));
        flxRequiredCodeHeader.setDefaultUnit(kony.flex.DP);
        var flxRequiredCodeTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRequiredCodeTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeTop"), extendConfig({}, controller.args[1], "flxRequiredCodeTop"), extendConfig({}, controller.args[2], "flxRequiredCodeTop"));
        flxRequiredCodeTop.setDefaultUnit(kony.flex.DP);
        var flxRequiredCodeBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxRequiredCodeBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeBack"), extendConfig({}, controller.args[1], "flxRequiredCodeBack"), extendConfig({}, controller.args[2], "flxRequiredCodeBack"));
        flxRequiredCodeBack.setDefaultUnit(kony.flex.DP);
        var imgRequireCodeBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgRequireCodeBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgRequireCodeBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgRequireCodeBack"), extendConfig({}, controller.args[2], "imgRequireCodeBack"));
        flxRequiredCodeBack.add(imgRequireCodeBack);
        var btnRequireCodeCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnRequireCodeCancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnRequireCodeCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRequireCodeCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnRequireCodeCancel"));
        flxRequiredCodeTop.add(flxRequiredCodeBack, btnRequireCodeCancel);
        var lblRequiredCodeHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblRequiredCodeHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Required Code",
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblRequiredCodeHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredCodeHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRequiredCodeHeader"));
        flxRequiredCodeHeader.add(flxRequiredCodeTop, lblRequiredCodeHeader);
        var flxRequiredCodeDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "8%",
            "id": "flxRequiredCodeDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "12dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeDescription"), extendConfig({}, controller.args[1], "flxRequiredCodeDescription"), extendConfig({}, controller.args[2], "flxRequiredCodeDescription"));
        flxRequiredCodeDescription.setDefaultUnit(kony.flex.DP);
        var lblRequiredCodeDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblRequiredCodeDescription",
            "isVisible": true,
            "right": "22dp",
            "skin": "ICSknLbl42424234px",
            "text": "You can fill any of the field provided below out of 3 (or) you can fill all the three fields as well",
            "textStyle": {},
            "width": "94%",
            "zIndex": 1
        }, controller.args[0], "lblRequiredCodeDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredCodeDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRequiredCodeDescription"));
        flxRequiredCodeDescription.add(lblRequiredCodeDescription);
        var flxRequiredCodeSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxRequiredCodeSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "12dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeSeparator"), extendConfig({}, controller.args[1], "flxRequiredCodeSeparator"), extendConfig({}, controller.args[2], "flxRequiredCodeSeparator"));
        flxRequiredCodeSeparator.setDefaultUnit(kony.flex.DP);
        flxRequiredCodeSeparator.add();
        var flxRequiredCodeContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "62%",
            "id": "flxRequiredCodeContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredCodeContainer"), extendConfig({}, controller.args[1], "flxRequiredCodeContainer"), extendConfig({}, controller.args[2], "flxRequiredCodeContainer"));
        flxRequiredCodeContainer.setDefaultUnit(kony.flex.DP);
        var flxRequiredMainContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "flxRequiredMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredMainContainer"), extendConfig({}, controller.args[1], "flxRequiredMainContainer"), extendConfig({}, controller.args[2], "flxRequiredMainContainer"));
        flxRequiredMainContainer.setDefaultUnit(kony.flex.DP);
        var flcRequiredBicSwift = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flcRequiredBicSwift",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flcRequiredBicSwift"), extendConfig({}, controller.args[1], "flcRequiredBicSwift"), extendConfig({}, controller.args[2], "flcRequiredBicSwift"));
        flcRequiredBicSwift.setDefaultUnit(kony.flex.DP);
        var lblRequiredBICSwift = new kony.ui.Label(extendConfig({
            "id": "lblRequiredBICSwift",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRequiredBICSwift"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredBICSwift"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRequiredBICSwift"));
        var flxRequiredBICwrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxRequiredBICwrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxRequiredBICwrapper"), extendConfig({}, controller.args[1], "flxRequiredBICwrapper"), extendConfig({}, controller.args[2], "flxRequiredBICwrapper"));
        flxRequiredBICwrapper.setDefaultUnit(kony.flex.DP);
        var txtRequiredBICSwift = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "ICSknTxt003E751px",
            "height": "47dp",
            "id": "txtRequiredBICSwift",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "placeholder": "Enter Intermediary BIC",
            "right": "5%",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtRequiredBICSwift"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtRequiredBICSwift"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtRequiredBICSwift"));
        flxRequiredBICwrapper.add(txtRequiredBICSwift);
        var flxRequiredBICor = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxRequiredBICor",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "14dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flxRequiredBICor"), extendConfig({}, controller.args[1], "flxRequiredBICor"), extendConfig({}, controller.args[2], "flxRequiredBICor"));
        flxRequiredBICor.setDefaultUnit(kony.flex.DP);
        var lblRequiredOr = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "19dp",
            "id": "lblRequiredOr",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727234px",
            "text": "or",
            "textStyle": {},
            "top": "4dp",
            "width": "16dp",
            "zIndex": 1
        }, controller.args[0], "lblRequiredOr"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredOr"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRequiredOr"));
        flxRequiredBICor.add(lblRequiredOr);
        var btnRequiredBICSwiftCodeLookUp = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknBtn4176A434px",
            "id": "btnRequiredBICSwiftCodeLookUp",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknBtn4176A434px",
            "text": "Look Up",
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnRequiredBICSwiftCodeLookUp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRequiredBICSwiftCodeLookUp"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnRequiredBICSwiftCodeLookUp"));
        var flxRequiredBICSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxRequiredBICSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "19dp",
            "isModalContainer": false,
            "right": "19dp",
            "skin": "ICSknFlxE3E3E3Border",
            "top": "19dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredBICSeparator"), extendConfig({}, controller.args[1], "flxRequiredBICSeparator"), extendConfig({}, controller.args[2], "flxRequiredBICSeparator"));
        flxRequiredBICSeparator.setDefaultUnit(kony.flex.DP);
        flxRequiredBICSeparator.add();
        flcRequiredBicSwift.add(lblRequiredBICSwift, flxRequiredBICwrapper, flxRequiredBICor, btnRequiredBICSwiftCodeLookUp, flxRequiredBICSeparator);
        var flxClearingCode1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxClearingCode1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxClearingCode1"), extendConfig({}, controller.args[1], "flxClearingCode1"), extendConfig({}, controller.args[2], "flxClearingCode1"));
        flxClearingCode1.setDefaultUnit(kony.flex.DP);
        var flxHeading1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxHeading1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxHeading1"), extendConfig({}, controller.args[1], "flxHeading1"), extendConfig({}, controller.args[2], "flxHeading1"));
        flxHeading1.setDefaultUnit(kony.flex.DP);
        var lblRequiredClearingCode1 = new kony.ui.Label(extendConfig({
            "id": "lblRequiredClearingCode1",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRequiredClearingCode1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredClearingCode1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRequiredClearingCode1"));
        var imgClearingCode1 = new kony.ui.Image2(extendConfig({
            "height": "22dp",
            "id": "imgClearingCode1",
            "isVisible": true,
            "right": "6%",
            "src": "infogrey_1x.png",
            "top": "10dp",
            "width": "22dp",
            "zIndex": 1
        }, controller.args[0], "imgClearingCode1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClearingCode1"), extendConfig({}, controller.args[2], "imgClearingCode1"));
        flxHeading1.add(lblRequiredClearingCode1, imgClearingCode1);
        var flxRequiredClearingCode1Wrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxRequiredClearingCode1Wrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 0,
            "isModalContainer": false,
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredClearingCode1Wrapper"), extendConfig({}, controller.args[1], "flxRequiredClearingCode1Wrapper"), extendConfig({}, controller.args[2], "flxRequiredClearingCode1Wrapper"));
        flxRequiredClearingCode1Wrapper.setDefaultUnit(kony.flex.DP);
        var txtRequiredClearingCode1 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "ICSknTxt003E751px",
            "height": "47dp",
            "id": "txtRequiredClearingCode1",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "placeholder": "Enter clearing code 1",
            "right": "5%",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtRequiredClearingCode1"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtRequiredClearingCode1"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtRequiredClearingCode1"));
        flxRequiredClearingCode1Wrapper.add(txtRequiredClearingCode1);
        var flxRequiredClearingCode1or = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxRequiredClearingCode1or",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "14dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flxRequiredClearingCode1or"), extendConfig({}, controller.args[1], "flxRequiredClearingCode1or"), extendConfig({}, controller.args[2], "flxRequiredClearingCode1or"));
        flxRequiredClearingCode1or.setDefaultUnit(kony.flex.DP);
        var lblRequiredClearingCode1Or = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "19dp",
            "id": "lblRequiredClearingCode1Or",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727234px",
            "text": "or",
            "textStyle": {},
            "top": "4dp",
            "width": "14dp",
            "zIndex": 1
        }, controller.args[0], "lblRequiredClearingCode1Or"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredClearingCode1Or"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRequiredClearingCode1Or"));
        flxRequiredClearingCode1or.add(lblRequiredClearingCode1Or);
        var btnRequiredClearingCode1LookUp = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "19dp",
            "id": "btnRequiredClearingCode1LookUp",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknBtn4176A434px",
            "text": "Look Up",
            "top": "15dp",
            "width": "53dp",
            "zIndex": 1
        }, controller.args[0], "btnRequiredClearingCode1LookUp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRequiredClearingCode1LookUp"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnRequiredClearingCode1LookUp"));
        var flxRequiredClearingCode1Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxRequiredClearingCode1Separator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "19dp",
            "isModalContainer": false,
            "right": "19dp",
            "skin": "ICSknFlxE3E3E3Border",
            "top": "19dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredClearingCode1Separator"), extendConfig({}, controller.args[1], "flxRequiredClearingCode1Separator"), extendConfig({}, controller.args[2], "flxRequiredClearingCode1Separator"));
        flxRequiredClearingCode1Separator.setDefaultUnit(kony.flex.DP);
        flxRequiredClearingCode1Separator.add();
        flxClearingCode1.add(flxHeading1, flxRequiredClearingCode1Wrapper, flxRequiredClearingCode1or, btnRequiredClearingCode1LookUp, flxRequiredClearingCode1Separator);
        var flxClearingCode2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxClearingCode2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxClearingCode2"), extendConfig({}, controller.args[1], "flxClearingCode2"), extendConfig({}, controller.args[2], "flxClearingCode2"));
        flxClearingCode2.setDefaultUnit(kony.flex.DP);
        var flxHeading2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxHeading2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxHeading2"), extendConfig({}, controller.args[1], "flxHeading2"), extendConfig({}, controller.args[2], "flxHeading2"));
        flxHeading2.setDefaultUnit(kony.flex.DP);
        var lblRequiredClearingCode2 = new kony.ui.Label(extendConfig({
            "id": "lblRequiredClearingCode2",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRequiredClearingCode2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredClearingCode2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRequiredClearingCode2"));
        var imgClearingCode2 = new kony.ui.Image2(extendConfig({
            "height": "22dp",
            "id": "imgClearingCode2",
            "isVisible": true,
            "right": "6%",
            "src": "infogrey_1x.png",
            "top": "10dp",
            "width": "22dp",
            "zIndex": 1
        }, controller.args[0], "imgClearingCode2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClearingCode2"), extendConfig({}, controller.args[2], "imgClearingCode2"));
        flxHeading2.add(lblRequiredClearingCode2, imgClearingCode2);
        var flxRequiredClearingCode2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxRequiredClearingCode2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "1dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxRequiredClearingCode2"), extendConfig({}, controller.args[1], "flxRequiredClearingCode2"), extendConfig({}, controller.args[2], "flxRequiredClearingCode2"));
        flxRequiredClearingCode2.setDefaultUnit(kony.flex.DP);
        var txtRequiredClearingCode2 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "ICSknTxt003E751px",
            "height": "47dp",
            "id": "txtRequiredClearingCode2",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "placeholder": "Enter clearing code 2",
            "right": "5%",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtRequiredClearingCode2"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtRequiredClearingCode2"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtRequiredClearingCode2"));
        flxRequiredClearingCode2.add(txtRequiredClearingCode2);
        var flxRequiredClearingCode2Or = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxRequiredClearingCode2Or",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "14dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flxRequiredClearingCode2Or"), extendConfig({}, controller.args[1], "flxRequiredClearingCode2Or"), extendConfig({}, controller.args[2], "flxRequiredClearingCode2Or"));
        flxRequiredClearingCode2Or.setDefaultUnit(kony.flex.DP);
        var lblRequiredClearingCode2Or = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "19dp",
            "id": "lblRequiredClearingCode2Or",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727234px",
            "text": "or",
            "textStyle": {},
            "top": "4dp",
            "width": "14dp",
            "zIndex": 1
        }, controller.args[0], "lblRequiredClearingCode2Or"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRequiredClearingCode2Or"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRequiredClearingCode2Or"));
        flxRequiredClearingCode2Or.add(lblRequiredClearingCode2Or);
        var btnRequiredClearingCode2LookUp = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "19dp",
            "id": "btnRequiredClearingCode2LookUp",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknBtn4176A434px",
            "text": "Look Up",
            "top": "15dp",
            "width": "53dp",
            "zIndex": 1
        }, controller.args[0], "btnRequiredClearingCode2LookUp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRequiredClearingCode2LookUp"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnRequiredClearingCode2LookUp"));
        var flxRequiredClearingCode2Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxRequiredClearingCode2Separator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "19dp",
            "isModalContainer": false,
            "right": "19dp",
            "skin": "ICSknFlxE3E3E3Border",
            "top": "19dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxRequiredClearingCode2Separator"), extendConfig({}, controller.args[1], "flxRequiredClearingCode2Separator"), extendConfig({}, controller.args[2], "flxRequiredClearingCode2Separator"));
        flxRequiredClearingCode2Separator.setDefaultUnit(kony.flex.DP);
        flxRequiredClearingCode2Separator.add();
        flxClearingCode2.add(flxHeading2, flxRequiredClearingCode2, flxRequiredClearingCode2Or, btnRequiredClearingCode2LookUp, flxRequiredClearingCode2Separator);
        flxRequiredMainContainer.add(flcRequiredBicSwift, flxClearingCode1, flxClearingCode2);
        flxRequiredCodeContainer.add(flxRequiredMainContainer);
        flxRequiredCodeMain.add(flxRequiredCodeHeader, flxRequiredCodeDescription, flxRequiredCodeSeparator, flxRequiredCodeContainer);
        var flxRequiredCodeBtncontinue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "10.84%",
            "id": "flxRequiredCodeBtncontinue",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100%"
        }, controller.args[0], "flxRequiredCodeBtncontinue"), extendConfig({}, controller.args[1], "flxRequiredCodeBtncontinue"), extendConfig({}, controller.args[2], "flxRequiredCodeBtncontinue"));
        flxRequiredCodeBtncontinue.setDefaultUnit(kony.flex.DP);
        var flxRequireCodeBtnSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxRequireCodeBtnSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "1dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxRequireCodeBtnSeparator"), extendConfig({}, controller.args[1], "flxRequireCodeBtnSeparator"), extendConfig({}, controller.args[2], "flxRequireCodeBtnSeparator"));
        flxRequireCodeBtnSeparator.setDefaultUnit(kony.flex.DP);
        flxRequireCodeBtnSeparator.add();
        var btnRequiredCodeContinue = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "48dp",
            "id": "btnRequiredCodeContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "top": "20dp",
            "width": "89.33%",
            "zIndex": 3
        }, controller.args[0], "btnRequiredCodeContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRequiredCodeContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnRequiredCodeContinue"));
        flxRequiredCodeBtncontinue.add(flxRequireCodeBtnSeparator, btnRequiredCodeContinue);
        flxRequiredCode.add(flxRequiredCodeMain, flxRequiredCodeBtncontinue);
        var flxAddAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAddAddress",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddress"), extendConfig({}, controller.args[1], "flxAddAddress"), extendConfig({}, controller.args[2], "flxAddAddress"));
        flxAddAddress.setDefaultUnit(kony.flex.DP);
        var flxAddMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxAddMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddMain"), extendConfig({}, controller.args[1], "flxAddMain"), extendConfig({}, controller.args[2], "flxAddMain"));
        flxAddMain.setDefaultUnit(kony.flex.DP);
        var flxAddAddressHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAddAddressHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddressHeader"), extendConfig({}, controller.args[1], "flxAddAddressHeader"), extendConfig({}, controller.args[2], "flxAddAddressHeader"));
        flxAddAddressHeader.setDefaultUnit(kony.flex.DP);
        var flxAddAddressHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAddAddressHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddressHeaderTop"), extendConfig({}, controller.args[1], "flxAddAddressHeaderTop"), extendConfig({}, controller.args[2], "flxAddAddressHeaderTop"));
        flxAddAddressHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxAddAddressBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxAddAddressBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddressBack"), extendConfig({}, controller.args[1], "flxAddAddressBack"), extendConfig({}, controller.args[2], "flxAddAddressBack"));
        flxAddAddressBack.setDefaultUnit(kony.flex.DP);
        var imgAddAddressBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgAddAddressBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgAddAddressBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAddAddressBack"), extendConfig({}, controller.args[2], "imgAddAddressBack"));
        flxAddAddressBack.add(imgAddAddressBack);
        var btnAddAddressCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnAddAddressCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnAddAddressCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAddAddressCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnAddAddressCancel"));
        flxAddAddressHeaderTop.add(flxAddAddressBack, btnAddAddressCancel);
        var lblAddAddressHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblAddAddressHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Add Address",
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblAddAddressHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddAddressHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddAddressHeader"));
        flxAddAddressHeader.add(flxAddAddressHeaderTop, lblAddAddressHeader);
        var flxAddAddressDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxAddAddressDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddressDescription"), extendConfig({}, controller.args[1], "flxAddAddressDescription"), extendConfig({}, controller.args[2], "flxAddAddressDescription"));
        flxAddAddressDescription.setDefaultUnit(kony.flex.DP);
        var lblAddAddressDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAddAddressDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": "Enter Beneficiary Address details (optional)",
            "textStyle": {},
            "top": "13dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "lblAddAddressDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddAddressDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddAddressDescription"));
        flxAddAddressDescription.add(lblAddAddressDescription);
        var flxAddAddressSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxAddAddressSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddAddressSeparator"), extendConfig({}, controller.args[1], "flxAddAddressSeparator"), extendConfig({}, controller.args[2], "flxAddAddressSeparator"));
        flxAddAddressSeparator.setDefaultUnit(kony.flex.DP);
        flxAddAddressSeparator.add();
        var flxAddAddressMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAddAddressMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxAddAddressMain"), extendConfig({}, controller.args[1], "flxAddAddressMain"), extendConfig({}, controller.args[2], "flxAddAddressMain"));
        flxAddAddressMain.setDefaultUnit(kony.flex.DP);
        var flxEnterAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": false,
            "height": "90%",
            "id": "flxEnterAddress",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEnterAddress"), extendConfig({}, controller.args[1], "flxEnterAddress"), extendConfig({}, controller.args[2], "flxEnterAddress"));
        flxEnterAddress.setDefaultUnit(kony.flex.DP);
        var flxResidentialAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "84%",
            "id": "flxResidentialAddress",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxResidentialAddress"), extendConfig({}, controller.args[1], "flxResidentialAddress"), extendConfig({}, controller.args[2], "flxResidentialAddress"));
        flxResidentialAddress.setDefaultUnit(kony.flex.DP);
        var flxResidentialAddressWrapper = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "96%",
            "horizontalScrollIndicator": true,
            "id": "flxResidentialAddressWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxResidentialAddressWrapper"), extendConfig({}, controller.args[1], "flxResidentialAddressWrapper"), extendConfig({}, controller.args[2], "flxResidentialAddressWrapper"));
        flxResidentialAddressWrapper.setDefaultUnit(kony.flex.DP);
        var lblAddAddressErrorMsg = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "38dp",
            "id": "lblAddAddressErrorMsg",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {},
            "top": "7dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "lblAddAddressErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddAddressErrorMsg"), extendConfig({
            "textCopyable": true,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddAddressErrorMsg"));
        var lblAddressField1 = new kony.ui.Label(extendConfig({
            "id": "lblAddressField1",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.addBen.bankName"),
            "textStyle": {},
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddressField1"));
        var flxAddressFieldValue1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "41dp",
            "id": "flxAddressFieldValue1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue1"), extendConfig({}, controller.args[1], "flxAddressFieldValue1"), extendConfig({}, controller.args[2], "flxAddressFieldValue1"));
        flxAddressFieldValue1.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue1 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtAddressFieldValue1",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue1"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue1"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue1"));
        flxAddressFieldValue1.add(txtAddressFieldValue1);
        var lblAddressField2 = new kony.ui.Label(extendConfig({
            "id": "lblAddressField2",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.addBen.bankName"),
            "textStyle": {},
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddressField2"));
        var flxAddressFieldValue2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "41dp",
            "id": "flxAddressFieldValue2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue2"), extendConfig({}, controller.args[1], "flxAddressFieldValue2"), extendConfig({}, controller.args[2], "flxAddressFieldValue2"));
        flxAddressFieldValue2.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue2 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtAddressFieldValue2",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue2"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue2"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue2"));
        flxAddressFieldValue2.add(txtAddressFieldValue2);
        var lblAddressField3 = new kony.ui.Label(extendConfig({
            "id": "lblAddressField3",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.AddressLineOne"),
            "textStyle": {},
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddressField3"));
        var flxAddressFieldValue3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "41dp",
            "id": "flxAddressFieldValue3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue3"), extendConfig({}, controller.args[1], "flxAddressFieldValue3"), extendConfig({}, controller.args[2], "flxAddressFieldValue3"));
        flxAddressFieldValue3.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue3 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtAddressFieldValue3",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue3"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue3"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue3"));
        flxAddressFieldValue3.add(txtAddressFieldValue3);
        var lblAddressField4 = new kony.ui.Label(extendConfig({
            "id": "lblAddressField4",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.AddressLineTwo"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddressField4"));
        var flxAddressFieldValue4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "41dp",
            "id": "flxAddressFieldValue4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue4"), extendConfig({}, controller.args[1], "flxAddressFieldValue4"), extendConfig({}, controller.args[2], "flxAddressFieldValue4"));
        flxAddressFieldValue4.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue4 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtAddressFieldValue4",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue4"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue4"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue4"));
        flxAddressFieldValue4.add(txtAddressFieldValue4);
        var lblAddressField5 = new kony.ui.Label(extendConfig({
            "id": "lblAddressField5",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Country"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField5"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddressField5"));
        var flxAddressFieldValue5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "41dp",
            "id": "flxAddressFieldValue5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue5"), extendConfig({}, controller.args[1], "flxAddressFieldValue5"), extendConfig({}, controller.args[2], "flxAddressFieldValue5"));
        flxAddressFieldValue5.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue5 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtAddressFieldValue5",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue5"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue5"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue5"));
        flxAddressFieldValue5.add(txtAddressFieldValue5);
        var lblAddressField6 = new kony.ui.Label(extendConfig({
            "id": "lblAddressField6",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.State"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField6"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddressField6"));
        var flxAddressFieldValue6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "41dp",
            "id": "flxAddressFieldValue6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue6"), extendConfig({}, controller.args[1], "flxAddressFieldValue6"), extendConfig({}, controller.args[2], "flxAddressFieldValue6"));
        flxAddressFieldValue6.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue6 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtAddressFieldValue6",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue6"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue6"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue6"));
        flxAddressFieldValue6.add(txtAddressFieldValue6);
        var lblAddressField7 = new kony.ui.Label(extendConfig({
            "id": "lblAddressField7",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.City"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField7"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddressField7"));
        var flxAddressFieldValue7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "41dp",
            "id": "flxAddressFieldValue7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue7"), extendConfig({}, controller.args[1], "flxAddressFieldValue7"), extendConfig({}, controller.args[2], "flxAddressFieldValue7"));
        flxAddressFieldValue7.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue7 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtAddressFieldValue7",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue7"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue7"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue7"));
        flxAddressFieldValue7.add(txtAddressFieldValue7);
        var lblAddressField8 = new kony.ui.Label(extendConfig({
            "id": "lblAddressField8",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.ZipCode"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressField8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressField8"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddressField8"));
        var flxAddressFieldValue8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "41dp",
            "id": "flxAddressFieldValue8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxAddressFieldValue8"), extendConfig({}, controller.args[1], "flxAddressFieldValue8"), extendConfig({}, controller.args[2], "flxAddressFieldValue8"));
        flxAddressFieldValue8.setDefaultUnit(kony.flex.DP);
        var txtAddressFieldValue8 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "49.96%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtAddressFieldValue8",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtAddressFieldValue8"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtAddressFieldValue8"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtAddressFieldValue8"));
        flxAddressFieldValue8.add(txtAddressFieldValue8);
        var flxSpaceResidentialAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15dp",
            "id": "flxSpaceResidentialAddress",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSpaceResidentialAddress"), extendConfig({}, controller.args[1], "flxSpaceResidentialAddress"), extendConfig({}, controller.args[2], "flxSpaceResidentialAddress"));
        flxSpaceResidentialAddress.setDefaultUnit(kony.flex.DP);
        flxSpaceResidentialAddress.add();
        flxResidentialAddressWrapper.add(lblAddAddressErrorMsg, lblAddressField1, flxAddressFieldValue1, lblAddressField2, flxAddressFieldValue2, lblAddressField3, flxAddressFieldValue3, lblAddressField4, flxAddressFieldValue4, lblAddressField5, flxAddressFieldValue5, lblAddressField6, flxAddressFieldValue6, lblAddressField7, flxAddressFieldValue7, lblAddressField8, flxAddressFieldValue8, flxSpaceResidentialAddress);
        flxResidentialAddress.add(flxResidentialAddressWrapper);
        flxEnterAddress.add(flxResidentialAddress);
        flxAddAddressMain.add(flxEnterAddress);
        flxAddMain.add(flxAddAddressHeader, flxAddAddressDescription, flxAddAddressSeparator, flxAddAddressMain);
        var flxBtnSave = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "10.84%",
            "id": "flxBtnSave",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "width": "100%"
        }, controller.args[0], "flxBtnSave"), extendConfig({}, controller.args[1], "flxBtnSave"), extendConfig({}, controller.args[2], "flxBtnSave"));
        flxBtnSave.setDefaultUnit(kony.flex.DP);
        var flxbtnSaveseparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxbtnSaveseparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "1dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxbtnSaveseparator"), extendConfig({}, controller.args[1], "flxbtnSaveseparator"), extendConfig({}, controller.args[2], "flxbtnSaveseparator"));
        flxbtnSaveseparator.setDefaultUnit(kony.flex.DP);
        flxbtnSaveseparator.add();
        var btnSave = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "centerY": "50%",
            "height": "48dp",
            "id": "btnSave",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICBtn003E7534px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "top": "20dp",
            "width": "89.33%",
            "zIndex": 3
        }, controller.args[0], "btnSave"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSave"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSave"));
        flxBtnSave.add(flxbtnSaveseparator, btnSave);
        flxAddAddress.add(flxAddMain, flxBtnSave);
        var flxBICSwift = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBICSwift",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxBICSwift"), extendConfig({}, controller.args[1], "flxBICSwift"), extendConfig({}, controller.args[2], "flxBICSwift"));
        flxBICSwift.setDefaultUnit(kony.flex.DP);
        var flxBICSwiftCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBICSwiftCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBICSwiftCode"), extendConfig({}, controller.args[1], "flxBICSwiftCode"), extendConfig({}, controller.args[2], "flxBICSwiftCode"));
        flxBICSwiftCode.setDefaultUnit(kony.flex.DP);
        var flxBICSwiftCodeHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxBICSwiftCodeHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBICSwiftCodeHeader"), extendConfig({}, controller.args[1], "flxBICSwiftCodeHeader"), extendConfig({}, controller.args[2], "flxBICSwiftCodeHeader"));
        flxBICSwiftCodeHeader.setDefaultUnit(kony.flex.DP);
        var flxBICSwiftCodeTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxBICSwiftCodeTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBICSwiftCodeTop"), extendConfig({}, controller.args[1], "flxBICSwiftCodeTop"), extendConfig({}, controller.args[2], "flxBICSwiftCodeTop"));
        flxBICSwiftCodeTop.setDefaultUnit(kony.flex.DP);
        var flxBICSwiftCodeBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxBICSwiftCodeBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxBICSwiftCodeBack"), extendConfig({}, controller.args[1], "flxBICSwiftCodeBack"), extendConfig({}, controller.args[2], "flxBICSwiftCodeBack"));
        flxBICSwiftCodeBack.setDefaultUnit(kony.flex.DP);
        var imgBICSwiftCodeBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgBICSwiftCodeBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgBICSwiftCodeBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBICSwiftCodeBack"), extendConfig({}, controller.args[2], "imgBICSwiftCodeBack"));
        flxBICSwiftCodeBack.add(imgBICSwiftCodeBack);
        var btnBICSwiftCodeCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnBICSwiftCodeCancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnBICSwiftCodeCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnBICSwiftCodeCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnBICSwiftCodeCancel"));
        flxBICSwiftCodeTop.add(flxBICSwiftCodeBack, btnBICSwiftCodeCancel);
        var lblBICSwiftCodeHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblBICSwiftCodeHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "BIC/SWIFT Code",
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblBICSwiftCodeHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBICSwiftCodeHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBICSwiftCodeHeader"));
        flxBICSwiftCodeHeader.add(flxBICSwiftCodeTop, lblBICSwiftCodeHeader);
        var flxBICSwiftCodeDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxBICSwiftCodeDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBICSwiftCodeDescription"), extendConfig({}, controller.args[1], "flxBICSwiftCodeDescription"), extendConfig({}, controller.args[2], "flxBICSwiftCodeDescription"));
        flxBICSwiftCodeDescription.setDefaultUnit(kony.flex.DP);
        var lblBICSwiftCodeDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblBICSwiftCodeDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": "Please enter BIC/SWIFT Code",
            "textStyle": {},
            "top": "13dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBICSwiftCodeDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBICSwiftCodeDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBICSwiftCodeDescription"));
        flxBICSwiftCodeDescription.add(lblBICSwiftCodeDescription);
        var flxBICSwiftCodeSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxBICSwiftCodeSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBICSwiftCodeSeparator"), extendConfig({}, controller.args[1], "flxBICSwiftCodeSeparator"), extendConfig({}, controller.args[2], "flxBICSwiftCodeSeparator"));
        flxBICSwiftCodeSeparator.setDefaultUnit(kony.flex.DP);
        flxBICSwiftCodeSeparator.add();
        var flxBICSwiftCodeMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "39.41%",
            "id": "flxBICSwiftCodeMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBICSwiftCodeMain"), extendConfig({}, controller.args[1], "flxBICSwiftCodeMain"), extendConfig({}, controller.args[2], "flxBICSwiftCodeMain"));
        flxBICSwiftCodeMain.setDefaultUnit(kony.flex.DP);
        var flxBICSwiftCodeMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBICSwiftCodeMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxBICSwiftCodeMainContainer"), extendConfig({}, controller.args[1], "flxBICSwiftCodeMainContainer"), extendConfig({}, controller.args[2], "flxBICSwiftCodeMainContainer"));
        flxBICSwiftCodeMainContainer.setDefaultUnit(kony.flex.DP);
        var lblBICSwiftCode = new kony.ui.Label(extendConfig({
            "id": "lblBICSwiftCode",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
            "textStyle": {},
            "top": "7%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBICSwiftCode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBICSwiftCode"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBICSwiftCode"));
        var flxBICSwiftCodeWrappper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxBICSwiftCodeWrappper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "0dp",
            "top": "48dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBICSwiftCodeWrappper"), extendConfig({}, controller.args[1], "flxBICSwiftCodeWrappper"), extendConfig({}, controller.args[2], "flxBICSwiftCodeWrappper"));
        flxBICSwiftCodeWrappper.setDefaultUnit(kony.flex.DP);
        var txtBICSwiftCode = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "47dp",
            "id": "txtBICSwiftCode",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "placeholder": "Enter Intermediary BIC",
            "right": "5%",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtBICSwiftCode"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtBICSwiftCode"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtBICSwiftCode"));
        flxBICSwiftCodeWrappper.add(txtBICSwiftCode);
        var flxBICor = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxBICor",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "114dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flxBICor"), extendConfig({}, controller.args[1], "flxBICor"), extendConfig({}, controller.args[2], "flxBICor"));
        flxBICor.setDefaultUnit(kony.flex.DP);
        var lblOr = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "19dp",
            "id": "lblOr",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727234px",
            "text": "or",
            "textStyle": {},
            "top": "4dp",
            "width": "16dp",
            "zIndex": 1
        }, controller.args[0], "lblOr"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOr"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblOr"));
        flxBICor.add(lblOr);
        var btnBICSwiftCodeLookUp = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknBtn4176A434px",
            "height": "19dp",
            "id": "btnBICSwiftCodeLookUp",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknBtn4176A434px",
            "text": "Look Up",
            "top": "157dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnBICSwiftCodeLookUp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnBICSwiftCodeLookUp"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnBICSwiftCodeLookUp"));
        var btnBICSwiftCodeContinue = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "48dp",
            "id": "btnBICSwiftCodeContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "btnBICSwiftCodeContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnBICSwiftCodeContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnBICSwiftCodeContinue"));
        flxBICSwiftCodeMainContainer.add(lblBICSwiftCode, flxBICSwiftCodeWrappper, flxBICor, btnBICSwiftCodeLookUp, btnBICSwiftCodeContinue);
        flxBICSwiftCodeMain.add(flxBICSwiftCodeMainContainer);
        flxBICSwiftCode.add(flxBICSwiftCodeHeader, flxBICSwiftCodeDescription, flxBICSwiftCodeSeparator, flxBICSwiftCodeMain);
        flxBICSwift.add(flxBICSwiftCode);
        var flxSwiftBICSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSwiftBICSearch",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSwiftBICSearch"), extendConfig({}, controller.args[1], "flxSwiftBICSearch"), extendConfig({}, controller.args[2], "flxSwiftBICSearch"));
        flxSwiftBICSearch.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "87.44%",
            "id": "flxSwiftBICSearchMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchMainContainer"), extendConfig({}, controller.args[1], "flxSwiftBICSearchMainContainer"), extendConfig({}, controller.args[2], "flxSwiftBICSearchMainContainer"));
        flxSwiftBICSearchMainContainer.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSwiftBICSearchHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchHeader"), extendConfig({}, controller.args[1], "flxSwiftBICSearchHeader"), extendConfig({}, controller.args[2], "flxSwiftBICSearchHeader"));
        flxSwiftBICSearchHeader.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSwiftBICSearchHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchHeaderTop"), extendConfig({}, controller.args[1], "flxSwiftBICSearchHeaderTop"), extendConfig({}, controller.args[2], "flxSwiftBICSearchHeaderTop"));
        flxSwiftBICSearchHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxSwiftBICSearchBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchBack"), extendConfig({}, controller.args[1], "flxSwiftBICSearchBack"), extendConfig({}, controller.args[2], "flxSwiftBICSearchBack"));
        flxSwiftBICSearchBack.setDefaultUnit(kony.flex.DP);
        var imgSwiftBICSearchBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgSwiftBICSearchBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgSwiftBICSearchBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSwiftBICSearchBack"), extendConfig({}, controller.args[2], "imgSwiftBICSearchBack"));
        flxSwiftBICSearchBack.add(imgSwiftBICSearchBack);
        var btnSwiftBICSearchCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnSwiftBICSearchCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnSwiftBICSearchCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSwiftBICSearchCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnSwiftBICSearchCancel"));
        flxSwiftBICSearchHeaderTop.add(flxSwiftBICSearchBack, btnSwiftBICSearchCancel);
        var lblSwiftBICSearchHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblSwiftBICSearchHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "SWIFT BIC Search",
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSwiftBICSearchHeader"));
        flxSwiftBICSearchHeader.add(flxSwiftBICSearchHeaderTop, lblSwiftBICSearchHeader);
        var flxSwiftBICSearchDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxSwiftBICSearchDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchDescription"), extendConfig({}, controller.args[1], "flxSwiftBICSearchDescription"), extendConfig({}, controller.args[2], "flxSwiftBICSearchDescription"));
        flxSwiftBICSearchDescription.setDefaultUnit(kony.flex.DP);
        var lblSwiftBICSearchDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblSwiftBICSearchDescription",
            "isVisible": true,
            "left": "23dp",
            "right": "22dp",
            "skin": "ICSknLbl42424234px",
            "text": "To find your SWIFT code please enter your bank details",
            "textStyle": {},
            "top": "13dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSwiftBICSearchDescription"));
        flxSwiftBICSearchDescription.add(lblSwiftBICSearchDescription);
        var flxSwiftBICSearchSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxSwiftBICSearchSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchSeparator"), extendConfig({}, controller.args[1], "flxSwiftBICSearchSeparator"), extendConfig({}, controller.args[2], "flxSwiftBICSearchSeparator"));
        flxSwiftBICSearchSeparator.setDefaultUnit(kony.flex.DP);
        flxSwiftBICSearchSeparator.add();
        var flxSwiftBICSearchMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSwiftBICSearchMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSwiftBICSearchMain"), extendConfig({}, controller.args[1], "flxSwiftBICSearchMain"), extendConfig({}, controller.args[2], "flxSwiftBICSearchMain"));
        flxSwiftBICSearchMain.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": false,
            "height": "90%",
            "id": "flxSwiftBICSearchDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchDetails"), extendConfig({}, controller.args[1], "flxSwiftBICSearchDetails"), extendConfig({}, controller.args[2], "flxSwiftBICSearchDetails"));
        flxSwiftBICSearchDetails.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "84%",
            "id": "flxSwiftBICSearchContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxSwiftBICSearchContainer"), extendConfig({}, controller.args[1], "flxSwiftBICSearchContainer"), extendConfig({}, controller.args[2], "flxSwiftBICSearchContainer"));
        flxSwiftBICSearchContainer.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchScrollContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "93%",
            "horizontalScrollIndicator": true,
            "id": "flxSwiftBICSearchScrollContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchScrollContainer"), extendConfig({}, controller.args[1], "flxSwiftBICSearchScrollContainer"), extendConfig({}, controller.args[2], "flxSwiftBICSearchScrollContainer"));
        flxSwiftBICSearchScrollContainer.setDefaultUnit(kony.flex.DP);
        var lblSwiftBICSearchField1 = new kony.ui.Label(extendConfig({
            "id": "lblSwiftBICSearchField1",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.State"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchField1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchField1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSwiftBICSearchField1"));
        var flxSwiftBICSearchField1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "41dp",
            "id": "flxSwiftBICSearchField1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxSwiftBICSearchField1"), extendConfig({}, controller.args[1], "flxSwiftBICSearchField1"), extendConfig({}, controller.args[2], "flxSwiftBICSearchField1"));
        flxSwiftBICSearchField1.setDefaultUnit(kony.flex.DP);
        var txtSwiftBICSearchValue1 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtSwiftBICSearchValue1",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtSwiftBICSearchValue1"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtSwiftBICSearchValue1"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtSwiftBICSearchValue1"));
        flxSwiftBICSearchField1.add(txtSwiftBICSearchValue1);
        var lblSwiftBICSearchField2 = new kony.ui.Label(extendConfig({
            "id": "lblSwiftBICSearchField2",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.ZipCode"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchField2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchField2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSwiftBICSearchField2"));
        var flxSwiftBICSearchField2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "41dp",
            "id": "flxSwiftBICSearchField2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxSwiftBICSearchField2"), extendConfig({}, controller.args[1], "flxSwiftBICSearchField2"), extendConfig({}, controller.args[2], "flxSwiftBICSearchField2"));
        flxSwiftBICSearchField2.setDefaultUnit(kony.flex.DP);
        var txtSwiftBICSearchValue2 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "49.96%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtSwiftBICSearchValue2",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtSwiftBICSearchValue2"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtSwiftBICSearchValue2"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtSwiftBICSearchValue2"));
        flxSwiftBICSearchField2.add(txtSwiftBICSearchValue2);
        var lblSwiftBICSearchField3 = new kony.ui.Label(extendConfig({
            "id": "lblSwiftBICSearchField3",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.City"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchField3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchField3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSwiftBICSearchField3"));
        var flxSwiftBICSearchField3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "41dp",
            "id": "flxSwiftBICSearchField3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxSwiftBICSearchField3"), extendConfig({}, controller.args[1], "flxSwiftBICSearchField3"), extendConfig({}, controller.args[2], "flxSwiftBICSearchField3"));
        flxSwiftBICSearchField3.setDefaultUnit(kony.flex.DP);
        var txtSwiftBICSearchValue3 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtSwiftBICSearchValue3",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtSwiftBICSearchValue3"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtSwiftBICSearchValue3"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtSwiftBICSearchValue3"));
        flxSwiftBICSearchField3.add(txtSwiftBICSearchValue3);
        var lblSwiftBICSearchField4 = new kony.ui.Label(extendConfig({
            "id": "lblSwiftBICSearchField4",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Country"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchField4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchField4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSwiftBICSearchField4"));
        var flxSwiftBICSearchField4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "41dp",
            "id": "flxSwiftBICSearchField4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxSwiftBICSearchField4"), extendConfig({}, controller.args[1], "flxSwiftBICSearchField4"), extendConfig({}, controller.args[2], "flxSwiftBICSearchField4"));
        flxSwiftBICSearchField4.setDefaultUnit(kony.flex.DP);
        var txtSwiftBICSearchValue4 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "tbxBlueFocus",
            "height": "40dp",
            "id": "txtSwiftBICSearchValue4",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.cardManage.enterHere"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 3
        }, controller.args[0], "txtSwiftBICSearchValue4"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [10, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtSwiftBICSearchValue4"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtSwiftBICSearchValue4"));
        flxSwiftBICSearchField4.add(txtSwiftBICSearchValue4);
        flxSwiftBICSearchScrollContainer.add(lblSwiftBICSearchField1, flxSwiftBICSearchField1, lblSwiftBICSearchField2, flxSwiftBICSearchField2, lblSwiftBICSearchField3, flxSwiftBICSearchField3, lblSwiftBICSearchField4, flxSwiftBICSearchField4);
        flxSwiftBICSearchContainer.add(flxSwiftBICSearchScrollContainer);
        flxSwiftBICSearchDetails.add(flxSwiftBICSearchContainer);
        flxSwiftBICSearchMain.add(flxSwiftBICSearchDetails);
        flxSwiftBICSearchMainContainer.add(flxSwiftBICSearchHeader, flxSwiftBICSearchDescription, flxSwiftBICSearchSeparator, flxSwiftBICSearchMain);
        var flxBtnGetDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "10.84%",
            "id": "flxBtnGetDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100%"
        }, controller.args[0], "flxBtnGetDetails"), extendConfig({}, controller.args[1], "flxBtnGetDetails"), extendConfig({}, controller.args[2], "flxBtnGetDetails"));
        flxBtnGetDetails.setDefaultUnit(kony.flex.DP);
        var flxGetDetailsSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxGetDetailsSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "1dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxGetDetailsSeparator"), extendConfig({}, controller.args[1], "flxGetDetailsSeparator"), extendConfig({}, controller.args[2], "flxGetDetailsSeparator"));
        flxGetDetailsSeparator.setDefaultUnit(kony.flex.DP);
        flxGetDetailsSeparator.add();
        var btnGetDetails = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "48dp",
            "id": "btnGetDetails",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtnInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "top": "20dp",
            "width": "89.33%",
            "zIndex": 3
        }, controller.args[0], "btnGetDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnGetDetails"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnGetDetails"));
        flxBtnGetDetails.add(flxGetDetailsSeparator, btnGetDetails);
        flxSwiftBICSearch.add(flxSwiftBICSearchMainContainer, flxBtnGetDetails);
        var flxSwiftBICSearchList = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSwiftBICSearchList",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSwiftBICSearchList"), extendConfig({}, controller.args[1], "flxSwiftBICSearchList"), extendConfig({}, controller.args[2], "flxSwiftBICSearchList"));
        flxSwiftBICSearchList.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchMainList = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80%",
            "id": "flxSwiftBICSearchMainList",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchMainList"), extendConfig({}, controller.args[1], "flxSwiftBICSearchMainList"), extendConfig({}, controller.args[2], "flxSwiftBICSearchMainList"));
        flxSwiftBICSearchMainList.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchListHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSwiftBICSearchListHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchListHeader"), extendConfig({}, controller.args[1], "flxSwiftBICSearchListHeader"), extendConfig({}, controller.args[2], "flxSwiftBICSearchListHeader"));
        flxSwiftBICSearchListHeader.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSwiftBICSearchTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchTop"), extendConfig({}, controller.args[1], "flxSwiftBICSearchTop"), extendConfig({}, controller.args[2], "flxSwiftBICSearchTop"));
        flxSwiftBICSearchTop.setDefaultUnit(kony.flex.DP);
        var flxSwiftBICSearchListBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxSwiftBICSearchListBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchListBack"), extendConfig({}, controller.args[1], "flxSwiftBICSearchListBack"), extendConfig({}, controller.args[2], "flxSwiftBICSearchListBack"));
        flxSwiftBICSearchListBack.setDefaultUnit(kony.flex.DP);
        var imgSwiftBICSearchListBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgSwiftBICSearchListBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgSwiftBICSearchListBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSwiftBICSearchListBack"), extendConfig({}, controller.args[2], "imgSwiftBICSearchListBack"));
        flxSwiftBICSearchListBack.add(imgSwiftBICSearchListBack);
        var btnSwiftBICSearchListCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnSwiftBICSearchListCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnSwiftBICSearchListCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSwiftBICSearchListCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnSwiftBICSearchListCancel"));
        flxSwiftBICSearchTop.add(flxSwiftBICSearchListBack, btnSwiftBICSearchListCancel);
        var lblSwiftBICSearchListHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblSwiftBICSearchListHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "SWIFT BIC Search",
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchListHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchListHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSwiftBICSearchListHeader"));
        flxSwiftBICSearchListHeader.add(flxSwiftBICSearchTop, lblSwiftBICSearchListHeader);
        var flxSwiftBICSearchListDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "58dp",
            "id": "flxSwiftBICSearchListDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchListDescription"), extendConfig({}, controller.args[1], "flxSwiftBICSearchListDescription"), extendConfig({}, controller.args[2], "flxSwiftBICSearchListDescription"));
        flxSwiftBICSearchListDescription.setDefaultUnit(kony.flex.DP);
        var lblSwiftBICSearchListDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblSwiftBICSearchListDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": "Please select the preferred details",
            "textStyle": {},
            "top": "13dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "lblSwiftBICSearchListDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSwiftBICSearchListDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSwiftBICSearchListDescription"));
        flxSwiftBICSearchListDescription.add(lblSwiftBICSearchListDescription);
        var flxSwiftBICSearchListSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "3dp",
            "id": "flxSwiftBICSearchListSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchListSeparator"), extendConfig({}, controller.args[1], "flxSwiftBICSearchListSeparator"), extendConfig({}, controller.args[2], "flxSwiftBICSearchListSeparator"));
        flxSwiftBICSearchListSeparator.setDefaultUnit(kony.flex.DP);
        flxSwiftBICSearchListSeparator.add();
        var flxSwiftBICSearchListScroll = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "66.77%",
            "horizontalScrollIndicator": true,
            "id": "flxSwiftBICSearchListScroll",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "1dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSwiftBICSearchListScroll"), extendConfig({}, controller.args[1], "flxSwiftBICSearchListScroll"), extendConfig({}, controller.args[2], "flxSwiftBICSearchListScroll"));
        flxSwiftBICSearchListScroll.setDefaultUnit(kony.flex.DP);
        var segSwiftBICSearchList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }, {
                "imgSwiftBICSearchListTick": "selectedtick.png",
                "lblBICSwiftBICSearchListDescription": "Bank of Moscow, Lake Gardens, Odintsovo, Block 1, Moscow, Russia",
                "lblSwiftBICSearchListHeader": "MCRBRUMM123",
                "lblSwiftBICSearchListName": "BIC/ SWIFT :"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segSwiftBICSearchList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowTemplate": "flxSegSwiftBICSearchList",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "1dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxSegSwiftBICSearchList": "flxSegSwiftBICSearchList",
                "flxSwiftBICSearchListOptions": "flxSwiftBICSearchListOptions",
                "flxSwiftBICSearchOptions": "flxSwiftBICSearchOptions",
                "imgSwiftBICSearchListTick": "imgSwiftBICSearchListTick",
                "lblBICSwiftBICSearchListDescription": "lblBICSwiftBICSearchListDescription",
                "lblSwiftBICSearchListHeader": "lblSwiftBICSearchListHeader",
                "lblSwiftBICSearchListName": "lblSwiftBICSearchListName"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segSwiftBICSearchList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segSwiftBICSearchList"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segSwiftBICSearchList"));
        flxSwiftBICSearchListScroll.add(segSwiftBICSearchList);
        var flxNoSearchResult = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60%",
            "id": "flxNoSearchResult",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNoSearchResult"), extendConfig({}, controller.args[1], "flxNoSearchResult"), extendConfig({}, controller.args[2], "flxNoSearchResult"));
        flxNoSearchResult.setDefaultUnit(kony.flex.DP);
        var lblNoResults = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "40dp",
            "id": "lblNoResults",
            "isVisible": true,
            "left": "32dp",
            "right": "31dp",
            "skin": "ICSknLbl72727236px",
            "text": "No search result. Please try again with another keyword",
            "textStyle": {},
            "top": "20.81%",
            "width": "75%",
            "zIndex": 1
        }, controller.args[0], "lblNoResults"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoResults"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNoResults"));
        flxNoSearchResult.add(lblNoResults);
        flxSwiftBICSearchMainList.add(flxSwiftBICSearchListHeader, flxSwiftBICSearchListDescription, flxSwiftBICSearchListSeparator, flxSwiftBICSearchListScroll, flxNoSearchResult);
        var flxSwiftBICSearchButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "132dp",
            "id": "flxSwiftBICSearchButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "81.5%",
            "width": "100%"
        }, controller.args[0], "flxSwiftBICSearchButtons"), extendConfig({}, controller.args[1], "flxSwiftBICSearchButtons"), extendConfig({}, controller.args[2], "flxSwiftBICSearchButtons"));
        flxSwiftBICSearchButtons.setDefaultUnit(kony.flex.DP);
        var btnUseSwift = new kony.ui.Button(extendConfig({
            "bottom": "82dp",
            "centerX": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "48dp",
            "id": "btnUseSwift",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICBtn003E7534px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "89.33%",
            "zIndex": 3
        }, controller.args[0], "btnUseSwift"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnUseSwift"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnUseSwift"));
        var btnSearchAgain = new kony.ui.Button(extendConfig({
            "bottom": "21dp",
            "centerX": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "48dp",
            "id": "btnSearchAgain",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtn003E75Bffffff34px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "89.33%",
            "zIndex": 3
        }, controller.args[0], "btnSearchAgain"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSearchAgain"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSearchAgain"));
        flxSwiftBICSearchButtons.add(btnUseSwift, btnSearchAgain);
        flxSwiftBICSearchList.add(flxSwiftBICSearchMainList, flxSwiftBICSearchButtons);
        var flxPayeeNicknameSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPayeeNicknameSuccess",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_f851b052deea419281ae7a6c2a4d937d,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPayeeNicknameSuccess"), extendConfig({}, controller.args[1], "flxPayeeNicknameSuccess"), extendConfig({}, controller.args[2], "flxPayeeNicknameSuccess"));
        flxPayeeNicknameSuccess.setDefaultUnit(kony.flex.DP);
        var flxPayeeNicknameSuccessMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "81.53%",
            "id": "flxPayeeNicknameSuccessMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNicknameSuccessMain"), extendConfig({}, controller.args[1], "flxPayeeNicknameSuccessMain"), extendConfig({}, controller.args[2], "flxPayeeNicknameSuccessMain"));
        flxPayeeNicknameSuccessMain.setDefaultUnit(kony.flex.DP);
        var flxPayeeNicknameSuccessHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "120dp",
            "id": "flxPayeeNicknameSuccessHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNicknameSuccessHeader"), extendConfig({}, controller.args[1], "flxPayeeNicknameSuccessHeader"), extendConfig({}, controller.args[2], "flxPayeeNicknameSuccessHeader"));
        flxPayeeNicknameSuccessHeader.setDefaultUnit(kony.flex.DP);
        var flxPayeeNicknameSuccessTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPayeeNicknameSuccessTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNicknameSuccessTop"), extendConfig({}, controller.args[1], "flxPayeeNicknameSuccessTop"), extendConfig({}, controller.args[2], "flxPayeeNicknameSuccessTop"));
        flxPayeeNicknameSuccessTop.setDefaultUnit(kony.flex.DP);
        var flxPayeeNicknameSuccessBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxPayeeNicknameSuccessBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeNicknameSuccessBack"), extendConfig({}, controller.args[1], "flxPayeeNicknameSuccessBack"), extendConfig({}, controller.args[2], "flxPayeeNicknameSuccessBack"));
        flxPayeeNicknameSuccessBack.setDefaultUnit(kony.flex.DP);
        var imgPayeeNicknameSuccessBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgPayeeNicknameSuccessBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgPayeeNicknameSuccessBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPayeeNicknameSuccessBack"), extendConfig({}, controller.args[2], "imgPayeeNicknameSuccessBack"));
        flxPayeeNicknameSuccessBack.add(imgPayeeNicknameSuccessBack);
        var btnPayeeNicknameSuccessCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnPayeeNicknameSuccessCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnPayeeNicknameSuccessCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPayeeNicknameSuccessCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnPayeeNicknameSuccessCancel"));
        flxPayeeNicknameSuccessTop.add(flxPayeeNicknameSuccessBack, btnPayeeNicknameSuccessCancel);
        var blPayeeNicknameSuccessHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "blPayeeNicknameSuccessHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Payee Nickname",
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "blPayeeNicknameSuccessHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "blPayeeNicknameSuccessHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "blPayeeNicknameSuccessHeader"));
        flxPayeeNicknameSuccessHeader.add(flxPayeeNicknameSuccessTop, blPayeeNicknameSuccessHeader);
        var flxPayeeNicknameSuccessMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "81.16%",
            "id": "flxPayeeNicknameSuccessMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxPayeeNicknameSuccessMainContainer"), extendConfig({}, controller.args[1], "flxPayeeNicknameSuccessMainContainer"), extendConfig({}, controller.args[2], "flxPayeeNicknameSuccessMainContainer"));
        flxPayeeNicknameSuccessMainContainer.setDefaultUnit(kony.flex.DP);
        var flximgSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flximgSuccess",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "100dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flximgSuccess"), extendConfig({}, controller.args[1], "flximgSuccess"), extendConfig({}, controller.args[2], "flximgSuccess"));
        flximgSuccess.setDefaultUnit(kony.flex.DP);
        var imgSuccess = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgSuccess",
            "isVisible": true,
            "left": "152dp",
            "right": "152dp",
            "src": "selectgoal.png",
            "top": 0,
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgSuccess"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSuccess"), extendConfig({}, controller.args[2], "imgSuccess"));
        flximgSuccess.add(imgSuccess);
        var flxPayeeSuccessMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "85dp",
            "id": "flxPayeeSuccessMessage",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "14dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayeeSuccessMessage"), extendConfig({}, controller.args[1], "flxPayeeSuccessMessage"), extendConfig({}, controller.args[2], "flxPayeeSuccessMessage"));
        flxPayeeSuccessMessage.setDefaultUnit(kony.flex.DP);
        var lblSavedSuccess = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "31dp",
            "id": "lblSavedSuccess",
            "isVisible": true,
            "left": "30dp",
            "right": "30dp",
            "skin": "ICSknlbl000000SB55px",
            "text": "Saved Successfully",
            "textStyle": {},
            "top": "0dp",
            "width": "83%",
            "zIndex": 1
        }, controller.args[0], "lblSavedSuccess"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSavedSuccess"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSavedSuccess"));
        var lblSavedSuccessDescription = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "40dp",
            "id": "lblSavedSuccessDescription",
            "isVisible": true,
            "left": "51dp",
            "right": 50,
            "skin": "ICSknLbl72727236px",
            "text": "Payee Nickname saved successfully for future transaction",
            "textStyle": {},
            "top": "0dp",
            "width": "73%",
            "zIndex": 1
        }, controller.args[0], "lblSavedSuccessDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSavedSuccessDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSavedSuccessDescription"));
        flxPayeeSuccessMessage.add(lblSavedSuccess, lblSavedSuccessDescription);
        var flxNewTransferButtons = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxNewTransferButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "27dp",
            "isModalContainer": false,
            "top": "102dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNewTransferButtons"), extendConfig({}, controller.args[1], "flxNewTransferButtons"), extendConfig({}, controller.args[2], "flxNewTransferButtons"));
        flxNewTransferButtons.setDefaultUnit(kony.flex.DP);
        flxNewTransferButtons.add();
        flxPayeeNicknameSuccessMainContainer.add(flximgSuccess, flxPayeeSuccessMessage, flxNewTransferButtons);
        flxPayeeNicknameSuccessMain.add(flxPayeeNicknameSuccessHeader, flxPayeeNicknameSuccessMainContainer);
        var btnNewTransfer = new kony.ui.Button(extendConfig({
            "bottom": "82dp",
            "centerX": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "48dp",
            "id": "btnNewTransfer",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICBtn003E7534px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "89.33%",
            "zIndex": 3
        }, controller.args[0], "btnNewTransfer"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNewTransfer"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNewTransfer"));
        var btnTransferActivities = new kony.ui.Button(extendConfig({
            "bottom": "21dp",
            "centerX": "50%",
            "focusSkin": "sknBtn055BAF26px",
            "height": "48dp",
            "id": "btnTransferActivities",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtn003E75Bffffff34px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "89.33%",
            "zIndex": 3
        }, controller.args[0], "btnTransferActivities"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTransferActivities"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnTransferActivities"));
        flxPayeeNicknameSuccess.add(flxPayeeNicknameSuccessMain, btnNewTransfer, btnTransferActivities);
        var flxDate = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDate",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDate"), extendConfig({}, controller.args[1], "flxDate"), extendConfig({}, controller.args[2], "flxDate"));
        flxDate.setDefaultUnit(kony.flex.DP);
        var flxDateMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80%",
            "id": "flxDateMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDateMain"), extendConfig({}, controller.args[1], "flxDateMain"), extendConfig({}, controller.args[2], "flxDateMain"));
        flxDateMain.setDefaultUnit(kony.flex.DP);
        var flxDateHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDateHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDateHeader"), extendConfig({}, controller.args[1], "flxDateHeader"), extendConfig({}, controller.args[2], "flxDateHeader"));
        flxDateHeader.setDefaultUnit(kony.flex.DP);
        var flxSendOnTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSendOnTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSendOnTop"), extendConfig({}, controller.args[1], "flxSendOnTop"), extendConfig({}, controller.args[2], "flxSendOnTop"));
        flxSendOnTop.setDefaultUnit(kony.flex.DP);
        var flxSendOnBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxSendOnBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxSendOnBack"), extendConfig({}, controller.args[1], "flxSendOnBack"), extendConfig({}, controller.args[2], "flxSendOnBack"));
        flxSendOnBack.setDefaultUnit(kony.flex.DP);
        var imgSendOnBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgSendOnBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgSendOnBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSendOnBack"), extendConfig({}, controller.args[2], "imgSendOnBack"));
        flxSendOnBack.add(imgSendOnBack);
        var btnSendOnCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnSendOnCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnSendOnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSendOnCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnSendOnCancel"));
        flxSendOnTop.add(flxSendOnBack, btnSendOnCancel);
        var lblSendOnHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblSendOnHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Send On",
            "textStyle": {},
            "top": "11dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSendOnHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSendOnHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSendOnHeader"));
        flxDateHeader.add(flxSendOnTop, lblSendOnHeader);
        var flxDateValue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "6.59%",
            "id": "flxDateValue",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "top": "15dp",
            "width": "50%"
        }, controller.args[0], "flxDateValue"), extendConfig({}, controller.args[1], "flxDateValue"), extendConfig({}, controller.args[2], "flxDateValue"));
        flxDateValue.setDefaultUnit(kony.flex.DP);
        var lblDayOne = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDayOne",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl42424218PX",
            "text": "M",
            "textStyle": {},
            "top": "0dp",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "lblDayOne"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDayOne"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDayOne"));
        var lblDayTwo = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDayTwo",
            "isVisible": true,
            "left": "3dp",
            "skin": "ICSknLbl42424218PX",
            "text": "M",
            "textStyle": {},
            "top": "0dp",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "lblDayTwo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDayTwo"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDayTwo"));
        var lblSlashDay = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblSlashDay",
            "isVisible": true,
            "left": "5dp",
            "skin": "ICSknLbl42424218PX",
            "text": "/",
            "textStyle": {},
            "top": "0dp",
            "width": "10dp",
            "zIndex": 1
        }, controller.args[0], "lblSlashDay"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSlashDay"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSlashDay"));
        var lblMonthOne = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblMonthOne",
            "isVisible": true,
            "left": "5dp",
            "skin": "ICSknLbl42424218PX",
            "text": "D",
            "textStyle": {},
            "top": "0dp",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "lblMonthOne"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMonthOne"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMonthOne"));
        var lblMonthTwo = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblMonthTwo",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl42424218PX",
            "text": "D",
            "textStyle": {},
            "top": "0dp",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "lblMonthTwo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMonthTwo"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMonthTwo"));
        var lblSlashMonth = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblSlashMonth",
            "isVisible": true,
            "left": "5dp",
            "skin": "ICSknLbl42424218PX",
            "text": "/",
            "textStyle": {},
            "top": "0dp",
            "width": "10dp",
            "zIndex": 1
        }, controller.args[0], "lblSlashMonth"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSlashMonth"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSlashMonth"));
        var lblYearOne = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblYearOne",
            "isVisible": true,
            "left": "5dp",
            "skin": "ICSknLbl42424218PX",
            "text": "Y",
            "textStyle": {},
            "top": "0dp",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "lblYearOne"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblYearOne"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblYearOne"));
        var lblYearTwo = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblYearTwo",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl42424218PX",
            "text": "Y",
            "textStyle": {},
            "top": "0dp",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "lblYearTwo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblYearTwo"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblYearTwo"));
        var lblYearThree = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblYearThree",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl42424218PX",
            "text": "Y",
            "textStyle": {},
            "top": "0dp",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "lblYearThree"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblYearThree"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblYearThree"));
        var lblYearFour = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblYearFour",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl42424218PX",
            "text": "Y",
            "textStyle": {},
            "top": "0dp",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "lblYearFour"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblYearFour"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblYearFour"));
        flxDateValue.add(lblDayOne, lblDayTwo, lblSlashDay, lblMonthOne, lblMonthTwo, lblSlashMonth, lblYearOne, lblYearTwo, lblYearThree, lblYearFour);
        var flxSendOnSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "3dp",
            "id": "flxSendOnSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSendOnSeparator"), extendConfig({}, controller.args[1], "flxSendOnSeparator"), extendConfig({}, controller.args[2], "flxSendOnSeparator"));
        flxSendOnSeparator.setDefaultUnit(kony.flex.DP);
        flxSendOnSeparator.add();
        var customCalendar = new com.common.customCalendarWithContract(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "height": "280dp",
            "id": "customCalendar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "customCalendarWithContract": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "customCalendar"), extendConfig({
            "overrides": {}
        }, controller.args[1], "customCalendar"), extendConfig({
            "overrides": {}
        }, controller.args[2], "customCalendar"));
        flxDateMain.add(flxDateHeader, flxDateValue, flxSendOnSeparator, customCalendar);
        var lblDueDate = new kony.ui.Label(extendConfig({
            "bottom": "89dp",
            "centerX": "50%",
            "id": "lblDueDate",
            "isVisible": false,
            "left": "124dp",
            "skin": "ICSknLbl42424234px",
            "textStyle": {},
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDueDate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDueDate"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDueDate"));
        var btnDateContinue = new kony.ui.Button(extendConfig({
            "bottom": "21dp",
            "centerX": "50%",
            "focusSkin": "sknBtnOnBoardingInactive",
            "height": "48dp",
            "id": "btnDateContinue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "89.33%",
            "zIndex": 3
        }, controller.args[0], "btnDateContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDateContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnDateContinue"));
        flxDate.add(flxDateMain, lblDueDate, btnDateContinue);
        var flxFeesPaidBy = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFeesPaidBy",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFeesPaidBy"), extendConfig({}, controller.args[1], "flxFeesPaidBy"), extendConfig({}, controller.args[2], "flxFeesPaidBy"));
        flxFeesPaidBy.setDefaultUnit(kony.flex.DP);
        var flxFeesPaidByMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFeesPaidByMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFeesPaidByMain"), extendConfig({}, controller.args[1], "flxFeesPaidByMain"), extendConfig({}, controller.args[2], "flxFeesPaidByMain"));
        flxFeesPaidByMain.setDefaultUnit(kony.flex.DP);
        var flxFeesPaidByHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxFeesPaidByHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFeesPaidByHeader"), extendConfig({}, controller.args[1], "flxFeesPaidByHeader"), extendConfig({}, controller.args[2], "flxFeesPaidByHeader"));
        flxFeesPaidByHeader.setDefaultUnit(kony.flex.DP);
        var flxFeesPaidByTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxFeesPaidByTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFeesPaidByTop"), extendConfig({}, controller.args[1], "flxFeesPaidByTop"), extendConfig({}, controller.args[2], "flxFeesPaidByTop"));
        flxFeesPaidByTop.setDefaultUnit(kony.flex.DP);
        var flxFeesPaidByBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxFeesPaidByBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxFeesPaidByBack"), extendConfig({}, controller.args[1], "flxFeesPaidByBack"), extendConfig({}, controller.args[2], "flxFeesPaidByBack"));
        flxFeesPaidByBack.setDefaultUnit(kony.flex.DP);
        var imgFeedPaidBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgFeedPaidBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgFeedPaidBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFeedPaidBack"), extendConfig({}, controller.args[2], "imgFeedPaidBack"));
        flxFeesPaidByBack.add(imgFeedPaidBack);
        var btnFeesPaidbyCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnFeesPaidbyCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnFeesPaidbyCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFeesPaidbyCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnFeesPaidbyCancel"));
        flxFeesPaidByTop.add(flxFeesPaidByBack, btnFeesPaidbyCancel);
        var lblFeesPaidByHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblFeesPaidByHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Fees Paid By",
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblFeesPaidByHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFeesPaidByHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFeesPaidByHeader"));
        flxFeesPaidByHeader.add(flxFeesPaidByTop, lblFeesPaidByHeader);
        var flxFeesPaidByDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "58dp",
            "id": "flxFeesPaidByDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFeesPaidByDescription"), extendConfig({}, controller.args[1], "flxFeesPaidByDescription"), extendConfig({}, controller.args[2], "flxFeesPaidByDescription"));
        flxFeesPaidByDescription.setDefaultUnit(kony.flex.DP);
        var lblFeesPaidByDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblFeesPaidByDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": "Please select fees paid by",
            "textStyle": {},
            "top": "13dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "lblFeesPaidByDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFeesPaidByDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFeesPaidByDescription"));
        flxFeesPaidByDescription.add(lblFeesPaidByDescription);
        var flxFeesPaidBySeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "3dp",
            "id": "flxFeesPaidBySeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFeesPaidBySeparator"), extendConfig({}, controller.args[1], "flxFeesPaidBySeparator"), extendConfig({}, controller.args[2], "flxFeesPaidBySeparator"));
        flxFeesPaidBySeparator.setDefaultUnit(kony.flex.DP);
        flxFeesPaidBySeparator.add();
        var flxFeesPaidByMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "72.91%",
            "id": "flxFeesPaidByMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFeesPaidByMainContainer"), extendConfig({}, controller.args[1], "flxFeesPaidByMainContainer"), extendConfig({}, controller.args[2], "flxFeesPaidByMainContainer"));
        flxFeesPaidByMainContainer.setDefaultUnit(kony.flex.DP);
        var flxFeesPaidByOption1container = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "112dp",
            "id": "flxFeesPaidByOption1container",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFeesPaidByOption1container"), extendConfig({}, controller.args[1], "flxFeesPaidByOption1container"), extendConfig({}, controller.args[2], "flxFeesPaidByOption1container"));
        flxFeesPaidByOption1container.setDefaultUnit(kony.flex.DP);
        var imgFeesPaidByTick1 = new kony.ui.Image2(extendConfig({
            "height": "28dp",
            "id": "imgFeesPaidByTick1",
            "isVisible": false,
            "right": 10,
            "src": "selectedtick.png",
            "top": "3dp",
            "width": "28dp",
            "zIndex": 2
        }, controller.args[0], "imgFeesPaidByTick1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFeesPaidByTick1"), extendConfig({}, controller.args[2], "imgFeesPaidByTick1"));
        var flxFeesPaidByOption1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "96dp",
            "id": "flxFeesPaidByOption1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknFlxE3E3E3NotSelected",
            "top": "13dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxFeesPaidByOption1"), extendConfig({}, controller.args[1], "flxFeesPaidByOption1"), extendConfig({}, controller.args[2], "flxFeesPaidByOption1"));
        flxFeesPaidByOption1.setDefaultUnit(kony.flex.DP);
        var lblFeesPaidByOption1Header = new kony.ui.Label(extendConfig({
            "height": "23dp",
            "id": "lblFeesPaidByOption1Header",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl424242B41px",
            "text": "Me",
            "textStyle": {},
            "top": "14dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFeesPaidByOption1Header"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFeesPaidByOption1Header"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFeesPaidByOption1Header"));
        var lblFeesPaidByOption1Description = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "id": "lblFeesPaidByOption1Description",
            "isVisible": true,
            "left": "20dp",
            "right": "16dp",
            "skin": "ICSknLbl72727230px",
            "text": "Here need two line information content to help user to better understand the method",
            "textStyle": {},
            "top": "0dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "lblFeesPaidByOption1Description"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFeesPaidByOption1Description"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFeesPaidByOption1Description"));
        flxFeesPaidByOption1.add(lblFeesPaidByOption1Header, lblFeesPaidByOption1Description);
        flxFeesPaidByOption1container.add(imgFeesPaidByTick1, flxFeesPaidByOption1);
        var flxFeesPaidByOption2Container = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "112dp",
            "id": "flxFeesPaidByOption2Container",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFeesPaidByOption2Container"), extendConfig({}, controller.args[1], "flxFeesPaidByOption2Container"), extendConfig({}, controller.args[2], "flxFeesPaidByOption2Container"));
        flxFeesPaidByOption2Container.setDefaultUnit(kony.flex.DP);
        var imgFeesPaidByTick2 = new kony.ui.Image2(extendConfig({
            "height": "28dp",
            "id": "imgFeesPaidByTick2",
            "isVisible": false,
            "right": 10,
            "src": "selectedtick.png",
            "top": "3dp",
            "width": "28dp",
            "zIndex": 2
        }, controller.args[0], "imgFeesPaidByTick2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFeesPaidByTick2"), extendConfig({}, controller.args[2], "imgFeesPaidByTick2"));
        var flxFeesPaidByOption2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "96dp",
            "id": "flxFeesPaidByOption2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknFlxE3E3E3NotSelected",
            "top": "13dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxFeesPaidByOption2"), extendConfig({}, controller.args[1], "flxFeesPaidByOption2"), extendConfig({}, controller.args[2], "flxFeesPaidByOption2"));
        flxFeesPaidByOption2.setDefaultUnit(kony.flex.DP);
        var lblFeesPaidByOption2Header = new kony.ui.Label(extendConfig({
            "height": "23dp",
            "id": "lblFeesPaidByOption2Header",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl424242B41px",
            "text": "Beneficiary",
            "textStyle": {},
            "top": "14dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFeesPaidByOption2Header"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFeesPaidByOption2Header"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFeesPaidByOption2Header"));
        var lblFeesPaidByOption2Description = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "id": "lblFeesPaidByOption2Description",
            "isVisible": true,
            "left": "20dp",
            "right": "16dp",
            "skin": "ICSknLbl72727230px",
            "text": "Here need two line information content to help user to better understand the method",
            "textStyle": {},
            "top": "0dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "lblFeesPaidByOption2Description"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFeesPaidByOption2Description"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFeesPaidByOption2Description"));
        flxFeesPaidByOption2.add(lblFeesPaidByOption2Header, lblFeesPaidByOption2Description);
        flxFeesPaidByOption2Container.add(imgFeesPaidByTick2, flxFeesPaidByOption2);
        var flxFeedPaidByOption3Container = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "115dp",
            "id": "flxFeedPaidByOption3Container",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFeedPaidByOption3Container"), extendConfig({}, controller.args[1], "flxFeedPaidByOption3Container"), extendConfig({}, controller.args[2], "flxFeedPaidByOption3Container"));
        flxFeedPaidByOption3Container.setDefaultUnit(kony.flex.DP);
        var imgFeesPaidByTick3 = new kony.ui.Image2(extendConfig({
            "height": "28dp",
            "id": "imgFeesPaidByTick3",
            "isVisible": false,
            "right": 10,
            "src": "selectedtick.png",
            "top": "3dp",
            "width": "28dp",
            "zIndex": 2
        }, controller.args[0], "imgFeesPaidByTick3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFeesPaidByTick3"), extendConfig({}, controller.args[2], "imgFeesPaidByTick3"));
        var flxFeesPaidByOption3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "96dp",
            "id": "flxFeesPaidByOption3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknFlxE3E3E3NotSelected",
            "top": "13dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxFeesPaidByOption3"), extendConfig({}, controller.args[1], "flxFeesPaidByOption3"), extendConfig({}, controller.args[2], "flxFeesPaidByOption3"));
        flxFeesPaidByOption3.setDefaultUnit(kony.flex.DP);
        var lblFeesPaidByOption3Header = new kony.ui.Label(extendConfig({
            "height": "23dp",
            "id": "lblFeesPaidByOption3Header",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl424242B41px",
            "text": "Both (Shared)",
            "textStyle": {},
            "top": "14dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFeesPaidByOption3Header"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFeesPaidByOption3Header"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFeesPaidByOption3Header"));
        var lblFeesPaidByOption3Description = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "id": "lblFeesPaidByOption3Description",
            "isVisible": true,
            "left": "20dp",
            "right": "16dp",
            "skin": "ICSknLbl72727230px",
            "text": "Here need two line information content to help user to better understand the method",
            "textStyle": {},
            "top": "0dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "lblFeesPaidByOption3Description"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFeesPaidByOption3Description"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFeesPaidByOption3Description"));
        flxFeesPaidByOption3.add(lblFeesPaidByOption3Header, lblFeesPaidByOption3Description);
        flxFeedPaidByOption3Container.add(imgFeesPaidByTick3, flxFeesPaidByOption3);
        flxFeesPaidByMainContainer.add(flxFeesPaidByOption1container, flxFeesPaidByOption2Container, flxFeedPaidByOption3Container);
        flxFeesPaidByMain.add(flxFeesPaidByHeader, flxFeesPaidByDescription, flxFeesPaidBySeparator, flxFeesPaidByMainContainer);
        flxFeesPaidBy.add(flxFeesPaidByMain);
        var flxPaymentMethod = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPaymentMethod",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPaymentMethod"), extendConfig({}, controller.args[1], "flxPaymentMethod"), extendConfig({}, controller.args[2], "flxPaymentMethod"));
        flxPaymentMethod.setDefaultUnit(kony.flex.DP);
        var flxPaymentMethodMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPaymentMethodMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPaymentMethodMain"), extendConfig({}, controller.args[1], "flxPaymentMethodMain"), extendConfig({}, controller.args[2], "flxPaymentMethodMain"));
        flxPaymentMethodMain.setDefaultUnit(kony.flex.DP);
        var flxPaymentMethodHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPaymentMethodHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPaymentMethodHeader"), extendConfig({}, controller.args[1], "flxPaymentMethodHeader"), extendConfig({}, controller.args[2], "flxPaymentMethodHeader"));
        flxPaymentMethodHeader.setDefaultUnit(kony.flex.DP);
        var flxPaymentMethodTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPaymentMethodTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPaymentMethodTop"), extendConfig({}, controller.args[1], "flxPaymentMethodTop"), extendConfig({}, controller.args[2], "flxPaymentMethodTop"));
        flxPaymentMethodTop.setDefaultUnit(kony.flex.DP);
        var flxPaymentMethodBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxPaymentMethodBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxPaymentMethodBack"), extendConfig({}, controller.args[1], "flxPaymentMethodBack"), extendConfig({}, controller.args[2], "flxPaymentMethodBack"));
        flxPaymentMethodBack.setDefaultUnit(kony.flex.DP);
        var imgPaymentMethodBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgPaymentMethodBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgPaymentMethodBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPaymentMethodBack"), extendConfig({}, controller.args[2], "imgPaymentMethodBack"));
        flxPaymentMethodBack.add(imgPaymentMethodBack);
        var btnPaymentMethodCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnPaymentMethodCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnPaymentMethodCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPaymentMethodCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnPaymentMethodCancel"));
        flxPaymentMethodTop.add(flxPaymentMethodBack, btnPaymentMethodCancel);
        var lblPaymentMethodHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblPaymentMethodHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Payment Method",
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblPaymentMethodHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPaymentMethodHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPaymentMethodHeader"));
        flxPaymentMethodHeader.add(flxPaymentMethodTop, lblPaymentMethodHeader);
        var flxPaymentMethodDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "58dp",
            "id": "flxPaymentMethodDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPaymentMethodDescription"), extendConfig({}, controller.args[1], "flxPaymentMethodDescription"), extendConfig({}, controller.args[2], "flxPaymentMethodDescription"));
        flxPaymentMethodDescription.setDefaultUnit(kony.flex.DP);
        var lblPaymentMethodDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblPaymentMethodDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": "Please select payment method",
            "textStyle": {},
            "top": "13dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "lblPaymentMethodDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPaymentMethodDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPaymentMethodDescription"));
        flxPaymentMethodDescription.add(lblPaymentMethodDescription);
        var flxPaymentMethodSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "3dp",
            "id": "flxPaymentMethodSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPaymentMethodSeparator"), extendConfig({}, controller.args[1], "flxPaymentMethodSeparator"), extendConfig({}, controller.args[2], "flxPaymentMethodSeparator"));
        flxPaymentMethodSeparator.setDefaultUnit(kony.flex.DP);
        flxPaymentMethodSeparator.add();
        var flxPaymentMethodContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "72.91%",
            "horizontalScrollIndicator": true,
            "id": "flxPaymentMethodContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "1dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPaymentMethodContainer"), extendConfig({}, controller.args[1], "flxPaymentMethodContainer"), extendConfig({}, controller.args[2], "flxPaymentMethodContainer"));
        flxPaymentMethodContainer.setDefaultUnit(kony.flex.DP);
        var flxPaymentMethodOption1Container = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPaymentMethodOption1Container",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPaymentMethodOption1Container"), extendConfig({}, controller.args[1], "flxPaymentMethodOption1Container"), extendConfig({}, controller.args[2], "flxPaymentMethodOption1Container"));
        flxPaymentMethodOption1Container.setDefaultUnit(kony.flex.DP);
        var imgPaymentMethodTick1 = new kony.ui.Image2(extendConfig({
            "height": "28dp",
            "id": "imgPaymentMethodTick1",
            "isVisible": false,
            "right": 10,
            "src": "selectedtick.png",
            "top": "3dp",
            "width": "28dp",
            "zIndex": 2
        }, controller.args[0], "imgPaymentMethodTick1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPaymentMethodTick1"), extendConfig({}, controller.args[2], "imgPaymentMethodTick1"));
        var flxPaymentMethodOption1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPaymentMethodOption1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknFlxE3E3E3NotSelected",
            "top": "13dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxPaymentMethodOption1"), extendConfig({}, controller.args[1], "flxPaymentMethodOption1"), extendConfig({}, controller.args[2], "flxPaymentMethodOption1"));
        flxPaymentMethodOption1.setDefaultUnit(kony.flex.DP);
        var lblPaymentMethodOption1Header = new kony.ui.Label(extendConfig({
            "height": "23dp",
            "id": "lblPaymentMethodOption1Header",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl424242B41px",
            "text": "SEPA",
            "textStyle": {},
            "top": "14dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPaymentMethodOption1Header"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPaymentMethodOption1Header"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPaymentMethodOption1Header"));
        var lblPaymentMethodOption1Description = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "id": "lblPaymentMethodOption1Description",
            "isVisible": true,
            "left": "20dp",
            "right": "16dp",
            "skin": "ICSknLbl72727230px",
            "text": "Here need two line information content to help user to better understand the method",
            "textStyle": {},
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblPaymentMethodOption1Description"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPaymentMethodOption1Description"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPaymentMethodOption1Description"));
        flxPaymentMethodOption1.add(lblPaymentMethodOption1Header, lblPaymentMethodOption1Description);
        flxPaymentMethodOption1Container.add(imgPaymentMethodTick1, flxPaymentMethodOption1);
        var flxPaymentMethodOption2Container = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPaymentMethodOption2Container",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPaymentMethodOption2Container"), extendConfig({}, controller.args[1], "flxPaymentMethodOption2Container"), extendConfig({}, controller.args[2], "flxPaymentMethodOption2Container"));
        flxPaymentMethodOption2Container.setDefaultUnit(kony.flex.DP);
        var imgPaymentMethodTick2 = new kony.ui.Image2(extendConfig({
            "height": "28dp",
            "id": "imgPaymentMethodTick2",
            "isVisible": false,
            "right": 10,
            "src": "selectedtick.png",
            "top": "3dp",
            "width": "28dp",
            "zIndex": 2
        }, controller.args[0], "imgPaymentMethodTick2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPaymentMethodTick2"), extendConfig({}, controller.args[2], "imgPaymentMethodTick2"));
        var flxPaymentMethodOption2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPaymentMethodOption2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknFlxE3E3E3NotSelected",
            "top": "13dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxPaymentMethodOption2"), extendConfig({}, controller.args[1], "flxPaymentMethodOption2"), extendConfig({}, controller.args[2], "flxPaymentMethodOption2"));
        flxPaymentMethodOption2.setDefaultUnit(kony.flex.DP);
        var lblPaymentMethodOption2Header = new kony.ui.Label(extendConfig({
            "height": "23dp",
            "id": "lblPaymentMethodOption2Header",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl424242B41px",
            "text": "Instant",
            "textStyle": {},
            "top": "14dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPaymentMethodOption2Header"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPaymentMethodOption2Header"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPaymentMethodOption2Header"));
        var lblPaymentMethodOption2Description = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "id": "lblPaymentMethodOption2Description",
            "isVisible": true,
            "left": "20dp",
            "right": "16dp",
            "skin": "ICSknLbl72727230px",
            "text": "Here need two line information content to help user to better understand the method",
            "textStyle": {},
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblPaymentMethodOption2Description"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPaymentMethodOption2Description"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPaymentMethodOption2Description"));
        flxPaymentMethodOption2.add(lblPaymentMethodOption2Header, lblPaymentMethodOption2Description);
        flxPaymentMethodOption2Container.add(imgPaymentMethodTick2, flxPaymentMethodOption2);
        var flxPaymentMethodOption3Container = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPaymentMethodOption3Container",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPaymentMethodOption3Container"), extendConfig({}, controller.args[1], "flxPaymentMethodOption3Container"), extendConfig({}, controller.args[2], "flxPaymentMethodOption3Container"));
        flxPaymentMethodOption3Container.setDefaultUnit(kony.flex.DP);
        var imgPaymentMethodTick3 = new kony.ui.Image2(extendConfig({
            "height": "28dp",
            "id": "imgPaymentMethodTick3",
            "isVisible": false,
            "right": 10,
            "src": "selectedtick.png",
            "top": "3dp",
            "width": "28dp",
            "zIndex": 2
        }, controller.args[0], "imgPaymentMethodTick3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPaymentMethodTick3"), extendConfig({}, controller.args[2], "imgPaymentMethodTick3"));
        var flxPaymentMethodOption3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPaymentMethodOption3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknFlxE3E3E3NotSelected",
            "top": "13dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxPaymentMethodOption3"), extendConfig({}, controller.args[1], "flxPaymentMethodOption3"), extendConfig({}, controller.args[2], "flxPaymentMethodOption3"));
        flxPaymentMethodOption3.setDefaultUnit(kony.flex.DP);
        var lblPaymentMethodOption3Header = new kony.ui.Label(extendConfig({
            "height": "23dp",
            "id": "lblPaymentMethodOption3Header",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl424242B41px",
            "text": "International",
            "textStyle": {},
            "top": "14dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPaymentMethodOption3Header"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPaymentMethodOption3Header"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPaymentMethodOption3Header"));
        var lblPaymentMethodOption3Description = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "id": "lblPaymentMethodOption3Description",
            "isVisible": true,
            "left": "20dp",
            "right": "16dp",
            "skin": "ICSknLbl72727230px",
            "text": "Here need two line information content to help user to better understand the method",
            "textStyle": {},
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblPaymentMethodOption3Description"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPaymentMethodOption3Description"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPaymentMethodOption3Description"));
        flxPaymentMethodOption3.add(lblPaymentMethodOption3Header, lblPaymentMethodOption3Description);
        flxPaymentMethodOption3Container.add(imgPaymentMethodTick3, flxPaymentMethodOption3);
        var flxPaymentMethodOption4Container = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPaymentMethodOption4Container",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPaymentMethodOption4Container"), extendConfig({}, controller.args[1], "flxPaymentMethodOption4Container"), extendConfig({}, controller.args[2], "flxPaymentMethodOption4Container"));
        flxPaymentMethodOption4Container.setDefaultUnit(kony.flex.DP);
        var imgPaymentMethodTick4 = new kony.ui.Image2(extendConfig({
            "height": "28dp",
            "id": "imgPaymentMethodTick4",
            "isVisible": false,
            "right": 10,
            "src": "selectedtick.png",
            "top": "3dp",
            "width": "28dp",
            "zIndex": 2
        }, controller.args[0], "imgPaymentMethodTick4"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPaymentMethodTick4"), extendConfig({}, controller.args[2], "imgPaymentMethodTick4"));
        var flxPaymentMethodOption4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPaymentMethodOption4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknFlxE3E3E3NotSelected",
            "top": "13dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxPaymentMethodOption4"), extendConfig({}, controller.args[1], "flxPaymentMethodOption4"), extendConfig({}, controller.args[2], "flxPaymentMethodOption4"));
        flxPaymentMethodOption4.setDefaultUnit(kony.flex.DP);
        var lblPaymentMethodOption4Header = new kony.ui.Label(extendConfig({
            "height": "23dp",
            "id": "lblPaymentMethodOption4Header",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl424242B41px",
            "text": "Local CCY Clearing",
            "textStyle": {},
            "top": "14dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPaymentMethodOption4Header"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPaymentMethodOption4Header"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPaymentMethodOption4Header"));
        var lblPaymentMethodOption4Description = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "id": "lblPaymentMethodOption4Description",
            "isVisible": true,
            "left": "20dp",
            "right": "16dp",
            "skin": "ICSknLbl72727230px",
            "text": "Here need two line information content to help user to better understand the method",
            "textStyle": {},
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblPaymentMethodOption4Description"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPaymentMethodOption4Description"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPaymentMethodOption4Description"));
        flxPaymentMethodOption4.add(lblPaymentMethodOption4Header, lblPaymentMethodOption4Description);
        flxPaymentMethodOption4Container.add(imgPaymentMethodTick4, flxPaymentMethodOption4);
        flxPaymentMethodContainer.add(flxPaymentMethodOption1Container, flxPaymentMethodOption2Container, flxPaymentMethodOption3Container, flxPaymentMethodOption4Container);
        flxPaymentMethodMain.add(flxPaymentMethodHeader, flxPaymentMethodDescription, flxPaymentMethodSeparator, flxPaymentMethodContainer);
        flxPaymentMethod.add(flxPaymentMethodMain);
        var flxOtherAmount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxOtherAmount",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "reverseLayoutDirection": false,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOtherAmount"), extendConfig({}, controller.args[1], "flxOtherAmount"), extendConfig({}, controller.args[2], "flxOtherAmount"));
        flxOtherAmount.setDefaultUnit(kony.flex.DP);
        var flxOtherAmountScrollContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "55%",
            "horizontalScrollIndicator": true,
            "id": "flxOtherAmountScrollContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxOtherAmountScrollContainer"), extendConfig({}, controller.args[1], "flxOtherAmountScrollContainer"), extendConfig({}, controller.args[2], "flxOtherAmountScrollContainer"));
        flxOtherAmountScrollContainer.setDefaultUnit(kony.flex.DP);
        var flxOtherAmountHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxOtherAmountHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOtherAmountHeaderTop"), extendConfig({}, controller.args[1], "flxOtherAmountHeaderTop"), extendConfig({}, controller.args[2], "flxOtherAmountHeaderTop"));
        flxOtherAmountHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxOtherAmountTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxOtherAmountTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOtherAmountTop"), extendConfig({}, controller.args[1], "flxOtherAmountTop"), extendConfig({}, controller.args[2], "flxOtherAmountTop"));
        flxOtherAmountTop.setDefaultUnit(kony.flex.DP);
        var flxOtherAmountBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxOtherAmountBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxOtherAmountBack"), extendConfig({}, controller.args[1], "flxOtherAmountBack"), extendConfig({}, controller.args[2], "flxOtherAmountBack"));
        flxOtherAmountBack.setDefaultUnit(kony.flex.DP);
        var imgOtherAmountBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgOtherAmountBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgOtherAmountBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgOtherAmountBack"), extendConfig({}, controller.args[2], "imgOtherAmountBack"));
        flxOtherAmountBack.add(imgOtherAmountBack);
        var btnOtherAmountCancel = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSKnBtnffffff15px",
            "height": "20dp",
            "id": "btnOtherAmountCancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnOtherAmountCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherAmountCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnOtherAmountCancel"));
        flxOtherAmountTop.add(flxOtherAmountBack, btnOtherAmountCancel);
        var lblOtherAmountHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblOtherAmountHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Amount",
            "textStyle": {},
            "top": "11dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblOtherAmountHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOtherAmountHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblOtherAmountHeader"));
        flxOtherAmountHeaderTop.add(flxOtherAmountTop, lblOtherAmountHeader);
        var flxOtherAmounts1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxOtherAmounts1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxOtherAmounts1"), extendConfig({}, controller.args[1], "flxOtherAmounts1"), extendConfig({}, controller.args[2], "flxOtherAmounts1"));
        flxOtherAmounts1.setDefaultUnit(kony.flex.DP);
        var lblAmountType1 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblAmountType1",
            "isVisible": true,
            "left": "32dp",
            "skin": "ICSknLbl42424234px",
            "text": "Outstanding Due",
            "textStyle": {},
            "top": "20dp",
            "width": "125dp",
            "zIndex": 1
        }, controller.args[0], "lblAmountType1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountType1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmountType1"));
        var lblAmount1 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblAmount1",
            "isVisible": true,
            "right": "56dp",
            "skin": "ICSknLbl42424234px",
            "text": "$1,500.00",
            "textStyle": {},
            "top": "20dp",
            "width": "75dp",
            "zIndex": 1
        }, controller.args[0], "lblAmount1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmount1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmount1"));
        var imgInactive1 = new kony.ui.Image2(extendConfig({
            "bottom": "15dp",
            "height": "30dp",
            "id": "imgInactive1",
            "isVisible": false,
            "right": "15dp",
            "src": "inactive_1x.png",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgInactive1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgInactive1"), extendConfig({}, controller.args[2], "imgInactive1"));
        var imgactive1 = new kony.ui.Image2(extendConfig({
            "bottom": "15dp",
            "height": "30dp",
            "id": "imgactive1",
            "isVisible": true,
            "right": "15dp",
            "src": "active_1x.png",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgactive1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgactive1"), extendConfig({}, controller.args[2], "imgactive1"));
        flxOtherAmounts1.add(lblAmountType1, lblAmount1, imgInactive1, imgactive1);
        var flxOtherAmountSeparator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxOtherAmountSeparator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOtherAmountSeparator1"), extendConfig({}, controller.args[1], "flxOtherAmountSeparator1"), extendConfig({}, controller.args[2], "flxOtherAmountSeparator1"));
        flxOtherAmountSeparator1.setDefaultUnit(kony.flex.DP);
        flxOtherAmountSeparator1.add();
        var flxOtherAmounts2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxOtherAmounts2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxOtherAmounts2"), extendConfig({}, controller.args[1], "flxOtherAmounts2"), extendConfig({}, controller.args[2], "flxOtherAmounts2"));
        flxOtherAmounts2.setDefaultUnit(kony.flex.DP);
        var lblAmountType2 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblAmountType2",
            "isVisible": true,
            "left": "32dp",
            "skin": "ICSknLbl42424234px",
            "text": "Statement Due",
            "textStyle": {},
            "top": "20dp",
            "width": "125dp",
            "zIndex": 1
        }, controller.args[0], "lblAmountType2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountType2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmountType2"));
        var lblAmount2 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblAmount2",
            "isVisible": true,
            "right": "56dp",
            "skin": "ICSknLbl42424234px",
            "text": "$1,500.00",
            "textStyle": {},
            "top": "20dp",
            "width": "75dp",
            "zIndex": 1
        }, controller.args[0], "lblAmount2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmount2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmount2"));
        var imgInactive2 = new kony.ui.Image2(extendConfig({
            "bottom": "15dp",
            "height": "30dp",
            "id": "imgInactive2",
            "isVisible": true,
            "right": "15dp",
            "src": "inactive_1x.png",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgInactive2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgInactive2"), extendConfig({}, controller.args[2], "imgInactive2"));
        var imgactive2 = new kony.ui.Image2(extendConfig({
            "bottom": "15dp",
            "height": "30dp",
            "id": "imgactive2",
            "isVisible": false,
            "right": "15dp",
            "src": "active_1x.png",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgactive2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgactive2"), extendConfig({}, controller.args[2], "imgactive2"));
        flxOtherAmounts2.add(lblAmountType2, lblAmount2, imgInactive2, imgactive2);
        var flxOtherAmountSeparator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxOtherAmountSeparator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOtherAmountSeparator2"), extendConfig({}, controller.args[1], "flxOtherAmountSeparator2"), extendConfig({}, controller.args[2], "flxOtherAmountSeparator2"));
        flxOtherAmountSeparator2.setDefaultUnit(kony.flex.DP);
        flxOtherAmountSeparator2.add();
        var flxOtherAmounts3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxOtherAmounts3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxOtherAmounts3"), extendConfig({}, controller.args[1], "flxOtherAmounts3"), extendConfig({}, controller.args[2], "flxOtherAmounts3"));
        flxOtherAmounts3.setDefaultUnit(kony.flex.DP);
        var lblAmountType3 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblAmountType3",
            "isVisible": true,
            "left": "32dp",
            "skin": "ICSknLbl42424234px",
            "text": "Minimum Due",
            "textStyle": {},
            "top": "20dp",
            "width": "125dp",
            "zIndex": 1
        }, controller.args[0], "lblAmountType3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountType3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmountType3"));
        var lblAmount3 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblAmount3",
            "isVisible": true,
            "right": "56dp",
            "skin": "ICSknLbl42424234px",
            "text": "$1,500.00",
            "textStyle": {},
            "top": "20dp",
            "width": "75dp",
            "zIndex": 1
        }, controller.args[0], "lblAmount3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmount3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmount3"));
        var imgInactive3 = new kony.ui.Image2(extendConfig({
            "bottom": "15dp",
            "height": "30dp",
            "id": "imgInactive3",
            "isVisible": true,
            "right": "15dp",
            "src": "inactive_1x.png",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgInactive3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgInactive3"), extendConfig({}, controller.args[2], "imgInactive3"));
        var imgactive3 = new kony.ui.Image2(extendConfig({
            "bottom": "15dp",
            "height": "30dp",
            "id": "imgactive3",
            "isVisible": false,
            "right": "15dp",
            "src": "active_1x.png",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgactive3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgactive3"), extendConfig({}, controller.args[2], "imgactive3"));
        flxOtherAmounts3.add(lblAmountType3, lblAmount3, imgInactive3, imgactive3);
        var flxOtherAmountSeparator3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxOtherAmountSeparator3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOtherAmountSeparator3"), extendConfig({}, controller.args[1], "flxOtherAmountSeparator3"), extendConfig({}, controller.args[2], "flxOtherAmountSeparator3"));
        flxOtherAmountSeparator3.setDefaultUnit(kony.flex.DP);
        flxOtherAmountSeparator3.add();
        var flxOtherAmounts4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxOtherAmounts4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxOtherAmounts4"), extendConfig({}, controller.args[1], "flxOtherAmounts4"), extendConfig({}, controller.args[2], "flxOtherAmounts4"));
        flxOtherAmounts4.setDefaultUnit(kony.flex.DP);
        var flxOtherAmountSelect = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxOtherAmountSelect",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxOtherAmountSelect"), extendConfig({}, controller.args[1], "flxOtherAmountSelect"), extendConfig({}, controller.args[2], "flxOtherAmountSelect"));
        flxOtherAmountSelect.setDefaultUnit(kony.flex.DP);
        var imgactive4 = new kony.ui.Image2(extendConfig({
            "bottom": "15dp",
            "height": "30dp",
            "id": "imgactive4",
            "isVisible": false,
            "right": "15dp",
            "src": "active_1x.png",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgactive4"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgactive4"), extendConfig({}, controller.args[2], "imgactive4"));
        var lblAmountType4 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblAmountType4",
            "isVisible": true,
            "left": "32dp",
            "skin": "ICSknLbl42424234px",
            "text": "Other Amount",
            "textStyle": {},
            "top": "20dp",
            "width": "125dp",
            "zIndex": 1
        }, controller.args[0], "lblAmountType4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountType4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmountType4"));
        var lblAmount4 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblAmount4",
            "isVisible": false,
            "right": "56dp",
            "skin": "ICSknLbl42424234px",
            "text": "$1,500.00",
            "textStyle": {},
            "top": "20dp",
            "width": "75dp",
            "zIndex": 1
        }, controller.args[0], "lblAmount4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmount4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmount4"));
        var imgInactive4 = new kony.ui.Image2(extendConfig({
            "bottom": "15dp",
            "height": "30dp",
            "id": "imgInactive4",
            "isVisible": true,
            "right": "14dp",
            "src": "inactive_1x.png",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgInactive4"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgInactive4"), extendConfig({}, controller.args[2], "imgInactive4"));
        flxOtherAmountSelect.add(imgactive4, lblAmountType4, lblAmount4, imgInactive4);
        var flxOtherAmountInput = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "46dp",
            "id": "flxOtherAmountInput",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknFlx003E75Border1px",
            "top": "0",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxOtherAmountInput"), extendConfig({}, controller.args[1], "flxOtherAmountInput"), extendConfig({}, controller.args[2], "flxOtherAmountInput"));
        flxOtherAmountInput.setDefaultUnit(kony.flex.DP);
        var lblCurrencySymbol = new kony.ui.Label(extendConfig({
            "centerY": "51%",
            "id": "lblCurrencySymbol",
            "isVisible": true,
            "left": "12dp",
            "skin": "ICSknLbl72727245px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, controller.args[0], "lblCurrencySymbol"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCurrencySymbol"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCurrencySymbol"));
        var lblOtherAmount = new kony.ui.Label(extendConfig({
            "centerY": "52%",
            "id": "lblOtherAmount",
            "isVisible": true,
            "left": "25dp",
            "right": "50dp",
            "skin": "ICSknLbl72727245px",
            "text": "0.00",
            "textStyle": {},
            "zIndex": 5
        }, controller.args[0], "lblOtherAmount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOtherAmount"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblOtherAmount"));
        var flxOtherAmountClear = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxOtherAmountClear",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "324dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "2dp",
            "width": "46dp",
            "zIndex": 5
        }, controller.args[0], "flxOtherAmountClear"), extendConfig({}, controller.args[1], "flxOtherAmountClear"), extendConfig({}, controller.args[2], "flxOtherAmountClear"));
        flxOtherAmountClear.setDefaultUnit(kony.flex.DP);
        var imgOtherAmountClear = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "16dp",
            "id": "imgOtherAmountClear",
            "isVisible": true,
            "skin": "slImage",
            "src": "closecircle.png",
            "width": "16dp",
            "zIndex": 1
        }, controller.args[0], "imgOtherAmountClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgOtherAmountClear"), extendConfig({}, controller.args[2], "imgOtherAmountClear"));
        flxOtherAmountClear.add(imgOtherAmountClear);
        flxOtherAmountInput.add(lblCurrencySymbol, lblOtherAmount, flxOtherAmountClear);
        flxOtherAmounts4.add(flxOtherAmountSelect, flxOtherAmountInput);
        var flxOtherAmountSeparator4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 1,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxOtherAmountSeparator4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "12dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOtherAmountSeparator4"), extendConfig({}, controller.args[1], "flxOtherAmountSeparator4"), extendConfig({}, controller.args[2], "flxOtherAmountSeparator4"));
        flxOtherAmountSeparator4.setDefaultUnit(kony.flex.DP);
        flxOtherAmountSeparator4.add();
        flxOtherAmountScrollContainer.add(flxOtherAmountHeaderTop, flxOtherAmounts1, flxOtherAmountSeparator1, flxOtherAmounts2, flxOtherAmountSeparator2, flxOtherAmounts3, flxOtherAmountSeparator3, flxOtherAmounts4, flxOtherAmountSeparator4);
        var btnOtherAmountContinue = new kony.ui.Button(extendConfig({
            "bottom": "31%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "8%",
            "id": "btnOtherAmountContinue",
            "isVisible": true,
            "left": "5%",
            "right": "5%",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnOtherAmountContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherAmountContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOtherAmountContinue"));
        var flxKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "200dp",
            "id": "flxKeypad",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FB",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxKeypad"), extendConfig({}, controller.args[1], "flxKeypad"), extendConfig({}, controller.args[2], "flxKeypad"));
        flxKeypad.setDefaultUnit(kony.flex.DP);
        var flxOtherAmountKeyboard = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxOtherAmountKeyboard",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FB",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxOtherAmountKeyboard"), extendConfig({}, controller.args[1], "flxOtherAmountKeyboard"), extendConfig({}, controller.args[2], "flxOtherAmountKeyboard"));
        flxOtherAmountKeyboard.setDefaultUnit(kony.flex.DP);
        var flxOtherAmtKeyboardRow1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxOtherAmtKeyboardRow1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOtherAmtKeyboardRow1"), extendConfig({}, controller.args[1], "flxOtherAmtKeyboardRow1"), extendConfig({}, controller.args[2], "flxOtherAmtKeyboardRow1"));
        flxOtherAmtKeyboardRow1.setDefaultUnit(kony.flex.DP);
        var btnOtherAmtKey1 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnOtherAmtKey1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "1",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnOtherAmtKey1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherAmtKey1"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOtherAmtKey1"));
        var btnOtherAmtKey2 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnOtherAmtKey2",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "2",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnOtherAmtKey2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherAmtKey2"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOtherAmtKey2"));
        var btnOtherAmtKey3 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnOtherAmtKey3",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "3",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnOtherAmtKey3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherAmtKey3"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOtherAmtKey3"));
        flxOtherAmtKeyboardRow1.add(btnOtherAmtKey1, btnOtherAmtKey2, btnOtherAmtKey3);
        var flxOtherAmtKeyboardRow2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxOtherAmtKeyboardRow2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOtherAmtKeyboardRow2"), extendConfig({}, controller.args[1], "flxOtherAmtKeyboardRow2"), extendConfig({}, controller.args[2], "flxOtherAmtKeyboardRow2"));
        flxOtherAmtKeyboardRow2.setDefaultUnit(kony.flex.DP);
        var btnOtherAmtKey4 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnOtherAmtKey4",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "4",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnOtherAmtKey4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherAmtKey4"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOtherAmtKey4"));
        var btnOtherAmtKey5 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnOtherAmtKey5",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "5",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnOtherAmtKey5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherAmtKey5"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOtherAmtKey5"));
        var btnOtherAmtKey6 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnOtherAmtKey6",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "6",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnOtherAmtKey6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherAmtKey6"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOtherAmtKey6"));
        flxOtherAmtKeyboardRow2.add(btnOtherAmtKey4, btnOtherAmtKey5, btnOtherAmtKey6);
        var flxOtherAmtKeyboardRow3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxOtherAmtKeyboardRow3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOtherAmtKeyboardRow3"), extendConfig({}, controller.args[1], "flxOtherAmtKeyboardRow3"), extendConfig({}, controller.args[2], "flxOtherAmtKeyboardRow3"));
        flxOtherAmtKeyboardRow3.setDefaultUnit(kony.flex.DP);
        var btnOtherAmtKey7 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnOtherAmtKey7",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "7",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnOtherAmtKey7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherAmtKey7"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOtherAmtKey7"));
        var btnOtherAmtKey8 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnOtherAmtKey8",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "8",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnOtherAmtKey8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherAmtKey8"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOtherAmtKey8"));
        var btnOtherAmtKey9 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnOtherAmtKey9",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "9",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnOtherAmtKey9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherAmtKey9"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOtherAmtKey9"));
        flxOtherAmtKeyboardRow3.add(btnOtherAmtKey7, btnOtherAmtKey8, btnOtherAmtKey9);
        var flxOtherAmtKeyboardRow4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxOtherAmtKeyboardRow4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOtherAmtKeyboardRow4"), extendConfig({}, controller.args[1], "flxOtherAmtKeyboardRow4"), extendConfig({}, controller.args[2], "flxOtherAmtKeyboardRow4"));
        flxOtherAmtKeyboardRow4.setDefaultUnit(kony.flex.DP);
        var btnOtherAmtKey0 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnOtherAmtKey0",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "0",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnOtherAmtKey0"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherAmtKey0"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOtherAmtKey0"));
        var imgOtherAmtKeyClearKeypad = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "imgOtherAmtKeyClearKeypad",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 10
        }, controller.args[0], "imgOtherAmtKeyClearKeypad"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgOtherAmtKeyClearKeypad"), extendConfig({}, controller.args[2], "imgOtherAmtKeyClearKeypad"));
        var imgOtherAmtKeyClear = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgOtherAmtKeyClear",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "imgOtherAmtKeyClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgOtherAmtKeyClear"), extendConfig({}, controller.args[2], "imgOtherAmtKeyClear"));
        var btnOtherAmtKeyDecimalSeperator = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnOtherAmtKeyDecimalSeperator",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": ",",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnOtherAmtKeyDecimalSeperator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOtherAmtKeyDecimalSeperator"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOtherAmtKeyDecimalSeperator"));
        flxOtherAmtKeyboardRow4.add(btnOtherAmtKey0, imgOtherAmtKeyClearKeypad, imgOtherAmtKeyClear, btnOtherAmtKeyDecimalSeperator);
        flxOtherAmountKeyboard.add(flxOtherAmtKeyboardRow1, flxOtherAmtKeyboardRow2, flxOtherAmtKeyboardRow3, flxOtherAmtKeyboardRow4);
        flxKeypad.add(flxOtherAmountKeyboard);
        flxOtherAmount.add(flxOtherAmountScrollContainer, btnOtherAmountContinue, flxKeypad);
        var flxContactType = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxContactType",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContactType"), extendConfig({}, controller.args[1], "flxContactType"), extendConfig({}, controller.args[2], "flxContactType"));
        flxContactType.setDefaultUnit(kony.flex.DP);
        var flxContactTypeMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "87.44%",
            "id": "flxContactTypeMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeMain"), extendConfig({}, controller.args[1], "flxContactTypeMain"), extendConfig({}, controller.args[2], "flxContactTypeMain"));
        flxContactTypeMain.setDefaultUnit(kony.flex.DP);
        var flxContactTypeHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContactTypeHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeHeader"), extendConfig({}, controller.args[1], "flxContactTypeHeader"), extendConfig({}, controller.args[2], "flxContactTypeHeader"));
        flxContactTypeHeader.setDefaultUnit(kony.flex.DP);
        var flxContactTypeTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContactTypeTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeTop"), extendConfig({}, controller.args[1], "flxContactTypeTop"), extendConfig({}, controller.args[2], "flxContactTypeTop"));
        flxContactTypeTop.setDefaultUnit(kony.flex.DP);
        var flxContactTypeBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxContactTypeBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeBack"), extendConfig({}, controller.args[1], "flxContactTypeBack"), extendConfig({}, controller.args[2], "flxContactTypeBack"));
        flxContactTypeBack.setDefaultUnit(kony.flex.DP);
        var imgContactTypeBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgContactTypeBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backbutton.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgContactTypeBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgContactTypeBack"), extendConfig({}, controller.args[2], "imgContactTypeBack"));
        flxContactTypeBack.add(imgContactTypeBack);
        var btnContactTypeCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnContactTypeCancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnContactTypeCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactTypeCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnContactTypeCancel"));
        flxContactTypeTop.add(flxContactTypeBack, btnContactTypeCancel);
        var lblContactTypeHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblContactTypeHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("i18n.unified.contactType"),
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblContactTypeHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContactTypeHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblContactTypeHeader"));
        flxContactTypeHeader.add(flxContactTypeTop, lblContactTypeHeader);
        var flxContactTypeDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxContactTypeDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeDescription"), extendConfig({}, controller.args[1], "flxContactTypeDescription"), extendConfig({}, controller.args[2], "flxContactTypeDescription"));
        flxContactTypeDescription.setDefaultUnit(kony.flex.DP);
        var lblContactTypeDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "height": "47dp",
            "id": "lblContactTypeDescription",
            "isVisible": true,
            "left": "23dp",
            "right": "22dp",
            "skin": "ICSknLbl42424234px",
            "text": kony.i18n.getLocalizedString("i18n.unified.contactTypeDescription"),
            "textStyle": {},
            "top": "13dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "lblContactTypeDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContactTypeDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblContactTypeDescription"));
        flxContactTypeDescription.add(lblContactTypeDescription);
        var flxContactTypeSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxContactTypeSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeSeparator"), extendConfig({}, controller.args[1], "flxContactTypeSeparator"), extendConfig({}, controller.args[2], "flxContactTypeSeparator"));
        flxContactTypeSeparator.setDefaultUnit(kony.flex.DP);
        flxContactTypeSeparator.add();
        var flxContactTypeContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "62%",
            "id": "flxContactTypeContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeContainer"), extendConfig({}, controller.args[1], "flxContactTypeContainer"), extendConfig({}, controller.args[2], "flxContactTypeContainer"));
        flxContactTypeContainer.setDefaultUnit(kony.flex.DP);
        var flxContactTypeMainContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "flxContactTypeMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeMainContainer"), extendConfig({}, controller.args[1], "flxContactTypeMainContainer"), extendConfig({}, controller.args[2], "flxContactTypeMainContainer"));
        flxContactTypeMainContainer.setDefaultUnit(kony.flex.DP);
        var lblEmailErrorMsg = new kony.ui.Label(extendConfig({
            "bottom": "22dp",
            "centerX": "50%",
            "id": "lblEmailErrorMsg",
            "isVisible": false,
            "left": "30dp",
            "skin": "ICSknLblEE000534px",
            "text": kony.i18n.getLocalizedString("i18n.unified.contactEmailErrorMsg"),
            "textStyle": {},
            "top": "8dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "lblEmailErrorMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmailErrorMsg"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblEmailErrorMsg"));
        var flxContactTypePhoneNumber = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContactTypePhoneNumber",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxContactTypePhoneNumber"), extendConfig({}, controller.args[1], "flxContactTypePhoneNumber"), extendConfig({}, controller.args[2], "flxContactTypePhoneNumber"));
        flxContactTypePhoneNumber.setDefaultUnit(kony.flex.DP);
        var lblContactTypePhoneNumber = new kony.ui.Label(extendConfig({
            "id": "lblContactTypePhoneNumber",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.phoneNo"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblContactTypePhoneNumber"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContactTypePhoneNumber"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblContactTypePhoneNumber"));
        var flxContactTypePhoneNumberwrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "52dp",
            "id": "flxContactTypePhoneNumberwrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxContactTypePhoneNumberwrapper"), extendConfig({}, controller.args[1], "flxContactTypePhoneNumberwrapper"), extendConfig({}, controller.args[2], "flxContactTypePhoneNumberwrapper"));
        flxContactTypePhoneNumberwrapper.setDefaultUnit(kony.flex.DP);
        var flxFlagAndCodeContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxFlagAndCodeContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "4%",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "3dp",
            "width": "32%",
            "zIndex": 1
        }, controller.args[0], "flxFlagAndCodeContainer"), extendConfig({}, controller.args[1], "flxFlagAndCodeContainer"), extendConfig({}, controller.args[2], "flxFlagAndCodeContainer"));
        flxFlagAndCodeContainer.setDefaultUnit(kony.flex.DP);
        var imgContactTypeFlag = new kony.ui.Image2(extendConfig({
            "bottom": "12dp",
            "height": "23dp",
            "id": "imgContactTypeFlag",
            "isVisible": true,
            "left": "10dp",
            "src": "us.png",
            "top": "12dp",
            "width": "32dp",
            "zIndex": 1
        }, controller.args[0], "imgContactTypeFlag"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgContactTypeFlag"), extendConfig({}, controller.args[2], "imgContactTypeFlag"));
        var lblContactCode = new kony.ui.Label(extendConfig({
            "bottom": "15dp",
            "height": "19dp",
            "id": "lblContactCode",
            "isVisible": true,
            "left": "51dp",
            "right": "34dp",
            "skin": "ICSknLbl42424234px",
            "text": "+ 93",
            "textStyle": {},
            "top": "13dp",
            "width": "34dp",
            "zIndex": 1
        }, controller.args[0], "lblContactCode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContactCode"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblContactCode"));
        flxFlagAndCodeContainer.add(imgContactTypeFlag, lblContactCode);
        var flxMobileNumber = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxMobileNumber",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "4%",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "3dp",
            "width": "55%",
            "zIndex": 1
        }, controller.args[0], "flxMobileNumber"), extendConfig({}, controller.args[1], "flxMobileNumber"), extendConfig({}, controller.args[2], "flxMobileNumber"));
        flxMobileNumber.setDefaultUnit(kony.flex.DP);
        var lblMobileNumber = new kony.ui.Label(extendConfig({
            "bottom": "15dp",
            "centerY": "50%",
            "height": "65%",
            "id": "lblMobileNumber",
            "isVisible": true,
            "left": "15dp",
            "right": "34dp",
            "skin": "ICSknLbl42424234px",
            "text": kony.i18n.getLocalizedString("i18n.unified.enterNumber"),
            "textStyle": {},
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblMobileNumber"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMobileNumber"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMobileNumber"));
        flxMobileNumber.add(lblMobileNumber);
        flxContactTypePhoneNumberwrapper.add(flxFlagAndCodeContainer, flxMobileNumber);
        var flxContactTypeNumberOr = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxContactTypeNumberOr",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "14dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeNumberOr"), extendConfig({}, controller.args[1], "flxContactTypeNumberOr"), extendConfig({}, controller.args[2], "flxContactTypeNumberOr"));
        flxContactTypeNumberOr.setDefaultUnit(kony.flex.DP);
        var lblContactTypeOr = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "19dp",
            "id": "lblContactTypeOr",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Or"),
            "textStyle": {},
            "top": "4dp",
            "width": "14dp",
            "zIndex": 1
        }, controller.args[0], "lblContactTypeOr"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContactTypeOr"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblContactTypeOr"));
        flxContactTypeNumberOr.add(lblContactTypeOr);
        var btnChooseContactList = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknBtn4176A434px",
            "height": "19dp",
            "id": "btnChooseContactList",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknBtn4176A434px",
            "text": kony.i18n.getLocalizedString("i18n.unified.pickFromContactList"),
            "top": "15dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "btnChooseContactList"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnChooseContactList"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnChooseContactList"));
        var flxContactTypeNumberSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxContactTypeNumberSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "19dp",
            "isModalContainer": false,
            "right": "19dp",
            "skin": "ICSknFlxE3E3E3Border",
            "top": "19dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeNumberSeparator"), extendConfig({}, controller.args[1], "flxContactTypeNumberSeparator"), extendConfig({}, controller.args[2], "flxContactTypeNumberSeparator"));
        flxContactTypeNumberSeparator.setDefaultUnit(kony.flex.DP);
        flxContactTypeNumberSeparator.add();
        flxContactTypePhoneNumber.add(lblContactTypePhoneNumber, flxContactTypePhoneNumberwrapper, flxContactTypeNumberOr, btnChooseContactList, flxContactTypeNumberSeparator);
        var flxContactTypeEmailAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContactTypeEmailAddress",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxContactTypeEmailAddress"), extendConfig({}, controller.args[1], "flxContactTypeEmailAddress"), extendConfig({}, controller.args[2], "flxContactTypeEmailAddress"));
        flxContactTypeEmailAddress.setDefaultUnit(kony.flex.DP);
        var flxContactTypeEmailHeading = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContactTypeEmailHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxContactTypeEmailHeading"), extendConfig({}, controller.args[1], "flxContactTypeEmailHeading"), extendConfig({}, controller.args[2], "flxContactTypeEmailHeading"));
        flxContactTypeEmailHeading.setDefaultUnit(kony.flex.DP);
        var lblContactTypeEmailAddress = new kony.ui.Label(extendConfig({
            "id": "lblContactTypeEmailAddress",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("i18n.unified.emailAddress"),
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblContactTypeEmailAddress"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContactTypeEmailAddress"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblContactTypeEmailAddress"));
        flxContactTypeEmailHeading.add(lblContactTypeEmailAddress);
        var flxContactTypeEmailWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxContactTypeEmailWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 0,
            "isModalContainer": false,
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeEmailWrapper"), extendConfig({}, controller.args[1], "flxContactTypeEmailWrapper"), extendConfig({}, controller.args[2], "flxContactTypeEmailWrapper"));
        flxContactTypeEmailWrapper.setDefaultUnit(kony.flex.DP);
        var txtContactTypeEmail = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "47dp",
            "id": "txtContactTypeEmail",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "placeholder": kony.i18n.getLocalizedString("i18n.unified.emailPlaceholder"),
            "right": "5%",
            "secureTextEntry": false,
            "skin": "ICSknTxtE3E3E31px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtContactTypeEmail"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtContactTypeEmail"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtContactTypeEmail"));
        flxContactTypeEmailWrapper.add(txtContactTypeEmail);
        var flxContactTypeEmailOr = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxContactTypeEmailOr",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "14dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeEmailOr"), extendConfig({}, controller.args[1], "flxContactTypeEmailOr"), extendConfig({}, controller.args[2], "flxContactTypeEmailOr"));
        flxContactTypeEmailOr.setDefaultUnit(kony.flex.DP);
        var lblContactTypeEmailOr = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "19dp",
            "id": "lblContactTypeEmailOr",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Or"),
            "textStyle": {},
            "top": "4dp",
            "width": "14dp",
            "zIndex": 1
        }, controller.args[0], "lblContactTypeEmailOr"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblContactTypeEmailOr"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblContactTypeEmailOr"));
        flxContactTypeEmailOr.add(lblContactTypeEmailOr);
        var btnChooseFromContactsEmail = new kony.ui.Button(extendConfig({
            "bottom": "137dp",
            "centerX": "50%",
            "focusSkin": "ICSknBtn4176A434px",
            "height": "19dp",
            "id": "btnChooseFromContactsEmail",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknBtn4176A434px",
            "text": kony.i18n.getLocalizedString("kony.mb.p2p.pickFromContacts"),
            "top": "15dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "btnChooseFromContactsEmail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnChooseFromContactsEmail"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnChooseFromContactsEmail"));
        var flxContactTypeEmailSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxContactTypeEmailSeparator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "19dp",
            "isModalContainer": false,
            "right": "19dp",
            "skin": "ICSknFlxE3E3E3Border",
            "top": "19dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxContactTypeEmailSeparator"), extendConfig({}, controller.args[1], "flxContactTypeEmailSeparator"), extendConfig({}, controller.args[2], "flxContactTypeEmailSeparator"));
        flxContactTypeEmailSeparator.setDefaultUnit(kony.flex.DP);
        flxContactTypeEmailSeparator.add();
        flxContactTypeEmailAddress.add(flxContactTypeEmailHeading, flxContactTypeEmailWrapper, flxContactTypeEmailOr, btnChooseFromContactsEmail, flxContactTypeEmailSeparator);
        flxContactTypeMainContainer.add(lblEmailErrorMsg, flxContactTypePhoneNumber, flxContactTypeEmailAddress);
        flxContactTypeContainer.add(flxContactTypeMainContainer);
        flxContactTypeMain.add(flxContactTypeHeader, flxContactTypeDescription, flxContactTypeSeparator, flxContactTypeContainer);
        var flxContactTypeBtnContinue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "10.84%",
            "id": "flxContactTypeBtnContinue",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100%"
        }, controller.args[0], "flxContactTypeBtnContinue"), extendConfig({}, controller.args[1], "flxContactTypeBtnContinue"), extendConfig({}, controller.args[2], "flxContactTypeBtnContinue"));
        flxContactTypeBtnContinue.setDefaultUnit(kony.flex.DP);
        var flxContactTypeContinue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxContactTypeContinue",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Border",
            "top": "1dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxContactTypeContinue"), extendConfig({}, controller.args[1], "flxContactTypeContinue"), extendConfig({}, controller.args[2], "flxContactTypeContinue"));
        flxContactTypeContinue.setDefaultUnit(kony.flex.DP);
        flxContactTypeContinue.add();
        var btnContactTypeContinue = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "48dp",
            "id": "btnContactTypeContinue",
            "isVisible": true,
            "left": "7%",
            "right": "7%",
            "skin": "sknBtnOnBoardingInactive",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "top": "20dp",
            "width": "86%",
            "zIndex": 3
        }, controller.args[0], "btnContactTypeContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactTypeContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContactTypeContinue"));
        flxContactTypeBtnContinue.add(flxContactTypeContinue, btnContactTypeContinue);
        var flxContactTypeNumberKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "265dp",
            "id": "flxContactTypeNumberKeypad",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FB",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxContactTypeNumberKeypad"), extendConfig({}, controller.args[1], "flxContactTypeNumberKeypad"), extendConfig({}, controller.args[2], "flxContactTypeNumberKeypad"));
        flxContactTypeNumberKeypad.setDefaultUnit(kony.flex.DP);
        var flxArrowKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxArrowKeypad",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxArrowKeypad"), extendConfig({}, controller.args[1], "flxArrowKeypad"), extendConfig({}, controller.args[2], "flxArrowKeypad"));
        flxArrowKeypad.setDefaultUnit(kony.flex.DP);
        var btnContactTypeDone = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSkn007AFFSFReg34px",
            "height": "100%",
            "id": "btnContactTypeDone",
            "isVisible": true,
            "right": "2dp",
            "skin": "ICSkn007AFFSFReg34px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.done"),
            "top": "0",
            "width": "30%"
        }, controller.args[0], "btnContactTypeDone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactTypeDone"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnContactTypeDone"));
        flxArrowKeypad.add(btnContactTypeDone);
        var flxKeypadRow1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxKeypadRow1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRow1"), extendConfig({}, controller.args[1], "flxKeypadRow1"), extendConfig({}, controller.args[2], "flxKeypadRow1"));
        flxKeypadRow1.setDefaultUnit(kony.flex.DP);
        var btnContactType1 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "1",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType1"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContactType1"));
        var btnContactType2 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType2",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "2",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType2"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContactType2"));
        var btnContactType3 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType3",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "3",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType3"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContactType3"));
        flxKeypadRow1.add(btnContactType1, btnContactType2, btnContactType3);
        var flxKeypadRow2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxKeypadRow2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRow2"), extendConfig({}, controller.args[1], "flxKeypadRow2"), extendConfig({}, controller.args[2], "flxKeypadRow2"));
        flxKeypadRow2.setDefaultUnit(kony.flex.DP);
        var btnContactType4 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType4",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "4",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType4"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContactType4"));
        var btnContactType5 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType5",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "5",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType5"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContactType5"));
        var btnContactType6 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType6",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "6",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType6"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContactType6"));
        flxKeypadRow2.add(btnContactType4, btnContactType5, btnContactType6);
        var flxKeypadRow3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxKeypadRow3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRow3"), extendConfig({}, controller.args[1], "flxKeypadRow3"), extendConfig({}, controller.args[2], "flxKeypadRow3"));
        flxKeypadRow3.setDefaultUnit(kony.flex.DP);
        var btnContactType7 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType7",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "7",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType7"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContactType7"));
        var btnContactType8 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType8",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "8",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType8"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContactType8"));
        var btnContactType9 = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType9",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "9",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType9"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContactType9"));
        flxKeypadRow3.add(btnContactType7, btnContactType8, btnContactType9);
        var flxKeypadRow4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxKeypadRow4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRow4"), extendConfig({}, controller.args[1], "flxKeypadRow4"), extendConfig({}, controller.args[2], "flxKeypadRow4"));
        flxKeypadRow4.setDefaultUnit(kony.flex.DP);
        var btnContactType0 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "100%",
            "id": "btnContactType0",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "0",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactType0"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactType0"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContactType0"));
        var imgContactTypeKeypadClear = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "imgContactTypeKeypadClear",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 10
        }, controller.args[0], "imgContactTypeKeypadClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgContactTypeKeypadClear"), extendConfig({}, controller.args[2], "imgContactTypeKeypadClear"));
        var imgClearicon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgClearicon",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "imgClearicon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClearicon"), extendConfig({}, controller.args[2], "imgClearicon"));
        var btnContactTypeDecimal = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btnContactTypeDecimal",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": ",",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnContactTypeDecimal"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactTypeDecimal"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContactTypeDecimal"));
        flxKeypadRow4.add(btnContactType0, imgContactTypeKeypadClear, imgClearicon, btnContactTypeDecimal);
        flxContactTypeNumberKeypad.add(flxArrowKeypad, flxKeypadRow1, flxKeypadRow2, flxKeypadRow3, flxKeypadRow4);
        flxContactType.add(flxContactTypeMain, flxContactTypeBtnContinue, flxContactTypeNumberKeypad);
        var flxCountryCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCountryCode",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCode"), extendConfig({}, controller.args[1], "flxCountryCode"), extendConfig({}, controller.args[2], "flxCountryCode"));
        flxCountryCode.setDefaultUnit(kony.flex.DP);
        var flxCountryCodeHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCountryCodeHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCodeHeader"), extendConfig({}, controller.args[1], "flxCountryCodeHeader"), extendConfig({}, controller.args[2], "flxCountryCodeHeader"));
        flxCountryCodeHeader.setDefaultUnit(kony.flex.DP);
        var flxCountryCodeTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCountryCodeTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCodeTop"), extendConfig({}, controller.args[1], "flxCountryCodeTop"), extendConfig({}, controller.args[2], "flxCountryCodeTop"));
        flxCountryCodeTop.setDefaultUnit(kony.flex.DP);
        var flxCountryCodeBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCountryCodeBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCodeBack"), extendConfig({}, controller.args[1], "flxCountryCodeBack"), extendConfig({}, controller.args[2], "flxCountryCodeBack"));
        flxCountryCodeBack.setDefaultUnit(kony.flex.DP);
        var imgCountryCodeBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgCountryCodeBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgCountryCodeBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCountryCodeBack"), extendConfig({}, controller.args[2], "imgCountryCodeBack"));
        flxCountryCodeBack.add(imgCountryCodeBack);
        var btnCountryCodeCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnCountryCodeCancel",
            "isVisible": false,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnCountryCodeCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCountryCodeCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnCountryCodeCancel"));
        flxCountryCodeTop.add(flxCountryCodeBack, btnCountryCodeCancel);
        var lblCountryCodeHeader = new kony.ui.Label(extendConfig({
            "height": "42dp",
            "id": "lblCountryCodeHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": "Country Code",
            "textStyle": {},
            "top": "11dp",
            "width": "250dp",
            "zIndex": 1
        }, controller.args[0], "lblCountryCodeHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCountryCodeHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCountryCodeHeader"));
        var flxCountryCodeSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "36dp",
            "id": "flxCountryCodeSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxCountryCodeSearch"), extendConfig({}, controller.args[1], "flxCountryCodeSearch"), extendConfig({}, controller.args[2], "flxCountryCodeSearch"));
        flxCountryCodeSearch.setDefaultUnit(kony.flex.DP);
        var flxCountryCodeContents = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCountryCodeContents",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxBg003e7515px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxCountryCodeContents"), extendConfig({}, controller.args[1], "flxCountryCodeContents"), extendConfig({}, controller.args[2], "flxCountryCodeContents"));
        flxCountryCodeContents.setDefaultUnit(kony.flex.DP);
        var imgCountryCodeSearch = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgCountryCodeSearch",
            "isVisible": true,
            "left": "30dp",
            "src": "search_1.png",
            "width": "15dp",
            "zIndex": 10
        }, controller.args[0], "imgCountryCodeSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCountryCodeSearch"), extendConfig({}, controller.args[2], "imgCountryCodeSearch"));
        var tbxCountryCodeSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "ICSknTbxSSPR42424215px",
            "height": "87%",
            "id": "tbxCountryCodeSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Search ",
            "secureTextEntry": false,
            "skin": "ICSknTbxSSPR42424215px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "tbxCountryCodeSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [9, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxCountryCodeSearch"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTbxPlaceholderSSPR42424215px",
            "showClearButton": false,
            "showCloseButton": false,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxCountryCodeSearch"));
        var imgCountryCodeCloseIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgCountryCodeCloseIcon",
            "isVisible": false,
            "right": "31dp",
            "src": "closeicon.PNG",
            "width": "16dp",
            "zIndex": 10
        }, controller.args[0], "imgCountryCodeCloseIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCountryCodeCloseIcon"), extendConfig({}, controller.args[2], "imgCountryCodeCloseIcon"));
        flxCountryCodeContents.add(imgCountryCodeSearch, tbxCountryCodeSearch, imgCountryCodeCloseIcon);
        var flxCountryCodeShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-5dp",
            "clipBounds": true,
            "height": "5dp",
            "id": "flxCountryCodeShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxShadow000fff",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCodeShadow"), extendConfig({}, controller.args[1], "flxCountryCodeShadow"), extendConfig({}, controller.args[2], "flxCountryCodeShadow"));
        flxCountryCodeShadow.setDefaultUnit(kony.flex.DP);
        flxCountryCodeShadow.add();
        flxCountryCodeSearch.add(flxCountryCodeContents, flxCountryCodeShadow);
        flxCountryCodeHeader.add(flxCountryCodeTop, lblCountryCodeHeader, flxCountryCodeSearch);
        var flxCountryCodeSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0dp",
            "id": "flxCountryCodeSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCodeSeparator"), extendConfig({}, controller.args[1], "flxCountryCodeSeparator"), extendConfig({}, controller.args[2], "flxCountryCodeSeparator"));
        flxCountryCodeSeparator.setDefaultUnit(kony.flex.DP);
        flxCountryCodeSeparator.add();
        var segCountryCode = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }, {
                "imgCountryCodeFlag": "french.png",
                "imgRightArrow": "arrow_1x.png",
                "lblCountryCode": "93",
                "lblCountryName": "Afghanistan"
            }],
            "groupCells": false,
            "height": "75%",
            "id": "segCountryCode",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowTemplate": "flxCountryCode",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxCode": "flxCode",
                "flxCountry": "flxCountry",
                "flxCountryCode": "flxCountryCode",
                "flxImageRightArrow": "flxImageRightArrow",
                "flxSeparator": "flxSeparator",
                "imgCountryCodeFlag": "imgCountryCodeFlag",
                "imgRightArrow": "imgRightArrow",
                "lblCountryCode": "lblCountryCode",
                "lblCountryName": "lblCountryName"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segCountryCode"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segCountryCode"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segCountryCode"));
        var flxCountryCodeNoResults = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75%",
            "id": "flxCountryCodeNoResults",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCountryCodeNoResults"), extendConfig({}, controller.args[1], "flxCountryCodeNoResults"), extendConfig({}, controller.args[2], "flxCountryCodeNoResults"));
        flxCountryCodeNoResults.setDefaultUnit(kony.flex.DP);
        var lblCountryCodeNoResults = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "19dp",
            "id": "lblCountryCodeNoResults",
            "isVisible": true,
            "right": "35%",
            "skin": "ICSknLbl72727234px",
            "text": "No results found",
            "textStyle": {},
            "top": 74,
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "lblCountryCodeNoResults"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCountryCodeNoResults"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCountryCodeNoResults"));
        flxCountryCodeNoResults.add(lblCountryCodeNoResults);
        flxCountryCode.add(flxCountryCodeHeader, flxCountryCodeSeparator, segCountryCode, flxCountryCodeNoResults);
        var flxVerifyDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerifyDetails",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxVerifyDetails"), extendConfig({}, controller.args[1], "flxVerifyDetails"), extendConfig({}, controller.args[2], "flxVerifyDetails"));
        flxVerifyDetails.setDefaultUnit(kony.flex.DP);
        var flxVerifyDetailMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerifyDetailMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxVerifyDetailMainContainer"), extendConfig({}, controller.args[1], "flxVerifyDetailMainContainer"), extendConfig({}, controller.args[2], "flxVerifyDetailMainContainer"));
        flxVerifyDetailMainContainer.setDefaultUnit(kony.flex.DP);
        var flxVerifyDetailsMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "92%",
            "id": "flxVerifyDetailsMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxVerifyDetailsMain"), extendConfig({}, controller.args[1], "flxVerifyDetailsMain"), extendConfig({}, controller.args[2], "flxVerifyDetailsMain"));
        flxVerifyDetailsMain.setDefaultUnit(kony.flex.DP);
        var flxVerifyHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxVerifyHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1a98ff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxVerifyHeader"), extendConfig({}, controller.args[1], "flxVerifyHeader"), extendConfig({}, controller.args[2], "flxVerifyHeader"));
        flxVerifyHeader.setDefaultUnit(kony.flex.DP);
        var flxVerifyHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxVerifyHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxVerifyHeaderTop"), extendConfig({}, controller.args[1], "flxVerifyHeaderTop"), extendConfig({}, controller.args[2], "flxVerifyHeaderTop"));
        flxVerifyHeaderTop.setDefaultUnit(kony.flex.DP);
        var imgVerifyBack = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgVerifyBack",
            "isVisible": true,
            "left": "23dp",
            "src": "backbutton_1.png",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgVerifyBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgVerifyBack"), extendConfig({}, controller.args[2], "imgVerifyBack"));
        var btnVerifyCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnVerifyCancel",
            "isVisible": true,
            "right": "21px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "25dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnVerifyCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnVerifyCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnVerifyCancel"));
        flxVerifyHeaderTop.add(imgVerifyBack, btnVerifyCancel);
        var lblVerifyName = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "id": "lblVerifyName",
            "isVisible": true,
            "left": "25dp",
            "skin": "ICSknHeaderFFF",
            "text": "Verify Details",
            "textStyle": {},
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblVerifyName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVerifyName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblVerifyName"));
        flxVerifyHeader.add(flxVerifyHeaderTop, lblVerifyName);
        var flxReviewMain = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "70dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "85%",
            "horizontalScrollIndicator": true,
            "id": "flxReviewMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknFlxScrlffffff",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReviewMain"), extendConfig({}, controller.args[1], "flxReviewMain"), extendConfig({}, controller.args[2], "flxReviewMain"));
        flxReviewMain.setDefaultUnit(kony.flex.DP);
        var flxMMAmount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMMAmount",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMMAmount"), extendConfig({}, controller.args[1], "flxMMAmount"), extendConfig({}, controller.args[2], "flxMMAmount"));
        flxMMAmount.setDefaultUnit(kony.flex.DP);
        var flxToAndFrom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "146dp",
            "id": "flxToAndFrom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxToAndFrom"), extendConfig({}, controller.args[1], "flxToAndFrom"), extendConfig({}, controller.args[2], "flxToAndFrom"));
        flxToAndFrom.setDefaultUnit(kony.flex.DP);
        var flxToAcc = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlxf9f9f9",
            "height": "72dp",
            "id": "flxToAcc",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxToAcc"), extendConfig({}, controller.args[1], "flxToAcc"), extendConfig({}, controller.args[2], "flxToAcc"));
        flxToAcc.setDefaultUnit(kony.flex.DP);
        var lblFrom = new kony.ui.Label(extendConfig({
            "id": "lblFrom",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": kony.i18n.getLocalizedString("kony.mb.common.from"),
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblFrom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFrom"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFrom"));
        var flxFromAcc = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55.44%",
            "id": "flxFromAcc",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "51dp",
            "isModalContainer": false,
            "top": "17dp",
            "width": "77.07%"
        }, controller.args[0], "flxFromAcc"), extendConfig({}, controller.args[1], "flxFromAcc"), extendConfig({}, controller.args[2], "flxFromAcc"));
        flxFromAcc.setDefaultUnit(kony.flex.DP);
        var flxFromAccType = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxFromAccType",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": 5,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFromAccType"), extendConfig({}, controller.args[1], "flxFromAccType"), extendConfig({}, controller.args[2], "flxFromAccType"));
        flxFromAccType.setDefaultUnit(kony.flex.DP);
        var flxAccType = new kony.ui.Label(extendConfig({
            "id": "flxAccType",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknMMBlueLabel",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxAccType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "flxAccType"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "flxAccType"));
        var flxAccImg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "13dp",
            "id": "flxAccImg",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "flxIconShadow7px7d7d7dBorder1pxe3e3e3",
            "top": "0dp",
            "width": "13dp"
        }, controller.args[0], "flxAccImg"), extendConfig({}, controller.args[1], "flxAccImg"), extendConfig({}, controller.args[2], "flxAccImg"));
        flxAccImg.setDefaultUnit(kony.flex.DP);
        var imgAccType = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "13dp",
            "id": "imgAccType",
            "isVisible": true,
            "skin": "slImage",
            "src": "businessaccount.png",
            "width": "13dp"
        }, controller.args[0], "imgAccType"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAccType"), extendConfig({}, controller.args[2], "imgAccType"));
        flxAccImg.add(imgAccType);
        flxFromAccType.add(flxAccType, flxAccImg);
        var flxAvailableBalanceFrom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAvailableBalanceFrom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "f9f9",
            "top": "3dp",
            "width": "100%"
        }, controller.args[0], "flxAvailableBalanceFrom"), extendConfig({}, controller.args[1], "flxAvailableBalanceFrom"), extendConfig({}, controller.args[2], "flxAvailableBalanceFrom"));
        flxAvailableBalanceFrom.setDefaultUnit(kony.flex.DP);
        var lblBalanceLabel = new kony.ui.Label(extendConfig({
            "id": "lblBalanceLabel",
            "isVisible": true,
            "left": 10,
            "right": "0dp",
            "skin": "sknLbla0a0a0SSP26px",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBalanceLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBalanceLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBalanceLabel"));
        var lblBalanceValue = new kony.ui.Label(extendConfig({
            "id": "lblBalanceValue",
            "isVisible": true,
            "right": "-5dp",
            "skin": "sknLbla0a0a0SSP26px",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBalanceValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBalanceValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBalanceValue"));
        flxAvailableBalanceFrom.add(lblBalanceLabel, lblBalanceValue);
        flxFromAcc.add(flxFromAccType, flxAvailableBalanceFrom);
        var flxFromArrow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxFromArrow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "11%",
            "zIndex": 2
        }, controller.args[0], "flxFromArrow"), extendConfig({}, controller.args[1], "flxFromArrow"), extendConfig({}, controller.args[2], "flxFromArrow"));
        flxFromArrow.setDefaultUnit(kony.flex.DP);
        var imgFromArrow = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgFromArrow",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 2
        }, controller.args[0], "imgFromArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFromArrow"), extendConfig({}, controller.args[2], "imgFromArrow"));
        flxFromArrow.add(imgFromArrow);
        flxToAcc.add(lblFrom, flxFromAcc, flxFromArrow);
        var flxSeperator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxSeperator1"), extendConfig({}, controller.args[1], "flxSeperator1"), extendConfig({}, controller.args[2], "flxSeperator1"));
        flxSeperator1.setDefaultUnit(kony.flex.DP);
        flxSeperator1.add();
        var flxTo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlxf9f9f9",
            "height": "72dp",
            "id": "flxTo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTo"), extendConfig({}, controller.args[1], "flxTo"), extendConfig({}, controller.args[2], "flxTo"));
        flxTo.setDefaultUnit(kony.flex.DP);
        var lblTo = new kony.ui.Label(extendConfig({
            "id": "lblTo",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "To",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblTo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTo"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTo"));
        var flxToAccont = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55.44%",
            "id": "flxToAccont",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "51dp",
            "isModalContainer": false,
            "top": "17dp",
            "width": "77.07%"
        }, controller.args[0], "flxToAccont"), extendConfig({}, controller.args[1], "flxToAccont"), extendConfig({}, controller.args[2], "flxToAccont"));
        flxToAccont.setDefaultUnit(kony.flex.DP);
        var flxToAccType = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxToAccType",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": 5,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxToAccType"), extendConfig({}, controller.args[1], "flxToAccType"), extendConfig({}, controller.args[2], "flxToAccType"));
        flxToAccType.setDefaultUnit(kony.flex.DP);
        var lblToAccType = new kony.ui.Label(extendConfig({
            "id": "lblToAccType",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknMMBlueLabel",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblToAccType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToAccType"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblToAccType"));
        var flxAccTypeImg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "13dp",
            "id": "flxAccTypeImg",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "flxIconShadow7px7d7d7dBorder1pxe3e3e3",
            "top": "0dp",
            "width": "13dp"
        }, controller.args[0], "flxAccTypeImg"), extendConfig({}, controller.args[1], "flxAccTypeImg"), extendConfig({}, controller.args[2], "flxAccTypeImg"));
        flxAccTypeImg.setDefaultUnit(kony.flex.DP);
        var imgToAccImg = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "13dp",
            "id": "imgToAccImg",
            "isVisible": true,
            "skin": "slImage",
            "src": "businessaccount.png",
            "width": "13dp"
        }, controller.args[0], "imgToAccImg"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgToAccImg"), extendConfig({}, controller.args[2], "imgToAccImg"));
        flxAccTypeImg.add(imgToAccImg);
        flxToAccType.add(lblToAccType, flxAccTypeImg);
        var flxAvailableBalanceTo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAvailableBalanceTo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "f9f9",
            "top": "3dp",
            "width": "100%"
        }, controller.args[0], "flxAvailableBalanceTo"), extendConfig({}, controller.args[1], "flxAvailableBalanceTo"), extendConfig({}, controller.args[2], "flxAvailableBalanceTo"));
        flxAvailableBalanceTo.setDefaultUnit(kony.flex.DP);
        var lblAvailableBalanceToValue = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "id": "lblAvailableBalanceToValue",
            "isVisible": true,
            "left": 10,
            "right": "0dp",
            "skin": "sknLbla0a0a0SSP26px",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAvailableBalanceToValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAvailableBalanceToValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAvailableBalanceToValue"));
        var lblAvailableBalanceToLabel = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "id": "lblAvailableBalanceToLabel",
            "isVisible": true,
            "right": "-5dp",
            "skin": "sknLbla0a0a0SSP26px",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAvailableBalanceToLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAvailableBalanceToLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAvailableBalanceToLabel"));
        flxAvailableBalanceTo.add(lblAvailableBalanceToValue, lblAvailableBalanceToLabel);
        flxToAccont.add(flxToAccType, flxAvailableBalanceTo);
        var flxToArrow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxToArrow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "11%",
            "zIndex": 2
        }, controller.args[0], "flxToArrow"), extendConfig({}, controller.args[1], "flxToArrow"), extendConfig({}, controller.args[2], "flxToArrow"));
        flxToArrow.setDefaultUnit(kony.flex.DP);
        var CopyimgFromArrow0e9241c1468a94d = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "CopyimgFromArrow0e9241c1468a94d",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 2
        }, controller.args[0], "CopyimgFromArrow0e9241c1468a94d"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyimgFromArrow0e9241c1468a94d"), extendConfig({}, controller.args[2], "CopyimgFromArrow0e9241c1468a94d"));
        flxToArrow.add(CopyimgFromArrow0e9241c1468a94d);
        flxTo.add(lblTo, flxToAccont, flxToArrow);
        var flxSeparator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxSeparator2"), extendConfig({}, controller.args[1], "flxSeparator2"), extendConfig({}, controller.args[2], "flxSeparator2"));
        flxSeparator2.setDefaultUnit(kony.flex.DP);
        flxSeparator2.add();
        flxToAndFrom.add(flxToAcc, flxSeperator1, flxTo, flxSeparator2);
        var flxConfirmationDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxConfirmationDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxConfirmationDetails"), extendConfig({}, controller.args[1], "flxConfirmationDetails"), extendConfig({}, controller.args[2], "flxConfirmationDetails"));
        flxConfirmationDetails.setDefaultUnit(kony.flex.DP);
        var flxField1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField1"), extendConfig({}, controller.args[1], "flxField1"), extendConfig({}, controller.args[2], "flxField1"));
        flxField1.setDefaultUnit(kony.flex.DP);
        var lblField1Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField1Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField1Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField1Label"));
        var lblField1Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField1Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField1Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField1Value"));
        var imgArrow1 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow1",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow1"), extendConfig({}, controller.args[2], "imgArrow1"));
        var flxCfmSeparator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator1"), extendConfig({}, controller.args[1], "flxCfmSeparator1"), extendConfig({}, controller.args[2], "flxCfmSeparator1"));
        flxCfmSeparator1.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator1.add();
        flxField1.add(lblField1Label, lblField1Value, imgArrow1, flxCfmSeparator1);
        var flxField2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField2"), extendConfig({}, controller.args[1], "flxField2"), extendConfig({}, controller.args[2], "flxField2"));
        flxField2.setDefaultUnit(kony.flex.DP);
        var lblField2Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField2Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField2Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField2Label"));
        var lblField2Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField2Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField2Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField2Value"));
        var imgArrow2 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow2",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow2"), extendConfig({}, controller.args[2], "imgArrow2"));
        var flxCfmSeparator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator2"), extendConfig({}, controller.args[1], "flxCfmSeparator2"), extendConfig({}, controller.args[2], "flxCfmSeparator2"));
        flxCfmSeparator2.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator2.add();
        flxField2.add(lblField2Label, lblField2Value, imgArrow2, flxCfmSeparator2);
        var flxField3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField3"), extendConfig({}, controller.args[1], "flxField3"), extendConfig({}, controller.args[2], "flxField3"));
        flxField3.setDefaultUnit(kony.flex.DP);
        var lblField3Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField3Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField3Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField3Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField3Label"));
        var lblField3Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField3Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField3Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField3Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField3Value"));
        var imgArrow3 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow3",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow3"), extendConfig({}, controller.args[2], "imgArrow3"));
        var flxCfmSeparator3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator3"), extendConfig({}, controller.args[1], "flxCfmSeparator3"), extendConfig({}, controller.args[2], "flxCfmSeparator3"));
        flxCfmSeparator3.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator3.add();
        flxField3.add(lblField3Label, lblField3Value, imgArrow3, flxCfmSeparator3);
        var flxField4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField4"), extendConfig({}, controller.args[1], "flxField4"), extendConfig({}, controller.args[2], "flxField4"));
        flxField4.setDefaultUnit(kony.flex.DP);
        var lblField4Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField4Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField4Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField4Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField4Label"));
        var lblField4Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField4Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField4Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField4Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField4Value"));
        var imgArrow4 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow4",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow4"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow4"), extendConfig({}, controller.args[2], "imgArrow4"));
        var flxCfmSeparator4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator4"), extendConfig({}, controller.args[1], "flxCfmSeparator4"), extendConfig({}, controller.args[2], "flxCfmSeparator4"));
        flxCfmSeparator4.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator4.add();
        flxField4.add(lblField4Label, lblField4Value, imgArrow4, flxCfmSeparator4);
        var flxField5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField5"), extendConfig({}, controller.args[1], "flxField5"), extendConfig({}, controller.args[2], "flxField5"));
        flxField5.setDefaultUnit(kony.flex.DP);
        var lblField5Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField5Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField5Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField5Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField5Label"));
        var lblField5Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField5Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField5Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField5Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField5Value"));
        var imgArrow5 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow5",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow5"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow5"), extendConfig({}, controller.args[2], "imgArrow5"));
        var flxCfmSeparator5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator5"), extendConfig({}, controller.args[1], "flxCfmSeparator5"), extendConfig({}, controller.args[2], "flxCfmSeparator5"));
        flxCfmSeparator5.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator5.add();
        flxField5.add(lblField5Label, lblField5Value, imgArrow5, flxCfmSeparator5);
        var flxField6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField6"), extendConfig({}, controller.args[1], "flxField6"), extendConfig({}, controller.args[2], "flxField6"));
        flxField6.setDefaultUnit(kony.flex.DP);
        var lblField6Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField6Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField6Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField6Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField6Label"));
        var lblField6Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField6Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField6Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField6Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField6Value"));
        var imgArrow6 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow6",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow6"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow6"), extendConfig({}, controller.args[2], "imgArrow6"));
        var flxCfmSeparator6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator6"), extendConfig({}, controller.args[1], "flxCfmSeparator6"), extendConfig({}, controller.args[2], "flxCfmSeparator6"));
        flxCfmSeparator6.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator6.add();
        flxField6.add(lblField6Label, lblField6Value, imgArrow6, flxCfmSeparator6);
        var flxField7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField7"), extendConfig({}, controller.args[1], "flxField7"), extendConfig({}, controller.args[2], "flxField7"));
        flxField7.setDefaultUnit(kony.flex.DP);
        var lblField7Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField7Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField7Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField7Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField7Label"));
        var lblField7Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField7Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField7Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField7Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField7Value"));
        var imgArrow7 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow7",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow7"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow7"), extendConfig({}, controller.args[2], "imgArrow7"));
        var flxCfmSeparator7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator7"), extendConfig({}, controller.args[1], "flxCfmSeparator7"), extendConfig({}, controller.args[2], "flxCfmSeparator7"));
        flxCfmSeparator7.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator7.add();
        flxField7.add(lblField7Label, lblField7Value, imgArrow7, flxCfmSeparator7);
        var flxField8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField8"), extendConfig({}, controller.args[1], "flxField8"), extendConfig({}, controller.args[2], "flxField8"));
        flxField8.setDefaultUnit(kony.flex.DP);
        var lblField8Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField8Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField8Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField8Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField8Label"));
        var lblField8Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField8Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField8Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField8Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField8Value"));
        var imgArrow8 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow8",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow8"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow8"), extendConfig({}, controller.args[2], "imgArrow8"));
        var flxCfmSeparator8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator8"), extendConfig({}, controller.args[1], "flxCfmSeparator8"), extendConfig({}, controller.args[2], "flxCfmSeparator8"));
        flxCfmSeparator8.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator8.add();
        flxField8.add(lblField8Label, lblField8Value, imgArrow8, flxCfmSeparator8);
        var flxField9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField9",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField9"), extendConfig({}, controller.args[1], "flxField9"), extendConfig({}, controller.args[2], "flxField9"));
        flxField9.setDefaultUnit(kony.flex.DP);
        var lblField9Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField9Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField9Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField9Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField9Label"));
        var lblField9Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField9Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField9Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField9Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField9Value"));
        var imgArrow9 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow9",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow9"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow9"), extendConfig({}, controller.args[2], "imgArrow9"));
        var flxCfmSeparator9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator9",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator9"), extendConfig({}, controller.args[1], "flxCfmSeparator9"), extendConfig({}, controller.args[2], "flxCfmSeparator9"));
        flxCfmSeparator9.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator9.add();
        flxField9.add(lblField9Label, lblField9Value, imgArrow9, flxCfmSeparator9);
        var flxField10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField10",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField10"), extendConfig({}, controller.args[1], "flxField10"), extendConfig({}, controller.args[2], "flxField10"));
        flxField10.setDefaultUnit(kony.flex.DP);
        var lblField10Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField10Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField10Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField10Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField10Label"));
        var lblField10Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField10Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField10Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField10Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField10Value"));
        var imgArrow10 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow10",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow10"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow10"), extendConfig({}, controller.args[2], "imgArrow10"));
        var flxCfmSeparator10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator10",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator10"), extendConfig({}, controller.args[1], "flxCfmSeparator10"), extendConfig({}, controller.args[2], "flxCfmSeparator10"));
        flxCfmSeparator10.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator10.add();
        flxField10.add(lblField10Label, lblField10Value, imgArrow10, flxCfmSeparator10);
        var flxField11 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField11",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField11"), extendConfig({}, controller.args[1], "flxField11"), extendConfig({}, controller.args[2], "flxField11"));
        flxField11.setDefaultUnit(kony.flex.DP);
        var lblField11Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField11Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField11Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField11Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField11Label"));
        var lblField11Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField11Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField11Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField11Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField11Value"));
        var imgArrow11 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow11",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow11"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow11"), extendConfig({}, controller.args[2], "imgArrow11"));
        var flxCfmSeparator11 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator11",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator11"), extendConfig({}, controller.args[1], "flxCfmSeparator11"), extendConfig({}, controller.args[2], "flxCfmSeparator11"));
        flxCfmSeparator11.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator11.add();
        flxField11.add(lblField11Label, lblField11Value, imgArrow11, flxCfmSeparator11);
        var flxField12 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField12",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField12"), extendConfig({}, controller.args[1], "flxField12"), extendConfig({}, controller.args[2], "flxField12"));
        flxField12.setDefaultUnit(kony.flex.DP);
        var lblField12Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField12Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField12Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField12Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField12Label"));
        var lblField12Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField12Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField12Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField12Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField12Value"));
        var imgArrow12 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow12",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow12"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow12"), extendConfig({}, controller.args[2], "imgArrow12"));
        var flxCfmSeparator12 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator12",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator12"), extendConfig({}, controller.args[1], "flxCfmSeparator12"), extendConfig({}, controller.args[2], "flxCfmSeparator12"));
        flxCfmSeparator12.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator12.add();
        flxField12.add(lblField12Label, lblField12Value, imgArrow12, flxCfmSeparator12);
        var flxField13 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField13",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField13"), extendConfig({}, controller.args[1], "flxField13"), extendConfig({}, controller.args[2], "flxField13"));
        flxField13.setDefaultUnit(kony.flex.DP);
        var lblField13Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField13Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField13Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField13Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField13Label"));
        var lblField13Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField13Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField13Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField13Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField13Value"));
        var imgArrow13 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow13",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow13"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow13"), extendConfig({}, controller.args[2], "imgArrow13"));
        var flxCfmSeparator13 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator13",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator13"), extendConfig({}, controller.args[1], "flxCfmSeparator13"), extendConfig({}, controller.args[2], "flxCfmSeparator13"));
        flxCfmSeparator13.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator13.add();
        flxField13.add(lblField13Label, lblField13Value, imgArrow13, flxCfmSeparator13);
        var flxField14 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField14",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField14"), extendConfig({}, controller.args[1], "flxField14"), extendConfig({}, controller.args[2], "flxField14"));
        flxField14.setDefaultUnit(kony.flex.DP);
        var lblField14Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField14Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField14Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField14Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField14Label"));
        var lblField14Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField14Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField14Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField14Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField14Value"));
        var imgArrow14 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow14",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow14"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow14"), extendConfig({}, controller.args[2], "imgArrow14"));
        var flxCfmSeparator14 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator14",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator14"), extendConfig({}, controller.args[1], "flxCfmSeparator14"), extendConfig({}, controller.args[2], "flxCfmSeparator14"));
        flxCfmSeparator14.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator14.add();
        flxField14.add(lblField14Label, lblField14Value, imgArrow14, flxCfmSeparator14);
        var flxField15 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField15",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField15"), extendConfig({}, controller.args[1], "flxField15"), extendConfig({}, controller.args[2], "flxField15"));
        flxField15.setDefaultUnit(kony.flex.DP);
        var lblField15Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField15Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField15Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField15Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField15Label"));
        var lblField15Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField15Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField15Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField15Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField15Value"));
        var imgArrow15 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow15",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow15"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow15"), extendConfig({}, controller.args[2], "imgArrow15"));
        var flxCfmSeparator15 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator15",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator15"), extendConfig({}, controller.args[1], "flxCfmSeparator15"), extendConfig({}, controller.args[2], "flxCfmSeparator15"));
        flxCfmSeparator15.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator15.add();
        flxField15.add(lblField15Label, lblField15Value, imgArrow15, flxCfmSeparator15);
        var flxField16 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField16",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField16"), extendConfig({}, controller.args[1], "flxField16"), extendConfig({}, controller.args[2], "flxField16"));
        flxField16.setDefaultUnit(kony.flex.DP);
        var lblField16Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField16Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField16Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField16Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField16Label"));
        var lblField16Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField16Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField16Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField16Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField16Value"));
        var imgArrow16 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow16",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow16"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow16"), extendConfig({}, controller.args[2], "imgArrow16"));
        var flxCfmSeparator16 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator16",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator16"), extendConfig({}, controller.args[1], "flxCfmSeparator16"), extendConfig({}, controller.args[2], "flxCfmSeparator16"));
        flxCfmSeparator16.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator16.add();
        flxField16.add(lblField16Label, lblField16Value, imgArrow16, flxCfmSeparator16);
        var flxField17 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField17",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField17"), extendConfig({}, controller.args[1], "flxField17"), extendConfig({}, controller.args[2], "flxField17"));
        flxField17.setDefaultUnit(kony.flex.DP);
        var lblField17Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField17Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField17Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField17Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField17Label"));
        var lblField17Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField17Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField17Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField17Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField17Value"));
        var imgArrow17 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow17",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow17"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow17"), extendConfig({}, controller.args[2], "imgArrow17"));
        var flxCfmSeparator17 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator17",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator17"), extendConfig({}, controller.args[1], "flxCfmSeparator17"), extendConfig({}, controller.args[2], "flxCfmSeparator17"));
        flxCfmSeparator17.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator17.add();
        flxField17.add(lblField17Label, lblField17Value, imgArrow17, flxCfmSeparator17);
        var flxReadOnlyField1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxReadOnlyField1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxReadOnlyField1"), extendConfig({}, controller.args[1], "flxReadOnlyField1"), extendConfig({}, controller.args[2], "flxReadOnlyField1"));
        flxReadOnlyField1.setDefaultUnit(kony.flex.DP);
        var lblReadOnlyField1Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField1Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Exchange Rate:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField1Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField1Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField1Label"));
        var lblReadOnlyField1Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField1Value",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField1Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField1Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField1Value"));
        var flxReadOnlyField1Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxReadOnlyField1Separator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReadOnlyField1Separator"), extendConfig({}, controller.args[1], "flxReadOnlyField1Separator"), extendConfig({}, controller.args[2], "flxReadOnlyField1Separator"));
        flxReadOnlyField1Separator.setDefaultUnit(kony.flex.DP);
        flxReadOnlyField1Separator.add();
        flxReadOnlyField1.add(lblReadOnlyField1Label, lblReadOnlyField1Value, flxReadOnlyField1Separator);
        var flxReadOnlyField2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxReadOnlyField2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxReadOnlyField2"), extendConfig({}, controller.args[1], "flxReadOnlyField2"), extendConfig({}, controller.args[2], "flxReadOnlyField2"));
        flxReadOnlyField2.setDefaultUnit(kony.flex.DP);
        var lblReadOnlyField2Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField2Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Exchange Rate:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField2Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField2Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField2Label"));
        var lblReadOnlyField2Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField2Value",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField2Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField2Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField2Value"));
        var lblReadOnlyField2Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "lblReadOnlyField2Separator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField2Separator"), extendConfig({}, controller.args[1], "lblReadOnlyField2Separator"), extendConfig({}, controller.args[2], "lblReadOnlyField2Separator"));
        lblReadOnlyField2Separator.setDefaultUnit(kony.flex.DP);
        lblReadOnlyField2Separator.add();
        flxReadOnlyField2.add(lblReadOnlyField2Label, lblReadOnlyField2Value, lblReadOnlyField2Separator);
        var flxReadOnlyField3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxReadOnlyField3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxReadOnlyField3"), extendConfig({}, controller.args[1], "flxReadOnlyField3"), extendConfig({}, controller.args[2], "flxReadOnlyField3"));
        flxReadOnlyField3.setDefaultUnit(kony.flex.DP);
        var lblReadOnlyField3Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField3Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Exchange Rate:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField3Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField3Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField3Label"));
        var lblReadOnlyField3Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField3Value",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField3Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField3Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField3Value"));
        var lblReadOnlyField3Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "lblReadOnlyField3Separator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField3Separator"), extendConfig({}, controller.args[1], "lblReadOnlyField3Separator"), extendConfig({}, controller.args[2], "lblReadOnlyField3Separator"));
        lblReadOnlyField3Separator.setDefaultUnit(kony.flex.DP);
        lblReadOnlyField3Separator.add();
        flxReadOnlyField3.add(lblReadOnlyField3Label, lblReadOnlyField3Value, lblReadOnlyField3Separator);
        var flxReadOnlyField4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxReadOnlyField4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxReadOnlyField4"), extendConfig({}, controller.args[1], "flxReadOnlyField4"), extendConfig({}, controller.args[2], "flxReadOnlyField4"));
        flxReadOnlyField4.setDefaultUnit(kony.flex.DP);
        var lblReadOnlyField4Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField4Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Exchange Rate:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField4Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField4Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField4Label"));
        var lblReadOnlyField4Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField4Value",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField4Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField4Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField4Value"));
        var lblReadOnlyField4Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "lblReadOnlyField4Separator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField4Separator"), extendConfig({}, controller.args[1], "lblReadOnlyField4Separator"), extendConfig({}, controller.args[2], "lblReadOnlyField4Separator"));
        lblReadOnlyField4Separator.setDefaultUnit(kony.flex.DP);
        lblReadOnlyField4Separator.add();
        flxReadOnlyField4.add(lblReadOnlyField4Label, lblReadOnlyField4Value, lblReadOnlyField4Separator);
        var flxReadOnlyField5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxReadOnlyField5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxReadOnlyField5"), extendConfig({}, controller.args[1], "flxReadOnlyField5"), extendConfig({}, controller.args[2], "flxReadOnlyField5"));
        flxReadOnlyField5.setDefaultUnit(kony.flex.DP);
        var lblReadOnlyField5Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField5Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Exchange Rate:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField5Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField5Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField5Label"));
        var lblReadOnlyField5Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField5Value",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField5Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField5Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField5Value"));
        var lblReadOnlyField5Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "lblReadOnlyField5Separator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField5Separator"), extendConfig({}, controller.args[1], "lblReadOnlyField5Separator"), extendConfig({}, controller.args[2], "lblReadOnlyField5Separator"));
        lblReadOnlyField5Separator.setDefaultUnit(kony.flex.DP);
        lblReadOnlyField5Separator.add();
        flxReadOnlyField5.add(lblReadOnlyField5Label, lblReadOnlyField5Value, lblReadOnlyField5Separator);
        var flxReadOnlyField6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxReadOnlyField6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxReadOnlyField6"), extendConfig({}, controller.args[1], "flxReadOnlyField6"), extendConfig({}, controller.args[2], "flxReadOnlyField6"));
        flxReadOnlyField6.setDefaultUnit(kony.flex.DP);
        var lblReadOnlyField6Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField6Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Exchange Rate:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField6Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField6Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField6Label"));
        var lblReadOnlyField6Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField6Value",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField6Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField6Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField6Value"));
        var lblReadOnlyField6Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "lblReadOnlyField6Separator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField6Separator"), extendConfig({}, controller.args[1], "lblReadOnlyField6Separator"), extendConfig({}, controller.args[2], "lblReadOnlyField6Separator"));
        lblReadOnlyField6Separator.setDefaultUnit(kony.flex.DP);
        lblReadOnlyField6Separator.add();
        flxReadOnlyField6.add(lblReadOnlyField6Label, lblReadOnlyField6Value, lblReadOnlyField6Separator);
        var flxReadOnlyField7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxReadOnlyField7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxReadOnlyField7"), extendConfig({}, controller.args[1], "flxReadOnlyField7"), extendConfig({}, controller.args[2], "flxReadOnlyField7"));
        flxReadOnlyField7.setDefaultUnit(kony.flex.DP);
        var lblReadOnlyField7Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField7Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Exchange Rate:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField7Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField7Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField7Label"));
        var lblReadOnlyField7Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField7Value",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField7Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField7Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField7Value"));
        var lblReadOnlyField7Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "lblReadOnlyField7Separator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField7Separator"), extendConfig({}, controller.args[1], "lblReadOnlyField7Separator"), extendConfig({}, controller.args[2], "lblReadOnlyField7Separator"));
        lblReadOnlyField7Separator.setDefaultUnit(kony.flex.DP);
        lblReadOnlyField7Separator.add();
        flxReadOnlyField7.add(lblReadOnlyField7Label, lblReadOnlyField7Value, lblReadOnlyField7Separator);
        var flxReadOnlyField8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxReadOnlyField8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxReadOnlyField8"), extendConfig({}, controller.args[1], "flxReadOnlyField8"), extendConfig({}, controller.args[2], "flxReadOnlyField8"));
        flxReadOnlyField8.setDefaultUnit(kony.flex.DP);
        var lblReadOnlyField8Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField8Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Exchange Rate:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField8Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField8Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField8Label"));
        var lblReadOnlyField8Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReadOnlyField8Value",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField8Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReadOnlyField8Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReadOnlyField8Value"));
        var lblReadOnlyField8Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "lblReadOnlyField8Separator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblReadOnlyField8Separator"), extendConfig({}, controller.args[1], "lblReadOnlyField8Separator"), extendConfig({}, controller.args[2], "lblReadOnlyField8Separator"));
        lblReadOnlyField8Separator.setDefaultUnit(kony.flex.DP);
        lblReadOnlyField8Separator.add();
        flxReadOnlyField8.add(lblReadOnlyField8Label, lblReadOnlyField8Value, lblReadOnlyField8Separator);
        var flxAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAddress",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxAddress"), extendConfig({}, controller.args[1], "flxAddress"), extendConfig({}, controller.args[2], "flxAddress"));
        flxAddress.setDefaultUnit(kony.flex.DP);
        var lblAddressLabel = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "id": "lblAddressLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMLeftLabels",
            "text": "Beneficiary Address:",
            "textStyle": {},
            "top": "6dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddressLabel"));
        var imgBeneArrow = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgBeneArrow",
            "isVisible": true,
            "right": "0dp",
            "src": "chevron.png",
            "top": "-15dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgBeneArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBeneArrow"), extendConfig({}, controller.args[2], "imgBeneArrow"));
        var lblAddress1 = new kony.ui.Label(extendConfig({
            "id": "lblAddress1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "1010, Easy st, hill view Oxford, Nova",
            "textStyle": {},
            "top": "3dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddress1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddress1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddress1"));
        var lblAddress2 = new kony.ui.Label(extendConfig({
            "id": "lblAddress2",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "scota BOL 1E0",
            "textStyle": {},
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddress2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddress2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddress2"));
        var flxMobile = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMobile",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxMobile"), extendConfig({}, controller.args[1], "flxMobile"), extendConfig({}, controller.args[2], "flxMobile"));
        flxMobile.setDefaultUnit(kony.flex.DP);
        var lblMobileLabel = new kony.ui.Label(extendConfig({
            "id": "lblMobileLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "Mobile:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMobileLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMobileLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMobileLabel"));
        var lblMobileValue = new kony.ui.Label(extendConfig({
            "id": "lblMobileValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknMMBlueLabel",
            "text": "(+1)-123-1234-1234",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMobileValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMobileValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMobileValue"));
        flxMobile.add(lblMobileLabel, lblMobileValue);
        var flxEmail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxEmail",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxEmail"), extendConfig({}, controller.args[1], "flxEmail"), extendConfig({}, controller.args[2], "flxEmail"));
        flxEmail.setDefaultUnit(kony.flex.DP);
        var lblEmailLabel = new kony.ui.Label(extendConfig({
            "id": "lblEmailLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "Email:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEmailLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmailLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblEmailLabel"));
        var lblEmailValue = new kony.ui.Label(extendConfig({
            "id": "lblEmailValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknMMBlueLabel",
            "text": "name@email.com",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEmailValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmailValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblEmailValue"));
        flxEmail.add(lblEmailLabel, lblEmailValue);
        var flxCity = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCity",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxCity"), extendConfig({}, controller.args[1], "flxCity"), extendConfig({}, controller.args[2], "flxCity"));
        flxCity.setDefaultUnit(kony.flex.DP);
        var lblCityLabel = new kony.ui.Label(extendConfig({
            "id": "lblCityLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "City:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCityLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCityLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCityLabel"));
        var lblCityValue = new kony.ui.Label(extendConfig({
            "id": "lblCityValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknMMBlueLabel",
            "text": "Chennai",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCityValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCityValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCityValue"));
        flxCity.add(lblCityLabel, lblCityValue);
        var flxState = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxState",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxState"), extendConfig({}, controller.args[1], "flxState"), extendConfig({}, controller.args[2], "flxState"));
        flxState.setDefaultUnit(kony.flex.DP);
        var lblStateLabel = new kony.ui.Label(extendConfig({
            "id": "lblStateLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "State:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblStateLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStateLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblStateLabel"));
        var lblStateValue = new kony.ui.Label(extendConfig({
            "id": "lblStateValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknMMBlueLabel",
            "text": "Tamilnadu",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblStateValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStateValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblStateValue"));
        flxState.add(lblStateLabel, lblStateValue);
        var flxCountry = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCountry",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxCountry"), extendConfig({}, controller.args[1], "flxCountry"), extendConfig({}, controller.args[2], "flxCountry"));
        flxCountry.setDefaultUnit(kony.flex.DP);
        var lblCountryLabel = new kony.ui.Label(extendConfig({
            "id": "lblCountryLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "Country:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCountryLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCountryLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCountryLabel"));
        var lblCountryValue = new kony.ui.Label(extendConfig({
            "id": "lblCountryValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknMMBlueLabel",
            "text": "India",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCountryValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCountryValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCountryValue"));
        flxCountry.add(lblCountryLabel, lblCountryValue);
        var flxPostalCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPostalCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPostalCode"), extendConfig({}, controller.args[1], "flxPostalCode"), extendConfig({}, controller.args[2], "flxPostalCode"));
        flxPostalCode.setDefaultUnit(kony.flex.DP);
        var lblPostalCodeLabel = new kony.ui.Label(extendConfig({
            "id": "lblPostalCodeLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknMMBlueLabel",
            "text": "Postal Code:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPostalCodeLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPostalCodeLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPostalCodeLabel"));
        var lblPostalCodeValue = new kony.ui.Label(extendConfig({
            "id": "lblPostalCodeValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknMMBlueLabel",
            "text": "626001",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPostalCodeValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPostalCodeValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPostalCodeValue"));
        flxPostalCode.add(lblPostalCodeLabel, lblPostalCodeValue);
        flxAddress.add(lblAddressLabel, imgBeneArrow, lblAddress1, lblAddress2, flxMobile, flxEmail, flxCity, flxState, flxCountry, flxPostalCode);
        var flxAddressSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxAddressSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddressSeparator"), extendConfig({}, controller.args[1], "flxAddressSeparator"), extendConfig({}, controller.args[2], "flxAddressSeparator"));
        flxAddressSeparator.setDefaultUnit(kony.flex.DP);
        flxAddressSeparator.add();
        var flxSupportingDocuments = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSupportingDocuments",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSupportingDocuments"), extendConfig({}, controller.args[1], "flxSupportingDocuments"), extendConfig({}, controller.args[2], "flxSupportingDocuments"));
        flxSupportingDocuments.setDefaultUnit(kony.flex.DP);
        var flxSupportingDocs = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxSupportingDocs",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxSupportingDocs"), extendConfig({}, controller.args[1], "flxSupportingDocs"), extendConfig({}, controller.args[2], "flxSupportingDocs"));
        flxSupportingDocs.setDefaultUnit(kony.flex.DP);
        var lblDocumentTitle = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblDocumentTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "text": "Supporting Documents (Optional):",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDocumentTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDocumentTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDocumentTitle"));
        var flxAddiconWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxAddiconWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxAddiconWrapper"), extendConfig({}, controller.args[1], "flxAddiconWrapper"), extendConfig({}, controller.args[2], "flxAddiconWrapper"));
        flxAddiconWrapper.setDefaultUnit(kony.flex.DP);
        var imgAddIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgAddIcon",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "addicon.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgAddIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAddIcon"), extendConfig({}, controller.args[2], "imgAddIcon"));
        flxAddiconWrapper.add(imgAddIcon);
        var flxDocumentTitleSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxDocumentTitleSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDocumentTitleSeparator"), extendConfig({}, controller.args[1], "flxDocumentTitleSeparator"), extendConfig({}, controller.args[2], "flxDocumentTitleSeparator"));
        flxDocumentTitleSeparator.setDefaultUnit(kony.flex.DP);
        flxDocumentTitleSeparator.add();
        flxSupportingDocs.add(lblDocumentTitle, flxAddiconWrapper, flxDocumentTitleSeparator);
        var flxSupportDocumentExpand = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSupportDocumentExpand",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSupportDocumentExpand"), extendConfig({}, controller.args[1], "flxSupportDocumentExpand"), extendConfig({}, controller.args[2], "flxSupportDocumentExpand"));
        flxSupportDocumentExpand.setDefaultUnit(kony.flex.DP);
        var segAttachmentList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "imgAttachment": "pdf.png",
                "imgRemove": "clear_1x.png",
                "lblAttachment": "Document 123.pdf"
            }, {
                "imgAttachment": "pdf.png",
                "imgRemove": "clear_1x.png",
                "lblAttachment": "Document 123.pdf"
            }, {
                "imgAttachment": "pdf.png",
                "imgRemove": "clear_1x.png",
                "lblAttachment": "Document 123.pdf"
            }],
            "groupCells": false,
            "id": "segAttachmentList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxICAttachments",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "ffffff00",
            "separatorRequired": true,
            "separatorThickness": 7,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxAttachmentMainContainer": "flxAttachmentMainContainer",
                "flxAttachmentRemove": "flxAttachmentRemove",
                "flxICAttachments": "flxICAttachments",
                "flxSeparator": "flxSeparator",
                "imgAttachment": "imgAttachment",
                "imgRemove": "imgRemove",
                "lblAttachment": "lblAttachment"
            },
            "width": "100%"
        }, controller.args[0], "segAttachmentList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segAttachmentList"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segAttachmentList"));
        flxSupportDocumentExpand.add(segAttachmentList);
        flxSupportingDocuments.add(flxSupportingDocs, flxSupportDocumentExpand);
        var flxDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "120dp",
            "id": "flxDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "13dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxDescription"), extendConfig({}, controller.args[1], "flxDescription"), extendConfig({}, controller.args[2], "flxDescription"));
        flxDescription.setDefaultUnit(kony.flex.DP);
        var lblDescription = new kony.ui.Label(extendConfig({
            "id": "lblDescription",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl72727234px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.note"),
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDescription"));
        var txtDescription = new kony.ui.TextArea2(extendConfig({
            "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_SENTENCES,
            "focusSkin": "txtAreaBlueFocus100pr",
            "height": "60dp",
            "id": "txtDescription",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "numberOfVisibleLines": 3,
            "placeholder": kony.i18n.getLocalizedString("kony.mb.common.DescriptionOptional"),
            "right": "20dp",
            "skin": "ICSknTxtArea92929236px",
            "text": "\n",
            "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
            "top": "20dp",
            "zIndex": 10
        }, controller.args[0], "txtDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [10, 10, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtDescription"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
            "showCloseButton": true,
            "showProgressIndicator": false,
            "placeholderSkin": "sknTextArea727272sspReg26px"
        }, controller.args[2], "txtDescription"));
        flxDescription.add(lblDescription, txtDescription);
        flxConfirmationDetails.add(flxField1, flxField2, flxField3, flxField4, flxField5, flxField6, flxField7, flxField8, flxField9, flxField10, flxField11, flxField12, flxField13, flxField14, flxField15, flxField16, flxField17, flxReadOnlyField1, flxReadOnlyField2, flxReadOnlyField3, flxReadOnlyField4, flxReadOnlyField5, flxReadOnlyField6, flxReadOnlyField7, flxReadOnlyField8, flxAddress, flxAddressSeparator, flxSupportingDocuments, flxDescription);
        flxMMAmount.add(flxToAndFrom, flxConfirmationDetails);
        flxReviewMain.add(flxMMAmount);
        flxVerifyDetailsMain.add(flxVerifyHeader, flxReviewMain);
        var flxbtnTransfer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-10dp",
            "clipBounds": true,
            "height": "70dp",
            "id": "flxbtnTransfer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxbtnTransfer"), extendConfig({}, controller.args[1], "flxbtnTransfer"), extendConfig({}, controller.args[2], "flxbtnTransfer"));
        flxbtnTransfer.setDefaultUnit(kony.flex.DP);
        var btnTransfer = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "focusSkin": "ICBtn003E7534px",
            "height": "40dp",
            "id": "btnTransfer",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICBtn003E7534px",
            "text": kony.i18n.getLocalizedString("kony.mb.transaction.transfer"),
            "zIndex": 1
        }, controller.args[0], "btnTransfer"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTransfer"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnTransfer"));
        flxbtnTransfer.add(btnTransfer);
        flxVerifyDetailMainContainer.add(flxVerifyDetailsMain, flxbtnTransfer);
        var flxSupportingDocRemovePopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "147dp",
            "id": "flxSupportingDocRemovePopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "53dp",
            "isModalContainer": false,
            "right": "54dp",
            "skin": "ICSknFlxBlur",
            "top": "29.14%",
            "width": "76.80%"
        }, controller.args[0], "flxSupportingDocRemovePopup"), extendConfig({}, controller.args[1], "flxSupportingDocRemovePopup"), extendConfig({}, controller.args[2], "flxSupportingDocRemovePopup"));
        flxSupportingDocRemovePopup.setDefaultUnit(kony.flex.DP);
        flxSupportingDocRemovePopup.add();
        var flxSupportingDocSelectOptions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSupportingDocSelectOptions",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx0000001px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxSupportingDocSelectOptions"), extendConfig({}, controller.args[1], "flxSupportingDocSelectOptions"), extendConfig({}, controller.args[2], "flxSupportingDocSelectOptions"));
        flxSupportingDocSelectOptions.setDefaultUnit(kony.flex.DP);
        var flxSupportingDocSelectOptionsMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "blur": {
                "enabled": false,
                "value": 100
            },
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxSupportingDocSelectOptionsMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "53dp",
            "isModalContainer": false,
            "right": 54,
            "width": "96%",
            "zIndex": 100
        }, controller.args[0], "flxSupportingDocSelectOptionsMain"), extendConfig({}, controller.args[1], "flxSupportingDocSelectOptionsMain"), extendConfig({}, controller.args[2], "flxSupportingDocSelectOptionsMain"));
        flxSupportingDocSelectOptionsMain.setDefaultUnit(kony.flex.DP);
        var flxSelectOptions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "99dp",
            "clipBounds": true,
            "id": "flxSelectOptions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknf8f8f8Radius14px",
            "width": "100%"
        }, controller.args[0], "flxSelectOptions"), extendConfig({}, controller.args[1], "flxSelectOptions"), extendConfig({}, controller.args[2], "flxSelectOptions"));
        flxSelectOptions.setDefaultUnit(kony.flex.DP);
        var lblPhoto = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "58dp",
            "id": "lblPhoto",
            "isVisible": false,
            "skin": "ICSkn007AFFSFReg45px",
            "text": "Take Photo",
            "textStyle": {},
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblPhoto"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPhoto"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPhoto"));
        var camTakePhoto = new kony.ui.Camera(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSkn007aff45px",
            "height": "58dp",
            "id": "camTakePhoto",
            "isVisible": true,
            "skin": "ICSkn007aff45px",
            "text": "Take Photo",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "camTakePhoto"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "camTakePhoto"), extendConfig({
            "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
            "enableOverlay": false,
            "nativeUserInterface": true
        }, controller.args[2], "camTakePhoto"));
        var flxSeperatorDocs1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperatorDocs1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx0000001px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxSeperatorDocs1"), extendConfig({}, controller.args[1], "flxSeperatorDocs1"), extendConfig({}, controller.args[2], "flxSeperatorDocs1"));
        flxSeperatorDocs1.setDefaultUnit(kony.flex.DP);
        flxSeperatorDocs1.add();
        var lblPhotoLibrary = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "58dp",
            "id": "lblPhotoLibrary",
            "isVisible": true,
            "skin": "ICSkn007AFFSFReg45px",
            "text": "Photo Library",
            "textStyle": {},
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblPhotoLibrary"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPhotoLibrary"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPhotoLibrary"));
        var flxSeperatorDocs2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperatorDocs2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx0000001px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxSeperatorDocs2"), extendConfig({}, controller.args[1], "flxSeperatorDocs2"), extendConfig({}, controller.args[2], "flxSeperatorDocs2"));
        flxSeperatorDocs2.setDefaultUnit(kony.flex.DP);
        flxSeperatorDocs2.add();
        var lblDrive = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "58dp",
            "id": "lblDrive",
            "isVisible": true,
            "skin": "ICSkn007AFFSFReg45px",
            "text": "Google Drive",
            "textStyle": {},
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDrive"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDrive"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDrive"));
        var flxSeperatorDocs3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperatorDocs3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx0000001px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxSeperatorDocs3"), extendConfig({}, controller.args[1], "flxSeperatorDocs3"), extendConfig({}, controller.args[2], "flxSeperatorDocs3"));
        flxSeperatorDocs3.setDefaultUnit(kony.flex.DP);
        flxSeperatorDocs3.add();
        var lblDropbox = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "58dp",
            "id": "lblDropbox",
            "isVisible": true,
            "skin": "ICSkn007AFFSFReg45px",
            "text": "Dropbox",
            "textStyle": {},
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDropbox"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDropbox"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDropbox"));
        flxSelectOptions.add(lblPhoto, camTakePhoto, flxSeperatorDocs1, lblPhotoLibrary, flxSeperatorDocs2, lblDrive, flxSeperatorDocs3, lblDropbox);
        var flxSelectOptionsCancel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "30dp",
            "clipBounds": true,
            "height": "57dp",
            "id": "flxSelectOptionsCancel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknf8f8f8Radius14px",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxSelectOptionsCancel"), extendConfig({}, controller.args[1], "flxSelectOptionsCancel"), extendConfig({}, controller.args[2], "flxSelectOptionsCancel"));
        flxSelectOptionsCancel.setDefaultUnit(kony.flex.DP);
        var lblSeperatorDocsCancel = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "57dp",
            "id": "lblSeperatorDocsCancel",
            "isVisible": true,
            "skin": "ICSknLbl007AFFSFDisplayBold45px",
            "text": "Cancel",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSeperatorDocsCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeperatorDocsCancel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSeperatorDocsCancel"));
        flxSelectOptionsCancel.add(lblSeperatorDocsCancel);
        flxSupportingDocSelectOptionsMain.add(flxSelectOptions, flxSelectOptionsCancel);
        flxSupportingDocSelectOptions.add(flxSupportingDocSelectOptionsMain);
        var flxSupportingDocRemove = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSupportingDocRemove",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx0000001px",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSupportingDocRemove"), extendConfig({}, controller.args[1], "flxSupportingDocRemove"), extendConfig({}, controller.args[2], "flxSupportingDocRemove"));
        flxSupportingDocRemove.setDefaultUnit(kony.flex.DP);
        var flxSuppotingDocRemovePopupMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "blur": {
                "enabled": false,
                "value": 0
            },
            "centerX": "50%",
            "clipBounds": true,
            "height": "147dp",
            "id": "flxSuppotingDocRemovePopupMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "53dp",
            "isModalContainer": false,
            "right": 54,
            "skin": "f9f9",
            "top": "29.14%",
            "width": "76.80%",
            "zIndex": 100
        }, controller.args[0], "flxSuppotingDocRemovePopupMain"), extendConfig({}, controller.args[1], "flxSuppotingDocRemovePopupMain"), extendConfig({}, controller.args[2], "flxSuppotingDocRemovePopupMain"));
        flxSuppotingDocRemovePopupMain.setDefaultUnit(kony.flex.DP);
        var lblRemoveConfirmTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblRemoveConfirmTitle",
            "isVisible": true,
            "left": "55dp",
            "right": "68dp",
            "skin": "ICSknLbl42424234px",
            "text": "Are you sure , do you want to remove this attachment?",
            "textStyle": {},
            "top": "33dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblRemoveConfirmTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRemoveConfirmTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRemoveConfirmTitle"));
        var flxActionSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxActionSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSkn3C3C431px",
            "top": "22dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxActionSeperator"), extendConfig({}, controller.args[1], "flxActionSeperator"), extendConfig({}, controller.args[2], "flxActionSeperator"));
        flxActionSeperator.setDefaultUnit(kony.flex.DP);
        flxActionSeperator.add();
        var flxRemoveConfirmActions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxRemoveConfirmActions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxRemoveConfirmActions"), extendConfig({}, controller.args[1], "flxRemoveConfirmActions"), extendConfig({}, controller.args[2], "flxRemoveConfirmActions"));
        flxRemoveConfirmActions.setDefaultUnit(kony.flex.DP);
        var btnRemoveYes = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtn4176A434px",
            "height": "100%",
            "id": "btnRemoveYes",
            "isVisible": true,
            "left": "1dp",
            "skin": "ICSknBtn4176A434px",
            "text": "Yes",
            "top": "0dp",
            "width": "148dp",
            "zIndex": 4
        }, controller.args[0], "btnRemoveYes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRemoveYes"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnRemoveYes"));
        var flxVerticalSeperator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerticalSeperator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSkn3C3C431px",
            "top": "0dp",
            "width": "1dp",
            "zIndex": 4
        }, controller.args[0], "flxVerticalSeperator1"), extendConfig({}, controller.args[1], "flxVerticalSeperator1"), extendConfig({}, controller.args[2], "flxVerticalSeperator1"));
        flxVerticalSeperator1.setDefaultUnit(kony.flex.DP);
        flxVerticalSeperator1.add();
        var btnRemoveNo = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtn4176A434px",
            "height": "100%",
            "id": "btnRemoveNo",
            "isVisible": true,
            "left": "2dp",
            "skin": "ICSknBtn4176A434px",
            "text": "No",
            "top": "0dp",
            "width": "160dp",
            "zIndex": 4
        }, controller.args[0], "btnRemoveNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRemoveNo"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnRemoveNo"));
        flxRemoveConfirmActions.add(btnRemoveYes, flxVerticalSeperator1, btnRemoveNo);
        flxSuppotingDocRemovePopupMain.add(lblRemoveConfirmTitle, flxActionSeperator, flxRemoveConfirmActions);
        flxSupportingDocRemove.add(flxSuppotingDocRemovePopupMain);
        var flxSupportingDocSizePopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSupportingDocSizePopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx0000001px",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSupportingDocSizePopup"), extendConfig({}, controller.args[1], "flxSupportingDocSizePopup"), extendConfig({}, controller.args[2], "flxSupportingDocSizePopup"));
        flxSupportingDocSizePopup.setDefaultUnit(kony.flex.DP);
        var flxSuppotingDocSizePopupMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "blur": {
                "enabled": false,
                "value": 0
            },
            "centerX": "50%",
            "clipBounds": true,
            "height": "140dp",
            "id": "flxSuppotingDocSizePopupMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "53dp",
            "isModalContainer": false,
            "right": 54,
            "skin": "ICSknf2f2f2PopUp",
            "top": "29.14%",
            "width": "72%",
            "zIndex": 100
        }, controller.args[0], "flxSuppotingDocSizePopupMain"), extendConfig({}, controller.args[1], "flxSuppotingDocSizePopupMain"), extendConfig({}, controller.args[2], "flxSuppotingDocSizePopupMain"));
        flxSuppotingDocSizePopupMain.setDefaultUnit(kony.flex.DP);
        var lblSupportingTitle = new kony.ui.Label(extendConfig({
            "height": "22dp",
            "id": "lblSupportingTitle",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLbl000000SB39px",
            "text": "Supporting Document",
            "textStyle": {},
            "top": "19dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblSupportingTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSupportingTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSupportingTitle"));
        var lblSupportingErrorMessage = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSupportingErrorMessage",
            "isVisible": true,
            "left": "68dp",
            "right": "68dp",
            "skin": "ICSkn0000000SFReg29px",
            "text": "Document file size is more than 1 MB. Please try again",
            "textStyle": {},
            "top": "2dp",
            "width": "238dp",
            "zIndex": 1
        }, controller.args[0], "lblSupportingErrorMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSupportingErrorMessage"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSupportingErrorMessage"));
        var flxDocSeperator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxDocSeperator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSkn3C3C431px",
            "top": "9dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxDocSeperator1"), extendConfig({}, controller.args[1], "flxDocSeperator1"), extendConfig({}, controller.args[2], "flxDocSeperator1"));
        flxDocSeperator1.setDefaultUnit(kony.flex.DP);
        flxDocSeperator1.add();
        var btnSupportingCancel = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSkn007AFFSFReg34px",
            "height": "44dp",
            "id": "btnSupportingCancel",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSkn007AFFSFReg34px",
            "text": "close",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "btnSupportingCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSupportingCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnSupportingCancel"));
        flxSuppotingDocSizePopupMain.add(lblSupportingTitle, lblSupportingErrorMessage, flxDocSeperator1, btnSupportingCancel);
        flxSupportingDocSizePopup.add(flxSuppotingDocSizePopupMain);
        flxVerifyDetails.add(flxVerifyDetailMainContainer, flxSupportingDocRemovePopup, flxSupportingDocSelectOptions, flxSupportingDocRemove, flxSupportingDocSizePopup);
        MakeATransfer.add(flxPopup, flxFromAccount, flxToAccount, flxAmount, flxFrequencySelection, flxCurrencySelection, flxAccountNumber, flxReEnterAccountNumber, flxRecipientsName, flxFXRateReference, flxPayeeNickname, flxIntermediaryBIC, flxE2E, flxRequiredCode, flxAddAddress, flxBICSwift, flxSwiftBICSearch, flxSwiftBICSearchList, flxPayeeNicknameSuccess, flxDate, flxFeesPaidBy, flxPaymentMethod, flxOtherAmount, flxContactType, flxCountryCode, flxVerifyDetails);
        return MakeATransfer;
    }
})