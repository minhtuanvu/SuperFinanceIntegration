define("ChequeManagementModule/frmSCChequeType", function() {
    return function(controller) {
        function addWidgetsfrmSCChequeType() {
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
                    "flxHeader": {
                        "top": "0%"
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
                        "centerX": "55%",
                        "text": kony.i18n.getLocalizedString("kony.mb.CM.chequeType"),
                        "left": "15%",
                        "width": "40%"
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
                "bottom": "60dp",
                "bounces": true,
                "centerX": "50%",
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknTransparentBs",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxChequeLeaves = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "blur": {
                    "enabled": false,
                    "value": 0
                },
                "clipBounds": true,
                "height": "50dp",
                "id": "flxChequeLeaves",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf8f8f8",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChequeLeaves.setDefaultUnit(kony.flex.DP);
            var lblChequeLeaves = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblChequeLeaves",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.selectChequeType"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxChequeLeaves.add(lblChequeLeaves);
            var segOptions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "data": [{
                    "lblOption": "Single Cheque"
                }, {
                    "lblOption": "Series of Cheques"
                }],
                "groupCells": false,
                "id": "segOptions",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowSkin": "segTransparant",
                "rowTemplate": "flxCheque",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "5dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheque": "flxCheque",
                    "flxMain": "flxMain",
                    "lblOption": "lblOption"
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
            flxMainContainer.add(flxChequeLeaves, segOptions);
            this.add(flxHeader, flxMainContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmSCChequeType,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmSCChequeType",
            "init": controller.AS_Form_jddd9f08700244f681222ca37d1479fb,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_c68cc0bab8094fda99a85ef10ef959f9(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.CM.chequeType")
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