define("SavingsPotModule/userfrmGoalFundAckController", {
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
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        var type = SavingsPotMod.getSavingsType();
        if (type === "Goal") {
            this.view.btnDashboard.text = "Back To Savings Goal";
        } else {
            this.view.btnDashboard.text = "Back To Savings Budget";
        }
        this.view.btnDashboard.onClick = this.continueOnClick;
        this.setDataToForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setDataToForm: function() {
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var budgetDetails = SavingsPotMod.presentationController.getFundWithDrawDetails();
        var potName = SavingsPotMod.presentationController.getSavingsPotName();
        var fromDetails = SavingsPotMod.presentationController.getMaskedAccountName();
        var formatUtil = applicationManager.getFormatUtilManager();
        var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
        var amount;
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
            amount = budgetDetails.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        } else {
            amount = formatUtil.formatAmount(budgetDetails.amount);
        }
        this.view.lblFundAmountValue.text = currencySymbol + amount;
        this.view.lblToValue.text = potName;
        this.view.lblFromValue.text = fromDetails;
        var today = new Date();
        var month = today.getMonth() + 1;
        var date = today.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (date < 10) {
            date = "0" + date;
        }
        var createdDate = month + "/" + date + "/" + today.getFullYear();
        this.view.lblDateValue.text = createdDate;
    },
    continueOnClick: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        var type = SavingsPotMod.getSavingsType();
        SavingsPotMod.clearFundWithdrawData();
        SavingsPotMod.clearCreateData();
        var accountsID = SavingsPotMod.getAccountId();
        SavingsPotMod.getMySavingsPot(accountsID, type);
    }
});
define("SavingsPotModule/frmGoalFundAckControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ee19645582df4362a31bd6d514f0ba87: function AS_Form_ee19645582df4362a31bd6d514f0ba87(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i5aea1670cf94a089f3b7e6141fdb59d: function AS_Form_i5aea1670cf94a089f3b7e6141fdb59d(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("SavingsPotModule/frmGoalFundAckController", ["SavingsPotModule/userfrmGoalFundAckController", "SavingsPotModule/frmGoalFundAckControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmGoalFundAckController");
    var controllerActions = ["SavingsPotModule/frmGoalFundAckControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
