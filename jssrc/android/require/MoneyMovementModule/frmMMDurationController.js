define("MoneyMovementModule/userfrmMMDurationController", {
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        moneyMovementModule.commonFunctionForgoBack();
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.updateUI();
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
        this.view.segOptions.onRowClick = this.segmentOnClick;
        this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
    },
    updateUI: function() {
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        var index = moneyMovementModule.getIndexForDuration();
        this.view.segOptions.rowFocusSkin = "sknFlxF9F9F9RoundedRadius35Px";
        this.view.segOptions.retainSelection = false;
        if (index !== null && index !== undefined && index !== "") {
            this.view.segOptions.rowFocusSkin = "sknFlxF9F9F9RoundedRadius35Px";
            this.view.segOptions.retainSelection = true;
            this.view.segOptions.selectedRowIndex = [0, index];
        }
    },
    cancelOnClick: function() {
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        moneyMovementModule.cancelCommon();
    },
    segmentOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        var index = this.view.segOptions.data[this.view.segOptions.selectedIndex[1]].lblFrequency;
        navMan.setCustomInfo("frmTransfersDuration", {
            "duration": index
        });
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        moneyMovementModule.switchDurationType(index);
    }
});
define("MoneyMovementModule/frmMMDurationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d48ab3149eb64c7785bdd2c403620ea5: function AS_Form_d48ab3149eb64c7785bdd2c403620ea5(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f63a1991b2a4427b9cd755c544e1f97d: function AS_Form_f63a1991b2a4427b9cd755c544e1f97d(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_efafae8e6f3b4e73ab6071a2a13318a3: function AS_BarButtonItem_efafae8e6f3b4e73ab6071a2a13318a3(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_d761dab61dd64c3189aab0495c9f030f: function AS_BarButtonItem_d761dab61dd64c3189aab0495c9f030f(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("MoneyMovementModule/frmMMDurationController", ["MoneyMovementModule/userfrmMMDurationController", "MoneyMovementModule/frmMMDurationControllerActions"], function() {
    var controller = require("MoneyMovementModule/userfrmMMDurationController");
    var controllerActions = ["MoneyMovementModule/frmMMDurationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
