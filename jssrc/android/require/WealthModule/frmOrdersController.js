define("WealthModule/userfrmOrdersController", {
    segResponse: {},
    dateRange: [],
    startDate: "",
    totalValue: "",
    selectedRicCode: "",
    description: "",
    orderType: "",
    selectedIndex: 0,
    cancelOrderIds: "",
    tempData: {},
    orderStatus: "",
    type: "",
    orderReference: "",
    openOrderPermission: "",
    historyOrderPermission: "",
    requestParams: {},
    init: function() {
        this.view.preShow = this.preShow;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxAdditionalOptions.setVisibility(false);
        this.dateRange = scope_WealthPresentationController.selectedDateRangeDetails;
        var navMan = applicationManager.getNavigationManager();
        var configManager = applicationManager.getConfigurationManager();
        if (configManager.getDeploymentGeography() === 'EUROPE') {
            this.view.segmentDetailsWealth.setEuroFlow(true);
        } else {
            this.view.segmentDetailsWealth.setEuroFlow(false);
        }
        this.initActions();
        let openOrderPermission = false;
        let historyOrderPermission = false;
        var getPermissionDetails = JSON.parse(this.view.segmentDetailsWealth.getFeaturesAndPermissions());
        if (typeof getPermissionDetails !== "undefined") {
            if (getPermissionDetails.openOrderPermission.length > 0 || getPermissionDetails.historyOrderPermission.length > 0) {
                openOrderPermission = configManager.checkAtLeastOnePermission(getPermissionDetails.openOrderPermission);
                historyOrderPermission = configManager.checkAtLeastOnePermission(getPermissionDetails.historyOrderPermission);
            }
        }
        this.openOrderPermission = openOrderPermission;
        this.historyOrderPermission = historyOrderPermission;
        var existingParam = this.view.segmentDetailsWealth.getCriteriaObjValue();
        if (openOrderPermission && ((existingParam === "{}" || Object.keys(existingParam).length === 0) || (existingParam !== 'undefined' && existingParam.type == "open"))) {
            scope_WealthPresentationController.ordType = "open";
            this.requestParams = {
                "portfolioId": scope_WealthPresentationController.portfolioId,
                "type": "open",
                "startDate": "",
                "endDate": "",
                "searchByInstrumentName": "",
                "sortBy": (scope_WealthPresentationController.sortByValueOrders === "") ? "tradeDate" : scope_WealthPresentationController.sortByValueOrders,
                "orderId": this.cancelOrderIds
            };
        } else if (existingParam !== "" && existingParam !== 'undefined' && existingParam.type == "history" && historyOrderPermission) {
            scope_WealthPresentationController.ordType = "history";
            this.view.segmentDetailsWealth.setLblPreviousDays(this.dateRange);
            this.requestParams = {
                "portfolioId": scope_WealthPresentationController.portfolioId,
                "type": "history",
                "startDate": this.dateRange.startDate,
                "endDate": this.dateRange.endDate,
                "searchByInstrumentName": "",
                "sortBy": (scope_WealthPresentationController.sortByValueOrders === "") ? "tradeDate" : scope_WealthPresentationController.sortByValueOrders,
                "orderId": this.cancelOrderIds
            };
            navMan.setCustomInfo("isFirstTime", false);
        } else if (!openOrderPermission && historyOrderPermission) {
            navMan.setCustomInfo("isFirstTime", true);
            this.onClickOrderHistory();
        }
        this.view.segmentDetailsWealth.setContext(this.requestParams);
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.flxAdditionalOptions.setVisibility(false);
        navMan.setCustomInfo("frmPortfolioDetails", false);
        this.checkPermission("formUI");
    },
    postShow: function() {
        // To be added
    },
    initActions: function() {
        //this.view.segmentDetailsWealth.onRowClickEvent = this.onOrderHistorySelect; 
        this.view.segmentDetailsWealth.onClickOrderHistory = this.onClickOrderHistory;
        this.view.segmentDetailsWealth.onClickOpenOrders = this.onClickOpenOrders;
        this.view.segmentDetailsWealth.onMoveToDateRange = this.timePeriod;
        this.view.customHeader.flxBack.onClick = this.onBack;
        this.view.segmentDetailsWealth.onActionButtonClicked = this.onContextMenuClick;
        this.view.customHeader.flxSearch.onTouchEnd = this.moreOptions;
        this.view.flxCancelOption.onTouchEnd = this.onClickCancel;
        this.view.flxSortBy.onTouchEnd = this.onClickSortBy;
        this.view.flxDownloadOrders.onTouchEnd = this.onClickDownloadOrders;
        this.view.flxModify.onTouchEnd = this.onClickModify;
        this.view.flxViewOrder.onTouchEnd = this.onClickViewOrder;
        this.view.flxCancelOrder.onTouchEnd = this.onClickOrderCancel;
        this.view.flxYes.onTouchEnd = this.yesClick;
        this.view.flxNo.onTouchEnd = this.noClick;
        this.view.segmentDetailsWealth.onOrdersComponentLoad = this.checkPermission;
        this.view.segmentDetailsWealth.onRequestEnd = function() {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        };
        this.view.segmentDetailsWealth.onRequestStart = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
        };
    },
    onClickOpenOrders: function() {
        scope_WealthPresentationController.sortByValueOrders = "";
        scope_WealthPresentationController.ordType = "open";
        this.checkPermission("formUI");
    },
    onClickOrderHistory: function() {
        scope_WealthPresentationController.sortByValueOrders = "";
        scope_WealthPresentationController.ordType = "history";
        var data = {};
        data.selectedPeriod = "previous30DaysSelected";
        var today = new Date();
        var previousDate = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
        var startDate = previousDate.getFullYear() + '-' + ('0' + (previousDate.getMonth() + 1)).slice(-2) + '-' + ('0' + previousDate.getDate()).slice(-2);
        var endDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
        data.startDate = startDate;
        data.endDate = endDate;
        scope_WealthPresentationController.selectedDateRangeDetails = {
            startDate: startDate,
            endDate: endDate,
            selectedPeriod: "previous30DaysSelected",
            flag: false
        };
        this.dateRange = scope_WealthPresentationController.selectedDateRangeDetails;
        this.view.segmentDetailsWealth.setLblPreviousDays(this.dateRange);
        this.requestParams = {
            "portfolioId": scope_WealthPresentationController.portfolioId,
            "type": "history",
            "startDate": this.dateRange.startDate,
            "endDate": this.dateRange.endDate,
            "searchByInstrumentName": "",
            "sortBy": (scope_WealthPresentationController.sortByValueOrders === "") ? "tradeDate" : scope_WealthPresentationController.sortByValueOrders,
            "orderId": this.cancelOrderIds
        };
        var navManager = applicationManager.getNavigationManager();
        if (!navManager.getCustomInfo("isFirstTime")) {
            this.view.segmentDetailsWealth.callOrderHistory(this.requestParams, this.cancelOrderIds);
        }
    },
    onContextMenuClick: function(param, dets) {
        var navManager = applicationManager.getNavigationManager();
        var data = {};
        var orders = {};
        orders = dets.rowdetails;
        orders.totalValue = dets.totalValue;
        data.response = orders;
        this.tempData = data;
        this.selectedRicCode = orders.RICCode;
        this.orderType = orders.orderType;
        this.ISINCode = orders.ISIN;
        this.description = orders.description;
        //this.transactionId=orders.transactionId;
        this.orderReference = orders.orderReference;
        this.orderStatus = orders.status;
        this.view.flxDownloadOrders.isVisible = false;
        this.view.flxSortBy.isVisible = false;
        this.view.flxScroll.setEnabled(false);
        this.view.flxHeader.setEnabled(false);
        this.view.lblView.text = kony.i18n.getLocalizedString("i18n.wealth.viewOrder");
        this.view.flxViewOrder.isVisible = true;
        this.checkPermission("formUI");
        this.view.flxAdditionalOptions.isVisible = true;
    },
    onOrderHistorySelect: function(rowData) {
        var navManager = applicationManager.getNavigationManager();
        var data = {};
        var orderDetails = rowData.row;
        data.response = orderDetails;
        if (orderDetails.status !== "Open") {
            navManager.setCustomInfo("frmViewOrderHistoryDetails", data);
            navManager.navigateTo("frmViewOrderHistoryDetails");
        }
    },
    onClickViewOrder: function() {
        this.view.flxScroll.setEnabled(true);
        this.view.flxHeader.setEnabled(true);
        if (this.orderStatus === "Open") {
            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("frmViewOpenOrderDetails", this.tempData);
            navManager.navigateTo("frmViewOpenOrderDetails");
        }
    },
    moreOptions: function() {
        this.view.flxViewOrder.isVisible = false;
        this.view.flxModify.isVisible = false;
        this.view.flxCancelOrder.isVisible = false;
        this.view.flxDownloadOrders.isVisible = true;
        this.view.flxSortBy.isVisible = true;
        this.view.flxScroll.setEnabled(false);
        this.view.flxHeader.setEnabled(false);
        this.view.lblDownloadOrders.text = kony.i18n.getLocalizedString("i18n.wealth.downloadOrders");
        this.view.lblSortyBy.text = kony.i18n.getLocalizedString("i18n.wealth.sortBy");
        this.view.flxAdditionalOptions.isVisible = true;
    },
    onClickOrderCancel: function() {
        this.view.flxScroll.setEnabled(false);
        this.view.flxHeader.setEnabled(false);
        this.view.flxConfirmationPopUp.isVisible = true;
        this.view.flxAdditionalOptions.isVisible = false;
        var i18Text = kony.i18n.getLocalizedString("i18n.wealth.cancelOrderConfirmation");
        this.view.lblMsg.text = i18Text + '"' + this.description + '"?';
    },
    yesClick: function() {
        var params = {
            "orderId": this.orderReference,
            "portfolioId": scope_WealthPresentationController.portfolioId
        }
        if (this.cancelOrderIds === "") {
            this.cancelOrderIds = this.orderReference;
        } else {
            this.cancelOrderIds = this.cancelOrderIds + "," + this.orderReference;
        }
        this.view.segmentDetailsWealth.cancelOrder(params, this.cancelOrderIds);
        this.view.flxScroll.setEnabled(true);
        this.view.flxHeader.setEnabled(true);
        this.view.flxConfirmationPopUp.setVisibility(false);
    },
    noClick: function() {
        this.view.flxScroll.setEnabled(true);
        this.view.flxHeader.setEnabled(true);
        this.view.flxConfirmationPopUp.setVisibility(false);
    },
    onClickModify: function() {
        this.view.flxScroll.setEnabled(true);
        this.view.flxHeader.setEnabled(true);
        var referenceCurrency = this.view.segmentDetailsWealth.getRefCurrency();
        this.setCashBalance(scope_WealthPresentationController.portfolioCashAccounts, referenceCurrency);
        if (this.orderType === "Buy Limit" || this.orderType === "Buy Stop Loss" || this.orderType === "Buy Market" || this.orderType === "Buy Stop Limit") {
            this.callOnNavigate('Buy');
        } else {
            this.callOnNavigate('Sell');
        }
    },
    timePeriod: function() {
        var navManager = applicationManager.getNavigationManager();
        var dateFlag = scope_WealthPresentationController.selectedDateRangeDetails;
        var selectedValue = this.view.segmentDetailsWealth.getPreviousDaysText();
        var dataSet = {};
        var period;
        if (selectedValue == "Previous 30 days") {
            period = "previous30DaysSelected";
        } else if (selectedValue == "3 Months") {
            period = "3MonthsSelected";
        } else if (selectedValue == "6 Months") {
            period = "6MonthsSelected";
        } else if (selectedValue == "Last year") {
            period = "lastYearSelected";
        } else {
            period = "freeDateSelected";
        }
        dataSet.flag = dateFlag.flag;
        dataSet.selectedDays = period;
        navManager.setCustomInfo('frmOrders', dataSet);
        navManager.navigateTo("frmDateRange");
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
    callOnNavigate: function(selectedOrder) {
        scope_WealthPresentationController.searchEntryPoint = false;
        var navManager = applicationManager.getNavigationManager();
        // var value = navManager.getCustomInfo('frmOrders');
        var data = {};
        data = this.tempData;
        var ricId = this.selectedRicCode;
        var isin = this.ISINCode;
        var param = {
            "ISINCode": isin,
            "RICCode": ricId,
            "instrumentId": data.response.instrumentId
        };
        var selData = {
            'selOrder': selectedOrder,
            'response': data.response
        };
        data.response.mode = selData.selOrder;
        navManager.setCustomInfo("frmOrders", selData);
        navManager.setCustomInfo("frmInstrumentOrder", data.response);
        scope_WealthPresentationController.isFrmOrder = true;
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.getInstrumentDetails(param);
        this.view.flxAdditionalOptions.isVisible = false;
    },
    onClickCancel: function() {
        this.view.flxScroll.setEnabled(true);
        this.view.flxHeader.setEnabled(true);
        this.view.flxAdditionalOptions.isVisible = false;
    },
    onClickSortBy: function() {
        this.view.flxScroll.setEnabled(true);
        this.view.flxHeader.setEnabled(true);
        var data = {};
        var navManager = applicationManager.getNavigationManager();
        if (scope_WealthPresentationController.sortByValueOrders == "") {
            data.sortByValue = "tradeDate";
            navManager.setCustomInfo("frmOrders", data);
        } else {
            data.sortByValue = scope_WealthPresentationController.sortByValueOrders;
            navManager.setCustomInfo("frmOrders", data);
        }
        navManager.navigateTo("frmSortBy");
    },
    onClickDownloadOrders: function() {
        this.view.flxScroll.setEnabled(true);
        this.view.flxHeader.setEnabled(true);
        scope_WealthPresentationController.downloadParams = this.view.segmentDetailsWealth.getCriteriaObjValue();
        if (scope_WealthPresentationController.downloadParams !== "" && scope_WealthPresentationController.downloadParams !== 'undefined' && scope_WealthPresentationController.downloadParams.type == "open") {
            scope_WealthPresentationController.downloadParams.navPage = "Open Order";
        } else {
            scope_WealthPresentationController.downloadParams.navPage = "History Order";
        }
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.getDownloadList(scope_WealthPresentationController.downloadParams);
        kony.print("test" + scope_WealthPresentationController.downloadParams);
    },
    onClickDownloadMessage: function(base64String, filename) {
        try {
            this.view.flxPopup.setVisibility(false);
            this.view.flxAdditionalOptions.isVisible = false;
            this.view.socialshare.shareWithBase64(base64String, filename);
        } catch (error) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        }
    },
    onBack: function() {
        var existingParam = {};
        this.view.segmentDetailsWealth.setCriteriaObjectValue(JSON.stringify(existingParam));
        var navMan = applicationManager.getNavigationManager();
        navMan.navigateTo("frmPortfolioDetails");
    },
    checkPermission: function(uiPermissions) {
        if (uiPermissions === "formUI" && scope_WealthPresentationController.ordType === "open") {
            var getPermissionDetails = JSON.parse(this.view.segmentDetailsWealth.getFeaturesAndPermissions());
            if (typeof getPermissionDetails !== "undefined") {
                var configManager = applicationManager.getConfigurationManager();
                let contextualMenuFeature = false;
                if (getPermissionDetails.contextualMenuFeature.length > 0) {
                    contextualMenuFeature = configManager.checkUserFeature(getPermissionDetails.contextualMenuFeature);
                }
                if (contextualMenuFeature) {
                    this.view.segmentDetailsWealth.setVisibleActionImage(true);
                    let modifyPermission = false;
                    let viewPermission = false;
                    let cancelPermission = false;
                    if (getPermissionDetails.modify.length > 0) {
                        modifyPermission = configManager.checkAtLeastOnePermission(getPermissionDetails.modify);
                        this.view.lblModify.text = kony.i18n.getLocalizedString("i18n.wealth.modifyOrder"); //kony.i18n.getLocalizedString("i18n.wealth.modifyOrder");
                        this.view.flxModify.isVisible = modifyPermission;
                    }
                    if (getPermissionDetails.view.length > 0) {
                        viewPermission = configManager.checkAtLeastOnePermission(getPermissionDetails.view);
                        this.view.lblView.text = "View Order"; //kony.i18n.getLocalizedString("i18n.wealth.viewOrder");
                        this.view.flxViewOrder.isVisible = viewPermission;
                        this.view.segmentDetailsWealth.onRowClickEvent = viewPermission ? this.onOrderHistorySelect : null;
                    }
                    if (getPermissionDetails.cancel.length > 0) {
                        cancelPermission = configManager.checkAtLeastOnePermission(getPermissionDetails.cancel);
                        this.view.lblCancelOrder.text = kony.i18n.getLocalizedString("i18n.wealth.cancelOrder"); //kony.i18n.getLocalizedString("i18n.wealth.cancelOrder");
                        this.view.lblCancelOrder.skin = "sknLblRed0ea08208b3c9142";
                        this.view.flxCancelOrder.isVisible = cancelPermission;
                    }
                } else {
                    this.view.segmentDetailsWealth.setVisibleActionImage(false);
                }
            }
        } else if (uiPermissions === "componentUI") {
            var ordersPermissionsString = this.openOrderPermission + "|" + this.historyOrderPermission;
            return ordersPermissionsString;
        }
    }
});
define("WealthModule/frmOrdersControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_dd805e79e8e14c4486dc4debb2b18adf: function AS_Form_dd805e79e8e14c4486dc4debb2b18adf(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_ha94b6585ab742ab8a67fffa889d1b04: function AS_Form_ha94b6585ab742ab8a67fffa889d1b04(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_c188a885a4594319ba6d30a7afd684f3: function AS_BarButtonItem_c188a885a4594319ba6d30a7afd684f3(eventobject) {
        var self = this;
        this.onBack();
    },
    AS_BarButtonItem_a9d08f5a55434b9a9dc2c09c0e5ebe4c: function AS_BarButtonItem_a9d08f5a55434b9a9dc2c09c0e5ebe4c(eventobject) {
        var self = this;
        this.moreOptions();
    }
});
define("WealthModule/frmOrdersController", ["WealthModule/userfrmOrdersController", "WealthModule/frmOrdersControllerActions"], function() {
    var controller = require("WealthModule/userfrmOrdersController");
    var controllerActions = ["WealthModule/frmOrdersControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
