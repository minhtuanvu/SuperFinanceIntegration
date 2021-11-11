define("NewAccountOpeningModule/frmNAOAck", function() {
    return function(controller) {
        function addWidgetsfrmNAOAck() {
            this.setDefaultUnit(kony.flex.DP);
            var flxStatus = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "190dp",
                "id": "flxStatus",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatus.setDefaultUnit(kony.flex.DP);
            var imgStatus = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "imgStatus",
                "isVisible": true,
                "skin": "slImage",
                "src": "confirmation.png",
                "top": "50dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblStatus = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblStatus",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAOAck.Status"),
                "textStyle": {},
                "top": "130dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxStatus.add(imgStatus, lblStatus);
            var flxMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "90dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "190dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var lblProductsSelected = new kony.ui.Label({
                "id": "lblProductsSelected",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAOAck.ProductsSelected"),
                "textStyle": {},
                "top": "20dp",
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
            var segSelectedProducts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgProduct": "product.png",
                    "lblProduct": "Premium Savings Account",
                    "lblProductInfo": "Your Account is now active"
                }, {
                    "imgProduct": "product.png",
                    "lblProduct": "Premium Savings Account",
                    "lblProductInfo": "Your Account is now active"
                }, {
                    "imgProduct": "product.png",
                    "lblProduct": "Premium Savings Account",
                    "lblProductInfo": "Your Account is now active"
                }],
                "groupCells": false,
                "id": "segSelectedProducts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxProductAcknowledgement",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "50dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxDetails": "flxDetails",
                    "flxMain": "flxMain",
                    "flxProductAcknowledgement": "flxProductAcknowledgement",
                    "imgProduct": "imgProduct",
                    "lblProduct": "lblProduct",
                    "lblProductInfo": "lblProductInfo"
                },
                "widgetSkin": "seg2Normal",
                "width": "100%",
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
            flxMain.add(lblProductsSelected, segSelectedProducts);
            var btnChatbot = new kony.ui.Button({
                "bottom": "85dp",
                "focusSkin": "sknbtnChatbotFocus",
                "height": "60dp",
                "id": "btnChatbot",
                "isVisible": false,
                "right": "12dp",
                "skin": "sknbtnImage",
                "width": "60dp",
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var lblGoToAccounts = new kony.ui.Button({
                "bottom": "30dp",
                "focusSkin": "sknBtn055BAF26px",
                "height": "50dp",
                "id": "lblGoToAccounts",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.GoToAccounts"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            this.add(flxStatus, flxMain, btnChatbot, lblGoToAccounts);
        };
        return [{
            "addWidgets": addWidgetsfrmNAOAck,
            "enabledForIdleTimeout": true,
            "id": "frmNAOAck",
            "init": controller.AS_Form_a83b4d06b1554d8295c5eea321942ff0,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_baad6c1a63574216a810feb3baaa9dc9(eventobject);
            },
            "skin": "sknFrm1a98ffGradient10"
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
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});