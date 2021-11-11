define("WealthModule/userfrmViewOrderHistoryDetailsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxStopPrice.isVisible = false;
        this.view.flxLimitPrice.isVisible = false;
        this.view.flxPrice.isVisible = false;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        var OrderHistoryDetail = navManager.getCustomInfo("frmViewOrderHistoryDetails");
        var OrderHistory = OrderHistoryDetail.response;
        this.setDataToOrderHistoryDetail(OrderHistory);
        this.initActions();
    },
    initActions: function() {
        this.view.customHeader.flxBack.onTouchEnd = this.onBack;
    },
    postShow: function() {},
    onBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.navigateTo("frmOrders");
    },
    setDataToOrderHistoryDetail: function(orderDetail) {
        var forUtility = applicationManager.getFormatUtilManager();
        var tradeDateObj = forUtility.getDateObjectfromString(orderDetail.tradeDate);
        var formattedTradeDate = forUtility.getFormatedDateString(tradeDateObj, forUtility.getApplicationDateFormat());
        this.view.lblInstrument.text = orderDetail.description;
        this.view.lblTradeDateVal.text = formattedTradeDate;
        this.view.lblTypeVal.text = orderDetail.orderType;
        this.view.lblStatusVal.text = orderDetail.status;
        this.view.lblQuantityVal.text = orderDetail.quantity;
        this.view.lblOrderRefValue.text = orderDetail.orderReference;
        this.view.lblOrderRefId.text = kony.i18n.getLocalizedString("i18n.konybb.common.referenceId") + ":";
        this.view.lblType.text = kony.i18n.getLocalizedString("i18n.wealth.type");
        this.view.lblQuantity.text = kony.i18n.getLocalizedString("i18n.wealth.quantity");
        this.view.lblStatus.text = kony.i18n.getLocalizedString("kony.mb.achfiledetail.status") + ":";
        if (orderDetail.status === "Completed" && orderDetail.orderExecutionPrice !== "") {
            var formattedPriceVal = forUtility.formatAmountandAppendCurrencySymbol(orderDetail.orderExecutionPrice, orderDetail.referenceCurrency);
            this.view.lblPriceVal.text = formattedPriceVal;
            this.view.lblPrice.text = kony.i18n.getLocalizedString("i18n.wealth.price");
            this.view.flxPrice.isVisible = true;
        }
        if (orderDetail.stopPrice !== "") {
            var formattedStopPriceVal = forUtility.formatAmountandAppendCurrencySymbol(orderDetail.stopPrice, orderDetail.referenceCurrency);
            this.view.lblStopPriceVal.text = formattedStopPriceVal;
            this.view.lblStopPrice.text = kony.i18n.getLocalizedString("i18n.wealth.stopPrice");
            this.view.flxStopPrice.isVisible = true;
        }
        if (orderDetail.limitPrice !== "") {
            var formattedLimitPriceVal = forUtility.formatAmountandAppendCurrencySymbol(orderDetail.limitPrice, orderDetail.referenceCurrency);
            this.view.lblLimitPriceVal.text = formattedLimitPriceVal;
            this.view.lblLimitPrice.text = kony.i18n.getLocalizedString("i18n.wealth.limitPrice");
            this.view.flxLimitPrice.isVisible = true;
        }
    }
});
define("WealthModule/frmViewOrderHistoryDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e6fc7789ae434d4bba39da1265d8cbbf: function AS_Form_e6fc7789ae434d4bba39da1265d8cbbf(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a8e4dcd2df294c94955ea74ebadc409e: function AS_Form_a8e4dcd2df294c94955ea74ebadc409e(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_hde63d2347da463ebd5008cb3cd94351: function AS_Form_hde63d2347da463ebd5008cb3cd94351(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_c91fd89065684091a03df6ad5f871cac: function AS_BarButtonItem_c91fd89065684091a03df6ad5f871cac(eventobject) {
        var self = this;
        this.onBack();
    }
});
define("WealthModule/frmViewOrderHistoryDetailsController", ["WealthModule/userfrmViewOrderHistoryDetailsController", "WealthModule/frmViewOrderHistoryDetailsControllerActions"], function() {
    var controller = require("WealthModule/userfrmViewOrderHistoryDetailsController");
    var controllerActions = ["WealthModule/frmViewOrderHistoryDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
