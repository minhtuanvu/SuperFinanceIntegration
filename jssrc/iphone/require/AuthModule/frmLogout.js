define("AuthModule/frmLogout", function() {
    return function(controller) {
        function addWidgetsfrmLogout() {
            this.setDefaultUnit(kony.flex.DP);
            var imgKonyLogo = new kony.ui.Image2({
                "centerX": "50%",
                "height": "20%",
                "id": "imgKonyLogo",
                "isVisible": true,
                "src": "infinity_digi_bank.png",
                "top": "0%",
                "width": "180dp",
                "zIndex": 13
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "79%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "21%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var flxSuccess = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSuccess",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "11%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxSuccess.setDefaultUnit(kony.flex.DP);
            var imgGreenTick = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "imgGreenTick",
                "isVisible": true,
                "skin": "slImage",
                "src": "logouttick.png",
                "top": "13dp",
                "width": "60dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCongrats = new kony.ui.Label({
                "centerX": "50.00%",
                "id": "lblCongrats",
                "isVisible": true,
                "skin": "sknLbl000000SSPSemiBold26px",
                "text": kony.i18n.getLocalizedString("kony.mb.auth.signOutMsg"),
                "textStyle": {},
                "top": "10dp",
                "width": "65%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSignOutMsg = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSignOutMsg",
                "isVisible": false,
                "skin": "sknLbl000000SSPSemiBold26px",
                "text": "Signed Out!",
                "textStyle": {},
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSuccessMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSuccessMessage",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl727272SourceSansPro26pxTab",
                "text": kony.i18n.getLocalizedString("kony.mb.auth.signInMsg"),
                "textStyle": {},
                "top": "10dp",
                "width": "65%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxSuccess.add(imgGreenTick, lblCongrats, lblSignOutMsg, lblSuccessMessage);
            var btnLogIn = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAFSSPSemiBold26px",
                "height": "40dp",
                "id": "btnLogIn",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.login.logIn"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxeBanking = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxeBanking",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "11%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxeBanking.setDefaultUnit(kony.flex.DP);
            var imgGreenTick1 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "imgGreenTick1",
                "isVisible": true,
                "skin": "slImage",
                "src": "logouttick.png",
                "top": "13dp",
                "width": "60dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lbleBankingDisableSuccess = new kony.ui.Label({
                "centerX": "50.00%",
                "id": "lbleBankingDisableSuccess",
                "isVisible": true,
                "skin": "sknLbl000000SSPSemiBold26px",
                "text": kony.i18n.getLocalizedString("kony.mb.auth.eBankingDisableSuccess"),
                "textStyle": {},
                "top": "10dp",
                "width": "65%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblReachoutBank = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblReachoutBank",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl727272SourceSansPro26pxTab",
                "text": kony.i18n.getLocalizedString("kony.mb.auth.reachOutBank"),
                "textStyle": {},
                "top": "10dp",
                "width": "65%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxeBanking.add(imgGreenTick1, lbleBankingDisableSuccess, lblReachoutBank);
            var flxUpdatePassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUpdatePassword",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "11%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxUpdatePassword.setDefaultUnit(kony.flex.DP);
            var imgGreenTick2 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "imgGreenTick2",
                "isVisible": true,
                "skin": "slImage",
                "src": "logouttick.png",
                "top": "13dp",
                "width": "60dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUpdatePasswordSuccess = new kony.ui.Label({
                "centerX": "50.00%",
                "id": "lblUpdatePasswordSuccess",
                "isVisible": true,
                "skin": "sknLbl000000SSPSemiBold26px",
                "text": kony.i18n.getLocalizedString("kony.mb.auth.passwordUpdateSuccess"),
                "textStyle": {},
                "top": "10dp",
                "width": "65%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSessionClosed = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSessionClosed",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl727272SourceSansPro26pxTab",
                "text": kony.i18n.getLocalizedString("kony.mb.auth.sessionClosed"),
                "textStyle": {},
                "top": "10dp",
                "width": "65%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUpdatePassword.add(imgGreenTick2, lblUpdatePasswordSuccess, lblSessionClosed);
            flxContent.add(flxSuccess, btnLogIn, flxeBanking, flxUpdatePassword);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxshadowLogin",
                "top": "19.50%",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            this.add(imgKonyLogo, flxContent, flxShadow);
        };
        return [{
            "addWidgets": addWidgetsfrmLogout,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmLogout",
            "init": controller.AS_Form_f824c96d565f4432b2a24d5744f1ee97,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_g88f9761a6fd496490fea878d48dafc2(eventobject);
            },
            "skin": "sknfrmBg"
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
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_NONE,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});