define("AuthModule/frmForgotResetInformation", function() {
    return function(controller) {
        function addWidgetsfrmForgotResetInformation() {
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
                "top": "0%",
                "width": "100%",
                "zIndex": 2
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
                        "isVisible": true
                    },
                    "flxBack": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": "Reset Information"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_e0bc99d1d27441c2b6966a1951462ea1;
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
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
                "top": "24dp",
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
                "src": "userimg.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUserImage.add(imgUser);
            var lblWelcomeBack = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblWelcomeBack",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg36pxop100",
                "text": kony.i18n.getLocalizedString("kony.mb.ForgotMain.UserName"),
                "textStyle": {},
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblUsername = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblUsername",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg36pxop100",
                "text": "john.suresh",
                "textStyle": {},
                "top": "5dp",
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
            var rtxSelectOptionInfo = new kony.ui.RichText({
                "centerX": "50%",
                "id": "rtxSelectOptionInfo",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "sknRtxffffffSSP26px",
                "text": "Please select the below option <br> to proceed",
                "top": "35dp",
                "width": "75%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUser.add(flxUserImage, lblWelcomeBack, lblUsername, rtxSelectOptionInfo);
            var flxResetPasswordORSignIn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65%",
                "id": "flxResetPasswordORSignIn",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2dp",
                "width": "100%"
            }, {}, {});
            flxResetPasswordORSignIn.setDefaultUnit(kony.flex.DP);
            var lblErrorMessageScreen1 = new kony.ui.Label({
                "id": "lblErrorMessageScreen1",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLblEE0005SSPR114pct",
                "text": "Reset Password Failed!",
                "textStyle": {},
                "top": "20dp",
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
            var flxResetMyPassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxResetMyPassword",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxBorder3e4f564px",
                "top": "50dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxResetMyPassword.setDefaultUnit(kony.flex.DP);
            var imgResetMyPassword = new kony.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "imgResetMyPassword",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "resetpassword.png",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLineResetMyPassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxLineResetMyPassword",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "40dp",
                "isModalContainer": false,
                "skin": "sknFlx3e4f56Op10",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxLineResetMyPassword.setDefaultUnit(kony.flex.DP);
            flxLineResetMyPassword.add();
            var rtxResetMyPassword = new kony.ui.RichText({
                "centerY": "50%",
                "id": "rtxResetMyPassword",
                "isVisible": true,
                "left": "55dp",
                "skin": "sknRtx424242SSP26px",
                "text": "Reset My Password",
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgArrowRight1 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "14dp",
                "id": "imgArrowRight1",
                "isVisible": true,
                "right": "6.25%",
                "skin": "slImage",
                "src": "chevronright.png",
                "width": "7dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxResetMyPassword.add(imgResetMyPassword, flxLineResetMyPassword, rtxResetMyPassword, imgArrowRight1);
            var flxOr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxOr",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxRounded3e4f56Op10",
                "top": "30dp",
                "width": "25dp",
                "zIndex": 1
            }, {}, {});
            flxOr.setDefaultUnit(kony.flex.DP);
            var lblOr = new kony.ui.Label({
                "centerX": "45%",
                "centerY": "47%",
                "id": "lblOr",
                "isVisible": true,
                "skin": "sknlbl727272SSPSSP79pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Or"),
                "textStyle": {},
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
            flxOr.add(lblOr);
            var flxSignInNow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSignInNow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxBorder3e4f564px",
                "top": "30dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSignInNow.setDefaultUnit(kony.flex.DP);
            var imgSignInNow = new kony.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "imgSignInNow",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "loginicon.png",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLineSignInNow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxLineSignInNow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "40dp",
                "isModalContainer": false,
                "skin": "sknFlx3e4f56Op10",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxLineSignInNow.setDefaultUnit(kony.flex.DP);
            flxLineSignInNow.add();
            var rtxSignInNow = new kony.ui.RichText({
                "centerY": "50%",
                "height": "60%",
                "id": "rtxSignInNow",
                "isVisible": true,
                "left": "55dp",
                "skin": "sknRtx424242SSP26px",
                "text": "Sign In Now",
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgArrowRight2 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "14dp",
                "id": "imgArrowRight2",
                "isVisible": true,
                "right": "6.25%",
                "skin": "slImage",
                "src": "chevronright.png",
                "width": "7dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSignInNow.add(imgSignInNow, flxLineSignInNow, rtxSignInNow, imgArrowRight2);
            flxResetPasswordORSignIn.add(lblErrorMessageScreen1, flxResetMyPassword, flxOr, flxSignInNow);
            var flxRegenerateActivationCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65%",
                "id": "flxRegenerateActivationCode",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRegenerateActivationCode.setDefaultUnit(kony.flex.DP);
            var lblErrorMessage = new kony.ui.Label({
                "id": "lblErrorMessage",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLblEE0005SSPR114pct",
                "text": "Activation Code Regeneration Failed!",
                "textStyle": {},
                "top": "20dp",
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
            var flxRegenerateActivationOption = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxRegenerateActivationOption",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxBorder3e4f564px",
                "top": "40dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxRegenerateActivationOption.setDefaultUnit(kony.flex.DP);
            var imgRegenerateActivationCode = new kony.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "imgRegenerateActivationCode",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "resetpassword.png",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLineRegenerateActivationCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxLineRegenerateActivationCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "40dp",
                "isModalContainer": false,
                "skin": "sknFlx3e4f56Op10",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxLineRegenerateActivationCode.setDefaultUnit(kony.flex.DP);
            flxLineRegenerateActivationCode.add();
            var rtxRegenerateActivationCode = new kony.ui.RichText({
                "centerY": "50%",
                "id": "rtxRegenerateActivationCode",
                "isVisible": true,
                "left": "55dp",
                "skin": "sknRtx424242SSP26px",
                "text": "Re-generate Activation code",
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgArrowRight3 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "14dp",
                "id": "imgArrowRight3",
                "isVisible": true,
                "right": "6.25%",
                "skin": "slImage",
                "src": "chevronright.png",
                "width": "7dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRegenerateActivationOption.add(imgRegenerateActivationCode, flxLineRegenerateActivationCode, rtxRegenerateActivationCode, imgArrowRight3);
            var flxEnrollAccountDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxEnrollAccountDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxEnrollAccountDescription.setDefaultUnit(kony.flex.DP);
            var imgInformationIcon = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgInformationIcon",
                "isVisible": true,
                "left": "5dp",
                "skin": "slImage",
                "src": "infoappbar.png",
                "top": "7dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEnrollAccountDescription = new kony.ui.Label({
                "id": "lblEnrollAccountDescription",
                "isVisible": true,
                "left": "33dp",
                "right": "5dp",
                "skin": "sknLbl424242SSP22px",
                "text": "If you regenerate an activation code, the old code will be invalidated & a new code will be shared with you.",
                "textStyle": {},
                "top": "0dp",
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
            flxEnrollAccountDescription.add(imgInformationIcon, lblEnrollAccountDescription);
            flxRegenerateActivationCode.add(lblErrorMessage, flxRegenerateActivationOption, flxEnrollAccountDescription);
            flxMainContainer.add(flxUser, flxResetPasswordORSignIn, flxRegenerateActivationCode);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10.50%",
                "id": "flxPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf54b5e",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var customPopup = new com.kmb.common.customPopup({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customPopup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            var ActivationCodeSuccess = new com.temenos.infinity.ActivationCodeSuccess({
                "height": "100%",
                "id": "ActivationCodeSuccess",
                "isVisible": false,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 500,
                "overrides": {
                    "ActivationCodeSuccess": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            ActivationCodeSuccess.headerBgSkin = "sknFlx1a98ff";
            ActivationCodeSuccess.greenTickImg = "confirmation_tick.png";
            ActivationCodeSuccess.headerText = "Re-generate Activation code";
            ActivationCodeSuccess.headerTextSkin = "sknLblffffffSSP30px";
            ActivationCodeSuccess.screenTitleText = "Activation code re-generated";
            ActivationCodeSuccess.screenTitleSkin = "sknlbl000000SSPSemiBold72px";
            ActivationCodeSuccess.screenDescriptionText = "The new activation code will be delivered to your registered email address.";
            ActivationCodeSuccess.screenDescTextSkin = "sknLbl727272SSPR114pct";
            ActivationCodeSuccess.submitBtnText = "Activate your account";
            ActivationCodeSuccess.btnSubmitSkin = "sknBtn0095e426pxEnabled";
            ActivationCodeSuccess.closeComponent = controller.AS_UWI_b35690c0e17e48c7aabb9dc8003d3250;
            var resetPassword = new com.temenos.infinity.resetPassword({
                "height": "100%",
                "id": "resetPassword",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 500,
                "overrides": {
                    "resetPassword": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            resetPassword.buttonDisabledSkin = "sknBtna0a0a0SSPReg26px";
            resetPassword.passwordPolicyService = "getPasswordRulesAndPolicy";
            resetPassword.textVisiblityOffIcon = "viewicon.png";
            resetPassword.otpRequestLimitError = "OTP request limit is excceeded than allowed number.";
            resetPassword.buttonEnabledSkin = "sknBtn0095e426pxEnabled";
            resetPassword.object = "DbxUser";
            resetPassword.textVisiblityOnIcon = "viewactive.png";
            resetPassword.sknLblOTPEmpty = "sknLble3e3e3SSP60px";
            resetPassword.requestResetPasswordOTP = "requestResetPasswordOTP";
            resetPassword.tickGrayIcon = "tickmark.png";
            resetPassword.sknLblOTPNotEmpty = "sknLbl979797SSP60px";
            resetPassword.verifyMFAOTP = "verifyOTPPreLogin";
            resetPassword.tickGreenIcon = "greentick.png";
            resetPassword.sknFlxOTPEmpty = "sknFlx979797";
            resetPassword.passwordUpdateService = "resetDbxUserPassword";
            resetPassword.sknFlxOTPNotEmpty = "sknFlx003e75Bg";
            resetPassword.sknFlxNormalSkin = "sknFlxFFFFFFBorderE9E9E9Radius3px";
            resetPassword.onSuccessCallback = controller.AS_UWI_c73106b14aa34e8faa25351719bedf20;
            resetPassword.onFailureCallback = controller.AS_UWI_da396c80f5e54804aa46b68beb3af3ec;
            resetPassword.cancelReset = controller.AS_UWI_b8e6cbb0ca854bd790d320199ef7d057;
            this.add(flxHeader, flxMainContainer, flxPopup, ActivationCodeSuccess, resetPassword);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_d84bccd3e8a247cb9e0307d3f13f6553,
            "metaData": {
                "title": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_afc7e8dae4224a75bbb852ed37f7a100,
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmForgotResetInformation,
            "enabledForIdleTimeout": true,
            "id": "frmForgotResetInformation",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_cdacc0ed5a5a4f80a80d980bf2d3cf61(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Reset Information"
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
                "translucent": true,
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