define(function() {
    return function(controller) {
        var accountSummaryNative = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "accountSummaryNative",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_a1a6d5fe4bca479e87d8573f4e6c27f6(eventobject);
            },
            "skin": "slFbox",
            "top": "0%",
            "width": "100%"
        }, controller.args[0], "accountSummaryNative"), extendConfig({}, controller.args[1], "accountSummaryNative"), extendConfig({}, controller.args[2], "accountSummaryNative"));
        accountSummaryNative.setDefaultUnit(kony.flex.DP);
        var flxAccountLandingMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAccountLandingMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknFlxGradientBlue",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountLandingMain"), extendConfig({}, controller.args[1], "flxAccountLandingMain"), extendConfig({}, controller.args[2], "flxAccountLandingMain"));
        flxAccountLandingMain.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var imgIndicator = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgIndicator",
            "isVisible": false,
            "left": "20dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "3dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgIndicator"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIndicator"), extendConfig({}, controller.args[2], "imgIndicator"));
        var lblAccountName = new kony.ui.Label(extendConfig({
            "id": "lblAccountName",
            "isVisible": true,
            "skin": "ICSknHeaderFFF34px",
            "text": "My Savings...9898",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblAccountName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccountName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAccountName"));
        flxHeader.add(imgIndicator, lblAccountName);
        var search = new com.temenos.infinity.search(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "id": "search",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "overrides": {
                "search": {
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
        }, controller.args[0], "search"), extendConfig({
            "overrides": {}
        }, controller.args[1], "search"), extendConfig({
            "overrides": {}
        }, controller.args[2], "search"));
        search.searchPlaceholder = "i18n.Search.PlaceholderText";
        search.searchIcon = "search_2.png";
        search.searchTxtBoxSkin = "ICSknTbxSSPR42424215px";
        search.accountTypeFromContext = "{$.c.Accounts[0].accountType}";
        search.advancedFilterIcon = "advancedsearch.png";
        search.btnCancelSkin = "ICSknBtnCancelHelfff15px";
        search.accountIDFromContext = "{$.c.Accounts[0].accountID}";
        search.isFilterIconVisible = true;
        search.flxBgSkin = "ICslFbox";
        search.isSearchIconVisible = true;
        search.flxShadowSkin = "ICSknFlxShadow000fff";
        var flxaccountDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxaccountDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxaccountDetails"), extendConfig({}, controller.args[1], "flxaccountDetails"), extendConfig({}, controller.args[2], "flxaccountDetails"));
        flxaccountDetails.setDefaultUnit(kony.flex.DP);
        var flxField1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxField1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 8,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxField1"), extendConfig({}, controller.args[1], "flxField1"), extendConfig({}, controller.args[2], "flxField1"));
        flxField1.setDefaultUnit(kony.flex.DP);
        var lblField1 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblField1",
            "isVisible": true,
            "skin": "ICSknLabelB8DCFFSSPR15px",
            "text": "Available Balance",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblField1"));
        var flxFormatValue1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 2,
            "centerX": "50%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxFormatValue1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 12,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFormatValue1"), extendConfig({}, controller.args[1], "flxFormatValue1"), extendConfig({}, controller.args[2], "flxFormatValue1"));
        flxFormatValue1.setDefaultUnit(kony.flex.DP);
        flxFormatValue1.add();
        flxField1.add(lblField1, flxFormatValue1);
        var flxField2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxField2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 5,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxField2"), extendConfig({}, controller.args[1], "flxField2"), extendConfig({}, controller.args[2], "flxField2"));
        flxField2.setDefaultUnit(kony.flex.DP);
        var lblField2 = new kony.ui.RichText(extendConfig({
            "centerX": "50%",
            "id": "lblField2",
            "isVisible": true,
            "skin": "ICSknRichTextFFFFFFSSPL14px",
            "text": "Pending Deposits:",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "lblField2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2"), extendConfig({}, controller.args[2], "lblField2"));
        flxField2.add(lblField2);
        var flxField3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxField3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 5,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxField3"), extendConfig({}, controller.args[1], "flxField3"), extendConfig({}, controller.args[2], "flxField3"));
        flxField3.setDefaultUnit(kony.flex.DP);
        var lblField3 = new kony.ui.RichText(extendConfig({
            "centerX": "50%",
            "id": "lblField3",
            "isVisible": true,
            "skin": "ICSknRichTextFFFFFFSSPL14px",
            "text": "Pending Withdrawls:",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "lblField3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField3"), extendConfig({}, controller.args[2], "lblField3"));
        flxField3.add(lblField3);
        var flxField4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxField4",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 5,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxField4"), extendConfig({}, controller.args[1], "flxField4"), extendConfig({}, controller.args[2], "flxField4"));
        flxField4.setDefaultUnit(kony.flex.DP);
        var lblField4 = new kony.ui.RichText(extendConfig({
            "centerX": "50%",
            "id": "lblField4",
            "isVisible": true,
            "skin": "ICSknRichTextFFFFFFSSPL14px",
            "text": "RichText",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "lblField4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField4"), extendConfig({}, controller.args[2], "lblField4"));
        flxField4.add(lblField4);
        flxaccountDetails.add(flxField1, flxField2, flxField3, flxField4);
        flxAccountLandingMain.add(flxHeader, search, flxaccountDetails);
        accountSummaryNative.add(flxAccountLandingMain);
        return accountSummaryNative;
    }
})