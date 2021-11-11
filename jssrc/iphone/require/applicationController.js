define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_AppEvents_hd4fc1bedd904d29862f6382068c9886: function AS_AppEvents_hd4fc1bedd904d29862f6382068c9886(eventobject) {
        var self = this;
        try {
            var MenuHandler = applicationManager.getMenuHandler();
            return MenuHandler.appForceTouchCallBack(eventobject);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.App_Initialisation_Failed", GlobalExceptionHandler.ActionConstants.BLOCK, arguments.callee.name);
        }
    },
    AS_AppEvents_c26b10e9c0764bde8f8f42317331324a: function AS_AppEvents_c26b10e9c0764bde8f8f42317331324a(eventobject) {
        var self = this;
        //var appManager = ApplicationManager.getApplicationManager();
        try {
            applicationManager.postAppInitiate();
            applicationManager.applicationMode = "Mobile";
            kony.application.setApplicationProperties({
                // "statusBarForegroundColor": "000000"
            });
            var registrationManager = applicationManager.getRegistrationManager();
            registrationManager.setEventTracking();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.App_Initialisation_Failed", GlobalExceptionHandler.ActionConstants.BLOCK, arguments.callee.name);
        }
    },
    AS_AppEvents_h4ded27d9dd845f885ad538266976f45: function AS_AppEvents_h4ded27d9dd845f885ad538266976f45(eventobject) {
        var self = this;
        kony.lang.setUncaughtExceptionHandler(GlobalExceptionHandler.exceptionHandler);
        try {
            var ApplicationManager = require('ApplicationManager');
            applicationManager = ApplicationManager.getApplicationManager();
            //applicationManager.init();
            applicationManager.preappInitCalls();
            registerWatchCallback();
            var HIDApproveSDKManager = require('HIDApproveSDKManager');
            hidApplicationSDKManager = HIDApproveSDKManager.getHIDApproveSDKManager();
            hidApplicationSDKManager.registerWithHIDPushService();
            var regManager = applicationManager.getRegistrationManager();
            regManager.addPushNotificationSubscriber("HIDAPPROVE", hidApplicationSDKManager.receivedPushNotification.bind(this));
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.App_Initialisation_Failed", GlobalExceptionHandler.ActionConstants.BLOCK, arguments.callee.name);
        }
    },
    appInit: function(params) {
        skinsInit();
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        kony.mvc.registry.add("com.banking.approvalsAndRequests.filter", "filter", "filterController");
        kony.application.registerMaster({
            "namespace": "com.banking.approvalsAndRequests",
            "classname": "filter",
            "name": "com.banking.approvalsAndRequests.filter"
        });
        kony.mvc.registry.add("com.banking.CardView", "CardView", "CardViewController");
        kony.application.registerMaster({
            "namespace": "com.banking",
            "classname": "CardView",
            "name": "com.banking.CardView"
        });
        kony.mvc.registry.add("com.banking.ContractList", "ContractList", "ContractListController");
        kony.application.registerMaster({
            "namespace": "com.banking",
            "classname": "ContractList",
            "name": "com.banking.ContractList"
        });
        kony.mvc.registry.add("com.banking.ContractView", "ContractView", "ContractViewController");
        kony.application.registerMaster({
            "namespace": "com.banking",
            "classname": "ContractView",
            "name": "com.banking.ContractView"
        });
        kony.mvc.registry.add("com.banking.DateView", "DateView", "DateViewController");
        kony.application.registerMaster({
            "namespace": "com.banking",
            "classname": "DateView",
            "name": "com.banking.DateView"
        });
        kony.mvc.registry.add("com.banking.digitkeypad", "digitkeypad", "digitkeypadController");
        kony.application.registerMaster({
            "namespace": "com.banking",
            "classname": "digitkeypad",
            "name": "com.banking.digitkeypad"
        });
        kony.mvc.registry.add("com.banking.FromAccount", "FromAccount", "FromAccountController");
        kony.application.registerMaster({
            "namespace": "com.banking",
            "classname": "FromAccount",
            "name": "com.banking.FromAccount"
        });
        kony.mvc.registry.add("com.banking.inputAmount", "inputAmount", "inputAmountController");
        kony.application.registerMaster({
            "namespace": "com.banking",
            "classname": "inputAmount",
            "name": "com.banking.inputAmount"
        });
        kony.mvc.registry.add("com.banking.inputPhoneNumber", "inputPhoneNumber", "inputPhoneNumberController");
        kony.application.registerMaster({
            "namespace": "com.banking",
            "classname": "inputPhoneNumber",
            "name": "com.banking.inputPhoneNumber"
        });
        kony.mvc.registry.add("com.banking.loginMethod", "loginMethod", "loginMethodController");
        kony.application.registerMaster({
            "namespace": "com.banking",
            "classname": "loginMethod",
            "name": "com.banking.loginMethod"
        });
        kony.mvc.registry.add("com.banking.pickContact", "pickContact", "pickContactController");
        kony.application.registerMaster({
            "namespace": "com.banking",
            "classname": "pickContact",
            "name": "com.banking.pickContact"
        });
        kony.mvc.registry.add("com.banking.SecureCode", "SecureCode", "SecureCodeController");
        kony.application.registerMaster({
            "namespace": "com.banking",
            "classname": "SecureCode",
            "name": "com.banking.SecureCode"
        });
        kony.mvc.registry.add("com.commom.customSecurityCode", "customSecurityCode", "customSecurityCodeController");
        kony.application.registerMaster({
            "namespace": "com.commom",
            "classname": "customSecurityCode",
            "name": "com.commom.customSecurityCode"
        });
        kony.mvc.registry.add("com.common.customCalendar", "customCalendar", "customCalendarController");
        kony.application.registerMaster({
            "namespace": "com.common",
            "classname": "customCalendar",
            "name": "com.common.customCalendar"
        });
        kony.mvc.registry.add("com.common.customCalendarTablet", "customCalendarTablet", "customCalendarTabletController");
        kony.application.registerMaster({
            "namespace": "com.common",
            "classname": "customCalendarTablet",
            "name": "com.common.customCalendarTablet"
        });
        kony.mvc.registry.add("com.common.customCalendarWithContract", "customCalendarWithContract", "customCalendarWithContractController");
        kony.application.registerMaster({
            "namespace": "com.common",
            "classname": "customCalendarWithContract",
            "name": "com.common.customCalendarWithContract"
        });
        kony.mvc.registry.add("com.common.wealthCalendar", "wealthCalendar", "wealthCalendarController");
        kony.application.registerMaster({
            "namespace": "com.common",
            "classname": "wealthCalendar",
            "name": "com.common.wealthCalendar"
        });
        kony.mvc.registry.add("com.IW.common.investmentLineChart", "investmentLineChart", "investmentLineChartController");
        kony.application.registerMaster({
            "namespace": "com.IW.common",
            "classname": "investmentLineChart",
            "name": "com.IW.common.investmentLineChart"
        });
        kony.mvc.registry.add("com.kmb.comman.customCardHeader", "customCardHeader", "customCardHeaderController");
        kony.application.registerMaster({
            "namespace": "com.kmb.comman",
            "classname": "customCardHeader",
            "name": "com.kmb.comman.customCardHeader"
        });
        kony.mvc.registry.add("com.kmb.common.Acknowledgement", "Acknowledgement", "AcknowledgementController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "Acknowledgement",
            "name": "com.kmb.common.Acknowledgement"
        });
        kony.mvc.registry.add("com.kmb.common.campaignPopup", "campaignPopup", "campaignPopupController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "campaignPopup",
            "name": "com.kmb.common.campaignPopup"
        });
        kony.mvc.registry.add("com.kmb.common.confirmationAlertPopup", "confirmationAlertPopup", "confirmationAlertPopupController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "confirmationAlertPopup",
            "name": "com.kmb.common.confirmationAlertPopup"
        });
        kony.mvc.registry.add("com.kmb.common.confirmationPopUp", "confirmationPopUp", "confirmationPopUpController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "confirmationPopUp",
            "name": "com.kmb.common.confirmationPopUp"
        });
        kony.mvc.registry.add("com.kmb.common.customAlertPopUp", "customAlertPopUp", "customAlertPopUpController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "customAlertPopUp",
            "name": "com.kmb.common.customAlertPopUp"
        });
        kony.mvc.registry.add("com.kmb.common.customFooter", "customFooter", "customFooterController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "customFooter",
            "name": "com.kmb.common.customFooter"
        });
        kony.mvc.registry.add("com.kmb.common.customGroupDone", "customGroupDone", "customGroupDoneController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "customGroupDone",
            "name": "com.kmb.common.customGroupDone"
        });
        kony.mvc.registry.add("com.kmb.common.customGroupDonePopup", "customGroupDonePopup", "customGroupDonePopupController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "customGroupDonePopup",
            "name": "com.kmb.common.customGroupDonePopup"
        });
        kony.mvc.registry.add("com.kmb.common.customHeader", "customHeader", "customHeaderController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "customHeader",
            "name": "com.kmb.common.customHeader"
        });
        kony.mvc.registry.add("com.kmb.common.customPopup", "customPopup", "customPopupController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "customPopup",
            "name": "com.kmb.common.customPopup"
        });
        kony.mvc.registry.add("com.kmb.common.editCustomView", "editCustomView", "editCustomViewController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "editCustomView",
            "name": "com.kmb.common.editCustomView"
        });
        kony.mvc.registry.add("com.kmb.common.expandCollapseView.expandCollapseView", "expandCollapseView", "expandCollapseViewController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common.expandCollapseView",
            "classname": "expandCollapseView",
            "name": "com.kmb.common.expandCollapseView.expandCollapseView"
        });
        kony.mvc.registry.add("com.kmb.common.Hamburger", "Hamburger", "HamburgerController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "Hamburger",
            "name": "com.kmb.common.Hamburger"
        });
        kony.mvc.registry.add("com.kmb.common.keypad", "keypad", "keypadController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "keypad",
            "name": "com.kmb.common.keypad"
        });
        kony.mvc.registry.add("com.kmb.common.managecustomexpandCollapseView.managecustomexpandCollapseView", "managecustomexpandCollapseView", "managecustomexpandCollapseViewController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common.managecustomexpandCollapseView",
            "classname": "managecustomexpandCollapseView",
            "name": "com.kmb.common.managecustomexpandCollapseView.managecustomexpandCollapseView"
        });
        kony.mvc.registry.add("com.kmb.common.noAccounts", "noAccounts", "noAccountsController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "noAccounts",
            "name": "com.kmb.common.noAccounts"
        });
        kony.mvc.registry.add("com.kmb.common.rejectPopUp", "rejectPopUp", "rejectPopUpController");
        kony.application.registerMaster({
            "namespace": "com.kmb.common",
            "classname": "rejectPopUp",
            "name": "com.kmb.common.rejectPopUp"
        });
        kony.mvc.registry.add("com.kmb.Search.customSearch", "customSearch", "customSearchController");
        kony.application.registerMaster({
            "namespace": "com.kmb.Search",
            "classname": "customSearch",
            "name": "com.kmb.Search.customSearch"
        });
        kony.mvc.registry.add("com.kmb.Search.customSearchbox", "customSearchbox", "customSearchboxController");
        kony.application.registerMaster({
            "namespace": "com.kmb.Search",
            "classname": "customSearchbox",
            "name": "com.kmb.Search.customSearchbox"
        });
        kony.mvc.registry.add("com.konymp.actionsheet", "actionsheet", "actionsheetController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "actionsheet",
            "name": "com.konymp.actionsheet"
        });
        kony.mvc.registry.add("com.konymp.barcodeqrscanner", "barcodeqrscanner", "barcodeqrscannerController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "barcodeqrscanner",
            "name": "com.konymp.barcodeqrscanner"
        });
        kony.mvc.registry.add("com.konymp.pdfgenerator", "pdfgenerator", "pdfgeneratorController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "pdfgenerator",
            "name": "com.konymp.pdfgenerator"
        });
        kony.mvc.registry.add("com.konymp.socialshare", "socialshare", "socialshareController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "socialshare",
            "name": "com.konymp.socialshare"
        });
        kony.mvc.registry.add("com.ktb.common.customFooter", "customFooter", "customFooterController");
        kony.application.registerMaster({
            "namespace": "com.ktb.common",
            "classname": "customFooter",
            "name": "com.ktb.common.customFooter"
        });
        kony.mvc.registry.add("com.ktb.common.customHeaderTablet", "customHeaderTablet", "customHeaderTabletController");
        kony.application.registerMaster({
            "namespace": "com.ktb.common",
            "classname": "customHeaderTablet",
            "name": "com.ktb.common.customHeaderTablet"
        });
        kony.mvc.registry.add("com.ktb.common.customPopup", "customPopup", "customPopupController");
        kony.application.registerMaster({
            "namespace": "com.ktb.common",
            "classname": "customPopup",
            "name": "com.ktb.common.customPopup"
        });
        kony.mvc.registry.add("com.ktb.common.frequencyView", "frequencyView", "frequencyViewController");
        kony.application.registerMaster({
            "namespace": "com.ktb.common",
            "classname": "frequencyView",
            "name": "com.ktb.common.frequencyView"
        });
        kony.mvc.registry.add("com.ktb.common.Hamburger", "Hamburger", "HamburgerController");
        kony.application.registerMaster({
            "namespace": "com.ktb.common",
            "classname": "Hamburger",
            "name": "com.ktb.common.Hamburger"
        });
        kony.mvc.registry.add("com.ktb.common.keypadTablet", "keypadTablet", "keypadTabletController");
        kony.application.registerMaster({
            "namespace": "com.ktb.common",
            "classname": "keypadTablet",
            "name": "com.ktb.common.keypadTablet"
        });
        kony.mvc.registry.add("com.tab.CustomRightBar", "CustomRightBar", "CustomRightBarController");
        kony.application.registerMaster({
            "namespace": "com.tab",
            "classname": "CustomRightBar",
            "name": "com.tab.CustomRightBar"
        });
        kony.mvc.registry.add("com.temenos.infinity.accountdetails.information", "information", "informationController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.accountdetails",
            "classname": "information",
            "name": "com.temenos.infinity.accountdetails.information"
        });
        kony.mvc.registry.add("com.temenos.infinity.activateProfile", "activateProfile", "activateProfileController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "activateProfile",
            "name": "com.temenos.infinity.activateProfile"
        });
        kony.mvc.registry.add("com.temenos.infinity.ActivationCodeSuccess", "ActivationCodeSuccess", "ActivationCodeSuccessController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "ActivationCodeSuccess",
            "name": "com.temenos.infinity.ActivationCodeSuccess"
        });
        kony.mvc.registry.add("com.temenos.infinity.autoDataFill", "autoDataFill", "autoDataFillController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "autoDataFill",
            "name": "com.temenos.infinity.autoDataFill"
        });
        kony.mvc.registry.add("com.temenos.infinity.dataEntry", "dataEntry", "dataEntryController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "dataEntry",
            "name": "com.temenos.infinity.dataEntry"
        });
        kony.mvc.registry.add("com.temenos.infinity.DetailsComponent.DetailsMain", "DetailsMain", "DetailsMainController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.DetailsComponent",
            "classname": "DetailsMain",
            "name": "com.temenos.infinity.DetailsComponent.DetailsMain"
        });
        kony.mvc.registry.add("com.temenos.infinity.donutchart", "donutchart", "donutchartController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "donutchart",
            "name": "com.temenos.infinity.donutchart"
        });
        kony.mvc.registry.add("com.temenos.infinity.liteActivationNative", "liteActivationNative", "liteActivationNativeController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "liteActivationNative",
            "name": "com.temenos.infinity.liteActivationNative"
        });
        kony.mvc.registry.add("com.temenos.infinity.login", "login", "loginController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "login",
            "name": "com.temenos.infinity.login"
        });
        kony.mvc.registry.add("com.temenos.infinity.manageBillerNative", "manageBillerNative", "manageBillerNativeController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "manageBillerNative",
            "name": "com.temenos.infinity.manageBillerNative"
        });
        kony.mvc.registry.add("com.temenos.infinity.mb.sca.changePassword", "changePassword", "changePasswordController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mb.sca",
            "classname": "changePassword",
            "name": "com.temenos.infinity.mb.sca.changePassword"
        });
        kony.mvc.registry.add("com.temenos.infinity.mb.sca.paymentError", "paymentError", "paymentErrorController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mb.sca",
            "classname": "paymentError",
            "name": "com.temenos.infinity.mb.sca.paymentError"
        });
        kony.mvc.registry.add("com.temenos.infinity.mb.sca.transactionPinPopup", "transactionPinPopup", "transactionPinPopupController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mb.sca",
            "classname": "transactionPinPopup",
            "name": "com.temenos.infinity.mb.sca.transactionPinPopup"
        });
        kony.mvc.registry.add("com.temenos.infinity.mfa.SCAComponent", "SCAComponent", "SCAComponentController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mfa",
            "classname": "SCAComponent",
            "name": "com.temenos.infinity.mfa.SCAComponent"
        });
        kony.mvc.registry.add("com.temenos.infinity.mfa.TransfersFlowSecurityQuestions", "TransfersFlowSecurityQuestions", "TransfersFlowSecurityQuestionsController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mfa",
            "classname": "TransfersFlowSecurityQuestions",
            "name": "com.temenos.infinity.mfa.TransfersFlowSecurityQuestions"
        });
        kony.mvc.registry.add("com.temenos.infinity.payeeAddress", "payeeAddress", "payeeAddressController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "payeeAddress",
            "name": "com.temenos.infinity.payeeAddress"
        });
        kony.mvc.registry.add("com.temenos.infinity.payeeLinkedCustomerID", "payeeLinkedCustomerID", "payeeLinkedCustomerIDController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "payeeLinkedCustomerID",
            "name": "com.temenos.infinity.payeeLinkedCustomerID"
        });
        kony.mvc.registry.add("com.temenos.infinity.payeeVerifyAck", "payeeVerifyAck", "payeeVerifyAckController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "payeeVerifyAck",
            "name": "com.temenos.infinity.payeeVerifyAck"
        });
        kony.mvc.registry.add("com.temenos.infinity.quicklinksNative", "quicklinksNative", "quicklinksNativeController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "quicklinksNative",
            "name": "com.temenos.infinity.quicklinksNative"
        });
        kony.mvc.registry.add("com.temenos.infinity.search", "search", "searchController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "search",
            "name": "com.temenos.infinity.search"
        });
        kony.mvc.registry.add("com.temenos.infinity.SearchAndFilter", "SearchAndFilter", "SearchAndFilterController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "SearchAndFilter",
            "name": "com.temenos.infinity.SearchAndFilter"
        });
        kony.mvc.registry.add("com.temenos.infinity.SearchAndFilterWealth", "SearchAndFilterWealth", "SearchAndFilterWealthController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "SearchAndFilterWealth",
            "name": "com.temenos.infinity.SearchAndFilterWealth"
        });
        kony.mvc.registry.add("com.temenos.infinity.segmentDetails", "segmentDetails", "segmentDetailsController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "segmentDetails",
            "name": "com.temenos.infinity.segmentDetails"
        });
        kony.mvc.registry.add("com.temenos.infinity.segmentHistoryDetails", "segmentHistoryDetails", "segmentHistoryDetailsController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "segmentHistoryDetails",
            "name": "com.temenos.infinity.segmentHistoryDetails"
        });
        kony.mvc.registry.add("com.temenos.infinity.tabs", "tabs", "tabsController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "tabs",
            "name": "com.temenos.infinity.tabs"
        });
        kony.mvc.registry.add("com.temenos.infinity.termsAndConditions", "termsAndConditions", "termsAndConditionsController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "termsAndConditions",
            "name": "com.temenos.infinity.termsAndConditions"
        });
        kony.mvc.registry.add("com.temenos.infinity.transfer.description", "description", "descriptionController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.transfer",
            "classname": "description",
            "name": "com.temenos.infinity.transfer.description"
        });
        kony.mvc.registry.add("com.temenos.infinity.TransfersListMobileNative", "TransfersListMobileNative", "TransfersListMobileNativeController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "TransfersListMobileNative",
            "name": "com.temenos.infinity.TransfersListMobileNative"
        });
        kony.mvc.registry.add("com.temenos.infinityComponent.accountsTransactionListNative", "accountsTransactionListNative", "accountsTransactionListNativeController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinityComponent",
            "classname": "accountsTransactionListNative",
            "name": "com.temenos.infinityComponent.accountsTransactionListNative"
        });
        kony.mvc.registry.add("com.temenos.infinityComponent.BillPay", "BillPay", "BillPayController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinityComponent",
            "classname": "BillPay",
            "name": "com.temenos.infinityComponent.BillPay"
        });
        kony.mvc.registry.add("com.temenos.infinityComponent.LinkPayeeCustomer", "LinkPayeeCustomer", "LinkPayeeCustomerController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinityComponent",
            "classname": "LinkPayeeCustomer",
            "name": "com.temenos.infinityComponent.LinkPayeeCustomer"
        });
        kony.mvc.registry.add("com.temenos.infinityComponents.accountsTransactionDetailsNative", "accountsTransactionDetailsNative", "accountsTransactionDetailsNativeController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinityComponents",
            "classname": "accountsTransactionDetailsNative",
            "name": "com.temenos.infinityComponents.accountsTransactionDetailsNative"
        });
        kony.mvc.registry.add("com.temenos.infinityComponents.saveNewPayee", "saveNewPayee", "saveNewPayeeController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinityComponents",
            "classname": "saveNewPayee",
            "name": "com.temenos.infinityComponents.saveNewPayee"
        });
        kony.mvc.registry.add("com.wealth.common.investmentLineChart", "investmentLineChart", "investmentLineChartController");
        kony.application.registerMaster({
            "namespace": "com.wealth.common",
            "classname": "investmentLineChart",
            "name": "com.wealth.common.investmentLineChart"
        });
        kony.mvc.registry.add("com.konymp.getdirection", "getdirection", "getdirectionController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "getdirection",
            "name": "com.konymp.getdirection"
        });
        kony.mvc.registry.add("com.temenos.hidapprove.sdk", "sdk", "sdkController");
        kony.application.registerMaster({
            "namespace": "com.temenos.hidapprove",
            "classname": "sdk",
            "name": "com.temenos.hidapprove.sdk"
        });
        kony.mvc.registry.add("com.temenos.infinity.accountsummary.donutChartNative", "donutChartNative", "donutChartNativeController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.accountsummary",
            "classname": "donutChartNative",
            "name": "com.temenos.infinity.accountsummary.donutChartNative"
        });
        kony.mvc.registry.add("com.temenos.infinity.accountSummaryNative", "accountSummaryNative", "accountSummaryNativeController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "accountSummaryNative",
            "name": "com.temenos.infinity.accountSummaryNative"
        });
        kony.mvc.registry.add("com.temenos.infinity.loginPopups", "loginPopups", "loginPopupsController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "loginPopups",
            "name": "com.temenos.infinity.loginPopups"
        });
        kony.mvc.registry.add("com.temenos.infinity.mb.sca.cantSignIn", "cantSignIn", "cantSignInController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mb.sca",
            "classname": "cantSignIn",
            "name": "com.temenos.infinity.mb.sca.cantSignIn"
        });
        kony.mvc.registry.add("com.temenos.infinity.mfa.SecurityCode", "SecurityCode", "SecurityCodeController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mfa",
            "classname": "SecurityCode",
            "name": "com.temenos.infinity.mfa.SecurityCode"
        });
        kony.mvc.registry.add("com.temenos.infinity.mfa.SecurityQuestions", "SecurityQuestions", "SecurityQuestionsController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mfa",
            "classname": "SecurityQuestions",
            "name": "com.temenos.infinity.mfa.SecurityQuestions"
        });
        kony.mvc.registry.add("com.temenos.infinity.mfa.TransfersFlowSecurityCode", "TransfersFlowSecurityCode", "TransfersFlowSecurityCodeController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mfa",
            "classname": "TransfersFlowSecurityCode",
            "name": "com.temenos.infinity.mfa.TransfersFlowSecurityCode"
        });
        kony.mvc.registry.add("com.temenos.infinity.payeeDetailsNative", "payeeDetailsNative", "payeeDetailsNativeController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "payeeDetailsNative",
            "name": "com.temenos.infinity.payeeDetailsNative"
        });
        kony.mvc.registry.add("com.temenos.infinity.resetPassword", "resetPassword", "resetPasswordController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "resetPassword",
            "name": "com.temenos.infinity.resetPassword"
        });
        kony.mvc.registry.add("com.temenos.infinity.segmentDetailsWealth", "segmentDetailsWealth", "segmentDetailsWealthController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "segmentDetailsWealth",
            "name": "com.temenos.infinity.segmentDetailsWealth"
        });
        kony.mvc.registry.add("com.temenos.infinity.updatePassword", "updatePassword", "updatePasswordController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity",
            "classname": "updatePassword",
            "name": "com.temenos.infinity.updatePassword"
        });
        kony.mvc.registry.add("com.temenos.infinityComponent.AddNewAccount", "AddNewAccount", "AddNewAccountController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinityComponent",
            "classname": "AddNewAccount",
            "name": "com.temenos.infinityComponent.AddNewAccount"
        });
        kony.mvc.registry.add("com.temenos.infinityComponent.MakeATransfer", "MakeATransfer", "MakeATransferController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinityComponent",
            "classname": "MakeATransfer",
            "name": "com.temenos.infinityComponent.MakeATransfer"
        });
        kony.mvc.registry.add("com.temenos.infinityComponent.transferTypeSelection", "transferTypeSelection", "transferTypeSelectionController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinityComponent",
            "classname": "transferTypeSelection",
            "name": "com.temenos.infinityComponent.transferTypeSelection"
        });
        kony.mvc.registry.add("com.temenos.infinityComponents.Acknowledgement", "Acknowledgement", "AcknowledgementController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinityComponents",
            "classname": "Acknowledgement",
            "name": "com.temenos.infinityComponents.Acknowledgement"
        });
        kony.mvc.registry.add("com.temenos.infinity.mb.sca.activateProfile", "activateProfile", "activateProfileController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mb.sca",
            "classname": "activateProfile",
            "name": "com.temenos.infinity.mb.sca.activateProfile"
        });
        kony.mvc.registry.add("com.temenos.infinity.mb.sca.changeORcreatePassword", "changeORcreatePassword", "changeORcreatePasswordController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mb.sca",
            "classname": "changeORcreatePassword",
            "name": "com.temenos.infinity.mb.sca.changeORcreatePassword"
        });
        kony.mvc.registry.add("com.temenos.infinity.mb.sca.changePin", "changePin", "changePinController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mb.sca",
            "classname": "changePin",
            "name": "com.temenos.infinity.mb.sca.changePin"
        });
        kony.mvc.registry.add("com.temenos.infinity.mb.sca.login", "login", "loginController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mb.sca",
            "classname": "login",
            "name": "com.temenos.infinity.mb.sca.login"
        });
        kony.mvc.registry.add("com.temenos.infinity.mb.sca.offlineSigning", "offlineSigning", "offlineSigningController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mb.sca",
            "classname": "offlineSigning",
            "name": "com.temenos.infinity.mb.sca.offlineSigning"
        });
        kony.mvc.registry.add("com.temenos.infinity.mb.sca.registeredDevices", "registeredDevices", "registeredDevicesController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mb.sca",
            "classname": "registeredDevices",
            "name": "com.temenos.infinity.mb.sca.registeredDevices"
        });
        kony.mvc.registry.add("com.temenos.infinity.mb.sca.scanotification", "scanotification", "scanotificationController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mb.sca",
            "classname": "scanotification",
            "name": "com.temenos.infinity.mb.sca.scanotification"
        });
        kony.mvc.registry.add("com.temenos.infinity.mb.sca.securityNotification", "securityNotification", "securityNotificationController");
        kony.application.registerMaster({
            "namespace": "com.temenos.infinity.mb.sca",
            "classname": "securityNotification",
            "name": "com.temenos.infinity.mb.sca.securityNotification"
        });
        kony.mvc.registry.add("flxContractsCollapsed", "flxContractsCollapsed", "flxContractsCollapsedController");
        kony.mvc.registry.add("CopyflxContractsCollapsed", "CopyflxContractsCollapsed", "CopyflxContractsCollapsedController");
        kony.mvc.registry.add("CopyflxtmpContainer", "CopyflxtmpContainer", "CopyflxtmpContainerController");
        kony.mvc.registry.add("CopyflxMenu1", "CopyflxMenu1", "CopyflxMenu1Controller");
        kony.mvc.registry.add("flxICAcknowledgeRow", "flxICAcknowledgeRow", "flxICAcknowledgeRowController");
        kony.mvc.registry.add("flxICAttachments", "flxICAttachments", "flxICAttachmentsController");
        kony.mvc.registry.add("flxICCheckImages", "flxICCheckImages", "flxICCheckImagesController");
        kony.mvc.registry.add("flxCountryCode", "flxCountryCode", "flxCountryCodeController");
        kony.mvc.registry.add("flxLinkPayeeContractRow", "flxLinkPayeeContractRow", "flxLinkPayeeContractRowController");
        kony.mvc.registry.add("flxLinkPayeeCustomerRow", "flxLinkPayeeCustomerRow", "flxLinkPayeeCustomerRowController");
        kony.mvc.registry.add("flxSelectAccountBillPay", "flxSelectAccountBillPay", "flxSelectAccountBillPayController");
        kony.mvc.registry.add("flxTransactionsHeader", "flxTransactionsHeader", "flxTransactionsHeaderController");
        kony.mvc.registry.add("flxTransactionsRowTemplate", "flxTransactionsRowTemplate", "flxTransactionsRowTemplateController");
        kony.mvc.registry.add("flxTransfersRowTemplate", "flxTransfersRowTemplate", "flxTransfersRowTemplateController");
        kony.mvc.registry.add("flxUnifiedTransferHeader", "flxUnifiedTransferHeader", "flxUnifiedTransferHeaderController");
        kony.mvc.registry.add("flxUnifiedTransferRowTemplate", "flxUnifiedTransferRowTemplate", "flxUnifiedTransferRowTemplateController");
        kony.mvc.registry.add("flxVerifyDetailsRow", "flxVerifyDetailsRow", "flxVerifyDetailsRowController");
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("flxAccountDetailsEmptyRow", "flxAccountDetailsEmptyRow", "flxAccountDetailsEmptyRowController");
        kony.mvc.registry.add("flxAccountdetails", "flxAccountdetails", "flxAccountdetailsController");
        kony.mvc.registry.add("flxHeaderAccount", "flxHeaderAccount", "flxHeaderAccountController");
        kony.mvc.registry.add("flxAccountInfo", "flxAccountInfo", "flxAccountInfoController");
        kony.mvc.registry.add("flxheader", "flxheader", "flxheaderController");
        kony.mvc.registry.add("flxAccountNames", "flxAccountNames", "flxAccountNamesController");
        kony.mvc.registry.add("flxAccountPreview", "flxAccountPreview", "flxAccountPreviewController");
        kony.mvc.registry.add("flxAccountPreviewCombined", "flxAccountPreviewCombined", "flxAccountPreviewCombinedController");
        kony.mvc.registry.add("flxAccounts", "flxAccounts", "flxAccountsController");
        kony.mvc.registry.add("flxAccountsCombinedStatements", "flxAccountsCombinedStatements", "flxAccountsCombinedStatementsController");
        kony.mvc.registry.add("flxAccountsEngageInsert", "flxAccountsEngageInsert", "flxAccountsEngageInsertController");
        kony.mvc.registry.add("flxAccountsHeader", "flxAccountsHeader", "flxAccountsHeaderController");
        kony.mvc.registry.add("flxAccountsHeaderDashboard", "flxAccountsHeaderDashboard", "flxAccountsHeaderDashboardController");
        kony.mvc.registry.add("flxAccountsHeaderDashboardExact", "flxAccountsHeaderDashboardExact", "flxAccountsHeaderDashboardExactController");
        kony.mvc.registry.add("flxAccountsHeaderDashboardNew", "flxAccountsHeaderDashboardNew", "flxAccountsHeaderDashboardNewController");
        kony.mvc.registry.add("flxAccountsHeaderDashboardwithBorder", "flxAccountsHeaderDashboardwithBorder", "flxAccountsHeaderDashboardwithBorderController");
        kony.mvc.registry.add("flxAccountsNoImage", "flxAccountsNoImage", "flxAccountsNoImageController");
        kony.mvc.registry.add("flxAccountsNoImageBillPay", "flxAccountsNoImageBillPay", "flxAccountsNoImageBillPayController");
        kony.mvc.registry.add("flxAccountsNoImageBillPayDelete", "flxAccountsNoImageBillPayDelete", "flxAccountsNoImageBillPayDeleteController");
        kony.mvc.registry.add("flxAccountsNoImageCM", "flxAccountsNoImageCM", "flxAccountsNoImageCMController");
        kony.mvc.registry.add("flxAccountsNoImageCur", "flxAccountsNoImageCur", "flxAccountsNoImageCurController");
        kony.mvc.registry.add("flxAccountsNoImageEuro", "flxAccountsNoImageEuro", "flxAccountsNoImageEuroController");
        kony.mvc.registry.add("flxAccountsNoImageMM", "flxAccountsNoImageMM", "flxAccountsNoImageMMController");
        kony.mvc.registry.add("flxAccountsNoImageTransfers", "flxAccountsNoImageTransfers", "flxAccountsNoImageTransfersController");
        kony.mvc.registry.add("flxAccountsTransfers", "flxAccountsTransfers", "flxAccountsTransfersController");
        kony.mvc.registry.add("flxAchFilelist", "flxAchFilelist", "flxAchFilelistController");
        kony.mvc.registry.add("flxAchlist", "flxAchlist", "flxAchlistController");
        kony.mvc.registry.add("flxAchtransation", "flxAchtransation", "flxAchtransationController");
        kony.mvc.registry.add("flxAchtransationdetails", "flxAchtransationdetails", "flxAchtransationdetailsController");
        kony.mvc.registry.add("flxAcknowloedgmentRow", "flxAcknowloedgmentRow", "flxAcknowloedgmentRowController");
        kony.mvc.registry.add("flxAcknowloedgmentRowEuro", "flxAcknowloedgmentRowEuro", "flxAcknowloedgmentRowEuroController");
        kony.mvc.registry.add("flxAcknowloedgmentDetailsRow", "flxAcknowloedgmentDetailsRow", "flxAcknowloedgmentRowDetailsController");
        kony.mvc.registry.add("flxActivateP2P", "flxActivateP2P", "flxActivateP2PController");
        kony.mvc.registry.add("flxAddedDestination", "flxAddedDestination", "flxAddedDestinationController");
        kony.mvc.registry.add("flxAddedExternalAccounts", "flxAddedExternalAccounts", "flxAddedExternalAccountsController");
        kony.mvc.registry.add("flxAddedExternalAccountsHeader", "flxAddedExternalAccountsHeader", "flxAddedExternalAccountsHeaderController");
        kony.mvc.registry.add("flxAdditionalFeatures", "flxAdditionalFeatures", "flxAdditionalFeaturesController");
        kony.mvc.registry.add("flxAdvanceSearch", "flxAdvanceSearch", "flxAdvanceSearchController");
        kony.mvc.registry.add("flxSettingsAlert", "flxSettingsAlert", "flxSettingsAlertController");
        kony.mvc.registry.add("flxAlertCommunication", "flxAlertCommunication", "flxAlertCommunicationController");
        kony.mvc.registry.add("flxListOuterFlex", "flxListOuterFlex", "flxListOuterFlexController");
        kony.mvc.registry.add("flxAlertList", "flxAlertList", "flxAlertListController");
        kony.mvc.registry.add("flxAlertsHeader", "flxAlertsHeader", "flxAlertsHeaderController");
        kony.mvc.registry.add("flxAlertsList", "flxAlertsList", "flxAlertsListController");
        kony.mvc.registry.add("flxAlertsListingRow", "flxAlertsListingRow", "flxAlertsListingRowController");
        kony.mvc.registry.add("flxAlertsPref", "flxAlertsPref", "flxAlertsPrefController");
        kony.mvc.registry.add("flxAlertWithSwitch", "flxAlertWithSwitch", "flxAlertWithSwitchController");
        kony.mvc.registry.add("flxApprovalHistory", "flxApprovalHistory", "flxApprovalHistoryController");
        kony.mvc.registry.add("flxApprovalListHead", "flxApprovalListHead", "flxApprovalListHeadController");
        kony.mvc.registry.add("flxApprovalListView", "flxApprovalListView", "flxApprovalListViewController");
        kony.mvc.registry.add("flxApprovalReqExpColHeader", "flxApprovalReqExpColHeader", "flxApprovalReqExpColHeaderController");
        kony.mvc.registry.add("flxApprovalsAndReqHeader", "flxApprovalsAndReqHeader", "flxApprovalsAndReqHeaderController");
        kony.mvc.registry.add("flxApprovalsAndRequestFilter", "flxApprovalsAndRequestFilter", "flxApprovalsAndRequestFilterController");
        kony.mvc.registry.add("flxApprovalsAndRequestHistory", "flxApprovalsAndRequestHistory", "flxApprovalsAndRequestHistoryController");
        kony.mvc.registry.add("flxApprovalsList", "flxApprovalsList", "flxApprovalsListController");
        kony.mvc.registry.add("flxAssetClass", "flxAssetClass", "flxAssetClassController");
        kony.mvc.registry.add("segAttachmentMain1", "segAttachmentMain1", "segAttachmentMain1Controller");
        kony.mvc.registry.add("flxAttachmentList", "flxAttachmentList", "flxAttachmentListController");
        kony.mvc.registry.add("flxBalanceUpdateTime", "flxBalanceUpdateTime", "flxBalanceUpdateTimeController");
        kony.mvc.registry.add("flxbankdetails", "flxbankdetails", "flxbankdetailsController");
        kony.mvc.registry.add("flxLocation", "flxLocation", "flxLocationController");
        kony.mvc.registry.add("flxBankNameHeader", "flxBankNameHeader", "flxBankNameHeaderController");
        kony.mvc.registry.add("flxBankTimings", "flxBankTimings", "flxBankTimingsController");
        kony.mvc.registry.add("flxSegBenNoDel", "flxSegBenNoDel", "flxSegBenNoDelController");
        kony.mvc.registry.add("flxBillPayHeader", "flxBillPayHeader", "flxBillPayHeaderController");
        kony.mvc.registry.add("flxBlockedFunds", "flxBlockedFunds", "flxBlockedFundsController");
        kony.mvc.registry.add("flxCards", "flxCards", "flxCardsController");
        kony.mvc.registry.add("CopyflxSelectProduct0ea15c13496fd42", "CopyflxSelectProduct0ea15c13496fd42", "CopyflxSelectProduct0ea15c13496fd42Controller");
        kony.mvc.registry.add("flxCashBalSummary", "flxCashBalSummary", "flxCashBalSummaryController");
        kony.mvc.registry.add("flxCategory", "flxCategory", "flxCategoryController");
        kony.mvc.registry.add("flxCharges", "flxCharges", "flxChargesController");
        kony.mvc.registry.add("flxChargesBreakdown", "flxChargesBreakdown", "flxChargesBreakdownController");
        kony.mvc.registry.add("flxChartSpendingNew", "flxChartSpendingNew", "flxChartSpendingNewController");
        kony.mvc.registry.add("flxChartsSpending", "flxChartsSpending", "flxChartsSpendingController");
        kony.mvc.registry.add("flxCheckImages", "flxCheckImages", "flxCheckImagesController");
        kony.mvc.registry.add("flxChequeDepositRow", "flxChequeDepositRow", "flxChequeDepositRowController");
        kony.mvc.registry.add("flxMainContainerCM", "flxMainContainerCM", "flxMainContainerCMController");
        kony.mvc.registry.add("flxCheque", "flxCheque", "flxChequeController");
        kony.mvc.registry.add("flxClearViewAll", "flxClearViewAll", "flxClearViewAllController");
        kony.mvc.registry.add("flxCombinedAccounts", "flxCombinedAccounts", "flxCombinedAccountsController");
        kony.mvc.registry.add("flxCombinedAccountsCur", "flxCombinedAccountsCur", "flxCombinedAccountsCurController");
        kony.mvc.registry.add("flxCombinedAccountsEuro", "flxCombinedAccountsEuro", "flxCombinedAccountsEuroController");
        kony.mvc.registry.add("flxCombinedStatementsHeader", "flxCombinedStatementsHeader", "flxCombinedStatementsHeaderController");
        kony.mvc.registry.add("flxCombinedStatementShowFilter", "flxCombinedStatementShowFilter", "flxCombinedStatementShowFilterController");
        kony.mvc.registry.add("flxConfirmationDetails", "flxConfirmationDetails", "flxConfirmationDetailsController");
        kony.mvc.registry.add("flxAccountDesc", "flxAccountDesc", "flxAccountDescController");
        kony.mvc.registry.add("flxAccountTypes", "flxAccountTypes", "flxAccountTypesController");
        kony.mvc.registry.add("flxConsentTitle", "flxConsentTitle", "flxConsentTitleController");
        kony.mvc.registry.add("flxConsent", "flxConsent", "flxConsentController");
        kony.mvc.registry.add("flxContacts", "flxContacts", "flxContactsController");
        kony.mvc.registry.add("flxContactType", "flxContactType", "flxContactTypeController");
        kony.mvc.registry.add("flxCountryCodeListIC", "flxCountryCodeListIC", "flxCountryCodeListICController");
        kony.mvc.registry.add("flxCountryCodeNoListIC", "flxCountryCodeNoListIC", "flxCountryCodeNoListICController");
        kony.mvc.registry.add("flxRecentHeader", "flxRecentHeader", "flxRecentHeaderController");
        kony.mvc.registry.add("flxCustomAcknowledgementRow", "flxCustomAcknowledgementRow", "flxCustomAcknowledgementRowController");
        kony.mvc.registry.add("flxCustomMain", "flxCustomMain", "flxCustomMainController");
        kony.mvc.registry.add("flxCustomManageExpColHeader", "flxCustomManageExpColHeader", "flxCustomManageExpColHeaderController");
        kony.mvc.registry.add("flxDashboards", "flxDashboards", "flxDashboardsController");
        kony.mvc.registry.add("flxDefaultAccount", "flxDefaultAccount", "flxDefaultAccountController");
        kony.mvc.registry.add("flxdesinationaccount", "flxdesinationaccount", "flxdesinationaccountController");
        kony.mvc.registry.add("flxDetails", "flxDetails", "flxDetailsController");
        kony.mvc.registry.add("flxDetailsHeader", "flxDetailsHeader", "flxDetailsHeaderController");
        kony.mvc.registry.add("flxDirections", "flxDirections", "flxDirectionsController");
        kony.mvc.registry.add("flxsegDisplayTypeForProfileEditPhoneNo", "flxsegDisplayTypeForProfileEditPhoneNo", "flxsegDisplayTypeForProfileEditPhoneNoController");
        kony.mvc.registry.add("flxDownloadAttachmentsList", "flxDownloadAttachmentsList", "flxDownloadAttachmentsListController");
        kony.mvc.registry.add("flxDownloadOptions", "flxDownloadOptions", "flxDownloadOptionsController");
        kony.mvc.registry.add("flxEditConsent", "flxEditConsent", "flxEditConsentController");
        kony.mvc.registry.add("flxEligibilityCriteria", "flxEligibilityCriteria", "flxEligibilityCriteriaController");
        kony.mvc.registry.add("flxEmptyHeader", "flxEmptyHeader", "flxEmptyHeaderController");
        kony.mvc.registry.add("flxEmptyRow", "flxEmptyRow", "flxEmptyRowController");
        kony.mvc.registry.add("flxEStmtAccountPreferences", "flxEStmtAccountPreferences", "flxEStmtAccountPreferencesController");
        kony.mvc.registry.add("flxEStmtEmail", "flxEStmtEmail", "flxEStmtEmailController");
        kony.mvc.registry.add("flxExpertOpinions", "flxExpertOpinions", "flxExpertOpinionsController");
        kony.mvc.registry.add("flxExternalAccounts", "flxExternalAccounts", "flxExternalAccountsController");
        kony.mvc.registry.add("flxExtAccountsHeader", "flxExtAccountsHeader", "flxExtAccountsHeaderController");
        kony.mvc.registry.add("flxExternalBanks", "flxExternalBanks", "flxExternalBanksController");
        kony.mvc.registry.add("flxFaq", "flxFaq", "flxFaqController");
        kony.mvc.registry.add("flxFiletype", "flxFiletype", "flxFiletypeController");
        kony.mvc.registry.add("flxFilterAccountsHeaderExpCollapse", "flxFilterAccountsHeaderExpCollapse", "flxFilterAccountsHeaderExpCollapseController");
        kony.mvc.registry.add("flxFilterCustomViews", "flxFilterCustomViews", "flxFilterCustomViewsController");
        kony.mvc.registry.add("flxFilterRows", "flxFilterRows", "flxFilterRowsController");
        kony.mvc.registry.add("flxFiltertype", "flxFiltertype", "flxFiltertypeController");
        kony.mvc.registry.add("flxForexDashboard", "flxForexDashboard", "flxForexDashboardController");
        kony.mvc.registry.add("flxForexMarketValueHeader", "flxForexMarketValueHeader", "flxForexMarketValueHeaderController");
        kony.mvc.registry.add("flxforexMarketValueSelector", "flxforexMarketValueSelector", "flxforexMarketValueSelectorController");
        kony.mvc.registry.add("flxTypes", "flxTypes", "flxTypesController");
        kony.mvc.registry.add("flxFrequency", "flxFrequency", "flxFrequencyController");
        kony.mvc.registry.add("flxFrequencyDay", "flxFrequencyDay", "flxFrequencyDayController");
        kony.mvc.registry.add("flxGoalsType", "flxGoalsType", "flxGoalsTypeController");
        kony.mvc.registry.add("flxGuidelines", "flxGuidelines", "flxGuidelinesController");
        kony.mvc.registry.add("flxHamburger", "flxHamburger", "flxHamburgerController");
        kony.mvc.registry.add("flxSegHeaderCashPos", "flxSegHeaderCashPos", "flxSegHeaderCashPosController");
        kony.mvc.registry.add("flxHoldings", "flxHoldings", "flxHoldingsController");
        kony.mvc.registry.add("flxInstallments", "flxInstallments", "flxInstallmentsController");
        kony.mvc.registry.add("flxInstallmentsHeader", "flxInstallmentsHeader", "flxInstallmentsHeaderController");
        kony.mvc.registry.add("flxInstrument", "flxInstrument", "flxInstrumentController");
        kony.mvc.registry.add("flxJointHolders", "flxJointHolders", "flxJointHoldersController");
        kony.mvc.registry.add("flxLanguage", "flxLanguage", "flxLanguageController");
        kony.mvc.registry.add("flxMakeTravelHeader", "flxMakeTravelHeader", "flxMakeTravelHeaderController");
        kony.mvc.registry.add("flxMakeTravelSearchResult", "flxMakeTravelSearchResult", "flxMakeTravelSearchResultController");
        kony.mvc.registry.add("flxSelectAccounts", "flxSelectAccounts", "flxSelectAccountsController");
        kony.mvc.registry.add("flxMenu", "flxMenu", "flxMenuController");
        kony.mvc.registry.add("flxMessagesMain", "flxMessagesMain", "flxMessagesMainController");
        kony.mvc.registry.add("flxMessagesRight", "flxMessagesRight", "flxMessagesRightController");
        kony.mvc.registry.add("flxMessagesWithoutReqIdCategory", "flxMessagesWithoutReqIdCategory", "flxMessagesWithoutReqIdCategoryController");
        kony.mvc.registry.add("flxMMConfirmation", "flxMMConfirmation", "flxMMConfirmationController");
        kony.mvc.registry.add("flxMMHeader", "flxMMHeader", "flxMMHeaderController");
        kony.mvc.registry.add("flxMMReview", "flxMMReview", "flxMMReviewController");
        kony.mvc.registry.add("flxMMTerms", "flxMMTerms", "flxMMTermsController");
        kony.mvc.registry.add("flxMonthlyStatements", "flxMonthlyStatements", "flxMonthlyStatementsController");
        kony.mvc.registry.add("flxMyBudgets", "flxMyBudgets", "flxMyBudgetsController");
        kony.mvc.registry.add("flxMyGoals", "flxMyGoals", "flxMyGoalsController");
        kony.mvc.registry.add("flxNAOPersonalDetails", "flxNAOPersonalDetails", "flxNAOPersonalDetailsController");
        kony.mvc.registry.add("flxNAOPersonalDetailsAddress", "flxNAOPersonalDetailsAddress", "flxNAOPersonalDetailsAddressController");
        kony.mvc.registry.add("flxProductAcknowledgement", "flxProductAcknowledgement", "flxProductAcknowledgementController");
        kony.mvc.registry.add("CopyflxMMReview0f2d046de4dfe4b", "CopyflxMMReview0f2d046de4dfe4b", "CopyflxMMReview0f2d046de4dfe4bController");
        kony.mvc.registry.add("flxNews", "flxNews", "flxNewsController");
        kony.mvc.registry.add("flxNoPending", "flxNoPending", "flxNoPendingController");
        kony.mvc.registry.add("flxNotification", "flxNotification", "flxNotificationController");
        kony.mvc.registry.add("flxOBYears", "flxOBYears", "flxOBYearsController");
        kony.mvc.registry.add("flxOnBoardingOption", "flxOnBoardingOption", "flxOnBoardingOptionController");
        kony.mvc.registry.add("flxOperationHours", "flxOperationHours", "flxOperationHoursController");
        kony.mvc.registry.add("flxPayeeListAutoIC", "flxPayeeListAutoIC", "flxPayeeListAutoICController");
        kony.mvc.registry.add("flxSwipe", "flxSwipe", "flxSwipeController");
        kony.mvc.registry.add("flxPaymentMedium", "flxPaymentMedium", "flxPaymentMediumController");
        kony.mvc.registry.add("flxPdf", "flxPdf", "flxPdfController");
        kony.mvc.registry.add("flxPFMBudget", "flxPFMBudget", "flxPFMBudgetController");
        kony.mvc.registry.add("flxPFMSpending", "flxPFMSpending", "flxPFMSpendingController");
        kony.mvc.registry.add("flxMain", "flxMain", "flxMainController");
        kony.mvc.registry.add("flxProductDetails", "flxProductDetails", "flxProductDetailsController");
        kony.mvc.registry.add("flxAddress", "flxAddress", "flxAddressController");
        kony.mvc.registry.add("flxPulldownheader", "flxPulldownheader", "flxPulldownheaderController");
        kony.mvc.registry.add("flxRange", "flxRange", "flxRangeController");
        kony.mvc.registry.add("flxReasons", "flxReasons", "flxReasonsController");
        kony.mvc.registry.add("CopyflxAccountsNoImage0a526c734afb443", "CopyflxAccountsNoImage0a526c734afb443", "CopyflxAccountsNoImage0a526c734afb443Controller");
        kony.mvc.registry.add("flxRegisteredDevices", "flxRegisteredDevices", "flxRegisteredDevicesController");
        kony.mvc.registry.add("flxReportType", "flxReportType", "flxReportTypeController");
        kony.mvc.registry.add("flxRequestList", "flxRequestList", "flxRequestListController");
        kony.mvc.registry.add("flxSearchAddress", "flxSearchAddress", "flxSearchAddressController");
        kony.mvc.registry.add("flxSegSearchSwiftCode", "flxSegSearchSwiftCode", "flxSegSearchSwiftCodeController");
        kony.mvc.registry.add("flxSecurityQnA", "flxSecurityQnA", "flxSecurityQnAController");
        kony.mvc.registry.add("flxSecurityQuestion", "flxSecurityQuestion", "flxSecurityQuestionController");
        kony.mvc.registry.add("flxSecurityQuestionOptions", "flxSecurityQuestionOptions", "flxSecurityQuestionOptionsController");
        kony.mvc.registry.add("flxSelectAccountsHeader", "flxSelectAccountsHeader", "flxSelectAccountsHeaderController");
        kony.mvc.registry.add("flxSelectAccountTypes", "flxSelectAccountTypes", "flxSelectAccountTypesController");
        kony.mvc.registry.add("flxSelectCards", "flxSelectCards", "flxSelectCardsController");
        kony.mvc.registry.add("flxSelectCategory", "flxSelectCategory", "flxSelectCategoryController");
        kony.mvc.registry.add("flxSelectCurrency", "flxSelectCurrency", "flxSelectCurrencyController");
        kony.mvc.registry.add("flexSelectCurrencyContainer", "flexSelectCurrencyContainer", "flexSelectCurrencyContainerController");
        kony.mvc.registry.add("flxSelectNewCards", "flxSelectNewCards", "flxSelectNewCardsController");
        kony.mvc.registry.add("flxSelectPayee", "flxSelectPayee", "flxSelectPayeeController");
        kony.mvc.registry.add("flxSelectProduct", "flxSelectProduct", "flxSelectProductController");
        kony.mvc.registry.add("flxSelectTPP", "flxSelectTPP", "flxSelectTPPController");
        kony.mvc.registry.add("flxSelectUserId", "flxSelectUserId", "flxSelectUserIdController");
        kony.mvc.registry.add("flxServices", "flxServices", "flxServicesController");
        kony.mvc.registry.add("flxSettings", "flxSettings", "flxSettingsController");
        kony.mvc.registry.add("flxSettingHeader", "flxSettingHeader", "flxSettingHeaderController");
        kony.mvc.registry.add("flxSettingsHeader", "flxSettingsHeader", "flxSettingsHeaderController");
        kony.mvc.registry.add("flxStatements", "flxStatements", "flxStatementsController");
        kony.mvc.registry.add("flxStatementYears", "flxStatementYears", "flxStatementYearsController");
        kony.mvc.registry.add("flxSteps", "flxSteps", "flxStepsController");
        kony.mvc.registry.add("flxMainContainer", "flxMainContainer", "flxMainContainerController");
        kony.mvc.registry.add("flxSuggestedOffers", "flxSuggestedOffers", "flxSuggestedOffersController");
        kony.mvc.registry.add("flxSupport", "flxSupport", "flxSupportController");
        kony.mvc.registry.add("flxSegSwiftBICSearchList", "flxSegSwiftBICSearchList", "flxSegSwiftBICSearchListController");
        kony.mvc.registry.add("flxTitle", "flxTitle", "flxTitleController");
        kony.mvc.registry.add("flxToAccount", "flxToAccount", "flxToAccountController");
        kony.mvc.registry.add("flxToAccountNumber", "flxToAccountNumber", "flxToAccountNumberController");
        kony.mvc.registry.add("flxTotalAsset", "flxTotalAsset", "flxTotalAssetController");
        kony.mvc.registry.add("flxTotalBalance", "flxTotalBalance", "flxTotalBalanceController");
        kony.mvc.registry.add("flxTransactionListHeader", "flxTransactionListHeader", "flxTransactionListHeaderController");
        kony.mvc.registry.add("flxTransactionMode", "flxTransactionMode", "flxTransactionModeController");
        kony.mvc.registry.add("flxTransactions", "flxTransactions", "flxTransactionsController");
        kony.mvc.registry.add("flxTransactionsList", "flxTransactionsList", "flxTransactionsListController");
        kony.mvc.registry.add("flxTransactionsManage", "flxTransactionsManage", "flxTransactionsManageController");
        kony.mvc.registry.add("flxTransferConfirmation", "flxTransferConfirmation", "flxTransferConfirmationController");
        kony.mvc.registry.add("flxTransfers", "flxTransfers", "flxTransfersController");
        kony.mvc.registry.add("flxTransfersManage", "flxTransfersManage", "flxTransfersManageController");
        kony.mvc.registry.add("flxTransHeader", "flxTransHeader", "flxTransHeaderController");
        kony.mvc.registry.add("flxTransHeaderNoDropDown", "flxTransHeaderNoDropDown", "flxTransHeaderNoDropDownController");
        kony.mvc.registry.add("flxTravelDestination", "flxTravelDestination", "flxTravelDestinationController");
        kony.mvc.registry.add("flxTravelPlan", "flxTravelPlan", "flxTravelPlanController");
        kony.mvc.registry.add("flxUsrmgmtMain1", "flxUsrmgmtMain1", "flxUsrmgmtMain1Controller");
        kony.mvc.registry.add("flxUsrmgmtMain2", "flxUsrmgmtMain2", "flxUsrmgmtMain2Controller");
        kony.mvc.registry.add("flxUserAccountNames", "flxUserAccountNames", "flxUserAccountNamesController");
        kony.mvc.registry.add("flxUserDetails", "flxUserDetails", "flxUserDetailsController");
        kony.mvc.registry.add("flxUsrmgmtMain", "flxUsrmgmtMain", "flxUsrmgmtMainController");
        kony.mvc.registry.add("flxUserPermission", "flxUserPermission", "flxUserPermissionController");
        kony.mvc.registry.add("flxUserTransactionMgmt", "flxUserTransactionMgmt", "flxUserTransactionMgmtController");
        kony.mvc.registry.add("flxViewAll", "flxViewAll", "flxViewAllController");
        kony.mvc.registry.add("flxWealthAccountDetail", "flxWealthAccountDetail", "flxWealthAccountDetailController");
        kony.mvc.registry.add("flxWealthAccountList", "flxWealthAccountList", "flxWealthAccountListController");
        kony.mvc.registry.add("flxWealthAccountsDashboardHeader", "flxWealthAccountsDashboardHeader", "flxWealthAccountsDashboardHeaderController");
        kony.mvc.registry.add("flxWealthActivity", "flxWealthActivity", "flxWealthActivityController");
        kony.mvc.registry.add("flxWealthTransactions", "flxDetailsList", "flxDetailsListController");
        kony.mvc.registry.add("flxWealthDetailsCopy", "flxWealthDetailsCopy", "flxWealthDetailsCopyController");
        kony.mvc.registry.add("flxHistoryDetailsList", "flxHistoryDetailsList", "flxHistoryDetailsListController");
        kony.mvc.registry.add("flxWealthMarket", "flxWealthMarket", "flxWealthMarketController");
        kony.mvc.registry.add("flxWealthOverview", "flxWealthOverview", "flxWealthOverviewController");
        kony.mvc.registry.add("flxWealthNBRecentActivity", "flxWealthNBRecentActivity", "flxWealthNBRecentActivityController");
        kony.mvc.registry.add("flxWealthRecentActivity", "flxWealthRecentActivity", "flxWealthRecentActivityController");
        kony.mvc.registry.add("flxSortValue", "flxSortValue", "flxSortValueController");
        kony.mvc.registry.add("flxYears", "flxYears", "flxYearsController");
        kony.mvc.registry.add("flxFilterOptionsList", "flxFilterOptionsList", "flxFilterOptionsListController");
        kony.mvc.registry.add("flxCardAddress", "flxCardAddress", "flxCardAddressController");
        kony.mvc.registry.add("flxtmpContainer", "flxtmpContainer", "flxtmpContainerController");
        kony.mvc.registry.add("CopyflxMenu", "CopyflxMenu", "CopyflxMenuController");
        kony.mvc.registry.add("flxP2PMain", "flxP2PMain", "flxP2PMainController");
        kony.mvc.registry.add("flxMonth", "flxMonth", "flxMonthController");
        kony.mvc.registry.add("frmAccInfoEdit", "AccountModule/frmAccInfoEdit", {
            "controllerName": "AccountModule/frmAccInfoEditController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAccountDetails", "AccountModule/frmAccountDetails", {
            "controllerName": "AccountModule/frmAccountDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("AccountModule/frmAccountDetails2", "AccountModule/frmAccountDetails2", "AccountModule/frmAccountDetails2Controller");
        kony.mvc.registry.add("frmAccountInfo", "AccountModule/frmAccountInfo", {
            "controllerName": "AccountModule/frmAccountInfoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAccountsTransactionDetails", "AccountModule/frmAccountsTransactionDetails", "AccountModule/frmAccountsTransactionDetailsController");
        kony.mvc.registry.add("frmAccStatements", "AccountModule/frmAccStatements", {
            "controllerName": "AccountModule/frmAccStatementsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAddExternalAccountsTermsAndConditions", "AccountModule/frmAddExternalAccountsTermsAndConditions", {
            "controllerName": "AccountModule/frmAddExternalAccountsTermsAndConditionsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCombinedStatement", "AccountModule/frmCombinedStatement", "AccountModule/frmCombinedStatementController");
        kony.mvc.registry.add("frmDashboard", "AccountModule/frmDashboard", {
            "controllerName": "AccountModule/frmDashboardController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDashboardAggregated", "AccountModule/frmDashboardAggregated", {
            "controllerName": "AccountModule/frmDashboardAggregatedController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("AccountModule/frmDashboardAggregated2", "AccountModule/frmDashboardAggregated2", "AccountModule/frmDashboardAggregated2Controller");
        kony.mvc.registry.add("frmDownLoadCombinedstatement", "AccountModule/frmDownLoadCombinedstatement", {
            "controllerName": "AccountModule/frmDownLoadCombinedstatementController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDownloadLoanSchedule", "AccountModule/frmDownloadLoanSchedule", "AccountModule/frmDownloadLoanScheduleController");
        kony.mvc.registry.add("frmEditNickName", "AccountModule/frmEditNickName", {
            "controllerName": "AccountModule/frmEditNickNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmExternalAccountDetails", "AccountModule/frmExternalAccountDetails", {
            "controllerName": "AccountModule/frmExternalAccountDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmFilterAccounts", "AccountModule/frmFilterAccounts", "AccountModule/frmFilterAccountsController");
        kony.mvc.registry.add("frmInstallmentDetails", "AccountModule/frmInstallmentDetails", "AccountModule/frmInstallmentDetailsController");
        kony.mvc.registry.add("frmLoanSchedule", "AccountModule/frmLoanSchedule", "AccountModule/frmLoanScheduleController");
        kony.mvc.registry.add("frmManageExternalAccounts", "AccountModule/frmManageExternalAccounts", {
            "controllerName": "AccountModule/frmManageExternalAccountsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPFMCategorisedTransactions", "AccountModule/frmPFMCategorisedTransactions", {
            "controllerName": "AccountModule/frmPFMCategorisedTransactionsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPFMEditCategory", "AccountModule/frmPFMEditCategory", {
            "controllerName": "AccountModule/frmPFMEditCategoryController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPFMMyMoney", "AccountModule/frmPFMMyMoney", {
            "controllerName": "AccountModule/frmPFMMyMoneyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPFMSelectTimePeriod", "AccountModule/frmPFMSelectTimePeriod", {
            "controllerName": "AccountModule/frmPFMSelectTimePeriodController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPFMTransactionDetails", "AccountModule/frmPFMTransactionDetails", {
            "controllerName": "AccountModule/frmPFMTransactionDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSelectAccount", "AccountModule/frmSelectAccount", "AccountModule/frmSelectAccountController");
        kony.mvc.registry.add("frmSelectExternalAccounts", "AccountModule/frmSelectExternalAccounts", {
            "controllerName": "AccountModule/frmSelectExternalAccountsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSelectExternalBank", "AccountModule/frmSelectExternalBank", {
            "controllerName": "AccountModule/frmSelectExternalBankController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSelectYear", "AccountModule/frmSelectYear", "AccountModule/frmSelectYearController");
        kony.mvc.registry.add("frmShowAttachments", "AccountModule/frmShowAttachments", "AccountModule/frmShowAttachmentsController");
        kony.mvc.registry.add("frmStatementsEndDate", "AccountModule/frmStatementsEndDate", "AccountModule/frmStatementsEndDateController");
        kony.mvc.registry.add("frmStatementStartDate", "AccountModule/frmStatementStartDate", "AccountModule/frmStatementStartDateController");
        kony.mvc.registry.add("frmUnifiedDashboard", "AccountModule/frmUnifiedDashboard", "AccountModule/frmUnifiedDashboardController");
        kony.mvc.registry.add("frmViewCombinedStatements", "AccountModule/frmViewCombinedStatements", {
            "controllerName": "AccountModule/frmViewCombinedStatementsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmACHList", "ACHModule/frmACHList", {
            "controllerName": "ACHModule/frmACHListController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmACHTransactionDetail", "ACHModule/frmACHTransactionDetail", {
            "controllerName": "ACHModule/frmACHTransactionDetailController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmACHTransactions", "ACHModule/frmACHTransactions", {
            "controllerName": "ACHModule/frmACHTransactionsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAlertFilter", "AlertsModule/frmAlertFilter", "AlertsModule/frmAlertFilterController");
        kony.mvc.registry.add("frmAlertsDetails", "AlertsModule/frmAlertsDetails", "AlertsModule/frmAlertsDetailsController");
        kony.mvc.registry.add("frmAlertsLanding", "AlertsModule/frmAlertsLanding", {
            "controllerName": "AlertsModule/frmAlertsLandingController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmApprovalHistory", "ApprovalsReqModule/frmApprovalHistory", "ApprovalsReqModule/frmApprovalHistoryController");
        kony.mvc.registry.add("frmApprovalsAndRequestsFilters", "ApprovalsReqModule/frmApprovalsAndRequestsFilters", "ApprovalsReqModule/frmApprovalsAndRequestsFiltersController");
        kony.mvc.registry.add("frmApprovalsAndRequestsTitle", "ApprovalsReqModule/frmApprovalsAndRequestsTitle", "ApprovalsReqModule/frmApprovalsAndRequestsTitleController");
        kony.mvc.registry.add("ApprovalReqMain", "ApprovalsReqModule/frmApprovalsList", "ApprovalsReqModule/frmApprovalsListController");
        kony.mvc.registry.add("frmApprovalsListView", "ApprovalsReqModule/frmApprovalsListView", "ApprovalsReqModule/frmApprovalsListViewController");
        kony.mvc.registry.add("frmBulkRejectReason", "ApprovalsReqModule/frmBulkRejectReason", "ApprovalsReqModule/frmBulkRejectReasonController");
        kony.mvc.registry.add("RequestList", "ApprovalsReqModule/frmRequestList", "ApprovalsReqModule/frmRequestListController");
        kony.mvc.registry.add("frmDevRegFaceId", "AuthModule/frmDevRegFaceId", {
            "controllerName": "AuthModule/frmDevRegFaceIdController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDevRegFaceIdSetAsDefault", "AuthModule/frmDevRegFaceIdSetAsDefault", {
            "controllerName": "AuthModule/frmDevRegFaceIdSetAsDefaultController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDevRegLanding", "AuthModule/frmDevRegLanding", {
            "controllerName": "AuthModule/frmDevRegLandingController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDevRegLoginType", "AuthModule/frmDevRegLoginType", {
            "controllerName": "AuthModule/frmDevRegLoginTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDevRegPin", "AuthModule/frmDevRegPin", {
            "controllerName": "AuthModule/frmDevRegPinController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDevRegPinConfirmation", "AuthModule/frmDevRegPinConfirmation", {
            "controllerName": "AuthModule/frmDevRegPinConfirmationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDevRegSecCode", "AuthModule/frmDevRegSecCode", {
            "controllerName": "AuthModule/frmDevRegSecCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDevRegTouchId", "AuthModule/frmDevRegTouchId", {
            "controllerName": "AuthModule/frmDevRegTouchIdController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmExternalBankLogin", "AuthModule/frmExternalBankLogin", {
            "controllerName": "AuthModule/frmExternalBankLoginController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmForgotCreatePassword", "AuthModule/frmForgotCreatePassword", {
            "controllerName": "AuthModule/frmForgotCreatePasswordController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmForgotEnterCVV", "AuthModule/frmForgotEnterCVV", {
            "controllerName": "AuthModule/frmForgotEnterCVVController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmForgotEnterDOB", "AuthModule/frmForgotEnterDOB", {
            "controllerName": "AuthModule/frmForgotEnterDOBController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmForgotEnterEmailID", "AuthModule/frmForgotEnterEmailID", {
            "controllerName": "AuthModule/frmForgotEnterEmailIDController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmForgotEnterLastName", "AuthModule/frmForgotEnterLastName", {
            "controllerName": "AuthModule/frmForgotEnterLastNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmForgotEnterPhoneNumber", "AuthModule/frmForgotEnterPhoneNumber", {
            "controllerName": "AuthModule/frmForgotEnterPhoneNumberController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmForgotEnterSecurityCode", "AuthModule/frmForgotEnterSecurityCode", {
            "controllerName": "AuthModule/frmForgotEnterSecurityCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmForgotEnterSSN", "AuthModule/frmForgotEnterSSN", {
            "controllerName": "AuthModule/frmForgotEnterSSNController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmForgotMain", "AuthModule/frmForgotMain", {
            "controllerName": "AuthModule/frmForgotMainController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmForgotMFAOption3", "AuthModule/frmForgotMFAOption3", "AuthModule/frmForgotMFAOption3Controller");
        kony.mvc.registry.add("frmForgotMFASecurityCode", "AuthModule/frmForgotMFASecurityCode", "AuthModule/frmForgotMFASecurityCodeController");
        kony.mvc.registry.add("frmForgotResetInformation", "AuthModule/frmForgotResetInformation", {
            "controllerName": "AuthModule/frmForgotResetInformationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("AuthModule/frmForgotSelectCountry", "AuthModule/frmForgotSelectCountry", {
            "controllerName": "AuthModule/frmForgotSelectCountryController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmForgotSelectMethod", "AuthModule/frmForgotSelectMethod", {
            "controllerName": "AuthModule/frmForgotSelectMethodController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmForgotSelectUsername", "AuthModule/frmForgotSelectUsername", {
            "controllerName": "AuthModule/frmForgotSelectUsernameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmFullScreenAds", "AuthModule/frmFullScreenAds", {
            "controllerName": "AuthModule/frmFullScreenAdsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("AuthModule/frmLanguageSelectionLoading", "AuthModule/frmLanguageSelectionLoading", {
            "controllerName": "AuthModule/frmLanguageSelectionLoadingController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmLogin", "AuthModule/frmLogin", {
            "controllerName": "AuthModule/frmLoginController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmLogout", "AuthModule/frmLogout", {
            "controllerName": "AuthModule/frmLogoutController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSCACantSignIn", "AuthModule/frmSCACantSignIn", {
            "controllerName": "AuthModule/frmSCACantSignInController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSelectUserId", "AuthModule/frmSelectUserId", "AuthModule/frmSelectUserIdController");
        kony.mvc.registry.add("frmAccountDetailsNew", "BBAccountsModule/frmAccountDetailsNew", {
            "controllerName": "BBAccountsModule/frmAccountDetailsNewController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAccountInfoNew", "BBAccountsModule/frmAccountInfoNew", {
            "controllerName": "BBAccountsModule/frmAccountInfoNewController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAccountSelector", "BBAccountsModule/frmAccountSelector", "BBAccountsModule/frmAccountSelectorController");
        kony.mvc.registry.add("frmBusinessDashboard", "BBAccountsModule/frmBusinessDashboard", {
            "controllerName": "BBAccountsModule/frmBusinessDashboardController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCombinedDashboard", "BBAccountsModule/frmCombinedDashboard", {
            "controllerName": "BBAccountsModule/frmCombinedDashboardController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDashboardSelector", "BBAccountsModule/frmDashboardSelector", "BBAccountsModule/frmDashboardSelectorController");
        kony.mvc.registry.add("frmBillPay", "BillPayModule/frmBillPay", {
            "controllerName": "BillPayModule/frmBillPayController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayAllPayees", "BillPayModule/frmBillPayAllPayees", {
            "controllerName": "BillPayModule/frmBillPayAllPayeesController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayAllPayments", "BillPayModule/frmBillPayAllPayments", {
            "controllerName": "BillPayModule/frmBillPayAllPaymentsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayAmount", "BillPayModule/frmBillPayAmount", {
            "controllerName": "BillPayModule/frmBillPayAmountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayConfirmation", "BillPayModule/frmBillPayConfirmation", {
            "controllerName": "BillPayModule/frmBillPayConfirmationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("BillPayModule/frmBillPayCountryCode", "BillPayModule/frmBillPayCountryCode", "BillPayModule/frmBillPayCountryCodeController");
        kony.mvc.registry.add("frmBillPayCountryLookUp", "BillPayModule/frmBillPayCountryLookUp", "BillPayModule/frmBillPayCountryLookUpController");
        kony.mvc.registry.add("frmBillPayDetails", "BillPayModule/frmBillPayDetails", {
            "controllerName": "BillPayModule/frmBillPayDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayDuration", "BillPayModule/frmBillPayDuration", {
            "controllerName": "BillPayModule/frmBillPayDurationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayEditAddress", "BillPayModule/frmBillPayEditAddress", {
            "controllerName": "BillPayModule/frmBillPayEditAddressController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayEditName", "BillPayModule/frmBillPayEditName", {
            "controllerName": "BillPayModule/frmBillPayEditNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayEditNickName", "BillPayModule/frmBillPayEditNickName", "BillPayModule/frmBillPayEditNickNameController");
        kony.mvc.registry.add("frmBillPayEditPayeeAddress", "BillPayModule/frmBillPayEditPayeeAddress", "BillPayModule/frmBillPayEditPayeeAddressController");
        kony.mvc.registry.add("frmBillPayEndDate", "BillPayModule/frmBillPayEndDate", {
            "controllerName": "BillPayModule/frmBillPayEndDateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayEnterAccNo", "BillPayModule/frmBillPayEnterAccNo", {
            "controllerName": "BillPayModule/frmBillPayEnterAccNoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayFrequency", "BillPayModule/frmBillPayFrequency", {
            "controllerName": "BillPayModule/frmBillPayFrequencyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayFromAccount", "BillPayModule/frmBillPayFromAccount", {
            "controllerName": "BillPayModule/frmBillPayFromAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayLiteActivation", "BillPayModule/frmBillPayLiteActivation", "BillPayModule/frmBillPayLiteActivationController");
        kony.mvc.registry.add("frmBillPayPayeeAddressList", "BillPayModule/frmBillPayPayeeAddressList", {
            "controllerName": "BillPayModule/frmBillPayPayeeAddressListController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayPayeeDetails", "BillPayModule/frmBillPayPayeeDetails", {
            "controllerName": "BillPayModule/frmBillPayPayeeDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayPhoneNumber", "BillPayModule/frmBillPayPhoneNumber", {
            "controllerName": "BillPayModule/frmBillPayPhoneNumberController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayPolicyNumber", "BillPayModule/frmBillPayPolicyNumber", {
            "controllerName": "BillPayModule/frmBillPayPolicyNumberController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayRecurrence", "BillPayModule/frmBillPayRecurrence", {
            "controllerName": "BillPayModule/frmBillPayRecurrenceController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayReEnterAccNo", "BillPayModule/frmBillPayReEnterAccNo", {
            "controllerName": "BillPayModule/frmBillPayReEnterAccNoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayReEnterRelationNumber", "BillPayModule/frmBillPayReEnterRelationNumber", {
            "controllerName": "BillPayModule/frmBillPayReEnterRelationNumberController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayRelationNumber", "BillPayModule/frmBillPayRelationNumber", {
            "controllerName": "BillPayModule/frmBillPayRelationNumberController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPaySearchPayee", "BillPayModule/frmBillPaySearchPayee", {
            "controllerName": "BillPayModule/frmBillPaySearchPayeeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPaySelectPayee", "BillPayModule/frmBillPaySelectPayee", {
            "controllerName": "BillPayModule/frmBillPaySelectPayeeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayStartDate", "BillPayModule/frmBillPayStartDate", {
            "controllerName": "BillPayModule/frmBillPayStartDateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayTAndC", "BillPayModule/frmBillPayTAndC", "BillPayModule/frmBillPayTAndCController");
        kony.mvc.registry.add("frmBillPayVerifyDetails", "BillPayModule/frmBillPayVerifyDetails", {
            "controllerName": "BillPayModule/frmBillPayVerifyDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBillPayZipCode", "BillPayModule/frmBillPayZipCode", {
            "controllerName": "BillPayModule/frmBillPayZipCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPayeeAcknowledgement", "BillPayModule/frmPayeeAcknowledgement", "BillPayModule/frmPayeeAcknowledgementController");
        kony.mvc.registry.add("AccountPermissions", "BusinessBanking/frmAccountPermissions", "BusinessBanking/frmAccountPermissionsController");
        kony.mvc.registry.add("frmAcknowledgementStatus", "BusinessBanking/frmAcknowledgementStatus", "BusinessBanking/frmAcknowledgementStatusController");
        kony.mvc.registry.add("frmOtherFeaturePermissions", "BusinessBanking/frmOtherFeaturePermissions", "BusinessBanking/frmOtherFeaturePermissionsController");
        kony.mvc.registry.add("StausMessage", "BusinessBanking/frmStausMessage", {
            "controllerName": "BusinessBanking/frmStausMessageController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("UserDetails", "BusinessBanking/frmUserDetails", {
            "controllerName": "BusinessBanking/frmUserDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmUserDetailsNew", "BusinessBanking/frmUserDetailsNew", "BusinessBanking/frmUserDetailsNewController");
        kony.mvc.registry.add("UserDetailsPermission", "BusinessBanking/frmUserDetailsPermission", "BusinessBanking/frmUserDetailsPermissionController");
        kony.mvc.registry.add("UserManagementTransactionLimits", "BusinessBanking/frmUserManagementTransactionLimits", "BusinessBanking/frmUserManagementTransactionLimitsController");
        kony.mvc.registry.add("frmUserMgmtList", "BusinessBanking/frmUserMgmtList", {
            "controllerName": "BusinessBanking/frmUserMgmtListController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("UserPermissions", "BusinessBanking/frmUserPermissions", "BusinessBanking/frmUserPermissionsController");
        kony.mvc.registry.add("frmAutoLoan", "CampaignManagement/frmAutoLoan", {
            "controllerName": "CampaignManagement/frmAutoLoanController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCMAcknowledgement", "CampaignManagement/frmCMAcknowledgement", {
            "controllerName": "CampaignManagement/frmCMAcknowledgementController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCMDuration", "CampaignManagement/frmCMDuration", {
            "controllerName": "CampaignManagement/frmCMDurationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCMReason", "CampaignManagement/frmCMReason", {
            "controllerName": "CampaignManagement/frmCMReasonController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCMTermsAndConditions", "CampaignManagement/frmCMTermsAndConditions", {
            "controllerName": "CampaignManagement/frmCMTermsAndConditionsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCreditAccount", "CampaignManagement/frmCreditAccount", {
            "controllerName": "CampaignManagement/frmCreditAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDepositAmount", "CampaignManagement/frmDepositAmount", {
            "controllerName": "CampaignManagement/frmDepositAmountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDepositsAcknowledgement", "CampaignManagement/frmDepositsAcknowledgement", {
            "controllerName": "CampaignManagement/frmDepositsAcknowledgementController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDepositsConfirmation", "CampaignManagement/frmDepositsConfirmation", {
            "controllerName": "CampaignManagement/frmDepositsConfirmationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDepositsFromAccount", "CampaignManagement/frmDepositsFromAccount", {
            "controllerName": "CampaignManagement/frmDepositsFromAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDepositTermsAndConditions", "CampaignManagement/frmDepositTermsAndConditions", {
            "controllerName": "CampaignManagement/frmDepositTermsAndConditionsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDepositToAccount", "CampaignManagement/frmDepositToAccount", {
            "controllerName": "CampaignManagement/frmDepositToAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmFinancialHelp", "CampaignManagement/frmFinancialHelp", {
            "controllerName": "CampaignManagement/frmFinancialHelpController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmFinancialHelpAcknowledgement", "CampaignManagement/frmFinancialHelpAcknowledgement", {
            "controllerName": "CampaignManagement/frmFinancialHelpAcknowledgementController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmFromAccount", "CampaignManagement/frmFromAccount", {
            "controllerName": "CampaignManagement/frmFromAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmHELOC", "CampaignManagement/frmHELOC", {
            "controllerName": "CampaignManagement/frmHELOCController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmLoading", "CampaignManagement/frmLoading", {
            "controllerName": "CampaignManagement/frmLoadingController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmLoanAmount", "CampaignManagement/frmLoanAmount", {
            "controllerName": "CampaignManagement/frmLoanAmountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMaturityInstructions", "CampaignManagement/frmMaturityInstructions", {
            "controllerName": "CampaignManagement/frmMaturityInstructionsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPersonalLoans", "CampaignManagement/frmPersonalLoans", {
            "controllerName": "CampaignManagement/frmPersonalLoansController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmShortTermDeposits", "CampaignManagement/frmShortTermDeposits", {
            "controllerName": "CampaignManagement/frmShortTermDepositsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmShortTermLoanConfirmation", "CampaignManagement/frmShortTermLoanConfirmation", {
            "controllerName": "CampaignManagement/frmShortTermLoanConfirmationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSpecialBonus", "CampaignManagement/frmSpecialBonus", {
            "controllerName": "CampaignManagement/frmSpecialBonusController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSpecialBonusAcknowledgment", "CampaignManagement/frmSpecialBonusAcknowledgment", {
            "controllerName": "CampaignManagement/frmSpecialBonusAcknowledgmentController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessCashRec", "CardLessModule/frmCardLessCashRec", {
            "controllerName": "CardLessModule/frmCardLessCashRecController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessCashRecQR", "CardLessModule/frmCardLessCashRecQR", {
            "controllerName": "CardLessModule/frmCardLessCashRecQRController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessConfWithdraw", "CardLessModule/frmCardLessConfWithdraw", {
            "controllerName": "CardLessModule/frmCardLessConfWithdrawController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessConfWithdrawQR", "CardLessModule/frmCardLessConfWithdrawQR", {
            "controllerName": "CardLessModule/frmCardLessConfWithdrawQRController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessContactType", "CardLessModule/frmCardLessContactType", {
            "controllerName": "CardLessModule/frmCardLessContactTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("CardLessModule/frmCardLessCountryCode", "CardLessModule/frmCardLessCountryCode", "CardLessModule/frmCardLessCountryCodeController");
        kony.mvc.registry.add("frmCardLessCWCode", "CardLessModule/frmCardLessCWCode", {
            "controllerName": "CardLessModule/frmCardLessCWCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessEmail", "CardLessModule/frmCardLessEmail", {
            "controllerName": "CardLessModule/frmCardLessEmailController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessFrom", "CardLessModule/frmCardLessFrom", {
            "controllerName": "CardLessModule/frmCardLessFromController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessFromQR", "CardLessModule/frmCardLessFromQR", {
            "controllerName": "CardLessModule/frmCardLessFromQRController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessHome", "CardLessModule/frmCardLessHome", {
            "controllerName": "CardLessModule/frmCardLessHomeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessHomeQR", "CardLessModule/frmCardLessHomeQR", {
            "controllerName": "CardLessModule/frmCardLessHomeQRController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessOverdraft", "CardLessModule/frmCardLessOverdraft", {
            "controllerName": "CardLessModule/frmCardLessOverdraftController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessOverdraftQR", "CardLessModule/frmCardLessOverDraftQR", "CardLessModule/frmCardLessOverDraftQRController");
        kony.mvc.registry.add("frmCardLessOverDraftQRCode", "CardLessModule/frmCardLessOverDraftQRCode", {
            "controllerName": "CardLessModule/frmCardLessOverDraftQRCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessPhoneNo", "CardLessModule/frmCardLessPhoneNo", {
            "controllerName": "CardLessModule/frmCardLessPhoneNoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessPickContacts", "CardLessModule/frmCardLessPickContacts", {
            "controllerName": "CardLessModule/frmCardLessPickContactsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessQRCode", "CardLessModule/frmCardLessQRCode", {
            "controllerName": "CardLessModule/frmCardLessQRCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessRecName", "CardLessModule/frmCardLessRecName", {
            "controllerName": "CardLessModule/frmCardLessRecNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessSecureCode", "CardLessModule/frmCardLessSecureCode", {
            "controllerName": "CardLessModule/frmCardLessSecureCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessWithdraw", "CardLessModule/frmCardLessWithdraw", {
            "controllerName": "CardLessModule/frmCardLessWithdrawController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardLessWithdrawQR", "CardLessModule/frmCardLessWithdrawQR", {
            "controllerName": "CardLessModule/frmCardLessWithdrawQRController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmChatbot", "ChatBotModule/frmChatbot", {
            "controllerName": "ChatBotModule/frmChatbotController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCheckDeposit", "CheckDepositModule/frmCheckDeposit", {
            "controllerName": "CheckDepositModule/frmCheckDepositController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCheckDepositTo", "CheckDepositModule/frmCheckDepositTo", {
            "controllerName": "CheckDepositModule/frmCheckDepositToController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmConfirmTransferCD", "CheckDepositModule/frmConfirmTransferCD", {
            "controllerName": "CheckDepositModule/frmConfirmTransferCDController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDepositAmountCD", "CheckDepositModule/frmDepositAmountCD", {
            "controllerName": "CheckDepositModule/frmDepositAmountCDController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDepositToCD", "CheckDepositModule/frmDepositToCD", {
            "controllerName": "CheckDepositModule/frmDepositToCDController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransactionDetails", "CheckDepositModule/frmTransactionDetails", {
            "controllerName": "CheckDepositModule/frmTransactionDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmUploadCheckImages", "CheckDepositModule/frmUploadCheckImages", {
            "controllerName": "CheckDepositModule/frmUploadCheckImagesController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAmount", "ChequeManagementModule/frmAmount", "ChequeManagementModule/frmAmountController");
        kony.mvc.registry.add("frmChequeManagement", "ChequeManagementModule/frmChequeManagement", {
            "controllerName": "ChequeManagementModule/frmChequeManagementController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmChequeNumber", "ChequeManagementModule/frmChequeNumber", "ChequeManagementModule/frmChequeNumberController");
        kony.mvc.registry.add("frmChequeRevokeAckn", "ChequeManagementModule/frmChequeRevokeAckn", "ChequeManagementModule/frmChequeRevokeAcknController");
        kony.mvc.registry.add("frmChequeTransactionDetails", "ChequeManagementModule/frmChequeTransactionDetails", {
            "controllerName": "ChequeManagementModule/frmChequeTransactionDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCMChequeBooks", "ChequeManagementModule/frmCMChequeBooks", {
            "controllerName": "ChequeManagementModule/frmCMChequeBooksController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCMConfirmation", "ChequeManagementModule/frmCMConfirmation", {
            "controllerName": "ChequeManagementModule/frmCMConfirmationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCMReview", "ChequeManagementModule/frmCMReview", {
            "controllerName": "ChequeManagementModule/frmCMReviewController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCMSearch", "ChequeManagementModule/frmCMSearch", {
            "controllerName": "ChequeManagementModule/frmCMSearchController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCMSearchResult", "ChequeManagementModule/frmCMSearchResult", {
            "controllerName": "ChequeManagementModule/frmCMSearchResultController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCMSelectAccount", "ChequeManagementModule/frmCMSelectAccount", {
            "controllerName": "ChequeManagementModule/frmCMSelectAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDeliveryType", "ChequeManagementModule/frmDeliveryType", {
            "controllerName": "ChequeManagementModule/frmDeliveryTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmIssueDate", "ChequeManagementModule/frmIssueDate", "ChequeManagementModule/frmIssueDateController");
        kony.mvc.registry.add("frmPayeeName", "ChequeManagementModule/frmPayeeName", "ChequeManagementModule/frmPayeeNameController");
        kony.mvc.registry.add("frmSCAcknowledgement", "ChequeManagementModule/frmSCAcknowledgement", "ChequeManagementModule/frmSCAcknowledgementController");
        kony.mvc.registry.add("frmSCChequeType", "ChequeManagementModule/frmSCChequeType", "ChequeManagementModule/frmSCChequeTypeController");
        kony.mvc.registry.add("frmSCReason", "ChequeManagementModule/frmSCReason", "ChequeManagementModule/frmSCReasonController");
        kony.mvc.registry.add("frmSCReview", "ChequeManagementModule/frmSCReview", "ChequeManagementModule/frmSCReviewController");
        kony.mvc.registry.add("frmSCTermsAndCondition", "ChequeManagementModule/frmSCTermsAndCondition", "ChequeManagementModule/frmSCTermsAndConditionController");
        kony.mvc.registry.add("frmSeriesCheque", "ChequeManagementModule/frmSeriesCheque", "ChequeManagementModule/frmSeriesChequeController");
        kony.mvc.registry.add("frmDisputedTransactionsList", "DisputeTransactions/frmDisputedTransactionsList", {
            "controllerName": "DisputeTransactions/frmDisputedTransactionsListController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDisputeReason", "DisputeTransactions/frmDisputeReason", {
            "controllerName": "DisputeTransactions/frmDisputeReasonController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDisputeTransactionDetails", "DisputeTransactions/frmDisputeTransactionDetails", {
            "controllerName": "DisputeTransactions/frmDisputeTransactionDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDTAcknowledgement", "DisputeTransactions/frmDTAcknowledgement", {
            "controllerName": "DisputeTransactions/frmDTAcknowledgementController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDTConfirm", "DisputeTransactions/frmDTConfirm", {
            "controllerName": "DisputeTransactions/frmDTConfirmController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmEnrollAccinfo", "EnrollModule/frmEnrollAccinfo", {
            "controllerName": "EnrollModule/frmEnrollAccinfoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmEnrollActivateProfile", "EnrollModule/frmEnrollActivateProfile", {
            "controllerName": "EnrollModule/frmEnrollActivateProfileController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmEnrollCVV", "EnrollModule/frmEnrollCVV", {
            "controllerName": "EnrollModule/frmEnrollCVVController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmEnrollDOB", "EnrollModule/frmEnrollDOB", {
            "controllerName": "EnrollModule/frmEnrollDOBController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmEnrollLastName", "EnrollModule/frmEnrollLastName", {
            "controllerName": "EnrollModule/frmEnrollLastNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmEnrollMFAOption3", "EnrollModule/frmEnrollMFAOption3", "EnrollModule/frmEnrollMFAOption3Controller");
        kony.mvc.registry.add("frmEnrollMFASecurityCode", "EnrollModule/frmEnrollMFASecurityCode", "EnrollModule/frmEnrollMFASecurityCodeController");
        kony.mvc.registry.add("frmEnrollSecurity", "EnrollModule/frmEnrollSecurity", {
            "controllerName": "EnrollModule/frmEnrollSecurityController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmEnrollSecurityCheck", "EnrollModule/frmEnrollSecurityCheck", {
            "controllerName": "EnrollModule/frmEnrollSecurityCheckController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmEnrollSignUp", "EnrollModule/frmEnrollSignUp", {
            "controllerName": "EnrollModule/frmEnrollSignUpController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmEnrollSSn", "EnrollModule/frmEnrollSSn", {
            "controllerName": "EnrollModule/frmEnrollSSnController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBankLogin", "ExternalAccounts/frmBankLogin", "ExternalAccounts/frmBankLoginController");
        kony.mvc.registry.add("frmExternalAccountsDetails", "ExternalAccounts/frmExternalAccountsDetails", "ExternalAccounts/frmExternalAccountsDetailsController");
        kony.mvc.registry.add("frmExternalAccountsList", "ExternalAccounts/frmExternalAccountsList", "ExternalAccounts/frmExternalAccountsListController");
        kony.mvc.registry.add("frmExternalAccountsTermsAndConditions", "ExternalAccounts/frmExternalAccountsTermsAndConditions", "ExternalAccounts/frmExternalAccountsTermsAndConditionsController");
        kony.mvc.registry.add("frmSelectExternalBanks", "ExternalAccounts/frmSelectExternalBanks", "ExternalAccounts/frmSelectExternalBanksController");
        kony.mvc.registry.add("FeedBackModule/frmFeedbackEntry", "FeedBackModule/frmFeedbackEntry", "FeedBackModule/frmFeedbackEntryController");
        kony.mvc.registry.add("FeedBackModule/frmFeedBackSuccess", "FeedBackModule/frmFeedBackSuccess", {
            "controllerName": "FeedBackModule/frmFeedBackSuccessController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmInAppFeedbackRating", "FeedBackModule/frmInAppFeedbackRating", {
            "controllerName": "FeedBackModule/frmInAppFeedbackRatingController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBuyCurrency", "ForeignExchange/frmBuyCurrency", {
            "controllerName": "ForeignExchange/frmBuyCurrencyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("ForeignExchange/frmForexDashboard", "ForeignExchange/frmForexDashboard", {
            "controllerName": "ForeignExchange/frmForexDashboardController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAcknowledgement", "frmAcknowledgement", "frmAcknowledgementController");
        kony.mvc.registry.add("frmAdvanceSearchResults", "frmAdvanceSearchResults", "frmAdvanceSearchResultsController");
        kony.mvc.registry.add("frmAlertsSettings", "frmAlertsSettings", "frmAlertsSettingsController");
        kony.mvc.registry.add("frmAlreadyEnrolled", "frmAlreadyEnrolled", "frmAlreadyEnrolledController");
        kony.mvc.registry.add("frmCamAndroidUtility", "frmCamAndroidUtility", "frmCamAndroidUtilityController");
        kony.mvc.registry.add("frmChangeProfilePicture", "frmChangeProfilePicture", "frmChangeProfilePictureController");
        kony.mvc.registry.add("frmBillPayContracts", "frmContracts", "frmContractsController");
        kony.mvc.registry.add("frmDefaultLogin", "frmDefaultLogin", "frmDefaultLoginController");
        kony.mvc.registry.add("frmError", "frmError", "frmErrorController");
        kony.mvc.registry.add("frmEStmtAccountDetails", "frmEStmtAccountDetails", "frmEStmtAccountDetailsController");
        kony.mvc.registry.add("frmEStmtAccountPreferences", "frmEStmtAccountPreferences", "frmEStmtAccountPreferencesController");
        kony.mvc.registry.add("frmEStmtChangeEmail", "frmEStmtChangeEmail", "frmEStmtChangeEmailController");
        kony.mvc.registry.add("frmEStmtDisableEStatements", "frmEStmtDisableEStatements", "frmEStmtDisableEStatementsController");
        kony.mvc.registry.add("frmEStmtEditNickName", "frmEStmtEditNickName", "frmEStmtEditNickNameController");
        kony.mvc.registry.add("frmEStmtEnableEStatements", "frmEStmtEnableEStatements", "frmEStmtEnableEStatementsController");
        kony.mvc.registry.add("frmEStmtTermsAndConditions", "frmEStmtTermsAndConditions", "frmEStmtTermsAndConditionsController");
        kony.mvc.registry.add("frmForgot", "frmForgot", "frmForgotController");
        kony.mvc.registry.add("frmLocation", "frmLocation", "frmLocationController");
        kony.mvc.registry.add("frmNewMenu", "frmNewMenu", "frmNewMenuController");
        kony.mvc.registry.add("frmOBDocument", "frmOBDocument", "frmOBDocumentController");
        kony.mvc.registry.add("frmOBSecurityQuestions", "frmOBSecurityQuestions", "frmOBSecurityQuestionsController");
        kony.mvc.registry.add("frmOnBoarding", "frmOnBoarding", "frmOnBoardingController");
        kony.mvc.registry.add("frmPFMAdvancedSearch", "frmPFMAdvancedSearch", "frmPFMAdvancedSearchController");
        kony.mvc.registry.add("frmPFMAdvanceSearchResults", "frmPFMAdvanceSearchResults", "frmPFMAdvanceSearchResultsController");
        kony.mvc.registry.add("frmPFMNote", "frmPFMNote", "frmPFMNoteController");
        kony.mvc.registry.add("frmPreferencesFaceIdSetAsDefault", "frmPreferencesFaceIdSetAsDefault", "frmPreferencesFaceIdSetAsDefaultController");
        kony.mvc.registry.add("frmProfileCountry", "frmProfileCountry", "frmProfileCountryController");
        kony.mvc.registry.add("frmProfileCountryCode", "frmProfileCountryCode", "frmProfileCountryCodeController");
        kony.mvc.registry.add("frmSetDefaultAccount", "frmSetDefaultAccount", "frmSetDefaultAccountController");
        kony.mvc.registry.add("frmSuccessAndError", "frmSuccessAndError", "frmSuccessAndErrorController");
        kony.mvc.registry.add("frmUpdatePassword", "frmUpdatePassword", "frmUpdatePasswordController");
        kony.mvc.registry.add("frmSupport", "InformationModule/frmSupport", {
            "controllerName": "InformationModule/frmSupportController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSupportInfo", "InformationModule/frmSupportInfo", {
            "controllerName": "InformationModule/frmSupportInfoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmLoanPayoff", "LoansPayoffModule/frmLoanPayoff", {
            "controllerName": "LoansPayoffModule/frmLoanPayoffController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmLoansAcknowledgement", "LoansPayoffModule/frmLoansAcknowledgement", {
            "controllerName": "LoansPayoffModule/frmLoansAcknowledgementController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmLoansDate", "LoansPayoffModule/frmLoansDate", {
            "controllerName": "LoansPayoffModule/frmLoansDateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmLoansFromAccount", "LoansPayoffModule/frmLoansFromAccount", {
            "controllerName": "LoansPayoffModule/frmLoansFromAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmLoansVerify", "LoansPayoffModule/frmLoansVerify", {
            "controllerName": "LoansPayoffModule/frmLoansVerifyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmLocationDetails", "LocateUsModule/frmLocationDetails", {
            "controllerName": "LocateUsModule/frmLocationDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmLocationDirections", "LocateUsModule/frmLocationDirections", {
            "controllerName": "LocateUsModule/frmLocationDirectionsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmLocationMap", "LocateUsModule/frmLocationMap", {
            "controllerName": "LocateUsModule/frmLocationMapController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("ManageCardsModule/frmActivateCardHome", "ManageCardsModule/frmActivateCardHome", "ManageCardsModule/frmActivateCardHomeController");
        kony.mvc.registry.add("frmCardManageAck", "ManageCardsModule/frmCardManageAck", {
            "controllerName": "ManageCardsModule/frmCardManageAckController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardManageDetails", "ManageCardsModule/frmCardManageDetails", {
            "controllerName": "ManageCardsModule/frmCardManageDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardManageHome", "ManageCardsModule/frmCardManageHome", {
            "controllerName": "ManageCardsModule/frmCardManageHomeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardManageNewCVV", "ManageCardsModule/frmCardManageNewCVV", {
            "controllerName": "ManageCardsModule/frmCardManageNewCVVController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardManageOldCVV", "ManageCardsModule/frmCardManageOldCVV", {
            "controllerName": "ManageCardsModule/frmCardManageOldCVVController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardManagePay", "ManageCardsModule/frmCardManagePay", {
            "controllerName": "ManageCardsModule/frmCardManagePayController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardMgtSecurityCode", "ManageCardsModule/frmCardMgtSecurityCode", {
            "controllerName": "ManageCardsModule/frmCardMgtSecurityCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardMngBillAddress", "ManageCardsModule/frmCardMngBillAddress", {
            "controllerName": "ManageCardsModule/frmCardMngBillAddressController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardMngConfirmDetails", "ManageCardsModule/frmCardMngConfirmDetails", {
            "controllerName": "ManageCardsModule/frmCardMngConfirmDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardMngNewPin", "ManageCardsModule/frmCardMngNewPin", {
            "controllerName": "ManageCardsModule/frmCardMngNewPinController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardMngNickName", "ManageCardsModule/frmCardMngNickName", {
            "controllerName": "ManageCardsModule/frmCardMngNickNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardMngPinChgOptions", "ManageCardsModule/frmCardMngPinChgOptions", {
            "controllerName": "ManageCardsModule/frmCardMngPinChgOptionsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardMngPinChgTypes", "ManageCardsModule/frmCardMngPinChgTypes", {
            "controllerName": "ManageCardsModule/frmCardMngPinChgTypesController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardMngReasons", "ManageCardsModule/frmCardMngReasons", {
            "controllerName": "ManageCardsModule/frmCardMngReasonsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardMngReplaceCardConfirm", "ManageCardsModule/frmCardMngReplaceCardConfirm", {
            "controllerName": "ManageCardsModule/frmCardMngReplaceCardConfirmController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardStatements", "ManageCardsModule/frmCardStatements", {
            "controllerName": "ManageCardsModule/frmCardStatementsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCardStatementView", "ManageCardsModule/frmCardStatementView", "ManageCardsModule/frmCardStatementViewController");
        kony.mvc.registry.add("frmCardTransactionDetails", "ManageCardsModule/frmCardTransactionDetails", "ManageCardsModule/frmCardTransactionDetailsController");
        kony.mvc.registry.add("frmManageFilterCards", "ManageCardsModule/frmManageFilterCards", {
            "controllerName": "ManageCardsModule/frmManageFilterCardsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("ManageCardsModule/frmManageNewCardAccounts", "ManageCardsModule/frmManageNewCardAccounts", {
            "controllerName": "ManageCardsModule/frmManageNewCardAccountsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("ManageCardsModule/frmManageNewCardAck", "ManageCardsModule/frmManageNewCardAck", {
            "controllerName": "ManageCardsModule/frmManageNewCardAckController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("ManageCardsModule/frmManageNewCardConfirmPin", "ManageCardsModule/frmManageNewCardConfirmPin", {
            "controllerName": "ManageCardsModule/frmManageNewCardConfirmPinController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("ManageCardsModule/frmManageNewCardName", "ManageCardsModule/frmManageNewCardName", {
            "controllerName": "ManageCardsModule/frmManageNewCardNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("ManageCardsModule/frmManageNewCardOverview", "ManageCardsModule/frmManageNewCardOverview", {
            "controllerName": "ManageCardsModule/frmManageNewCardOverviewController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("ManageCardsModule/frmManageNewCardPin", "ManageCardsModule/frmManageNewCardPin", {
            "controllerName": "ManageCardsModule/frmManageNewCardPinController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("ManageCardsModule/frmManageNewCardReview", "ManageCardsModule/frmManageNewCardReview", {
            "controllerName": "ManageCardsModule/frmManageNewCardReviewController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("ManageCardsModule/frmManageSelectNewCards", "ManageCardsModule/frmManageSelectNewCards", {
            "controllerName": "ManageCardsModule/frmManageSelectNewCardsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageTravelConfirmation", "ManageCardsModule/frmManageTravelConfirmation", {
            "controllerName": "ManageCardsModule/frmManageTravelConfirmationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("ManageCardsModule/frmManageTravelCountryCode", "ManageCardsModule/frmManageTravelCountryCode", {
            "controllerName": "ManageCardsModule/frmManageTravelCountryCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageTravelDestination", "ManageCardsModule/frmManageTravelDestination", {
            "controllerName": "ManageCardsModule/frmManageTravelDestinationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageTravelDetails", "ManageCardsModule/frmManageTravelDetails", {
            "controllerName": "ManageCardsModule/frmManageTravelDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageTravelEndDate", "ManageCardsModule/frmManageTravelEndDate", {
            "controllerName": "ManageCardsModule/frmManageTravelEndDateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageTravelPhoneNumber", "ManageCardsModule/frmManageTravelPhoneNumber", {
            "controllerName": "ManageCardsModule/frmManageTravelPhoneNumberController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageTravelPlans", "ManageCardsModule/frmManageTravelPlans", {
            "controllerName": "ManageCardsModule/frmManageTravelPlansController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageTravelSelectCards", "ManageCardsModule/frmManageTravelSelectCards", {
            "controllerName": "ManageCardsModule/frmManageTravelSelectCardsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageTravelStartDate", "ManageCardsModule/frmManageTravelStartDate", {
            "controllerName": "ManageCardsModule/frmManageTravelStartDateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("ManageCardsModule/frmSetCardLimitConfirmation", "ManageCardsModule/frmSetCardLimitConfirmation", {
            "controllerName": "ManageCardsModule/frmSetCardLimitConfirmationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSetPurchaseCardLimit", "ManageCardsModule/frmSetPurchaseCardLimit", {
            "controllerName": "ManageCardsModule/frmSetPurchaseCardLimitController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSetWithdrawalCardLimit", "ManageCardsModule/frmSetWithdrawalCardLimit", {
            "controllerName": "ManageCardsModule/frmSetWithdrawalCardLimitController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCreateCustomGroup", "ManageCustomgroup/frmCreateCustomGroup", "ManageCustomgroup/frmCreateCustomGroupController");
        kony.mvc.registry.add("frmCustomAcknowledgement", "ManageCustomgroup/frmCustomAcknowledgement", "ManageCustomgroup/frmCustomAcknowledgementController");
        kony.mvc.registry.add("frmCustomView", "ManageCustomgroup/frmCustomView", "ManageCustomgroup/frmCustomViewController");
        kony.mvc.registry.add("frmEditCustomGroupName", "ManageCustomgroup/frmEditCustomGroupName", "ManageCustomgroup/frmEditCustomGroupNameController");
        kony.mvc.registry.add("frmManageCustomGroup", "ManageCustomgroup/frmManageCustomGroup", "ManageCustomgroup/frmManageCustomGroupController");
        kony.mvc.registry.add("ManageCustomgroup/frmMyAccount", "ManageCustomgroup/frmMyAccount", "ManageCustomgroup/frmMyAccountController");
        kony.mvc.registry.add("frmSelectAccounts", "ManageCustomgroup/frmSelectAccounts", "ManageCustomgroup/frmSelectAccountsController");
        kony.mvc.registry.add("frmMenu", "MenuModule/frmMenu", {
            "controllerName": "MenuModule/frmMenuController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMessages", "MessagesModule/frmMessages", {
            "controllerName": "MessagesModule/frmMessagesController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMessagesDetails", "MessagesModule/frmMessagesDetails", {
            "controllerName": "MessagesModule/frmMessagesDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmNewMessage", "MessagesModule/frmNewMessage", {
            "controllerName": "MessagesModule/frmNewMessageController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmNewMessageCategory", "MessagesModule/frmNewMessageCategory", {
            "controllerName": "MessagesModule/frmNewMessageCategoryController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("MFAModule/frmMFAChangeUsername", "MFAModule/frmMFAChangeUsername", {
            "controllerName": "MFAModule/frmMFAChangeUsernameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("MFAModule/frmMFAOption1", "MFAModule/frmMFAOption1", {
            "controllerName": "MFAModule/frmMFAOption1Controller",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("MFAModule/frmMFAOption2", "MFAModule/frmMFAOption2", {
            "controllerName": "MFAModule/frmMFAOption2Controller",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMFAOption3", "MFAModule/frmMFAOption3", {
            "controllerName": "MFAModule/frmMFAOption3Controller",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMFASecurityCode", "MFAModule/frmMFASecurityCode", {
            "controllerName": "MFAModule/frmMFASecurityCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMFAValidation", "MFAModule/frmMFAValidation", "MFAModule/frmMFAValidationController");
        kony.mvc.registry.add("frmSecurityQuestions", "MFAModule/frmSecurityQuestions", {
            "controllerName": "MFAModule/frmSecurityQuestionsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDirectDebitsDetails", "MoneyMovementModule/frmDirectDebitsDetails", {
            "controllerName": "MoneyMovementModule/frmDirectDebitsDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMActivateP2PTransfer", "MoneyMovementModule/frmMMActivateP2PTransfer", {
            "controllerName": "MoneyMovementModule/frmMMActivateP2PTransferController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMConfirmation", "MoneyMovementModule/frmMMConfirmation", {
            "controllerName": "MoneyMovementModule/frmMMConfirmationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMDuration", "MoneyMovementModule/frmMMDuration", {
            "controllerName": "MoneyMovementModule/frmMMDurationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMEndDate", "MoneyMovementModule/frmMMEndDate", {
            "controllerName": "MoneyMovementModule/frmMMEndDateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMFrequency", "MoneyMovementModule/frmMMFrequency", {
            "controllerName": "MoneyMovementModule/frmMMFrequencyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMNumberOfTransfers", "MoneyMovementModule/frmMMNumberOfTransfers", {
            "controllerName": "MoneyMovementModule/frmMMNumberOfTransfersController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMP2PActivateSelectAccounts", "MoneyMovementModule/frmMMP2PActivateSelectAccounts", "MoneyMovementModule/frmMMP2PActivateSelectAccountsController");
        kony.mvc.registry.add("frmMMReview", "MoneyMovementModule/frmMMReview", {
            "controllerName": "MoneyMovementModule/frmMMReviewController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMSelectCurrency", "MoneyMovementModule/frmMMSelectCurrency", {
            "controllerName": "MoneyMovementModule/frmMMSelectCurrencyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMStartDate", "MoneyMovementModule/frmMMStartDate", {
            "controllerName": "MoneyMovementModule/frmMMStartDateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMTransactionDetails", "MoneyMovementModule/frmMMTransactionDetails", {
            "controllerName": "MoneyMovementModule/frmMMTransactionDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMTransferAmount", "MoneyMovementModule/frmMMTransferAmount", {
            "controllerName": "MoneyMovementModule/frmMMTransferAmountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMTransferFromAccount", "MoneyMovementModule/frmMMTransferFromAccount", {
            "controllerName": "MoneyMovementModule/frmMMTransferFromAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMTransfers", "MoneyMovementModule/frmMMTransfers", {
            "controllerName": "MoneyMovementModule/frmMMTransfersController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMTransferToAccount", "MoneyMovementModule/frmMMTransferToAccount", {
            "controllerName": "MoneyMovementModule/frmMMTransferToAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMMVerifyP2PDetails", "MoneyMovementModule/frmMMVerifyP2PDetails", {
            "controllerName": "MoneyMovementModule/frmMMVerifyP2PDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmRecurringDetails", "MoneyMovementModule/frmRecurringDetails", {
            "controllerName": "MoneyMovementModule/frmRecurringDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransferActivitiesDirectDebits", "MoneyMovementModule/frmTransferActivitiesDirectDebits", {
            "controllerName": "MoneyMovementModule/frmTransferActivitiesDirectDebitsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransferActivitiesRecurring", "MoneyMovementModule/frmTransferActivitiesRecurring", {
            "controllerName": "MoneyMovementModule/frmTransferActivitiesRecurringController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransferActivitiesTransfers", "MoneyMovementModule/frmTransferActivitiesTransfers", {
            "controllerName": "MoneyMovementModule/frmTransferActivitiesTransfersController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransfersDetails", "MoneyMovementModule/frmTransfersDetails", {
            "controllerName": "MoneyMovementModule/frmTransfersDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmNAOAck", "NewAccountOpeningModule/frmNAOAck", {
            "controllerName": "NewAccountOpeningModule/frmNAOAckController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmNAOProductDetails", "NewAccountOpeningModule/frmNAOProductDetails", {
            "controllerName": "NewAccountOpeningModule/frmNAOProductDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmNAOReviewProduct", "NewAccountOpeningModule/frmNAOReviewProduct", {
            "controllerName": "NewAccountOpeningModule/frmNAOReviewProductController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmNAOSelectProduct", "NewAccountOpeningModule/frmNAOSelectProduct", {
            "controllerName": "NewAccountOpeningModule/frmNAOSelectProductController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBAcknowledgement", "NewUserModule/frmOBAcknowledgement", {
            "controllerName": "NewUserModule/frmOBAcknowledgementController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBAddPersonalInfo", "NewUserModule/frmOBAddPersonalInfo", {
            "controllerName": "NewUserModule/frmOBAddPersonalInfoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("NewUserModule/frmOBCountryCode", "NewUserModule/frmOBCountryCode", "NewUserModule/frmOBCountryCodeController");
        kony.mvc.registry.add("frmOBCreditCheck", "NewUserModule/frmOBCreditCheck", {
            "controllerName": "NewUserModule/frmOBCreditCheckController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBDependents", "NewUserModule/frmOBDependents", {
            "controllerName": "NewUserModule/frmOBDependentsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBDOB", "NewUserModule/frmOBDOB", {
            "controllerName": "NewUserModule/frmOBDOBController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBDocumentsNew", "NewUserModule/frmOBDocumentsNew", {
            "controllerName": "NewUserModule/frmOBDocumentsNewController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBEditFirstLastName", "NewUserModule/frmOBEditFirstLastName", {
            "controllerName": "NewUserModule/frmOBEditFirstLastNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBEmail", "NewUserModule/frmOBEmail", {
            "controllerName": "NewUserModule/frmOBEmailController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBEmploymentCurrentPosition", "NewUserModule/frmOBEmploymentCurrentPosition", {
            "controllerName": "NewUserModule/frmOBEmploymentCurrentPositionController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBEmploymentDetails", "NewUserModule/frmOBEmploymentDetails", {
            "controllerName": "NewUserModule/frmOBEmploymentDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBEmploymentType", "NewUserModule/frmOBEmploymentType", {
            "controllerName": "NewUserModule/frmOBEmploymentTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBFailure", "NewUserModule/frmOBFailure", {
            "controllerName": "NewUserModule/frmOBFailureController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBFinancialInfoAnnualIncome", "NewUserModule/frmOBFinancialInfoAnnualIncome", {
            "controllerName": "NewUserModule/frmOBFinancialInfoAnnualIncomeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBFinancialInfoAssets", "NewUserModule/frmOBFinancialInfoAssets", {
            "controllerName": "NewUserModule/frmOBFinancialInfoAssetsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBFinancialInfoExpenditure", "NewUserModule/frmOBFinancialInfoExpenditure", {
            "controllerName": "NewUserModule/frmOBFinancialInfoExpenditureController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBGender", "NewUserModule/frmOBGender", {
            "controllerName": "NewUserModule/frmOBGenderController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBLanding", "NewUserModule/frmOBLanding", {
            "controllerName": "NewUserModule/frmOBLandingController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBLandingNew", "NewUserModule/frmOBLandingNew", {
            "controllerName": "NewUserModule/frmOBLandingNewController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBLandingRegistered", "NewUserModule/frmOBLandingRegistered", {
            "controllerName": "NewUserModule/frmOBLandingRegisteredController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBLogin", "NewUserModule/frmOBLogin", {
            "controllerName": "NewUserModule/frmOBLoginController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBMaritialStatus", "NewUserModule/frmOBMaritialStatus", {
            "controllerName": "NewUserModule/frmOBMaritialStatusController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBMembershipEligibility", "NewUserModule/frmOBMembershipEligibility", {
            "controllerName": "NewUserModule/frmOBMembershipEligibilityController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBPersonalInfo", "NewUserModule/frmOBPersonalInfo", {
            "controllerName": "NewUserModule/frmOBPersonalInfoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBRegularSavings", "NewUserModule/frmOBRegularSavings", {
            "controllerName": "NewUserModule/frmOBRegularSavingsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBResidentialAddress", "NewUserModule/frmOBResidentialAddress", {
            "controllerName": "NewUserModule/frmOBResidentialAddressController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBSecurityCode", "NewUserModule/frmOBSecurityCode", {
            "controllerName": "NewUserModule/frmOBSecurityCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBSecurityQuestionsNew", "NewUserModule/frmOBSecurityQuestionsNew", {
            "controllerName": "NewUserModule/frmOBSecurityQuestionsNewController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBSelectProducts", "NewUserModule/frmOBSelectProducts", {
            "controllerName": "NewUserModule/frmOBSelectProductsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBsetUserNamePwd", "NewUserModule/frmOBsetUserNamePwd", {
            "controllerName": "NewUserModule/frmOBsetUserNamePwdController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBSignature", "NewUserModule/frmOBSignature", {
            "controllerName": "NewUserModule/frmOBSignatureController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBSignInWithPhoneNumber", "NewUserModule/frmOBSignInWithPhoneNumber", {
            "controllerName": "NewUserModule/frmOBSignInWithPhoneNumberController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBSpouseName", "NewUserModule/frmOBSpouseName", {
            "controllerName": "NewUserModule/frmOBSpouseNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOBSuccess", "NewUserModule/frmOBSuccess", {
            "controllerName": "NewUserModule/frmOBSuccessController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTermsAndConditions", "NewUserModule/frmTermsAndConditions", {
            "controllerName": "NewUserModule/frmTermsAndConditionsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageEditRecipient", "PayAPersonModule/frmManageEditRecipient", {
            "controllerName": "PayAPersonModule/frmManageEditRecipientController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageP2pRecipient", "PayAPersonModule/frmManageP2pRecipient", {
            "controllerName": "PayAPersonModule/frmManageP2pRecipientController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageRecipientList", "PayAPersonModule/frmManageRecipientList", {
            "controllerName": "PayAPersonModule/frmManageRecipientListController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageRecipientType", "PayAPersonModule/frmManageRecipientType", {
            "controllerName": "PayAPersonModule/frmManageRecipientTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmP2pAmount", "PayAPersonModule/frmP2pAmount", {
            "controllerName": "PayAPersonModule/frmP2pAmountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmP2pConfirmation", "PayAPersonModule/frmP2pConfirmation", {
            "controllerName": "PayAPersonModule/frmP2pConfirmationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("PayAPersonModule/frmP2PCountryCode", "PayAPersonModule/frmP2PCountryCode", "PayAPersonModule/frmP2PCountryCodeController");
        kony.mvc.registry.add("frmP2pDuration", "PayAPersonModule/frmP2pDuration", {
            "controllerName": "PayAPersonModule/frmP2pDurationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmP2pEndDate", "PayAPersonModule/frmP2pEndDate", {
            "controllerName": "PayAPersonModule/frmP2pEndDateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmP2pFrequency", "PayAPersonModule/frmP2pFrequency", {
            "controllerName": "PayAPersonModule/frmP2pFrequencyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmP2pFromAccount", "PayAPersonModule/frmP2pFromAccount", {
            "controllerName": "PayAPersonModule/frmP2pFromAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmP2PPickContact", "PayAPersonModule/frmP2PPickContact", {
            "controllerName": "PayAPersonModule/frmP2PPickContactController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmP2PRecEmail", "PayAPersonModule/frmP2PRecEmail", {
            "controllerName": "PayAPersonModule/frmP2PRecEmailController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmP2PRecipientName", "PayAPersonModule/frmP2PRecipientName", {
            "controllerName": "PayAPersonModule/frmP2PRecipientNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmP2PRecPhoneNo", "PayAPersonModule/frmP2PRecPhoneNo", {
            "controllerName": "PayAPersonModule/frmP2PRecPhoneNoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmP2pRecurrence", "PayAPersonModule/frmP2pRecurrence", {
            "controllerName": "PayAPersonModule/frmP2pRecurrenceController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmP2pSelectRecipient", "PayAPersonModule/frmP2pSelectRecipient", {
            "controllerName": "PayAPersonModule/frmP2pSelectRecipientController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmP2pStartDate", "PayAPersonModule/frmP2pStartDate", {
            "controllerName": "PayAPersonModule/frmP2pStartDateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmP2PVerifyDetails", "PayAPersonModule/frmP2PVerifyDetails", {
            "controllerName": "PayAPersonModule/frmP2PVerifyDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmRegP2PContactType", "PayAPersonModule/frmRegP2PContactType", {
            "controllerName": "PayAPersonModule/frmRegP2PContactTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBudgetAcknowledgement", "SavingsPotModule/frmBudgetAcknowledgement", {
            "controllerName": "SavingsPotModule/frmBudgetAcknowledgementController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBudgetfundAmount", "SavingsPotModule/frmBudgetfundAmount", {
            "controllerName": "SavingsPotModule/frmBudgetfundAmountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBudgetInitiateTransferAck", "SavingsPotModule/frmBudgetInitiateTransferAck", {
            "controllerName": "SavingsPotModule/frmBudgetInitiateTransferAckController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBudgetInitiateTransferDetails", "SavingsPotModule/frmBudgetInitiateTransferDetails", {
            "controllerName": "SavingsPotModule/frmBudgetInitiateTransferDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBudgetName", "SavingsPotModule/frmBudgetName", {
            "controllerName": "SavingsPotModule/frmBudgetNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBudgetPotDetails", "SavingsPotModule/frmBudgetPotDetails", {
            "controllerName": "SavingsPotModule/frmBudgetPotDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCreateBudgetVerifyDetails", "SavingsPotModule/frmCreateBudgetVerifyDetails", {
            "controllerName": "SavingsPotModule/frmCreateBudgetVerifyDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCreateGoalAckError", "SavingsPotModule/frmCreateGoalAckError", {
            "controllerName": "SavingsPotModule/frmCreateGoalAckErrorController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCreateGoalMonths", "SavingsPotModule/frmCreateGoalMonths", {
            "controllerName": "SavingsPotModule/frmCreateGoalMonthsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCreateGoalVerifyDetails", "SavingsPotModule/frmCreateGoalVerifyDetails", {
            "controllerName": "SavingsPotModule/frmCreateGoalVerifyDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCreateSavingsGoalFrequency", "SavingsPotModule/frmCreateSavingsGoalFrequency", {
            "controllerName": "SavingsPotModule/frmCreateSavingsGoalFrequencyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCreateSavingsGoalFrequencyDate", "SavingsPotModule/frmCreateSavingsGoalFrequencyDate", {
            "controllerName": "SavingsPotModule/frmCreateSavingsGoalFrequencyDateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmEditBudget", "SavingsPotModule/frmEditBudget", "SavingsPotModule/frmEditBudgetController");
        kony.mvc.registry.add("frmEditBudgetAcknowledgement", "SavingsPotModule/frmEditBudgetAcknowledgement", "SavingsPotModule/frmEditBudgetAcknowledgementController");
        kony.mvc.registry.add("frmEditGoalsAcknowledgement", "SavingsPotModule/frmEditGoalsAcknowledgement", "SavingsPotModule/frmEditGoalsAcknowledgementController");
        kony.mvc.registry.add("frmEditGoalsType", "SavingsPotModule/frmEditGoalsType", "SavingsPotModule/frmEditGoalsTypeController");
        kony.mvc.registry.add("frmEditMonthlyFrequencyDay", "SavingsPotModule/frmEditMonthlyFrequencyDay", "SavingsPotModule/frmEditMonthlyFrequencyDayController");
        kony.mvc.registry.add("frmEditOptimizeGoal", "SavingsPotModule/frmEditOptimizeGoal", "SavingsPotModule/frmEditOptimizeGoalController");
        kony.mvc.registry.add("frmEditSavingsGoal", "SavingsPotModule/frmEditSavingsGoal", {
            "controllerName": "SavingsPotModule/frmEditSavingsGoalController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmEditWeeklyFrequencyDay", "SavingsPotModule/frmEditWeeklyFrequencyDay", "SavingsPotModule/frmEditWeeklyFrequencyDayController");
        kony.mvc.registry.add("frmGoalAmount", "SavingsPotModule/frmGoalAmount", "SavingsPotModule/frmGoalAmountController");
        kony.mvc.registry.add("frmGoalCloseAck", "SavingsPotModule/frmGoalCloseAck", "SavingsPotModule/frmGoalCloseAckController");
        kony.mvc.registry.add("frmGoalFundAck", "SavingsPotModule/frmGoalFundAck", {
            "controllerName": "SavingsPotModule/frmGoalFundAckController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmGoalfundAmount", "SavingsPotModule/frmGoalfundAmount", {
            "controllerName": "SavingsPotModule/frmGoalfundAmountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmGoalfundverifyDetails", "SavingsPotModule/frmGoalfundverifyDetails", {
            "controllerName": "SavingsPotModule/frmGoalfundverifyDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmGoalName", "SavingsPotModule/frmGoalName", "SavingsPotModule/frmGoalNameController");
        kony.mvc.registry.add("frmGoalsAcknowledgement", "SavingsPotModule/frmGoalsAcknowledgement", {
            "controllerName": "SavingsPotModule/frmGoalsAcknowledgementController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmGoalsType", "SavingsPotModule/frmGoalsType", {
            "controllerName": "SavingsPotModule/frmGoalsTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmMySavingsPot", "SavingsPotModule/frmMySavingsPot", "SavingsPotModule/frmMySavingsPotController");
        kony.mvc.registry.add("frmOptimizeGoal", "SavingsPotModule/frmOptimizeGoal", {
            "controllerName": "SavingsPotModule/frmOptimizeGoalController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSavingsGoalViewDetails", "SavingsPotModule/frmSavingsGoalViewDetails", {
            "controllerName": "SavingsPotModule/frmSavingsGoalViewDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSavingsType", "SavingsPotModule/frmSavingsType", {
            "controllerName": "SavingsPotModule/frmSavingsTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTermsAndConditionCheck", "SavingsPotModule/frmTermsAndConditionCheck", "SavingsPotModule/frmTermsAndConditionCheckController");
        kony.mvc.registry.add("frmTermsConditions", "SavingsPotModule/frmTermsConditions", "SavingsPotModule/frmTermsConditionsController");
        kony.mvc.registry.add("frmWithdrawAck", "SavingsPotModule/frmWithdrawAck", {
            "controllerName": "SavingsPotModule/frmWithdrawAckController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmWithdrawAmount", "SavingsPotModule/frmWithdrawAmount", {
            "controllerName": "SavingsPotModule/frmWithdrawAmountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmWithdrawVerifyDetails", "SavingsPotModule/frmWithdrawVerifyDetails", {
            "controllerName": "SavingsPotModule/frmWithdrawVerifyDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSecurityNotification", "SecurityNotificationModule/frmSecurityNotification", "SecurityNotificationModule/frmSecurityNotificationController");
        kony.mvc.registry.add("SettingsModule/frmAccountAlertsDetails", "SettingsModule/frmAccountAlertsDetails", {
            "controllerName": "SettingsModule/frmAccountAlertsDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("SettingsModule/frmAccountAlertsList", "SettingsModule/frmAccountAlertsList", {
            "controllerName": "SettingsModule/frmAccountAlertsListController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("SettingsModule/frmAccountMinimumBalance", "SettingsModule/frmAccountMinimumBalance", {
            "controllerName": "SettingsModule/frmAccountMinimumBalanceController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("SettingsModule/frmAlertFrequency", "SettingsModule/frmAlertFrequency", {
            "controllerName": "SettingsModule/frmAlertFrequencyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAlertGroupsList", "SettingsModule/frmAlertGroupsList", {
            "controllerName": "SettingsModule/frmAlertGroupsListController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAlertsAccountDetail", "SettingsModule/frmAlertsAccountDetail", {
            "controllerName": "SettingsModule/frmAlertsAccountDetailController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAlertsAccountPref", "SettingsModule/frmAlertsAccountPref", "SettingsModule/frmAlertsAccountPrefController");
        kony.mvc.registry.add("frmAlertsBalanceUpdate", "SettingsModule/frmAlertsBalanceUpdate", {
            "controllerName": "SettingsModule/frmAlertsBalanceUpdateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAlertsCommunication", "SettingsModule/frmAlertsCommunication", {
            "controllerName": "SettingsModule/frmAlertsCommunicationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAlertsCommunicationEdit", "SettingsModule/frmAlertsCommunicationEdit", {
            "controllerName": "SettingsModule/frmAlertsCommunicationEditController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAlertsDaySelection", "SettingsModule/frmAlertsDaySelection", {
            "controllerName": "SettingsModule/frmAlertsDaySelectionController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAlertsDealsAndSecurity", "SettingsModule/frmAlertsDealsAndSecurity", {
            "controllerName": "SettingsModule/frmAlertsDealsAndSecurityController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAlertsEditPreferences", "SettingsModule/frmAlertsEditPreferences", {
            "controllerName": "SettingsModule/frmAlertsEditPreferencesController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAlertsFrequencySelection", "SettingsModule/frmAlertsFrequencySelection", {
            "controllerName": "SettingsModule/frmAlertsFrequencySelectionController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAlertsList", "SettingsModule/frmAlertsList", {
            "controllerName": "SettingsModule/frmAlertsListController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAlertsMinimumBalance", "SettingsModule/frmAlertsMinimumBalance", {
            "controllerName": "SettingsModule/frmAlertsMinimumBalanceController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAlertsTimeSelection", "SettingsModule/frmAlertsTimeSelection", {
            "controllerName": "SettingsModule/frmAlertsTimeSelectionController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmChangePassword", "SettingsModule/frmChangePassword", {
            "controllerName": "SettingsModule/frmChangePasswordController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmChangePin", "SettingsModule/frmChangePin", "SettingsModule/frmChangePinController");
        kony.mvc.registry.add("SettingsModule/frmConsentManagement", "SettingsModule/frmConsentManagement", {
            "controllerName": "SettingsModule/frmConsentManagementController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCreatePassword", "SettingsModule/frmCreatePassword", {
            "controllerName": "SettingsModule/frmCreatePasswordController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("SettingsModule/frmDealAlertsList", "SettingsModule/frmDealAlertsList", {
            "controllerName": "SettingsModule/frmDealAlertsListController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDeviceManagement", "SettingsModule/frmDeviceManagement", "SettingsModule/frmDeviceManagementController");
        kony.mvc.registry.add("frmEBankingAccess", "SettingsModule/frmEBankingAccess", "SettingsModule/frmEBankingAccessController");
        kony.mvc.registry.add("frmOfflineSigning", "SettingsModule/frmOfflineSigning", {
            "controllerName": "SettingsModule/frmOfflineSigningController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPreferencesAccountPreview", "SettingsModule/frmPreferencesAccountPreview", {
            "controllerName": "SettingsModule/frmPreferencesAccountPreviewController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPreferencesDefaultAccount", "SettingsModule/frmPreferencesDefaultAccount", {
            "controllerName": "SettingsModule/frmPreferencesDefaultAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPreferencesDefaultLogin", "SettingsModule/frmPreferencesDefaultLogin", {
            "controllerName": "SettingsModule/frmPreferencesDefaultLoginController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPreferencesDeviceDeRegistration", "SettingsModule/frmPreferencesDeviceDeRegistration", {
            "controllerName": "SettingsModule/frmPreferencesDeviceDeRegistrationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPreferencesDeviceRegistration", "SettingsModule/frmPreferencesDeviceRegistration", {
            "controllerName": "SettingsModule/frmPreferencesDeviceRegistrationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPreferencesDeviceRegSecCode", "SettingsModule/frmPreferencesDeviceRegSecCode", {
            "controllerName": "SettingsModule/frmPreferencesDeviceRegSecCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPreferencesFaceId", "SettingsModule/frmPreferencesFaceId", {
            "controllerName": "SettingsModule/frmPreferencesFaceIdController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPreferencesPin", "SettingsModule/frmPreferencesPin", {
            "controllerName": "SettingsModule/frmPreferencesPinController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPreferencesResetStep1", "SettingsModule/frmPreferencesResetStep1", {
            "controllerName": "SettingsModule/frmPreferencesResetStep1Controller",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPreferencesResetStep2", "SettingsModule/frmPreferencesResetStep2", {
            "controllerName": "SettingsModule/frmPreferencesResetStep2Controller",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPreferencesResetStep3", "SettingsModule/frmPreferencesResetStep3", {
            "controllerName": "SettingsModule/frmPreferencesResetStep3Controller",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPreferencesTouchId", "SettingsModule/frmPreferencesTouchId", {
            "controllerName": "SettingsModule/frmPreferencesTouchIdController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileAddAddress", "SettingsModule/frmProfileAddAddress", {
            "controllerName": "SettingsModule/frmProfileAddAddressController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileAdressType", "SettingsModule/frmProfileAdressType", {
            "controllerName": "SettingsModule/frmProfileAdressTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileChangeAndUpdatePassword", "SettingsModule/frmProfileChangeAndUpdatePassword", {
            "controllerName": "SettingsModule/frmProfileChangeAndUpdatePasswordController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileChangePassword", "SettingsModule/frmProfileChangePassword", {
            "controllerName": "SettingsModule/frmProfileChangePasswordController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileChangeUsername", "SettingsModule/frmProfileChangeUsername", {
            "controllerName": "SettingsModule/frmProfileChangeUsernameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileConfirmAddressDetails", "SettingsModule/frmProfileConfirmAddressDetails", {
            "controllerName": "SettingsModule/frmProfileConfirmAddressDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileConfirmDetails", "SettingsModule/frmProfileConfirmDetails", {
            "controllerName": "SettingsModule/frmProfileConfirmDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileContactType", "SettingsModule/frmProfileContactType", {
            "controllerName": "SettingsModule/frmProfileContactTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileEditAddress", "SettingsModule/frmProfileEditAddress", {
            "controllerName": "SettingsModule/frmProfileEditAddressController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileEditAddressList", "SettingsModule/frmProfileEditAddressList", {
            "controllerName": "SettingsModule/frmProfileEditAddressListController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileEditEmails", "SettingsModule/frmProfileEditEmails", {
            "controllerName": "SettingsModule/frmProfileEditEmailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileEditPhoneNumberMain", "SettingsModule/frmProfileEditPhoneNumberMain", {
            "controllerName": "SettingsModule/frmProfileEditPhoneNumberMainController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileEditPhoneNumbers", "SettingsModule/frmProfileEditPhoneNumbers", {
            "controllerName": "SettingsModule/frmProfileEditPhoneNumbersController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileEnterEmailID", "SettingsModule/frmProfileEnterEmailID", {
            "controllerName": "SettingsModule/frmProfileEnterEmailIDController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileEnterPhoneNumber", "SettingsModule/frmProfileEnterPhoneNumber", {
            "controllerName": "SettingsModule/frmProfileEnterPhoneNumberController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfilePersonalDetails", "SettingsModule/frmProfilePersonalDetails", {
            "controllerName": "SettingsModule/frmProfilePersonalDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileSecurityCode", "SettingsModule/frmProfileSecurityCode", {
            "controllerName": "SettingsModule/frmProfileSecurityCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileSelectLocation", "SettingsModule/frmProfileSelectLocation", {
            "controllerName": "SettingsModule/frmProfileSelectLocationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmProfileUsername", "SettingsModule/frmProfileUsername", {
            "controllerName": "SettingsModule/frmProfileUsernameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("SettingsModule/frmSecurityAlertsSetting", "SettingsModule/frmSecurityAlertsSetting", {
            "controllerName": "SettingsModule/frmSecurityAlertsSettingController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("SettingsModule/frmSelectTPP", "SettingsModule/frmSelectTPP", {
            "controllerName": "SettingsModule/frmSelectTPPController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSettings", "SettingsModule/frmSettings", {
            "controllerName": "SettingsModule/frmSettingsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("SettingsModule/frmSettingsChangeLanguage", "SettingsModule/frmSettingsChangeLanguage", {
            "controllerName": "SettingsModule/frmSettingsChangeLanguageController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("SettingsModule/frmSettingsCountryCode", "SettingsModule/frmSettingsCountryCode", "SettingsModule/frmSettingsCountryCodeController");
        kony.mvc.registry.add("SettingsModule/frmTppAccountDetails", "SettingsModule/frmTppAccountDetails", {
            "controllerName": "SettingsModule/frmTppAccountDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("SettingsModule/frmTppBankNameSelection", "SettingsModule/frmTppBankNameSelection", {
            "controllerName": "SettingsModule/frmTppBankNameSelectionController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTermsAndCondition", "TermsAndConditionsModule/frmTermsAndCondition", {
            "controllerName": "TermsAndConditionsModule/frmTermsAndConditionController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAdvanceSearch", "TransactionModule/frmAdvanceSearch", {
            "controllerName": "TransactionModule/frmAdvanceSearchController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDownloadSearchResult", "TransactionModule/frmDownloadSearchResult", "TransactionModule/frmDownloadSearchResultController");
        kony.mvc.registry.add("frmTransfers", "TransactionModule/frmTransfers", {
            "controllerName": "TransactionModule/frmTransfersController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransfersEurope", "TransactionModule/frmTransfersEurope", "TransactionModule/frmTransfersEuropeController");
        kony.mvc.registry.add("frmAddBenRoutNo", "TransferModule/frmAddBenRoutNo", {
            "controllerName": "TransferModule/frmAddBenRoutNoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBenAccountType", "TransferModule/frmBenAccountType", {
            "controllerName": "TransferModule/frmBenAccountTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBenAccountTypeSelect", "TransferModule/frmBenAccountTypeSelect", "TransferModule/frmBenAccountTypeSelectController");
        kony.mvc.registry.add("frmBenCountry", "TransferModule/frmBenCountry", {
            "controllerName": "TransferModule/frmBenCountryController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBenName", "TransferModule/frmBenName", {
            "controllerName": "TransferModule/frmBenNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBenSwiftCode", "TransferModule/frmBenSwiftCode", {
            "controllerName": "TransferModule/frmBenSwiftCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmBenVerifyDetails", "TransferModule/frmBenVerifyDetails", {
            "controllerName": "TransferModule/frmBenVerifyDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmEnterBenAccNo", "TransferModule/frmEnterBenAccNo", {
            "controllerName": "TransferModule/frmEnterBenAccNoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmEnterBenAccNumorIBAN", "TransferModule/frmEnterBenAccNumorIBAN", {
            "controllerName": "TransferModule/frmEnterBenAccNumorIBANController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageTransferRecipient", "TransferModule/frmManageTransferRecipient", {
            "controllerName": "TransferModule/frmManageTransferRecipientController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmManageTransferRecipientInfo", "TransferModule/frmManageTransferRecipientInfo", {
            "controllerName": "TransferModule/frmManageTransferRecipientInfoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmReEnterBenAccNo", "TransferModule/frmReEnterBenAccNo", {
            "controllerName": "TransferModule/frmReEnterBenAccNoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmReEnterBenAccNumorIBAN", "TransferModule/frmReEnterBenAccNumorIBAN", {
            "controllerName": "TransferModule/frmReEnterBenAccNumorIBANController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransactionMode", "TransferModule/frmTransactionMode", {
            "controllerName": "TransferModule/frmTransactionModeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransferAcknowledgement", "TransferModule/frmTransferAcknowledgement", "TransferModule/frmTransferAcknowledgementController");
        kony.mvc.registry.add("frmTransferAmount", "TransferModule/frmTransferAmount", {
            "controllerName": "TransferModule/frmTransferAmountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransferConfirmation", "TransferModule/frmTransferConfirmation", {
            "controllerName": "TransferModule/frmTransferConfirmationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransferFrequency", "TransferModule/frmTransferFrequency", {
            "controllerName": "TransferModule/frmTransferFrequencyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransfersDuration", "TransferModule/frmTransfersDuration", {
            "controllerName": "TransferModule/frmTransfersDurationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransfersEndDate", "TransferModule/frmTransfersEndDate", {
            "controllerName": "TransferModule/frmTransfersEndDateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransfersFromAccount", "TransferModule/frmTransfersFromAccount", {
            "controllerName": "TransferModule/frmTransfersFromAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransfersRecurrence", "TransferModule/frmTransfersRecurrence", {
            "controllerName": "TransferModule/frmTransfersRecurrenceController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransfersStartDate", "TransferModule/frmTransfersStartDate", {
            "controllerName": "TransferModule/frmTransfersStartDateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransfersToAccount", "TransferModule/frmTransfersToAccount", {
            "controllerName": "TransferModule/frmTransfersToAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferAccountCountry", "TransferModule/frmWireTransferAccountCountry", {
            "controllerName": "TransferModule/frmWireTransferAccountCountryController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferAccountNo", "TransferModule/frmWireTransferAccountNo", {
            "controllerName": "TransferModule/frmWireTransferAccountNoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferAccountType", "TransferModule/frmWireTransferAccountType", {
            "controllerName": "TransferModule/frmWireTransferAccountTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferActivate", "TransferModule/frmWireTransferActivate", {
            "controllerName": "TransferModule/frmWireTransferActivateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferAmount", "TransferModule/frmWireTransferAmount", {
            "controllerName": "TransferModule/frmWireTransferAmountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferBankAddress", "TransferModule/frmWireTransferBankAddress", {
            "controllerName": "TransferModule/frmWireTransferBankAddressController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferConfirmation", "TransferModule/frmWireTransferConfirmation", {
            "controllerName": "TransferModule/frmWireTransferConfirmationController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferCurrency", "TransferModule/frmWireTransferCurrency", {
            "controllerName": "TransferModule/frmWireTransferCurrencyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferEnterAddress", "TransferModule/frmWireTransferEnterAddress", {
            "controllerName": "TransferModule/frmWireTransferEnterAddressController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferFirstAdLastName", "TransferModule/frmWireTransferFirstAdLastName", {
            "controllerName": "TransferModule/frmWireTransferFirstAdLastNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferFromAccount", "TransferModule/frmWireTransferFromAccount", {
            "controllerName": "TransferModule/frmWireTransferFromAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferInternationalRoutingNo", "TransferModule/frmWireTransferInternationalRoutingNo", {
            "controllerName": "TransferModule/frmWireTransferInternationalRoutingNoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferNickName", "TransferModule/frmWireTransferNickName", {
            "controllerName": "TransferModule/frmWireTransferNickNameController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferNoRecipient", "TransferModule/frmWireTransferNoRecipient", {
            "controllerName": "TransferModule/frmWireTransferNoRecipientController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferRecipientInfo", "TransferModule/frmWireTransferRecipientInfo", {
            "controllerName": "TransferModule/frmWireTransferRecipientInfoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferRecipientList", "TransferModule/frmWireTransferRecipientList", {
            "controllerName": "TransferModule/frmWireTransferRecipientListController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferReEnterAccountNo", "TransferModule/frmWireTransferReEnterAccountNo", {
            "controllerName": "TransferModule/frmWireTransferReEnterAccountNoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferRoutingNo", "TransferModule/frmWireTransferRoutingNo", {
            "controllerName": "TransferModule/frmWireTransferRoutingNoController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferSwiftCode", "TransferModule/frmWireTransferSwiftCode", {
            "controllerName": "TransferModule/frmWireTransferSwiftCodeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferToAccount", "TransferModule/frmWireTransferToAccount", {
            "controllerName": "TransferModule/frmWireTransferToAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("TransferModule/frmWireTransferVerifyDetails", "TransferModule/frmWireTransferVerifyDetails", {
            "controllerName": "TransferModule/frmWireTransferVerifyDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmAttachments", "TransferModuleEurope/frmAttachments", "TransferModuleEurope/frmAttachmentsController");
        kony.mvc.registry.add("frmBenAddressEurope", "TransferModuleEurope/frmBenAddressEurope", "TransferModuleEurope/frmBenAddressEuropeController");
        kony.mvc.registry.add("frmBenCountryEurope", "TransferModuleEurope/frmBenCountryEurope", "TransferModuleEurope/frmBenCountryEuropeController");
        kony.mvc.registry.add("frmBeneficiaryDetailsEurope", "TransferModuleEurope/frmBeneficiaryDetailsEurope", "TransferModuleEurope/frmBeneficiaryDetailsEuropeController");
        kony.mvc.registry.add("frmBenEmailAddressEurope", "TransferModuleEurope/frmBenEmailAddressEurope", "TransferModuleEurope/frmBenEmailAddressEuropeController");
        kony.mvc.registry.add("frmBenNameEurope", "TransferModuleEurope/frmBenNameEurope", "TransferModuleEurope/frmBenNameEuropeController");
        kony.mvc.registry.add("frmBenSwiftCodeEurope", "TransferModuleEurope/frmBenSwiftCodeEurope", "TransferModuleEurope/frmBenSwiftCodeEuropeController");
        kony.mvc.registry.add("frmBenVerifyDetailsEurope", "TransferModuleEurope/frmBenVerifyDetailsEurope", "TransferModuleEurope/frmBenVerifyDetailsEuropeController");
        kony.mvc.registry.add("TransferModuleEurope/frmChargesBreakdownEurope", "TransferModuleEurope/frmChargesBreakdownEurope", "TransferModuleEurope/frmChargesBreakdownEuropeController");
        kony.mvc.registry.add("TransferModuleEurope/frmDirectDebitsDetailsEurope", "TransferModuleEurope/frmDirectDebitsDetailsEurope", "TransferModuleEurope/frmDirectDebitsDetailsEuropeController");
        kony.mvc.registry.add("frmEnterBenAccNoEurope", "TransferModuleEurope/frmEnterBenAccNoEurope", "TransferModuleEurope/frmEnterBenAccNoEuropeController");
        kony.mvc.registry.add("frmEuropeAcknowledgement", "TransferModuleEurope/frmEuropeAcknowledgement", "TransferModuleEurope/frmEuropeAcknowledgementController");
        kony.mvc.registry.add("frmEuropeConfirmation", "TransferModuleEurope/frmEuropeConfirmation", "TransferModuleEurope/frmEuropeConfirmationController");
        kony.mvc.registry.add("frmEuropeCreditCardDetails", "TransferModuleEurope/frmEuropeCreditCardDetails", "TransferModuleEurope/frmEuropeCreditCardDetailsController");
        kony.mvc.registry.add("frmEuropeDuration", "TransferModuleEurope/frmEuropeDuration", "TransferModuleEurope/frmEuropeDurationController");
        kony.mvc.registry.add("frmEuropeEndDate", "TransferModuleEurope/frmEuropeEndDate", "TransferModuleEurope/frmEuropeEndDateController");
        kony.mvc.registry.add("frmEuropeFeePayment", "TransferModuleEurope/frmEuropeFeePayment", "TransferModuleEurope/frmEuropeFeePaymentController");
        kony.mvc.registry.add("frmEuropeFrequency", "TransferModuleEurope/frmEuropeFrequency", "TransferModuleEurope/frmEuropeFrequencyController");
        kony.mvc.registry.add("frmEuropeManageBeneficiaries", "TransferModuleEurope/frmEuropeManageBeneficiaries", "TransferModuleEurope/frmEuropeManageBeneficiariesController");
        kony.mvc.registry.add("frmEuropeNumberOfTransfers", "TransferModuleEurope/frmEuropeNumberOfTransfers", "TransferModuleEurope/frmEuropeNumberOfTransfersController");
        kony.mvc.registry.add("frmEuropePaymentMedium", "TransferModuleEurope/frmEuropePaymentMedium", "TransferModuleEurope/frmEuropePaymentMediumController");
        kony.mvc.registry.add("frmEuropeSelectCurrency", "TransferModuleEurope/frmEuropeSelectCurrency", "TransferModuleEurope/frmEuropeSelectCurrencyController");
        kony.mvc.registry.add("frmEuropeStartDate", "TransferModuleEurope/frmEuropeStartDate", "TransferModuleEurope/frmEuropeStartDateController");
        kony.mvc.registry.add("frmEuropeTransactionDetails", "TransferModuleEurope/frmEuropeTransactionDetails", "TransferModuleEurope/frmEuropeTransactionDetailsController");
        kony.mvc.registry.add("frmEuropeTransferAmount", "TransferModuleEurope/frmEuropeTransferAmount", "TransferModuleEurope/frmEuropeTransferAmountController");
        kony.mvc.registry.add("frmEuropeTransferFromAccount", "TransferModuleEurope/frmEuropeTransferFromAccount", "TransferModuleEurope/frmEuropeTransferFromAccountController");
        kony.mvc.registry.add("frmEuropeTransferReference", "TransferModuleEurope/frmEuropeTransferReference", "TransferModuleEurope/frmEuropeTransferReferenceController");
        kony.mvc.registry.add("frmEuropeTransferToAccount", "TransferModuleEurope/frmEuropeTransferToAccount", "TransferModuleEurope/frmEuropeTransferToAccountController");
        kony.mvc.registry.add("TransferModuleEurope/frmEuropeTransferToAccountNewBen", "TransferModuleEurope/frmEuropeTransferToAccountNewBen", "TransferModuleEurope/frmEuropeTransferToAccountNewBenController");
        kony.mvc.registry.add("frmEuropeTransferToAccountNewBenName", "TransferModuleEurope/frmEuropeTransferToAccountNewBenName", "TransferModuleEurope/frmEuropeTransferToAccountNewBenNameController");
        kony.mvc.registry.add("frmEuropeTransferToAccountSM", "TransferModuleEurope/frmEuropeTransferToAccountSM", "TransferModuleEurope/frmEuropeTransferToAccountSMController");
        kony.mvc.registry.add("frmEuropeVerifyTransferDetails", "TransferModuleEurope/frmEuropeVerifyTransferDetails", "TransferModuleEurope/frmEuropeVerifyTransferDetailsController");
        kony.mvc.registry.add("TransferModuleEurope/frmLookUpResults", "TransferModuleEurope/frmLookUpResults", "TransferModuleEurope/frmLookUpResultsController");
        kony.mvc.registry.add("frmManageEditRecipientEurope", "TransferModuleEurope/frmManageEditRecipientEurope", "TransferModuleEurope/frmManageEditRecipientEuropeController");
        kony.mvc.registry.add("frmManageRecipientTypeEurope", "TransferModuleEurope/frmManageRecipientTypeEurope", "TransferModuleEurope/frmManageRecipientTypeEuropeController");
        kony.mvc.registry.add("frmManageTransferRecipientEurope", "TransferModuleEurope/frmManageTransferRecipientEurope", "TransferModuleEurope/frmManageTransferRecipientEuropeController");
        kony.mvc.registry.add("frmManageTransferRecipientInfoEurope", "TransferModuleEurope/frmManageTransferRecipientInfoEurope", "TransferModuleEurope/frmManageTransferRecipientInfoEuropeController");
        kony.mvc.registry.add("TransferModuleEurope/frmRecurringDetailsEurope", "TransferModuleEurope/frmRecurringDetailsEurope", "TransferModuleEurope/frmRecurringDetailsEuropeController");
        kony.mvc.registry.add("frmTransactionModeEurope", "TransferModuleEurope/frmTransactionModeEurope", "TransferModuleEurope/frmTransactionModeEuropeController");
        kony.mvc.registry.add("frmTransferActivitiesDirectDebitsEurope", "TransferModuleEurope/frmTransferActivitiesDirectDebitsEurope", "TransferModuleEurope/frmTransferActivitiesDirectDebitsEuropeController");
        kony.mvc.registry.add("frmTransferActivitiesRecurringEurope", "TransferModuleEurope/frmTransferActivitiesRecurringEurope", "TransferModuleEurope/frmTransferActivitiesRecurringEuropeController");
        kony.mvc.registry.add("frmTransferActivitiesTransfersEurope", "TransferModuleEurope/frmTransferActivitiesTransfersEurope", "TransferModuleEurope/frmTransferActivitiesTransfersEuropeController");
        kony.mvc.registry.add("frmTransferAmountEurope", "TransferModuleEurope/frmTransferAmountEurope", "TransferModuleEurope/frmTransferAmountEuropeController");
        kony.mvc.registry.add("frmTransferEuropeSearchSwiftCode", "TransferModuleEurope/frmTransferEuropeSearchSwiftCode", "TransferModuleEurope/frmTransferEuropeSearchSwiftCodeController");
        kony.mvc.registry.add("frmTransferFrequencyEurope", "TransferModuleEurope/frmTransferFrequencyEurope", "TransferModuleEurope/frmTransferFrequencyEuropeController");
        kony.mvc.registry.add("frmtransfersAccountNumberEurope", "TransferModuleEurope/frmtransfersAccountNumberEurope", "TransferModuleEurope/frmtransfersAccountNumberEuropeController");
        kony.mvc.registry.add("TransferModuleEurope/frmTransfersDetailsEurope", "TransferModuleEurope/frmTransfersDetailsEurope", "TransferModuleEurope/frmTransfersDetailsEuropeController");
        kony.mvc.registry.add("frmTransfersFromAccountEurope", "TransferModuleEurope/frmTransfersFromAccountEurope", "TransferModuleEurope/frmTransfersFromAccountEuropeController");
        kony.mvc.registry.add("frmtransfersIBANEurope", "TransferModuleEurope/frmtransfersIBANEurope", "TransferModuleEurope/frmtransfersIBANEuropeController");
        kony.mvc.registry.add("frmTransfersManageRecipientList", "TransferModuleEurope/frmTransfersManageRecipientList", "TransferModuleEurope/frmTransfersManageRecipientListController");
        kony.mvc.registry.add("frmTransfersPaymentMedium", "TransferModuleEurope/frmTransfersPaymentMedium", "TransferModuleEurope/frmTransfersPaymentMediumController");
        kony.mvc.registry.add("frmTransfersPhoneNumberEurope", "TransferModuleEurope/frmTransfersPhoneNumberEurope", "TransferModuleEurope/frmTransfersPhoneNumberEuropeController");
        kony.mvc.registry.add("frmTransfersRecipientNameEurope", "TransferModuleEurope/frmTransfersRecipientNameEurope", "TransferModuleEurope/frmTransfersRecipientNameEuropeController");
        kony.mvc.registry.add("frmTransfersSwiftCodeEurope", "TransferModuleEurope/frmTransfersSwiftCodeEurope", "TransferModuleEurope/frmTransfersSwiftCodeEuropeController");
        kony.mvc.registry.add("frmTransfersToAccountDBXEurope", "TransferModuleEurope/frmTransfersToAccountDBXEurope", "TransferModuleEurope/frmTransfersToAccountDBXEuropeController");
        kony.mvc.registry.add("frmTransfersToAccountEurope", "TransferModuleEurope/frmTransfersToAccountEurope", "TransferModuleEurope/frmTransfersToAccountEuropeController");
        kony.mvc.registry.add("frmTransfersToRecipientList", "TransferModuleEurope/frmTransfersToRecipientList", "TransferModuleEurope/frmTransfersToRecipientListController");
        kony.mvc.registry.add("frmTransferToAccountInterEurope", "TransferModuleEurope/frmTransferToAccountInterEurope", "TransferModuleEurope/frmTransferToAccountInterEuropeController");
        kony.mvc.registry.add("UnifiedTransferFlow/flxDomesticAcknowledgement", "UnifiedTransferFlow/flxDomesticAcknowledgement", "UnifiedTransferFlow/flxDomesticAcknowledgementController");
        kony.mvc.registry.add("UnifiedTransferFlow/flxDomesticNewAccountAck", "UnifiedTransferFlow/flxDomesticNewAccountAck", "UnifiedTransferFlow/flxDomesticNewAccountAckController");
        kony.mvc.registry.add("UnifiedTransferFlow/flxInternationalAcknowledgement", "UnifiedTransferFlow/flxInternationalAcknowledgement", "UnifiedTransferFlow/flxInternationalAcknowledgementController");
        kony.mvc.registry.add("UnifiedTransferFlow/flxInternationalNewAccountAck", "UnifiedTransferFlow/flxInternationalNewAccountAck", "UnifiedTransferFlow/flxInternationalNewAccountAckController");
        kony.mvc.registry.add("UnifiedTransferFlow/flxSameBankAcknowledgement", "UnifiedTransferFlow/flxSameBankAcknowledgement", "UnifiedTransferFlow/flxSameBankAcknowledgementController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmDomesticAddAccount", "UnifiedTransferFlow/frmDomesticAddAccount", "UnifiedTransferFlow/frmDomesticAddAccountController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmDomesticTransfer", "UnifiedTransferFlow/frmDomesticTransfer", "UnifiedTransferFlow/frmDomesticTransferController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmInternationalAddAccount", "UnifiedTransferFlow/frmInternationalAddAccount", "UnifiedTransferFlow/frmInternationalAddAccountController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmInternationalTransfer", "UnifiedTransferFlow/frmInternationalTransfer", "UnifiedTransferFlow/frmInternationalTransferController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmMFAValidation", "UnifiedTransferFlow/frmMFAValidation", "UnifiedTransferFlow/frmMFAValidationController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmNewPayee", "UnifiedTransferFlow/frmNewPayee", "UnifiedTransferFlow/frmNewPayeeController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmP2PAcknowledgement", "UnifiedTransferFlow/frmP2PAcknowledgement", "UnifiedTransferFlow/frmP2PAcknowledgementController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmP2PAddAccount", "UnifiedTransferFlow/frmP2PAddAccount", "UnifiedTransferFlow/frmP2PAddAccountController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmP2PNewAccountAck", "UnifiedTransferFlow/frmP2PNewAccountAck", "UnifiedTransferFlow/frmP2PNewAccountAckController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmP2PTransfer", "UnifiedTransferFlow/frmP2PTransfer", "UnifiedTransferFlow/frmP2PTransferController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmP2PTransferType", "UnifiedTransferFlow/frmP2PTransferType", "UnifiedTransferFlow/frmP2PTransferTypeController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmSameBank", "UnifiedTransferFlow/frmSameBank", "UnifiedTransferFlow/frmSameBankController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmSameBankAddAccount", "UnifiedTransferFlow/frmSameBankAddAccount", "UnifiedTransferFlow/frmSameBankAddAccountController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmSameBankNewAccountAck", "UnifiedTransferFlow/frmSameBankNewAccountAck", "UnifiedTransferFlow/frmSameBankNewAccountAckController");
        kony.mvc.registry.add("UnifiedTransferFlow/frmSelectTransferType", "UnifiedTransferFlow/frmSelectTransferType", "UnifiedTransferFlow/frmSelectTransferTypeController");
        kony.mvc.registry.add("frmAccounts", "WealthModule/frmAccounts", {
            "controllerName": "WealthModule/frmAccountsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmActivityDetails", "WealthModule/frmActivityDetails", "WealthModule/frmActivityDetailsController");
        kony.mvc.registry.add("frmBenchmark", "WealthModule/frmBenchmark", "WealthModule/frmBenchmarkController");
        kony.mvc.registry.add("frmCashAccounts", "WealthModule/frmCashAccounts", "WealthModule/frmCashAccountsController");
        kony.mvc.registry.add("frmConvertCurrency", "WealthModule/frmConvertCurrency", {
            "controllerName": "WealthModule/frmConvertCurrencyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmConvertCurrencyAck", "WealthModule/frmConvertCurrencyAck", {
            "controllerName": "WealthModule/frmConvertCurrencyAckController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmConvertCurrencyVerify", "WealthModule/frmConvertCurrencyVerify", {
            "controllerName": "WealthModule/frmConvertCurrencyVerifyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmCurrencyChart", "WealthModule/frmCurrencyChart", {
            "controllerName": "WealthModule/frmCurrencyChartController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmDateRange", "WealthModule/frmDateRange", {
            "controllerName": "WealthModule/frmDateRangeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmExpertOpinion", "WealthModule/frmExpertOpinion", {
            "controllerName": "WealthModule/frmExpertOpinionController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmHoldings", "WealthModule/frmHoldings", {
            "controllerName": "WealthModule/frmHoldingsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmInstrumentDetails", "WealthModule/frmInstrumentDetails", {
            "controllerName": "WealthModule/frmInstrumentDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmInstrumentOrder", "WealthModule/frmInstrumentOrder", {
            "controllerName": "WealthModule/frmInstrumentOrderController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmInstrumentOrderAck", "WealthModule/frmInstrumentOrderAck", {
            "controllerName": "WealthModule/frmInstrumentOrderAckController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmInstrumentSearch", "WealthModule/frmInstrumentSearch", {
            "controllerName": "WealthModule/frmInstrumentSearchController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmInvestmentAcc", "WealthModule/frmInvestmentAcc", {
            "controllerName": "WealthModule/frmInvestmentAccController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmJointAccount", "WealthModule/frmJointAccount", {
            "controllerName": "WealthModule/frmJointAccountController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOrder", "WealthModule/frmOrder", {
            "controllerName": "WealthModule/frmOrderController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOrders", "WealthModule/frmOrders", {
            "controllerName": "WealthModule/frmOrdersController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmOrderType", "WealthModule/frmOrderType", {
            "controllerName": "WealthModule/frmOrderTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPerformance", "WealthModule/frmPerformance", "WealthModule/frmPerformanceController");
        kony.mvc.registry.add("frmPlaceOrder", "WealthModule/frmPlaceOrder", {
            "controllerName": "WealthModule/frmPlaceOrderController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPlaceOrderVerifyDetails", "WealthModule/frmPlaceOrderVerifyDetails", {
            "controllerName": "WealthModule/frmPlaceOrderVerifyDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmPortfolioDetails", "WealthModule/frmPortfolioDetails", {
            "controllerName": "WealthModule/frmPortfolioDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmRecentActivity", "WealthModule/frmRecentActivity", "WealthModule/frmRecentActivityController");
        kony.mvc.registry.add("frmReport", "WealthModule/frmReport", {
            "controllerName": "WealthModule/frmReportController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmReportType", "WealthModule/frmReportType", {
            "controllerName": "WealthModule/frmReportTypeController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmScheduleDate", "WealthModule/frmScheduleDate", {
            "controllerName": "WealthModule/frmScheduleDateController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSelectCurrency", "WealthModule/frmSelectCurrency", {
            "controllerName": "WealthModule/frmSelectCurrencyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmSortBy", "WealthModule/frmSortBy", {
            "controllerName": "WealthModule/frmSortByController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmToCurrency", "WealthModule/frmToCurrency", {
            "controllerName": "WealthModule/frmToCurrencyController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTopNews", "WealthModule/frmTopNews", {
            "controllerName": "WealthModule/frmTopNewsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTopNewsDetails", "WealthModule/frmTopNewsDetails", {
            "controllerName": "WealthModule/frmTopNewsDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmTransactions", "WealthModule/frmTransactions", {
            "controllerName": "WealthModule/frmTransactionsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmUnifiedDashboardWealth", "WealthModule/frmUnifiedDashboardWealth", "WealthModule/frmUnifiedDashboardWealthController");
        kony.mvc.registry.add("frmValidity", "WealthModule/frmValidity", {
            "controllerName": "WealthModule/frmValidityController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmViewOpenOrderDetails", "WealthModule/frmViewOpenOrderDetails", {
            "controllerName": "WealthModule/frmViewOpenOrderDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmViewOrderHistoryDetails", "WealthModule/frmViewOrderHistoryDetails", {
            "controllerName": "WealthModule/frmViewOrderHistoryDetailsController",
            "controllerExtName": [],
            "controllerType": "kony.mvc.MDAFormController"
        });
        kony.mvc.registry.add("frmViewTransactionDetails", "WealthModule/frmViewTransactionDetails", "WealthModule/frmViewTransactionDetailsController");
        kony.mvc.registry.add("frmWatchlist", "WealthModule/frmWatchlist", "WealthModule/frmWatchlistController");
        kony.mvc.registry.add("frmWealthDashboard", "WealthModule/frmWealthDashboard", "WealthModule/frmWealthDashboardController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {
        return applicationController.AS_AppEvents_c26b10e9c0764bde8f8f42317331324a(eventObj);
    },
    appmenuseq: function() {
        var startupModule = kony.mvc.MDAApplication.getSharedInstance().moduleManager.getModule("AuthModule");
        startupModule.presentationController.presentUserInterface("frmLogin");
    }
});