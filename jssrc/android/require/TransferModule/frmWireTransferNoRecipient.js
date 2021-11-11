define("TransferModule/frmWireTransferNoRecipient", function() {
    return function(controller) {
        function addWidgetsfrmWireTransferNoRecipient() {
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
                        "isVisible": true,
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.transaction.wireTransfer")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxConfirmationMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "180dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxConfirmationMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConfirmationMain.setDefaultUnit(kony.flex.DP);
            var flxTransferAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTransferAmount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferAmount.setDefaultUnit(kony.flex.DP);
            var flxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "160dp",
                "id": "flxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxAmount.setDefaultUnit(kony.flex.DP);
            var lblTransactionFee1 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTransactionFee1",
                "isVisible": true,
                "left": "35dp",
                "right": "35dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.WireTransfer.NoRecipient1"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "60dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransactionFee2 = new kony.ui.Label({
                "bottom": "20dp",
                "centerX": "50%",
                "id": "lblTransactionFee2",
                "isVisible": true,
                "left": "35dp",
                "right": "35dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.WireTransfer.NoRecipient2"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxTransactionFeeInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxTransactionFeeInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxTransactionFeeInfo.setDefaultUnit(kony.flex.DP);
            var imgInfo = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "27dp",
                "id": "imgInfo",
                "isVisible": true,
                "skin": "slImage",
                "src": "info_icon.png",
                "width": "27dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTransactionFeeInfo.add(imgInfo);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxAmount.add(lblTransactionFee1, lblTransactionFee2, flxTransactionFeeInfo, flxSeparator);
            flxTransferAmount.add(flxAmount);
            flxConfirmationMain.add(flxTransferAmount);
            var flxbtnConfirm = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "120dp",
                "id": "flxbtnConfirm",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxbtnConfirm.setDefaultUnit(kony.flex.DP);
            var btnActivate = new kony.ui.Button({
                "bottom": "80dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnActivate",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_ec433e71e36548bcac10582eb0fdd07a,
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Activate"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancel = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnCancel",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_h974cabf3df5409b9341c26c127f6926,
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxbtnConfirm.add(btnActivate, btnCancel);
            this.add(flxHeader, flxConfirmationMain, flxbtnConfirm);
        };
        return [{
            "addWidgets": addWidgetsfrmWireTransferNoRecipient,
            "enabledForIdleTimeout": true,
            "id": "frmWireTransferNoRecipient",
            "init": controller.AS_Form_c34bdc3ab71c440b8be48f01eb79b11b,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_fbf31f68f3514304b0a583b56ac1ab57(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.transaction.wireTransfer")
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