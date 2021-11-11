define("TransferModule/userfrmBenAccountTypeController", {
    init: function() {
        this.initActions();
    },
    frmPreShow: function() {
        this.renderTitleBar();
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryData = transferModulePresentationController.getBenificiaryData();
        var accountType = benificiaryData.accountType;
        this.clearSkins();
        if (accountType) {
            if (accountType === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Checking")) {
                this.view.btnCheckingAcc.skin = "sknBtnOnBoardingOptionsActive";
            } else if (accountType === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Savings")) {
                this.view.btnSavingAccount.skin = "sknBtnOnBoardingOptionsActive";
            } else if (accountType === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Loan")) {
                this.view.btnLoanAcc.skin = "sknBtnOnBoardingOptionsActive";
            } else {
                this.view.btnFdAccount.skin = "sknBtnOnBoardingOptionsActive";
            }
        }
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        var scope = this;
        this.view.btnCheckingAcc.onClick = scope.btnCheckingAccOnClick;
        this.view.btnSavingAccount.onClick = scope.btnSavingAccOnClick;
        this.view.btnLoanAcc.onClick = scope.btnLoanAccOnClick;
        this.view.btnFdAccount.onClick = scope.btnFDAccOnClick;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
    },
    clearSkins: function() {
        this.view.btnCheckingAcc.skin = "sknBtnOnBoardingOptionsInActive";
        this.view.btnSavingAccount.skin = "sknBtnOnBoardingOptionsInActive";
        this.view.btnLoanAcc.skin = "sknBtnOnBoardingOptionsInActive";
        this.view.btnFdAccount.skin = "sknBtnOnBoardingOptionsInActive";
    },
    btnRightOnClick: function() {},
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    btnCheckingAccOnClick: function() {
        this.navigateToBenName(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Checking"));
    },
    btnSavingAccOnClick: function() {
        this.navigateToBenName(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Savings"));
    },
    btnLoanAccOnClick: function() {
        this.navigateToBenName(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Loan"));
    },
    btnFDAccOnClick: function() {
        this.navigateToBenName(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.FD"));
    },
    navigateToBenName: function(accountType) {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.navigateToBenificiaryName(accountType);
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
    }
});
define("TransferModule/frmBenAccountTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b4e16fc0ef03447883388ab9e1155220: function AS_Form_b4e16fc0ef03447883388ab9e1155220(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bb88c2f4cc1c4744995016d6ce86015f: function AS_Form_bb88c2f4cc1c4744995016d6ce86015f(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_BarButtonItem_f426b0f59a364283925759a81220e60d: function AS_BarButtonItem_f426b0f59a364283925759a81220e60d(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_ae4cf3501b6941fb8cb3093db2328fb6: function AS_BarButtonItem_ae4cf3501b6941fb8cb3093db2328fb6(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModule/frmBenAccountTypeController", ["TransferModule/userfrmBenAccountTypeController", "TransferModule/frmBenAccountTypeControllerActions"], function() {
    var controller = require("TransferModule/userfrmBenAccountTypeController");
    var controllerActions = ["TransferModule/frmBenAccountTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
