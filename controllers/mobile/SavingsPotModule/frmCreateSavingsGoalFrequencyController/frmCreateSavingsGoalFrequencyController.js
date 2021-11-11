define({
  preShow: function () {
    if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
      this.view.flxHeader.setVisibility(false);
    }
    this.initActions();
    this.view.btnSave.onClick = this.continueOnClick;
    this.view.customHeader.flxBack.onTouchEnd = this.navigateCustomBack;
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
    this.view.flxMonthly.onClick = this.onClickMonthly;
    this.view.flxBiweekly.onClick = this.onClickBiWeekly;
  },
  init: function () {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm, scope.navigateCustomBack);
  },
  postShow: function () {

  },
  navigateCustomBack: function () {
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    SavingsPotMod.commonFunctionForgoBack();
  },
  initActions: function () {
    var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
    var flow = SavingsPotMod.presentationController.getSavingsFlow();
    var formatUtil = applicationManager.getFormatUtilManager();
    var result;
    if (flow) {
      var navManager = applicationManager.getNavigationManager();
      result = navManager.getCustomInfo("frmSavingsGoalViewDetails");
    }
    else {
      result = SavingsPotMod.presentationController.getBudgetDetails();
    }
    var currsym = formatUtil.getCurrencySymbol(result.currency);
    var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
    currsym=currencySymbol;
    var periodiccontri;
    if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE")
      periodiccontri = parseFloat((String(result.periodicContribution)).split(",")[0].replace(".", ""));
    else
      periodiccontri = parseFloat((String(result.periodicContribution)).replace(",", ""));
    var periodiccontridouble = periodiccontri * 2;
    var periodiccontrihalf = periodiccontri / 2;
    if (result.frequency != undefined) {
      if (result.frequency == "Biweekly") {

        this.view.lblSelectedAmountValueMonthly.text = formatUtil.formatAmountandAppendCurrencySymbol(periodiccontridouble, currsym);
        this.view.lblSelectedAmoutValueBiweekly.text = formatUtil.formatAmountandAppendCurrencySymbol(periodiccontri, currsym);
      }
      else {
        this.view.lblSelectedAmountValueMonthly.text = formatUtil.formatAmountandAppendCurrencySymbol(periodiccontri, currsym);
        this.view.lblSelectedAmoutValueBiweekly.text = formatUtil.formatAmountandAppendCurrencySymbol(periodiccontrihalf, currsym);
      }
    }
    else {
      this.onClickMonthly();
      this.view.lblSelectedAmountValueMonthly.text = formatUtil.formatAmountandAppendCurrencySymbol(periodiccontri, currsym);
      this.view.lblSelectedAmoutValueBiweekly.text = formatUtil.formatAmountandAppendCurrencySymbol(periodiccontrihalf, currsym);
    }
  },
  onClickMonthly: function () {
    this.view.flxMonthly.skin = "sknflx04A615f";
    this.view.imgSelectMonthly.setVisibility(true);
    this.view.flxBiweekly.skin = "sknflxE2E9F0ffffffr8px";
    this.view.imgSelectBiweekly.setVisibility(false);
  },
  onClickBiWeekly: function () {
    this.view.flxMonthly.skin = "sknflxE2E9F0ffffffr8px";
    this.view.imgSelectMonthly.setVisibility(false);
    this.view.flxBiweekly.skin = "sknflx04A615f";
    this.view.imgSelectBiweekly.setVisibility(true);
  },
  continueOnClick: function () {
    var frequency;
    var result;
    var finalFreqDay;
    var periodicContribution;
    var navManager = applicationManager.getNavigationManager();
    var previousForm = navManager.getPreviousForm();
    var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
    var formatUtil = applicationManager.getFormatUtilManager();
    if (this.view.imgSelectMonthly.isVisible == true) {
      frequency = "Monthly";
      if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE")
        periodicContribution = this.view.lblSelectedAmountValueMonthly.text.substring(1);
      else
        periodicContribution = formatUtil.deFormatAmount(this.view.lblSelectedAmountValueMonthly.text.substring(1));
      SavingsPotMod.presentationController.updatePeriodicContribution(periodicContribution);
    }
    else {
      frequency = "Biweekly";
      if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE")
        periodicContribution = this.view.lblSelectedAmoutValueBiweekly.text.substring(1);
      else
        periodicContribution = formatUtil.deFormatAmount(this.view.lblSelectedAmoutValueBiweekly.text);
      SavingsPotMod.presentationController.updatePeriodicContribution(periodicContribution);
    }

    var flow = SavingsPotMod.presentationController.getSavingsFlow();
    if (flow) {
      result = navManager.getCustomInfo("frmSavingsGoalViewDetails");
    }
    else {
      result = SavingsPotMod.presentationController.getBudgetDetails();
    }

    if (result.startDate) {
      var formatUtil = applicationManager.getFormatUtilManager();
      var endDateobj = formatUtil.getDateObjectfromString(result.startDate, "MM/DD/YYYY");
      var endDate = formatUtil.getFormatedDateString(endDateobj, formatUtil.getApplicationDateFormat());
      var date = endDate;
      date = date.split("/");
      var d = new Date(date[2], date[0] - 1, date[1]);
      var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      var selectedDay = weekday[d.getDay()];
      if (frequency == "Biweekly") {
        var temp = selectedDay;
        finalFreqDay = "Every 2 weeks on " + temp.substring(0, 3);
      }
      else {
        if (date[1].length == 1) {
          finalFreqDay = "0" + date[1] + " of every month";
        }
        else {
          finalFreqDay = date[1] + " of every month";
        }
      }
      SavingsPotMod.presentationController.updateFrequencyDay(finalFreqDay);
    }
    var flow = SavingsPotMod.presentationController.getSavingsFlow();
    if (flow) {
      var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
      goalDetails.periodicContribution = periodicContribution;
      goalDetails.frequency = frequency;
      goalDetails.frequencyDay = finalFreqDay;
      navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails);
      SavingsPotMod.presentationController.updatePeriodicContribution(periodicContribution);
      SavingsPotMod.presentationController.navToGoalFreqDate(frequency, "frmEditSavingsGoal");
    }
    else {
      if (previousForm === "frmCreateGoalVerifyDetails") {
        SavingsPotMod.presentationController.updatePeriodicContribution(periodicContribution);
        SavingsPotMod.presentationController.navToGoalFreqDate(frequency, "frmCreateGoalVerifyDetails");
      }
      else {
        SavingsPotMod.presentationController.updatePeriodicContribution(periodicContribution);
        SavingsPotMod.presentationController.navToGoalFreqDate(frequency, "frmCreateSavingsGoalFrequencyDate");
      }
    }
  },
  onCancelClick: function () {
    var navManager = applicationManager.getNavigationManager();
    var previousForm = navManager.getPreviousForm();
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    var flow = SavingsPotMod.getSavingsFlow();
    if (flow) {
      SavingsPotMod.setSavingsFlow("");
      SavingsPotMod.clearCreateData();
      SavingsPotMod.commonFunctionForNavigation("frmSavingsGoalViewDetails");

    }
    else {
      if (previousForm === "frmCreateGoalVerifyDetails") {
        SavingsPotMod.commonFunctionForNavigation("frmCreateGoalVerifyDetails");
      } else {
        SavingsPotMod.clearCreateData();
        var createBudgetPermission  = applicationManager.getConfigurationManager().checkUserPermission("BUDGET_POT_CREATE");
          (createBudgetPermission)?navManager.navigateTo("frmSavingsType"):navManager.navigateTo("frmMySavingsPot");  
      }
    }
  }

});