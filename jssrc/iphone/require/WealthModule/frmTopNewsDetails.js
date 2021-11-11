define("WealthModule/frmTopNewsDetails", function() {
    return function(controller) {
        function addWidgetsfrmTopNewsDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "-1dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
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
            var flxTopNewsDet = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTopNewsDet",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopysknFlxScrlffffff0j1a2b91bf84447",
                "top": 0,
                "width": "100%"
            }, {}, {});
            flxTopNewsDet.setDefaultUnit(kony.flex.DP);
            var flxTopNewsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTopNewsHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 10,
                "width": "100%"
            }, {}, {});
            flxTopNewsHeader.setDefaultUnit(kony.flex.DP);
            var lblProvider = new kony.ui.Label({
                "id": "lblProvider",
                "isVisible": true,
                "left": "20dp",
                "right": 220,
                "skin": "sknlbl727272SSP17px",
                "text": "Label",
                "textStyle": {},
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblTime = new kony.ui.Label({
                "id": "lblTime",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknlbl727272SSP17px",
                "text": "Label",
                "textStyle": {},
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxTopNewsHeader.add(lblProvider, lblTime);
            var lblHeader = new kony.ui.Label({
                "id": "lblHeader",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSpSemibold56px",
                "text": "lblHeader",
                "textStyle": {},
                "top": 10,
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDetails = new kony.ui.RichText({
                "id": "lblDetails",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx424242SSPR32pxTab",
                "text": "RichText",
                "top": 15,
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxTopNewsDet.add(flxTopNewsHeader, lblHeader, lblDetails);
            flxMainContainer.add(flxHeader, flxTopNewsDet);
            this.add(flxMainContainer);
        };
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
            "addWidgets": addWidgetsfrmTopNewsDetails,
            "enabledForIdleTimeout": false,
            "id": "frmTopNewsDetails",
            "init": controller.AS_Form_hafd68ceeb9f4ca5aa45bcd87a26a0b4,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_f72e95c7a6ec464799093b97d949326c,
            "preShow": function(eventobject) {
                controller.AS_Form_ed1420f1666c472e822afb18232b7bd9(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("i18n.wealth.stockNews")
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