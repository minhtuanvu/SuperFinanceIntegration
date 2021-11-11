define("SettingsModule/userfrmAlertFrequencyController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.renderTitleBar();
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    renderTitleBar: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (isIphone) {
            this.view.flxHeader.setVisibility(false);
        }
    },
    initActions: function() {
        var scope = this;
        var  billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var index = billPayMod.presentationController.getSelectedFrequencyIndex();
        this.view.segFrequency.rowFocusSkin = "";
        this.view.segFrequency.retainSelection = false;
        if (index !== null && index !== undefined && index !== "") {
            this.view.segFrequency.rowFocusSkin = "sknFlxf9f9f9";
            this.view.segFrequency.retainSelection = true;
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
            var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayModule.presentationController.cancelCommon();
        }
    },
    segmentRowClick: function() {
        var index = this.view.segFrequency.data[this.view.segFrequency.selectedIndex[1]].lblFrequency;
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.switchFrequencyType(index);
    }
});
define("SettingsModule/frmAlertFrequencyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_hf7a73e8dc454f2b86e60c78a6be97ff: function AS_Form_hf7a73e8dc454f2b86e60c78a6be97ff(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e5910503c6b8421ab45846123556e640: function AS_Form_e5910503c6b8421ab45846123556e640(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_faa2444f91804584885fc8c7405c70bb: function AS_BarButtonItem_faa2444f91804584885fc8c7405c70bb(eventobject) {
        var self = this;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        transferModule.presentationController.cancelCommon();
    }
});
define("SettingsModule/frmAlertFrequencyController", ["SettingsModule/userfrmAlertFrequencyController", "SettingsModule/frmAlertFrequencyControllerActions"], function() {
    var controller = require("SettingsModule/userfrmAlertFrequencyController");
    var controllerActions = ["SettingsModule/frmAlertFrequencyControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
