define("TransferModuleEurope/userfrmEuropeTransferToAccountNewBenController", {
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
    cancelOnClick: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.cancelCommon();
    },
    initActions: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
        this.getSegmentData();
        this.renderTitleBar();
        this.view.SegSelectBank.onRowClick = function() {
            var bankSel = this.data[this.selectedIndex[1]].title;
            transMod.enterAddRecipientFlow(bankSel);
        };
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
    },
    getWidgetDataMap: function() {
        var map = {
            lblFrequency: "title"
        };
        return map;
    },
    getSegmentData: function() {
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var segData = transferPresentationController.selectBenBank();
        this.view.SegSelectBank.widgetDataMap = this.getWidgetDataMap();
        this.view.SegSelectBank.setData(segData);
    }
});
define("TransferModuleEurope/frmEuropeTransferToAccountNewBenControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i4b9b6b15f4044ae8fbea89b1a5e0294: function AS_Form_i4b9b6b15f4044ae8fbea89b1a5e0294(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_c60f0cfdc58942959603a03a076dcca0: function AS_Form_c60f0cfdc58942959603a03a076dcca0(eventobject) {
        var self = this;
        return self.initActions.call(this);
    },
    AS_BarButtonItem_h093814a7d514d49a4ba627aecabb872: function AS_BarButtonItem_h093814a7d514d49a4ba627aecabb872(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
});
define("TransferModuleEurope/frmEuropeTransferToAccountNewBenController", ["TransferModuleEurope/userfrmEuropeTransferToAccountNewBenController", "TransferModuleEurope/frmEuropeTransferToAccountNewBenControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmEuropeTransferToAccountNewBenController");
    var controllerActions = ["TransferModuleEurope/frmEuropeTransferToAccountNewBenControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
