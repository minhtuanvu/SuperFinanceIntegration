define("CampaignManagement/frmSpecialBonusAcknowledgment", function() {
    return function(controller) {
        function addWidgetsfrmSpecialBonusAcknowledgment() {
            this.setDefaultUnit(kony.flex.DP);
            var flxParent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxParent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxParent.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
                    "flxBack": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "left": "34%",
                        "text": "Acknowledgement",
                        "top": "4.74%",
                        "width": kony.flex.USE_PREFFERED_SIZE
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "92%",
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "8%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var flxCongratulations = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "175dp",
                "id": "flxCongratulations",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "41dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "155dp",
                "width": "294dp",
                "zIndex": 1
            }, {}, {});
            flxCongratulations.setDefaultUnit(kony.flex.DP);
            var imgTick = new kony.ui.Image2({
                "height": "70dp",
                "id": "imgTick",
                "isVisible": true,
                "left": "112dp",
                "skin": "slImage",
                "src": "confirmation_tick.png",
                "top": "0dp",
                "width": "70dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCongratulations = new kony.ui.Label({
                "height": "31dp",
                "id": "lblCongratulations",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblCongrats",
                "text": "Congratulations!",
                "textStyle": {},
                "top": "92dp",
                "width": "294dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDetails = new kony.ui.Label({
                "height": "40dp",
                "id": "lblDetails",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblDetailsCongrats",
                "text": "Your Savings Plus is successfully credited with €100 Bonus from us.",
                "textStyle": {},
                "top": "135dp",
                "width": "294dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCongratulations.add(imgTick, lblCongratulations, lblDetails);
            var btnViewAccounts = new kony.ui.Button({
                "bottom": "25dp",
                "centerX": "50%",
                "focusSkin": "sknBtn0095e426pxEnabled",
                "height": "48dp",
                "id": "btnViewAccounts",
                "isVisible": true,
                "onClick": controller.AS_Button_acf159698b5240c7958642125152f2e6,
                "skin": "sknBtn0095e426pxEnabled",
                "text": "View Accounts",
                "width": "310dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxDetails.add(flxCongratulations, btnViewAccounts);
            flxParent.add(flxHeader, flxDetails);
            this.add(flxParent);
        };
        return [{
            "addWidgets": addWidgetsfrmSpecialBonusAcknowledgment,
            "enabledForIdleTimeout": true,
            "id": "frmSpecialBonusAcknowledgment",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmf9f9f9"
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