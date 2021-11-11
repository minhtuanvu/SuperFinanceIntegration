define(function(){
  return {

    onInit : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
      this.fetchBaseCurrency();
      this.exchangeRates = null;
      this.view.preShow = this.preShow; 
      this.view.tbxBaseCurrency.text = "1";
	  this.MANTISSA_LENGTH = 4;
    },

    onNavigate:function()
    {
      try {       

      }catch(error){
      }
    },


    preShow:function()
    {
      var scope = this;
      try { 
        if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
          this.view.flxHeader.isVisible = false;
          this.view.flxFooter.isVisible = true;
        }else{
          this.view.flxHeader.isVisible = true;
          this.view.flxFooter.isVisible = false;
        }
        this.initActions();
		this.handleCalculatorVisibilityBasedOnPermission(applicationManager.getConfigurationManager().checkUserPermission("FX_RATES_VIEW_CALCULATOR"));
      }catch(error){
        kony.print("frmForexDashboard onInitActions-->"+error);
      }
    },
    initActions: function(){
      var scope = this;
      this.view.flxBuyCurrencyCodeSelector.onClick = this.navigateToBuyCurrencyScreen.bind(this);
      this.view.tbxBaseCurrency.onTextChange = this.onTextChangeOfTbxBaseCurrency.bind(this);
      this.view.segMarketValueSelector.onRowClick = this.onConversionSelection.bind(this);
      this.view.flxDropDown.onClick = this.flxDropDownClick.bind(this);
      var MenuHandler =  applicationManager.getMenuHandler();
      var configManager = applicationManager.getConfigurationManager();
      MenuHandler.setUpHamburgerForForm(scope, configManager.constants.MENUFOREIGNEXCHANGE);
    },
    navigateToBuyCurrencyScreen: function(){
      var forexModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ForeignExchange");
      forexModule.presentationController.navigateToBuyCurrencyScreen();      
    },
	
	handleCalculatorVisibilityBasedOnPermission : function(isCalculatorAllowed){
        this.view.tbxBaseCurrency.setVisibility(isCalculatorAllowed);
        this.view.lblBaseConversionRate.setVisibility(isCalculatorAllowed);
        this.view.flxDropDownContainer.setVisibility(isCalculatorAllowed);
        this.view.forceLayout();
    },
	
    setTextBoxValue : function(){
       this.view.tbxBaseCurrency.text = "1";
	},
    setExchangeRateValues: function(data){
      this.exchangeRates = data;
    },
    onConversionSelection: function(segWidget, sectionIndex, rowIndex){
      var forexModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ForeignExchange");
      forexModule.presentationController.handleConversionSelection(rowIndex);
      this.setSelectedMarketValue(segWidget, sectionIndex, rowIndex);
    },
    uiSettingsOnConversionSelection: function(baseCurrency, quoteCurrency, rowNumber){
      var conversionChoice=this.exchangeRates;
      var selectedRow=conversionChoice[rowNumber];
      this.view.lblBaseConversionRate.text = "1 " +  baseCurrency + " = " + selectedRow.marketExchangeValue + " " + quoteCurrency;
    },
    setSelectedMarketValue :function(segWidget, sectionIndex, rowIndex){
      var rowData = segWidget.data[rowIndex];
      this.view.lblTitle.text = rowData.marketName;
      this.view.lblValue.text = rowData.marketExchangeValue;
      this.flxDropDownClick();
    },
    flxDropDownClick : function(){  //mehtod to be called when clicked on dropDown 
      if( this.view.segMarketValueSelector.isVisible){
        this.view.segMarketValueSelector.setVisibility(false);
        this.view.imgDropDown.src = "plusicon.png";
        this.view.imgDropDown.height = "10dp";
      }
      else{
        this.view.segMarketValueSelector.setVisibility(true);
        this.view.imgDropDown.src = "minusicon.png";
        this.view.imgDropDown.height = "4dp";
      }
    },
    
    fetchBaseCurrency: function(){
      var forexModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ForeignExchange");
      var userAddresses = applicationManager.getUserPreferencesManager().getUserObj().Addresses;
      var countryCode = "";
      if(!kony.sdk.isNullOrUndefined(userAddresses) && Array.isArray(userAddresses) && userAddresses.length>0){
        userAddresses.forEach(function(address) {   
          if (address.isPrimary === "true") {
            countryCode = address.CountryCode;
          }
        });
      }
      var params = {
        "CountryCode":countryCode,
        "companyCode":applicationManager.getUserPreferencesManager().getCompanyId(),
        "market":"10 1" //applicationManager.getUserPreferencesManager().getMarket()
      };
      forexModule.presentationController.fetchBaseCurrency(params);      
    },
    setBaseCurrency: function(currencyCode){
      if(kony.sdk.isNullOrUndefined(currencyCode)){
        currencyCode = "";
      }
      this.view.lblSellCurrencyCode.text = currencyCode;
    },
    setSegMarketValueSelector: function(data){
      if(Array.isArray(data) && data.length>0){
        this.view.lblTitle.text = data[0].marketName;
        this.view.lblValue.text = data[0].marketExchangeValue;
      }
      var widgetDataMap = {
        					"lblCurrency":"marketName",
        					"lblmarketValue":"marketExchangeValue"
      					  };
      this.view.segMarketValueSelector.widgetDataMap = widgetDataMap;
      this.view.segMarketValueSelector.setData(data);
    },
    setSegCurrencyRates: function(data){
      var widgetDataMap = {
        "lblCurrency":"marketName",
        "lblConversionValue":"marketExchangeValue"
      };
      this.view.segCurrencyRates.widgetDataMap = widgetDataMap;
      this.view.segCurrencyRates.setData(data);
    },
    setBuyCurrencyValue: function(currencyCode){
      this.view.lblBuyCurrencyCode.text = currencyCode;
    },
    onTextChangeOfTbxBaseCurrency: function(){
      var textValue = this.view.tbxBaseCurrency.text;
      if(textValue === ""){
        textValue = "0";
      }
      var multipleFactor = Number(textValue).toFixed(this.MANTISSA_LENGTH);
      var segData = this.view.segMarketValueSelector.data;
      if(Array.isArray(this.exchangeRates) && this.exchangeRates.length>0){
        for(var i=0;i<this.exchangeRates.length;i++){
          var marketValue = Number(this.exchangeRates[i]["marketExchangeValue"]).toFixed(this.MANTISSA_LENGTH);
          var changedValue = Number(multipleFactor*marketValue).toFixed(this.MANTISSA_LENGTH);
          segData[i]["marketExchangeValue"] = changedValue;
          if(this.view.lblTitle.text === segData[i]["marketName"]){
            this.view.lblValue.text = changedValue;
          }
        }
      }
      this.view.segMarketValueSelector.setData(segData);
    },
      //method to be calledwhen an error response is received
    setErrorPopupforForex : function(response){
      try {    
        if(!kony.sdk.isNullOrUndefined(response)){
          var scopeObj=this;
          var errorResponse ;
          if(!kony.sdk.isNullOrUndefined(response.errorMessage)){
            errorResponse = response.errorMessage;
          }
          else{
            errorResponse = kony.i18n.getLocalizedString("kony.mb.servicesErrormsg");
          }
          this.view.flxPopup.customPopup.lblPopup.text = errorResponse;      
          this.timerCounter=parseInt(this.timerCounter)+1;
          var timerId="timerPopupError"+this.timerCounter;
          this.view.flxPopup.skin = "sknFlxf54b5e";
          this.view.customPopup.imgPopup.src = "errormessage.png";    
          this.view.flxPopup.setVisibility(true);
          kony.timer.schedule(timerId, function() {
            scopeObj.view.flxPopup.setVisibility(false);
          }, 1.5, false);             
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }catch(error){
        kony.print("frmForexDashboard setErrorPopup-->"+error);
      }       
    },
    
  };
});