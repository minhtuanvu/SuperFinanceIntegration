define("WealthModule/userfrmPlaceOrderVerifyDetailsController", {
    ORDER_TYPE: {
        MARKET: 'Market',
        LIMIT: 'Limit',
        STOPLOSS: 'Stop Loss',
        STOPLIMIT: 'Stop Limit'
    },
    VALIDITY: {
        DAYORDER: 'Day Order',
        GOODTILL: 'Good Till Cancelled'
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.setVisibility(false);
            this.view.flxMainContainer.top = "0dp";
        } else {
            this.view.flxHeader.setVisibility(true);
        }
    },
    postShow: function() {
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        const orderData = navManager.getCustomInfo('frmInstrumentOrder');
        if (orderData.orderType === this.ORDER_TYPE.LIMIT) {
            this.view.flxSeparator5.setVisibility(true);
            this.view.flxSeparator6.setVisibility(false);
            this.view.flxLimitPrice.setVisibility(true);
            this.view.flxStopPrice.setVisibility(false);
        } else if (orderData.orderType === this.ORDER_TYPE.STOPLOSS) {
            this.view.flxSeparator5.setVisibility(false);
            this.view.flxSeparator6.setVisibility(true);
            this.view.flxLimitPrice.setVisibility(false);
            this.view.flxStopPrice.setVisibility(true);
        } else if (orderData.orderType === this.ORDER_TYPE.STOPLIMIT) {
            this.view.flxSeparator5.setVisibility(true);
            this.view.flxSeparator6.setVisibility(true);
            this.view.flxLimitPrice.setVisibility(true);
            this.view.flxStopPrice.setVisibility(true);
        } else { //For ordertype MARKET:
            this.view.flxSeparator5.setVisibility(false);
            this.view.flxSeparator6.setVisibility(false);
            this.view.flxLimitPrice.setVisibility(false);
            this.view.flxStopPrice.setVisibility(false);
        }
        this.checkPermissions();
        this.setUIData();
    },
    checkPermissions: function() {
        this.view.btnContinue.setVisibility(applicationManager.getConfigurationManager().checkUserPermission("WEALTH_ORDER_MGMT_ORDER_ACKNOWLEDGEMENT_VIEW"));
    },
    initActions: function() {
        this.view.customHeader.flxBack.onTouchEnd = this.onBack;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
        this.view.btnContinue.onClick = this.confirmOnClick;
        this.view.imgInfo.onTouchEnd = this.onClickInfo;
        this.view.flxNo.onTouchEnd = this.onClose;
    },
    onClickInfo: function() {
        this.view.flxInfo.isVisible = true;
        this.view.flxHeader.setEnabled(false);
        this.view.flxbtnTransfer.setEnabled(false);
    },
    onClose: function() {
        this.view.flxInfo.isVisible = false;
        this.view.flxHeader.setEnabled(true);
        this.view.flxbtnTransfer.setEnabled(true);
    },
    setUIData: function() {
        var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
        var formatUtil = applicationManager.getFormatUtilManager();
        // var data = wealthMod.getWealthObject();
        var navManager = applicationManager.getNavigationManager();
        const data1 = navManager.getCustomInfo('frmInstrumentDetails');
        const data = data1.instrumentDetails.instrumentDetails;
        const orderData = navManager.getCustomInfo('frmInstrumentOrder');
        var quantity = orderData.quantity;
        var marketData = scope_WealthPresentationController.marketOrder;
        //	this.view.lblInstrumentVal.text = data.instrumentName;
        if (data1.response !== undefined) {
            var currentPosition = data1.response;
            this.view.lblInstrumentVal.text = currentPosition.description;
        } else {
            this.view.lblInstrumentVal.text = orderData.description;
        }
        this.view.lblOrderVal.text = orderData.order;
        this.view.lblQuantityVal.text = quantity.toString();
        this.view.lblOrderTypeVal.text = orderData.orderType;
        this.view.lblCurrentPriceVal.text = formatUtil.formatAmountandAppendCurrencySymbol(scope_WealthPresentationController.lastPrice, orderData.tradeCurrency);
        this.view.lblValidityVal.text = (orderData.validity === "GTD" || orderData.validity === "Day Order") ? "Day Order" : "Good Till Canceled";
        this.view.lblAmountVal.text = formatUtil.formatAmountandAppendCurrencySymbol(orderData.netAmount, orderData.tradeCurrency);
        // Fees to be taken from Service response
        this.view.lblFeesVal.text = formatUtil.formatAmountandAppendCurrencySymbol(marketData.fees, orderData.tradeCurrency);
        if (orderData.orderType === this.ORDER_TYPE.LIMIT || orderData.orderType === this.ORDER_TYPE.STOPLIMIT) {
            this.view.lblLimitPriceVal.text = formatUtil.formatAmountandAppendCurrencySymbol(orderData.limitPrice, orderData.tradeCurrency);
        }
        if (orderData.orderType === this.ORDER_TYPE.STOPLOSS || orderData.orderType === this.ORDER_TYPE.STOPLIMIT) {
            this.view.lblStopPrice.text = orderData.orderType === this.ORDER_TYPE.STOPLOSS ? 'Stop Loss:' : 'Stop Price:'
                //const stopText = orderData.orderType === this.ORDER_TYPE.STOPLIMIT ? orderData.stopPrice : orderData.stopLoss;
            this.view.lblStopPriceVal.text = formatUtil.formatAmountandAppendCurrencySymbol(orderData.price, orderData.tradeCurrency);
        }
    },
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    cancelOnClick: function() {
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
            var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
            wealthModule.getPortfolioAndGraphDetails(params);
        }
    },
    confirmOnClick: function() {
        var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
        var data = wealthMod.getWealthObject();
        var nav = applicationManager.getNavigationManager();
        let orderData = nav.getCustomInfo('frmInstrumentOrder');
        orderData.validate_only = "";
        let tempMode = orderData.order;
        let tempType = orderData.orderType;
        orderData.order = (tempMode.length === 4) ? tempMode.toUpperCase().slice(0, -1) : tempMode.toUpperCase();
        orderData.orderType = tempType.toUpperCase();
        wealthMod.createMarketOrder(orderData);
        orderData.order = tempMode;
        orderData.orderType = tempType;
        nav.setCustomInfo('frmInstrumentOrder', orderData);
        /*var param={
		  "buyCurrency":data.buyCurrency,
		  "sellCurrency":data.sellCurrency,
		  "buyAmount":data.buyAmount,
		  "sellAmount":data.sellAmount
		}
      
		wealthMod.createOrder(param);*/
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("WealthModule/frmPlaceOrderVerifyDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ie14c043936c4bcf9bfc7f237013c833: function AS_Form_ie14c043936c4bcf9bfc7f237013c833(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_af4baa43c28f4c2298133357c38fa0fa: function AS_Form_af4baa43c28f4c2298133357c38fa0fa(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_ef5f2fe2a7ba4e51b0e7d24eaabe565c: function AS_Form_ef5f2fe2a7ba4e51b0e7d24eaabe565c(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_b8e0fc2cb9b74bffa676854e48c9dee0: function AS_BarButtonItem_b8e0fc2cb9b74bffa676854e48c9dee0(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("WealthModule/frmPlaceOrderVerifyDetailsController", ["WealthModule/userfrmPlaceOrderVerifyDetailsController", "WealthModule/frmPlaceOrderVerifyDetailsControllerActions"], function() {
    var controller = require("WealthModule/userfrmPlaceOrderVerifyDetailsController");
    var controllerActions = ["WealthModule/frmPlaceOrderVerifyDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
