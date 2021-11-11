define("MFAModule/userfrmMFASecurityCodeController", {
    keypadString: '',
    time: 10,
    pos: 0,
    maxNoOfCode: '',
    init: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.mfaDeviceBack);
    },
    mfaDeviceBack: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        if (navManager.getPreviousForm() === "frmMFAOption3") {
            navManager.goBack();
        } else if (navManager.getPreviousForm() === "frmMMTransferAmount" || navManager.getPreviousForm() === "frmMMReview") {
            navManager.navigateTo("frmMFAOption3", true);
        } else {
            kony.print("Current form" + navManager.getCurrentForm());
        }
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.btnVerify.setEnabled(false);
        this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
        this.view.flxResendTimer.setVisibility(false);
        //this.view.lblTimeRemaining.text = this.time+" seconds";
        this.view.lblTimeRemaining.text = "59" + " seconds";
        this.view.btnReSend.setVisibility(true);
        this.time = 59;
        // this.setLabel();
        this.view.btnReSend.onClick = this.ResendOTP;
        this.view.flxCheckBox.onClick = this.toggleCheckbox;
        this.view.btnVerify.onClick = this.onVerifyClick;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        this.view.flxCheckBox.onClick = this.deviceregOnclick;
        this.view.flxCode.setVisibility(true);
        this.view.lblError.setVisibility(false);
        var flowType = applicationManager.getPresentationUtility().MFA.getMFAFlowType();
        this.view.lblTimeRemaining.setVisibility(false);
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.title = "Security Code";
            this.view.flxHeader.isVisible = false;
        }
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        if (flowType == "LoginMFA" && (userPreferencesManager.isRememberMeOn() === true)) {
            this.view.flxRememberMyDevice.setVisibility(true);
        } else {
            this.view.flxRememberMyDevice.setVisibility(false);
        }
        this.clearKeypad();
        this.setKeypadActions();
    },
    onCancelClick: function() {
        applicationManager.getPresentationUtility().MFA.cancelMFAFlow();
    },
    deviceregOnclick: function() {
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        if (this.view.imgTermsAccepted.src === "tickmarkbox.png") {
            authMod.presentationController.rememberdeviceregflag = true;
            this.view.imgTermsAccepted.src = "a.png";
        } else {
            authMod.presentationController.rememberdeviceregflag = false;
            this.view.imgTermsAccepted.src = "tickmarkbox.png";
        }
    },
    setFormUI: function(mfaResponse) {
        this.view.btnVerify.setEnabled(false);
        this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
        this.view.flxResendTimer.setVisibility(false);
        if (mfaResponse.MFAAttributes.isOTPExpired) {
            this.view.lblError.text = kony.i18n.getLocalizedString("kony.mb.mfa.otpexpirymessage");
            this.view.lblError.setVisibility(true);
            this.clearKeypad();
        } else if (mfaResponse.MFAAttributes.remainingResendAttempts <= 0) {
            this.view.btnReSend.setVisibility(false);
            this.view.lblError.setVisibility(false);
        } else if (mfaResponse.MFAAttributes.remainingResendAttempts > 0) {
            this.view.btnReSend.setVisibility(true);
        }
        this.view.lblResendin.setVisibility(false);
        if (mfaResponse.MFAAttributes.sacCodeLength) this.maxNoOfCode = mfaResponse.MFAAttributes.sacCodeLength;
        this.view.customSecurityCode2.setMaxNoOfChars(this.maxNoOfCode);
        this.setFormUIBasedOnCommunicationType(mfaResponse);
        this.view.forceLayout();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setFormUIBasedOnCommunicationType: function(mfaResponse) {
        var communicationType = mfaResponse.MFAAttributes.communicationType;
        if (communicationType == "DISPLAY_NO_VALUE") {
            var customerCommunicationInfo = mfaResponse.MFAAttributes.customerCommunication;
            this.view.lblEnterInfoSubtitle.text = "Please enter the " + this.maxNoOfCode + " digit security code sent to your primary email/phone number.";
            this.view.flxDetails.setVisibility(false);
            this.view.lblEnterInfoSubtitle.setVisibility(true);
        } else if (communicationType == "DISPLAY_PRIMARY") {
            // this.view.lblEnterInfoSubtitle.text = "Please enter the "+ this.maxNoOfCode +" digit security code sent to";
            var phone = mfaResponse.MFAAttributes.customerCommunication.phone[0];
            var email = mfaResponse.MFAAttributes.customerCommunication.email[0];
            if (phone && email) {
                this.view.lblEnterSAC.text = "Enter Secure Access Code sent on your " + mfaResponse.MFAAttributes.customerCommunication.phone[0].masked + " & " + mfaResponse.MFAAttributes.customerCommunication.email[0].masked;
                //  this.view.lblMobNoValue.text = mfaResponse.MFAAttributes.customerCommunication.phone[0].masked;
                //  this.view.lblEmailIdValue.text = mfaResponse.MFAAttributes.customerCommunication.email[0].masked;
            } else if (email) {
                this.view.lblEnterSAC.text = "Enter Secure Access Code sent on your " + mfaResponse.MFAAttributes.customerCommunication.email[0].masked;
                // this.view.lblAnd.setVisibility(false);
                //   this.view.lblEmailIdValue.setVisibility(false);
            } else {
                this.view.lblEnterSAC.text = "Enter Secure Access Code sent on your " + mfaResponse.MFAAttributes.customerCommunication.phone[0].masked;
                //     this.view.lblEmailIdValue.setVisibility(false);
                //     this.view.lblAnd.setVisibility(false);
            }
            this.view.lblEnterInfoSubtitle.setVisibility(false);
            this.view.flxDetails.setVisibility(true);
        } else {
            this.view.lblEnterInfoSubtitle.text = "Please enter the " + this.maxNoOfCode + " digit security code";
            this.view.lblEnterInfoSubtitle.setVisibility(true);
            this.view.flxDetails.setVisibility(false);
        }
    },
    onVerifyClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var response = applicationManager.getPresentationUtility().MFA.getMFAResponse();
        var params = {};
        params = {
            "securityKey": response.MFAAttributes.securityKey,
            "otp": this.keypadString
        };
        applicationManager.getPresentationUtility().MFA.verifyOTP(params);
    },
    setKeypadChar: function(num) {
        if (this.keypadString.length === parseInt(this.maxNoOfCode)) return;
        this.keypadString = this.keypadString + num;
        this.view.customSecurityCode2.setSecurityCodeChar(this.pos, num);
        this.pos++;
        this.enableVerifyButton();
    },
    clearKeypad: function() {
        this.keypadString = '';
        this.pos = 0;
        this.clearKeypadChar();
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 0) {
            this.keypadString = '';
            for (i = 0; i < this.maxNoOfCode; i++) this.view.customSecurityCode2.setPlaceholder(i);
        }
        if (this.keypadString.length !== 0) {
            var clearpos = this.pos--;
            this.view.customSecurityCode2.setPlaceholder(clearpos - 1);
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        }
        this.enableVerifyButton();
    },
    setLabel: function() {
        kony.timer.schedule("OTPTimer", this.timerFunction, 1, true);
    },
    timerFunction: function() {
        this.time = this.time - 1;
        if (this.time === 1) {
            this.view.lblTimeRemaining.text = this.time + " second";
        } else if (this.time === 0) {
            kony.timer.cancel("OTPTimer");
            this.view.flxResendTimer.isVisible = false;
            this.view.btnReSend.isVisible = true;
        } else {
            this.view.lblTimeRemaining.text = this.time + " seconds";
        }
    },
    ResendOTP: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var response = applicationManager.getPresentationUtility().MFA.getMFAResponse();
        if (response.MFAAttributes.remainingResendAttempts >= 1) this.view.btnReSend.isVisible = true;
        else this.view.btnReSend.isVisible = false;
        response = applicationManager.getPresentationUtility().MFA.getMFAResponse();
        var params;
        if (response.MFAAttributes.hasOwnProperty("customerCommunication")) {
            params = {
                "phone": response.MFAAttributes.customerCommunication.phone[0].unmasked,
                "email": response.MFAAttributes.customerCommunication.email[0].unmasked,
                "securityKey": response.MFAAttributes.securityKey,
            };
        } else {
            params = applicationManager.getPresentationUtility().MFA.getPhoneAndEmail();
            params.securityKey = response.MFAAttributes.securityKey;
        }
        applicationManager.getPresentationUtility().MFA.resendOTP(params);
    },
    showIncorrectOTPError: function(response) {
        if (response.MFAAttributes && response.MFAAttributes.remainingFailedAttempts && response.MFAAttributes.remainingFailedAttempts > 0) {
            this.view.lblError.text = kony.i18n.getLocalizedString("kony.mb.mfa.invalidAccessCode") + " " + kony.i18n.getLocalizedString("kony.mb.mfa.youHaveOnly") + " " + response.MFAAttributes.remainingFailedAttempts + " " + kony.i18n.getLocalizedString("i18n.mfa.remainingAttempts");
            this.view.lblError.setVisibility(true);
            this.clearKeypad();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        } else if (response.MFAAttributes && response.MFAAttributes.remainingFailedAttempts === "0" && response.MFAAttributes.lockUser === "true") {
            var msg = kony.i18n.getLocalizedString("kony.mb.mfa.profileLockoutMessage") + response.MFAAttributes.lockoutTime + "minutes(s)";
            this.setErrorMessageAndLogout(msg);
        } else if (response.MFAAttributes && response.MFAAttributes.remainingFailedAttempts === "0" && response.MFAAttributes.logoutUser === "true") {
            var msg = kony.i18n.getLocalizedString("kony.mb.mfa.profileloginmessage");
            this.setErrorMessageAndLogout(msg);
        } else {
            this.view.lblError.text = response.dbpErrMsg;
            this.view.lblError.setVisibility(true);
            this.clearKeypad();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        }
        // this.clearKeypad();
        this.view.forceLayout();
        // applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setErrorMessageAndLogout: function(msg) {
        var navManager = applicationManager.getNavigationManager();
        var loginData = navManager.getCustomInfo("frmLoginToast");
        if (loginData) loginData.toastMessage = msg;
        else loginData = {
            "toastMessage": msg
        };
        navManager.setCustomInfo("frmLoginToast", loginData);
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.onLogout();
    },
    toggleCheckbox: function() {
        if (this.view.imgTermsAccepted.src === "tickmarkbox.png") {
            this.view.imgTermsAccepted.src = "a.png";
        } else if (this.view.imgTermsAccepted.src === "a.png") {
            this.view.imgTermsAccepted.src = "tickmarkbox.png";
        }
        this.view.forceLayout();
    },
    setKeypadActions: function() {
        var scope = this;
        this.view.keypad.btnOne.onClick = function() {
            scope.setKeypadChar("1");
        };
        this.view.keypad.btnTwo.onClick = function() {
            scope.setKeypadChar("2");
        };
        this.view.keypad.btnThree.onClick = function() {
            scope.setKeypadChar("3");
        };
        this.view.keypad.btnFour.onClick = function() {
            scope.setKeypadChar("4");
        };
        this.view.keypad.btnFive.onClick = function() {
            scope.setKeypadChar("5");
        };
        this.view.keypad.btnSix.onClick = function() {
            scope.setKeypadChar("6");
        };
        this.view.keypad.btnSeven.onClick = function() {
            scope.setKeypadChar("7");
        };
        this.view.keypad.btnEight.onClick = function() {
            scope.setKeypadChar("8");
        };
        this.view.keypad.btnNine.onClick = function() {
            scope.setKeypadChar("9");
        };
        this.view.keypad.btnZero.onClick = function() {
            scope.setKeypadChar("0");
        };
        this.view.keypad.imgClearKeypad.onTouchStart = function() {
            scope.clearKeypadChar();
        };
    },
    enableVerifyButton: function() {
        if (this.pos == this.maxNoOfCode) {
            this.view.btnVerify.setEnabled(true);
            this.view.btnVerify.skin = "sknBtn0095e4RoundedffffffSSP26px";
        } else {
            this.view.btnVerify.setEnabled(false);
            this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
        }
    }
});
define("MFAModule/frmMFASecurityCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ca72e4bae68f45129739527df24cc4ef: function AS_Form_ca72e4bae68f45129739527df24cc4ef(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_g3b0d53f5bc244ff94d1fdfe5903b993: function AS_Form_g3b0d53f5bc244ff94d1fdfe5903b993(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_fbb1437d9556416bac5f82b09eb654ec: function AS_BarButtonItem_fbb1437d9556416bac5f82b09eb654ec(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("MFAModule/frmMFASecurityCodeController", ["MFAModule/userfrmMFASecurityCodeController", "MFAModule/frmMFASecurityCodeControllerActions"], function() {
    var controller = require("MFAModule/userfrmMFASecurityCodeController");
    var controllerActions = ["MFAModule/frmMFASecurityCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
