define("CheckDepositModule/frmDepositToCD", function() {
    return function(controller) {
        function addWidgetsfrmDepositToCD() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.checkDeposit.depositToTitle")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_fdcfc70f9b4847238077f8bb729ab3ee;
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
                    "lblTransactionMode": "My Kony Accounts",
                    "lblTransactionModeDescription": "Make transactions to your kony bank accounts"
                }, {
                    "imgArrow": "chevron.png",
                    "lblTransactionMode": "My Other Bank Accounts",
                    "lblTransactionModeDescription": "Transfer money to your other bank accounts"
                }],
                "groupCells": false,
                "id": "segTransactionMode",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_i62943b595dc419bbfe50f82aec5df2f,
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
                "top": "0dp",
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
            this.add(flxHeader, flxTransactionModeMain);
        };
        return [{
            "addWidgets": addWidgetsfrmDepositToCD,
            "enabledForIdleTimeout": true,
            "id": "frmDepositToCD",
            "init": controller.AS_Form_dc30a8fdecb943ee9695212405868f6d,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_b23b960ee3584ea2bd7b9af9e91d710f(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.checkDeposit.depositToTitle")
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