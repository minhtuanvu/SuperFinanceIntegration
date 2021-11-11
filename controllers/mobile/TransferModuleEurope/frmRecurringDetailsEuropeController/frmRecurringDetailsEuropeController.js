define({ 
  init: function () {
    var scope=this;
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
  },
  preShow: function () {
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
    }
    else {
      this.view.flxHeader.isVisible = true;
    }
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  initActions: function () {
    // var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
    var navMan = applicationManager.getNavigationManager();
    this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
  },
  navigateCustomBack: function () {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },

  onNavigate : function(){
    var navMan = applicationManager.getNavigationManager();
    var transactionData =navMan.getCustomInfo("frmRecurringDetailsEurope");
    try{
    var tokenParams = kony.sdk.getCurrentInstance().tokens.DbxUserLogin.provider_token.params.security_attributes;
   // var isCombinedUser = kony.sdk.getCurrentInstance().tokens.DbxUserLogin.provider_token.params.user_attributes.isCombinedUser;
    transactionData.entitlement = {};
   // transactionData.isCombinedUser = isCombinedUser;
    transactionData.entitlement.features = JSON.parse(tokenParams.features);
    transactionData.entitlement.permissions = JSON.parse(tokenParams.permissions);
    this.view.DetailsMain.setContext(transactionData);
    this.view.DetailsMain.onSuccess = this.onCancelSeriesSuccess;
    this.view.DetailsMain.onButtonAction =this.onButtonAction;
    this.view.DetailsMain.onError = this.onError;
    this.view.DetailsMain.showLoading= function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
    };
    this.view.DetailsMain.dismissLoading= function() {
       applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
    }catch(e){
    this.view.DetailsMain.setContext(transactionData);
    this.view.DetailsMain.onSuccess = this.onCancelSeriesSuccess;
    this.view.DetailsMain.onButtonAction =this.onButtonAction;
    this.view.DetailsMain.onError = this.onError;
    }
  },
  onCancelSeriesSuccess : function(response){
    var navMan = applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmTransferActivitiesRecurringEurope", {"DELETE" : response});
    navMan.navigateTo("frmTransferActivitiesRecurringEurope",response);
  },
  onButtonAction : function(buttonId, details){
    switch (buttonId){
      case "View Attachment":
        var navMan = applicationManager.getNavigationManager();
        var transactionData =navMan.getCustomInfo("frmRecurringDetailsEurope");
        var downloadAttachments = transactionData.fileNames;
        var downloadAttachmentFileNames = [];
        if(downloadAttachments && downloadAttachments.length>0){
          for(var i=0; i<downloadAttachments.length;i++){
            downloadAttachmentFileNames.push(downloadAttachments[i].fileName);
                    }
                }
                navMan.setCustomInfo("downloadAttachments", downloadAttachments);
          navMan.navigateTo("frmAttachments");
          break;
      case "Edit":
          var navMan = applicationManager.getNavigationManager();
          var transactionData =navMan.getCustomInfo("frmRecurringDetailsEurope");
          var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
          transferModPresentationController.initializeStateData(false, "");
          if (transactionData) {
            transferModPresentationController.setTransactionMode(transactionData.serviceName);
            navMan.setCustomInfo("existingAttachments", transactionData.fileNames);
          }  
          if (transferModPresentationController.transactionMode === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")) {
            transferModPresentationController.setEuropeFlowType("INTERNAL");
            transferModPresentationController.getFromAccounts(function(res) {
              transferModPresentationController.setFromAndToAccounts(res);
              transferModPresentationController.setTransactionObject(transactionData);
            });
          }
          else {
            transferModPresentationController.setEuropeFlowType("EXTERNAL");
            transferModPresentationController.getFromAndToAccounts(function(res){
              transferModPresentationController.setFromAndToAccounts(res);
              transferModPresentationController.setTransactionObject(transactionData);
            });
          } 
          break;
       case "Repeat Transaction":
          var navMan=applicationManager.getNavigationManager();
          var transactionData =navMan.getCustomInfo("frmRecurringDetailsEurope");
          var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
          transferModPresentationController.initializeStateData(false, "");
          if (transactionData)
            transferModPresentationController.setTransactionMode(transactionData.serviceName);
          if (transferModPresentationController.transactionMode === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")) {
            transferModPresentationController.setEuropeFlowType("INTERNAL");
            transferModPresentationController.getFromAccounts(function(res) {
              transferModPresentationController.setFromAndToAccounts(res);
              transferModPresentationController.repeatTransfer(transactionData);
            });
          }
          else {
            transferModPresentationController.setEuropeFlowType("EXTERNAL");
            transferModPresentationController.getFromAndToAccounts(function(res) {
              transferModPresentationController.setFromAndToAccounts(res);
              transferModPresentationController.repeatTransfer(transactionData);
            });
          }  

        }

    }, 
  onError : function(err){
    if (err["isServerUnreachable"]) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    } else { 
      if (err["errorMessage"])
        applicationManager.getDataProcessorUtility().showToastMessageError(this, err["errorMessage"]);
      else
        applicationManager.getDataProcessorUtility().showToastMessageError(this, JSON.stringify(err));
    }  
  }
  });