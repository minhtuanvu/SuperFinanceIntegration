define(["CommonUtilities"], function (CommonUtilities) {
  return {
    keypadString: '0.00',
    isPeriodUsed: false,
    timerCounter: 0,
    init: function () {
      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function () {
      var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
      SavingsPotMod.commonFunctionForgoBack();
    },
    preShow: function () {
      if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
        this.view.flxHeader.setVisibility(false);
      }
      var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
      var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
      this.view.lblDollar.text = currencySymbol;
      this.view.btnContinue.onClick = this.continueOnClick;
      this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
      var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
      var type = SavingsPotMod.getSavingsType();
      var paramValue;
      var flag = SavingsPotMod.getInitiateTransfer();
      var navManager = applicationManager.getNavigationManager();
      if (flag) {      
        var budgetDetails = navManager.getCustomInfo("frmBudgetPotDetails");
        paramValue = parseFloat(budgetDetails.fundAmount);
        paramValue = paramValue.toFixed(2);
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") 
        paramValue = paramValue.replace(".",",");
      }
      else {
        if (type === "budgetFund") {
          var budgetDetails = SavingsPotMod.getBudgetDetails();
          if (budgetDetails.fundAmount) {
            paramValue = budgetDetails.fundAmount;
          }
          else {
            if(navManager.getPreviousForm() !== "frmBudgetInitiateTransferDetails"){
              paramValue = parseFloat(budgetDetails.targetAmount);
              paramValue = paramValue.toFixed(2);
            }
            else{
              paramValue=budgetDetails.targetAmount;
            }
          }
          if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") 
           paramValue = paramValue.replace(".",",");
        }
        else {
          var budgetDetails = SavingsPotMod.getFundWithDrawDetails();
          paramValue = budgetDetails.amount;
        }
      }
      this.setReference(paramValue);
      this.view.flxError.isVisible = false;
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    postShow: function () {
      this.updateAmountValue();
    },
    setReference: function (targetAmount) {
      if (targetAmount) {
        this.keypadString = targetAmount;
      }
      else {
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE")
          this.keypadString = "0,00";
        else
          this.keypadString = "0.00";
      }
    },
    setKeypadChar: function (char) {
      CommonUtilities.setKeypadChar(this, char);
      this.updateAmountValue();
    },
    clearKeypadChar: function () {
      CommonUtilities.clearKeypadChar(this);
      this.updateAmountValue();
    },
    updateAmountValue: function () {
      if (this.keypadString === '0.00' || ((applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE" && this.keypadString === '0,00'))) {
        this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
        this.view.btnContinue.setEnabled(false);
        this.view.lblAmount.text = this.view.keypad.formatAmount(this.keypadString);
      } else {
        var keypadStringCommas = CommonUtilities.updateAmountValue(this);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.btnContinue.setEnabled(true);
        this.view.lblAmount.text = this.view.keypad.formatAmount(keypadStringCommas);
      }
    },
    continueOnClick: function () {
      var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
      var SavingsPotModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
      var type = SavingsPotMod.getSavingsType();
      var availableBalance = SavingsPotMod.getAvailableBalance();
      var AccountName = SavingsPotMod.getMaskedAccountName();
      var fundAmount = this.keypadString;
      var flag = SavingsPotMod.getInitiateTransfer();
      if (flag) {
        var navManager = applicationManager.getNavigationManager();
        var budgetDetails = navManager.getCustomInfo("frmBudgetPotDetails");
        budgetDetails.fundAmount = fundAmount;
        navManager.setCustomInfo("frmBudgetPotDetails", budgetDetails)
      }
      if (parseFloat(fundAmount) > parseFloat(availableBalance)) {
        this.view.flxError.isVisible = true;
        this.view.lblError.text = "You have insufficient Balance in your" + " " + AccountName;
      } else {
        this.view.flxError.isVisible = false;
        if (type === "budgetFund") {
          SavingsPotModule.presentationController.navToBudgetAcknowledgement(fundAmount, "frmBudgetInitiateTransferDetails");
        }
        else {
          SavingsPotModule.presentationController.navToFundVerifyDetails(fundAmount, "Credit", "frmGoalfundverifyDetails");
        }
      }
    }
  };
});