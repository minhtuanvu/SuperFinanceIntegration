define({ 

  onNavigate : function()
  {
    var scope = this;
    var navMan = applicationManager.getNavigationManager();
    var data = navMan.getCustomInfo("frmP2PNewAccountAck");
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
    scope.view.flxAcknowledgement.onScrolling = function() {
      scope.iPhoneHeaderHandler();
    };
    scope.view.Acknowledgement.onError = function(error)
    {
      alert(JSON.stringify(error));
    };
    scope.view.Acknowledgement.contextualActionButtonOnClick = function(data,context)
    {
       var navMan = applicationManager.getNavigationManager();
      //alert(JSON.stringify(data));
      if(data === "NewTransfer")
      {
//         var ntf = new kony.mvc.Navigation("frmP2PTransferType");
//         ntf.navigate();
        navMan.navigateTo("UnifiedTransferFlow/frmP2PTransferType");
      }
      if(data === "btnTryAgain")
      {
//         var ntf = new kony.mvc.Navigation("frmP2PTransferType");
//         ntf.navigate();
        
        navMan.navigateTo("UnifiedTransferFlow/frmP2PTransferType");
      }
      if(data === "SaveNewPayee")
      {
       
//         var ntf = new kony.mvc.Navigation("frmNewPayee");
//         ntf.navigate(context);
        navMan.navigateTo("UnifiedTransferFlow/frmP2PAddAccount");
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
    if(this.view.flxAcknowledgement.contentOffsetMeasured.y > 50){
      scope.view.title = "Acknowledgement";
    }
    else if(this.view.flxAcknowledgement.contentOffsetMeasured.y < 45){
      scope.view.title = "";
    }
  },


});