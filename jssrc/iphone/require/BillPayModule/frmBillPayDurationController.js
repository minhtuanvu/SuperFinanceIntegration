define("BillPayModule/userfrmBillPayDurationController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        var  billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var index = billPayMod.presentationController.getIndexForDuration();
        this.view.segDuration.retainSelection = false;
        if (index !== null && index !== undefined && index !== "") {
            this.view.segDuration.rowFocusSkin = "sknFlxf9f9f9";
            this.view.segDuration.retainSelection = true;
            // this.view.segDuration.selectedRowIndices = [[0,[index]]];
            this.view.segDuration.selectedRowIndex = [0, index];
        }
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.segDuration.onRowClick = function() {
            scope.segmentRowClick();
        }
        this.view.customHeader.btnRight.onClick = function() {
            var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayModule.presentationController.cancelCommon();
        }
    },
    segmentRowClick: function() {
        var index = this.view.segDuration.data[this.view.segDuration.selectedIndex[1]].lblFrequency;
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.switchDurationType(index);
    }
});
define("BillPayModule/frmBillPayDurationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f5dee25eebfb4fd5a7a82c24d563b252: function AS_Form_f5dee25eebfb4fd5a7a82c24d563b252(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a6a298ed21b341838a820c0e1f27f1f9: function AS_Form_a6a298ed21b341838a820c0e1f27f1f9(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_h8cfbdd1d57a47539e6cd898b141bcdc: function AS_BarButtonItem_h8cfbdd1d57a47539e6cd898b141bcdc(eventobject) {
        var self = this;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        transferModule.presentationController.cancelCommon();
    }
});
define("BillPayModule/frmBillPayDurationController", ["BillPayModule/userfrmBillPayDurationController", "BillPayModule/frmBillPayDurationControllerActions"], function() {
    var controller = require("BillPayModule/userfrmBillPayDurationController");
    var controllerActions = ["BillPayModule/frmBillPayDurationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
