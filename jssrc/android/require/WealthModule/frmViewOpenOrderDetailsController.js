define("WealthModule/userfrmViewOpenOrderDetailsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxStopPrice.isVisible = false;
        this.view.flxLimitPrice.isVisible = false;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        var openOrderDetail = navManager.getCustomInfo("frmViewOpenOrderDetails");
        var openOrder = openOrderDetail.response;
        this.setDataToOpenOrderDetail(openOrder);
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
    setDataToOpenOrderDetail: function(openOrderDetail) {
        var forUtility = applicationManager.getFormatUtilManager();
        var tradeDateObj = forUtility.getDateObjectfromString(openOrderDetail.tradeDate);
        var formattedTradeDate = forUtility.getFormatedDateString(tradeDateObj, forUtility.getApplicationDateFormat());
        this.view.lblInstrument.text = openOrderDetail.description;
        this.view.lblOrderRefValue.text = openOrderDetail.orderReference;
        this.view.lblTradeDateVal.text = formattedTradeDate;
        this.view.lblTypeVal.text = openOrderDetail.orderType;
        this.view.lblQuantityVal.text = openOrderDetail.quantity;
        this.view.lblOrderRefId.text = kony.i18n.getLocalizedString("i18n.konybb.common.referenceId") + ":";
        this.view.lblType.text = kony.i18n.getLocalizedString("i18n.wealth.type");
        this.view.lblQuantity.text = kony.i18n.getLocalizedString("i18n.wealth.quantity");
        if (openOrderDetail.stopPrice !== "") {
            var formattedStopPriceVal = forUtility.formatAmountandAppendCurrencySymbol(openOrderDetail.stopPrice, openOrderDetail.referenceCurrency);
            this.view.lblStopPriceVal.text = formattedStopPriceVal;
            this.view.lblStopPrice.text = kony.i18n.getLocalizedString("i18n.wealth.stopPrice");
            this.view.flxStopPrice.isVisible = true;
        }
        if (openOrderDetail.limitPrice !== "") {
            var formattedLimitPriceVal = forUtility.formatAmountandAppendCurrencySymbol(openOrderDetail.limitPrice, openOrderDetail.referenceCurrency);
            this.view.lblLimitPriceVal.text = formattedLimitPriceVal;
            this.view.lblLimitPrice.text = kony.i18n.getLocalizedString("i18n.wealth.limitPrice");
            this.view.flxLimitPrice.isVisible = true;
        }
    }
});
define("WealthModule/frmViewOpenOrderDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b9e609ed0c694736bdc06f3b3ce2bd98: function AS_Form_b9e609ed0c694736bdc06f3b3ce2bd98(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e5e1865d864b42efbe366c210b02bd49: function AS_Form_e5e1865d864b42efbe366c210b02bd49(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_d777584fe56541c0ab4f87bc044b5b52: function AS_Form_d777584fe56541c0ab4f87bc044b5b52(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e1b0e84e67a34088a5d9fc929aa8c3b8: function AS_BarButtonItem_e1b0e84e67a34088a5d9fc929aa8c3b8(eventobject) {
        var self = this;
        this.onBack();
    }
});
define("WealthModule/frmViewOpenOrderDetailsController", ["WealthModule/userfrmViewOpenOrderDetailsController", "WealthModule/frmViewOpenOrderDetailsControllerActions"], function() {
    var controller = require("WealthModule/userfrmViewOpenOrderDetailsController");
    var controllerActions = ["WealthModule/frmViewOpenOrderDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
