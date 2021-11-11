define("ManageCustomgroup/frmMyAccount", function() {
    return function(controller) {
        function addWidgetsfrmMyAccount() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMyAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxMyAccount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMyAccount.setDefaultUnit(kony.flex.DP);
            var flxmain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxmain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxmain.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "10%",
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
                        "height": "10%"
                    },
                    "imgSearch": {
                        "src": "cancelicon.png"
                    },
                    "lblLocateUs": {
                        "centerY": "50%",
                        "text": "My Account"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var segAccountFilters = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "data": [
                    [{
                            "lblManage": "Label",
                            "lblName": "Label"
                        },
                        [{
                            "imgCheckbox": "radiobuttoninactive.png",
                            "lblAccountNumber": " ",
                            "lblCard": "Label",
                            "lblSeparator": "5 Miles"
                        }, {
                            "imgCheckbox": "radiobuttoninactive.png",
                            "lblAccountNumber": " ",
                            "lblCard": "Label",
                            "lblSeparator": "5 Miles"
                        }, {
                            "imgCheckbox": "radiobuttoninactive.png",
                            "lblAccountNumber": " ",
                            "lblCard": "Label",
                            "lblSeparator": "5 Miles"
                        }]
                    ],
                    [{
                            "lblManage": "Label",
                            "lblName": "Label"
                        },
                        [{
                            "imgCheckbox": "radiobuttoninactive.png",
                            "lblAccountNumber": " ",
                            "lblCard": "Label",
                            "lblSeparator": "5 Miles"
                        }, {
                            "imgCheckbox": "radiobuttoninactive.png",
                            "lblAccountNumber": " ",
                            "lblCard": "Label",
                            "lblSeparator": "5 Miles"
                        }, {
                            "imgCheckbox": "radiobuttoninactive.png",
                            "lblAccountNumber": " ",
                            "lblCard": "Label",
                            "lblSeparator": "5 Miles"
                        }, {
                            "imgCheckbox": "radiobuttoninactive.png",
                            "lblAccountNumber": " ",
                            "lblCard": "Label",
                            "lblSeparator": "5 Miles"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segAccountFilters",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxCards",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountName": "flxAccountName",
                    "flxCards": "flxCards",
                    "flxCheckbox": "flxCheckbox",
                    "flxCustomView": "flxCustomView",
                    "flxManage": "flxManage",
                    "flxSeparator": "flxSeparator",
                    "imgCheckbox": "imgCheckbox",
                    "lblAccountNumber": "lblAccountNumber",
                    "lblCard": "lblCard",
                    "lblManage": "lblManage",
                    "lblName": "lblName",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxmain.add(customHeader, segAccountFilters);
            var customFooter = new com.kmb.common.customFooter({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "9%",
                "id": "customFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 300,
                "overrides": {
                    "customFooter": {
                        "height": "9%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMyAccount.add(flxmain, customFooter);
            this.add(flxMyAccount);
        };
        return [{
            "addWidgets": addWidgetsfrmMyAccount,
            "enabledForIdleTimeout": true,
            "id": "frmMyAccount",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
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