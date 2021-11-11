define(function() {
    return function(controller) {
        var ContractList = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "ContractList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "ContractList"), extendConfig({}, controller.args[1], "ContractList"), extendConfig({}, controller.args[2], "ContractList"));
        ContractList.setDefaultUnit(kony.flex.DP);
        var flxContractContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "flxContractContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContractContainer"), extendConfig({}, controller.args[1], "flxContractContainer"), extendConfig({}, controller.args[2], "flxContractContainer"));
        flxContractContainer.setDefaultUnit(kony.flex.DP);
        var segContract = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "imgCheckBox": "",
                "imgCustomer": "checkbox_normal.png",
                "imgCustomerCheckbox": "",
                "imgDropdown": "",
                "lblCIF": "",
                "lblContract": "",
                "lblCustomerName": "",
                "lblCustomerNumber": "",
                "lblCustomerNumberText": ""
            }],
            "groupCells": false,
            "id": "segContract",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxContractsCollapsed",
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
                "flxChildSeperator": "flxChildSeperator",
                "flxContract": "flxContract",
                "flxContractHeader": "flxContractHeader",
                "flxContractsCollapsed": "flxContractsCollapsed",
                "flxCustomer": "flxCustomer",
                "flxCustomerCheckbox": "flxCustomerCheckbox",
                "flxCustomerContainer": "flxCustomerContainer",
                "flxCustomerDetails": "flxCustomerDetails",
                "flxCustomerIcon": "flxCustomerIcon",
                "flxDropdown": "flxDropdown",
                "flxParentSeparator": "flxParentSeparator",
                "flxRowCheckBox": "flxRowCheckBox",
                "imgCheckBox": "imgCheckBox",
                "imgCustomer": "imgCustomer",
                "imgCustomerCheckbox": "imgCustomerCheckbox",
                "imgDropdown": "imgDropdown",
                "lblCIF": "lblCIF",
                "lblContract": "lblContract",
                "lblCustomerName": "lblCustomerName",
                "lblCustomerNumber": "lblCustomerNumber",
                "lblCustomerNumberText": "lblCustomerNumberText"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segContract"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segContract"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_ROW_SELECT,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segContract"));
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
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, controller.args[0], "lblNoContracts"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoContracts"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblNoContracts"));
        flxNoContracts.add(lblNoContracts);
        flxContractContainer.add(segContract, flxNoContracts);
        ContractList.add(flxContractContainer);
        return ContractList;
    }
})