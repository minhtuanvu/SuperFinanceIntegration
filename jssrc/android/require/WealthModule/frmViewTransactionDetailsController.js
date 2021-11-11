define("WealthModule/userfrmViewTransactionDetailsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        var transactionDetail = navManager.getCustomInfo("frmViewTransactionDetails");
        var transDetail = transactionDetail.response;
        this.setDataToTransactionDetail(transDetail);
        this.initActions();
    },
    initActions: function() {
        this.view.customHeader.flxBack.onTouchEnd = this.onBack;
    },
    postShow: function() {},
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.navigateTo("frmTransactions");
    },
    setDataToTransactionDetail: function(transDetail) {
        //var amount=transDetail.limitPrice * transDetail.quantity;
        //var amount=transDetail.instrumentAmount;
        //var total=transDetail.total;
        var forUtility = applicationManager.getFormatUtilManager();
        var tradeDateObj = forUtility.getDateObjectfromString(transDetail.tradeDate);
        var valueDateObj = forUtility.getDateObjectfromString(transDetail.valueDate);
        var formattedTradeDate = forUtility.getFormatedDateString(tradeDateObj, forUtility.getApplicationDateFormat());
        var formattedValueDate = forUtility.getFormatedDateString(valueDateObj, forUtility.getApplicationDateFormat());
        var formattedAmount = forUtility.formatAmountandAppendCurrencySymbol(transDetail.instrumentAmount, transDetail.instrumentCurrency);
        var formattedPriceVal = forUtility.formatAmountandAppendCurrencySymbol(transDetail.limitPrice, transDetail.referenceCurrency);
        var formattedNetAmount = forUtility.formatAmountandAppendCurrencySymbol(transDetail.netAmount, transDetail.referenceCurrency);
        var formattedfees = forUtility.formatAmountandAppendCurrencySymbol(transDetail.fees, transDetail.referenceCurrency);
        var formattedTotal = forUtility.formatAmountandAppendCurrencySymbol(transDetail.total, transDetail.instrumentCurrency);
        this.view.lblInstrument.text = transDetail.description;
        this.view.lblTradeDateVal.text = formattedTradeDate;
        this.view.lblTypeVal.text = transDetail.orderType;
        this.view.lblQuantityVal.text = transDetail.quantity;
        this.view.lblPriceVal.text = formattedPriceVal;
        this.view.lblAmountVal.text = formattedAmount;
        this.view.lblExcahangeRateVal.text = transDetail.exchangeRate;
        this.view.lblnstrAmountVal.text = formattedNetAmount;
        this.view.lblValueDateVal.text = formattedValueDate;
        this.view.lblFeesVal.text = formattedfees;
        this.view.lblTotalVal.text = formattedTotal;
        this.view.lblTradeDate.text = kony.i18n.getLocalizedString("i18n.wealth.tradeDate");
        this.view.lblType.text = kony.i18n.getLocalizedString("i18n.wealth.orderType");
        this.view.lblQuantity.text = kony.i18n.getLocalizedString("i18n.wealth.quantity");
        this.view.lblPrice.text = kony.i18n.getLocalizedString("i18n.wealth.limitPrice");
        this.view.lblAmount.text = kony.i18n.getLocalizedString("i18n.wealth.amount");
        this.view.lblExchangeRate.text = kony.i18n.getLocalizedString("i18n.wealth.exchangeRate");
        this.view.lblnstrAmount.text = kony.i18n.getLocalizedString("i18n.wealth.amountInstr");
        this.view.lblValueDate.text = kony.i18n.getLocalizedString("i18n.wealth.valueDate");
        this.view.lblFees.text = kony.i18n.getLocalizedString("i18n.wealth.fees");
        this.view.lblTotal.text = kony.i18n.getLocalizedString("i18n.wealth.total");
    }
});
define("WealthModule/frmViewTransactionDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_af9b25e0474d4c2b97903aff11a677fa: function AS_Form_af9b25e0474d4c2b97903aff11a677fa(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_jc79290fae0e47c096e6154710044239: function AS_Form_jc79290fae0e47c096e6154710044239(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_hc48bc7c3ccb410bbb78d8b27c1ceb80: function AS_Form_hc48bc7c3ccb410bbb78d8b27c1ceb80(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_i246c0a34f7b42fb8fbc8dc8d0583441: function AS_BarButtonItem_i246c0a34f7b42fb8fbc8dc8d0583441(eventobject) {
        var self = this;
        this.onBack();
    }
});
define("WealthModule/frmViewTransactionDetailsController", ["WealthModule/userfrmViewTransactionDetailsController", "WealthModule/frmViewTransactionDetailsControllerActions"], function() {
    var controller = require("WealthModule/userfrmViewTransactionDetailsController");
    var controllerActions = ["WealthModule/frmViewTransactionDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
