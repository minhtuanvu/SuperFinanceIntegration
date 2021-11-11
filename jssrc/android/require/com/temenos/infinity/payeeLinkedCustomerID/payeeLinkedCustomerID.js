define(function() {
    return function(controller) {
        var payeeLinkedCustomerID = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "payeeLinkedCustomerID",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_ee9401c404e64d27b6b44cd809483413(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "payeeLinkedCustomerID"), extendConfig({}, controller.args[1], "payeeLinkedCustomerID"), extendConfig({}, controller.args[2], "payeeLinkedCustomerID"));
        payeeLinkedCustomerID.setDefaultUnit(kony.flex.DP);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
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
            "skin": "ICSknFlxNew",
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
            "src": "search_10.png",
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
            "focusSkin": "ICSknTbxSSPf1New",
            "height": "35dp",
            "id": "tbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.ExternalAccounts.Search"),
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTbxSSPf1New",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "tbxSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [35, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "tbxSearch"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
            "placeholderSkin": "ICSknTbxPlaceholderDefault2New",
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
            "skin": "ICSknFlxHeaderShadow1New",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxShadow"), extendConfig({}, controller.args[1], "flxShadow"), extendConfig({}, controller.args[2], "flxShadow"));
        flxShadow.setDefaultUnit(kony.flex.DP);
        flxShadow.add();
        flxSearchMain.add(imgSearchIcon, tbxSearch, flxShadow);
        flxSearch.add(flxSearchMain);
        var flxContractContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "0dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxContractContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "bgflx",
            "top": "55dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContractContainer"), extendConfig({}, controller.args[1], "flxContractContainer"), extendConfig({}, controller.args[2], "flxContractContainer"));
        flxContractContainer.setDefaultUnit(kony.flex.DP);
        var flxHeading = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxf1New",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeading"), extendConfig({}, controller.args[1], "flxHeading"), extendConfig({}, controller.args[2], "flxHeading"));
        flxHeading.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "skin": "ICSknLbl1New",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "4dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "lblHeading"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeading"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHeading"));
        flxHeading.add(lblHeading);
        var segLinkContractCustomerID = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "imgCheckBox": "",
                "imgCustomerCheckbox": "",
                "imgDropdown": "",
                "imgIcon": "checkbox_normal_1.png",
                "lblCIF": "",
                "lblContract": "",
                "lblCustomerName": "",
                "lblCustomerNumber": "",
                "lblCustomerNumberText": ""
            }],
            "groupCells": false,
            "id": "segLinkContractCustomerID",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Normal",
            "rowSkin": "seg2Normal",
            "rowTemplate": "CopyflxContractsCollapsed",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "50dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "CopyflxContractsCollapsed": "CopyflxContractsCollapsed",
                "flxChildCaptionContainer": "flxChildCaptionContainer",
                "flxChildSeperator": "flxChildSeperator",
                "flxContract": "flxContract",
                "flxContractHeader": "flxContractHeader",
                "flxCustomer": "flxCustomer",
                "flxCustomerCheckbox": "flxCustomerCheckbox",
                "flxCustomerContainer": "flxCustomerContainer",
                "flxCustomerContainerData": "flxCustomerContainerData",
                "flxCustomerDetails": "flxCustomerDetails",
                "flxDropdown": "flxDropdown",
                "flxParentSeparator": "flxParentSeparator",
                "flxRowCheckBox": "flxRowCheckBox",
                "imgCheckBox": "imgCheckBox",
                "imgCustomerCheckbox": "imgCustomerCheckbox",
                "imgDropdown": "imgDropdown",
                "imgIcon": "imgIcon",
                "lblCIF": "lblCIF",
                "lblContract": "lblContract",
                "lblCustomerName": "lblCustomerName",
                "lblCustomerNumber": "lblCustomerNumber",
                "lblCustomerNumberText": "lblCustomerNumberText"
            },
            "widgetSkin": "seg2Normal",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segLinkContractCustomerID"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segLinkContractCustomerID"), extendConfig({}, controller.args[2], "segLinkContractCustomerID"));
        var flxNoContracts = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "200dp",
            "id": "flxNoContracts",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxNoContracts"), extendConfig({}, controller.args[1], "flxNoContracts"), extendConfig({}, controller.args[2], "flxNoContracts"));
        flxNoContracts.setDefaultUnit(kony.flex.DP);
        var lblNoContracts = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblNoContracts",
            "isVisible": true,
            "skin": "sknlbl727272SSP93pr",
            "text": kony.i18n.getLocalizedString("kony.mb.MM.NoResultsFound"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, controller.args[0], "lblNoContracts"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoContracts"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNoContracts"));
        flxNoContracts.add(lblNoContracts);
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
            "focusSkin": "ICSknbtnfocusNew",
            "height": "40dp",
            "id": "btn1",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknbtneNew",
            "text": kony.i18n.getLocalizedString("kony.mb.common.save"),
            "zIndex": 3
        }, controller.args[0], "btn1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn1"), extendConfig({}, controller.args[2], "btn1"));
        flxButtons.add(btn1);
        flxContractContainer.add(flxHeading, segLinkContractCustomerID, flxNoContracts, flxButtons);
        flxMainContainer.add(flxSearch, flxContractContainer);
        payeeLinkedCustomerID.add(flxMainContainer);
        return payeeLinkedCustomerID;
    }
})