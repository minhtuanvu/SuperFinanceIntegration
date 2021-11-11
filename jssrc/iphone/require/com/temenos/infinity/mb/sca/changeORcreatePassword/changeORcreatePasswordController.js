define("com/temenos/infinity/mb/sca/changeORcreatePassword/userchangeORcreatePasswordController", ['./changeORcreatePasswordDAO'], function(changeORcreatePasswordDAO) {
    const Password_CONTEXT = {
        changePasswordServiceName: "CHANGE_OLB_PASSWORD",
        createPasswordServiceName: "CREATE_OLB_PASSWORD",
        currentPassword: null,
        updatedPassword: null,
    };
    const SDKConstants = {
        "PIN_REQUEST": 100,
        "OKRA_OTP_GENERATED": 107,
        "TX_ACCEPTED": 101,
        "TX_DENIED": 102
    };
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.changeORcreatePasswordDAO = new changeORcreatePasswordDAO();
            this._objectServiceName1 = "";
            this._objectName1 = "";
            this._operationName1 = "";
            this._objectServiceName2 = "";
            this._objectName2 = "";
            this._operationName2 = "";
            this._objectServiceName3 = "";
            this._objectName3 = "";
            this._operationName3 = "";
            this._objectServiceName4 = "";
            this._objectName4 = "";
            this._operationName4 = "";
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineGetter(this, 'objectServiceName1', () => {
                return this._objectServiceName1;
            });
            defineSetter(this, 'objectServiceName1', value => {
                this._objectServiceName1 = value;
            });
            defineGetter(this, 'objectName1', () => {
                return this._objectName1;
            });
            defineSetter(this, 'objectName1', value => {
                this._objectName1 = value;
            });
            defineGetter(this, 'operationName1', () => {
                return this._operationName1;
            });
            defineSetter(this, 'operationName1', value => {
                this._operationName1 = value;
            });
            defineGetter(this, 'objectServiceName2', () => {
                return this._objectServiceName2;
            });
            defineSetter(this, 'objectServiceName2', value => {
                this._objectServiceName2 = value;
            });
            defineGetter(this, 'objectName2', () => {
                return this._objectName2;
            });
            defineSetter(this, 'objectName2', value => {
                this._objectName2 = value;
            });
            defineGetter(this, 'operationName2', () => {
                return this._operationName2;
            });
            defineSetter(this, 'operationName2', value => {
                this._operationName2 = value;
            });
            defineGetter(this, 'objectServiceName3', () => {
                return this._objectServiceName3;
            });
            defineSetter(this, 'objectServiceName3', value => {
                this._objectServiceName3 = value;
            });
            defineGetter(this, 'objectName3', () => {
                return this._objectName3;
            });
            defineSetter(this, 'objectName3', value => {
                this._objectName3 = value;
            });
            defineGetter(this, 'operationName3', () => {
                return this._operationName3;
            });
            defineSetter(this, 'operationName3', value => {
                this._operationName3 = value;
            });
            defineGetter(this, 'objectServiceName4', () => {
                return this._objectServiceName4;
            });
            defineSetter(this, 'objectServiceName4', value => {
                this._objectServiceName4 = value;
            });
            defineGetter(this, 'objectName4', () => {
                return this._objectName4;
            });
            defineSetter(this, 'objectName4', value => {
                this._objectName4 = value;
            });
            defineGetter(this, 'operationName4', () => {
                return this._operationName4;
            });
            defineSetter(this, 'operationName4', value => {
                this._operationName4 = value;
            });
        },
        preShowCreatePassword: function() {
            this.resetUI();
            this.setFlowActions();
            this.checkPasswordStatus();
        },
        setFlowActions: function() {
            const scopeObj = this;
            this.view.flxBack.onClick = function() {
                scopeObj.navigateToPreviousForm();
            };
            this.view.btnCancel.onClick = function() {
                scopeObj.navigateToPreviousForm();
            };
            this.view.tbxCurrentPassword.onTextChange = function() {
                scopeObj.view.flxErrorMsg.setVisibility(false);
            };
            this.view.tbxNewPassword.onTouchEnd = function() {
                scopeObj.enableSetPasswordButtonAndTickMark();
            };
            this.view.tbxNewPassword.onTextChange = function() {
                scopeObj.view.flxErrorMsg.setVisibility(false);
                scopeObj.enableSetPasswordButtonAndTickMark();
            };
            this.view.tbxReEnterPassword.onTouchEnd = function() {
                scopeObj.enableSetPasswordButtonAndTickMark();
            };
            this.view.tbxReEnterPassword.onTextChange = function() {
                scopeObj.view.flxErrorMsg.setVisibility(false);
                scopeObj.enableSetPasswordButtonAndTickMark();
            };
            this.view.flxCurrentPasswordVisiblityToggle.onTouchEnd = function() {
                scopeObj.toggleCurrentPasswordVisibility();
            };
            this.view.flxNewPasswordVisiblityToggle.onTouchEnd = function() {
                scopeObj.toggleNewPasswordVisibility();
            };
            this.view.btnChangePassword.onClick = function() {
                Password_CONTEXT.currentPassword = scopeObj.view.tbxCurrentPassword.text;
                Password_CONTEXT.updatedPassword = scopeObj.view.tbxReEnterPassword.text;
                scopeObj.changePassword();
            };
            this.view.btnCreatePassword.onClick = function() {
                Password_CONTEXT.updatedPassword = scopeObj.view.tbxReEnterPassword.text;
                scopeObj.createPassword();
            };
            this.view.btnBack2Settings.onClick = function() {
                const navManager = applicationManager.getNavigationManager();
                navManager.navigateTo("frmSettings");
            };
        },
        resetUI: function() {
            this.view.flxBack.setVisibility(true);
            this.view.btnCancel.setVisibility(true);
            this.view.flxErrorMsg.setVisibility(false);
            this.view.flxMainContainer.setVisibility(true);
            this.view.flxSuccessContainer.setVisibility(false);
            this.view.tbxCurrentPassword.text = "";
            this.view.tbxNewPassword.text = "";
            this.view.tbxReEnterPassword.text = "";
            Password_CONTEXT.currentPassword = "";
            Password_CONTEXT.updatedPassword = "";
            this.view.tbxCurrentPassword.secureTextEntry = true;
            this.view.tbxNewPassword.secureTextEntry = true;
            this.view.tbxReEnterPassword.secureTextEntry = true;
            this.view.imgCurrentPasswordVisiblityToggle.src = "view.png";
            this.view.imgNewPasswordVisiblityToggle.src = "view.png";
            this.view.imgReEnterPasswordMatch.src = "tickmark.png";
            this.view.btnCreatePassword.setEnabled(false);
            this.view.btnCreatePassword.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnChangePassword.setEnabled(false);
            this.view.btnChangePassword.skin = "sknBtna0a0a0SSPReg26px";
        },
        showChangePasswordScreen: function() {
            this.view.flxMainContainer.setVisibility(true);
            this.view.flxSuccessContainer.setVisibility(false);
            this.view.lblScreenName.text = "Change Password";
            this.view.lblTopMsg.text = "Please enter the current password and choose your new password";
            this.view.flxCurrentPassword.setVisibility(true);
            this.view.btnChangePassword.setVisibility(true);
            this.view.btnCreatePassword.setVisibility(false);
        },
        showCreatePasswordScreen: function() {
            this.view.flxMainContainer.setVisibility(true);
            this.view.flxSuccessContainer.setVisibility(false);
            this.view.lblScreenName.text = "Create Password";
            this.view.lblTopMsg.text = "Create a password to sign in online banking using password";
            this.view.flxCurrentPassword.setVisibility(false);
            this.view.btnChangePassword.setVisibility(false);
            this.view.btnCreatePassword.setVisibility(true);
        },
        showResultScreen: function() {
            this.view.flxMainContainer.setVisibility(false);
            this.view.flxSuccessContainer.setVisibility(true);
            this.view.flxBack.setVisibility(false);
            this.view.btnCancel.setVisibility(false);
        },
        enableSetPasswordButtonAndTickMark: function() {
            const scopeObj = this;
            const isChangePasswordFlow = this.view.flxCurrentPassword.isVisible;
            const isNewPasswordFilled = (scopeObj.view.tbxNewPassword.text !== '' && scopeObj.view.tbxNewPassword.text !== null && scopeObj.view.tbxNewPassword.text !== undefined) ? true : false;
            const isReEnterPasswordFilled = (scopeObj.view.tbxReEnterPassword.text !== '' && scopeObj.view.tbxReEnterPassword.text !== null && scopeObj.view.tbxReEnterPassword.text !== undefined) ? true : false;
            if (isChangePasswordFlow) {
                const isCurrentPasswordFilled = (scopeObj.view.tbxCurrentPassword.text !== '' && scopeObj.view.tbxCurrentPassword.text !== null && scopeObj.view.tbxCurrentPassword.text !== undefined) ? true : false;
                if (isCurrentPasswordFilled && isNewPasswordFilled && isReEnterPasswordFilled && this.doPasswordsMatch()) {
                    this.view.btnChangePassword.setEnabled(true);
                    this.view.btnChangePassword.skin = "sknBtn0095e426pxEnabled";
                    this.view.flxSecurityRequirements.setVisibility(false);
                } else {
                    this.view.btnChangePassword.setEnabled(false);
                    this.view.btnChangePassword.skin = "sknBtna0a0a0SSPReg26px";
                    this.view.flxSecurityRequirements.setVisibility(true);
                }
            } else {
                if (isNewPasswordFilled && isReEnterPasswordFilled && this.doPasswordsMatch()) {
                    this.view.btnCreatePassword.setEnabled(true);
                    this.view.btnCreatePassword.skin = "sknBtn0095e426pxEnabled";
                    this.view.flxSecurityRequirements.setVisibility(false);
                } else {
                    this.view.btnCreatePassword.setEnabled(false);
                    this.view.btnCreatePassword.skin = "sknBtna0a0a0SSPReg26px";
                    this.view.flxSecurityRequirements.setVisibility(true);
                }
            }
            this.changeTickIcon();
        },
        changeTickIcon: function() {
            if (this.doPasswordsMatch()) {
                this.view.imgReEnterPasswordMatch.src = "greentick.png";
            } else {
                this.view.imgReEnterPasswordMatch.src = "tickmark.png";
            }
        },
        doPasswordsMatch: function() {
            const newPassword = this.view.tbxNewPassword.text;
            const reEnteredPassword = this.view.tbxReEnterPassword.text;
            if (newPassword === reEnteredPassword) {
                return true;
            }
            return false;
        },
        toggleCurrentPasswordVisibility: function() {
            if (this.view.imgCurrentPasswordVisiblityToggle.src === "view.png") {
                this.view.imgCurrentPasswordVisiblityToggle.src = "viewactive.png";
                this.view.tbxCurrentPassword.secureTextEntry = false;
            } else {
                this.view.imgCurrentPasswordVisiblityToggle.src = "view.png";
                this.view.tbxCurrentPassword.secureTextEntry = true;
            }
        },
        toggleNewPasswordVisibility: function() {
            if (this.view.imgNewPasswordVisiblityToggle.src === "view.png") {
                this.view.imgNewPasswordVisiblityToggle.src = "viewactive.png";
                this.view.tbxNewPassword.secureTextEntry = false;
            } else {
                this.view.imgNewPasswordVisiblityToggle.src = "view.png";
                this.view.tbxNewPassword.secureTextEntry = true;
            }
        },
        navigateToPreviousForm: function() {
            const ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
            ntf.navigate();
        },
        getPasswordPolicies: function() {
            const servicePayload = {
                objServiceName: this._objectServiceName4,
                objName: this._objectName4,
                operationName: this._operationName4,
                payload: {
                    "ruleForCustomer": true,
                    "policyForCustomer": true
                },
                successCallback: this.getPasswordPoliciesSuccessCallback,
                errorCallback: this.getPasswordPoliciesErrorCallback
            };
            applicationManager.getPresentationUtility().showLoadingScreen();
            this.changeORcreatePasswordDAO.callPasswordService(servicePayload);
        },
        getPasswordPoliciesSuccessCallback: function(res) {
            this.view.rtxRulesPwd.text = res.scapasswordpolicy;
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        getPasswordPoliciesErrorCallback: function(err) {
            kony.print("getPasswordPolicies Service Failure" + JSON.stringify(err));
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        checkPasswordStatus: function() {
            const serviceDAOPayload = {
                objServiceName: this._objectServiceName1,
                objName: this._objectName1,
                operationName: this._operationName1,
                payload: "",
                successCallback: this.getPasswordStatusSuccessCallback,
                errorCallback: this.getPasswordStatusErrorCallback
            };
            applicationManager.getPresentationUtility().showLoadingScreen();
            this.changeORcreatePasswordDAO.callPasswordService(serviceDAOPayload);
        },
        getPasswordStatusSuccessCallback: function(res) {
            if (res.isPasswordPresent && res.isPasswordPresent === "true") {
                this.showChangePasswordScreen();
            } else {
                this.showCreatePasswordScreen();
            }
            this.getPasswordPolicies();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        getPasswordStatusErrorCallback: function(err) {
            kony.print(err);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        changePassword: function() {
            const scopeObj = this;
            const currentForm = kony.application.getCurrentForm();
            const userManager = applicationManager.getUserPreferencesManager();
            const userName = userManager.getUserObj().userName;
            const OKRAcontext = Password_CONTEXT.changePasswordServiceName;
            scopeObj.view.sdk.generateOCRAOTP(userName, OKRAcontext, function(status, otpJSON) {
                const otp = JSON.parse(otpJSON).otp;
                const serviceName = Password_CONTEXT.changePasswordServiceName;
                const context = Password_CONTEXT.changePasswordServiceName;
                if (SDKConstants.PIN_REQUEST === status) {
                    var pinLength = JSON.parse(otpJSON).MAX_LENGTH;
                    var sdk = hidApplicationSDKManager.getSdkInstance();
                    if (currentForm.sdk) {
                        currentForm.remove(sdk);
                    }
                    currentForm.add(sdk);
                    currentForm.sdk.setVisibility(true);
                    currentForm.sdk.showPinDialog(pinLength);
                } else if (SDKConstants.OKRA_OTP_GENERATED === status) {
                    currentForm.sdk.hidePinDialog();
                    if (currentForm.sdk) {
                        currentForm.remove(currentForm.sdk);
                    }
                    applicationManager.getPresentationUtility().showLoadingScreen();
                    const servicePayload = {
                        objServiceName: scopeObj._objectServiceName2,
                        objName: scopeObj._objectName2,
                        operationName: scopeObj._operationName2,
                        payload: {
                            "serviceName": serviceName,
                            "isMobile": true,
                            "otp": otp,
                            "context": context,
                            "password": Password_CONTEXT.updatedPassword,
                            "currentPassword": Password_CONTEXT.currentPassword
                        },
                        successCallback: scopeObj.changePasswordSuccessCallback,
                        errorCallback: scopeObj.changePasswordFailureCallback
                    };
                    scopeObj.changeORcreatePasswordDAO.callPasswordService(servicePayload);
                }
            });
        },
        changePasswordSuccessCallback: function(res) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.view.imgSuccess.src = "confirmation_tick.png";
            this.view.lblSuccessHeader.text = "Password Changed";
            this.view.lblSuccessBody.text = "You have changed the password successfully.  You can now sign in to online banking using the new password.";
            this.showResultScreen();
        },
        changePasswordFailureCallback: function(errMsg) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.view.flxErrorMsg.setVisibility(true);
            this.view.lblErrorMsg.text = errMsg ? errMsg : "Password updation Failed.";
        },
        createPassword: function() {
            const scopeObj = this;
            const currentForm = kony.application.getCurrentForm();
            const userManager = applicationManager.getUserPreferencesManager();
            const userName = userManager.getUserObj().userName;
            const OKRAcontext = Password_CONTEXT.createPasswordServiceName;
            scopeObj.view.sdk.generateOCRAOTP(userName, OKRAcontext, function(status, otpJSON) {
                const otp = JSON.parse(otpJSON).otp;
                const context = Password_CONTEXT.createPasswordServiceName;
                if (SDKConstants.PIN_REQUEST === status) {
                    var pinLength = JSON.parse(otpJSON).MAX_LENGTH;
                    var sdk = hidApplicationSDKManager.getSdkInstance();
                    if (currentForm.sdk) {
                        currentForm.remove(sdk);
                    }
                    currentForm.add(sdk);
                    currentForm.sdk.setVisibility(true);
                    currentForm.sdk.showPinDialog(pinLength);
                } else if (SDKConstants.OKRA_OTP_GENERATED === status) {
                    currentForm.sdk.hidePinDialog();
                    if (currentForm.sdk) {
                        currentForm.remove(currentForm.sdk);
                    }
                    applicationManager.getPresentationUtility().showLoadingScreen();
                    const servicePayload = {
                        objServiceName: scopeObj._objectServiceName3,
                        objName: scopeObj._objectName3,
                        operationName: scopeObj._operationName3,
                        payload: {
                            "serviceName": Password_CONTEXT.createPasswordServiceName,
                            "isMobile": true,
                            "otp": otp,
                            "context": context,
                            "password": Password_CONTEXT.updatedPassword
                        },
                        successCallback: scopeObj.createPasswordSuccessCallback,
                        errorCallback: scopeObj.createPasswordFailureCallback
                    };
                    scopeObj.changeORcreatePasswordDAO.callPasswordService(servicePayload);
                }
            });
        },
        createPasswordSuccessCallback: function(res) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.view.imgSuccess.src = "confirmation_tick.png";
            this.view.lblSuccessHeader.text = "Password Created";
            this.view.lblSuccessBody.text = "New password has been created successfully.  You can now sign in to online banking using this password.";
            this.showResultScreen();
        },
        createPasswordFailureCallback: function(errMsg) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.view.flxErrorMsg.setVisibility(true);
            this.view.lblErrorMsg.text = errMsg ? errMsg : "Password creation Failed.";
        },
    };
});
define("com/temenos/infinity/mb/sca/changeORcreatePassword/changeORcreatePasswordControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_b0f692849e524f36aa89b323e321af25: function AS_FlexContainer_b0f692849e524f36aa89b323e321af25(eventobject) {
        var self = this;
        return self.preShowCreatePassword.call(this);
    }
});
define("com/temenos/infinity/mb/sca/changeORcreatePassword/changeORcreatePasswordController", ["com/temenos/infinity/mb/sca/changeORcreatePassword/userchangeORcreatePasswordController", "com/temenos/infinity/mb/sca/changeORcreatePassword/changeORcreatePasswordControllerActions"], function() {
    var controller = require("com/temenos/infinity/mb/sca/changeORcreatePassword/userchangeORcreatePasswordController");
    var actions = require("com/temenos/infinity/mb/sca/changeORcreatePassword/changeORcreatePasswordControllerActions");
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
