define("TransferModuleEurope/frmTransactionModeEurope", function() {
    return function(controller) {
        function addWidgetsfrmTransactionModeEurope() {
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.TransferType")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_j05c9146211c45b3bf63d742f121760a;
            flxHeader.add(customHeader);
            var flxTransactionModeMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxTransactionModeMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionModeMain.setDefaultUnit(kony.flex.DP);
            var segTransactionMode = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "data": [{
                    "imgArrow": "chevron.png",
                    "lblTransactionMode": kony.i18n.getLocalizedString("kony.mb.Transfers.mode1"),
                    "lblTransactionModeDescription": kony.i18n.getLocalizedString("kony.mb.Transfers.modeDesc1")
                }, {
                    "imgArrow": "chevron.png",
                    "lblTransactionMode": kony.i18n.getLocalizedString("kony.mb.Transfers.mode2"),
                    "lblTransactionModeDescription": kony.i18n.getLocalizedString("kony.mb.Transfers.modeDesc2")
                }, {
                    "imgArrow": "chevron.png",
                    "lblTransactionMode": kony.i18n.getLocalizedString("kony.mb.Transfers.mode3"),
                    "lblTransactionModeDescription": kony.i18n.getLocalizedString("kony.mb.Transfers.modeDesc3")
                }],
                "groupCells": false,
                "id": "segTransactionMode",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Focus",
                "rowTemplate": "flxTransactionMode",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "6dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxArrow": "flxArrow",
                    "flxSeparator": "flxSeparator",
                    "flxTransactionMode": "flxTransactionMode",
                    "imgArrow": "imgArrow",
                    "lblTransactionMode": "lblTransactionMode",
                    "lblTransactionModeDescription": "lblTransactionModeDescription"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTransactionModeMain.add(segTransactionMode);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxFooter",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxHeaderShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "-5dp",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
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
                "zIndex": 1,
                "overrides": {
                    "customFooter": {
                        "top": "0dp",
                        "zIndex": 1
                    },
                    "flxAccSelect": {
                        "isVisible": false
                    },
                    "flxBillSelected": {
                        "isVisible": false
                    },
                    "flxMoreSelect": {
                        "isVisible": false
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxFooter.add(flxHeaderShadow, customFooter);
            this.add(flxHeader, flxTransactionModeMain, flxFooter);
        };
        return [{
            "addWidgets": addWidgetsfrmTransactionModeEurope,
            "enabledForIdleTimeout": true,
            "id": "frmTransactionModeEurope",
            "init": controller.AS_Form_b5825380d17e404591b5522101c68006,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_g62903915d1c4fde9c243f5a7d89ec97(eventobject);
            },
            "skin": "sknFrmf9f9f9",
            "title": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.TransferType")
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