define({

  init: function () {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preshow: function () {
    if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
      this.view.flxHeader.isVisible = true;
    }
    else {

      this.view.flxHeader.isVisible = false;
    }
    this.view.flxError.setVisibility(false);
    this.initActions();
  },
  postShow: function () {

  },
  initActions: function () {
    this.view.customHeader.flxBack.onClick = this.goBack;
    this.view.btnContinue.onClick = this.continueOnClick;
    this.view.flxTransferAmountImage.onTouchEnd = this.budgetAmount;
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
    this.setDataToForm();
  },
  setDataToForm: function () {
    var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
    var flag = SavingsPotMod.presentationController.getInitiateTransfer();
    var budgetDetails;
    if (flag) {
      var navManager = applicationManager.getNavigationManager();
      budgetDetails = navManager.getCustomInfo("frmBudgetPotDetails");
      if (!budgetDetails.fundAmount) {
        budgetDetails.fundAmount = budgetDetails.targetAmount;
      }

    }
    else {
      budgetDetails = SavingsPotMod.presentationController.getBudgetDetails();
    }

    var fromDetails = SavingsPotMod.presentationController.getMaskedAccountName();
    this.view.lblBudgetNameValue.text = budgetDetails.potName;
    var formatUtil = applicationManager.getFormatUtilManager();
    var amount;
    var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
    if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
      amount = formatUtil.formatAmount(budgetDetails.targetAmount.replace(",", "."));
    } else {
      amount = formatUtil.formatAmount(budgetDetails.targetAmount);
    }
    this.view.lblAmountValue.text = currencySymbol + amount;
    this.view.lblFromValue.text = fromDetails;
    if (budgetDetails.fundAmount == undefined) {
      this.view.lblTransferAmountValue.text = currencySymbol + amount;
    }
    else {
      var fundAmount;
      if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
        fundAmount = formatUtil.formatAmount(budgetDetails.fundAmount.replace(",", "."));
      }
      else {
        fundAmount = formatUtil.formatAmount(budgetDetails.fundAmount);
      }
      this.view.lblTransferAmountValue.text = currencySymbol + fundAmount;
    }
  },
  budgetAmount: function () {
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    SavingsPotMod.setSavingsType("budgetFund");
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmGoalfundAmount");
  },
  continueOnClick: function () {
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    var amount;
    if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
      amount = this.view.lblTransferAmountValue.text;
      amount = amount.replace(/[\\.]+/g, "");
      amount = amount.replace(",", ".");
    }
    else {
      amount = this.view.lblTransferAmountValue.text.replace(/[, ]+/g, "");
    }
    var flag = SavingsPotMod.getInitiateTransfer();
    if (flag) {
      var navManager = applicationManager.getNavigationManager();
      var budgetDetails = navManager.getCustomInfo("frmBudgetPotDetails");
      SavingsPotMod.setSavingsPotId(budgetDetails.savingsPotId);
      SavingsPotMod.setTransactPotId(budgetDetails.potAccountId);
    }
    var potAccountId = SavingsPotMod.getTransactPotId();
    var savingsPotId = SavingsPotMod.getSavingsPotId();
    var params = {
      "amount": amount.slice(1),
      "isCreditDebit": "Credit",
      "savingsPotId": savingsPotId,
      "potAccountId": potAccountId
    }

    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    var AccountName = SavingsPotMod.getMaskedAccountName();
    var availableBalance = SavingsPotMod.getAvailableBalance();
    var fundAmount = amount.slice(1);
    if (parseFloat(fundAmount) > parseFloat(availableBalance)) {
      this.view.flxError.setVisibility(true);
      this.view.lblError.text = "You have insufficient Balance in your" + " " + AccountName;
    } else {
      this.view.flxError.setVisibility(false);

      SavingsPotMod.initiateFund(params);
    }
  },
  onCancelClick: function () {
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    SavingsPotMod.clearCreateData();
    var flag = SavingsPotMod.getInitiateTransfer();
    var navManager = applicationManager.getNavigationManager();
    if (flag) {
      SavingsPotMod.setInitiateTransfer("");

      var budgetDetails = navManager.getCustomInfo("frmBudgetPotDetails");
      budgetDetails.fundAmount = "";
      navManager.setCustomInfo("frmBudgetPotDetails", budgetDetails);
      navManager.navigateTo("frmMySavingsPot");
    }
    else {
      navManager.navigateTo("frmSavingsType");
    }

  },
  goBack: function () {
    var navigationMan = applicationManager.getNavigationManager();
    navigationMan.goBack();
  },
  bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  }

});