define("TransferModuleEurope/userfrmEuropeFrequencyController", {
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.commonFunctionForgoBack();
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
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        var index = transMod.getSelectedFrequencyIndex();
        this.view.segOptions.rowFocusSkin = "";
        this.view.segOptions.retainSelection = false;
        if (index !== null && index !== undefined && index !== "") {
            this.view.segOptions.rowFocusSkin = "sknFlxF9F9F9RoundedRadius35Px";
            this.view.segOptions.retainSelection = true;
            this.view.segOptions.selectedRowIndex = [0, index];
        }
    },
    cancelOnClick: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.cancelCommon();
    },
    segmentOnClick: function() {
        var index = this.view.segOptions.data[this.view.segOptions.selectedIndex[1]].lblFrequency;
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.switchFrequencyType(index);
    }
});
define("TransferModuleEurope/frmEuropeFrequencyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i2d5339139a54eacb28493d4c6207b9d: function AS_Form_i2d5339139a54eacb28493d4c6207b9d(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ab96ab15230843e5ab459642f9fd8769: function AS_Form_ab96ab15230843e5ab459642f9fd8769(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_afbf3cd155174c37937bdf0ea3b07290: function AS_BarButtonItem_afbf3cd155174c37937bdf0ea3b07290(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_ab14b5cc5d7c45bc8ae39f93e4768522: function AS_BarButtonItem_ab14b5cc5d7c45bc8ae39f93e4768522(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModuleEurope/frmEuropeFrequencyController", ["TransferModuleEurope/userfrmEuropeFrequencyController", "TransferModuleEurope/frmEuropeFrequencyControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmEuropeFrequencyController");
    var controllerActions = ["TransferModuleEurope/frmEuropeFrequencyControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
