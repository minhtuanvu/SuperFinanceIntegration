define("SettingsModule/frmTppAccountDetails", function() {
    return function(controller) {
        function addWidgetsfrmTppAccountDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "left": "15%",
                        "text": "Current Account",
                        "width": kony.flex.USE_PREFFERED_SIZE
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxBodyText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "110dp",
                "id": "flxBodyText",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "50dp",
                "width": "100%"
            }, {}, {});
            flxBodyText.setDefaultUnit(kony.flex.DP);
            var lblBodyText = new kony.ui.Label({
                "centerX": "50%",
                "height": "50dp",
                "id": "lblBodyText",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": "You are sharing the following information about your account",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35dp",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBodyText.add(lblBodyText);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "160dp",
                "width": "100%"
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxSegment = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "70%",
                "horizontalScrollIndicator": true,
                "id": "flxSegment",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "180dp",
                "verticalScrollIndicator": true,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxSegment.setDefaultUnit(kony.flex.DP);
            var segAccountDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblDetails": "Account information for your selected account(s) including:Account Identifier(s);Account Names;Account Currency;Account Type;Account Status;Additional Account Details.",
                    "lblTitle": "Account Information"
                }, {
                    "lblDetails": "Balance Details of the selected account(s) including a range of available,opening and closing balances. This will include and exclude the additional overdrafts or limits linked to you and your accounts.",
                    "lblTitle": "Balance Details"
                }, {
                    "lblDetails": "Transaction Details of the selected account(s) including a range of available,opening and closing balances. This will include and exclude the additional overdrafts or limits linked to you and your accounts.",
                    "lblTitle": "Transaction Details"
                }],
                "groupCells": false,
                "id": "segAccountDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAccountDesc",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountDesc": "flxAccountDesc",
                    "flxDetails": "flxDetails",
                    "lblDetails": "lblDetails",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegment.add(segAccountDetails);
            this.add(flxHeader, flxBodyText, flxSeparator, flxSegment);
        };
        return [{
            "addWidgets": addWidgetsfrmTppAccountDetails,
            "enabledForIdleTimeout": false,
            "id": "frmTppAccountDetails",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_e2be6b412bce4904a6ee5e4f253b2a2d(eventobject);
            },
            "skin": "sknFrmffffff"
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
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});