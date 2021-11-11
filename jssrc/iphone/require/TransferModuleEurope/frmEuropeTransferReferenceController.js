define("TransferModuleEurope/userfrmEuropeTransferReferenceController", {
    keypadString: '',
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var transferModule = applicationManager.getModulesPresentationController("TransferModule");
        transferModule.commonFunctionForgoBack();
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        var userPrefManager = applicationManager.getUserPreferencesManager();
        this.singleCustomerID = userPrefManager.isSingleCustomerProfile;
        this.accessibleCustomerIds = userPrefManager.accessibleCustomerIds;
        this.primaryCustomerId = userPrefManager.primaryCustomerId;
        this.isIconVisible = false;
        this.setIconVisibility();
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var transObj = transferPresentationController.getTransObject();
        this.setReference(transObj.reference);
        this.view.tbxReference.onTextChange = this.validatePaymentReference.bind(this);
        this.view.tbxReference.text = this.keypadString;
        this.view.tbxReference.setFocus(true);
        this.resetCounterValue();
        this.setFromAccountData();
        this.setToAccountData();
        this.setIcons(transObj);
        //this.validateToAccount();
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setIconVisibility: function() {
        this.accessibleCustomerIds.forEach((item, index) => {
            if (index !== 0) {
                if (this.accessibleCustomerIds[0].type !== item.type) {
                    this.isIconVisible = true;
                }
            }
        });
    },
    setIcons: function(transObj) {
        if (!kony.sdk.isNullOrUndefined(this.singleCustomerID) && this.singleCustomerID) {
            this.view.imgPersonal.setVisibility(false);
            this.view.imgIcon.setVisibility(false);
        } else {
            if (!kony.sdk.isNullOrUndefined(this.isIconVisible) && this.isIconVisible) {
                this.view.imgPersonal.setVisibility(true);
                var arr = this.getFromAndToAccountIcons(transObj);
                this.view.imgPersonal.src = arr[0];
                if (transObj.transactionType.toLowerCase().includes("internaltransfer")) {
                    this.view.imgIcon.src = arr[1];
                    this.view.imgIcon.setVisibility(true);
                } else {
                    this.view.imgIcon.setVisibility(false);
                }
            } else {
                this.view.imgPersonal.setVisibility(false);
                this.view.imgIcon.setVisibility(false);
            }
        }
    },
    validatePaymentReference: function() {
        var expression = /^[ A-Za-z0-9.?+:/()]*$/;
        if (this.view.tbxReference.text.length <= 140 && expression.test(this.view.tbxReference.text)) {
            var count = (140 - this.view.tbxReference.text.length);
            this.view.lblCount.text = count.toFixed(0);
        } else {
            this.view.tbxReference.text = this.view.tbxReference.text.replace(/[^a-zA-Z0-9.?:/()+ ]/g, "");
        }
    },
    getFromAndToAccountIcons: function(transObj) {
        var fromIcon = "businessaccount.png",
            toIcon = "businessaccount.png";
        for (var i = 0; i < this.accessibleCustomerIds.length; i++) {
            if (transObj.fromAccountMembershipId === this.accessibleCustomerIds[i].id) {
                if (this.accessibleCustomerIds[i].type === "personal") {
                    fromIcon = "personalaccount.png";
                }
            }
            if (transObj.toAccountMembershipId === this.accessibleCustomerIds[i].id) {
                if (this.accessibleCustomerIds[i].type === "personal") {
                    toIcon = "personalaccount.png";
                }
            }
        }
        return [fromIcon, toIcon];
    },
    resetCounterValue: function() {
        if (this.view.tbxReference.text === "" && this.view.tbxReference.text.length === 0) {
            this.view.lblCount.text = "140";
        }
    },
    initActions: function() {
        var scope = this;
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        this.view.customHeader.flxBack.onTouchEnd = this.navigateCustomBack;
        this.view.customHeader.btnRight.onClick = scope.cancelOnClick;
        //this.view.tbxReference.onTextChange = this.referenceOnTextChange;
        //this.view.flxClearAmount.onTouchEnd = this.clearKeypad;
        this.view.flxFromAccount.onTouchEnd = function() {
            transferPresentationController.initializeStateData(true, "frmEuropeTransferReference");
            transferPresentationController.commonFunctionForNavigation("frmEuropeTransferFromAccount");
        };
        this.view.flxToAccount.onTouchEnd = function() {
            transferPresentationController.initializeStateData(true, "frmEuropeTransferReference");
            transferPresentationController.filterToAccountsByExludingFromAccount();
            if (transferPresentationController.getEuropeFlowType() === "INTERNAL") {
                transferPresentationController.commonFunctionForNavigation("frmEuropeTransferToAccount");
            } else {
                transferPresentationController.commonFunctionForNavigation("frmEuropeTransferToAccountSM");
            }
        };
        this.view.btnContinue.onClick = this.continueOnClick;
    },
    postShow: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.view.tbxReference.setFocus(true);
        /*if(this.view.tbxReference.text === ""){
          	this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
          }else{*/
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.btnContinue.setEnabled(true);
        // }
    },
    referenceOnTextChange: function() {
        var reference = this.view.tbxReference.text;
        if (reference.length === 0) {
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
        } else {
            this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnContinue.setEnabled(true);
        }
    },
    setReference: function(reference) {
        if (reference) {
            this.keypadString = reference;
        } else this.keypadString = "";
    },
    setFromAccountData: function() {
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var fromaccountdata = transferPresentationController.getTransferObjectById("from");
        var name = "";
        // if (fromaccountdata[0].nickName === null || fromaccountdata[0].nickName === undefined) {
        name = fromaccountdata[0].accountName;
        /*} else {
          name =fromaccountdata[0].nickName;
        }*/
        this.view.lblFromAccountValue.text = applicationManager.getPresentationUtility().formatText(name, 10, fromaccountdata[0].accountID, 4);
        this.view.lblFromBalanceValue.text = fromaccountdata[0].availableBalance;
        this.view.lblFromavailableBal.text = fromaccountdata[0].accountBalanceType + ":";
    },
    setToAccountData: function() {
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var toAccountData = transferPresentationController.getToAccountData();
        var navMan = applicationManager.getNavigationManager();
        var entryPoint = navMan.getEntryPoint("europeTransferFlow");
        if (entryPoint === "frmAccountDetails" && toAccountData.toAccountType === "Loan") {
            this.setDisabledToAccount(toAccountData);
            this.view.flxToAccount.setVisibility(false);
            this.view.flxToAccountDisabled.setVisibility(true);
        } else {
            this.setEditableToAccount(toAccountData);
            this.view.flxToAccount.setVisibility(true);
            this.view.flxToAccountDisabled.setVisibility(false);
        }
    },
    setEditableToAccount: function(toAccountData) {
        if (toAccountData.transactionType === "P2P") {
            this.view.lblToAccountValue.text = toAccountData.payPersonName;
            this.view.lblToBalanceValue.text = toAccountData.p2pContact;
            this.view.lblToAvailableBalance.setVisibility(false);
        } else if (toAccountData.transactionType === "InternalTransfer") {
            this.view.lblToAccountValue.text = toAccountData.toAccountName;
            this.view.lblToBalanceValue.text = toAccountData.availableBalance;
            this.view.lblToAvailableBalance.text = toAccountData.accountBalanceType + ":";
            this.view.lblToAvailableBalance.setVisibility(true);
        } else {
            this.view.lblToAccountValue.text = toAccountData.toAccountName;
            this.view.lblToBalanceValue.text = toAccountData.bankName;
            this.view.lblToAvailableBalance.setVisibility(false);
        }
    },
    setDisabledToAccount: function(toAccountData) {
        if (toAccountData.transactionType === "P2P") {
            this.view.lblToAccountValueDisabled.text = toAccountData.payPersonName;
            this.view.lblToBalanceValueDisabled.text = toAccountData.p2pContact;
            this.view.lblToAvailableBalanceDisabled.setVisibility(false);
        } else if (toAccountData.transactionType === "InternalTransfer") {
            this.view.lblToAccountValueDisabled.text = toAccountData.toAccountName;
            this.view.lblToBalanceValueDisabled.text = toAccountData.availableBalance;
            this.view.lblToAvailableBalanceDisabled.text = toAccountData.accountBalanceType;
            this.view.lblToAvailableBalanceDisabled.setVisibility(true);
        } else {
            this.view.lblToAccountValueDisabled.text = toAccountData.toAccountName;
            this.view.lblToBalanceValueDisabled.text = toAccountData.bankName;
            this.view.lblToAvailableBalanceDisabled.setVisibility(false);
        }
    },
    validateToAccount: function() {
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var fromaccountdata = transferPresentationController.getTransferObjectById("from");
        var toAccountData = transferPresentationController.getToAccountData();
        if (fromaccountdata[0].accountID === toAccountData.toAccountNumber) {
            this.clearToAccountData();
        }
    },
    clearToAccountData: function() {
        this.view.lblToAccountValue.text = "";
        this.view.lblToBalanceValue.text = "";
        this.view.lblToAvailableBalance.text = "";
        this.view.lblToAvailableBalance.setVisibility(true);
    },
    continueOnClick: function() {
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var reference = this.view.tbxReference.text;
        // if (reference && reference !== "") {
        applicationManager.getPresentationUtility().showLoadingScreen();
        transferPresentationController.setReference(reference);
        // }  
    },
    cancelOnClick: function() {
        var transferModule = applicationManager.getModulesPresentationController("TransferModule");
        transferModule.cancelCommon();
    }
});
define("TransferModuleEurope/frmEuropeTransferReferenceControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f2316d5bc75b435eba354fc0f23f6302: function AS_Form_f2316d5bc75b435eba354fc0f23f6302(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a0862426e9214f24b3f6145e3364f2e3: function AS_Form_a0862426e9214f24b3f6145e3364f2e3(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_b03617e1df39413dbe281457023af7de: function AS_Form_b03617e1df39413dbe281457023af7de(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_heaf6903479b47ca90b25b328613651a: function AS_BarButtonItem_heaf6903479b47ca90b25b328613651a(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_b537f124ef1846aeba43059d1b64882c: function AS_BarButtonItem_b537f124ef1846aeba43059d1b64882c(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
});
define("TransferModuleEurope/frmEuropeTransferReferenceController", ["TransferModuleEurope/userfrmEuropeTransferReferenceController", "TransferModuleEurope/frmEuropeTransferReferenceControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmEuropeTransferReferenceController");
    var controllerActions = ["TransferModuleEurope/frmEuropeTransferReferenceControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
