define({ 

  onNavigate : function(data)
  {
    var scope = this;
    var navMan = applicationManager.getNavigationManager();
    data = navMan.getCustomInfo("flxDomesticAcknowledgement");
    if(kony.os.deviceInfo().name === "iPhone") {
      var titleBarAttributes = this.view.titleBarAttributes;
      titleBarAttributes["shadowImage"] = "transparentbox.png";
      this.view.titleBarAttributes = titleBarAttributes;
      this.view.setBackgroundImageForNavbar({
        "image": "transparentbox.png",
        "barMetrics": constants.BAR_METRICS_DEFAULT
      });
    }
    scope.initActions();
    scope.view.Acknowledgement.setContext(data);
  },
  initActions:function()
  {
    var scope = this;
    var navMan = applicationManager.getNavigationManager();
    var configManager = applicationManager.getConfigurationManager();
    scope.view.flxDomesticAckMainContainer.onScrolling = function() {
      scope.iPhoneHeaderHandler();
    };
    scope.view.Acknowledgement.onError = function(error)
    {
      alert(JSON.stringify(error));
    };
    scope.view.Acknowledgement.contextualActionButtonOnClick = function(data,context)
    {
      
      if(data === "NewTransfer")
      {
        navMan.setCustomInfo("frmDomesticAddAccount", {});
        navMan.navigateTo("UnifiedTransferFlow/frmSelectTransferType");
      }
      if(data === "btnTryAgain")
      {

        navMan.navigateTo("UnifiedTransferFlow/frmSelectTransferType");
      }
      if(data === "SaveNewPayee")
      {
        navMan.setCustomInfo("frmDomesticAddAccount", context);
        navMan.navigateTo("UnifiedTransferFlow/frmDomesticAddAccount");
        
      }
      if(data === "TransferActivities")
      {
        var transMod = applicationManager.getModulesPresentationController("TransactionModule");
        if (configManager.getDeploymentGeography() === 'EUROPE') {
          applicationManager.getPresentationUtility().showLoadingScreen();
          var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
          transferModPresentationController.clearEuropeFlowAtributes();
          navMan.setEntryPoint("europeTransferFlow", "frmTransferActivitiesTransfersEurope");
          navMan.navigateTo("frmTransferActivitiesTransfersEurope");
        } 
        else {
          var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
          moneyMovementModule.clearMMFlowAtributes();
          navMan.setEntryPoint("centralmoneymovement", "frmTransferActivitiesTransfers");
          navMan.navigateTo("frmTransferActivitiesTransfers");

        }
      }
    };
    scope.view.Acknowledgement.getBtnEntitlement = function(btnId, data, callback)
    {
      callback(true);
    };
    scope.view.Acknowledgement.onBack = function()
    {
      alert("Back Navigation");
    };

  },
  iPhoneHeaderHandler: function(){
    var scope = this;
    if(this.view.flxDomesticAckMainContainer.contentOffsetMeasured.y > 50){
      scope.view.title = "Acknowledgement";
    }
    else if(this.view.flxDomesticAckMainContainer.contentOffsetMeasured.y < 45){
      scope.view.title = "";
    }
  },


});