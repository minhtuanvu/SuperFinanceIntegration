define("TransferModuleEurope/userfrmtransfersIBANEuropeController", {
    keypadString: '',
    init: function() {
        this.initActions();
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var IBAN = transferModulePresentationController.getIBAN();
        var benificiaryData = transferModulePresentationController.getBenificiaryData();
        if (IBAN) {
            this.view.tbxIBAN.text = IBAN;
        } else if (benificiaryData.accountNumber) {
            this.view.tbxIBAN.text = benificiaryData.accountNumber;
        } else {
            this.view.tbxIBAN.text = "";
            this.disableContinueButton();
        }
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        var configManager = applicationManager.getConfigurationManager();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.tbxIBAN.onTextChange = scope.enableordiableContinue;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.postShow = scope.frmpostShow;
        this.view.btnContinue.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var accountdata = scope.view.tbxIBAN.text.toUpperCase();
            var transferModule = applicationManager.getModulesPresentationController("TransferModule");
            var isEuropeanIBAN = transferModule.isEuropeanIBAN(accountdata);
            if (isEuropeanIBAN) {
                if (configManager.checkUserPermission("INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE_RECEPIENT")) {
                    var isValidIBAN = transferModule.isValidIBAN(accountdata, "frmtransfersIBANEurope");
                    if (isValidIBAN) {
                        transferModule.fetchBankDetailsAndNavigate(accountdata);
                    }
                } else {
                    scope.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransferEurope.NoDomesticPermission"));
                }
            } else {
                if (configManager.checkUserPermission("INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE_RECEPIENT")) {
                    if (transferModule.isvalidateAccountorIBAN(accountdata, "frmtransfersIBANEurope")) {
                        if (transferModule.isInternationIBANEntered) {
                            transferModule.fetchInterBankDetailsAndNavigate(accountdata);
                        } else {
                            transferModule.navigateToSwiftCodefromIBAN(accountdata);
                        }
                    }
                } else {
                    scope.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransferEurope.NoInternationalPermission"));
                }
            }
        };
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
    },
    frmpostShow: function() {
        this.view.tbxIBAN.setFocus(true);
    },
    getServiceName: function(displayName) {
        var serviceName;
        if (displayName === "InternationalAccountsTransfer") {
            serviceName = "INTERNATIONAL_ACCOUNT_FUND_TRANSFER";
        } else if (displayName === "OtherBankAccountsTransfer") {
            serviceName = "INTER_BANK_ACCOUNT_FUND_TRANSFER";
        }
        var servicesForUser = applicationManager.getConfigurationManager().getServicesListForUser();
        if (servicesForUser) {
            serviceName = servicesForUser.filter(function(dataItem) {
                if (dataItem === serviceName) return true;
            });
            if (serviceName && serviceName.length > 0) {
                serviceName = serviceName[0];
            }
        }
        return serviceName;
    },
    /** Fetches bank details of international bank
     */
    fetchBankDetailsForDomestic: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var scope = this;
        var InternationalBankServiceName = "Internation Account to Account Fund Transfer";
        var IBAN = scope.view.tbxIBAN.text.toUpperCase();
        var serviceName = scope.getServiceName("InternationalAccountsTransfer");
        if (IBAN !== "") {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModulePresentationController.fetchBankDetailsForDomesticTransfer(IBAN, serviceName);
        }
    },
    validateIBAN: function(response) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scope = this;
        if (response !== "") {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            var IBAN = scope.view.tbxIBAN.text.toUpperCase();
            transferModulePresentationController.navigateToEnterBenificiaryNameFromIBAN(IBAN, response);
        } else {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            var IBAN = scope.view.tbxIBAN.text.toUpperCase();
            response = "ACME Bank";
            transferModulePresentationController.navigateToEnterBenificiaryNameFromIBAN(IBAN, response);
        }
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("createEuropeExternalBenificiaries");
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.commonFunctionForNavigation(navigateToForm);
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    enableordiableContinue: function() {
        var IBAN = this.view.tbxIBAN.text.toUpperCase();
        //this.view.tbxIBAN.text = IBAN;
        if (IBAN.length >= 5 && IBAN.length <= 34) {
            this.enableContinueButton();
        } else {
            this.disableContinueButton();
        }
    },
    enableContinueButton: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    disableContinueButton: function() {
        this.view.btnContinue.setEnabled(false);
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("TransferModuleEurope/frmtransfersIBANEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_hbfc0d68a6784cd18e567f09afebcb78: function AS_Button_hbfc0d68a6784cd18e567f09afebcb78(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmBenNameEurope");
        ntf.navigate();
    },
    AS_Form_aa217f7297e54858a9fbfbcbcc0099b9: function AS_Form_aa217f7297e54858a9fbfbcbcc0099b9(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_hdd9bd35abc04f7aa33b1c84ae187ef2: function AS_Form_hdd9bd35abc04f7aa33b1c84ae187ef2(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_f51eee348c5e4193bdb937fe65247344: function AS_BarButtonItem_f51eee348c5e4193bdb937fe65247344(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModuleEurope/frmtransfersIBANEuropeController", ["TransferModuleEurope/userfrmtransfersIBANEuropeController", "TransferModuleEurope/frmtransfersIBANEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmtransfersIBANEuropeController");
    var controllerActions = ["TransferModuleEurope/frmtransfersIBANEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
