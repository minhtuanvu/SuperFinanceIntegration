/**
 *@module MenuHandler
 */
define([], function() {
    /**
     * MenuHandler consists of all possible methods related Hamburger Menu
     *@alias module:MenuHandler
     *@class
     */
    function MenuHandler() {
        /**@member {string} forceTouchFlow stores the value of type of module selected in forch touch*/
        this.forceTouchFlow = "";
    };
    /**
     * Function used as call back for force touch options.
     * @params {object} params , indicating the selected force touch option.
     * @returns view controller which have to be displayed
     */
    MenuHandler.prototype.appForceTouchCallBack = function(params) {
        // If launch mode = 3 and quickactionitem key present in launchparams
        // denotes quick action item launch.
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        if (params["launchmode"] == 3) {
            var deviceUtilManager = applicationManager.getDeviceUtilManager();
            var quickActionItem
            quickActionItem = params["launchparams"]["quickactionitem"];
            if (quickActionItem) {
                if (quickActionItem["id"] == "ATM finder") {
                    //if(false){
                    var formName;
                    if (kony.application.getCurrentForm() !== null) {
                        formName = kony.application.getCurrentForm().id;
                    }
                    if (!formName) {
                        formName = "frmLocationMap";
                        var loginFlag = false;
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setCustomInfo("frmLocationMap", {
                            "isUserLoggedIn": "false"
                        });
                    } else {
                        loginFlag = true;
                    }
                    var configManager = applicationManager.getConfigurationManager();
                    if (configManager.appLaunchedMode.length === 0) {
                        configManager.appLaunchedMode = "shortcut"
                    }
                    var controller = applicationManager.getPresentationUtility().getController(formName, true);
                    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
                    locateUsModule.presentationController.presentLocateUsView(loginFlag, controller);
                    return controller.view;
                } else if (quickActionItem["id"] == "Pay a Bill") {
                    if (userPreferencesManager.isLoggedIn === true) {
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("payBill", "frmDashBoard");
                        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
                        billPayMod.presentationController.fetchToPayees();
                        var controller = applicationManager.getPresentationUtility().getController('frmBillPaySelectPayee', true);
                        return controller.view;
                    } else {
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("payBill", "frmDashBoard");
                        this.forceTouchFlow = "Pay a Bill";
                        var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
                        return controller.view;
                    }
                } else if (quickActionItem["id"] == "Transfer Money") {
                    if (userPreferencesManager.isLoggedIn === true) {
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("makeatransfer", "frmDashBoard");
                        var controller = applicationManager.getPresentationUtility().getController('frmTransactionMode', true);
                        return controller.view;
                    } else {
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("makeatransfer", "frmDashBoard");
                        this.forceTouchFlow = "Transfer Money";
                        var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
                        return controller.view;
                    }
                } else if (quickActionItem["id"] == "New Check Deposit") {
                    if (userPreferencesManager.isLoggedIn === true) {
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("Deposit", "frmDashBoard");
                        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
                        checkDepositModule.presentationController.commonFunctionForNavigation("frmDepositToCD");
                        var controller = applicationManager.getPresentationUtility().getController('frmDepositToCD', true);
                        return controller.view;
                    } else {
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("Deposit", "frmDashBoard");
                        this.forceTouchFlow = "New Check Deposit";
                        var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
                        return controller.view;
                    }
                } else if (quickActionItem["id"] === "Money Movement") {
                    if (userPreferencesManager.isLoggedIn) {
                        applicationManager.getPresentationUtility().showLoadingScreen();
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("centralmoneymovement", "frmDashboardAggregated");
                        var index = navMan.getFormIndex("frmDashboardAggregated");
                        if (!(index && navMan.stack.includes("frmDashboardAggregated"))) {
                            navMan.stack.push("frmDashboardAggregated");
                            navMan.setFormIndex("frmDashboardAggregated", navMan.stack.length - 1);
                        }
                        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
                        moneyMovementModule.clearMMFlowAtributes();
                        kony.runOnMainThread(moneyMovementModule.getFromAndToAccounts, []);
                    } else {
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("centralmoneymovement", "frmDashboardAggregated");
                        this.forceTouchFlow = "Money Movement";
                        var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
                        return controller.view;
                    }
                }
            }
        }
    };
    /**
     * Function to Perform Action on Menu Icon and More Option
     * @param {object} scope , which consists of scope of particular module where we initiates this method
     * @param {string} selectedForm, which consists of selected formid
     */
    MenuHandler.prototype.setUpHamburgerForForm = function(scope, selectedForm) {
        //For Gettting the Selected Value from Menu
        var hamburgerOnRowClick = function() {
            showOrHideHamburgerUI();
            var selectedvalue = scope.view.Hamburger.segHamburger.selectedItems[0].text;
            switchOnClick(selectedvalue);
        }
        var switchOnClick = function(selValue) {
                var configManager = applicationManager.getConfigurationManager();
                var userManager = applicationManager.getUserPreferencesManager();
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("frmCardManageHome", {
                    "isMainScreen": false
                });
                var alertsNotifiModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
                var cardManageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
                cardManageModule.presentationController.setCardIndexStatus(true);
                var alertsbadgeShown = alertsNotifiModule.presentationController.getAlertsBadgeStatus();
                if (!alertsbadgeShown) alertsNotifiModule.presentationController.getUnreadNotificationsCount();
                switch (selValue) {
                    case configManager.constants.MENUCHEQUEMANAGEMENT:
                        scope.view.flxHamburger.isVisible = false;
                        var chequeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChequeManagementModule");
                        chequeMod.presentationController.clearFlowValues();
                        chequeMod.presentationController.navigateToChequeLandingScreen();
                        break;
                    case configManager.constants.MENUACCOUNTS:
                        scope.view.flxHamburger.isVisible = false;
                        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                        accountMod.presentationController.showDashboard();
                        break;
                    case configManager.constants.MENULOCATE:
                        scope.view.flxHamburger.isVisible = false;
                        var locateMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
                        locateMod.presentationController.presentLocateUsView(true, scope);
                        break;
                    case configManager.constants.MENUWEALTHDASHBOARD:
                        scope.view.flxHamburger.isVisible = false;
                        var customerId = applicationManager.getUserPreferencesManager().primaryCustomerId.id;
                        var params = {
                            "customerId": customerId
                        };
                        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
                        wealthModule.newAccount = {};
                        wealthModule.newAccountsArr = [];
                        wealthModule.balanceArr = [];
                        wealthModule.amount = "";
                        wealthModule.currency = "";
                        wealthModule.getPortfolioList(params);
                        break;
                    case configManager.constants.MENUWEALTHWATCHLIST:
                        scope.view.flxHamburger.isVisible = false;
                        var customerId = applicationManager.getUserPreferencesManager().primaryCustomerId.id;
                        var params = {
                            "customerId": customerId
                        };
                        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
                        // wealthModule.newAccount = {};
                        // wealthModule.newAccountsArr = [];
                        // wealthModule.balanceArr = [];
                        // wealthModule.amount = "";
                        // wealthModule.currency = "";
                        wealthModule.getWatchlist();
                        break;
                    case configManager.constants.MENUCONTACT:
                        scope.view.flxHamburger.isVisible = false;
                        var infModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
                        infModule.presentationController.commonFunctionForNavigation("frmSupport");
                        break;
                    case configManager.constants.MENUUNIFIEDTRANSFERSFLOW:
                        scope.view.flxHamburger.isVisible = false;
                        var navMan = applicationManager.getNavigationManager();
                        var configManager = applicationManager.getConfigurationManager();
                        if (configManager.getDeploymentGeography() === 'EUROPE') {
                            navMan.navigateTo("UnifiedTransferFlow/frmSelectTransferType");
                        } else {
                            navMan.navigateTo("UnifiedTransferFlow/frmP2PTransferType");
                        }
                        break;
                    case configManager.constants.MENUTRANSFERS:
                        scope.view.flxHamburger.isVisible = false;
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
                        break;
                    case configManager.constants.MENUSENDMONEY:
                        applicationManager.getPresentationUtility().showLoadingScreen();
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setCustomInfo("removeAttachments", true);
                        navMan.setEntryPoint("europeTransferFlow", "frmDashboardAggregated");
                        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
                        transferModPresentationController.setEuropeFlowType("EXTERNAL");
                        transferModPresentationController.getFromAndToAccounts();
                        transferModPresentationController.clearEuropeFlowAtributes();
                        break;
                    case configManager.constants.MENUMONEYMOVEMENTTRANSFERS:
                        applicationManager.getPresentationUtility().showLoadingScreen();
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setCustomInfo("removeAttachments", true);
                        //navMan.setEntryPoint("ManageMMFlow","frmMMTransferFromAccount");
                        navMan.setEntryPoint("centralmoneymovement", "frmDashboardAggregated");
                        scope.view.flxHamburger.isVisible = false;
                        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
                        moneyMovementModule.getFromAndToAccounts();
                        moneyMovementModule.clearMMFlowAtributes();
                        //moneyMovementModule.clearFromAccountObject();
                        break;
                    case configManager.constants.MENUTRANSFERSACTIVITY:
                        scope.view.flxHamburger.isVisible = false;
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setCustomInfo("removeAttachments", true);
                        var transMod = applicationManager.getModulesPresentationController("TransactionModule");
                        if (configManager.getDeploymentGeography() === 'EUROPE') {
                            applicationManager.getPresentationUtility().showLoadingScreen();
                            var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
                            transferModPresentationController.clearEuropeFlowAtributes();
                            //navMan.setEntryPoint("europeTransferFlow", "frmEuropeTransferActivities");
                            //transMod.getScheduledTransactionsEurope();
                            navMan.setEntryPoint("europeTransferFlow", "frmTransferActivitiesTransfersEurope");
                            navMan.navigateTo("frmTransferActivitiesTransfersEurope");
                        } else {
                            var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
                            moneyMovementModule.clearMMFlowAtributes();
                            //moneyMovementModule.clearFromAccountObject();
                            // navMan.setEntryPoint("centralmoneymovement","frmMMTransfers");
                            // transMod.getTransactions("frmMMTransfers");
                            navMan.setEntryPoint("centralmoneymovement", "frmTransferActivitiesTransfers");
                            navMan.navigateTo("frmTransferActivitiesTransfers");
                            /*navMan.setEntryPoint("centralmoneymovement","frmTransferActivitiesTransfers");
                            navMan.navigateTo("frmTransferActivitiesTransfers");*/
                        }
                        break;
                    case configManager.constants.MENUMANAGERECIPIENTS:
                        if (configManager.getDeploymentGeography() === "EUROPE") {
                            var navMan = applicationManager.getNavigationManager();
                            navMan.setCustomInfo("removeAttachments", true);
                            //navMan.setEntryPoint("ManageMMFlow","Hamburger");
                            var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
                            navMan.setEntryPoint("europeTransferFlow", "frmEuropeManageBeneficiaries");
                            transferModPresentationController.clearEuropeFlowAtributes();
                            //moneyMovementModule.clearFromAccountObject();
                            transferModPresentationController.enterManageRecipientsFlow();
                        } else {
                            var navMan = applicationManager.getNavigationManager();
                            navMan.setCustomInfo("removeAttachments", true);
                            //navMan.setEntryPoint("ManageMMFlow","Hamburger");
                            var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
                            navMan.setEntryPoint("centralmoneymovement", "frmManageRecipientType");
                            moneyMovementModule.clearMMFlowAtributes();
                            //moneyMovementModule.clearFromAccountObject();
                            moneyMovementModule.enterManageRecipientsFlow();
                        }
                        break;
                    case configManager.constants.MENUDISPUTE:
                        applicationManager.getPresentationUtility().showLoadingScreen();
                        var navManager = applicationManager.getNavigationManager();
                        navManager.setEntryPoint("ViewRequest", "");
                        var disputeModule = applicationManager.getModulesPresentationController("DisputeTransactions");
                        disputeModule.getDisputeTransactionDetails();
                        break;
                    case configManager.constants.MENUMESSAGES:
                        scope.view.flxHamburger.isVisible = false;
                        var messagesModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
                        messagesModule.presentationController.getInboxRequests();
                        break;
                    case configManager.constants.MENUACCOUNTSTATEMENTS:
                        scope.view.flxHamburger.isVisible = false;
                        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                        var accountManager = applicationManager.getAccountManager();
                        if (accountManager.internalAccounts.length > 0) {
                            var accountNumber = accountManager.internalAccounts[0].Account_id;
                            var accountdata = accountManager.internalAccounts[0];
                            accountModule.presentationController.getAccountStataments(accountNumber, accountdata);
                        }
                        break;
                    case configManager.constants.MENUNOTIFICATIONS:
                        var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
                        alertsModule.presentationController.setAlertsBadgeStatus(false);
                        if (alertsbadgeShown) alertsNotifiModule.presentationController.getUnreadNotificationsCount();
                        alertsModule.presentationController.getNotifications();
                        break;
                    case configManager.constants.MENUBILLPAY:
                        scope.view.flxHamburger.isVisible = false;
                        var BillPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
                        BillPayMod.presentationController.fetchBills();
                        BillPayMod.presentationController.getHolidays();
                        break;
                    case configManager.constants.MENUCARDLESS:
                        scope.view.flxHamburger.isVisible = false;
                        var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
                        var navMan = applicationManager.getNavigationManager();
                        navMan.setEntryPoint("cardlessEntry", "frmCardLessHome");
                        //navMan.setEntryPoint("cardlessEntry","frmCardLessHomeQR");
                        cardLessModule.presentationController.getCardlessPendingAndPostedTransactions();
                        //cardLessModule.presentationController.getCardlessPendingAndPostedTransactionsQRScanner();
                        break;
                    case configManager.constants.MENUCHECKDEPOSIT:
                        scope.view.flxHamburger.isVisible = false;
                        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
                        checkDepositModule.presentationController.fetchDeposits();
                        break;
                    case configManager.constants.Deposits:
                        scope.view.flxHamburger.isVisible = false;
                        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
                        checkDepositModule.presentationController.fetchDeposits();
                        break;
                    case configManager.constants.MENUSETTINGS:
                        scope.view.flxHamburger.isVisible = false;
                        var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
                        settingsModule.presentationController.showSettings();
                        break;
                    case configManager.constants.MENUFEEDBACK:
                        var currentForm = kony.application.getCurrentForm().id;
                        scope.view.flxHamburger.isVisible = false;
                        var navManager = applicationManager.getNavigationManager();
                        navManager.setEntryPoint("Feedback", currentForm);
                        var feedbackModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("FeedBackModule");
                        feedbackModule.presentationController.showFeedBack();
                        break;
                    case configManager.constants.MENUCHATBOT:
                        scope.view.flxHamburger.isVisible = false;
                        var chatBotMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
                        chatBotMode.presentationController.handleFirstTimeOpen();
                        break;
                    case configManager.constants.MENUMANAGEOTHERBANKACCOUNTS:
                        scope.view.flxHamburger.isVisible = false;
                        var navManager = applicationManager.getNavigationManager();
                        navManager.navigateTo("frmExternalAccountsList");
                        break;
                    case configManager.constants.MENUCARDMANAGEMENT:
                        scope.view.flxHamburger.isVisible = false;
                        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
                        manageCardsModule.presentationController.isFirstTime = true;
                        manageCardsModule.presentationController.showCardsHome();
                        break;
                    case configManager.constants.MENUOPENACOUNT:
                        var NAOModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
                        NAOModule.presentationController.fetchAllProductsAndTnc();
                        break;
                    case configManager.constants.MENUPFMMYMONEY:
                        var accountModulePFM = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                        accountModulePFM.presentationController.fetchPFMDetails(true);
                        break;
                        //@TODO create constants
                    case configManager.constants.MENUACH:
                        //scope.view.flxHamburger.isVisible = false;
                        var achModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ACHModule");
                        achModule.presentationController.commonFunctionForNavigation("ACHModule/frmACHList");
                        break;
                    case configManager.constants.MENUAPPROVALREQUEST:
                        //scope.view.flxHamburger.isVisible = false;
                        var approvalRequestModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ApprovalsReqModule");
                        approvalRequestModule.presentationController.commonFunctionForNavigation("ApprovalsReqModule/frmApprovalsAndRequestsTitle");
                        break;
                    case configManager.constants.MENUUSERMANAGEMENT:
                        scope.view.flxHamburger.isVisible = false;
                        var userManagementModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BusinessBanking");
                        userManagementModule.presentationController.navigatetoallusers();
                        break;
                    case configManager.constants.MENUFOREIGNEXCHANGE:
                        scope.view.flxHamburger.isVisible = false;
                        var foreignExhangeModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ForeignExchange");
                        foreignExhangeModule.presentationController.navigateToforexDashboard();
                        break;
                    case configManager.constants.MENUSECURITYNOTIFICATIONS:
                        scope.view.flxHamburger.isVisible = false;
                        var navManager = applicationManager.getNavigationManager();
                        navManager.navigateTo("frmSecurityNotification");
                        break;
                    default:
                        if (configManager.isEngageEnabled()) {
                            var engageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EngageModule");
                            var engageItemSelected = engageModule.presentationController.menuSelection(scope.view, selValue);
                            if (engageItemSelected) {
                                break;
                            }
                        }
                        scope.view.flxHamburger.isVisible = false;
                        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                        accountMod.presentationController.showDashboard();
                }
            }
            /**
             * Function to to Show/Hide the Hamburger Menu
             * @param {boolean} hide , whether need to hide or Show
             */
        var showOrHideHamburgerUI = function(hide) {
            var devManager = applicationManager.getDeviceUtilManager();
            if (scope.view.flxHamburger) {
                if (hide) {
                    scope.view.flxHamburgerWrapper.left = "-100%";
                    scope.view.flxHamburger.isVisible = false;
                } else {
                    var leftVal = "";
                    if (scope.view.flxHamburger.isVisible === true) {
                        showTitleBar();
                        if (devManager.isIpad() || applicationManager.getPresentationFormUtility().getDeviceName() == "iPhone") {
                            leftVal = "100%";
                        } else {
                            leftVal = "-100%";
                        }
                        scope.view.flxHamburger.isVisible = false;
                    } else {
                        leftVal = "0%";
                        if (devManager.isIpad() || applicationManager.getPresentationFormUtility().getDeviceName() == "iPhone") {
                            scope.view.flxHamburger.flxHamburgerContainer.Hamburger.flxHamburger.flxMenu.setContentOffset({
                                x: "0dp",
                                y: "0dp"
                            });
                            scope.view.flxHamburgerWrapper.left = "100%";
                            scope.view.flxHamburger.skin = "slFbox";
                        } else {
                            scope.view.flxHamburgerWrapper.left = "-100%";
                            scope.view.flxHamburger.skin = "sknFlx000000Op50";
                        }
                        scope.view.flxHamburger.isVisible = true;
                        if (devManager.isIpad() && applicationManager.applicationMode === "tablet") {
                            scope.view.flxHamburger.skin = "sknFlx000000Op50";
                        }
                        hideTitleBar();
                    }
                    scope.view.flxHamburgerWrapper.animate(kony.ui.createAnimation({
                        "100": {
                            "left": leftVal,
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        }
                    }), {
                        "delay": 0,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": 0.5
                    }, {
                        "animationEnd": function() {
                            if (leftVal == "-100%" || leftVal == "100%") {
                                scope.view.flxHamburger.isVisible = false;
                            }
                        }
                    });
                }
            }
        }
        var setProfilePic = function() {
            var profilepicture = applicationManager.getUserPreferencesManager().getUserImage();
            var configManager = applicationManager.getConfigurationManager();
            if (profilepicture && configManager.getProfileImageAvailabilityFlag()) {
                scope.view.Hamburger.imgUser.base64 = profilepicture;
            } else scope.view.Hamburger.imgUser.src = "profileicon.png";
        };
        /**
         * Function to set last login time
         */
        var setLastLoginTime = function() {
            var userPreferencesManager = applicationManager.getUserPreferencesManager();
            var lastlogin = kony.i18n.getLocalizedString("kony.mb.Hamburger.LastLogin");
            var isiPhone = applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone";
            if (isiPhone) scope.view.Hamburger.lblLastLogin.text = lastlogin + " " + userPreferencesManager.getLastLoginTimeForiPhone();
            else scope.view.Hamburger.lblLastLogin.text = lastlogin + " " + userPreferencesManager.getLastLoginTime();
        };
        /**
         * Function to set username
         */
        var setUserName = function() {
            var userPreferencesManager = applicationManager.getUserPreferencesManager();
            var firstname = userPreferencesManager.getUserFirstName();
            var lastname = userPreferencesManager.getUserLastName();
            scope.view.Hamburger.lblUsername.text = firstname + " " + lastname;
        };
        /**
         * Function to Setting data in the Menu.
         */
        var setMenuData = function() {
            var configManager = applicationManager.getConfigurationManager();
            var devManager = applicationManager.getDeviceUtilManager();
            if (devManager.isIpad() && applicationManager.applicationMode === "tablet") {
                var footerData = configManager.getIPadAppMenuItems();
                var data = configManager.getMoreMenuItemsIpad();
                scope.view.customFooter.imgAccounts.src = footerData[0].img;
                scope.view.customFooter.lblAccounts.text = footerData[0].text;
                scope.view.customFooter.flxAccounts.onClick = function() {
                    switchOnClick(footerData[0].text);
                    showOrHideHamburgerUI(true);
                }
                scope.view.customFooter.imgTransfer.src = footerData[1].img;
                scope.view.customFooter.lblTransfer.text = footerData[1].text;
                scope.view.customFooter.flxTransfer.onClick = function() {
                    showOrHideHamburgerUI(true);
                    switchOnClick(footerData[1].text);
                }
                scope.view.customFooter.imgBillPay.src = footerData[2].img;
                scope.view.customFooter.lblBillPay.text = footerData[2].text;
                scope.view.customFooter.flxBillPay.onClick = function() {
                    switchOnClick(footerData[2].text);
                    showOrHideHamburgerUI(true);
                }
                scope.view.customFooter.imgDeposits.src = footerData[3].img;
                scope.view.customFooter.lblDeposits.text = footerData[3].text;
                scope.view.customFooter.flxDeposits.onClick = function() {
                    switchOnClick(footerData[3].text);
                    showOrHideHamburgerUI(true);
                }
                scope.view.customFooter.imgMessage.src = footerData[4].img;
                scope.view.customFooter.lblMessage.text = footerData[4].text;
                scope.view.customFooter.flxMessage.onClick = function() {
                        switchOnClick(footerData[4].text);
                        showOrHideHamburgerUI(true);
                    }
                    //highlightWhichMenu
                scope.view.customFooter.flxAccSelect.setVisibility(false);
                scope.view.customFooter.flxTransferSelect.setVisibility(false);
                scope.view.customFooter.flxBillPaySelect.setVisibility(false);
                scope.view.customFooter.flxDepositsSelect.setVisibility(false);
                scope.view.customFooter.flxMessageSelect.setVisibility(false);
                scope.view.customFooter.flxMenuSelect.setVisibility(false);
                if (selectedForm == footerData[0].text) {
                    scope.view.customFooter.flxAccSelect.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLbl424242SSP20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblDeposits.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblMessage.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblMenu.skin = "sknLblA0A0A0SSP20px";
                } else if (selectedForm == footerData[1].text) {
                    scope.view.customFooter.flxTransferSelect.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLbl424242SSP20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblDeposits.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblMessage.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblMenu.skin = "sknLblA0A0A0SSP20px";
                } else if (selectedForm == footerData[2].text) {
                    scope.view.customFooter.flxBillPaySelect.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLbl424242SSP20px";
                    scope.view.customFooter.lblDeposits.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblMessage.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblMenu.skin = "sknLblA0A0A0SSP20px";
                } else if (selectedForm == footerData[3].text) {
                    scope.view.customFooter.flxDepositsSelect.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblDeposits.skin = "sknLbl424242SSP20px";
                    scope.view.customFooter.lblMessage.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblMenu.skin = "sknLblA0A0A0SSP20px";
                } else if (selectedForm == footerData[4].text) {
                    scope.view.customFooter.flxMessageSelect.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLbl424242SSP20px";
                    scope.view.customFooter.lblDeposits.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblMessage.skin = "sknLbl424242SSP20px";
                    scope.view.customFooter.lblMenu.skin = "sknLblA0A0A0SSP20px";
                } else {
                    scope.view.customFooter.flxMenuSelect.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblDeposits.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblMessage.skin = "sknLblA0A0A0SSP20px";
                    scope.view.customFooter.lblMenu.skin = "sknLbl424242SSP20px";
                }
            } else if (devManager.isIPhone()) {
                var cm = applicationManager.getConfigurationManager();
                var footerData = configManager.getIOSAppMenuItems();
                var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
                var entitlements = moneyMovementModule.checkForTransfersModuleEntitlements();
                if (!(entitlements.isTransfersAvailable == 1 || moneyMovementModule.getEntitlementValue("ispayAPersonEnabled") == "true")) {
                    for (i = 0; i < footerData.length; i++)
                        if (footerData[i].text == cm.constants.MENUMONEYMOVEMENTTRANSFERS) break;
                    footerData.splice(i, 1);
                }
                var data = configManager.getIOSAppMoreMenuItems();
                if (!(entitlements.isTransfersAvailable == 1 || moneyMovementModule.getEntitlementValue("ispayAPersonEnabled") == "true")) {
                    for (i = 0; i < footerData.length; i++)
                        if (footerData[i].text == cm.constants.MENUTRANSFERSACTIVITY) break;
                    footerData.splice(i, 1);
                    for (i = 0; i < footerData.length; i++)
                        if (footerData[i].text == cm.constants.MENUMANAGERECIPIENTS) break;
                    footerData.splice(i, 1);
                }
                scope.view.customFooter.imgAccounts.src = footerData[0].img;
                scope.view.customFooter.lblAccounts.text = footerData[0].text;
                scope.view.customFooter.flxAccounts.onClick = function() {
                    switchOnClick(footerData[0].text);
                    showOrHideHamburgerUI(true);
                }
                scope.view.customFooter.imgTransfer.src = footerData[1].img;
                scope.view.customFooter.lblTransfer.text = footerData[1].text;
                scope.view.customFooter.flxTransfer.onClick = function() {
                    showOrHideHamburgerUI(true);
                    switchOnClick(footerData[1].text);
                }
                scope.view.customFooter.imgBillPay.src = footerData[2].img;
                scope.view.customFooter.lblBillPay.text = footerData[2].text;
                scope.view.customFooter.flxBillPay.onClick = function() {
                        switchOnClick(footerData[2].text);
                        showOrHideHamburgerUI(true);
                    }
                    //highlightWhichMenu
                scope.view.customFooter.flxAccSelect.setVisibility(false);
                scope.view.customFooter.flxTransferSel.setVisibility(false);
                scope.view.customFooter.flxBillSelected.setVisibility(false);
                scope.view.customFooter.flxMoreSelect.setVisibility(false);
                if (selectedForm == footerData[0].text) {
                    scope.view.customFooter.flxAccSelect.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLbl424242SSP20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLbl004B95SSPRegular20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLbl004B95SSPRegular20px";
                    scope.view.customFooter.lblMore.skin = "sknLbl004B95SSPRegular20px";
                    scope.view.customFooter.imgAccounts.src = "accountsactive.png";
                    scope.view.customFooter.imgTransfer.src = "transfer.png";
                    scope.view.customFooter.imgBillPay.src = "billpay.png";
                    scope.view.customFooter.imgMore.src = "more.png";
                } else if (selectedForm == footerData[1].text) {
                    scope.view.customFooter.flxTransferSel.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLbl004B95SSPRegular20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLbl424242SSP20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLbl004B95SSPRegular20px";
                    scope.view.customFooter.lblMore.skin = "sknLbl004B95SSPRegular20px";
                    scope.view.customFooter.imgAccounts.src = "accounts.png";
                    scope.view.customFooter.imgTransfer.src = "transferactive.png";
                    scope.view.customFooter.imgBillPay.src = "billpay.png";
                    scope.view.customFooter.imgMore.src = "more.png";
                } else if (selectedForm == footerData[2].text) {
                    scope.view.customFooter.flxBillSelected.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLbl004B95SSPRegular20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLbl004B95SSPRegular20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLbl424242SSP20px";
                    scope.view.customFooter.lblMore.skin = "sknLbl004B95SSPRegular20px";
                    scope.view.customFooter.imgAccounts.src = "accounts.png";
                    scope.view.customFooter.imgTransfer.src = "transfer.png";
                    scope.view.customFooter.imgBillPay.src = "billpayactive.png";
                    scope.view.customFooter.imgMore.src = "more.png";
                } else {
                    scope.view.customFooter.flxMoreSelect.setVisibility(true);
                    scope.view.customFooter.lblAccounts.skin = "sknLbl004B95SSPRegular20px";
                    scope.view.customFooter.lblTransfer.skin = "sknLbl004B95SSPRegular20px";
                    scope.view.customFooter.lblBillPay.skin = "sknLbl004B95SSPRegular20px";
                    scope.view.customFooter.lblMore.skin = "sknLbl424242SSP20px";
                    scope.view.customFooter.imgAccounts.src = "accounts.png";
                    scope.view.customFooter.imgTransfer.src = "transfer.png";
                    scope.view.customFooter.imgBillPay.src = "billpay.png";
                    scope.view.customFooter.imgMore.src = "moreactive.png";
                }
                //tapimages
                scope.view.customFooter.flxAccounts.onTouchStart = function() {
                    if (scope.view.customFooter.imgAccounts.src === "accountsactive.png") {} else {
                        scope.view.customFooter.imgAccounts.src = "accountsontap.png";
                    }
                };
                scope.view.customFooter.flxAccounts.onTouchEnd = function() {
                    if (scope.view.customFooter.imgAccounts.src === "accountsactive.png") {} else {
                        scope.view.customFooter.imgAccounts.src = "accounts.png";
                    }
                };
                scope.view.customFooter.flxTransfer.onTouchStart = function() {
                    if (scope.view.customFooter.imgTransfer.src === "transferactive.png") {} else {
                        scope.view.customFooter.imgTransfer.src = "transferontap.png";
                    }
                };
                scope.view.customFooter.flxTransfer.onTouchEnd = function() {
                    if (scope.view.customFooter.imgTransfer.src === "transferactive.png") {} else {
                        scope.view.customFooter.imgTransfer.src = "transfer.png";
                    }
                };
                scope.view.customFooter.flxBillPay.onTouchStart = function() {
                    if (scope.view.customFooter.imgBillPay.src === "billpayactive.png") {} else {
                        scope.view.customFooter.imgBillPay.src = "billpayontap.png";
                    }
                };
                scope.view.customFooter.flxBillPay.onTouchEnd = function() {
                    if (scope.view.customFooter.imgBillPay.src === "billpayactive.png") {} else {
                        scope.view.customFooter.imgBillPay.src = "billpay.png";
                    }
                };
                scope.view.customFooter.imgMore.onTouchStart = function() {
                    if (scope.view.customFooter.imgMore.src === "moreactive.png") {} else {
                        scope.view.customFooter.imgMore.src = "moreontap.png";
                    }
                };
                scope.view.customFooter.imgMore.onTouchEnd = function() {
                    if (scope.view.customFooter.imgMore.src === "moreactive.png") {} else {
                        scope.view.customFooter.imgMore.src = "more.png";
                    }
                };
            } else {
                var data = configManager.getHamburgerMenuItems();
                var cm = applicationManager.getConfigurationManager();
                var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
                var entitlements = moneyMovementModule.checkForTransfersModuleEntitlements();
                if (!(entitlements.isTransfersAvailable == 1 || moneyMovementModule.getEntitlementValue("ispayAPersonEnabled") == "true")) {
                    for (i = 0; i < data.length; i++)
                        if (data[i].text == cm.constants.MENUMONEYMOVEMENTTRANSFERS) break;
                    data.splice(i, 1);
                    for (i = 0; i < data.length; i++)
                        if (data[i].text == cm.constants.MENUTRANSFERSACTIVITY) break;
                    data.splice(i, 1);
                    for (i = 0; i < data.length; i++)
                        if (data[i].text == cm.constants.MENUMANAGERECIPIENTS) break;
                    data.splice(i, 1);
                }
            }
            // map and present data into hamburger (both hamburger on click or more on click)
            scope.view.Hamburger.segHamburger.widgetDataMap = {
                imgHamburger: "img",
                lblHamburger: "text",
                lblMessagesNumber: "info",
                flxMessagesNumber: "backGround"
            };
            var msgManager = applicationManager.getMessagesManager();
            var count = msgManager.getTotalNumberOfUnreadMessages();
            var alertManager = applicationManager.getAlertsManager();
            var notificationCount = alertManager.getUnreadNotifications();
            var previousUnreadCount = alertManager.getPreviousUnreadCount();
            var alertsNotifiModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
            var alertsbadgeShown = alertsNotifiModule.presentationController.getAlertsBadgeStatus();
            for (var i = 0; i < data.length; i++) {
                //if(!configManager.AggregatedExternalAccountEnabled)
                //continue;
                if (data[i].text === configManager.constants.MENUNOTIFICATIONS && !kony.sdk.isNullOrUndefined(notificationCount) && notificationCount !== "0") {
                    if (!alertsbadgeShown && (!kony.sdk.isNullOrUndefined(previousUnreadCount) && Number(previousUnreadCount) >= Number(notificationCount))) {
                        if (!applicationManager.getDeviceUtilManager().isIPhone()) scope.view.customHeader.imgBack.src = "hamburger.png";
                        data[i].img = {
                            "src": "notification.png"
                        };
                    } else {
                        alertsNotifiModule.presentationController.setAlertsBadgeStatus(true);
                        if (applicationManager.getDeviceUtilManager().isIPhone()) scope.view.customFooter.imgMore.src = "moreunread.png";
                        else scope.view.customHeader.imgBack.src = "hamburgerdot.png";
                        data[i].img = {
                            "src": "notificationunread.png"
                        };
                    }
                    data[i].info = {
                        "text": notificationCount,
                        "isVisible": true
                    };
                    data[i].backGround = {
                        "isVisible": true
                    };
                } else if (data[i].text === configManager.constants.MENUMESSAGES && !kony.sdk.isNullOrUndefined(count) && count !== "0") {
                    data[i].info = {
                        "text": count,
                        "isVisible": true,
                        "skin": "sknLbl424242SSP22px"
                    };
                    data[i].backGround = {
                        "isVisible": false
                    };
                } else {
                    data[i].info = {
                        "isVisible": false
                    };
                    data[i].backGround = {
                        "isVisible": false
                    };
                }
            }
            if (configManager.isEngageEnabled()) {
                var engageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EngageModule");
                engageModule.presentationController.menuSetup(scope.view, data);
            }
            scope.view.Hamburger.segHamburger.setData(data);
            scope.view.Hamburger.segHamburger.onRowClick = function() {
                hamburgerOnRowClick();
            };
        }
        setMenuData();
        if (scope.view.customHeader) {
            scope.view.customHeader.flxBack.onClick = function() {
                setProfilePic();
                setLastLoginTime();
                setUserName();
                setMenuData();
                showOrHideHamburgerUI();
            };
        } else if (scope.view.customSearch) {
            scope.view.customSearch.flxBack.onClick = function() {
                setProfilePic();
                setLastLoginTime();
                setUserName();
                setMenuData();
                showOrHideHamburgerUI();
            };
        }
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "android") {
            scope.view.flxHamburgerWrapper.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
                fingers: 1
            }, function(widgetRef, gestureInfo) {
                if (gestureInfo.swipeDirection === 1) {
                    showOrHideHamburgerUI();
                }
            }.bind(this));
        }
        scope.view.flxHamburgerDummy.onClick = function() {
            showOrHideHamburgerUI();
        };
        scope.view.flxHamburger.onClick = function() {
            showOrHideHamburgerUI();
        };
        if (applicationManager.getDeviceUtilManager().isIpad() && applicationManager.applicationMode === "tablet") {
            scope.view.customFooter.flxMenu.onClick = function() {
                setProfilePic();
                setLastLoginTime();
                setUserName();
                setMenuData();
                showOrHideHamburgerUI();
                scope.view.customFooter.flxMenuSelect.setVisibility(true);
                scope.view.customFooter.flxAccSelect.setVisibility(false);
                scope.view.customFooter.flxTransferSelect.setVisibility(false);
                scope.view.customFooter.flxBillPaySelect.setVisibility(false);
                scope.view.customFooter.flxDepositsSelect.setVisibility(false);
                scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
                scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
                scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
                scope.view.customFooter.lblDeposits.skin = "sknLblA0A0A0SSP20px";
                scope.view.customFooter.lblMessage.skin = "sknLblA0A0A0SSP20px";
                scope.view.customFooter.lblMenu.skin = "sknLbl424242SSP20px";
            };
        } else if (applicationManager.getDeviceUtilManager().isIPhone()) {
            scope.view.customFooter.flxMore.onClick = function() {
                setProfilePic();
                setLastLoginTime();
                setUserName();
                setMenuData();
                showOrHideHamburgerUI();
                scope.view.customFooter.flxMoreSelect.setVisibility(true);
                scope.view.customFooter.flxAccSelect.setVisibility(false);
                scope.view.customFooter.flxTransferSel.setVisibility(false);
                scope.view.customFooter.flxBillSelected.setVisibility(false);
                scope.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
                scope.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
                scope.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
                scope.view.customFooter.lblMore.skin = "sknLbl424242SSP20px";
                scope.view.customFooter.imgAccounts.src = "accounts.png";
                scope.view.customFooter.imgTransfer.src = "transfer.png";
                scope.view.customFooter.imgBillPay.src = "billpay.png";
                scope.view.customFooter.imgMore.src = "moreactive.png";
            };
        }
        scope.view.Hamburger.flxLogout.onTouchEnd = function() {
            var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            showOrHideHamburgerUI();
            authMod.presentationController.onLogout();
        };
        scope.view.Hamburger.flxHeaderMain.onTouchEnd = function() {
            scope.view.flxHamburger.isVisible = false;
            var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsModule.presentationController.showSettings();
        };
        hideTitleBar = function() {
            var currForm = kony.application.getCurrentForm();
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                var titleBarAttributes = currForm.titleBarAttributes;
                titleBarAttributes["navigationBarHidden"] = true;
                currForm.titleBarAttributes = titleBarAttributes;
            }
        };
        showTitleBar = function() {
            var currForm = kony.application.getCurrentForm();
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                var titleBarAttributes = currForm.titleBarAttributes;
                titleBarAttributes["navigationBarHidden"] = false;
                currForm.titleBarAttributes = titleBarAttributes;
            }
        };
    }
    return MenuHandler;
});