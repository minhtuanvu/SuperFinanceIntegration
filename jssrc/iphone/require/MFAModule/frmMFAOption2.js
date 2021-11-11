define("MFAModule/frmMFAOption2", function() {
    return function(controller) {
        function addWidgetsfrmMFAOption2() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true,
                        "right": "10dp",
                        "width": "70dp"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "isVisible": false,
                        "src": "hamburger.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.MFA.2StepVerification")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxNewDevice = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNewDevice",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxNewDevice.setDefaultUnit(kony.flex.DP);
            var flxImgOTP = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxImgOTP",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxImgOTP.setDefaultUnit(kony.flex.DP);
            var imgOTP = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "58dp",
                "id": "imgOTP",
                "isVisible": true,
                "skin": "slImage",
                "src": "newdevice.png",
                "width": "47dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgOTP.add(imgOTP);
            var rtxNewDevice = new kony.ui.RichText({
                "centerX": "50%",
                "id": "rtxNewDevice",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx424242SSPR36pxTab",
                "text": kony.i18n.getLocalizedString("kony.mb.MFA.NewDeviceDetected"),
                "top": "20dp",
                "width": "80%",
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNewDevice.add(flxImgOTP, rtxNewDevice);
            var flxDeviceRegistration = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDeviceRegistration",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxDeviceRegistration.setDefaultUnit(kony.flex.DP);
            var lblName = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblName",
                "isVisible": true,
                "skin": "sknLbl424242SSPBold30px",
                "text": "Hi!! John Doe",
                "textStyle": {},
                "top": "50dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblLetsAuthenticate = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblLetsAuthenticate",
                "isVisible": true,
                "skin": "sknLbl424242SSReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.MFA.LetsAuthenticate"),
                "textStyle": {},
                "top": "80dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDeviceRegistration.add(lblName, lblLetsAuthenticate);
            var lblLetsAuthenticateTransaction = new kony.ui.Label({
                "bottom": "40dp",
                "centerX": "50%",
                "id": "lblLetsAuthenticateTransaction",
                "isVisible": false,
                "skin": "sknLbl424242SSPBold30px",
                "text": kony.i18n.getLocalizedString("kony.mb.MFA.LetsAuthenticateforSafeTransaction"),
                "textStyle": {},
                "top": "40dp",
                "width": "80%",
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "50dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var lblSecurityCode = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSecurityCode",
                "isVisible": true,
                "skin": "sknLbl424242SSReg30px",
                "text": kony.i18n.getLocalizedString("kony.mb.MFA.SecurityCode"),
                "textStyle": {},
                "top": "0dp",
                "width": "80%",
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxMobile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxMobile",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxMobile.setDefaultUnit(kony.flex.DP);
            var lblMobNo = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMobNo",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPBold30px",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.mobNo"),
                "textStyle": {},
                "top": "0",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblColon1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblColon1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPBold30px",
                "text": ":",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblMobNoValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMobNoValue",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl424242SSPBold30px",
                "text": "91XXXXXX1213",
                "textStyle": {},
                "top": 1,
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
            flxMobile.add(lblMobNo, lblColon1, lblMobNoValue);
            var flxEmailId = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxEmailId",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 3
            }, {}, {});
            flxEmailId.setDefaultUnit(kony.flex.DP);
            var lblEmailId = new kony.ui.Label({
                "id": "lblEmailId",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPBold30px",
                "text": kony.i18n.getLocalizedString("kony.mb.devReg.emailId"),
                "textStyle": {},
                "top": "0",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblColon2 = new kony.ui.Label({
                "id": "lblColon2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPBold30px",
                "text": ":",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblEmailIdValue = new kony.ui.Label({
                "id": "lblEmailIdValue",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl424242SSPBold30px",
                "text": "ab****ny@kony.com",
                "textStyle": {},
                "top": 1,
                "width": "58%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxEmailId.add(lblEmailId, lblColon2, lblEmailIdValue);
            flxDetails.add(lblSecurityCode, flxMobile, flxEmailId);
            flxBody.add(flxNewDevice, flxDeviceRegistration, lblLetsAuthenticateTransaction, flxDetails);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnSend = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF129pr",
                "height": "48dp",
                "id": "btnSend",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26pxz",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.send"),
                "zIndex": 8
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxButtons.add(btnSend);
            this.add(flxHeader, flxBody, flxButtons);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_ge9ee6c71dec43979fd89730e33ef3a9,
            "metaData": {
                "title": kony.i18n.getLocalizedString("kony.mb.nuo.Cancel")
            },
            "id": "RBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmMFAOption2,
            "enabledForIdleTimeout": true,
            "id": "frmMFAOption2",
            "init": controller.AS_Form_cc092905161442ae93bb4fdad4571733,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_cadb552dea884c498d3093156a177e2e(eventobject);
            },
            "skin": "slForm",
            "title": kony.i18n.getLocalizedString("kony.mb.MFA.2StepVerification")
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
                "tintColor": "4b88f100",
                "hidesBackButton": true,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [RBarBtnItem0]
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});