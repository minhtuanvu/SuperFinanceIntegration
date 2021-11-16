define({
  isGroupMasterSwitchToggle:false,
  alertLevelConfig : {
    GROUP: "GROUP",
    ALERT:"ALERT"
  },
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
    this.isGroupMasterSwitchToggle = false;
    this.bindAlertGroupData();
  },
  setFlowActions : function(){
    var scope = this;
    this.view.customHeader.flxBack.onClick = function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    };
  },
   /**
  * used to set the alert switch visibility.
  * @param {boolean} visible - boolean value of visibility.
  */
  setAlertSwitchesVisibility: function(visible) {
    this.view.flxInlineMessage.setVisibility(!visible);
    this.view.flxAlertGroupsList.setEnabled(visible);
    this.view.flxDisableAlertsGreyOut.setVisibility(!visible);
    if (visible) {
      this.view.skin = "sknFrmAlerts";
    } else {
      this.view.skin = "sknFrmAlertsGray";
    }
  },
   /**
  * used to disable alerts.
  * @param {object} alertData - used to set the UI of corresponding switches.
  */
  disableAlerts: function() {
     var scope = this;
     var basicConfig = {
        message: kony.i18n.getLocalizedString("kony.mb.Alerts.DisableAlert"),
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        yesLabel: "Yes",
        noLabel: "No",
        alertHandler: handle
      };
      kony.ui.Alert(basicConfig, {});
    function handle(response) {
        if(response) {
          scope.setAlertSwitchesVisibility(false);
          scope.buildParamsForSwitchToggle();
        }
        else {
          scope.view.switchReceiveAlerts.selectedIndex = 0;
        }
    }
  },
    /**
  * used to set the behavior on master switch toggle.
  * @param {object} alertData - to set the statuses using alertData.
  */
  onMasterSwitchToggle: function(alertData) {
    this.isGroupMasterSwitchToggle = true;
    var switchIndex = this.view.switchReceiveAlerts.selectedIndex;
    if(switchIndex) {
      this.disableAlerts(alertData);
    }
    else {
      this.setAlertSwitchesVisibility(true);
      this.buildParamsForSwitchToggle();
    }
    this.view.flxBody.forceLayout();
  },
   /**
  * used to set the alert data to the form.
  * @param {object} alertData - alertData from backend service response.
  */
  bindAlertGroupData: function() {
    var navManager = applicationManager.getNavigationManager();
    this.view.title = navManager.getCustomInfo("frmAlertsListHeader");
    this.view.customHeader.lblLocateUs.text = navManager.getCustomInfo("frmAlertsListHeader");
    var categoryInfo = navManager.getCustomInfo("selectedCategoryInfo");
    //assign text based on account level and  type or id 
    if(categoryInfo.isAccountLevel === "true") {
       this.view.lblBodyTxt.text = (applicationManager.getConfigurationManager().getAccountIDLevelAlertsFlag() === true) ?
        kony.i18n.getLocalizedString("kony.mb.alerts.editAlertPreferences") :
      kony.i18n.getLocalizedString("kony.mb.alerts.EditAlertPreferencesForAccountType");
    } else{
      this.view.lblBodyTxt.text = kony.i18n.getLocalizedString("kony.mb.Alerts.EditAlertPreferencesForCategory");
    }
    var alertsData = navManager.getCustomInfo("frmAlertsEditPreferences");
    var switchValue = (alertsData.categorySubscription.isSubscribed === "true") ? 0 : 1;
    this.view.switchReceiveAlerts.selectedIndex = switchValue;
    this.view.switchReceiveAlerts.onSlide = this.onMasterSwitchToggle.bind(this, alertsData);
    this.setAlertSwitchesVisibility(switchValue === 0 ? true:false);
    this.setAlertGroupsData(alertsData);
    this.view.flxAlertGroupsList.forceLayout();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  /**
  * create dynamic rows and set alert groups list data
  * @param {object} alertsData - selected category preference data.
  */
  setAlertGroupsData: function(alertsData) {
    var alertGroups = alertsData.alertTypes;
    this.view.flxAlertGroupsContainer.removeAll();
    this.view.flxAlertGroupRowDummy.setVisibility(false);
    for(var i = 0; i < alertGroups.length; i++) {
      var type = this.view.flxAlertGroupRowDummy.clone("" + i);
      this.view.flxAlertGroupsContainer.add(type);
      this.view[i+"lblDataType"].text = alertGroups[i].alerttypetext_DisplayName;
      this.view[i+"flxAlertGroupRowDummy"].isVisible=true;
      this.view[i+"flxAlertGroupRowDummy"].focusSkin = "sknBlackBorder";
      var isEnable = alertGroups[i].alertSubTypes ? true : false;
      this.view[i+"flxAlertGroupRowDummy"].setEnabled(isEnable);
      this.view[i+"flxImage"].isVisible = isEnable;
      var currGroupJSON = alertGroups[i];
      this.view[i+"flxAlertGroupRowDummy"].info = {"data":currGroupJSON};
      this.view[i+"flxAlertGroupRowDummy"].onClick = this.onClickOfAlertGroup.bind(this,currGroupJSON);
    }
  },
   /**
  * on click of alert group row to navigate
  * @param {object} alertsData - selected category preference data.
  * @param {object} currGroupJSON - selected alert group details
  */
  onClickOfAlertGroup : function(currAlertGroup){
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    var alertLevelConfig = settingsModule.presentationController.getAlertLevelConfiguration();
    settingsModule.presentationController.setAlertsGroupID(currAlertGroup.alerttype_id);
    if(alertLevelConfig === "GROUP"){
      this.onNavToAlertPreferencesScreen();
    }else{
      this.navigateToAlertsListScreen();
    }
  },
  /**
  * used to navigate to alert group preferences screen
  */
  onNavToAlertPreferencesScreen: function() {
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsModule.presentationController.commonFunctionForNavigation("frmAlertsEditPreferences");
  },
  /**
  * used to navigate to alert list screen
  * @param {object} alertGroupData - selected alertgroup data
  */
  navigateToAlertsListScreen: function() {
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsModule.presentationController.commonFunctionForNavigation("frmAlertsList");
  },
   /**
  * used to build params for setting the alert preferences for switch toggle.
  */
  buildParamsForSwitchToggle: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var alertData = navManager.getCustomInfo("frmAlertsEditPreferences");
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    var setPreferParam = {
      "alertCategoryId": settingsModule.presentationController.getAlertsCategoryID(),
      "isSubscribed":this.view.switchReceiveAlerts.selectedIndex === 0 ? "true" :"false",
      "alertSubscription":{
        "preferenceLevel": settingsModule.presentationController.getAlertLevelConfiguration(),
        "groups": []
      }
    };
    setPreferParam.alertSubscription.groups = this.getAlertGroupForSetPreferences(alertData);
    var categoryInfo = navManager.getCustomInfo("selectedCategoryInfo");
    //in case of account level alerts
    if(categoryInfo.isAccountLevel === "true" && applicationManager.getConfigurationManager().getAccountIDLevelAlertsFlag() === true) {
      setPreferParam["accountId"] = settingsModule.presentationController.getAccountID();
    } else if(categoryInfo.isAccountLevel === "true" && applicationManager.getConfigurationManager().getAccountIDLevelAlertsFlag() === false){
      setPreferParam["accountTypeId"] = settingsModule.presentationController.getAccountTypeID();
    }
    
    settingsModule.presentationController.setAlertPreferences(setPreferParam,"frmAlertGroupsList");
  },
   /*
  * create alert groups/alerts payload required to set alert preferences
  * @param: preferences data
  * @return: alert groups array formatted for set alert preferencess call
  */
  getAlertGroupForSetPreferences : function(alertData){
    var scopeObj = this;
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    var alertGroupsArr = [];
    for(var i =0; i< alertData.alertTypes.length; i++){
      var groupObj ={
        "typeID": alertData.alertTypes[i].alerttype_id,
        "isSub": alertData.alertTypes[i].isSubscribed === "true" ? true :false, 
        "alerts":[]
      };
      //enable all groups when category is enabled for first time
      groupObj.isSub = (alertData.categorySubscription.isInitialLoad === "true") ? true : groupObj.isSub;
       //set channels,frequence in case group level preference
      if(settingsModule.presentationController.getAlertLevelConfiguration() === this.alertLevelConfig.GROUP){
        groupObj["chanls"] = this.getChannelListToSetPreferences(alertData.alertTypes[i], alertData);
        if(alertData.alertTypes[i].subscribedFrequency){
          groupObj["freq"] = {"id":alertData.alertTypes[i].subscribedFrequency[0].alertFrequencyId || "",
                              "value":alertData.alertTypes[i].subscribedFrequency[0].frequencyValue!=="null"?alertData.alertTypes[i].subscribedFrequency[0].frequencyValue||"":"",
                              "time":alertData.alertTypes[i].subscribedFrequency[0].frequencyTime || ""};
        } else{
          groupObj["freq"] = null;
        }
      }
      //ALERTS in group
      var alertsOfGroup = alertData.alertTypes[i].alertSubTypes ? alertData.alertTypes[i].alertSubTypes : [];
      var alertsArr = alertsOfGroup.map(function(alert){
        var alertObj = {
          "id": alert.alertsubtype_id,
          "value1": alert.alertsubtype_value1,
          "isSub" : alert.isSubscribed === "true" ? true : false
        };
        //enable all alerts when category is enabled for first time
        alertObj.isSub = (alertData.categorySubscription.isInitialLoad === "true") ?
          true : alertObj.isSub;

        if(alert.alertCondition && alert.alertCondition.NoOfFields && alert.alertCondition.NoOfFields === "2")
          alertObj["value2"] = alert.alertsubtype_value2;
        //set channels,frequence in case alert level preference
        if(settingsModule.presentationController.getAlertLevelConfiguration() === scopeObj.alertLevelConfig.ALERT){
          alertObj["chanls"] = scopeObj.getChannelListToSetPreferences(alert, alertData);
          if(alert.subscribedFrequency){
            alertObj["freq"] = {"id":alert.subscribedFrequency[0].alertFrequencyId || "",
                                "value":alert.subscribedFrequency[0].frequencyValue || "",
                                "time":alert.subscribedFrequency[0].frequencyTime || ""};
          }else{
            alertObj["freq"] = null;
          }
        }
        return alertObj;
      });
      groupObj.alerts = alertsArr;
      alertGroupsArr.push(groupObj);
    }
    return alertGroupsArr;
  },
   /**
  * get array of channels formatted for set alert preferences payload
  * @param: alert - current alert group/alert data
  * @param: alertData - selected category preferences data
  * @return {object} channelPref - list of all channels
  */
  getChannelListToSetPreferences: function(alert, alertData) {
    var channelPref = [];
    var supportedChannels = alert.supportedChannels ? alert.supportedChannels.split(",") : [];
    var subscribedChannels = alert.subscribedChannels ? alert.subscribedChannels.split(",") : [];
      for(var i=0; i<supportedChannels.length; i++){
        var channelObj = {
          "id": supportedChannels[i],
          "isSub": subscribedChannels.indexOf(supportedChannels[i]) >= 0 ? true : false
        };
        //enable all supported channels on initial update of cat
        if(alertData.categorySubscription.isInitialLoad === "true"){
          channelObj.isSub = true;
        }
        channelPref.push(channelObj);
      }
    channelPref = channelPref.length > 0 ? channelPref : null;
    return channelPref;
  },
});