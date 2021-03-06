define({
    pendingaccounts: null,
    postedaccounts: null,
    segmentData: null,
    objRec: '',
   init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    onNavigate: function(obj) {
        if (obj === undefined) {
            var newObj = {
                "view": "familyCheckingAcc"
            };
            obj = newObj;
        }
        this.objRec = obj;
    },
    frmAccountDetailsPreshow: function() {
        var self = this;
		this.view.customSearchbox.flxSearch.isVisible =false;
		this.view.customSearchbox.tbxSearch.text = "";
        this.view.flxBalance.isVisible = true;
      	this.view.flxDummyWhite.isVisible = false;
        this.view.segTransactions.isVisible = true;
        this.view.flxNoTransactions.isVisible = false;
      	this.view.flxSearch.isVisible = true;
        this.view.lblDueDate.setVisibility(true);
       	//this.setFooter();
      var navManager=applicationManager.getNavigationManager();
      	if(!applicationManager.getDeviceUtilManager().isIpad()){
      	  this.view.flxHeader.isVisible = true;
          this.view.flxMainContainer.top = "56dp";
    	}
    	else{
      	  this.view.flxHeader.isVisible = false;
          this.view.flxMainContainer.top = "0dp";
    	}
		this.view.btnChatbot.onClick = function() {
          var chatBotMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
    	  chatBotMode.presentationController.handleFirstTimeOpen();
        };
		//this.showcardlessPopUp();
        var configManager = applicationManager.getConfigurationManager();
        var navManager = applicationManager.getNavigationManager();
        var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
        if(accountsDetails.res!==undefined&&accountsDetails.res!==null)
        {
          if(accountsDetails.type=="error")
            this.showErrorPopup(accountsDetails.res);
          else
            this.showSuccessPopup(accountsDetails.res,accountsDetails.typeOfTransaction);
        }
      accountsDetails.res=null;
      navManager.setCustomInfo("frmAccountDetails",accountsDetails);
        var type = accountsDetails.selectedAccountData["type"];
        this.view.customSearchbox.tbxSearch.placeholder =kony.i18n.getLocalizedString("kony.mb.SearchByDescription");
        var MenuHandler =  applicationManager.getMenuHandler();
      	MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUACCOUNTS);
        if (type.toLowerCase().trim() === "internal") {
            this.view.flxAdvSearch.isVisible = true;
            this.view.imgAdvSearch.isVisible = true;
            this.view.customHeader.flxSearch.imgSearch.isVisible = false;
            this.view.flxOptions.isVisible = true;
			this.setFlxOptionsBasedOnType(accountsDetails.selectedAccountData["accountType"]);
            this.setSegmentData();
            this.setBalanceData();
        } else {
            this.view.customHeader.flxSearch.imgSearch.isVisible = false;
           this.view.flxAdvSearch.isVisible = false;
            this.view.imgAdvSearch.isVisible = false;
            this.view.flxOptions.isVisible = false;
            this.setTransactionsDataforAggregated();
        }
        this.view.flxHeaderSearchbox.setVisibility(false);
        this.view.flxMainContainer.onScrolling = this.flxMainContainerOnScrolling;
        //this.view.segTransactions.onTouchEnd = this.segTransactionsOnTouchEnd;
        this.view.tbxSearch.onTouchEnd = this.flxSearchOnTouchEnd;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customSearchbox.btnCancel.onClick = this.btnCancelOnClick;
        this.view.tbxSearch.onTextChange=this.tbxSearchOnTextChange;
        this.view.tbxSearch.text="";
        this.view.segTransactions.onRowClick = this.segTransactionsOnRowClick;
        this.view.flxInfo.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
            var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
          	applicationManager.getPresentationUtility().showLoadingScreen();
            if(accountsDetails.selectedAccountData.type.toLowerCase().trim() === "external") {
                accountModule.presentationController.fetchInfoForExternalBankAccount();
            } else {
                navManager.setCustomInfo("frmAccountInfo", accountsDetails);
     		accountModule.presentationController.commonFunctionForNavigation("frmAccountInfo");
            }
        };
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
	showcardlessPopUp:function(){
       var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		    if(cardlessModule.presentationController.qrSuccessFlag){
	           var transactionID =  cardlessModule.presentationController.getTransactionId();
	          applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardLess.transactionMessage")+transactionID);
	          cardlessModule.presentationController.setTransactionId();
	          cardlessModule.presentationController.qrSuccessFlag =false;
	        }
	    },
	setFlxOptionsBasedOnType:function(accountType)
  {
    switch(accountType)
    {
      case "Checking": this.commonOptions();
        break;
      case "Savings":this.commonOptions();
        break;
      case "Deposit":this.depositRelatedOptions();
        break;
      case "CreditCard" :this.creditCardRelatedOptions();
        break;
      case "Loan" :this.loanRelatedOptions();
        break;
    }
  },
  commonOptions:function()
  {
    var self = this;
    this.view.btnWithdrawCash.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.withdrawCash");
    this.view.btnWithdrawCash.onClick=function()
    {
      var navManager = applicationManager.getNavigationManager();
      var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
      var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
	  cardlessModule.presentationController.clearTransactionObject();
      var data = {};
      data.fromAccountName = accountsDetails.selectedAccountData.accountName;
      data.fromAccountNumber = accountsDetails.selectedAccountData.accountID;
      data.amount = 0;
      data.fromAccountBalance = accountsDetails.selectedAccountData.availableBalance;
      navManager.setCustomInfo("selectedAccountDataForCardLessCashWithdrawal",data);
      cardlessModule.presentationController.navigateToCashRecipientForm(accountsDetails.selectedAccountData);
    };
  },
  depositRelatedOptions:function()
  {
    var self = this;
    this.view.btnWithdrawCash.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.NEWDEPOSIT");
    this.view.btnWithdrawCash.onClick=function()
    {
      var navManager = applicationManager.getNavigationManager();
	  navManager.setEntryPoint("Deposit","frmAccountDetails");
      var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
      navManager.setCustomInfo("newDepositFromAccountDetailsFlag", true);
      var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
      checkDepositModule.presentationController.navigateFromAccountDetails(accountsDetails.selectedAccountData);
    };
  },
  creditCardRelatedOptions:function()
  {
    var self = this;
    this.view.btnWithdrawCash.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.MAKEAPAYMENT");
    this.view.btnWithdrawCash.onClick=function()
    {
      var navManager = applicationManager.getNavigationManager();
      var navigateToForm=navManager.setEntryPoint("makeatransfer","frmAccountDetails");
      var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.navigateToTransfers(accountsDetails.selectedAccountData);
    };
  },
  loanRelatedOptions:function()
  {
    var self = this;
    this.view.btnWithdrawCash.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.PAYDUEAMOUNT");
    this.view.btnWithdrawCash.onClick=function()
    {
      kony.ui.Alert(self.view.btnWithdrawCash.text);
      return;
    //   var navManager = applicationManager.getNavigationManager();
    //   var navigateToForm=navManager.setEntryPoint("makeatransfer","frmAccountDetails");
    //   var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
    //   var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    //   transferModule.presentationController.navigateToTransfers(accountsDetails.selectedAccountData);
    };
  },
    setTransactionsDataforAggregated: function() {
        var postedTransactionsdata = [],
            pendingTransactiondata = [];
        var navMan = applicationManager.getNavigationManager();
        var forUtility = applicationManager.getFormatUtilManager();
        var accountsDetails = navMan.getCustomInfo("frmAccountDetails");
        var postedTransactions = accountsDetails.externalPostedTransactions;
        var pendingTransaction = accountsDetails.externalPendingTransactions;
        this.view.lblBalanceValue.text = accountsDetails.selectedAccountData["availableBalance"];
        this.view.lblCurrentBalance.text = this.view.lblCurrentBalance.text + " : "+accountsDetails.selectedAccountData["availableBalance"];
        this.view.customHeader.lblHeaderTitle.text = accountsDetails.selectedAccountData["accountName"];
		this.view.title = accountsDetails.selectedAccountData["accountName"];
        this.view.lblDueDate.text = "";
        this.view.segTransactions.widgetDataMap = {
            lblTransaction: "description",
            lblDate: "TransactionDate",
            lblTransactionAmount: "Amount",
            transactionId: "TransactionId",
            lblHeader: "lblHeader"
        };
        if (pendingTransaction.length > 0 && postedTransactions.length > 0) {
            var data = [
                [{
                    "lblHeader": "Pending Transactions"
                }, pendingTransaction],
                [{
                    "lblHeader": "Posted Payments" /*"Posted Transactions"*/
                }, postedTransactions]
            ];
            this.segmentData = data;
            this.view.segTransactions.setData(data);
            this.pendingaccounts = this.view.segTransactions.data[0][1];
            this.postedaccounts = this.view.segTransactions.data[1][1];
        } else if (pendingTransaction.length > 0) {
            var data = [
                [{
                    "lblHeader": "Pending Transactions"
                }, pendingTransaction]
            ];
            this.segmentData = data;
            this.view.segTransactions.setData(data);
            this.pendingaccounts = this.view.segTransactions.data[0][1];
            this.postedaccounts = [];
        } else if (postedTransactions.length > 0) {
            var data = [
                [{
                    "lblHeader":  "Posted Payments" /*"Posted Transactions"*/
                }, postedTransactions]
            ];
            this.segmentData = data;
            this.view.segTransactions.setData(data);
            this.postedaccounts = this.view.segTransactions.data[0][1];
            this.pendingaccounts = [];
        } else {
            this.segmentData = [];
            this.pendingaccounts = [];
            this.postedaccounts = [];
            this.view.segTransactions.isVisible = false;
            this.view.flxNoTransactions.isVisible = true;
        }
    },
    setSegmentData: function() {
        var postedTransactionsdata = [],
            pendingTransactiondata = [];
        var navMan = applicationManager.getNavigationManager();
        // var configManager = applicationManager.getConfigurationManager();
        var forUtility = applicationManager.getFormatUtilManager();
        var accountsDetails = navMan.getCustomInfo("frmAccountDetails");
        var accountsData = accountsDetails.selectedAccountData;
        var postedTransactions = accountsDetails.postedTransaction;
        var pendingTransaction = accountsDetails.pendingTransactions;
        this.view.segTransactions.widgetDataMap = {
            lblTransaction: "description",
            lblDate: "scheduledDate",
            lblTransactionAmount: "amount",
            transactionId: "transactionId",
            lblHeader: "lblHeader"
        };
        if (pendingTransaction.length > 0 && postedTransactions.length > 0) {
            var data = [
                [{
                    "lblHeader": "Pending Transactions"
                }, pendingTransaction],
                [{
                    "lblHeader": "Posted Payments" /*"Posted Transactions"*/
                }, postedTransactions]
            ];
            this.segmentData = data;
            this.view.segTransactions.setData(data);
            this.pendingaccounts = this.view.segTransactions.data[0][1];
            this.postedaccounts = this.view.segTransactions.data[1][1];
        } else if (pendingTransaction.length > 0) {
            var data = [
                [{
                    "lblHeader": "Pending Transactions"
                }, pendingTransaction]
            ];
            this.segmentData = data;
            this.view.segTransactions.setData(data);
            this.pendingaccounts = this.view.segTransactions.data[0][1];
            this.postedaccounts = [];
        } else if (postedTransactions.length > 0) {
            var data = [
                [{
                    "lblHeader":  "Posted Payments" /*"Posted Transactions"*/
                }, postedTransactions]
            ];
            this.segmentData = data;
            this.view.segTransactions.setData(data);
            this.postedaccounts = this.view.segTransactions.data[0][1];
            this.pendingaccounts = [];
        } else {
            this.segmentData = [];
            this.pendingaccounts = [];
            this.postedaccounts = [];
            this.view.segTransactions.isVisible = false;
            this.view.flxNoTransactions.isVisible = true;
        }
    },
     setBalanceData: function() {
        var navMan = applicationManager.getNavigationManager();
        var forUtility = applicationManager.getFormatUtilManager();
        var accountsDetails = navMan.getCustomInfo("frmAccountDetails");
        var accountsData = accountsDetails.selectedAccountData;
        this.view.customHeader.lblHeaderTitle.text = accountsData.accountName;
       this.view.title = accountsData.accountName;
       var configManager = applicationManager.getConfigurationManager();
      if (accountsData.accountType === configManager.constants.CHECKING ||accountsData.accountType === configManager.constants.SAVINGS) {
        this.view.lblAvailableBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.AvailableBalance");
        this.view.lblCurrentBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.CurrentBalance")+" : "+forUtility.formatAmountandAppendCurrencySymbol(accountsData.currentBalance);
        this.view.lblBalanceValue.text = forUtility.formatAmountandAppendCurrencySymbol(accountsData.availableBalance);
         this.view.lblDueDate.text = "";
      }
        if (accountsData.accountType === configManager.constants.CREDITCARD) {
           this.view.lblAvailableBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.AvailableBalance");
          this.view.lblCurrentBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.UpcomingBill")+" : "+forUtility.formatAmountandAppendCurrencySymbol(accountsData.currentAmountDue);
          this.view.lblBalanceValue.text=forUtility.formatAmountandAppendCurrencySymbol(accountsData.outstandingBalance);
          var dateobj = forUtility.getDateObjectfromString(accountsData.dueDate, "YYYY-MM-DD");
          this.view.lblDueDate.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accountdetails.dueon") + " " + forUtility.getFormatedDateString(dateobj, forUtility.APPLICATION_DATE_FORMAT);
        }
        if (accountsData.accountType === configManager.constants.LOAN||accountsData.accountType === configManager.constants.MORTGAGE) {
            this.view.lblAvailableBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.OutstandingPrincipleBalance");
            this.view.lblCurrentBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.CurrentDue") +" : "+forUtility.formatAmountandAppendCurrencySymbol(accountsData.currentAmountDue);
          this.view.lblBalanceValue.text=forUtility.formatAmountandAppendCurrencySymbol(accountsData.outstandingBalance);
          var dateobj = forUtility.getDateObjectfromString(accountsData.dueDate, "YYYY-MM-DD");
          this.view.lblDueDate.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accountdetails.dueon") + " " + forUtility.getFormatedDateString(dateobj, forUtility.APPLICATION_DATE_FORMAT);
        }
        if (accountsData.accountType === configManager.constants.DEPOSIT) {
            var dateobj = forUtility.getDateObjectfromString(accountsData.maturityDate, "YYYY-MM-DD");
           this.view.lblAvailableBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.AvailableBalance");
           this.view.lblCurrentBalance.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.MaturityDate") +" : "+forUtility.getFormatedDateString(dateobj, forUtility.APPLICATION_DATE_FORMAT);;
          this.view.lblBalanceValue.text = forUtility.formatAmountandAppendCurrencySymbol(accountsData.availableBalance);
        }
    },
    tbxSearchOnTextChange: function() {
      var navObj = applicationManager.getNavigationManager();
      var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
        if (searchtext) {
          	var data=[],headers=[];
      		headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions"));
      		headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.postedTransactions"));
      		data.push(this.pendingaccounts);
      		data.push(this.postedaccounts);
            this.view.segTransactions.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
            this.view.flxBalance.isVisible = false;
            this.view.flxOptions.isVisible = false;
            this.view.segTransactions.removeAll();
            var searchobj = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("description",searchtext,data,headers);
            if (searchobj.length > 0) {
                this.view.segTransactions.setData(searchobj);
            } else {
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        } else {
            if (this.segmentData.length > 0) {
                this.view.segTransactions.setData(this.segmentData);
                this.view.segTransactions.isVisible = true;
                this.view.flxNoTransactions.isVisible = false;
                this.view.flxBalance.isVisible = false;
                this.view.flxOptions.isVisible = false;
            } else {
                this.view.flxBalance.isVisible = false;
                this.view.flxOptions.isVisible = false;
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        }
    },
//    setFooter: function() {
//         this.view.customFooter.lblAccounts.skin = "sknLbl424242SSP20px";
//         this.view.customFooter.flxAccSelect.setVisibility(true);
//         this.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
//         this.view.customFooter.flxTransferSel.setVisibility(false);
//         this.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
//         this.view.customFooter.flxBillSelected.setVisibility(false);
//         this.view.customFooter.lblMore.skin = "sknLblA0A0A0SSP20px";
//         this.view.customFooter.flxMoreSelect.setVisibility(false);
//     },
    flxMainContainerOnScrolling: function() {
        if (this.view.flxMainContainer.contentOffsetMeasured.y >= 165) {
            //alert("fixed");
            //this.view.segTransactions.height = "100%";
            this.view.flxMainContainer.forceLayout();
        }
    },
   segTransactionsOnTouchEnd: function() {
            if ((this.view.segTransactions.height !== 'preferred')&&(this.view.flxHeaderSearchbox.isVisible===false)) {
                if (this.view.segTransactions.contentOffsetMeasured.y <= 1) {
                    //this.view.segTransactions.height = "preferred";
                    this.view.flxMainContainer.forceLayout();
                }
            }
        },
    createViewForFamilyCheckingAccount: function() {
        this.view.customHeader.lblHeaderTitle.text = "Family Checking Account";
        this.view.lblDueDate.setVisibility(false);
        this.view.btnWithdrawCash.text = kony.i18n.getLocalizedString("kony.mb.accdetails.withdrawCash");
        this.view.lblAvailableBalance.text = kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
    },
    createViewForCreditCard: function() {
        this.view.customHeader.lblHeaderTitle.text = "MY CREDIT CARD";
        this.view.lblDueDate.setVisibility(true);
        this.view.btnWithdrawCash.text = kony.i18n.getLocalizedString("kony.mb.accdetails.makeAPayment");
        this.view.lblAvailableBalance.text = kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
    },
    createViewForHomeLoanAccount: function() {
        this.view.customHeader.lblHeaderTitle.text = "HOME LOAN ACCOUNT";
        this.view.lblDueDate.setVisibility(true);
        this.view.btnWithdrawCash.text = kony.i18n.getLocalizedString("kony.mb.accdetails.payDueAmount");
        this.view.lblAvailableBalance.text = kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingPrincipalBal");
    },
    createViewForDepositAccount: function() {
        this.view.customHeader.lblHeaderTitle.text = "MY DEPOSIT ACCOUNT";
        this.view.lblDueDate.setVisibility(false);
        this.view.lblCurrentBalance.text = kony.i18n.getLocalizedString("kony.mb.accdetails.maturityDate")+" : "+"12/06/2017";
        this.view.btnWithdrawCash.text = kony.i18n.getLocalizedString("kony.mb.accdetails.newDeposit");
        this.view.lblAvailableBalance.text = kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
    },
    segTransactionsOnRowClick: function() {
        var navMan = applicationManager.getNavigationManager();
        var accountsDetails = navMan.getCustomInfo("frmAccountDetails");
        var type = accountsDetails.selectedAccountData["type"];
        if (type.toLowerCase().trim() === "external") {
            return;
        }
      	applicationManager.getPresentationUtility().showLoadingScreen();
        var selectedSectionIndex = Math.floor(this.view.segTransactions.selectedRowIndex[0]);
        var selectedRowIndex = Math.floor(this.view.segTransactions.selectedRowIndex[1]);
        var transactionData = this.view.segTransactions.data[selectedSectionIndex][1][selectedRowIndex];
        var accMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accMod.presentationController.setEntryPoints(transactionData.transactionType);
        navMan.setCustomInfo("frmTransactionDetails", transactionData);
		navMan.setEntryPoint("frmTransactionDetails","Accounts");
        accMod.presentationController.commonFunctionForNavigation("frmTransactionDetails");
    },
    flxSearchOnTouchEnd: function() {
        this.view.flxHeaderSearchbox.setVisibility(true);
        this.view.flxHeader.setVisibility(false);
        this.view.flxSearch.setVisibility(false);
        this.view.flxShadow.setVisibility(false);
        this.view.flxBalance.setVisibility(false);
        this.view.flxSeperator2.setVisibility(false);
        this.view.flxOptions.setVisibility(false);
      	this.view.flxDummyWhite.setVisibility(true);
        //this.view.segTransactions.height = "100%";
        this.view.customSearchbox.tbxSearch.setFocus(true);
      	this.view.customSearchbox.flxSearch.isVisible = false;
      if(!applicationManager.getDeviceUtilManager().isIpad()){
        this.view.flxMainContainer.top = "100dp";
      }
      else{
         this.view.flxMainContainer.top = "40dp";
      }
        this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
        this.view.flxMainContainer.forceLayout();
    },
    btnCancelOnClick: function() {
        this.view.flxHeaderSearchbox.setVisibility(false);
        if(!applicationManager.getDeviceUtilManager().isIpad()){
          this.view.flxMainContainer.top = "56dp";
            this.view.flxHeader.isVisible = true;
        }
 	    else{
          	this.view.flxMainContainer.top = "0dp";
     	    this.view.flxHeader.isVisible = false;
        }
        this.view.flxSearch.setVisibility(true);
        this.view.flxShadow.setVisibility(false);
        this.view.flxBalance.setVisibility(true);
        this.view.flxSeperator2.setVisibility(true);
      	this.view.flxDummyWhite.setVisibility(false);
        this.view.customSearchbox.tbxSearch.text="";
        var navManager = applicationManager.getNavigationManager();
        var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
        var type = accountsDetails.selectedAccountData["type"];
      	if (type.toLowerCase().trim() === "internal") {
            this.view.flxOptions.isVisible = true;
        }
        this.view.segTransactions.height = "preferred";
        if (this.segmentData.length > 0) {
            this.view.segTransactions.setData(this.segmentData);
            this.view.segTransactions.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
            this.view.flxBalance.isVisible = true;
          	this.view.flxDummyWhite.isVisible = true;
        } else {
            this.view.flxBalance.isVisible = true;
            this.view.segTransactions.isVisible = false;
            this.view.flxNoTransactions.isVisible = true;
          	this.view.flxDummyWhite.isVisible = false;
        }
        this.view.flxMainContainer.forceLayout();
    },
    flxBackOnClick: function() {
      	applicationManager.getPresentationUtility().showLoadingScreen();
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    getStatements: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var accMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accMod.presentationController.fetchAccountStataments();
    },
    navigateToAdvanceSearch: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
        accountMod.presentationController.commonFunctionForNavigation("frmAdvanceSearch");
    },
    gotoAccountInfo: function(){
        var navManager = applicationManager.getNavigationManager();
        var accountsDetails = navManager.getCustomInfo("frmAccountDetails");
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        if(String(accountsDetails.selectedAccountData.type).toLowerCase().trim() === "external") {
            accountModule.presentationController.fetchInfoForExternalBankAccount();
        } else {
            navManager.setCustomInfo("frmAccountInfo", accountsDetails);
            accountModule.presentationController.commonFunctionForNavigation("frmAccountInfo");
        }
    },
    appendEmptySection: function(dataParam){
        var data = dataParam;
        var emptySection = [
            {
                "template":"flxEmptyHeader",
            },
            [
                {
                    "template":"flxAccountDetailsEmptyRow"
                }
            ]
        ];
        data.unshift(emptySection);
        return data;
    },
   showSuccessPopup : function(refID,type){
    // TO DO i18n's
    var msg;
    if(type==="delete")
    {
      msg = "Transaction was cancelled successfully with reference ID : " + (refID.transactionId||refID.refernceId);
    }
    else{
      if(refID.referenceId)
      msg = "Transaction was done successfully with transaction ID : "+ refID.referenceId;
      else
        msg = "Transaction was edited successfully with reference ID : " + refID.transactionId;
    }
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,msg);
  },
  showErrorPopup: function(err){
          applicationManager.getDataProcessorUtility().showToastMessageError(this,JSON.stringify(err));
	},
});