define("TransferModule/userfrmWireTransferEnterAddressController", {
    timerCounter: 0,
    init: function() {},
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeaderPersonalInfo.isVisible = true;
        } else {
            this.view.flxHeaderPersonalInfo.isVisible = false;
        }
    },
});
define("TransferModule/frmWireTransferEnterAddressControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ba31713ba34c47a99b6d95f379175fb3: function AS_Form_ba31713ba34c47a99b6d95f379175fb3(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a48930fcedd44d9882cf97315aaded49: function AS_Form_a48930fcedd44d9882cf97315aaded49(eventobject) {
        var self = this;
        this.preShow();
    },
});
define("TransferModule/frmWireTransferEnterAddressController", ["TransferModule/userfrmWireTransferEnterAddressController", "TransferModule/frmWireTransferEnterAddressControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferEnterAddressController");
    var controllerActions = ["TransferModule/frmWireTransferEnterAddressControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
