define("TransferModule/userfrmWireTransferActivateController", {
    init: function() {},
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.setFlowActions();
        this.view.segCards.isVisible = false;
    },
    setFlowActions: function() {
        var scope = this;
        this.view.flxDropdown.onClick = function() {
            scope.toggleSeg();
        };
        this.view.segCards.onRowClick = function() {
            scope.view.segCards.isVisible = false;
        };
        this.view.imgCheckbox.onTouchEnd = function() {
            scope.toggleChcekBox();
        };
        this.view.btnActivate.onClick = function() {
            scope.navToNoRecipient();
        };
        this.view.btnCancel.onClick = function() {
            scope.navToMakeTransfer();
        };
        this.view.rtxAgreeTermsConditions.onTouchEnd = function() {
            scope.getTermsAndConditions();
        };
    },
    getTermsAndConditions: function() {
        var transferModule = applicationManager.getModulesPresentationController("TransferModule");
        transferModule.getTnCcontent();
    },
    toggleChcekBox: function() {
        var self = this;
        if (this.view.imgCheckbox.src === "checkbox.png") self.view.imgCheckbox.src = "checkboxempty.png";
        else self.view.imgCheckbox.src = "checkbox.png";
    },
    navToNoRecipient: function() {
        var navObj = new kony.mvc.Navigation("frmWireTransferNoRecipient");
        navObj.navigate();
    },
    navToMakeTransfer: function() {},
    toggleSeg: function() {
        if (this.view.imgDropdown.src === "arrowdown.png") {
            this.view.segCards.isVisible = true;
            this.view.imgDropdown.src = "arrowup.png"
        } else {
            this.view.segCards.isVisible = false;
            this.view.imgDropdown.src = "arrowdown.png"
        }
    },
});
define("TransferModule/frmWireTransferActivateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_fedb6094e3fa4e188a9f24da3c110ac2: function AS_Form_fedb6094e3fa4e188a9f24da3c110ac2(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_fa4b449c3ee2477e948faba8971c8263: function AS_Form_fa4b449c3ee2477e948faba8971c8263(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e7f4a248ed334da99df590ad598b0913: function AS_BarButtonItem_e7f4a248ed334da99df590ad598b0913(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModule/frmWireTransferActivateController", ["TransferModule/userfrmWireTransferActivateController", "TransferModule/frmWireTransferActivateControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferActivateController");
    var controllerActions = ["TransferModule/frmWireTransferActivateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
