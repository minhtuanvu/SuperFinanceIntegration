define("NewAccountOpeningModule/frmNAOProductDetails", function() {
    return function(controller) {
        function addWidgetsfrmNAOProductDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "customHeader": {
                        "height": "100%"
                    },
                    "flxBack": {
                        "isVisible": true,
                        "top": "0dp"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "cancelicon.png"
                    },
                    "lblLocateUs": {
                        "text": "Premium Savings Account"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxProductDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxProductDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxProductDetails.setDefaultUnit(kony.flex.DP);
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
            flxSeparatorHeader.add();
            var flxProductDetailsTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxProductDetailsTabs",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3Shadow",
                "top": "1dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxProductDetailsTabs.setDefaultUnit(kony.flex.DP);
            var btnFeatures = new kony.ui.Button({
                "focusSkin": "sknBtnf6f6f6424242SSP24px",
                "height": "100%",
                "id": "btnFeatures",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtnf6f6f6424242SSP24px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Features"),
                "top": "0dp",
                "width": "33.20%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCharges = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnf6f6f6424242SSP24px",
                "height": "100%",
                "id": "btnCharges",
                "isVisible": true,
                "skin": "sknBtnf6f6f6424242SSP24px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Charges"),
                "top": "0dp",
                "width": "33.20%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnInfo = new kony.ui.Button({
                "focusSkin": "sknBtnf6f6f6424242SSP24px",
                "height": "100%",
                "id": "btnInfo",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknBtnf6f6f6424242SSP24px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Info"),
                "top": "0dp",
                "width": "33.20%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxFeaturesSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxFeaturesSelected",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx0095e4",
                "width": "33.20%",
                "zIndex": 5
            }, {}, {});
            flxFeaturesSelected.setDefaultUnit(kony.flex.DP);
            flxFeaturesSelected.add();
            var flxChargesSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxChargesSelected",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx0095e4",
                "width": "33.20%",
                "zIndex": 5
            }, {}, {});
            flxChargesSelected.setDefaultUnit(kony.flex.DP);
            flxChargesSelected.add();
            var flxInfoSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxInfoSelected",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlx0095e4",
                "width": "33.20%",
                "zIndex": 5
            }, {}, {});
            flxInfoSelected.setDefaultUnit(kony.flex.DP);
            flxInfoSelected.add();
            var flxSeparatorTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorTabs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparatorTabs.setDefaultUnit(kony.flex.DP);
            flxSeparatorTabs.add();
            flxProductDetailsTabs.add(btnFeatures, btnCharges, btnInfo, flxFeaturesSelected, flxChargesSelected, flxInfoSelected, flxSeparatorTabs);
            var rtxData = new kony.ui.RichText({
                "id": "rtxData",
                "isVisible": false,
                "left": "20dp",
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx424242SSP22px",
                "text": "<b>About Product</b><br/>Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
                "top": "10dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var segProductDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "data": [{
                    "btnShowMore": "SHOW MORE",
                    "lblSubTitle": "Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
                    "lblTitle": "About Product",
                    "rtxData": "<b>About Product</b><br/>Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. "
                }, {
                    "btnShowMore": "SHOW MORE",
                    "lblSubTitle": "Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
                    "lblTitle": "About Product",
                    "rtxData": "<b>About Product</b><br/>Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. "
                }, {
                    "btnShowMore": "SHOW MORE",
                    "lblSubTitle": "Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
                    "lblTitle": "About Product",
                    "rtxData": "<b>About Product</b><br/>Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. "
                }],
                "groupCells": false,
                "id": "segProductDetails",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegffffff",
                "rowSkin": "sknSegffffff",
                "rowTemplate": "flxProductDetails",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "41dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "FlexContainer0je14ed46783344": "FlexContainer0je14ed46783344",
                    "btnShowMore": "btnShowMore",
                    "flxProductDetails": "flxProductDetails",
                    "lblSubTitle": "lblSubTitle",
                    "lblTitle": "lblTitle",
                    "rtxData": "rtxData"
                },
                "widgetSkin": "sknSegffffff",
                "width": "100%",
                "zIndex": 4
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxScProductDescription = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxScProductDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxScProductDescription.setDefaultUnit(kony.flex.DP);
            var lblProductDescription = new kony.ui.Label({
                "id": "lblProductDescription",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "88%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxScProductDescription.add(lblProductDescription);
            flxProductDetails.add(flxSeparatorHeader, flxProductDetailsTabs, rtxData, segProductDetails, flxScProductDescription);
            this.add(flxHeader, flxProductDetails);
        };
        return [{
            "addWidgets": addWidgetsfrmNAOProductDetails,
            "enabledForIdleTimeout": true,
            "id": "frmNAOProductDetails",
            "init": controller.AS_Form_jbd91a7d02a944e8bf6141f30f2ee7b2,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_j6730f71cf5940648746a189eeb7b513(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Premium Savings Account"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});