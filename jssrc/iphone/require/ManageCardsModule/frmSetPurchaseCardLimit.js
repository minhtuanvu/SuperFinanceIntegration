define("ManageCardsModule/frmSetPurchaseCardLimit", function() {
    return function(controller) {
        function addWidgetsfrmSetPurchaseCardLimit() {
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
                "zIndex": 1,
                "overrides": {
                    "btnLeft": {
                        "isVisible": false
                    },
                    "btnRight": {
                        "isVisible": true,
                        "text": "Cancel"
                    },
                    "customHeader": {
                        "height": "100%",
                        "zIndex": 1
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.cardManage.dailyPurchaseLimit")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInfo.setDefaultUnit(kony.flex.DP);
            var lblDailyLimit = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDailyLimit",
                "isVisible": true,
                "skin": "sknLblLimitTitle",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.dailyPurchaseLimit"),
                "textStyle": {},
                "top": "85dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblInfo = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblInfo",
                "isVisible": true,
                "skin": "sknLblLimitInfo",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.dailyLimitInfo"),
                "textStyle": {},
                "top": "140dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxInfo.add(lblDailyLimit, lblInfo);
            var flxLimit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "flxLimit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLimit.setDefaultUnit(kony.flex.DP);
            var flxSetLimit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxSetLimit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxSetLimit.setDefaultUnit(kony.flex.DP);
            var btnMinus = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnMinus",
                "height": "28dp",
                "id": "btnMinus",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtnMinus",
                "text": "Button",
                "top": "32dp",
                "width": "28dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var flxLimitAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "31dp",
                "id": "flxLimitAmount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "40dp",
                "isModalContainer": false,
                "right": "40dp",
                "skin": "slFbox",
                "top": "34dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxLimitAmount.setDefaultUnit(kony.flex.DP);
            var lblAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAmount",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": "000.00",
                "textStyle": {},
                "width": "100%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxLimitAmount.add(lblAmount);
            var btnPlus = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnPlus",
                "height": "28dp",
                "id": "btnPlus",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknBtnPlus",
                "text": "Button",
                "top": "32dp",
                "width": "28dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxSetLimit.add(btnMinus, flxLimitAmount, btnPlus);
            flxLimit.add(flxSetLimit);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnGetInTouch = new kony.ui.Button({
                "bottom": "110dp",
                "centerX": "50%",
                "focusSkin": "sknBtnGetInTouch",
                "height": "20dp",
                "id": "btnGetInTouch",
                "isVisible": true,
                "skin": "sknBtnGetInTouch",
                "text": "Get In Touch",
                "width": "200dp",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnConfirm = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnConfirm",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnConfirm",
                "text": kony.i18n.getLocalizedString("kony.tab.Confirm"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxButtons.add(btnGetInTouch, btnConfirm);
            flxMainContainer.add(flxInfo, flxLimit, flxButtons);
            this.add(flxHeader, flxMainContainer);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_f165c2ac48b74acd9530c00df183dea0,
            "metaData": {
                "title": "Cancel"
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmSetPurchaseCardLimit,
            "enabledForIdleTimeout": true,
            "id": "frmSetPurchaseCardLimit",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_f3bf37d18ad34c8c9a20522f0a11f700(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.cardManage.dailyPurchaseLimit")
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
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": false,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknCardLimitTitle"
        }]
    }
});