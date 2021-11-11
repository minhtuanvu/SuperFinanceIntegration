define("BBAccountsModule/frmAccountSelector", function() {
    return function(controller) {
        function addWidgetsfrmAccountSelector() {
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
                "zIndex": 5
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
            flxSeparatorHeader.add();
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
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": false
                    },
                    "flxHeaderShadow": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "centerX": "65%",
                        "left": "15%",
                        "text": "Dashboard View",
                        "width": "65%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxSeparatorHeader, customHeader);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "40dp",
                "id": "customSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "btnCancel": {
                        "isVisible": false
                    },
                    "customSearchbox": {
                        "top": "0dp"
                    },
                    "imgSearchIcon": {
                        "src": "search.png"
                    },
                    "tbxSearch": {
                        "centerX": "50%",
                        "left": "viz.val_cleared",
                        "width": "92%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            var flxBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "40dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var segAccounts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "data": [{
                    "imgAccountType": "personalaccount.png",
                    "imgBank": "personalaccount.png",
                    "imgDelete": "deleteicon.png",
                    "imgError": "imagedrag.png",
                    "imgRefresh": "recurrenceindication.png",
                    "lblAccountBal": "balance",
                    "lblAccountBalValue": "$678900",
                    "lblAccountName": "test",
                    "lblAccountNumber": ".300",
                    "lblBankName": "ggg",
                    "lblDelete": "Delete",
                    "lblRefresh": "Refresh"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "imgBank": "personalaccount.png",
                    "imgDelete": "deleteicon.png",
                    "imgError": "imagedrag.png",
                    "imgRefresh": "recurrenceindication.png",
                    "lblAccountBal": "balance",
                    "lblAccountBalValue": "$678900",
                    "lblAccountName": "test",
                    "lblAccountNumber": ".300",
                    "lblBankName": "ggg",
                    "lblDelete": "Delete",
                    "lblRefresh": "Refresh"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "imgBank": "personalaccount.png",
                    "imgDelete": "deleteicon.png",
                    "imgError": "imagedrag.png",
                    "imgRefresh": "recurrenceindication.png",
                    "lblAccountBal": "balance",
                    "lblAccountBalValue": "$678900",
                    "lblAccountName": "test",
                    "lblAccountNumber": ".300",
                    "lblBankName": "ggg",
                    "lblDelete": "Delete",
                    "lblRefresh": "Refresh"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "imgBank": "personalaccount.png",
                    "imgDelete": "deleteicon.png",
                    "imgError": "imagedrag.png",
                    "imgRefresh": "recurrenceindication.png",
                    "lblAccountBal": "balance",
                    "lblAccountBalValue": "$678900",
                    "lblAccountName": "test",
                    "lblAccountNumber": ".300",
                    "lblBankName": "ggg",
                    "lblDelete": "Delete",
                    "lblRefresh": "Refresh"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "imgBank": "personalaccount.png",
                    "imgDelete": "deleteicon.png",
                    "imgError": "imagedrag.png",
                    "imgRefresh": "recurrenceindication.png",
                    "lblAccountBal": "balance",
                    "lblAccountBalValue": "$678900",
                    "lblAccountName": "test",
                    "lblAccountNumber": ".300",
                    "lblBankName": "ggg",
                    "lblDelete": "Delete",
                    "lblRefresh": "Refresh"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "imgBank": "personalaccount.png",
                    "imgDelete": "deleteicon.png",
                    "imgError": "imagedrag.png",
                    "imgRefresh": "recurrenceindication.png",
                    "lblAccountBal": "balance",
                    "lblAccountBalValue": "$678900",
                    "lblAccountName": "test",
                    "lblAccountNumber": ".300",
                    "lblBankName": "ggg",
                    "lblDelete": "Delete",
                    "lblRefresh": "Refresh"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "imgBank": "personalaccount.png",
                    "imgDelete": "deleteicon.png",
                    "imgError": "imagedrag.png",
                    "imgRefresh": "recurrenceindication.png",
                    "lblAccountBal": "balance",
                    "lblAccountBalValue": "$678900",
                    "lblAccountName": "test",
                    "lblAccountNumber": ".300",
                    "lblBankName": "ggg",
                    "lblDelete": "Delete",
                    "lblRefresh": "Refresh"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "imgBank": "personalaccount.png",
                    "imgDelete": "deleteicon.png",
                    "imgError": "imagedrag.png",
                    "imgRefresh": "recurrenceindication.png",
                    "lblAccountBal": "balance",
                    "lblAccountBalValue": "$678900",
                    "lblAccountName": "test",
                    "lblAccountNumber": ".300",
                    "lblBankName": "ggg",
                    "lblDelete": "Delete",
                    "lblRefresh": "Refresh"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "imgBank": "personalaccount.png",
                    "imgDelete": "deleteicon.png",
                    "imgError": "imagedrag.png",
                    "imgRefresh": "recurrenceindication.png",
                    "lblAccountBal": "balance",
                    "lblAccountBalValue": "$678900",
                    "lblAccountName": "test",
                    "lblAccountNumber": ".300",
                    "lblBankName": "ggg",
                    "lblDelete": "Delete",
                    "lblRefresh": "Refresh"
                }, {
                    "imgAccountType": "personalaccount.png",
                    "imgBank": "personalaccount.png",
                    "imgDelete": "deleteicon.png",
                    "imgError": "imagedrag.png",
                    "imgRefresh": "recurrenceindication.png",
                    "lblAccountBal": "balance",
                    "lblAccountBalValue": "$678900",
                    "lblAccountName": "test",
                    "lblAccountNumber": ".300",
                    "lblBankName": "ggg",
                    "lblDelete": "Delete",
                    "lblRefresh": "Refresh"
                }],
                "groupCells": false,
                "id": "segAccounts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxCombinedAccounts",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountName": "flxAccountName",
                    "flxBank": "flxBank",
                    "flxCombinedAccounts": "flxCombinedAccounts",
                    "flxDelete": "flxDelete",
                    "flxMain": "flxMain",
                    "flxRefresh": "flxRefresh",
                    "flxSeparator": "flxSeparator",
                    "imgAccountType": "imgAccountType",
                    "imgBank": "imgBank",
                    "imgDelete": "imgDelete",
                    "imgError": "imgError",
                    "imgRefresh": "imgRefresh",
                    "lblAccountBal": "lblAccountBal",
                    "lblAccountBalValue": "lblAccountBalValue",
                    "lblAccountName": "lblAccountName",
                    "lblAccountNumber": "lblAccountNumber",
                    "lblBankName": "lblBankName",
                    "lblDelete": "lblDelete",
                    "lblRefresh": "lblRefresh"
                },
                "width": "101%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var lblNodatafound = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "10%",
                "id": "lblNodatafound",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknlbl727272SSP93pr",
                "text": "No Data Found",
                "textStyle": {},
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxBody.add(flxShadow, segAccounts, lblNodatafound);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxFooter",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "60dp",
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
                    "flxBillSelected": {
                        "isVisible": false
                    },
                    "flxMoreSelect": {
                        "isVisible": false
                    },
                    "flxTransferSel": {
                        "isVisible": false
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            flxFooter.add(customFooter, flxSeperator1);
            this.add(flxHeader, flxHeaderSearchbox, flxBody, flxFooter);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_ga2cc5e09baf47d7b59551a04189266f,
            "metaData": {
                "image": "backbutton.png"
            },
            "id": "LBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmAccountSelector,
            "enabledForIdleTimeout": true,
            "id": "frmAccountSelector",
            "init": controller.AS_Form_if41f63eb9984cfb9c675c17a09ff991,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_e83a52c27f3c4e14ac1c3f7a0e7f0b84(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.BillPayEditName.Title")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_BLACK,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": false,
                "prompt": "",
                "leftItemsSupplementBackButton": false,
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": []
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});