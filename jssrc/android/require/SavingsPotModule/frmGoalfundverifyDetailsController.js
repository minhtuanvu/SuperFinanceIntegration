define("SavingsPotModule/userfrmGoalfundverifyDetailsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "NO", currentForm);
    },
    preShow: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.setVisibility(false);
        }
        this.view.imgChevron.onTouchEnd = this.navAmount;
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.customHeader.flxBack.onClick = this.onBack;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        this.setDataToForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setDataToForm: function() {
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var potName = SavingsPotMod.presentationController.getSavingsPotName();
        var fromDetails = SavingsPotMod.presentationController.getMaskedAccountName();
        this.view.lblFromValue.text = fromDetails;
        this.view.lblToValue.text = potName;
        var budgetDetails = SavingsPotMod.presentationController.getFundWithDrawDetails();
        var formatUtil = applicationManager.getFormatUtilManager();
        var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
        var amount;
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
            amount = budgetDetails.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        } else {
            amount = formatUtil.formatAmount(budgetDetails.amount);
        }
        this.view.lblFundAmountValue.text = currencySymbol + amount;
    },
    navAmount: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.initializeStateData(true, "frmGoalfundverifyDetails");
        SavingsPotMod.commonFunctionForNavigation("frmGoalfundAmount");
    },
    continueOnClick: function() {
        var amount;
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
            amount = this.view.lblFundAmountValue.text;
            amount = amount.replace(/[\\.]+/g, "");
            amount = amount.replace(",", ".");
        } else {
            amount = this.view.lblFundAmountValue.text.replace(/[, ]+/g, "");
        }
        var params = {
            "amount": amount.slice(1),
            "isCreditDebit": "Credit"
        }
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.savingspotFund(params);
    },
    onCancelClick: function() {
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var type = SavingsPotMod.presentationController.getSavingsType();
        SavingsPotMod.presentationController.clearFundWithdrawData();
        if (type === "Goal") {
            var navManager = applicationManager.getNavigationManager();
            navManager.navigateTo("frmSavingsGoalViewDetails");
        } else if (type === "Budget") {
            var navManager = applicationManager.getNavigationManager();
            navManager.navigateTo("frmBudgetPotDetails");
        }
    },
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    }
});
define("SavingsPotModule/frmGoalfundverifyDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_fed9eeb5e345417ebd5f5e60eec83d0d: function AS_Form_fed9eeb5e345417ebd5f5e60eec83d0d(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_fce4e45070e44c198f9cab2601a5dfea: function AS_Form_fce4e45070e44c198f9cab2601a5dfea(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_acfaa711305e4ca3a7ad96a5c80b9b7d: function AS_BarButtonItem_acfaa711305e4ca3a7ad96a5c80b9b7d(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("SavingsPotModule/frmGoalfundverifyDetailsController", ["SavingsPotModule/userfrmGoalfundverifyDetailsController", "SavingsPotModule/frmGoalfundverifyDetailsControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmGoalfundverifyDetailsController");
    var controllerActions = ["SavingsPotModule/frmGoalfundverifyDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
