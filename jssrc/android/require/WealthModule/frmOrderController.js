define("WealthModule/userfrmOrderController", {
    //segmentRowDataId : [],
    sortByCustomData: "",
    segResponse: {},
    dateRange: [],
    startDate: "",
    totalValue: "",
    selectedRicCode: "",
    orderType: "",
    selectedIndex: 0,
    init: function() {
        this.view.preShow = this.preShow;
        var navManager = applicationManager.getNavigationManager();
        //var currentForm=navManager.getCurrentForm();
        var currentForm = kony.application.getCurrentForm().id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        if (scope_WealthPresentationController.isPortfolio === true) {
            scope_WealthPresentationController.isPortfolio = false;
            this.onToggleConversionPreference(0);
        }
        this.initActions();
        var navMan = applicationManager.getNavigationManager();
        var searchFlag = navMan.getCustomInfo("frmPortfolioDetails");
        if (searchFlag == true) {
            this.view.tbxSearch.text = "";
            this.view.imgClose.isVisible = false;
        }
        navMan.setCustomInfo("frmPortfolioDetails", false);
        this.sortByCustomData = navMan.getCustomInfo("frmSortBy");
        this.dateRange = navMan.getCustomInfo("frmDateRange");
        this.view.flxAdditionalOptions.isVisible = false;
        this.setLblPreviousDays();
    },
    postShow: function() {
        // To be added
    },
    initActions: function() {
        var navMan = applicationManager.getNavigationManager();
        var value = navMan.getCustomInfo('frmOrder');
        this.view.btnTglOpen.onClick = this.onToggleConversionPreference.bind(this, 0);
        this.view.btnTglHistory.onClick = this.onToggleConversionPreference.bind(this, 1);
        this.view.flxMore.onTouchEnd = this.onClickMoreOptions;
        this.view.customHeader.flxBack.onTouchEnd = this.navigateCustomBack;
        this.view.tbxSearch.onDone = this.searchData;
        this.view.tbxSearch.onTextChange = this.onSearch;
        this.view.flxTimePeriod.onTouchEnd = this.timePeriod;
        this.view.imgClose.onTouchEnd = this.clearText;
        this.view.flxYes.onTouchEnd = this.yesClick;
        this.view.flxNo.onTouchEnd = this.noClick;
    },
    yesClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo('frmOrder')
        var params = {
            "orderId": data.response.ordersDetails[this.selectedIndex].transactionId,
            "portfolioId": scope_WealthPresentationController.portfolioId
        }
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.cancelOrder(params);
        scope_WealthPresentationController.orderList.push(params.orderId);
        this.view.flxConfirmationPopUp.setVisibility(false);
        this.onToggleConversionPreference(0);
    },
    noClick: function() {
        this.view.flxConfirmationPopUp.setVisibility(false);
    },
    setLblPreviousDays: function() {
        var forUtility = applicationManager.getFormatUtilManager();
        if (this.dateRange !== undefined) {
            if (this.dateRange.selectedPeriod) {
                if (this.dateRange.selectedPeriod == "previous30DaysSelected") {
                    this.view.lblPreviousDays.text = kony.i18n.getLocalizedString("i18n.wealth.previous30Days");
                } else if (this.dateRange.selectedPeriod == "3MonthsSelected") {
                    this.view.lblPreviousDays.text = kony.i18n.getLocalizedString("i18n.wealth.threeMonths");
                } else if (this.dateRange.selectedPeriod == "6MonthsSelected") {
                    this.view.lblPreviousDays.text = kony.i18n.getLocalizedString("i18n.wealth.sixMonths");
                } else if (this.dateRange.selectedPeriod == "lastYearSelected") {
                    this.view.lblPreviousDays.text = kony.i18n.getLocalizedString("i18n.wealth.lastYear");
                } else {
                    var startDateObj = forUtility.getDateObjectfromString(this.dateRange.startDate);
                    var formattedstartDate = forUtility.getFormatedDateString(startDateObj, forUtility.getApplicationDateFormat());
                    var endDateObj = forUtility.getDateObjectfromString(this.dateRange.endDate);
                    var formattedendDate = forUtility.getFormatedDateString(endDateObj, forUtility.getApplicationDateFormat());
                    this.view.lblPreviousDays.text = formattedstartDate + " - " + formattedendDate;
                }
            }
        } else {
            this.view.lblPreviousDays.text = kony.i18n.getLocalizedString("i18n.wealth.previous30Days");
        }
    },
    onToggleConversionPreference: function(option) {
        let activeSkin = 'sknBtnFFFFFFBdr10px';
        let inactiveSkin = 'sknbtn000000SSPSemiBold15px';
        var navMan = applicationManager.getNavigationManager();
        var value = navMan.getCustomInfo('frmOrder');
        var today = new Date();
        var previousDate = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
        var startDate = previousDate.getFullYear() + '-' + ('0' + (previousDate.getMonth() + 1)).slice(-2) + '-' + ('0' + previousDate.getDate()).slice(-2);
        var endDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
        this.view.tbxSearch.text = "";
        this.view.imgClose.isVisible = false;
        if (!option) {
            scope_WealthPresentationController.ordType = "open";
            scope_WealthPresentationController.isHistory = false;
            this.view.flxTimePeriod.setVisibility(false);
            this.view.flxHistoryContentMain.setVisibility(false);
            this.view.flxHistoryError.setVisibility(false);
            this.view.segmentDetails.setVisibility(true);
            this.view.btnTglOpen.skin = activeSkin;
            this.view.btnTglHistory.skin = inactiveSkin;
            var orderId;
            if (scope_WealthPresentationController.orderList.length === 0) {
                orderId = null;
            } else {
                orderId = scope_WealthPresentationController.orderList.toString();
            }
            var params = {
                "portfolioId": scope_WealthPresentationController.portfolioId,
                "orderId": orderId,
                "sortBy": "tradeDate",
                "type": scope_WealthPresentationController.ordType,
                "startDate": "2018-12-06",
                "endDate": endDate,
                "searchByInstrumentName": ""
            }
            var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
            wealthModule.getOrdersDetails(params);
        } else {
            scope_WealthPresentationController.ordType = "history";
            scope_WealthPresentationController.isHistory = true;
            this.view.segmentDetails.setVisibility(false);
            this.view.flxError.setVisibility(false);
            this.view.flxTimePeriod.setVisibility(true);
            this.view.flxHistoryContentMain.setVisibility(true);
            this.view.btnTglOpen.skin = inactiveSkin;
            this.view.btnTglHistory.skin = activeSkin;
            this.transactions();
        }
    },
    transactions: function() {
        var navManager = applicationManager.getNavigationManager();
        var sortByValue = undefined;
        var data = {};
        data.response = sortByValue;
        navManager.setCustomInfo("frmSortBy", data);
        //data.selectedPeriod = "previous30DaysSelected";
        //navManager.setCustomInfo("frmDateRange", data);
        var orderId;
        if (scope_WealthPresentationController.orderList.length === 0) {
            orderId = null;
        } else {
            orderId = scope_WealthPresentationController.orderList.toString();
        }
        var sortVal = "tradeDate";
        var today = new Date();
        var previousDate = new Date();
        var startDate = new Date();
        var endDate = new Date();
        alert("Fistrt ===" + scope_WealthPresentationController.isFirst);
        if (scope_WealthPresentationController.isFirst === true || this.view.lblPreviousDays.text === kony.i18n.getLocalizedString("i18n.wealth.previous30Days")) {
            scope_WealthPresentationController.isFirst = false;
            data.selectedPeriod = "previous30DaysSelected";
            navManager.setCustomInfo("frmDateRange", data);
            var a = navManager.getCustomInfo("frmDateRange");
            alert("a->" + a.startDate);
            this.view.lblPreviousDays.text = kony.i18n.getLocalizedString("i18n.wealth.previous30Days");
            previousDate = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
            startDate = previousDate.getFullYear() + '-' + ('0' + (previousDate.getMonth() + 1)).slice(-2) + '-' + ('0' + previousDate.getDate()).slice(-2);
            endDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
        } else {
            if (this.sortByCustomData.response == undefined && this.dateRange.startDate == undefined) {
                if (scope_WealthPresentationController.dateBetween !== undefined) {
                    startDate = scope_WealthPresentationController.dateBetween.startDate;
                    endDate = scope_WealthPresentationController.dateBetween.endDate;
                } else {
                    this.dateRange.startDate = startDate;
                    this.dateRange.endDate = endDate;
                }
            } else if (this.sortByCustomData.response == undefined || this.dateRange.startDate == undefined) {
                if (scope_WealthPresentationController.dateBetween !== undefined) {
                    startDate = scope_WealthPresentationController.dateBetween.startDate;
                    endDate = scope_WealthPresentationController.dateBetween.endDate;
                } else if (this.dateRange.startDate) {
                    startDate = this.dateRange.startDate;
                    endDate = this.dateRange.endDate;
                } else {
                    sortVal = this.sortByCustomData.response;
                }
            } else {
                startDate = this.dateRange.startDate;
                endDate = this.dateRange.endDate;
                sortVal = this.sortByCustomData.response;
            }
        }
        //var value = navManager.getCustomInfo('frmOrder');
        //var data1 = value.response.ordersDetails;
        var params = {
            "portfolioId": scope_WealthPresentationController.portfolioId,
            "orderId": orderId,
            "sortBy": "tradeDate",
            "type": scope_WealthPresentationController.ordType,
            "startDate": startDate,
            "endDate": endDate,
            "searchByInstrumentName": ""
        }
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.getOrdersDetails(params);
    },
    timePeriod: function() {
        var navManager = applicationManager.getNavigationManager();
        var dateFlag = navManager.getCustomInfo("frmDateRange");
        var dataSet = {};
        dataSet.searchValue = this.view.tbxSearch.text;
        dataSet.flag = dateFlag.flag;
        if (this.dateRange == undefined || this.view.lblPreviousDays.text === kony.i18n.getLocalizedString("i18n.wealth.previous30Days")) {
            dataSet.selectedDays = "previous30DaysSelected";
            navManager.setCustomInfo('frmOrder', dataSet);
        } else {
            if (this.dateRange.selectedPeriod == undefined || this.dateRange.selectedPeriod === "") {
                if (this.view.lblPreviousDays.text === kony.i18n.getLocalizedString("i18n.wealth.previous30Days")) {
                    dataSet.selectedDays = "previous30DaysSelected";
                } else if (this.view.lblPreviousDays.text === kony.i18n.getLocalizedString("i18n.wealth.threeMonths")) {
                    dataSet.selectedDays = "3MonthsSelected";
                } else if (this.view.lblPreviousDays.text === kony.i18n.getLocalizedString("i18n.wealth.sixMonths")) {
                    dataSet.selectedDays = "6MonthsSelected";
                } else if (this.view.lblPreviousDays.text === kony.i18n.getLocalizedString("i18n.wealth.lastYear")) {
                    dataSet.selectedDays = "lastYearSelected";
                }
            } else {
                dataSet.selectedDays = this.dateRange.selectedPeriod;
            }
            navManager.setCustomInfo('frmOrder', dataSet);
        }
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmDateRange");
    },
    searchData: function() {
        var searchText = this.view.tbxSearch.text;
        this.view.segmentDetails.removeAll();
        var today = new Date();
        var previousDate = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
        var startDate = previousDate.getFullYear() + '-' + ('0' + (previousDate.getMonth() + 1)).slice(-2) + '-' + ('0' + previousDate.getDate()).slice(-2);
        var endDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
        var orderId;
        if (scope_WealthPresentationController.orderList.length === 0) {
            orderId = null;
        } else {
            orderId = scope_WealthPresentationController.orderList.toString();
        }
        var sortVal = "tradeDate";
        if (scope_WealthPresentationController.ordType === "open") {
            scope_WealthPresentationController.isHistory = false;
            if (this.sortByCustomData.response == undefined) {
                var params = {
                    "portfolioId": scope_WealthPresentationController.portfolioId,
                    "orderId": orderId,
                    "sortBy": "tradeDate",
                    "type": scope_WealthPresentationController.ordType,
                    "startDate": "2018-12-06",
                    "endDate": endDate,
                    "searchByInstrumentName": searchText
                }
            } else {
                var params = {
                    "portfolioId": scope_WealthPresentationController.portfolioId,
                    "orderId": orderId,
                    "type": scope_WealthPresentationController.ordType,
                    "startDate": "2018-12-06",
                    "endDate": endDate,
                    "sortBy": this.sortByCustomData.response,
                    "searchByInstrumentName": searchText
                }
            }
        } else {
            scope_WealthPresentationController.isHistory = true;
            if (this.sortByCustomData.response == undefined && this.dateRange.startDate == undefined) {
                this.dateRange.startDate = startDate;
                this.dateRange.endDate = endDate;
            } else if (this.sortByCustomData.response == undefined || this.dateRange.startDate == undefined) {
                if (this.dateRange.startDate) {
                    startDate = this.dateRange.startDate;
                    endDate = this.dateRange.endDate;
                } else {
                    sortVal = this.sortByCustomData.response;
                }
            } else {
                startDate = this.dateRange.startDate;
                endDate = this.dateRange.endDate;
                sortVal = this.sortByCustomData.response;
            }
            var params = {
                "portfolioId": scope_WealthPresentationController.portfolioId,
                "orderId": orderId,
                "sortBy": sortVal,
                "type": scope_WealthPresentationController.ordType,
                "startDate": startDate,
                "endDate": endDate,
                "searchByInstrumentName": searchText
            }
        }
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        var ordList = wealthModule.getOrdersDetails(params);
        if (ordList.length > 0) {
            if (scope_WealthPresentationController.ordType === "open") {
                this.view.segmentDetails.setVisibility(true);
                this.view.flxError.setVisibility(false);
                var navManager = applicationManager.getNavigationManager();
                this.segResponse = navManager.getCustomInfo("frmOrder");
                this.formSegmentData(this.segResponse);
            } else {
                this.view.flxHistoryContentMain.setVisibility(true);
                this.view.flxHistoryError.setVisibility(false);
                var navManager = applicationManager.getNavigationManager();
                this.segResponse = navManager.getCustomInfo("frmOrder");
                this.setHistorySeg(this.segResponse);
                scope_WealthPresentationController.orderList = [];
            }
        } else {
            if (scope_WealthPresentationController.ordType === "open") {
                this.view.segmentDetails.setVisibility(false);
                this.view.flxError.setVisibility(true);
            } else {
                this.view.flxHistoryContentMain.setVisibility(false);
                this.view.flxTimePeriod.setVisibility(true);
                this.view.flxHistoryError.setVisibility(true);
            }
        }
    },
    onSearch: function() {
        this.view.imgClose.isVisible = true;
        if (this.view.tbxSearch.text == "" || this.view.tbxSearch.text == null) {
            this.view.imgClose.isVisible = false;
        }
    },
    clearText: function() {
        this.view.tbxSearch.text = "";
        this.view.imgClose.isVisible = false;
        this.searchData();
    },
    onClickMoreOptions: function() {
        this.setUpActionSheet("MoreOptions");
    },
    setUpActionSheet: function(triggerPoint) {
        if (triggerPoint === "Orders") {
            this.view.lblModify.text = "Modify Order"; //kony.i18n.getLocalizedString("i18n.wealth.modifyOrder");
            this.view.lblCancelOrder.text = "Cancel Order";
            this.view.lblCancelOrder.skin = "sknLblRed0ea08208b3c9142"; //kony.i18n.getLocalizedString("i18n.wealth.cancelOrder");
            this.view.flxModify.onTouchEnd = this.onClickModify;
            this.view.flxCancelOrder.onTouchEnd = this.onClickOrderCancel;
            this.view.flxCancelOption.onTouchEnd = this.onClickCancel;
        } else {
            this.view.lblModify.text = "Download Orders";
            this.view.lblCancelOrder.text = "Sort By";
            this.view.lblCancelOrder.skin = "sknLbl007aFFSSP"; //kony.i18n.getLocalizedString("i18n.wealth.sortBy");
            this.view.flxModify.onTouchEnd = this.onClickDownloadTxns;
            this.view.flxCancelOrder.onTouchEnd = this.onClickSortBy;
            this.view.flxCancelOption.onTouchEnd = this.onClickCancel;
        }
        this.view.flxAdditionalOptions.isVisible = true;
    },
    onClickModify: function() {
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmOrder");
        this.setCashBalance(scope_WealthPresentationController.portfolioCashAccounts, data.response.referenceCurrency);
        if (this.orderType === "Buy Limit" || this.orderType === "Buy Stop Loss" || this.orderType === "Buy Market" || this.orderType === "Buy Stop Price") {
            this.callOnNavigate('buy');
        } else {
            this.callOnNavigate('sell');
        }
    },
    setCashBalance: function(data, currency) {
        var finalAmount;
        var finalCurrency;
        if (data.length === 1) {
            finalAmount = data[0].balance;
            finalCurrency = data[0].currency;
        } else {
            for (var num in data) {
                if (currency === data[num].currency) {
                    finalAmount = data[num].balance;
                    finalCurrency = data[num].currency;
                    break;
                } else {
                    finalAmount = data[0].balance;
                    finalCurrency = data[0].currency;
                }
            }
        }
        var formatUtil = applicationManager.getFormatUtilManager();
        //this.view.lblCashVal.text = formatUtil.formatAmountandAppendCurrencySymbol(finalAmount,finalCurrency);
        var navManager = applicationManager.getNavigationManager();
        var amount = navManager.getCustomInfo("frmInvestmentAcc");
        if (kony.sdk.isNullOrUndefined(amount)) {
            var amount = {};
            amount.finalAmount = finalAmount;
        } else {
            amount.finalAmount = finalAmount;
        }
        navManager.setCustomInfo('frmInvestmentAcc', amount);
    },
    onClickOrderCancel: function() {
        var navMan = applicationManager.getNavigationManager();
        var value = navMan.getCustomInfo('frmOrder');
        var orders = value.response.ordersDetails[this.selectedIndex];
        this.view.flxConfirmationPopUp.isVisible = true;
        this.view.flxAdditionalOptions.isVisible = false;
        this.view.lblMsg.text = 'Are you sure you want to Cancel your Order' + '"' + orders.description + '"?';
    },
    callOnNavigate: function(selectedOrder) {
        scope_WealthPresentationController.searchEntryPoint = false;
        var navManager = applicationManager.getNavigationManager();
        var value = navManager.getCustomInfo('frmOrder');
        var ricId = this.selectedRicCode;
        var isin = value.response.ordersDetails[this.selectedIndex].ISIN;
        var param = {
            "ISINCode": isin,
            "RICCode": ricId
        };
        var selData = {
            'selOrder': selectedOrder,
            'response': value.response
        };
        var data = selData.response.ordersDetails[this.selectedIndex];
        data.mode = selData.selOrder;
        navManager.setCustomInfo("frmOrder", selData);
        navManager.setCustomInfo("frmInstrumentOrder", data);
        scope_WealthPresentationController.isFrmOrder = true;
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.getInstrumentDetails(param);
        this.view.flxAdditionalOptions.isVisible = false;
    },
    onClickHoldingsCancel: function() {
        this.view.flxAdditionalOptions.isVisible = false;
    },
    onClickDownloadTxns: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("");
        this.view.flxAdditionalOptions.isVisible = false;
    },
    onClickCancel: function() {
        this.view.flxAdditionalOptions.isVisible = false;
    },
    navigateCustomBack: function() {
        scope_WealthPresentationController.isHistory = false;
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.commonFunctionForgoBack();
    },
    onClickSortBy: function() {
        var data = {};
        data.searchText = this.view.tbxSearch.text;
        var navManager = applicationManager.getNavigationManager();
        if (this.sortByCustomData.response == undefined) {
            data.sortByValue = "tradeDate";
            navManager.setCustomInfo("frmOrder", data);
        } else {
            data.sortByValue = this.sortByCustomData.response;
            navManager.setCustomInfo("frmOrder", data);
        }
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.commonFunctionForNavigation("frmSortBy");
        this.view.flxAdditionalOptions.isVisible = false;
    },
    formSegmentData: function(value) {
        var scope = this;
        var currForm = kony.application.getCurrentForm();
        var val = value.response;
        var forUtility = applicationManager.getFormatUtilManager();
        var data = val.ordersDetails;
        if (data.length == 0) {
            this.view.segmentDetails.setVisibility(false);
            this.view.flxError.setVisibility(true);
            //  this.view.segmentDetails.setVisibility(false);
        } else {
            this.view.segmentDetails.setVisibility(true);
            this.view.flxError.setVisibility(false);
            //this.view.segmentDetails.setVisibility(true);
            var segData = [];
            for (var list in data) {
                var storeData;
                var limitPrice;
                var lmtPrice;
                var exchange = data[list].ISIN + ' | ' + data[list].holdingsType;
                var forUtility = applicationManager.getFormatUtilManager();
                var price = forUtility.formatAmountandAppendCurrencySymbol(data[list].price, data[list].instrumentCurrency);
                var date = data[list].tradeDate;
                var spiliteddate = date.split('-');
                date = spiliteddate[1] + '/' + spiliteddate[2] + '/' + spiliteddate[0];
                var orderType = data[list].orderType;
                var limitCurrPrice = forUtility.formatAmountandAppendCurrencySymbol(data[list].limitPrice, data[list].instrumentCurrency);
                var stopPrice = forUtility.formatAmountandAppendCurrencySymbol(data[list].stopPrice, data[list].instrumentCurrency);
                var limitTitle = kony.i18n.getLocalizedString("i18n.wealth.limitPrice");
                var stopTitle = kony.i18n.getLocalizedString("i18n.wealth.stopPrice");
                if (data[list].orderModeType === "Limit" || data[list].orderModeType === "Stop Limit") {
                    limitPrice = limitCurrPrice;
                    lmtPrice = limitTitle;
                } else if (data[list].orderModeType === "Stop Loss") {
                    limitPrice = stopPrice;
                    lmtPrice = stopTitle;
                } else {
                    limitPrice = "";
                    lmtPrice = "";
                }
                storeData = {
                    holdingName: data[list].description,
                    marketName: exchange,
                    quantity: data[list].quantity,
                    price: price,
                    date: date,
                    orderType: orderType,
                    limitPrice: limitPrice,
                    flx: {
                        "onClick": function(event, context) {
                            scope.onOrderSelect(event, context);
                        }.bind(this)
                    },
                    imgMore: {
                        "src": "more_detail.png"
                    },
                    type: "Type: ",
                    tradeDate: "Date: ",
                    qty: kony.i18n.getLocalizedString("i18n.wealth.qty"),
                    priceKey: "Price: ",
                    lmtPrice: lmtPrice
                }
                segData.push(storeData);
            }
            this.view.segmentDetails.widgetDataMap = {
                // this.view.segmentDetails.widgetDataMap = {
                lblName: "holdingName",
                lblId: "marketName",
                lblOneValue: "date",
                lblOneKey: "tradeDate",
                lblTwoValue: "quantity",
                lblTwoKey: "qty",
                lblThreeValue: "orderType",
                lblThreeKey: "type",
                lblFourValue: "price",
                lblFourKey: "priceKey",
                lblFiveValue: "limitPrice",
                lblFiveKey: "lmtPrice",
                flxClick: "flx",
                imgChevron: "imgMore"
            }
            this.view.segmentDetails.setData(segData);
            //this.view.segmentDetails.setData(segData);
        }
        currForm.forceLayout();
    },
    setHistorySeg: function(value) {
        if (scope_WealthPresentationController.isDateRange === true) {
            this.setLblPreviousDays();
            scope_WealthPresentationController.isDateRange = false;
        }
        var scope = this;
        var currForm = kony.application.getCurrentForm();
        var data = value.response.ordersDetails;
        if (data.length == 0) {
            this.view.flxHistoryContentMain.setVisibility(false);
            this.view.flxTimePeriod.setVisibility(true);
            this.view.flxHistoryError.setVisibility(true);
        } else {
            this.view.flxHistoryContentMain.setVisibility(true);
            this.view.flxTimePeriod.setVisibility(true);
            this.view.flxHistoryError.setVisibility(false);
            var segData = [];
            for (var list in data) {
                var exchange = data[list].ISIN + ' | ' + data[list].holdingsType;
                var forUtility = applicationManager.getFormatUtilManager();
                var price = forUtility.formatAmountandAppendCurrencySymbol(data[list].price, data[list].instrumentCurrency);
                var date = data[list].tradeDate;
                var spiliteddate = date.split('-');
                date = spiliteddate[1] + '/' + spiliteddate[2] + '/' + spiliteddate[0];
                var orderType = data[list].orderType;
                var status = data[list].status;
                var limitPrice;
                var lmtPrice;
                var limitCurrPrice = forUtility.formatAmountandAppendCurrencySymbol(data[list].limitPrice, data[list].instrumentCurrency);
                var stopPrice = forUtility.formatAmountandAppendCurrencySymbol(data[list].stopPrice, data[list].instrumentCurrency);
                var limitTitle = kony.i18n.getLocalizedString("i18n.wealth.limitPrice");
                var stopTitle = kony.i18n.getLocalizedString("i18n.wealth.stopPrice");
                if (data[list].orderModeType === "Limit" || data[list].orderModeType === "Stop Limit") {
                    limitPrice = limitCurrPrice;
                    lmtPrice = limitTitle;
                } else if (data[list].orderModeType === "Stop Loss") {
                    limitPrice = stopPrice;
                    lmtPrice = stopTitle;
                } else {
                    limitPrice = "";
                    lmtPrice = "";
                }
                var imgStatus;
                if (status === "Completed") {
                    imgStatus = {
                        "src": "completed.png"
                    };
                } else if (status === "Cancelled") {
                    imgStatus = {
                        "src": "cancelled.png"
                    };
                } else {
                    imgStatus = {
                        "src": "red.png"
                    };
                }
                storeData = {
                    holdingName: data[list].description,
                    marketName: exchange,
                    quantity: data[list].quantity,
                    price: price,
                    date: date,
                    orderType: orderType,
                    limitPrice: limitPrice,
                    status: status,
                    imgStatus: imgStatus,
                    type: "Type: ",
                    tradeDate: "Date: ",
                    qty: kony.i18n.getLocalizedString("i18n.wealth.qty"),
                    priceKey: "Price: ",
                    lmtPrice: lmtPrice
                }
                segData.push(storeData);
            }
            this.view.segmentHistoryDetails.widgetDataMap = {
                lblName: "holdingName",
                lblId: "marketName",
                imgChevron: "imgStatus",
                lblStatus: "status",
                lblOneValue: "date",
                lblOneKey: "tradeDate",
                lblTwoValue: "quantity",
                lblTwoKey: "qty",
                lblThreeValue: "orderType",
                lblThreeKey: "type",
                lblFourValue: "price",
                lblFourKey: "priceKey",
                lblFiveValue: "limitPrice",
                lblFiveKey: "lmtPrice",
                flxClick: "flx"
            };
            this.view.segmentHistoryDetails.setData(segData);
        }
        currForm.forceLayout();
    },
    onOrderSelect: function(event, context) {
        var rowIndex = context.rowIndex;
        this.selectedIndex = rowIndex;
        var data = {};
        var navMan = applicationManager.getNavigationManager();
        var value = navMan.getCustomInfo('frmOrder');
        var orders = value.response.ordersDetails[rowIndex];
        var id = orders.ISIN;
        orders.totalValue = this.totalValue;
        data.response = orders;
        this.selectedRicCode = orders.RICCode;
        this.orderType = orders.orderType;
        this.setUpActionSheet("Orders");
    }
});
define("WealthModule/frmOrderControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c8662a741cb3434db53080ff47c20265: function AS_Form_c8662a741cb3434db53080ff47c20265(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_BarButtonItem_ce7dc1520a6c47ce9b410717a772b6ba: function AS_BarButtonItem_ce7dc1520a6c47ce9b410717a772b6ba(eventobject) {
        var self = this;
        this.onClickMoreOptions();
    }
});
define("WealthModule/frmOrderController", ["WealthModule/userfrmOrderController", "WealthModule/frmOrderControllerActions"], function() {
    var controller = require("WealthModule/userfrmOrderController");
    var controllerActions = ["WealthModule/frmOrderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
