define("SavingsPotModule/userfrmOptimizeGoalController", ["CommonUtilities"], function(CommonUtilities) {
    return {
        keypadString: '0',
        isPeriodUsed: false,
        timerCounter: 0,
        init: function() {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm, scope.navigateCustomBack);
        },
        preShow: function() {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.setVisibility(false);
            }
            this.view.flxKeypad.setVisibility(false);
            var configManager = applicationManager.getConfigurationManager();
            var maxAmount = configManager.getMaxMonthlyDebitAmount();
            var maxMonth = configManager.getMaxMonths();
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            this.view.lblMaxVal.text = maxMonth.toString();
            this.view.lblDollar.text = currencySymbol;
            this.view.lblMinValue.text = currencySymbol + "0";
            this.view.lblMaxValue.text = currencySymbol + maxAmount;
            this.view.SliderAmount.max = maxAmount;
            this.view.SliderMonth.max = maxMonth;
            this.view.btnContinue.onClick = this.continueOnClick;
            this.view.customHeader.flxBack.onTouchEnd = this.navigateCustomBack;
            this.view.customHeader.btnRight.onClick = this.onCancelClick;
            this.view.flxAmountWrapper.onClick = this.showKeypad;
            this.view.lblDone.onTouchStart = this.hideKeypad;
            this.view.lblMonthlyDebitValue.onTouchStart = this.navToAmount;
            this.view.lblMonthsValue.onTouchStart = this.navToMonths;
            var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
            var savingsObj = SavingsPotMod.getCreateObject();
            this.view.lblGoalname.text = savingsObj.potName;
            this.setReference(savingsObj.targetAmount, savingsObj.targetPeriod, savingsObj.periodicContribution);
            this.setDataToForm();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        postShow: function() {
            this.btnEnabling();
            this.calculation();
            this.view.SliderAmount.onSelection = this.monthsCalculation;
            this.view.SliderMonth.onSelection = this.amountCalculation;
        },
        btnEnabling: function() {
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            if (this.keypadString === '0' || this.view.lblMonthlyDebitValue.text === currencySymbol + " 0.00" || this.view.lblMonthsValue.text === "0 Months") {
                this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
                this.view.btnContinue.setEnabled(false);
                this.view.lblAmount.text = this.view.keypad.formatAmount(this.keypadString);
            } else {
                this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
                this.view.btnContinue.setEnabled(true);
            }
            var today = new Date();
            if (this.view.lblMonthsValue.text === "0 Months") {
                this.view.lblFromValue.text = "-";
            } else {
                var date = today.getDate();
                if (date < 10) {
                    date = "0" + date;
                }
                var shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                var monthVal = this.view.lblMonthsValue.text;
                var month = monthVal.split(" ")[0];
                var targetPeriod = today.getMonth() + 1 + JSON.parse(month);
                var targetYear = targetPeriod;
                var year = today.getFullYear();
                if (targetPeriod > 12) {
                    targetPeriod = targetPeriod % 12;
                    var period = targetYear / 12;
                    if (period == 1 || period == 2 || period == 3 || period == 4 || period == 5 || period == 6 || period == 7 || period == 8 || period == 9 || period == 10) {
                        period = period - 1;
                    }
                    year = year + Math.floor(period);
                }
                if (targetPeriod == 1) {
                    this.view.lblFromValue.text = date + " " + shortMonths[0] + " " + year;
                } else if (targetPeriod == 2) {
                    this.view.lblFromValue.text = date + " " + shortMonths[1] + " " + year;
                } else if (targetPeriod == 3) {
                    this.view.lblFromValue.text = date + " " + shortMonths[2] + " " + year;
                } else if (targetPeriod == 4) {
                    this.view.lblFromValue.text = date + " " + shortMonths[3] + " " + year;
                } else if (targetPeriod == 5) {
                    this.view.lblFromValue.text = date + " " + shortMonths[4] + " " + year;
                } else if (targetPeriod == 6) {
                    this.view.lblFromValue.text = date + " " + shortMonths[5] + " " + year;
                } else if (targetPeriod == 7) {
                    this.view.lblFromValue.text = date + " " + shortMonths[6] + " " + year;
                } else if (targetPeriod == 8) {
                    this.view.lblFromValue.text = date + " " + shortMonths[7] + " " + year;
                } else if (targetPeriod == 9) {
                    this.view.lblFromValue.text = date + " " + shortMonths[8] + " " + year;
                } else if (targetPeriod == 10) {
                    this.view.lblFromValue.text = date + " " + shortMonths[9] + " " + year;
                } else if (targetPeriod == 11) {
                    this.view.lblFromValue.text = date + " " + shortMonths[10] + " " + year;
                } else {
                    this.view.lblFromValue.text = date + " " + shortMonths[11] + " " + year;
                }
            }
        },
        monthsCalculation: function() {
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                var configManager = applicationManager.getConfigurationManager();
                var maxMonth = configManager.getMaxMonths();
                var debitAmount = this.view.SliderAmount.selectedValue;
                if (this.keypadString !== '0') {
                    var targetAmount = this.keypadString.replace(/[\\. ]+/g, "");
                    targetAmount = targetAmount.replace(",", ".");
                    if (targetAmount < debitAmount) {
                        this.view.lblError.setVisibility(true);
                        this.view.lblError.text = "Monthly Debit Amount is greater than Goal Amount";
                        this.view.SliderAmount.selectedValue = "0";
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                        this.view.lblMonthsValue.text = "0 Months";
                        this.view.SliderMonth.selectedValue = "0";
                        this.btnEnabling();
                    } else {
                        var val = this.keypadString;
                        var value = val.replace(/[\\. ]+/g, "");
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " " + debitAmount + ",00";
                        this.view.lblError.setVisibility(false);
                        if (debitAmount !== 0) {
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " " + debitAmount + ",00";
                            value = value.replace(",", ".");
                            var noOfMonths = JSON.parse(value) / debitAmount;
                            this.view.lblMonthsValue.text = noOfMonths + " Months";
                            this.view.SliderMonth.selectedValue = noOfMonths;
                            this.updateAmountValue();
                            this.roundOff("true");
                            if (this.view.lblMonthsValue.text !== "0 Months") {
                                var noOfMonth = this.view.lblMonthsValue.text;
                                var month = noOfMonth.split(" ")[0];
                                var monthlyDebitAmt = JSON.parse(value) % debitAmount;
                                if (monthlyDebitAmt != 0) {
                                    var monthlyDebit = JSON.parse(value) / month;
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
                            this.updateAmountValue();
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
                if (this.keypadString !== '0') {
                    var targetAmount = this.keypadString.replace(/[, ]+/g, "");
                    if (targetAmount < debitAmount) {
                        this.view.lblError.setVisibility(true);
                        this.view.lblError.text = "Monthly Debit Amount is greater than Goal Amount";
                        this.view.SliderAmount.selectedValue = "0";
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                        this.view.lblMonthsValue.text = "0 Months";
                        this.view.SliderMonth.selectedValue = "0";
                        this.btnEnabling();
                    } else {
                        var val = this.keypadString;
                        var value = val.replace(/[, ]+/g, "");
                        this.view.lblMonthlyDebitValue.text = currencySymbol + " " + debitAmount + ".00";
                        this.view.lblError.setVisibility(false);
                        if (debitAmount !== 0) {
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " " + debitAmount + ".00";
                            var noOfMonths = JSON.parse(value) / debitAmount;
                            this.view.lblMonthsValue.text = noOfMonths + " Months";
                            this.view.SliderMonth.selectedValue = noOfMonths;
                            this.updateAmountValue();
                            this.roundOff();
                            if (this.view.lblMonthsValue.text !== "0 Months") {
                                var noOfMonth = this.view.lblMonthsValue.text;
                                var month = noOfMonth.split(" ")[0];
                                var monthlyDebitAmt = JSON.parse(value) % debitAmount;
                                if (monthlyDebitAmt != 0) {
                                    var monthlyDebit = JSON.parse(value) / month;
                                    this.view.lblError.text = "Monthly debit amount is adjusted based on period of months";
                                    this.view.lblError.setVisibility(true);
                                    this.view.SliderAmount.selectedValue = monthlyDebit;
                                    this.view.lblMonthlyDebitValue.text = currencySymbol + " " + Math.ceil(monthlyDebit) + ".00";
                                }
                            }
                            this.btnEnabling();
                        } else {
                            this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                            this.view.lblMonthsValue.text = "0 Months";
                            this.view.SliderMonth.selectedValue = "0";
                            this.updateAmountValue();
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
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                var configManager = applicationManager.getConfigurationManager();
                var maxAmount = configManager.getMaxMonthlyDebitAmount();
                var months = this.view.SliderMonth.selectedValue;
                if (this.keypadString !== '0') {
                    var val = this.keypadString;
                    var value = val.replace(/[\\. ]+/g, "");
                    this.view.lblMonthsValue.text = months + " Months";
                    if (months !== 0) {
                        this.view.lblError.setVisibility(false);
                        this.view.lblMonthsValue.text = months + " Months";
                        value = value.replace(",", ".");
                        var periodicContribution = JSON.parse(value) / months;
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
                if (this.keypadString !== '0') {
                    var val = this.keypadString;
                    var value = val.replace(/[, ]+/g, "");
                    this.view.lblMonthsValue.text = months + " Months";
                    if (months !== 0) {
                        this.view.lblError.setVisibility(false);
                        this.view.lblMonthsValue.text = months + " Months";
                        var periodicContribution = JSON.parse(value) / months;
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
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                var configManager = applicationManager.getConfigurationManager();
                var maxAmount = configManager.getMaxMonthlyDebitAmount();
                var maxMonth = configManager.getMaxMonths();
                var debitValue = this.view.lblMonthlyDebitValue.text;
                var monthlyValue = debitValue.split(" ")[1];
                var monthlyDebit = monthlyValue.split(",")[0];
                var monthsValue = this.view.lblMonthsValue.text;
                var months = monthsValue.split(" ")[0];
                var val = this.keypadString;
                var value = val.replace(/[\\. ]+/g, "");
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
                                this.view.lblError.text = "Monthly debit Amount is greater than Goal amount";
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
                if (this.view.lblMonthlyDebitValue.text == "$ null" || this.view.lblMonthsValue.text == "null Months" || this.view.lblMonthsValue.text == "0 Months") {
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
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
                var val = this.keypadString;
                var value = val.replace(/[, ]+/g, "");
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
                                this.view.lblError.text = "Monthly debit Amount is greater than Goal amount";
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
                if (this.view.lblMonthlyDebitValue.text == "$ null" || this.view.lblMonthsValue.text == "null Months") {
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
                }
            }
        },
        setDataToMonths: function(maxAmount) {
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            var budgetDetails = SavingsPotMod.presentationController.getBudgetDetails();
            if (budgetDetails.periodicContribution !== undefined) {
                this.view.lblMonthlyDebitValue.text = currencySymbol + " " + budgetDetails.periodicContribution;
            }
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                var periodicContri = budgetDetails.periodicContribution;
                var split = periodicContri.split(",");
                var amount = split[0];
                var monthlyAmount = amount.replace(/[\\. ]+/g, "");
                var targetAmount = this.keypadString.replace(/[\\. ]+/g, "");
                if (monthlyAmount > maxAmount || targetAmount < JSON.parse(monthlyAmount)) {
                    if (monthlyAmount > maxAmount) {
                        this.view.lblError.text = "Monthly debit amount is greater than " + maxAmount;
                        this.view.lblError.setVisibility(true);
                    }
                    if (targetAmount < JSON.parse(monthlyAmount)) {
                        this.view.lblError.text = "Monthly debit amount is greater than Goal amount";
                        this.view.lblError.setVisibility(true);
                    }
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
                }
            } else {
                var periodicContri = budgetDetails.periodicContribution;
                var split = periodicContri.split(".");
                var amount = split[0];
                var monthlyAmount = amount.replace(/[, ]+/g, "");
                var targetAmount = this.keypadString.replace(/[, ]+/g, "");
                if (monthlyAmount > maxAmount || targetAmount < JSON.parse(monthlyAmount)) {
                    if (monthlyAmount > maxAmount) {
                        this.view.lblError.text = "Monthly debit amount is greater than " + maxAmount;
                        this.view.lblError.setVisibility(true);
                    }
                    if (targetAmount < JSON.parse(monthlyAmount)) {
                        this.view.lblError.text = "Monthly debit amount is greater than Goal amount";
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
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            var budgetDetails = SavingsPotMod.presentationController.getBudgetDetails();
            if (budgetDetails.targetPeriod !== undefined) {
                this.view.lblMonthsValue.text = budgetDetails.targetPeriod + " Months";
            }
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
                if (budgetDetails.targetPeriod > maxMonth) {
                    this.view.lblError.text = "Number of months is greater than " + maxMonth.toString();
                    this.view.lblError.setVisibility(true);
                    this.view.SliderAmount.selectedValue = "0";
                    this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                    this.view.lblMonthsValue.text = "0 Months";
                    this.view.SliderMonth.selectedValue = "0";
                }
            } else {
                if (budgetDetails.targetPeriod > maxMonth) {
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
        setDataToForm: function() {
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            var budgetDetails = SavingsPotMod.presentationController.getBudgetDetails();
            if (budgetDetails.periodicContribution !== undefined) {
                if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") this.view.lblMonthlyDebitValue.text = currencySymbol + " " + budgetDetails.periodicContribution.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                else this.view.lblMonthlyDebitValue.text = currencySymbol + " " + budgetDetails.periodicContribution;
            }
            if (budgetDetails.targetPeriod !== undefined) {
                this.view.lblMonthsValue.text = budgetDetails.targetPeriod + " Months";
            }
        },
        setReference: function(targetAmount, targetPeriod, periodicContribution) {
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            if (targetAmount) {
                if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") this.keypadString = targetAmount.split(",")[0].replace(/[\\.]+/g, "");
                else this.keypadString = targetAmount;
                this.view.lblAmount.text = targetAmount;
            } else {
                this.view.lblAmount.text = "0";
                this.keypadString = "0";
            }
            if (targetPeriod) {
                this.view.lblMonthsValue.text = targetPeriod;
            } else {
                this.view.lblMonthsValue.text = "0 Months";
            }
            if (periodicContribution) {
                this.view.lblMonthlyDebitValue.text = periodicContribution;
            } else {
                if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
                else this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
            }
        },
        navigateCustomBack: function() {
            var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
            SavingsPotMod.commonFunctionForgoBack();
        },
        showKeypad: function() {
            this.view.flxKeypad.setVisibility(true);
        },
        hideKeypad: function() {
            var targetAmount = this.view.lblAmount.text;
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            //  SavingsPotMod.presentationController.updateTargetAmount(targetAmount);
            this.view.SliderAmount.selectedValue = "0";
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") this.view.lblMonthlyDebitValue.text = currencySymbol + " 0,00";
            else this.view.lblMonthlyDebitValue.text = currencySymbol + " 0.00";
            this.view.lblMonthsValue.text = "0 Months";
            this.view.SliderMonth.selectedValue = "0";
            this.view.flxKeypad.setVisibility(false);
            this.view.lblError.setVisibility(false);
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
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
        onCancelClick: function() {
            var navManager = applicationManager.getNavigationManager();
            var previousForm = navManager.getPreviousForm();
            var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
            if (previousForm === "frmCreateGoalVerifyDetails") {
                SavingsPotMod.commonFunctionForNavigation("frmCreateGoalVerifyDetails");
            } else {
                SavingsPotMod.clearCreateData();
                this.view.lblError.setVisibility(false);
                this.view.SliderAmount.selectedValue = "0";
                this.view.SliderMonth.selectedValue = "0";
                var createBudgetPermission = applicationManager.getConfigurationManager().checkUserPermission("BUDGET_POT_CREATE");
                (createBudgetPermission) ? navManager.navigateTo("frmSavingsType"): navManager.navigateTo("frmMySavingsPot");
            }
        },
        navToAmount: function() {
            var contribution = this.view.lblMonthlyDebitValue.text;
            var monthlycontribution = contribution.split(" ");
            var periodicContribution = monthlycontribution[1];
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") periodicContribution = periodicContribution.replace(/[\\.]+/g, "");
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            SavingsPotMod.presentationController.updatePeriodicContribution(periodicContribution);
            var navManager = applicationManager.getNavigationManager();
            navManager.navigateTo("frmGoalAmount");
        },
        navToMonths: function() {
            var period = this.view.lblMonthsValue.text;
            var periodOfMonths = period.split(" ");
            var targetPeriod = periodOfMonths[0];
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            SavingsPotMod.presentationController.updateTargetPeriod(targetPeriod);
            var navManager = applicationManager.getNavigationManager();
            navManager.navigateTo("frmCreateGoalMonths");
        },
        continueOnClick: function() {
            var targetAmount = this.view.lblAmount.text;
            var period = this.view.lblMonthsValue.text;
            var periodOfMonths = period.split(" ");
            var targetPeriod = periodOfMonths[0];
            var contribution = this.view.lblMonthlyDebitValue.text;
            var monthlycontribution = contribution.split(" ");
            var periodicContribution = monthlycontribution[1];
            if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") periodicContribution = periodicContribution.replace(/[\\.]+/g, "");
            var navManager = applicationManager.getNavigationManager();
            var previousForm = navManager.getPreviousForm();
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            //   var targetAmount = this.view.lblAmount.text;
            //   var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            //   var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            SavingsPotMod.presentationController.updateTargetAmount(targetAmount);
            if (previousForm === "frmCreateGoalVerifyDetails") {
                SavingsPotMod.presentationController.navToGoalFrequency(targetAmount, targetPeriod, periodicContribution, "frmCreateGoalVerifyDetails");
            } else {
                SavingsPotMod.presentationController.navToGoalFrequency(targetAmount, targetPeriod, periodicContribution, "frmCreateSavingsGoalFrequency");
            }
        }
    };
});
define("SavingsPotModule/frmOptimizeGoalControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_fe734ee1666140df9e47dcabe451d1f4: function AS_Button_fe734ee1666140df9e47dcabe451d1f4(eventobject) {
        var self = this;
        this.setKeypadChar('.');
    },
    AS_Form_af1b7ef7c8ef4a1e91933cea412ae006: function AS_Form_af1b7ef7c8ef4a1e91933cea412ae006(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_j0c80864be2b4978b094c60a5c0a5b24: function AS_Form_j0c80864be2b4978b094c60a5c0a5b24(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_hda45814ef244814824d75622bb37ae5: function AS_Form_hda45814ef244814824d75622bb37ae5(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_f376fc428a104b93868437c0cf6980fd: function AS_BarButtonItem_f376fc428a104b93868437c0cf6980fd(eventobject) {
        var self = this;
        this.onCancelClick();
    },
    AS_Button_aafc0ce91842457a9e67cb5e9ee08e38: function AS_Button_aafc0ce91842457a9e67cb5e9ee08e38(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_b050129e4c9e40ba9fbc80271dca25bc: function AS_Button_b050129e4c9e40ba9fbc80271dca25bc(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_gea1b9a4cbe94d61b8341c279adc328d: function AS_Button_gea1b9a4cbe94d61b8341c279adc328d(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_g769d98e644e4ffabc8b0035efb2dc7f: function AS_Button_g769d98e644e4ffabc8b0035efb2dc7f(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_j26a78bda6da440ab75ea48e3e5b1a1d: function AS_Button_j26a78bda6da440ab75ea48e3e5b1a1d(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_ea10f2a81f43418b9e9758d53d01c304: function AS_Button_ea10f2a81f43418b9e9758d53d01c304(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_g0d9479bd23148c0884b15085549cb98: function AS_Button_g0d9479bd23148c0884b15085549cb98(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_f1bd99dd5ad9474384a77fba93e9dc0f: function AS_Button_f1bd99dd5ad9474384a77fba93e9dc0f(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_de084ecc648b493dbfde3872a6ac990a: function AS_Button_de084ecc648b493dbfde3872a6ac990a(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_e8255b4b9d0e41b182d67289015d6299: function AS_Button_e8255b4b9d0e41b182d67289015d6299(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_fc3243a85ede4e32887876bf9e9c6079: function AS_Image_fc3243a85ede4e32887876bf9e9c6079(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar()
    }
});
define("SavingsPotModule/frmOptimizeGoalController", ["SavingsPotModule/userfrmOptimizeGoalController", "SavingsPotModule/frmOptimizeGoalControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmOptimizeGoalController");
    var controllerActions = ["SavingsPotModule/frmOptimizeGoalControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
