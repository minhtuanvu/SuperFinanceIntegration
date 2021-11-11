define("SavingsPotModule/userfrmBudgetAcknowledgementController", {
    init: function() {},
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
    },
    initActions: function() {
        this.view.customHeader.flxBack.onClick = this.goBack;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        this.view.lblSkip.onTouchEnd = this.viewBudget;
        this.view.btnFund.onClick = this.fundNow;
        this.setDataToForm();
        this.checkPermissions();
    },
    postShow: function() {},
    setDataToForm: function() {
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var budgetDetails = SavingsPotMod.presentationController.getBudgetDetails();
        var fromDetails = SavingsPotMod.presentationController.getMaskedAccountName();
        var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
        this.view.lblBudgetAn.text = budgetDetails.potName;
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
            budgetDetails.targetAmount = budgetDetails.targetAmount.replace(".", ",");
            this.view.lblAmountAn.text = currencySymbol + budgetDetails.targetAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        } else {
            this.view.lblAmountAn.text = currencySymbol + budgetDetails.targetAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        this.view.lblAccAn.text = fromDetails;
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
    /*Function to show/hide funding options based on user permissions*/
    checkPermissions: function() {
        var self = this;
        var FundBudgetPotPermission = applicationManager.getConfigurationManager().checkUserPermission("BUDGET_POT_ADHOC_FUND");
        if (FundBudgetPotPermission) {
            self.view.btnSavingsPot.isVisible = false;
        } else {
            self.view.btnSavingsPot.isVisible = true;
            self.view.btnSavingsPot.onClick = self.continueOnClick;
            self.view.btnFund.isVisible = false;
            self.view.lblSkip.isVisible = false;
        }
    },
    continueOnClick: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.clearCreateData();
        var accountsID = SavingsPotMod.getAccountId();
        SavingsPotMod.getAllSavingsPot(accountsID);
    },
    goBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    onCancelClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmSavingsType");
    },
    viewBudget: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.clearCreateData();
        var accountsID = SavingsPotMod.getAccountId();
        SavingsPotMod.getAllSavingsPot(accountsID);
    },
    fundNow: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmBudgetInitiateTransferDetails");
    }
});
define("SavingsPotModule/frmBudgetAcknowledgementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ee171ca1c54445828b461c4029a34f86: function AS_Form_ee171ca1c54445828b461c4029a34f86(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b385c76594b34ba1a7e9781c2b9fd758: function AS_Form_b385c76594b34ba1a7e9781c2b9fd758(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_f71a0fe20ecc416eaa4ead229219da1e: function AS_Form_f71a0fe20ecc416eaa4ead229219da1e(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("SavingsPotModule/frmBudgetAcknowledgementController", ["SavingsPotModule/userfrmBudgetAcknowledgementController", "SavingsPotModule/frmBudgetAcknowledgementControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmBudgetAcknowledgementController");
    var controllerActions = ["SavingsPotModule/frmBudgetAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
