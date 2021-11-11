define("CampaignManagement/frmFromAccount", function() {
    return function(controller) {
        function addWidgetsfrmFromAccount() {
            this.setDefaultUnit(kony.flex.DP);
            var customSearch = new com.kmb.Search.customSearch({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "95dp",
                "id": "customSearch",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0%",
                "width": "100%",
                "overrides": {
                    "lblLocateUs": {
                        "text": "From Account"
                    },
                    "tbxSearch": {
                        "placeholder": "Search"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSegments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1500px",
                "id": "flxSegments",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "95dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSegments.setDefaultUnit(kony.flex.DP);
            var segAccounts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [
                    [{
                            "lblTypeName": "Checking Accounts (3)",
                            "lblTypeValue": ""
                        },
                        [{
                            "imgBank": "konybanklogo.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "",
                            "lblDelete": "Delete"
                        }, {
                            "imgBank": "konybanklogo.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "",
                            "lblDelete": "Delete"
                        }, {
                            "imgBank": "konybanklogo.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "",
                            "lblDelete": "Delete"
                        }]
                    ],
                    [{
                            "lblTypeName": "Saving Accounts (3)",
                            "lblTypeValue": ""
                        },
                        [{
                            "imgBank": "konybanklogo.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "",
                            "lblDelete": "Delete"
                        }, {
                            "imgBank": "konybanklogo.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "",
                            "lblDelete": "Delete"
                        }, {
                            "imgBank": "konybanklogo.png",
                            "imgDelete": "deleteicon.png",
                            "imgError": "imagedrag.png",
                            "lblAccountBal": "",
                            "lblAccountBalValue": "",
                            "lblAccountName": "",
                            "lblAccountNumber": "",
                            "lblBankName": "",
                            "lblDelete": "Delete"
                        }]
                    ]
                ],
                "groupCells": false,
                "height": "100%",
                "id": "segAccounts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAccounts",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxAccountsHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountName": "flxAccountName",
                    "flxAccounts": "flxAccounts",
                    "flxAccountsHeader": "flxAccountsHeader",
                    "flxBank": "flxBank",
                    "flxDelete": "flxDelete",
                    "flxMain": "flxMain",
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "imgBank": "imgBank",
                    "imgDelete": "imgDelete",
                    "imgError": "imgError",
                    "lblAccountBal": "lblAccountBal",
                    "lblAccountBalValue": "lblAccountBalValue",
                    "lblAccountName": "lblAccountName",
                    "lblAccountNumber": "lblAccountNumber",
                    "lblBankName": "lblBankName",
                    "lblDelete": "lblDelete",
                    "lblTypeName": "lblTypeName",
                    "lblTypeValue": "lblTypeValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dockSectionHeaders": false
            });
            flxSegments.add(segAccounts);
            this.add(customSearch, flxSegments);
        };
        return [{
            "addWidgets": addWidgetsfrmFromAccount,
            "bounces": false,
            "enabledForIdleTimeout": true,
            "id": "frmFromAccount",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmf9f9f9"
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