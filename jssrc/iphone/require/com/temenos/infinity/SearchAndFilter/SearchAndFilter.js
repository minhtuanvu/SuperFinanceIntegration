define(function() {
    return function(controller) {
        var SearchAndFilter = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "SearchAndFilter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_bcdb8cb04fe84b76a66f86a32eb7b22b(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "SearchAndFilter"), extendConfig({}, controller.args[1], "SearchAndFilter"), extendConfig({}, controller.args[2], "SearchAndFilter"));
        SearchAndFilter.setDefaultUnit(kony.flex.DP);
        var flxSearchAndFilter = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "67dp",
            "id": "flxSearchAndFilter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxf9f9f9Plain",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSearchAndFilter"), extendConfig({}, controller.args[1], "flxSearchAndFilter"), extendConfig({}, controller.args[2], "flxSearchAndFilter"));
        flxSearchAndFilter.setDefaultUnit(kony.flex.DP);
        var flxSearchBoxHolder = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50.00%",
            "clipBounds": true,
            "height": "64%",
            "id": "flxSearchBoxHolder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5.00%",
            "isModalContainer": false,
            "skin": "ICSknFlxffffffBorder1Px333333",
            "top": 0,
            "width": "78%",
            "zIndex": 1
        }, controller.args[0], "flxSearchBoxHolder"), extendConfig({}, controller.args[1], "flxSearchBoxHolder"), extendConfig({}, controller.args[2], "flxSearchBoxHolder"));
        flxSearchBoxHolder.setDefaultUnit(kony.flex.DP);
        var txtSearchBox = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50.00%",
            "focusSkin": "ICSknTxt333333SSPRegular40Px",
            "height": "100%",
            "id": "txtSearchBox",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "10.95%",
            "onTextChange": controller.AS_TextField_c6904b52655e429196f642e5d17c8f6e,
            "placeholder": "Search By ...",
            "secureTextEntry": false,
            "skin": "ICSknTxt333333SSPRegular40Px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "txtSearchBox"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtSearchBox"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknSearchTextPlaceHolder99999935PxSSPRegular",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtSearchBox"));
        var imgSearchIcon = new kony.ui.Image2(extendConfig({
            "centerY": "49.97%",
            "height": "50%",
            "id": "imgSearchIcon",
            "isVisible": true,
            "left": "4.00%",
            "src": "search_image.png",
            "top": "0dp",
            "width": "7%",
            "zIndex": 1
        }, controller.args[0], "imgSearchIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearchIcon"), extendConfig({}, controller.args[2], "imgSearchIcon"));
        var flxCloseSearchIcon = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCloseSearchIcon",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "91%",
            "isModalContainer": false,
            "top": "0dp",
            "width": "9%",
            "zIndex": 1
        }, controller.args[0], "flxCloseSearchIcon"), extendConfig({}, controller.args[1], "flxCloseSearchIcon"), extendConfig({}, controller.args[2], "flxCloseSearchIcon"));
        flxCloseSearchIcon.setDefaultUnit(kony.flex.DP);
        var imgCloseSearchIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgCloseSearchIcon",
            "isVisible": true,
            "left": "0dp",
            "src": "clear_field.png",
            "top": "0dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "imgCloseSearchIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCloseSearchIcon"), extendConfig({}, controller.args[2], "imgCloseSearchIcon"));
        flxCloseSearchIcon.add(imgCloseSearchIcon);
        flxSearchBoxHolder.add(txtSearchBox, imgSearchIcon, flxCloseSearchIcon);
        var flxAdvancedFilter = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "55%",
            "id": "flxAdvancedFilter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "85%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "12%",
            "zIndex": 1
        }, controller.args[0], "flxAdvancedFilter"), extendConfig({}, controller.args[1], "flxAdvancedFilter"), extendConfig({}, controller.args[2], "flxAdvancedFilter"));
        flxAdvancedFilter.setDefaultUnit(kony.flex.DP);
        var imgAdvancedFilter = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgAdvancedFilter",
            "isVisible": true,
            "left": "0dp",
            "src": "advansecsearch.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgAdvancedFilter"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAdvancedFilter"), extendConfig({}, controller.args[2], "imgAdvancedFilter"));
        flxAdvancedFilter.add(imgAdvancedFilter);
        var flxSearchAndFilterSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSearchAndFilterSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSeparator",
            "top": "65dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSearchAndFilterSeparator"), extendConfig({}, controller.args[1], "flxSearchAndFilterSeparator"), extendConfig({}, controller.args[2], "flxSearchAndFilterSeparator"));
        flxSearchAndFilterSeparator.setDefaultUnit(kony.flex.DP);
        flxSearchAndFilterSeparator.add();
        flxSearchAndFilter.add(flxSearchBoxHolder, flxAdvancedFilter, flxSearchAndFilterSeparator);
        var flxFilteredListHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "67dp",
            "id": "flxFilteredListHeader",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "ICSknFlxf9f9f9Plain",
            "top": "66dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFilteredListHeader"), extendConfig({}, controller.args[1], "flxFilteredListHeader"), extendConfig({}, controller.args[2], "flxFilteredListHeader"));
        flxFilteredListHeader.setDefaultUnit(kony.flex.DP);
        var lblFilteredHeader = new kony.ui.Label(extendConfig({
            "centerY": "50.00%",
            "id": "lblFilteredHeader",
            "isVisible": true,
            "left": "5.56%",
            "skin": "ICSknLbl424242SSPRegular50Px",
            "text": "Show Pending Transfers",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFilteredHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFilteredHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFilteredHeader"));
        var flxShowAll = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxShowAll",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "75%",
            "isModalContainer": false,
            "right": "5%",
            "skin": "slFbox",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxShowAll"), extendConfig({}, controller.args[1], "flxShowAll"), extendConfig({}, controller.args[2], "flxShowAll"));
        flxShowAll.setDefaultUnit(kony.flex.DP);
        var lblShowAllBtn = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "36%",
            "id": "lblShowAllBtn",
            "isVisible": true,
            "left": 0,
            "right": "0%",
            "skin": "ICSknLbl4176a4SSPRegular50Px",
            "text": "Show All",
            "textStyle": {},
            "top": 0,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblShowAllBtn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblShowAllBtn"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblShowAllBtn"));
        flxShowAll.add(lblShowAllBtn);
        var flxFilteredListHeaderSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxFilteredListHeaderSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSeparator",
            "top": "65dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFilteredListHeaderSeparator"), extendConfig({}, controller.args[1], "flxFilteredListHeaderSeparator"), extendConfig({}, controller.args[2], "flxFilteredListHeaderSeparator"));
        flxFilteredListHeaderSeparator.setDefaultUnit(kony.flex.DP);
        flxFilteredListHeaderSeparator.add();
        flxFilteredListHeader.add(lblFilteredHeader, flxShowAll, flxFilteredListHeaderSeparator);
        var flxFiltersList = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxFiltersList",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFiltersList"), extendConfig({}, controller.args[1], "flxFiltersList"), extendConfig({}, controller.args[2], "flxFiltersList"));
        flxFiltersList.setDefaultUnit(kony.flex.DP);
        var flxFiltersListHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "67dp",
            "id": "flxFiltersListHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "ICSknFlxf9f9f9Plain",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFiltersListHeader"), extendConfig({}, controller.args[1], "flxFiltersListHeader"), extendConfig({}, controller.args[2], "flxFiltersListHeader"));
        flxFiltersListHeader.setDefaultUnit(kony.flex.DP);
        var lblFiltersListHeading = new kony.ui.Label(extendConfig({
            "centerY": "50.00%",
            "id": "lblFiltersListHeading",
            "isVisible": true,
            "left": "6%",
            "skin": "ICSknLbl424242SSPRegular50Px",
            "text": "Show Pending Transfers",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFiltersListHeading"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFiltersListHeading"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFiltersListHeading"));
        var flxCollapseFilter = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCollapseFilter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "80%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_f13373a9dd5f44b3b15cc15a86d86293,
            "skin": "slFbox",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flxCollapseFilter"), extendConfig({}, controller.args[1], "flxCollapseFilter"), extendConfig({}, controller.args[2], "flxCollapseFilter"));
        flxCollapseFilter.setDefaultUnit(kony.flex.DP);
        var imgFilterCollpase = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgFilterCollpase",
            "isVisible": true,
            "left": 0,
            "src": "advance_search.png",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgFilterCollpase"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFilterCollpase"), extendConfig({}, controller.args[2], "imgFilterCollpase"));
        flxCollapseFilter.add(imgFilterCollpase);
        var flxListHeaderSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxListHeaderSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSeparator",
            "top": "65dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxListHeaderSeparator"), extendConfig({}, controller.args[1], "flxListHeaderSeparator"), extendConfig({}, controller.args[2], "flxListHeaderSeparator"));
        flxListHeaderSeparator.setDefaultUnit(kony.flex.DP);
        flxListHeaderSeparator.add();
        flxFiltersListHeader.add(lblFiltersListHeading, flxCollapseFilter, flxListHeaderSeparator);
        var flxFilterOptions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxFilterOptions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "66dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFilterOptions"), extendConfig({}, controller.args[1], "flxFilterOptions"), extendConfig({}, controller.args[2], "flxFilterOptions"));
        flxFilterOptions.setDefaultUnit(kony.flex.DP);
        var sgmtFilterOptions = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "imgFilterSelectedIcon": "",
                "lblFilterOption": "Pending"
            }, {
                "imgFilterSelectedIcon": "",
                "lblFilterOption": "Completed"
            }, {
                "imgFilterSelectedIcon": "",
                "lblFilterOption": "Rejected"
            }],
            "groupCells": false,
            "id": "sgmtFilterOptions",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Normal",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxFilterOptionsList",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "e3e3e300",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxFilterOptionsList": "flxFilterOptionsList",
                "imgFilterSelectedIcon": "imgFilterSelectedIcon",
                "lblFilterOption": "lblFilterOption"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "sgmtFilterOptions"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "sgmtFilterOptions"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "sgmtFilterOptions"));
        var flxSegmentShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "9dp",
            "id": "flxSegmentShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknSegmentShadow",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSegmentShadow"), extendConfig({}, controller.args[1], "flxSegmentShadow"), extendConfig({}, controller.args[2], "flxSegmentShadow"));
        flxSegmentShadow.setDefaultUnit(kony.flex.DP);
        flxSegmentShadow.add();
        flxFilterOptions.add(sgmtFilterOptions, flxSegmentShadow);
        flxFiltersList.add(flxFiltersListHeader, flxFilterOptions);
        SearchAndFilter.add(flxSearchAndFilter, flxFilteredListHeader, flxFiltersList);
        return SearchAndFilter;
    }
})