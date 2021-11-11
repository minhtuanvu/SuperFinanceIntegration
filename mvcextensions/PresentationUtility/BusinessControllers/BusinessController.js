/**
*@module PresentationUtility
*/
define([], function () {
  /**
   * PresentationUtility consists of all utilities anf wrapper functions related to Presentation
   *@alias module:PresentationUtility
   *@class
*/
  function PresentationUtility() {
    /*
  A variable maintained to store row index globally on swipe
  Note:It is maintained to delete on swipe till platform fix issue related to segment
*/
    /**@member {integer}  number to maintain index for swipe*/
    this.rowIndexforSwipe=-1;
    /**@member {integer}  number to maintain tap gesture enabled or not*/
    this.tapgestureEnabled= true;
  }
  inheritsFrom(PresentationUtility, kony.mvc.Business.Delegator);
  PresentationUtility.prototype.initializeBusinessController = function() {
  };
  /**
  * A wrapper on kony alert message for further use
  * @param {JSON} basicConfig - same as basicConfig in kony.ui.Alert
  * @param {JSON} pspConfig - same as pspConfig in kony.ui.Alert
*/
  PresentationUtility.prototype.showAlertMessage =  function(basicConfig, pspConfig ){
    if(applicationManager.getPresentationFormUtility().getDeviceName() === "android"){
      basicConfig.alertIcon="transparentbox.png";
    }
    kony.ui.Alert(basicConfig, pspConfig);
  }
  /**
  * Returns value of given i18n key in device's locale
  * @param {String} i18n Key - an i18n key to look out for
  * @param {String} noKeyValue(optonal) - returns this when lookout failed
  * @returns {String} - value associated to that key if its not there noKeyValue is returned
  */
  PresentationUtility.prototype.getStringFromi18n = function (stringValue,noKeyValue)
  {
    return  kony.i18n.getLocalizedString(stringValue) ? kony.i18n.getLocalizedString(stringValue):noKeyValue;
  }
  /**
  * A UI function to show loading indicator
*/
  PresentationUtility.prototype.showLoadingScreen = function(){
    kony.application.showLoadingScreen(null,"", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
  }
  /**
  * A UI function to dismiss loading indicator
*/
  PresentationUtility.prototype.dismissLoadingScreen = function(){
    kony.application.dismissLoadingScreen();
  }
  /**
  * Returns the controller of the requested form
  * @param {String} formname - Name of the form for which the controller is required
  * @param {Boolean} isForm - expects true if the requested controller is of a form
  * @returns {object} - returns the requested controller(kony.mvc.MDAFormController)
  */
  PresentationUtility.prototype.getController = function(formname,isForm){
    var controller = _kony.mvc.GetController(formname, isForm);
    return controller;
  };
  PresentationUtility.prototype.MFA = {
    phoneAndEmail : {
      "phone": "",
      "email": ""},
    setPhoneAndEmail : function(phoneAndEmail){
      this.phoneAndEmail = phoneAndEmail;
    },
    getPhoneAndEmail : function(){
      return this.phoneAndEmail;
    },
    navigateBasedOnMFAType : function() {
      var mfaManager = applicationManager.getMFAManager();
      switch(mfaManager.getMFAType()){
        case "SECURE_ACCESS_CODE" :
          this.navigateToOtpScreen();
          break;
        case "SECURITY_QUESTIONS" :
          this.navigateAndSetSecurityQuestions();
          break;
      }
    },
    navigateToOtpScreen : function() {
      var mfaManager = applicationManager.getMFAManager();
      switch(mfaManager.getCommunicationType()){
        case "DISPLAY_ALL" :
          this.navigateToPhoneEmailScreen();
          break;
        case "DISPLAY_NO_VALUE" :
          this.navigateToSecureCodeScreen();
          break;
        case "DISPLAY_PRIMARY" :
          this.navigateToSecureCodeScreen();
          break;
      }
    },
    navigateToPhoneEmailScreen : function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navigationManager = applicationManager.getNavigationManager();
      var mfaManager = applicationManager.getMFAManager();
      var flowType = mfaManager.getMFAFlowType();
      var operationType = mfaManager.operationType;
      if(operationType === "MONEYMOVEMENT" || operationType === "EUROPETRANSFER"){
        navigationManager.navigateTo("frmMFAOption3",true);
      }
      else{
        navigationManager.navigateTo("frmMFAOption3");
      }
      var mfaResponse = mfaManager.getMFAResponse();
      var controller = applicationManager.getPresentationUtility().getController('frmMFAOption3', true);
      controller.setFormUI(mfaResponse,flowType);
    },
    navigateToSecureCodeScreen : function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navigationManager = applicationManager.getNavigationManager();
      var mfaManager = applicationManager.getMFAManager();
      var operationType = mfaManager.operationType;
      if(operationType === "MONEYMOVEMENT" || operationType === "EUROPETRANSFER"){
        navigationManager.navigateTo("frmMFASecurityCode",true);
      }
      else{
        navigationManager.navigateTo("frmMFASecurityCode");
      }
      var mfaResponse = mfaManager.getMFAResponse();
      var controller = applicationManager.getPresentationUtility().getController('frmMFASecurityCode', true);
      controller.setFormUI(mfaResponse);
    },
    setSecureCodeScreen : function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var mfaManager = applicationManager.getMFAManager();
      var mfaResponse = mfaManager.getMFAResponse();
      var controller = applicationManager.getPresentationUtility().getController('frmMFASecurityCode', true);
      controller.setFormUI(mfaResponse);
    },
    showMFAOTPScreen : function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navigationManager = applicationManager.getNavigationManager();
      var mfaManager = applicationManager.getMFAManager();
      var operationType = mfaManager.operationType;
      if(operationType === "MONEYMOVEMENT" || operationType === "EUROPETRANSFER"){
        navigationManager.navigateTo("frmMFASecurityCode",true);
      }
      else{
        navigationManager.navigateTo("frmMFASecurityCode");
      }
      var mfaResponse = mfaManager.getMFAResponse();
      var controller = applicationManager.getPresentationUtility().getController('frmMFASecurityCode', true);
      controller.setFormUI(mfaResponse);
    },
    navigateAndSetSecurityQuestions : function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var mfaManager = applicationManager.getMFAManager();
      var operationType = mfaManager. operationType;
      if(operationType === "MONEYMOVEMENT" || operationType === "EUROPETRANSFER"){
        navManager.navigateTo("frmSecurityQuestions",true);
      }
      else{
        navManager.navigateTo("frmSecurityQuestions");
      }
      var controller = applicationManager.getPresentationUtility().getController('frmSecurityQuestions', true);
      var mfaAttributes = mfaManager.getMFAResponse().MFAAttributes;
      controller.setFormUI(mfaAttributes);
    },
    navigateToSecurityQuestion : function(){
      var controller = applicationManager.getPresentationUtility().getController('frmSecurityQuestions', true);
      var mfaManager = applicationManager.getMFAManager();
      var mfaAttributes = mfaManager.getMFAResponse().MFAAttributes;
      controller.setFormUI(mfaAttributes);
    },
    setSecurityQuestions : function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var controller = applicationManager.getPresentationUtility().getController('frmSecurityQuestions', true);
      var mfaManager = applicationManager.getMFAManager();
      var mfaAttributes = mfaManager.getMFAResponse().MFAAttributes;
      controller.setFormUI(mfaAttributes);
    },
    cancelMFAFlow : function(){
      var mfaManager = applicationManager.getMFAManager();
       var flowType = mfaManager.getMFAFlowType();
      var operationType=mfaManager.operationType;
      if(operationType==="Transfers")
      {
         mfaManager.setMFAOperationType("");
        var transferModule = applicationManager.getModulesPresentationController("TransferModule");
        transferModule.cancelCommon();
     
      }
      else if(operationType==="MONEYMOVEMENT")
      {
         mfaManager.setMFAOperationType("");
        var moneyMovementPresentationController = applicationManager.getModulesPresentationController("MoneyMovementModule");
        moneyMovementPresentationController.cancelCommon();
      }
      else if(operationType==="EUROPETRANSFER")
      {
         mfaManager.setMFAOperationType("");
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.cancelCommon();
      }
      else if(operationType==="BILLPAY")
        {
           mfaManager.setMFAOperationType("");
          var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.cancelCommon(); 
          
        }
      else if(operationType==="PAYAPERSON")
      {
        mfaManager.setMFAOperationType("");
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        p2pMod.presentationController.cancelCommon();

      }
      else if(operationType === "LOANPAYOFF") {
        mfaManager.setMFAOperationType("");
        var loansMod = applicationManager.getModulesPresentationController("LoansPayoffModule");
        loansMod.cancelCommon();
      }
      else
      {
        switch(flowType){

         
          case "LoginMFA":
            var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMod.presentationController.onLogout();
            break;
          case "UPDATE_USERNAME":
            var navigationManager=applicationManager.getNavigationManager();
            navigationManager.navigateTo('frmSettings');
            break;
          case "UPDATE_PASSWORD":
            var navigationManager=applicationManager.getNavigationManager();
            navigationManager.navigateTo('frmSettings');
            break;
          case "LOCK_CARD":
            var cardsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            cardsMod.presentationController.cancelCommon();
            break;
          case "UNLOCK_CARD":
            var cardsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            cardsMod.presentationController.cancelCommon();
            break;
          case "CHANGE_PIN_DEBIT":
            var cardsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            cardsMod.presentationController.cancelCommon();
            break;
          case "REPORT_LOST":
            var cardsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            cardsMod.presentationController.cancelCommon();
            break;
          case   "CANCEL_CARD":
            var cardsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            cardsMod.presentationController.cancelCommon();
            break;
          case  "REPLACE_CARD":
            var cardsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            cardsMod.presentationController.cancelCommon();
            break;
          case "CHANGE_PIN_CREDIT":
            var cardsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            cardsMod.presentationController.cancelCommon();
            break;
           case "ACTIVATE_CARD":
            var cardsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            cardsMod.presentationController.cancelCommon();
            break;
           case "APPLY_FOR_DEBIT_CARD":
            var cardsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            cardsMod.presentationController.cancelCommon();
            break;
             case "PSD2_TPP_CONSENT_REVOKED":
           var navigationManager=applicationManager.getNavigationManager();
            navigationManager.navigateTo('frmSettings');
            break;
        }
      }
    },
    resendOTP:function(data)
    {
        var mfaManager = applicationManager.getMFAManager();
      var data = {
        "MFAAttributes" : {
          "serviceName" : mfaManager.getServiceId(),
          "serviceKey" : mfaManager.getServicekey(),
          "OTP" : data
        }
      };
       mfaManager.resendOTP(data);
    },
    verifyOTP : function(data){
      var mfaManager = applicationManager.getMFAManager();
      var data = {
        "MFAAttributes" : {
          "serviceName" : mfaManager.getServiceId(),
          "serviceKey" : mfaManager.getServicekey(),
          "OTP" : data
        }
      };
      mfaManager.verifyOTP(data);
    },
    enteredIncorrectOTP : function(error){
      var controller = applicationManager.getPresentationUtility().getController('frmMFASecurityCode', true);
      controller.showIncorrectOTPError(error);
    },
    navigateToAckScreen : function(response){
      var mfaManager = applicationManager.getMFAManager();
       var flowType = mfaManager.getMFAFlowType();
      var operationType=mfaManager.operationType;
       if(operationType==="Transfers")
          {
             mfaManager.setMFAOperationType("");
            var transferModule = applicationManager.getModulesPresentationController("TransferModule");
            transferModule.presentationMakeATransferSuccess(response);
           
          }
          else if(operationType==="MONEYMOVEMENT")
          {
             mfaManager.setMFAOperationType("");
            var moneyMovementPresentationController = applicationManager.getModulesPresentationController("MoneyMovementModule");
            moneyMovementPresentationController.presentationMakeATransferSuccess(response); 
          }
      else if(operationType==="EUROPETRANSFER")
      {
        mfaManager.setMFAOperationType("");
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.presentationMakeATransferSuccess(response);
      }
      else if(operationType==="BILLPAY")
        {
           mfaManager.setMFAOperationType("");
         var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
          billPayMod.presentationController.presentationMakeATransferSuccess(response);
         
        }
      else if(operationType==="PAYAPERSON")
        {
           mfaManager.setMFAOperationType("");
          var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
          p2pMod.presentationController.createP2pSuccCallback(response);
         
        }
      else if(operationType === "LOANPAYOFF") {
        mfaManager.setMFAOperationType("");
        var loansMod = applicationManager.getModulesPresentationController("LoansPayoffModule");
        loansMod.presentationMakeATransferSuccess(response);
      }
      else
        {
      switch(flowType){
     
		case "LoginMFA":
          var authMod= kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
          authMod.presentationController.mfaLoginFlow(response);
          break;
        case "UPDATE_USERNAME":
          var settingModule = applicationManager.getModulesPresentationController("SettingsModule");
          settingModule.updateUserNameSuccess(response);
          break;
        case "UPDATE_PASSWORD":
          var settingModule = applicationManager.getModulesPresentationController("SettingsModule");
          settingModule.updatePasswordSuccess(response);
          break;
           case "LOCK_CARD":
         var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataSuccessCallback(response);
          break;
        case "UNLOCK_CARD":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataSuccessCallback(response);
          break;
        case "CHANGE_PIN_DEBIT":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataSuccessCallback(response);
          break;
        case "REPORT_LOST":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataSuccessCallback(response);
          break;
        case   "CANCEL_CARD":
           var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataSuccessCallback(response);
          break;
        case  "REPLACE_CARD":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataSuccessCallback(response);
          break;
        case "CHANGE_PIN_CREDIT":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataSuccessCallback(response);
          break;
         case "ACTIVATE_CARD":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.activateCardsSuccess(response);
          break;
         case "APPLY_FOR_DEBIT_CARD":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.applyNewCardSuccess(response);
          break;
           case "PSD2_TPP_CONSENT_REVOKED":
          var settingModule = applicationManager.getModulesPresentationController("SettingsModule");
          settingModule.updatePSDConsentSuccess(response);
          break;
      }
       
      }
        
    },
	navigateToTransactionScreen: function(response) {
		this.onMFAError(response);
	},
    onMFAError : function(error){
      var mfaManager = applicationManager.getMFAManager();
       var flowType = mfaManager.getMFAFlowType();
      var operationType=mfaManager.operationType;
       if(operationType==="Transfers")
          {
             mfaManager.setMFAOperationType("");
              var transferModule = applicationManager.getModulesPresentationController("TransferModule");
          transferModule.presentationMakeATransferError(error);
          }
          else if(operationType==="MONEYMOVEMENT")
          {
             mfaManager.setMFAOperationType("");
            var moneyMovementPresentationController = applicationManager.getModulesPresentationController("MoneyMovementModule");
            moneyMovementPresentationController.presentationMakeATransferError(error);
          }
      else if(operationType==="EUROPETRANSFER")
      {
        mfaManager.setMFAOperationType("");
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.presentationMakeATransferError(error);
      }
          else if(operationType==="BILLPAY")
        {
           mfaManager.setMFAOperationType("");
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
          billPayMod.presentationController.presentationMakeATransferError(error);
        }
      else if(operationType==="PAYAPERSON")
        {
           mfaManager.setMFAOperationType("");
          var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
          p2pMod.presentationController.createP2pErrCallback(error);
        }
      else if(operationType === "LOANPAYOFF") {
        mfaManager.setMFAOperationType("");
        var loansMod = applicationManager.getModulesPresentationController("LoansPayoffModule");
        loansMod.presentationMakeATransferError(response);
      }
      else
        {
      switch(flowType){
    
        case "LoginMFA":
            var controller = applicationManager.getPresentationUtility().getController('frmMFASecurityCode', true);
            controller.setErrorMessageAndLogout(error);
          break;
           case "UPDATE_USERNAME":
          var settingModule = applicationManager.getModulesPresentationController("SettingsModule");
          settingModule.updateUserNameFailure(error);
          break;
        case "UPDATE_PASSWORD":
          var settingModule = applicationManager.getModulesPresentationController("SettingsModule");
          settingModule.updatePasswordFailure(error);
          break;
        case "LOCK_CARD":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataFailureCallback(error);
          break;
        case "UNLOCK_CARD":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataFailureCallback(error);
          break;
        case "CHANGE_PIN_DEBIT":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataFailureCallback(error);
          break;
        case "REPORT_LOST":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataFailureCallback(error);
          break;
        case   "CANCEL_CARD":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataFailureCallback(error);
          break;
        case  "REPLACE_CARD":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataFailureCallback(error);
          break;
           case "CHANGE_PIN_CREDIT":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.updateCardDataFailureCallback(error);
          break;
           case "ACTIVATE_CARD":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.activateCardsFailure(error);
          break;
         case "APPLY_FOR_DEBIT_CARD":
          var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
          manageCardsModule.presentationController.applyNewCardError(error);
          break;
           case "PSD2_TPP_CONSENT_REVOKED":
          var settingModule = applicationManager.getModulesPresentationController("SettingsModule");
          settingModule.updatePSDConsentFailure(error);
          break;
      }
        }
    },
    requestOTP : function(params){
      var mfaManager = applicationManager.getMFAManager();
      var data = {
        "MFAAttributes" : {
          "serviceName" : mfaManager.getServiceId(),
          "serviceKey" : mfaManager.getServicekey(),
          "OTP" : params
        }
      };
      mfaManager.requestOTP(data);
    },
    mfaOTPError : function(err){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      if (err["isServerUnreachable"]) {
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
      }
      else{
        var currentForm = kony.application.getCurrentForm().id;
        var controller = applicationManager.getPresentationUtility().getController(currentForm, true);
        controller.bindError(err.errorMessage);
      }
    },
    verifySecurityQuestions:function(data){
      var mfaManager = applicationManager.getMFAManager();
      var inputparams = {
        "MFAAttributes" : {
          "serviceName" : mfaManager.getServiceId(),
          "serviceKey" : mfaManager.getServicekey(),
          "securityQuestions" : data
        }
      };
      mfaManager.verifySecurityQuestions(inputparams);
    },
    getMFAResponse : function(){
      var mfaManager = applicationManager.getMFAManager();
      return mfaManager.getMFAResponse();
    },
    enteredIncorrectAnswer : function(err){
      var controller = applicationManager.getPresentationUtility().getController('frmSecurityQuestions', true);
      controller.showIncorrectSecurityAnswerError(err);
    },
    getMFAFlowType : function(){
      var mfaManager = applicationManager.getMFAManager();
      return mfaManager.getMFAFlowType();
    },
    getServiceIdBasedOnDisplayName : function(displayName){
      var configManager = applicationManager.getConfigurationManager();
      var mfaManager = applicationManager.getMFAManager();
      var services = configManager.getServicesListForUser();
      for (var i = 0; i < services.length; i++) {
        if(services[i].displayName === displayName){
          mfaManager.setServiceId(services[i].serviceId);
        }
      }
    },
    getDisplayNameBasedOnTransactionMode : function(moduleName){
      var transferModulePresentationController
      if(moduleName)
        transferModulePresentationController = applicationManager.getModulesPresentationController(moduleName);
      else
        transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
      var mfaManager = applicationManager.getMFAManager();
      var displayName = "";
      switch(transferModulePresentationController.transactionMode){
        case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts") :
          displayName = "KonyBankAccountsTransfer";
          break;
        case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers") :
          displayName = "OtherKonyAccountsTransfer";
          break;
        case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts") :
          displayName = "OtherBankAccountsTransfer";
          break;
        case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer") :
          displayName = "InternationalAccountsTransfer";
          break;
        default :
          displayName = transferModulePresentationController.transactionMode;
          break;
      }
      return displayName;
    },
    navigateToMFAComponent : function(response){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navigationManager = applicationManager.getNavigationManager();
      var mfaManager = applicationManager.getMFAManager();
      var operationType = mfaManager.operationType;
      navigationManager.setCustomInfo("frmMFAValidation",response);
      if(operationType === "MONEYMOVEMENT" || operationType === "EUROPETRANSFER"){
        navigationManager.navigateTo("frmMFAValidation",true);
      }
      else{
        navigationManager.navigateTo("frmMFAValidation");
      }
    },
  };
  PresentationUtility.prototype.formatText=function(accountName,noOfChars,accountNumber,beginIndex){
    var truncatedAccName = "";
    var truncatedAccNum="";
    var formattedAccName ="";
    if (accountName && accountNumber && accountName.length > noOfChars) {
      truncatedAccName = accountName.substring(0, noOfChars - 1);
    } else {
      truncatedAccName = accountName;
    }
    if (accountNumber && accountNumber.length > beginIndex) {
      truncatedAccNum = accountNumber.substr(accountNumber.length - beginIndex);
    } else {
      if(accountNumber){
        truncatedAccNum = accountNumber;
      }
    }
    if(truncatedAccNum){
      formattedAccName = truncatedAccName + "..." + truncatedAccNum;
    }
    else{
      formattedAccName = truncatedAccName ;
    }
    return formattedAccName;
  };
  return PresentationUtility;
});