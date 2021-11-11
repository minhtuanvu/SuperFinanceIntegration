define("TransferModuleEurope/userfrmBeneficiaryDetailsEuropeController", {
    data: {},
    benificiaryData: null,
    isEditLinkedCustomerAvailable: false,
    onNavigate: function() {
        this.pauseNavigation();
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var navMan = applicationManager.getNavigationManager();
        navMan.setEntryPoint("contracts", "frmBeneficiaryDetailsEurope");
        var flowType = transferModulePresentationController.getFlowType();
        var featureAction = transferModulePresentationController.getFeatureAction(flowType);
        var successCallback = function() {
            this.resumeNavigation();
        }.bind(this);
        var failureCallback = function() {
            this.isEditLinkedCustomerAvailable = false;
            this.resumeNavigation();
        }.bind(this);
        transferModulePresentationController.setFlowType("editTransfer");
        transferModulePresentationController.getContractDetails(featureAction, successCallback, failureCallback);
    },
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
        scope.view.btnBack.onClick = function() {
            var paymentMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
            paymentMod.presentationController.showDashboard();
        };
    },
    preShow: function() {
        this.initActions();
        this.renderTitleBar();
        this.populateDetails();
        this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
        this.view.btnBack.onClick = this.navigateToMakeaPayment;
        var navMan = applicationManager.getNavigationManager();
        navMan.setEntryPoint("editbeneficiary", "frmBeneficiaryDetailsEurope");
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.btnRight.onClick = function() {
            scope.blockBackgroundonAdditionalOptions();
        };
        this.view.flxCancel.onTouchStart = function() {
            scope.enableBackgroundonCloseAdditionalOptions();
        };
        this.view.flxNickname.onTouchStart = this.navigateToNickName;
        this.view.flxAddress.onTouchStart = this.navigateToAddress;
        /*this.view.flxPhonenumber.onTouchStart = this.navigateToPhonenumber;
        this.view.flxEmailID.onTouchStart = this.navigateToEmailID;*/
        this.view.flxPhonenumber.isVisible = false;
        this.view.flxEmailID.isVisible = false;
        this.view.flxRemoveBeneficiary.onTouchStart = this.deleteBeneficiaryConfirmation;
        this.view.flxEditLinkedCustomer.onTouchStart = this.navigateToContract;
        if (this.isEditLinkedCustomerAvailable) {
            this.view.flxEditLinkedCustomer.setVisibility(true);
        } else {
            this.view.flxEditLinkedCustomer.setVisibility(false);
        }
    },
    navigateToMakeaPayment: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.setEntryPoint("europeTransferFlow", "frmEuropeManageBeneficiaries");
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.setTransferToAccountFromManageFlow();
    },
    navigateToContract: function() {
        //             
        var navMan = applicationManager.getNavigationManager();
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        navMan.setEntryPoint("contracts", navMan.getCurrentForm());
        transferModulePresentationController.setFlowType("editTransfer");
        transferModulePresentationController.commonFunctionForNavigation("frmContracts");
    },
    navigateToNickName: function() {
        //var nickNameMod = applicationManager.getModulesPresentationController("TransferModule");
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmEuropeTransferToAccountNewBenName", this.data);
        navMan.navigateTo("frmEuropeTransferToAccountNewBenName");
    },
    navigateToAddress: function() {
        //var addressMod = applicationManager.getModulesPresentationController("TransferModule");
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmBenAddressEurope", this.data);
        navMan.navigateTo("frmBenAddressEurope");
    },
    navigateToPhonenumber: function() {
        var phoneNumberMod = applicationManager.getModulesPresentationController("TransferModule");
        phoneNumberMod.commonFunctionForNavigation("frmTransfersPhoneNumberEurope");
    },
    navigateToEmailID: function() {
        var emailIDMod = applicationManager.getModulesPresentationController("TransferModule");
        emailIDMod.commonFunctionForNavigation("frmBenEmailAddressEurope");
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
    },
    populateDetails: function() {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var navMan = applicationManager.getNavigationManager();
        var benificiaryData = navMan.getCustomInfo("frmBeneficiaryDetailsEurope");
        this.view.lblBenNameValue.text = benificiaryData.beneficiaryName || "-";
        this.view.lblAccountNoValue.text = benificiaryData.accountNumber || "-";
        this.view.lblPaymentMethodValue.text = benificiaryData.paymentMethod || "-";
        if (benificiaryData.paymentMethod !== applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transferEurope.WithinBank")) {
            this.view.flxSwiftCode.isVisible = true;
            this.view.lblSwiftCodeValue.text = benificiaryData.swiftCode || "-";
        } else {
            this.view.flxSwiftCode.isVisible = false;
        }
        this.view.lblBankAddressValue.text = benificiaryData.bankName || "-";
        this.view.lblNicknameBen.text = benificiaryData.nickName || "-";
        this.view.lblBenAddress.text = benificiaryData.address || "-";
        this.view.lblBenPhoneNumber.text = benificiaryData.phoneNumber || "-";
        this.view.lblBenEmailAddress.text = benificiaryData.email || "-";
        // linked with data
        if (benificiaryData.noOfCustomersLinked) {
            this.view.lblLinkedWith.text = benificiaryData.noOfCustomersLinked + " Customer ID(s)";
            this.view.flxLinkedWithCustomers.setVisibility(true);
        } else {
            this.view.flxLinkedWithCustomers.setVisibility(false);
        }
        this.data = benificiaryData;
        this.view.flxBenConfirmation.setEnabled(true);
        this.view.flxAdditionalOptions.setVisibility(false);
    },
    showEditBeneficiaryAck: function() {
        var navMan = applicationManager.getNavigationManager();
        var benificiaryEditedData = navMan.getCustomInfo("frmBeneficiaryDetailsEurope");
        this.view.lblNicknameBen.text = benificiaryEditedData.nickName || "-";
    },
    deleteBeneficiaryConfirmation: function() {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        this.benificiaryData = navMan.getCustomInfo("frmBeneficiaryDetailsEurope");
        var message = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.EuropeTransfer.DoYouWantToRemove") + " " + this.benificiaryData.beneficiaryName + "? " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.EuropeTransfer.ThisCannotReverse");
        var basicProperties = {
            "message": message,
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.RemoveBeneficiary"),
            "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.EuropeTransfer.YesRemove"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.common.No"),
            "alertIcon": "",
            "alertHandler": scope.removeBeneficiary
        };
        applicationManager.getPresentationUtility().showAlertMessage(basicProperties, {});
    },
    removeBeneficiary: function(response) {
        if (response === true) {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModulePresentationController.deleteBeneficiary(this.benificiaryData);
        }
    },
    goBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    blockBackgroundonAdditionalOptions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var beneficiaryDetails = navManager.getCustomInfo("frmBeneficiaryDetailsEurope");
        var isDeleteBeneficiaryAccessible = "";
        if (beneficiaryDetails.isInternationalAccount === "false" && beneficiaryDetails.isSameBankAccount === "false") {
            isDeleteBeneficiaryAccessible = applicationManager.getConfigurationManager().checkUserPermission("INTER_BANK_ACCOUNT_FUND_TRANSFER_DELETE_RECEPIENT");
        } else if (beneficiaryDetails.isInternationalAccount === "true" && beneficiaryDetails.isSameBankAccount === "false") {
            isDeleteBeneficiaryAccessible = applicationManager.getConfigurationManager().checkUserPermission("INTERNATIONAL_ACCOUNT_FUND_TRANSFER_DELETE_RECEPIENT");
        } else if (beneficiaryDetails.isInternationalAccount === "false" && beneficiaryDetails.isSameBankAccount === "true") {
            isDeleteBeneficiaryAccessible = applicationManager.getConfigurationManager().checkUserPermission("INTRA_BANK_FUND_TRANSFER_DELETE_RECEPIENT");
        }
        if (applicationManager.getDeviceUtilManager().isIPhone()) {
            var actionSheetObject = new kony.ui.ActionSheet({
                "title": null,
                "message": null,
                "showCompletionCallback": null
            });
            applicationManager.actionSheetObject = actionSheetObject;
            var actionNickName = new kony.ui.ActionItem({
                "title": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.AccInfoEdit.Title"),
                "style": constants.ACTION_STYLE_DEFAULT,
                "action": this.navigateToNickName
            });
            applicationManager.actionSheetObject = actionSheetObject;
            var actionAddress = new kony.ui.ActionItem({
                "title": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.ProfileEditAddress.Title"),
                "style": constants.ACTION_STYLE_DEFAULT,
                "action": this.navigateToAddress
            });
            applicationManager.actionSheetObject = actionSheetObject;
            var actionLinkedCustomer = new kony.ui.ActionItem({
                "title": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb/billpay.EditLinkedId"),
                "style": constants.ACTION_STYLE_DEFAULT,
                "action": this.navigateToContract
            });
            /*applicationManager.actionSheetObject = actionSheetObject;
       var actionPhoneNumber = new kony.ui.ActionItem({
       "title": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.EditPhonenumber"),
       "style": constants.ACTION_STYLE_DEFAULT,
       "action": this.navigateToPhonenumber
       });
	applicationManager.actionSheetObject = actionSheetObject;
       var actionEmailAddress = new kony.ui.ActionItem({
       "title": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.EditEmailAddress"),
       "style": constants.ACTION_STYLE_DEFAULT,
       "action": this.navigateToEmailID
       });*/
            applicationManager.actionSheetObject = actionSheetObject;
            var actionRemoveBeneficiary = new kony.ui.ActionItem({
                "title": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.RemoveBeneficiary"),
                "style": constants.ACTION_STYLE_DEFAULT,
                "action": this.deleteBeneficiaryConfirmation
            });
            applicationManager.actionSheetObject = actionSheetObject;
            var actionCancel = new kony.ui.ActionItem({
                "title": applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.common.CANCEL"),
                "style": constants.ACTION_ITEM_STYLE_CANCEL,
                "action": this.enableBackgroundonCloseAdditionalOptions
            });
            if (isDeleteBeneficiaryAccessible) {
                actionSheetObject.addAction(actionNickName);
                actionSheetObject.addAction(actionAddress);
                if (this.isEditLinkedCustomerAvailable) actionSheetObject.addAction(actionLinkedCustomer);
                //actionSheetObject.addAction(actionPhoneNumber);
                //actionSheetObject.addAction(actionEmailAddress);
                actionSheetObject.addAction(actionRemoveBeneficiary);
                actionSheetObject.addAction(actionCancel);
                actionSheetObject.show();
            } else {
                actionSheetObject.addAction(actionNickName);
                actionSheetObject.addAction(actionAddress);
                if (this.isEditLinkedCustomerAvailable) actionSheetObject.addAction(actionLinkedCustomer);
                //actionSheetObject.addAction(actionPhoneNumber);
                //actionSheetObject.addAction(actionEmailAddress);
                actionSheetObject.addAction(actionCancel);
                actionSheetObject.show();
            }
        } else {
            if (isDeleteBeneficiaryAccessible) {
                this.view.flxRemoveBeneficiary.isVisible = true;
            } else {
                this.view.flxRemoveBeneficiary.isVisible = false;
            }
            scope.view.flxBenConfirmation.setEnabled(false);
            scope.view.flxAdditionalOptions.setVisibility(true);
            if (this.isEditLinkedCustomerAvailable) this.view.flxEditLinkedCustomer.setVisibility(true);
            else this.view.flxEditLinkedCustomer.setVisibility(false);
        }
    },
    enableBackgroundonCloseAdditionalOptions: function() {
        var scope = this;
        scope.view.flxBenConfirmation.setEnabled(true);
        scope.view.flxAdditionalOptions.setVisibility(false);
    },
    bindGenericError: function(error) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, error);
    },
    showSuccessPopup: function(msg) {
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    },
    navigateCustomBack: function() {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.commonFunctionForgoBack();
    }
});
define("TransferModuleEurope/frmBeneficiaryDetailsEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d10a62827207450d82302956733a9d0b: function AS_Form_d10a62827207450d82302956733a9d0b(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ha2567a69e05422a94225d07d2060aba: function AS_Form_ha2567a69e05422a94225d07d2060aba(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_ebd1bfed75ff497b8b98eb5087dabc58: function AS_Form_ebd1bfed75ff497b8b98eb5087dabc58(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_i7e8b91642ad47eab92a5c0efd41ffa9: function AS_BarButtonItem_i7e8b91642ad47eab92a5c0efd41ffa9(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_ab6c12595b3c4ae28dcd817417adbcad: function AS_BarButtonItem_ab6c12595b3c4ae28dcd817417adbcad(eventobject) {
        var self = this;
        this.blockBackgroundonAdditionalOptions();
    }
});
define("TransferModuleEurope/frmBeneficiaryDetailsEuropeController", ["TransferModuleEurope/userfrmBeneficiaryDetailsEuropeController", "TransferModuleEurope/frmBeneficiaryDetailsEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmBeneficiaryDetailsEuropeController");
    var controllerActions = ["TransferModuleEurope/frmBeneficiaryDetailsEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
