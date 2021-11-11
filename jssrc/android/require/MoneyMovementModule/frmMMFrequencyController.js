define("MoneyMovementModule/userfrmMMFrequencyController", {
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
        var index = moneyMovementModule.getSelectedFrequencyIndex();
        this.view.segOptions.rowFocusSkin = "";
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
        var index = this.view.segOptions.data[this.view.segOptions.selectedIndex[1]].lblFrequency;
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        moneyMovementModule.switchFrequencyType(index);
    }
});
define("MoneyMovementModule/frmMMFrequencyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d7d3b56876634362bfc2905c9f1387e8: function AS_Form_d7d3b56876634362bfc2905c9f1387e8(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_fb9fa1a1bc104f8881ee7b9d25f64747: function AS_Form_fb9fa1a1bc104f8881ee7b9d25f64747(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ice13cf453b34a5796f44c1bea1eda83: function AS_BarButtonItem_ice13cf453b34a5796f44c1bea1eda83(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_g4b068510c2e47e49f4508b079801cb0: function AS_BarButtonItem_g4b068510c2e47e49f4508b079801cb0(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("MoneyMovementModule/frmMMFrequencyController", ["MoneyMovementModule/userfrmMMFrequencyController", "MoneyMovementModule/frmMMFrequencyControllerActions"], function() {
    var controller = require("MoneyMovementModule/userfrmMMFrequencyController");
    var controllerActions = ["MoneyMovementModule/frmMMFrequencyControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
