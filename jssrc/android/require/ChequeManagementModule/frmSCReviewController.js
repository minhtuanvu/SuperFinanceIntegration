define("ChequeManagementModule/userfrmSCReviewController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
        this.setUIData();
    },
    postShow: function() {
        var transObj = applicationManager.getModulesPresentationController("ChequeManagementModule");
        var objData = transObj.getTransObject();
        if (scope_ChequePresentationController.chequeTypeSelection == "Single Cheque") {
            this.view.lblChequeTypeValue.text = "Single";
            this.view.flxAmount.setVisibility(true);
            this.view.flxSeperator1.setVisibility(true);
            this.view.flxIssueDate.setVisibility(true);
            this.view.flxSeperator6.setVisibility(true);
            this.view.lblChequeNumberValue.text = objData.checkNumber1;
        } else {
            this.view.lblChequeTypeValue.text = "Series";
            this.view.flxAmount.setVisibility(false);
            this.view.flxSeperator1.setVisibility(false);
            this.view.flxIssueDate.setVisibility(false);
            this.view.flxSeperator6.setVisibility(false);
            if (objData.checkNumber1 !== null && objData.checkNumber2 !== null) {
                this.view.lblChequeNumberValue.text = objData.checkNumber1 + "-" + objData.checkNumber2;
                this.view.btnContinue.setEnabled(true);
                this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
            } else {
                this.view.lblChequeNumberValue.text = "";
                this.view.btnContinue.setEnabled(false);
                this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
            }
        }
    },
    initActions: function() {
        this.view.customHeader.flxBack.onClick = function() {
            scope_ChequePresentationController.isReview = false;
            var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
            controller.commonFunctionForgoBack();
        }
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.flxFromImage.onTouchEnd = this.navigateToFromAccount;
        this.view.flxAmountImage.onTouchEnd = this.navigateToAmount;
        this.view.flxPayeeImage.onTouchEnd = this.navigateToPayeeName;
        this.view.flxChequeTypeImage.onTouchEnd = this.navigateToChequeType;
        this.view.flxChequeNumberImage.onTouchEnd = this.navigateToChequeNumber;
        this.view.flxIssueDateImage.onTouchEnd = this.navigateToIssueDate;
        this.view.flxReasonImage.onTouchEnd = this.navigateToReason;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        scope_ChequePresentationController.isReview = true;
    },
    setUIData: function() {
        var transObj = applicationManager.getModulesPresentationController("ChequeManagementModule");
        var reasondata = transObj.stopReasonsList;
        var forUtility = applicationManager.getFormatUtilManager();
        var objData = transObj.getTransObject();
        if (objData.checkDateOfIssue === "") {
            this.view.lblIssueDateValue.text = "Not defined";
        } else {
            this.view.lblIssueDateValue.text = scope_ChequePresentationController.chequeIssuedDate;
        }
        if (objData.payeeName === "") {
            this.view.lblPayeeNameValue.text = "Not defined";
        } else {
            this.view.lblPayeeNameValue.text = objData.payeeName;
        }
        if (objData.checkReason) {
            var reasonkey = ""
            reasondata.forEach(function(item) {
                if (item[1] === objData.checkReason) {
                    reasonkey = item[0];
                }
            });
            this.view.lblReasonValue.text = reasonkey;
        }
        this.view.lblFromAccountValue.text = scope_ChequePresentationController.processedName;
        if (objData.amount === "") {
            this.view.lblAmountValue.text = "Not defined";
        } else {
            this.view.lblAmountValue.text = forUtility.formatAmountandAppendCurrencySymbol(objData.amount, transObj.currencyCode);
        }
        if (objData.transactionsNotes === null) {
            this.view.txtNotes.text = "";
        }
        if (scope_ChequePresentationController.fees !== "") {
            this.view.flxFee.setVisibility(true);
            this.view.flxSeperator5.setVisibility(true);
            this.view.lblFeeValue.text = forUtility.formatAmountandAppendCurrencySymbol(scope_ChequePresentationController.fees, transObj.currencyCode);
        } else {
            this.view.flxFee.setVisibility(false);
            this.view.flxSeperator5.setVisibility(false);
        }
    },
    navigateToFromAccount: function() {
        var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
        controller.initializeStateData(true, "frmSCReview");
        controller.navigateToAccountScreen();
        controller.entryFormForAccounts = "frmSCReview";
    },
    navigateToAmount: function() {
        var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
        controller.initializeStateData(true, "frmSCReview");
        controller.commonFunctionForNavigation("frmAmount");
    },
    navigateToPayeeName: function() {
        var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
        controller.initializeStateData(true, "frmSCReview");
        controller.commonFunctionForNavigation("frmPayeeName");
    },
    navigateToChequeType: function() {
        var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
        controller.initializeStateData(true, "frmSCReview");
        controller.commonFunctionForNavigation("frmSCChequeType");
    },
    navigateToChequeNumber: function() {
        var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
        controller.initializeStateData(true, "frmSCReview");
        if (scope_ChequePresentationController.chequeTypeSelection == "Single Cheque") {
            controller.commonFunctionForNavigation("frmChequeNumber");
        } else {
            controller.commonFunctionForNavigation("frmSeriesCheque");
        }
    },
    navigateToIssueDate: function() {
        var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
        controller.initializeStateData(true, "frmSCReview");
        controller.commonFunctionForNavigation("frmIssueDate");
    },
    navigateToReason: function() {
        var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
        controller.initializeStateData(true, "frmSCReview");
        controller.commonFunctionForNavigation("frmSCReason");
    },
    continueOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var data;
        if (this.view.txtNotes.text !== null && this.view.txtNotes.text !== "") {
            data = this.view.txtNotes.text;
        } else {
            data = "";
        }
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.stopChequePaymentRequest(data);
    },
    onCancelClick: function() {
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.commonCancel();
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("ChequeManagementModule/frmSCReviewControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_h81e163899154bdc9f68b8e39d31a9b3: function AS_Form_h81e163899154bdc9f68b8e39d31a9b3(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i465be7b630f44e7a5f4e266d54a7722: function AS_Form_i465be7b630f44e7a5f4e266d54a7722(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_d34108a610024c22b1a892512e72726e: function AS_Form_d34108a610024c22b1a892512e72726e(eventobject) {
        var self = this;
        this.preshow();
    },
    AS_BarButtonItem_cfa7c778dde44a88b9a17298d68c0540: function AS_BarButtonItem_cfa7c778dde44a88b9a17298d68c0540(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("ChequeManagementModule/frmSCReviewController", ["ChequeManagementModule/userfrmSCReviewController", "ChequeManagementModule/frmSCReviewControllerActions"], function() {
    var controller = require("ChequeManagementModule/userfrmSCReviewController");
    var controllerActions = ["ChequeManagementModule/frmSCReviewControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
