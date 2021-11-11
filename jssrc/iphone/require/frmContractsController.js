define("userfrmContractsController", {
    init: function() {
        this.initActions();
    },
    initActions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
    },
    onClickCancel: function() {
        var navManager = applicationManager.getNavigationManager();
        var previousForm = navManager.getEntryPoint("contracts");
        if (previousForm === "frmBillPayPayeeDetails" || previousForm === "frmBillPayReEnterAccNo" || previousForm === "frmBillPayEnterAccNo" || previousForm === "frmBillPayPhoneNumber" || previousForm === "frmBillPayPolicyNumber") {
            var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayModule.presentationController.cancelCommon();
        } else if (previousForm === "frmBenName" || previousForm === "frmManageTransferRecipientInfo") {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModPresentationController.commonFunctionForNavigation("frmManageRecipientList");
        } else if (previousForm === "frmManageP2pRecipient" || previousForm === "frmP2PRecipientName") {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var p2pPresentationController = applicationManager.getModulesPresentationController("PayAPersonModule");
            p2pPresentationController.commonFunctionForNavigation("frmManageRecipientList");
        } else if (previousForm === "frmBenSwiftCodeEurope" || previousForm === "frmtransfersIBANEurope" || previousForm === "frmEnterBenAccNoEurope" || previousForm === "frmBeneficiaryDetailsEurope") {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModPresentationController.commonFunctionForNavigation("frmEuropeManageBeneficiaries");
        }
    },
    frmPreshow: function() {
        this.setFormDataBasedOnEntryPoint();
        this.initializeSearchActions();
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
            this.view.flxMainContainer.top = "0dp";
        } else {
            this.view.flxHeader.setVisibility(true);
            this.view.flxMainContainer.top = "56dp";
        }
    },
    bindContractsData: function(response) {
        this.view.ContractList.setContractsData(response);
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    btnContinueOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        var recipientsManager = applicationManager.getRecipientsManager();
        var contractData = this.view.ContractList.segContract.data;
        navMan.setCustomInfo("selectedContractData", contractData);
        var previousForm = navMan.getEntryPoint("contracts");
        var selectedContractDetails = this.view.ContractList.createCIFData(contractData);
        if (!kony.sdk.isNullOrUndefined(selectedContractDetails) && (typeof selectedContractDetails === 'object')) {
            selectedContractDetails = JSON.stringify(selectedContractDetails);
        }
        var customerCount = navMan.getCustomInfo("totalContractCustomerSelected");
        var flowType;
        if (previousForm === "frmBillPayPayeeDetails" || previousForm === "frmBillPayReEnterAccNo" || previousForm === "frmBillPayEnterAccNo" || previousForm === "frmBillPayPhoneNumber" || previousForm === "frmBillPayPolicyNumber") {
            recipientsManager.setAttributePayee("cif", selectedContractDetails);
            recipientsManager.setAttributePayee("totalContractCustomerSelected", customerCount);
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            flowType = billPayMod.presentationController.getFlowType();
            if (flowType === "editBillPay") {
                var payeeDetails = billPayMod.presentationController.getPayeeDetails();
                var cifDtatails = {};
                cifDtatails.payeeId = payeeDetails.payeeId;
                cifDtatails.cif = selectedContractDetails;
                billPayMod.presentationController.updatePayeeContractDetails(cifDtatails);
            } else if (flowType === "createBillPayPayee") {
                navMan.navigateTo("frmBillPayVerifyDetails");
            }
        } else if (previousForm === "frmBenName" || previousForm === "frmManageTransferRecipientInfo") {
            recipientsManager.setBeneficiaryAttribute("cif", selectedContractDetails);
            recipientsManager.setBeneficiaryAttribute("totalContractCustomerSelected", customerCount);
            var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
            flowType = transferModule.presentationController.getFlowType();
            if (flowType === "editTransfer") {
                transferModule.presentationController.updateBenificiaryCIF(selectedContractDetails);
            } else {
                navMan.navigateTo("frmBenVerifyDetails");
            }
        } else if (previousForm === "frmManageP2pRecipient" || previousForm === "frmP2PRecipientName") {
            recipientsManager.setP2PPayeeAttribute("cif", selectedContractDetails);
            recipientsManager.setP2PPayeeAttribute("totalContractCustomerSelected", customerCount);
            recipientsManager.setP2PPayeeAttribute("totalCount", customerCount);
            var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            flowType = payAPersonModule.presentationController.getFlowType();
            if (flowType === "editP2P") {
                payAPersonModule.presentationController.updateP2PRecipientCIF(selectedContractDetails);
            } else {
                navMan.navigateTo("frmP2PVerifyDetails");
            }
        } else if (previousForm === "frmBenSwiftCodeEurope" || previousForm === "frmtransfersIBANEurope" || previousForm === "frmEnterBenAccNoEurope" || previousForm === "frmBeneficiaryDetailsEurope") {
            // europe flow
            recipientsManager.setBeneficiaryAttribute("cif", selectedContractDetails);
            recipientsManager.setBeneficiaryAttribute("totalContractCustomerSelected", customerCount);
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            flowType = transferModulePresentationController.getFlowType();
            if (flowType === "editTransfer") {
                var beneData = transferModulePresentationController.getBenificiaryData();
                transferModulePresentationController.updateBenificiaryCIF();
            } else {
                transferModulePresentationController.commonFunctionForNavigation("frmBenVerifyDetailsEurope");
            }
        }
    },
    setFormDataBasedOnEntryPoint: function() {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        var previousForm = navMan.getEntryPoint("contracts");
        if (previousForm === "frmBillPayPayeeDetails" || previousForm === "frmBillPayReEnterAccNo" || previousForm === "frmBillPayEnterAccNo" || previousForm === "frmBillPayPhoneNumber" || previousForm === "frmBillPayPolicyNumber") {
            scope.setDataForBillPay();
        } else if (previousForm === "frmBenName" || previousForm === "frmManageTransferRecipientInfo") {
            scope.setDataForTransfers();
        } else if (previousForm === "frmManageP2pRecipient" || previousForm === "frmP2PRecipientName") {
            scope.setDataForP2p();
        } else if (previousForm === "frmBenSwiftCodeEurope" || previousForm === "frmtransfersIBANEurope" || previousForm === "frmEnterBenAccNoEurope" || previousForm === "frmBeneficiaryDetailsEurope") {
            // europe flow
            scope.setDataForEuropeBenificiary();
        }
    },
    setDataForBillPay: function() {
        var scope = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var flowType = billPayMod.presentationController.getFlowType();
        var payeeData = billPayMod.presentationController.getPayeeDetails();
        if (payeeData.cif === undefined) this.disableContinueButton(true);
        if (flowType === "editBillPay") {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
                this.view.title = "Edit Link Recipient";
            }
            scope.view.customHeader.lblLocateUs.text = "Edit Link Recipient";
            scope.view.btnContinue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.save");
            this.view.ContractList.preshow(payeeData.cif);
        } else if (flowType === "createBillPayPayee") {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
                this.view.title = "Link Recipient";
            }
            scope.view.customHeader.lblLocateUs.text = "Link Recipient";
            scope.view.btnContinue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.continue");
            this.view.ContractList.preshow(payeeData.cif);
        }
    },
    setDataForTransfers: function() { // 
        var scope = this;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        var flowType = transferModule.presentationController.getFlowType();
        var beneData = transferModule.presentationController.getBenificiaryData();
        if (beneData.cif === undefined) this.disableContinueButton(true);
        if (flowType === "editTransfer") {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
                this.view.title = "Edit Link Recipient";
            }
            scope.view.customHeader.lblLocateUs.text = "Edit Link Recipient";
            scope.view.btnContinue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.save");
            this.view.ContractList.preshow(beneData.cif);
        } else {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
                this.view.title = "Link Recipient";
            }
            scope.view.customHeader.lblLocateUs.text = "Link Recipient";
            scope.view.btnContinue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.continue");
            this.view.ContractList.preshow(beneData.cif);
        }
    },
    setDataForEuropeBenificiary: function() {
        var scope = this;
        var transferModulePresController = applicationManager.getModulesPresentationController("TransferModule");
        var flowType = transferModulePresController.getFlowType();
        var beneData = transferModulePresController.getBenificiaryData();
        if (beneData.cif === undefined) this.disableContinueButton(true);
        if (flowType === "editTransfer") {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
                this.view.title = "Edit Link Benificiary";
            }
            scope.view.customHeader.lblLocateUs.text = "Edit Link Benificiary";
            scope.view.btnContinue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.save");
            this.view.ContractList.preshow(beneData.cif);
        } else {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
                this.view.title = "Link Benificiary";
            }
            scope.view.customHeader.lblLocateUs.text = "Link Benificiary";
            scope.view.btnContinue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.continue");
            this.view.ContractList.preshow(beneData.cif);
        }
    },
    setDataForP2p: function() {
        var scope = this;
        var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var flowType = payAPersonModule.presentationController.getFlowType();
        var p2pdata = payAPersonModule.presentationController.getP2PPayeeDetails();
        if (p2pdata.cif === undefined) this.disableContinueButton(true);
        if (flowType === "editP2P") {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
                this.view.title = "Edit Link Recipient";
            }
            scope.view.customHeader.lblLocateUs.text = "Edit Link Recipient";
            scope.view.btnContinue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.save");
            this.view.ContractList.preshow(p2pdata.cif);
        } else {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
                this.view.title = "Link Recipient";
            }
            scope.view.customHeader.lblLocateUs.text = "Link Recipient";
            scope.view.btnContinue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.continue");
            this.view.ContractList.preshow(p2pdata.cif);
        }
    },
    initializeSearchActions: function() {
        this.view.tbxSearch.text = "";
        this.view.ContractList.flxNoContracts.setVisibility(false);
        this.view.tbxSearch.onTextChange = this.search.bind(this);
    },
    search: function() {
        var scopeObj = this;
        var searchText = scopeObj.view.tbxSearch.text;
        scopeObj.view.ContractList.onSearchBtnClick(searchText);
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    disableContinueButton: function(value) {
        if (value) {
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        } else {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        }
        this.view.forceLayout();
    }
});
define("frmContractsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b2a5969cd88e4b6d9f8df6e9fc1f9081: function AS_Form_b2a5969cd88e4b6d9f8df6e9fc1f9081(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i1315078c58444c18458abca8a060e20: function AS_Form_i1315078c58444c18458abca8a060e20(eventobject) {
        var self = this;
        this.frmPreshow();
    },
    AS_BarButtonItem_fdbbfe74f38749b3bbca107b708047a6: function AS_BarButtonItem_fdbbfe74f38749b3bbca107b708047a6(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("frmContractsController", ["userfrmContractsController", "frmContractsControllerActions"], function() {
    var controller = require("userfrmContractsController");
    var controllerActions = ["frmContractsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
