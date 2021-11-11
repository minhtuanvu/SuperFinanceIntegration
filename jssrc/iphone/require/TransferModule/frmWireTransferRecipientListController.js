define("TransferModule/userfrmWireTransferRecipientListController", {
    init: function() {},
    preShow: function() {
        if (this.view.flxHeaderSearchbox.isVisible === true) {
            this.view.flxHeaderSearchbox.isVisible = false;
            this.view.flxSearch.isVisible = true;
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        }
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
        this.view.segAccounts.isVisible = true;
        this.view.flxNoTransactions.isVisible = false;
    },
});
define("TransferModule/frmWireTransferRecipientListControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c0bb1e2c5c4c4de69b27d44fefd5aee8: function AS_Form_c0bb1e2c5c4c4de69b27d44fefd5aee8(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f02c725d1d574c3bb9de01b8d0b1de75: function AS_Form_f02c725d1d574c3bb9de01b8d0b1de75(eventobject) {
        var self = this;
        this.preShow();
    },
});
define("TransferModule/frmWireTransferRecipientListController", ["TransferModule/userfrmWireTransferRecipientListController", "TransferModule/frmWireTransferRecipientListControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferRecipientListController");
    var controllerActions = ["TransferModule/frmWireTransferRecipientListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
