define("TransferModuleEurope/userfrmEuropeCreditCardDetailsController", {
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var transferModule = applicationManager.getModulesPresentationController("TransferModule");
        transferModule.commonFunctionForgoBack();
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
        this.setupUI();
        this.setupData();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onTouchEnd = scope.navigateCustomBack;
        this.view.customHeader.btnRight.onClick = scope.cancelOnClick;
        this.view.flxMinimumDue.onTouchEnd = scope.flxMinimumDueOnClick;
        this.view.flxStatementDue.onTouchEnd = scope.flxStatementDueOnClick;
        this.view.flxOutstandingBalance.onTouchEnd = scope.flxOutstandingBalanceOnClick;
        this.view.flxHowMuch.onTouchEnd = scope.flxHowMuchOnClick;
    },
    flxMinimumDueOnClick: function() {
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var navigationManager = applicationManager.getNavigationManager();
        var creditCardInfo = navigationManager.getCustomInfo("frmEuropeCreditCardDetails");
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.setTransactionAttribute("transactionCurrency", creditCardInfo["currencyCode"]);
        transferPresentationController.setAmount(creditCardInfo["minimumDue"]);
    },
    flxStatementDueOnClick: function() {
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var navigationManager = applicationManager.getNavigationManager();
        var creditCardInfo = navigationManager.getCustomInfo("frmEuropeCreditCardDetails");
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.setTransactionAttribute("transactionCurrency", creditCardInfo["currencyCode"]);
        transferPresentationController.setAmount(creditCardInfo["paymentDue"]);
    },
    flxOutstandingBalanceOnClick: function() {
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var navigationManager = applicationManager.getNavigationManager();
        var creditCardInfo = navigationManager.getCustomInfo("frmEuropeCreditCardDetails");
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.setTransactionAttribute("transactionCurrency", creditCardInfo["currencyCode"]);
        transferPresentationController.setAmount(creditCardInfo["outstandingBalance"]);
    },
    flxHowMuchOnClick: function() {
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var navigationManager = applicationManager.getNavigationManager();
        var creditCardInfo = navigationManager.getCustomInfo("frmEuropeCreditCardDetails");
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.setTransactionAttribute("transactionCurrency", creditCardInfo["currencyCode"]);
        transferPresentationController.commonFunctionForNavigation("frmEuropeTransferAmount");
    },
    setupUI: function() {
        var navigationManager = applicationManager.getNavigationManager();
        var creditCardInfo = navigationManager.getCustomInfo("frmEuropeCreditCardDetails");
        if (!creditCardInfo.minimumDue || creditCardInfo.minimumDue === "0.00" || creditCardInfo.minimumDue === "0" || creditCardInfo.minimumDue === "0.0") {
            this.view.lblByOne.isVisible = false;
            this.view.lblDateOne.isVisible = false;
            this.view.lblMinimumDue.skin = "sknB5C9DBSSP26px";
            this.view.lblMinDue.skin = "sknd0d0d0ssp26px";
            this.view.lblAmountOne.skin = "sknb8b8b8sspBold26px";
            this.view.flxMinimumDue.onTouchEnd = null;
        } else {
            this.view.lblByOne.isVisible = true;
            this.view.lblDateOne.isVisible = true;
            this.view.lblMinimumDue.skin = "sknMMBlueLabel";
            this.view.lblMinDue.skin = "sknLbla0a0a0SSP26px";
            this.view.lblAmountOne.skin = "sknLb665e66SSPBold26px";
        }
        if (!creditCardInfo.paymentDue || creditCardInfo.paymentDue === "0.00" || creditCardInfo.paymentDue === "0" || creditCardInfo.paymentDue === "0.0") {
            this.view.lblByTwo.isVisible = false;
            this.view.lblDateTwo.isVisible = false;
            this.view.lblStatementDue.skin = "sknB5C9DBSSP26px";
            this.view.lblPaymentDue.skin = "sknd0d0d0ssp26px";
            this.view.lblAmountTwo.skin = "sknb8b8b8sspBold26px";
            this.view.flxStatementDue.onTouchEnd = null;
        } else {
            this.view.lblByTwo.isVisible = true;
            this.view.lblDateTwo.isVisible = true;
            this.view.lblStatementDue.skin = "sknMMBlueLabel";
            this.view.lblPaymentDue.skin = "sknLbla0a0a0SSP26px";
            this.view.lblAmountTwo.skin = "sknLb665e66SSPBold26px";
        }
    },
    setupData: function() {
        var navigationManager = applicationManager.getNavigationManager();
        var creditCardInfo = navigationManager.getCustomInfo("frmEuropeCreditCardDetails");
        var forUtility = applicationManager.getFormatUtilManager();
        this.view.lblMinDue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.EuropeTransfer.MinimumDue") + ":";
        this.view.lblAmountOne.text = forUtility.formatAmountandAppendCurrencySymbol(creditCardInfo["minimumDue"], creditCardInfo["currencyCode"]);
        this.view.lblDateOne.text = creditCardInfo.dueDate;
        this.view.lblPaymentDue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.EuropeTransfer.PaymentDue") + ":";
        this.view.lblAmountTwo.text = forUtility.formatAmountandAppendCurrencySymbol(creditCardInfo["paymentDue"], creditCardInfo["currencyCode"]);
        this.view.lblDateTwo.text = creditCardInfo.dueDate;
        this.view.lblAmountThree.text = forUtility.formatAmountandAppendCurrencySymbol(creditCardInfo["outstandingBalance"], creditCardInfo["currencyCode"]);
    },
    cancelOnClick: function() {
        var transferModule = applicationManager.getModulesPresentationController("TransferModule");
        transferModule.cancelCommon();
    }
});
define("TransferModuleEurope/frmEuropeCreditCardDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ia705a6e10314ae19d4ea307cbffa874: function AS_Form_ia705a6e10314ae19d4ea307cbffa874(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e8e861b4f23a4041a00e2cbda538a1ae: function AS_Form_e8e861b4f23a4041a00e2cbda538a1ae(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_fbce55476735441e88f315973deb0fd9: function AS_Form_fbce55476735441e88f315973deb0fd9(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e75c4816156146de805238458baf8571: function AS_BarButtonItem_e75c4816156146de805238458baf8571(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_bb53b1432cd740db85bb55e9c39cff2e: function AS_BarButtonItem_bb53b1432cd740db85bb55e9c39cff2e(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModuleEurope/frmEuropeCreditCardDetailsController", ["TransferModuleEurope/userfrmEuropeCreditCardDetailsController", "TransferModuleEurope/frmEuropeCreditCardDetailsControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmEuropeCreditCardDetailsController");
    var controllerActions = ["TransferModuleEurope/frmEuropeCreditCardDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
