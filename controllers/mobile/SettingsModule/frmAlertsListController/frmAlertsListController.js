define({
  init : function(){
  },
  preShow: function() {
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.setFlowActions();
    this.bindData();
  },
  setFlowActions : function(){
    var scope = this;
    this.view.customHeader.flxBack.onClick = function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    };
  },
  /*
  * set the title value for the form
  * @param: title to be set
  */
  setTitleText : function(title){
    this.view.title = title;
    this.view.customHeader.lblLocateUs.text = title;
  },
  /**
  * used to set the alerts data to the form.
  */
  bindData: function() {
    var navManager = applicationManager.getNavigationManager();
    var alertsData = navManager.getCustomInfo("frmAlertsEditPreferences");
    this.view.lblBodyTxt.text = kony.i18n.getLocalizedString("kony.mb.Alerts.EditAlertPreferencesForAlertGroup");
    
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    var selectedGroup = settingsModule.presentationController.getAlertsGroupID();
    for(var i=0;i<alertsData.alertTypes.length;i++){
      if(alertsData.alertTypes[i].alerttype_id === selectedGroup){
        this.setTitleText(alertsData.alertTypes[i].alerttypetext_DisplayName);
        this.setAlertsData(alertsData.alertTypes[i]);
        break;
      }
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  /*
  * used to navigate to alert preferences screen
  */
  onNavToAlertPreferencesScreen: function(alert) {
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsModule.presentationController.setAlertID(alert.alertsubtype_id);
    settingsModule.presentationController.commonFunctionForNavigation("frmAlertsEditPreferences");
  },
  /**
  * create dynamic rows and set alerts list data
  * @param {object} alertsData - selected alert group data
  */
  setAlertsData: function(alertsData) {
    this.view.flxAlertsContainer.removeAll();
    this.view.flxAlertRowDummy.setVisibility(false);
    var alertsList = alertsData.alertSubTypes || [];
    for(var i = 0; i < alertsList.length; i++) {
      var type = this.view.flxAlertRowDummy.clone("" + i);
      this.view.flxAlertsContainer.add(type);
      this.view[i+"lblAlertName"].text = alertsList[i].alertsubtypetext_displayName;
      this.view[i+"flxAlertRowDummy"].isVisible=true;
      this.view[i+"flxAlertRowDummy"].focusSkin = "sknFlxf9f9f9";
      if(alertsList[i].alertAttribute && alertsList[i].alertAttribute.alertattribute_type && alertsList[i].alertAttribute.alertattribute_type==="AMOUNT"){
        var value = "";
        value = applicationManager.getFormatUtilManager().formatAmountandAppendCurrencySymbol(alertsList[i].alertsubtype_value1);
        if(alertsList[i].alertCondition && alertsList[i].alertCondition.NoOfFields && alertsList[i].alertCondition.NoOfFields === "2"){
          value = value + " - "+ applicationManager.getFormatUtilManager().formatAmountandAppendCurrencySymbol(alertsList[i].alertsubtype_value2);
        }
        this.view[i+"lblAlertValue"].text = value;
      }  
      else
        this.view[i+"lblAlertValue"].text = alertsList[i].alertAttribute ? alertsList[i].alertsubtype_value1 : "";
      this.view[i+"flxAlertRowDummy"].onClick = this.onNavToAlertPreferencesScreen.bind(this,alertsList[i]);
    }
  },
});