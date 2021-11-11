define("SavingsPotModule/userfrmBudgetInitiateTransferAckController", {
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
        this.view.btnFund.onClick = this.continueOnClick;
        this.setDataToForm();
    },
    postShow: function() {},
    setDataToForm: function() {
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var flag = SavingsPotMod.presentationController.getInitiateTransfer();
        var budgetDetails;
        if (flag) {
            var navManager = applicationManager.getNavigationManager();
            budgetDetails = navManager.getCustomInfo("frmBudgetPotDetails");
            if (!budgetDetails.fundAmount) {
                budgetDetails.fundAmount = budgetDetails.targetAmount;
            }
        } else {
            budgetDetails = SavingsPotMod.presentationController.getBudgetDetails();
        }
        var fromDetails = SavingsPotMod.presentationController.getMaskedAccountName();
        this.view.lblBudgetAn.text = budgetDetails.potName;
        var formatUtil = applicationManager.getFormatUtilManager();
        var amount;
        var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
            amount = budgetDetails.targetAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        } else {
            amount = formatUtil.formatAmount(budgetDetails.targetAmount);
        }
        this.view.lblAmountAn.text = currencySymbol + amount;
        this.view.lblAccAn.text = fromDetails;
        if (budgetDetails.fundAmount == undefined) {
            this.view.lblTransferAmountValue.text = currencySymbol + amount;
        } else {
            var fundAmount;
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                fundAmount = formatUtil.formatAmount(budgetDetails.fundAmount.replace(",", "."));
            } else {
                fundAmount = formatUtil.formatAmount(budgetDetails.fundAmount);
            }
            this.view.lblTransferAmountValue.text = currencySymbol + fundAmount;
        }
        var today = new Date();
        var month = today.getMonth() + 1;
        var date = today.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (date < 10) {
            date = "0" + date;
        }
        var startDate = month + "/" + date + "/" + today.getFullYear();
        this.view.lblDateAn.text = startDate;
    },
    continueOnClick: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.clearCreateData();
        SavingsPotMod.setInitiateTransfer("");
        var accountsID = SavingsPotMod.getAccountId();
        SavingsPotMod.getAllSavingsPot(accountsID);
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("SavingsPotModule/frmBudgetInitiateTransferAckControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_g6ee4900cf2148b291c9d899a6827e57: function AS_Form_g6ee4900cf2148b291c9d899a6827e57(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c4f18440cb7142d18e8ad9b865d3c6e0: function AS_Form_c4f18440cb7142d18e8ad9b865d3c6e0(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_icf6f0f50b9a4dfda37ebf21bcfb0b22: function AS_Form_icf6f0f50b9a4dfda37ebf21bcfb0b22(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("SavingsPotModule/frmBudgetInitiateTransferAckController", ["SavingsPotModule/userfrmBudgetInitiateTransferAckController", "SavingsPotModule/frmBudgetInitiateTransferAckControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmBudgetInitiateTransferAckController");
    var controllerActions = ["SavingsPotModule/frmBudgetInitiateTransferAckControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
