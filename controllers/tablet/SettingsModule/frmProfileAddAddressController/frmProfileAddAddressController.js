define({
  settingsModule: null,
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },
  preShow: function () {
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  initActions: function() {
    this.initHeaderActions();
    this.validateForm();
    this.view.flxSearchMain.txtSearch.text = "";
    this.view.customSearchbox.tbxSearch.text = "";
    this.view.flxSearchAddress.setVisibility(false);
    this.setWidgedHandles();
    this.populateData();
  },
  initHeaderActions: function() {
    if (!applicationManager.getDeviceUtilManager().isIpad()) {
      this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.btnRight.onClick = this.backHandle;
    }
  },
  setWidgedHandles: function() {
    this.view.flxSearchMain.txtSearch.onTextChange = this.switchSearchBox;
    this.view.customSearchbox.btnCancel.onClick = this.cancelSearch;
    this.view.segAddresses.onRowClick = this.setSearchedAddress;
    this.view.txtResidentialAddressLineOne.onTextChange = this.validateForm;
    //this.view.txtResidentialAddressCity.onTextChange = this.validateForm;
    //this.view.txtResidentialAddressState.onTextChange = this.validateForm;
    this.view.txtResidentialAddressZipCode.onTextChange = this.validateForm;
    //this.view.txtCountry.onTextChange = this.validateForm;
    this.view.lstbxCity.onSelection=this.citySelection;
    this.view.lstbxCountry.onSelection=this.countrySelection;
    this.view.lstbxState.onSelection=this.stateSelection;
    this.view.btnContinueResidentialAddress.onClick = this.onSubmitAddress;
  },
  backNavigation: function() {
    var navigationManager = applicationManager.getNavigationManager();
    navigationManager.goBack();
  },
  backHandle: function() {
    this.getSettingsModule().presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
  },
  onSubmitAddress: function() {
    var addressData = {
      "addressLine1": this.view.txtResidentialAddressLineOne.text,
      "addressLine2": this.view.txtResidentialAddressLineTwo.text,
      "state":this.view.lstbxState.selectedKeyValue[1],
      "zipcode": this.view.txtResidentialAddressZipCode.text,
      "city":this.view.lstbxCity.selectedKeyValue[1],
      "country":this.view.lstbxCountry.selectedKeyValue[1]
    };
    this.getSettingsModule().presentationController.updateUserAddressID();
    this.getSettingsModule().presentationController.updateUserAddressData(addressData);
    var stateAndCityCode = {
      "state":this.view.lstbxState.selectedKeyValue[0],
      "city":this.view.lstbxCity.selectedKeyValue[0]
    };
    this.getSettingsModule().presentationController.updateCityAndStateCode(stateAndCityCode);
    this.getSettingsModule().presentationController.commonFunctionForNavigation("frmProfileAdressType");
  },
  switchSearchBox: function() {
    this.view.customSearchbox.tbxSearch.setFocus(true);
    this.view.customSearchbox.tbxSearch.text = "";
    this.view.flxSearchAddress.setVisibility(true);
    this.view.segAddresses.removeAll();
    this.onSearchingAddress();
  },
  onSearchingAddress: function() {
    this.view.customSearchbox.tbxSearch.text = this.view.flxSearchMain.txtSearch.text;
    var searchText = this.view.customSearchbox.tbxSearch.text;
    var query = {};
    query.text = searchText;
    this.getSettingsModule().presentationController.addressSearch(query);
  },
  cancelSearch: function() {
    this.view.flxSearchAddress.setVisibility(false);
    this.view.flxSearchMain.txtSearch.text = "";
    this.view.customSearchbox.tbxSearch.text = "";
    this.view.customSearchbox.tbxSearch.setFocus(false);
    this.view.flxSearchMain.txtSearch.text = "";
    this.view.segAddresses.removeAll();
  },
  //Sets address data from backesnd to appropriate fields on form
  setSearchedAddress: function() {
    this.view.flxSearchMain.txtSearch.text = "";
    var segment = this.view.segAddresses;
    var data = segment.data[segment.selectedRowIndex[1]].formattedAddress;
    var address = data.split(",");
    address.reverse();
    this.view.txtCountry.text = address[0];
    this.view.txtResidentialAddressState.text = address[1];
    this.view.txtResidentialAddressCity.text = address[2];
    this.view.txtResidentialAddressLineTwo.text = address[3];
    this.view.txtResidentialAddressZipCode.text = "";
    if (address[4]) {
      this.view.txtResidentialAddressLineOne.text = address[4];
    } else if(address[5]) {
      var temp = address[5].concat(",");
      this.view.txtResidentialAddressLineOne.text = temp.concat(address[4]);
    }
    this.view.flxSearchAddress.setVisibility(false);
    this.validateForm();
  },
  setSearchData: function(data) {
    if(data && data.length) {
      this.view.segAddresses.widgetDataMap = {
        "lblAddress": "formattedAddress"
      };
      this.view.segAddresses.setData(data);
    }
  },
  validateForm: function() {
    var button = this.view.btnContinueResidentialAddress;
    var firstLine = this.view.txtResidentialAddressLineOne.text;
    var city = this.view.lstbxCity.selectedKey;
    var state = this.view.lstbxState.selectedKey;
    var zipCode = this.view.txtResidentialAddressZipCode.text;
    var country = this.view.lstbxCountry.selectedKey;
    if(this.view.lstbxCountry.selectedKey=="lbl1"){
      country=null;
    }
    if(this.view.lstbxState.selectedKey=="lbl1"){
      state=null;
    }
    var text = this.view.lstbxCity.selectedKey;
    if(text=="lbl1"){
      city=null;
    }
    var validator = firstLine && city && state && zipCode && country;
    button.setEnabled(!!validator);
    button.skin = validator ? "sknBtnBg0A78D1BorderE9FontFFSSPR36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
  },
  clearForm: function() {
    this.view.txtResidentialAddressLineOne.text = "";
    this.view.txtResidentialAddressLineTwo.text = "";
    this.view.txtResidentialAddressCity.text = "";
    this.view.txtResidentialAddressState.text = "";
    this.view.txtResidentialAddressZipCode.text = "";
    this.view.txtCountry.text = "";
    var??settingsMod = this.getSettingsModule();
    var countryData=settingsMod.presentationController.getCountryData();
    var statesData=settingsMod.presentationController.getStatesData();
    var cityData=settingsMod.presentationController.getCitiesData();
    this.view.lstbxCountry.masterData=countryData;
    this.view.lstbxState.masterData=statesData;
    this.view.lstbxCity.masterData=cityData;
    this.view.lstbxCountry.selectedKey=countryData[0][0];
    this.view.lstbxState.selectedKey=statesData[0][0];
    this.view.lstbxCity.selectedKey=cityData[0][0];
  },
  getSettingsModule: function() {
    if (!this.settingsModule) {
      this.settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    }
    return this.settingsModule;
  },
  populateData:function(){
    var??settingsMod = this.getSettingsModule();
    var cityAndStateCode=settingsMod.presentationController.getUserAddressData();
    if(!(cityAndStateCode.addressLine1)){
      var countryData=settingsMod.presentationController.getCountryData();
      var statesData=settingsMod.presentationController.getStatesData();
      var cityData=settingsMod.presentationController.getCitiesData();
      this.view.lstbxCountry.masterData=countryData;
      this.view.lstbxState.masterData=statesData;
      this.view.lstbxCity.masterData=cityData;
      this.view.lstbxCountry.selectedKey=countryData[0][0];
      this.view.lstbxState.selectedKey=statesData[0][0];
      this.view.lstbxCity.selectedKey=cityData[0][0];
      this.view.txtResidentialAddressLineOne.text = "";
      this.view.txtResidentialAddressLineTwo.text = "";
      this.view.txtResidentialAddressZipCode.text = "";
      this.validateForm();
      this.checkForEnable();
    }
    else{
      this.validateForm();
      this.checkForEnable();
    }
  },
  countrySelection:function(){
    this.view.lstbxState.setEnabled(true);
    this.view.lstbxCity.setEnabled(false);
    var countryCode=this.view.lstbxCountry.selectedKey;
    var??settingsMod = this.getSettingsModule();
    var statesData=settingsMod.presentationController.filterStatesBasedOnCountryId(countryCode);
    var cityData=settingsMod.presentationController.getCitiesData();
    this.view.lstbxCity.masterData=cityData;
    this.view.lstbxCity.selectedKey=cityData[0][0];
    this.view.lstbxState.masterData=statesData;
    this.view.lstbxState.selectedKey=statesData[0][0];
    if(countryCode=="lbl1"){
      countryCode="";
    }
    this.validateForm();
    this.checkForEnable();
  },
  stateSelection:function(){
    this.view.lstbxCity.setEnabled(true);
    var countryCode=this.view.lstbxCountry.selectedKey;
    var stateCode=this.view.lstbxState.selectedKey;
    var??settingsMod = this.getSettingsModule();
    var cityData=settingsMod.presentationController.filterCitiesBasedOnCountryIdAndStateId(countryCode,stateCode);
    this.view.lstbxCity.masterData=cityData;
    this.view.lstbxCity.selectedKey=cityData[0][0];
    if(stateCode=="lbl1"){
      stateCode="";
    }
    this.checkForEnable();
    this.validateForm();
  },
  citySelection:function(){
    var text = this.view.lstbxCity.selectedKey;
    if(text=="lbl1"){
      text="";
    }
    this.validateForm();
  },
  checkForEnable:function(){
    if(this.view.lstbxCountry.selectedKey=="lbl1"){
      this.view.lstbxState.setEnabled(false);
      this.view.lstbxCity.setEnabled(false);
    }
    if(this.view.lstbxState.selectedKey=="lbl1"){
      this.view.lstbxCity.setEnabled(false);
    }
  }
});