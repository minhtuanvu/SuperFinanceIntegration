define("TransferModule/userfrmTransfersToAccountController", {
    transferType: '',
    internalAccounts: null,
    externalFreqAccounts: null,
    externalAllAcconts: null,
    segmentData: null,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        //  applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (this.view.flxHeaderSearchbox.height === "40dp") {
            this.view.flxHeaderSearchbox.height = "0dp";
            // this.view.flxHeaderSearchbox.isVisible = false;
            this.view.flxSearch.height = "55dp";
            // this.view.flxSearch.isVisible = true;
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        }
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
        this.view.flxMainContainer.skin = "slFSbox";
        this.view.segAccounts.isVisible = true;
        this.view.flxNoTransactions.isVisible = false;
        this.initActions();
        this.showAddedToastMessage();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        scope.showPopUp();
        scope.segmentDataSet();
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.segAccounts.onRowClick = function() {
            scope.segmentRowClick();
        }
        this.view.tbxSearch.onTouchStart = this.showSearch;
        // this.view.tbxSearch.onTextChange = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.showSearch;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
    },
    showPopUp: function() {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        if (transferModulePresentationController.getFlowType() === "OtherKonyBankMembersCreateTransfer") {
            if (scope_TransfersPresentationController.sameBankBenificiaryAdded) {
                applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary", "Successfully recipient was added"));
                scope_TransfersPresentationController.sameBankBenificiaryAdded = false;
            }
            if (scope_TransfersPresentationController.isNickNameUpdated) {
                applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.successUpdate", "Successfully recipient nick name was updated"));
                scope_TransfersPresentationController.isNickNameUpdated = false;
            }
            if (scope_TransfersPresentationController.isRecipientDeleted) {
                applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.deleteBenificiary", "Successfully recipient deleted permanently"));
                scope_TransfersPresentationController.isRecipientDeleted = false;
            }
        } else if (transferModulePresentationController.getFlowType() === "OtherBankAccountsCreateTransfer") {
            if (scope_TransfersPresentationController.otherBankBenificiaryAdded) {
                applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary", "Successfully recipient was added"));
                scope_TransfersPresentationController.otherBankBenificiaryAdded = false;
            }
            if (scope_TransfersPresentationController.isNickNameUpdated) {
                applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.successUpdate", "Successfully recipient nick name was updated"));
                scope_TransfersPresentationController.isNickNameUpdated = false;
            }
            if (scope_TransfersPresentationController.isRecipientDeleted) {
                applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.deleteBenificiary", "Successfully recipient deleted permanently"));
                scope_TransfersPresentationController.isRecipientDeleted = false;
            }
        } else {
            if (scope_TransfersPresentationController.internationalBenificiaryAdded) {
                applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary", "Successfully recipient was added"));
                scope_TransfersPresentationController.internationalBenificiaryAdded = false;
            }
        }
    },
    cancelOnClick: function() {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.cancelCommon();
    },
    segmentDataSet: function() {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        var accdata = navMan.getCustomInfo("frmTransfersToAccount");
        if (accdata.type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")) {
            var internalAcc = accdata.internalAccounts;
            scope.myKonySegmentData(internalAcc);
        } else {
            var frequentExternalacc = accdata.frequentExternalAccounts;
            var allExternalAccounts = accdata.allExternalAccounts;
            scope.myOtherSegmentData(frequentExternalacc, allExternalAccounts);
        }
        // applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    segmentRowClick: function() {
        var navMan = applicationManager.getNavigationManager();
        var accdata = navMan.getCustomInfo("frmTransfersToAccount");
        var rowindex = Math.floor(this.view.segAccounts.selectedRowIndex[1]);
        if (accdata.type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")) {
            var selectedAccountData = this.view.segAccounts.data[rowindex];
            accdata.selectedAccountData = selectedAccountData;
        } else {
            var secindex = Math.floor(this.view.segAccounts.selectedRowIndex[0]);
            var selectedAccountData = this.view.segAccounts.data[secindex][1][rowindex];
            accdata.selectedAccountData = selectedAccountData;
        }
        navMan.setCustomInfo("frmTransfersToAccount", accdata);
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transModPresentationController.navAfterToAcc();
    },
    myKonySegmentData: function(data) {
        this.view.flxMainContainer.bottom = "0dp";
        this.view.btnAddRecipient.setVisibility(false);
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var processedData = transModPresentationController.processAccountsData(data);
        if (processedData.length > 0) {
            this.view.flxNoTransactions.isVisible = false;
            this.view.segAccounts.isVisible = true;
            this.view.segAccounts.widgetDataMap = {
                lblAccountName: "processedName",
                lblBankName: "bankName",
                lblAccountBalValue: "availableBalance",
                lblAccountBal: "accountBalanceType",
                accountNumber: "accountID",
                accountType: "accountType"
            };
            this.view.segAccounts.setData(processedData);
            this.segmentData = this.view.segAccounts.data;
            this.internalAccounts = this.view.segAccounts.data;
        } else {
            this.segmentData = [];
            this.internalAccounts = [];
            this.view.flxNoTransactions.isVisible = true;
            this.view.segAccounts.isVisible = false;
        }
    },
    myOtherSegmentData: function(freqAccount, allAccount) {
        this.view.btnAddRecipient.setVisibility(true);
        this.view.flxMainContainer.bottom = "70dp";
        this.view.btnAddRecipient.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.externalAccounts.addAccount");
        var navMan = applicationManager.getNavigationManager();
        var toacc = navMan.getCustomInfo("frmTransfersToAccount");
        this.view.btnAddRecipient.onClick = this.btnAddRecipientOnClick;
        this.view.segAccounts.widgetDataMap = {
            lblAccountName: "nickName",
            lblBankName: "bankName",
            lblAccountBal: "accountType",
            lblAccountBalValue: "",
            accountNumber: "accountNumber",
            lblHeader: "lblHeader"
        };
        if (freqAccount.length > 0 && allAccount.length > 0) {
            var data = [
                [{
                    "lblHeader": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.frequentlyusertransactions")
                }, freqAccount],
                [{
                    "lblHeader": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.allaccounts")
                }, allAccount]
            ];
            this.view.segAccounts.setData(data);
            this.segmentData = data;
            this.externalFreqAccounts = this.view.segAccounts.data[0][1];
            this.externalAllAcconts = this.view.segAccounts.data[0][1];
        } else if (freqAccount.length > 0) {
            var data = [
                [{
                    "lblHeader": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.frequentlyusertransactions")
                }, freqAccount]
            ];
            this.view.segAccounts.setData(data);
            this.segmentData = data;
            this.externalFreqAccounts = this.view.segAccounts.data[0][1];
            this.externalAllAcconts = [];
        } else if (allAccount.length > 0) {
            var data = [
                [{
                    "lblHeader": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.allaccounts")
                }, allAccount]
            ];
            this.view.segAccounts.setData(data);
            this.segmentData = data;
            this.externalAllAcconts = this.view.segAccounts.data[0][1];
            this.externalFreqAccounts = [];
        } else {
            this.segmentData = [];
            this.externalAllAcconts = [];
            this.externalFreqAccounts = [];
            this.view.flxNoTransactions.isVisible = true;
            this.view.segAccounts.isVisible = false;
        }
    },
    showSearch: function() {
        //     if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
        //     } else {
        var scopeObj = this;
        if (this.view.flxHeaderSearchbox.height === "40dp") {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "0dp";
                this.view.flxMainContainer.skin = "slFSbox";
                this.view.flxHeaderSearchbox.height = "0dp";
                // this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.height = "55dp";
                // this.view.flxSearch.isVisible = true;
            } else {
                this.view.flxMainContainer.skin = "slFSbox";
                this.view.flxMainContainer.top = "56dp";
                this.view.flxHeader.isVisible = true;
                this.view.flxSearch.height = "55dp";
                // this.view.flxSearch.isVisible = true;
                this.view.flxHeaderSearchbox.height = "0dp";
                // this.view.flxHeaderSearchbox.isVisible = false;
            }
            if (this.segmentData.length > 0) {
                this.view.segAccounts.setData(this.segmentData);
                this.view.flxNoTransactions.isVisible = false;
                this.view.segAccounts.isVisible = true;
            } else {
                this.view.flxNoTransactions.isVisible = true;
                this.view.segAccounts.isVisible = false;
            }
        } else {
            this.view.flxMainContainer.skin = "sknFlxScrlffffff";
            this.view.flxSearch.height = "0dp";
            //  this.view.flxSearch.isVisible = false;
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "40dp";
            this.view.customSearchbox.tbxSearch.text = "";
            this.view.flxHeaderSearchbox.height = "40dp";
            // this.view.flxHeaderSearchbox.isVisible = true;
            kony.timer.schedule("timerId", function() {
                scopeObj.view.customSearchbox.tbxSearch.setFocus(true);
            }, 0.2, false);
            this.view.customSearchbox.tbxSearch.onTextChange = this.searchdata;
        }
        this.view.forceLayout();
        // }
    },
    searchdata: function() {
        var accdatajson = {},
            searchData;
        var navMan = applicationManager.getNavigationManager();
        //     var resMan=applicationManager.getRecipientsManager();
        var accdata = navMan.getCustomInfo("frmTransfersToAccount");
        var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
        if (searchtext) {
            var data = [],
                headers = [];
            this.view.segAccounts.removeAll();
            if (accdata.type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")) {
                data = this.internalAccounts;
                searchData = applicationManager.getDataProcessorUtility().commonSegmentSearch("accountName", searchtext, data);
                //         accdatajson.internalAccounts=this.internalAccounts;
                //         searchData=resMan.searchAccounts(searchtext,accdatajson,accdata.type);
            } else {
                headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.frequentlyusertransactions"));
                headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.allaccounts"));
                data.push(this.externalFreqAccounts);
                data.push(this.externalAllAcconts);
                searchData = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("nickName", searchtext, data, headers);
                //         accdatajson.externalFreqAccounts=this.externalFreqAccounts;
                //         accdatajson.externalAllAcconts=this.externalAllAcconts;
                //         searchData=resMan.searchAccounts(searchtext,accdatajson,accdata.type);
            }
            if (searchData.length > 0) {
                this.view.segAccounts.setData(searchData);
                this.view.flxNoTransactions.isVisible = false;
                this.view.segAccounts.isVisible = true;
            } else {
                this.view.segAccounts.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        } else {
            if (this.segmentData.length > 0) {
                this.view.segAccounts.setData(this.segmentData);
                this.view.flxNoTransactions.isVisible = false;
                this.view.segAccounts.isVisible = true;
            } else {
                this.view.flxNoTransactions.isVisible = true;
                this.view.segAccounts.isVisible = false;
            }
        }
    },
    btnAddRecipientOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        if (transferModulePresentationController.getFlowType() === "OtherKonyBankMembersCreateTransfer") {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            navManager.setEntryPoint("createInternalBankBenificiary", "frmTransfersToAccount");
            transferModulePresentationController.clearBenificiaryData();
            transferModulePresentationController.commonFunctionForNavigation("frmEnterBenAccNo");
        }
        if (transferModulePresentationController.getFlowType() === "OtherBankAccountsCreateTransfer") {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            navManager.setEntryPoint("createInternalBankBenificiary", "frmTransfersToAccount");
            transferModulePresentationController.clearBenificiaryData();
            transferModulePresentationController.commonFunctionForNavigation("frmAddBenRoutNo");
        }
        if (transferModulePresentationController.getFlowType() === "InternationalTransferCreateTransfer") {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            navManager.setEntryPoint("createInternalBankBenificiary", "frmTransfersToAccount");
            transferModulePresentationController.clearBenificiaryData();
            transferModulePresentationController.fetchCountriesList();
        }
    },
    btnAddRecipientOtherBankOnClick: function() {
        var bankDetails = {
            "bankType": "OtherBank",
            "entryPoint": "createTransfer"
        };
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.navigateToEnterBenificiaryRoutingNumber(bankDetails);
    },
    showAddedToastMessage: function() {
        var navManager = applicationManager.getNavigationManager();
        var accdata = navManager.getCustomInfo("frmTransfersToAccount");
        if (accdata.addedFlag) {
            this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary"));
            accdata.addedFlag = false;
            navManager.setCustomInfo("frmTransfersToAccount", accdata);
        }
    },
    bindGenericSuccess: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    }
});
define("TransferModule/frmTransfersToAccountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_gc1ff8a4ab114bd3b4dffe3316a3c550: function AS_FlexContainer_gc1ff8a4ab114bd3b4dffe3316a3c550(eventobject) {
        var self = this;
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transModPresentationController.commonFunctionForNavigation("frmTransactionMode");
    },
    AS_Form_gc42f9fc3d704fbc87ae30831d0d76bf: function AS_Form_gc42f9fc3d704fbc87ae30831d0d76bf(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b238148e2057494aa77e863fde7dbc08: function AS_Form_b238148e2057494aa77e863fde7dbc08(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_g619cb229dd843fca9b09dae0fb9d662: function AS_BarButtonItem_g619cb229dd843fca9b09dae0fb9d662(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModule/frmTransfersToAccountController", ["TransferModule/userfrmTransfersToAccountController", "TransferModule/frmTransfersToAccountControllerActions"], function() {
    var controller = require("TransferModule/userfrmTransfersToAccountController");
    var controllerActions = ["TransferModule/frmTransfersToAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
