define("SavingsPotModule/userfrmGoalfundAmountController", ["CommonUtilities"], function(CommonUtilities) {
    return {
        keypadString: '0.00',
        isPeriodUsed: false,
        timerCounter: 0,
        init: function() {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm, scope.navigateCustomBack);
        },
        navigateCustomBack: function() {
            var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
            SavingsPotMod.commonFunctionForgoBack();
        },
        preShow: function() {
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
                if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") paramValue = paramValue.replace(".", ",");
            } else {
                if (type === "budgetFund") {
                    var budgetDetails = SavingsPotMod.getBudgetDetails();
                    if (budgetDetails.fundAmount) {
                        paramValue = budgetDetails.fundAmount;
                    } else {
                        if (navManager.getPreviousForm() !== "frmBudgetInitiateTransferDetails") {
                            paramValue = parseFloat(budgetDetails.targetAmount);
                            paramValue = paramValue.toFixed(2);
                        } else {
                            paramValue = budgetDetails.targetAmount;
                        }
                    }
                    if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") paramValue = paramValue.replace(".", ",");
                } else {
                    var budgetDetails = SavingsPotMod.getFundWithDrawDetails();
                    paramValue = budgetDetails.amount;
                }
            }
            this.setReference(paramValue);
            this.view.flxError.isVisible = false;
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        postShow: function() {
            this.updateAmountValue();
        },
        setReference: function(targetAmount) {
            if (targetAmount) {
                this.keypadString = targetAmount;
            } else {
                if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") this.keypadString = "0,00";
                else this.keypadString = "0.00";
            }
        },
        setKeypadChar: function(char) {
            CommonUtilities.setKeypadChar(this, char);
            this.updateAmountValue();
        },
        clearKeypadChar: function() {
            CommonUtilities.clearKeypadChar(this);
            this.updateAmountValue();
        },
        updateAmountValue: function() {
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
        continueOnClick: function() {
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
                } else {
                    SavingsPotModule.presentationController.navToFundVerifyDetails(fundAmount, "Credit", "frmGoalfundverifyDetails");
                }
            }
        }
    };
});
define("SavingsPotModule/frmGoalfundAmountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_c0020ce507834f898551bc0273aae0e0: function AS_Button_c0020ce507834f898551bc0273aae0e0(eventobject) {
        var self = this;
        this.setKeypadChar('.');
    },
    AS_Form_d1f92020b8084346b2dfc30321ecf585: function AS_Form_d1f92020b8084346b2dfc30321ecf585(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_g40c639a53144b09b35554610392ac20: function AS_Form_g40c639a53144b09b35554610392ac20(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_dda5352f17de4f4f9669f32e7e2c8efd: function AS_Form_dda5352f17de4f4f9669f32e7e2c8efd(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_Button_iecf82af08704f8894921a9f781c66df: function AS_Button_iecf82af08704f8894921a9f781c66df(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_gaedd34a93ed481fb251e49c0b55145b: function AS_Button_gaedd34a93ed481fb251e49c0b55145b(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_f3f301ee2f4f46b9bc838e12177d58bd: function AS_Button_f3f301ee2f4f46b9bc838e12177d58bd(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_bc1c033b3cb94caaa3e0b7a71b1065c4: function AS_Button_bc1c033b3cb94caaa3e0b7a71b1065c4(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_b153f75d95be47a882a5a70a02f07a84: function AS_Button_b153f75d95be47a882a5a70a02f07a84(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_h479ac29d9e64ab39dcb755de2b55b56: function AS_Button_h479ac29d9e64ab39dcb755de2b55b56(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_dedae2416afc4811894a20621801de4d: function AS_Button_dedae2416afc4811894a20621801de4d(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_jb015e4af92145acab143b7e03a7e32e: function AS_Button_jb015e4af92145acab143b7e03a7e32e(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_id2043f6b78a4391916b34771df4bf00: function AS_Button_id2043f6b78a4391916b34771df4bf00(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_cdd9b3e8f1ea4e3fa2e47706a687bb8a: function AS_Button_cdd9b3e8f1ea4e3fa2e47706a687bb8a(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_a871232c5c284627b59cb1ac2cd6179f: function AS_Image_a871232c5c284627b59cb1ac2cd6179f(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar()
    }
});
define("SavingsPotModule/frmGoalfundAmountController", ["SavingsPotModule/userfrmGoalfundAmountController", "SavingsPotModule/frmGoalfundAmountControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmGoalfundAmountController");
    var controllerActions = ["SavingsPotModule/frmGoalfundAmountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
