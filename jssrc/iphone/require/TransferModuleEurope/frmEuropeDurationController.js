define("TransferModuleEurope/userfrmEuropeDurationController", {
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
        var index = transMod.getIndexForDuration();
        this.view.segOptions.rowFocusSkin = "sknFlxF9F9F9RoundedRadius35Px";
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
        var navMan = applicationManager.getNavigationManager();
        var index = this.view.segOptions.data[this.view.segOptions.selectedIndex[1]].lblFrequency;
        navMan.setCustomInfo("frmTransfersDuration", {
            "duration": index
        });
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.switchDurationType(index);
    }
});
define("TransferModuleEurope/frmEuropeDurationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ad965cc1f05d46f0876932d018e12367: function AS_Form_ad965cc1f05d46f0876932d018e12367(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f2eab1a4c4714040be2b93a53f52f55b: function AS_Form_f2eab1a4c4714040be2b93a53f52f55b(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_hb01b10339554aea8e196979c4a3b6ff: function AS_BarButtonItem_hb01b10339554aea8e196979c4a3b6ff(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_fc54333310e44546bef7632432d99d6d: function AS_BarButtonItem_fc54333310e44546bef7632432d99d6d(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModuleEurope/frmEuropeDurationController", ["TransferModuleEurope/userfrmEuropeDurationController", "TransferModuleEurope/frmEuropeDurationControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmEuropeDurationController");
    var controllerActions = ["TransferModuleEurope/frmEuropeDurationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
