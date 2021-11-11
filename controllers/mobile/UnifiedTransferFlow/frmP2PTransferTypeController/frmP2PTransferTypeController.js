define({ 

  onNavigate:function(){
    var scope = this;
    if(kony.os.deviceInfo().name === "iPhone") {
      var titleBarAttributes = this.view.titleBarAttributes;
      titleBarAttributes["shadowImage"] = "transparentbox.png";
      this.view.titleBarAttributes = titleBarAttributes;
      this.view.setBackgroundImageForNavbar({
        "image": "transparentbox.png",
        "barMetrics": constants.BAR_METRICS_DEFAULT
      });
     this.view.flxHeaderTop.setVisibility(false);
    } else {
      this.view.flxHeaderTop.setVisibility(true);
    }
       var params = {};
   var tokenParams = kony.sdk.getCurrentInstance().tokens.DbxUserLogin.provider_token.params.security_attributes;
   params.entitlement = {};
   params.entitlement.features = JSON.parse(tokenParams.features);
   params.entitlement.permissions = JSON.parse(tokenParams.permissions);
   this.view.transferTypeSelection4.setContext(params);
    this.view.flxMainContainer.onScrolling = this.iPhoneHeaderHandler;
    this.view.transferTypeSelection4.enableHideDescription = function(visibleDesc){
      if(visibleDesc){
        scope.enablingDetails();
      } else{
        scope.hideDetailsPage(); 
      }
    };
    this.view.transferTypeSelection4.buttonActionHandling = function(trannsferTypeDetails){
        if(trannsferTypeDetails["id"] === "MakeTransfer"){
        scope.navigatePage(trannsferTypeDetails);
      } else {
        scope.navigateAddAccount(trannsferTypeDetails);
      }
    };    

    this.view.transferTypeSelection4.hideTile = function() {
      scope.view.flxP2PTrnsfer.setVisibility(false);
    };  },

  enablingDetails:function(){
    this.view.flxMainContainer.setVisibility(false);
    this.view.flxMainContainer.forceLayout();
  },

  hideDetailsPage:function(){
   this.view.flxMainContainer.setVisibility(true);
    this.view.flxMainContainer.forceLayout();
  },

  navigatePage:function(transferTypeDetails) {
    var navMan = applicationManager.getNavigationManager();
//     var ntf = new kony.mvc.Navigation("frmP2PTransfer");
//     ntf.navigate(transferTypeDetails);
    navMan.setCustomInfo("frmP2PTransfer", transferTypeDetails);
    navMan.navigateTo("UnifiedTransferFlow/frmP2PTransfer");
        
  },
  
    navigateAddAccount:function(transferTypeDetails) {
      var navMan = applicationManager.getNavigationManager();
    if(transferTypeDetails["transferType"] === "Pay a Person") {
//       var ntf = new kony.mvc.Navigation("frmP2PAddAccount");   
//       ntf.navigate();
      navMan.navigateTo("UnifiedTransferFlow/frmP2PAddAccount");
    }
    },

  iPhoneHeaderHandler: function(){
    var scope = this;
    if(this.view.flxMainContainer.contentOffsetMeasured.y > 50){
      scope.view.title = "Transfer type";
    }
    else if(this.view.flxMainContainer.contentOffsetMeasured.y < 45){
      scope.view.title = "";
    }
  }

});