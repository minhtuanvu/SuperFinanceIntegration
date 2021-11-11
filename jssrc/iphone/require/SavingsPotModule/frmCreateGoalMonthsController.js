define("SavingsPotModule/userfrmCreateGoalMonthsController", {
    keypadString: '',
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
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.customHeader.flxBack.onClick = this.onBack;
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var flow = SavingsPotMod.presentationController.getSavingsFlow();
        if (flow) {
            var navManager = applicationManager.getNavigationManager();
            var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
            this.setReference(goalDetails.targetPeriod);
        } else {
            var savingsObj = SavingsPotMod.presentationController.getCreateObject();
            this.setReference(savingsObj.targetPeriod);
        }
    },
    postShow: function() {
        this.updateAmountValue();
    },
    setReference: function(targetPeriod) {
        if (targetPeriod) {
            this.keypadString = targetPeriod;
            if (targetPeriod == "0") {
                this.view.lblAmount.text = "";
                this.keypadString = "";
            }
        } else {
            this.view.lblAmount.text = "";
            this.keypadString = "";
        }
    },
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    setKeypadChar: function(char) {
        var char = char.toString();
        if (this.keypadString === '') {
            this.keypadString = char;
        } else {
            this.keypadString = this.keypadString + char;
        }
        this.updateAmountValue();
    },
    clearKeypadChar: function() {
        if (this.keypadString === '') return;
        var value = (this.keypadString / 10).toString();
        if (parseInt(value) > 0) {
            var value1 = value.split('.')[0];
            this.keypadString = value1;
            var count = this.keypadString.split("");
            if (count === 0) {
                this.keypadString = '';
            }
        } else {
            this.keypadString = '';
        }
        this.updateAmountValue();
    },
    updateAmountValue: function() {
        if (this.keypadString === '') {
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
            this.view.lblAmount.text = this.view.keypad.formatAmount(this.keypadString);
        } else {
            var finalValue = this.keypadString;
            this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnContinue.setEnabled(true);
            this.view.lblAmount.text = this.view.keypad.formatAmount(finalValue);
        }
    },
    continueOnClick: function() {
        var targetPeriod = this.view.lblAmount.text;
        var navManager = applicationManager.getNavigationManager();
        var SavingsPotModule = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotModule.setSavingsType("targetPeriod");
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var flow = SavingsPotMod.presentationController.getSavingsFlow();
        if (flow) {
            var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
            goalDetails.targetPeriod = targetPeriod;
            navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails);
            SavingsPotMod.presentationController.navToOptimizeGoal(targetPeriod, "frmEditOptimizeGoal");
        } else {
            var previousForm = navManager.getPreviousForm();
            if (previousForm === "frmCreateGoalVerifyDetails") {
                SavingsPotModule.initializeStateData(true, "frmOptimizeGoal");
            }
            SavingsPotMod.presentationController.navToOptimizeGoalTargetPeriod(targetPeriod, "frmOptimizeGoal");
        }
    }
});
define("SavingsPotModule/frmCreateGoalMonthsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_e33b0ddda24f4fbfba3b76fc40e32d11: function AS_Button_e33b0ddda24f4fbfba3b76fc40e32d11(eventobject) {
        var self = this;
        this.setKeypadChar('.');
    },
    AS_Form_c442b2765bc646b3b1c81cd36b70682b: function AS_Form_c442b2765bc646b3b1c81cd36b70682b(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_hcebdf5a2b7741bc9ceef93d61761b8b: function AS_Form_hcebdf5a2b7741bc9ceef93d61761b8b(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_i216e276846047f48f1f9ef163519e35: function AS_Form_i216e276846047f48f1f9ef163519e35(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_Button_a211a432262f49a7b0aaa6b424a805c1: function AS_Button_a211a432262f49a7b0aaa6b424a805c1(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_j939fd4848ed423d8ec91ff26470379b: function AS_Button_j939fd4848ed423d8ec91ff26470379b(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_dd5192426ccf41cd85aee31ee33503fd: function AS_Button_dd5192426ccf41cd85aee31ee33503fd(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_e192e7ae4fd44cc68a37a90e02a3579b: function AS_Button_e192e7ae4fd44cc68a37a90e02a3579b(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_e1fa4e1d8d7f4e54a008d5356b1b494e: function AS_Button_e1fa4e1d8d7f4e54a008d5356b1b494e(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_ac954bf2e2704c82aa49c4c0a0ee2bce: function AS_Button_ac954bf2e2704c82aa49c4c0a0ee2bce(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_edcbfc92aa23491f9636ee3cecc43628: function AS_Button_edcbfc92aa23491f9636ee3cecc43628(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_cc353136ade44b63b7bb0dff1139de89: function AS_Button_cc353136ade44b63b7bb0dff1139de89(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_h75146faf1a54e80ab251d661121a2f7: function AS_Button_h75146faf1a54e80ab251d661121a2f7(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_gf1a52ff1a6c446b80856dc5875e30ec: function AS_Button_gf1a52ff1a6c446b80856dc5875e30ec(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_j43e3d7a872c48f6a547b6076ff540e2: function AS_Image_j43e3d7a872c48f6a547b6076ff540e2(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar()
    }
});
define("SavingsPotModule/frmCreateGoalMonthsController", ["SavingsPotModule/userfrmCreateGoalMonthsController", "SavingsPotModule/frmCreateGoalMonthsControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmCreateGoalMonthsController");
    var controllerActions = ["SavingsPotModule/frmCreateGoalMonthsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
