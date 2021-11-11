define({ 

  onNavigate : function()
  {
    var scope = this;
     var navMan = applicationManager.getNavigationManager();
    var data = navMan.getCustomInfo("flxDomesticNewAccountAck");
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
    scope.view.flxDomesticAckMainContainer.onScrolling = function() {
      scope.iPhoneHeaderHandler();
    };
    scope.view.Acknowledgement.onError = function(error)
    {
      alert(JSON.stringify(error));
    };
    scope.view.Acknowledgement.contextualActionButtonOnClick = function(data,context)
    {
      //alert(JSON.stringify(data));
      var navMan = applicationManager.getNavigationManager();
      if(data === "NewTransfer")
      {
//         var ntf = new kony.mvc.Navigation("frmSelectTransferType");
//         ntf.navigate();
        navMan.setCustomInfo("frmDomesticAddAccount", {});
        navMan.navigateTo("UnifiedTransferFlow/frmSelectTransferType");
      }
      if(data === "btnTryAgain")
      {
//         var ntf = new kony.mvc.Navigation("frmSelectTransferType");
//         ntf.navigate();
        navMan.navigateTo("UnifiedTransferFlow/frmSelectTransferType");
      }
      if(data === "SaveNewPayee")
      {
        navMan.setCustomInfo("frmDomesticAddAccount", context);
        navMan.navigateTo("UnifiedTransferFlow/frmDomesticAddAccount");
        
//         var ntf = new kony.mvc.Navigation("frmNewPayee");
//         ntf.navigate(context);
      }
       if(data === "Accounts")
      {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.showDashboard();
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