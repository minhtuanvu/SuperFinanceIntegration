define([], function () { 
    
    /**
     * User defined business controller
     * @constructor
     * @extends kony.mvc.Business.Controller
     */
    function WealthManager() { 
		var modelDefinition = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Order");
      	this.wealthData = new modelDefinition();
      // kony.mvc.Business.Controller.call(this); 

    } 

    inheritsFrom(WealthManager, kony.mvc.Business.Delegator); 

    /**
     * Overridden Method of kony.mvc.Business.Controller
     * This method gets called when business controller gets initialized
     * @method
     */
    WealthManager.prototype.initializeBusinessController = function() { 

    }; 

    /**
     * Overridden Method of kony.mvc.Business.Controller
     * This method gets called when business controller is told to execute a command
     * @method
     * @param {Object} kony.mvc.Business.Command Object
     */
	WealthManager.prototype.execute = function(command) { 

		kony.mvc.Business.Controller.prototype.execute.call(this, command);

	};
   /**
    * set an attribute in the Wealth object.
    * @param {string} key , key in the Wealth object.
    * @param {string} value , value to be assigned for the key in the Wealth object.
    */
  WealthManager.prototype.setWealthAttribute = function (key, value) {
    this.wealthData[key] = value;
  };
  /**
    * used to get a wealth object.
    * @return {object} WealthObject, entire Wealth Object.
    */
  WealthManager.prototype.getWealthObject = function () {
    return this.wealthData;
  };
  /**
    * used to set a Wealth object.
    * @param {object} object, entire Wealth Object.
    */
  WealthManager.prototype.setWealthObject = function (object) {
    this.wealthData = object;
  };
  /**
    * used to clear Wealth Object.
    */
  WealthManager.prototype.clearWealthObject = function () {
    var modelDefinition = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Order");
    this.wealthData = new modelDefinition();
  };
   /**
    * get currency rate
    * @param {object} param ,
    * @param {function} presentationSuccessCallback , invoke the call back with success response.
    * @param {function} presentationErrorCallback , invoke the call back with error response.
    */
   WealthManager.prototype.getCurrencyRate = function (param, presentationSuccessCallback, presentationErrorCallback) {
    var savingsPotRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("CurrencyDetails"); 
    savingsPotRepo.customVerb("GetMarketRates", param, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
           presentationSuccessCallback(obj["data"]);
        }
        else {
          presentationErrorCallback(obj["errmsg"]);
       }
    }
  };
   WealthManager.prototype.downloadList = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var DownloadList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("DownloadPDF");
    DownloadList.customVerb("generatePDF", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  WealthManager.prototype.getHoldingList = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var holdingsList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Portfolio");
    holdingsList.customVerb("getPortfolioHoldings", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  WealthManager.prototype.getReportDetails = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var reportList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Reports");
     reportList.customVerb("getReportAndDownloadTypes", params, getAllCompletionCallback);
     function getAllCompletionCallback(status, data, error) {
       var srh = applicationManager.getServiceResponseHandler();
       var obj = srh.manageResponse(status, data, error);
       if (obj["status"] === true) {
         presentationSuccessCallback(obj["data"]);
       }
      else {
         presentationErrorCallback(obj["errmsg"]);
       }
     }
      
 };
  WealthManager.prototype.getAccountActivityList = function(params, presentationSuccessCallback, presentationErrorCallback) {
    var accountActivity = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("AccountActivity");
    accountActivity.customVerb("getAccountActivityOperations", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
            presentationSuccessCallback(obj["data"]);
        } else {
            presentationErrorCallback(obj["errmsg"]);
        }
    }
};
/**
    * create order
    * @param {object} param ,
    * @param {function} presentationSuccessCallback , invoke the call back with success response.
    * @param {function} presentationErrorCallback , invoke the call back with error response.
    */
   WealthManager.prototype.createOrder = function (param, presentationSuccessCallback, presentationErrorCallback) {
    var savingsPotRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Order"); 
    savingsPotRepo.customVerb("createOrder", param, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
           presentationSuccessCallback(obj["data"]);
        }
        else {
          presentationErrorCallback(obj["errmsg"]);
       }
    }
  };

  WealthManager.prototype.getAssets = function (params,presentationSuccessCallback, presentationErrorCallback) {
    var instrumentList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("InstrumentDetails");
   instrumentList.customVerb("getPortfolioDetails", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  
  };
  
   WealthManager.prototype.getPortfolioDetails = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var instrumentList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("InstrumentDetails");
    instrumentList.customVerb("getInstrumentTotal", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
 };
  
     WealthManager.prototype.getDashboardDetails = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var instrumentList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("InstrumentDetails");
    instrumentList.customVerb("getDashboardGraphData", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
 };
 
  WealthManager.prototype.getTransactionList = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var holdingsList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Portfolio");
    holdingsList.customVerb("getTransactionDetails", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  
    WealthManager.prototype.getPerformanceList = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var performanceList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PortfolioPerformance");
    performanceList.customVerb("getPortfolioPerformance", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  WealthManager.prototype.getHistoricalCurrencyRate = function (param, presentationSuccessCallback, presentationErrorCallback) {
    var savingsPotRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("CurrencyDetails"); 
    savingsPotRepo.customVerb("getHistoricalData", param, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
           presentationSuccessCallback(obj["data"]);
        }
        else {
          presentationErrorCallback(obj["errmsg"]);
       }
    }
  };
  WealthManager.prototype.getInstrumentDetails = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var holdingsList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("ProductDetails");
    holdingsList.customVerb("getProductDetails", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  WealthManager.prototype.getInstrumentDetailsById = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var holdingsList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("ProductDetails");
    holdingsList.customVerb("getProductDetailsFromId", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
    
  WealthManager.prototype.updateUserFavouriteInstruments = function (params,presentationSuccessCallback, presentationErrorCallback) {
    var favouriteList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("FavouriteInstruments");
    favouriteList.customVerb("updateUserFavouriteInstruments", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  
  WealthManager.prototype.getUserFavouriteInstruments = function (params,presentationSuccessCallback, presentationErrorCallback) {
    var favouriteList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("FavouriteInstruments");
    favouriteList.customVerb("getUserFavouriteInstruments", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  
   WealthManager.prototype.getFavoriteInstruments = function (params,presentationSuccessCallback, presentationErrorCallback) {
    var favouriteList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("InstrumentDetails");
    favouriteList.customVerb("getFavoriteInstruments", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };

   WealthManager.prototype.getStockNewsStory = function (param, presentationSuccessCallback, presentationErrorCallback) {
   var stockNewsStory = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("StockNewsStory"); 
    stockNewsStory.customVerb("getStockNewsStory", param, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
           presentationSuccessCallback(obj["data"]);
        }
        else {
          presentationErrorCallback(obj["errmsg"]);
       }
    }
  };

  WealthManager.prototype.getCurrencyList = function (presentationSuccessCallback, presentationErrorCallback) {
     var holdingsList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("CurrencyDetails");
    holdingsList.customVerb("getAddCurrency",{}, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };

  //getSearchList
    WealthManager.prototype.getSearchList = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var holdingsList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Portfolio");
    holdingsList.customVerb("getSearchInstrumentList", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
   WealthManager.prototype.getPlaceOrderDetails = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var holdingsList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("GetInstrumentDetails");
    holdingsList.customVerb("GetInstrumentDetails", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
   WealthManager.prototype.getTodayMarketNews = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var holdingsList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("DailyMarket");
    holdingsList.customVerb("getDailyMarket", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  
    WealthManager.prototype.getTopNews = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var holdingsList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("MarketNews");
    holdingsList.customVerb("getTopMarketNews", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
// getWatchlist function - to get watchlist data from service - 
 // service not ready
   WealthManager.prototype.getWatchList = function (params,presentationSuccessCallback, presentationErrorCallback) {
    var holdingsList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("MarketNews");
    holdingsList.customVerb("getTopMarketNews", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
   WealthManager.prototype.getRecentActivity = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var holdingsList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Portfolio");
    holdingsList.customVerb("getDashboardRecentActivity", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  //getWealthDashboard
    WealthManager.prototype.getPortfolioList = function (params,presentationSuccessCallback, presentationErrorCallback) {
      var holdingsList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("InstrumentDetails");
     holdingsList.customVerb("getWealthDashboard", params, getAllCompletionCallback);
     function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
       var obj = srh.manageResponse(status, data, error);
       if (obj["status"] === true) {
         presentationSuccessCallback(obj["data"]);
       }
       else {
         presentationErrorCallback(obj["errmsg"]);
       }
     }
    
  };
   WealthManager.prototype.getAssetsList = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var holdingsList = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("InstrumentDetails");
    holdingsList.customVerb("getAssetList", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  WealthManager.prototype.createMarketOrder = function (param, presentationSuccessCallback, presentationErrorCallback) {
    var marketOrder = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Order"); 
    marketOrder.customVerb("createMarketOrder", param, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
           presentationSuccessCallback(obj["data"]);
        }
        else {
          presentationErrorCallback(obj["errmsg"]);
       }
    }
  };
  
    WealthManager.prototype.modifyMarketOrder = function (param, presentationSuccessCallback, presentationErrorCallback) {
    var marketOrder = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Order"); 
    marketOrder.customVerb("modifyOrder", param, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
           presentationSuccessCallback(obj["data"]);
        }
        else {
          presentationErrorCallback(obj["errmsg"]);
       }
    }
  };
  
  WealthManager.prototype.getOrdersDetails = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var order = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("OrdersDetails");
    order.customVerb("getOrdersDetails", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  WealthManager.prototype.cancelOrder = function (params,presentationSuccessCallback, presentationErrorCallback) {
     var order = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("OrdersDetails");
    order.customVerb("cancelOrder", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  
  
  // ITEMS BELOW ARE TEMPORARY - TAP AND MOCK ITEMS - WRITE ACTUAL INTEGRATIONS ABOVE THIS
  
  
  	     WealthManager.prototype.getInvestmentSummary = function (params, presentationSuccessCallback, presentationErrorCallback) {
//        var investmentSummary = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("portfolioDetails");
//     investmentSummary.customVerb("getInvestmentAccounts", params, getAllCompletionCallback);
//     function getAllCompletionCallback(status, data, error) {
//       var srh = applicationManager.getServiceResponseHandler();
//       var obj = srh.manageResponse(status, data, error);
//       if (obj["status"] === true) {
//         presentationSuccessCallback(obj["data"]);
//       }
//       else {
//         presentationErrorCallback(obj["errmsg"]);
//       }
//     }
             var object= {
    "InvestmentSummary": [
        {
            "portfolio_id": "1222",
            "PortfolioIPRiskLevel": "20.0",
            "PortfolioMV": "1000000.0",
            "RefCurrency": "CHF"
        },
        {
            "portfolio_id": "1223",
            "PortfolioIPRiskLevel": "20.0",
            "PortfolioMV": "1000000.0",
            "RefCurrency": "CHF"
        },
        {
            "portfolio_id": "1224",
            "PortfolioIPRiskLevel": "20.0",
            "PortfolioMV": "1000000.0",
            "RefCurrency": "CHF"
        }]};
       presentationSuccessCallback(object);
  };
       WealthManager.prototype.getTotalAssets = function (params, presentationSuccessCallback, presentationErrorCallback) {
             var object= {
    "TotalAssets": [
        {
            "ValuationCurrency": "CHF",
            "AssetCode": "Forwards",
            "MVAssetClass": "117390.3",
            "UnrealizedPL": "58695.15",
            "MVPortfolio": "5.44663205E7",
            "Total_PL": "-788617.02"
        },
           {
            "ValuationCurrency": "CHF",
            "AssetCode": "Forwards",
            "MVAssetClass": "117390.3",
            "UnrealizedPL": "58695.15",
            "MVPortfolio": "5.44663205E7",
            "Total_PL": "-788617.02"
        },
           {
            "ValuationCurrency": "CHF",
            "AssetCode": "Forwards",
            "MVAssetClass": "117390.3",
            "UnrealizedPL": "58695.15",
            "MVPortfolio": "5.44663205E7",
            "Total_PL": "-788617.02"
        },
           {
            "ValuationCurrency": "CHF",
            "AssetCode": "Forwards",
            "MVAssetClass": "117390.3",
            "UnrealizedPL": "58695.15",
            "MVPortfolio": "5.44663205E7",
            "Total_PL": "-788617.02"
        },
           {
            "ValuationCurrency": "CHF",
            "AssetCode": "Forwards",
            "MVAssetClass": "117390.3",
            "UnrealizedPL": "58695.15",
            "MVPortfolio": "5.44663205E7",
            "Total_PL": "-788617.02"
        },
           {
            "ValuationCurrency": "CHF",
            "AssetCode": "Forwards",
            "MVAssetClass": "117390.3",
            "UnrealizedPL": "58695.15",
            "MVPortfolio": "5.44663205E7",
            "Total_PL": "-788617.02"
        }
    ]};
       presentationSuccessCallback(object);
//        var totalAsset = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("assetSummary");
//     totalAsset.customVerb("getTotalAssets", params, getAllCompletionCallback);
//     function getAllCompletionCallback(status, data, error) {
//       var srh = applicationManager.getServiceResponseHandler();
//       var obj = srh.manageResponse(status, data, error);
//       if (obj["status"] === true) {
//         presentationSuccessCallback(obj["data"]);
//       }
//       else {
//         presentationErrorCallback(obj["errmsg"]);
//       }
//     }
  };
    WealthManager.prototype.getCurrentPositions = function (params,presentationSuccessCallback, presentationErrorCallback) {
//    // var getPendingUserTransactions = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("MarketNews");
//        var externalBanks = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("currentPosition");
//     externalBanks.customVerb("getCurrentPositions", params, getAllCompletionCallback);
//     function getAllCompletionCallback(status, data, error) {
//       var srh = applicationManager.getServiceResponseHandler();
//       var obj = srh.manageResponse(status, data, error);
//       if (obj["status"] === true) {
//         presentationSuccessCallback(obj["data"]);
//       }
//       else {
//         presentationErrorCallback(obj["errmsg"]);
//       }
//     }
//   };
              var object= {
    "CurrentPosition": [
        {
            "ValueValCcy": "1000000.0",
			"ProfitLoss": "0.0",
			"Quantity": "1000000.0",
			"Weight": "100.0",
			"CostPrice": "1.0",
            "Ccy": "CHF",
            "Ref_Ccy": "CHF"
        }]};
       presentationSuccessCallback(object);
     },
      WealthManager.prototype.getStockNews = function (params,presentationSuccessCallback, presentationErrorCallback) {
       var stockNews = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("getStocksNews");
    stockNews.customVerb("getStockNews", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
        WealthManager.prototype.getStockNewsDetails = function (params,presentationSuccessCallback, presentationErrorCallback) {
       var stockNews = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("StockNews");
    stockNews.customVerb("getstockNewsDetails", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
   WealthManager.prototype.getDocuments = function (params,presentationSuccessCallback, presentationErrorCallback) {
//        var getDocs = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("getDocumentDetails");
//     getDocs.customVerb("getDocuments", params, getAllCompletionCallback);
//     function getAllCompletionCallback(status, data, error) {
//       var srh = applicationManager.getServiceResponseHandler();
//       var obj = srh.manageResponse(status, data, error);
//       if (obj["status"] === true) {
//         presentationSuccessCallback(obj["data"]);
//       }
//       else {
//         presentationErrorCallback(obj["errmsg"]);
//       }
//     }
  };
   WealthManager.prototype.getNewsHighlights = function (presentationSuccessCallback, presentationErrorCallback) {
   // var getPendingUserTransactions = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("MarketNews");
       var externalBanks = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("getHeadlines");
    externalBanks.customVerb("getNewsHeadlines", {}, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
   WealthManager.prototype.getIndexDetails = function (params,presentationSuccessCallback, presentationErrorCallback) {
   // var getPendingUserTransactions = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("MarketNews");
       var externalBanks = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("getMarketIndex");
    externalBanks.customVerb("getMarketIndexes", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };

     WealthManager.prototype.getRecentActivityy = function (presentationSuccessCallback, presentationErrorCallback) {
   // var getPendingUserTransactions = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("MarketNews");
//        var externalBanks = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("getRecentActivity");
//     externalBanks.customVerb("getRecentActivity", {}, getAllCompletionCallback);
//     function getAllCompletionCallback(status, data, error) {
//       var srh = applicationManager.getServiceResponseHandler();
//       var obj = srh.manageResponse(status, data, error);
//       if (obj["status"] === true) {
//         presentationSuccessCallback(obj["data"]);
//       }
//       else {
//         presentationErrorCallback(obj["errmsg"]);
//       }
//     }
       var obj= {
    "recentActivity": [
        {
            "operationDate": "2019-01-24T00:00:00",
            "instrumentName": "Conservative Fund A CHF",
            "NoOfShares": "1500",
            "operationNature": "Buy"
        },
        {
            "operationDate": "2019-01-24T00:00:00",
            "instrumentName": "Balanced Fund B CHF",
            "NoOfShares": "200",
            "operationNature": "Buy"
        },
        {
            "operationDate": "2019-01-24T00:00:00",
            "instrumentName": "Conservative Fund A",
            "NoOfShares": "100",
            "operationNature": "Buy"
        },
        {
            "operationDate": "2019-01-24T00:00:00",
            "instrumentName": "Balanced Fund A",
            "NoOfShares": "25",
            "operationNature": "Buy"
        }]};
        presentationSuccessCallback(obj);
  };
       WealthManager.prototype.getInstruments = function (params,presentationSuccessCallback, presentationErrorCallback) {
   // var getPendingUserTransactions = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("MarketNews");
//        var externalBanks = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("getInstruments");
//     externalBanks.customVerb("getInstrumentsBySearch", params, getAllCompletionCallback);
//     function getAllCompletionCallback(status, data, error) {
//       var srh = applicationManager.getServiceResponseHandler();
//       var obj = srh.manageResponse(status, data, error);
//       if (obj["status"] === true) {
//         presentationSuccessCallback(obj["data"]);
//       }
//       else {
//         presentationErrorCallback(obj["errmsg"]);
//       }
//     }
       var obj= {
    "opstatus": 0,
    "body": [
        {
            "instrumentName": "TEMENOS",
            "marketName": "T_AI_SWX",
            "ISIN": "CH0012453913"
        },
        {
            "instrumentName": "N_AI_CHF_TEMN_2.00%_Jan19",
            "marketName": "T_AI_SWX",
            "ISIN": "CH0240656733"
        },
        {
            "instrumentName": "N_AI_CHF_TEMN_2.75%_Jul17",
            "marketName": "T_AI_SWX",
            "ISIN": "CH0210371198"
        },
        {
            "instrumentName": "TEMN.S"
        }
    ],
    "httpStatusCode": 200
};
        presentationSuccessCallback(obj);
  };
  
      WealthManager.prototype.getCashCurrency = function (params,presentationSuccessCallback, presentationErrorCallback) {
   // var getCashCurrDetails = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("MarketNews");
//        var externalBanks = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("getInstruments");
//     externalBanks.customVerb("getInstrumentsBySearch", params, getAllCompletionCallback);
//     function getAllCompletionCallback(status, data, error) {
//       var srh = applicationManager.getServiceResponseHandler();
//       var obj = srh.manageResponse(status, data, error);
//       if (obj["status"] === true) {
//         presentationSuccessCallback(obj["data"]);
//       }
//       else {
//         presentationErrorCallback(obj["errmsg"]);
//       }
//     }
       var obj= {
    "opstatus":0,
	"holdings":[
    {
        "ExchangeRate":"0.87611704923778",
        "CostExchangeRate":"0.64416360294118",
        "Sector":"Health Care",
        "Quantity":"200",
        "AveragePrice":"136",
        "Weight":"0.404242963",
        "Name":"Roche",
        "MarketValue":"18153.15",
        "Price":"103.6",
        "AveragePriceCurrency":"CHF",
        "Currency":"CHF",
        "CostValue":"17521.25",
        "UnrealizedPLPercent":"3.60648",
        "UnrealizedPL":"631.9",
        "Region":"Switzerland",
        "PriceCurrency":"CHF",
        "AssetClass":"Equities",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"0.87611704923778",
        "CostExchangeRate":"0.64416387528987",
        "Sector":"Information Technology",
        "Quantity":"500",
        "AveragePrice":"97",
        "Weight":"1.570733146",
        "Name":"Kudelski",
        "MarketValue":"70536.18",
        "Price":"161.02",
        "AveragePriceCurrency":"CHF",
        "Currency":"CHF",
        "CostValue":"31241.95",
        "UnrealizedPLPercent":"125.77394",
        "UnrealizedPL":"39294.23",
        "Region":"Switzerland",
        "PriceCurrency":"CHF",
        "AssetClass":"Equities",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"0.87611704923778",
        "CostExchangeRate":"0.64416392902992",
        "Sector":"Other Sectors",
        "Quantity":"85000",
        "AveragePrice":"89.35",
        "Weight":"1.349716529",
        "Name":"T_AI_CHF_9499",
        "MarketValue":"60611.09",
        "Price":"81.39",
        "AveragePriceCurrency":"CHF",
        "Currency":"CHF",
        "CostValue":"48922.64",
        "UnrealizedPLPercent":"23.8917",
        "UnrealizedPL":"11688.45",
        "Region":"null",
        "PriceCurrency":"%",
        "AssetClass":"Bonds",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"0.87611704923778",
        "CostExchangeRate":"0.64491164710435",
        "Sector":"Finance",
        "Quantity":"500",
        "AveragePrice":"83.8",
        "Weight":"0.844286285",
        "Name":"UBS SA",
        "MarketValue":"37913.97",
        "Price":"86.55",
        "AveragePriceCurrency":"CHF",
        "Currency":"CHF",
        "CostValue":"27021.8",
        "UnrealizedPLPercent":"40.30882",
        "UnrealizedPL":"10892.17",
        "Region":"Switzerland",
        "PriceCurrency":"CHF",
        "AssetClass":"Equities",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"1",
        "CostExchangeRate":"1",
        "Sector":"Finance",
        "Quantity":"1800",
        "AveragePrice":"23.47",
        "Weight":"1.530779494",
        "Name":"AXA",
        "MarketValue":"68742",
        "Price":"38.19",
        "AveragePriceCurrency":"EUR",
        "Currency":"EUR",
        "CostValue":"42246",
        "UnrealizedPLPercent":"62.71836",
        "UnrealizedPL":"26496",
        "Region":"France",
        "PriceCurrency":"EUR",
        "AssetClass":"Equities",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"0.87611704923778",
        "CostExchangeRate":"0.65785145714098",
        "Sector":"Health Care",
        "Quantity":"1500",
        "AveragePrice":"118.5",
        "Weight":"4.898615743",
        "Name":"Roche GS",
        "MarketValue":"219979.85",
        "Price":"167.39",
        "AveragePriceCurrency":"CHF",
        "Currency":"CHF",
        "CostValue":"116933.1",
        "UnrealizedPLPercent":"88.12453",
        "UnrealizedPL":"103046.75",
        "Region":"Switzerland",
        "PriceCurrency":"CHF",
        "AssetClass":"Equities",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"0.86162329829399",
        "CostExchangeRate":"0.8126777732629",
        "Sector":"Information Technology",
        "Quantity":"1000",
        "AveragePrice":"66.25",
        "Weight":"0.751748079",
        "Name":"MICROSOFT CORP",
        "MarketValue":"33758.4",
        "Price":"39.18",
        "AveragePriceCurrency":"USD",
        "Currency":"USD",
        "CostValue":"53839.9",
        "UnrealizedPLPercent":"-37.29855",
        "UnrealizedPL":"-20081.5",
        "Region":"United States of America",
        "PriceCurrency":"USD",
        "AssetClass":"Equities",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"0.87611704923778",
        "CostExchangeRate":"0.66520321958358",
        "Sector":"Other Sectors",
        "Quantity":"50000",
        "AveragePrice":"110.56",
        "Weight":"1.07762338",
        "Name":"T_AI_CHF_57043",
        "MarketValue":"48392.33",
        "Price":"110.47",
        "AveragePriceCurrency":"CHF",
        "Currency":"CHF",
        "CostValue":"36772.43",
        "UnrealizedPLPercent":"31.59949",
        "UnrealizedPL":"11619.9",
        "Region":"null",
        "PriceCurrency":"%",
        "AssetClass":"Bonds",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"0.87611704923778",
        "CostExchangeRate":"0.66520321958358",
        "Sector":"Other Sectors",
        "Quantity":"50000",
        "AveragePrice":"112.64",
        "Weight":"1.185235785",
        "Name":"T_AI_CHF_57046",
        "MarketValue":"53224.83",
        "Price":"115.56",
        "AveragePriceCurrency":"CHF",
        "Currency":"CHF",
        "CostValue":"37464.25",
        "UnrealizedPLPercent":"35.12092",
        "UnrealizedPL":"13157.79",
        "Region":"Switzerland",
        "PriceCurrency":"%",
        "AssetClass":"Bonds",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"0.87611704923778",
        "CostExchangeRate":"0.66520321958358",
        "Sector":"Other Sectors",
        "Quantity":"50000",
        "AveragePrice":"111.56",
        "Weight":"1.085329609",
        "Name":"T_AI_CHF_57049",
        "MarketValue":"48738.39",
        "Price":"111.26",
        "AveragePriceCurrency":"CHF",
        "Currency":"CHF",
        "CostValue":"37105.04",
        "UnrealizedPLPercent":"31.35248",
        "UnrealizedPL":"11633.35",
        "Region":"null",
        "PriceCurrency":"%",
        "AssetClass":"Bonds",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"0.87611704923778",
        "CostExchangeRate":"0.66520321958358",
        "Sector":"Other Sectors",
        "Quantity":"50000",
        "AveragePrice":"166.5",
        "Weight":"1.827969882",
        "Name":"T_AI_CHF_9478",
        "MarketValue":"82087.79",
        "Price":"187.39",
        "AveragePriceCurrency":"CHF",
        "Currency":"CHF",
        "CostValue":"55378.17",
        "UnrealizedPLPercent":"48.23132",
        "UnrealizedPL":"26709.62",
        "Region":"null",
        "PriceCurrency":"%",
        "AssetClass":"Bonds",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"1",
        "CostExchangeRate":"1",
        "Sector":"Other Sectors",
        "Quantity":"10000",
        "AveragePrice":"105.35",
        "Weight":"0.237485935",
        "Name":"T_AI_EUR_57059",
        "MarketValue":"10664.67",
        "Price":"102.43",
        "AveragePriceCurrency":"EUR",
        "Currency":"EUR",
        "CostValue":"10535",
        "UnrealizedPLPercent":"-2.77171",
        "UnrealizedPL":"-292",
        "Region":"null",
        "PriceCurrency":"%",
        "AssetClass":"Bonds",
        "MarketValueCurrency":"EUR"
    }
,

    {
        "ExchangeRate":"1.122611643728",
        "CostExchangeRate":"1.7358097552508",
        "Sector":"Other Sectors",
        "Quantity":"10000",
        "AveragePrice":"95.9",
        "Weight":"0.23813083",
        "Name":"T_AI_GBP_57143",
        "MarketValue":"10693.63",
        "Price":"94.19",
        "AveragePriceCurrency":"GBP",
        "Currency":"GBP",
        "CostValue":"16646.41",
        "UnrealizedPLPercent":"-36.47952",
        "UnrealizedPL":"-6072.53",
        "Region":"Great Britain",
        "PriceCurrency":"%",
        "AssetClass":"Bonds",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"0.86162329829399",
        "CostExchangeRate":"0.83155281326653",
        "Sector":"Other Sectors",
        "Quantity":"110000",
        "AveragePrice":"95.99",
        "Weight":"2.059076121",
        "Name":"T_AI_USD_20894",
        "MarketValue":"92465.97",
        "Price":"97.56",
        "AveragePriceCurrency":"USD",
        "Currency":"USD",
        "CostValue":"87802.83",
        "UnrealizedPLPercent":"5.31092",
        "UnrealizedPL":"4663.14",
        "Region":"null",
        "PriceCurrency":"%",
        "AssetClass":"Bonds",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"0.86162329829399",
        "CostExchangeRate":"0.83451556371526",
        "Sector":"Other Sectors",
        "Quantity":"60000",
        "AveragePrice":"99.25",
        "Weight":"1.12880836",
        "Name":"T_AI_USD_57054",
        "MarketValue":"50690.87",
        "Price":"97.89",
        "AveragePriceCurrency":"USD",
        "Currency":"USD",
        "CostValue":"49695.41",
        "UnrealizedPLPercent":"1.83351",
        "UnrealizedPL":"911.17",
        "Region":"null",
        "PriceCurrency":"%",
        "AssetClass":"Bonds",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"0.87611704923778",
        "CostExchangeRate":"0.66520321958358",
        "Sector":"Consumer Goods Staples",
        "Quantity":"1000",
        "AveragePrice":"354",
        "Weight":"7.270323435",
        "Name":"Nestlé",
        "MarketValue":"326485.02",
        "Price":"372.65",
        "AveragePriceCurrency":"CHF",
        "Currency":"CHF",
        "CostValue":"235481.94",
        "UnrealizedPLPercent":"38.64546",
        "UnrealizedPL":"91003.08",
        "Region":"Switzerland",
        "PriceCurrency":"CHF",
        "AssetClass":"Equities",
        "MarketValueCurrency":"EUR"
    }
,
    {
        "ExchangeRate":"1.122611643728",
        "CostExchangeRate":"1.7358097552508",
        "Sector":"Finance",
        "Quantity":"5",
        "AveragePrice":"1368",
        "Weight":"0.156474114",
        "Name":"BARCLAYS ORD #1",
        "MarketValue":"7026.71",
        "Price":"1251.85",
        "AveragePriceCurrency":"GBP",
        "Currency":"GBP",
        "CostValue":"11872.94",
        "UnrealizedPLPercent":"-40.81744",
        "UnrealizedPL":"-4846.23",
        "Region":"Great Britain",
        "PriceCurrency":"GBP",
        "AssetClass":"Equities",
        "MarketValueCurrency":"EUR"
    },
       {
            "seqno": 1,
            "id": -1,
            "FILTER": true,
            "Portfolio": "T_AI_CMCPTF3",
            "MVPortfolio": 4490627.06,
            "PortfolioName": "T_AI_CMCPTF3",
            "SelectedLanguage": 1,
            "Code": "T_AI_CHF_RO",
            "Denomination": "Roche",
            "InstrId": 1318,
            "CcyCodif": "ISO",
            "Ccy": "CHF",
            "Ref_Ccy": "EUR",
            "MarketPrice": 103.6,
            "MarketPriceDate": "2019-01-02",
            "FXRate": 0.87611704923778,
            "MarketPriceCcy": "CHF",
            "Quantity": 200.0,
            "ValueValCcy": 18153.15,
            "AccruedInterest": 0.0,
            "QUANTITY_CURR": null,
            "CostValCcy": 17521.25,
            "CostPrice": 136.0,
            "CostFXRate": 0.64416360294118,
            "ProfitLoss": 631.9,
            "ProfitLossPercent": 3.60648,
            "AssetClassID": 1,
            "AssetClass": "Equities",
            "MV_AssetClass": 782595.28,
            "Weight": 0.404245326,
            "CategoryWeight": 2.31960893,
            "AssetClassCode": "PCK_DS_STOCKS",
            "Recommendation": null,
            "Duration": null,
            "MaturityDate": null,
            "NextCouponDate": null,
            "YTM": 0.0,
            "Sector": "Health Care",
            "Region": "Switzerland",
            "ContractSize": 1.0,
            "Underlying": null,
            "StrikePrice": null,
            "StrikePriceCcy": null,
            "CounterpartCcy": null,
            "CounterpartQty": null,
            "Nature": "Stock",
            "Type": "en_T_AI_instr_type1",
            "ContractType": "en_T_AI_instr_type1",
            "CURRENCY_PAIR": "_CHF",
            "REGION_CLASS": "Europe",
            "CCY_CLASS": "CHF",
            "RATING_CLASS": "Other Ratings",
            "DURATION_CLASS": "[0y-3y] Duration",
            "MATURITY_CLASS": "[>10y] Maturity",
            "Status": "Accounted",
            "AccountedPosition": true,
            "RegionRank": 2,
            "CcyRank": 6,
            "RegionClassCode": "PCK_DS_REGIO_EUROPE",
            "CcyClassCode": "PCK_DS_CHF",
            "IO_PM_USER_CHECK": true,
            "IO_SECURITY": true,
            "IO_SECURITY_BUY_RIGHT": true,
            "IO_SECURITY_SELL_RIGHT": true,
            "IO_SUB_POS_NAT": 0,
            "IO_SUB_POS_NAT_2": 0,
            "IO_SUB_POS_NAT_3": 0,
            "IO_DEPOSIT": null,
            "IORefNatBuy": null,
            "IORefNatSell": null,
            "IORefOperCode": null,
            "IODerivOrdBuy": null,
            "IODerivOrdSell": null,
            "STOCK_SECTOR_ID": 109,
            "STOCK_REGION_ID": 101,
            "CCY_ID": 61,
            "BOND_RATING_ID": 98,
            "BOND_MATURITY_ID": 90,
            "BOND_DURATION_ID": 73,
            "TYPE_ID": 1011,
            "FWD_CCY_PAIR": "CHF",
            "OTHERS_NATURE_E": 1,
            "DIVIDEND_PAYMENT_OPTION": 0,
            "OneYearBefore": "2019-07-30",
            "BeginDate": "2019-07-30",
            "DEPOSIT_ID": null,
            "Instr_Denomination": "Roche",
            "Instr_Name": "Roche",
            "INSTR_NATURE": "Stock",
            "CommonReference": null,
            "ParentInstrId": null,
            "SubNature": null,
            "lock_nature": "<None>",
            "lock_type": null,
            "OtcOrder": "No",
            "NatureID": 1,
            "PendingOrdersQuantity": 200.0,
            "DepositCode": null,
            "DepositName": null,
            "taxLotF": false,
            "REF_OPER_CODE": null,
            "Issuer": null,
            "InterestRate": null,
            "RenewalType": "<None>",
            "DepositCloseRight": false,
            "DepositRenewRight": false,
            "convertibleF": false,
            "FixingDate": null,
            "portfolio_id": 1161
        },
        {
            "seqno": 2,
            "id": -2,
            "FILTER": true,
            "Portfolio": "T_AI_CMCPTF3",
            "MVPortfolio": 4490627.06,
            "PortfolioName": "T_AI_CMCPTF3",
            "SelectedLanguage": 1,
            "Code": "T_AI_CHF_KUD",
            "Denomination": "Kudelski",
            "InstrId": 1296,
            "CcyCodif": "ISO",
            "Ccy": "CHF",
            "Ref_Ccy": "EUR",
            "MarketPrice": 161.02,
            "MarketPriceDate": "2019-01-03",
            "FXRate": 0.87611704923778,
            "MarketPriceCcy": "CHF",
            "Quantity": 500.0,
            "ValueValCcy": 70536.18,
            "AccruedInterest": 0.0,
            "QUANTITY_CURR": null,
            "CostValCcy": 31241.95,
            "CostPrice": 97.0,
            "CostFXRate": 0.64416387528987,
            "ProfitLoss": 39294.23,
            "ProfitLossPercent": 125.77394,
            "AssetClassID": 1,
            "AssetClass": "Equities",
            "MV_AssetClass": 782595.28,
            "Weight": 1.570742327,
            "CategoryWeight": 9.013110838,
            "AssetClassCode": "PCK_DS_STOCKS",
            "Recommendation": null,
            "Duration": null,
            "MaturityDate": null,
            "NextCouponDate": null,
            "YTM": 0.0,
            "Sector": "Information Technology",
            "Region": "Switzerland",
            "ContractSize": 1.0,
            "Underlying": null,
            "StrikePrice": null,
            "StrikePriceCcy": null,
            "CounterpartCcy": null,
            "CounterpartQty": null,
            "Nature": "Stock",
            "Type": "en_T_AI_instr_type1",
            "ContractType": "en_T_AI_instr_type1",
            "CURRENCY_PAIR": "_CHF",
            "REGION_CLASS": "Europe",
            "CCY_CLASS": "CHF",
            "RATING_CLASS": "Other Ratings",
            "DURATION_CLASS": "[0y-3y] Duration",
            "MATURITY_CLASS": "[>10y] Maturity",
            "Status": "Accounted",
            "AccountedPosition": true,
            "RegionRank": 2,
            "CcyRank": 6,
            "RegionClassCode": "PCK_DS_REGIO_EUROPE",
            "CcyClassCode": "PCK_DS_CHF",
            "IO_PM_USER_CHECK": true,
            "IO_SECURITY": true,
            "IO_SECURITY_BUY_RIGHT": true,
            "IO_SECURITY_SELL_RIGHT": true,
            "IO_SUB_POS_NAT": 0,
            "IO_SUB_POS_NAT_2": 0,
            "IO_SUB_POS_NAT_3": 0,
            "IO_DEPOSIT": null,
            "IORefNatBuy": null,
            "IORefNatSell": null,
            "IORefOperCode": null,
            "IODerivOrdBuy": null,
            "IODerivOrdSell": null,
            "STOCK_SECTOR_ID": 111,
            "STOCK_REGION_ID": 101,
            "CCY_ID": 61,
            "BOND_RATING_ID": 98,
            "BOND_MATURITY_ID": 90,
            "BOND_DURATION_ID": 73,
            "TYPE_ID": 1011,
            "FWD_CCY_PAIR": "CHF",
            "OTHERS_NATURE_E": 1,
            "DIVIDEND_PAYMENT_OPTION": 0,
            "OneYearBefore": "2019-07-30",
            "BeginDate": "2019-07-30",
            "DEPOSIT_ID": null,
            "Instr_Denomination": "Kudelski",
            "Instr_Name": "Kudelski",
            "INSTR_NATURE": "Stock",
            "CommonReference": null,
            "ParentInstrId": null,
            "SubNature": null,
            "lock_nature": "<None>",
            "lock_type": null,
            "OtcOrder": "No",
            "NatureID": 1,
            "PendingOrdersQuantity": 0.0,
            "DepositCode": null,
            "DepositName": null,
            "taxLotF": false,
            "REF_OPER_CODE": null,
            "Issuer": null,
            "InterestRate": null,
            "RenewalType": "<None>",
            "DepositCloseRight": false,
            "DepositRenewRight": false,
            "convertibleF": false,
            "FixingDate": null,
            "portfolio_id": 1161
        },
        {
            "seqno": 3,
            "id": -3,
            "FILTER": true,
            "Portfolio": "T_AI_CMCPTF3",
            "MVPortfolio": 4490627.06,
            "PortfolioName": "T_AI_CMCPTF3",
            "SelectedLanguage": 1,
            "Code": "T_AI_CHF_9499",
            "Denomination": "en_T_AI_CHF_9499",
            "InstrId": 2139,
            "CcyCodif": "ISO",
            "Ccy": "CHF",
            "Ref_Ccy": "EUR",
            "MarketPrice": 81.39,
            "MarketPriceDate": "2019-01-02",
            "FXRate": 0.87611704923778,
            "MarketPriceCcy": "%",
            "Quantity": 85000.0,
            "ValueValCcy": 60611.09,
            "AccruedInterest": 0.0,
            "QUANTITY_CURR": "CHF",
            "CostValCcy": 48922.64,
            "CostPrice": 89.35,
            "CostFXRate": 0.64416392902992,
            "ProfitLoss": 11688.45,
            "ProfitLossPercent": 23.8917,
            "AssetClassID": 2,
            "AssetClass": "Bonds",
            "MV_AssetClass": 457543.32,
            "Weight": 1.349724419,
            "CategoryWeight": 13.247071337,
            "AssetClassCode": "PCK_DS_BONDS",
            "Recommendation": "A",
            "Duration": 0.0,
            "MaturityDate": "2020-01-01",
            "NextCouponDate": null,
            "YTM": 0.0,
            "Sector": "Other Sectors",
            "Region": null,
            "ContractSize": 1.0,
            "Underlying": null,
            "StrikePrice": null,
            "StrikePriceCcy": null,
            "CounterpartCcy": null,
            "CounterpartQty": null,
            "Nature": "Fixed Income",
            "Type": "en_T_AI_instr_type2",
            "ContractType": "en_T_AI_instr_type2",
            "CURRENCY_PAIR": "_CHF",
            "REGION_CLASS": "Other Regions",
            "CCY_CLASS": "CHF",
            "RATING_CLASS": "A",
            "DURATION_CLASS": "[0y-3y] Duration",
            "MATURITY_CLASS": "[>10y] Maturity",
            "Status": "Accounted",
            "AccountedPosition": true,
            "RegionRank": 99,
            "CcyRank": 6,
            "RegionClassCode": "PCK_DS_REGIO_OTHER",
            "CcyClassCode": "PCK_DS_CHF",
            "IO_PM_USER_CHECK": true,
            "IO_SECURITY": true,
            "IO_SECURITY_BUY_RIGHT": true,
            "IO_SECURITY_SELL_RIGHT": true,
            "IO_SUB_POS_NAT": 0,
            "IO_SUB_POS_NAT_2": 0,
            "IO_SUB_POS_NAT_3": 0,
            "IO_DEPOSIT": null,
            "IORefNatBuy": null,
            "IORefNatSell": null,
            "IORefOperCode": null,
            "IODerivOrdBuy": null,
            "IODerivOrdSell": null,
            "STOCK_SECTOR_ID": 113,
            "STOCK_REGION_ID": 104,
            "CCY_ID": 61,
            "BOND_RATING_ID": 93,
            "BOND_MATURITY_ID": 90,
            "BOND_DURATION_ID": 73,
            "TYPE_ID": 1012,
            "FWD_CCY_PAIR": "CHF",
            "OTHERS_NATURE_E": 2,
            "DIVIDEND_PAYMENT_OPTION": 0,
            "OneYearBefore": "2019-07-30",
            "BeginDate": "2019-07-30",
            "DEPOSIT_ID": null,
            "Instr_Denomination": "en_T_AI_CHF_9499",
            "Instr_Name": "T_AI_CHF_9499",
            "INSTR_NATURE": "Fixed Income",
            "CommonReference": null,
            "ParentInstrId": null,
            "SubNature": null,
            "lock_nature": "<None>",
            "lock_type": null,
            "OtcOrder": "No",
            "NatureID": 2,
            "PendingOrdersQuantity": 0.0,
            "DepositCode": null,
            "DepositName": null,
            "taxLotF": false,
            "REF_OPER_CODE": null,
            "Issuer": null,
            "InterestRate": null,
            "RenewalType": "<None>",
            "DepositCloseRight": false,
            "DepositRenewRight": false,
            "convertibleF": false,
            "FixingDate": null,
            "portfolio_id": 1161
        },
		
		 {
            "seqno": 13,
            "id": -13,
            "FILTER": true,
            "Portfolio": "T_AI_CMCPTF3",
            "MVPortfolio": 4490627.06,
            "PortfolioName": "T_AI_CMCPTF3",
            "SelectedLanguage": 1,
            "Code": "EUR",
            "Denomination": "EUR",
            "InstrId": 2089,
            "CcyCodif": "ISO",
            "Ccy": "EUR",
            "Ref_Ccy": "EUR",
            "MarketPrice": 1.0,
            "MarketPriceDate": null,
            "FXRate": 1.0,
            "MarketPriceCcy": "EUR",
            "Quantity": -53065.17,
            "ValueValCcy": -53065.17,
            "AccruedInterest": 0.0,
            "QUANTITY_CURR": "EUR",
            "CostValCcy": -53065.17,
            "CostPrice": 1.0,
            "CostFXRate": 1.0,
            "ProfitLoss": 0.0,
            "ProfitLossPercent": 0.0,
            "AssetClassID": 5,
            "AssetClass": "Cash",
            "MV_AssetClass": 3250488.46,
            "Weight": -1.181687308,
            "CategoryWeight": -1.6325291,
            "AssetClassCode": "PCK_DS_LIQUIDITY",
            "Recommendation": null,
            "Duration": null,
            "MaturityDate": null,
            "NextCouponDate": null,
            "YTM": 0.0,
            "Sector": "Other Sectors",
            "Region": null,
            "ContractSize": 1.0,
            "Underlying": null,
            "StrikePrice": null,
            "StrikePriceCcy": null,
            "CounterpartCcy": null,
            "CounterpartQty": null,
            "Nature": "Cash Account",
            "Type": null,
            "ContractType": null,
            "CURRENCY_PAIR": "_EUR",
            "REGION_CLASS": "Other Regions",
            "CCY_CLASS": "EUR",
            "RATING_CLASS": "Other Ratings",
            "DURATION_CLASS": "[0y-3y] Duration",
            "MATURITY_CLASS": "[>10y] Maturity",
            "Status": "Accounted",
            "AccountedPosition": true,
            "RegionRank": 99,
            "CcyRank": 2,
            "RegionClassCode": "PCK_DS_REGIO_OTHER",
            "CcyClassCode": "PCK_DS_EUR",
            "IO_PM_USER_CHECK": true,
            "IO_SECURITY": false,
            "IO_SECURITY_BUY_RIGHT": false,
            "IO_SECURITY_SELL_RIGHT": false,
            "IO_SUB_POS_NAT": null,
            "IO_SUB_POS_NAT_2": null,
            "IO_SUB_POS_NAT_3": null,
            "IO_DEPOSIT": null,
            "IORefNatBuy": null,
            "IORefNatSell": null,
            "IORefOperCode": null,
            "IODerivOrdBuy": null,
            "IODerivOrdSell": null,
            "STOCK_SECTOR_ID": 113,
            "STOCK_REGION_ID": 104,
            "CCY_ID": 62,
            "BOND_RATING_ID": 98,
            "BOND_MATURITY_ID": 90,
            "BOND_DURATION_ID": 73,
            "TYPE_ID": null,
            "FWD_CCY_PAIR": "EUR",
            "OTHERS_NATURE_E": 4,
            "DIVIDEND_PAYMENT_OPTION": 0,
            "OneYearBefore": "2019-07-30",
            "BeginDate": "2019-07-30",
            "DEPOSIT_ID": null,
            "Instr_Denomination": "EUR",
            "Instr_Name": "EUR",
            "INSTR_NATURE": "Cash Account",
            "CommonReference": null,
            "ParentInstrId": null,
            "SubNature": null,
            "lock_nature": "<None>",
            "lock_type": null,
            "OtcOrder": "No",
            "NatureID": 4,
            "PendingOrdersQuantity": 0.0,
            "DepositCode": null,
            "DepositName": null,
            "taxLotF": false,
            "REF_OPER_CODE": null,
            "Issuer": null,
            "InterestRate": null,
            "RenewalType": "<None>",
            "DepositCloseRight": false,
            "DepositRenewRight": false,
            "convertibleF": false,
            "FixingDate": null,
            "portfolio_id": 1161
        },
       {
            "seqno": 14,
            "id": -14,
            "FILTER": true,
            "Portfolio": "T_AI_CMCPTF3",
            "MVPortfolio": 4490627.06,
            "PortfolioName": "T_AI_CMCPTF3",
            "SelectedLanguage": 1,
            "Code": "EUR",
            "Denomination": "EUR",
            "InstrId": 2089,
            "CcyCodif": "ISO",
            "Ccy": "CHF",
            "Ref_Ccy": "EUR",
            "MarketPrice": 1.0,
            "MarketPriceDate": null,
            "FXRate": 1.0,
            "MarketPriceCcy": "EUR",
            "Quantity": -90067.83,
            "ValueValCcy": -90067.83,
            "AccruedInterest": 0.0,
            "QUANTITY_CURR": "EUR",
            "CostValCcy": -90067.83,
            "CostPrice": 1.0,
            "CostFXRate": 1.0,
            "ProfitLoss": 0.0,
            "ProfitLossPercent": 0.0,
            "AssetClassID": 5,
            "AssetClass": "Cash",
            "MV_AssetClass": 4560460.67,
            "Weight": -1.181687308,
            "CategoryWeight": -1.6325291,
            "AssetClassCode": "PCK_DS_LIQUIDITY",
            "Recommendation": null,
            "Duration": null,
            "MaturityDate": null,
            "NextCouponDate": null,
            "YTM": 0.0,
            "Sector": "Other Sectors",
            "Region": null,
            "ContractSize": 1.0,
            "Underlying": null,
            "StrikePrice": null,
            "StrikePriceCcy": null,
            "CounterpartCcy": null,
            "CounterpartQty": null,
            "Nature": "Cash Account",
            "Type": null,
            "ContractType": null,
            "CURRENCY_PAIR": "_EUR",
            "REGION_CLASS": "Other Regions",
            "CCY_CLASS": "EUR",
            "RATING_CLASS": "Other Ratings",
            "DURATION_CLASS": "[0y-3y] Duration",
            "MATURITY_CLASS": "[>10y] Maturity",
            "Status": "Accounted",
            "AccountedPosition": true,
            "RegionRank": 99,
            "CcyRank": 2,
            "RegionClassCode": "PCK_DS_REGIO_OTHER",
            "CcyClassCode": "PCK_DS_EUR",
            "IO_PM_USER_CHECK": true,
            "IO_SECURITY": false,
            "IO_SECURITY_BUY_RIGHT": false,
            "IO_SECURITY_SELL_RIGHT": false,
            "IO_SUB_POS_NAT": null,
            "IO_SUB_POS_NAT_2": null,
            "IO_SUB_POS_NAT_3": null,
            "IO_DEPOSIT": null,
            "IORefNatBuy": null,
            "IORefNatSell": null,
            "IORefOperCode": null,
            "IODerivOrdBuy": null,
            "IODerivOrdSell": null,
            "STOCK_SECTOR_ID": 113,
            "STOCK_REGION_ID": 104,
            "CCY_ID": 62,
            "BOND_RATING_ID": 98,
            "BOND_MATURITY_ID": 90,
            "BOND_DURATION_ID": 73,
            "TYPE_ID": null,
            "FWD_CCY_PAIR": "EUR",
            "OTHERS_NATURE_E": 4,
            "DIVIDEND_PAYMENT_OPTION": 0,
            "OneYearBefore": "2019-07-30",
            "BeginDate": "2019-07-30",
            "DEPOSIT_ID": null,
            "Instr_Denomination": "EUR",
            "Instr_Name": "EUR",
            "INSTR_NATURE": "Cash Account",
            "CommonReference": null,
            "ParentInstrId": null,
            "SubNature": null,
            "lock_nature": "<None>",
            "lock_type": null,
            "OtcOrder": "No",
            "NatureID": 4,
            "PendingOrdersQuantity": 0.0,
            "DepositCode": null,
            "DepositName": null,
            "taxLotF": false,
            "REF_OPER_CODE": null,
            "Issuer": null,
            "InterestRate": null,
            "RenewalType": "<None>",
            "DepositCloseRight": false,
            "DepositRenewRight": false,
            "convertibleF": false,
            "FixingDate": null,
            "portfolio_id": 1161
        },
      {
            "seqno": 15,
            "id": -15,
            "FILTER": true,
            "Portfolio": "T_AI_CMCPTF3",
            "MVPortfolio": 6790620.98,
            "PortfolioName": "T_AI_CMCPTF3",
            "SelectedLanguage": 1,
            "Code": "EUR",
            "Denomination": "EUR",
            "InstrId": 2089,
            "CcyCodif": "ISO",
            "Ccy": "USD",
            "Ref_Ccy": "EUR",
            "MarketPrice": 1.0,
            "MarketPriceDate": null,
            "FXRate": 1.0,
            "MarketPriceCcy": "EUR",
            "Quantity": 6790620.98,
            "ValueValCcy": 6790620.98,
            "AccruedInterest": 0.0,
            "QUANTITY_CURR": "EUR",
            "CostValCcy": 6790620.98,
            "CostPrice": 1.0,
            "CostFXRate": 1.0,
            "ProfitLoss": 0.0,
            "ProfitLossPercent": 0.0,
            "AssetClassID": 5,
            "AssetClass": "Cash",
            "MV_AssetClass": 6790620.98,
            "Weight": -1.181687308,
            "CategoryWeight": -1.6325291,
            "AssetClassCode": "PCK_DS_LIQUIDITY",
            "Recommendation": null,
            "Duration": null,
            "MaturityDate": null,
            "NextCouponDate": null,
            "YTM": 0.0,
            "Sector": "Other Sectors",
            "Region": null,
            "ContractSize": 1.0,
            "Underlying": null,
            "StrikePrice": null,
            "StrikePriceCcy": null,
            "CounterpartCcy": null,
            "CounterpartQty": null,
            "Nature": "Cash Account",
            "Type": null,
            "ContractType": null,
            "CURRENCY_PAIR": "_EUR",
            "REGION_CLASS": "Other Regions",
            "CCY_CLASS": "EUR",
            "RATING_CLASS": "Other Ratings",
            "DURATION_CLASS": "[0y-3y] Duration",
            "MATURITY_CLASS": "[>10y] Maturity",
            "Status": "Accounted",
            "AccountedPosition": true,
            "RegionRank": 99,
            "CcyRank": 2,
            "RegionClassCode": "PCK_DS_REGIO_OTHER",
            "CcyClassCode": "PCK_DS_EUR",
            "IO_PM_USER_CHECK": true,
            "IO_SECURITY": false,
            "IO_SECURITY_BUY_RIGHT": false,
            "IO_SECURITY_SELL_RIGHT": false,
            "IO_SUB_POS_NAT": null,
            "IO_SUB_POS_NAT_2": null,
            "IO_SUB_POS_NAT_3": null,
            "IO_DEPOSIT": null,
            "IORefNatBuy": null,
            "IORefNatSell": null,
            "IORefOperCode": null,
            "IODerivOrdBuy": null,
            "IODerivOrdSell": null,
            "STOCK_SECTOR_ID": 113,
            "STOCK_REGION_ID": 104,
            "CCY_ID": 62,
            "BOND_RATING_ID": 98,
            "BOND_MATURITY_ID": 90,
            "BOND_DURATION_ID": 73,
            "TYPE_ID": null,
            "FWD_CCY_PAIR": "EUR",
            "OTHERS_NATURE_E": 4,
            "DIVIDEND_PAYMENT_OPTION": 0,
            "OneYearBefore": "2019-07-30",
            "BeginDate": "2019-07-30",
            "DEPOSIT_ID": null,
            "Instr_Denomination": "EUR",
            "Instr_Name": "EUR",
            "INSTR_NATURE": "Cash Account",
            "CommonReference": null,
            "ParentInstrId": null,
            "SubNature": null,
            "lock_nature": "<None>",
            "lock_type": null,
            "OtcOrder": "No",
            "NatureID": 4,
            "PendingOrdersQuantity": 0.0,
            "DepositCode": null,
            "DepositName": null,
            "taxLotF": false,
            "REF_OPER_CODE": null,
            "Issuer": null,
            "InterestRate": null,
            "RenewalType": "<None>",
            "DepositCloseRight": false,
            "DepositRenewRight": false,
            "convertibleF": false,
            "FixingDate": null,
            "portfolio_id": 1161
        },
        {
            "seqno": 16,
            "id": -16,
            "FILTER": true,
            "Portfolio": "T_AI_CMCPTF3",
            "MVPortfolio": 4167643.61,
            "PortfolioName": "T_AI_CMCPTF3",
            "SelectedLanguage": 1,
            "Code": "EUR",
            "Denomination": "EUR",
            "InstrId": 2089,
            "CcyCodif": "ISO",
            "Ccy": "GBP",
            "Ref_Ccy": "EUR",
            "MarketPrice": 1.0,
            "MarketPriceDate": null,
            "FXRate": 1.0,
            "MarketPriceCcy": "EUR",
            "Quantity": 4167643.61,
            "ValueValCcy": 4167643.61,
            "AccruedInterest": 0.0,
            "QUANTITY_CURR": "EUR",
            "CostValCcy": 4167643.61,
            "CostPrice": 1.0,
            "CostFXRate": 1.0,
            "ProfitLoss": 0.0,
            "ProfitLossPercent": 0.0,
            "AssetClassID": 5,
            "AssetClass": "Cash",
            "MV_AssetClass": 4167643.61,
            "Weight": -1.181687308,
            "CategoryWeight": -1.6325291,
            "AssetClassCode": "PCK_DS_LIQUIDITY",
            "Recommendation": null,
            "Duration": null,
            "MaturityDate": null,
            "NextCouponDate": null,
            "YTM": 0.0,
            "Sector": "Other Sectors",
            "Region": null,
            "ContractSize": 1.0,
            "Underlying": null,
            "StrikePrice": null,
            "StrikePriceCcy": null,
            "CounterpartCcy": null,
            "CounterpartQty": null,
            "Nature": "Cash Account",
            "Type": null,
            "ContractType": null,
            "CURRENCY_PAIR": "_EUR",
            "REGION_CLASS": "Other Regions",
            "CCY_CLASS": "EUR",
            "RATING_CLASS": "Other Ratings",
            "DURATION_CLASS": "[0y-3y] Duration",
            "MATURITY_CLASS": "[>10y] Maturity",
            "Status": "Accounted",
            "AccountedPosition": true,
            "RegionRank": 99,
            "CcyRank": 2,
            "RegionClassCode": "PCK_DS_REGIO_OTHER",
            "CcyClassCode": "PCK_DS_EUR",
            "IO_PM_USER_CHECK": true,
            "IO_SECURITY": false,
            "IO_SECURITY_BUY_RIGHT": false,
            "IO_SECURITY_SELL_RIGHT": false,
            "IO_SUB_POS_NAT": null,
            "IO_SUB_POS_NAT_2": null,
            "IO_SUB_POS_NAT_3": null,
            "IO_DEPOSIT": null,
            "IORefNatBuy": null,
            "IORefNatSell": null,
            "IORefOperCode": null,
            "IODerivOrdBuy": null,
            "IODerivOrdSell": null,
            "STOCK_SECTOR_ID": 113,
            "STOCK_REGION_ID": 104,
            "CCY_ID": 62,
            "BOND_RATING_ID": 98,
            "BOND_MATURITY_ID": 90,
            "BOND_DURATION_ID": 73,
            "TYPE_ID": null,
            "FWD_CCY_PAIR": "EUR",
            "OTHERS_NATURE_E": 4,
            "DIVIDEND_PAYMENT_OPTION": 0,
            "OneYearBefore": "2019-07-30",
            "BeginDate": "2019-07-30",
            "DEPOSIT_ID": null,
            "Instr_Denomination": "EUR",
            "Instr_Name": "EUR",
            "INSTR_NATURE": "Cash Account",
            "CommonReference": null,
            "ParentInstrId": null,
            "SubNature": null,
            "lock_nature": "<None>",
            "lock_type": null,
            "OtcOrder": "No",
            "NatureID": 4,
            "PendingOrdersQuantity": 0.0,
            "DepositCode": null,
            "DepositName": null,
            "taxLotF": false,
            "REF_OPER_CODE": null,
            "Issuer": null,
            "InterestRate": null,
            "RenewalType": "<None>",
            "DepositCloseRight": false,
            "DepositRenewRight": false,
            "convertibleF": false,
            "FixingDate": null,
            "portfolio_id": 1161
        },
     
       {
            "seqno": 17,
            "id": -17,
            "FILTER": true,
            "Portfolio": "T_AI_CMCPTF3",
            "MVPortfolio": 4167643.61,
            "PortfolioName": "T_AI_CMCPTF3",
            "SelectedLanguage": 1,
            "Code": "EUR",
            "Denomination": "EUR",
            "InstrId": 2089,
            "CcyCodif": "ISO",
            "Ccy": "HKD",
            "Ref_Ccy": "EUR",
            "MarketPrice": 1.0,
            "MarketPriceDate": null,
            "FXRate": 1.0,
            "MarketPriceCcy": "EUR",
            "Quantity": 2310764.12,
            "ValueValCcy": 2310764.12,
            "AccruedInterest": 0.0,
            "QUANTITY_CURR": "EUR",
            "CostValCcy": 2310764.12,
            "CostPrice": 1.0,
            "CostFXRate": 1.0,
            "ProfitLoss": 0.0,
            "ProfitLossPercent": 0.0,
            "AssetClassID": 5,
            "AssetClass": "Cash",
            "MV_AssetClass": 2310764.12,
            "Weight": -1.181687308,
            "CategoryWeight": -1.6325291,
            "AssetClassCode": "PCK_DS_LIQUIDITY",
            "Recommendation": null,
            "Duration": null,
            "MaturityDate": null,
            "NextCouponDate": null,
            "YTM": 0.0,
            "Sector": "Other Sectors",
            "Region": null,
            "ContractSize": 1.0,
            "Underlying": null,
            "StrikePrice": null,
            "StrikePriceCcy": null,
            "CounterpartCcy": null,
            "CounterpartQty": null,
            "Nature": "Cash Account",
            "Type": null,
            "ContractType": null,
            "CURRENCY_PAIR": "_EUR",
            "REGION_CLASS": "Other Regions",
            "CCY_CLASS": "EUR",
            "RATING_CLASS": "Other Ratings",
            "DURATION_CLASS": "[0y-3y] Duration",
            "MATURITY_CLASS": "[>10y] Maturity",
            "Status": "Accounted",
            "AccountedPosition": true,
            "RegionRank": 99,
            "CcyRank": 2,
            "RegionClassCode": "PCK_DS_REGIO_OTHER",
            "CcyClassCode": "PCK_DS_EUR",
            "IO_PM_USER_CHECK": true,
            "IO_SECURITY": false,
            "IO_SECURITY_BUY_RIGHT": false,
            "IO_SECURITY_SELL_RIGHT": false,
            "IO_SUB_POS_NAT": null,
            "IO_SUB_POS_NAT_2": null,
            "IO_SUB_POS_NAT_3": null,
            "IO_DEPOSIT": null,
            "IORefNatBuy": null,
            "IORefNatSell": null,
            "IORefOperCode": null,
            "IODerivOrdBuy": null,
            "IODerivOrdSell": null,
            "STOCK_SECTOR_ID": 113,
            "STOCK_REGION_ID": 104,
            "CCY_ID": 62,
            "BOND_RATING_ID": 98,
            "BOND_MATURITY_ID": 90,
            "BOND_DURATION_ID": 73,
            "TYPE_ID": null,
            "FWD_CCY_PAIR": "EUR",
            "OTHERS_NATURE_E": 4,
            "DIVIDEND_PAYMENT_OPTION": 0,
            "OneYearBefore": "2019-07-30",
            "BeginDate": "2019-07-30",
            "DEPOSIT_ID": null,
            "Instr_Denomination": "EUR",
            "Instr_Name": "EUR",
            "INSTR_NATURE": "Cash Account",
            "CommonReference": null,
            "ParentInstrId": null,
            "SubNature": null,
            "lock_nature": "<None>",
            "lock_type": null,
            "OtcOrder": "No",
            "NatureID": 4,
            "PendingOrdersQuantity": 0.0,
            "DepositCode": null,
            "DepositName": null,
            "taxLotF": false,
            "REF_OPER_CODE": null,
            "Issuer": null,
            "InterestRate": null,
            "RenewalType": "<None>",
            "DepositCloseRight": false,
            "DepositRenewRight": false,
            "convertibleF": false,
            "FixingDate": null,
            "portfolio_id": 1161
        },
       {
            "seqno": 18,
            "id": -18,
            "FILTER": true,
            "Portfolio": "T_AI_CMCPTF3",
            "MVPortfolio": 4167643.61,
            "PortfolioName": "T_AI_CMCPTF3",
            "SelectedLanguage": 1,
            "Code": "EUR",
            "Denomination": "EUR",
            "InstrId": 2089,
            "CcyCodif": "ISO",
            "Ccy": "AUD",
            "Ref_Ccy": "EUR",
            "MarketPrice": 1.0,
            "MarketPriceDate": null,
            "FXRate": 1.0,
            "MarketPriceCcy": "EUR",
            "Quantity": 7139125.90,
            "ValueValCcy": 7139125.90,
            "AccruedInterest": 0.0,
            "QUANTITY_CURR": "EUR",
            "CostValCcy": 7139125.90,
            "CostPrice": 1.0,
            "CostFXRate": 1.0,
            "ProfitLoss": 0.0,
            "ProfitLossPercent": 0.0,
            "AssetClassID": 5,
            "AssetClass": "Cash",
            "MV_AssetClass": 7139125.90,
            "Weight": -1.181687308,
            "CategoryWeight": -1.6325291,
            "AssetClassCode": "PCK_DS_LIQUIDITY",
            "Recommendation": null,
            "Duration": null,
            "MaturityDate": null,
            "NextCouponDate": null,
            "YTM": 0.0,
            "Sector": "Other Sectors",
            "Region": null,
            "ContractSize": 1.0,
            "Underlying": null,
            "StrikePrice": null,
            "StrikePriceCcy": null,
            "CounterpartCcy": null,
            "CounterpartQty": null,
            "Nature": "Cash Account",
            "Type": null,
            "ContractType": null,
            "CURRENCY_PAIR": "_EUR",
            "REGION_CLASS": "Other Regions",
            "CCY_CLASS": "EUR",
            "RATING_CLASS": "Other Ratings",
            "DURATION_CLASS": "[0y-3y] Duration",
            "MATURITY_CLASS": "[>10y] Maturity",
            "Status": "Accounted",
            "AccountedPosition": true,
            "RegionRank": 99,
            "CcyRank": 2,
            "RegionClassCode": "PCK_DS_REGIO_OTHER",
            "CcyClassCode": "PCK_DS_EUR",
            "IO_PM_USER_CHECK": true,
            "IO_SECURITY": false,
            "IO_SECURITY_BUY_RIGHT": false,
            "IO_SECURITY_SELL_RIGHT": false,
            "IO_SUB_POS_NAT": null,
            "IO_SUB_POS_NAT_2": null,
            "IO_SUB_POS_NAT_3": null,
            "IO_DEPOSIT": null,
            "IORefNatBuy": null,
            "IORefNatSell": null,
            "IORefOperCode": null,
            "IODerivOrdBuy": null,
            "IODerivOrdSell": null,
            "STOCK_SECTOR_ID": 113,
            "STOCK_REGION_ID": 104,
            "CCY_ID": 62,
            "BOND_RATING_ID": 98,
            "BOND_MATURITY_ID": 90,
            "BOND_DURATION_ID": 73,
            "TYPE_ID": null,
            "FWD_CCY_PAIR": "EUR",
            "OTHERS_NATURE_E": 4,
            "DIVIDEND_PAYMENT_OPTION": 0,
            "OneYearBefore": "2019-07-30",
            "BeginDate": "2019-07-30",
            "DEPOSIT_ID": null,
            "Instr_Denomination": "EUR",
            "Instr_Name": "EUR",
            "INSTR_NATURE": "Cash Account",
            "CommonReference": null,
            "ParentInstrId": null,
            "SubNature": null,
            "lock_nature": "<None>",
            "lock_type": null,
            "OtcOrder": "No",
            "NatureID": 4,
            "PendingOrdersQuantity": 0.0,
            "DepositCode": null,
            "DepositName": null,
            "taxLotF": false,
            "REF_OPER_CODE": null,
            "Issuer": null,
            "InterestRate": null,
            "RenewalType": "<None>",
            "DepositCloseRight": false,
            "DepositRenewRight": false,
            "convertibleF": false,
            "FixingDate": null,
            "portfolio_id": 1161
        }
],"httpStatusCode":200
};
        presentationSuccessCallback(obj);
  };
  
  
    return WealthManager;

});