define("TransferModule/userfrmBenAccountTypeSelectController", {
    isBusinessPayee: "",
    init: function() {
        this.initActions();
    },
    initActions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = scope.flxBackOnClick;
        this.view.btnContinue.onClick = scope.btnContinueOnClick;
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("createInternalBankBenificiary");
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.commonFunctionForNavigation(navigateToForm);
    },
    btnContinueOnClick: function() {
        if (this.isBusinessPayee === "") {} else {
            var navManager = applicationManager.getNavigationManager();
            var formFlow = navManager.getCustomInfo("formflow");
            if (formFlow === "frmBillPayReEnterAccNo") {
                navManager.setCustomInfo("isBusinessPayee", this.isBusinessPayee);
                navManager.navigateTo("frmBillPayVerifyDetails");
            } else {
                var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
                transferModulePresentationController.navigateToBenificiaryVerifyDetails(this.isBusinessPayee);
            }
        }
    },
    frmPreShow: function() {
        this.isBusinessPayee = "0";
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.renderTitleBar();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        } else {
            this.view.flxHeader.setVisibility(true);
        }
        var navManager = applicationManager.getNavigationManager();
        var formFlow = navManager.getCustomInfo("formflow");
        if (formFlow === "frmBillPayReEnterAccNo") {
            this.view.customHeader.lblLocateUs.text = "Add Recepient";
            this.view.lblAccountTypeSelection.text = kony.i18n.getLocalizedString("kony.mb.transfer.selectAccountType");
            this.view.lblRetailBanking.text = kony.i18n.getLocalizedString("kony.mb.transfer.retailBanking");
            this.view.lblBusinessBanking.text = kony.i18n.getLocalizedString("kony.mb.Accounts.businessBanking");
        } else {
            this.view.lblAccountTypeSelection.text = kony.i18n.getLocalizedString("kony.mb.transfer.selectAccountType");
            this.view.lblRetailBanking.text = kony.i18n.getLocalizedString("kony.mb.transfer.retailBanking");
            this.view.lblBusinessBanking.text = kony.i18n.getLocalizedString("kony.mb.Accounts.businessBanking");
        }
    },
    frmPostShow: function() {
        this.view.flxImgBusinessBanking.onClick = this.onClickImg;
        this.view.flxImgRetailBanking.onClick = this.onClickImg;
        this.view.flxAccountType.shadowDepth = 2;
        this.view.imgRetailBanking.src = "radiobuttoninactive.png";
        this.view.imgBusinessBanking.src = "radiobuttoninactive.png";
        this.disableContinueButton();
    },
    onClickImg: function(eventObj) {
        try {
            var id = eventObj.id;
            if (id === "flxImgRetailBanking") {
                this.view.imgRetailBanking.src = "radiobtn.png";
                this.view.imgBusinessBanking.src = "radiobuttoninactive.png";
                this.isBusinessPayee = "0";
                this.enableContinueButton();
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("isBusinessPayee", this.isBusinessPayee);
            } else if (id === "flxImgBusinessBanking") {
                this.view.imgRetailBanking.src = "radiobuttoninactive.png";
                this.view.imgBusinessBanking.src = "radiobtn.png";
                this.isBusinessPayee = "1";
                this.enableContinueButton();
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("isBusinessPayee", this.isBusinessPayee);
            }
        } catch (er) {}
    },
    enableContinueButton: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
    },
    disableContinueButton: function() {
        this.view.btnContinue.setEnabled(false);
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    },
});
define("TransferModule/frmBenAccountTypeSelectControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ffea859fded64f40b039fc2d0471c8df: function AS_Form_ffea859fded64f40b039fc2d0471c8df(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d7a7620f99c14e16902942d8b2b31f99: function AS_Form_d7a7620f99c14e16902942d8b2b31f99(eventobject) {
        var self = this;
        this.frmPostShow();
    },
    AS_Form_c60f77fcf4a84e019a92b122079bcd18: function AS_Form_c60f77fcf4a84e019a92b122079bcd18(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_BarButtonItem_d695f301f73d4e95bf6bba129c97d9c0: function AS_BarButtonItem_d695f301f73d4e95bf6bba129c97d9c0(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_ace95eccff784f2d9190750723d49b8d: function AS_BarButtonItem_ace95eccff784f2d9190750723d49b8d(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModule/frmBenAccountTypeSelectController", ["TransferModule/userfrmBenAccountTypeSelectController", "TransferModule/frmBenAccountTypeSelectControllerActions"], function() {
    var controller = require("TransferModule/userfrmBenAccountTypeSelectController");
    var controllerActions = ["TransferModule/frmBenAccountTypeSelectControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
