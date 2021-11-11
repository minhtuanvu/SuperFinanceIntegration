define(function() {
    return function(controller) {
        var autoDataFill = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "autoDataFill",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_b7b1d950d3d34207959f8e4d8053424a(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "autoDataFill"), extendConfig({}, controller.args[1], "autoDataFill"), extendConfig({}, controller.args[2], "autoDataFill"));
        autoDataFill.setDefaultUnit(kony.flex.DP);
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
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "25dp",
            "isModalContainer": false,
            "skin": "sknFlx1a98ff",
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
            "isVisible": true,
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
            "src": "search_4.png",
            "width": "15dp",
            "zIndex": 11
        }, controller.args[0], "imgSearchIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearchIcon"), extendConfig({}, controller.args[2], "imgSearchIcon"));
        var tbxSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "ICSknTbxSSPf1f1f1B",
            "height": "35dp",
            "id": "tbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.ExternalAccounts.Search"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTbxSSPffffffNew",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "zIndex": 10
        }, controller.args[0], "tbxSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [35, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "tbxSearch"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
            "placeholderSkin": "ICSknTbxPlaceholderDefaultNew",
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
            "skin": "ICSknFlxHeaderShadow1",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxShadow"), extendConfig({}, controller.args[1], "flxShadow"), extendConfig({}, controller.args[2], "flxShadow"));
        flxShadow.setDefaultUnit(kony.flex.DP);
        flxShadow.add();
        var btnSearchClear = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "35dp",
            "id": "btnSearchClear",
            "isVisible": false,
            "right": "19dp",
            "skin": "defBtnNormal",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, controller.args[0], "btnSearchClear"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSearchClear"), extendConfig({}, controller.args[2], "btnSearchClear"));
        flxSearchMain.add(imgSearchIcon, tbxSearch, flxShadow, btnSearchClear);
        flxSearch.add(flxSearchMain);
        var flxScrollMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "clipBounds": false,
            "id": "flxScrollMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "55dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxScrollMain"), extendConfig({}, controller.args[1], "flxScrollMain"), extendConfig({}, controller.args[2], "flxScrollMain"));
        flxScrollMain.setDefaultUnit(kony.flex.DP);
        var flxMainScrollWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": false,
            "id": "flxMainScrollWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainScrollWrapper"), extendConfig({}, controller.args[1], "flxMainScrollWrapper"), extendConfig({}, controller.args[2], "flxMainScrollWrapper"));
        flxMainScrollWrapper.setDefaultUnit(kony.flex.DP);
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
            "top": "20dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flx1"), extendConfig({}, controller.args[1], "flx1"), extendConfig({}, controller.args[2], "flx1"));
        flx1.setDefaultUnit(kony.flex.DP);
        var imgIcon = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgIcon",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 3
        }, controller.args[0], "imgIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon"), extendConfig({}, controller.args[2], "imgIcon"));
        var lblField1 = new kony.ui.Label(extendConfig({
            "id": "lblField1",
            "isVisible": true,
            "left": "50dp",
            "right": "48dp",
            "text": kony.i18n.getLocalizedString("kony.mb.common.AddressLineOne"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "lblField1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField1"));
        flx1.add(imgIcon, lblField1);
        var flx2 = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "0dp",
            "bounces": true,
            "clipBounds": false,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flx2",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flx2"), extendConfig({}, controller.args[1], "flx2"), extendConfig({}, controller.args[2], "flx2"));
        flx2.setDefaultUnit(kony.flex.DP);
        var segPayee = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblPayeeName": "",
                "lblSegSeparator": ""
            }],
            "groupCells": false,
            "id": "segPayee",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxPayeeListAutoIC",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxPayeeListAutoIC": "flxPayeeListAutoIC",
                "lblPayeeName": "lblPayeeName",
                "lblSegSeparator": "lblSegSeparator"
            },
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "segPayee"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segPayee"), extendConfig({}, controller.args[2], "segPayee"));
        flx2.add(segPayee);
        var flx3 = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "0dp",
            "bounces": true,
            "clipBounds": false,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flx3",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0dp",
            "verticalScrollIndicator": false,
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flx3"), extendConfig({}, controller.args[1], "flx3"), extendConfig({}, controller.args[2], "flx3"));
        flx3.setDefaultUnit(kony.flex.DP);
        var segCodeNameList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Afghanistan (+004)"
            }, {
                "lblCountryCode": "Bhutan"
            }, {
                "lblCountryCode": "CCountry"
            }, {
                "lblCountryCode": "DCountry"
            }, {
                "lblCountryCode": "ECountry"
            }, {
                "lblCountryCode": "FCountry"
            }, {
                "lblCountryCode": "GCountry"
            }, {
                "lblCountryCode": "HCountry"
            }, {
                "lblCountryCode": "ICountry"
            }, {
                "lblCountryCode": "JCountry"
            }, {
                "lblCountryCode": "KCountry"
            }, {
                "lblCountryCode": "LCountry"
            }, {
                "lblCountryCode": "MCountry"
            }, {
                "lblCountryCode": "NCountry"
            }, {
                "lblCountryCode": "OCountry"
            }, {
                "lblCountryCode": "PCountry"
            }, {
                "lblCountryCode": "QCountry"
            }, {
                "lblCountryCode": "RCountry"
            }, {
                "lblCountryCode": "SCountry"
            }, {
                "lblCountryCode": "TCountry"
            }, {
                "lblCountryCode": "UCountry"
            }, {
                "lblCountryCode": "VCountry"
            }, {
                "lblCountryCode": "WCountry"
            }, {
                "lblCountryCode": "XCountry"
            }, {
                "lblCountryCode": "YCountry"
            }, {
                "lblCountryCode": "ZCountry"
            }],
            "groupCells": false,
            "id": "segCodeNameList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "right": "0dp",
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxCountryCodeListIC",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxCountryCodeListIC": "flxCountryCodeListIC",
                "lblCountryCode": "lblCountryCode"
            },
            "zIndex": 3
        }, controller.args[0], "segCodeNameList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segCodeNameList"), extendConfig({}, controller.args[2], "segCodeNameList"));
        flx3.add(segCodeNameList);
        var segCodeNoList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "data": [{
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }, {
                "lblCountryCodeNo": "A"
            }],
            "groupCells": false,
            "id": "segCodeNoList",
            "isVisible": false,
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "right": "0dp",
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxCountryCodeNoListIC",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxCountryCodeNoListIC": "flxCountryCodeNoListIC",
                "lblCountryCodeNo": "lblCountryCodeNo"
            },
            "width": "23dp",
            "zIndex": 4
        }, controller.args[0], "segCodeNoList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segCodeNoList"), extendConfig({}, controller.args[2], "segCodeNoList"));
        flxMainScrollWrapper.add(flx1, flx2, flx3, segCodeNoList);
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
            "height": "10dp",
            "id": "flxPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknFlxf",
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
            "skin": "ICSknLblffffffSSPReg26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "zIndex": 1
        }, controller.args[0], "lblPopup"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPopup"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPopup"));
        flxPopupWrapper.add(imgPopup, lblPopup);
        flxPopup.add(flxPopupWrapper);
        var flxBottomWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "clipBounds": false,
            "id": "flxBottomWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxBottomWrapper"), extendConfig({}, controller.args[1], "flxBottomWrapper"), extendConfig({}, controller.args[2], "flxBottomWrapper"));
        flxBottomWrapper.setDefaultUnit(kony.flex.DP);
        var lblSeparator = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSeparator",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "lblSeparator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator"));
        var flx4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "77dp",
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
        var lblField2 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblField2",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("kony.mb.common.AddressLineTwo"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField2"));
        var lblField3 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblField3",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("kony.mb.common.AddressLineTwo"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "44dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField3"));
        flx4.add(lblField2, lblField3);
        flxBottomWrapper.add(lblSeparator, flx4);
        autoDataFill.add(flxMainContainer, flxPopup, flxBottomWrapper);
        return autoDataFill;
    }
})