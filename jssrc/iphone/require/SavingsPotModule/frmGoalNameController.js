define("SavingsPotModule/userfrmGoalNameController", {
    init: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.title = kony.i18n.getLocalizedString("i18n.savingspot.NameYourGoal");
            this.view.flxHeader.isVisible = false;
        }
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var flow = SavingsPotMod.presentationController.getSavingsFlow();
        if (flow) {
            var navManager = applicationManager.getNavigationManager();
            var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
            this.setReference(goalDetails.potName);
        } else {
            var savingsObj = SavingsPotMod.presentationController.getCreateObject();
            this.setReference(savingsObj.potName);
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.view.btnContinue.onClick = this.btnContinueFunction;
        this.view.txtBox.onTextChange = this.onNameChange;
        var specialCharactersSet = "!@#&*_'-.~^|$%()+=}{][/|?,><`:;\"\\";
        this.view.txtBox.restrictCharactersSet = specialCharactersSet.replace("!@#&*_'-.", '');
        this.view.customHeader.flxBack.onTouchEnd = this.navigateCustomBack;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        this.view.flxError.setVisibility(false);
    },
    postShow: function() {
        this.onNameChange();
    },
    setReference: function(potName) {
        if (potName) {
            this.view.txtBox.text = potName;
        } else this.view.txtBox.text = "";
    },
    navigateCustomBack: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.commonFunctionForgoBack();
    },
    btnContinueFunction: function() {
        this.view.flxError.setVisibility(false);
        var error;
        var navManager = applicationManager.getNavigationManager();
        var potDetails = navManager.getCustomInfo("frmMySavingsPot");
        var goalNames = this.view.txtBox.text;
        for (var TitleNo in potDetails) {
            var data = potDetails[TitleNo];
            if (data.potName.toLowerCase() === goalNames.toLowerCase()) {
                error = "YES";
            }
        }
        if (error) {
            this.view.flxError.setVisibility(true);
        } else {
            if (this.view.txtBox.text !== null && this.view.txtBox.text !== '') {
                var goalName = this.view.txtBox.text;
                var previousForm = navManager.getPreviousForm();
                var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
                var flow = SavingsPotMod.presentationController.getSavingsFlow();
                if (flow) {
                    var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
                    goalDetails.potName = goalName;
                    navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails);
                    SavingsPotMod.presentationController.navToBudgetAmount(goalName, "frmEditSavingsGoal");
                } else {
                    if (previousForm === "frmCreateGoalVerifyDetails") {
                        SavingsPotMod.presentationController.navToBudgetAmount(goalName, "frmCreateGoalVerifyDetails");
                    } else {
                        SavingsPotMod.presentationController.navToBudgetAmount(goalName, "frmOptimizeGoal");
                    }
                }
            }
        }
    },
    onCancelClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var previousForm = navManager.getPreviousForm();
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        var flow = SavingsPotMod.getSavingsFlow();
        if (flow) {
            SavingsPotMod.setSavingsFlow("");
            SavingsPotMod.clearCreateData();
            SavingsPotMod.commonFunctionForNavigation("frmSavingsGoalViewDetails");
        } else {
            if (previousForm === "frmCreateGoalVerifyDetails") {
                SavingsPotMod.commonFunctionForNavigation("frmCreateGoalVerifyDetails");
            } else {
                SavingsPotMod.clearCreateData();
                var createBudgetPermission = applicationManager.getConfigurationManager().checkUserPermission("BUDGET_POT_CREATE");
                (createBudgetPermission) ? navManager.navigateTo("frmSavingsType"): navManager.navigateTo("frmMySavingsPot");
            }
        }
    },
    onNameChange: function() {
        var length = this.view.txtBox.text.length;
        this.view.lblLength.text = length + "/30";
        if (this.view.txtBox.text !== null && this.view.txtBox.text !== '') {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        } else {
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        }
    }
});
define("SavingsPotModule/frmGoalNameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e4ec09537b63481aa14c43957947f640: function AS_Form_e4ec09537b63481aa14c43957947f640(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_h770489c6e4d46fb8032f2764ade2bc4: function AS_Form_h770489c6e4d46fb8032f2764ade2bc4(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_f3b5855a22ee4bd1a900a98a0a0f25be: function AS_Form_f3b5855a22ee4bd1a900a98a0a0f25be(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_dbd7592434c2430bbf8767fcabe10da5: function AS_BarButtonItem_dbd7592434c2430bbf8767fcabe10da5(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("SavingsPotModule/frmGoalNameController", ["SavingsPotModule/userfrmGoalNameController", "SavingsPotModule/frmGoalNameControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmGoalNameController");
    var controllerActions = ["SavingsPotModule/frmGoalNameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
