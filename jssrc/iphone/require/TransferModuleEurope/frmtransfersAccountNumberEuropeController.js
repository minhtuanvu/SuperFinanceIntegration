define("TransferModuleEurope/userfrmtransfersAccountNumberEuropeController", {
    transferType: '',
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        //  applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
        this.clearTextBox();
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
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
        this.view.flxClose.onTouchStart = this.clearTextBox;
        this.view.tbxTo.onTextChange = this.activeteContBtn;
        // this.view.segToAccount.onRowClick = this.chooseRecep;
        this.view.btnAddRecipient.onClick = this.onClickContinue;
    },
    chooseRecep: function() {
        var rowindex = Math.floor(this.view.segToAccount.selectedRowIndex[1]);
        var selectedAccountData = this.view.segToAccount.data[rowindex];
        this.view.tbxTo.text = selectedAccountData.accountNumber;
        this.view.flxClose.setVisibility(true);
        this.view.flxToAccountHints.setVisibility(false);
        this.view.flxNewRecipient.setVisibility(false);
        this.view.flxNoTransactions.setVisibility(false);
    },
    clearTextBox: function() {
        this.view.tbxTo.text = "";
        this.view.flxClose.setVisibility(false);
        this.view.flxToAccountHints.setVisibility(false);
        this.view.flxNewRecipient.setVisibility(false);
        this.view.flxNoTransactions.setVisibility(false);
        this.deactivateContBtn();
        var navMan = applicationManager.getNavigationManager();
        var accdata = navMan.getCustomInfo("frmTransfersToAccount");
        accdata.selectedAccountData = {};
        navMan.setCustomInfo("frmTransfersToAccount", accdata);
    },
    showRecepSuggestions: function() {
        var data = this.view.tbxTo.text;
        var navMan = applicationManager.getNavigationManager();
        if (data.length) {
            this.view.flxClose.setVisibility(true);
            var TransModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
            TransModPresentationController.fetchInternationalAccountsByAccNoOrName(data);
            this.activeteContBtn();
        } else this.deactivateContBtn();
    },
    activeteContBtn: function() {
        this.view.btnAddRecipient.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.btnAddRecipient.setEnabled(true);
    },
    deactivateContBtn: function() {
        this.view.btnAddRecipient.skin = "sknBtnOnBoardingInactive";
        this.view.btnAddRecipient.setEnabled(false);
    },
    cancelOnClick: function() {
        var TransModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        TransModPresentationController.cancelCommon();
    },
    segmentDataSet: function(recepList) {
        if (recepList.length) {
            this.view.segToAccount.widgetDataMap = {
                lblNickNameValue: "beneficiaryName",
                lblIBANValue: "accountNumber"
            };
            this.view.segToAccount.setData(recepList);
            this.view.flxToAccountHints.setVisibility(true);
            this.view.flxNewRecipient.setVisibility(false);
            this.view.flxNoTransactions.setVisibility(false);
        } else {
            this.view.flxToAccountHints.setVisibility(false);
            this.view.flxNewRecipient.setVisibility(true);
            this.view.flxNoTransactions.setVisibility(true);
        }
    },
    onClickContinue: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var accountNumber = this.view.tbxTo.text;
        var navMan = applicationManager.getNavigationManager();
        var accdata = navMan.getCustomInfo("frmTransfersToAccount");
        if (kony.sdk.isNullOrUndefined(accdata.selectedAccountData)) accdata.selectedAccountData = {};
        accdata.selectedAccountData.accountNumber = accountNumber;
        navMan.setCustomInfo("frmTransfersToAccount", accdata);
        var TransModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        TransModPresentationController.checkExistingAccountwithAccountNumber(accountNumber);
        //navMan.navigateTo("frmTransfersRecipientNameEurope");
    },
    showAccountExistsPopup: function(accountNumber) {
        var alertCallback = function(response) {
            if (response) {
                var accNumber = accountNumber;
                var navMan = applicationManager.getNavigationManager();
                var accdata = navMan.getCustomInfo("frmTransfersToAccount");
                accdata.addedFlag = "false";
                accdata.isNewRecipient = "false";
                accdata.transactionType = "To International Accounts";
                accdata.type = "To International Accounts";
                if (kony.sdk.isNullOrUndefined(accdata.selectedAccountData)) accdata.selectedAccountData = {};
                accdata.selectedAccountData.accountNumber = accNumber;
                accdata.selectedAccountData.bankName = "Infinity";
                accdata.selectedAccountData.isInternationalAccount = "true";
                accdata.selectedAccountData.isSameBankAccount = "false";
                navMan.setCustomInfo("frmTransfersToAccount", accdata);
                var trasMan = applicationManager.getTransactionManager();
                trasMan.setTransactionAttribute("transactionType", "ExternalTransfer");
                trasMan.setTransactionAttribute("transferType", "international");
                var TransModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
                TransModPresentationController.navAfterToAcc();
            } else {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            }
        };
        var alertMsg = kony.i18n.getLocalizedString("kony.mb.transfers.AccountExistsAlertMsg");
        var NoText = kony.i18n.getLocalizedString("kony.mb.common.Cancel");
        var yesText = kony.i18n.getLocalizedString("kony.mb.common.continue");
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": "",
            "message": alertMsg,
            "alertHandler": alertCallback,
            "yesLabel": yesText,
            "noLabel": NoText
        }, {});
    },
    bindGenericError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    }
});
define("TransferModuleEurope/frmtransfersAccountNumberEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_jcaea33a14c94a6eb312c6d699d6e5df: function AS_FlexContainer_jcaea33a14c94a6eb312c6d699d6e5df(eventobject) {
        var self = this;
        var  transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.commonFunctionForNavigation("frmTransactionMode");
    },
    AS_Form_f63fec6580274ad1a9635e6768d5809a: function AS_Form_f63fec6580274ad1a9635e6768d5809a(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c8f3e95e441c4eca829ccf415be09355: function AS_Form_c8f3e95e441c4eca829ccf415be09355(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_hfe677b98fd346b6adafad1533951b4b: function AS_BarButtonItem_hfe677b98fd346b6adafad1533951b4b(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModuleEurope/frmtransfersAccountNumberEuropeController", ["TransferModuleEurope/userfrmtransfersAccountNumberEuropeController", "TransferModuleEurope/frmtransfersAccountNumberEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmtransfersAccountNumberEuropeController");
    var controllerActions = ["TransferModuleEurope/frmtransfersAccountNumberEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
