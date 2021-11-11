define("TransferModule/frmBenAccountTypeSelect", function() {
    return function(controller) {
        function addWidgetsfrmBenAccountTypeSelect() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.transfer.addInfinityAccount"),
                        "isVisible": true
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
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxAccountType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxAccountType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFBorderE9E9E9shadow",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxAccountType.setDefaultUnit(kony.flex.DP);
            var lblAccountTypeSelection = new kony.ui.Label({
                "id": "lblAccountTypeSelection",
                "isVisible": true,
                "left": "7.00%",
                "right": "7%",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.transfer.selectAccountType"),
                "textStyle": {},
                "top": "19dp",
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAccountType.add(lblAccountTypeSelection);
            var flxAccountTypeValues = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAccountTypeValues",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "70dp",
                "width": "100%"
            }, {}, {});
            flxAccountTypeValues.setDefaultUnit(kony.flex.DP);
            var flxRetailBanking = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxRetailBanking",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "90%"
            }, {}, {});
            flxRetailBanking.setDefaultUnit(kony.flex.DP);
            var lblRetailBanking = new kony.ui.Label({
                "id": "lblRetailBanking",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.transfer.retailBanking"),
                "textStyle": {},
                "top": "14dp",
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
            var flxImgRetailBanking = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxImgRetailBanking",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "40dp"
            }, {}, {});
            flxImgRetailBanking.setDefaultUnit(kony.flex.DP);
            var imgRetailBanking = new kony.ui.Image2({
                "height": "40dp",
                "id": "imgRetailBanking",
                "isVisible": true,
                "left": 0,
                "skin": "slImage",
                "src": "radiobuttoninactive.png",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgRetailBanking.add(imgRetailBanking);
            flxRetailBanking.add(lblRetailBanking, flxImgRetailBanking);
            var flxSep1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "15dp",
                "width": "90%"
            }, {}, {});
            flxSep1.setDefaultUnit(kony.flex.DP);
            flxSep1.add();
            var flxBusinessBanking = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBusinessBanking",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "90%"
            }, {}, {});
            flxBusinessBanking.setDefaultUnit(kony.flex.DP);
            var lblBusinessBanking = new kony.ui.Label({
                "id": "lblBusinessBanking",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Accounts.businessBanking"),
                "textStyle": {},
                "top": "14dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxImgBusinessBanking = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxImgBusinessBanking",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "40dp"
            }, {}, {});
            flxImgBusinessBanking.setDefaultUnit(kony.flex.DP);
            var imgBusinessBanking = new kony.ui.Image2({
                "height": "40dp",
                "id": "imgBusinessBanking",
                "isVisible": true,
                "left": 0,
                "skin": "slImage",
                "src": "radiobuttoninactive.png",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgBusinessBanking.add(imgBusinessBanking);
            flxBusinessBanking.add(lblBusinessBanking, flxImgBusinessBanking);
            var flxSep2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "15dp",
                "width": "90%"
            }, {}, {});
            flxSep2.setDefaultUnit(kony.flex.DP);
            flxSep2.add();
            flxAccountTypeValues.add(flxRetailBanking, flxSep1, flxBusinessBanking, flxSep2);
            var flxBtnContinue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxBtnContinue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFBorderE9E9E9shadow",
                "width": "100%"
            }, {}, {});
            flxBtnContinue.setDefaultUnit(kony.flex.DP);
            var btnContinue = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "27dp",
                "right": "27dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxBtnContinue.add(btnContinue);
            flxMain.add(flxAccountType, flxAccountTypeValues, flxBtnContinue);
            this.add(flxHeader, flxMain);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_d695f301f73d4e95bf6bba129c97d9c0,
            "metaData": {
                "image": "backbutton.png"
            },
            "id": "LBarBtnItem0"
        });
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_SYSTEM_ITEM,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_ace95eccff784f2d9190750723d49b8d,
            "metaData": {
                "systemItem": constants.SYSTEM_ITEM_CANCEL
            },
            "id": "RBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmBenAccountTypeSelect,
            "enabledForIdleTimeout": true,
            "id": "frmBenAccountTypeSelect",
            "init": controller.AS_Form_ffea859fded64f40b039fc2d0471c8df,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_d7a7620f99c14e16902942d8b2b31f99,
            "preShow": function(eventobject) {
                controller.AS_Form_c60f77fcf4a84e019a92b122079bcd18(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.transfer.addInfinityAccount")
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
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": [RBarBtnItem0]
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});