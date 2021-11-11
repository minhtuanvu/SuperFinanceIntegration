define("SavingsPotModule/userfrmSavingsTypeController", {
    init: function() {},
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
    },
    initActions: function() {
        this.view.btnGoal.onClick = this.goalNav;
        this.view.btnBudget.onClick = this.budgetNav;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        this.view.customHeader.flxBack.onTouchEnd = this.onBack;
    },
    postShow: function() {},
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    onCancelClick: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.clearCreateData();
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmMySavingsPot");
    },
    budgetNav: function() {
        var SavingsPotModule = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotModule.clearCreateData();
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        SavingsPotMod.presentationController.initiatePot("Budget", "frmBudgetName");
    },
    goalNav: function() {
        var SavingsPotModule = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotModule.clearCreateData();
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        SavingsPotMod.presentationController.initiatePot("Goal", "frmGoalsType");
        SavingsPotMod.presentationController.setBiWeekly("");
    }
});
define("SavingsPotModule/frmSavingsTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i310fc31f371456eb20500cbb6af9b65: function AS_Form_i310fc31f371456eb20500cbb6af9b65(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_eff3999c32674d3dbd5e8e9ab58aec03: function AS_Form_eff3999c32674d3dbd5e8e9ab58aec03(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_a6458b3896374f988cf7684fbc167211: function AS_Form_a6458b3896374f988cf7684fbc167211(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_c33c5e09dca94dc988ea21708d7ac378: function AS_BarButtonItem_c33c5e09dca94dc988ea21708d7ac378(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("SavingsPotModule/frmSavingsTypeController", ["SavingsPotModule/userfrmSavingsTypeController", "SavingsPotModule/frmSavingsTypeControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmSavingsTypeController");
    var controllerActions = ["SavingsPotModule/frmSavingsTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
