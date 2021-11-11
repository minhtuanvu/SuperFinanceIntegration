define("CardLessModule/userfrmCardLessQRCodeController", {
    popupMsg: '',
    onNavigate: function(obj) {
        if (obj === undefined) {
            var newObj = {
                "popup": "none"
            };
            obj = newObj;
        }
        if (obj.popup === "sucessCashWithdraw") {
            this.popupMsg = "Cash withdrawal has been placed successfully with transaction ID:773992HGV839";
        }
        if (obj.popup === "none") {
            this.popupMsg = '';
        }
    },
    preShow: function() {
        this.view.btnViewTransactionDetails.text = "";
        this.populateDetails();
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    init: function() {
        var scope = this;
        this.view.btnSeeWithdrawCash.onClick = this.btnSeeWithdrawCashOnClick;
        this.view.btnDone.onClick = this.btnDoneOnClick;
        this.view.flxQRCode.onClick = this.flxQROnClick;
        this.view.btnFindNearByAtm.onClick = this.findNearByATM;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateToAccountsDashboard);
    },
    navigateToAccountsDashboard: function() {
        var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cardlessModule.presentationController.commonFunctionForNavigation("frmDashboardAggregated")
    },
    findNearByATM: function() {
        var scope = this;
        var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
        locateUsModule.presentationController.presentLocateUsView(true, scope);
    },
    btnDoneOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cardLessModule.presentationController.setcardlessTransactionId("");
        cardLessModule.presentationController.getCardlessPendingAndPostedTransactionsQRScanner();
        cardLessModule.presentationController.qrSuccessFlag = false;
    },
    flxQROnClick: function() {
        var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cardLessModule.presentationController.invokeQRCodeFunctionality();
    },
    btnSeeWithdrawCashOnClick: function() {
        kony.application.openURL("https://youtu.be/UGJMk5_ZNrk");
    },
    populateDetails: function() {
        var navMan = applicationManager.getNavigationManager();
        var txnDetails = navMan.getCustomInfo("frmCardLessQRCode");
        var createDetails = txnDetails.createResponse;
        var cardlessTxnDetails = txnDetails.transnDetails;
        this.view.lblExpiresIn.text = "Expires in:" + createDetails.validDate;
    },
    bindGenericSuccess: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    },
    showTransactionWithdrawalToastMessage: function(transactionID) {
        this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardless.withdrawalMessage") + transactionID);
    }
});
define("CardLessModule/frmCardLessQRCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f0ea4d8233f047cc8fcda1c4b2da663f: function AS_Form_f0ea4d8233f047cc8fcda1c4b2da663f(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_da14f0e773f84440b327d054950e6c2c: function AS_Form_da14f0e773f84440b327d054950e6c2c(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});
define("CardLessModule/frmCardLessQRCodeController", ["CardLessModule/userfrmCardLessQRCodeController", "CardLessModule/frmCardLessQRCodeControllerActions"], function() {
    var controller = require("CardLessModule/userfrmCardLessQRCodeController");
    var controllerActions = ["CardLessModule/frmCardLessQRCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
