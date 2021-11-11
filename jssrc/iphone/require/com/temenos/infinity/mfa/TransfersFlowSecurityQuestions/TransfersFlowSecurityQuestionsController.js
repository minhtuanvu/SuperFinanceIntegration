define("com/temenos/infinity/mfa/TransfersFlowSecurityQuestions/userTransfersFlowSecurityQuestionsController", ['./TransferFlowSecurityQuestionsDAO'], function(TransferFlowSecurityQuestionsDAO) {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._objectServiceName1 = "",
                this._objectName1 = "",
                this._operationName1 = "",
                this._titleBgSkin = "";
            this._titleMsgSkin = "";
            this._errorMsgSkin = "";
            this._enableBtnSkin = "";
            this._disableBtnSkin = "";
            this._registerDeviceSkin = "";
            this._checkboxEmptyImg = "";
            this._checkboxSelectedImg = "";
            this._titleMsgText = "";
            this._errorMsgText = "";
            this._submitBtnText = "";
            this._registerDeviceText = "";
            this.MFAResponse = "";
            this.flowType = "";
            this.servicekey = "";
            this.MFAType = "";
            this.userName = "";
            this.communicationType = "";
            this.mfaAttributes = "";
            this.serviceId = "";
            this.TransferFlowSecurityQuestionsDAO = new TransferFlowSecurityQuestionsDAO();
            this._isPostLogin = true;
            this._action = "";
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineSetter(this, "objectServiceName1", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._objectServiceName1 = val;
                }
            });
            defineGetter(this, "objectServiceName1", function() {
                return this._objectServiceName1;
            });
            defineSetter(this, "objectName1", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._objectName1 = val;
                }
            });
            defineGetter(this, "objectName1", function() {
                return this._objectName1;
            });
            defineSetter(this, "operationName1", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._operationName1 = val;
                }
            });
            defineGetter(this, "operationName1", function() {
                return this._operationName1;
            });
            defineSetter(this, "titleBgSkin", function(val) {
                if ((typeof val === "string") && (val !== "")) {
                    this._titleBgSkin = val;
                }
            });
            defineGetter(this, "titleBgSkin", function() {
                return this._titleBgSkin;
            });
            defineSetter(this, "titleMsgSkin", function(val) {
                if ((typeof val === "string") && (val !== "")) {
                    this._titleMsgSkin = val;
                }
            });
            defineGetter(this, "titleMsgSkin", function() {
                return this._titleMsgSkin;
            });
            defineSetter(this, "errorMsgSkin", function(val) {
                if ((typeof val === "string") && (val !== "")) {
                    this._errorMsgSkin = val;
                }
            });
            defineGetter(this, "errorMsgSkin", function() {
                return this._errorMsgSkin;
            });
            defineSetter(this, "enableBtnSkin", function(val) {
                if ((typeof val === "string") && (val !== "")) {
                    this._enableBtnSkin = val;
                }
            });
            defineGetter(this, "enableBtnSkin", function() {
                return this._enableBtnSkin;
            });
            defineSetter(this, "disableBtnSkin", function(val) {
                if ((typeof val === "string") && (val !== "")) {
                    this._disableBtnSkin = val;
                }
            });
            defineGetter(this, "disableBtnSkin", function() {
                return this._disableBtnSkin;
            });
            defineSetter(this, "registerDeviceSkin", function(val) {
                if ((typeof val === "string") && (val !== "")) {
                    this._registerDeviceSkin = val;
                }
            });
            defineGetter(this, "registerDeviceSkin", function() {
                return this._registerDeviceSkin;
            });
            defineSetter(this, "checkboxEmptyImg", function(val) {
                if ((typeof val === "string") && (val !== "")) {
                    this._checkboxEmptyImg = val;
                }
            });
            defineGetter(this, "checkboxEmptyImg", function() {
                return this._checkboxEmptyImg;
            });
            defineSetter(this, "checkboxSelectedImg", function(val) {
                if ((typeof val === "string") && (val !== "")) {
                    this._checkboxSelectedImg = val;
                }
            });
            defineGetter(this, "checkboxSelectedImg", function() {
                return this._checkboxSelectedImg;
            });
            defineSetter(this, "titleMsgText", function(val) {
                if ((typeof val === "string") && (val !== "")) {
                    this._titleMsgText = val;
                }
            });
            defineGetter(this, "titleMsgText", function() {
                return this._titleMsgText;
            });
            defineSetter(this, "errorMsgText", function(val) {
                if ((typeof val === "string") && (val !== "")) {
                    this._errorMsgText = val;
                }
            });
            defineGetter(this, "errorMsgText", function() {
                return this._errorMsgText;
            });
            defineSetter(this, "submitBtnText", function(val) {
                if ((typeof val === "string") && (val !== "")) {
                    this._submitBtnText = val;
                }
            });
            defineGetter(this, "submitBtnText", function() {
                return this._submitBtnText;
            });
            defineSetter(this, "registerDeviceText", function(val) {
                if ((typeof val === "string") && (val !== "")) {
                    this._registerDeviceText = val;
                }
            });
            defineGetter(this, "registerDeviceText", function() {
                return this._registerDeviceText;
            });
            defineSetter(this, "isPostLogin", function(val) {
                if ((typeof val === 'boolean')) {
                    this._isPostLogin = val;
                }
            });
            defineGetter(this, "isPostLogin", function() {
                return this._isPostLogin;
            });
            defineSetter(this, "action", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._action = val;
                }
            });
            defineGetter(this, "action", function() {
                return this._action;
            });
            defineSetter(this, "headerMsgText", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._headerMsgText = val;
                }
            });
            defineGetter(this, "headerMsgText", function() {
                return this._headerMsgText;
            });
        },
        setContext: function(mfaJSON) {
            this.initMFAFlow(mfaJSON);
        },
        preShow: function() {
            const scopeObj = this;
            this.setTextFromi18n();
            this.resetUI();
            /* if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
               this.view.flxHeader.isVisible = true;
             } else {
               this.view.flxHeader.isVisible = false;
             }*/
            this.view.flxSecurityQuestionHeader.setVisibility(true);
            this.view.btnVerify.setEnabled(false);
            this.view.btnVerify.onClick = this.onVerify;
            this.view.flxCheckBox.onClick = this.deviceregOnclick;
            this.view.btnSecurityQuestionCancel.onClick = this.onCancelClick;
            this.view.flxSecurityQuestionBack.onTouchEnd = this.onBackclick;
            this.view.lblError.setVisibility(false);
            /*
            // AAC-7691: Removing option for Device Registration
            let flowType = scopeObj.getMFAFlowType();
            var userPreferencesManager = applicationManager.getUserPreferencesManager();
            this.view.flxRememberMyDevice.setVisibility(flowType === "LoginMFA" && (userPreferencesManager.isRememberMeOn() === true));
            */
        },
        resetUI: function() {
            this.assignDefaultSkins();
            this.assignDefaultText();
        },
        assignDefaultSkins: function() {
            this.view.flxSecurityQuestionHeader.skin = this._titleBgSkin;
            this.view.lblSecurityQuestions.skin = this._titleMsgSkin;
            this.view.lblError.skin = this._errorMsgSkin;
            this.view.btnVerify.skin = this._disableBtnSkin;
            this.view.lblRememberMyDevice.skin = this._registerDeviceSkin;
            this.view.imgTermsAccepted.src = this._checkboxEmptyImg;
        },
        assignDefaultText: function() {
            this.view.lblSecurityQuestions.text = this._titleMsgText;
            this.view.lblError.text = this._errorMsgText;
            this.view.btnVerify.text = this._submitBtnText;
            this.view.lblRememberMyDevice.text = this._registerDeviceText;
        },
        setTextFromi18n: function() {
            this._titleMsgText = this.getStringFromi18n(this._titleMsgText);
            this._errorMsgText = this.getStringFromi18n(this._errorMsgText);
            this._submitBtnText = this.getStringFromi18n(this._submitBtnText);
            this._registerDeviceText = this.getStringFromi18n(this._registerDeviceText);
        },
        getStringFromi18n: function(stringValue) {
            return kony.i18n.getLocalizedString(stringValue) ? kony.i18n.getLocalizedString(stringValue) : stringValue;
        },
        deviceregOnclick: function() {
            const scopeObj = this;
            if (this.view.imgTermsAccepted.src === this._checkboxEmptyImg) {
                if (scopeObj.rememberDeviceRegFlag) scopeObj.rememberDeviceRegFlag(true);
                this.view.imgTermsAccepted.src = this._checkboxSelectedImg;
            } else {
                if (scopeObj.rememberDeviceRegFlag) scopeObj.rememberDeviceRegFlag(false);
                this.view.imgTermsAccepted.src = this._checkboxEmptyImg;
            }
        },
        setFormUI: function(mfaAttributes) {
            this.view.btnVerify.setEnabled(false);
            this.view.btnVerify.skin = this._disableBtnSkin;
            this.view.flxSecurityQuestionBack.setVisibility(false);
            this.view.lblSecurityQuestionHeader.setVisibility(true);
            this.view.lblSecurityQuestionHeader.text = this._headerMsgText;
            if (mfaAttributes.remainingFailedAttempts > 0) {
                this.view.lblError.text = "Invalid answers. You have only " + " " + mfaAttributes.remainingFailedAttempts + " " + " more attempt(s) left!";
                this.view.lblError.setVisibility(true);
                this.setSecurityQuestions(mfaAttributes);
            } else if (mfaAttributes.remainingFailedAttempts === "0" && mfaAttributes.lockUser === "true") {
                let msg = "Authentication failed. Your profile is locked for " + mfaAttributes.lockoutTime + "minutes(s)";
                this.setErrorMessageAndLogout(msg, true);
                return;
            } else if (mfaAttributes.remainingFailedAttempts === "0" && mfaAttributes.logoutUser === "true") {
                let msg = "You are signed out as you have exceeded the maximum allowed authentication attempts. Please sign in to continue.";
                this.setErrorMessageAndLogout(msg, true);
                return;
            } else {
                this.view.lblError.setVisibility(false);
                this.setSecurityQuestions(mfaAttributes);
            }
            this.view.forceLayout();
            //this.onRequestEnd();
        },
        setSecurityQuestions: function(mfaAttributes) {
            var secQuestionsData = mfaAttributes.securityQuestions;
            for (let i = 0; i < mfaAttributes.securityQuestions.length; i++) {
                secQuestionsData[i].customerAnswer = "";
            }
            var data = secQuestionsData;
            var segdata = [];
            for (let i = 0; i < data.length; i++) {
                var eachdata = {
                    "lblQuestion": data[i].Question,
                    "SecurityQuestion_id": data[i].SecurityQuestion_id,
                    "tbxAnswer": {
                        "text": data[i].customerAnswer,
                        "onTextChange": this.EnableButton
                    }
                };
                segdata.push(eachdata);
            }
            this.view.segSecurityQuestions.setData(segdata);
        },
        setErrorMessageAndLogout: function(msg, isLogoutUser) {
            if (this.onFailureCallback) this.onFailureCallback({
                "errorMessage": msg,
                "isLogoutUser": isLogoutUser
            });
        },
        onCancelClick: function() {
            const scopeObj = this;
            if (scopeObj.onCancel) scopeObj.onCancel();
        },
        onBackclick: function() {
            const scopeObj = this;
            if (scopeObj.onBack) scopeObj.onBack();
        },
        onVerify: function() {
            //this.onRequestStart();
            this.view.lblError.setVisibility(false);
            var params = this.onSaveAnswerSecurityQuestions(this.view.segSecurityQuestions.data);
            this.verifySecurityQuestions(params);
        },
        onSaveAnswerSecurityQuestions: function(securityQuestions) {
            var data = [];
            for (var i = 0; i < securityQuestions.length; i++) {
                data[i] = {};
                data[i].customerAnswer = securityQuestions[i].tbxAnswer.text;
                data[i].questionId = securityQuestions[i].SecurityQuestion_id;
            }
            return data;
        },
        EnableButton: function() {
            var data = this.view.segSecurityQuestions.data;
            for (var i = 0; i < data.length; i++) {
                if (data[i].tbxAnswer.text === "") {
                    this.view.btnVerify.setEnabled(false);
                    this.view.btnVerify.skin = this._disableBtnSkin;
                    return;
                }
            }
            this.view.btnVerify.setEnabled(true);
            this.view.btnVerify.skin = this._enableBtnSkin;
        },
        showIncorrectSecurityAnswerError: function(error) {
            this.view.lblError.setVisibility(true);
            this.view.lblError.text = error.dbpErrMsg;
            //this.onRequestEnd();
            this.view.forceLayout();
        },
        //=================================================================    
        initMFAFlow: function(mfaJSON) {
            this.setMFAResponse(mfaJSON); //mfaJSON.response
            this.setMFAFlowType(mfaJSON.flowType);
            this.setServiceId(mfaJSON.serviceName);
            this.setServicekey(mfaJSON.MFAAttributes.serviceKey); //mfaJSON.response.MFAAttributes.serviceKey
            this.setMFAType(mfaJSON.MFAAttributes.MFAType); //mfaJSON.response.MFAAttributes.MFAType
            //this.setUserName(mfaJSON.userName ? mfaJSON.userName : "");
            this.setCommunicationType(mfaJSON.communicationType);
            this.navigateAndSetSecurityQuestions();
        },
        setMFAResponse: function(MFAResponse) {
            if (MFAResponse.MFAAttributes && MFAResponse.MFAAttributes.customerCommunication) {
                for (let i in MFAResponse.MFAAttributes.customerCommunication.phone) MFAResponse.MFAAttributes.customerCommunication.phone[i].unmasked = MFAResponse.MFAAttributes.customerCommunication.phone[i].referenceId;
                for (let j in MFAResponse.MFAAttributes.customerCommunication.email) MFAResponse.MFAAttributes.customerCommunication.email[j].unmasked = MFAResponse.MFAAttributes.customerCommunication.email[j].referenceId;
            }
            this.MFAResponse = MFAResponse;
        },
        getMFAResponse: function() {
            return this.MFAResponse;
        },
        setMFAFlowType: function(flowType) {
            this.flowType = flowType;
        },
        getMFAFlowType: function() {
            return this.flowType;
        },
        setServicekey: function(servicekey) {
            this.servicekey = servicekey;
        },
        getServicekey: function() {
            return this.servicekey;
        },
        setMFAType: function(MFAType) {
            this.MFAType = MFAType;
        },
        getMFAType: function() {
            return this.MFAType;
        },
        setUserName: function(userName) {
            this.userName = userName;
        },
        getUserName: function() {
            return this.userName;
        },
        setCommunicationType: function(communicationType) {
            this.communicationType = communicationType;
        },
        getCommunicationType: function() {
            return this.communicationType;
        },
        setServiceId: function(serviceId) {
            this.serviceId = serviceId;
        },
        getServiceId: function() {
            return this.serviceId;
        },
        navigateAndSetSecurityQuestions: function() {
            // this.onRequestStart();
            let mfaAttributes = this.getMFAResponse().MFAAttributes;
            this.setFormUI(mfaAttributes);
        },
        navigateToSecurityQuestion: function() {
            var mfaAttributes = this.getMFAResponse().MFAAttributes;
            this.setFormUI(mfaAttributes);
        },
        verifySecurityQuestions: function(data) {
            var inputparams = {
                "MFAAttributes": {
                    "serviceName": this.getServiceId(),
                    "serviceKey": this.getServicekey(),
                    "securityQuestions": data
                }
            };
            inputparams.Action = this.MFAResponse.action;
            this.verifySecurityQuestionsUtility(inputparams);
        },
        verifySecurityQuestionsUtility: function(params) {
            this.TransferFlowSecurityQuestionsDAO.verifyLoginMFASecurityQuestions(this._objectServiceName1, this._objectName1, this._operationName1, params, this.verifyAnswersSuccess.bind(this), this.verifyAnswersFailure.bind(this));
        },
        verifyAnswersSuccess: function(response) {
            const scopeObj = this;
            if (response.MFAAttributes) {
                scopeObj.setMFAResponse(response);
                scopeObj.navigateToSecurityQuestion();
            } else {
                if (scopeObj.onSuccessCallback) scopeObj.onSuccessCallback(response);
            }
        },
        verifyAnswersFailure: function(error) {
            if (!(error.serverErrorRes.dbpErrCode >= 10500 && error.serverErrorRes.dbpErrCode <= 10700)) {
                this.setErrorMessageAndLogout(error, false);
            } else {
                this.showIncorrectSecurityAnswerError(error.serverErrorRes);
            }
        },
    };
});
define("com/temenos/infinity/mfa/TransfersFlowSecurityQuestions/TransfersFlowSecurityQuestionsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_ef83c3b8434747339c11c8425f8e4794: function AS_FlexContainer_ef83c3b8434747339c11c8425f8e4794(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});
define("com/temenos/infinity/mfa/TransfersFlowSecurityQuestions/TransfersFlowSecurityQuestionsController", ["com/temenos/infinity/mfa/TransfersFlowSecurityQuestions/userTransfersFlowSecurityQuestionsController", "com/temenos/infinity/mfa/TransfersFlowSecurityQuestions/TransfersFlowSecurityQuestionsControllerActions"], function() {
    var controller = require("com/temenos/infinity/mfa/TransfersFlowSecurityQuestions/userTransfersFlowSecurityQuestionsController");
    var actions = require("com/temenos/infinity/mfa/TransfersFlowSecurityQuestions/TransfersFlowSecurityQuestionsControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
