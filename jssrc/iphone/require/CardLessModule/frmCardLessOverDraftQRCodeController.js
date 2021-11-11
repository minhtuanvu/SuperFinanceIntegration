define("CardLessModule/userfrmCardLessOverDraftQRCodeController", {
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.setSegmentData();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    init: function() {
        this.view.btnEditTransaction.onClick = this.btnEditOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.flxHeader.btnRight.onClick = this.btnRightOnClick;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "NO", currentForm);
    },
    btnRightOnClick: function() {
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cLMod.presentationController.cancelCommonQR();
    },
    setSegmentData: function() {
        var dataMap = this.getDataMap();
        this.view.segAccounts.widgetDataMap = dataMap;
        var navMan = applicationManager.getNavigationManager();
        var txnDetails = navMan.getCustomInfo("frmCardLessOverdraftQR");
        var cardlessTxnDetails = txnDetails.createResponse;
        var forUtility = applicationManager.getFormatUtilManager();
        for (var i = 0; i < cardlessTxnDetails.length; i++) {
            var trandateobj = forUtility.getDateObjectfromString(cardlessTxnDetails[i]["transactionDate"], "YYYY-MM-DD");
            cardlessTxnDetails[i].transactionDate = forUtility.getFormatedDateString(trandateobj, forUtility.getApplicationDateFormat());
            cardlessTxnDetails[i].amount = forUtility.formatAmountandAppendCurrencySymbol(cardlessTxnDetails[i].amount);
        }
        cardlessTxnDetails = [
            [{
                "lblHeader": "Scheduled Transactions"
            }, cardlessTxnDetails]
        ];
        this.view.segAccounts.setData(cardlessTxnDetails);
    },
    getDataMap: function() {
        var dataMap = {};
        dataMap = {
            "lblAccountName": "description",
            "lblAccountBal": "transactionDate",
            "lblAccountBalValue": "amount",
            "lblBankName": "fromAccountType",
            "accountID": "accountID",
            "lblHeader": "lblHeader"
        };
        return dataMap;
    },
    btnEditOnClick: function() {
        var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cardlessModule.presentationController.commonFunctionForNavigation("frmCardLessWithdrawQR");
    },
    btnContinueOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cardlessModule.presentationController.setOverDraftFlag("false");
        cardlessModule.presentationController.createCardlessQRTransaction();
    },
    btnCancelOnClick: function() {
        var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cardlessModule.presentationController.commonFunctionForNavigation("frmCardLessHomeQR");
    }
});
define("CardLessModule/frmCardLessOverDraftQRCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_fae4eca964af453c82fbbbf3d8a1cc3f: function AS_Form_fae4eca964af453c82fbbbf3d8a1cc3f(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e8b8f841a9d74cac8fbd255792f6e25e: function AS_Form_e8b8f841a9d74cac8fbd255792f6e25e(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    AS_BarButtonItem_a75faa27f3a84d239b3c28921aa2ba57: function AS_BarButtonItem_a75faa27f3a84d239b3c28921aa2ba57(eventobject) {
        var self = this;
        this.btnRightOnClick();
    }
});
define("CardLessModule/frmCardLessOverDraftQRCodeController", ["CardLessModule/userfrmCardLessOverDraftQRCodeController", "CardLessModule/frmCardLessOverDraftQRCodeControllerActions"], function() {
    var controller = require("CardLessModule/userfrmCardLessOverDraftQRCodeController");
    var controllerActions = ["CardLessModule/frmCardLessOverDraftQRCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
