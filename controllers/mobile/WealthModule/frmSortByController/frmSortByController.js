define({
    sortingData: [],
    segData: [],
    dateRange: [],
    selectedRow: "",
    customData: "",
    init: function() {
        this.view.preShow = this.preShow;
        var scope = this;
		var currentFormObject = kony.application.getCurrentForm();
    var currentForm = currentFormObject.id;
        //var navManager = applicationManager.getNavigationManager();
        //var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    initActions: function() {
        this.view.btnApply.onClick = this.onApplyClick;
        this.view.btnReset.onClick = this.onResetClick;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.segSortingValues.onRowClick = this.onValueSelect;
    },
    onValueSelect: function() {
        var rowIndex = this.view.segSortingValues.selectedRowIndex[1];
        this.sortingData = this.view.segSortingValues.data;
        this.selectedRow = rowIndex;
        this.sortingData.forEach(function(e) {
            e.isSelected = false;
            e.sortName.skin = "sknlbl727272SSP17px";
            e.imageDetails.isVisible = false
        });
        this.sortingData[rowIndex].isSelected = true;
        this.sortingData[rowIndex].sortName = {
            "skin": "sknLbl4176A4SSPReg26px",
            "text": this.segData[rowIndex].sortName
        };
        this.sortingData[rowIndex].imageDetails = {
            "src": "correct.png",
            "isVisible": true
        };
        this.view.segSortingValues.setData(this.sortingData);
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        //var prevForm = navManager.getPreviousForm();
        var prevForm = kony.application.getPreviousForm().id;
        if (prevForm === "frmWatchlist") {
            this.customData = navManager.getCustomInfo("frmWatchlist");
        } else if (prevForm === "frmHoldings") {
            this.customData = navManager.getCustomInfo("frmHoldings");
        } else if (prevForm === "frmTransactions") {
            this.customData = navManager.getCustomInfo("frmTransactions");
        }
      else if(prevForm === "frmAccounts") {
            this.customData = navManager.getCustomInfo("frmAccounts");
        }
      else if(prevForm === "frmOrder") {
            this.customData = navManager.getCustomInfo("frmOrder");
        }
		else if(prevForm === "frmOrders") {
            this.customData = navManager.getCustomInfo("frmOrders");
        }
		this.dateRange =scope_WealthPresentationController.selectedDateRangeDetails;
        this.initializeData();
        this.setUpData();
        this.initActions();
    },
    initializeData: function() {
        var navManager = applicationManager.getNavigationManager();
       // var prevForm = navManager.getPreviousForm();
        var prevForm = kony.application.getPreviousForm().id;
        if (prevForm === "frmWatchlist") {
            this.segData = [{
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.instrumentAlphabetically"),
					"sortIndex": "instrumentName",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("kony.mb.common.change"),
					"sortIndex": "percentageChange",
                    "isSelected": false

                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortLatestPrice"),
					"sortIndex": "lastRate",
                    "isSelected": false

                }
            ];

          } else if (prevForm === "frmHoldings") {
            this.segData = [{
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.instrumentAlphabetically"),
                    "sortIndex": "description",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortQuantity"),
                    "sortIndex": "quantity",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortPrice"),
                    "sortIndex": "marketPrice",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortAverageCost"),
                    "sortIndex": "costPrice",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortMarketValue"),
                    "sortIndex": "marketValue",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortUnrealizedPL"),
                    "sortIndex": "unrealPLMkt",
                    "isSelected": false
                }
            ];

          } else if ((prevForm === "frmOrder" || prevForm === "frmOrders") &&((scope_WealthPresentationController.isHistory === true)||(scope_WealthPresentationController.isHistory === false))) {
			  if( scope_WealthPresentationController.ordType ==="open")
			  {
            this.segData = [{
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.instrumentAlphabetically"),
                    "sortIndex": "description",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("kony.mb.transfers.Date"),
                    "sortIndex": "tradeDate",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("kony.mb.transaction.Type"),
                    "sortIndex": "orderType",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortQuantity"),
                    "sortIndex": "quantity",
                    "isSelected": false
                },
            ];
			}
		  else {
			  this.segData = [{
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.instrumentAlphabetically"),
                    "sortIndex": "description",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("kony.mb.transfers.Date"),
                    "sortIndex": "tradeDate",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("kony.mb.transaction.Type"),
                    "sortIndex": "orderType",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortQuantity"),
                    "sortIndex": "quantity",
                    "isSelected": false
                },
                {
                    "sortName":  kony.i18n.getLocalizedString("kony.mb.achfiledetail.status"),
                    "sortIndex": "status",
                    "isSelected": false
                }
            ];
			}
            

        } else if (prevForm === "frmAccounts") {
            this.segData = [{
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortBookingDate"),
                    "sortIndex": "bookingDate",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("kony.mb.transaction.Type"),
                    "sortIndex": "displayName",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.instrumentAlphabetically"),
                    "sortIndex": "shortName",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("kony.mb.common.change"),
                    "sortIndex": "amount",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("kony.i18n.common.valueDate"),
                    "sortIndex": "valueDate",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortAccountBalance"),
                    "sortIndex": "balance",
                    "isSelected": false
                }
            ];
        } else {
            this.segData = [{
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.instrumentAlphabetically"),
                    "sortIndex": "description",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("kony.mb.transaction.Type"),
                    "sortIndex": "orderType",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortQuantity"),
                    "sortIndex": "quantity",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortPrice"),
                    "sortIndex": "limitPrice",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortNetAmount"),
                    "sortIndex": "netAmount",
                    "isSelected": false
                },
                {
                    "sortName": kony.i18n.getLocalizedString("i18n.wealth.sortTradeDate"),
                    "sortIndex": "tradeDate",
                    "isSelected": false
                }
            ];
        }
    },
    setUpData: function() {
        var selectedColumn = "";
        if (this.customData.sortByValue == undefined || this.customData.sortByValue == "") {
            var navManager = applicationManager.getNavigationManager();
           // var prevForm = navManager.getPreviousForm();
           var prevForm = kony.application.getPreviousForm().id;
            if (prevForm == "frmWatchlist") {
                selectedColumn = "description";
                this.selectedRow = 0;
            } else if (prevForm == "frmHoldings") {
                selectedColumn = "description";
                this.selectedRow = 0;
            } else if (prevForm == "frmTransactions" || prevForm == "frmOrder") {
                selectedColumn = "tradeDate";
                this.selectedRow = 5;
            } 
			 else if (prevForm == "frmOrders") {
                selectedColumn = "tradeDate";
                this.selectedRow = 1;
            } else {
                selectedColumn = "bookingDate";
                this.selectedRow = 0;
            }
        } else {
            selectedColumn = this.customData.sortByValue;
        }
        this.segData.forEach(function(e) {
            if (e.sortIndex === selectedColumn)
                e.isSelected = true;
            else e.isSelected = false;
        });
        this.sortingData = [];
        this.loadSegment();
    },
    loadSegment: function() {
        var data = [];
        data = this.segData;
        for (var list in data) {
            var storeData;
            if (data[list].isSelected) {
                storeData = {
                    isSelected: true,
                    sortName: {
                        text: data[list].sortName,
                        skin: "sknLbl4176A4SSPReg26px"
                    },
                    imageDetails: {
                        src: "correct.png",
                        isVisible: true
                    },
                    sortIndex: data[list].sortIndex
                }
            } else {
                storeData = {
                    isSelected: false,
                    sortName: {
                        text: data[list].sortName,
                        skin: "sknlbl727272SSP17px"
                    },
                    imageDetails: {
                        isVisible: false
                    },
                    sortIndex: data[list].sortIndex
                }
            }
            this.sortingData.push(storeData);
        }
        this.view.segSortingValues.widgetDataMap = {
            lblSortFactor: "sortName",
            imgTick: "imageDetails"
        }
        this.view.segSortingValues.removeAll();
        this.view.segSortingValues.setData(this.sortingData);
    },
    onApplyClick: function() {
        var navManager = applicationManager.getNavigationManager();
        //var prevForm = navManager.getPreviousForm();
        var prevForm = kony.application.getPreviousForm().id;
        if (prevForm === "frmWatchlist") {
            var isSelected = this.sortingData[this.selectedRow].isSelected;
            var sortByDataWatchlist = "";
            if (isSelected) {
                sortByDataWatchlist = this.sortingData[this.selectedRow].sortIndex;
              scope_WealthPresentationController.sortByValueWatchlist = sortByDataWatchlist;
            }
            var params = {
                "portfolioId": scope_WealthPresentationController.portfolioId,
                "navPage": "Watchlist",
                "sortBy": sortByDataWatchlist,
                "searchByInstrumentName": this.customData.searchText
            }
            var data = {};
            data.response = sortByDataWatchlist;
            data.searchText = this.customData.searchText;
            navManager.setCustomInfo("frmSortBy", data);
           
//             var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
//             wealthModule.getWatchlist(params);
          navManager.navigateTo("frmWatchlist");
        } else if (prevForm === "frmHoldings") {
            var isSelected = this.sortingData[this.selectedRow].isSelected;
            var sortByDataHoldings = "";
            if (isSelected) {
                sortByDataHoldings = this.sortingData[this.selectedRow].sortIndex;
              scope_WealthPresentationController.sortByValueHoldings = sortByDataHoldings;
            }
            var params = {
                "portfolioId": scope_WealthPresentationController.portfolioId,
                "navPage": "Holdings",
                "sortBy": sortByDataHoldings,
                "searchByInstrumentName": this.customData.searchText
            }
            var data = {};
            data.response = sortByDataHoldings;
            data.searchText = this.customData.searchText;
            navManager.setCustomInfo("frmSortBy", data);
           
//             var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
//             wealthModule.getHoldings(params);
          navManager.navigateTo("frmHoldings");
        } else if(prevForm === "frmOrder") {
          
          var isSelected = this.sortingData[this.selectedRow].isSelected;
            var sortByData = "";
            if (isSelected) {
                sortByData = this.sortingData[this.selectedRow].sortIndex;
            }
            var orderId; 
            if(scope_WealthPresentationController.orderList.length === 0){
                orderId = null;
            }
            else{
                orderId = scope_WealthPresentationController.orderList.toString();
            }
            var today = new Date();
            var previousDate = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
            var startDate = previousDate.getFullYear() + '-' + ('0' + (previousDate.getMonth() + 1)).slice(-2) + '-' + ('0' + previousDate.getDate()).slice(-2);
            var endDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
            if (scope_WealthPresentationController.ordType === "open") {
                var params = {
                        "portfolioId": scope_WealthPresentationController.portfolioId,
                        //"navPage": "Orders",
                        "sortBy": sortByData,
                        "searchByInstrumentName": this.customData.searchText,
                        "orderId": orderId,
                        "type": scope_WealthPresentationController.ordType,
                        "startDate": "2018-12-06",
                        "endDate": endDate
                    }
                    // 			} else {
                    // 				if (this.dateRange.startDate == undefined) {
                    // 					if (scope_WealthPresentationController.dateBetween !== undefined) {
                    // 						//alert("datebetween params");
                    // 						var params = {
                    // 							"portfolioId": scope_WealthPresentationController.portfolioId,
                    // 							//"navPage": "Orders",
                    // 							"sortBy": sortByData,
                    // 							"searchByInstrumentName": this.customData.searchText,
                    // 							"orderId": orderId,
                    // 							"type": scope_WealthPresentationController.ordType,
                    // 							"startDate": scope_WealthPresentationController.dateBetween.startDate,
                    // 							"endDate": scope_WealthPresentationController.dateBetween.endDate,
                    // 						}
            } else {
                if (this.dateRange.startDate == undefined) {
                    var params = {
                        "portfolioId": scope_WealthPresentationController.portfolioId,
                        //"navPage": "Orders",
                        "sortBy": sortByData,
                        "searchByInstrumentName": this.customData.searchText,
                        "orderId": orderId,
                        "type": scope_WealthPresentationController.ordType,
                        "startDate": startDate,
                        "endDate": endDate,
                    }
                } else {
                    //alert("elsedaaterge");
                    var params = {
                        "portfolioId": scope_WealthPresentationController.portfolioId,
                        //"navPage": "Orders",
                        "sortBy": sortByData,
                        "searchByInstrumentName": this.customData.searchText,
                        "orderId": orderId,
                        "type": scope_WealthPresentationController.ordType,
                        "startDate": this.dateRange.startDate,
                        "endDate": this.dateRange.endDate
                    }
                }
            }
            var data = {};
            data.response = sortByData;
            data.searchText = this.customData.searchText;
            navManager.setCustomInfo("frmSortBy", data);
            var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
            wealthModule.getOrdersDetails(params);
            wealthModule.commonFunctionForNavigation("frmOrder");
        } else if (prevForm === "frmOrders") {
            var isSelected = this.sortingData[this.selectedRow].isSelected;
            var sortByData = "";
            if (isSelected) {
                sortByData = this.sortingData[this.selectedRow].sortIndex;
            }
            var orderId;
            if (scope_WealthPresentationController.orderList.length === 0) {
                orderId = null;
            } else {
                orderId = scope_WealthPresentationController.orderList.toString();
            }
            var today = new Date();
            var previousDate = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
            var startDate = previousDate.getFullYear() + '-' + ('0' + (previousDate.getMonth() + 1)).slice(-2) + '-' + ('0' + previousDate.getDate()).slice(-2);
            var endDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
            if (scope_WealthPresentationController.ordType === "open") {
                var params = {
                    "portfolioId": scope_WealthPresentationController.portfolioId,
                    //"navPage": "Orders",
                    "sortBy": sortByData,
                    "searchByInstrumentName": this.customData.searchText,
                    "orderId": orderId,
                    "type": scope_WealthPresentationController.ordType,
                    "startDate": startDate,
                    "endDate": endDate
                }
            } else {
                if (this.dateRange.startDate == undefined) {
                    var params = {
                        "portfolioId": scope_WealthPresentationController.portfolioId,
                        //"navPage": "Orders",
                        "sortBy": sortByData,
                        "searchByInstrumentName": this.customData.searchText,
                        "orderId": orderId,
                        "type": scope_WealthPresentationController.ordType,
                        "startDate": startDate,
                        "endDate": endDate
                    }
                } else {
                    var params = {
                        "portfolioId": scope_WealthPresentationController.portfolioId,
                        //"navPage": "Orders",
                        "sortBy": sortByData,
                        "searchByInstrumentName": this.customData.searchText,
                        "orderId": orderId,
                        "type": scope_WealthPresentationController.ordType,
                        "startDate": this.dateRange.startDate,
                        "endDate": this.dateRange.endDate
                    }
                }
            }
            var data = {};
            data.response = sortByData;
            data.searchText = this.customData.searchText;
            scope_WealthPresentationController.sortByValueOrders = sortByData;
            navManager.setCustomInfo("frmSortBy", data);
            navManager.navigateTo("frmOrders");
        } else if (prevForm === "frmAccounts") {
            var today = new Date();
            var endDate = today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2);
            var previousDate = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
            var startDate = previousDate.getFullYear() + ('0' + (previousDate.getMonth() + 1)).slice(-2) + ('0' + previousDate.getDate()).slice(-2);
            var isSelected = this.sortingData[this.selectedRow].isSelected;
            var sortByData = "";
            if (isSelected) {
                sortByData = this.sortingData[this.selectedRow].sortIndex;
              scope_WealthPresentationController.sortByValueAccounts = sortByData;
            }
            if (this.dateRange.startDate == undefined) {
              var params = {
				"portfolioId":scope_WealthPresentationController.portfolioId,
				"accountId":scope_WealthPresentationController.accountNumber,
				"dateFrom":startDate,
				"dateTo":endDate,
				"listType":"SEARCH",
				"sortBy":sortByData,
				"searchByInstrumentName":this.customData.searchText
                }
            } else {
                var params = {
                "portfolioId":scope_WealthPresentationController.portfolioId,
				"accountId":scope_WealthPresentationController.accountNumber,
				"dateFrom":this.dateRange.startDate.replace(/-/g, ''),
				"dateTo":this.dateRange.endDate.replace(/-/g, ''),
				"listType":"SEARCH",
				"sortBy":sortByData,
				"searchByInstrumentName":this.customData.searchText
                }
            }
            var data = {};
            data.response = sortByData;
            data.searchText = this.customData.searchText;
            navManager.setCustomInfo("frmSortBy", data);
            var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
            wealthModule.getAccountActivity(params);
        } else {
            var today = new Date();
            var endDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
            var previousDate = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
            var startDate = previousDate.getFullYear() + '-' + ('0' + (previousDate.getMonth() + 1)).slice(-2) + '-' + ('0' + previousDate.getDate()).slice(-2);
            var isSelected = this.sortingData[this.selectedRow].isSelected;
            var sortByData = "";
            if (isSelected) {
                sortByData = this.sortingData[this.selectedRow].sortIndex;
            }
            if (this.dateRange.startDate == undefined) {
                var params = {
                    "portfolioId": scope_WealthPresentationController.portfolioId,
                    "startDate": startDate,
                    "endDate": endDate,
                    "searchByInstrumentName": this.customData.searchText,
                    "sortBy": sortByData
                }
            } else {
                var params = {
                    "portfolioId": scope_WealthPresentationController.portfolioId,
                    "startDate": this.dateRange.startDate,
                    "endDate": this.dateRange.endDate,
                    "searchByInstrumentName": this.customData.searchText,
                    "sortBy": sortByData
                }
            }
            var data = {};
            data.response = sortByData;
            data.searchText = this.customData.searchText;
          scope_WealthPresentationController.sortByValueTrans = sortByData; 
            navManager.setCustomInfo("frmSortBy", data);
//             var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
//             wealthModule.getTransactions(params);
          navManager.navigateTo("frmTransactions");
        }
    },
    onResetClick: function() {
        this.customData.sortByValue = "";
        scope_WealthPresentationController.sortByValueWatchlist =  "";
      scope_WealthPresentationController.sortByValueHoldings =  "";
      scope_WealthPresentationController.sortByValueTrans =  "";
      scope_WealthPresentationController.sortByValueAccounts = "";
	   scope_WealthPresentationController.sortByValueOrders = "";
        this.setUpData();
    }
});
