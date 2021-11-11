define("TransferModuleEurope/userfrmManageRecipientTypeEuropeController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
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
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.segRecipientType.onRowClick = function() {
            scope.segmentRowClick();
        }
    },
    segmentRowClick: function() {
        var action;
        var transferModuler = applicationManager.getModulesPresentationController("TransferModule");
        transferModuler.otherBankBenificiaryAdded = false;
        transferModuler.internationalBenificiaryAdded = false;
        var index = this.view.segRecipientType.data[this.view.segRecipientType.selectedIndex[0]][1][this.view.segRecipientType.selectedIndex[1]].lblTransactionMode;
        switch (index) {
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.EuropeRecipient"):
                applicationManager.getPresentationUtility().showLoadingScreen();
                var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
                var type = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToOtherEuropeanAccounts")
                    /* transferModulePresentationController.transactionMode = type;
                     action= transferModulePresentationController.getActionByType(type);
                     transferModulePresentationController.fetchLimits(action);*/
                transferModulePresentationController.fetchOtherBankRecepients();
                transferModulePresentationController.setFlowType("OtherBankRecipients");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.ManageRecipient"):
                applicationManager.getPresentationUtility().showLoadingScreen();
                var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
                p2pMod.presentationController.setFlowType("P2P");
                var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
                var type = "PayAPerson";
                transferModulePresentationController.transactionMode = type;
                action = transferModulePresentationController.getActionByType(type);
                transferModulePresentationController.fetchLimits(action);
                p2pMod.presentationController.fetchAllP2PRecipients();
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.InternationalRecipient"):
                applicationManager.getPresentationUtility().showLoadingScreen();
                var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
                var type = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToInternationalAccounts")
                    /*transferModulePresentationController.transactionMode = type;
                    action= transferModulePresentationController.getActionByType(type);
                    transferModulePresentationController.fetchLimits(action);*/
                transferModulePresentationController.fetchInternationalRecepients();
                transferModulePresentationController.setFlowType("InternationalRecipients");
        }
    },
    setSegmentData: function() {
        var scope = this;
        var data = [
            [{
                    "lblHeader": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.BankHeader"),
                },
                [{
                    "imgArrow": "chevron.png",
                    "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.EuropeRecipient"),
                    "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.EuropeRecipientDescription")
                }, {
                    "imgArrow": "chevron.png",
                    "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.InternationalRecipient"),
                    "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.InternationalRecipientDescription")
                }]
            ],
            /* [{
                     "lblHeader": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.P2PHeader")
                 },
                 [{
                     "imgArrow": "chevron.png",
                     "lblTransactionMode": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.ManageRecipient"),
                     "lblTransactionModeDescription": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.ManageRecipientDescription")
                 }]
             ]*/
        ];
        this.view.segRecipientType.setData(data);
    }
});
define("TransferModuleEurope/frmManageRecipientTypeEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i1c4dc0bc92c47868396a4992c14216f: function AS_Form_i1c4dc0bc92c47868396a4992c14216f(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e6817de2a6b24cd8902d4eac474dd7c8: function AS_Form_e6817de2a6b24cd8902d4eac474dd7c8(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("TransferModuleEurope/frmManageRecipientTypeEuropeController", ["TransferModuleEurope/userfrmManageRecipientTypeEuropeController", "TransferModuleEurope/frmManageRecipientTypeEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmManageRecipientTypeEuropeController");
    var controllerActions = ["TransferModuleEurope/frmManageRecipientTypeEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
