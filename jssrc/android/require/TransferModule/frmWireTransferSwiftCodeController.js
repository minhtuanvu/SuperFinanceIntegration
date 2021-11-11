define("TransferModule/userfrmWireTransferSwiftCodeController", {
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
        this.view.txtSwiftCode.setFocus(true);
        if (swiftCode) {
            this.view.txtSwiftCode.text = swiftCode;
        } else {
            this.view.txtSwiftCode.text = "";
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
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.txtSwiftCode.onTextChange = scope.navigateToAccountNumber;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.btnContinue.onClick = function() {
            var swiftCode = scope.view.txtSwiftCode.text;
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            var isValidSwiftCode = transferModulePresentationController.isValidSwiftCode(swiftCode, "frmBenSwiftCode");
            if (isValidSwiftCode) {
                transferModulePresentationController.navigateToEnterBenificiaryAccountNumberFromSwiftCode(swiftCode);
            }
        };
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("createInternalBankBenificiary");
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.commonFunctionForNavigation(navigateToForm);
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    navigateToAccountNumber: function() {
        var swiftCode = this.view.txtSwiftCode.text;
        if (swiftCode.length > 0) {
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
define("TransferModule/frmWireTransferSwiftCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_bd76d99f3f3e4d69badae53168a707c0: function AS_Form_bd76d99f3f3e4d69badae53168a707c0(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_gbbbc99e340748ba9225834442895ae3: function AS_Form_gbbbc99e340748ba9225834442895ae3(eventobject) {
        var self = this;
        this.preShow();
    },
});
define("TransferModule/frmWireTransferSwiftCodeController", ["TransferModule/userfrmWireTransferSwiftCodeController", "TransferModule/frmWireTransferSwiftCodeControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferSwiftCodeController");
    var controllerActions = ["TransferModule/frmWireTransferSwiftCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
