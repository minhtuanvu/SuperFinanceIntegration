define(function() {
  const OfflineSign_CONTEXT = {
    currScreenNum: 1,
    accountNumber: null,
    amount: null,
    otp: null
  };
  const SDKConstants = {
    "PIN_REQUEST" : 100,
    "OKRA_OTP_GENERATED" : 107,
    "TX_ACCEPTED" : 101,
    "TX_DENIED"   : 102
  };
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    
    preShowOfflineSigning: function(){
      this.setTextAndSkinFromProperties();
      this.resetUI();
      this.setFlowActions();
    },
    
    setFlowActions: function(){
      const scopeObj = this;
      this.view.flxBack.onTouchEnd = function(){
        scopeObj.backBtnClickHandler();        
      };
      this.view.btnCancel.onClick = function(){
        scopeObj.navigateToPreviousForm();
      };
      this.view.flxClearAmount.onTouchEnd = function(){
        scopeObj.view.tbxAmount.text = "";
      };
      this.view.btnContinue.onClick = function(){
        const currScreen = OfflineSign_CONTEXT.currScreen;
        let proceed = scopeObj.shouldProceed(currScreen);
        if(proceed){
          scopeObj.navigateToScreen(currScreen+1);
        }
      };
      this.view.btnGenerateCode.onClick = function(){
        OfflineSign_CONTEXT.accountNumber = scopeObj.view.tbxAccountNumber.text;
        OfflineSign_CONTEXT.amount = scopeObj.view.tbxAmount.text;
        scopeObj.generateCode();
      };
      this.view.btnCreateNewSignature.onClick = function(){
        scopeObj.resetUI();
        scopeObj.navigateToScreen(1);
      };
      this.view.btnDashboard.onClick = function(){
        const navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmUnifiedDashboard");
      };
      this.view.flxModify1.onTouchEnd = function(){
        scopeObj.navigateToScreen(1);
      };
      this.view.flxModify2.onTouchEnd = function(){
        scopeObj.navigateToScreen(2);
      };
      this.view.tbxAccountNumber.onTextChange = this.hideErrorMessage;
      this.view.tbxAmount.onTextChange = this.hideErrorMessage;
    },
    
    resetUI: function(){      
      this.view.flxBack.setVisibility(true);
      this.view.btnCancel.setVisibility(true);
      this.view.tbxAccountNumber.text = "";
      this.view.tbxAmount.text = "";      
      OfflineSign_CONTEXT.accountNumber = "";
      OfflineSign_CONTEXT.amount = "";
      OfflineSign_CONTEXT.otp = "";
      this.navigateToScreen(1);
    },
    
    generateCode: function(){
      const scopeObj = this;
      const currentForm = kony.application.getCurrentForm();
      const userManager = applicationManager.getUserPreferencesManager();
      const userName = userManager.getUserObj().userName;
      const OKRAcontext = OfflineSign_CONTEXT.accountNumber + "|" + OfflineSign_CONTEXT.amount;
      scopeObj.view.sdk.generateOCRAOTP(userName, OKRAcontext, function(status, otpJSON) {
        const otp = JSON.parse(otpJSON).otp;
        OfflineSign_CONTEXT.otp = otp;
        const context = OfflineSign_CONTEXT.accountNumber + "|" + OfflineSign_CONTEXT.amount;
        if(SDKConstants.PIN_REQUEST === status) {
          var pinLength = JSON.parse(otpJSON).MAX_LENGTH;
          var sdk = hidApplicationSDKManager.getSdkInstance();
          if(currentForm.sdk) {
            currentForm.remove(sdk);
          }
          currentForm.add(sdk);
          currentForm.sdk.setVisibility(true);
          currentForm.sdk.showPinDialog(pinLength);
        } else if(SDKConstants.OKRA_OTP_GENERATED === status) {
          currentForm.sdk.hidePinDialog();
          if(currentForm.sdk) {
            currentForm.remove(currentForm.sdk);
          }
          scopeObj.navigateToScreen(4);
        }
      });
    },
    
    backBtnClickHandler: function(){
      const currScreen = OfflineSign_CONTEXT.currScreen;
      if(currScreen===1){
        const ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
        ntf.navigate();
      } else {
        this.navigateToScreen(currScreen-1);
      }
    },
    
    navigateToPreviousForm: function(){
      const ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
      ntf.navigate();
    },
    
    shouldProceed: function(currScreen){
      let proceed = false;
      if(currScreen===1){
        const inputAccountNumber = this.view.tbxAccountNumber.text;
        proceed = this.validateAccountNumber(inputAccountNumber);
      } else if(currScreen===2){
        const inputAmount = this.view.tbxAmount.text;
        proceed = this.validateAmount(inputAmount);          
      }
      return proceed;
    },
    
    validateAccountNumber: function(inputAccountNumber) {
      // TODO: The following REGEX is not confirmed yet. (AAC-8578)
      const accountNumberRegex = /^[\d\w]*$/gi;
      if (!inputAccountNumber || inputAccountNumber === "") {
        this.view.flxErrorMsg.setVisibility(true);
        this.view.lblErrorMsg.text = "Account Number field cannot be empty.";
        return false;
      }
      if(accountNumberRegex.test(inputAccountNumber)){
        return true;
      }
      this.view.flxErrorMsg.setVisibility(true);
      this.view.lblErrorMsg.text = "Please enter a valid Account Number";
      return false;
    },
    
    validateAmount: function(inputAmount) {
      const amountRegex = /^\d*\.?\d*$/;
      if (!inputAmount || inputAmount === "") {
        this.view.flxErrorMsg.setVisibility(true);
        this.view.lblErrorMsg.text = "Amount filed cannot be empty.";
        return false;
      }
      if(amountRegex.test(inputAmount)){
        return true;
      }
      this.view.flxErrorMsg.setVisibility(true);
      this.view.lblErrorMsg.text = "Please enter a valid amount number.";
      return false;
    },
    
    hideErrorMessage: function(){
      this.view.flxErrorMsg.setVisibility(false);
    },
    
    navigateToScreen: function(screenNumber){
      if(screenNumber>=1 && screenNumber<=4){
        this[`showScreen${screenNumber}`]();
      }
    },
        
    showScreen1: function(){
      // ACCOUNT NUMBER SCREEN
      OfflineSign_CONTEXT.currScreen = 1;
      this.view.lblScreenName.text = "Account Number";
      this.view.flxInputContainer.setVisibility(true);
      this.view.flxVerifyDetailsContainer.setVisibility(false);
      this.view.flxSuccessContainer.setVisibility(false);
      this.view.lblTopMsg.text = "Enter the recipient's IBAN number";
      this.view.flxErrorMsg.setVisibility(false);
      this.view.flxAccountNumber.setVisibility(true);
      this.view.flxAmount.setVisibility(false);      
    },
    
    showScreen2: function(){
      // AMOUNT SCREEN
      OfflineSign_CONTEXT.currScreen = 2;
      this.view.lblScreenName.text = "Amount";
      this.view.flxInputContainer.setVisibility(true);
      this.view.flxVerifyDetailsContainer.setVisibility(false);
      this.view.flxSuccessContainer.setVisibility(false);      
      this.view.lblTopMsg.text = "Enter the amount";
      this.view.flxErrorMsg.setVisibility(false);
      this.view.flxAccountNumber.setVisibility(false);
      this.view.flxAmount.setVisibility(true);      
    },
    
    showScreen3: function(){
      // VERIFY DETAILS SCREEN
      OfflineSign_CONTEXT.currScreen = 3;
      this.view.lblScreenName.text = "Verify Details";
      this.view.flxInputContainer.setVisibility(false);
      this.view.flxVerifyDetailsContainer.setVisibility(true);
      this.view.flxSuccessContainer.setVisibility(false);
      this.view.lblAccountNumberDetail.text = this.view.tbxAccountNumber.text;
      this.view.lblAmountDetail.text = this.view.tbxAmount.text;
    },
    
    showScreen4: function(){
      // ACKNOWLEDGEMENT SCREEN
      OfflineSign_CONTEXT.currScreen = 4;
      this.view.lblScreenName.text = "Acknowledgement";
      this.view.flxInputContainer.setVisibility(false);
      this.view.flxVerifyDetailsContainer.setVisibility(false);
      this.view.flxSuccessContainer.setVisibility(true);
      this.view.lblCode.text = OfflineSign_CONTEXT.otp;
      this.view.lblAccountNumberDetail1.text = OfflineSign_CONTEXT.accountNumber;
      this.view.lblAmountDetail1.text = OfflineSign_CONTEXT.amount;
      this.view.flxBack.setVisibility(false);
      this.view.btnCancel.setVisibility(false);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    
    getStringFromi18n: function(stringValue){
      return  kony.i18n.getLocalizedString(stringValue) ? kony.i18n.getLocalizedString(stringValue) : stringValue;
    },
    
    setTextAndSkinFromProperties: function(){  
    },
  };
});