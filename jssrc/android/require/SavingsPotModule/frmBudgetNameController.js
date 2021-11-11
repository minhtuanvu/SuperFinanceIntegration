define("SavingsPotModule/userfrmBudgetNameController", {
    init: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.commonFunctionForgoBack();
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.title = kony.i18n.getLocalizedString("i18n.savingspot.NameYourBudget");
            this.view.flxHeader.isVisible = false;
        }
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var flow = SavingsPotMod.presentationController.getSavingsFlow();
        if (flow) {
            var navManager = applicationManager.getNavigationManager();
            var goalDetails = navManager.getCustomInfo("frmBudgetPotDetails");
            this.setReference(goalDetails.potName);
        } else {
            var savingsObj = SavingsPotMod.presentationController.getCreateObject();
            this.setReference(savingsObj.potName);
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.view.btnContinue.onClick = this.btnContinueFunction;
        this.view.customHeader.flxBack.onTouchEnd = this.navigateCustomBack;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        this.view.txtBox.onTextChange = this.ontextChange.bind(this);
        var specialCharactersSet = "!@#&*_'-.~^|$%()+=}{][/|?,><`:;\"\\";
        this.view.txtBox.restrictCharactersSet = specialCharactersSet.replace("!@#&*_'-.", '');
        this.view.flxError.setVisibility(false);
    },
    postShow: function() {
        this.ontextChange();
    },
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    ontextChange: function() {
        var length = this.view.txtBox.text.length;
        this.view.lblLength.text = length + "/30";
        if (this.view.txtBox.text !== null && this.view.txtBox.text !== '') {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        } else {
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        }
    },
    setReference: function(potName) {
        if (potName) {
            this.view.txtBox.text = potName;
        } else this.view.txtBox.text = "";
    },
    btnContinueFunction: function() {
        this.view.flxError.setVisibility(false);
        var error;
        var navManager = applicationManager.getNavigationManager();
        var potDetails = navManager.getCustomInfo("frmMySavingsPot");
        var goalNames = this.view.txtBox.text;
        for (var TitleNo in potDetails) {
            var data = potDetails[TitleNo];
            if (data.potName == goalNames) {
                error = "YES";
            }
        }
        if (error) {
            this.view.flxError.setVisibility(true);
        } else {
            if (this.view.txtBox.text !== null && this.view.txtBox.text !== '') {
                var budgetname = this.view.txtBox.text;
                var previousForm = navManager.getPreviousForm();
                var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
                var flow = SavingsPotMod.presentationController.getSavingsFlow();
                if (flow) {
                    var goalDetails = navManager.getCustomInfo("frmBudgetPotDetails");
                    goalDetails.potName = budgetname;
                    navManager.setCustomInfo("frmBudgetPotDetails", goalDetails);
                    SavingsPotMod.presentationController.navToBudgetAmount(budgetname, "frmEditBudget");
                } else {
                    if (previousForm === "frmCreateBudgetVerifyDetails") {
                        SavingsPotMod.presentationController.navToBudgetAmount(budgetname, "frmCreateBudgetVerifyDetails");
                    } else {
                        SavingsPotMod.presentationController.navToBudgetAmount(budgetname, "frmBudgetfundAmount");
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
});
define("SavingsPotModule/frmBudgetNameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i45c235790e4415891fdf27fac6b653e: function AS_Form_i45c235790e4415891fdf27fac6b653e(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bc10cde1c0524f5f8348008c3c7ea68a: function AS_Form_bc10cde1c0524f5f8348008c3c7ea68a(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_f534e1556fd74227a149dfa9ed23d25b: function AS_Form_f534e1556fd74227a149dfa9ed23d25b(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_i85d4dd028bd4b1aa9a4092849b9867b: function AS_BarButtonItem_i85d4dd028bd4b1aa9a4092849b9867b(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("SavingsPotModule/frmBudgetNameController", ["SavingsPotModule/userfrmBudgetNameController", "SavingsPotModule/frmBudgetNameControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmBudgetNameController");
    var controllerActions = ["SavingsPotModule/frmBudgetNameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
