define("WealthModule/frmToCurrency", function() {
    return function(controller) {
        function addWidgetsfrmToCurrency() {
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
                "zIndex": 10
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
                        "text": kony.i18n.getLocalizedString("i18n.wealth.toCurrency"),
                        "isVisible": true
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
                "height": "83%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "55dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var flxSearchMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxSearchMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSearchMain.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgSearchIcon",
                "isVisible": true,
                "left": "30dp",
                "skin": "slImage",
                "src": "search.png",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var tbxSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxSSPf1f1f1B",
                "height": "35dp",
                "id": "tbxSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": "Search currency",
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxSSPf1f1f1B",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [35, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "showClearButton": false,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
                "inputAccessoryViewType": constants.TEXTBOX_INPUTACCESSORYVIEW_CANCEL
            });
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-5dp",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            flxSearchMain.add(imgSearchIcon, tbxSearch, flxShadow);
            flxSearch.add(flxSearchMain);
            var flxExstAcc = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxExstAcc",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxExstAcc.setDefaultUnit(kony.flex.DP);
            var flxExistingAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxExistingAccounts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxExistingAccounts.setDefaultUnit(kony.flex.DP);
            var lblExistingHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblExistingHeader",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SectionHeader",
                "text": kony.i18n.getLocalizedString("i18n.wealth.existingAccounts"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxExistingAccounts.add(lblExistingHeader);
            var flxSeparator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "minWidth": "100%",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxSeparator1.setDefaultUnit(kony.flex.DP);
            flxSeparator1.add();
            var segExistingCurrency = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "data": [{
                    "imgFlag": "usdollar.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "USD - United States Dollar",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "euro.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "EURO - Euro",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "swissfranc.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "CHF - Swiss Franc",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "britishpound.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "GBP - Pound Sterling",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "britishpound.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "GBP - Pound Sterling",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "britishpound.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "GBP - Pound Sterling",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "euro.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "EURO - Euro",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "euro.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "EURO - Euro",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "euro.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "EURO - Euro",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segExistingCurrency",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "right": 0,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flexSelectCurrencyContainer",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flexSelectCurrencyContainer": "flexSelectCurrencyContainer",
                    "imgFlag": "imgFlag",
                    "imgRadio": "imgRadio",
                    "lblCurrencyType": "lblCurrencyType",
                    "lblSeparator": "lblSeparator"
                },
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": true,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxExstAcc.add(flxExistingAccounts, flxSeparator1, segExistingCurrency);
            var flxAddCurrency = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAddCurrency",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-2dp",
                "width": "100%"
            }, {}, {});
            flxAddCurrency.setDefaultUnit(kony.flex.DP);
            var flxAddCurr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxAddCurr",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxAddCurr.setDefaultUnit(kony.flex.DP);
            var flxAddShadowBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "9px",
                "id": "flxAddShadowBox",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddShadowBox.setDefaultUnit(kony.flex.DP);
            var flxAddRectangle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAddRectangle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddRectangle.setDefaultUnit(kony.flex.DP);
            flxAddRectangle.add();
            flxAddShadowBox.add(flxAddRectangle);
            var lblAddHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAddHeader",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SectionHeader",
                "text": kony.i18n.getLocalizedString("i18n.wealth.addCurrency"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAddCurr.add(flxAddShadowBox, lblAddHeader);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "minWidth": "100%",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var segAddCurrency = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "data": [{
                    "imgFlag": "usdollar.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "USD - United States Dollar",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "euro.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "EURO - Euro",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "swissfranc.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "CHF - Swiss Franc",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "britishpound.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "GBP - Pound Sterling",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "britishpound.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "GBP - Pound Sterling",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "britishpound.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "GBP - Pound Sterling",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "euro.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "EURO - Euro",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "euro.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "EURO - Euro",
                    "lblSeparator": ""
                }, {
                    "imgFlag": "euro.png",
                    "imgRadio": "radiobuttoninactive.png",
                    "lblCurrencyType": "EURO - Euro",
                    "lblSeparator": ""
                }],
                "groupCells": false,
                "id": "segAddCurrency",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "right": 0,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flexSelectCurrencyContainer",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flexSelectCurrencyContainer": "flexSelectCurrencyContainer",
                    "imgFlag": "imgFlag",
                    "imgRadio": "imgRadio",
                    "lblCurrencyType": "lblCurrencyType",
                    "lblSeparator": "lblSeparator"
                },
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": true,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxAddCurrency.add(flxAddCurr, flxSeparator, segAddCurrency);
            flxMainContainer.add(flxSearch, flxExstAcc, flxAddCurrency);
            var flxbtnDone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "70dp",
                "id": "flxbtnDone",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxbtnDone.setDefaultUnit(kony.flex.DP);
            var btnDone = new kony.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnDone",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.continue"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxbtnDone.add(btnDone);
            this.add(flxHeader, flxMainContainer, flxbtnDone);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "fafafa00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_g2191205a83c4b1dbc46b29fc9f61374,
            "metaData": {
                "image": "backbutton_1.png"
            },
            "id": "LBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "fafafa00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmToCurrency,
            "enabledForIdleTimeout": false,
            "id": "frmToCurrency",
            "init": controller.AS_Form_cfbc5fe84e5e4295bdeb8091028dc4ef,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_h9ac8580580e48aca96868b046e6b297,
            "preShow": function(eventobject) {
                controller.AS_Form_ce3d204eb4374028b9f8393e5922893a(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("i18n.wealth.toCurrency")
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
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarAttributes": {
                "backIndicatorImage": "backbutton.png",
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "fafafa00",
                "hidesBackButton": true,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": [],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});