define("WealthModule/frmRecentActivity", function() {
    return function(controller) {
        function addWidgetsfrmRecentActivity() {
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
                "zIndex": 1
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
                        "isVisible": true,
                        "text": "Recent Activity"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxRecentActivity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRecentActivity",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%"
            }, {}, {});
            flxRecentActivity.setDefaultUnit(kony.flex.DP);
            var SegRecentActivity = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblActivityDetails": "Label  ",
                    "lblActivityInstument": "Label",
                    "lblActivityTime": "Label",
                    "lblRound": "Label"
                }, {
                    "lblActivityDetails": "Label  ",
                    "lblActivityInstument": "Label",
                    "lblActivityTime": "Label",
                    "lblRound": "Label"
                }, {
                    "lblActivityDetails": "Label  ",
                    "lblActivityInstument": "Label",
                    "lblActivityTime": "Label",
                    "lblRound": "Label"
                }, {
                    "lblActivityDetails": "Label  ",
                    "lblActivityInstument": "Label",
                    "lblActivityTime": "Label",
                    "lblRound": "Label"
                }, {
                    "lblActivityDetails": "Label  ",
                    "lblActivityInstument": "Label",
                    "lblActivityTime": "Label",
                    "lblRound": "Label"
                }, {
                    "lblActivityDetails": "Label  ",
                    "lblActivityInstument": "Label",
                    "lblActivityTime": "Label",
                    "lblRound": "Label"
                }, {
                    "lblActivityDetails": "Label  ",
                    "lblActivityInstument": "Label",
                    "lblActivityTime": "Label",
                    "lblRound": "Label"
                }, {
                    "lblActivityDetails": "Label  ",
                    "lblActivityInstument": "Label",
                    "lblActivityTime": "Label",
                    "lblRound": "Label"
                }, {
                    "lblActivityDetails": "Label  ",
                    "lblActivityInstument": "Label",
                    "lblActivityTime": "Label",
                    "lblRound": "Label"
                }, {
                    "lblActivityDetails": "Label  ",
                    "lblActivityInstument": "Label",
                    "lblActivityTime": "Label",
                    "lblRound": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "SegRecentActivity",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxWealthRecentActivity",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxActivityDetails": "flxActivityDetails",
                    "flxMainActivity": "flxMainActivity",
                    "flxRightContent": "flxRightContent",
                    "flxWealthRecentActivity": "flxWealthRecentActivity",
                    "flxleftContent": "flxleftContent",
                    "flxleftSepatator": "flxleftSepatator",
                    "lblActivityDetails": "lblActivityDetails",
                    "lblActivityInstument": "lblActivityInstument",
                    "lblActivityTime": "lblActivityTime",
                    "lblRound": "lblRound"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dockSectionHeaders": false
            });
            flxRecentActivity.add(SegRecentActivity);
            var flxError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxError",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxError.setDefaultUnit(kony.flex.DP);
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblError",
                "isVisible": true,
                "skin": "sknLbl727272SSPR15px",
                "text": "No recent activity available",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxError.add(lblError);
            flxMainContainer.add(flxRecentActivity, flxError);
            this.add(flxHeader, flxMainContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmRecentActivity,
            "enabledForIdleTimeout": true,
            "id": "frmRecentActivity",
            "init": controller.AS_Form_jfe178fb92da497dbbf1d71d60b61b8d,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_eb61617cc029427b88abe689ed0d7ccd(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Recent Activity"
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