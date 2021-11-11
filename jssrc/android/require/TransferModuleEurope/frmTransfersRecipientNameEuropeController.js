define("TransferModuleEurope/userfrmTransfersRecipientNameEuropeController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmPreShow: function() {
        this.renderTitleBar();
        this.initActions();
        var scope = this;
        //	this.setRecipientName();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var accountList = navManager.getCustomInfo("frmTransfersToAccount");
        var transferType = accountList.transactionType;
        if (transferType == applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToOtherEuropeanAccounts")) {
            scope.view.flxAddRecipient.setVisibility(true);
        } else scope.view.flxAddRecipient.setVisibility(false);
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        this.view.txtRecipientName.onTextChange = this.btnContinueHandler;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
    },
    btnContinueHandler: function() {
        if (this.view.txtRecipientName.text !== "") {
            this.activeteContBtn();
        } else this.deactivateContBtn();
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    btnRightOnClick: function() {
        var TransModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        TransModPresentationController.cancelCommon();
    },
    btnContinueOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        var accdata = navMan.getCustomInfo("frmTransfersToAccount");
        accdata.selectedAccountData.beneficiaryName = this.view.txtRecipientName.text;
        navMan.setCustomInfo("frmTransfersToAccount", accdata);
        var TransModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        if (accdata.transactionType == applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.ToOtherEuropeanAccounts")) TransModPresentationController.saveRecipient(this.view.switchRememberMe.selectedIndex);
        else TransModPresentationController.navFromRecipName();
    },
    activeteContBtn: function() {
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.btnContinue.setEnabled(true);
    },
    deactivateContBtn: function() {
        this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
        this.view.btnContinue.setEnabled(false);
    },
    validateIBAN: function() {
        var transferModule = applicationManager.getModulesPresentationController("TransferModule");
        transferModule.navAfterToAcc();
    },
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
});
define("TransferModuleEurope/frmTransfersRecipientNameEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i08d33a696cf49f7bac6cf28c20ef7df: function AS_Form_i08d33a696cf49f7bac6cf28c20ef7df(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_abe7c037651442d0ba6855e1dbb2ad95: function AS_Form_abe7c037651442d0ba6855e1dbb2ad95(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_BarButtonItem_b469e24f3f2d47c5bc225ddc07c44d33: function AS_BarButtonItem_b469e24f3f2d47c5bc225ddc07c44d33(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModuleEurope/frmTransfersRecipientNameEuropeController", ["TransferModuleEurope/userfrmTransfersRecipientNameEuropeController", "TransferModuleEurope/frmTransfersRecipientNameEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmTransfersRecipientNameEuropeController");
    var controllerActions = ["TransferModuleEurope/frmTransfersRecipientNameEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
