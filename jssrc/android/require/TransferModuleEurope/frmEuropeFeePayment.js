define("TransferModuleEurope/frmEuropeFeePayment", function() {
    return function(controller) {
        function addWidgetsfrmEuropeFeePayment() {
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
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.Europe.SelectWhoWillPayFees")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "bottom": "60dp",
                "centerX": "50%",
                "clipBounds": false,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "top": "56dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxSpace = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxSpace",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSpace.setDefaultUnit(kony.flex.DP);
            flxSpace.add();
            var segOptions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgChevron": "chevronright.png",
                    "lblDescription": "Some text",
                    "lblTitle": "Payment"
                }, {
                    "imgChevron": "chevronright.png",
                    "lblDescription": "Some long sentence to test the dynamic adjustment of segment row to the amount of text provided",
                    "lblTitle": "Payment"
                }],
                "groupCells": false,
                "id": "segOptions",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "segTransparant",
                "rowTemplate": "flxPaymentMedium",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxClick": "flxClick",
                    "flxDetails": "flxDetails",
                    "flxPayment": "flxPayment",
                    "flxPaymentMedium": "flxPaymentMedium",
                    "flxSeparator": "flxSeparator",
                    "imgChevron": "imgChevron",
                    "lblDescription": "lblDescription",
                    "lblTitle": "lblTitle"
                },
                "widgetSkin": "segTransparant",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dockSectionHeaders": true
            });
            flxMainContainer.add(flxSpace, segOptions);
            this.add(flxHeader, flxMainContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmEuropeFeePayment,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmEuropeFeePayment",
            "init": controller.AS_Form_f550bc2fccdb4cd5afbe725b244598b9,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_c985c9f46c594e28947724691cd3d512(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.Europe.SelectWhoWillPayFees")
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
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});