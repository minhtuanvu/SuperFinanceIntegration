define("WealthModule/frmOrderType", function() {
    return function(controller) {
        function addWidgetsfrmOrderType() {
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
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": true,
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
                    "lblLocateUs": {
                        "text": "Order Type"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxSeparatorHeader, customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "85%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxNote = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNote",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNote.setDefaultUnit(kony.flex.DP);
            var lblNote = new kony.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "id": "lblNote",
                "isVisible": true,
                "left": "30dp",
                "right": "30dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Please select order type",
                "textStyle": {},
                "top": "15dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNote.add(lblNote);
            var flxTypeOneShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxTypeOneShadow",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadow.add();
            var imgSelectMarket = new kony.ui.Image2({
                "bottom": "-40dp",
                "height": "30dp",
                "id": "imgSelectMarket",
                "isVisible": true,
                "right": "2%",
                "skin": "slImage",
                "src": "selectgoal.png",
                "top": "10dp",
                "width": "30dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxMarket = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50.00%",
                "clipBounds": false,
                "id": "flxMarket",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflxGreen0ba407a4468e045",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxMarket.setDefaultUnit(kony.flex.DP);
            var lblMarket = new kony.ui.Label({
                "bottom": "3dp",
                "id": "lblMarket",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlblmedium0b741726c9a3143",
                "text": "Market",
                "textStyle": {},
                "top": "14dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblMarketData = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblMarketData",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "An order to buy or sell immediately at the current market price.",
                "textStyle": {
                    "letterSpacing": 0,
                    "baseline": 0
                },
                "top": "50dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxMarket.add(lblMarket, lblMarketData);
            var imgSelectLimit = new kony.ui.Image2({
                "bottom": "-40dp",
                "height": "30dp",
                "id": "imgSelectLimit",
                "isVisible": false,
                "right": "2%",
                "skin": "slImage",
                "src": "selectgoal.png",
                "top": "10dp",
                "width": "30dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLimit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50.00%",
                "clipBounds": false,
                "id": "flxLimit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflxBlueE0de121f9cae5843",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxLimit.setDefaultUnit(kony.flex.DP);
            var lblLimit = new kony.ui.Label({
                "bottom": "3dp",
                "id": "lblLimit",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlblmedium0b741726c9a3143",
                "text": "Limit",
                "textStyle": {},
                "top": "14dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSelectedLimit = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblSelectedLimit",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "An order to buy only at or below the specified Limit Price, or sell at or above the specified Limit Price.",
                "textStyle": {
                    "letterSpacing": 0,
                    "baseline": 0
                },
                "top": "50dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxLimit.add(lblLimit, lblSelectedLimit);
            var imgSelectStopLoss = new kony.ui.Image2({
                "bottom": "-40dp",
                "height": "30dp",
                "id": "imgSelectStopLoss",
                "isVisible": false,
                "right": "2%",
                "skin": "slImage",
                "src": "selectgoal.png",
                "top": "10dp",
                "width": "30dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxStopLoss = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50.00%",
                "clipBounds": false,
                "id": "flxStopLoss",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflxBlueE0de121f9cae5843",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxStopLoss.setDefaultUnit(kony.flex.DP);
            var lblStopLoss = new kony.ui.Label({
                "bottom": "3dp",
                "id": "lblStopLoss",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlblmedium0b741726c9a3143",
                "text": "Stop Loss",
                "textStyle": {},
                "top": "14dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSelectedStopLoss = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblSelectedStopLoss",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "An order to buy or sell that becomes active only after the specified Stop Price has been reached at which point the order is immediately converted to a market order.",
                "textStyle": {
                    "letterSpacing": 0,
                    "baseline": 0
                },
                "top": "50dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxStopLoss.add(lblStopLoss, lblSelectedStopLoss);
            var imgSelectStopLimit = new kony.ui.Image2({
                "bottom": "-40dp",
                "height": "30dp",
                "id": "imgSelectStopLimit",
                "isVisible": false,
                "right": "2%",
                "skin": "slImage",
                "src": "selectgoal.png",
                "top": "10dp",
                "width": "30dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxStopLimit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50.00%",
                "clipBounds": false,
                "id": "flxStopLimit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflxBlueE0de121f9cae5843",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxStopLimit.setDefaultUnit(kony.flex.DP);
            var lblStopLimit = new kony.ui.Label({
                "bottom": "3dp",
                "id": "lblStopLimit",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlblmedium0b741726c9a3143",
                "text": "Stop Limit",
                "textStyle": {},
                "top": "14dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSelectedStopLimit = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblSelectedStopLimit",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "An order to buy or sell that becomes active only after the specified Stop Price has been reached at which point the order is immediately converted to a limit order and will only execute at the specified Limit Price or better.",
                "textStyle": {
                    "letterSpacing": 0,
                    "baseline": 0
                },
                "top": "50dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxStopLimit.add(lblStopLimit, lblSelectedStopLimit);
            flxMainContainer.add(flxNote, flxTypeOneShadow, imgSelectMarket, flxMarket, imgSelectLimit, flxLimit, imgSelectStopLoss, flxStopLoss, imgSelectStopLimit, flxStopLimit);
            var btnSave = new kony.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnSave",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "width": "90%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            this.add(flxHeader, flxMainContainer, btnSave);
        };
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
            "addWidgets": addWidgetsfrmOrderType,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmOrderType",
            "init": controller.AS_Form_fa5d6b6eded3488d98900eaf79937f33,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_d78378af1c6941c49246e4951b0f9b4f,
            "preShow": function(eventobject) {
                controller.AS_Form_c400f89ac6f248b1a87373ff91d87bcf(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Order Type"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": false,
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
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": false,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});