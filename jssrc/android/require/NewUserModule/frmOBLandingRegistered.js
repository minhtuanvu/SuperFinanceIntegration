define("NewUserModule/frmOBLandingRegistered", function() {
    return function(controller) {
        function addWidgetsfrmOBLandingRegistered() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxProgressBackgroundHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressBackgroundHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxda8b08Op20",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxProgressBackgroundHeader.setDefaultUnit(kony.flex.DP);
            flxProgressBackgroundHeader.add();
            var flxProgressHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "90%",
                "skin": "sknFlxda8b08",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxProgressHeader.setDefaultUnit(kony.flex.DP);
            flxProgressHeader.add();
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
                    "btnRight": {
                        "isVisible": true,
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
                    },
                    "customHeader": {
                        "height": "100%"
                    },
                    "flxBack": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": "Sign Up"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxProgressBackgroundHeader, flxProgressHeader, customHeader);
            var flxLanding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLanding",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxLanding.setDefaultUnit(kony.flex.DP);
            var flxUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "33%",
                "id": "flxUser",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUser.setDefaultUnit(kony.flex.DP);
            var flxUserImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "flxUserImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxProfileImage",
                "top": "40dp",
                "width": "47dp",
                "zIndex": 1
            }, {}, {});
            flxUserImage.setDefaultUnit(kony.flex.DP);
            var imgUser = new kony.ui.Image2({
                "height": "100%",
                "id": "imgUser",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "usericon.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUserImage.add(imgUser);
            var flxSubtitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxSubtitle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSubtitle.setDefaultUnit(kony.flex.DP);
            var lblLandingSubtitle1 = new kony.ui.Label({
                "id": "lblLandingSubtitle1",
                "isVisible": true,
                "right": "50%",
                "skin": "sknLblffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.OB.EnteredNumber"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneNumber = new kony.ui.Label({
                "id": "lblPhoneNumber",
                "isVisible": true,
                "left": "50%",
                "skin": "sknLblffffffSSP26px",
                "text": "( 123 ) 456 - 5678 ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSubtitle.add(lblLandingSubtitle1, lblPhoneNumber);
            var lblLandingSubtitle2 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblLandingSubtitle2",
                "isVisible": true,
                "skin": "sknLblffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.OB.LandingSubtitle2"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUser.add(flxUserImage, flxSubtitle, lblLandingSubtitle2);
            var flxShadowUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowUser",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowUser.setDefaultUnit(kony.flex.DP);
            flxShadowUser.add();
            var btnLandingOne = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnLandingOne",
                "isVisible": true,
                "skin": "sknBtnDarkTheme",
                "text": kony.i18n.getLocalizedString("kony.mb.OnBoarding.Login"),
                "top": "10%",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxOr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "26dp",
                "id": "flxOr",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe9e9e9Rounded",
                "top": "6.50%",
                "width": "26dp",
                "zIndex": 1
            }, {}, {});
            flxOr.setDefaultUnit(kony.flex.DP);
            var lblOr = new kony.ui.Label({
                "centerX": "45%",
                "centerY": "45%",
                "id": "lblOr",
                "isVisible": true,
                "skin": "sknlbl727272SSPSSP79pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Or"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxOr.add(lblOr);
            var btnChangePhoneNumber = new kony.ui.Button({
                "centerX": "50.00%",
                "focusSkin": "sknbtnf6f6f6Focus100prSSPSemiBold",
                "height": "40dp",
                "id": "btnChangePhoneNumber",
                "isVisible": true,
                "skin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.OnBoarding.EditPhoneNumber"),
                "top": "6.50%",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnChangeEmail = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknbtnf6f6f6Focus100prSSPSemiBold",
                "height": "40dp",
                "id": "btnChangeEmail",
                "isVisible": false,
                "skin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.OnBoarding.ChangeEmail"),
                "top": "6.50%",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLanding.add(flxUser, flxShadowUser, btnLandingOne, flxOr, btnChangePhoneNumber, btnChangeEmail);
            var flxPopupFillingComplete = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopupFillingComplete",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f2a5b0bfd49a49",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxPopupFillingComplete.setDefaultUnit(kony.flex.DP);
            var flxPopupFillingCompleteWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "7%",
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "116dp",
                "id": "flxPopupFillingCompleteWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxPopupDocuments",
                "width": "245dp",
                "zIndex": 1
            }, {}, {});
            flxPopupFillingCompleteWrapper.setDefaultUnit(kony.flex.DP);
            var rtxCompleteMessage = new kony.ui.RichText({
                "centerX": "50%",
                "height": "74dp",
                "id": "rtxCompleteMessage",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx424242SSP24px",
                "text": kony.i18n.getLocalizedString("kony.mb.OB.FinishedApplicationInfo"),
                "top": "0dp",
                "width": "90%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSeparatorComplete = new kony.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "lblSeparatorComplete",
                "isVisible": true,
                "left": "-2%",
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "105%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxPopupCompleteActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "41dp",
                "id": "flxPopupCompleteActions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "sknFlxPopupDocuments",
                "width": "245dp",
                "zIndex": 1
            }, {}, {});
            flxPopupCompleteActions.setDefaultUnit(kony.flex.DP);
            var btnCompleteCancel = new kony.ui.Button({
                "height": "100%",
                "id": "btnCompleteCancel",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSeparatorContinueTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblSeparatorContinueTwo",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "-1dp",
                "width": "1dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnCompleteContinue = new kony.ui.Button({
                "height": "100%",
                "id": "btnCompleteContinue",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPopupCompleteActions.add(btnCompleteCancel, lblSeparatorContinueTwo, btnCompleteContinue);
            flxPopupFillingCompleteWrapper.add(rtxCompleteMessage, lblSeparatorComplete, flxPopupCompleteActions);
            flxPopupFillingComplete.add(flxPopupFillingCompleteWrapper);
            this.add(flxHeader, flxLanding, flxPopupFillingComplete);
        };
        return [{
            "addWidgets": addWidgetsfrmOBLandingRegistered,
            "enabledForIdleTimeout": true,
            "id": "frmOBLandingRegistered",
            "init": controller.AS_Form_a884b18e015840a48d5c8dbb0163dd05,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_d820900fd5f9499ba32deebe756c8486(eventobject);
            },
            "skin": "sknFrm1a98ffGradient10"
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
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});