define("TransferModule/userfrmTransactionModeController", {
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
            // this.view.btnTemp.onClick = function(){
            // }
    },
    segmentRowClick: function() {
        var type = this.view.segTransactionMode.data[this.view.segTransactionMode.selectedIndex[1]].lblTransactionMode;
        applicationManager.getPresentationUtility().showLoadingScreen();
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transModPresentationController.transactionMode = type;
        transModPresentationController.showAccounts(type);
    },
    backNavigation: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    setSegmentData: function() {
        var data = [];
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        if (transferModPresentationController.isEligibleTransferType("isKonyBankAccountsTransfer") === "true") data.push({
            "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"),
            "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccountsInfo"),
            "imgArrow": "chevron.png"
        });
        //,{
        //  "lblTransactionMode":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyOtherAccounts"),
        //"lblTransactionModeDescription":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyOtherAccountsInfo"),
        //"imgArrow":"chevron.png"
        //},
        if (transferModPresentationController.isEligibleTransferType("isOtherKonyAccountsTransfer") === "true") data.push({
            "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers"),
            "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembersInfo"),
            "imgArrow": "chevron.png"
        });
        if (transferModPresentationController.isEligibleTransferType("isOtherBankAccountsTransfer") === "true") data.push({
            "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts"),
            "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccountsInfo"),
            "imgArrow": "chevron.png"
        });
        if (transferModPresentationController.isEligibleTransferType("isInternationalAccountsTransfer") === "true") data.push({
            "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer"),
            "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransferInfo"),
            "imgArrow": "chevron.png"
        });
        //,
        //{
        //  "lblTransactionMode":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.WireTransfer"),
        //"lblTransactionModeDescription":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.WireTransferInfo"),
        //"imgArrow":"chevron.png"
        //}
        this.view.segTransactionMode.setData(data);
    }
});
define("TransferModule/frmTransactionModeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_fdcfc70f9b4847238077f8bb729ab3ee: function AS_FlexContainer_fdcfc70f9b4847238077f8bb729ab3ee(eventobject) {
        var self = this;
        this.backNavigation();
    },
    AS_Form_aa0a7a6dccc64c8f9f478835b4388466: function AS_Form_aa0a7a6dccc64c8f9f478835b4388466(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bdd1d73677564bdc8490ef814f126f2d: function AS_Form_bdd1d73677564bdc8490ef814f126f2d(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e445fa2e93204f1cb5979e885563b7fc: function AS_BarButtonItem_e445fa2e93204f1cb5979e885563b7fc(eventobject) {
        var self = this;
        var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
        transModPresentationController.commonFunctionForNavigation("frmTransfers");
    }
});
define("TransferModule/frmTransactionModeController", ["TransferModule/userfrmTransactionModeController", "TransferModule/frmTransactionModeControllerActions"], function() {
    var controller = require("TransferModule/userfrmTransactionModeController");
    var controllerActions = ["TransferModule/frmTransactionModeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
