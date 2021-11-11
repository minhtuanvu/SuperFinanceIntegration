define(function() {
    return function(controller) {
        var LinkPayeeCustomer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "LinkPayeeCustomer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_c382d94f737240b98cc401d06b82b0c2(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "LinkPayeeCustomer"), extendConfig({}, controller.args[1], "LinkPayeeCustomer"), extendConfig({}, controller.args[2], "LinkPayeeCustomer"));
        LinkPayeeCustomer.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxLinkPayeeSubHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65dp",
            "id": "flxLinkPayeeSubHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLinkPayeeSubHeader"), extendConfig({}, controller.args[1], "flxLinkPayeeSubHeader"), extendConfig({}, controller.args[2], "flxLinkPayeeSubHeader"));
        flxLinkPayeeSubHeader.setDefaultUnit(kony.flex.DP);
        var lblLinkPayeeSubHeader = new kony.ui.Label(extendConfig({
            "bottom": "6dp",
            "id": "lblLinkPayeeSubHeader",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "textStyle": {},
            "top": "14dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblLinkPayeeSubHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLinkPayeeSubHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLinkPayeeSubHeader"));
        var lblLinkPayeeSubHeader1 = new kony.ui.Label(extendConfig({
            "bottom": "2dp",
            "id": "lblLinkPayeeSubHeader1",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLbl42424234px",
            "textStyle": {},
            "top": "14dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblLinkPayeeSubHeader1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLinkPayeeSubHeader1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLinkPayeeSubHeader1"));
        var lblLinkPayeeSubHeader2 = new kony.ui.Label(extendConfig({
            "bottom": "15dp",
            "id": "lblLinkPayeeSubHeader2",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknLbl72727234px",
            "textStyle": {},
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblLinkPayeeSubHeader2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLinkPayeeSubHeader2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLinkPayeeSubHeader2"));
        flxLinkPayeeSubHeader.add(lblLinkPayeeSubHeader, lblLinkPayeeSubHeader1, lblLinkPayeeSubHeader2);
        var flxLinkPayeeSubHeaderSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxLinkPayeeSubHeaderSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxA6A6A6Gradient",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLinkPayeeSubHeaderSeparator"), extendConfig({}, controller.args[1], "flxLinkPayeeSubHeaderSeparator"), extendConfig({}, controller.args[2], "flxLinkPayeeSubHeaderSeparator"));
        flxLinkPayeeSubHeaderSeparator.setDefaultUnit(kony.flex.DP);
        flxLinkPayeeSubHeaderSeparator.add();
        var flxLinkContractSelectHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxLinkContractSelectHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLinkContractSelectHeader"), extendConfig({}, controller.args[1], "flxLinkContractSelectHeader"), extendConfig({}, controller.args[2], "flxLinkContractSelectHeader"));
        flxLinkContractSelectHeader.setDefaultUnit(kony.flex.DP);
        var lblSelectTextContract = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "centerY": "50%",
            "id": "lblSelectTextContract",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl424242B41px",
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSelectTextContract"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelectTextContract"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSelectTextContract"));
        var lblSelectedCountContract = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "centerY": "50%",
            "height": "23dp",
            "id": "lblSelectedCountContract",
            "isVisible": false,
            "left": "20dp",
            "skin": "ICSknLbl424242B41px",
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSelectedCountContract"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelectedCountContract"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSelectedCountContract"));
        var btnSelectAllContract = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerY": "50%",
            "focusSkin": "ICSknBtn4176A434pxRadius17px",
            "id": "btnSelectAllContract",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknBtn4176A434pxRadius17px",
            "text": "Select All",
            "top": "10dp",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "btnSelectAllContract"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSelectAllContract"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnSelectAllContract"));
        var btnDeselectAllContract = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerY": "50%",
            "focusSkin": "ICSknBtn4176A434pxRadius17px",
            "id": "btnDeselectAllContract",
            "isVisible": false,
            "right": "20dp",
            "skin": "ICSknBtn4176A434pxRadius17px",
            "text": "Deselect All",
            "top": "10dp",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "btnDeselectAllContract"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDeselectAllContract"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnDeselectAllContract"));
        flxLinkContractSelectHeader.add(lblSelectTextContract, lblSelectedCountContract, btnSelectAllContract, btnDeselectAllContract);
        var flxLinkCustomerSelectHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxLinkCustomerSelectHeader",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLinkCustomerSelectHeader"), extendConfig({}, controller.args[1], "flxLinkCustomerSelectHeader"), extendConfig({}, controller.args[2], "flxLinkCustomerSelectHeader"));
        flxLinkCustomerSelectHeader.setDefaultUnit(kony.flex.DP);
        var lblSelectTextCustomer = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "centerY": "50%",
            "id": "lblSelectTextCustomer",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl424242B41px",
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSelectTextCustomer"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelectTextCustomer"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSelectTextCustomer"));
        var lblSelectedCountCustomer = new kony.ui.Label(extendConfig({
            "bottom": "20dp",
            "centerY": "50%",
            "height": "23dp",
            "id": "lblSelectedCountCustomer",
            "isVisible": false,
            "left": "20dp",
            "skin": "ICSknLbl424242B41px",
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSelectedCountCustomer"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelectedCountCustomer"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSelectedCountCustomer"));
        var btnSelectAllCustomer = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerY": "50%",
            "focusSkin": "ICSknBtn4176A434pxRadius17px",
            "id": "btnSelectAllCustomer",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknBtn4176A434pxRadius17px",
            "text": "Select All",
            "top": "10dp",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "btnSelectAllCustomer"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSelectAllCustomer"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnSelectAllCustomer"));
        var btnDeselectAllCustomer = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerY": "50%",
            "focusSkin": "ICSknBtn4176A434pxRadius17px",
            "id": "btnDeselectAllCustomer",
            "isVisible": false,
            "right": "20dp",
            "skin": "ICSknBtn4176A434pxRadius17px",
            "text": "Deselect All",
            "top": "10dp",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "btnDeselectAllCustomer"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDeselectAllCustomer"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnDeselectAllCustomer"));
        flxLinkCustomerSelectHeader.add(lblSelectTextCustomer, lblSelectedCountCustomer, btnSelectAllCustomer, btnDeselectAllCustomer);
        var flxLinkContractHeaderSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLinkContractHeaderSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknE3E3E31px",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLinkContractHeaderSeparator"), extendConfig({}, controller.args[1], "flxLinkContractHeaderSeparator"), extendConfig({}, controller.args[2], "flxLinkContractHeaderSeparator"));
        flxLinkContractHeaderSeparator.setDefaultUnit(kony.flex.DP);
        flxLinkContractHeaderSeparator.add();
        var flxLinkContractSegScroll = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "height": "70%",
            "id": "flxLinkContractSegScroll",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLinkContractSegScroll"), extendConfig({}, controller.args[1], "flxLinkContractSegScroll"), extendConfig({}, controller.args[2], "flxLinkContractSegScroll"));
        flxLinkContractSegScroll.setDefaultUnit(kony.flex.DP);
        var segLinkPayeeContract = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "data": [{
                "imgCheckBox": "",
                "imgDropdown": "",
                "lblCIF": "",
                "lblContract": ""
            }],
            "groupCells": false,
            "id": "segLinkPayeeContract",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxLinkPayeeContractRow",
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
                "flxContractHeader": "flxContractHeader",
                "flxDropdown": "flxDropdown",
                "flxLinkPayeeContractRow": "flxLinkPayeeContractRow",
                "flxParentSeparator": "flxParentSeparator",
                "flxRowCheckBox": "flxRowCheckBox",
                "imgCheckBox": "imgCheckBox",
                "imgDropdown": "imgDropdown",
                "lblCIF": "lblCIF",
                "lblContract": "lblContract"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segLinkPayeeContract"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segLinkPayeeContract"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segLinkPayeeContract"));
        var segLinkPayeeCustomers = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "data": [{
                "imgCustomerCheckBox": "",
                "imgIcon": "",
                "imgIcons": "",
                "lblCustomerName": "",
                "lblCustomerNumber": "",
                "lblCustomerNumberText": ""
            }],
            "groupCells": false,
            "id": "segLinkPayeeCustomers",
            "isVisible": false,
            "left": "1dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxLinkPayeeCustomerRow",
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
                "flxChildCaptionContainer": "flxChildCaptionContainer",
                "flxChildSeparator": "flxChildSeparator",
                "flxCustomerCheckBox": "flxCustomerCheckBox",
                "flxCustomerContainer": "flxCustomerContainer",
                "flxCustomerContainerData": "flxCustomerContainerData",
                "flxIcon": "flxIcon",
                "flxLinkPayeeCustomerRow": "flxLinkPayeeCustomerRow",
                "imgCustomerCheckBox": "imgCustomerCheckBox",
                "imgIcon": "imgIcon",
                "imgIcons": "imgIcons",
                "lblCustomerName": "lblCustomerName",
                "lblCustomerNumber": "lblCustomerNumber",
                "lblCustomerNumberText": "lblCustomerNumberText"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segLinkPayeeCustomers"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segLinkPayeeCustomers"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segLinkPayeeCustomers"));
        flxLinkContractSegScroll.add(segLinkPayeeContract, segLinkPayeeCustomers);
        flxMainContainer.add(flxLinkPayeeSubHeader, flxLinkPayeeSubHeaderSeparator, flxLinkContractSelectHeader, flxLinkCustomerSelectHeader, flxLinkContractHeaderSeparator, flxLinkContractSegScroll);
        var flxLinkContractButton = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "20dp",
            "clipBounds": true,
            "id": "flxLinkContractButton",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "f9f9",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLinkContractButton"), extendConfig({}, controller.args[1], "flxLinkContractButton"), extendConfig({}, controller.args[2], "flxLinkContractButton"));
        flxLinkContractButton.setDefaultUnit(kony.flex.DP);
        var btn1 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7515PXBrd3PX",
            "height": "45dp",
            "id": "btn1",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtn003E7515PXBrd3PX",
            "text": "Continue",
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
            "bottom": "0dp",
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7515PXBrd3PX",
            "height": "45dp",
            "id": "btn2",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtn003E7515PXBrd3PX",
            "text": "Done",
            "top": "20dp",
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
        flxLinkContractButton.add(btn1, btn2);
        flxMain.add(flxMainContainer, flxLinkContractButton);
        LinkPayeeCustomer.add(flxMain);
        return LinkPayeeCustomer;
    }
})