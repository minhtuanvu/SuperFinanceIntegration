define({
  init : function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShowUiSettings:function(){
    var loggerManager = applicationManager.getLoggerManager();
    try {
      loggerManager.log("#### start frmEditNickNameController : preShowUiSettings ####");
      kony.application.dismissLoadingScreen();
      this.view.customSearchbox.tbxSearch.text = "";
      this.view.segAccounts.isVisible=true;
      this.view.lblNodatafound.isVisible=false;
      this.view.customSearchbox.tbxSearch.onTextChange = this.searchAccountslist;
	  if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
        this.view.flxHeader.isVisible = false;
      } else {
        this.view.flxHeader.isVisible = true;
        this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.accdetails.editNickName");
		this.view.customHeader.flxBack.onClick=this.onBack;
		this.view.customHeader.btnRight.onClick = this.onBack;
      }
      this.view.customSearchbox.tbxSearch.placeholder = "Search by account name or number";
      this.showAccountsData();
      this.view.forceLayout();
      this.view.segAccounts.onRowClick = this.naviagteToAccountDetails;
     // alert(this.view.tbxNickname.setFocus)
    } catch (err) {
      loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
    }
  },
  naviagteToAccountDetails: function(){
    try{
      applicationManager.getPresentationUtility().showLoadingScreen();
      var selectedItems = this.view.segAccounts.selectedRowItems[0];
      if(selectedItems.lblBankName === "No data found"){
         applicationManager.getPresentationUtility().dismissLoadingScreen();
      }else{
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.fetchTransactionsByAccountId(selectedItems);
      }
    }catch(er){
    }
  },
  onBack: function() {
    var loggerManager = applicationManager.getLoggerManager();
    try {
      loggerManager.log("#### start frmEditNickNameController : onBack ####");
      var navMan = applicationManager.getNavigationManager();
      navMan.goBack();
    } catch (err) {
      loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
    }
  },
  searchAccountslist: function() {
    try {
      this.view.segAccounts.isVisible=true;
      this.view.lblNodatafound.isVisible=false;
      var navigationManager = applicationManager.getNavigationManager();
      var mData = navigationManager.getCustomInfo("frmCombinedDashboard");
      var details = Object.keys(mData)[0];
      var bool = false;
      var searchValue = this.view.customSearchbox.tbxSearch.text.toUpperCase();
      if (searchValue === "") {
        this.view.segAccounts.widgetDataMap = {
          "lblBankName": "accountType",
          "lblIcon": "lblIcon",
          "lblAccountBal": "lblAccountBal",
          "lblAccountBalValue": "availableBalanceValue",
          "flxSeparator": "flxSeparator",
          "lblAccountName": "nickName",          
          "lblAccountNumber": "maskedAccountNumber",
          "flximgBank":"flximgBank",
        };
        this.view.segAccounts.setData(mData[details]);
      }else{
        var i;
        var length = mData[details].length;
        var sData = [];
        for (i = 0; i < length; i++) {
          if (!kony.sdk.isNullOrUndefined(mData[details][i])) {
            if (mData[details][i].bankName.toUpperCase().indexOf(searchValue, 0) > -1 || 
                mData[details][i].nickName.toUpperCase().indexOf(searchValue, 0) > -1 ||
                mData[details][i].accountID.indexOf(searchValue, 0) > -1) {
              sData.push(mData[details][i]);
              bool = true;
            }
          }
        }
        if (bool === true) {
          this.view.segAccounts.widgetDataMap = {
            "lblBankName": "accountType",
            "lblIcon": "lblIcon",
            "lblAccountBal": "lblAccountBal",
            "lblAccountBalValue": "availableBalanceValue",
            "flxSeparator": "flxSeparator",
            "lblAccountName": "nickName",
            "lblAccountNumber": "maskedAccountNumber",
            "flximgBank":"flximgBank",
          };
          this.view.segAccounts.setData(sData);
        } else {
          this.view.segAccounts.isVisible=false;
          this.view.lblNodatafound.isVisible=true;
        }
      }

    } catch (er) {
    }
  },
  changeNickName: function(){
    var loggerManager = applicationManager.getLoggerManager();
    try {
      loggerManager.log("#### start frmEditNickNameController : changeNickName ####");
      var navManager = applicationManager.getNavigationManager();
      var credentials = navManager.getCustomInfo("frmEditNickName");
      var currNickName = credentials.nickName;
      var editedNickName = this.view.tbxNickname.text;
      if(editedNickName !== "" && editedNickName !== null && editedNickName !== undefined && editedNickName !== currNickName)
      {
        this.view.btnUpdateNickName.setEnabled(true);
        this.view.btnUpdateNickName.skin="sknBtn0095e426pxEnabled";
      }
      else
      {
        this.view.btnUpdateNickName.setEnabled(false);
        this.view.btnUpdateNickName.skin="sknBtna0a0a0SSPReg26px";
      }
    } catch (err) {
      loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
    }
  },
  showAccountsData : function(){
    this.view.segAccounts.isVisible=true;
    var navigationManager = applicationManager.getNavigationManager();
    var accountsData = navigationManager.getCustomInfo("frmCombinedDashboard");
    var accountsKey = Object.keys(accountsData)[0];
    if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
      this.view.title = accountsKey;
    }else{
      this.view.customHeader.lblLocateUs.text = accountsKey;
    }    
    for(var i = 0; i<accountsData[accountsKey].length;i++){
      var nickName =  accountsData[accountsKey][i].nickName;
      var trimmedNickName = nickName.substring(0, 15);
      trimmedNickName = trimmedNickName+".....";
      accountsData[accountsKey][i].nickName = trimmedNickName;
      accountsData[accountsKey][i]["flximgBank"]={
        "isVisible":false,
      }
    }
    this.view.segAccounts.widgetDataMap = {
      "lblBankName" : "accountType",
      "lblIcon" : "lblIcon",
      "lblAccountBal" : "lblAccountBal",
      "lblAccountBalValue" : "availableBalanceValue",
      "flxSeparator" : "flxSeparator",
      "lblAccountName" : "nickName",
      "lblAccountNumber" : "maskedAccountNumber",
      "imgAccountType" : "imgAccountType",
      "imgBank"		:	"imgBank",
      "flximgBank":"flximgBank",
    };   
     
    this.view.segAccounts.setData(accountsData[accountsKey]);
  },
  updateNickName: function(){
        var loggerManager = applicationManager.getLoggerManager();
        function onAccountUpdationSucceess(successResponse) {
            if (successResponse && (successResponse !== undefined && successResponse !== "")) {
                var navigationManager = applicationManager.getNavigationManager();
                navigationManager.setCustomInfo("ExternalAccountNickNameUpdationSuccess", true);
                navigationManager.setCustomInfo("ExternalAccountNickNameUpdationFailure", false);
                accountModule.presentationController.fetchExternalAccountsData(userManager.getUserName());
            }
        }
        function onAccountUpdationFailure(errorResponse) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            if (errorResponse && errorResponse !== undefined) {
                var navigationManager = applicationManager.getNavigationManager();
                navigationManager.setCustomInfo("ExternalAccountNickNameUpdationFailure", true);
                navigationManager.setCustomInfo("ExternalAccountNickNameUpdationSuccess", false);
                accountModule.presentationController.navigateToManageExternalAccounts();
                kony.print("error updating the external account");
            }
        }
        try {
            loggerManager.log("#### start frmExternalAccountDetailsController : updateNickName ####");
            applicationManager.getPresentationUtility().showLoadingScreen();
            var accountModule;
            var navigationManager = applicationManager.getNavigationManager();
            var userManager = applicationManager.getUserPreferencesManager();
            var accountDetails = navigationManager.getCustomInfo("frmEditNickName");
            var records;
            if (accountDetails && (accountDetails !== undefined && typeof accountDetails === 'object')) {
                records = {
                  Account_id : accountDetails.accountId,
                  NickName : this.view.tbxNickname.text.trim(),
                  main_user : accountDetails.mainUser,
                  username : accountDetails.userName,
                  bank_id : accountDetails.bankId,
                  AccountName : accountDetails.accountName,
                  loop_count : accountDetails.loopCount
                };
                accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                accountModule.presentationController.patialUpdateExternalAccount(records,onAccountUpdationSucceess,onAccountUpdationFailure);
            }
        } catch (err) {
            loggerManager.log("#### in catch of frmExternalAccountDetailsController : updateNickName" + JSON.stringify(err) + " ####");
        }
  }
});