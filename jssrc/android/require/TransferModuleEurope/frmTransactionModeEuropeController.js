define("TransferModuleEurope/userfrmTransactionModeEuropeController", {
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.setSegmentData();
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.segTransactionMode.onRowClick = function() {
            scope.segmentRowClick();
        }
    },
    segmentRowClick: function() {
        var type = this.view.segTransactionMode.data[this.view.segTransactionMode.selectedIndex[1]].lblTransactionMode;
        applicationManager.getPresentationUtility().showLoadingScreen();
        if (type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToInternationalAccounts")) {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            var types = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToInternationalAccounts")
            transferModulePresentationController.transactionMode = types;
            action = transferModulePresentationController.getActionByType(types);
            transferModulePresentationController.fetchLimits(action);
            transferModulePresentationController.fetchInternationalRecepients();
            transferModulePresentationController.setFlowType("InternationalRecipients");
        } else {
            var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModPresentationController.transactionMode = type;
            transferModPresentationController.showAccounts(type);
        }
    },
    backNavigation: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    setSegmentData: function() {
        var data = [];
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        if (transferModPresentationController.isEligibleTransferType("isKonyBankAccountsTransfer") == "true") data.push({
            "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToMyDBXAccount"),
            "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToMyDBXAccountInfo"),
            "imgArrow": "chevron.png"
        });
        if (transferModPresentationController.isEligibleTransferType("isOtherBankAccountsTransfer") == "true") data.push({
            "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToOtherEuropeanAccounts"),
            "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToOtherEuropeanAccountsInfo"),
            "imgArrow": "chevron.png"
        });
        if (transferModPresentationController.isEligibleTransferType("isInternationalAccountsTransfer") == "true") data.push({
            "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToInternationalAccounts"),
            "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToInternationalAccountsInfo"),
            "imgArrow": "chevron.png"
        });
        this.view.segTransactionMode.setData(data);
    }
});
define("TransferModuleEurope/frmTransactionModeEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_j05c9146211c45b3bf63d742f121760a: function AS_FlexContainer_j05c9146211c45b3bf63d742f121760a(eventobject) {
        var self = this;
        this.backNavigation();
    },
    AS_Form_b5825380d17e404591b5522101c68006: function AS_Form_b5825380d17e404591b5522101c68006(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_g62903915d1c4fde9c243f5a7d89ec97: function AS_Form_g62903915d1c4fde9c243f5a7d89ec97(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_bb2890906d7c4be9ae87fc1a5a9f240a: function AS_BarButtonItem_bb2890906d7c4be9ae87fc1a5a9f240a(eventobject) {
        var self = this;
        var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
        transModPresentationController.commonFunctionForNavigation("frmTransfers");
    }
});
define("TransferModuleEurope/frmTransactionModeEuropeController", ["TransferModuleEurope/userfrmTransactionModeEuropeController", "TransferModuleEurope/frmTransactionModeEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmTransactionModeEuropeController");
    var controllerActions = ["TransferModuleEurope/frmTransactionModeEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
