define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preshow : function(){
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.view.imgTermsAccepted.src="tickmarkbox.png";
    this.view.btnContinue.setEnabled(false);
    this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    this.view.btnContinue.onClick = this.navigateToBankLogin;
    this.view.flxCheckBox.onClick=this.toggleCheckBox;
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmExternalAccountsTermsAndConditions");
    this.setData(data);
    this.view.customHeader.flxBack.onClick = this.goBack;
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  goBack: function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },
 navigateToBankLogin: function()
  {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var externalAccountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ExternalAccountsModule");
    externalAccountMod.presentationController.giveTermsAndConditionsConsent();
  },
  setData: function(data)
  {

//      var content1 = "<br>Your consent is needed - to add your accounts from your choosen bank or banking provider you need to give consent. We’ll have access for the next 90 days to the following data:</br>";
//      var content2 = "<br>Renew your permission every 90 days - in 90 days intervals, we’ll ask you to log in to your chosen bank or banking provider so you can renew the permission you gave and continue to see that account within this banking app. Sometimes the interval we conact you may differ depending on the banking provider. See you to 1 year(s) of transactions and banking data - We’ll be requesting your account, balance and transactions from your chosen banking provider as far sa 1 year(s). Remember, you can stop access at any time.</br><br>How we’ll use your data - We’ll use your data as set out in the customer agreement you signed when you opened an account. This may include us assessing overall affordability from the information we have from your banking provider and sending personalised communications based on this data. But if you wish to opt out of future marketing activity then you can do this from within the banking app. Also, where required or authorised by law, we disclose your information to fraud prevention agencies/law enforcement.</br><br>Your data is of course safe with us - We’ll handle all your banking data the same as we handle your existing data.</br><br>Confirm your sharing data with us - To continue with this process, you’ll need to leave this app and confirm you’re happy to share data with us with your chosen bank or banking provider.</br>";
//      var temp ="";
//      for(var i = 0;i<data.bank_scope.length;i++)
//        {
//          temp = temp+"<br>"+data.bank_scope[i]+"</br>";
//        }
//     temp = content1+temp+content2;
//     this.view.brwTrc.htmlString=temp;
    //on iOS due to wkWebview, thie initial scale factor is not 1. hence setting it using meta tag as suggested by platform team.
    var initialScaleFactorTag = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">";
    this.view.brwTrc.htmlString = initialScaleFactorTag + data.termsAndConditionsContent;
   },  
  toggleCheckBox:function()
  {
    if(this.view.imgTermsAccepted.src==="tickmarkbox.png")
    {
      this.view.imgTermsAccepted.src="a.png";
      this.view.btnContinue.setEnabled(true);
      this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
    }
    else
    {
      this.view.imgTermsAccepted.src="tickmarkbox.png";
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    }
  },
});