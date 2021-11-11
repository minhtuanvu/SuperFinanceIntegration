define({ 

 //Type your controller code here 
initActions: function () {
    this.view.customHeader.flxBack.onClick = function () {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    }; 
  this.mapConsentDetails();
  },
  
  mapConsentDetails : function()
  {     
     var navManager = applicationManager.getNavigationManager();
     var selectedIban = navManager.getCustomInfo('frmTppAccountDetails');
     this.view.customHeader.lblLocateUs.text = selectedIban.selectedAccount.lblTitle;     
     applicationManager.getPresentationUtility().showLoadingScreen();
     var settingsModule = applicationManager.getModulesPresentationController("SettingsModule");
     settingsModule.mapAccountDetails(selectedIban.rowId, selectedIban.selectedAccount.lblDetails, selectedIban.index);
  },
   setSegmentData: function(accountData) {
    this.view.segAccountDetails.widgetDataMap = this.getWidgetDataMap();
    this.view.segAccountDetails.setData(accountData);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  getWidgetDataMap: function(){
    var map = {
      lblTitle : "lblTitle",
      lblDetails : "lblDetails",
    };
    return map;
  }
 });