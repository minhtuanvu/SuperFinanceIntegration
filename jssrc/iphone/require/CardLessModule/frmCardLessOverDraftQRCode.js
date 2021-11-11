define("CardLessModule/frmCardLessOverDraftQRCode", function() {
    return function(controller) {
        function addWidgetsfrmCardLessOverDraftQRCode() {
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
                        "isVisible": true,
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
                    },
                    "flxBack": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.checkDeposit.confirmTransfer")
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
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var imgWarning = new kony.ui.Image2({
                "centerX": "50%",
                "height": "30dp",
                "id": "imgWarning",
                "isVisible": true,
                "skin": "slImage",
                "src": "warning.png",
                "top": "20dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblWarning = new kony.ui.Label({
                "centerX": "50%",
                "height": "120dp",
                "id": "lblWarning",
                "isVisible": true,
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.warningMsg"),
                "textStyle": {},
                "top": "70dp",
                "width": "78%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnEditTransaction = new kony.ui.Button({
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnEditTransaction",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.editTransaction"),
                "top": "210dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnContinue = new kony.ui.Button({
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "top": "270dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var segAccounts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "data": [
                    [{
                            "imgUpArrow": "",
                            "lblHeader": "Scheduled Payments"
                        },
                        [{
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "12/08/2017",
                            "lblAccountBalValue": "-$83.00",
                            "lblAccountName": "Peeter Raves...8932",
                            "lblAccountNumber": "",
                            "lblBankName": "Linda Checking Account",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "12/08/2017",
                            "lblAccountBalValue": "-$83.00",
                            "lblAccountName": "Peeter Raves...8932",
                            "lblAccountNumber": "",
                            "lblBankName": "Linda Checking Account",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "12/08/2017",
                            "lblAccountBalValue": "-$83.00",
                            "lblAccountName": "Peeter Raves...8932",
                            "lblAccountNumber": "",
                            "lblBankName": "Linda Checking Account",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "12/08/2017",
                            "lblAccountBalValue": "-$83.00",
                            "lblAccountName": "Peeter Raves...8932",
                            "lblAccountNumber": "",
                            "lblBankName": "Linda Checking Account",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "12/08/2017",
                            "lblAccountBalValue": "-$83.00",
                            "lblAccountName": "Peeter Raves...8932",
                            "lblAccountNumber": "",
                            "lblBankName": "Linda Checking Account",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "12/08/2017",
                            "lblAccountBalValue": "-$83.00",
                            "lblAccountName": "Peeter Raves...8932",
                            "lblAccountNumber": "",
                            "lblBankName": "Linda Checking Account",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "12/08/2017",
                            "lblAccountBalValue": "-$83.00",
                            "lblAccountName": "Peeter Raves...8932",
                            "lblAccountNumber": "",
                            "lblBankName": "Linda Checking Account",
                            "lblDelete": "Delete"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segAccounts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAccountsNoImage",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxTransHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "f1f1f100",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "330dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountName": "flxAccountName",
                    "flxAccountsNoImage": "flxAccountsNoImage",
                    "flxDelete": "flxDelete",
                    "flxMain": "flxMain",
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransHeader": "flxTransHeader",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "imgDelete": "imgDelete",
                    "imgUpArrow": "imgUpArrow",
                    "lblAccountBal": "lblAccountBal",
                    "lblAccountBalValue": "lblAccountBalValue",
                    "lblAccountName": "lblAccountName",
                    "lblAccountNumber": "lblAccountNumber",
                    "lblBankName": "lblBankName",
                    "lblDelete": "lblDelete",
                    "lblHeader": "lblHeader"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": false,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": true,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxMainContainer.add(imgWarning, lblWarning, btnEditTransaction, btnContinue, segAccounts);
            this.add(flxHeader, flxMainContainer);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_SYSTEM_ITEM,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_a75faa27f3a84d239b3c28921aa2ba57,
            "metaData": {
                "systemItem": constants.SYSTEM_ITEM_CANCEL
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
            "addWidgets": addWidgetsfrmCardLessOverDraftQRCode,
            "enabledForIdleTimeout": true,
            "id": "frmCardLessOverDraftQRCode",
            "init": controller.AS_Form_fae4eca964af453c82fbbbf3d8a1cc3f,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_e8b8f841a9d74cac8fbd255792f6e25e(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.checkDeposit.confirmTransfer")
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
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": true,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});