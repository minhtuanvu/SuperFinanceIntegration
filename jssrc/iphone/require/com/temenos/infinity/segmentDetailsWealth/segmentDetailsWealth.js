define(function() {
    return function(controller) {
        var segmentDetailsWealth = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "segmentDetailsWealth",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_preShow_fdde45de24a04b9aab1ddac29d88537e(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "segmentDetailsWealth"), extendConfig({}, controller.args[1], "segmentDetailsWealth"), extendConfig({}, controller.args[2], "segmentDetailsWealth"));
        segmentDetailsWealth.setDefaultUnit(kony.flex.DP);
        var SearchAndFilterWealth = new com.temenos.infinity.SearchAndFilterWealth(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "id": "SearchAndFilterWealth",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "SearchAndFilterWealth": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "height": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "SearchAndFilterWealth"), extendConfig({
            "overrides": {}
        }, controller.args[1], "SearchAndFilterWealth"), extendConfig({
            "overrides": {}
        }, controller.args[2], "SearchAndFilterWealth"));
        SearchAndFilterWealth.componentVisibility = "Hide Advanced Filter";
        SearchAndFilterWealth.placeholderText = "{i.i18n.Search.PlaceholderText}";
        SearchAndFilterWealth.sknSearchText = "ICSknTxt333333SSPRegular40Px";
        SearchAndFilterWealth.imgSearchIcon = "search_image.png";
        SearchAndFilterWealth.advancedFilterValues = "[{\"id\":\"default\",\"text\":\"{i.i18n.Search.AllTransfers}\"},{\"id\":\"Pending\",\"text\":\"{i.i18n.Search.Pending}\"},{\"id\":\"Rejected\",\"text\":\"{i.i18n.Search.Rejected}\"},{\"id\":\"Cancelled\",\"text\":\"{i.i18n.Search.Cancelled}\"},{\"id\":\"Completed\",\"text\":\"{i.i18n.Search.Completed}\"}]";
        SearchAndFilterWealth.sknSearchTextPlaceholderBox = "ICSknSearchTextPlaceHolder99999935PxSSPRegular";
        SearchAndFilterWealth.closeFilterIcon = "advance_search.png";
        SearchAndFilterWealth.sknFilterHeading = "ICSknLbl424242SSPRegular50Px";
        SearchAndFilterWealth.imgFilterIcon = "advansecsearch.png";
        SearchAndFilterWealth.filterSelected = "[{\"id\":\"default\",\"headerText\":\"{i.i18n.Search.ShowingAllTransfers}\"},{\"id\":\"Pending\",\"headerText\":\"{i.i18n.Search.ShowingPendingTransfers}\"},{\"id\":\"Rejected\",\"headerText\":\"{i.i18n.Search.ShowingRejectedTransfers}\"},{\"id\":\"Cancelled\",\"headerText\":\"{i.i18n.Search.ShowingCancelledTransfers}\"},{\"id\":\"Completed\",\"headerText\":\"{i.i18n.Search.ShowingCompletedTransfers}\"}]";
        SearchAndFilterWealth.sknSearchTextboxFocus = "ICSknTxt333333SSPRegular40Px";
        SearchAndFilterWealth.AdvancedFilterselectedDataIcon = "correct.png";
        SearchAndFilterWealth.showAllButton = "{\"text\":\"{i.i18n.Search.ShowAllButtonText}\",\"skin\":\"ICSknLbl4176a4SSPRegular50Px\"}";
        SearchAndFilterWealth.sknFilterListData = "ICSknFilterOptions4176a450PxSSPRegular";
        SearchAndFilterWealth.cancelSearchIcon = "clear_field.png";
        SearchAndFilterWealth.sknSearchAndFilterBackground = "sknFlxGradientBlue";
        SearchAndFilterWealth.sknFilteredDataHeaderBackground = "ICSknFlxf9f9f9Plain";
        SearchAndFilterWealth.sknFilterListHeaderBackground = "ICSknListingOptions";
        SearchAndFilterWealth.preShow = controller.AS_preShow_fdde45de24a04b9aab1ddac29d88537e;
        var flxPortfolioValues = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "145dp",
            "id": "flxPortfolioValues",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxPortfolioValues"), extendConfig({}, controller.args[1], "flxPortfolioValues"), extendConfig({}, controller.args[2], "flxPortfolioValues"));
        flxPortfolioValues.setDefaultUnit(kony.flex.DP);
        var lblTotalValue = new kony.ui.Label(extendConfig({
            "id": "lblTotalValue",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl727272SSP93pr",
            "text": kony.i18n.getLocalizedString("i18n.wealth.totalValue"),
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, controller.args[0], "lblTotalValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTotalValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTotalValue"));
        var lblTotalVal = new kony.ui.Label(extendConfig({
            "id": "lblTotalVal",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSpSemibold56px",
            "textStyle": {},
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, controller.args[0], "lblTotalVal"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTotalVal"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTotalVal"));
        var flxPL = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxPL",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 6
        }, controller.args[0], "flxPL"), extendConfig({}, controller.args[1], "flxPL"), extendConfig({}, controller.args[2], "flxPL"));
        flxPL.setDefaultUnit(kony.flex.DP);
        var flxUnrealizedPL = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxUnrealizedPL",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%",
            "zIndex": 6
        }, controller.args[0], "flxUnrealizedPL"), extendConfig({}, controller.args[1], "flxUnrealizedPL"), extendConfig({}, controller.args[2], "flxUnrealizedPL"));
        flxUnrealizedPL.setDefaultUnit(kony.flex.DP);
        var lblUnrealizedPL = new kony.ui.Label(extendConfig({
            "id": "lblUnrealizedPL",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl727272SSP93pr",
            "text": kony.i18n.getLocalizedString("i18n.wealth.unrealizedPL\:"),
            "textStyle": {},
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, controller.args[0], "lblUnrealizedPL"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUnrealizedPL"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblUnrealizedPL"));
        var lblUnrealizedPLValue = new kony.ui.Label(extendConfig({
            "id": "lblUnrealizedPLValue",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknIWlbl2F8523SemiBold15px",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, controller.args[0], "lblUnrealizedPLValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUnrealizedPLValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblUnrealizedPLValue"));
        flxUnrealizedPL.add(lblUnrealizedPL, lblUnrealizedPLValue);
        var flxTodayPL = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTodayPL",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%",
            "zIndex": 6
        }, controller.args[0], "flxTodayPL"), extendConfig({}, controller.args[1], "flxTodayPL"), extendConfig({}, controller.args[2], "flxTodayPL"));
        flxTodayPL.setDefaultUnit(kony.flex.DP);
        var lblTodayPL = new kony.ui.Label(extendConfig({
            "id": "lblTodayPL",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl727272SSP93pr",
            "text": kony.i18n.getLocalizedString("i18n.wealth.todaysPL\:"),
            "textStyle": {},
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, controller.args[0], "lblTodayPL"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTodayPL"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTodayPL"));
        var lblTodayPLValue = new kony.ui.Label(extendConfig({
            "id": "lblTodayPLValue",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknIWlbl2F8523SemiBold15px",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, controller.args[0], "lblTodayPLValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTodayPLValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTodayPLValue"));
        flxTodayPL.add(lblTodayPL, lblTodayPLValue);
        flxPL.add(flxUnrealizedPL, flxTodayPL);
        var flxShadowBox = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "9px",
            "id": "flxShadowBox",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxShadowBox"), extendConfig({}, controller.args[1], "flxShadowBox"), extendConfig({}, controller.args[2], "flxShadowBox"));
        flxShadowBox.setDefaultUnit(kony.flex.DP);
        var flxRectangle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRectangle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflx424242grad",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRectangle"), extendConfig({}, controller.args[1], "flxRectangle"), extendConfig({}, controller.args[2], "flxRectangle"));
        flxRectangle.setDefaultUnit(kony.flex.DP);
        flxRectangle.add();
        flxShadowBox.add(flxRectangle);
        flxPortfolioValues.add(lblTotalValue, lblTotalVal, flxPL, flxShadowBox);
        var flxOrderToggle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxOrderToggle",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxOrderToggle"), extendConfig({}, controller.args[1], "flxOrderToggle"), extendConfig({}, controller.args[2], "flxOrderToggle"));
        flxOrderToggle.setDefaultUnit(kony.flex.DP);
        var flxOrder = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxOrder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "19dp",
            "isModalContainer": false,
            "skin": "sknFlxTabBg767680",
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxOrder"), extendConfig({}, controller.args[1], "flxOrder"), extendConfig({}, controller.args[2], "flxOrder"));
        flxOrder.setDefaultUnit(kony.flex.DP);
        var flxTglOpen = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "25dp",
            "id": "flxTglOpen",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "2dp",
            "isModalContainer": false,
            "skin": "sknFlxTransparent",
            "top": "0dp",
            "width": "52%"
        }, controller.args[0], "flxTglOpen"), extendConfig({}, controller.args[1], "flxTglOpen"), extendConfig({}, controller.args[2], "flxTglOpen"));
        flxTglOpen.setDefaultUnit(kony.flex.DP);
        var btnTglOpen = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtnFFFFFFSSPSB15px",
            "height": "25dp",
            "id": "btnTglOpen",
            "isVisible": true,
            "left": 0,
            "skin": "sknBtnFFFFFFSSPSB15px",
            "text": kony.i18n.getLocalizedString("i18n.wealth.openOrders"),
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnTglOpen"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTglOpen"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnTglOpen"));
        flxTglOpen.add(btnTglOpen);
        var flxTglHistory = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "25dp",
            "id": "flxTglHistory",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "2dp",
            "skin": "sknFlxTransparent",
            "top": "0dp",
            "width": "52%"
        }, controller.args[0], "flxTglHistory"), extendConfig({}, controller.args[1], "flxTglHistory"), extendConfig({}, controller.args[2], "flxTglHistory"));
        flxTglHistory.setDefaultUnit(kony.flex.DP);
        var btnTglHistory = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtnFFFFFFSSPSB15px",
            "height": "25dp",
            "id": "btnTglHistory",
            "isVisible": true,
            "left": 0,
            "skin": "sknbtn000000SSPSB15px",
            "text": kony.i18n.getLocalizedString("i18n.wealth.history"),
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnTglHistory"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTglHistory"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnTglHistory"));
        flxTglHistory.add(btnTglHistory);
        flxOrder.add(flxTglOpen, flxTglHistory);
        var lblCommon = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblCommon",
            "isVisible": false,
            "skin": "sknlblFFFFFFSSPSB15px1",
            "text": "Open Orders",
            "textStyle": {},
            "top": "0dp",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "lblCommon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCommon"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCommon"));
        flxOrderToggle.add(flxOrder, lblCommon);
        var flxTimePeriod = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxTimePeriod",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxTimePeriod"), extendConfig({}, controller.args[1], "flxTimePeriod"), extendConfig({}, controller.args[2], "flxTimePeriod"));
        flxTimePeriod.setDefaultUnit(kony.flex.DP);
        var flxTime = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxTime",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTime"), extendConfig({}, controller.args[1], "flxTime"), extendConfig({}, controller.args[2], "flxTime"));
        flxTime.setDefaultUnit(kony.flex.DP);
        var flxByTimePeriod = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxByTimePeriod",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "40%"
        }, controller.args[0], "flxByTimePeriod"), extendConfig({}, controller.args[1], "flxByTimePeriod"), extendConfig({}, controller.args[2], "flxByTimePeriod"));
        flxByTimePeriod.setDefaultUnit(kony.flex.DP);
        var lblTimePeriod = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTimePeriod",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl727272SSP93pr",
            "text": kony.i18n.getLocalizedString("i18n.wealth.byTimePeriod"),
            "textStyle": {},
            "top": "0dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "lblTimePeriod"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTimePeriod"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTimePeriod"));
        flxByTimePeriod.add(lblTimePeriod);
        var flxPreviousDays = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxPreviousDays",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "40%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "60%"
        }, controller.args[0], "flxPreviousDays"), extendConfig({}, controller.args[1], "flxPreviousDays"), extendConfig({}, controller.args[2], "flxPreviousDays"));
        flxPreviousDays.setDefaultUnit(kony.flex.DP);
        var lblPreviousDays = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblPreviousDays",
            "isVisible": true,
            "right": "45dp",
            "skin": "sknLbl4176A4SSPReg26px",
            "text": kony.i18n.getLocalizedString("i18n.wealth.previous30Days"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPreviousDays"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPreviousDays"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPreviousDays"));
        var imgPreviousDay = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "19dp",
            "id": "imgPreviousDay",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "19dp",
            "zIndex": 1
        }, controller.args[0], "imgPreviousDay"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPreviousDay"), extendConfig({}, controller.args[2], "imgPreviousDay"));
        flxPreviousDays.add(lblPreviousDays, imgPreviousDay);
        flxTime.add(flxByTimePeriod, flxPreviousDays);
        var flxSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "3%",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflx424242grad",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator"), extendConfig({}, controller.args[1], "flxSeperator"), extendConfig({}, controller.args[2], "flxSeperator"));
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        flxTimePeriod.add(flxTime, flxSeperator);
        var flxCashAccounts = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxCashAccounts",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxCashAccounts"), extendConfig({}, controller.args[1], "flxCashAccounts"), extendConfig({}, controller.args[2], "flxCashAccounts"));
        flxCashAccounts.setDefaultUnit(kony.flex.DP);
        var flxCashAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxCashAccount",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCashAccount"), extendConfig({}, controller.args[1], "flxCashAccount"), extendConfig({}, controller.args[2], "flxCashAccount"));
        flxCashAccount.setDefaultUnit(kony.flex.DP);
        var flxByCashAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxByCashAccount",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "50%"
        }, controller.args[0], "flxByCashAccount"), extendConfig({}, controller.args[1], "flxByCashAccount"), extendConfig({}, controller.args[2], "flxByCashAccount"));
        flxByCashAccount.setDefaultUnit(kony.flex.DP);
        var lblCashAccount = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblCashAccount",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl727272SSP93pr",
            "text": kony.i18n.getLocalizedString("i18n.wealth.cashAccounts"),
            "textStyle": {},
            "top": "0dp",
            "width": "55%",
            "zIndex": 1
        }, controller.args[0], "lblCashAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCashAccount"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCashAccount"));
        flxByCashAccount.add(lblCashAccount);
        var flxCash = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxCash",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "50%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%"
        }, controller.args[0], "flxCash"), extendConfig({}, controller.args[1], "flxCash"), extendConfig({}, controller.args[2], "flxCash"));
        flxCash.setDefaultUnit(kony.flex.DP);
        var lblCash = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblCash",
            "isVisible": true,
            "right": "45dp",
            "skin": "sknLbl4176A4SSPReg26px",
            "text": "USD-1256",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCash"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCash"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCash"));
        var imgCash = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "19dp",
            "id": "imgCash",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "19dp",
            "zIndex": 1
        }, controller.args[0], "imgCash"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCash"), extendConfig({}, controller.args[2], "imgCash"));
        flxCash.add(lblCash, imgCash);
        flxCashAccount.add(flxByCashAccount, flxCash);
        var flxCellSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "3dp",
            "id": "flxCellSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflx424242grad",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxCellSeperator"), extendConfig({}, controller.args[1], "flxCellSeperator"), extendConfig({}, controller.args[2], "flxCellSeperator"));
        flxCellSeperator.setDefaultUnit(kony.flex.DP);
        flxCellSeperator.add();
        flxCashAccounts.add(flxCashAccount, flxCellSeperator);
        var segList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "imgChevron": "more_detail.png",
                "imgLogo": "imagedrag.png",
                "imgStatus": "activegreendot.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "more_detail.png",
                "imgLogo": "imagedrag.png",
                "imgStatus": "activegreendot.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "more_detail.png",
                "imgLogo": "imagedrag.png",
                "imgStatus": "activegreendot.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "more_detail.png",
                "imgLogo": "imagedrag.png",
                "imgStatus": "activegreendot.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "more_detail.png",
                "imgLogo": "imagedrag.png",
                "imgStatus": "activegreendot.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "more_detail.png",
                "imgLogo": "imagedrag.png",
                "imgStatus": "activegreendot.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "more_detail.png",
                "imgLogo": "imagedrag.png",
                "imgStatus": "activegreendot.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "more_detail.png",
                "imgLogo": "imagedrag.png",
                "imgStatus": "activegreendot.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "more_detail.png",
                "imgLogo": "imagedrag.png",
                "imgStatus": "activegreendot.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "more_detail.png",
                "imgLogo": "imagedrag.png",
                "imgStatus": "activegreendot.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }],
            "groupCells": false,
            "id": "segList",
            "isVisible": false,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxWealthDetailsCopy",
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
                "flxBottomBorder": "flxBottomBorder",
                "flxClick": "flxClick",
                "flxRowFour": "flxRowFour",
                "flxRowOne": "flxRowOne",
                "flxRowThree": "flxRowThree",
                "flxRowTwo": "flxRowTwo",
                "flxStatus": "flxStatus",
                "flxWealthDetailsCopy": "flxWealthDetailsCopy",
                "imgChevron": "imgChevron",
                "imgLogo": "imgLogo",
                "imgStatus": "imgStatus",
                "lblFiveKey": "lblFiveKey",
                "lblFiveValue": "lblFiveValue",
                "lblFourKey": "lblFourKey",
                "lblFourValue": "lblFourValue",
                "lblId": "lblId",
                "lblName": "lblName",
                "lblOneKey": "lblOneKey",
                "lblOneValue": "lblOneValue",
                "lblStatus": "lblStatus",
                "lblThreeKey": "lblThreeKey",
                "lblThreeValue": "lblThreeValue",
                "lblTwoKey": "lblTwoKey",
                "lblTwoValue": "lblTwoValue"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segList"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segList"));
        var lblError = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblError",
            "isVisible": false,
            "skin": "slLabel",
            "text": "Label",
            "textStyle": {},
            "top": "55dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblError"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblError"));
        segmentDetailsWealth.add(SearchAndFilterWealth, flxPortfolioValues, flxOrderToggle, flxTimePeriod, flxCashAccounts, segList, lblError);
        return segmentDetailsWealth;
    }
})