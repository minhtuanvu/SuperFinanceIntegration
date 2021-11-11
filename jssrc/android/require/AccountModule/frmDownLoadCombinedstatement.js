define("AccountModule/frmDownLoadCombinedstatement", function() {
    return function(controller) {
        function addWidgetsfrmDownLoadCombinedstatement() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "58dp",
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
                        "isVisible": false
                    },
                    "flxBack": {
                        "isVisible": false
                    },
                    "flxHeader": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "centerX": "50%",
                        "left": "viz.val_cleared",
                        "right": "viz.val_cleared",
                        "text": "Download",
                        "width": kony.flex.USE_PREFFERED_SIZE
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.btnRight.onClick = controller.AS_Button_ffbd6c677a424890847a1f9715873560;
            flxHeader.add(customHeader);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
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
            var flxInformation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "centerY": "40%",
                "clipBounds": true,
                "id": "flxInformation",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxInformation.setDefaultUnit(kony.flex.DP);
            var flxImageContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "70dp",
                "id": "flxImageContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "9dp",
                "width": "70dp",
                "zIndex": 1
            }, {}, {});
            flxImageContainer.setDefaultUnit(kony.flex.DP);
            var Image0c2d67969662346 = new kony.ui.Image2({
                "height": "100%",
                "id": "Image0c2d67969662346",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "inprogress.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImageContainer.add(Image0c2d67969662346);
            var lblInfoBold = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblInfoBold",
                "isVisible": true,
                "right": 40,
                "skin": "skn000000SSPSemiBold24PX",
                "text": kony.i18n.getLocalizedString("i18n.mb.StatementPrepration"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblInfo = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblInfo",
                "isVisible": true,
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("i18n.mb.DownloadPageInfo"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "73%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInformation.add(flxImageContainer, lblInfoBold, lblInfo);
            flxMain.add(flxInformation);
            var flxBackToStatement = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "48dp",
                "id": "flxBackToStatement",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBackToStatement.setDefaultUnit(kony.flex.DP);
            var btnBackToStatement = new kony.ui.Button({
                "bottom": "3%",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "48dp",
                "id": "btnBackToStatement",
                "isVisible": true,
                "skin": "sknBtnDarkTheme",
                "text": kony.i18n.getLocalizedString("kony.mb.loans.downloadInstallments"),
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBackToStatement.add(btnBackToStatement);
            this.add(flxHeader, flxMain, flxBackToStatement);
        };
        return [{
            "addWidgets": addWidgetsfrmDownLoadCombinedstatement,
            "enabledForIdleTimeout": false,
            "id": "frmDownLoadCombinedstatement",
            "init": controller.AS_Form_adad127d6f0f4f68b4ba4d5fdd9fd0c9,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_h42ef592f01849a480ff2ebb85ae0db5(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("i18n.common.Download")
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