define(["AsyncManager/BusinessControllers/BusinessController"], function(AsyncManager) {
    function Auth_PresentationController() {
        scope_AuthPresenter = this;
        kony.mvc.Presentation.BasePresenter.call(this);
        this.asyncManager = new AsyncManager();
        this.authManger = applicationManager.getAuthManager();
        this.logger = applicationManager.getLoggerManager();
        this.dmManager = applicationManager.getDirectMarketingManager();
        this.flowType = "";
        this.currentAuthMode = "";
        this.checkAppinit = false;
        this.cardsDataForCvv = {};
        this.isMFARequired = false;
        this.rememberdeviceregflag = false;
        this.phoneNumber = "";
        this.email = "";
        this.userList = [];
        this.unmaskedphoneNumber = "";
        this.unmaskedEmail = "";
        this.MFAresponse = "";
        /**   numberOfAsyncForLogin
         *  1.getUser
         *  2.getRefreshAccountsFromDB
         *  3.getDeviceRegistration
         *  4.getAccountsPostLogin
         *  5.getPFMPieChartData
         *  6.getPFMBarGraphData
         */
        scope_AuthPresenter.numberOfAsyncForLogin = 7;
    }
    inheritsFrom(Auth_PresentationController, kony.mvc.Presentation.BasePresenter);
    Auth_PresentationController.prototype.initializePresentationController = function() {};
    Auth_PresentationController.prototype.showLoginForm = function() {
        this.presentUserInterface('frmLogin', {});
    };
    Auth_PresentationController.prototype.firstTimeLoginDone = function() {
        var storMan = applicationManager.getStorageManager();
        storMan.setStoredItem("firstTimeLogin", "Done");
    };
    Auth_PresentationController.prototype.startUpCompleted = function() {
        var configManager = applicationManager.getConfigurationManager();
        configManager.isStartupCompleted = true;
    };
    Auth_PresentationController.prototype.isStartUpComplete = function() {
        var configManager = applicationManager.getConfigurationManager();
        return configManager.isStartupCompleted == true ? true : false;
    };
    Auth_PresentationController.prototype.onLogout = function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authManger = applicationManager.getAuthManager();
        authManger.logout(this.presentationLogoutSuccess, this.presentationLogoutError);
    };
    Auth_PresentationController.prototype.presentationLogoutError = function(resError) {
        var MenuHandler = applicationManager.getMenuHandler();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navMan = applicationManager.getNavigationManager();
        applicationManager.clearBusinessDataMemebers();
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        userPreferencesManager.isLoggedIn = false;
        applicationManager.getDataforLogin();
        navMan.clearStack();
        navMan.navigateTo("frmLogin");
        navMan.destroyForms();
        navMan.clearEntryPointTable();
        MenuHandler.forceTouchFlow = "";
        scope_AuthPresenter.logger.log("resError");
    };
    Auth_PresentationController.prototype.presentationLogoutSuccess = function(resSuccess) {
        var MenuHandler = applicationManager.getMenuHandler();
        var navMan = applicationManager.getNavigationManager();
        applicationManager.clearBusinessDataMemebers();
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        userPreferencesManager.isLoggedIn = false;
        applicationManager.getDataforLogin();
        navMan.clearStack();
        navMan.navigateTo("frmLogin");
        navMan.destroyForms();
        navMan.clearEntryPointTable();
        MenuHandler.forceTouchFlow = "";
        scope_AuthPresenter.logger.log("resSuccess");
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
    Auth_PresentationController.prototype.onLogin = function(UsernamePasswordJSON, formContext) {
        scope_AuthPresenter.rememberdeviceregflag = false;
        applicationManager.getPresentationUtility().showLoadingScreen();
        var validationManager = applicationManager.getValidationUtilManager();
        var navManager = applicationManager.getNavigationManager();
        Auth_PresentationController.UsernamePasswordJSON = UsernamePasswordJSON;
        if (validationManager.isValidUserName(UsernamePasswordJSON.username) && validationManager.isValidUserName(UsernamePasswordJSON.password)) {
            var authManger = applicationManager.getAuthManager();
            authManger.login(UsernamePasswordJSON, this.presentationLoginSuccess.bind(formContext), this.presentationLoginError);
        } else {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
            controller.bindLoginErrorMessage(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Invalid.Username.or.Password"));
        }
    };
    Auth_PresentationController.prototype.idleIimeOutCallback = function() {
        scope_AuthPresenter.onLogout();
    };
    Auth_PresentationController.prototype.presentationLoginSuccess = function(resSuccess) {
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        var configManager = applicationManager.getConfigurationManager();
        configManager.modifyHamburgerMenuItems();
        var navManager = applicationManager.getNavigationManager();
        var loggerManager = applicationManager.getLoggerManager();
        var userMan = applicationManager.getUserPreferencesManager();
        var userName = userMan.getUserName();
        loggerManager.setUserID(userName);
        userPreferencesManager.isLoggedIn = true;
        kony.application.registerForIdleTimeout(configManager.constants.IDLE_TIMEOUT, scope_AuthPresenter.idleIimeOutCallback);
        if (scope_AuthPresenter.currentAuthMode == "password") {
            scope_AuthPresenter.currentAuthMode = "";
            if (userPreferencesManager.isNewUser(Auth_PresentationController.UsernamePasswordJSON.username)) userPreferencesManager.clearUserData();
        }
        var tempLoginData = navManager.getCustomInfo("frmLogin");
        scope_AuthPresenter.setRememberMeFlag(tempLoginData.isRememberMeOn);
        if (Auth_PresentationController.UsernamePasswordJSON) {
            userPreferencesManager.saveUserName(Auth_PresentationController.UsernamePasswordJSON.username);
            userPreferencesManager.savePassword(Auth_PresentationController.UsernamePasswordJSON.password);
            userPreferencesManager.savetempUserName(Auth_PresentationController.UsernamePasswordJSON.username);
        }
        scope_AuthPresenter.isLoginSuccess();
        scope_AuthPresenter.trackRegDevice();
    };
    Auth_PresentationController.prototype.deviceregstatus = function() {
        var registrationManager = applicationManager.getRegistrationManager();
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var record = {
            "deviceId": deviceUtilManager.getDeviceInfo().deviceID
        };
        registrationManager.updateDeviceRegistrationStatus(record, scope_AuthPresenter.presentationDeviceRegSuccess, scope_AuthPresenter.presentationDeviceRegError);
    };
    Auth_PresentationController.prototype.presentationDeviceRegSuccess = function(resDeviceSuc) {
        scope_AuthPresenter.setDeviceRegisterflag(true);
        scope_AuthPresenter.asyncManager.setSuccessStatus(7, resDeviceSuc);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.navigationAfterLogin();
        }
    };
    Auth_PresentationController.prototype.presentationDeviceRegError = function(resDeviceErr) {
        //scope_AuthPresenter.asyncManager.setErrorStatus(7, resDeviceErr);
        //applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resDeviceErr["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resDeviceErr);
        } else {
            scope_AuthPresenter.asyncManager.setSuccessStatus(7, resDeviceErr);
            kony.ui.Alert(resDeviceErr);
        }
    };
    Auth_PresentationController.prototype.mfaLoginFlow = function(response) {
        var mfaman = applicationManager.getMFAManager();
        var authManger = applicationManager.getAuthManager();
        var param = mfaman.getServicekey();
        authManger.loginMFA(param, scope_AuthPresenter.loginMFASuccessCallback, scope_AuthPresenter.loginMFAErrorCallback);
    };
    Auth_PresentationController.prototype.loginMFASuccessCallback = function(res) {
        scope_AuthPresenter.postLoginServices();
    };
    Auth_PresentationController.prototype.loginMFAErrorCallback = function(error) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (error["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
        }
    };
    Auth_PresentationController.prototype.presentationLoginError = function(resError) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
        var errMsg = resError.errmsg.errorMessage;
        controller.bindLoginErrorMessage(errMsg);
    };
    Auth_PresentationController.prototype.isLoginSuccess = function() {
        var authManger = applicationManager.getAuthManager();
        var mfarespone = authManger.getMfaDetails();
        if (mfarespone["mfa_meta"]["MFAAttributes"] && mfarespone["mfa_meta"]["MFAAttributes"]["isMFARequired"] === "true") {
            scope_AuthPresenter.isMFARequired = true;
            var deviceregval = mfarespone["mfa_meta"]["MFAAttributes"]["isDeviceRegistered"];
            if (deviceregval == "true") {
                scope_AuthPresenter.setDeviceRegisterflag(true);
            } else {
                scope_AuthPresenter.setDeviceRegisterflag(false);
            }
            var mfaJSON = {
                "flowType": "LoginMFA",
                "response": mfarespone["mfa_meta"]
            };
            applicationManager.getMFAManager().initMFAFlow(mfaJSON);
        } else {
            var authManger = applicationManager.getAuthManager();
            var userattributes = authManger.getUserAttributes(scope_AuthPresenter.userAttributesSuccessCallback, scope_AuthPresenter.userAttributesErrorCallback);
        }
    };
    Auth_PresentationController.prototype.userAttributesSuccessCallback = function(res) {
        scope_AuthPresenter.isMFARequired = false;
        if (res.isDeviceRegistered == "true") {
            scope_AuthPresenter.setDeviceRegisterflag(true);
            scope_AuthPresenter.rememberdeviceregflag = true;
        } else {
            scope_AuthPresenter.setDeviceRegisterflag(false);
            scope_AuthPresenter.rememberdeviceregflag = false;
        }
        scope_AuthPresenter.postLoginServices();
    };
    Auth_PresentationController.prototype.userAttributesErrorCallback = function(error) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (error["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
        }
    };
    Auth_PresentationController.prototype.postLoginServices = function() {
        var configManager = applicationManager.getConfigurationManager();
        var main_user = applicationManager.getUserPreferencesManager().getUserName();
        var accountManager = applicationManager.getAccountManager();
        if (scope_AuthPresenter.isMFARequired === true && scope_AuthPresenter.rememberdeviceregflag === true) {
            scope_AuthPresenter.numberOfAsyncForLogin = 8;
        } else {
            scope_AuthPresenter.numberOfAsyncForLogin = 7;
        }
        scope_AuthPresenter.asyncManager.initiateAsyncProcess(scope_AuthPresenter.numberOfAsyncForLogin);
        scope_AuthPresenter.fetchExternalBanksAndAccounts(main_user);
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        userPreferencesManager.fetchUser(scope_AuthPresenter.presentationUserSuccess, scope_AuthPresenter.presentationUserError);
        //  scope_AuthPresenter.getDeviceRegistrationStatus(); //later need to check
        if (scope_AuthPresenter.isMFARequired === true && scope_AuthPresenter.rememberdeviceregflag === true) {
            scope_AuthPresenter.deviceregstatus();
        }
        scope_AuthPresenter.getAllAccounts();
        var messageManager = applicationManager.getMessagesManager();
        messageManager.fetchNumberOfUnreadMessages(function() {}, function() {});
        var currentDate = new Date();
        accountManager.getPFMPieChartData(parseInt(currentDate.getMonth()) + 1, currentDate.getFullYear(), scope_AuthPresenter.getPFMPieSuccess, scope_AuthPresenter.getPFMPieFailure);
        accountManager.getPFMBarGraphData(currentDate.getFullYear(), scope_AuthPresenter.getPFMBarSuccess, scope_AuthPresenter.getPFMBarFailure);
        var params = {
            "userName": main_user
        };
        userPreferencesManager.fetchEntitlementsForUser(params, scope_AuthPresenter.fetchEntitlementsForUserSuccess, scope_AuthPresenter.fetchEntitlementsForUserError);
        userPreferencesManager.showPasswordResetWarning(params, scope_AuthPresenter.showPasswordResetWarningSuccess, scope_AuthPresenter.showPasswordResetWarningError);
    };
    Auth_PresentationController.prototype.showPasswordResetWarningSuccess = function(response) {
        scope_AuthPresenter.asyncManager.setSuccessStatus(1, response);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.navigationAfterLogin();
        }
    };
    Auth_PresentationController.prototype.showPasswordResetWarningError = function(response) {
        scope_AuthPresenter.asyncManager.setErrorStatus(1, response);
        //applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (response["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
    };
    Auth_PresentationController.prototype.fetchEntitlementsForUserSuccess = function(response) {
        scope_AuthPresenter.asyncManager.setSuccessStatus(6, response);
        var cm = applicationManager.getConfigurationManager();
        var isBillPayAvailable = true;
        var isTransfersAvailable = true;
        var quickActionItems = JSON.parse(JSON.stringify(cm.quickActionItems));
        if (cm.getConfigurationValue("isBillPayEnabled") !== "true") {
            quickActionItems.splice(1, 1);
            isBillPayAvailable = false;
        }
        if (cm.getConfigurationValue("isKonyBankAccountsTransfer") !== "true" && cm.getConfigurationValue("isOtherKonyAccountsTransfer") !== "true" && cm.getConfigurationValue("isOtherBankAccountsTransfer") !== "true" && cm.getConfigurationValue("isInternationalAccountsTransfer") !== "true") {
            if (isBillPayAvailable) {
                quickActionItems.splice(2, 1);
            } else {
                quickActionItems.splice(1, 1);
            }
            isTransfersAvailable = false;
        }
        if (cm.getConfigurationValue("isRDCEnabled") !== "true") {
            if (isBillPayAvailable && isTransfersAvailable) {
                quickActionItems.splice(3, 1);
            } else if ((!isBillPayAvailable && isTransfersAvailable) || (isBillPayAvailable && !isTransfersAvailable)) {
                quickActionItems.splice(2, 1);
            } else {
                quickActionItems.splice(1, 1);
            }
        }
        var actionSet = kony.forcetouch.setQuickActionItems(quickActionItems);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.navigationAfterLogin();
        }
    };
    Auth_PresentationController.prototype.fetchEntitlementsForUserError = function(response) {
        scope_AuthPresenter.asyncManager.setErrorStatus(6, response);
    };
    Auth_PresentationController.prototype.getPFMPieSuccess = function(response) {
        var configManager = applicationManager.getConfigurationManager();
        var navManager = applicationManager.getNavigationManager();
        scope_AuthPresenter.asyncManager.setSuccessStatus(3, response);
        navManager.setCustomInfo("frmDashboardPFMPie", response);
        //((scope_AuthPresenter.asyncManager.areAllservicesDone(5) && !configManager.isAggregatedExternalAccountEnabled()) || (configManager.isAggregatedExternalAccountEnabled() &&
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.navigationAfterLogin();
        }
    };
    Auth_PresentationController.prototype.getPFMPieFailure = function(response) {
        scope_AuthPresenter.asyncManager.setErrorStatus(3, response);
    };
    Auth_PresentationController.prototype.getPFMBarSuccess = function(response) {
        var navManager = applicationManager.getNavigationManager();
        var configManager = applicationManager.getConfigurationManager();
        scope_AuthPresenter.asyncManager.setSuccessStatus(4, response);
        navManager.setCustomInfo("frmDashboardPFMBar", response);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.navigationAfterLogin();
        }
    };
    Auth_PresentationController.prototype.getPFMBarFailure = function(response) {
        scope_AuthPresenter.asyncManager.setErrorStatus(4, response);
    };
    Auth_PresentationController.prototype.fetchAccounts = function(user_id) {
        var accountManager = applicationManager.getAccountManager();
        accountManager.getUserAccounts(user_id, this.fetchAccountsSuccess.bind(this), this.fetchAccountsFailure.bind(this));
    };
    Auth_PresentationController.prototype.fetchAccountsSuccess = function(response) {
        var configManager = applicationManager.getConfigurationManager();
        scope_AuthPresenter.asyncManager.setSuccessStatus(5, response);
        var navManager = applicationManager.getNavigationManager();
        var custominfo = navManager.getCustomInfo("frmDashboardAggregated");
        if (!custominfo) {
            custominfo = {};
        }
        custominfo.accountData = response;
        navManager.setCustomInfo("frmDashboardAggregated", custominfo);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.navigationAfterLogin();
        }
    };
    Auth_PresentationController.prototype.fetchAccountsFailure = function(response) {
        kony.ui.Alert("Something went wrong - Fetching External Accounts");
        scope_AuthPresenter.asyncManager.setErrorStatus(5, response);
        if (response["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
    };
    Auth_PresentationController.prototype.fetchExternalBanksAndAccounts = function(user_id) {
        var navManager = applicationManager.getNavigationManager();
        var configManager = applicationManager.getConfigurationManager();
        if (!configManager.isAggregatedExternalAccountEnabled()) {
            scope_AuthPresenter.asyncManager.setSuccessStatus(5, []);
            navManager.setCustomInfo("frmDashboardAggregated", {
                "accountData": []
            });
            if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
                scope_AuthPresenter.navigationAfterLogin();
            }
        } else {
            scope_AuthPresenter.fetchAccounts(user_id);
        }
    };
    Auth_PresentationController.prototype.getDeviceRegistrationStatus = function() {
        var registrationManager = applicationManager.getRegistrationManager();
        //var deviceUtilManager = applicationManager.getDeviceUtilManager();
        //var deviceID = deviceUtilManager.getDeviceInfo().deviceID;
        //var criteria = kony.mvc.Expression.eq("deviceId", deviceID);
        var userMan = applicationManager.getUserPreferencesManager();
        var userName = userMan.getUserName();
        var criteria = kony.mvc.Expression.eq("UserName", userName);
        registrationManager.fetchDevRegistrationStatus(criteria, scope_AuthPresenter.presentationDeviceRegistrationSuccess, scope_AuthPresenter.presentationDeviceRegistrationError);
    };
    Auth_PresentationController.prototype.getAllAccounts = function() {
        var accountManager = applicationManager.getAccountManager();
        accountManager.fetchInternalAccounts(scope_AuthPresenter.presentationAccountsSucc, scope_AuthPresenter.presentationAccountsErr);
    };
    Auth_PresentationController.prototype.presentationAccountsSucc = function(resAccountSuc) {
        var navManager = applicationManager.getNavigationManager();
        var configManager = applicationManager.getConfigurationManager();
        scope_AuthPresenter.logger.log(resAccountSuc);
        scope_AuthPresenter.asyncManager.setSuccessStatus(2, resAccountSuc);
        var accountObj = applicationManager.getAccountManager();
        var accountData = accountObj.getInternalAccounts();
        var custominfo = navManager.getCustomInfo("frmDashboard");
        if (!custominfo) {
            custominfo = {};
        }
        custominfo.accountData = accountData;
        navManager.setCustomInfo("frmDashboard", custominfo);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.navigationAfterLogin();
        }
    };
    Auth_PresentationController.prototype.presentationAccountsErr = function(resAccountErr) {
        scope_AuthPresenter.asyncManager.setErrorStatus(2, resAccountErr);
        scope_AuthPresenter.logger.log(resAccountErr);
        if (resAccountErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resAccountErr);
    };
    Auth_PresentationController.prototype.navigationAfterLogin = function() {
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        var navManger = applicationManager.getNavigationManager();
        if (scope_AuthPresenter.isMFARequired === "false") {
            scope_AuthPresenter.goToAccounts();
        } else {
            if (userPreferencesManager.isRememberMeOn() === false) scope_AuthPresenter.goToAccounts();
            else {
                if (scope_AuthPresenter.rememberdeviceregflag === false) {
                    //scope_AuthPresenter.setDeviceRegisterflag(false);
                    scope_AuthPresenter.goToAccounts();
                } else {
                    scope_AuthPresenter.setDeviceRegisterflag(true);
                    if (userPreferencesManager.isFirstTimeLogin()) {
                        var keys = scope_AuthPresenter.getAuthFlags();
                        keys.popUpMsg = "";
                        navManger.setCustomInfo("frmDevRegLoginType", keys);
                        var controller = applicationManager.getPresentationUtility().getController('frmDevRegLoginType', true);
                        controller.tempLoginMode = "password";
                        navManger.navigateTo("frmDevRegLoginType");
                    } else scope_AuthPresenter.goToAccounts();
                }
            }
        }
    };
    Auth_PresentationController.prototype.goToAccounts = function() {
        var MenuHandler = applicationManager.getMenuHandler();
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        var configManager = applicationManager.getConfigurationManager();
        var navManger = applicationManager.getNavigationManager();
        var check = false;
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            if (userPreferencesManager.isRememberMeOn() == false) check = true;
            else if ((scope_AuthPresenter.asyncManager.getData(1)[0].status !== "false") && (userPreferencesManager.isFirstTimeLogin() != true)) check = true;
            if (check) {
                if (MenuHandler.forceTouchFlow !== "") {
                    // kony.runOnMainThread(scope_AuthPresenter.appForceTouchCallBack.bind(scope_AuthPresenter),[MenuHandler.forceTouchFlow]);
                    scope_AuthPresenter.appForceTouchCallBack(MenuHandler.forceTouchFlow);
                } else {
                    if (configManager.isAggregatedExternalAccountEnabled()) {
                        scope_AuthPresenter.fetchPostloginAds();
                        applicationManager.getPresentationUtility().dismissLoadingScreen();
                    } else {
                        var accountObj = applicationManager.getAccountManager();
                        var accountData = accountObj.getInternalAccounts();
                        var custominfo = navManger.getCustomInfo("frmDashboard");
                        if (!custominfo) {
                            custominfo = {};
                        }
                        custominfo.accountData = accountData;
                        navManger.setCustomInfo("frmDashboard", custominfo);
                        scope_AuthPresenter.fetchPostloginAds();
                        applicationManager.getPresentationUtility().dismissLoadingScreen();
                    }
                }
            }
        }
    };
    Auth_PresentationController.prototype.defaultLoginToAccounts = function() {
        var MenuHandler = applicationManager.getMenuHandler();
        var configManager = applicationManager.getConfigurationManager();
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            {
                if (MenuHandler.forceTouchFlow !== "") {
                    //kony.runOnMainThread(scope_AuthPresenter.appForceTouchCallBack.bind(scope_AuthPresenter),[MenuHandler.forceTouchFlow]);
                    scope_AuthPresenter.appForceTouchCallBack(MenuHandler.forceTouchFlow);
                } else {
                    var navManger = applicationManager.getNavigationManager();
                    var accountObj = applicationManager.getAccountManager();
                    var accountData = "";
                    if (configManager.isAggregatedExternalAccountEnabled()) {
                        scope_AuthPresenter.fetchPostloginAds();
                        // navManger.navigateTo("frmDashboardAggregated");
                    } else {
                        accountData = accountObj.getInternalAccounts();
                        var custominfo = navManger.getCustomInfo("frmDashboard");
                        if (!custominfo) {
                            custominfo = {};
                        }
                        custominfo.accountData = accountData;
                        navManger.setCustomInfo("frmDashboard", custominfo);
                        scope_AuthPresenter.fetchPostloginAds();
                        //navManger.navigateTo("frmDashboardAggregated");
                    }
                }
            }
        }
    };
    Auth_PresentationController.prototype.appForceTouchCallBack = function(quickActionItem) {
        var MenuHandler = applicationManager.getMenuHandler();
        if (quickActionItem) {
            if (quickActionItem == "ATM finder") {
                var currentForm = kony.application.getCurrentForm().id;
                var controller = applicationManager.getPresentationUtility().getController(currentForm, true);
                var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
                var scope = locateUsModule.presentationController;
                //scope.presentLocateUsView(true,controller);
                kony.runOnMainThread(scope.presentLocateUsView1.bind(scope), [true, currentForm]);
                //locateUsModule.presentationController.presentLocateUsView(true,controller);
            } else if (quickActionItem == "Pay a Bill") {
                var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
                billPayMod.presentationController.fetchToPayees();
                MenuHandler.forceTouchFlow = "";
            } else if (quickActionItem == "Transfer Money") {
                var navMan = applicationManager.getNavigationManager();
                navMan.navigateTo("frmTransactionMode");
                MenuHandler.forceTouchFlow = "";
            } else if (quickActionItem == "New Check Deposit") {
                var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
                checkDepositModule.presentationController.commonFunctionForNavigation("frmDepositToCD");
                MenuHandler.forceTouchFlow = "";
            }
        }
    };
    Auth_PresentationController.prototype.presentationUserSuccess = function(resUserSucess) {
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        var configManager = applicationManager.getConfigurationManager();
        userPreferencesManager.setUserObj(resUserSucess);
        userPreferencesManager.saveUserFirstName(resUserSucess[0].userfirstname);
        userPreferencesManager.saveUserLastName(resUserSucess[0].userlastname);
        scope_AuthPresenter.asyncManager.setSuccessStatus(0, resUserSucess);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.navigationAfterLogin();
        }
        scope_AuthPresenter.getAllAccounts();
    };
    Auth_PresentationController.prototype.presentationUserError = function(resUserError) {
        scope_AuthPresenter.asyncManager.setErrorStatus(0, resUserError);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
        if (resUserError["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resUserError);
        else controller.bindGenericError();
    };
    Auth_PresentationController.prototype.presentationDeviceRegistrationSuccess = function(resDeviceSuc) {
        var configManager = applicationManager.getConfigurationManager();
        scope_AuthPresenter.asyncManager.setSuccessStatus(1, resDeviceSuc);
        if (resDeviceSuc[0].status !== "false") scope_AuthPresenter.setDeviceRegisterflag(true);
        else scope_AuthPresenter.setDeviceRegisterflag(false);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.navigationAfterLogin();
        }
    };
    Auth_PresentationController.prototype.presentationDeviceRegistrationError = function(resDeviceErr) {
        scope_AuthPresenter.asyncManager.setErrorStatus(1, resDeviceErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resDeviceErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resDeviceErr);
    };
    Auth_PresentationController.prototype.getAuthFlags = function() {
        var keys = {};
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        var devManager = applicationManager.getDeviceUtilManager();
        keys.isPinEnabled = userPreferencesManager.isPinSet();
        keys.isPinModeEnabled = userPreferencesManager.isPinModeEnabled();
        keys.isTouchIdEnabled = userPreferencesManager.isTouchIdEnabled();
        keys.isRememberMeOn = userPreferencesManager.isRememberMeOn();
        keys.isTouchIdSupported = devManager.isTouchIDSupported();
        keys.isFaceIdSupported = devManager.isFaceIdSupported();
        keys.isFaceIdAvailable = devManager.isFaceIdAvilable();
        keys.isDeviceregistered = userPreferencesManager.isDeviceRegistered();
        keys.defaultAuthMode = userPreferencesManager.getDefaultAuthMode();
        return keys;
    };
    Auth_PresentationController.prototype.isappInitDone = function() {
        if (scope_AuthPresenter.checkAppinit == true) return true;
        else return false;
    };
    Auth_PresentationController.prototype.updateDeviceRegistration = function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var registrationManager = applicationManager.getRegistrationManager();
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var record = {
            "deviceId": deviceUtilManager.getDeviceInfo().deviceID
        };
        registrationManager.updateDeviceRegistrationStatus(record, scope_AuthPresenter.presentationDeviceSuccess, scope_AuthPresenter.presentationDeviceError);
    };
    Auth_PresentationController.prototype.presentationDeviceSuccess = function(res) {
        scope_AuthPresenter.setDeviceRegisterflag(true);
        var keys = scope_AuthPresenter.getAuthFlags();
        keys.popUpMsg = kony.i18n.getLocalizedString("kony.mb.Device.Registration.Successful");
        var navManger = applicationManager.getNavigationManager();
        navManger.setCustomInfo("frmDevRegLoginType", keys);
        var controller = applicationManager.getPresentationUtility().getController('frmDevRegLoginType', true);
        controller.tempLoginMode = "password";
        navManger.navigateTo("frmDevRegLoginType");
    };
    Auth_PresentationController.prototype.presentationDeviceError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope_AuthPresenter.logger.log(err);
        if (err["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    };
    Auth_PresentationController.prototype.setDefaultMode = function(authMode) {
        var um = applicationManager.getUserPreferencesManager();
        um.setDefaultAuthMode(authMode);
    };
    Auth_PresentationController.prototype.setTouchIdflag = function(value) {
        var userManager = applicationManager.getUserPreferencesManager();
        userManager.upadateTouchIdFlag(value);
    };
    Auth_PresentationController.prototype.setFaceIdflag = function(value) {
        var userManager = applicationManager.getUserPreferencesManager();
        userManager.updateFaceIdFlag(value);
    };
    Auth_PresentationController.prototype.setPinflag = function(value) {
        var userManager = applicationManager.getUserPreferencesManager();
        userManager.updatePinFlag(value);
    };
    Auth_PresentationController.prototype.setAccountPreviewFlag = function(value) {
        var userManager = applicationManager.getUserPreferencesManager();
        userManager.updateAccountPreviewFlag(value);
    };
    Auth_PresentationController.prototype.setRememberMeFlag = function(value) {
        var userManager = applicationManager.getUserPreferencesManager();
        userManager.updateRememberMeFlag(value);
    };
    Auth_PresentationController.prototype.setDeviceRegisterflag = function(value) {
        var userManager = applicationManager.getUserPreferencesManager();
        userManager.updateDeviceRegisterFlag(value);
    };
    Auth_PresentationController.prototype.setLoginFeaturesOff = function() {
        var userManager = applicationManager.getUserPreferencesManager();
        userManager.updateRememberMeFlag(false);
        userManager.setDefaultAuthMode("password");
        userManager.updateAccountPreviewFlag(false);
        userManager.upadateTouchIdFlag(false);
        userManager.updateFaceIdFlag(false);
        userManager.updatePinFlag(false);
        userManager.clearUserCredentials();
        applicationManager.getDataforLogin();
    };
    Auth_PresentationController.prototype.showAccountPreview = function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var um = applicationManager.getUserPreferencesManager();
        if (um.isAccountPreviewEnabled()) {
            var userName = um.getUserName();
            var authParamKey = applicationManager.getDeviceUtilManager().getDeviceInfo().deviceID;
            var criteria = kony.mvc.Expression.and(kony.mvc.Expression.eq("userName", userName), kony.mvc.Expression.eq("deviceID", authParamKey));
            applicationManager.getAccountManager().fetchInternalAccountsPreLogin(criteria, accountPreviewSuccess, accountPreviewError);

            function accountPreviewSuccess(res) {
                var accPreviewData = res;
                var availableBal = 0;
                var currBal = 0;
                var outstandingBal = 0;
                var configManager = applicationManager.getConfigurationManager();
                for (var i = 0; i < accPreviewData.length; i++) {
                    var accountType = accPreviewData[i]["accountType"];
                    if (accPreviewData[i]["availableBalance"]) accPreviewData[i]["availableBalance"] = configManager.getCurrencyCode() + accPreviewData[i]["availableBalance"];
                    if (accPreviewData[i]["currentBalance"]) accPreviewData[i]["currentBalance"] = configManager.getCurrencyCode() + accPreviewData[i]["currentBalance"];
                    if (accPreviewData[i]["outstandingBalance"]) accPreviewData[i]["outstandingBalance"] = configManager.getCurrencyCode() + accPreviewData[i]["outstandingBalance"];
                    if (accPreviewData[i]["accountType"] == "CreditCard") accPreviewData[i]["outstandingBalance"] = "-" + currBal;
                    if (accountType === configManager.constants.CHECKING) {
                        accPreviewData[i]["accountType"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.availBal");
                    } else if (accountType === configManager.constants.SAVINGS) {
                        accPreviewData[i]["accountType"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.availBal");
                    } else if (accountType === configManager.constants.CREDITCARD) {
                        accPreviewData[i]["accountType"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.currBal");
                    } else if (accountType === configManager.constants.DEPOSIT) {
                        accPreviewData[i]["accountType"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.currBal");
                    } else if (accountType === configManager.constants.MORTGAGE) {
                        accPreviewData[i]["accountType"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.outstandingBal");
                    }
                    accPreviewData[i]["bankImg"] = "konybanklogo.png"
                }
                var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
                var fotmatUtilManager = applicationManager.getFormatUtilManager();
                var acctPreviewTimeStamp = fotmatUtilManager.getTimeStamp();
                controller.bindAccountPreViewData(accPreviewData, acctPreviewTimeStamp);
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            }

            function accountPreviewError(err) {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
                var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
                if (err["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
                else controller.bindGenericError(err.errorMessage);
            }
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
            controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Please.enable.Account.Preview"));
        }
    };
    Auth_PresentationController.prototype.enablePin = function(pin) {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        userPreferencesManager.createPin(pin, createPinSuccess, createPinError);

        function createPinSuccess(success) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var navManger = applicationManager.getNavigationManager();
            var userManager = applicationManager.getUserPreferencesManager();
            scope_AuthPresenter.setPinflag(true);
            userManager.getUserObj().isPinSet = "true";
            if (scope_AuthPresenter.flowType == "login") {
                var keys = scope_AuthPresenter.getAuthFlags();
                keys.popUpMsg = "";
                navManger.setCustomInfo("frmDevRegLoginType", keys);
                var msgData = {
                    popUpMsg: "Login Pin has been set successfully."
                };
                navManger.setCustomInfo("frmDevRegPinConfirmation", msgData);
                navManger.navigateTo("frmDevRegPinConfirmation");
            } else {
                var tempData = scope_AuthPresenter.getAuthFlags();
                navManger.setCustomInfo("frmPreferencesDefaultLogin", tempData);
                var msgData = {
                    popUpMsg: "Login Pin has been set successfully."
                };
                navManger.setCustomInfo("frmPreferencesPin", msgData);
                navManger.navigateTo("frmPreferencesPin");
            }
            scope_AuthPresenter.flowType = "";
        }

        function createPinError(err) {
            if (err["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
            else kony.ui.Alert(err.errorMessage)
        }
    };
    Auth_PresentationController.prototype.navigateToSSN = function(lastName) {
        scope_AuthPresenter.authManger.setForgotAttribute("userlastname", lastName);
        scope_AuthPresenter.commonFunctionForNavigation("frmForgotEnterSSN");
    };
    Auth_PresentationController.prototype.validateSSN = function(SSN) {
        var validationManager = applicationManager.getValidationUtilManager();
        var res = validationManager.isValidSSNNumber(SSN);
        if (res === true) {
            scope_AuthPresenter.authManger.setForgotAttribute("ssn", SSN);
            scope_AuthPresenter.commonFunctionForNavigation("frmForgotEnterDOB");
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterSSN', true);
            controller.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enterSSN"));
        }
    };
    Auth_PresentationController.prototype.validateDOB = function(dob) {
        var validationManager = applicationManager.getValidationUtilManager();
        var res = validationManager.isDOBValid(dob);
        if (res === true) {
            scope_AuthPresenter.authManger.setForgotAttribute("dateOfBirth", dob);
            var fetchUserNameJSON = scope_AuthPresenter.authManger.getForgotObject();
            scope_AuthPresenter.authManger.fetchUserName(fetchUserNameJSON, scope_AuthPresenter.presentationUserFetchSuccess, scope_AuthPresenter.presentationUserFetchError);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterDOB', true);
            controller.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validDOB"));
        }
    };
    Auth_PresentationController.prototype.presentationUserFetchSuccess = function(res) {
        var username = res[0].userName;
        var data = {
            "UserName": username
        };
        scope_AuthPresenter.authManger.setPrimarykeyAttribute(data);
        scope_AuthPresenter.commonFunctionForNavigation("frmForgotMain");
    };
    Auth_PresentationController.prototype.presentationUserFetchError = function(err) {
        scope_AuthPresenter.logger.log("####Error while Fetching user : Forgot username flow");
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterLastName', true);
            controller.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.usernameUnavailableMsg"));
        }
    };
    Auth_PresentationController.prototype.forgotNavigation = function(usernameTxtBoxValue) {
        if (usernameTxtBoxValue === '' || usernameTxtBoxValue === null || usernameTxtBoxValue === undefined) {
            scope_AuthPresenter.clearForgotObject();
            scope_AuthPresenter.commonFunctionForNavigation("frmForgotEnterLastName");
        } else {
            var usernameFromForgotUsername = scope_AuthPresenter.authManger.getForgotObject().UserName;
            if (usernameFromForgotUsername === '' || usernameFromForgotUsername === null || usernameFromForgotUsername === undefined) {
                scope_AuthPresenter.clearForgotObject();
                scope_AuthPresenter.commonFunctionForNavigation("frmForgotEnterLastName");
            } else {
                if (usernameTxtBoxValue === usernameFromForgotUsername) {
                    scope_AuthPresenter.commonFunctionForNavigation("frmForgotSelectMethod");
                } else {
                    scope_AuthPresenter.clearForgotObject();
                    scope_AuthPresenter.commonFunctionForNavigation("frmForgotEnterLastName");
                }
            }
        }
    };
    Auth_PresentationController.prototype.navigateToLogin = function(UserName) {
        var navManager = applicationManager.getNavigationManager();
        var loginData = navManager.getCustomInfo("frmLogin");
        if (UserName && UserName != undefined && UserName != "") {
            loginData.usernameFromForgotUsername = UserName;
        } else {
            loginData.usernameFromForgotUsername = "";
            scope_AuthPresenter.clearForgotObject();
        }
        navManager.setCustomInfo("frmLogin", loginData);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope_AuthPresenter.commonFunctionForNavigation("frmLogin");
    };
    Auth_PresentationController.prototype.navigateToLoginAfterPasswordUpdate = function(UserName) {
        var navManager = applicationManager.getNavigationManager();
        if (UserName && UserName != undefined && UserName != "") {
            var loginData = navManager.getCustomInfo("frmLogin");
            loginData.usernameFromForgotUsername = UserName;
            loginData.showPasswordUpdatedSuccessMessage = true;
            navManager.setCustomInfo("frmLogin", loginData);
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope_AuthPresenter.commonFunctionForNavigation("frmLogin");
    };
    Auth_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo(formName);
    };
    Auth_PresentationController.prototype.navigateToCVV = function() {
        var username = scope_AuthPresenter.authManger.getForgotObject().UserName;
        var cardsManager = applicationManager.getCardsManager();
        cardsManager.fetchAllCardsWithUsername(username, scope_AuthPresenter.presentationCardsFetchSuccess, scope_AuthPresenter.presentationCardsFetchError);
    };
    Auth_PresentationController.prototype.presentationCardsFetchSuccess = function(res) {
        var cardsData = res;
        if (cardsData.length > 0) {
            scope_AuthPresenter.cardsDataForCvv = cardsData;
            scope_AuthPresenter.commonFunctionForNavigation("frmForgotEnterCVV");
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotSelectMethod', true);
            var errormsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.forgot.noCardsAvailable");
            controller.bindGenericError(errormsg);
        }
    };
    Auth_PresentationController.prototype.presentationCardsFetchError = function(err) {
        scope_AuthPresenter.logger.log("####Error while Fetching cards : Forgot username/password flow");
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
        } else {
            scope_AuthPresenter.logger.log("error finding cards");
        }
    };
    Auth_PresentationController.prototype.requestOTP = function() {
        var requestOTPJSON = scope_AuthPresenter.authManger.getForgotObject();
        scope_AuthPresenter.authManger.fetchOTP(requestOTPJSON, scope_AuthPresenter.presentationOtpRequestSuccess, scope_AuthPresenter.presentationOtpRequestError);
    };
    Auth_PresentationController.prototype.presentationOtpRequestSuccess = function(resSuccess) {
        var otp = resSuccess.otp;
        scope_AuthPresenter.commonFunctionForNavigation("frmForgotEnterSecurityCode");
    };
    Auth_PresentationController.prototype.presentationOtpRequestError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope_AuthPresenter.logger.log("####Error while requesting OTP : Forgot username flow");
        if (err["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
    };
    Auth_PresentationController.prototype.validateCVV = function(cvv, cardNumber) {
        var validationUtilManager = applicationManager.getValidationUtilManager();
        if (validationUtilManager.isValidCVV(cvv)) {
            scope_AuthPresenter.authManger.setForgotAttribute("cvv", cvv);
            scope_AuthPresenter.authManger.setForgotAttribute("cardNumber", cardNumber);
            var verifyCVVJSon = scope_AuthPresenter.authManger.getForgotObject();
            scope_AuthPresenter.authManger.verifyCVV(verifyCVVJSon, scope_AuthPresenter.presentationCvvValidationSuccess, scope_AuthPresenter.presentationCvvValidationError);
        } else {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterCVV', true);
            var errormsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.enterCVV");
            controller.bindGenericError(errormsg);
        }
    };
    Auth_PresentationController.prototype.presentationCvvValidationSuccess = function(resSuccess) {
        scope_AuthPresenter.commonFunctionForNavigation("frmForgotCreatePassword");
    };
    Auth_PresentationController.prototype.presentationCvvValidationError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope_AuthPresenter.logger.log("####Error while validating cvv : Forgot username flow");
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterCVV', true);
            var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.invalidCVV");
            controller.bindGenericError(errorMsg);
        }
    };
    Auth_PresentationController.prototype.resendOTP = function() {
        var requestOTPJSON = scope_AuthPresenter.authManger.getForgotObject();
        scope_AuthPresenter.authManger.fetchOTP(requestOTPJSON, scope_AuthPresenter.presentationOtpResendSuccess, scope_AuthPresenter.presentationOtpResendError);
    };
    Auth_PresentationController.prototype.presentationOtpResendSuccess = function(resSuccess) {
        var otp = resSuccess.otp;
        var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterSecurityCode', true);
        controller.onResendOTP();
    };
    Auth_PresentationController.prototype.presentationOtpResendError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope_AuthPresenter.logger.log("####Error while resending otp : Forgot username flow");
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterSecurityCode', true);
            var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enterValidOTP");
            controller.bindGenericError(errorMsg);
        }
    };
    Auth_PresentationController.prototype.validateOTP = function(otp) {
        var validationUtilManager = applicationManager.getValidationUtilManager();
        if (validationUtilManager.isValidOTP(otp)) {
            scope_AuthPresenter.authManger.setForgotAttribute("Otp", otp);
            var verifyOTPJSON = scope_AuthPresenter.authManger.getForgotObject();
            scope_AuthPresenter.asyncManager.initiateAsyncProcess(2);
            scope_AuthPresenter.getPasswordRulesAndPolicy(scope_AuthPresenter.getPasswordRulesAndPolicySuccessCallback, scope_AuthPresenter.getPasswordRulesAndPolicyErrorCallback);
            scope_AuthPresenter.authManger.verifyOTP(verifyOTPJSON, scope_AuthPresenter.presentationOtpValidationSuccess, scope_AuthPresenter.presentationOtpValidationError);
        } else {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterSecurityCode', true);
            var errormsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.enterSecurityCode");
            controller.bindGenericError(errormsg);
        }
    };
    Auth_PresentationController.prototype.presentationOtpValidationSuccess = function(resSuccess) {
        scope_AuthPresenter.asyncManager.setSuccessStatus(0, resSuccess);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(2)) {
            var data = navManager.getCustomInfo("frmForgotCreatePassword");
            res = scope_AuthPresenter.asyncManager.getData(1);
            if (data && data !== null) {
                data.passwordPolicy = res.passwordpolicy.content;
            } else {
                data = {
                    "passwordPolicy": res.passwordpolicy.content
                };
            }
            navManager.setCustomInfo("frmForgotCreatePassword", data);
            var validationUtility = applicationManager.getValidationUtilManager();
            validationUtility.createRegexForPasswordValidation(res.passwordrules);
            scope_AuthPresenter.commonFunctionForNavigation("frmForgotCreatePassword");
        }
    };
    Auth_PresentationController.prototype.presentationOtpValidationError = function(err) {
        scope_AuthPresenter.asyncManager.setErrorStatus(0, err);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterSecurityCode', true);
            var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.invalidSecurityCode");
            controller.bindGenericError(errorMsg);
        }
    };
    Auth_PresentationController.prototype.validatePassword = function(password) {
        var validationUtilManager = applicationManager.getValidationUtilManager();
        var controller = applicationManager.getPresentationUtility().getController('frmForgotCreatePassword', true);
        if (!validationUtilManager.isValidPassword(password)) {
            controller.showFlxSecurityRequirements();
        } else {
            controller.passwordValid();
        }
    };
    Auth_PresentationController.prototype.updatePassword = function(newPassword) {
        scope_AuthPresenter.authManger.setForgotAttribute("Password", newPassword);
        var resetPasswordJSON = {
            "serviceKey": scope_AuthPresenter.authManger.getServicekey(),
            "UserName": scope_AuthPresenter.authManger.getUserName(),
            "Password": newPassword
        };
        scope_AuthPresenter.authManger.resetPassword(resetPasswordJSON, scope_AuthPresenter.presentationUpdatePasswordSuccess, scope_AuthPresenter.presentationUpdatePasswordError);
    };
    Auth_PresentationController.prototype.presentationUpdatePasswordSuccess = function(resSuccess) {
        var username = scope_AuthPresenter.authManger.getUserName();
        scope_AuthPresenter.clearForgotObject();
        scope_AuthPresenter.navigateToLoginAfterPasswordUpdate(username);
    };
    Auth_PresentationController.prototype.presentationUpdatePasswordError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
    };
    Auth_PresentationController.prototype.clearForgotObject = function() {
        scope_AuthPresenter.authManger.clearForgotObject();
    };
    Auth_PresentationController.prototype.getForgotObjectForView = function() {
        var forgotObjView = JSON.parse(JSON.stringify(scope_AuthPresenter.authManger.getForgotObject()));
        forgotObjView.cardsData = scope_AuthPresenter.cardsDataForCvv;
        return forgotObjView;
    };
    Auth_PresentationController.prototype.onPinLogin = function(pin) {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var userMan = applicationManager.getUserPreferencesManager();
        var userName = userMan.getUserName();
        var pinId = pin;
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var deviceID = deviceUtilManager.getDeviceInfo().deviceID;
        var data = {
            "UserName": userName,
            "pin": pin,
            "deviceId": deviceID
        };
        var authManger = applicationManager.getAuthManager();
        authManger.pinLogin(data, this.presentationLoginSuccess, this.presentationPinLoginError);
    };
    Auth_PresentationController.prototype.presentationPinLoginError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        else {
            var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
            controller.bindPinError(kony.i18n.getLocalizedString("kony.mb.Please.enter.a.valild.pin"));
        }
    };
    Auth_PresentationController.prototype.saveUserCredentialsOfExternalBank = function(username, password, sessionToken, mainUser, bankId, successCallback, errorCallback) {
        var loggerManager = applicationManager.getLoggerManager();
        loggerManager.log("----Start Auth_PresentationController.prototype.saveUserCredentialsOfExternalBank----");
        try {
            var authManager = applicationManager.getAuthManager();
            authManager.addExternalBankCredentials(username, password, sessionToken, mainUser, bankId, successCallback, errorCallback);
        } catch (err) {
            loggerManager.log("Error in saveUserCredentialsOfExternalBank");
        }
        loggerManager.log("----Start Auth_PresentationController.prototype.saveUserCredentialsOfExternalBank----");
    };
    Auth_PresentationController.prototype.authenticateUserInExternalBank = function(UserInfoJSON, successCallback, errorCallback) {
        var self = this;
        var loggerManager = applicationManager.getLoggerManager();
        applicationManager.getPresentationUtility().showLoadingScreen();
        var validationManager = applicationManager.getValidationUtilManager();
        var authManger = applicationManager.getAuthManager();
        authManger.loginExternalBank(UserInfoJSON, successCallback, errorCallback);
    };
    Auth_PresentationController.prototype.launchExternalBankLogin = function(selectedItem) {
        var loggerManager = applicationManager.getLoggerManager();
        loggerManager.log("----Start Auth_PresentationController.prototype.launchExternalBankLogin----");
        try {
            if (selectedItem === null || selectedItem === undefined) {
                throw "Invalid params: selectedItem";
            }
            var navigationManager = applicationManager.getNavigationManager();
            navigationManager.setCustomInfo("frmExternalBankLogin", {
                "identityProvider": selectedItem.identityProvider,
                "logo": selectedItem.logo,
                "isOauth2": selectedItem.isOauth2,
                "bankName": selectedItem.bankName,
                "bankId": selectedItem.bankId
            });
            navigationManager.navigateTo("frmExternalBankLogin");
        } catch (err) {
            loggerManager.log("Error in launchExternalBankLogin: " + JSON.stringify(err));
        }
        loggerManager.log("----End Auth_PresentationController.prototype.launchExternalBankLogin----");
    };
    Auth_PresentationController.prototype.getMobileNo = function() {
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        return userPreferencesManager.getUserPhone();
    };
    Auth_PresentationController.prototype.getEmail = function() {
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        return userPreferencesManager.getUserEmail();
    };
    Auth_PresentationController.prototype.hideFaceIdflex = function() {
        var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
        controller.flxCancelFIOnClick();
    };
    Auth_PresentationController.prototype.canPreloginAdsRenderedToUI = function() {
        var value = scope_AuthPresenter.dmManager.getRenderPreloginAds();
        return value;
    };
    Auth_PresentationController.prototype.setRenderPreloginAdsToTrue = function() {
        scope_AuthPresenter.dmManager.setRenderPreloginAds(true);
    };
    Auth_PresentationController.prototype.fetchPreloginAds = function() {
        if (!scope_AuthPresenter.dmManager.arePreLoginAdsFetched()) {
            var scope = this;
            var asyncManager = applicationManager.getAsyncManager();
            asyncManager.callAsync(
                [
                    asyncManager.asyncItem(scope_AuthPresenter.dmManager, 'getPreLoginAds'),
                ],
                function(asyncResponses) {
                    scope.campaignsCallback(asyncResponses.responses[0].data);
                });
            //scope_AuthPresenter.dmManager.getPreLoginAds(scope_AuthPresenter.fetchPreloginAdsSuccesCallback,scope_AuthPresenter.fetchPreloginAdsErrorCallback);
        } else {
            var preloginAdData = scope_AuthPresenter.dmManager.getPreLoginAds();
            return preloginAdData;
        }
    };
    Auth_PresentationController.prototype.campaignsCallback = function(response) {
        if (!kony.sdk.isNullOrUndefined(response)) this.fetchPreloginAdsSuccesCallback(response);
        else this.fetchPreloginAdsErrorCallback(response);
    };
    Auth_PresentationController.prototype.fetchPreloginAdsSuccesCallback = function(successResponse) {
        if (!scope_AuthPresenter.isStartUpComplete()) {
            scope_AuthPresenter.dmManager.setRenderPreloginAds(true);
        } else {
            var preloginAdData = successResponse;
            var maxNumOfPreloginAds = scope_AuthPresenter.dmManager.getMaxNumOfPreloginAds();
            var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
            if (preloginAdData.length > maxNumOfPreloginAds) {
                scope_AuthPresenter.logger.log("###Prelogin Ad's count exceeded maxNumOfAds : " + maxNumOfPreloginAds + " \n####Therefore Hiding them");
                controller.hideAds();
            } else if (preloginAdData.length === 0) {
                scope_AuthPresenter.logger.log("###Prelogin Ad's count is 0 \n####Therefore Hiding them");
                controller.hideAds();
            } else {
                scope_AuthPresenter.logger.log("###Succesfully fetched Prelogin ads");
                controller.bindAdData(preloginAdData);
            }
        }
    };
    Auth_PresentationController.prototype.fetchPreloginAdsErrorCallback = function(errorResponse) {
        scope_AuthPresenter.logger.log("###In Error callback while fetching prelogin ads : " + errorResponse + "\n####Therefore Hiding them");
        var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        controller.hideAds();
    };
    Auth_PresentationController.prototype.sendDmResponseForPreloginAds = function(navId) {
        var sessionId = scope_AuthPresenter.dmManager.getPreLoginAdsSessionId();
        var paramObj = {
            "sessionId": sessionId,
            "navigationId": navId
        };
        scope_AuthPresenter.dmManager.sendDmResponse(paramObj, scope_AuthPresenter.sendDmResponseForPreloginAdsSuccessCallback, scope_AuthPresenter.sendDmResponseForPreloginAdsErrorCallback);
    };
    Auth_PresentationController.prototype.sendDmResponseForPreloginAdsSuccessCallback = function(successResponse) {
        scope_AuthPresenter.logger.log("###Succesfully sent metrics to DMEngine");
    };
    Auth_PresentationController.prototype.sendDmResponseForPreloginAdsErrorCallback = function(errorResponse) {
        scope_AuthPresenter.logger.log("###Error in sending metrics to DMEngine : " + errorResponse);
    };
    Auth_PresentationController.prototype.fetchPostloginAds = function() {
        var isPostLoginAdsEnabled = applicationManager.getConfigurationManager().getIsPostLoginAdsEnabled();
        if (!isPostLoginAdsEnabled) {
            scope_AuthPresenter.navigateToDashboardFromAds();
        } else if (!scope_AuthPresenter.dmManager.arePostLoginAdsFetched()) {
            scope_AuthPresenter.dmManager.getPostLoginAds(scope_AuthPresenter.fetchPostLoginAdsPresentationSuccessCallback, scope_AuthPresenter.fetchPostLoginAdsPresentationErrorCallback);
        } else {
            var postLoginAds = scope_AuthPresenter.dmManager.getPostLoginAds();
            if (postLoginAds.length !== 0 && postLoginAds.length <= scope_AuthPresenter.dmManager.getMaxNumOfPostLoginAds()) {
                scope_AuthPresenter.commonFunctionForNavigation("frmFullScreenAds");
            } else {
                scope_AuthPresenter.navigateToDashboardFromAds();
            }
        }
    };
    Auth_PresentationController.prototype.fetchPostLoginAdsPresentationSuccessCallback = function(successResponse) {
        var postLoginAdData = successResponse;
        var maxNumOfPostLoginAds = scope_AuthPresenter.dmManager.getMaxNumOfPostLoginAds();
        var logger = applicationManager.getLoggerManager();
        if (postLoginAdData.length > maxNumOfPostLoginAds) {
            logger.log("###PostLogin Ad's count exceeded maxNumOfAds : " + maxNumOfPostLoginAds + " \n####Therefore Not Showing them");
            scope_AuthPresenter.navigateToDashboardFromAds();
        } else if (postLoginAdData.length === 0) {
            logger.log("###PostLogin Ad's count is 0 \n####Therefore Not Showing them");
            scope_AuthPresenter.navigateToDashboardFromAds();
        } else {
            logger.log("###Successfully fetched postLogin ads");
            var navManager = applicationManager.getNavigationManager();
            var adData = {};
            adData.postLoginAdData = postLoginAdData;
            navManager.setCustomInfo("frmFullScreenAds", adData);
            scope_AuthPresenter.commonFunctionForNavigation("frmFullScreenAds");
        }
    };
    Auth_PresentationController.prototype.fetchPostLoginAdsPresentationErrorCallback = function(errorResponse) {
        var logger = applicationManager.getLoggerManager();
        logger.log("###In Error callback while fetching postLogin ads : " + errorResponse + "\n####Therefore Not Showing them");
        scope_AuthPresenter.navigateToDashboardFromAds();
    };
    Auth_PresentationController.prototype.sendDmResponseForPostloginAds = function(navId) {
        var sessionId = scope_AuthPresenter.dmManager.getPostLoginAdsSessionId();
        var paramObj = {
            "sessionId": sessionId,
            "navigationId": navId
        };
        scope_AuthPresenter.dmManager.sendDmResponse(paramObj, scope_AuthPresenter.sendDmResponseForPostloginAdsSuccessCallback, scope_AuthPresenter.sendDmResponseForPostloginAdsErrorCallback);
    };
    Auth_PresentationController.prototype.sendDmResponseForPostloginAdsSuccessCallback = function(successResponse) {
        scope_AuthPresenter.logger.log("###Succesfully sent metrics to DMEngine");
    };
    Auth_PresentationController.prototype.sendDmResponseForPostloginAdsErrorCallback = function(errorResponse) {
        scope_AuthPresenter.logger.log("###Error in sending metrics to DMEngine : " + errorResponse);
    };
    Auth_PresentationController.prototype.navigateToDashboardFromAds = function() {
        var configManager = applicationManager.getConfigurationManager();
        var navManger = applicationManager.getNavigationManager();
        var accMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        if (configManager.isAggregatedExternalAccountEnabled()) {
            accMod.presentationController.fetchAccountDashboardCampaignsForAggregatedDashboard();
        } else {
            accMod.presentationController.fetchAccountDashboardCampaigns();
        }
    };
    Auth_PresentationController.prototype.resendDeviceRegOTP = function() {
        var requestOTPJSON = scope_AuthPresenter.authManger.getForgotObject();
        scope_AuthPresenter.authManger.fetchOTP(requestOTPJSON, scope_AuthPresenter.otpResendSuccess, scope_AuthPresenter.otpResendError);
    };
    Auth_PresentationController.prototype.otpResendSuccess = function(resSuccess) {
        var otp = resSuccess.otp;
        var controller = applicationManager.getPresentationUtility().getController('frmDevRegSecCode', true);
        controller.onResendOTP();
    };
    Auth_PresentationController.prototype.otpResendError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope_AuthPresenter.logger.log("####Error while resending otp : Forgot username flow");
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmDevRegSecCode', true);
            var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enterValidOTP");
            controller.bindGenericError(errorMsg);
        }
    };
    Auth_PresentationController.prototype.navigateToLocationMap = function(formName) {
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo(formName);
    }
    Auth_PresentationController.prototype.fetchUserNameAndPasswordInstructions = function() {
        scope_AuthPresenter.authManger.getUserNamePoliciesForEnroll(scope_AuthPresenter.fetchInstructionsSuccesCallback, scope_AuthPresenter.fetchInstructionsErrorCallback);
    };
    Auth_PresentationController.prototype.fetchInstructionsSuccesCallback = function(res) {
        scope_AuthPresenter.usernameRules = res.records[0].policyDescription;
        scope_AuthPresenter.passwordRules = res.records[1].policyDescription;
    };
    Auth_PresentationController.prototype.fetchInstructionsErrorCallback = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    };
    Auth_PresentationController.prototype.trackRegDevice = function() {
        var registrationManager = applicationManager.getRegistrationManager();
        registrationManager.trackRegisteredDevice(presentationSuccessCallback, presentationErrorCallback);

        function presentationSuccessCallback() {}

        function presentationErrorCallback() {}
    };
    Auth_PresentationController.prototype.getUsernameRulesAndPolicy = function() {
        var userObj = applicationManager.getUserPreferencesManager();
        userObj.fetchUsernameRulesAndPolicy(scope_AuthPresenter.getUsernameRulesAndPolicySuccessCallback, scope_AuthPresenter.getUsernameRulesAndPolicyErrorCallback);
    };
    Auth_PresentationController.prototype.getUsernameRulesAndPolicySuccessCallback = function(res) {
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmForgotCreatePassword");
        if (data && data !== null) {
            data.usernamePolicy = res.usernamepolicy.content;
        } else {
            data = {
                "usernamePolicy": res.usernamepolicy.content
            };
        }
        navManager.setCustomInfo("frmForgotCreatePassword", data);
        var validationUtility = applicationManager.getValidationUtilManager();
        validationUtility.createRegexForUsernameValidation(res.usernamerules);
    };
    Auth_PresentationController.prototype.getUsernameRulesAndPolicyErrorCallback = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errRes["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errRes);
        }
    };
    Auth_PresentationController.prototype.getPasswordRulesAndPolicy = function() {
        var userObj = applicationManager.getUserPreferencesManager();
        userObj.fetchPasswordRulesAndPolicy(scope_AuthPresenter.getPasswordRulesAndPolicySuccessCallback, scope_AuthPresenter.getPasswordRulesAndPolicyErrorCallback);
    };
    Auth_PresentationController.prototype.getPasswordRulesAndPolicySuccessCallback = function(res) {
        scope_AuthPresenter.asyncManager.setSuccessStatus(1, res);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(2)) {
            var navManager = applicationManager.getNavigationManager();
            var data = navManager.getCustomInfo("frmForgotCreatePassword");
            if (data && data !== null) {
                data.passwordPolicy = res.passwordpolicy.content;
            } else {
                data = {
                    "passwordPolicy": res.passwordpolicy.content
                };
            }
            navManager.setCustomInfo("frmForgotCreatePassword", data);
            var validationUtility = applicationManager.getValidationUtilManager();
            validationUtility.createRegexForPasswordValidation(res.passwordrules);
            scope_AuthPresenter.commonFunctionForNavigation("frmForgotCreatePassword");
        }
    };
    Auth_PresentationController.prototype.getPasswordRulesAndPolicyErrorCallback = function(err) {
        scope_AuthPresenter.asyncManager.setErrorStatus(1, err);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errRes["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errRes);
        }
    };
    Auth_PresentationController.prototype.verifyDOB = function(dob) {
        var validationManager = applicationManager.getValidationUtilManager();
        scope_AuthPresenter.authManger.setForgotAttribute("dateOfBirth", dob);
        //var fetchUserNameJSON = scope_AuthPresenter.authManger.getForgotObject();
        var lastName = scope_AuthPresenter.authManger.getForgotAttribute("userlastname");
        var Ssn = scope_AuthPresenter.authManger.getForgotAttribute("ssn");
        var fetchUserNameJSON = {
            "LastName": lastName,
            "Ssn": Ssn,
            "DateOfBirth": dob
        };
        scope_AuthPresenter.authManger.verifyUserName(fetchUserNameJSON, scope_AuthPresenter.presentationUserVerifySuccess, scope_AuthPresenter.presentationUserVerifyError);
    };
    Auth_PresentationController.prototype.presentationUserVerifySuccess = function(res) {
        if (res !== null && res.isUserExists !== "false") {
            var username = res.user_attributes[0].UserName;
            var securitykey = res.user_attributes[0].securityKey;
            var serviceKey = res.serviceKey;
            var userlist = [];
            for (var i = 0; i < res.user_attributes.length; i++) {
                userlist[i] = [res.user_attributes[i].UserName, res.user_attributes[i].UserName];
            }
            var data = {
                "UserNameList": userlist
            };
            scope_AuthPresenter.userList = userlist;
            scope_AuthPresenter.authManger.setPrimarykeyAttribute(data);
            scope_AuthPresenter.authManger.setUserName(userlist);
            scope_AuthPresenter.authManger.setServicekey(serviceKey);
            scope_AuthPresenter.authManger.setSecurityKey(securitykey);
            scope_AuthPresenter.commonFunctionForNavigation("frmForgotMain");
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterDOB', true);
            controller.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.usernameUnavailableMsg"));
        }
    };
    Auth_PresentationController.prototype.presentationUserVerifyError = function(err) {
        scope_AuthPresenter.logger.log("####Error while Fetching user : Forgot username flow");
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterDOB', true);
            controller.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.usernameUnavailableMsg"));
        }
    };
    Auth_PresentationController.prototype.getPasswordWarning = function() {
        var userObj = applicationManager.getUserPreferencesManager();
        return userObj.getPasswordWarning();
    };
    Auth_PresentationController.prototype.navigateToMFA = function(selectedUserName) {
        var username = selectedUserName[1];
        scope_AuthPresenter.authManger.setUserName(username);
        var servicekey = scope_AuthPresenter.authManger.getServicekey();
        var inputJSON = {
            "UserName": username,
            "MFAAttributes": {
                "serviceKey": servicekey
            }
        };
        scope_AuthPresenter.authManger.requestResetPasswordOTP(inputJSON, scope_AuthPresenter.navigateToMFASuccessCallback, scope_AuthPresenter.navigateToMFAErrorCallback);
    };
    Auth_PresentationController.prototype.navigateToMFASuccessCallback = function(res) {
        var communicationType = res["MFAAttributes"].communicationType;
        scope_AuthPresenter.authManger.setCommunicationType(communicationType);
        scope_AuthPresenter.authManger.setMFAResponse(res);
        if (communicationType === "DISPLAY_ALL") {
            var servicekey = res["MFAAttributes"].serviceKey;
            scope_AuthPresenter.unmaskedphoneNumber = res["MFAAttributes"]["customerCommunication"]["phone"][0]["unmasked"];
            scope_AuthPresenter.unmaskedEmail = res["MFAAttributes"]["customerCommunication"]["email"][0]["unmasked"];
            scope_AuthPresenter.authManger.setServicekey(servicekey);
            var controller = applicationManager.getPresentationUtility().getController('frmForgotMFA', true);
            controller.setFormUI(res);
            scope_AuthPresenter.commonFunctionForNavigation("frmForgotMFA");
        } else {
            var securitykey = res["MFAAttributes"].securityKey;
            var servicekey = res["MFAAttributes"].serviceKey;
            scope_AuthPresenter.unmaskedphoneNumber = res["MFAAttributes"]["customerCommunication"]["phone"][0]["unmasked"];
            scope_AuthPresenter.unmaskedEmail = res["MFAAttributes"]["customerCommunication"]["email"][0]["unmasked"];
            scope_AuthPresenter.authManger.setServicekey(servicekey);
            scope_AuthPresenter.authManger.setSecurityKey(securitykey);
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterSecurityCode', true);
            controller.setFormUI(res);
            scope_AuthPresenter.commonFunctionForNavigation("frmForgotEnterSecurityCode");
        }
    };
    Auth_PresentationController.prototype.navigateToMFAErrorCallback = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        }
    };
    Auth_PresentationController.prototype.navigateToOTPScreen = function(data) {
        scope_AuthPresenter.unmaskedphoneNumber = data.phone;
        scope_AuthPresenter.unmaskedEmail = data.email;
        var username = scope_AuthPresenter.authManger.getUserName();
        var servicekey = scope_AuthPresenter.authManger.getServicekey();
        var inputJSON = {
            "UserName": username,
            "MFAAttributes": {
                "serviceKey": servicekey,
                "OTP": {
                    "phone": data.phone,
                    "email": data.email
                }
            }
        };
        scope_AuthPresenter.authManger.requestResetPasswordOTP(inputJSON, scope_AuthPresenter.navigateToOTPScreenSuccessCallback, scope_AuthPresenter.navigateToOTPScreenErrorCallback);
    };
    Auth_PresentationController.prototype.navigateToOTPScreenSuccessCallback = function(res) {
        var securitykey = res["MFAAttributes"].securityKey;
        scope_AuthPresenter.authManger.setSecurityKey(securitykey);
        var communicationType = scope_AuthPresenter.authManger.getCommunicationType();
        res["MFAAttributes"]["communicationType"] = communicationType;
        res["MFAAttributes"]["phone"] = scope_AuthPresenter.phoneNumber;
        res["MFAAttributes"]["email"] = scope_AuthPresenter.email;
        var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterSecurityCode', true);
        controller.setFormUI(res);
        scope_AuthPresenter.commonFunctionForNavigation("frmForgotEnterSecurityCode");
    };
    Auth_PresentationController.prototype.navigateToOTPScreenErrorCallback = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        }
    };
    Auth_PresentationController.prototype.verifyMFAOTP = function(otp) {
        //var otp = otp;
        var servicekey = scope_AuthPresenter.authManger.getServicekey();
        var securitykey = scope_AuthPresenter.authManger.getSecurityKey();
        var inputJSON = {
            "MFAAttributes": {
                "serviceKey": servicekey,
                "OTP": {
                    "securityKey": securitykey,
                    "otp": otp
                }
            }
        }
        scope_AuthPresenter.asyncManager.initiateAsyncProcess(2);
        scope_AuthPresenter.getPasswordRulesAndPolicy(scope_AuthPresenter.getPasswordRulesAndPolicySuccessCallback, scope_AuthPresenter.getPasswordRulesAndPolicyErrorCallback);
        scope_AuthPresenter.authManger.verifyOTPPreLogin(inputJSON, scope_AuthPresenter.verifyMFAOTPSuccessCallback, scope_AuthPresenter.verifyMFAOTPErrorCallback);
    };
    Auth_PresentationController.prototype.verifyMFAOTPSuccessCallback = function(res) {
        scope_AuthPresenter.asyncManager.setSuccessStatus(0, res);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(2)) {
            var navManager = applicationManager.getNavigationManager();
            var data = navManager.getCustomInfo("frmForgotCreatePassword");
            res = scope_AuthPresenter.asyncManager.getData(1);
            if (data) {
                data.passwordPolicy = res.passwordpolicy.content;
            } else {
                data = {
                    "passwordPolicy": res.passwordpolicy.content
                };
            }
            navManager.setCustomInfo("frmForgotCreatePassword", data);
            var validationUtility = applicationManager.getValidationUtilManager();
            validationUtility.createRegexForPasswordValidation(res.passwordrules);
            scope_AuthPresenter.commonFunctionForNavigation("frmForgotCreatePassword");
        }
    };
    Auth_PresentationController.prototype.verifyMFAOTPErrorCallback = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterSecurityCode', true);
            controller.showIncorrectOTPError(err.serverErrorRes);
        }
    };
    Auth_PresentationController.prototype.resendMFAOTP = function(data) {
        var username = scope_AuthPresenter.authManger.getUserName();
        var servicekey = scope_AuthPresenter.authManger.getServicekey();
        var inputJSON = {
            "UserName": username,
            "MFAAttributes": {
                "serviceKey": servicekey,
                "OTP": {
                    "phone": scope_AuthPresenter.unmaskedphoneNumber,
                    "email": scope_AuthPresenter.unmaskedEmail,
                    "securityKey": scope_AuthPresenter.authManger.getSecurityKey()
                }
            }
        };
        scope_AuthPresenter.authManger.requestResetPasswordOTP(inputJSON, scope_AuthPresenter.resendMFAOTPSuccessCallback, scope_AuthPresenter.resendMFAOTPScreenErrorCallback);
    };
    Auth_PresentationController.prototype.resendMFAOTPSuccessCallback = function(res) {
        scope_AuthPresenter.MFAresponse = res;
        scope_AuthPresenter.authManger.setSecurityKey(res["MFAAttributes"]["securityKey"]);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
    Auth_PresentationController.prototype.resendMFAOTPScreenErrorCallback = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterSecurityCode', true);
            controller.showIncorrectOTPError(err.serverErrorRes);
        }
    };
    return Auth_PresentationController;
});