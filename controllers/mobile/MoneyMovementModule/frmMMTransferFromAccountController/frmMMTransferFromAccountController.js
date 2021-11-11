define(['CampaignUtility'], function(CampaignUtility){
  return{
  segmentData:null,
  sec: -1,
  row: -1,
  segmentHeight:0,
  rowTemplateHeight:70,
  sectionTemplateHeight:60,
  init: function () {
    var scope=this;
    var currentFormObject = kony.application.getCurrentForm();
    var currentForm=currentFormObject.id;
    applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
  },
  navigateCustomBack: function() {
	if (kony.os.deviceInfo().name === "iPhone")
    this.view.customSearchbox.tbxSearch.setFocus(false);
    var navMan = applicationManager.getNavigationManager();
    var entryPoint=navMan.getEntryPoint("startFromFlow");
    if(entryPoint==="frmMMTransferFromAccount"){
      var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.showDashboard();
      navMan.setEntryPoint("startFromFlow",null);
    }
    else{
      var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
      moneyMovementModule.commonFunctionForgoBack();
    }
  },
  //Purpose is to scroll to the selected row while moving to and fro between screens.
  postShow: function() {
    var deviceManager = applicationManager.getDeviceUtilManager();
    deviceManager.detectDynamicInstrumentation();
    var scope = this;
    if (this.sec !== "" && this.row !== "" && this.sec !== -1 && this.row !== -1) {
      if (!(this.sec === 0 && this.row === 0)) {
        if ((kony.os.deviceInfo().name !== "iPhone")) {
          //Need to invoke scroll manually (only in android) to get the UX experience of docking whenever segment rendered data is greater than viewable area.
          if(parseInt(this.segmentHeight)>this.view.segTransactions.frame.height || (this.view.segTransactions.frame.height-(this.segmentHeight))<this.rowTemplateHeight)
            this.scrollManually();
        } else {
          scope.view.segTransactions.selectedRowIndex = [this.sec + 1, this.row];
        }
      }
    }
  },
  preShow: function () {
    this.view.flxMainContainer.skin = "slfSbox";
    var self = this;
    this.segmentHeight=0;
    if (this.view.flxHeaderSearchbox.height ==="40dp") {
      //this.view.flxHeaderSearchbox.isVisible = false;
      this.view.flxHeaderSearchbox.height ="0dp";
      //this.view.flxSearch.isVisible = true;
      this.view.flxSearch.height = "55dp";
      this.view.flxHeader.isVisible = true;
    }
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
      this.view.flxOuterGradient.height = "223dp";
      this.view.flxSearch.top = 0 + "dp";
      this.view.flxDescription.top = 55 + "dp";
      this.view.flxGradient.top = "0dp";
      this.view.flxMainContainer.top = "0dp";
    } else {
      this.view.flxHeader.isVisible = true;
      this.view.flxSearch.top = 0 + "dp";
      this.view.flxDescription.top = 55 + "dp";
      this.view.flxGradient.top = "0dp";
      this.view.flxMainContainer.top = "56dp";
    }
    this.initActions();
    this.setSegmentData();
    this.addDummyRows();
   // this.view.flxSearch.isVisible = true;
    this.view.flxSearch.height = "55dp";
   // this.view.flxDescription.isVisible = true;
    this.view.flxDescription.height="48dp";
    this.view.flxGradient.isVisible = true;
    this.view.customSearchbox.tbxSearch.placeholder = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.FromAccountPlaceholder");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    this.view.segTransactions.onScrolling = function () {
      self.transactionsSegmentOnScrolling();
    };
    let scopeObj = this;
    function campaignPopUpSuccess(response){
      CampaignUtility.showCampaign(response, scopeObj.view);
    }
    function campaignPopUpError(response){
      kony.print(response, "Campaign Not Found!");
    }
    CampaignUtility.fetchPopupCampaigns(campaignPopUpSuccess, campaignPopUpError);
  },
  initActions: function () {
    var self = this;
    this.view.tbxSearch.onTouchStart = function() {
      if (kony.os.deviceInfo().name === "iPhone") {
        self.view.flxOuterGradient.height = "0dp";
        kony.timer.schedule("timerId", function() {
          self.showSearch();
        }, 0.1, false);
      }
      else {
        self.showSearch();
      }
    }
    this.view.customSearchbox.btnCancel.onClick = function() {
      if (kony.os.deviceInfo().name === "iPhone") {
        self.view.flxOuterGradient.height = "223dp";
        kony.timer.schedule("timerId", function() {
          self.cancelSearch();
        }, 0.1, false);
      }
      else {
        self.cancelSearch();
      }
    }
    this.view.customHeader.btnRight.onClick = this.cancelOnClick;
    this.view.customSearchbox.tbxSearch.onTextChange=this.tbxSearchOnTextChange;
    this.view.flxNoTransactions.isVisible = false;
    var navMan = applicationManager.getNavigationManager();
    this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
    //this.view.segTransactions.onRowClick = this.onRowClick;
    this.view.btnViewTransferActivities.onClick=function(){
       var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
       moneyMovementModule.clearMMFlowAtributes();
       navMan.setEntryPoint("centralmoneymovement", "frmTransferActivitiesTransfers");
       navMan.navigateTo("frmTransferActivitiesTransfers");
    }
    this.view.btnApplyForNewAccount.onClick = function() {
      var NAOModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
      NAOModule.presentationController.showAllProducts();
    }
  },
  onRowClick:function(){
    var secindex, rowindex, frmaccdata;
    var accMan=applicationManager.getAccountManager();
    var toacc = accMan.getToTransferSupportedAccounts();
    if (Array.isArray(this.view.segTransactions.data[0])) {
      secindex = Math.floor(this.view.segTransactions.selectedRowIndex[0]);
      rowindex = Math.floor(this.view.segTransactions.selectedRowIndex[1]);
      frmaccdata = this.view.segTransactions.data[secindex][1][rowindex];
    }
    else {
      rowindex = Math.floor(this.view.segTransactions.selectedRowIndex[1]);
      frmaccdata = this.view.segTransactions.data[rowindex];
    }
    if(frmaccdata.accountID){
      var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
      moneyMovementModule.haveLimitsBeenFetched = false;
      moneyMovementModule.setFromAccountsForTransactions(frmaccdata);
      moneyMovementModule.filterToAccountsByExludingFromAccount();
      //moneyMovementModule.commonFunctionForNavigation("frmMMTransferToAccount");
	  var toAccountData = moneyMovementModule.getToAccountData();
      var navMan=applicationManager.getNavigationManager();
      var entryPoint=navMan.getEntryPoint("centralmoneymovement");
				navMan.setCustomInfo("frmAccdataMembershipID",frmaccdata.membershipID);
      if(entryPoint==="frmManageRecipientType" || entryPoint==="frmAccountDetails"){
      	moneyMovementModule.commonFunctionForNavigation("frmMMTransferAmount");
      }
      else{
      	moneyMovementModule.commonFunctionForNavigation("frmMMTransferToAccount");
      }
      applicationManager.getPresentationUtility().showLoadingScreen();
    }
  },
  transactionsSegmentOnScrolling: function () {
    var parallaxSpeed = 1;
    var yOffset = this.view.segTransactions.contentOffsetMeasured.y;
    if(this.view.flxHeaderSearchbox.height ==="40dp")
      this.view.flxDescription.top = 40 - (yOffset * parallaxSpeed) + "dp";
    else
      this.view.flxDescription.top = 55 - (yOffset * parallaxSpeed) + "dp";
    this.view.flxSearch.top = 0 - (yOffset * parallaxSpeed) + "dp";
    this.view.flxGradient.top = 0 - (yOffset * parallaxSpeed) + "dp";
  },
  cancelOnClick:function(){
    var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
    moneyMovementModule.cancelCommon();
  },
  setSegmentData:function(){
    var navMan = applicationManager.getNavigationManager();
    var data=navMan.getCustomInfo("frmMMTransferFromAccount");
    if (!kony.sdk.isNullOrUndefined(data)) {
      var accountsList=data.fromaccounts;
      var moneyMovementPresentationController = applicationManager.getModulesPresentationController("MoneyMovementModule");
      var toAccountData = moneyMovementPresentationController.getToAccountData();
      if(toAccountData.toAccountType === "Loan"){
        accountsList = moneyMovementPresentationController.removeLoanAccounts(accountsList); 
      }  
      this.view.segTransactions.widgetDataMap=this.getWidgetDataMap();
      var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
      this.processedData=moneyMovementModule.processAccountsData(accountsList,"from");
      var viewBindData=moneyMovementModule.processViewFormattedData(this.processedData);
      viewBindData=moneyMovementModule.orderByPriority(viewBindData);
      var userPrefManager = applicationManager.getUserPreferencesManager();
      var customerIDs=userPrefManager.accessibleCustomerIds;
      var personalID=userPrefManager.primaryCustomerId;
      var isSingleCustomerProfile = userPrefManager.isSingleCustomerProfile;
      var mappingData={};
      var iconVisibility=false;
      customerIDs.forEach((item,index)=>{
        mappingData[item.id]={
          "isPersonal": personalID && personalID.id===item.id && personalID.type==="personal"?true:false,
          "accounts":[]
        }
       if(index!==0){
         if(customerIDs[0].type!==item.type){
           iconVisibility=true;
         }
       }
      });
      for(let key in mappingData){
        this.processedData.forEach(item=>{
          if(key===item.membershipID){
            if(iconVisibility){
            item.imgBankIcon=item.isBusinessAccountforMultipleIds==="true"?"businessaccount.png":"personalaccount.png";
            }
            else{
              item.flximgBankIcon={
                "isVisible":false
              }
            }
            mappingData[key]["accounts"].push(item);
          }
        });
      }
      var segData=[];
      if(this.processedData.length>0){
        if(isSingleCustomerProfile){
        segData=this.setSegmentForSingleCustomerIDs(viewBindData);
        }
        else{
        segData=this.setSegmentDataForMultipleIDs(mappingData);
        }
      }
      this.sec = -1;
      this.row = -1;
      var transObj = moneyMovementModule.getTransObject();
      for (var i = 0; i < segData.length; i++) {
        for (var j = 0; j < segData[i][1].length; j++) {
          if (transObj && transObj.fromAccountNumber === segData[i][1][j].accountID) {
            segData[i][1][j].flxMain = {
              "skin": "sknFlxF6F6F6"
            };
            this.sec = i;
            this.row = j;
          } else {
            segData[i][1][j].flxMain = {
              "skin": "slFbox"
            };
          }
        }
      }
      // this.filterDataBasedOnPermissions(segData); to be uncommented when the data issue is fixed
      if(segData.length>0)
      {
        this.view.flxNoTransactions.isVisible=false;
        this.view.segTransactions.isVisible=true;
        this.view.segTransactions.setData(segData);
        this.segmentData=this.view.segTransactions.data;
     }
       else
      {
        this.segmentData=[];
        this.view.flxNoTransactions.isVisible=true;
        this.view.lblNoTransaction.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.NoResultsFound");
        this.view.segTransactions.isVisible=false;
      }
    }
    else {
      this.view.segTransactions.isVisible = false;
      this.view.flxNoAccounts.isVisible = true;
      this.view.lblNoAccounts.isVisible = true;
      this.view.lblAddABankAccount.isVisible = true;
      this.view.btnViewTransferActivities.isVisible = false;
      this.view.btnApplyForNewAccount.isVisible = true;
    }
  },
    setSegmentForSingleCustomerIDs: function(viewBindData){
      var segmentDataforSingleIDs=[];
      var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
      for(var key in viewBindData){
          var sectionHeaderData={};
          var combinedData=[];
          if(key !== "CreditCard"){
            if (viewBindData[key].length > 1) {
              sectionHeaderData["lblHeader"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.My")+" " + key + " "+ applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.accounts")+" (" + viewBindData[key].length + ")";
            } else {
              sectionHeaderData["lblHeader"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.My")+" " + key + " "+ applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.account")+" (" + viewBindData[key].length + ")";
            }
          }
          else{
            if (viewBindData[key].length > 1) {
              sectionHeaderData["lblHeader"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.My") + " "+ applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.creditcards")+" (" + viewBindData[key].length + ")";
            } else {
              sectionHeaderData["lblHeader"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.My")+ " "+ applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.mm.creditcard")+" (" + viewBindData[key].length + ")";
            }
          }
          
          sectionHeaderData["flxImgUp"] = {
            isVisible : false,
          };
          sectionHeaderData["imgUpArrow"] = {
            isVisible : false,
          };
          
          var rowDataForSection=moneyMovementModule.sortByPrefrence(viewBindData[key]);
          if(rowDataForSection.length>0){
            combinedData.push(sectionHeaderData);
            combinedData.push(rowDataForSection);
            this.calcualteSegmentRenderedDataHeight(1,rowDataForSection.length);
            segmentDataforSingleIDs.push(combinedData);
          }
        }
      return segmentDataforSingleIDs;
    },
    setSegmentDataForMultipleIDs : function(mappingData){
          var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
      var segmentDataforMultipleIds=[];
			var accountList;
    this.view.segTransactions.rowTemplate="flxAccountsTransfers";
          for(let key in mappingData){
            if(mappingData[key].isPersonal===true){
					if(mappingData[key].accounts.length > 0){
              var sectionHeaderforMultipleIDswithPersonal={};
            var finalDataMultipleIDswithPersonal=[];
              sectionHeaderforMultipleIDswithPersonal["lblHeader"]="Personal Accounts"+"("+mappingData[key].accounts.length+")"
            finalDataMultipleIDswithPersonal.push(sectionHeaderforMultipleIDswithPersonal);
                      accountList = moneyMovementModule.filterFromAccountBasedOnCIF(mappingData[key].accounts)
                      finalDataMultipleIDswithPersonal.push(accountList);
            segmentDataforMultipleIds.push(finalDataMultipleIDswithPersonal);
            }
          }
            }
     for(let key in mappingData){
      if(mappingData[key].isPersonal!==true){
					if(mappingData[key].accounts.length > 0){
         var sectionHeaderforMultipleIDs={};
           var finalDataMultipleIDs=[];
         sectionHeaderforMultipleIDs["lblHeader"]=mappingData[key].accounts[0].membershipName+"("+mappingData[key].accounts.length+")"
       finalDataMultipleIDs.push(sectionHeaderforMultipleIDs);
                      accountList = moneyMovementModule.filterFromAccountBasedOnCIF(mappingData[key].accounts)
                      finalDataMultipleIDs.push(accountList);
            segmentDataforMultipleIds.push(finalDataMultipleIDs);
       }
     }
            }
    return segmentDataforMultipleIds;
    },
    filterDataBasedOnPermissions : function(data) {
      var configManager = applicationManager.getConfigurationManager();
      var isBusinessUser = configManager.isCombinedUser === "true" || configManager.isSMEUser === "true";
      var accountsBasedPermissions = configManager.accountPermissions;
      var permissions = [];
      if(!isBusinessUser) return;
      if(data.length<=0) return;
      if(kony.sdk.isNullOrUndefined(accountsBasedPermissions)) return;
      
      for(i=0;i<data.length;i++) {
        for(j=1;j<data[i][1].length;j++) {
          if(kony.sdk.isNullOrUndefined(accountsBasedPermissions[data[i][1][j]]));
          else {
            if(!kony.sdk.isNullOrUndefined(accountsBasedPermissions[data[i][1][j]["accountID"]]["actions"])){
              permissions = accountsBasedPermissions[data[i][1][j]["accountID"]]["actions"];
              if(permissions.includes("TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE")||
                 permissions.includes("INTRA_BANK_FUND_TRANSFER_CREATE")||
                 permissions.includes("INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE")|| 
                 permissions.includes("INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE"));
              else {
                data[i][1].splice(j, 1);
                if(!kony.sdk.isNullOrUndefined(data[i][2][j])) data[i][2].splice(j, 1);
              }
            }
            if(data[i][1].length === 0) data.splice(i,1);
          }
        }
      }
    },
  addDummyRows: function () {
    var segWidgetDataMap = this.view.segTransactions.widgetDataMap;
    segWidgetDataMap["flxEmptyHeader"] = "flxEmptyHeader";
    segWidgetDataMap["flxEmptyRow"] = "flxEmptyRow";
    this.view.segTransactions.widgetDataMap = segWidgetDataMap;
    var segData = this.view.segTransactions.data;
    if(segData === null || segData === undefined){
      segData = [];
    }
    var segLength = 0;
    for (let i = 0; i < segData.length; i++) {
      segLength = segLength + (segData[i][1].length * 70) + 49; //66 is the row height and 49 is the header height
    }
    segData.unshift([{
      "template": "flxEmptyHeader",
      "flxEmptyHeader": {
        "height": "0dp"
      }
    },
                     [{
                       "template": "flxEmptyRow",
                       "flxEmptyRow": {
                         "height": "104dp"
                       }
                     }]
                    ]);
    segLength = segLength + 104;
    this.view.segTransactions.setData(segData);
    this.segLength = segLength;
  },
  removeDummyRows:function(){
    var data=this.view.segTransactions.data;
    if(data === null || data === undefined){
      kony.print("no data");
    }
    else{
      data.shift();
      this.view.segTransactions.setData(data);
    }
  },
  getWidgetDataMap:function(){
    var dataMap={
      lblAccountName:"processedName",
      lblBankName:"bankName",
      lblAccountBalValue:"availableBalance",
      lblAccountBal:"accountBalanceType",
      flxTransHeader:"flxTransHeader",
      flxImgUp : "flxImgUp",
      imgUpArrow: "imgUpArrow",
      lblHeader:"lblHeader",
      flxMain:"flxMain",
      imgBankIcon: "imgBankIcon",
     flximgBankIcon: "flximgBankIcon"
    };
    return dataMap;
  },
  resetSearch : function(){
      this.view.customSearchbox.tbxSearch.text = ""
      if(this.segmentdata && this.segmentdata.length>0){
           this.view.segTransactions.setData(this.segmentdata);
           this.view.segTransactions.isVisible=true;
           this.view.flxNoTransactions.isVisible=false;
         }
         else{
           this.view.segTransactions.isVisible=false;
           this.view.flxNoTransactions.isVisible=true;
         }
    },
  showSearch: function() {
    var self = this;
    this.view.flxMainContainer.skin = "sknFlxScrlffffff";
    if (kony.os.deviceInfo().name === "iPhone") {
      if (this.view.flxHeaderSearchbox.height ==="40dp") {
       // this.view.flxHeaderSearchbox.isVisible = false;
        this.view.flxHeaderSearchbox.height ="0dp";
       // this.view.flxSearch.isVisible = true;
        this.view.flxSearch.height = "55dp";
        this.view.flxMainContainer.top = "40dp";
        this.view.flxDescription.top = "54dp";
       // this.view.flxDescription.isVisible = true;
         this.view.flxDescription.height="48dp";
        this.view.flxGradient.isVisible = true;
      } else {
        if (this.view.flxNoAccounts.isVisible) {
          this.view.lblNoAccounts.isVisible = false;
          this.view.lblAddABankAccount.isVisible = false;
        }
      //  this.view.flxHeaderSearchbox.isVisible = true;
        this.view.flxHeaderSearchbox.height ="40dp";
      //  this.view.flxSearch.isVisible = false;
        this.view.flxSearch.height = "0dp";
        this.view.flxMainContainer.top = "40dp";
        this.view.flxDescription.height="0dp";
        //this.view.flxDescription.isVisible = false;
        this.view.flxGradient.isVisible = false;
        this.view.customSearchbox.tbxSearch.text = "";
        this.view.customSearchbox.tbxSearch.setFocus(true);
        this.removeDummyRows();
        this.view.segTransactions.isVisible = false;
        this.view.flxNoTransactions.isVisible = true;
        this.view.lblNoTransaction.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.SearchForAnAccount");
		kony.timer.schedule("timerId", function() {
          self.view.customSearchbox.tbxSearch.setFocus(true);
        }, 0.1, false);
        this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
      }
    } else {
      if (this.view.flxHeaderSearchbox.height ==="40dp") {
        this.view.flxHeaderSearchbox.height ="0dp";
        //this.view.flxHeaderSearchbox.isVisible = false;
       // this.view.flxSearch.isVisible = true;
        this.view.flxSearch.height = "55dp";
        this.view.flxHeader.isVisible = true;
        this.view.flxMainContainer.top = "56dp";
        this.view.flxGradient.top = "0dp";
        this.view.flxDescription.height="0dp";
       // this.view.flxDescription.isVisible = false;
      } else {
        if (this.view.flxNoAccounts.isVisible) {
          this.view.lblNoAccounts.isVisible = false;
          this.view.lblAddABankAccount.isVisible = false;
        }
        this.view.flxGradient.isVisible = false;
        this.view.flxDescription.height="0dp";
       // this.view.flxDescription.isVisible = false;
        this.removeDummyRows();
        this.view.flxSearch.height = "0dp";
       // this.view.flxSearch.isVisible = false;
        this.view.flxHeader.isVisible = false;
        this.view.flxMainContainer.top = "40dp";
       // this.view.flxHeaderSearchbox.isVisible = true;
        this.view.flxHeaderSearchbox.height ="40dp";
        this.view.customSearchbox.tbxSearch.text = "";
        this.view.segTransactions.isVisible = false;
        this.view.flxNoTransactions.isVisible = true;
        this.view.lblNoTransaction.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.SearchForAnAccount");
        kony.timer.schedule("timerId", function() {
          self.view.customSearchbox.tbxSearch.setFocus(true);
        }, 0.1, false);
        this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
      }
    }
  },
  tbxSearchOnTextChange: function() {
    var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
    if (searchtext) {
      var data = [];
      data.push(this.processedData);
      this.view.segTransactions.isVisible = true;
      this.view.flxNoTransactions.isVisible = false;
      this.view.segTransactions.removeAll();
      var searchobj = applicationManager.getDataProcessorUtility().multipleCommonSegmentSearch(["accountName","accountID","nickName"], searchtext, data[0]);
      if (searchobj.length > 0) {
        this.view.segTransactions.widgetDataMap = this.getWidgetDataMapNoHeader();
        this.view.segTransactions.setData(searchobj);
      } else {
        this.view.segTransactions.isVisible = false;
        this.view.flxNoTransactions.isVisible = true;
        this.view.lblNoTransaction.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.NoResultsFound");
      }
    } else {
      if (this.segmentData.length > 0) {
		this.view.segTransactions.isVisible = false;
        this.view.flxNoTransactions.isVisible = true;
        this.view.lblNoTransaction.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.SearchForAnAccount");
      } else {
        this.view.segTransactions.isVisible = false;
        this.view.flxNoTransactions.isVisible = true;
        this.view.lblNoTransaction.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.NoResultsFound");
      }
    }
  },
  cancelSearch: function() {
    this.view.flxMainContainer.skin = "slfSbox";
    this.view.flxHeaderSearchbox.height ="0dp";
    //this.view.flxHeaderSearchbox.isVisible = false;
   // this.view.flxSearch.isVisible = true;
    this.view.flxSearch.height = "55dp";
    this.view.flxGradient.isVisible = true;
    this.view.flxDescription.height="48dp";
    //this.view.flxDescription.isVisible = true;
    this.view.flxSearch.top = 0 + "dp";
    this.view.flxGradient.top = "0dp";
    this.view.flxDescription.top = "55dp";
    this.view.segTransactions.top = "0dp";
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
      this.view.flxMainContainer.top = "0dp";
    } else {
      this.view.flxHeader.isVisible = true;
      this.view.flxMainContainer.top = "56dp";
    }
    if (this.segmentData.length > 0) {
      this.view.segTransactions.widgetDataMap = this.getWidgetDataMap();
      this.view.segTransactions.setData(this.segmentData);
      this.addDummyRows();
      this.view.segTransactions.isVisible = true;
      this.view.flxNoTransactions.isVisible = false;
    } else {
      this.view.flxNoAccounts.isVisible = true;
      this.view.lblNoAccounts.isVisible = true;
      this.view.lblAddABankAccount.isVisible = true;
      this.addDummyRows();
      this.view.segTransactions.isVisible = false;
      this.view.flxNoTransactions.isVisible = false;
    }
  },
  getWidgetDataMapNoHeader:function(){
    var dataMap={
      lblAccountName:"processedName",
      lblBankName:"bankName",
      lblAccountBalValue:"availableBalance",
      lblAccountBal:"accountBalanceType",
      imgBankIcon: "accountTypeIcon",
      flximgBankIcon: "accountTypeFlx"
    };
    return dataMap;
  },
  scrollManually: function() {
    var scope = this;
    scope.view.segTransactions.selectedRowIndex = [this.sec + 1, this.row-2];
    var parallaxSpeed = 1;
    if(Math.abs(this.view.segTransactions.frame.height-(this.segmentHeight))<this.rowTemplateHeight && this.payeesList!==0)
      var yOffset = this.view.segTransactions.contentOffsetMeasured.y+this.sectionTemplateHeight;
    else
      var yOffset = this.view.segTransactions.contentOffsetMeasured.y+(2*this.rowTemplateHeight);
    if (this.view.flxHeaderSearchbox.height ==="40dp") this.view.flxDescription.top = 40 - (yOffset * parallaxSpeed) + "dp";
    else this.view.flxDescription.top = 55 - (yOffset * parallaxSpeed) + "dp";
    this.view.flxSearch.top = 0 - (yOffset * parallaxSpeed) + "dp";
    this.view.flxGradient.top = 0 - (yOffset * parallaxSpeed) + "dp";
  },
  calcualteSegmentRenderedDataHeight:function(numberOfSections,numberOfRows){
    this.segmentHeight=parseInt(this.segmentHeight)+(numberOfSections*this.sectionTemplateHeight);
    if(numberOfRows){
      this.segmentHeight=this.segmentHeight+(numberOfRows*this.rowTemplateHeight);
    }
  }
  };
});