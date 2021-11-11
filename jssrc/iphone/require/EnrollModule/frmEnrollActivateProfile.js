define("EnrollModule/frmEnrollActivateProfile", function() {
    return function(controller) {
        function addWidgetsfrmEnrollActivateProfile() {
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
                "skin": "sknFlxffffffShadow",
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
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "text": "Enroll / Activate your profile"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.btnRight.onClick = controller.AS_Button_bccdd148f545430ba4f819367c5fa246;
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": false,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxDisplayOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55%",
                "id": "flxDisplayOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "25dp",
                "isModalContainer": false,
                "right": "25dp",
                "skin": "slFbox",
                "top": "15%",
                "zIndex": 1
            }, {}, {});
            flxDisplayOptions.setDefaultUnit(kony.flex.DP);
            var flxEnrollAccountContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "120dp",
                "id": "flxEnrollAccountContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnrollAccountContainer.setDefaultUnit(kony.flex.DP);
            var flxEnrollAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxEnrollAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFBorderE9E9E9Radius4px",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnrollAccount.setDefaultUnit(kony.flex.DP);
            var imgUserIcon = new kony.ui.Image2({
                "centerY": "50.00%",
                "height": "30dp",
                "id": "imgUserIcon",
                "isVisible": true,
                "left": "11dp",
                "skin": "slImage",
                "src": "loginicon.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxVerticalSeparator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxVerticalSeparator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50dp",
                "isModalContainer": false,
                "skin": "sknFlxe9e9e9Rounded",
                "top": "0%",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxVerticalSeparator1.setDefaultUnit(kony.flex.DP);
            flxVerticalSeparator1.add();
            var lblEnrollAccount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblEnrollAccount",
                "isVisible": true,
                "left": "62dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Enroll your account",
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
            var imgRightArrow1 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgRightArrow1",
                "isVisible": true,
                "right": "19dp",
                "skin": "slImage",
                "src": "calenderarrowright_2.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEnrollAccount.add(imgUserIcon, flxVerticalSeparator1, lblEnrollAccount, imgRightArrow1);
            var flxEnrollAccountDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxEnrollAccountDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%",
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
                "text": kony.i18n.getLocalizedString("kony.mb.EnrollActivateProfile.EnrollYourAccountDescription"),
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
            flxEnrollAccountContainer.add(flxEnrollAccount, flxEnrollAccountDescription);
            var flxOR = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxOR",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknBorderEBEBEBEoundedCorners",
                "top": 20,
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxOR.setDefaultUnit(kony.flex.DP);
            var lblOR = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "17dp",
                "id": "lblOR",
                "isVisible": true,
                "skin": "sknlbl727272SSP20px",
                "text": "OR",
                "textStyle": {},
                "width": "17dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxOR.add(lblOR);
            var flxActivateAccountContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "120dp",
                "id": "flxActivateAccountContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 10,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxActivateAccountContainer.setDefaultUnit(kony.flex.DP);
            var flxActivateAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxActivateAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFBorderE9E9E9Radius4px",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxActivateAccount.setDefaultUnit(kony.flex.DP);
            var imgActivateIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgActivateIcon",
                "isVisible": true,
                "left": "11dp",
                "skin": "slImage",
                "src": "resetpassword.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxVerticalSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxVerticalSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50dp",
                "isModalContainer": false,
                "skin": "sknFlxe9e9e9Rounded",
                "top": "0%",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxVerticalSeparator2.setDefaultUnit(kony.flex.DP);
            flxVerticalSeparator2.add();
            var lblActivateAccount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblActivateAccount",
                "isVisible": true,
                "left": "62dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Activate your account",
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
            var imgRightArrow2 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgRightArrow2",
                "isVisible": true,
                "right": "19dp",
                "skin": "slImage",
                "src": "calenderarrowright_2.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxActivateAccount.add(imgActivateIcon, flxVerticalSeparator2, lblActivateAccount, imgRightArrow2);
            var flxActivateAccountDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxActivateAccountDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxActivateAccountDescription.setDefaultUnit(kony.flex.DP);
            var imgInformationIcon2 = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgInformationIcon2",
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
            var lblActivateAccountDescription = new kony.ui.Label({
                "id": "lblActivateAccountDescription",
                "isVisible": true,
                "left": "33dp",
                "right": "5dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.EnrollActivateProfile.ActivateYourAccountDescription"),
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
            flxActivateAccountDescription.add(imgInformationIcon2, lblActivateAccountDescription);
            flxActivateAccountContainer.add(flxActivateAccount, flxActivateAccountDescription);
            flxDisplayOptions.add(flxEnrollAccountContainer, flxOR, flxActivateAccountContainer);
            flxMainContainer.add(flxDisplayOptions);
            var activateProfile = new com.temenos.infinity.mb.sca.activateProfile({
                "height": "100%",
                "id": "activateProfile",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyCopysknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100,
                "overrides": {
                    "activateProfile": {
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
            activateProfile.headerSkin = "sknFlx1a98ff";
            activateProfile.textVisiblityOffIcon = "viewicon.png";
            activateProfile.screen2HeaderMessageText = "Create Password";
            activateProfile.screen3HeaderMessageText = "Profile Activation";
            activateProfile.objectName = "ActivationCodeAuthenticator";
            activateProfile.activationExpire = "Your activation code has been expired.";
            activateProfile.screen1HeaderMessageText = "Profile Activation";
            activateProfile.screen4HeaderMessageText = "Create PIN";
            activateProfile.screen5HeaderMessageText = "Create Password";
            activateProfile.headerTextSkin = "sknLblffffffSSP30px";
            activateProfile.textVisiblityOnIcon = "viewactive.png";
            activateProfile.screen2HeaderCancelText = "kony.mb.common.Cancel";
            activateProfile.screen3MessageText = "Activated Successfully";
            activateProfile.validateService = "login";
            activateProfile.unableToVerify = "Unable to verify Activation code";
            activateProfile.screen1HeaderCancelText = "kony.mb.common.Cancel";
            activateProfile.screen4HeaderCancelText = "kony.mb.common.Cancel";
            activateProfile.screen5MessageText = "Password Created";
            activateProfile.headerCancelButtonSkin = "sknBtnffffffSSP28px";
            activateProfile.tickGrayIcon = "tickmark.png";
            activateProfile.screen2MessageText = "Create a password to sign onto online banking using password";
            activateProfile.screen3DescriptionText = "We have activated your profile successfully.  \nPlease continue to Face ID  or Fingerprint & Create password";
            activateProfile.passwordUpdateService = "createPassword";
            activateProfile.unableToUpdate = "Unable to update Password";
            activateProfile.screen1DescriptionText = "Enter username and Activation code that was sent to your email and phone";
            activateProfile.screen4Label1Text = "PIN:";
            activateProfile.screen5DescriptionText = "New Password has been created successfully. Please continue to sign in.";
            activateProfile.tickGreenIcon = "greentick.png";
            activateProfile.screen2Label1Text = "kony.mb.Forgot.NewPassword";
            activateProfile.screen3SubmitBtnText = "Continue";
            activateProfile.passwordPolicyService = "fetch";
            activateProfile.screen1ErrorMessageText = "Incorrect username or activation code!";
            activateProfile.screen4Textbox1PlaceholderText = "Enter PIN";
            activateProfile.screen5SubmitBtnText = "Sign In";
            activateProfile.passwordObjModelName = "PasswordPolicy";
            activateProfile.errorMessageSkin = "sknLblEE0005SSPR114pct";
            activateProfile.successTickIcon = "confirmation_tick.png";
            activateProfile.screen2Textbox1PlaceholderText = "kony.mb.common.EnterNewPassword";
            activateProfile.screen1TextBox1PlaceholderText = "Username";
            activateProfile.screen4Label2Text = "Re-enter PIN:";
            activateProfile.deviceProvisioningService = "createDevice";
            activateProfile.textBoxNormalSkin = "sknTbxFontSSPR727272BdrE9E9E9";
            activateProfile.screen2Label2Text = "kony.mb.Forgot.ReEnterNewPassword";
            activateProfile.screen1TextBox2PlaceholderText = "Activation Code";
            activateProfile.screen4Textbox2PlaceholderText = "Re-enter PIN";
            activateProfile.screen4LabelPasswordRulesText = "Security Requirements:";
            activateProfile.textBoxErrorSkin = "sknTbxBorderF54B5ESSPR114pct";
            activateProfile.screen2Textbox2PlaceholderText = "kony.mb.Forgot.ReEnterNewPassword";
            activateProfile.screen1SubmitBtnText = "i18n.ProfileManagement.Verify";
            activateProfile.buttonEnabledSkin = "sknBtn0095e426pxEnabled";
            activateProfile.screen2LabelPasswordRulesText = "Security Requirements:";
            activateProfile.screen1ForgetPasswordBtnText = "kony.mb.login.cannotLogin";
            activateProfile.screen4SubmitBtnText = "Continue";
            activateProfile.buttonDisabledSkin = "sknBtna0a0a0SSPReg26px";
            activateProfile.screen2SubmitBtnText = "Create Password";
            activateProfile.screen4MessageText = "Please create a PIN to use to login Infinity";
            activateProfile.forgetPasswordSkin = "sknLbl004B95SSPRegular26px";
            activateProfile.screen2MessageSkin = "sknLbl424242SSPL200pct";
            activateProfile.labelSkin = "sknLbl727272SSPR114pct";
            activateProfile.passwordRulesLabelSkin = "sknLblSSPRegFD3F2F28px";
            activateProfile.passwordRulesSkin = "sknrtxfd3f2fSSp95pr";
            activateProfile.screen3MessageSkin = "sknlbl000000SSPSemiBold72px";
            activateProfile.textBoxNormalFocusSkin = "tbxBlueFocus";
            activateProfile.navigateToLogin = controller.AS_UWI_f8e67744ef8d42498b481aa460a0da19;
            activateProfile.closeActivateProfileFlow = controller.AS_UWI_e8edd086e18f44a2a4c1b3a2ecb4d241;
            this.add(flxHeader, flxMainContainer, activateProfile);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_g63d9831d55a4de886e1d37019ce8d67,
            "metaData": {
                "image": "backbutton.png"
            },
            "id": "LBarBtnItem0"
        });
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_eedc52fa13ee44ca8d9d72e93bcf7e09,
            "metaData": {
                "title": "Cancel"
            },
            "id": "RBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmEnrollActivateProfile,
            "enabledForIdleTimeout": true,
            "id": "frmEnrollActivateProfile",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_cc03c790c039457284764371625ed0b8(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Enroll / Activate your profile"
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
                "backIndicatorImage": "backbutton.png",
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
            "titleBarSkin": "CopyslTitleBar0a811c954ca8044"
        }]
    }
});