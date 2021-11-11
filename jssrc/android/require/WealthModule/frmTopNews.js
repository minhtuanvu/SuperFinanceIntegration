define("WealthModule/frmTopNews", function() {
    return function(controller) {
        function addWidgetsfrmTopNews() {
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
                "zIndex": 8
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
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": false
                    },
                    "customHeader": {
                        "isVisible": true
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
                        "text": kony.i18n.getLocalizedString("i18n.wealth.stockNews"),
                        "isVisible": true
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var segNews = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblNews": "Amazon to offer permanent roles to 70% of 175,000 new U.S. hires",
                    "lblTime": "1h ago",
                    "lblTitle": "Bloomberg"
                }, {
                    "lblNews": "Amazon to offer permanent roles to 70% of 175,000 new U.S. hires",
                    "lblTime": "1h ago",
                    "lblTitle": "Bloomberg"
                }],
                "groupCells": false,
                "height": "90%",
                "id": "segNews",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_cd172109576f4fe291cf48ef821e52e4,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxNews",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "56dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxNews": "flxNews",
                    "flxRow1": "flxRow1",
                    "flxSeparator": "flxSeparator",
                    "lblNews": "lblNews",
                    "lblTime": "lblTime",
                    "lblTitle": "lblTitle"
                },
                "width": "100%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dockSectionHeaders": false
            });
            this.add(flxHeader, segNews);
        };
        return [{
            "addWidgets": addWidgetsfrmTopNews,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmTopNews",
            "init": controller.AS_Form_e9a0473a83744fa4a12761bd05d49262,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_e89d532af9434184aa23331cf17c64af,
            "preShow": function(eventobject) {
                controller.AS_Form_a1657818a8fc4b77b799ca304849b0dd(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("i18n.wealth.stockNews")
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