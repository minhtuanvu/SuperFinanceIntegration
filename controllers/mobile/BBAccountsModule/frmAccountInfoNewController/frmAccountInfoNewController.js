define({ 
  objRec: '',
  init : function(){
        var scope = this;
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  onNavigate: function(obj) {
        var scope = this;
    if (obj === undefined) {
      var newObj = {
        "view": "familyCheckingAcc"
      };
      obj = newObj;
    }
        var navMan = applicationManager.getNavigationManager();
        var context = navMan.getCustomInfo("frmAccountInfoNew");
          this.view.customHeader.lblLocateUs.text = context.headerText;
        //     this.objRec = obj;
        scope.view.information.setContext(context);
  },
  accDetails:'',
  preshowAccInfo: function() {
        var scope = this;
    this.btnMessagebankConfiguration();
    var editPermission = applicationManager.getConfigurationManager().checkUserPermission("ACCOUNT_SETTINGS_EDIT")?true:false;
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      if(editPermission){
        this.view.customHeader.btnRight.isVisible = true;
      }else{
        this.view.customHeader.btnRight.isVisible = false;
      }
    }
    else{
      this.view.flxHeader.isVisible = false;
            this.view.title = "";
    }
        scope.view.information.onError = function(errorObj) {
            alert(errorObj.err);
        };
        scope.view.information.requestStart = function() {
            kony.application.showLoadingScreen(null, "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        };
        //     this.view.information.requestStart = function() {
        //       kony.application.showLoadingScreen(null, "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        //     };
        scope.view.information.requestEnd = function() {
            kony.application.dismissLoadingScreen();
        };
        scope.view.information.onContactUsButtonClick = function() {
            scope.callBank();
        };
    var navigationManager =applicationManager.getNavigationManager();
    this.accDetails =navigationManager.getCustomInfo("frmAccountDetailsNew");
    navigationManager.setCustomInfo("isBusinessUserFlow", true);
        this.view.btnCancel.onClick = this.btnCancelOnClick;
        this.view.customHeader.btnRight.onClick = this.showPopuP;
    this.accDetails=this.accDetails.selectedAccountData;
    this.view.customHeader.flxBack.onClick=this.flxBackOnClick;
    this.view.customHeader.lblLocateUs.text = this.accDetails.nickName;
        // this.view.customHeader.btnRight.onClick=this.customHeaderBtnRightOnClick;
    this.view.btnEditNickName.onClick=this.btnEditNickNameOnClick;
        // this.view.btnCancel.onClick=this.btnCancelOnClick;
    this.view.flxDismiss.onClick = this.CancelOptions;
    this.view.btnRefresh.onClick = this.refreshCallBack;
    this.view.btnDelete.onClick=this.deleteCallBack;
    this.view.customHeader.flxBack.onClick=this.flxBackOnClick;
       // this.view.title = this.accDetails.nickName;
    this.view.flxPopupNickName.setVisibility(false);
    this.view.flxHeader.setEnabled(true);
    this.view.flxContainerCheckingAcc.setEnabled(true);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var configManager = applicationManager.getConfigurationManager();
    if(configManager.checkUserPermission("CALL_BANK")){
      this.view.btnCallBank.setVisibility(true);
    }
    else{
      this.view.btnCallBank.setVisibility(false);
    }
    this.createViewForFamilyCheckingAcc();
    var currentForm=navigationManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  createViewForFamilyCheckingAcc: function() {
    this.view.btnCallBank.onClick=this.callBank;
    this.view.btnMsgBank.onClick=this.messageBank;
    this.PopulateCheckingAccount();
    this.view.forceLayout();
  },
  PopulateCheckingAccount:function()
  {
    try{
      this.view.lblBankName1.text = this.accDetails.bankName;
      if(this.accDetails.logoURL){
        this.view.imgBankLogo1.src = this.accDetails.imgBank.src;  
      }
      else{
        this.view.imgBankLogo1.src = "konybanklogo.png";
      }
      var forUtility=applicationManager.getFormatUtilManager();
      var availBalValue=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.availableBalance,this.accDetails.currencyCode);
      var currBalValue=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.currentBalance,this.accDetails.currencyCode);
      var pendingDepValue=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.pendingDeposit,this.accDetails.currencyCode); 
      var withdrawValue=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.pendingWithdrawal,this.accDetails.currencyCode);
      var bankdetails=[
        {"lblTitle":kony.i18n.getLocalizedString("kony.mb.accounts.AvailableBalance")+":","lblValue":availBalValue},
        {"lblTitle":kony.i18n.getLocalizedString("kony.mb.accounts.CurrentBalance")+":","lblValue":currBalValue},
        {"lblTitle":kony.i18n.getLocalizedString("kony.mb.accountdetails.pendingdeposit")+":","lblValue":pendingDepValue},
        {"lblTitle":kony.i18n.getLocalizedString("kony.mb.accountdetails.pendingWithdrawal")+":","lblValue":withdrawValue},
        //         {"lblTitle":kony.i18n.getLocalizedString("kony.mb.accountdetails.cashin")+":","lblValue": "$609.0"},
        //         {"lblTitle":kony.i18n.getLocalizedString("kony.mb.accountdetails.cashout")+":","lblValue": "$609.0"}
      ];
      if(this.accDetails.MembershipName){
        bankdetails.push(
          {"lblTitle":kony.i18n.getLocalizedString("kony.tab.OBEmployment.CompanyName")+":", "lblValue":this.accDetails.MembershipName}
        );
      }
      var scope = this;
      var bankData=[
        [{"lblHeader":kony.i18n.getLocalizedString("kony.mb.accdetails.accountSummary")}, bankdetails],
      ];
      var accountdetails=[];
      var accJson=this.accDetails.accountHolder;
      var customerNameValue = "";
      if(accJson.includes("{")){
        customerNameValue = JSON.parse(accJson).fullName;
      }
      else{
        customerNameValue = accJson;
      }
      var accTypeValue=this.accDetails.accountType;
      var accNo= this.accDetails.accountID;
      if(!kony.sdk.isNullOrUndefined(accNo) && accNo !== '')
      {
        var accNoValue=applicationManager.getDataProcessorUtility().maskAccountNumber(accNo);
        accountdetails.push(
          {
            "lblTitle":kony.i18n.getLocalizedString("kony.mb.accountdetails.accountNumber")+":",
            "lblValue":accNoValue,
            "flxAccNoToggle" : {
              "isVisible" : true,
            },
            "imgAccNoToggle": {
              "src":"view.png",
              "isVisible" : true,
              "onTouchStart":function(){
                var segData = scope.view.segAccountdetails.data;
                var rowData = segData[0][1];
                var data = rowData[0];
                if(data.imgAccNoToggle.src === "view.png"){
                  data.lblValue = accNo;
                  data.imgAccNoToggle.src = "viewactive.png"; 
                }
                else{
                  data.lblValue = accNoValue;
                  data.imgAccNoToggle.src = "view.png";
                }
                scope.view.segAccountdetails.setData(segData);
                scope.view.forceLayout();
              }
            }
          });

      }
      var routingNumber = this.accDetails.routingNumber;
      if(!kony.sdk.isNullOrUndefined(routingNumber) && routingNumber !== '')
      {
        routingNumber=applicationManager.getDataProcessorUtility().maskAccountNumber(routingNumber);
        accountdetails.push({"lblTitle":kony.i18n.getLocalizedString("kony.mb.accountdetails.routingNumber")+":","lblValue":routingNumber, 
                             "imgAccNoToggle":{
                               "isVisible":false
                             }
                            });
      }
      var swiftCode = this.accDetails.swiftCode;
      if(!kony.sdk.isNullOrUndefined(swiftCode) && swiftCode !== '')
      {
        accountdetails.push({"lblTitle":kony.i18n.getLocalizedString("kony.mb.accountdetails.swiftCode")+":","lblValue":swiftCode, 
                             "imgAccNoToggle":{
                               "isVisible":false
                             }
                            });
      }

      if(!kony.sdk.isNullOrUndefined(accTypeValue) && accTypeValue !== '')
      {
        accountdetails.push({"lblTitle":kony.i18n.getLocalizedString("kony.mb.accountdetails.accountType")+":","lblValue":accTypeValue, 
                             "imgAccNoToggle":{
                               "isVisible":false
                             }
                            });
      }
      if(!kony.sdk.isNullOrUndefined(customerNameValue) && customerNameValue !== '')
      {
        accountdetails.push({"lblTitle":kony.i18n.getLocalizedString("kony.mb.accountdetails.accountHolder")+":","lblValue": customerNameValue, 
                             "imgAccNoToggle":{
                               "isVisible":false
                             }
                            });
      }
      var accountData=[
        [{"lblHeader":kony.i18n.getLocalizedString("kony.mb.enroll.accountDetails")},accountdetails]
      ];
      //alert("data"+JSON.stringify(bankData)+"===="+JSON.stringify(accountData));
      this.view.segAccountdetails.widgetDataMap = {
        "flxAccNoToggle": "flxAccNoToggle",
        "flxAccountdetails": "flxAccountdetails",
        "flxBalDetails": "flxBalDetails",
        "flxRowcontainer": "flxRowcontainer",
        "flxShadow": "flxShadow",
        "flxShadowBottomInfo": "flxShadowBottomInfo",
        "flxTypeOneShadowInfo1": "flxTypeOneShadowInfo1",
        "flxheader": "flxheader",
        "imgAccNoToggle": "imgAccNoToggle",
        "lblHeader": "lblHeader",
        "lblTitle": "lblTitle",
        "lblValue": "lblValue"
      };
      this.view.segBankdetails.setData(bankData);
      this.view.segAccountdetails.setData(accountData);
    }
    catch(err)
    {
      // alert("err"+err);
      kony.print("exception in setting data"+err );
    }


  },

  customHeaderBtnRightOnClick: function() {
    if(applicationManager.getDeviceUtilManager().isIPhone()) {
      var actionSheetObject = new kony.ui.ActionSheet(
        {
          "title":null,
          "message":null,
          "showCompletionCallback": null
        }
      );
      applicationManager.actionSheetObject=actionSheetObject;
      var actionEditNickName = new kony.ui.ActionItem(
        {
          "title": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.editNickName"),
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.btnEditNickNameOnClick
        }
      );
      applicationManager.actionSheetObject=actionSheetObject;
      var actionRefresh = new kony.ui.ActionItem(
        {
          "title": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Accounts.refresh"),
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.refreshCallBack
        }
      );
      var actionDelete = new kony.ui.ActionItem(
        {
          "title": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.externalBank.DeleteAccount"),
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.deleteCallBack
        }
      );
      var actionCancel = new kony.ui.ActionItem(
        {
          "title": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.Cancel"),
          "style":constants.ACTION_ITEM_STYLE_CANCEL,
          "action": null
        }
      );
      if(this.accDetails.externalIndicator!== undefined && this.accDetails.externalIndicator === "true")
      {
        actionSheetObject.addAction(actionRefresh);
        actionSheetObject.addAction(actionDelete);
      }
      else
      {
        actionSheetObject.addAction(actionEditNickName);
      }
      actionSheetObject.addAction(actionCancel);
      actionSheetObject.show();
    }else{
      this.view.flxPopupNickName.setVisibility(true);
      this.view.flxHeader.setEnabled(false);
      this.view.flxContainerCheckingAcc.setEnabled(false);
      if(this.accDetails.externalIndicator!== undefined && this.accDetails.externalIndicator === "true")
      {
        this.view.btnDelete.setVisibility(true);
        this.view.btnRefresh.setVisibility(true);
        this.view.btnEditNickName.setVisibility(false);
        this.view.flxPopupContainer.height="150dp";
      }
      else
      {

        this.view.btnDelete.setVisibility(false);
        this.view.btnRefresh.setVisibility(false);
        this.view.btnEditNickName.setVisibility(true);
        this.view.flxPopupContainer.height="100dp";
      }
    }
  },
  refreshCallBack: function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var bank =this.accDetails.accountID.split("-")[0];
    var externalAccountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ExternalAccountsModule");
    externalAccountMod.presentationController.refreshConsent(bank);
  },
  deleteCallBack: function() {
    var basicConfig = {
      "alertType": constants.ALERT_TYPE_CONFIRMATION,
      "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.externalAccounts.deleteAccountAlert"),
      "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
      "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),

      "alertHandler": this.deleteConnection
    };
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig, {});

  },
  deleteConnection:function(response)
  {
    if(response===true)
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var bank =this.accDetails.accountID.split("-")[0];
      var externalAccountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ExternalAccountsModule");
      externalAccountMod.presentationController.deleteConnection(bank);
    }
  },
    showPopuP: function() {
        this.view.flxPopupNickName.setVisibility(true);
    },
  btnCancelOnClick:function(){
    this.view.flxPopupNickName.setVisibility(false);
    this.view.flxHeader.setEnabled(true);
    this.view.flxContainerCheckingAcc.setEnabled(true);
    // this.view.flxFooter.setEnabled(true);
  },
  btnEditNickNameOnClick:function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navMan=applicationManager.getNavigationManager();
    var isExternal = this.accDetails.type === "external" ? true : false ;
    if(isExternal) {
      navMan.setCustomInfo("frmAccInfoEdit", this.accDetails.externalAccountDetails.NickName);
    }
    else {
      navMan.setCustomInfo("frmAccInfoEdit",this.accDetails.nickName);
    }
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    accountMod.presentationController.commonFunctionForNavigation("frmAccInfoEdit");
  },
  flxBackOnClick:function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  callBank:function()
  {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var infoCall = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
    infoCall.presentationController.onClickCallUs();
  },
  showDial: function (phoneNumber) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    kony.phone.dial(phoneNumber);
  },
  messageBank:function()
  {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("messageCategory","frmAccountInfo");
    var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    messagesMod.presentationController.getCategories();
  },

  btnMessagebankConfiguration: function() {
    var checkPermission = applicationManager.getConfigurationManager().checkUserPermission("MESSAGES_CREATE_OR_REPLY")?true:false;
    if(checkPermission===true || checkPermission==="true"){
      this.view.btnMsgBank.isVisible = true;
    }else{
      this.view.btnMsgBank.isVisible = false;
    }  
  },

});