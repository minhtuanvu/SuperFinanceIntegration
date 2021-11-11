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
    this.initActions();
  },
  postShow: function () {

  },
  initActions: function () {
    this.view.customHeader.flxBack.onClick = this.onBack;
    this.view.btnSaveConfirm.onClick = this.continueOnClick;
    this.view.btnClose.onClick = this.onClose;
    this.view.flxTypeImage.onTouchEnd = this.goalType;
    this.view.flxFromImage.onTouchEnd = this.goalName;
    this.view.flxAmountImage.onTouchEnd = this.goalAmount;
    this.view.flxMonthlyAmountImg.onTouchEnd = this.periodicContribution;
    this.view.flxImg.onTouchEnd = this.period;
    this.view.flxFrequencyImg.onTouchEnd = this.frequency;
    this.view.flxFrequencyDateImg.onTouchEnd = this.frequencyDay;
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
    this.setDataToForm();
    this.checkPermissions();
  },

  setDataToForm: function () {
    var navManager = applicationManager.getNavigationManager();
    var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
    var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
    var currencyCode = SavingsPotMod.presentationController.getCurrencyCode();
    if (goalDetails.periodicFlag) {
      if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
        goalDetails.periodicContribution = goalDetails.periodicContribution;
        goalDetails.periodicContribution = goalDetails.periodicContribution + "";
      }
      else {
        goalDetails.periodicContribution = (Number((String(goalDetails.periodicContribution)).replace(",", ""))) / 2;
      }
      goalDetails.periodicFlag = "";
      navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails);
      goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
    }
    var formatUtil = applicationManager.getFormatUtilManager();
    this.view.lblGoalNameValue.text = goalDetails.potName;
    var category = navManager.getCustomInfo('frmEditGoalsType');
    for (var TitleNo in category) {
      var data = category[TitleNo];
      if (data.name == goalDetails.savingsType) {
        goalDetails.savingsName = data.name;
        goalDetails.savingsType = data.description;
      }
    }
    navManager.setCustomInfo('frmEditGoalsType', category);
    this.view.lblGoalTypeValue.text = goalDetails.savingsType;
    this.view.lblAmountValue.text = formatUtil.formatAmountandAppendCurrencySymbol(goalDetails.targetAmount, currencyCode);
    this.view.lblCurrBalanceValue.text = formatUtil.formatAmountandAppendCurrencySymbol(goalDetails.availableBalance, currencyCode);
    this.view.lblMonthlyAmountValue.text = formatUtil.formatAmountandAppendCurrencySymbol(goalDetails.periodicContribution, currencyCode);
    this.view.lblMonthsVal.text = goalDetails.targetPeriod;
    this.view.flxFrequencyValue.text = goalDetails.frequency;
    this.view.lblFrequencyDateValue.text = goalDetails.frequencyDay;
    var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
    if (parseFloat(goalDetails.availableBalance) > parseFloat(goalDetails.targetAmount)) {
      this.view.lblRemSavingsValue.text = currencySymbol+"0.00";
    } else {
      this.view.lblRemSavingsValue.text = formatUtil.formatAmountandAppendCurrencySymbol(goalDetails.remainingSavings, currencyCode);
    }
    var endDateobj = formatUtil.getDateObjectfromString(goalDetails.endDate, "MM/DD/YYYY");
    var endDate = formatUtil.getFormatedDateString(endDateobj, formatUtil.getApplicationDateFormat());
    this.view.lblFinalDateValue.text = endDate;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onBack: function () {
    var navigationMan = applicationManager.getNavigationManager();
    navigationMan.goBack();
  },
  goalType: function () {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmEditGoalsType");
  },
  goalName: function () {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmGoalName");
  },
  goalAmount: function () {
    var navManager = applicationManager.getNavigationManager();

    var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
    if (goalDetails.frequency == "Biweekly") {
      goalDetails.periodicContribution = ((Number(goalDetails.periodicContribution)) * 2);
      goalDetails.periodicFlag = "YES";
    }
    navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails)
    navManager.navigateTo("frmEditOptimizeGoal");
  },
  /*Function to show/hide close savings goal button based on user permissions*/
  checkPermissions: function () {
    var self = this;
    var closeGoalPotPermission = applicationManager.getConfigurationManager().checkUserPermission("GOAL_POT_CLOSE");
    (closeGoalPotPermission) ? self.view.btnClose.isVisible = true : self.view.btnClose.isVisible = false;
  },
  periodicContribution: function () {
    var navManager = applicationManager.getNavigationManager();
    var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
    if (goalDetails.frequency == "Biweekly") {
      goalDetails.periodicContribution = ((Number(goalDetails.periodicContribution)) * 2);
      goalDetails.periodicFlag = "YES";
    }
    navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails)
    navManager.navigateTo("frmEditOptimizeGoal");
  },
  period: function () {
    var navManager = applicationManager.getNavigationManager();
    var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
    if (goalDetails.frequency == "Biweekly") {
      goalDetails.periodicContribution = ((Number(goalDetails.periodicContribution)) * 2);
      goalDetails.periodicFlag = "YES";
    }
    navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails)
    navManager.navigateTo("frmEditOptimizeGoal");
  },
  frequency: function () {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmCreateSavingsGoalFrequency");
  },
  frequencyDay: function () {
    var navManager = applicationManager.getNavigationManager();
    var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
    if (goalDetails.frequency == "Monthly") {
      navManager.navigateTo("frmEditMonthlyFrequencyDay");
    }
    else {
      navManager.navigateTo("frmEditWeeklyFrequencyDay");
    }
  },
  continueOnClick: function () {
    if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
      var navManager = applicationManager.getNavigationManager();
      var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
      var targetAmount = this.view.lblAmountValue.text.replace(/[\\. ]+/g, "");
      targetAmount = targetAmount.replace(",", ".");
      var availableBalance = this.view.lblCurrBalanceValue.text.replace(/[\\. ]+/g, "");
      availableBalance = availableBalance.replace(",", ".");
      var periodicContribution = this.view.lblMonthlyAmountValue.text.replace(/[\\. ]+/g, "");
      periodicContribution = periodicContribution.replace(",", ".");
      var remainingSavings = this.view.lblRemSavingsValue.text.replace(/[\\. ]+/g, "");
      remainingSavings = remainingSavings.replace(",", ".");
      var params = {
        "targetAmount": targetAmount.slice(1),
        "potType": "Goal",
        "productId": "SAVINGS.ACCOUNT",
        "endDate": this.view.lblFinalDateValue.text,
        "targetPeriod": this.view.lblMonthsVal.text,
        "potName": this.view.lblGoalNameValue.text,
        "frequency": this.view.flxFrequencyValue.text,
        "availableBalance": availableBalance.slice(1),
        "remainingSavings": remainingSavings.slice(1),
        "periodicContribution": periodicContribution.slice(1),
        "currency": "USD",
        "startDate": goalDetails.startDate,
        "fundingAccountId": goalDetails.fundingAccountId
      }
    }
    else {
      var navManager = applicationManager.getNavigationManager();
      var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
      var targetAmount = this.view.lblAmountValue.text.replace(/[, ]+/g, "");
      var availableBalance = this.view.lblCurrBalanceValue.text.replace(/[, ]+/g, "");
      var periodicContribution = this.view.lblMonthlyAmountValue.text.replace(/[, ]+/g, "");
      var remainingSavings = this.view.lblRemSavingsValue.text.replace(/[, ]+/g, "");
      var params = {
        "targetAmount": targetAmount.slice(1),
        "potType": "Goal",
        "productId": "SAVINGS.ACCOUNT",
        "endDate": this.view.lblFinalDateValue.text,
        "targetPeriod": this.view.lblMonthsVal.text,
        "potName": this.view.lblGoalNameValue.text,
        "frequency": this.view.flxFrequencyValue.text,
        "availableBalance": availableBalance.slice(1),
        "remainingSavings": remainingSavings.slice(1),
        "periodicContribution": periodicContribution.slice(1),
        "currency": "USD",
        "startDate": goalDetails.startDate,
        "fundingAccountId": goalDetails.fundingAccountId
      }
    }
    var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
    SavingsPotMod.presentationController.updateSavingsPocket(params, "frmEditGoalsAcknowledgement");
  },
  onClose: function () {
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    var navManager = applicationManager.getNavigationManager();
    var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
    var potName = this.view.lblGoalNameValue.text;
    var accountName = SavingsPotMod.getMaskedAccountName();
    if (goalDetails.availableBalance > "0") {
      var message = "Your Goal pot " + potName + " is not zero, do you want to move the balance to Primary Account " + accountName + " and close";
    } else {
      var message = "Do you want to close your Savings Goal " + potName;
    }
    var basicProperties =
    {
      "message": message,
      "alertType": constants.ALERT_TYPE_CONFIRMATION,
      "alertTitle": "Close Savings Goal",
      "noLabel": "NO",
      "yesLabel": "YES",
      "alertIcon": "appicon.png",
      "alertHandler": function (response) {
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
  onCancelClick: function () {
    var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
    SavingsPotMod.presentationController.setSavingsFlow("");
    SavingsPotMod.presentationController.clearCreateData();
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmSavingsGoalViewDetails");
  },
  bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  }

});