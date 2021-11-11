define("MFAModule/frmMFAValidation", function() {
    return function(controller) {
        function addWidgetsfrmMFAValidation() {
            this.setDefaultUnit(kony.flex.DP);
            var SecurityCodeComponent = new com.temenos.infinity.mfa.SecurityCode({
                "height": "100%",
                "id": "SecurityCodeComponent",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "SecurityCode": {
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
            SecurityCodeComponent.objectServiceName1 = "RBObjects";
            SecurityCodeComponent.objectServiceName2 = "RBObjects";
            SecurityCodeComponent.screen1SubmitBtnEnabledSkin = "sknBtn0095e426pxEnabled";
            SecurityCodeComponent.screen2TitleBgSkin = "sknFlxf9f9f9";
            SecurityCodeComponent.screen1SubmitBtnText = "kony.mb.Messages.send";
            SecurityCodeComponent.screen2TitleText = "kony.mb.Forgot.EnterSecurityCodeTitle";
            SecurityCodeComponent.checkboxSelectedImg = "a.png";
            SecurityCodeComponent.action = "";
            SecurityCodeComponent.objectName1 = "DbxUser";
            SecurityCodeComponent.objectName2 = "DbxUser";
            SecurityCodeComponent.screen1SubmitBtnDisabledSkin = "sknBtna0a0a0SSPReg26px";
            SecurityCodeComponent.screen2TitleSkin = "sknLbl424242SSP26px";
            SecurityCodeComponent.screen2SubtitleText = "Enter Security Code";
            SecurityCodeComponent.checkboxUnselectedImg = "tickmarkbox.png";
            SecurityCodeComponent.isPostLogin = true;
            SecurityCodeComponent.operationName1 = "requestLoginMFAOTP";
            SecurityCodeComponent.operationName2 = "verifyLoginMFAOTP";
            SecurityCodeComponent.screen2SubtitleSkin = "sknLbl3e4f56SSPReg30px";
            SecurityCodeComponent.screen2DescriptionText = "Enter Secure Access sent on your 9*****8865 & p*******************@Kony.com...........................";
            SecurityCodeComponent.screen2DescriptionSkin = "sknLbl424242SSP22px26";
            SecurityCodeComponent.screen2ErrorMsgText = "Code Expired. Try again";
            SecurityCodeComponent.screen2ErrorMsgSkin = "sknLblF54B5E26px";
            SecurityCodeComponent.screen2ResendBtnText = "kony.mb.Forgot.ReSend";
            SecurityCodeComponent.screen2ResendBtnSkin = "sknBtn0095e428px";
            SecurityCodeComponent.screen2RegisterDevLblText = "kony.mb.devReg.remMyDevice";
            SecurityCodeComponent.screen2RegisterDevLblSkin = "sknLbl424242SSPReg30px";
            SecurityCodeComponent.screen2SubmitBtnText = "kony.mb.Forgot.Verify";
            SecurityCodeComponent.screen2SubmitBtnEnabledSkin = "sknBtn0095e4RoundedffffffSSP26px";
            SecurityCodeComponent.screen2SubmitBtnDisabledSkin = "sknBtna0a0a0SSPReg26px";
            var SecurityQuestionsComponent = new com.temenos.infinity.mfa.SecurityQuestions({
                "height": "100%",
                "id": "SecurityQuestionsComponent",
                "isVisible": false,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "SecurityQuestions": {
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
            SecurityQuestionsComponent.objectServiceName1 = "RBObjects";
            SecurityQuestionsComponent.titleBgSkin = "sknFlxf9f9f9";
            SecurityQuestionsComponent.checkboxSelectedImg = "a.png";
            SecurityQuestionsComponent.titleMsgText = "kony.mb.MFA.SecurityQuestions";
            SecurityQuestionsComponent.isPostLogin = true;
            SecurityQuestionsComponent.objectName1 = "DbxUser";
            SecurityQuestionsComponent.titleMsgSkin = "sknLbl424242SSP26px";
            SecurityQuestionsComponent.checkboxEmptyImg = "tickmarkbox.png";
            SecurityQuestionsComponent.errorMsgText = "kony.mb.MFA.ErrorQnA";
            SecurityQuestionsComponent.action = "";
            SecurityQuestionsComponent.operationName1 = "verifyLoginMFASecurityQuestions";
            SecurityQuestionsComponent.errorMsgSkin = "sknLblF54B5E26px";
            SecurityQuestionsComponent.submitBtnText = "kony.mb.Forgot.Verify";
            SecurityQuestionsComponent.enableBtnSkin = "sknBtn0095e426pxEnabled";
            SecurityQuestionsComponent.registerDeviceText = "kony.mb.devReg.remMyDevice";
            SecurityQuestionsComponent.disableBtnSkin = "sknBtna0a0a0SSPReg26px";
            SecurityQuestionsComponent.registerDeviceSkin = "sknLbl424242SSPReg30px";
            var SCAComponent = new com.temenos.infinity.mfa.SCAComponent({
                "height": "100%",
                "id": "SCAComponent",
                "isVisible": false,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "SCAComponent": {
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
            SCAComponent.flowType = "";
            SCAComponent.servicekey = "";
            this.add(SecurityCodeComponent, SecurityQuestionsComponent, SCAComponent);
        };
        return [{
            "addWidgets": addWidgetsfrmMFAValidation,
            "enabledForIdleTimeout": true,
            "id": "frmMFAValidation",
            "init": controller.AS_Form_ce00262a1c8f4d0e98c2611d1055ddaf,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "postShow": controller.AS_Form_h366e5d4db384f6ea34a62c840d3f273,
            "preShow": function(eventobject) {
                controller.AS_Form_a704e63f21d24fbeb68c71ff0baac2e0(eventobject);
            },
            "skin": "sknFrmffffff"
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