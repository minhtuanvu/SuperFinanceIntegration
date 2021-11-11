define("SavingsPotModule/userfrmEditOptimizeGoalController", ["CommonUtilities"], function(CommonUtilities) {
    return {
        keypadString: '0',
        isPeriodUsed: false,
        timerCounter: 0,
        init: function() {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        },
        preShow: function() {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.setVisibility(false);
            }
            var configManager = applicationManager.getConfigurationManager();
            var maxAmount = configManager.getMaxMonthlyDebitAmount();
            var maxMonth = configManager.getMaxMonths();
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            this.view.lblMaxValue.text = maxMonth.toString();
            this.view.lblMinVal.text = currencySymbol + "0";
            this.view.lblMaxVal.text = currencySymbol + maxAmount;
            this.view.lblDollar.text = currencySymbol;
            this.view.SliderAmount.max = maxAmount;
            this.view.SliderMonth.max = maxMonth;
            this.view.flxAmountWrapper.onClick = this.showKeypad;
            this.view.lblDone.onTouchStart = this.hideKeypad;
            this.view.lblMonthlyDebitValue.onTouchStart = this.navToAmount;
            this.view.lblMonthsValue.onTouchStart = this.navToMonths;
            this.view.btnContinue.onClick = this.continueOnClick;
            this.view.customHeader.flxBack.onTouchEnd = this.onBack;
            this.view.customHeader.btnRight.onClick = this.onCancelClick;
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.setDataToForm();
        },
        postShow: function() {
            this.btnEnabling();
            this.calculation();
            this.view.SliderAmount.onSelection = this.monthsCalculation;
            this.view.SliderMonth.onSelection = this.amountCalculation;
        },
        setDataToForm: function() {
            var navManager = applicationManager.getNavigationManager();
            var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
            var formatUtil = applicationManager.getFormatUtilManager();
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencyCode = SavingsPotMod.presentationController.getCurrencyCode();
            this.view.lblGoalname.text = goalDetails.potName;
            this.view.lblCurrentBalanceValue.text = formatUtil.formatAmountandAppendCurrencySymbol(goalDetails.availableBalance, currencyCode);
            this.view.blRemainingValue.text = formatUtil.formatAmountandAppendCurrencySymbol(goalDetails.remainingSavings, currencyCode);
            var endDateobj = formatUtil.getDateObjectfromString(goalDetails.endDate, "MM/DD/YYYY");
            var endDate = formatUtil.getFormatedDateString(endDateobj, formatUtil.getApplicationDateFormat());
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            this.view.lblDateValue.text = endDate;
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                this.view.lblAmount.text = goalDetails.targetAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
            } else {
                this.view.lblAmount.text = goalDetails.targetAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00";
            }
            this.keypadString = goalDetails.targetAmount;
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") this.view.lblMonthlyDebitValue.text = currencySymbol + " " + String(goalDetails.periodicContribution).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            else this.view.lblMonthlyDebitValue.text = currencySymbol + " " + goalDetails.periodicContribution;
            //  this.view.lblMonthlyDebitValue.text=formatUtil.formatAmountandAppendCurrencySymbol(goalDetails.periodicContribution,goalDetails.currency);
            this.view.lblMonthsValue.text = goalDetails.targetPeriod + " Months";
            this.view.SliderMonth.selectedValue = goalDetails.targetPeriod;
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") this.view.SliderAmount.selectedValue = String(goalDetails.periodicContribution).replace(/[\\.]+/g, "").replace(",", ".");
            else this.view.SliderAmount.selectedValue = goalDetails.periodicContribution;
        },
        btnEnabling: function() {
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            if (this.keypadString === '0' || this.view.lblMonthlyDebitValue.text === currencySymbol + " 0.00" || this.view.lblMonthsValue.text === "0 Months") {
                this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
                this.view.btnContinue.setEnabled(false);
                this.view.lblAmount.text = this.keypadString;
            } else {
                this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
                this.view.btnContinue.setEnabled(true);
            }
            // var today= new Date();
            if (this.view.lblMonthsValue.text === "0 Months") {
                this.view.lblDateValue.text = "-";
            } else {
                var goalAmt = this.view.lblAmount.text;
                var targetAmount = goalAmt.replace(/[, ]+/g, "");
                var period = this.view.lblMonthsValue.text;
                var periodOfMonths = period.split(" ");
                var targetPeriod = periodOfMonths[0];
                var contribution = this.view.lblMonthlyDebitValue.text;
                var monthlycontribution = contribution.split(" ");
                var monthlyAmt = monthlycontribution[1];
                var periodicContribution = Number((String(monthlyAmt)).replace(/[, ]+/g, ""));
                var navManager = applicationManager.getNavigationManager();
                var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
                var endDate = this.fetchNextOccurrence();
                var dateObj = new Date(endDate);
                var month = dateObj.getMonth() + 1; //months from 1-12
                if ((month.toString()).length == 1) {
                    month = "0" + month;
                }
                var day = dateObj.getDate();
                if ((day.toString()).length == 1) {
                    day = "0" + day;
                }
                var year = dateObj.getFullYear();
                var startDateForBackEnd = month + "/" + day + "/" + year;
                var dateFinal = startDateForBackEnd;
                var dateformatFinal = dateFinal;
                dateformatFinal = dateformatFinal.split("/");
                var periodCal = Number((targetPeriod).replace(",", ""));
                var goalAmount = Number((targetAmount).replace(",", ""));
                var periodicContributionCal = periodicContribution;
                var endDateFinal;
                if (goalDetails.frequency == "Biweekly") {
                    endDateFinal = this.getFinalDateForBiWeekly(new Date(dateformatFinal[2], parseInt(dateformatFinal[0]) - 1, dateformatFinal[1]), goalAmount, periodicContributionCal);
                } else {
                    endDateFinal = this.getFinalDateForMonthly(new Date(dateformatFinal[2], parseInt(dateformatFinal[0]) - 1, dateformatFinal[1]), periodCal - 1);
                }
                var dateObjFinal = new Date(endDateFinal);
                var monthFinal = dateObjFinal.getMonth() + 1; //months from 1-12
                if ((monthFinal.toString()).length == 1) {
                    monthFinal = "0" + monthFinal;
                }
                var dayFinal = dateObjFinal.getDate();
                if ((dayFinal.toString()).length == 1) {
                    dayFinal = "0" + dayFinal;
                }
                var yearFinal = dateObjFinal.getFullYear();
                //       var date = today.getDate();
                //       if(date<10){
                //         date = "0" + date;
                //       }
                var shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                //       var monthVal = this.view.lblMonthsValue.text;
                //       var month = monthVal.split(" ")[0];
                //       var targetPeriod = today.getMonth() +1+JSON.parse(month);
                //       var targetYear = targetPeriod;
                //       var year = today.getFullYear();
                //       if(targetPeriod > 12){
                //         targetPeriod = targetPeriod % 12;
                //         var period = targetYear/12;
                //           if(period==1 || period==2 ||period==3 ||period==4 ||period==5){
                //              period=period-1;
                //           }
                //                 year = year + Math.floor(period);
                //       }
                if (monthFinal == "01") {
                    this.view.lblDateValue.text = dayFinal + " " + shortMonths[0] + " " + yearFinal;
                } else if (monthFinal == "02") {
                    this.view.lblDateValue.text = dayFinal + " " + shortMonths[1] + " " + yearFinal;
                } else if (monthFinal == "03") {
                    this.view.lblDateValue.text = dayFinal + " " + shortMonths[2] + " " + yearFinal;
                } else if (monthFinal == "04") {
                    this.view.lblDateValue.text = dayFinal + " " + shortMonths[3] + " " + yearFinal;
                } else if (monthFinal == "05") {
                    this.view.lblDateValue.text = dayFinal + " " + shortMonths[4] + " " + yearFinal;
                } else if (monthFinal == "06") {
                    this.view.lblDateValue.text = dayFinal + " " + shortMonths[5] + " " + yearFinal;
                } else if (monthFinal == "07") {
                    this.view.lblDateValue.text = dayFinal + " " + shortMonths[6] + " " + yearFinal;
                } else if (monthFinal == "08") {
                    this.view.lblDateValue.text = dayFinal + " " + shortMonths[7] + " " + yearFinal;
                } else if (monthFinal == "09") {
                    this.view.lblDateValue.text = dayFinal + " " + shortMonths[8] + " " + yearFinal;
                } else if (monthFinal == "10") {
                    this.view.lblDateValue.text = dayFinal + " " + shortMonths[9] + " " + yearFinal;
                } else if (monthFinal == 11) {
                    this.view.lblDateValue.text = dayFinal + " " + shortMonths[10] + " " + yearFinal;
                } else {
                    this.view.lblDateValue.text = dayFinal + " " + shortMonths[11] + " " + yearFinal;
                }
            }
        },
        monthsCalculation: function() {
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                var configManager = applicationManager.getConfigurationManager();
                var maxMonth = configManager.getMaxMonths();
                var debitAmount = this.view.SliderAmount.selectedValue;
                var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
                if (this.keypadString !== '0') {
                    var remaining = this.view.blRemainingValue.text;
                    var remainingBal = remaining.substr(1, remaining.length);
                    var targetAmount = remainingBal.replace(/[\\. ]+/g, "");
                    targetAmount = targetAmount.replace(",", ".");
                    if (targetAmount < debitAmount) {
                        this.view.lblError.setVisibility(true);
                        this.view.lblError.text = "Monthly Debit Amount is greater than Remaining savings";
                        this.view.SliderAmount.selectedValue = "0";
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                        this.view.lblMonthsValue.text = "0 Months";
                        this.view.SliderMonth.selectedValue = "0";
                        this.btnEnabling();
                    } else {
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " " + debitAmount + ",00";
                        if (debitAmount !== 0) {
                            this.view.lblError.setVisibility(false);
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " " + debitAmount + ",00";
                            var noOfMonths = JSON.parse(targetAmount) / debitAmount;
                            this.view.lblMonthsValue.text = noOfMonths + " Months";
                            this.view.SliderMonth.selectedValue = noOfMonths;
                            this.updateAmountValue();
                            this.roundOff("true");
                            if (this.view.lblMonthsValue.text !== "0 Months") {
                                var noOfMonth = this.view.lblMonthsValue.text;
                                var month = noOfMonth.split(" ")[0];
                                var monthlyDebitAmt = JSON.parse(targetAmount) % debitAmount;
                                if (monthlyDebitAmt != 0) {
                                    var monthlyDebit = JSON.parse(targetAmount) / month;
                                    this.view.lblError.text = "Monthly debit amount is adjusted based on period of months";
                                    this.view.lblError.setVisibility(true);
                                    this.view.SliderAmount.selectedValue = monthlyDebit;
                                    var monthlyDA = String(Math.ceil(monthlyDebit)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                                    this.view.lblMonthlyDebitValue.text = currencySymbol + " " + monthlyDA + ",00";
                                }
                            }
                            this.btnEnabling();
                        } else {
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                            this.view.lblMonthsValue.text = "0 Months";
                            this.view.SliderMonth.selectedValue = "0";
                            this.btnEnabling();
                        }
                        if (noOfMonths > maxMonth) {
                            this.view.lblError.text = "Number of months is greater than " + maxMonth.toString();
                            this.view.lblError.setVisibility(true);
                            this.view.SliderAmount.selectedValue = "0";
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                            this.view.lblMonthsValue.text = "0 Months";
                            this.view.SliderMonth.selectedValue = "0";
                            this.btnEnabling();
                        }
                    }
                } else {
                    this.view.lblError.text = "Please enter the goal amount";
                    this.view.lblError.setVisibility(true);
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.SliderMonth.selectedValue = "0";
                }
            } else {
                var configManager = applicationManager.getConfigurationManager();
                var maxMonth = configManager.getMaxMonths();
                var debitAmount = this.view.SliderAmount.selectedValue;
                var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
                if (this.keypadString !== '0') {
                    var remaining = this.view.blRemainingValue.text;
                    var remainingBal = remaining.substr(1, remaining.length);
                    var targetAmount = remainingBal.replace(/[, ]+/g, "");
                    if (targetAmount < debitAmount) {
                        this.view.lblError.setVisibility(true);
                        this.view.lblError.text = "Monthly Debit Amount is greater than Remaining savings";
                        this.view.SliderAmount.selectedValue = "0";
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                        this.view.lblMonthsValue.text = "0 Months";
                        this.view.SliderMonth.selectedValue = "0";
                        this.btnEnabling();
                    } else {
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " " + debitAmount + ".00";
                        if (debitAmount !== 0) {
                            this.view.lblError.setVisibility(false);
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " " + debitAmount + ".00";
                            var noOfMonths = JSON.parse(targetAmount) / debitAmount;
                            this.view.lblMonthsValue.text = noOfMonths + " Months";
                            this.view.SliderMonth.selectedValue = noOfMonths;
                            this.updateAmountValue();
                            this.roundOff();
                            if (this.view.lblMonthsValue.text !== "0 Months") {
                                var noOfMonth = this.view.lblMonthsValue.text;
                                var month = noOfMonth.split(" ")[0];
                                var monthlyDebitAmt = JSON.parse(targetAmount) % debitAmount;
                                if (monthlyDebitAmt != 0) {
                                    var monthlyDebit = JSON.parse(targetAmount) / month;
                                    this.view.lblError.text = "Monthly debit amount is adjusted based on period of months";
                                    this.view.lblError.setVisibility(true);
                                    this.view.SliderAmount.selectedValue = monthlyDebit;
                                    this.view.lblMonthlyDebitValue.text = currencySymbol + " " + String(Math.ceil(monthlyDebit)).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00";
                                }
                            }
                            this.btnEnabling();
                        } else {
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                            this.view.lblMonthsValue.text = "0 Months";
                            this.view.SliderMonth.selectedValue = "0";
                            this.btnEnabling();
                        }
                        if (noOfMonths > maxMonth) {
                            this.view.lblError.text = "Number of months is greater than " + maxMonth.toString();
                            this.view.lblError.setVisibility(true);
                            this.view.SliderAmount.selectedValue = "0";
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                            this.view.lblMonthsValue.text = "0 Months";
                            this.view.SliderMonth.selectedValue = "0";
                            this.btnEnabling();
                        }
                    }
                } else {
                    this.view.lblError.text = "Please enter the goal amount";
                    this.view.lblError.setVisibility(true);
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.SliderMonth.selectedValue = "0";
                }
            }
        },
        amountCalculation: function() {
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                var configManager = applicationManager.getConfigurationManager();
                var maxAmount = configManager.getMaxMonthlyDebitAmount();
                var months = this.view.SliderMonth.selectedValue;
                var remaining = this.view.blRemainingValue.text;
                var remainingBalance = remaining.substr(1, remaining.length);
                var targetAmount = remainingBalance.replace(/[\\. ]+/g, "");
                var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
                if (this.keypadString !== '0') {
                    this.view.lblMonthsValue.text = months + " Months";
                    if (months !== 0) {
                        this.view.lblError.setVisibility(false);
                        this.view.lblMonthsValue.text = months + " Months";
                        targetAmount = targetAmount.split(",")[0];
                        var periodicContribution = JSON.parse(targetAmount) / months;
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " " + periodicContribution;
                        this.view.SliderAmount.selectedValue = periodicContribution;
                        this.updateAmountValue();
                        this.roundOff();
                        this.btnEnabling();
                    } else {
                        this.view.lblMonthsValue.text = "0 Months";
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                        this.view.SliderAmount.selectedValue = "0";
                        this.updateAmountValue();
                        this.btnEnabling();
                    }
                    if (periodicContribution > maxAmount) {
                        this.view.lblError.text = "Monthly debit amount is greater than " + maxAmount;
                        this.view.lblError.setVisibility(true);
                        this.view.SliderAmount.selectedValue = "0";
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                        this.view.lblMonthsValue.text = "0 Months";
                        this.view.SliderMonth.selectedValue = "0";
                        this.btnEnabling();
                    }
                } else {
                    this.view.lblError.text = "Please enter the goal amount";
                    this.view.lblError.setVisibility(true);
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.SliderMonth.selectedValue = "0";
                }
            } else {
                var configManager = applicationManager.getConfigurationManager();
                var maxAmount = configManager.getMaxMonthlyDebitAmount();
                var months = this.view.SliderMonth.selectedValue;
                var remaining = this.view.blRemainingValue.text;
                var remainingBalance = remaining.substr(1, remaining.length);
                var targetAmount = remainingBalance.replace(/[, ]+/g, "");
                var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
                if (this.keypadString !== '0') {
                    this.view.lblMonthsValue.text = months + " Months";
                    if (months !== 0) {
                        this.view.lblError.setVisibility(false);
                        this.view.lblMonthsValue.text = months + " Months";
                        var periodicContribution = JSON.parse(targetAmount) / months;
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " " + periodicContribution;
                        this.view.SliderAmount.selectedValue = periodicContribution;
                        this.updateAmountValue();
                        this.roundOff();
                        this.btnEnabling();
                    } else {
                        this.view.lblMonthsValue.text = "0 Months";
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                        this.view.SliderAmount.selectedValue = "0";
                        this.updateAmountValue();
                        this.btnEnabling();
                    }
                    if (periodicContribution > maxAmount) {
                        this.view.lblError.text = "Monthly debit amount is greater than " + maxAmount;
                        this.view.lblError.setVisibility(true);
                        this.view.SliderAmount.selectedValue = "0";
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                        this.view.lblMonthsValue.text = "0 Months";
                        this.view.SliderMonth.selectedValue = "0";
                        this.btnEnabling();
                    }
                } else {
                    this.view.lblError.text = "Please enter the goal amount";
                    this.view.lblError.setVisibility(true);
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.SliderMonth.selectedValue = "0";
                }
            }
        },
        calculation: function() {
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                var configManager = applicationManager.getConfigurationManager();
                var maxAmount = configManager.getMaxMonthlyDebitAmount();
                var maxMonth = configManager.getMaxMonths();
                var debitValue = this.view.lblMonthlyDebitValue.text;
                var monthlyValue = debitValue.split(" ")[1];
                var monthlyDebit = monthlyValue.split(",")[0];
                var monthsValue = this.view.lblMonthsValue.text;
                var months = monthsValue.split(" ")[0];
                var remaining = this.view.blRemainingValue.text;
                var remainingBal = remaining.substr(1, remaining.length);
                var value = remainingBal.replace(/[\\. ]+/g, "");
                var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
                if (this.keypadString !== '0') {
                    var SavingsPotModule = applicationManager.getModulesPresentationController("SavingsPotModule");
                    var type = SavingsPotModule.getSavingsType();
                    if (monthlyDebit !== "0" && type === "periodicContribution") {
                        this.view.lblError.setVisibility(false);
                        var amountVal = monthlyDebit.replace(/[\\. ]+/g, "");
                        var monthlyAmount = JSON.parse(amountVal);
                        this.view.SliderAmount.selectedValue = monthlyAmount;
                        value = value.replace(",", ".");
                        var noOfMonths = JSON.parse(value) / monthlyAmount;
                        if (noOfMonths > maxMonth) {
                            this.view.lblError.text = "Number of months is greater than " + maxMonth.toString();
                            this.view.lblError.setVisibility(true);
                            this.view.SliderAmount.selectedValue = "0";
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                            this.view.lblMonthsValue.text = "0 Months";
                            this.view.SliderMonth.selectedValue = "0";
                            this.btnEnabling();
                        } else {
                            this.view.lblMonthsValue.text = noOfMonths + " Months";
                            this.view.SliderMonth.selectedValue = noOfMonths;
                            this.setDataToMonths(maxAmount);
                            this.updateAmountValue();
                            this.roundOff("true");
                            if (this.view.lblMonthsValue.text !== "0 Months") {
                                var noOfMonth = this.view.lblMonthsValue.text;
                                var month = noOfMonth.split(" ")[0];
                                var monthlyDebitAmt = JSON.parse(value) % monthlyAmount;
                                if (monthlyDebitAmt != 0) {
                                    var monthlyDebitAmount = JSON.parse(value) / month;
                                    this.view.lblError.text = "Monthly debit amount is adjusted based on period of months";
                                    this.view.lblError.setVisibility(true);
                                    this.view.SliderAmount.selectedValue = monthlyDebitAmount;
                                    this.view.lblMonthlyDebitValue.text = currencySymbol + " " + Math.ceil(monthlyDebitAmount) + ",00";
                                }
                            }
                            this.btnEnabling();
                        }
                    }
                    if (months !== "0" && type === "targetPeriod") {
                        this.view.lblError.setVisibility(false);
                        this.view.SliderMonth.selectedValue = months;
                        value = value.replace(",", ".");
                        var periodicContribution = JSON.parse(value) / months;
                        if (periodicContribution > maxAmount || value < JSON.parse(periodicContribution)) {
                            if (periodicContribution > maxAmount) {
                                this.view.lblError.text = "Monthly debit amount is greater than " + maxAmount;
                                this.view.lblError.setVisibility(true);
                            }
                            if (value < JSON.parse(periodicContribution)) {
                                this.view.lblError.text = "Monthly debit Amount is greater than Remaining balance";
                                this.view.lblError.setVisibility(true);
                            }
                            this.view.SliderAmount.selectedValue = "0";
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                            this.view.lblMonthsValue.text = "0 Months";
                            this.view.SliderMonth.selectedValue = "0";
                            this.btnEnabling();
                        } else {
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " " + periodicContribution;
                            this.view.SliderAmount.selectedValue = periodicContribution;
                            this.setDataToAmount(maxMonth);
                            this.updateAmountValue();
                            this.roundOff();
                            this.btnEnabling();
                        }
                    }
                } else {
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
                    this.btnEnabling();
                }
            } else {
                var configManager = applicationManager.getConfigurationManager();
                var maxAmount = configManager.getMaxMonthlyDebitAmount();
                var maxMonth = configManager.getMaxMonths();
                var debitValue = this.view.lblMonthlyDebitValue.text;
                var monthlyValue = debitValue.split(" ")[1];
                var monthlyDebit = monthlyValue.split(".")[0];
                var monthsValue = this.view.lblMonthsValue.text;
                var months = monthsValue.split(" ")[0];
                var remaining = this.view.blRemainingValue.text;
                var remainingBal = remaining.substr(1, remaining.length);
                var value = remainingBal.replace(/[, ]+/g, "");
                var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
                if (this.keypadString !== '0') {
                    var SavingsPotModule = applicationManager.getModulesPresentationController("SavingsPotModule");
                    var type = SavingsPotModule.getSavingsType();
                    if (monthlyDebit !== "0" && type === "periodicContribution") {
                        this.view.lblError.setVisibility(false);
                        var amountVal = monthlyDebit.replace(/[, ]+/g, "");
                        var monthlyAmount = JSON.parse(amountVal);
                        this.view.SliderAmount.selectedValue = monthlyAmount;
                        var noOfMonths = JSON.parse(value) / monthlyAmount;
                        if (noOfMonths > maxMonth) {
                            this.view.lblError.text = "Number of months is greater than " + maxMonth.toString();
                            this.view.lblError.setVisibility(true);
                            this.view.SliderAmount.selectedValue = "0";
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                            this.view.lblMonthsValue.text = "0 Months";
                            this.view.SliderMonth.selectedValue = "0";
                            this.btnEnabling();
                        } else {
                            this.view.lblMonthsValue.text = noOfMonths + " Months";
                            this.view.SliderMonth.selectedValue = noOfMonths;
                            this.setDataToMonths(maxAmount);
                            this.updateAmountValue();
                            this.roundOff();
                            if (this.view.lblMonthsValue.text !== "0 Months") {
                                var noOfMonth = this.view.lblMonthsValue.text;
                                var month = noOfMonth.split(" ")[0];
                                var monthlyDebitAmt = JSON.parse(value) % monthlyAmount;
                                if (monthlyDebitAmt != 0) {
                                    var monthlyDebitAmount = JSON.parse(value) / month;
                                    this.view.lblError.text = "Monthly debit amount is adjusted based on period of months";
                                    this.view.lblError.setVisibility(true);
                                    this.view.SliderAmount.selectedValue = monthlyDebitAmount;
                                    this.view.lblMonthlyDebitValue.text = currencySymbol + " " + Math.ceil(monthlyDebitAmount) + ".00";
                                }
                            }
                            this.btnEnabling();
                        }
                    }
                    if (months !== "0" && type === "targetPeriod") {
                        this.view.lblError.setVisibility(false);
                        this.view.SliderMonth.selectedValue = months;
                        var periodicContribution = JSON.parse(value) / months;
                        if (periodicContribution > maxAmount || value < JSON.parse(periodicContribution)) {
                            if (periodicContribution > maxAmount) {
                                this.view.lblError.text = "Monthly debit amount is greater than " + maxAmount;
                                this.view.lblError.setVisibility(true);
                            }
                            if (value < JSON.parse(periodicContribution)) {
                                this.view.lblError.text = "Monthly debit Amount is greater than Remaining balance";
                                this.view.lblError.setVisibility(true);
                            }
                            this.view.SliderAmount.selectedValue = "0";
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                            this.view.lblMonthsValue.text = "0 Months";
                            this.view.SliderMonth.selectedValue = "0";
                            this.btnEnabling();
                        } else {
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " " + periodicContribution;
                            this.view.SliderAmount.selectedValue = periodicContribution;
                            this.setDataToAmount(maxMonth);
                            this.updateAmountValue();
                            this.roundOff();
                            this.btnEnabling();
                        }
                    }
                } else {
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
                    this.btnEnabling();
                }
            }
        },
        setDataToMonths: function(maxAmount) {
            var navManager = applicationManager.getNavigationManager();
            var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                var periodicContri = goalDetails.periodicContribution;
                var split = periodicContri.split(",");
                var amount = split[0];
                var monthlyAmount = amount.replace(/[\\. ]+/g, "");
                var remaining = this.view.blRemainingValue.text;
                var targetAmt = remaining.substr(1, remaining.length);
                var targetAmount = targetAmt.replace(/[\\. ]+/g, "");
                if (monthlyAmount > maxAmount || targetAmount < JSON.parse(monthlyAmount)) {
                    if (monthlyAmount > maxAmount) {
                        this.view.lblError.text = "Monthly debit amount is greater than " + maxAmount;
                        this.view.lblError.setVisibility(true);
                    }
                    if (targetAmount < JSON.parse(monthlyAmount)) {
                        this.view.lblError.text = "Monthly debit Amount is greater than Remaining balance";
                        this.view.lblError.setVisibility(true);
                    }
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
                }
            } else {
                var periodicContri = goalDetails.periodicContribution;
                var split = periodicContri.split(".");
                var amount = split[0];
                var monthlyAmount = amount.replace(/[, ]+/g, "");
                var remaining = this.view.blRemainingValue.text;
                var targetAmt = remaining.substr(1, remaining.length);
                var targetAmount = targetAmt.replace(/[, ]+/g, "");
                if (monthlyAmount > maxAmount || targetAmount < JSON.parse(monthlyAmount)) {
                    if (monthlyAmount > maxAmount) {
                        this.view.lblError.text = "Monthly debit amount is greater than " + maxAmount;
                        this.view.lblError.setVisibility(true);
                    }
                    if (targetAmount < JSON.parse(monthlyAmount)) {
                        this.view.lblError.text = "Monthly debit Amount is greater than Remaining balance";
                        this.view.lblError.setVisibility(true);
                    }
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
                }
            }
        },
        setDataToAmount: function(maxMonth) {
            var navManager = applicationManager.getNavigationManager();
            var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                if (goalDetails.targetPeriod > maxMonth) {
                    this.view.lblError.text = "Number of months is greater than " + maxMonth.toString();
                    this.view.lblError.setVisibility(true);
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
                }
            } else {
                if (goalDetails.targetPeriod > maxMonth) {
                    this.view.lblError.text = "Number of months is greater than " + maxMonth.toString();
                    this.view.lblError.setVisibility(true);
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
                }
            }
        },
        roundOff: function(fromManaual) {
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                var monthlyDebit = this.view.lblMonthlyDebitValue.text;
                var months = this.view.lblMonthsValue.text;
                var monthlyVal = monthlyDebit.split(" ")[1];
                var monthlyAmount = monthlyVal;
                var monthsVal = months.split(" ")[0];
                if (fromManaual === "true") {
                    monthlyAmount = monthlyAmount.replace(/[\\. ]+/g, "");
                    monthlyAmount = monthlyAmount.replace(",", ".");
                }
                var periodicContribution = Math.ceil(monthlyAmount);
                var targetPeriod = Math.ceil(monthsVal);
                periodicContribution = periodicContribution + "";
                periodicContribution = periodicContribution.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                this.view.lblMonthlyDebitValue.text = currencySymbol + " " + periodicContribution + ",00";
                this.view.lblMonthsValue.text = targetPeriod + " Months";
            } else {
                var monthlyDebit = this.view.lblMonthlyDebitValue.text;
                var months = this.view.lblMonthsValue.text;
                var monthlyVal = monthlyDebit.split(" ")[1];
                var monthlyAmount = monthlyVal.replace(/[, ]+/g, "");
                var monthsVal = months.split(" ")[0];
                var periodicContribution = Math.ceil(monthlyAmount);
                var targetPeriod = Math.ceil(monthsVal);
                this.view.lblMonthlyDebitValue.text = currencySymbol + " " + periodicContribution + ".00";
                this.view.lblMonthsValue.text = targetPeriod + " Months";
            }
        },
        setKeypadChar: function(char) {
            CommonUtilities.setKeypadCharWOD(this, char);
            this.updateAmountValue();
        },
        clearKeypadChar: function() {
            CommonUtilities.clearKeypadCharWOD(this);
            this.updateAmountValue();
        },
        updateAmountValue: function() {
            if (this.keypadString === '0') {
                this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
                this.view.btnContinue.setEnabled(false);
                this.view.lblAmount.text = this.view.keypad.formatAmount(this.keypadString);
            } else {
                var finalValue = CommonUtilities.updateAmountValueWOD(this);
                this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
                this.view.btnContinue.setEnabled(true);
                this.view.lblAmount.text = this.view.keypad.formatAmount(finalValue);
            }
        },
        navToAmount: function() {
            var contribution = this.view.lblMonthlyDebitValue.text;
            var monthlycontribution = contribution.split(" ");
            var periodicContribution = monthlycontribution[1];
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") periodicContribution = periodicContribution.replace(/[\\.]+/g, "");
            var navManager = applicationManager.getNavigationManager();
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            SavingsPotMod.presentationController.updatePeriodicContribution(periodicContribution);
            var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
            goalDetails.periodicContribution = periodicContribution;
            navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails);
            navManager.navigateTo("frmGoalAmount");
        },
        navToMonths: function() {
            var period = this.view.lblMonthsValue.text;
            var periodOfMonths = period.split(" ");
            var targetPeriod = periodOfMonths[0];
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            SavingsPotMod.presentationController.updateTargetPeriod(targetPeriod);
            var navManager = applicationManager.getNavigationManager();
            var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
            goalDetails.targetPeriod = targetPeriod;
            navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails);
            navManager.navigateTo("frmCreateGoalMonths");
        },
        onBack: function() {
            var navigationMan = applicationManager.getNavigationManager();
            navigationMan.goBack();
        },
        showKeypad: function() {
            this.view.flxKeypad.setVisibility(true);
        },
        hideKeypad: function() {
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                var targetAmount = this.view.lblAmount.text;
                var navManager = applicationManager.getNavigationManager();
                var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
                var remainingBalance = this.keypadString - goalDetails.availableBalance;
                var remainingSavings = remainingBalance.toString();
                var targetAmt = targetAmount.replace(/[\\. ]+/g, "");
                targetAmt = targetAmt.replace(",", ".");
                if (parseInt(targetAmt) > parseInt(goalDetails.availableBalance)) {
                    var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
                    //  SavingsPotMod.presentationController.updateTargetAmount(targetAmount);
                    //  goalDetails.targetAmount = targetAmount;
                    //   goalDetails.remainingSavings = remainingSavings;
                    //  navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails);
                    this.view.blRemainingValue.text = currencySymbol + " " + remainingSavings.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
                    this.btnEnabling();
                    this.view.flxKeypad.setVisibility(false);
                    this.view.lblError.setVisibility(false);
                } else {
                    this.view.lblError.text = "Your desired Goal Amount is already available in Current Balance of the Goal Pot!";
                    this.view.lblError.setVisibility(true);
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.SliderAmount.setEnabled(false);
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
                    this.view.SliderMonth.setEnabled(false);
                    this.btnEnabling();
                }
            } else {
                var targetAmount = this.view.lblAmount.text;
                var navManager = applicationManager.getNavigationManager();
                var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
                var remainingBalance = this.keypadString - goalDetails.availableBalance;
                var remainingSavings = remainingBalance.toString();
                var targetAmt = targetAmount.replace(/[, ]+/g, "");
                if (parseInt(targetAmt) > parseInt(goalDetails.availableBalance)) {
                    var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
                    //  SavingsPotMod.presentationController.updateTargetAmount(targetAmount);
                    //  goalDetails.targetAmount = targetAmount;
                    //  goalDetails.remainingSavings = remainingSavings;
                    //  navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails);
                    this.view.blRemainingValue.text = currencySymbol + " " + remainingSavings.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00";
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
                    this.btnEnabling();
                    this.view.flxKeypad.setVisibility(false);
                    this.view.lblError.setVisibility(false);
                } else {
                    this.view.lblError.text = "Your desired Goal Amount is already available in Current Balance of the Goal Pot!";
                    this.view.lblError.setVisibility(true);
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.SliderAmount.setEnabled(false);
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
                    this.view.SliderMonth.setEnabled(false);
                    this.btnEnabling();
                }
            }
        },
        onCancelClick: function() {
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var navManager = applicationManager.getNavigationManager();
            SavingsPotMod.presentationController.clearCreateData();
            this.view.lblError.setVisibility(false);
            SavingsPotMod.presentationController.setSavingsFlow("");
            navManager.navigateTo("frmEditSavingsGoal");
        },
        fetchNextOccurrence: function() {
            var navManager = applicationManager.getNavigationManager();
            var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
            var dates = goalDetails.startDate;
            var dateformat = dates;
            dateformat = dateformat.split("/");
            var startDateObj = new Date(dateformat[2], parseInt(dateformat[0]) - 1, dateformat[1]);
            var nextOccurentDate;
            var date = new Date();
            var edgeDates = [29, 30, 31];
            var lastDayOfStartMonth = new Date(startDateObj.getFullYear(), startDateObj.getMonth() + 1, 0);
            var lastDateOfPresentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            if (startDateObj.getTime() < date.getTime()) {
                if (goalDetails.frequency != "Biweekly") {
                    if (date.getDate() <= startDateObj.getDate()) {
                        if ((edgeDates.indexOf(startDateObj.getDate()) > -1) && (lastDayOfStartMonth.getDate() !== lastDateOfPresentMonth.getDate()) && (lastDateOfPresentMonth.getDate() < startDateObj.getDate())) {
                            nextOccurentDate = lastDateOfPresentMonth;
                        } else {
                            nextOccurentDate = new Date(date.getFullYear(), date.getMonth(), startDateObj.getDate());
                        }
                    } else {
                        if (startDateObj.getDate() === lastDayOfStartMonth.getDate()) {
                            nextOccurentDate = lastDateOfPresentMonth;
                        } else {
                            nextOccurentDate = new Date(date.getFullYear(), date.getMonth() + 1, startDateObj.getDate());
                        }
                    }
                } else {
                    var requiredDays = startDateObj.getDay() - date.getDay();
                    if (date.getDay() > startDateObj.getDay()) {
                        requiredDays = requiredDays + 7;
                    }
                    nextOccurentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + requiredDays);
                }
                return nextOccurentDate;
            } else {
                return startDateObj;
            }
        },
        getFinalDateForMonthly: function(startDate, months) {
            var tempDate = new Date(startDate);
            var finalDate = new Date(tempDate.setMonth(tempDate.getMonth() + months));
            if (finalDate.getDate() == startDate.getDate()) {
                return finalDate;
            } else {
                var endDate = new Date(finalDate.setMonth(finalDate.getMonth() - 1));
                var lastDay = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0);
                return lastDay;
            }
        },
        getFinalDateForBiWeekly: function(startDate, goalAmount, periodicContribution) {
            var periodicContributions = periodicContribution / 2;
            var occurences = goalAmount / periodicContributions;
            var days = (occurences - 1) * 14;
            var endDate = startDate.setDate(startDate.getDate() + days);
            var finalDate = new Date(endDate);
            return finalDate;
        },
        continueOnClick: function() {
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                var goalAmt = this.view.lblAmount.text;
                var targetAmount = goalAmt.replace(/[. ]+/g, "");
                targetAmount = targetAmount.replace(",", ".");
                var period = this.view.lblMonthsValue.text;
                var periodOfMonths = period.split(" ");
                var targetPeriod = periodOfMonths[0];
                var contribution = this.view.lblMonthlyDebitValue.text;
                var monthlycontribution = contribution.split(" ");
                var monthlyAmt = monthlycontribution[1];
                var periodicContribution = monthlyAmt;
                if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") periodicContribution = periodicContribution.replace(/[\\.]+/g, "");
                periodicContribution = periodicContribution.replace(",", ".");
                var navManager = applicationManager.getNavigationManager();
                var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
                var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
                goalDetails.targetAmount = targetAmount;
                goalDetails.periodicContribution = periodicContribution;
                goalDetails.targetPeriod = targetPeriod;
                goalDetails.remainingSavings = goalDetails.targetAmount - goalDetails.availableBalance;
                var endDate = this.fetchNextOccurrence();
                var dateObj = new Date(endDate);
                var month = dateObj.getMonth() + 1; //months from 1-12
                if ((month.toString()).length == 1) {
                    month = "0" + month;
                }
                var day = dateObj.getDate();
                if ((day.toString()).length == 1) {
                    day = "0" + day;
                }
                var year = dateObj.getFullYear();
                var startDateForBackEnd = month + "/" + day + "/" + year;
                var dateFinal = startDateForBackEnd;
                var dateformatFinal = dateFinal;
                dateformatFinal = dateformatFinal.split("/");
                var periodCal = Number((targetPeriod).replace(",", ""));
                var goalAmount = Number((targetAmount).replace(",", ""));
                var periodicContributionCal = periodicContribution;
                var endDateFinal;
                if (goalDetails.frequency == "Biweekly") {
                    endDateFinal = this.getFinalDateForBiWeekly(new Date(dateformatFinal[2], parseInt(dateformatFinal[0]) - 1, dateformatFinal[1]), goalAmount, periodicContributionCal);
                } else {
                    endDateFinal = this.getFinalDateForMonthly(new Date(dateformatFinal[2], parseInt(dateformatFinal[0]) - 1, dateformatFinal[1]), periodCal - 1);
                }
                var dateObjFinal = new Date(endDateFinal);
                var monthFinal = dateObjFinal.getMonth() + 1; //months from 1-12
                if ((monthFinal.toString()).length == 1) {
                    monthFinal = "0" + monthFinal;
                }
                var dayFinal = dateObjFinal.getDate();
                if ((dayFinal.toString()).length == 1) {
                    dayFinal = "0" + dayFinal;
                }
                var yearFinal = dateObjFinal.getFullYear();
                var finalDate = monthFinal + "/" + dayFinal + "/" + yearFinal;
                goalDetails.startDate = startDateForBackEnd;
                goalDetails.endDate = finalDate;
                navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails);
                SavingsPotMod.presentationController.navToGoalFrequency(targetAmount, targetPeriod, periodicContribution, "frmEditSavingsGoal");
            } else {
                var goalAmt = this.view.lblAmount.text;
                var targetAmount = goalAmt.replace(/[, ]+/g, "");
                var period = this.view.lblMonthsValue.text;
                var periodOfMonths = period.split(" ");
                var targetPeriod = periodOfMonths[0];
                var contribution = this.view.lblMonthlyDebitValue.text;
                var monthlycontribution = contribution.split(" ");
                var monthlyAmt = monthlycontribution[1];
                var periodicContribution = Number((String(monthlyAmt)).replace(/[, ]+/g, ""));
                var navManager = applicationManager.getNavigationManager();
                var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
                var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
                goalDetails.targetAmount = targetAmount;
                goalDetails.periodicContribution = periodicContribution;
                goalDetails.targetPeriod = targetPeriod;
                goalDetails.remainingSavings = goalDetails.targetAmount - goalDetails.availableBalance;
                var endDate = this.fetchNextOccurrence();
                var dateObj = new Date(endDate);
                var month = dateObj.getMonth() + 1; //months from 1-12
                if ((month.toString()).length == 1) {
                    month = "0" + month;
                }
                var day = dateObj.getDate();
                if ((day.toString()).length == 1) {
                    day = "0" + day;
                }
                var year = dateObj.getFullYear();
                var startDateForBackEnd = month + "/" + day + "/" + year;
                var dateFinal = startDateForBackEnd;
                var dateformatFinal = dateFinal;
                dateformatFinal = dateformatFinal.split("/");
                var periodCal = Number((targetPeriod).replace(",", ""));
                var goalAmount = Number((targetAmount).replace(",", ""));
                var periodicContributionCal = periodicContribution;
                var endDateFinal;
                if (goalDetails.frequency == "Biweekly") {
                    endDateFinal = this.getFinalDateForBiWeekly(new Date(dateformatFinal[2], parseInt(dateformatFinal[0]) - 1, dateformatFinal[1]), goalAmount, periodicContributionCal);
                } else {
                    endDateFinal = this.getFinalDateForMonthly(new Date(dateformatFinal[2], parseInt(dateformatFinal[0]) - 1, dateformatFinal[1]), periodCal - 1);
                }
                var dateObjFinal = new Date(endDateFinal);
                var monthFinal = dateObjFinal.getMonth() + 1; //months from 1-12
                if ((monthFinal.toString()).length == 1) {
                    monthFinal = "0" + monthFinal;
                }
                var dayFinal = dateObjFinal.getDate();
                if ((dayFinal.toString()).length == 1) {
                    dayFinal = "0" + dayFinal;
                }
                var yearFinal = dateObjFinal.getFullYear();
                var finalDate = monthFinal + "/" + dayFinal + "/" + yearFinal;
                goalDetails.startDate = startDateForBackEnd;
                goalDetails.endDate = finalDate;
                navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails);
                SavingsPotMod.presentationController.navToGoalFrequency(targetAmount, targetPeriod, periodicContribution, "frmEditSavingsGoal");
            }
        }
    };
});
define("SavingsPotModule/frmEditOptimizeGoalControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_c7c86a1899eb4ec98929364051fc959f: function AS_Button_c7c86a1899eb4ec98929364051fc959f(eventobject) {
        var self = this;
        this.setKeypadChar('.');
    },
    AS_Form_b599889d5de149d4b39047195c84e44d: function AS_Form_b599889d5de149d4b39047195c84e44d(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d535a2a6352b4985ac10831f0bd64183: function AS_Form_d535a2a6352b4985ac10831f0bd64183(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_j8bb4e5d65c8441e86e9a82d16bf5c25: function AS_Form_j8bb4e5d65c8441e86e9a82d16bf5c25(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_d95f4c7242df4751a8621a007d0d2ff2: function AS_BarButtonItem_d95f4c7242df4751a8621a007d0d2ff2(eventobject) {
        var self = this;
        this.onCancelClick();
    },
    AS_Button_f27cbfd97cc14858b4280c899ad6a6a2: function AS_Button_f27cbfd97cc14858b4280c899ad6a6a2(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_g064cdc4508749e1ba564f9efa50e1c9: function AS_Button_g064cdc4508749e1ba564f9efa50e1c9(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_ec9cd86084844583af2b482a829b78f4: function AS_Button_ec9cd86084844583af2b482a829b78f4(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_g414fbc43114438aa95f319c481a3219: function AS_Button_g414fbc43114438aa95f319c481a3219(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_e36927aa07be4fb6b26680f46999ae80: function AS_Button_e36927aa07be4fb6b26680f46999ae80(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_af6f9b532bcb4e72b3437cd94801f0fb: function AS_Button_af6f9b532bcb4e72b3437cd94801f0fb(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_f21008d2aa3e484db49c38c12a6fcf1b: function AS_Button_f21008d2aa3e484db49c38c12a6fcf1b(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_i5e10a78d1e04ab8a417fdd5bf769938: function AS_Button_i5e10a78d1e04ab8a417fdd5bf769938(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_c1b1ad09661247a7a5762222b6dd49a7: function AS_Button_c1b1ad09661247a7a5762222b6dd49a7(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_bad26045e4764e6892d9dd7779fa1f0d: function AS_Button_bad26045e4764e6892d9dd7779fa1f0d(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_ae13af8ebc4340f1b77764127888fb57: function AS_Image_ae13af8ebc4340f1b77764127888fb57(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar()
    }
});
define("SavingsPotModule/frmEditOptimizeGoalController", ["SavingsPotModule/userfrmEditOptimizeGoalController", "SavingsPotModule/frmEditOptimizeGoalControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmEditOptimizeGoalController");
    var controllerActions = ["SavingsPotModule/frmEditOptimizeGoalControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
