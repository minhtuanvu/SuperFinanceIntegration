define([], function() {
    /**
     * User defined presentation controller
     * @constructor
     * @extends kony.mvc.Presentation.BasePresenter
     */
    function Forex_PresentationController() {
        kony.mvc.Presentation.BasePresenter.call(this);
        scopeObj_Businesspresentationcontroller=this;
    }

    inheritsFrom(Forex_PresentationController, kony.mvc.Presentation.BasePresenter);

    /**
     * Overridden Method of kony.mvc.Presentation.BasePresenter
     * This method gets called when presentation controller gets initialized
     * @method
     */
    Forex_PresentationController.prototype.initializePresentationController = function() {
      this.baseCurrencyCode = "";
      this.quoteCurrencyCode = "";
      this.isdefaultQuoteCurrencyAssigned = false;
      this.isBack= false;
      this.isDashboardCached = 0;
    };
    Forex_PresentationController.prototype.navigateToforexDashboard = function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navObj = applicationManager.getNavigationManager();
      navObj.navigateTo("frmForexDashboard");
      if(!kony.sdk.isNullOrUndefined(this.isBack) && this.isBack){
        var formController = applicationManager.getPresentationUtility().getController('frmForexDashboard',true);
        formController.setTextBoxValue();
        this.isBack=false;
      }
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
    Forex_PresentationController.prototype.navigateToBuyCurrencyScreen =  function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navObj = applicationManager.getNavigationManager();
      navObj.navigateTo("frmBuyCurrency");
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
    Forex_PresentationController.prototype.fetchBaseCurrency = function(params){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var foreignExchangeManager = applicationManager.getForeignExchangeManager();
      foreignExchangeManager.fetchBaseCurrency(params,this.fetchBaseCurrencySuccessCallback.bind(this), this.fetchBaseCurrencyErrorCallback.bind(this));
    };
    Forex_PresentationController.prototype.fetchBaseCurrencySuccessCallback = function(response){
      var formController = applicationManager.getPresentationUtility().getController('frmForexDashboard',true);
      this.baseCurrencyCode = response.code;
      formController.setBaseCurrency(response.code);
      this.baseCurrencyCode = response.code;
      this.fetchDashboardCurrencyRates();
    };
    Forex_PresentationController.prototype.fetchDashboardCurrencyRates = function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var foreignExchangeManager = applicationManager.getForeignExchangeManager();
      var params = {};
      if(this.isDashboardCached === 0) {
        params = {
          "baseCurrencyCode" : this.baseCurrencyCode
        };
      }
      else {
        params = {
          "baseCurrencyCode" : this.baseCurrencyCode,
          "companyCode" : this.getCompanyCode(),
          "market" : this.getMarket()
        };
      }
      foreignExchangeManager.fetchDashboardCurrencyRates(params,this.fetchDashboardCurrencyRatesSuccessCallback.bind(this), this.fetchDashboardCurrencyRatesErrorCallback.bind(this));
    };

  	Forex_PresentationController.prototype.fetchDashboardCurrencyRatesSuccessCallback = function(response){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var currencyValues;
      var formController = applicationManager.getPresentationUtility().getController('frmForexDashboard',true);
      var currentForm = kony.application.getCurrentForm().id;
      var i = 0, j = 0;

      if(currentForm === "frmBuyCurrency"){
        this.navigateToforexDashboard();
      }
      if(Array.isArray(response.Currencies) && response.Currencies.length>0){
        currencyValues = response.Currencies;
      }
      if(typeof(this.quoteCurrencyCode) === 'string' && !kony.sdk.isNullOrUndefined(this.quoteCurrencyCode) && Array.isArray(currencyValues)){
        for(i = 0;i < currencyValues.length; i++) {
          if(!kony.sdk.isNullOrUndefined(currencyValues[i].code)) {
            if (currencyValues[i].code === this.quoteCurrencyCode) {
              j = i;
          }
        }
      }
      }
      if(Array.isArray(currencyValues) && currencyValues.length>0 && !kony.sdk.isNullOrUndefined(currencyValues[0].code)){
        if(this.isdefaultQuoteCurrencyAssigned === false){
          this.isdefaultQuoteCurrencyAssigned = true;
          this.updateRecentCurrency();
        }
        formController.setBuyCurrencyValue(currencyValues[j].code);
        this.quoteCurrencyCode = currencyValues[j].code;
      }
      var currencyValueRates;
      currencyValueRates = this.processCurrencyValuesForSegment(currencyValues[j]);
      formController.setExchangeRateValues(currencyValueRates);
      formController.setSegMarketValueSelector(currencyValueRates);
      formController.setSegCurrencyRates(currencyValueRates);
      if(kony.sdk.isNullOrUndefined(this.quoteCurrencyCode))
        this.quoteCurrencyCode = this.baseCurrencyCode;
      try{
        formController.uiSettingsOnConversionSelection(this.baseCurrencyCode,this.quoteCurrencyCode,0);
      }
      catch(e) {}
      this.isDashboardCached = 1;
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
      
  Forex_PresentationController.prototype.fetchDashboardCurrencyRatesErrorCallback = function(error){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var currentForm = kony.application.getCurrentForm().id;
      var controller = applicationManager.getPresentationUtility().getController(currentForm, true);
      if(currentForm === "frmForexDashboard"){
        controller.setErrorPopupforForex(error);
      }
      
    };
    Forex_PresentationController.prototype.fetchBaseCurrencyErrorCallback = function(error){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var currentForm = kony.application.getCurrentForm().id;
      var controller = applicationManager.getPresentationUtility().getController(currentForm, true);
      controller.setErrorPopupforForex(error);
      
     
    };
  
	Forex_PresentationController.prototype.processCurrencyValuesForSegment = function(data){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var result = [];
      //if(Array.isArray(data) && data.length>0){
        if(data.markets.length>0){
          var marketValues = data.markets;
          for(var i=0;i<marketValues.length;i++){
            var temp = {};
            if(!kony.sdk.isNullOrUndefined(marketValues[i].sellRate)){
              temp["marketName"] = marketValues[i].market + " Sell:";
              temp["marketExchangeValue"] = this.parseExchangeRateValue(marketValues[i].sellRate);
            }
            result.push(temp);
            temp = {};
            if(!kony.sdk.isNullOrUndefined(marketValues[i].buyRate)){
              temp["marketName"] = marketValues[i].market + " Buy:";
              temp["marketExchangeValue"] = this.parseExchangeRateValue(marketValues[i].buyRate);
            }
            result.push(temp);
          }
        }
      //}
      return result;
    };  

  Forex_PresentationController.prototype.parseExchangeRateValue = function(value, delimiter){
    var result = 0;
    if(kony.sdk.isNullOrUndefined(delimiter)){
      delimiter = ".";
    }
    value = value+"";
    var tempArr = value.split(delimiter);
    var lengthOfRadix = tempArr[0].length;
    var mantissaLength = 0;
    if(lengthOfRadix > 4){
      mantissaLength = 2;
    }
    else if(lengthOfRadix > 3){
      mantissaLength = 3;
    }
    else{
      mantissaLength = 4;
    }
    try{
      result = Number(value).toFixed(mantissaLength);
    }
    catch(e){
      return 0;
    }
    return result;
  };
  
    Forex_PresentationController.prototype.fetchDashboardCurrencyList = function(params) {
      applicationManager.getPresentationUtility().showLoadingScreen();
	  var foreignExchangeManager = applicationManager.getForeignExchangeManager();
      foreignExchangeManager.fetchDashboardCurrencyList(params,this.fetchDashboardCurrencyListSuccess.bind(this), this.fetchDashboardCurrencyListFailure.bind(this));    
    };
    /** 
    * Method to handle success response of fetch currency list
    * @param {object} response - which consists of response from backend
    */
    Forex_PresentationController.prototype.fetchDashboardCurrencyListSuccess = function(response) {
      var navManager = applicationManager.getNavigationManager();
      if (response.length !== 0 && response!== undefined) {
        var viewController = applicationManager.getPresentationUtility().getController('frmBuyCurrency', true);
        viewController.onFetchCurrencyListSuccess(response.Currencies);
      }
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    };

    /** 
    * Method to handle failure response of  currency list
    * @param {object} errorRes - which consists of errorResponse from backend
    */
    Forex_PresentationController.prototype.fetchDashboardCurrencyListFailure = function(errorRes) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var currentForm = kony.application.getCurrentForm().id;
      var controller = applicationManager.getPresentationUtility().getController(currentForm, true);
      if(currentForm === "frmForexDashboard"){
        controller.setErrorPopupforForex(errorRes);
      }
      else if(currentForm === "frmBuyCurrency"){
        controller.setErrorPopup(errorRes);
      }
      
    };

	Forex_PresentationController.prototype.setQuoteCurrencyCode = function(code){
      if(typeof(code) === 'string' && !kony.sdk.isNullOrUndefined(code)){
        this.quoteCurrencyCode = code;
      }
    };
  
	Forex_PresentationController.prototype.updateRecentCurrency = function(param){
      var scopeObj = this;
      if(!kony.sdk.isNullOrUndefined(param)){
      this.isBack = param;
      }
      applicationManager.getPresentationUtility().showLoadingScreen();
      var params = {
        "quoteCurrencyCode":this.quoteCurrencyCode,
        "companyCode" : this.getCompanyCode(),
        "market" : this.getMarket()
      };
      var foreignExchangeManager = applicationManager.getForeignExchangeManager();
      foreignExchangeManager.updateRecentCurrency(params,this.updateRecentCurrencySuccess.bind(this), this.updateRecentCurrencyFailure.bind(this));    
	};
  
	Forex_PresentationController.prototype.updateRecentCurrencySuccess = function(){
      this.fetchDashboardCurrencyRates();
    };

	Forex_PresentationController.prototype.updateRecentCurrencyFailure = function(errorRes){
      var currentForm = kony.application.getCurrentForm().id;
      var controller = applicationManager.getPresentationUtility().getController(currentForm, true);
       controller.setErrorPopup(errorRes);
      

    };

	Forex_PresentationController.prototype.fetchCurrencyRates = function(){
      var scopeObj = this;
      applicationManager.getPresentationUtility().showLoadingScreen();
      var params = {
        "quoteCurrencyCode" : this.quoteCurrencyCode,
        "baseCurrencyCode" : this.baseCurrencyCode,
        "companyCode" : this.getCompanyCode(),
        "market" : this.getMarket()
      };
      var fetchCurrencyRates = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Forex");
      fetchCurrencyRates.customVerb("fetchCurrencyRates", params,
		function(status, data, error){
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
              scopeObj.fetchCurrencyRatesSuccess(obj["data"]);
            } else {
              scopeObj.fetchCurrencyRatesFailure(obj["errmsg"]);
            }
		});
    };

	Forex_PresentationController.prototype.fetchCurrencyRatesSuccess = function(rates){
      var currencyRatesList = this.processCurrencyValuesForSegment(rates);
      var navObj = applicationManager.getNavigationManager();
      navObj.navigateTo("frmForexDashboard");
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    };

	Forex_PresentationController.prototype.fetchCurrencyRatesFailure = function(errorRes){
      var currentForm = kony.application.getCurrentForm().id;
      var controller = applicationManager.getPresentationUtility().getController(currentForm, true);
      if(currentForm === "frmForexDashboard"){
        controller.setErrorPopupforForex(errorRes);
      }
      else if(currentForm === "frmBuyCurrency"){
        controller.setErrorPopup(errorRes);
      }
    };
  
  Forex_PresentationController.prototype.handleConversionSelection = function(rowIndex){
    var controller = applicationManager.getPresentationUtility().getController("frmForexDashboard", true);
    controller.uiSettingsOnConversionSelection(this.baseCurrencyCode,this.quoteCurrencyCode ,rowIndex);
  };
  
  Forex_PresentationController.prototype.getMarket = function(){
    return "10 1";
  };
  
  Forex_PresentationController.prototype.getCompanyCode = function(){
    var market = "";
    try {
      var companyID = applicationManager.getUserPreferencesManager().getCompanyId();
      if (!kony.sdk.isNullOrUndefined(companyID))
        market = companyID;
    } catch (e) {}
    return market;
  };

    return Forex_PresentationController;
});