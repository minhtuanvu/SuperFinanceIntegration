define("UnifiedTransferFlow/frmMFAValidation", function() {
    return function(controller) {
        function addWidgetsfrmMFAValidation() {
            this.setDefaultUnit(kony.flex.DP);
            var TransfersFlowSecurityCode = new com.temenos.infinity.mfa.TransfersFlowSecurityCode({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "TransfersFlowSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "TransfersFlowSecurityCode": {
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
            TransfersFlowSecurityCode.objectServiceName1 = "RBObjects";
            TransfersFlowSecurityCode.objectServiceName2 = "RBObjects";
            TransfersFlowSecurityCode.screen1SubmitBtnEnabledSkin = "sknBtn0095e426pxEnabled";
            TransfersFlowSecurityCode.screen2TitleBgSkin = "sknFlxf9f9f9";
            TransfersFlowSecurityCode.screen1SubmitBtnText = "Send";
            TransfersFlowSecurityCode.screen2TitleText = "Please enter the security code sent to you.";
            TransfersFlowSecurityCode.checkboxSelectedImg = "a.png";
            TransfersFlowSecurityCode.action = "";
            TransfersFlowSecurityCode.objectName1 = "DbxUser";
            TransfersFlowSecurityCode.objectName2 = "DbxUser";
            TransfersFlowSecurityCode.screen1SubmitBtnDisabledSkin = "sknBtna0a0a0SSPReg26px";
            TransfersFlowSecurityCode.screen2TitleSkin = "sknLbl424242SSP26px";
            TransfersFlowSecurityCode.screen2SubtitleText = "Enter Security Code";
            TransfersFlowSecurityCode.checkboxUnselectedImg = "tickmarkbox.png";
            TransfersFlowSecurityCode.isPostLogin = true;
            TransfersFlowSecurityCode.operationName1 = "requestLoginMFAOTP";
            TransfersFlowSecurityCode.operationName2 = "verifyLoginMFAOTP";
            TransfersFlowSecurityCode.screen2SubtitleSkin = "sknLbl3e4f56SSPReg30px";
            TransfersFlowSecurityCode.screen2DescriptionText = "Enter Secure Access sent on your 9*****8865 & p*******************@Kony.com...........................";
            TransfersFlowSecurityCode.screen2DescriptionSkin = "sknLbl424242SSP22px26";
            TransfersFlowSecurityCode.screen2ErrorMsgText = "Code Expired. Try again";
            TransfersFlowSecurityCode.screen2ErrorMsgSkin = "sknLblF54B5E26px";
            TransfersFlowSecurityCode.screen2ResendBtnText = "Resend";
            TransfersFlowSecurityCode.screen2ResendBtnSkin = "sknBtn0095e428px";
            TransfersFlowSecurityCode.screen2RegisterDevLblText = "Register my device";
            TransfersFlowSecurityCode.screen2RegisterDevLblSkin = "sknLbl424242SSPReg30px";
            TransfersFlowSecurityCode.screen2SubmitBtnText = "Verify";
            TransfersFlowSecurityCode.screen2SubmitBtnEnabledSkin = "ICSknBtn003E7535PX";
            TransfersFlowSecurityCode.screen2HeaderText = "Security Code";
            TransfersFlowSecurityCode.screen2SubmitBtnDisabledSkin = "ICSknBtnE2E9F0t42424234px";
            var TransfersFlowSecurityQuestions = new com.temenos.infinity.mfa.TransfersFlowSecurityQuestions({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "TransfersFlowSecurityQuestions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "TransfersFlowSecurityQuestions": {
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
            TransfersFlowSecurityQuestions.objectServiceName1 = "RBObjects";
            TransfersFlowSecurityQuestions.titleBgSkin = "sknFlxf9f9f9";
            TransfersFlowSecurityQuestions.checkboxSelectedImg = "a.png";
            TransfersFlowSecurityQuestions.titleMsgText = "Security Questions";
            TransfersFlowSecurityQuestions.isPostLogin = true;
            TransfersFlowSecurityQuestions.objectName1 = "DbxUser";
            TransfersFlowSecurityQuestions.titleMsgSkin = "sknLbl424242SSP26px";
            TransfersFlowSecurityQuestions.checkboxEmptyImg = "tickmarkbox.png";
            TransfersFlowSecurityQuestions.errorMsgText = "Your answers does not match, reattempt";
            TransfersFlowSecurityQuestions.action = "";
            TransfersFlowSecurityQuestions.operationName1 = "verifyLoginMFASecurityQuestions";
            TransfersFlowSecurityQuestions.errorMsgSkin = "sknLblF54B5E26px";
            TransfersFlowSecurityQuestions.submitBtnText = "Verify";
            TransfersFlowSecurityQuestions.enableBtnSkin = "ICSknBtn003E7535PX";
            TransfersFlowSecurityQuestions.registerDeviceText = "Register my device";
            TransfersFlowSecurityQuestions.disableBtnSkin = "ICSknBtnE2E9F0t42424234px";
            TransfersFlowSecurityQuestions.headerMsgText = "Security Questions";
            TransfersFlowSecurityQuestions.registerDeviceSkin = "sknLbl424242SSPReg30px";
            this.add(TransfersFlowSecurityCode, TransfersFlowSecurityQuestions);
        };
        return [{
            "addWidgets": addWidgetsfrmMFAValidation,
            "enabledForIdleTimeout": false,
            "id": "frmMFAValidation",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_g1f2fbc9a1e64cf39fa55f1cb6a558ff(eventobject);
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "onDeviceBack": controller.AS_Form_a6ce22eb09f644029eef3972b33beb81,
            "retainScrollPosition": false,
            "titleBar": true,
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});