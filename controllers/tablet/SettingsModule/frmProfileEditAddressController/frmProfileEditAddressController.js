define({
  settingsModule: null,
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },
  preShow: function () {
	this.initActions();
	this.setDataToForm();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  initActions: function() {
	this.initHeaderActions();
	this.clearForm();
	this.validateForm();
	this.view.flxSearchMain.txtSearch.text = "";
	this.view.customSearchbox.tbxSearch.text = "";
	this.view.flxSearchAddress.setVisibility(false);
	this.setWidgetHandles();
  },
  initHeaderActions: function() {
	if (!applicationManager.getDeviceUtilManager().isIpad()) {
	  this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
	  this.view.customHeaderTablet.btnRight.onClick = this.backHandle;
	}
  },
  setWidgetHandles: function() {
    this.view.lstbxCity.onSelection=this.citySelection;
    this.view.lstbxCountry.onSelection=this.countrySelection;
    this.view.lstbxState.onSelection=this.stateSelection;
	this.view.flxSearchMain.txtSearch.onTextChange = this.switchSearchBox;
	this.view.customSearchbox.btnCancel.onClick = this.cancelSearch;
	this.view.segAddresses.onRowClick = this.setSearchedAddress;
	this.view.txtResidentialAddressLineOne.onTextChange = this.validateForm;
	this.view.txtResidentialAddressCity.onTextChange = this.validateForm;
	this.view.txtResidentialAddressState.onTextChange = this.validateForm;
	this.view.txtResidentialAddressZipCode.onTextChange = this.validateForm;
	this.view.txtCountry.onTextChange = this.validateForm;
	this.view.btnContinueResidentialAddress.onClick = this.submitEditedAddress;
  },
  backNavigation: function() {
	var navigationManager = applicationManager.getNavigationManager();
	navigationManager.goBack();
  },
  backHandle: function() {
	this.getSettingsModule().presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
  },
  submitEditedAddress: function() {
 	applicationManager.getPresentationUtility().showLoadingScreen();
// 	var data = {
// 	  "addressLine1": this.view.txtResidentialAddressLineOne.text,
// 	  "addressLine2": this.view.txtResidentialAddressLineTwo.text,
// 	  "state": this.view.txtResidentialAddressState.text,
// 	  "city": this.view.txtResidentialAddressCity.text,
// 	  "country": this.view.txtCountry.text,
// 	  "zipcode": this.view.txtResidentialAddressZipCode.text
// 	};
// 	this.getSettingsModule().presentationController.updateUserAddressData(data);
// 	this.getSettingsModule().presentationController.commonFunctionForNavigation("frmProfileAdressType");
    var data = {
      "addressLine1" : this.view.txtResidentialAddressLineOne.text,
      "addressLine2" : this.view.txtResidentialAddressLineTwo.text,
      "state":this.view.lstbxState.selectedKeyValue[1],
      "city":this.view.lstbxCity.selectedKeyValue[1],
      "country":this.view.lstbxCountry.selectedKeyValue[1],
      "zipcode" : this.view.txtResidentialAddressZipCode.text,
      "countryId":this.view.lstbxCountry.selectedKeyValue[0]
    };
    this.getSettingsModule().presentationController.updateUserAddressData(data);
    var data={
    "state":this.view.lstbxState.selectedKeyValue[0],
      "city":this.view.lstbxCity.selectedKeyValue[0],
	  "countryId": this.view.lstbxCountry.selectedKeyValue[0]
    }
    this.getSettingsModule().presentationController.updateCityAndStateCode(data)
    this.getSettingsModule().presentationController.commonFunctionForNavigation("frmProfileAdressType");
	this.clearForm();
  },
  setDataToForm: function() {
	var data = this.getSettingsModule().presentationController.getUserAddressData();
	this.view.txtResidentialAddressLineOne.text = data.addressLine1 && data.addressLine1.length ? data.addressLine1 : "";
	this.view.txtResidentialAddressLineTwo.text = data.addressLine2 && data.addressLine2.length ? data.addressLine2 : "";
	this.view.txtResidentialAddressState.text = data.state && data.state.length ? data.state : "";
	this.view.txtResidentialAddressZipCode.text = data.zipcode && data.zipcode.length ? data.zipcode : "";
	this.view.txtResidentialAddressCity.text = data.city && data.city.length ? data.city : "";
	this.view.txtCountry.text = data.country && data.country ? data.country : "";
    var countryData=this.getSettingsModule().presentationController.getCountryData();
    var statesData=this.getSettingsModule().presentationController.getStatesData();
    var cityData=this.getSettingsModule().presentationController.getCitiesData();
    this.view.lstbxCountry.masterData=countryData;
    this.view.lstbxState.masterData=statesData;
    this.view.lstbxCity.masterData=cityData;
    this.view.lstbxCountry.selectedKey=data["countryId"];
    this.countrySelection();
      this.view.lstbxState.selectedKey=data["stateId"];
    this.stateSelection();
    this.view.lstbxCity.selectedKey=data["cityId"];
    this.citySelection();
    this.validateForm();
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
	this.getSettingsModule().presentationController.addressSearchEditFlow(query);
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