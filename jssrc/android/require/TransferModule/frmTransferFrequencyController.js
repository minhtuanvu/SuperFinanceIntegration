define("TransferModule/userfrmTransferFrequencyController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            // this.view.flxHeader.isVisible = false;
            this.view.flxHeader.setVisibility(false);
        }
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var index = transModPresentationController.getSelectedFrequencyIndex();
        this.view.segFrequency.retainSelection = false;
        if (index !== null && index !== undefined && index !== "") {
            this.view.segFrequency.rowFocusSkin = "sknFlxf9f9f9";
            this.view.segFrequency.retainSelection = true;
            // this.view.segFrequency.selectedRowIndices = [[0,[index]]];
            this.view.segFrequency.selectedRowIndex = [0, index];
        }
        this.view.segFrequency.onRowClick = function() {
            scope.segmentRowClick();
        }
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.customHeader.btnRight.onClick = function() {
            scope.cancelOnClick();
        }
    },
    cancelOnClick: function() {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.cancelCommon();
    },
    segmentRowClick: function() {
        var index = this.view.segFrequency.data[this.view.segFrequency.selectedIndex[1]].lblFrequency;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.switchFrequencyType(index);
    }
});
define("TransferModule/frmTransferFrequencyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i14c6b61398a4fb383c52c9d7a22a53d: function AS_Form_i14c6b61398a4fb383c52c9d7a22a53d(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a766edf85bd148049e3cc3fa654504a9: function AS_Form_a766edf85bd148049e3cc3fa654504a9(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_j0761dbd201b4a4894b9b069d37ab873: function AS_BarButtonItem_j0761dbd201b4a4894b9b069d37ab873(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModule/frmTransferFrequencyController", ["TransferModule/userfrmTransferFrequencyController", "TransferModule/frmTransferFrequencyControllerActions"], function() {
    var controller = require("TransferModule/userfrmTransferFrequencyController");
    var controllerActions = ["TransferModule/frmTransferFrequencyControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
