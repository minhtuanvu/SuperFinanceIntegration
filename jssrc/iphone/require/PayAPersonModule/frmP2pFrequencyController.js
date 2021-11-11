define("PayAPersonModule/userfrmP2pFrequencyController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var index = payeeMod.presentationController.getSelectedFrequencyIndex();
        this.view.segFrequency.rowFocusSkin = "sknFlxf9f9f9";
        this.view.segFrequency.retainSelection = false;
        if (index !== undefined && index !== null && index !== "") {
            this.view.segFrequency.selectedRowIndex = [0, index];
            this.view.segFrequency.retainSelection = true;
        }
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scope = this;
        this.view.segFrequency.onRowClick = function() {
            scope.segmentRowClick();
        }
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.customHeader.btnRight.onClick = function() {
            var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            payeeMod.presentationController.cancelCommon();
        }
    },
    segmentRowClick: function() {
        var index = this.view.segFrequency.data[this.view.segFrequency.selectedIndex[1]].lblFrequency;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.switchFrequencyType(index);
    }
});
define("PayAPersonModule/frmP2pFrequencyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_g3652ebd553b4889a52f34976ab26c31: function AS_Form_g3652ebd553b4889a52f34976ab26c31(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b50edd0ec2354428bb2ab5f756913b92: function AS_Form_b50edd0ec2354428bb2ab5f756913b92(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e40c0b8491424de98a56208bb80f217a: function AS_BarButtonItem_e40c0b8491424de98a56208bb80f217a(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    }
});
define("PayAPersonModule/frmP2pFrequencyController", ["PayAPersonModule/userfrmP2pFrequencyController", "PayAPersonModule/frmP2pFrequencyControllerActions"], function() {
    var controller = require("PayAPersonModule/userfrmP2pFrequencyController");
    var controllerActions = ["PayAPersonModule/frmP2pFrequencyControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
