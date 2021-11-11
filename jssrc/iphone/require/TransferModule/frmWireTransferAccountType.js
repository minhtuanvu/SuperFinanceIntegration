define("TransferModule/frmWireTransferAccountType", function() {
    return function(controller) {
        function addWidgetsfrmWireTransferAccountType() {
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountType")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var btnCheckingAcc = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnOnBoardingOptionsActive",
                "height": "40dp",
                "id": "btnCheckingAcc",
                "isVisible": true,
                "left": "8.25%",
                "skin": "sknBtnOnBoardingOptionsInActive",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
                "top": "20dp",
                "width": "87.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [3, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnSavingAccount = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnOnBoardingOptionsActive",
                "height": "40dp",
                "id": "btnSavingAccount",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknBtnOnBoardingOptionsInActive",
                "text": kony.i18n.getLocalizedString("kony.mb.addBen.savingAcc"),
                "top": "10dp",
                "width": "87.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [3, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnLoanAcc = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnOnBoardingOptionsActive",
                "height": "40dp",
                "id": "btnLoanAcc",
                "isVisible": true,
                "left": "66dp",
                "skin": "sknBtnOnBoardingOptionsInActive",
                "text": kony.i18n.getLocalizedString("kony.mb.addBen.loanAcc"),
                "top": "10dp",
                "width": "87.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [3, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnFdAccount = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnOnBoardingOptionsActive",
                "height": "40dp",
                "id": "btnFdAccount",
                "isVisible": true,
                "left": "66dp",
                "skin": "sknBtnOnBoardingOptionsInActive",
                "text": kony.i18n.getLocalizedString("kony.mb.addBen.FDAcc"),
                "top": "10dp",
                "width": "87.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [3, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxMain.add(btnCheckingAcc, btnSavingAccount, btnLoanAcc, btnFdAccount);
            this.add(flxHeader, flxMain);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_icffd69add454fd7b1107ade97d0f886,
            "metaData": {
                "title": "Cancel"
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
            "addWidgets": addWidgetsfrmWireTransferAccountType,
            "enabledForIdleTimeout": true,
            "id": "frmWireTransferAccountType",
            "init": controller.AS_Form_d05e9b2811244629a218458633ee4429,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_fe09a4bc352a44f69274563246ab4e1f(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.enroll.accountType")
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
                "hidesBackButton": false,
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