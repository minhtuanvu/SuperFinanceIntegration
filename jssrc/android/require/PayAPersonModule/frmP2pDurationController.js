define("PayAPersonModule/userfrmP2pDurationController", {
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
        var index = payeeMod.presentationController.getIndexForDuration();
        this.view.segDuration.rowFocusSkin = "sknFlxf9f9f9";
        this.view.segDuration.retainSelection = false;
        if (index !== undefined && index !== null) {
            this.view.segDuration.selectedRowIndex = [0, index];
            this.view.segDuration.retainSelection = true;
        }
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
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
            var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            payeeMod.presentationController.cancelCommon();
        }
    },
    segmentRowClick: function() {
        var index = this.view.segDuration.data[this.view.segDuration.selectedIndex[1]].lblFrequency;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.switchDurationType(index);
    }
});
define("PayAPersonModule/frmP2pDurationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_gfdf6088538544468780c7d804b03316: function AS_Form_gfdf6088538544468780c7d804b03316(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e1bfac682ef14e79bc7c89438b700d5e: function AS_Form_e1bfac682ef14e79bc7c89438b700d5e(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_jee98f26a98548b8be7d8f589d73a0cf: function AS_BarButtonItem_jee98f26a98548b8be7d8f589d73a0cf(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    }
});
define("PayAPersonModule/frmP2pDurationController", ["PayAPersonModule/userfrmP2pDurationController", "PayAPersonModule/frmP2pDurationControllerActions"], function() {
    var controller = require("PayAPersonModule/userfrmP2pDurationController");
    var controllerActions = ["PayAPersonModule/frmP2pDurationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
