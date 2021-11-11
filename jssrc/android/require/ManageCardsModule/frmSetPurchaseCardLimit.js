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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "85dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblInfo = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblInfo",
                "isVisible": true,
                "skin": "sknLblLimitInfo",
                "text": kony.i18n.getLocalizedString("kony.mb.cardManage.dailyLimitInfo"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "140dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
            }, {});
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
            }, {});
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
            }, {});
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
            }, {});
            flxButtons.add(btnGetInTouch, btnConfirm);
            flxMainContainer.add(flxInfo, flxLimit, flxButtons);
            this.add(flxHeader, flxMainContainer);
        };
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
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "sknCardLimitTitle",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});