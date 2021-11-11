define([], function() {



  function CampaignManagement_PresentationController() {
    scope_InformationPresenter = this;
    this.segData= [];
    kony.mvc.Presentation.BasePresenter.call(this);
  }
  var segData;
  this.segData=[];
  var campaignData={};
  var loanData={};
  

  inheritsFrom(CampaignManagement_PresentationController, kony.mvc.Presentation.BasePresenter);

  CampaignManagement_PresentationController.prototype.initializePresentationController = function() {

  }; 
  CampaignManagement_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo(formName);
    //applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  CampaignManagement_PresentationController.prototype.commonFunctionForgoBack =function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack(); 
  };
  CampaignManagement_PresentationController.prototype.navigateToLoanAmountScreen=function(data){
    this.segData=[];
    var accMan=applicationManager.getAccountManager();
    //var data=accMan.getAccountObject();
    // accMan.setAccountAttribute("duration",data.duration);
    //     accMan.setAccountAttribute("interestRate",data.interestRate);
    var temp={"key":"duration",
              "value":data.duration};
    this.segData.push(temp);
    temp={"key":"interestRate",
          "value":data.interestRate};
    this.segData.push(temp);
    scope_InformationPresenter.commonFunctionForNavigation("frmLoanAmount");

  };
  CampaignManagement_PresentationController.prototype.navigateToCMDuration=function(amount){
    //     var accMAn=applicationManager.getAccountManager();
    //     accMan.setAccountAttribute("amount",amount);
     this.segData=this.segData.slice(0,2);
    var temp={"key":"amount",
              "value":amount};
    this.segData.push(temp);
    scope_InformationPresenter.commonFunctionForNavigation("frmCMDuration");
  };
  CampaignManagement_PresentationController.prototype.navigateToLoanConfirmation=function(duration){
    //     var accMAn=applicationManager.getAccountManager();
    //     accMan.setAccountAttribute("duration",duration);
    this.segData=this.segData.slice(0,3);
    var temp={"key":"duration",
              "value":duration};
    this.segData.push(temp);
    scope_InformationPresenter.commonFunctionForNavigation("frmShortTermLoanConfirmation");

  };
    CampaignManagement_PresentationController.prototype.popData=function(){
	 this.segData.pop();

  };
  CampaignManagement_PresentationController.prototype.getData=function(){
    return this.segData;

  };
  CampaignManagement_PresentationController.prototype.getAccountsInfo=function(){
     var accountManager = applicationManager.getAccountManager();
	//accountManager.fetchInternalAccounts(this.onCheckingAccountSuccess.bind(this), this.onCheckingAccountFailure.bind(this)) ;
    var internalAccnts = accountManager.getInternalAccounts();
    var controller = applicationManager.getPresentationUtility().getController('frmDepositsFromAccount', true);
    controller.setAccountsInfo(internalAccnts);
  };
  CampaignManagement_PresentationController.prototype.onCheckingAccountSuccess=function(param){
    
  };
  CampaignManagement_PresentationController.prototype.onCheckingAccountFailure=function(error){
  };
   CampaignManagement_PresentationController.prototype.getToAccountsInfo=function(){
      var accountManager = applicationManager.getAccountManager();
	//accountManager.fetchInternalAccounts(this.onCheckingAccountSuccess.bind(this), this.onCheckingAccountFailure.bind(this)) ;
    var internalAccnts = accountManager.getInternalAccounts();
    var controller = applicationManager.getPresentationUtility().getController('frmDepositToAccount', true);
    controller.setAccountsInfo(internalAccnts);
  };
  
 CampaignManagement_PresentationController.prototype.updateCampaigning = function(){
     var userManager = applicationManager.getUserPreferencesManager();
     var userId = userManager.getUserId();
     var data = {"customerId":userId,"campaignId": this.campaignData.campaignId};
     var campaignManagementManager = applicationManager.getCampaignManagementManager();
	campaignManagementManager.updateCampaigning(data, this.updateCampaigningSuccess.bind(this), this.updateCampaigningFailure.bind(this));
  };
  CampaignManagement_PresentationController.prototype.updateCampaigningSuccess= function(response){
    scope_InformationPresenter.commonFunctionForNavigation("frmCMAcknowledgement");
  };
  CampaignManagement_PresentationController.prototype.updateCampaigningFailure= function(err){
    
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    else{
      
    }
  }; 
  CampaignManagement_PresentationController.prototype.createLoanAccount = function(){
     var userManager = applicationManager.getUserPreferencesManager();
    var configManager = applicationManager.getConfigurationManager();
    var productType = configManager.accountTypes.LOAN;
     var userId = userManager.getUserId();
    var data = {  "amount": this.cleanAmount(this.segData[2].value),
                  "term": this.getTerm(this.segData[3].value),
                  "productType": productType,
                  "currencyCode": applicationManager.getFormatUtilManager().getCurrencySymbolCode(applicationManager.getConfigurationManager().getCurrencyCode()),
                  "campaignId": this.campaignData.campaignId,
                  "userId": userId};
     var campaignManagementManager = applicationManager.getCampaignManagementManager();
	campaignManagementManager.createLoanAccount(data, this.createLoanAccountSuccess.bind(this), this.createLoanAccountFailure.bind(this));
  };
  CampaignManagement_PresentationController.prototype.createLoanAccountSuccess= function(response){
    scope_InformationPresenter.commonFunctionForNavigation("frmCMAcknowledgement");
  };
  CampaignManagement_PresentationController.prototype.createLoanAccountFailure= function(err){
     var controller = applicationManager.getPresentationUtility().getController('frmShortTermLoanConfirmation', true);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    else{
       controller.bindViewError(err.errorMessage);
          }
  }; 
  CampaignManagement_PresentationController.prototype.createFinancialHelpAccount = function(){
     var userManager = applicationManager.getUserPreferencesManager();
     var userId = userManager.getUserId();
    var data = {  "term": "12M",
                  "productType": "HARDSHIP.LOAN",
                  "currencyCode": "EUR",
                  "campaignId": this.campaignData.campaignId,
                  "userId": userId};
     var campaignManagementManager = applicationManager.getCampaignManagementManager();
	campaignManagementManager.createLoanAccount(data, this.createFinancialHelpAccountSuccess.bind(this), this.createFinancialHelpAccountFailure.bind(this));
  };
  CampaignManagement_PresentationController.prototype.createFinancialHelpAccountSuccess= function(response){
    scope_InformationPresenter.commonFunctionForNavigation("frmFinancialHelpAcknowledgement");
  };
  CampaignManagement_PresentationController.prototype.createFinancialHelpAccountFailure= function(err){
     var controller = applicationManager.getPresentationUtility().getController('frmFinancialHelp', true);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err.errorMessage);
    else{
        controller.bindViewError(err.errorMessage);
          }
  };
  CampaignManagement_PresentationController.prototype.updateCampaignDetails= function(data){
    this.campaignData=data[0];
  }; 
  CampaignManagement_PresentationController.prototype.updateAccountsinDashBoard=function(){
    var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
    var amtDet = campMod.presentationController.getTransObject();
     var formatUtil=applicationManager.getFormatUtilManager();
    var currency=formatUtil.getCurrencySymbol(amtDet.transactionCurrency);
    currency+=this.segData[2].value;
    this.loanData = {
            "nickName": "Personal Loan",
            "availableBalance": currency,
            "accountType": "Loan",
            "accountID": "XXXXX3343",
            "accountBalanceType": "Available Balance",
       		"bankName":"Infinity Bank",
       		"accountName":"Personal Loan"
        };
    
      var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
  };
  CampaignManagement_PresentationController.prototype.sortByPrefrence = function(accountsCollection) {
    if (accountsCollection.length > 1) accountsCollection.sort(function(record1, record2) {
      return record1.accountPreference - record2.accountPreference;
    });
    return accountsCollection;
  };
   CampaignManagement_PresentationController.prototype.getTransObject=function()
  {
    var transMan=applicationManager.getTransactionManager();
    var obj=transMan.getTransactionObject();
    return obj;
  };
   CampaignManagement_PresentationController.prototype.navToFromAccountDeposits=function(data)
  {
     var accMan=applicationManager.getAccountManager();
     this.segData=[];
    var temp={"key":"duration",
              "value":data.duration};
    this.segData.push(temp);
    temp={"key":"interestRate",
          "value":data.interestRate};
    this.segData.push(temp);
    scope_InformationPresenter.commonFunctionForNavigation("frmDepositsFromAccount");
  };
    CampaignManagement_PresentationController.prototype.navToDepositAmount=function(data){
    //     var accMAn=applicationManager.getAccountManager();
    //     accMan.setAccountAttribute("duration",duration);
      this.segData=this.segData.slice(0,2);
    var temp={"key":"From Account",
              "value":data};
    this.segData.push(temp);
    scope_InformationPresenter.commonFunctionForNavigation("frmDepositAmount");
      var controller = applicationManager.getPresentationUtility().getController('frmDepositAmount', true);
    controller.setFromAccountData(data.nickName,data.availableBalance,data.bankName);

  };
  CampaignManagement_PresentationController.prototype.navigateToMaturityInstructions=function(amount){
    //     var accMAn=applicationManager.getAccountManager();
    //     accMan.setAccountAttribute("amount",amount);
   this.segData= this.segData.slice(0,3);
    var temp={"key":"amount",
              "value":amount};
    this.segData.push(temp);
    scope_InformationPresenter.commonFunctionForNavigation("frmMaturityInstructions");
  };
  CampaignManagement_PresentationController.prototype.navToDepositsToAccountDeposits=function(data){
    //     var accMAn=applicationManager.getAccountManager();
    //     accMan.setAccountAttribute("duration",duration);
    this.segData=this.segData.slice(0,4);
    var temp={"key":"Maturity Instructions",
              "value":data};
    this.segData.push(temp);
    scope_InformationPresenter.commonFunctionForNavigation("frmDepositToAccount");

  };
   CampaignManagement_PresentationController.prototype.navToDepositsConfirmation=function(data){
    //     var accMAn=applicationManager.getAccountManager();
    //     accMan.setAccountAttribute("duration",duration);
    this.segData= this.segData.slice(0,5);
    var temp={"key":"To Account",
              "value":data};
    this.segData.push(temp);
    scope_InformationPresenter.commonFunctionForNavigation("frmDepositsConfirmation");

  };
  CampaignManagement_PresentationController.prototype.createDeposit= function(){
    var amount = this.cleanAmount(this.segData[3].value);
    var data={"amount":amount, "productId":"PRODUCT9", "payingAccount":this.segData[2].value.accountID, "campaignId":"", "payoutAccount":this.segData[5].value.accountID, "userId":"","productType": ""} ;
    var userManager = applicationManager.getUserPreferencesManager();
    data.userId = userManager.getUserId();
    data.campaignId = this.campaignData.campaignId;
    var campaignManagementManager = applicationManager.getCampaignManagementManager();
                campaignManagementManager.createDeposit(data, this.createDepositSuccess.bind(this), this.createDepositFailure.bind(this));
  };
  CampaignManagement_PresentationController.prototype.createDepositSuccess= function(success){
     scope_InformationPresenter.commonFunctionForNavigation("frmDepositsAcknowledgement");
  };  
  CampaignManagement_PresentationController.prototype.createDepositFailure= function(err){
    var controller = applicationManager.getPresentationUtility().getController('frmDepositsConfirmation', true);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    else
      {
        controller.bindViewError(err.errorMessage);
      }
  };

  CampaignManagement_PresentationController.prototype.processAccountsData = function(data,screenType) {
    var accProcessedData = [];
    var i=0;
    for (var j = 0; j < data.length; j++) {
      if(data[j].currencyCode == applicationManager.getFormatUtilManager().getCurrencySymbolCode(applicationManager.getConfigurationManager().getCurrencyCode()) && (data[j].accountType==="Checking" || data[j].accountType==="Savings" )){
      accProcessedData[i] = {};
      var name = "";
      if (data[j].nickName === null || data[j].nickName === undefined) {
        name = data[j].accountName;
      } else {
        name = data[j].nickName;
      }
      accProcessedData[i].accountName = data[j].accountName;
      accProcessedData[i].nickName = data[j].nickName;
      accProcessedData[i].availableBalance = this.getAvailableBalanceCurrencyString(data[j]);
      accProcessedData[i].accountID = data[j].accountID;
      accProcessedData[i].bankName = (data[j].bankName) ? data[j].bankName.trim() : data[j].bankName;
      accProcessedData[i].accountBalanceType = this.getAvailableBalanceType(data[j]);
      accProcessedData[i].fromAccountCurrency = data[j].currencyCode;
        accProcessedData[i].accountType = data[j].accountType;
      accProcessedData[i].fromAccountBalance = data[j].availableBalance;
      accProcessedData[i].accountPreference = data[j].accountPreference;
      accProcessedData[i].transactionMode = data[j].transactionMode;
      accProcessedData[i].processedName = applicationManager.getPresentationUtility().formatText(name, 10, data[j].accountID, 4);
       i++;
    }}
    return accProcessedData;
  };
  CampaignManagement_PresentationController.prototype.getAvailableBalanceType = function(data) {
        var configManager = applicationManager.getConfigurationManager();
        switch (data.accountType) {
            case configManager.constants.SAVINGS:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
            case configManager.constants.CHECKING:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
            case configManager.constants.CREDITCARD:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
            case configManager.constants.DEPOSIT:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.currBal");
            case configManager.constants.MORTGAGE:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
            case configManager.constants.LOAN:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
            default:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
        }
    };
   CampaignManagement_PresentationController.prototype.getAvailableBalanceType = function(data) {
        var configManager = applicationManager.getConfigurationManager();
        switch (data.accountType) {
            case configManager.constants.SAVINGS:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
            case configManager.constants.CHECKING:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
            case configManager.constants.CREDITCARD:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
            case configManager.constants.DEPOSIT:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.currBal");
            case configManager.constants.MORTGAGE:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
            case configManager.constants.LOAN:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
            default:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
        }}
   
   CampaignManagement_PresentationController.prototype.processViewFormattedData = function(data) {
    var processedData = {};
    for (var i = 0; i < data.length; i++) {
      if (!processedData.hasOwnProperty(data[i].accountType)) {
        processedData[data[i].accountType] = [];
      }
      if (processedData.hasOwnProperty(data[i].accountType)) {
        processedData[data[i].accountType].push(data[i]);
      }
    }
    return processedData;
  };
   CampaignManagement_PresentationController.prototype.orderByPriority = function(data) {
    var cm = applicationManager.getConfigurationManager();
    var prioritizedData = {};
    var metaData = cm.getAccountTypesMetaData();
    for (var key1 in metaData) {
      if (data[metaData[key1].backendValue]) {
        prioritizedData[metaData[key1].backendValue] = data[metaData[key1].backendValue];
      }
    }
    return prioritizedData;
  };
   CampaignManagement_PresentationController.prototype.getAvailableBalanceCurrencyString = function(data) {
        var forUtility = applicationManager.getFormatUtilManager();
        var configManager = applicationManager.getConfigurationManager();
        var currencyCode = data["currencyCode"];
        switch (data.accountType) {
            case configManager.constants.SAVINGS:
                return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);
            case configManager.constants.CHECKING:
                return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);
            case configManager.constants.CREDITCARD:
                return forUtility.formatAmountandAppendCurrencySymbol(data["outstandingBalance"],currencyCode);
            case configManager.constants.DEPOSIT:
                return forUtility.formatAmountandAppendCurrencySymbol(data["currentBalance"],currencyCode);
            case configManager.constants.MORTGAGE:
                return forUtility.formatAmountandAppendCurrencySymbol(data["outstandingBalance"],currencyCode);
            case configManager.constants.LOAN:
                return forUtility.formatAmountandAppendCurrencySymbol(data["outstandingBalance"],currencyCode);
            default:
                return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);
        }
    };
  // Common function
   CampaignManagement_PresentationController.prototype.updateCampaigningAndNavToAccounts = function(flowType){
    
     var dmManager = applicationManager.getDirectMarketingManager();
      if (flowType == "deposits" || flowType == "FinancialHelp" )
          dmManager.getAds("accountDashboardCampaigns",this.creatDepositAndNavToAccountsSuccess.bind(this),this.updateCampaigningAndNavToAccountsFailure.bind(this));
     else if(flowType == "specialBonus")
       	dmManager.getAds("accountDashboardCampaigns",this.creatDepositAndNavToAccountsSuccess.bind(this),this.updateCampaigningAndNavToAccountsFailure.bind(this));
     else
        dmManager.getAds("accountDashboardCampaigns",this.updateCampaigningAndNavToAccountsSuccess.bind(this),this.updateCampaigningAndNavToAccountsFailure.bind(this));
    // var data = {"customerId":userId,"campaignId": this.campaignData.campaignId};
   //  var campaignManagementManager = applicationManager.getCampaignManagementManager();
	//campaignManagementManager.updateCampaigning(data, this.updateCampaigningAndNavToAccountsSuccess.bind(this), this.updateCampaigningAndNavToAccountsFailure.bind(this));
  };
  
   CampaignManagement_PresentationController.prototype.creatDepositAndNavToAccountsSuccess = function(response){
     var navManager = applicationManager.getNavigationManager();
    var formData = navManager.getCustomInfo("frmDashboardAggregated");
    formData.accountDashboardCampaignData = response;
    navManager.setCustomInfo(formData,"frmDashboardAggregated");
    //var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    //  accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
     var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.showDashboard();
   };
  CampaignManagement_PresentationController.prototype.updateCampaigningAndNavToAccountsSuccess= function(response){
    var navManager = applicationManager.getNavigationManager();
    var formData = navManager.getCustomInfo("frmDashboardAggregated");
    formData.accountDashboardCampaignData = response;
    navManager.setCustomInfo(formData,"frmDashboardAggregated");
    //scope_InformationPresenter.updateAccountsinDashBoard();
     var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.showDashboard();
    
    // Code to goto Accounts
  };
  CampaignManagement_PresentationController.prototype.updateCampaigningAndNavToAccountsFailure= function(err){
    scope_MessagesPresentationController.logger.log("####Error in updateCampaigning" + err);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
  }; 
  CampaignManagement_PresentationController.prototype.createAccountAndAddBalance= function(){
    var data = {"productType":"Savings","currencyCode":"EUR","amount":"100"};
    data.campaignId = this.campaignData.campaignId;
    var userManager = applicationManager.getUserPreferencesManager();
    data.userId = userManager.getUserId();
    
    var campaignManagementManager = applicationManager.getCampaignManagementManager();
                campaignManagementManager.createAccountAndAddBalance(data, this.createAccountAndAddBalanceSuccess.bind(this), this.createAccountAndAddBalanceFailure.bind(this));
  }; 
  CampaignManagement_PresentationController.prototype.createAccountAndAddBalanceSuccess= function(success){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    scope_InformationPresenter.commonFunctionForNavigation("frmSpecialBonusAcknowledgment");
  };  
  CampaignManagement_PresentationController.prototype.createAccountAndAddBalanceFailure= function(err){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    else
      {
        
      }
  };
   CampaignManagement_PresentationController.prototype.cleanAmount= function(amount){
      amount=amount.replace(/[^0-9.]/g, "");
    return amount;
  };
  CampaignManagement_PresentationController.prototype.getTerm= function(term){
   var termNumber = term;
   var termMonth = term;
     termNumber = termNumber.replace(/[^0-9]/g,"");
      termMonth = termMonth.replace(/[0-9 ]/g,"");
    term = termNumber +termMonth.charAt(0);
    return term;
  };
  return CampaignManagement_PresentationController;
});