define("WealthModule/userfrmInstrumentOrderAckController", {
    ORDER_MODE: {
        BUY: 'Buy',
        SELL: 'Sell'
    },
    ORDER_TYPE: {
        MARKET: 'Market',
        LIMIT: 'Limit',
        STOPLOSS: 'Stop Loss',
        STOPLIMIT: 'Stop Limit'
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.preShow = this.preShow;
        this.view.postShow = this.postShow;
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
    },
    initActions: function() {
        this.view.btnView.onClick = this.onViewOrder;
        this.view.btnClose.onClick = this.onClose;
    },
    postShow: function() {
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        const orderData = navManager.getCustomInfo('frmInstrumentOrder');
        if (orderData.orderReference) {
            this.view.lblDescription.text = "Your order was modified successfully";
        } else {
            this.view.lblDescription.text = "Your order was placed successfully";
        }
        if (orderData.orderType === this.ORDER_TYPE.LIMIT) {
            this.view.flxLimitPrice.setVisibility(true);
            this.view.flxStopPrice.setVisibility(false);
        } else if (orderData.orderType === this.ORDER_TYPE.STOPLOSS) {
            this.view.flxLimitPrice.setVisibility(false);
            this.view.flxStopPrice.setVisibility(true);
        } else if (orderData.orderType === this.ORDER_TYPE.STOPLIMIT) {
            this.view.flxLimitPrice.setVisibility(true);
            this.view.flxStopPrice.setVisibility(true);
        } else {
            this.view.flxLimitPrice.setVisibility(false);
            this.view.flxStopPrice.setVisibility(false);
        }
        this.setUIData();
    },
    setUIData: function() {
        var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
        var formatUtil = applicationManager.getFormatUtilManager();
        // var data = wealthMod.getWealthObject();
        var navManager = applicationManager.getNavigationManager();
        const data1 = navManager.getCustomInfo('frmInstrumentDetails');
        const data = data1.instrumentDetails.instrumentDetails;
        const orderData = navManager.getCustomInfo('frmInstrumentOrder');
        let instrumentData = "";
        if (data1.instrumentDetails.instrumentMinimal[0]) {
            instrumentData = data1.instrumentDetails.instrumentMinimal[0];
            this.view.lblInstrumentName.text = instrumentData.instrumentName;
        } else if (data1.instrumentDetails.instrumentMinimal) {
            instrumentData = data1.instrumentDetails.instrumentMinimal;
            this.view.lblInstrumentName.text = instrumentData.instrumentName;
        } else if (orderData !== undefined) {
            this.view.lblInstrumentName.text = orderData.description;
        } else {
            instrumentData = data1.response;
            this.view.lblInstrumentName.text = instrumentData.description;
        }
        //         if(data1.response !== undefined){
        //         var currentPosition=data1.response;
        //         this.view.lblInstrumentName.text = currentPosition.description;
        //         }
        //         else{
        // 		this.view.lblInstrumentName.text = orderData.description;
        //         }
        var quantity = orderData.quantity;
        var marketData = scope_WealthPresentationController.marketOrder;
        //this.view.lblInstrumentName.text = data.instrumentName;
        this.view.lblOrderModeVal.text = orderData.order;
        this.view.lblQuantityValue.text = quantity.toString();
        this.view.lblOrderTypeVal.text = orderData.orderType;
        // this.view.lblCurrentPriceVal.text = orderData.marketPrice;
        this.view.lblValidityVal.text = (orderData.validity === "GTD" || orderData.validity == "Day Order") ? "Day Order" : "Good Till Canceled";
        this.view.lblEstimatedVal.text = formatUtil.formatAmountandAppendCurrencySymbol(orderData.netAmount, orderData.tradeCurrency);
        // Fees to be taken from Service response
        this.view.lblTaxFeesVal.text = formatUtil.formatAmountandAppendCurrencySymbol(marketData.fees, orderData.tradeCurrency);
        if (orderData.orderType === this.ORDER_TYPE.LIMIT || orderData.orderType === this.ORDER_TYPE.STOPLIMIT) {
            this.view.lblLimitPriceVal.text = formatUtil.formatAmountandAppendCurrencySymbol(orderData.limitPrice, orderData.tradeCurrency);
        }
        if (orderData.orderType === this.ORDER_TYPE.STOPLOSS || orderData.orderType === this.ORDER_TYPE.STOPLIMIT) {
            this.view.lblStopPrice.text = orderData.orderType === this.ORDER_TYPE.STOPLOSS ? 'Stop Loss:' : 'Stop Price:'
                //const stopText = orderData.orderType === this.ORDER_TYPE.STOPLIMIT ? orderData.stopPrice : orderData.stopLoss;
            this.view.lblStopPriceVal.text = formatUtil.formatAmountandAppendCurrencySymbol(orderData.price, orderData.tradeCurrency);
        }
    },
    onViewOrder: function() {
        var type = "open";
        var today = new Date();
        var orderId;
        if (scope_WealthPresentationController.orderList.length === 0) {
            orderId = null;
        } else {
            orderId = scope_WealthPresentationController.orderList.toString();
        }
        var previousDate = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
        var startDate = previousDate.getFullYear() + '-' + ('0' + (previousDate.getMonth() + 1)).slice(-2) + '-' + ('0' + previousDate.getDate()).slice(-2);
        var endDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
        var params = {
            "portfolioId": scope_WealthPresentationController.portfolioId,
            "orderId": orderId,
            "sortBy": "description",
            "type": type,
            "startDate": "2018-12-06",
            "endDate": endDate,
            "searchByInstrumentName": ""
        }
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        var orderList = wealthModule.getOrdersDetails(params);
        scope_WealthPresentationController.isPortfolio = true;
        scope_WealthPresentationController.isDateRange = false;
        wealthModule.commonFunctionForNavigation("frmOrders");
    },
    onClose: function() {
        var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
        wealthMod.setVerifyFlow(false);
        wealthMod.clearWealthData();
        var controller = applicationManager.getPresentationUtility().getController('frmPlaceOrder', true);
        if (controller.watchlistFlow === true) {
            var ntf = new kony.mvc.Navigation("frmWatchlist");
            ntf.navigate();
        } else {
            var params = {
                "portfolioId": scope_WealthPresentationController.portfolioId,
                "navPage": "Portfolio",
                "graphDuration": "OneY"
            };
            wealthMod.getPortfolioAndGraphDetails(params);
        }
    }
});
define("WealthModule/frmInstrumentOrderAckControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d8ae24e173ff440ca773b52ba97a0525: function AS_Form_d8ae24e173ff440ca773b52ba97a0525(eventobject) {
        var self = this;
        this.init();
    }
});
define("WealthModule/frmInstrumentOrderAckController", ["WealthModule/userfrmInstrumentOrderAckController", "WealthModule/frmInstrumentOrderAckControllerActions"], function() {
    var controller = require("WealthModule/userfrmInstrumentOrderAckController");
    var controllerActions = ["WealthModule/frmInstrumentOrderAckControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
