define("TransferModuleEurope/userfrmBenSwiftCodeEuropeController", {
    timerCounter: 0,
    init: function() {
        this.initActions();
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var swiftCode = transferModulePresentationController.getSwiftCode();
        if (swiftCode) {
            this.view.txtSwiftCode.text = swiftCode;
            this.enableContinueButton();
        } else {
            this.view.txtSwiftCode.text = "";
            this.disableContinueButton();
        }
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        navManager.setEntryPoint("searchCountry", "frmBenSwiftCodeEurope");
    },
    initActions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.txtSwiftCode.onTextChange = scope.validateSwiftLength;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.postShow = scope.frmpostShow;
        this.view.lbllookupcode.onTouchStart = function() {
            var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModPresentationController.searchSwiftData = {};
            transferModPresentationController.commonFunctionForNavigation("frmTransferEuropeSearchSwiftCode");
        };
        this.view.btnContinue.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var swiftCode = scope.view.txtSwiftCode.text;
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            var isValidSwiftCode = transferModulePresentationController.isValidSwiftCode(swiftCode, "frmBenSwiftCodeEurope");
            if (isValidSwiftCode) {
                //scope.fetchBankDetailsForInternational();
                transferModulePresentationController.navigateToVerifyDetailsFromSwiftCode(swiftCode);
            } else {
                scope.bindGenericError("Invalid swift code");
            }
        };
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
    },
    frmpostShow: function() {
        this.view.txtSwiftCode.setFocus(true);
    },
    getServiceName:   function(displayName) {
        var  serviceName;
        if (displayName  ===  "InternationalAccountsTransfer") {
            serviceName  =  "INTERNATIONAL_ACCOUNT_FUND_TRANSFER";
        } 
        else  if  (displayName  ===  "OtherBankAccountsTransfer") {
            serviceName  = "INTER_BANK_ACCOUNT_FUND_TRANSFER";
        }
        var  servicesForUser  =  applicationManager.getConfigurationManager().getServicesListForUser();
        if  (servicesForUser) {
            serviceName  =  servicesForUser.filter(function(dataItem) {
                if (dataItem  ===  serviceName)  return  true;
            });
            if (serviceName  &&  serviceName.length  >  0) {
                serviceName  =  serviceName[0];
            }
        }
        return  serviceName;
    },
    /** Fetches bank details of international bank
     */
    fetchBankDetailsForInternational: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var scope = this;
        var InternationalBankServiceName = "Internation Account to Account Fund Transfer";
        var swiftCode = scope.view.txtSwiftCode.text;
        var serviceName = scope.getServiceName("InternationalAccountsTransfer");
        if (swiftCode !== "") {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModulePresentationController.fetchBankDetailsForInternationalTransfer(swiftCode, serviceName);
        }
    },
    validateSwiftcode: function(response) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scope = this;
        if (response !== "") {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            var swiftCode = scope.view.txtSwiftCode.text;
            transferModulePresentationController.navigateToEnterBenificiaryAccountNumberFromSwiftCode(swiftCode, response);
        } else {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            var swiftCode = scope.view.txtSwiftCode.text;
            response = "ACME Bank";
            transferModulePresentationController.navigateToEnterBenificiaryAccountNumberFromSwiftCode(swiftCode, response);
        }
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("createEuropeExternalBenificiaries");
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.setFlowType("");
        transferModPresentationController.commonFunctionForNavigation(navigateToForm);
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    navigateToVerifyDetails: function() {
        var swiftCode = this.view.txtSwiftCode.text;
        if (swiftCode.length > 0 && swiftCode.length < 11) {
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
    },
    validateSwiftLength: function() {
        var data = this.view.txtSwiftCode.text;
        if (data.length === 8 || data.length === 11) {
            this.enableContinueButton();
        } else {
            this.disableContinueButton();
        }
    }
});
define("TransferModuleEurope/frmBenSwiftCodeEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ia4672a275384e488c26e09fca2a4b34: function AS_Form_ia4672a275384e488c26e09fca2a4b34(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_dfabe599cb5a403cb828e427dbfa1b51: function AS_Form_dfabe599cb5a403cb828e427dbfa1b51(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_i1dfd6ea88dd4cccaee35234a4809849: function AS_BarButtonItem_i1dfd6ea88dd4cccaee35234a4809849(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModuleEurope/frmBenSwiftCodeEuropeController", ["TransferModuleEurope/userfrmBenSwiftCodeEuropeController", "TransferModuleEurope/frmBenSwiftCodeEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmBenSwiftCodeEuropeController");
    var controllerActions = ["TransferModuleEurope/frmBenSwiftCodeEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
