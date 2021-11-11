define("TransferModule/userfrmWireTransferFromAccountController", {
    transferType: '',
    segmentData: null,
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
    },
});
define("TransferModule/frmWireTransferFromAccountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i6bb3e792b3c4630bca112e903288d42: function AS_Form_i6bb3e792b3c4630bca112e903288d42(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d9fea56959104b7195acd0ec440ce58e: function AS_Form_d9fea56959104b7195acd0ec440ce58e(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_b150d16fb6504bf28996cf773ed07444: function AS_BarButtonItem_b150d16fb6504bf28996cf773ed07444(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModule/frmWireTransferFromAccountController", ["TransferModule/userfrmWireTransferFromAccountController", "TransferModule/frmWireTransferFromAccountControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferFromAccountController");
    var controllerActions = ["TransferModule/frmWireTransferFromAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
