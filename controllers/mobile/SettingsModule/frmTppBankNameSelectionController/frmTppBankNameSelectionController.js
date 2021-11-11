define({ 

 //Type your controller code here 
  initActions: function () {
    this.view.customHeader.flxBack.onClick = function () {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    };
    this.disablePopUp();
    
    this.mapSelectBank();
    this.view.segAccounts.onRowClick = this.segRowClick;
	
    var editPermission = applicationManager.getConfigurationManager().checkUserPermission("PSD2_TPP_CONSENT_REVOKE");
    if (editPermission) {
      this.view.btnRevoke.onClick = this.enablePopUp;
      this.view.btnRevoke.setVisibility(true);
    } else {
      this.view.btnRevoke.setVisibility(false);
    } 
    this.view.flxNo.onClick = this.disablePopUp;     
    this.view.flxYes.onClick = this.confirmRevoke;
    var lblBlockConsent = kony.i18n.getLocalizedString("kony.mb.consent.blocked");
    this.view.lblError.text = lblBlockConsent.replace('${bankName}', this.view.customHeader.lblLocateUs.text);
    var lblMsgRevoke = kony.i18n.getLocalizedString("kony.mb.consent.alert");
    this.view.lblMsg.text = lblMsgRevoke.replace('${bankName}', this.view.customHeader.lblLocateUs.text);
  },
  
 segRowClick : function ()
  {
    var rowId = this.view.segAccounts.selectedRowIndex[1];
    var selectedAccount = this.view.segAccounts.data[rowId];
    var navManager = applicationManager.getNavigationManager();
    var rowTppIndex = navManager.getCustomInfo('frmTppBankNameSelection');
    var index = rowTppIndex.rowId;
    navManager.setCustomInfo('frmTppAccountDetails',{selectedAccount,rowId,index});
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmTppAccountDetails");
  },

  showExpiryDate : function(expDate)
  {
    this.view.lblExpiryDate.text = "";    
    var navManager = applicationManager.getNavigationManager();
    var daysLeft = navManager.getCustomInfo('frmTppBankNameSelection');

    if(daysLeft.selectedBank.lblDaysLeft.text === "Expired")
    {
      this.view.lblExpiredOn.text = kony.i18n.getLocalizedString("kony.mb.consent.expired") + " " + expDate;
      this.view.flxExpired.setVisibility(true);  
      this.view.flxExpiryDate.setVisibility(false);
    }else{
     
      this.view.lblExpiryDate.text = kony.i18n.getLocalizedString("kony.mb.consent.expires") + " " + expDate;
      this.view.flxExpiryDate.setVisibility(true);
      this.view.flxExpired.setVisibility(false);
      this.calculateDays(expDate);
    }
    
       
     if(daysLeft.selectedBank.isBlocked === true)
     {         
         this.view.flxBlockMessage.setVisibility(true);
     }else{
       this.view.flxBlockMessage.setVisibility(false);
     }    
  },
  
  calculateDays: function(validUntil)
  {
       var formatUtil = applicationManager.getFormatUtilManager();
       this.view.lblDays.setVisibility(true);
     
       var dateDiff = formatUtil.getNumberOfDaysBetweenTwoDates(formatUtil.getDateObjectfromString(validUntil), new Date());
       this.view.lblDays.skin = (dateDiff < 10)?"sknLblE5690BSSP26px":"sknLbl04AA16SSP26px";

       this.view.lblDays.text = "(" + dateDiff + " " + kony.i18n.getLocalizedString("kony.mb.consent.days.left") + ")";
  },
  
  mapSelectBank : function()
  {     
     var navManager = applicationManager.getNavigationManager();
     var data = navManager.getCustomInfo('frmTppBankNameSelection');
     this.view.customHeader.lblLocateUs.text = data.selectedBank.lblTPP;     
     applicationManager.getPresentationUtility().showLoadingScreen();
     var settingsModule = applicationManager.getModulesPresentationController("SettingsModule");
     settingsModule.mapTPPSelectBank(data.rowId);
  },
   setSegmentData: function(accountData) {
    this.view.segAccounts.widgetDataMap = this.getWidgetDataMap();
    this.view.segAccounts.setData(accountData);
    this.view.forceLayout();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  getWidgetDataMap: function(){
    var map = {
      lblTitle : "lblTitle",
      lblDetails : "lblDetails"
    };
    return map;
  },
  
  enablePopUp : function(){
    
    this.view.flxConfirmationPopUp.setVisibility(true);
  },
  
  disablePopUp : function(){
    
    this.view.flxConfirmationPopUp.setVisibility(false);
  },
    
  confirmRevoke : function(){  

    var navManager = applicationManager.getNavigationManager();
    var rowSelectIndex = navManager.getCustomInfo('frmTppBankNameSelection');
    var settingsModule = applicationManager.getModulesPresentationController("SettingsModule");
    settingsModule.updatePSD2Consent(rowSelectIndex.selectedBank.id); 
  }
});