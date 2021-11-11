define("SavingsPotModule/userfrmBudgetfundAmountController", ["CommonUtilities"], function(CommonUtilities) {
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
                this.view.title = kony.i18n.getLocalizedString("i18n.savingspot.BudgetAmount");
                this.view.flxHeader.isVisible = false;
            }
            var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
            var flow = SavingsPotMod.presentationController.getSavingsFlow();
            var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
            this.view.lblDollar.text = currencySymbol;
            if (flow) {
                var navManager = applicationManager.getNavigationManager();
                var goalDetails = navManager.getCustomInfo("frmBudgetPotDetails");
                this.setReference(goalDetails.targetAmount);
            } else {
                var savingsObj = SavingsPotMod.presentationController.getCreateObject();
                this.setReference(savingsObj.targetAmount);
            }
            this.view.customHeader.btnRight.onClick = this.onCancelClick;
            this.view.btnContinue.onClick = this.btnContinueFunction;
            this.view.customHeader.flxBack.onTouchEnd = this.navigateCustomBack;
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
                keypadStringCommas = CommonUtilities.updateAmountValue(this);
                this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
                this.view.btnContinue.setEnabled(true);
                this.view.lblAmount.text = this.view.keypad.formatAmount(keypadStringCommas);
            }
        },
        navigateCustomBack: function() {
            var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
            SavingsPotMod.commonFunctionForgoBack();
        },
        onBack: function() {
            var navigationMan = applicationManager.getNavigationManager();
            navigationMan.goBack();
        },
        onCancelClick: function() {
            var navManager = applicationManager.getNavigationManager();
            var previousForm = navManager.getPreviousForm();
            var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
            var flow = SavingsPotMod.getSavingsFlow();
            if (flow) {
                SavingsPotMod.commonFunctionForNavigation("frmEditBudget");
            } else {
                if (previousForm === "frmBudgetfundAmount") {
                    SavingsPotMod.commonFunctionForNavigation("frmCreateBudgetVerifyDetails");
                } else {
                    SavingsPotMod.clearCreateData();
                    var createGoalPermission = applicationManager.getConfigurationManager().checkUserPermission("GOAL_POT_CREATE");
                    (createGoalPermission) ? navManager.navigateTo("frmSavingsType"): navManager.navigateTo("frmMySavingsPot");
                }
            }
        },
        btnContinueFunction: function() {
            if (this.keypadString !== '0.00') {
                var navManager = applicationManager.getNavigationManager();
                var budgetamount = this.keypadString;
                var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
                var flow = SavingsPotMod.presentationController.getSavingsFlow();
                if (flow) {
                    var goalDetails = navManager.getCustomInfo("frmBudgetPotDetails");
                    goalDetails.targetAmount = budgetamount;
                    navManager.setCustomInfo("frmBudgetPotDetails", goalDetails);
                    SavingsPotMod.presentationController.navToBudgetVerifyDetails(budgetamount, "frmEditBudget");
                } else {
                    SavingsPotMod.presentationController.navToBudgetVerifyDetails(budgetamount, "frmCreateBudgetVerifyDetails");
                }
            }
        }
    };
});
define("SavingsPotModule/frmBudgetfundAmountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b66b3952600e4a4f9e5459d433a115af: function AS_Form_b66b3952600e4a4f9e5459d433a115af(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_jaa3a08f25cd4dc2b569fe089a24dcad: function AS_Form_jaa3a08f25cd4dc2b569fe089a24dcad(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_hddede5aa18348f58c647d18cc4d82e4: function AS_Form_hddede5aa18348f58c647d18cc4d82e4(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ee1d2f13fc094865ab3cfadb2a683113: function AS_BarButtonItem_ee1d2f13fc094865ab3cfadb2a683113(eventobject) {
        var self = this;
        this.onCancelClick();
    },
    AS_Button_d83bc859a1084ccba2a7f12518ac3798: function AS_Button_d83bc859a1084ccba2a7f12518ac3798(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_a96746b7c5a74338a7a2d22fd9fd4c52: function AS_Button_a96746b7c5a74338a7a2d22fd9fd4c52(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_hd1794866c1a456cad48b7f98af93b92: function AS_Button_hd1794866c1a456cad48b7f98af93b92(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_c4de5bf6dfc0479db93b481eb2d437d3: function AS_Button_c4de5bf6dfc0479db93b481eb2d437d3(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_ia6871622dd34996954bd103131fa0da: function AS_Button_ia6871622dd34996954bd103131fa0da(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_b53868b2d7c94304b03fdc821ef9f0a7: function AS_Button_b53868b2d7c94304b03fdc821ef9f0a7(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_dfc6e9b030d44951a22acea941ade9f5: function AS_Button_dfc6e9b030d44951a22acea941ade9f5(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_fca65abbd2ba4823b10c001eb38de8c7: function AS_Button_fca65abbd2ba4823b10c001eb38de8c7(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_efc38ef5a9324be4a9c4545117a5123c: function AS_Button_efc38ef5a9324be4a9c4545117a5123c(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_cf2732291cbf4a738a576af47a26635b: function AS_Button_cf2732291cbf4a738a576af47a26635b(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_g91bb5a3d2d8430f89c74e93c9faf64e: function AS_Image_g91bb5a3d2d8430f89c74e93c9faf64e(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar()
    }
});
define("SavingsPotModule/frmBudgetfundAmountController", ["SavingsPotModule/userfrmBudgetfundAmountController", "SavingsPotModule/frmBudgetfundAmountControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmBudgetfundAmountController");
    var controllerActions = ["SavingsPotModule/frmBudgetfundAmountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
