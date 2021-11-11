define("ACHModule/frmACHList", function() {
    return function(controller) {
        function addWidgetsfrmACHList() {
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
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
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
                    "btnLeft": {
                        "isVisible": false
                    },
                    "btnRight": {
                        "isVisible": false,
                        "text": "EDIT"
                    },
                    "flxHeader": {
                        "left": "0%",
                        "top": "0%"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": "ACH"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxTransfers = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "1dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxTransfers",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrFFFFFFTab",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxTransfers.setDefaultUnit(kony.flex.DP);
            var segAchlist = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }],
                "groupCells": false,
                "id": "segAchlist",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAchlist",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAchlist": "flxAchlist",
                    "flxArrow": "flxArrow",
                    "flxCategory": "flxCategory",
                    "flxcontent": "flxcontent",
                    "flxsep": "flxsep",
                    "imgArrow": "imgArrow",
                    "lblSeparator": "lblSeparator",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTransfers.add(segAchlist);
            this.add(flxHeader, flxTransfers);
        };
        return [{
            "addWidgets": addWidgetsfrmACHList,
            "enabledForIdleTimeout": true,
            "id": "frmACHList",
            "init": controller.AS_Form_hfd2650d34a64ea6bc72248a10e9a4f9,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmffffff",
            "title": "ACH"
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