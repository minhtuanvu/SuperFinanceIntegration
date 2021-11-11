define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"NO",currentForm);
  },
  preShow:function(){
    if(kony.os.deviceInfo().name !== "iPad"){
      		this.view.flxHeader.isVisible = true;
    	}
    	else{
      		this.view.flxHeader.isVisible = false;
   		 }
    this.view.btnVerify.setEnabled(false);
    this.view.btnVerify.skin="sknBtna0a0a0SSPReg26px";
    this.view.btnVerify.onClick = this.onVerify;
    this.view.flxCheckBox.onClick=this.deviceregOnclick;
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
    this.view.lblError.setVisibility(false);
    var flowType = applicationManager.getPresentationUtility().MFA.getMFAFlowType();
    var userPreferencesManager = applicationManager.getUserPreferencesManager();
    if(flowType == "LoginMFA"&&(userPreferencesManager.isRememberMeOn()===true))
    {
      this.view.flxRememberMyDevice.setVisibility(true);
    }
    else
    {
      this.view.flxRememberMyDevice.setVisibility(false);
    }
  },
   deviceregOnclick:function()
  {
      var authMod= kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    if(this.view.imgTermsAccepted.src==="tickmarkbox.png")
      {
        authMod.presentationController.rememberdeviceregflag=true;
        this.view.imgTermsAccepted.src="a.png";
      }
    else
      {
         authMod.presentationController.rememberdeviceregflag=false;
        this.view.imgTermsAccepted.src="tickmarkbox.png";
      }
  },
  setFormUI : function(mfaAttributes){
     this.view.btnVerify.setEnabled(false);
        this.view.btnVerify.skin="sknBtna0a0a0SSPReg26px";
    if (mfaAttributes.remainingFailedAttempts > 0) {
      this.view.lblError.text = kony.i18n.getLocalizedString("i18n.mfa.incorrectanswer") +
        mfaAttributes.remainingFailedAttempts + " "+ kony.i18n.getLocalizedString("i18n.mfa.remainingAttempts") ;
      this.view.lblError.setVisibility(true);
      this.setSecurityQuestions(mfaAttributes);
    } else if (mfaAttributes.remainingFailedAttempts === "0" && mfaAttributes.lockUser === "true") {
      var msg = kony.i18n.getLocalizedString("kony.mb.mfa.profileLockoutMessage")+mfaAttributes.lockoutTime+"minutes(s)";;
      this.setErrorMessageAndLogout(msg);
      return;
    } else if (mfaAttributes.remainingFailedAttempts === "0" && mfaAttributes.logoutUser === "true") {
      var msg = kony.i18n.getLocalizedString("kony.mb.mfa.profileloginmessage");
      this.setErrorMessageAndLogout(msg);
      return;
    } else {
      this.view.lblError.setVisibility(false);
      this.setSecurityQuestions(mfaAttributes);
    }
    this.view.forceLayout();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
 setSecurityQuestions : function(mfaAttributes){
    var secQuestionsData = mfaAttributes.securityQuestions;
    for(var i=0;i<mfaAttributes.securityQuestions.length;i++){
      secQuestionsData[i].customerAnswer = "";
    }
    var data = secQuestionsData;
    var segdata=[];
    for(var i=0;i<data.length;i++)
      {
        var eachdata={
          "lblQuestion" : data[i].Question,
          "SecurityQuestion_id":data[i].SecurityQuestion_id,
           "tbxAnswer" :{"text":data[i].customerAnswer,"onTextChange" : this.EnableButton}
                 };
        segdata.push(eachdata);
        }
//     var widgetDataMap = {
//       "lblQuestion" : "Question",
//       "tbxAnswer" :{"text":customerAnswer","onTextChange" : this.EnableButton}
//                  }
//       {
//         "text" : "customerAnswer",
//         "onTextChange" : this.EnableButton
//       }
  //  };
   // this.view.segSecurityQuestions.widgetDataMap = widgetDataMap;
    this.view.segSecurityQuestions.setData(segdata);
   // this.EnableButton();
  },
  setErrorMessageAndLogout : function(msg){
    var navManager = applicationManager.getNavigationManager();
    var loginData = navManager.getCustomInfo("frmLoginToast");
    if(loginData)
      loginData.toastMessage = msg;
    else
      loginData = {"toastMessage": msg};
    navManager.setCustomInfo("frmLoginToast",loginData);
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMod.presentationController.onLogout();
  },
  onCancelClick : function(){
    applicationManager.getPresentationUtility().MFA.cancelMFAFlow();
  },
  onVerify : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.view.lblError.setVisibility(false);
    var mfaManager = applicationManager.getMFAManager();
    var params = this.onSaveAnswerSecurityQuestions(this.view.segSecurityQuestions.data);
    applicationManager.getPresentationUtility().MFA.verifySecurityQuestions(params);
  },
  onSaveAnswerSecurityQuestions:function(securityQuestions){
    var data = [];
    for(var i =0;i<securityQuestions.length;i++){
      data[i]={};
      data[i].customerAnswer = securityQuestions[i].tbxAnswer.text;
      data[i].questionId = securityQuestions[i].SecurityQuestion_id;
    }
    return data;
  },
   EnableButton:function(){
    var data = this.view.segSecurityQuestions.data;
    for(var i = 0; i<data.length;i++){
      if(data[i].tbxAnswer.text === ""){
        this.view.btnVerify.setEnabled(false);
        this.view.btnVerify.skin="sknBtna0a0a0SSPReg26px";
        return;
      }
    }
    this.view.btnVerify.setEnabled(true);
    this.view.btnVerify.skin="sknBtn0095e4RoundedffffffSSP26pxz";
  },
  showIncorrectSecurityAnswerError : function(error){
    this.view.lblError.setVisibility(true);
    this.view.lblError.text = error.errorMessage;
	applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.view.forceLayout();
  }
});