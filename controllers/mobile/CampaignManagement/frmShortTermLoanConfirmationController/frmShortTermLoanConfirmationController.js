define({ 
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
    preShow: function(){
        if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
            this.view.flxHeader.isVisible = false;
        }
      this.view.flxCheckBox.onClick=this.toggleCheckBox;
      this.view.btntermsandconditions.onClick=this.navToTNC;
      this.view.imgTermsAccepted.src="tickmarkbox.png";
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
     this.setData();
      this.initActions();
      applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);  
    },
    initActions: function(){
      var scope=this;
        this.view.customHeader.flxBack.onClick = function(){
        var navManager = applicationManager.getNavigationManager();
		navManager.goBack();  
        }
        this.view.customHeader.btnRight.onClick = function(){
        scope.cancelOnClick();
        }
        this.view.btnContinue.onClick = this.continueOnClick;
    },
  cancelOnClick:function()
  {
     var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated"); 
  },
  setData:function(){
    var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
     var data= campaignMod.presentationController.getData();
    	this.view.lblFromAccountValue.text = applicationManager.getConfigurationManager().getCurrencyCode() +" "+data[2].value;
     this.view.segDetails.widgetDataMap={
      lblTitle:"key",
      lblValue:"value"
    };
    this.segData = [];
    var interestAmt = applicationManager.getConfigurationManager().getCurrencyCode() + " " +  this.calculateInterest(data[2].value,data[1].value,data[3].value);
    var monthlyRepaymenyAmt = applicationManager.getConfigurationManager().getCurrencyCode() + " " + this.calculateEMI(data[2].value,data[1].value,data[3].value);
        var tempData = {
           "key":"Product Name",
           "value":"Personal Loan"
          };
        this.segData.push(tempData);
    tempData = {
           "key":"Duration",
      "value":data[3].value
          };
        this.segData.push(tempData);
    tempData = {
           "key":"Interest Rate",
      "value":data[1].value
          };
        this.segData.push(tempData);
    tempData = {
           "key":"Interest Amount",
      "value":interestAmt//data[2].value
          };
        this.segData.push(tempData);
    tempData = {
           "key":"Monthly Repayment Amount",
           "value":monthlyRepaymenyAmt
          };
        this.segData.push(tempData);
      this.view.segDetails.setData(this.segData);
  },
     continueOnClick: function(){
     applicationManager.getPresentationUtility().showLoadingScreen();
      var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
      campaignMod.presentationController.createLoanAccount(); 
   },
  toggleCheckBox:function(){
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
     calculateInterest:function(amount,RateOfInterest,loanDuration){
      var principalAmt = amount;
      principalAmt = Number(principalAmt.replace(/[^0-9.]/g, ''));
      var rateOfInterest = RateOfInterest;
      rateOfInterest = Number(rateOfInterest.replace(/[^0-9.]/g, ''));
      var duration = Number(loanDuration.replace(/[a-zA-Z]/g, ''));
       var interest;
       if(duration>5){
         interest = (principalAmt * (1 + (rateOfInterest / 100) * (duration / 12)) - principalAmt).toFixed(2);
       }
      else{
         interest = (principalAmt * (1 + (rateOfInterest / 100) * (duration)) - principalAmt).toFixed(2);
      }
      return this.numberWithCommas(interest);
    },
    calculateEMI:function(amount,rateOfInterest,loanDuration){
     var principalAmt = amount;
      principalAmt = Number(principalAmt.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, ''));
      var duration =Number(loanDuration.replace(/[a-zA-Z]/g, ''));  
      var interest = Number(this.calculateInterest(amount,rateOfInterest,loanDuration).replace(/[&\/\\#,+()$~%'":*?<>{}]/g, ''));
      if(duration <6){
        duration = duration*12;
      }
      var emi =  ((interest + principalAmt) / duration).toFixed(2);
      return this.numberWithCommas(emi);
    },
    numberWithCommas:function(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    },
   

  navToTNC:function(){
    var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
      campaignMod.presentationController.commonFunctionForNavigation("frmCMTermsAndConditions"); 
  },
  bindViewError : function(msg)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
    this.cleardobfields();
  },
  
 });