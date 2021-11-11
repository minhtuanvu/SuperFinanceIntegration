define("TransferModule/userfrmTransferAcknowledgementController", {
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.showDashboard();
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmAcknowledgement");
        this.view.Acknowledgement.setUpData(data);
        this.setupHeaderData(data.flow);
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setupHeaderData: function(flow) {
        switch (flow) {
            case 'transfers':
                this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.Acknowledgement");
                break;
            case 'error':
                this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.Acknowledgement");
                break;
        }
    }
});
define("TransferModule/frmTransferAcknowledgementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_bbed43ed14ca4a11af08e23f85bfc349: function AS_Form_bbed43ed14ca4a11af08e23f85bfc349(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a4e9640c22be43c0a589ee3041c763fc: function AS_Form_a4e9640c22be43c0a589ee3041c763fc(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("TransferModule/frmTransferAcknowledgementController", ["TransferModule/userfrmTransferAcknowledgementController", "TransferModule/frmTransferAcknowledgementControllerActions"], function() {
    var controller = require("TransferModule/userfrmTransferAcknowledgementController");
    var controllerActions = ["TransferModule/frmTransferAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
