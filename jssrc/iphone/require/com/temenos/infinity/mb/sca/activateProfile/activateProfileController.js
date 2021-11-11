define("com/temenos/infinity/mb/sca/activateProfile/useractivateProfileController", function() {
    var provisionConstants = {
        "PROVISION_STARTED": 1,
        "PROVISION_FINISHED": 2,
        "PROVISION_FAILED": 0,
        "PROVISION_ERROR": -1,
        "PIN_REQUEST": 100
    }
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._headerSkin = "";
            this._headerTextSkin = "";
            this._headerCancelButtonSkin = "";
            this._errorMessageSkin = "";
            this._textBoxNormalSkin = "";
            this._textBoxNormalFocusSkin = "";
            this._textBoxErrorSkin = "";
            this._buttonEnabledSkin = "";
            this._buttonDisabledSkin = "";
            this._forgetPasswordSkin = "";
            this._screen2MessageSkin = "";
            this._labelSkin = "";
            this._passwordRulesLabelSkin = "";
            this._passwordRulesSkin = "";
            this._screen3MessageSkin = "";
            this._textVisiblityOffIcon = "";
            this._textVisiblityOnIcon = "";
            this._tickGrayIcon = "";
            this._tickGreenIcon = "";
            this._successTickIcon = "";
            this._screen1HeaderMessageText = "";
            this._screen1HeaderCancelText = "";
            this._screen1DescriptionText = "";
            this._screen1ErrorMessageText = "";
            this._screen1TextBox1PlaceholderText = "";
            this._screen1TextBox2PlaceholderText = "";
            this._screen1SubmitBtnText = "";
            this._screen1ForgetPasswordBtnText = "";
            this._screen2HeaderMessageText = "";
            this._screen2HeaderCancelText = "";
            this._screen2MessageText = "";
            this._screen2Label1Text = "";
            this._screen2Textbox1PlaceholderText = "";
            this._screen2Label2Text = "";
            this._screen2Textbox2PlaceholderText = "";
            this._screen2LabelPasswordRulesText = "";
            this._screen2SubmitBtnText = "";
            this._screen3HeaderMessageText = "";
            this._screen3MessageText = "";
            this._screen3DescriptionText = "";
            this._screen3SubmitBtnText = "";
            // PIN Capture Screen
            this._screen4HeaderMessageText = "";
            this._screen4HeaderCancelText = "";
            this._screen4MessageText = "";
            this._screen4Label1Text = "";
            this._screen4Textbox1PlaceholderText = "";
            this._screen4Label2Text = "";
            this._screen4Textbox2PlaceholderText = "";
            this._screen4LabelPasswordRulesText = "";
            this._screen4SubmitBtnText = "";
            //Password Success Screen
            this._screen5HeaderMessageText = "";
            this._screen5MessageText = "";
            this._screen5DescriptionText = "";
            this._screen5SubmitBtnText = "";
            /*
            Custom properties for integration 
            */
            this._objectName = "";
            this._validateService = "";
            this._passwordUpdateService = "";
            this._passwordPolicyService = "";
            this._activationExpire = "";
            this._unableToVerify = "";
            this._unableToUpdate = "";
            this._deviceProvisioningService = "";
            this.passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
            this.repeatedCharRegex = /(.)\\1{4}/;
            this.PIN_MIN_LENGTH = 6;
            this.PIN_MAX_LENGTH = 8;
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineSetter(this, 'headerSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._headerSkin = val;
                }
            });
            defineGetter(this, 'headerSkin', function() {
                return this._headerSkin;
            });
            defineSetter(this, 'headerTextSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._headerTextSkin = val;
                }
            });
            defineGetter(this, 'headerTextSkin', function() {
                return this._headerTextSkin;
            });
            defineSetter(this, 'headerCancelButtonSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._headerCancelButtonSkin = val;
                }
            });
            defineGetter(this, 'headerCancelButtonSkin', function() {
                return this._headerCancelButtonSkin;
            });
            defineSetter(this, 'errorMessageSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._errorMessageSkin = val;
                }
            });
            defineGetter(this, 'errorMessageSkin', function() {
                return this._errorMessageSkin;
            });
            defineSetter(this, 'textBoxNormalSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._textBoxNormalSkin = val;
                }
            });
            defineGetter(this, 'textBoxNormalSkin', function() {
                return this._textBoxNormalSkin;
            });
            defineSetter(this, 'textBoxErrorSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._textBoxErrorSkin = val;
                }
            });
            defineGetter(this, 'textBoxErrorSkin', function() {
                return this._textBoxErrorSkin;
            });
            defineSetter(this, 'buttonEnabledSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._buttonEnabledSkin = val;
                }
            });
            defineGetter(this, 'buttonEnabledSkin', function() {
                return this._buttonEnabledSkin;
            });
            defineSetter(this, 'buttonDisabledSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._buttonDisabledSkin = val;
                }
            });
            defineGetter(this, 'buttonDisabledSkin', function() {
                return this._buttonDisabledSkin;
            });
            defineSetter(this, 'forgetPasswordSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._forgetPasswordSkin = val;
                }
            });
            defineGetter(this, 'forgetPasswordSkin', function() {
                return this._forgetPasswordSkin;
            });
            defineSetter(this, 'screen2MessageSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen2MessageSkin = val;
                }
            });
            defineGetter(this, 'screen2MessageSkin', function() {
                return this._screen2MessageSkin;
            });
            defineSetter(this, 'labelSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._labelSkin = val;
                }
            });
            defineGetter(this, 'labelSkin', function() {
                return this._labelSkin;
            });
            defineSetter(this, 'passwordRulesLabelSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._passwordRulesLabelSkin = val;
                }
            });
            defineGetter(this, 'passwordRulesLabelSkin', function() {
                return this._passwordRulesLabelSkin;
            });
            defineSetter(this, 'passwordRulesSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._passwordRulesSkin = val;
                }
            });
            defineGetter(this, 'passwordRulesSkin', function() {
                return this._passwordRulesSkin;
            });
            defineSetter(this, 'screen3MessageSkin', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen3MessageSkin = val;
                }
            });
            defineGetter(this, 'screen3MessageSkin', function() {
                return this._screen3MessageSkin;
            });
            defineSetter(this, 'textVisiblityOffIcon', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._textVisiblityOffIcon = val;
                }
            });
            defineGetter(this, 'textVisiblityOffIcon', function() {
                return this._textVisiblityOffIcon;
            });
            defineSetter(this, 'textVisiblityOnIcon', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._textVisiblityOnIcon = val;
                }
            });
            defineGetter(this, 'textVisiblityOnIcon', function() {
                return this._textVisiblityOnIcon;
            });
            defineSetter(this, 'tickGrayIcon', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._tickGrayIcon = val;
                }
            });
            defineGetter(this, 'tickGrayIcon', function() {
                return this._tickGrayIcon;
            });
            defineSetter(this, 'tickGreenIcon', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._tickGreenIcon = val;
                }
            });
            defineGetter(this, 'tickGreenIcon', function() {
                return this._tickGreenIcon;
            });
            defineSetter(this, 'successTickIcon', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._successTickIcon = val;
                }
            });
            defineGetter(this, 'successTickIcon', function() {
                return this._successTickIcon;
            });
            defineSetter(this, 'screen1HeaderMessageText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen1HeaderMessageText = val;
                }
            });
            defineGetter(this, 'screen1HeaderMessageText', function() {
                return this._screen1HeaderMessageText;
            });
            defineSetter(this, 'screen1HeaderCancelText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen1HeaderCancelText = val;
                }
            });
            defineGetter(this, 'screen1HeaderCancelText', function() {
                return this._screen1HeaderCancelText;
            });
            defineSetter(this, 'screen1DescriptionText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen1DescriptionText = val;
                }
            });
            defineGetter(this, 'screen1DescriptionText', function() {
                return this._screen1DescriptionText;
            });
            defineSetter(this, 'screen1ErrorMessageText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen1ErrorMessageText = val;
                }
            });
            defineGetter(this, 'screen1ErrorMessageText', function() {
                return this._screen1ErrorMessageText;
            });
            defineSetter(this, 'screen1TextBox1PlaceholderText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen1TextBox1PlaceholderText = val;
                }
            });
            defineGetter(this, 'screen1TextBox1PlaceholderText', function() {
                return this._screen1TextBox1PlaceholderText;
            });
            defineSetter(this, 'screen1TextBox2PlaceholderText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen1TextBox2PlaceholderText = val;
                }
            });
            defineGetter(this, 'screen1TextBox2PlaceholderText', function() {
                return this._screen1TextBox2PlaceholderText;
            });
            defineSetter(this, 'screen1SubmitBtnText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen1SubmitBtnText = val;
                }
            });
            defineGetter(this, 'screen1SubmitBtnText', function() {
                return this._screen1SubmitBtnText;
            });
            defineSetter(this, 'screen1ForgetPasswordBtnText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen1ForgetPasswordBtnText = val;
                }
            });
            defineGetter(this, 'screen1ForgetPasswordBtnText', function() {
                return this._screen1ForgetPasswordBtnText;
            });
            defineSetter(this, 'screen2HeaderMessageText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen2HeaderMessageText = val;
                }
            });
            defineGetter(this, 'screen2HeaderMessageText', function() {
                return this._screen2HeaderMessageText;
            });
            defineSetter(this, 'screen2HeaderCancelText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen2HeaderCancelText = val;
                }
            });
            defineGetter(this, 'screen2HeaderCancelText', function() {
                return this._screen2HeaderCancelText;
            });
            defineSetter(this, 'screen2MessageText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen2MessageText = val;
                }
            });
            defineGetter(this, 'screen2MessageText', function() {
                return this._screen2MessageText;
            });
            defineSetter(this, 'screen2Label1Text', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen2Label1Text = val;
                }
            });
            defineGetter(this, 'screen2Label1Text', function() {
                return this._screen2Label1Text;
            });
            defineSetter(this, 'screen2Textbox1PlaceholderText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen2Textbox1PlaceholderText = val;
                }
            });
            defineGetter(this, 'screen2Textbox1PlaceholderText', function() {
                return this._screen2Textbox1PlaceholderText;
            });
            defineSetter(this, 'screen2Label2Text', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen2Label2Text = val;
                }
            });
            defineGetter(this, 'screen2Label2Text', function() {
                return this._screen2Label2Text;
            });
            defineSetter(this, 'screen2Textbox2PlaceholderText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen2Textbox2PlaceholderText = val;
                }
            });
            defineGetter(this, 'screen2Textbox2PlaceholderText', function() {
                return this._screen2Textbox2PlaceholderText;
            });
            defineSetter(this, 'screen2LabelPasswordRulesText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen2LabelPasswordRulesText = val;
                }
            });
            defineGetter(this, 'screen2LabelPasswordRulesText', function() {
                return this._screen2LabelPasswordRulesText;
            });
            defineSetter(this, 'screen2SubmitBtnText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen2SubmitBtnText = val;
                }
            });
            defineGetter(this, 'screen2SubmitBtnText', function() {
                return this._screen2SubmitBtnText;
            });
            defineSetter(this, 'screen3HeaderMessageText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen3HeaderMessageText = val;
                }
            });
            defineGetter(this, 'screen3HeaderMessageText', function() {
                return this._screen3HeaderMessageText;
            });
            defineSetter(this, 'screen3MessageText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen3MessageText = val;
                }
            });
            defineGetter(this, 'screen3MessageText', function() {
                return this._screen3MessageText;
            });
            defineSetter(this, 'screen3DescriptionText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen3DescriptionText = val;
                }
            });
            defineGetter(this, 'screen3DescriptionText', function() {
                return this._screen3DescriptionText;
            });
            defineSetter(this, 'screen3SubmitBtnText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen3SubmitBtnText = val;
                }
            });
            defineGetter(this, 'screen3SubmitBtnText', function() {
                return this._screen3SubmitBtnText;
            });
            defineSetter(this, 'screen4HeaderMessageText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen4HeaderMessageText = val;
                }
            });
            defineGetter(this, 'screen4HeaderMessageText', function() {
                return this._screen4HeaderMessageText;
            });
            defineSetter(this, 'screen4HeaderCancelText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen4HeaderCancelText = val;
                }
            });
            defineGetter(this, 'screen4HeaderCancelText', function() {
                return this._screen4HeaderCancelText;
            });
            defineSetter(this, 'screen4MessageText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen4MessageText = val;
                }
            });
            defineGetter(this, 'screen4MessageText', function() {
                return this._screen4MessageText;
            });
            defineSetter(this, 'screen4Label1Text', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen4Label1Text = val;
                }
            });
            defineGetter(this, 'screen4Label1Text', function() {
                return this._screen4Label1Text;
            });
            defineSetter(this, 'screen4Textbox1PlaceholderText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen4Textbox1PlaceholderText = val;
                }
            });
            defineGetter(this, 'screen4Textbox1PlaceholderText', function() {
                return this._screen4Textbox1PlaceholderText;
            });
            defineSetter(this, 'screen4Label2Text', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen4Label2Text = val;
                }
            });
            defineGetter(this, 'screen4Label2Text', function() {
                return this._screen4Label2Text;
            });
            defineSetter(this, 'screen4Textbox2PlaceholderText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen4Textbox2PlaceholderText = val;
                }
            });
            defineGetter(this, 'screen4Textbox2PlaceholderText', function() {
                return this._screen4Textbox2PlaceholderText;
            });
            defineSetter(this, 'screen4LabelPasswordRulesText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen4LabelPasswordRulesText = val;
                }
            });
            defineGetter(this, 'screen4LabelPasswordRulesText', function() {
                return this._screen4LabelPasswordRulesText;
            });
            defineSetter(this, 'screen4SubmitBtnText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen4SubmitBtnText = val;
                }
            });
            defineGetter(this, 'screen4SubmitBtnText', function() {
                return this._screen4SubmitBtnText;
            });
            defineSetter(this, 'screen5HeaderMessageText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen5HeaderMessageText = val;
                }
            });
            defineGetter(this, 'screen5HeaderMessageText', function() {
                return this._screen5HeaderMessageText;
            });
            defineSetter(this, 'screen5MessageText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen5MessageText = val;
                }
            });
            defineGetter(this, 'screen5MessageText', function() {
                return this._screen5MessageText;
            });
            defineSetter(this, 'screen5DescriptionText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen5DescriptionText = val;
                }
            });
            defineGetter(this, 'screen5DescriptionText', function() {
                return this._screen5DescriptionText;
            });
            defineSetter(this, 'screen5SubmitBtnText', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._screen5SubmitBtnText = val;
                }
            });
            defineGetter(this, 'screen5SubmitBtnText', function() {
                return this._screen5SubmitBtnText;
            });
            /*
            getter and setters for integration custom properties
            */
            defineSetter(this, 'objectName', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._objectName = val;
                }
            });
            defineGetter(this, 'objectName', function() {
                return this._objectName;
            });
            defineSetter(this, 'passwordObjModelName', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._passwordObjModelName = val;
                }
            });
            defineGetter(this, 'passwordObjModelName', function() {
                return this._passwordObjModelName;
            });
            defineSetter(this, 'validateService', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._validateService = val;
                }
            });
            defineGetter(this, 'validateService', function() {
                return this._validateService;
            });
            defineSetter(this, 'passwordUpdateService', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._passwordUpdateService = val;
                }
            });
            defineGetter(this, 'passwordUpdateService', function() {
                return this._passwordUpdateService;
            });
            defineSetter(this, 'passwordPolicyService', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._passwordPolicyService = val;
                }
            });
            defineGetter(this, 'passwordPolicyService', function() {
                return this._passwordPolicyService;
            });
            defineSetter(this, 'deviceProvisioningService', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._deviceProvisioningService = val;
                }
            });
            defineGetter(this, 'deviceProvisioningService', function() {
                return this._deviceProvisioningService;
            });
            defineSetter(this, 'activationExpire', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._activationExpire = val;
                }
            });
            defineGetter(this, 'activationExpire', function() {
                return this._activationExpire;
            });
            defineSetter(this, 'unableToVerify', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._unableToVerify = val;
                }
            });
            defineGetter(this, 'unableToVerify', function() {
                return this._unableToVerify;
            });
            defineSetter(this, '_unableToUpdate', function(val) {
                if (typeof val === 'string' && val !== '') {
                    this._unableToUpdate = val;
                }
            });
            defineGetter(this, '_unableToUpdate', function() {
                return this._unableToUpdate;
            });
            defineGetter(this, 'textBoxNormalFocusSkin', () => {
                return this._textBoxNormalFocusSkin;
            });
            defineSetter(this, 'textBoxNormalFocusSkin', value => {
                this._textBoxNormalFocusSkin = value;
            });
        },
        id_token: null,
        userId: null,
        preshow: function() {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "android") {
                this.view.flxTopMessage.shadowDepth = 10;
                this.view.flxTopMessage.shadowType = constants.VIEW_BOUNDS_SHADOW;
                this.view.flxCreatePasswordMessage.shadowDepth = 10;
                this.view.flxCreatePasswordMessage.shadowType = constants.VIEW_BOUNDS_SHADOW;
                this.view.flxCreatePin.shadowDepth = 10;
                this.view.flxCreatePin.shadowType = constants.VIEW_BOUNDS_SHADOW;
            }
        },
        activateProfilePostShow: function() {
            this.setTextFromi18n();
            this.resetUI();
            this.setFlowActions();
            this.navigateToScreen(1);
            this.getPasswordRulesAndPolicy();
        },
        navigateToScreen: function(screenNumber) {
            /*
            	1: flxProfileActivationScreen
              2: flxCreatePassword
              3: flxProfileActivatedSuccessful
              4: flxPin - Capture User PIN
              5: flxPasswordSuccess 
            */
            if (screenNumber === 1) {
                this.view.lblScreenName.text = this._screen1HeaderMessageText;
                this.view.btnCancel.text = this._screen1HeaderCancelText;
                this.view.flxProfileActivationScreen.setVisibility(true);
                this.view.flxCreatePassword.setVisibility(false);
                this.view.flxPin.setVisibility(false);
                this.view.flxSuccess.setVisibility(false);
                this.view.flxPasswordSuccess.setVisibility(false);
                this.view.flxBack.setVisibility(true);
                this.view.btnCancel.setVisibility(true);
            } else if (screenNumber === 2) {
                this.view.lblScreenName.text = this._screen2HeaderMessageText;
                this.view.btnCancel.text = this._screen2HeaderCancelText;
                this.view.flxProfileActivationScreen.setVisibility(false);
                this.view.flxCreatePassword.setVisibility(true);
                this.view.flxPin.setVisibility(false);
                this.view.flxSuccess.setVisibility(false);
                this.view.flxPasswordSuccess.setVisibility(false);
                this.view.flxBack.setVisibility(false);
                this.view.btnCancel.setVisibility(true);
            } else if (screenNumber === 3) {
                this.view.lblScreenName.text = this._screen3HeaderMessageText;
                this.view.btnCancel.text = this._screen3HeaderCancelText;
                this.view.flxProfileActivationScreen.setVisibility(false);
                this.view.flxCreatePassword.setVisibility(false);
                this.view.flxPin.setVisibility(false);
                this.view.flxSuccess.setVisibility(true);
                this.view.flxPasswordSuccess.setVisibility(false);
                this.view.flxBack.setVisibility(false);
                this.view.btnCancel.setVisibility(false);
            } else if (screenNumber === 4) {
                this.view.lblScreenName.text = this._screen4HeaderMessageText;
                this.view.btnCancel.text = this._screen4HeaderCancelText;
                this.view.flxProfileActivationScreen.setVisibility(false);
                this.view.flxCreatePassword.setVisibility(false);
                this.view.flxPin.setVisibility(true);
                this.view.flxPasswordSuccess.setVisibility(false);
                this.view.flxSuccess.setVisibility(false);
                this.view.flxBack.setVisibility(false);
                this.view.btnCancel.setVisibility(true);
            } else if (screenNumber === 5) {
                this.view.lblScreenName.text = this._screen5HeaderMessageText;
                this.view.btnCancel.text = this._screen5HeaderCancelText;
                this.view.flxProfileActivationScreen.setVisibility(false);
                this.view.flxCreatePassword.setVisibility(false);
                this.view.flxPin.setVisibility(false);
                this.view.flxPasswordSuccess.setVisibility(true);
                this.view.flxSuccess.setVisibility(false);
                this.view.flxBack.setVisibility(false);
                this.view.btnCancel.setVisibility(true);
            }
        },
        resetUI: function() {
            this.assignDefaultSkins();
            this.assignDefaultText();
            this.resetUIForProfileActivationScreen();
            this.resetUIForCreatePasswordScreen();
            this.resetUIForCreatePinScreen();
        },
        assignDefaultText: function() {
            // Screen-1
            this.view.lblMessage.text = this._screen1DescriptionText;
            this.view.lblErrorMessage.text = this._screen1ErrorMessageText;
            this.view.tbxUsername.placeholder = this._screen1TextBox1PlaceholderText;
            this.view.tbxActivationCode.placeholder = this._screen1TextBox2PlaceholderText;
            this._screen1TextBox2PlaceholderText.text = this._screen1SubmitBtnText;
            // Screen-2
            this.view.lblCreateNewPassword.text = this._screen2MessageText;
            this.view.lblNewPassword.text = this._screen2Label1Text;
            this.view.tbxNewPassword.placeholder = this._screen2Textbox1PlaceholderText;
            this.view.lblReEnterPassword.text = this._screen2Label2Text;
            this.view.tbxReEnterPassword.placeholder = this._screen2Textbox2PlaceholderText;
            this.view.lblSecurityRequirements.text = this._screen2LabelPasswordRulesText;
            this.view.btnSetPassword.text = this._screen2SubmitBtnText;
            // Screen-3
            this.view.lblActivatedSuccessfully.text = this._screen3MessageText;
            this.view.lblActivationDescription.text = this._screen3DescriptionText;
            this._screen3DescriptionText.text = this._screen3SubmitBtnText;
            // Screen-5
            this.view.lblPasswordSuccess.text = this._screen5MessageText;
            this.view.lblDescription.text = this._screen5DescriptionText;
            this._screen5DescriptionText.text = this._screen5SubmitBtnText;
            //Pin Capture Screen
            this.view.lblCreatePin.text = this._screen4MessageText;
            this.view.lblPin.text = this._screen4Label1Text;
            this.view.tbxNewPin.placeholder = this._screen4Textbox1PlaceholderText;
            this.view.lblReEnterPin.text = this._screen4Label2Text;
            this.view.tbxReEnterPin.placeholder = this._screen4Textbox2PlaceholderText;
            this.view.lblPinPolicyRequirements.text = this._screen4LabelPasswordRulesText;
            this.view.btnSetPin.text = this._screen4SubmitBtnText;
        },
        setTextFromi18n: function() {
            // Screen-1
            this._screen1HeaderMessageText = this.getStringFromi18n(this._screen1HeaderMessageText);
            this._screen1HeaderCancelText = this.getStringFromi18n(this._screen1HeaderCancelText);
            this._screen1DescriptionText = this.getStringFromi18n(this._screen1DescriptionText);
            this._screen1ErrorMessageText = this.getStringFromi18n(this._screen1ErrorMessageText);
            this._screen1TextBox1PlaceholderText = this.getStringFromi18n(this._screen1TextBox1PlaceholderText);
            this._screen1TextBox2PlaceholderText = this.getStringFromi18n(this._screen1TextBox2PlaceholderText);
            this._screen1SubmitBtnText = this.getStringFromi18n(this._screen1SubmitBtnText);
            this._screen1ForgetPasswordBtnText = this.getStringFromi18n(this._screen1ForgetPasswordBtnText);
            // Screen-2
            this._screen2HeaderMessageText = this.getStringFromi18n(this._screen2HeaderMessageText);
            this._screen2HeaderCancelText = this.getStringFromi18n(this._screen2HeaderCancelText);
            this._screen2MessageText = this.getStringFromi18n(this._screen2MessageText);
            this._screen2Label1Text = this.getStringFromi18n(this._screen2Label1Text);
            this._screen2Textbox1PlaceholderText = this.getStringFromi18n(this._screen2Textbox1PlaceholderText);
            this._screen2Label2Text = this.getStringFromi18n(this._screen2Label2Text);
            this._screen2Textbox2PlaceholderText = this.getStringFromi18n(this._screen2Textbox2PlaceholderText);
            this._screen2LabelPasswordRulesText = this.getStringFromi18n(this._screen2LabelPasswordRulesText);
            this._screen2SubmitBtnText = this.getStringFromi18n(this._screen2SubmitBtnText);
            // Screen-3
            this._screen3HeaderMessageText = this.getStringFromi18n(this._screen3HeaderMessageText);
            this._screen3MessageText = this.getStringFromi18n(this._screen3MessageText);
            this._screen3DescriptionText = this.getStringFromi18n(this._screen3DescriptionText);
            this._screen3SubmitBtnText = this.getStringFromi18n(this._screen3SubmitBtnText);
            // Screen-5
            this._screen5HeaderMessageText = this.getStringFromi18n(this._screen5HeaderMessageText);
            this._screen5MessageText = this.getStringFromi18n(this._screen5MessageText);
            this._screen5DescriptionText = this.getStringFromi18n(this._screen5DescriptionText);
            this._screen5SubmitBtnText = this.getStringFromi18n(this._screen5SubmitBtnText);
            // Pin Catpure Screen
            this._screen4HeaderMessageText = this.getStringFromi18n(this._screen4HeaderMessageText);
            this._screen4HeaderCancelText = this.getStringFromi18n(this._screen4HeaderCancelText);
            this._screen4MessageText = this.getStringFromi18n(this._screen4MessageText);
            this._screen4Label1Text = this.getStringFromi18n(this._screen4Label1Text);
            this._screen4Textbox1PlaceholderText = this.getStringFromi18n(this._screen4Textbox1PlaceholderText);
            this._screen4Label2Text = this.getStringFromi18n(this._screen4Label2Text);
            this._screen4Textbox2PlaceholderText = this.getStringFromi18n(this._screen4Textbox2PlaceholderText);
            this._screen4LabelPasswordRulesText = this.getStringFromi18n(this._screen4LabelPasswordRulesText);
            this._screen4SubmitBtnText = this.getStringFromi18n(this._screen4SubmitBtnText);
        },
        getStringFromi18n: function(stringValue) {
            return kony.i18n.getLocalizedString(stringValue) ? kony.i18n.getLocalizedString(stringValue) : stringValue;
        },
        assignDefaultSkins: function() {
            this.view.flxHeader.skin = this._headerSkin;
            this.view.lblScreenName.skin = this._headerTextSkin;
            this.view.btnCancel.skin = this._headerCancelButtonSkin;
            this.view.lblMessage.skin = this._labelSkin;
            this.view.lblErrorMessage.skin = this._errorMessageSkin;
            this.view.tbxUsername.skin = this._textBoxNormalSkin;
            this.view.tbxUsername.focusSkin = this._textBoxNormalFocusSkin;
            this.view.tbxActivationCode.skin = this._textBoxNormalSkin;
            this.view.tbxActivationCode.focusSkin = this._textBoxNormalFocusSkin;
            this.view.lblCreateNewPassword.skin = this._labelSkin;
            this.view.lblCreatePin.skin = this._labelSkin;
            this.view.lblNewPassword.skin = this._labelSkin;
            this.view.lblReEnterPassword.skin = this._labelSkin;
            this.view.tbxNewPassword.skin = this._textBoxNormalSkin;
            this.view.tbxReEnterPassword.skin = this._textBoxNormalSkin;
            this.view.lblSecurityRequirements.skin = this._passwordRulesLabelSkin;
            this.view.rtxRulesPwd.skin = this._passwordRulesSkin;
            this.view.lblActivatedSuccessfully.skin = this._screen3MessageSkin;
            this.view.lblActivationDescription.skin = this._labelSkin;
            this.view.btnDone.skin = this._buttonEnabledSkin;
            this.view.imgGreenTick.src = this._successTickIcon;
            this.view.lblPasswordSuccess.skin = this._screen3MessageSkin;
            this.view.lblDescription.skin = this._labelSkin;
            this.view.imgGreenIcon.src = this._successTickIcon;
            this.view.btnSignIn.skin = this._buttonEnabledSkin;
        },
        resetUIForProfileActivationScreen: function() {
            this.hideVerificationErrorMessage();
            this.view.tbxActivationCode.textInputMode = constants.TEXTBOX_INPUT_MODE_ANY;
            this.view.tbxActivationCode.secureTextEntry = true;
            this.view.tbxUsername.text = "";
            this.view.tbxActivationCode.text = "";
            this.view.imgActivationCodeVisiblityToggle.src = this._textVisiblityOffIcon;
            this.view.btnVerify.skin = this._buttonDisabledSkin;
            this.view.btnVerify.setEnabled(false);
        },
        resetUIForCreatePasswordScreen: function() {
            this.hideUpdateErrorMessage();
            this.view.lblErrorMsgPasswordCreation.setVisibility(false);
            this.view.flxSecurityRequirements.setVisibility(false);
            this.view.tbxNewPassword.textInputMode = constants.TEXTBOX_INPUT_MODE_ANY;
            this.view.tbxNewPassword.secureTextEntry = true;
            this.view.tbxNewPassword.text = "";
            this.view.tbxReEnterPassword.text = "";
            this.view.imgNewPasswordVisiblityToggle.src = this._textVisiblityOffIcon;
            this.view.imgReEnterPasswordMatch.src = this._tickGrayIcon;
            this.view.btnSetPassword.skin = this._buttonDisabledSkin;
            this.view.btnSetPassword.setEnabled(false);
        },
        resetUIForCreatePinScreen: function() {
            this.hidePinErrorMessage();
            this.view.lblErrorPin.setVisibility(false);
            this.view.flxPinPasswordPolicy.setVisibility(false);
            this.view.tbxNewPin.secureTextEntry = true;
            this.view.tbxNewPin.text = "";
            this.view.tbxReEnterPin.text = "";
            this.view.imgNewPinVisiblityToggle.src = this._textVisiblityOffIcon;
            this.view.imgReEnterPinMatch.src = this._tickGrayIcon;
            this.view.btnSetPin.skin = this._buttonDisabledSkin;
            this.view.btnSetPin.setEnabled(false);
        },
        setFlowActions: function() {
            const scopeObj = this;
            this.setFlowActionsForProfileActivationScreen();
            this.setFlowActionsForCreatePasswordScreen();
            scopeObj.setFlowActionsForCreatePin();
            this.view.flxBack.onTouchEnd = function() {
                scopeObj.navigateToScreen(1);
                scopeObj.resetUIForProfileActivationScreen();
                if (scopeObj.closeActivateProfileFlow) scopeObj.closeActivateProfileFlow();
            };
            this.view.btnCancel.onClick = function() {
                scopeObj.navigateToScreen(1);
                scopeObj.resetUIForProfileActivationScreen();
                if (scopeObj.closeActivateProfileFlow) scopeObj.closeActivateProfileFlow();
            };
            this.view.btnDone.onClick = function() {
                // TODO: Flow needs to be changed.
                //scopeObj.navigateToScreen(2); 
                if (scopeObj.navigateToLogin) {
                    scopeObj.navigateToLogin();
                }
            };
            this.view.btnSignIn.onClick = function() {
                if (scopeObj.navigateToLogin) {
                    scopeObj.navigateToLogin();
                }
            };
            this.view.flxMainContainer.onTouchEnd = null;
        },
        setFlowActionsForProfileActivationScreen: function() {
            const scopeObj = this;
            this.view.flxActivationCodeVisiblityToggle.onTouchEnd = function() {
                scopeObj.flxActivationCodeVisiblityToggleOnClick();
            };
            this.view.tbxUsername.onTextChange = function() {
                scopeObj.hideVerificationErrorMessage();
                scopeObj.enableVerifyButton();
            };
            this.view.tbxActivationCode.onTextChange = function() {
                scopeObj.hideVerificationErrorMessage();
                scopeObj.enableVerifyButton();
            };
            this.view.btnVerify.onClick = function() {
                // Service Call to be made to verify Activation Code
                scopeObj.onVerifyClick();
            };
        },
        setFlowActionsForCreatePasswordScreen: function() {
            const scopeObj = this;
            this.view.flxNewPasswordVisiblityToggle.onTouchEnd = function() {
                scopeObj.flxNewPasswordVisiblityToggleOnClick();
            };
            this.view.tbxNewPassword.onTouchStart = function() {
                scopeObj.enableSetPasswordButtonAndTickMark();
            };
            this.view.tbxNewPassword.onTextChange = function() {
                scopeObj.hideUpdateErrorMessage();
                scopeObj.enableSetPasswordButtonAndTickMark();
            };
            this.view.tbxReEnterPassword.onTouchStart = function() {
                scopeObj.enableSetPasswordButtonAndTickMark();
            };
            this.view.tbxReEnterPassword.onTextChange = function() {
                scopeObj.hideUpdateErrorMessage();
                scopeObj.enableSetPasswordButtonAndTickMark();
            };
            this.view.btnSetPassword.onClick = function() {
                // Service Call to be made to set New Password
                let password = scopeObj.view.tbxNewPassword.text;
                scopeObj.createPassword(password);
            };
        },
        setFlowActionsForCreatePin: function() {
            const scopeObj = this;
            this.view.flxNewPinToggle.onTouchEnd = function() {
                scopeObj.flxNewPinVisiblityToggleOnClick();
            };
            this.view.tbxNewPin.onTouchStart = function() {
                scopeObj.enableSetPinButtonAndTickMark();
            };
            this.view.tbxNewPin.onTextChange = function() {
                scopeObj.enableSetPinButtonAndTickMark();
            };
            this.view.tbxReEnterPin.onTouchStart = function() {
                scopeObj.enableSetPinButtonAndTickMark();
            };
            this.view.tbxReEnterPin.onTextChange = function() {
                scopeObj.enableSetPinButtonAndTickMark();
            };
            this.view.btnSetPin.onClick = function() {
                kony.application.showLoadingScreen(null, "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
                let pin = scopeObj.view.tbxNewPin.text;
                scopeObj.view.sdk.setContainerPin(pin);
            };
        },
        flxActivationCodeVisiblityToggleOnClick: function() {
            if (this.view.imgActivationCodeVisiblityToggle.src === this._textVisiblityOffIcon) {
                this.view.imgActivationCodeVisiblityToggle.src = this._textVisiblityOnIcon;
                this.view.tbxActivationCode.secureTextEntry = false;
                this.view.flxCredentials.forceLayout();
            } else {
                this.view.imgActivationCodeVisiblityToggle.src = this._textVisiblityOffIcon;
                this.view.tbxActivationCode.secureTextEntry = true;
                this.view.flxCredentials.forceLayout();
            }
        },
        enableVerifyButton: function() {
            const scopeObj = this;
            if (scopeObj.view.tbxUsername.text !== '' && scopeObj.view.tbxUsername.text !== null && scopeObj.view.tbxUsername.text !== undefined && scopeObj.view.tbxActivationCode.text !== '' && scopeObj.view.tbxActivationCode.text !== null && scopeObj.view.tbxActivationCode.text !== undefined) {
                scopeObj.view.btnVerify.setEnabled(true);
                scopeObj.view.btnVerify.skin = scopeObj._buttonEnabledSkin;
            } else {
                scopeObj.view.btnVerify.setEnabled(false);
                scopeObj.view.btnVerify.skin = scopeObj._buttonDisabledSkin;
            }
        },
        showVerificationErrorMessage: function() {
            this.view.lblErrorMessage.setVisibility(true);
            this.view.tbxUsername.skin = this._textBoxErrorSkin;
            this.view.tbxUsername.focusSkin = this._textBoxErrorSkin;
            this.view.tbxActivationCode.skin = this._textBoxErrorSkin;
            this.view.tbxActivationCode.focusSkin = this._textBoxErrorSkin;
            this.view.tbxUsername.setFocus(false);
            this.view.tbxActivationCode.setFocus(false);
            this.view.tbxNewPassword.setFocus(true); // Workaround for AAC-8776
            this.view.tbxUsername.text = "";
            this.view.tbxActivationCode.text = "";
        },
        showVerificationErrorMessageFromServer: function(message) {
            this.showVerificationErrorMessage();
            this.view.lblErrorMessage.text = message;
        },
        hideVerificationErrorMessage: function() {
            this.view.lblErrorMessage.setVisibility(false);
            this.view.tbxUsername.skin = this._textBoxNormalSkin;
            this.view.tbxUsername.focusSkin = this._textBoxNormalFocusSkin;
            this.view.tbxActivationCode.skin = this._textBoxNormalSkin;
            this.view.tbxActivationCode.focusSkin = this._textBoxNormalFocusSkin;
        },
        showupdateErrorMessage: function() {
            this.view.lblErrorMsgPasswordCreation.setVisibility(true);
            this.view.tbxNewPassword.skin = this._textBoxErrorSkin;
            this.view.tbxReEnterPassword.skin = this._textBoxErrorSkin;
        },
        showUpdateErrorMessageFromServer: function(message) {
            this.showupdateErrorMessage();
            this.view.tbxNewPassword.skin = this._textBoxErrorSkin;
            this.view.tbxReEnterPassword.skin = this._textBoxErrorSkin;
            this.view.lblErrorMsgPasswordCreation.text = message;
        },
        hideUpdateErrorMessage: function() {
            this.view.lblErrorMsgPasswordCreation.setVisibility(false);
            this.view.tbxNewPassword.skin = this._textBoxNormalSkin;
            this.view.tbxReEnterPassword.skin = this._textBoxNormalSkin;
        },
        showPinErrorMessage: function() {
            this.view.lblErrorPin.setVisibility(true);
            this.view.tbxNewPin.skin = this._textBoxNormalSkin;
            this.view.tbxReEnterPin.skin = this._textBoxNormalSkin;
        },
        showPinErrorMessageFromServer: function(message) {
            this.showPinErrorMessage();
            this.view.lblErrorPin.text = message;
        },
        hidePinErrorMessage: function() {
            this.view.lblErrorPin.setVisibility(false);
            this.view.tbxNewPin.skin = this._textBoxNormalSkin;
            this.view.tbxReEnterPin.skin = this._textBoxNormalSkin;
        },
        onVerifyClick: function() {
            kony.application.showLoadingScreen(null, "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
            const scopeObj = this;
            let UserNameActivationCodeJSON = {
                "userId": scopeObj.view.tbxUsername.text,
                "activationCode": scopeObj.view.tbxActivationCode.text
            };
            let dbxUserRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository(scopeObj._objectName);
            dbxUserRepo.customVerb(scopeObj._validateService, UserNameActivationCodeJSON, verifyActivationCodeAndUserNameServiceCallBack);

            function verifyActivationCodeAndUserNameServiceCallBack(status, data, error) {
                let object = scopeObj.validateResponse(status, data, error);
                if (object["status"] === true) {
                    scopeObj.verifyActivationCodeSuccess(object["data"]);
                    scopeObj.userId = UserNameActivationCodeJSON.userId;
                } else {
                    scopeObj.verifyActivationCodeFailure(object["data"]);
                }
            }
        },
        provisionDevice: function(id_token) {
            const scopeObj = this;
            var params = {
                "id_token": id_token
            }
            let dbxUserRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository(scopeObj._objectName);
            dbxUserRepo.customVerb(scopeObj._deviceProvisioningService, params, provisionDeviceCallBack);

            function provisionDeviceCallBack(status, data, error) {
                let object = scopeObj.validateResponse(status, data, error);
                if (object["status"] === true) {
                    scopeObj.view.sdk.doDeviceProvisioning(data.provisionJSON, scopeObj.provisionCallBack.bind(this));
                } else {
                    scopeObj.verifyActivationCodeFailure(object["data"]);
                }
            }
        },
        provisionCallBack: function(status, policy) {
            var self = this;
            kony.application.dismissLoadingScreen();
            this.view.forceLayout();
            if (provisionConstants.PIN_REQUEST === status) {
                var pwdJson = JSON.parse(policy);
                if (pwdJson && pwdJson.IS_NUMERIC_POLICY) {
                    self.PIN_MIN_LENGTH = pwdJson.MIN_LENGTH;
                    self.PIN_MAX_LENGTH = pwdJson.MAX_LENGTH;
                    if (pwdJson.MIN_LENGTH === pwdJson.MAX_LENGTH) {
                        self.view.rtxRulesPin.text = "Pin must be " + self.PIN_MAX_LENGTH + " digits in length";
                    } else {
                        self.view.rtxRulesPin.text = "Pin length must be between " + self.PIN_MIN_LENGTH + " and " + self.PIN_MAX_LENGTH + " digits";
                    }
                } else {
                    alert('Only Numeric PIN Policy is supported');
                }
                self.navigateToScreen(4);
            } else if (provisionConstants.PROVISION_FINISHED === status) {
                kony.application.dismissLoadingScreen();
                self.checkUserPasswordAuthenticator(self.userId);
            } else if (status === provisionConstants.PROVISION_FAILED || status === provisionConstants.PROVISION_ERROR) {
                alert("Provision Failed");
            } else {
                alert("Invalid Status");
            }
            //this.view.forceLayout();
        },
        registerPushId: function(pushId) {
            this.view.sdk.pushId = pushId;
        },
        verifyActivationCodeSuccess: function(successResponse) {
            const scopeObj = this;
            if (successResponse.id_token) {
                scopeObj.id_token = successResponse.id_token;
                scopeObj.provisionDevice(successResponse.id_token);
                //this.navigateToScreen(2);
            } else {
                //scopeObj.showVerificationErrorMessageFromServer(scopeObj._unableToVerify);
            }
        },
        verifyActivationCodeFailure: function(failureResponse) {
            const scopeObj = this;
            kony.application.dismissLoadingScreen();
            this.view.tbxUsername.skin = this._textBoxErrorSkin;
            this.view.tbxActivationCode.skin = this._textBoxErrorSkin;
            scopeObj.showVerificationErrorMessageFromServer(failureResponse.errorMessage);
        },
        flxNewPasswordVisiblityToggleOnClick: function() {
            if (this.view.imgNewPasswordVisiblityToggle.src === this._textVisiblityOffIcon) {
                this.view.imgNewPasswordVisiblityToggle.src = this._textVisiblityOnIcon;
                this.view.tbxNewPassword.secureTextEntry = false;
                this.view.flxNewPassword.forceLayout();
            } else {
                this.view.imgNewPasswordVisiblityToggle.src = this._textVisiblityOffIcon;
                this.view.tbxNewPassword.secureTextEntry = true;
                this.view.flxNewPassword.forceLayout();
            }
        },
        flxNewPinVisiblityToggleOnClick: function() {
            if (this.view.imgNewPinVisiblityToggle.src === this._textVisiblityOffIcon) {
                this.view.imgNewPinVisiblityToggle.src = this._textVisiblityOnIcon;
                this.view.tbxNewPin.secureTextEntry = false;
                this.view.flxNewPin.forceLayout();
            } else {
                this.view.imgNewPinVisiblityToggle.src = this._textVisiblityOffIcon;
                this.view.tbxNewPin.secureTextEntry = true;
                this.view.flxNewPin.forceLayout();
            }
        },
        enableSetPasswordButtonAndTickMark: function() {
            const scopeObj = this;
            let isNewPasswordFilled = (scopeObj.view.tbxNewPassword.text !== '' && scopeObj.view.tbxNewPassword.text !== null && scopeObj.view.tbxNewPassword.text !== undefined) ? true : false;
            let isReEnterPasswordFilled = (scopeObj.view.tbxReEnterPassword.text !== '' && scopeObj.view.tbxReEnterPassword.text !== null && scopeObj.view.tbxReEnterPassword.text !== undefined) ? true : false;
            if (isNewPasswordFilled && isReEnterPasswordFilled && scopeObj.view.tbxNewPassword.text === scopeObj.view.tbxReEnterPassword.text && scopeObj.validatePassword()) {
                scopeObj.view.imgReEnterPasswordMatch.src = scopeObj._tickGreenIcon;
                scopeObj.view.btnSetPassword.setEnabled(true);
                scopeObj.view.btnSetPassword.skin = scopeObj._buttonEnabledSkin;
                this.view.flxSecurityRequirements.setVisibility(false);
            } else {
                scopeObj.view.imgReEnterPasswordMatch.src = scopeObj._tickGrayIcon;
                scopeObj.view.btnSetPassword.setEnabled(false);
                scopeObj.view.btnSetPassword.skin = scopeObj._buttonDisabledSkin;
                scopeObj.view.flxSecurityRequirements.setVisibility(true);
            }
        },
        enableSetPinButtonAndTickMark: function() {
            const scopeObj = this;
            let isNewPinEntered = (scopeObj.view.tbxNewPin.text !== '' && scopeObj.view.tbxNewPin.text !== null && scopeObj.view.tbxNewPin.text !== undefined) ? true : false;
            let isReEnterPinEntered = (scopeObj.view.tbxReEnterPin.text !== '' && scopeObj.view.tbxReEnterPin.text !== null && scopeObj.view.tbxReEnterPin.text !== undefined) ? true : false;
            if (isNewPinEntered && isReEnterPinEntered && scopeObj.view.tbxNewPin.text === scopeObj.view.tbxReEnterPin.text && scopeObj.validatePin()) {
                scopeObj.view.imgReEnterPinMatch.src = scopeObj._tickGreenIcon;
                scopeObj.view.btnSetPin.setEnabled(true);
                scopeObj.view.btnSetPin.skin = scopeObj._buttonEnabledSkin;
                this.view.flxPinPasswordPolicy.setVisibility(false);
            } else {
                scopeObj.view.imgReEnterPinMatch.src = scopeObj._tickGrayIcon;
                scopeObj.view.btnSetPin.setEnabled(false);
                scopeObj.view.btnSetPin.skin = scopeObj._buttonDisabledSkin;
                scopeObj.view.flxPinPasswordPolicy.setVisibility(true);
            }
        },
        validatePassword: function() {
            const scopeObj = this;
            let password = scopeObj.view.tbxNewPassword.text;
            return true;
        },
        validatePin: function() {
            const scopeObj = this;
            let pin = scopeObj.view.tbxNewPin.text;
            var pinRegex = new RegExp("^\\d{" + scopeObj.PIN_MIN_LENGTH + "," + scopeObj.PIN_MAX_LENGTH + "}$");
            if (pinRegex.test(pin.trim())) {
                return true;
            } else {
                return false;
            }
        },
        createPassword: function(password) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var scopeObj = this;
            let passwordServiceKeyJSON = {
                "id_token": scopeObj.id_token,
                "password": password
            };
            let dbxUserRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository(scopeObj._objectName);
            dbxUserRepo.customVerb(scopeObj._passwordUpdateService, passwordServiceKeyJSON, setPasswordServiceCallBack);

            function setPasswordServiceCallBack(status, data, error) {
                let object = scopeObj.validateResponse(status, data, error);
                if (object["status"] === true) {
                    scopeObj.createPasswordSuccess(object["data"]);
                } else {
                    scopeObj.createPasswordFailure(object["data"], object["isServerUnreachable"]);
                }
            }
        },
        createPasswordSuccess: function(successResponse) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            const scopeObj = this;
            this.navigateToScreen(3);
            kony.print("Create Password Successful");
        },
        createPasswordFailure: function(response, isServerUnreachable) {
            const scopeObj = this;
            if (response.errorCode === "2100") {
                response.errorMessage = "Password does not meet the security requirements";
                scopeObj.view.flxPinPasswordPolicy.setVisibility(true);
                scopeObj.showUpdateErrorMessageFromServer(response.errorMessage);
            } else if (isServerUnreachable || response.errorCode === "1103") {
                scopeObj.view.lblActivationDescription.text = "We have activated your profile successfully. An error occurred while setting the password. You could create online banking password after logging into your account. Please continue to enable Face ID/Biometric.";
                scopeObj.navigateToScreen(3);
            }
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        getPasswordRulesAndPolicy: function() {
            const scopeObj = this;
            var userRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository(scopeObj._passwordObjModelName);
            userRepo.customVerb(scopeObj._passwordPolicyService, {}, getAllCompletionCallback);

            function getAllCompletionCallback(status, data, error) {
                var obj = scopeObj.validateResponse(status, data, error);
                if (obj["status"] === true) {
                    scopeObj.getPasswordRulesAndPolicySuccessCallback(obj["data"]);
                } else {
                    scopeObj.getPasswordRulesAndPolicyErrorCallback(obj["data"]);
                }
            }
        },
        getPasswordRulesAndPolicySuccessCallback: function(res) {
            const scopeObj = this;
            scopeObj.view.rtxRulesPwd.text = res.scapasswordpolicy;
            //scopeObj.createRegexForPasswordValidation(res.passwordrules);
        },
        createRegexForPasswordValidation: function(data) {
            var repeatedCharRules = "(.)\\1{" + data.charRepeatCount + "}";
            if (data.supportedSymbols.indexOf("-") > -1) {
                data.supportedSymbols = data.supportedSymbols.replace("-", "\\-");
            }
            if (data.atleastOneSymbol) {
                let passwordRules = "";
                if (data.atleastOneLowerCase) {
                    passwordRules = passwordRules + "(?=.*[a-z])";
                }
                if (data.atleastOneUpperCase) {
                    passwordRules = passwordRules + "(?=.*[A-Z])";
                }
                if (data.atleastOneNumber) {
                    passwordRules = passwordRules + "(?=.*\\d)";
                }
                if (data.atleastOneSymbol) {
                    passwordRules = passwordRules + "(?=(.*[" + data.supportedSymbols + "]))";
                }
                this.passwordRegex = new RegExp(passwordRules + "[A-Za-z0-9" + data.supportedSymbols + "]{" + data.minLength + "," + data.maxLength + "}$");
                this.repeatedCharRegex = new RegExp(repeatedCharRules);
            } else {
                var passwordRules = "^";
                if (data.atleastOneLowerCase) {
                    passwordRules = passwordRules + "(?=.*[a-z])";
                }
                if (data.atleastOneUpperCase) {
                    passwordRules = passwordRules + "(?=.*[A-Z])";
                }
                if (data.atleastOneNumber) {
                    passwordRules = passwordRules + "(?=.*\\d)";
                }
                this.passwordRegex = new RegExp(passwordRules + "[^\\W]{" + data.minLength + "," + data.maxLength + "}$");
                this.repeatedCharRegex = new RegExp(repeatedCharRules);
            }
        },
        /**
         * Helper function to check whether given password has any special characters present
         * @param {String} value - A string to check
         * @returns {Boolean} - true if valid, false if any invalid character present
         */
        isPasswordValidForPolicy: function(val) {
            if (val.match(this.passwordRegex) && !this.repeatedCharRegex.test(val)) {
                return true;
            }
            return false;
        },
        getPasswordRulesAndPolicyErrorCallback: function(err) {
            kony.print("Unable to fetch Password Rules and Policies " + err.errorMessage);
        },
        checkUserPasswordAuthenticator: function(userId) {
            const scopeObj = this;
            var repo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SCASearchUser");
            repo.customVerb("getPasswordAuthenticator", {
                "userId": userId
            }, getAllCompletionCallback);

            function getAllCompletionCallback(status, data, error) {
                var obj = scopeObj.validateResponse(status, data, error);
                if (obj["status"] === true) {
                    scopeObj.checkUserPasswordAuthenticatorSuccessCallback(obj["data"]);
                } else {
                    scopeObj.checkUserPasswordAuthenticatorFailureCallback(obj["data"]);
                }
            }
        },
        checkUserPasswordAuthenticatorSuccessCallback: function(res) {
            kony.application.dismissLoadingScreen();
            const scopeObj = this;
            if (res.isPasswordPresent && res.isPasswordPresent === "true") {
                scopeObj.navigateToScreen(3);
            } else {
                scopeObj.navigateToScreen(2);
            }
        },
        checkUserPasswordAuthenticatorFailureCallback: function(err) {
            kony.application.dismissLoadingScreen();
            scopeObj.navigateToScreen(3);
        },
        validateResponse: function(status, response, error) {
            let res, isServiceFailure, data;
            if (status === kony.mvc.constants.STATUS_SUCCESS) {
                if (response && (response.hasOwnProperty("errcode") || response.hasOwnProperty("dbpErrCode") || response.hasOwnProperty("errmsg") || response.hasOwnProperty("dbpErrMsg"))) {
                    data = {
                        "errorCode": response.errcode ? response.errcode : response.dbpErrCode,
                        "errorMessage": response.errmsg ? response.errmsg : response.dbpErrMsg
                    };
                    res = {
                        "status": false,
                        "data": data,
                        "isServerUnreachable": false
                    };
                } else res = {
                    "status": true,
                    "data": response,
                    "isServerUnreachable": false
                };
            } else {
                if (error.opstatus === 1011) {
                    if (kony.os.deviceInfo().name === "thinclient" && kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY) === false) {
                        location.reload(); //todo later so that it can be in sync with RB
                    } else {
                        isServiceFailure = true;
                        errMsg = error.errmsg ? error.errmsg : error.dbpErrMsg;
                    }
                } else {
                    isServiceFailure = false;
                    errMsg = error.errmsg ? error.errmsg : error.dbpErrMsg;
                }
                if (error.errorCode || error.errorMessage) {
                    data = {
                        "errorCode": error.errorCode,
                        "errorMessage": error.errorMessage ? error.errorMessage : ""
                    };
                } else {
                    data = {
                        "errorCode": error.errcode ? error.errcode : error.dbpErrCode,
                        "errorMessage": error.errmsg ? error.errmsg : error.dbpErrMsg
                    };
                }
                res = {
                    "status": false,
                    "data": data,
                    "isServerUnreachable": isServiceFailure
                };
            }
            return res;
        },
    };
});
define("com/temenos/infinity/mb/sca/activateProfile/activateProfileControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_c0980f892c414e0caa06e92c8ff32042: function AS_FlexContainer_c0980f892c414e0caa06e92c8ff32042(eventobject) {
        var self = this;
        return self.activateProfilePostShow.call(this);
    },
    AS_FlexContainer_a2d7964c35074ea8a4a837bfc937c020: function AS_FlexContainer_a2d7964c35074ea8a4a837bfc937c020(eventobject) {
        var self = this;
        return self.preshow.call(this);
    }
});
define("com/temenos/infinity/mb/sca/activateProfile/activateProfileController", ["com/temenos/infinity/mb/sca/activateProfile/useractivateProfileController", "com/temenos/infinity/mb/sca/activateProfile/activateProfileControllerActions"], function() {
    var controller = require("com/temenos/infinity/mb/sca/activateProfile/useractivateProfileController");
    var actions = require("com/temenos/infinity/mb/sca/activateProfile/activateProfileControllerActions");
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
