define({
  maxNoOfCode : '',
  keypadString : '',
  pos : 0,
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },
  preShow: function() {
    this.initComponent();
    this.initActions();
    this.initHeaderActions();
    this.clearKeypad();
    this.setKeypadActions();
    this.view.lblOTPError.setVisibility(false);
    if(kony.os.deviceInfo().name !== "iPad"){
      		this.view.flxHeader.isVisible = true;
    	}
    	else{
      		this.view.flxHeader.isVisible = false;
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  initComponent: function() {
    var self = this;
  //  var verifyButton = this.view.btnVerify;
   // verifyButton.setEnabled(false);
    var securityCode = this.view.customSecurityCode2;
    securityCode.requiredLength = 6;
    securityCode.enableSSN = false;
//     securityCode.onCodeEntered = function() {
//       self.changeButtonState(true);
//     };
//     securityCode.onCodeRevoked = function() {
//       self.changeButtonState(false);
//     };
    var keypad = this.view.keypad;
    keypad.onDigitEntered = function(digit) {
      securityCode.addDigit(digit);
    };
    keypad.onDigitRemoved = function() {
      securityCode.removeDigit();
    };
  },
  initActions: function() {
    this.view.btnVerify.onClick = this.submitOTP;
    this.view.btnResend.onClick = this.requestResendOTP;
  },
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },
  setKeypadChar : function(num){
    if (this.keypadString.length === parseInt(this.maxNoOfCode))
      return;
    this.keypadString = this.keypadString + num;
    this.view.customSecurityCode2.setSecurityCodeChar(this.pos,num);
    this.pos++;
    this.enableVerifyButton();
  },
  clearKeypad : function(){
    this.keypadString = '';
    this.pos = 0;
    this.clearKeypadChar();
  },
  clearKeypadChar : function () {
    if(this.keypadString.length === 0) {
      this.keypadString = '';
      for(i=0;i<this.maxNoOfCode;i++)
        this.view.customSecurityCode2.setPlaceholder(i);
    }
    if (this.keypadString.length !== 0) {
      var clearpos = this.pos--;
      this.view.customSecurityCode2.setPlaceholder(clearpos-1);
      this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
    }
    this.enableVerifyButton();
  },
  changeButtonState: function(enable) {
    var verifyButton = this.view.btnVerify;
    verifyButton.setEnabled(enable);
    var skin = enable ? "sknBtnRnd4pxffffffSSPReg36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
    verifyButton.skin = skin;
  },
  setFormUI : function(mfaResponse){
    if(mfaResponse.MFAAttributes.isOTPExpired){
      this.view.lblOTPError.text = kony.i18n.getLocalizedString("kony.mb.mfa.otpexpirymessage");
      this.view.lblOTPError.setVisibility(true);
      this.clearKeypad();
    }
    else if(mfaResponse.MFAAttributes.remainingResendAttempts<=0){
      this.view.btnResend.setVisibility(false);
      this.view.lblOTPError.setVisibility(false);
    }
    else if(mfaResponse.MFAAttributes.remainingResendAttempts>0){
      this.view.btnResend.setVisibility(true);
      //this.view.flxMain.flxLeft.btnResend.setVisibility(true);
    }
	if(mfaResponse.MFAAttributes.sacCodeLength)
      this.maxNoOfCode = mfaResponse.MFAAttributes.sacCodeLength;
    this.view.customSecurityCode2.setMaxNoOfChars(this.maxNoOfCode);
    this.setFormUIBasedOnCommunicationType(mfaResponse);
    this.view.forceLayout();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
   setFormUIBasedOnCommunicationType: function(mfaResponse) {
        var communicationType = mfaResponse.MFAAttributes.communicationType;
        if (communicationType == "DISPLAY_NO_VALUE") {
            var customerCommunicationInfo = mfaResponse.MFAAttributes.customerCommunication;
            this.view.lblSecCodeMsg.text = "Please enter the " + this.maxNoOfCode + " digit security code sent to your primary email/phone number";
            //this.view.flxDetails.setVisibility(false);
        } else if (communicationType == "DISPLAY_ALL") {
            // this.view.lblEnterInfoSubtitle.text = "Please enter the "+ this.maxNoOfCode +" digit security code sent to";
            var phone = mfaResponse.MFAAttributes.phone;
            var email = mfaResponse.MFAAttributes.email;
            if (phone !== undefined && email !== undefined) {
                this.view.lblSecCodeMsg.text = "Enter Secure Access Code sent on your " + mfaResponse.MFAAttributes.phone + " & " + mfaResponse.MFAAttributes.email;
                //  this.view.lblMobNoValue.text = mfaResponse.MFAAttributes.customerCommunication.phone[0].masked;
                //  this.view.lblEmailIdValue.text = mfaResponse.MFAAttributes.customerCommunication.email[0].masked;
            } else if (phone === undefined) {
                this.view.lblSecCodeMsg.text = "Enter Secure Access Code sent on your " + mfaResponse.MFAAttributes.email;
                // this.view.lblAnd.setVisibility(false);
                //   this.view.lblEmailIdValue.setVisibility(false);
            } else {
                this.view.lblSecCodeMsg.text = "Enter Secure Access Code sent on your " + mfaResponse.MFAAttributes.phone;
                //     this.view.lblEmailIdValue.setVisibility(false);
                //     this.view.lblAnd.setVisibility(false);
            }
            //this.view.flxDetails.setVisibility(true);
        } else {
            this.view.lblSecCodeMsg.text = "Please enter the " + this.maxNoOfCode + " digit security code";
            //this.view.flxDetails.setVisibility(false);
        }
    },
  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },
  onClickCancel: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },
  /*
  * Code to resend OTP
  */
  requestResendOTP: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    var response = enrollMod.presentationController.MFAresponse;
    if(response.length !== 0){
    if(response && response.MFAAttributes.remainingResendAttempts > 1)
      this.view.btnResend.isVisible=true;
    else
      this.view.btnResend.isVisible=false;
    }
    enrollMod.presentationController.resendMFAOTP();
  },
  /*
  * code to submit OTP
  */
  submitOTP: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var otp = this.keypadString;
    if (applicationManager.getPresentationValidationUtility().isValidTextBox(otp)) {
//       var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
//       enrollModule.presentationController.validateOTP(otp);
       var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
      	 enrollMod.presentationController.verifyMFAOTP(otp);
    } else {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.enterSecurityCode");
      this.bindGenericError(errorMsg);
    }
  },
  enableVerifyButton : function(){
    if(this.pos == this.maxNoOfCode){
      this.view.btnVerify.setEnabled(true);
      this.view.btnVerify.skin = "sknBtn0095e4RoundedffffffSSP26pxz";
    }
    else{
      this.view.btnVerify.setEnabled(false);
      this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
    }
  },
  setKeypadActions : function(){
    var scope = this;
    this.view.keypad.btnOne.onClick = function(){
      scope.setKeypadChar("1");
    };
    this.view.keypad.btnTwo.onClick = function(){
      scope.setKeypadChar("2");
    };
    this.view.keypad.btnThree.onClick = function(){
      scope.setKeypadChar("3");
    };
    this.view.keypad.btnFour.onClick = function(){
      scope.setKeypadChar("4");
    };
    this.view.keypad.btnFive.onClick = function(){
      scope.setKeypadChar("5");
    };
    this.view.keypad.btnSix.onClick = function(){
      scope.setKeypadChar("6");
    };
    this.view.keypad.btnSeven.onClick = function(){
      scope.setKeypadChar("7");
    };
    this.view.keypad.btnEight.onClick = function(){
      scope.setKeypadChar("8");
    };
    this.view.keypad.btnNine.onClick = function(){
      scope.setKeypadChar("9");
    };
    this.view.keypad.btnZero.onClick = function(){
      scope.setKeypadChar("0");
    };
    this.view.keypad.imgClearKeypad.onTouchStart = function(){
      scope.clearKeypadChar();
    };
  },
  showIncorrectOTPError:function(response){
    if (response.MFAAttributes.remainingFailedAttempts && response.MFAAttributes.remainingFailedAttempts > 0) {
      this.view.lblOTPError.text= kony.i18n.getLocalizedString("kony.mb.mfa.invalidAccessCode")+" " + kony.i18n.getLocalizedString("kony.mb.mfa.youHaveOnly")+" "+response.MFAAttributes.remainingFailedAttempts + " "+kony.i18n.getLocalizedString("i18n.mfa.remainingAttempts");
      this.view.lblOTPError.setVisibility(true);
       this.clearKeypad();
       applicationManager.getPresentationUtility().dismissLoadingScreen();
    } else if (response.MFAAttributes.remainingFailedAttempts === "0" && response.MFAAttributes.lockUser === "true") {
      var msg = "You’ve exceeded the authentication attempts limit. Please try again";
      this.setErrorMessageAndLogout(msg);
    } else if (response.MFAAttributes.remainingFailedAttempts === "0" && response.MFAAttributes.logoutUser === "true") {
      var msg = "You’ve exceeded the authentication attempts limit. Please try again";
      this.setErrorMessageAndLogout(msg);
    } else {
      this.view.lblOTPError.setVisibility(false);
       this.clearKeypad();
       applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
   // this.clearKeypad();
    this.view.forceLayout();
   // applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setErrorMessageAndLogout : function(msg){
    var navManager = applicationManager.getNavigationManager();
    var loginData = navManager.getCustomInfo("frmLoginToast");
    if(loginData)
      loginData.toastMessage = msg;
    else
      loginData = {"toastMessage": msg};
    navManager.setCustomInfo("frmLoginToast",loginData);
    navManager.navigateTo("frmLogin");
  },
  /*
  * Code to show error
  */
  bindGenericError: function(errorMsg) {
    applicationManager.getDataProcessorUtility().showToastMessageError(this, errorMsg);
  }
});