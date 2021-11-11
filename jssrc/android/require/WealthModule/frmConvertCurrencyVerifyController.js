define("WealthModule/userfrmConvertCurrencyVerifyController", {
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
        this.setUIData();
        var WealthMod = applicationManager.getModulesPresentationController("WealthModule");
        WealthMod.setVerifyFlow(false);
    },
    initActions: function() {
        this.view.customHeader.flxBack.onTouchEnd = this.onBack;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
        this.view.flxFromImage.onTouchEnd = this.fromCurrencyType;
        this.view.flxFromAmountImage.onTouchEnd = this.fromCurrencyAmount;
        this.view.flxToImg.onTouchEnd = this.toCurrencyType;
        this.view.flxScheduleOnImg.onTouchEnd = this.scheduleOn;
        this.view.btnContinue.onClick = this.confirmOnClick;
    },
    setUIData: function() {
        var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
        var formatUtil = applicationManager.getFormatUtilManager();
        var data = wealthMod.getWealthObject();
        if (data.sellCurrency === data.buyCurrency) {
            this.view.btnContinue.setEnabled(false);
        } else {
            this.view.btnContinue.setEnabled(true);
        }
        var currency1 = data.sellCurrency.substr(0, 3);
        var currency2 = data.buyCurrency.substr(0, 3);
        this.view.lblFromValue.text = data.sellCurrency;
        this.view.lblFromAmountValue.text = formatUtil.formatAmountandAppendCurrencySymbol(data.sellAmount, currency1);
        this.view.lblToValue.text = data.buyCurrency;
        //this.view.lblToAmountValue.text=formatUtil.formatAmountandAppendCurrencySymbol(data.buyAmount,currency2);
        if (scope_WealthPresentationController.convertNowFlow === true) {
            this.view.lblConvertNow.text = kony.i18n.getLocalizedString("i18n.wealth.convertNow");
            this.view.flxScheduleOnImg.setVisibility(false);
            this.view.lblConvertNowValue.skin = "sknlbl424242ssp40px";
            this.view.lblConvertNowValue.right = "7dp";
            var today = new Date();
            this.view.lblConvertNowValue.text = String(today.getMonth() + 1).padStart(2, '0') + '/' + String(today.getDate()).padStart(2, '0') + '/' + today.getFullYear();
        } else {
            this.view.lblConvertNow.text = kony.i18n.getLocalizedString("i18n.wealth.scheduledon");
            this.view.flxScheduleOnImg.setVisibility(true);
            this.view.lblConvertNowValue.skin = "sknLbl4176A4SSPReg26px";
        }
        // if(wealthMod.getVerifyFlow()){
        var amount = parseFloat(data.sellAmount);
        var amount1 = parseFloat(scope_WealthPresentationController.currencyRate.marketRate);
        var result = amount * amount1;
        this.view.lblToAmountValue.text = formatUtil.formatAmountandAppendCurrencySymbol(result, currency2);
        //  }
    },
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.navigateTo('frmConvertCurrency');
    },
    cancelOnClick: function() {
        var params = {
            "portfolioId": scope_WealthPresentationController.portfolioId,
            "navPage": "Portfolio",
            "graphDuration": "OneY"
        };
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.getPortfolioAndGraphDetails(params);
    },
    fromCurrencyType: function() {
        var navigationMan = applicationManager.getNavigationManager();
        var WealthMod = applicationManager.getModulesPresentationController("WealthModule");
        WealthMod.setVerifyFlow(true);
        scope_WealthPresentationController.verify = true;
        //	WealthMod.initializeStateData(true, "frmConvertCurrencyVerify");
        navigationMan.navigateTo("frmSelectCurrency");
    },
    fromCurrencyAmount: function() {
        var navigationMan = applicationManager.getNavigationManager();
        var WealthMod = applicationManager.getModulesPresentationController("WealthModule");
        WealthMod.setVerifyFlow(true);
        scope_WealthPresentationController.verify = true;
        //WealthMod.initializeStateData(true, "frmConvertCurrencyVerify");
        navigationMan.navigateTo("frmConvertCurrency");
    },
    toCurrencyType: function() {
        var navigationMan = applicationManager.getNavigationManager();
        var WealthMod = applicationManager.getModulesPresentationController("WealthModule");
        WealthMod.setVerifyFlow(true);
        scope_WealthPresentationController.verify = true;
        //	WealthMod.initializeStateData(true, "frmConvertCurrencyVerify");
        navigationMan.navigateTo("frmToCurrency");
    },
    scheduleOn: function() {
        var WealthMod = applicationManager.getModulesPresentationController("WealthModule");
        WealthMod.setVerifyFlow(true);
        WealthMod.initializeStateData(true, "frmConvertCurrencyVerify");
        WealthMod.commonFunctionForNavigation("frmScheduleDate");
    },
    confirmOnClick: function() {
        var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
        var balData = {
            "currency": wealthMod.currency,
            "amount": wealthMod.amount
        };
        scope_WealthPresentationController.balanceArr.push(balData);
        if (scope_WealthPresentationController.addCurrency === true) {
            wealthMod.newAccountsArr.push(wealthMod.newAccount);
        } else {
            wealthMod.newAccount = {};
        }
        var data = wealthMod.getWealthObject();
        var param = {
            "buyCurrency": data.buyCurrency,
            "sellCurrency": data.sellCurrency,
            "buyAmount": data.buyAmount,
            "sellAmount": data.sellAmount
        }
        wealthMod.createOrder(param);
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("WealthModule/frmConvertCurrencyVerifyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a0e3a074613d4c8e9e2c778b44a964f6: function AS_Form_a0e3a074613d4c8e9e2c778b44a964f6(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ibba2772f2064e3fa9f42aa575d52d35: function AS_Form_ibba2772f2064e3fa9f42aa575d52d35(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_e886f3ec1fbb489a8ab4d951957380cc: function AS_Form_e886f3ec1fbb489a8ab4d951957380cc(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_f7561ed163914b12948fde6cbfd060e1: function AS_BarButtonItem_f7561ed163914b12948fde6cbfd060e1(eventobject) {
        var self = this;
        this.onBack();
    },
    AS_BarButtonItem_ec27e0e5ecea45ee9eb71590802e25d5: function AS_BarButtonItem_ec27e0e5ecea45ee9eb71590802e25d5(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("WealthModule/frmConvertCurrencyVerifyController", ["WealthModule/userfrmConvertCurrencyVerifyController", "WealthModule/frmConvertCurrencyVerifyControllerActions"], function() {
    var controller = require("WealthModule/userfrmConvertCurrencyVerifyController");
    var controllerActions = ["WealthModule/frmConvertCurrencyVerifyControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
