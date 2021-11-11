define("ChequeManagementModule/userfrmChequeRevokeAcknController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        var info = navManager.getCustomInfo("frmChequeRevokeAckn");
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.lblReferenceValue.text = info.referenceId;
    },
    /** preShow defined for frmChequeRevokeAck **/
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.onDeviceBack = this.backToStopCheques;
        this.view.btnBack.onClick = this.backToStopCheques;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    backToStopCheques: function() {
        var varPass;
        varPass = "MyChequesView";
        var navObj = new kony.mvc.Navigation("frmChequeManagement");
        navObj.navigate(varPass);
    }
});
define("ChequeManagementModule/frmChequeRevokeAcknControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f0a1fffaf9474972bb33304dc611a142: function AS_Form_f0a1fffaf9474972bb33304dc611a142(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ib48798968c44bfebf227539daf4284c: function AS_Form_ib48798968c44bfebf227539daf4284c(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("ChequeManagementModule/frmChequeRevokeAcknController", ["ChequeManagementModule/userfrmChequeRevokeAcknController", "ChequeManagementModule/frmChequeRevokeAcknControllerActions"], function() {
    var controller = require("ChequeManagementModule/userfrmChequeRevokeAcknController");
    var controllerActions = ["ChequeManagementModule/frmChequeRevokeAcknControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
