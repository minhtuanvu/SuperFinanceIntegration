define("CheckDepositModule/userfrmConfirmTransferCDController", {
    keypadString: "",
    confirmTransferInit: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.renderTitleBar();
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        this.view.btnConfirm.onClick = this.btnConfirmOnClick;
        this.view.txtDescription.onTextChange = this.descTextChange;
        this.setInitialUI();
        this.setFlxData();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    renderTitleBar: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (isIphone) {
            this.view.flxHeader.setVisibility(false);
        }
    },
    flxBackOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onCancelClick: function() {
        this.keypadString = "";
        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
        checkDepositModule.presentationController.cancelDeposit();
    },
    btnConfirmOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
        checkDepositModule.presentationController.createDeposit(this.keypadString);
    },
    setFlxData: function() {
        var navManager = applicationManager.getNavigationManager();
        var depositObject = navManager.getCustomInfo("frmConfirmTransferCD");
        var flxData = navManager.getCustomInfo("frmDepositAmountCD");
        var configurationManager = applicationManager.getConfigurationManager();
        var isSingleCustomerProfile = applicationManager.getUserPreferencesManager().isSingleCustomerProfile;
        var profileAccess = applicationManager.getUserPreferencesManager().profileAccess;
        if (isSingleCustomerProfile === true || isSingleCustomerProfile === "true") {
            this.view.flxAccountType.isVisible = false;
        } else {
            if (profileAccess === "both") {
                this.view.flxAccountType.isVisible = true;
                this.view.imgAccountType.src = (flxData.accountInfo.isBusinessAccount === "false") ? "personalaccount.png" : "businessaccount.png";
            } else {
                this.view.flxAccountType.isVisible = false;
            }
        }
        this.view.lblAmountValue.text = depositObject.amount;
        this.view.lblToAccountValue.text = depositObject.toAccountName;
        this.view.lblBankName.text = depositObject.toBankName;
        this.view.imgFront.base64 = depositObject.checkImage;
        this.view.imgBack.base64 = depositObject.checkImageBack;
    },
    setInitialUI: function() {
        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
        var depObj = checkDepositModule.presentationController.getDepositObjInView();
        if (!depObj.transactionsNotes) {
            this.view.txtDescription.text = "";
            this.keypadString = "";
        } else {
            this.view.txtDescription.text = depObj.notes;
            this.keypadString = depObj.notes;
        }
    },
    descTextChange: function() {
        this.keypadString = this.view.txtDescription.text;
        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
        checkDepositModule.presentationController.setNotesToDepositObject(this.keypadString);
    }
});
define("CheckDepositModule/frmConfirmTransferCDControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f5d71ae9bdaf45729198bb668f70be4d: function AS_Form_f5d71ae9bdaf45729198bb668f70be4d(eventobject) {
        var self = this;
        this.confirmTransferInit();
    },
    AS_Form_a11691016e304bd0a3f5bf6b18ca20d1: function AS_Form_a11691016e304bd0a3f5bf6b18ca20d1(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_i9f2d47b27e64ef68b483c93850f098b: function AS_BarButtonItem_i9f2d47b27e64ef68b483c93850f098b(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("CheckDepositModule/frmConfirmTransferCDController", ["CheckDepositModule/userfrmConfirmTransferCDController", "CheckDepositModule/frmConfirmTransferCDControllerActions"], function() {
    var controller = require("CheckDepositModule/userfrmConfirmTransferCDController");
    var controllerActions = ["CheckDepositModule/frmConfirmTransferCDControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
