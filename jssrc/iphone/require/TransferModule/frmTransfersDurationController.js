define("TransferModule/userfrmTransfersDurationController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        var navMan = applicationManager.getNavigationManager();
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var index = transModPresentationController.getIndexForDuration();
        //  this.view.segDuration.rowFocusSkin = "";
        this.view.segDuration.retainSelection = false;
        if (index !== null && index !== undefined && index !== "") {
            this.view.segDuration.rowFocusSkin = "sknFlxf9f9f9";
            this.view.segDuration.retainSelection = true;
            this.view.segDuration.selectedRowIndex = [0, index];
        }
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.segDuration.onRowClick = function() {
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
        var navMan = applicationManager.getNavigationManager();
        var index = this.view.segDuration.data[this.view.segDuration.selectedIndex[1]].lblFrequency;
        navMan.setCustomInfo("frmTransfersDuration", {
            "duration": index
        });
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.switchDurationType(index);
    }
});
define("TransferModule/frmTransfersDurationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_jc5a9d1d3d2e4db4a60d52e2e6bf0f36: function AS_FlexContainer_jc5a9d1d3d2e4db4a60d52e2e6bf0f36(eventobject) {
        var self = this;
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transModPresentationController.commonFunctionForNavigation("frmTransferFrequency");
    },
    AS_Form_fbc38f2b3fc64c27b644bea6738128f5: function AS_Form_fbc38f2b3fc64c27b644bea6738128f5(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e965c73e2e3340f88d5fd38dbea418d9: function AS_Form_e965c73e2e3340f88d5fd38dbea418d9(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_g14b340a503b425791f538816c74fda2: function AS_BarButtonItem_g14b340a503b425791f538816c74fda2(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModule/frmTransfersDurationController", ["TransferModule/userfrmTransfersDurationController", "TransferModule/frmTransfersDurationControllerActions"], function() {
    var controller = require("TransferModule/userfrmTransfersDurationController");
    var controllerActions = ["TransferModule/frmTransfersDurationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
