define("SavingsPotModule/userfrmWithdrawAmountController", ["CommonUtilities"], function(CommonUtilities) {
    return {
        keypadString: '0.00',
        isPeriodUsed: false,
        timerCounter: 0,
        init: function() {
            var scope = this;
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm, scope.navigateCustomBack);
        },
        preShow: function() {
            if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
                this.view.flxHeader.isVisible = true;
            } else {
                this.view.flxHeader.isVisible = false;
            }
            this.view.flxError.isVisible = false;
            this.view.btnContinue.onClick = this.btnContinueFunction;
            this.view.customHeader.flxBack.onTouchEnd = this.navigateCustomBack;
            var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
            var savingsObj = SavingsPotMod.getFundWithDrawDetails();
            this.view.lblDollar.text = SavingsPotMod.getCurrencySymbol();
            this.setReference(savingsObj.amount);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        postShow: function() {
            this.updateAmountValue();
        },
        setReference: function(amountWithdrawn) {
            if (amountWithdrawn) {
                this.keypadString = amountWithdrawn;
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
        navigateCustomBack: function() {
            var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
            SavingsPotMod.commonFunctionForgoBack();
        },
        btnContinueFunction: function() {
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var type = SavingsPotMod.presentationController.getSavingsType();
            var navManager = applicationManager.getNavigationManager();
            var potName = SavingsPotMod.presentationController.getSavingsPotName();
            if (type === "Goal") {
                var Details = navManager.getCustomInfo("frmSavingsGoalViewDetails");
            } else if (type === "Budget") {
                var Details = navManager.getCustomInfo("frmBudgetPotDetails");
            }
            var amountWithdrawn = this.keypadString;
            if (parseFloat(amountWithdrawn) > parseFloat(Details.availableBalance)) {
                this.view.flxError.isVisible = true;
                this.view.lblError.text = "You can’t withdraw more than the Available Balance of your pot" + " " + potName;
            } else {
                this.view.flxError.isVisible = false;
                SavingsPotMod.presentationController.navToFundVerifyDetails(amountWithdrawn, "Debit", "frmWithdrawVerifyDetails");
            }
        }
    };
});
define("SavingsPotModule/frmWithdrawAmountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ba20f6a226614b89b83d683b4f253ebd: function AS_Form_ba20f6a226614b89b83d683b4f253ebd(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b806312fa6ba4beeac77631c64d2354f: function AS_Form_b806312fa6ba4beeac77631c64d2354f(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_b0727c194dc84b448fb15be168c44ab8: function AS_Form_b0727c194dc84b448fb15be168c44ab8(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_Button_ee11bacae38940a5a870e39c674619af: function AS_Button_ee11bacae38940a5a870e39c674619af(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_g801601dcd5a44b0b1e59e0a4170c741: function AS_Button_g801601dcd5a44b0b1e59e0a4170c741(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_c4cb7632095f4a7caec5882ab2e300c0: function AS_Button_c4cb7632095f4a7caec5882ab2e300c0(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_eea55753988d4971b419d64ec6e2f85d: function AS_Button_eea55753988d4971b419d64ec6e2f85d(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_a1b1dfaa348b4ab19df1dcadae6ed50b: function AS_Button_a1b1dfaa348b4ab19df1dcadae6ed50b(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_f731bd0bcf0f4bb08eca30d4a3962ecd: function AS_Button_f731bd0bcf0f4bb08eca30d4a3962ecd(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_c89e3ddedb9947e0a9b1986c7e82f24e: function AS_Button_c89e3ddedb9947e0a9b1986c7e82f24e(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_b9dc9d7617a545f48ee0b89b0a5b7710: function AS_Button_b9dc9d7617a545f48ee0b89b0a5b7710(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_j1bb645e84f24523b3d1471f590a8387: function AS_Button_j1bb645e84f24523b3d1471f590a8387(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_b04bc6b3c2744ffaae33414eaa58587d: function AS_Button_b04bc6b3c2744ffaae33414eaa58587d(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_bc26a9adc5044d7083a8bc8cd57281ca: function AS_Image_bc26a9adc5044d7083a8bc8cd57281ca(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar()
    }
});
define("SavingsPotModule/frmWithdrawAmountController", ["SavingsPotModule/userfrmWithdrawAmountController", "SavingsPotModule/frmWithdrawAmountControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmWithdrawAmountController");
    var controllerActions = ["SavingsPotModule/frmWithdrawAmountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
