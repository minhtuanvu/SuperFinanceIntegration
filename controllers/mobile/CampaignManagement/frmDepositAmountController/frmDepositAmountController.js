define({ 
  keypadString:'0.00',
  isPeriodUsed : false,
  timerCounter: 0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function(){
    if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
      this.view.flxHeader.setVisibility(false);
    }
    var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var amtDet = transMod.presentationController.getTransObject();
    var formatUtil=applicationManager.getFormatUtilManager();
     this.view.lblDollar.text= applicationManager.getConfigurationManager().getCurrencyCode();
    if(amtDet.amount&&amtDet.amount!==undefined&&amtDet.amount!==""&&amtDet.amount!==null)
      {
        this.keypadString = amtDet.amount;
        if(amtDet.amount.indexOf(".")==-1)
          {
            this.isPeriodUsed = false;
          }
        else
          {
            this.isPeriodUsed = true;
          }
      }
    else
      {
        this.keypadString ='0.00';
      }
   
   // this.view.lblAmount.text = "0.00";
    var configManager = applicationManager.getConfigurationManager();
 //   this.view.lblDollar.text=configManager.getCurrencyCode(); 
    this.updateAmountValue();
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var toast=navManager.getCustomInfo("frmBillPayAmount");
    if(toast){
      if(toast.status=="success"&&toast.acountUpdated){
         this.showSuccessPopup(toast.res, toast.status);
      }
      else if(toast.status=="error")
        this.showErrorPopup(JSON.stringify(toast.err));
      navManager.setCustomInfo("frmBillPayAmount","");
    }
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(transMod.presentationController.isPayeeAdded){
      applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.addedBillPayPayeeDuringBillPay","Successfully added payee account. Please proceed with your transaction."));
      transMod.presentationController.isPayeeAdded=false;
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  initActions: function(){
   // this.setFromAccountData();
    this.view.btnContinue.onClick =this.continueOnClick; 
    this.view.btnChange.onClick = function(){ var navManager = applicationManager.getNavigationManager();
		navManager.goBack(); 
    }
    this.view.customHeader.flxBack.onClick = function(){
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    }
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
  },
  setFromAccountData:function(nickName,balanace,bankName)
  {
    this.view.lblFromAccountValue.text=nickName;
    this.view.lblBalanceValue.text=balanace;
    this.view.lblBank.text=bankName;
    //this.view.lblavailableBalance.text=frmdata[2].accountBalanceType;

  },
  setKeypadChar: function (char) {
    if(char=='.'){
      if(this.isPeriodUsed==false){
        this.isPeriodUsed = true;
      }else{
        return;
      }
    }
    this.keypadString = this.keypadString + char;
    var firstChar = this.keypadString[0];
    this.keypadString = this.keypadString.split("");
    for(var i=1; i<this.keypadString.length; i++){
      if(this.keypadString[i]=='.'){
        this.keypadString[i-1] = this.keypadString[i+1];
        i++;
      }else{
        this.keypadString[i-1]=this.keypadString[i];
      }
    }
    this.keypadString = this.keypadString.join("");
    this.keypadString = this.keypadString.substr(0, this.keypadString.length-1);
    if(firstChar!=='0'){
      this.keypadString = firstChar + this.keypadString;
    }
    this.updateAmountValue();
  },
  clearKeypadChar: function () {
    if(this.keypadString ==='0.00') return;

    this.keypadString = this.keypadString.split("");
    for(var i=this.keypadString.length-2; i>=0; i--){
      if(this.keypadString[i]=='.'){
        this.keypadString[i+1] = this.keypadString[i-1];
        i--;
      }else{
        this.keypadString[i+1] = this.keypadString[i];
      }
    } 
    this.keypadString = this.keypadString.join("");
    this.keypadString = this.keypadString.substr(1);
    if(this.keypadString[0]=='.'){
      this.keypadString = '0'+ this.keypadString;
    }
    this.updateAmountValue();
    // if (this.keypadString.length === 1) {
    //   this.keypadString = '';
    //   this.updateAmountValue();
    // }else if (this.keypadString.length !== 0) {
    //   if(this.keypadString[this.keypadString.length-1]==='.'){
    //     this.isPeriodUsed = false;
    //   }
    //   this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
    //   this.updateAmountValue();            
    // }
  },
  updateAmountValue: function(){
    if(this.keypadString==='0.00'){
      this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
      this.view.btnContinue.onClick = function() {};
      this.view.btnContinue.setEnabled(false);
      this.view.lblAmount.text = this.view.keypad.formatAmount(this.keypadString);
    }else{
      var keypadStringCommas = '';
      var beforeDecimal = this.keypadString.split('.')[0];
      var afterDecimal = this.keypadString.split('.')[1];
      if(beforeDecimal.length>3){
        var withCommas = (beforeDecimal.length)/3;
        var withoutCommas = (beforeDecimal.length)%3;
        var temp = '';
        if(withoutCommas!=0){
          temp = beforeDecimal.substr(0, withoutCommas)+',';
        }
        for(var i = withoutCommas; i<beforeDecimal.length; i+=3){
          temp+=beforeDecimal.substr(i, 3)+',';
        }
        beforeDecimal = temp.substr(0, temp.length-1);
      }
      keypadStringCommas = beforeDecimal + '.'+afterDecimal;
      this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
      this.view.btnContinue.onClick = this.continueOnClick; 
      this.view.btnContinue.setEnabled(true);
      this.view.lblAmount.text = this.view.keypad.formatAmount(keypadStringCommas);
    }
  },
  continueOnClick :function()
  {
     var amount= this.keypadString;
    var maxLimit=Number(this.view.lblBalanceValue.text.replace(/[&\/\\#,+()$€~'":*?<>%{}]/g, ''));
    var configManager = applicationManager.getConfigurationManager();
    
    if(Number(amount)>=Number("0") && Number(amount)<=Number(maxLimit) ){
       var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
      campaignMod.presentationController.navigateToMaturityInstructions(this.view.lblAmount.text);
    }
    else if(Number(amount)>Number(maxLimit)){
     this.showErrorPopup("Amount should not exceed more than balance account");
	}
   
  },
  
   showErrorPopup:function(errorMsg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },
  onCancelClick:function(){
      var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated"); 
    }
});