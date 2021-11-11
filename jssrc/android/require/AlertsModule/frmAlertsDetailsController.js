define("AlertsModule/userfrmAlertsDetailsController", {
    init: function() {
        var FormValidator = require("FormValidatorManager");
        this.fv = new FormValidator(1);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmAlertsDetailsPreShow: function() {
        this.setPreshowData();
        this.setFlowActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setPreshowData: function() {
        this.setAlertsDetailsData();
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.flxNotificationsDetailsMain.top = "56dp";
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.flxNotificationsDetailsMain.top = "0dp";
        }
    },
    setFlowActions: function() {
        var scopeObj = this;
        this.view.customHeader.flxBack.onClick = this.goBack;
        this.view.flxDelete.onClick = this.openDeletePopup;
        this.view.btnCancel.onClick = this.closeDeletePopup;
        this.view.btnRemove.onClick = this.onSelectDelete;
    },
    setAlertsDetailsData: function() {
        var scopeObj = this;
        var navManager = applicationManager.getNavigationManager();
        var alertsDetails = navManager.getCustomInfo("frmAlertsDetails");
        var subject = alertsDetails.notificationSubject;
        var text = alertsDetails.notificationText;
        var dateString = alertsDetails.receivedDate;
        var displayImage = alertsDetails.imgCategory;
        var bannerImage = alertsDetails.imageURL;
        var actionLink = alertsDetails.actionButtonLabelName;
        var notificationLink = alertsDetails.notificationActionLink;
        this.setSubject(subject);
        this.setText(text);
        this.getDateAndTime(dateString);
        this.setImage(displayImage);
        this.setBannerImage(bannerImage);
        this.setActionlink(actionLink, notificationLink);
    },
    setSubject: function(subject) {
        this.view.lblSubject.text = subject;
    },
    setText: function(text) {
        this.view.lblNotificationDescription.text = text;
    },
    getDateAndTime: function(dateString) {
        var formatUtilManager = applicationManager.getFormatUtilManager();
        var dateObj = formatUtilManager.getDateObjectfromString(dateString, "YYYY-MM-DD HH:MM:SS");
        var dateAndTime = formatUtilManager.getFormatedDateString(dateObj, formatUtilManager.getApplicationDateTimeFormat());
        this.view.lblSubjectDescription.text = dateAndTime;
    },
    setImage: function(displayImage) {
        this.view.imgNotificationCategory.src = displayImage.src;
    },
    setBannerImage: function(bannerImage) {
        if (bannerImage) {
            this.view.imgNotification.isVisible = true;
            this.view.imgNotification.src = bannerImage;
        } else {
            this.view.imgNotification.isVisible = false;
        }
    },
    setActionlink: function(actionLink, notificationLink) {
        if (actionLink && notificationLink) {
            this.view.btnActionLink.isVisible = true;
            this.view.btnActionLink.text = actionLink;
            this.view.btnActionLink.onClick = this.actionHandlerActionButton.bind(this, actionLink, notificationLink);
        } else {
            this.view.btnActionLink.isVisible = false;
        }
    },
    goBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    openDeletePopup: function() {
        var scopeObj = this;
        scopeObj.view.flxPopup1.setVisibility(true);
    },
    closeDeletePopup: function() {
        var scopeObj = this;
        scopeObj.view.flxPopup1.setVisibility(false);
    },
    onSelectDelete: function() {
        var scopeObj = this;
        scopeObj.view.flxPopup1.setVisibility(false);
        var navManager = applicationManager.getNavigationManager();
        var alertsDetails = navManager.getCustomInfo("frmAlertsDetails");
        var notificationId = alertsDetails.userNotificationId;
        var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
        alertsModule.presentationController.deleteNotificationForDetails(notificationId);
    },
    actionHandlerActionButton: function(actionLink, notificationLink) {
        if (notificationLink && actionLink) {
            notificationLink = notificationLink.trim().toUpperCase();
        }
        switch (notificationLink) {
            case "BILL_PAY_CREATE":
                var BillPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
                BillPayMod.presentationController.fetchBills();
                BillPayMod.presentationController.getHolidays();
                break;
            case "P2P_CREATE":
                applicationManager.getPresentationUtility().showLoadingScreen();
                var navMan = applicationManager.getNavigationManager();
                navMan.setEntryPoint("europeTransferFlow", "frmDashboardAggregated");
                var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
                transferModPresentationController.setEuropeFlowType("EXTERNAL");
                transferModPresentationController.getFromAndToAccounts();
                transferModPresentationController.clearEuropeFlowAtributes();
                break;
            case "ACCOUNT_DASHBOARD":
                var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                accountMod.presentationController.showDashboard();
                break;
            case "INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE":
                var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
                transMod.presentationController.getTransactions();
                var configManager = applicationManager.getConfigurationManager();
                var transMod = applicationManager.getModulesPresentationController("TransactionModule");
                if (configManager.getDeploymentGeography() === 'EUROPE') {
                    applicationManager.getPresentationUtility().showLoadingScreen();
                    var navMan = applicationManager.getNavigationManager();
                    navMan.setEntryPoint("europeTransferFlow", "frmDashboardAggregated");
                    var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
                    transferModPresentationController.setEuropeFlowType("INTERNAL");
                    transferModPresentationController.getFromAccounts();
                    transferModPresentationController.clearEuropeFlowAtributes();
                } else {
                    transMod.getTransactions();
                }
        }
    },
    showErrorPopUp: function(msg) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
});
define("AlertsModule/frmAlertsDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f31b12c56ea74901a2cd82728425c44c: function AS_Form_f31b12c56ea74901a2cd82728425c44c(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_df24d37a970c4e77b1498b3da45d5691: function AS_Form_df24d37a970c4e77b1498b3da45d5691(eventobject) {
        var self = this;
        this.frmAlertsDetailsPreShow();
    },
    AS_BarButtonItem_e3463b8e90fc41ceb0f09718d6545355: function AS_BarButtonItem_e3463b8e90fc41ceb0f09718d6545355(eventobject) {
        var self = this;
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    }
});
define("AlertsModule/frmAlertsDetailsController", ["AlertsModule/userfrmAlertsDetailsController", "AlertsModule/frmAlertsDetailsControllerActions"], function() {
    var controller = require("AlertsModule/userfrmAlertsDetailsController");
    var controllerActions = ["AlertsModule/frmAlertsDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
