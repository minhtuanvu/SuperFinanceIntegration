define("SavingsPotModule/userfrmEditBudgetController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
    },
    postShow: function() {},
    initActions: function() {
        this.view.customHeader.flxBack.onClick = this.onBack;
        this.view.btnSaveConfirm.onClick = this.continueOnClick;
        this.view.btnClose.onClick = this.closeOnClick;
        this.view.flxFromImage.onTouchEnd = this.goalName;
        this.view.flxAmountImage.onTouchEnd = this.goalAmount;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        this.view.flxError.setVisibility(false);
        this.setDataToForm();
        this.checkPermissions();
    },
    setDataToForm: function() {
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var navManager = applicationManager.getNavigationManager();
        var budgetDetails = navManager.getCustomInfo("frmBudgetPotDetails");
        var formatUtil = applicationManager.getFormatUtilManager();
        var currencyCode = SavingsPotMod.presentationController.getCurrencyCode();
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
            budgetDetails.targetAmount = budgetDetails.targetAmount.replace(",", ".");
        } else {
            budgetDetails.targetAmount = budgetDetails.targetAmount.replace(/[, ]+/g, "");
        }
        this.view.lblGoalNameValue.text = budgetDetails.potName;
        this.view.lblAmountValue.text = formatUtil.formatAmountandAppendCurrencySymbol(budgetDetails.targetAmount, currencyCode);
        this.view.lblCurrBalanceValue.text = formatUtil.formatAmountandAppendCurrencySymbol(budgetDetails.availableBalance, currencyCode);
    },
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    goalName: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.setSavingsType("editBudgetName");
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmBudgetName");
    },
    goalAmount: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.setSavingsType("editBudgetAmount");
        var navManager = applicationManager.getNavigationManager();
        var budgetDetails = navManager.getCustomInfo("frmBudgetPotDetails");
        var formatUtil = applicationManager.getFormatUtilManager();
        var amount = formatUtil.formatAmount(budgetDetails.targetAmount);
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
            budgetDetails.targetAmount = amount.replace(/[. ]+/g, "");
        } else {
            budgetDetails.targetAmount = amount.replace(/[, ]+/g, "");
        }
        navManager.setCustomInfo("frmBudgetPotDetails", budgetDetails);
        navManager.navigateTo("frmBudgetfundAmount");
    },
    /*Function to show/hide close budget pot button based on user permissions*/
    checkPermissions: function() {
        var self = this;
        var closeBudgetPotPermission = applicationManager.getConfigurationManager().checkUserPermission("BUDGET_POT_CLOSE");
        (closeBudgetPotPermission) ? self.view.btnClose.isVisible = true: self.view.btnClose.isVisible = false;
    },
    continueOnClick: function() {
        var targetAmount;
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
            targetAmount = this.view.lblAmountValue.text.replace(/[. ]+/g, "");
            targetAmount = targetAmount.replace(",", ".");
        } else {
            targetAmount = this.view.lblAmountValue.text.replace(/[, ]+/g, "");
        }
        var budgetAmount = parseInt(this.deformatAmount(this.view.lblCurrBalanceValue.text.trim()));
        var currentbalance = parseInt(this.deformatAmount(targetAmount));
        if (currentbalance <= budgetAmount) {
            this.view.flxError.setVisibility(true);
        } else {
            var potName = this.view.lblGoalNameValue.text;
            var params = {
                "targetAmount": targetAmount.slice(1),
                "potName": potName,
                "potType": "Budget"
            };
            this.view.flxError.setVisibility(false);
            var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
            SavingsPotMod.updateSavingsBudget(params);
        }
    },
    deformatAmount: function(amount) {
        return applicationManager.getFormatUtilManager().deFormatAmount(amount);
    },
    closeOnClick: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        var navManager = applicationManager.getNavigationManager();
        var budgetDetails = navManager.getCustomInfo("frmBudgetPotDetails");
        var potName = this.view.lblGoalNameValue.text;
        var accountName = SavingsPotMod.getMaskedAccountName();
        if (budgetDetails.availableBalance > "0") {
            var message = "Your Budget pot " + potName + " is not zero, do you want to move the balance to Primary Account " + accountName + " and close";
        } else {
            var message = "Do you want to close your Savings Budget " + potName;
        }
        var basicProperties = {
            "message": message,
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": "Close Savings Budget",
            "noLabel": "NO",
            "yesLabel": "YES",
            "alertIcon": "appicon.png",
            "alertHandler": function(response) {
                if (response) {
                    var savingsPotId = SavingsPotMod.getSavingsPotId();
                    var params = {
                        "savingsPotId": savingsPotId
                    }
                    SavingsPotMod.closeSavingsPot(params);
                } else {
                    kony.print("Dismiss");
                }
            }
        };
        applicationManager.getPresentationUtility().showAlertMessage(basicProperties, {});
    },
    onCancelClick: function() {
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        SavingsPotMod.presentationController.setSavingsFlow("");
        SavingsPotMod.presentationController.clearCreateData();
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmBudgetPotDetails");
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("SavingsPotModule/frmEditBudgetControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ae973ad98d444ecf8455739d4340225c: function AS_Form_ae973ad98d444ecf8455739d4340225c(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f906817d5cf34284b66c0605de3e9a95: function AS_Form_f906817d5cf34284b66c0605de3e9a95(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_j15acf0163dc4d108ddce635bcbdc540: function AS_Form_j15acf0163dc4d108ddce635bcbdc540(eventobject) {
        var self = this;
        this.preshow();
    },
    AS_BarButtonItem_d4793af4be60408d966e7bd1b33cdfb9: function AS_BarButtonItem_d4793af4be60408d966e7bd1b33cdfb9(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("SavingsPotModule/frmEditBudgetController", ["SavingsPotModule/userfrmEditBudgetController", "SavingsPotModule/frmEditBudgetControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmEditBudgetController");
    var controllerActions = ["SavingsPotModule/frmEditBudgetControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
