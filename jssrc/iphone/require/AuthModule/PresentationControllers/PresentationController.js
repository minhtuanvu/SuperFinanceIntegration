define(["AsyncManager/BusinessControllers/BusinessController", "CommonUtilities"], function(AsyncManager, CommonUtilities) {
    function Auth_PresentationController() {
        scope_AuthPresenter = this;
        kony.mvc.Presentation.BasePresenter.call(this);
        this.asyncManager = new AsyncManager();
        this.authManger = applicationManager.getAuthManager();
        this.logger = applicationManager.getLoggerManager();
        this.dmManager = applicationManager.getDirectMarketingManager();
        this.isPasswordUpdated = false,
            this.isLogoutScreen = true,
            this.flowType = "";
        this.currentAuthMode = "";
        this.cardsDataForCvv = {};
        this.checkAppinit = false;
        this.usernameRules = [];
        this.passwordRules = [];
        this.isMFARequired = false;
        this.isTnCRequire = false;
        this.userList = [];
        this.unmaskedphoneNumber = "";
        this.unmaskedemail = "";
        this.maskedphoneNumber = "";
        this.maskedemail = "";
        this.rememberdeviceregflag = false;
        this.MFAresponse = "";
        this.tncResponse = null;
        this.isFaceLoginInProgress = false;
        /**   numberOfAsyncForLogin
         *  1.getUser
         *  2.getRefreshAccountsFromDB
         *  3.getDeviceRegistration
         *  4.getAccountsPostLogin
         *  5.getPFMPieChartData
         *  6.getPFMBarGraphData
         *  7.getAllEntitlements
         */
        scope_AuthPresenter.numberOfAsyncForLogin = 10;
    }
    //try
    inheritsFrom(Auth_PresentationController, kony.mvc.Presentation.BasePresenter);
    Auth_PresentationController.prototype.initializePresentationController = function() {};
    Auth_PresentationController.prototype.showLoginForm = function() {
        this.presentUserInterface('frmLogin', {});
    };
    Auth_PresentationController.prototype.firstTimeLoginDone = function() {
        var storMan = applicationManager.getStorageManager();
        storMan.setStoredItem("firstTimeLogin", "Done");
    };
    Auth_PresentationController.prototype.firstTimeLoginSetUname = function() {
        var storMan = applicationManager.getStorageManager();
        storMan.setStoredItem("firstTimeLoginUname", "Done");
    };
    Auth_PresentationController.prototype.startUpCompleted = function() {
        var configManager = applicationManager.getConfigurationManager();
        configManager.isStartupCompleted = true;
    };
    Auth_PresentationController.prototype.isStartUpComplete = function() {
        var configManager = applicationManager.getConfigurationManager();
        return configManager.isStartupCompleted === true ? true : false;
    };
    Auth_PresentationController.prototype.onLanguageChange = function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var config = applicationManager.getConfigurationManager();
        var navMan = applicationManager.getNavigationManager();
        config.reloadConstants();
        applicationManager.clearBusinessDataMemebers();
        navMan.clearStack();
        navMan.destroyFormsAll();
        navMan.clearEntryPointTable();
        try {
            applicationManager.postAppInitiate();
            kony.application.setApplicationProperties({
                // "statusBarForegroundColor": "000000"
            });
            var registrationManager = applicationManager.getRegistrationManager();
            registrationManager.setEventTracking();
            navMan.navigateTo("frmLogin");
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.App_Initialisation_Failed", GlobalExceptionHandler.ActionConstants.BLOCK, arguments.callee.name);
        }
    };
    Auth_PresentationController.prototype.onLanguageChangeFromSettings = function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var config = applicationManager.getConfigurationManager();
        var navMan = applicationManager.getNavigationManager();
        config.reloadConstants();
        config.rearrangeHamburgerAccordingToEntitements();
        navMan.destroyFormsAll();
        var configurationManager = applicationManager.getConfigurationManager();
        var frmName = "frmUnifiedDashboard";
        navMan.navigateTo(frmName);
    };
    Auth_PresentationController.prototype.onLogout = function() {
        this.isLogoutScreen = true;
        this.isPasswordUpdated = false;
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authManger = applicationManager.getAuthManager();
        authManger.logout(this.presentationLogoutSuccess, this.presentationLogoutError);
    };
    Auth_PresentationController.prototype.presentationLogoutError = function(resError) {
        scope_AuthPresenter.logger.log("resError");
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("logoutStatus", false);
        navMan.navigateTo("frmLogout");
    };
    Auth_PresentationController.prototype.presentationLogoutSuccess = function(resSuccess) {
        scope_AuthPresenter.logger.log("resSuccess");
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("logoutStatus", true);
        navMan.navigateTo("frmLogout");
    };
    Auth_PresentationController.prototype.disableEBankingLogout = function() {
        this.isLogoutScreen = false;
        this.isPasswordUpdated = false;
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authManger = applicationManager.getAuthManager();
        authManger.logout(this.presentationLogoutSuccess, this.presentationLogoutError);
    };
    Auth_PresentationController.prototype.passwordUpdateLogout = function() {
        this.isPasswordUpdated = true;
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authManger = applicationManager.getAuthManager();
        authManger.logout(this.presentationLogoutSuccess, this.presentationLogoutError);
    };
    Auth_PresentationController.prototype.signInFromLogoutScreen = function() {
        var MenuHandler = applicationManager.getMenuHandler();
        var navMan = applicationManager.getNavigationManager();
        applicationManager.clearBusinessDataMemebers();
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        userPreferencesManager.isLoggedIn = false;
        if (navMan.getCustomInfo("logoutStatus")) {
            var asobj = applicationManager.actionSheetObject;
            if (asobj) {
                asobj.dismiss();
                applicationManager.actionSheetObject = null;
            }
        }
        applicationManager.getDataforLogin();
        navMan.clearStack();
        navMan.navigateTo("frmLogin");
        navMan.destroyForms();
        navMan.clearEntryPointTable();
        MenuHandler.forceTouchFlow = "";
        kony.theme.setCurrentTheme("BlueTheme", function onSuccess() {
            kony.print("Theme applyied successfully ");
        }, function onFailure() {
            kony.print(" Error applying theme ");
        });
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (navMan.getCustomInfo("logoutStatus")) {
            navMan.setEntryPoint("Feedback", "frmLogin");
            var cm = applicationManager.getConfigurationManager();
            var val = cm.getshowFeedBackPostLogout();
            if (val == "true") {
                var feedbackModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("FeedBackModule");
                feedbackModule.presentationController.showFeedbackPopup({
                    from: "profilesettingorlogout"
                });
            }
        }
    };
    Auth_PresentationController.prototype.onLogin = function(UsernamePasswordJSON, formContext) {
        scope_AuthPresenter.rememberdeviceregflag = false;
        applicationManager.getPresentationUtility().showLoadingScreen();
        var validationManager = applicationManager.getValidationUtilManager();
        var navManager = applicationManager.getNavigationManager();
        Auth_PresentationController.UsernamePasswordJSON = UsernamePasswordJSON;
        if (UsernamePasswordJSON.username && UsernamePasswordJSON.password) {
            // var userPreferencesManager = applicationManager.getUserPreferencesManager();
            // if (userPreferencesManager.isNewUser(UsernamePasswordJSON.username))
            //     userPreferencesManager.clearUserData();
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
    Auth_PresentationController.prototype.setBiometricCredentials = function() {
        var devManager = applicationManager.getDeviceUtilManager();
        if (devManager.isIPhone()) {
            var userManager = applicationManager.getUserPreferencesManager();
            var storedUname = userManager.getUserName();
            var storedPassword = userManager.getPassword();
            var userCred = {
                userName: storedUname,
                password: storedPassword
            };
            var cred = {
                "securedata": userCred,
                "secureaccount": storedUname,
                "identifier": storedUname,
                "secureAccessControl": constants.KONY_KEYCHAIN_ACCESS_CONTROL_TOUCHID_ANY
            };
            kony.keychain.save(cred);
        }
    };
    Auth_PresentationController.prototype.presentationLoginSuccess = function(resSuccess) {
        /*Earlier this lines are kept due to ARB-6262 which is face ID issue now face id is being removed so we are reverting this to fix ARB-7827 issue*/
        //applicationManager.getPresentationUtility().dismissLoadingScreen();
        //applicationManager.getPresentationUtility().showLoadingScreen();
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        var configManager = applicationManager.getConfigurationManager();
        var navManager = applicationManager.getNavigationManager();
        var loggerManager = applicationManager.getLoggerManager();
        var userMan = applicationManager.getUserPreferencesManager();
        var valman = applicationManager.getValidationUtilManager();
        var storMan = applicationManager.getStorageManager();
        var userName = userMan.getUserName();
        loggerManager.setUserID(userName);
        userPreferencesManager.isLoggedIn = true;
        //@ToDO I think this is getting called two timw, if so remove from here
        //	scope_AuthPresenter.initializePermissions();
        kony.application.registerForIdleTimeout(configManager.constants.IDLE_TIMEOUT, scope_AuthPresenter.idleIimeOutCallback);
        if (scope_AuthPresenter.currentAuthMode === "password") {
            scope_AuthPresenter.currentAuthMode = "";
            if (userPreferencesManager.getUserId() === "") {
                storMan.setStoredItem("registerForPushNotifications", true);
            } else {
                if (userPreferencesManager.isNewUser(Auth_PresentationController.UsernamePasswordJSON.username)) {
                    storMan.setStoredItem("registerForPushNotifications", true);
                } else {
                    storMan.setStoredItem("registerForPushNotifications", false);
                }
            }
            if (userPreferencesManager.isNewUser(Auth_PresentationController.UsernamePasswordJSON.username)) userPreferencesManager.clearUserData(this);
        }
        valman.resetFeedbackInfoIfUpgraded();
        var tempLoginData = navManager.getCustomInfo("frmLogin");
        scope_AuthPresenter.setRememberMeFlag(tempLoginData.isRememberMeOn);
        if (Auth_PresentationController.UsernamePasswordJSON) {
            userPreferencesManager.saveUserName(Auth_PresentationController.UsernamePasswordJSON.username);
            userPreferencesManager.savePassword(Auth_PresentationController.UsernamePasswordJSON.password);
            userPreferencesManager.savetempUserName(Auth_PresentationController.UsernamePasswordJSON.username);
        }
        scope_AuthPresenter.isLoginSuccess();
        scope_AuthPresenter.firstTimeLoginSetUname();
        var regManager = applicationManager.getRegistrationManager();
        regManager.registerForPushNotifications();
        applicationManager.getNavigationManager().getCustomInfo("frmLogin").NUOUsername = null;
    };
    Auth_PresentationController.prototype.initializePermissions = function() {
        // Getting the security attributes from identity response.
        var providerTokenParams = kony.sdk.getCurrentInstance().tokens[applicationManager.getConfigurationManager().constants.IDENTITYSERVICENAME].provider_token.params;
        var securityAttributes = providerTokenParams.security_attributes;
        var userAttributes = providerTokenParams.user_attributes;
        var configurationManager = applicationManager.getConfigurationManager();
        configurationManager.isSMEUser = "false";
        configurationManager.isRBUser = "false";
        configurationManager.isMBBUser = "false";
        configurationManager.isCombinedUser = "false";
        if (!kony.sdk.isNullOrUndefined(userAttributes) && !kony.sdk.isNullOrUndefined(userAttributes.isCombinedUser)) {
            configurationManager.isCombinedUser = userAttributes.isCombinedUser;
        }
        if (!kony.sdk.isNullOrUndefined(configurationManager.customerTypeId) && configurationManager.isCombinedUser !== "true") {
            switch (userAttributes.CustomerType_id) {
                case "TYPE_ID_BUSINESS":
                    configurationManager.isSMEUser = "true";
                    break;
                case "TYPE_ID_RETAIL":
                    configurationManager.isRBUser = "true";
                    break;
            }
        }
        //Converted string to permission array
        var permissions = JSON.parse(securityAttributes.permissions);
        var features = JSON.parse(securityAttributes.features);
        var accounts = securityAttributes.accounts;
        applicationManager.getConfigurationManager().setUserPermissions(permissions);
        applicationManager.getConfigurationManager().setFeatures(features);
        applicationManager.getConfigurationManager().setUserRole(userAttributes.customerTypeId);
        //Converted account permissions to a optimized map.
    };
    Auth_PresentationController.prototype.deviceregstatus = function() {
        var registrationManager = applicationManager.getRegistrationManager();
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var record = {
            "deviceId": deviceUtilManager.getDeviceInfo().deviceID
        };
        registrationManager.updateDeviceRegistrationStatus(record, scope_AuthPresenter.presentationDeviceRegSuccess, scope_AuthPresenter.presentationDeviceRegError);
    };
    Auth_PresentationController.prototype.deRegisterDevice = function() {
        var registrationManager = applicationManager.getRegistrationManager();
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var record = {
            "deviceId": deviceUtilManager.getDeviceInfo().deviceID
        };
        registrationManager.deleteRegisteredDevice(record, scope_AuthPresenter.presentationDeRegisterSuccess, scope_AuthPresenter.presentationDeRegisterFailure);
    };
    Auth_PresentationController.prototype.presentationDeRegisterSuccess = function(deRegDeviceSuc) {
        const userObj = applicationManager.getUserPreferencesManager();
        userObj.updateAccountPreviewFlag(false);
        userObj.setDefaultAuthMode("password");
        const configurationManager = applicationManager.getConfigurationManager();
        if (configurationManager.isCombinedUser == "true" || configurationManager.isSMEUser == "true") {
            scope_AuthPresenter.asyncManager.setSuccessStatus(9, deRegDeviceSuc);
        } else {
            scope_AuthPresenter.asyncManager.setSuccessStatus(8, deRegDeviceSuc);
        }
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.postLoginServicesSuccess();
        }
    };
    Auth_PresentationController.prototype.presentationDeRegisterFailure = function(error) {
        const configurationManager = applicationManager.getConfigurationManager();
        if (configurationManager.isCombinedUser == "true" || configurationManager.isSMEUser == "true") {
            scope_AuthPresenter.asyncManager.setSuccessStatus(9, error);
        } else {
            scope_AuthPresenter.asyncManager.setSuccessStatus(8, error);
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (error["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
        } else {
            alert(error.errorMessage);
        }
    };
    Auth_PresentationController.prototype.mfaLoginFlow = function(response) {
        var authManger = applicationManager.getAuthManager();
        let controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
        var param = controller.getServicekey();
        authManger.loginMFA(param, scope_AuthPresenter.loginMFASuccessCallback, scope_AuthPresenter.loginMFAErrorCallback);
    };
    Auth_PresentationController.prototype.loginMFASuccessCallback = function(res) {
        scope_AuthPresenter.postLoginServices();
    };
    Auth_PresentationController.prototype.loginMFAErrorCallback = function(error) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (error["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmMFASecurityCode', true);
            controller.setErrorMessageAndLogout(error.errmsg.errorMessage);
        }
    };
    Auth_PresentationController.prototype.fetchCashPositionDatas = function(type, fetchedYear, fetchedMonth, fetchedAccountType) {
            var configurationManager = applicationManager.getConfigurationManager();
            if (configurationManager.isCombinedUser == "true" || configurationManager.isSMEUser == "true") {
                var achManager = applicationManager.getACHManager();
                var param = {
                    "Type": type,
                    "startYear": "",
                    "endYear": fetchedYear,
                    "month": fetchedMonth,
                    "AccountType": fetchedAccountType
                }
                achManager.getCashPositionData(param, this.fetchCashPositionDataSuccess, this.getPFMCashPositionFailure);
            } else {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            }
        },
        Auth_PresentationController.prototype.fetchCashPositionDataSuccess = function(response) {
            var viewController = applicationManager.getPresentationUtility().getController('frmUnifiedDashboard', true);
            viewController.fetchCashPositionDataSuccessCallBack(response);
        },
        Auth_PresentationController.prototype.presentationDeviceRegSuccess = function(resDeviceSuc) {
            scope_AuthPresenter.setDeviceRegisterflag(true);
            var configurationManager = applicationManager.getConfigurationManager();
            if (configurationManager.isCombinedUser == "true" || configurationManager.isSMEUser == "true") {
                scope_AuthPresenter.asyncManager.setSuccessStatus(9, resDeviceSuc);
            } else {
                scope_AuthPresenter.asyncManager.setSuccessStatus(8, resDeviceSuc);
            }
            if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
                scope_AuthPresenter.postLoginServicesSuccess();
            }
        };
    Auth_PresentationController.prototype.presentationDeviceRegError = function(resDeviceErr) {
        // scope_AuthPresenter.asyncManager.setErrorStatus(7, resDeviceErr);
        var configurationManager = applicationManager.getConfigurationManager();
        if (configurationManager.isCombinedUser == "true" || configurationManager.isSMEUser == "true") {
            scope_AuthPresenter.asyncManager.setSuccessStatus(9, resDeviceErr);
        } else {
            scope_AuthPresenter.asyncManager.setSuccessStatus(8, resDeviceErr);
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resDeviceErr["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resDeviceErr);
        } else {
            kony.ui.Alert(resDeviceErr);
        }
    };
    Auth_PresentationController.prototype.presentationLoginError = function(resError) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
        // if (!kony.sdk.isNullOrUndefined(resError)){
        //if (!kony.sdk.isNullOrUndefined(resError.errmsg.errorMessage))
        var errMsg = resError.errmsg.errorMessage;
        // else
        // var errMsg = resError.details.message;
        // }
        // else
        // var errMsg = resError.message;
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
            //applicationManager.getMFAManager().initMFAFlow(mfaJSON);
            let controller = applicationManager.getPresentationUtility().getController('frmLogin', true);
            controller.initMFAFlow(mfaJSON);
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
        if (res.backendIdentifiers) {
            var jsonRes = JSON.parse(res.backendIdentifiers)
            if (jsonRes.T24 && jsonRes.T24[0]) applicationManager.getUserPreferencesManager().setBackendIdentifier(jsonRes.T24[0].BackendId);
        }
        scope_AuthPresenter.postLoginServices();
    };
    Auth_PresentationController.prototype.userAttributesErrorCallback = function(error) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        kony.print("userAttributesErrorCallback");
    };
    Auth_PresentationController.prototype.termsAndConditionSuccessCallback = function(response) {
        scope_AuthPresenter.tncResponse = response;
        if (response.alreadySigned && response.alreadySigned === "true") {
            scope_AuthPresenter.isTnCRequire = false;
        } else {
            scope_AuthPresenter.isTnCRequire = true;
        }
        scope_AuthPresenter.asyncManager.setSuccessStatus(7, response);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.postLoginServicesSuccess();
        }
    };
    Auth_PresentationController.prototype.termsAndConditionErrorCallback = function(response) {
        scope_AuthPresenter.asyncManager.setSuccessStatus(7, response);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (response["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
        }
    };
    Auth_PresentationController.prototype.postLoginServices = function() {
        var main_user = applicationManager.getUserPreferencesManager().getUserName();
        var accountManager = applicationManager.getAccountManager();
        var configurationManager = applicationManager.getConfigurationManager();
        var providerTokenParams = kony.sdk.getCurrentInstance().tokens[applicationManager.getConfigurationManager().constants.IDENTITYSERVICENAME].provider_token.params;
        var features = JSON.parse(providerTokenParams.security_attributes.features);
        scope_AuthPresenter.initializePermissions();
        scope_AuthPresenter.numberOfAsyncForLogin = 9;
        if (configurationManager.isCombinedUser == "true" || configurationManager.isSMEUser == "true") {
            scope_AuthPresenter.numberOfAsyncForLogin = 10;
        }
        scope_AuthPresenter.trackRegDevice();
        scope_AuthPresenter.asyncManager.initiateAsyncProcess(scope_AuthPresenter.numberOfAsyncForLogin);
        scope_AuthPresenter.fetchExternalBanksAndAccounts(main_user);
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        userPreferencesManager.fetchUser(scope_AuthPresenter.presentationUserSuccess, scope_AuthPresenter.presentationUserError);
        userPreferencesManager.fetchUserImage(scope_AuthPresenter.presentationUserImageSuccess, scope_AuthPresenter.presentationUserImageError);
        if (userPreferencesManager.isRememberMeOn()) {
            scope_AuthPresenter.deviceregstatus();
        } else {
            scope_AuthPresenter.deRegisterDevice();
        }
        // if( scope_AuthPresenter.isMFARequired===true&&scope_AuthPresenter.rememberdeviceregflag===true)
        // {
        //   scope_AuthPresenter.deviceregstatus();
        // }
        scope_AuthPresenter.getAllAccounts();
        var messageManager = applicationManager.getMessagesManager();
        messageManager.fetchNumberOfUnreadMessages(function() {}, function() {});
        var notificationManager = applicationManager.getAlertsManager();
        notificationManager.getUnreadNotificationCount(function() {}, function() {});
        if (applicationManager.getConfigurationManager().isEngageEnabled()) {
            applicationManager.getEngageManager().onSuccessfulLogin();
        }
        var params = {
            "userName": main_user
        };
        //applicationManager.getConfigurationManager().setFeatures(features);
        applicationManager.getConfigurationManager().setEntitlements(features);
        applicationManager.getConfigurationManager().rearrangeHamburgerAccordingToEntitements();
        scope_AuthPresenter.fetchEntitlementsForUserSuccess();
        // userPreferencesManager.fetchEntitlementsForUser(params,scope_AuthPresenter.fetchEntitlementsForUserSuccess,scope_AuthPresenter.fetchEntitlementsForUserError);
        //userPreferencesManager.showPasswordResetWarning(params,scope_AuthPresenter.showPasswordResetWarningSuccess,scope_AuthPresenter.showPasswordResetWarningError);
        // For Mobile SCA Authentication Password  Reset Warning is not applicable, so expliciting setting the success status for async service manager
        scope_AuthPresenter.asyncManager.setSuccessStatus(1, []);
        accountManager.fetchOutageMessages(scope_AuthPresenter.showOutageMessageSuccessCallback, scope_AuthPresenter.showOutageMessageErrorCallback);
        var currentDate = new Date();
        accountManager.getPFMPieChartData(parseInt(currentDate.getMonth()) + 1, currentDate.getFullYear(), scope_AuthPresenter.getPFMPieSuccess, scope_AuthPresenter.getPFMPieFailure);
        accountManager.getPFMBarGraphData(currentDate.getFullYear(), scope_AuthPresenter.getPFMBarSuccess, scope_AuthPresenter.getPFMBarFailure);
        if (configurationManager.isCombinedUser == "true" || configurationManager.isSMEUser == "true") {
            var achManager = applicationManager.getACHManager();
            var date = new Date();
            var year = date.getFullYear();
            var param = {
                "Type": "Monthly",
                "startYear": "",
                "endYear": year,
                "month": "",
                "AccountType": ""
            };
            achManager.getCashPositionData(param, scope_AuthPresenter.getPFMCashPositionSuccess, scope_AuthPresenter.getPFMCashPositionFailure);
        }
        var config = applicationManager.getConfigurationManager();
        var locale = config.getLocale();
        var termsAndConditions = config.getTermsAndConditions();
        var parmns = {
            //"languageCode": termsAndConditions[locale],
            "languageCode": "en-US",
            "termsAndConditionsCode": termsAndConditions["Login"]
        };
        var tncman = applicationManager.getTermsAndConditionsManager();
        tncman.fetchTermsAndConditionsPostLogin(parmns, scope_AuthPresenter.termsAndConditionSuccessCallback, scope_AuthPresenter.termsAndConditionErrorCallback);
    };
    Auth_PresentationController.prototype.showOutageMessageSuccessCallback = function(response) {
        scope_AuthPresenter.asyncManager.setSuccessStatus(6, response);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.postLoginServicesSuccess();
        }
    };
    Auth_PresentationController.prototype.showOutageMessageErrorCallback = function(response) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope_AuthPresenter.asyncManager.setErrorStatus(6, response);
    };
    Auth_PresentationController.prototype.showPasswordResetWarningSuccess = function(response) {
        scope_AuthPresenter.asyncManager.setSuccessStatus(1, response);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.postLoginServicesSuccess();
        }
    };
    Auth_PresentationController.prototype.showPasswordResetWarningError = function(response) {
        scope_AuthPresenter.asyncManager.setErrorStatus(1, response);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (response["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
    };
    Auth_PresentationController.prototype.fetchEntitlementsForUserSuccess = function() {
        //   scope_AuthPresenter.asyncManager.setSuccessStatus(6, response);
        var cm = applicationManager.getConfigurationManager();
        var isBillPayAvailable = true;
        var isTransfersAvailable = true;
        var quickActionItems = JSON.parse(JSON.stringify(cm.quickActionItems));
        if (cm.getConfigurationValue("isBillPayEnabled") !== "true") {
            quickActionItems.splice(1, 1);
            isBillPayAvailable = false;
        }
        if ((cm.getConfigurationValue("isKonyBankAccountsTransfer") !== "true" && cm.getConfigurationValue("isOtherKonyAccountsTransfer") !== "true" && cm.getConfigurationValue("isOtherBankAccountsTransfer") !== "true" && cm.getConfigurationValue("isInternationalAccountsTransfer") !== "true") || cm.getDeploymentGeography() === 'EUROPE') {
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
        //       	if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
        //             scope_AuthPresenter.postLoginServicesSuccess();
        //         }
    };
    Auth_PresentationController.prototype.fetchEntitlementsForUserError = function(response) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope_AuthPresenter.asyncManager.setErrorStatus(6, response);
    };
    Auth_PresentationController.prototype.getPFMPieSuccess = function(response) {
        var configManager = applicationManager.getConfigurationManager();
        var navManager = applicationManager.getNavigationManager();
        scope_AuthPresenter.asyncManager.setSuccessStatus(3, response);
        navManager.setCustomInfo("frmDashboardPFMPie", response);
        //((scope_AuthPresenter.asyncManager.areAllservicesDone(5) && !configManager.isAggregatedExternalAccountEnabled()) || (configManager.isAggregatedExternalAccountEnabled() &&
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.postLoginServicesSuccess();
        }
    };
    Auth_PresentationController.prototype.getPFMPieFailure = function(response) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope_AuthPresenter.asyncManager.setErrorStatus(3, response);
    };
    Auth_PresentationController.prototype.getPFMCashPositionSuccess = function(response) {
        var navManager = applicationManager.getNavigationManager();
        scope_AuthPresenter.asyncManager.setSuccessStatus(8, response);
        navManager.setCustomInfo("frmDashboardPFMCashPosition", response);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.postLoginServicesSuccess();
        }
    };
    Auth_PresentationController.prototype.getPFMCashPositionFailure = function(response) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope_AuthPresenter.asyncManager.setErrorStatus(8, response);
        // var viewController = applicationManager.getPresentationUtility().getController('frmUnifiedDashboard', true);
        // viewController.errorCallback(response);
    };
    Auth_PresentationController.prototype.getPFMBarSuccess = function(response) {
        var navManager = applicationManager.getNavigationManager();
        var configManager = applicationManager.getConfigurationManager();
        scope_AuthPresenter.asyncManager.setSuccessStatus(4, response);
        navManager.setCustomInfo("frmDashboardPFMBar", response);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.postLoginServicesSuccess();
        }
    };
    Auth_PresentationController.prototype.getPFMBarFailure = function(response) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
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
            scope_AuthPresenter.postLoginServicesSuccess();
        }
    };
    Auth_PresentationController.prototype.fetchAccountsFailure = function(response) {
        kony.ui.Alert("Something went wrong - Fetching External Accounts");
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope_AuthPresenter.asyncManager.setErrorStatus(5, response);
        if (response["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
    };
    Auth_PresentationController.prototype.fetchExternalBanksAndAccounts = function(user_id) {
        var navManager = applicationManager.getNavigationManager();
        var navManager = applicationManager.getNavigationManager();
        scope_AuthPresenter.asyncManager.setSuccessStatus(5, []);
        navManager.setCustomInfo("frmDashboardAggregated", {
            "accountData": []
        });
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.postLoginServicesSuccess();
        }
    };
    Auth_PresentationController.prototype.getDeviceRegistrationStatus = function() {
        var registrationManager = applicationManager.getRegistrationManager();
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        //  var deviceID = deviceUtilManager.getDeviceInfo().deviceID;
        var userMan = applicationManager.getUserPreferencesManager();
        var userName = userMan.getUserName();
        var criteria = kony.mvc.Expression.eq("UserName", userName);
        registrationManager.fetchDevRegistrationStatus(criteria, scope_AuthPresenter.presentationDeviceRegistrationSuccess, scope_AuthPresenter.presentationDeviceRegistrationError);
    };
    Auth_PresentationController.prototype.checkDeviceRegistrationStatus = function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var registrationManager = applicationManager.getRegistrationManager();
        var userMan = applicationManager.getUserPreferencesManager();
        var userName = userMan.getUserName();
        var criteria = kony.mvc.Expression.eq("UserName", userName);
        registrationManager.fetchDeviceRegistrationStatus(criteria, scope_AuthPresenter.presentationCheckDeviceRegistrationSuccess, scope_AuthPresenter.presentationCheckDeviceRegistrationError);
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
            scope_AuthPresenter.postLoginServicesSuccess();
        }
    };
    Auth_PresentationController.prototype.presentationAccountsErr = function(resAccountErr) {
        scope_AuthPresenter.asyncManager.setErrorStatus(2, resAccountErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope_AuthPresenter.logger.log(resAccountErr);
        if (resAccountErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resAccountErr);
    };
    Auth_PresentationController.prototype.postLoginServicesSuccess = function() {
        if (scope_AuthPresenter.isTnCRequire === true) {
            var response = scope_AuthPresenter.tncResponse;
            var navman = applicationManager.getNavigationManager();
            navman.setCustomInfo("frmTermsAndCondition", {
                "content": response.termsAndConditionsContent,
                "serviceKey": response.serviceKey,
                "flowType": "Login",
                "contentTypeID": response.contentTypeId
            });
            navman.navigateTo("frmTermsAndCondition");
        } else {
            scope_AuthPresenter.navigationAfterLogin();
        }
    }
    Auth_PresentationController.prototype.navigationAfterLogin = function() {
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        var navManager = applicationManager.getNavigationManager();
        if (scope_AuthPresenter.isMFARequired === false) {
            scope_AuthPresenter.goToAccounts();
        } else {
            if (userPreferencesManager.isRememberMeOn() === false) scope_AuthPresenter.goToAccounts();
            else {
                if (scope_AuthPresenter.rememberdeviceregflag === false) {
                    //scope_AuthPresenter.setDeviceRegisterflag(false);
                    scope_AuthPresenter.goToAccounts();
                } else {
                    scope_AuthPresenter.setDeviceRegisterflag(true);
                    // if (userPreferencesManager.isFirstTimeLogin()) {
                    var keys = scope_AuthPresenter.getAuthFlags();
                    keys.popUpMsg = "";
                    navManager.setCustomInfo("frmDevRegLoginType", keys);
                    var controller = applicationManager.getPresentationUtility().getController('frmDevRegLoginType', true);
                    controller.tempLoginMode = "password";
                    navManager.navigateTo("frmDevRegLoginType");
                    //                 } else
                    //                     scope_AuthPresenter.goToAccounts();
                }
            }
        }
    };
    Auth_PresentationController.prototype.goToAccounts = function() {
        var MenuHandler = applicationManager.getMenuHandler();
        var configManager = applicationManager.getConfigurationManager();
        var navManager = applicationManager.getNavigationManager();
        var check = false;
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            if (MenuHandler.forceTouchFlow !== "") {
                // kony.runOnMainThread(scope_AuthPresenter.appForceTouchCallBack.bind(scope_AuthPresenter),[MenuHandler.forceTouchFlow]);
                scope_AuthPresenter.appForceTouchCallBack(MenuHandler.forceTouchFlow);
            } else {
                if (configManager.isAggregatedExternalAccountEnabled()) {
                    scope_AuthPresenter.fetchPostloginAds();
                    // applicationManager.getPresentationUtility().dismissLoadingScreen();
                } else {
                    var accountObj = applicationManager.getAccountManager();
                    var accountData = accountObj.getInternalAccounts();
                    var custominfo = navManager.getCustomInfo("frmDashboard");
                    if (!custominfo) {
                        custominfo = {};
                    }
                    custominfo.accountData = accountData;
                    navManager.setCustomInfo("frmDashboard", custominfo);
                    scope_AuthPresenter.fetchPostloginAds();
                    //applicationManager.getPresentationUtility().dismissLoadingScreen();
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
                    var navManager = applicationManager.getNavigationManager();
                    var accountObj = applicationManager.getAccountManager();
                    var accountData = "";
                    if (configManager.isAggregatedExternalAccountEnabled()) {
                        scope_AuthPresenter.fetchPostloginAds();
                        //              navManager.navigateTo("frmDashboardAggregated");
                    } else {
                        accountData = accountObj.getInternalAccounts();
                        var custominfo = navManager.getCustomInfo("frmDashboard");
                        if (!custominfo) {
                            custominfo = {};
                        }
                        custominfo.accountData = accountData;
                        navManager.setCustomInfo("frmDashboard", custominfo);
                        scope_AuthPresenter.fetchPostloginAds();
                        //                   navManager.navigateTo("frmDashboard");
                    }
                }
            }
        }
    };
    Auth_PresentationController.prototype.appForceTouchCallBack = function(quickActionItem) {
        var configManager = applicationManager.getConfigurationManager();
        var MenuHandler = applicationManager.getMenuHandler();
        var msgText = "";
        var isFeatureAvailable = true;
        var presentationUtil = applicationManager.getPresentationUtility();
        if (quickActionItem) {
            if (quickActionItem === "ATM finder") {
                var currentForm = kony.application.getCurrentForm().id;
                var controller = applicationManager.getPresentationUtility().getController(currentForm, true);
                var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
                var scope = locateUsModule.presentationController;
                //scope.presentLocateUsView(true,controller);
                kony.runOnMainThread(scope.presentLocateUsView1.bind(scope), [true, currentForm]);
                //locateUsModule.presentationController.presentLocateUsView(true,controller);
            } else if (quickActionItem === "Pay a Bill") {
                if (configManager.getConfigurationValue("isBillPayEnabled") === "true") {
                    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
                    billPayMod.presentationController.fetchToPayees();
                    MenuHandler.forceTouchFlow = "";
                } else {
                    msgText = presentationUtil.getStringFromi18n("kony.mb.Entitlements.notEntitledForBillPay");
                    isFeatureAvailable = false;
                }
            } else if (quickActionItem === "Transfer Money") {
                if (configManager.getConfigurationValue("isKonyBankAccountsTransfer") === "true" || configManager.getConfigurationValue("isOtherKonyAccountsTransfer") === "true" || configManager.getConfigurationValue("isOtherBankAccountsTransfer") === "true" || configManager.getConfigurationValue("isInternationalAccountsTransfer") === "true") {
                    var navMan = applicationManager.getNavigationManager();
                    navMan.navigateTo("frmTransactionMode");
                    MenuHandler.forceTouchFlow = "";
                } else {
                    msgText = presentationUtil.getStringFromi18n("kony.mb.Entitlements.notEntitledForTransfers");
                    isFeatureAvailable = false;
                }
            } else if (quickActionItem === "New Check Deposit") {
                {
                    if (configManager.getConfigurationValue("isRDCEnabled") === "true") {
                        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
                        checkDepositModule.presentationController.commonFunctionForNavigation("frmDepositToCD");
                        MenuHandler.forceTouchFlow = "";
                    } else {
                        msgText = presentationUtil.getStringFromi18n("kony.mb.Entitlements.notEntitledForCheckDeposit");
                        isFeatureAvailable = false;
                    }
                }
            } else if (quickActionItem === "Money Movement") {
                var navMan = applicationManager.getNavigationManager();
                var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
                var entitlements = moneyMovementModule.checkForTransfersModuleEntitlements();
                if ((entitlements.isTransfersAvailable == 1 || configManager.getConfigurationValue("ispayAPersonEnabled") == "true")) {
                    moneyMovementModule.clearMMFlowAtributes();
                    var index = navMan.getFormIndex("frmDashboardAggregated");
                    if (!(index && navMan.stack.includes("frmDashboardAggregated"))) {
                        navMan.stack.push("frmDashboardAggregated");
                        navMan.setFormIndex("frmDashboardAggregated", navMan.stack.length - 1);
                    }
                    moneyMovementModule.getFromAndToAccounts();
                    MenuHandler.forceTouchFlow = "";
                } else {
                    msgText = presentationUtil.getStringFromi18n("kony.mb.Entitlements.notEntitledForTransfers");
                    isFeatureAvailable = false;
                }
            }
        }
        if (!isFeatureAvailable) {
            var navManager = applicationManager.getNavigationManager();
            var custominfo = navManager.getCustomInfo("frmDashboard");
            if (!custominfo) {
                custominfo = {};
            }
            custominfo.isNavigationFromQuickAction = true;
            custominfo.quickActionAlertText = msgText;
            navManager.setCustomInfo("frmDashboard", custominfo);
            scope_AuthPresenter.navigateToDashboardFromAds();
        }
    };
    Auth_PresentationController.prototype.presentationUserImageSuccess = function(resSuccess) {
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        userPreferencesManager.setUserImage(resSuccess.UserImage);
    };
    Auth_PresentationController.prototype.presentationUserImageError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    };
    Auth_PresentationController.prototype.presentationUserSuccess = function(resUserSucess) {
        if (null !== resUserSucess && resUserSucess.length !== 0 && null !== resUserSucess[0].isVIPCustomer && resUserSucess[0].isVIPCustomer !== undefined && resUserSucess[0].isVIPCustomer !== "") {
            var isVIPCustomer = resUserSucess[0].isVIPCustomer;
            var theme = "BlueTheme";
            if (isVIPCustomer === "true" || isVIPCustomer === true) {
                theme = "GoldTheme";
            }
            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("theme", theme);
            kony.theme.setCurrentTheme(theme, function onSuccess() {
                kony.print("Theme applied successfully ");
            }, function onFailure() {
                kony.print(" Error applying theme ");
            });
        }
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        var configManager = applicationManager.getConfigurationManager();
        var regManager = applicationManager.getRegistrationManager();
        var storMan = applicationManager.getStorageManager();
        userPreferencesManager.setUserObj(resUserSucess);
        if (resUserSucess != null && resUserSucess.length !== 0) {
            userPreferencesManager.saveUserFirstName(resUserSucess[0].userfirstname);
            userPreferencesManager.saveUserLastName(resUserSucess[0].userlastname);
        }
        scope_AuthPresenter.asyncManager.setSuccessStatus(0, resUserSucess);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(scope_AuthPresenter.numberOfAsyncForLogin)) {
            scope_AuthPresenter.postLoginServicesSuccess();
        }
        if (storMan.getStoredItem("registerForPushNotifications")) {
            regManager.deRegisterForPushNotifications();
            regManager.registerForPushNotifications();
        }
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
            scope_AuthPresenter.postLoginServicesSuccess();
        }
    };
    Auth_PresentationController.prototype.presentationDeviceRegistrationError = function(resDeviceErr) {
        scope_AuthPresenter.asyncManager.setErrorStatus(1, resDeviceErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resDeviceErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resDeviceErr);
    };
    Auth_PresentationController.prototype.presentationCheckDeviceRegistrationSuccess = function(resDeviceSuc) {
        var configManager = applicationManager.getConfigurationManager();
        var currentForm = kony.application.getCurrentForm().id;
        var controller = applicationManager.getPresentationUtility().getController(currentForm, true);
        if (resDeviceSuc[0].status !== "false") {
            scope_AuthPresenter.setDeviceRegisterflag(true);
            controller.checkLoginType(true);
        } else {
            scope_AuthPresenter.setDeviceRegisterflag(false);
            controller.checkLoginType(false);
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
    Auth_PresentationController.prototype.presentationCheckDeviceRegistrationError = function(resDeviceErr) {
        scope_AuthPresenter.asyncManager.setErrorStatus(1, resDeviceErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resDeviceErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", resDeviceErr);
    };
    Auth_PresentationController.prototype.getAuthFlags = function() {
        var keys = {};
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        var devManager = applicationManager.getDeviceUtilManager();
        keys.isPinEnabled = userPreferencesManager.isAppLoginPinSet();
        keys.isPinModeEnabled = userPreferencesManager.isPinModeEnabled();
        keys.isTouchIdEnabled = userPreferencesManager.isTouchIdEnabled();
        keys.isRememberMeOn = userPreferencesManager.isRememberMeOn();
        keys.isTouchIdSupported = devManager.isTouchIDSupported();
        //keys.isFaceIdSupported = devManager.isFaceIdSupported();
        //keys.isFaceIdAvailable = devManager.isFaceIdAvilable();
        keys.isDeviceregistered = userPreferencesManager.isDeviceRegistered();
        keys.defaultAuthMode = userPreferencesManager.getDefaultAuthMode();
        return keys;
    };
    Auth_PresentationController.prototype.isappInitDone = function() {
        if (scope_AuthPresenter.checkAppinit === true) return true;
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
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmDevRegLoginType", keys);
        var controller = applicationManager.getPresentationUtility().getController('frmDevRegLoginType', true);
        controller.tempLoginMode = "password";
        navManager.navigateTo("frmDevRegLoginType");
    };
    Auth_PresentationController.prototype.presentationDeviceError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err.serverErrorRes.opstatus === 20004) {
            scope_AuthPresenter.setDeviceRegisterflag(true);
            var keys = scope_AuthPresenter.getAuthFlags();
            keys.popUpMsg = kony.i18n.getLocalizedString("kony.mb.Device.Registration.Successful");
            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("frmDevRegLoginType", keys);
            var controller = applicationManager.getPresentationUtility().getController('frmDevRegLoginType', true);
            controller.tempLoginMode = "password";
            navManager.navigateTo("frmDevRegLoginType");
        } else {
            scope_AuthPresenter.logger.log(err);
            if (err["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        }
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
                var formatManager = applicationManager.getFormatUtilManager();
                for (var i = 0; i < accPreviewData.length; i++) {
                    var accountType = accPreviewData[i]["accountType"];
                    if (accPreviewData[i]["availableBalance"]) accPreviewData[i]["availableBalance"] = configManager.getCurrencyCode() + formatManager.formatAmount((accPreviewData[i]["availableBalance"]), ",");
                    if (accPreviewData[i]["currentBalance"]) accPreviewData[i]["currentBalance"] = configManager.getCurrencyCode() + formatManager.formatAmount((accPreviewData[i]["currentBalance"]), ",");
                    if (accPreviewData[i]["outstandingBalance"]) accPreviewData[i]["outstandingBalance"] = configManager.getCurrencyCode() + formatManager.formatAmount((accPreviewData[i]["outstandingBalance"]), ",");
                    //                     if (accPreviewData[i]["accountType"] == "CreditCard")
                    //                         accPreviewData[i]["outstandingBalance"] = "-" + currBal;
                    if (accountType === configManager.constants.CHECKING) {
                        accPreviewData[i]["accountType"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.availBal");
                    } else if (accountType === configManager.constants.SAVINGS) {
                        accPreviewData[i]["accountType"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.availBal");
                    } else if (accountType === configManager.constants.CREDITCARD) {
                        accPreviewData[i]["availableBalance"] = accPreviewData[i]["outstandingBalance"];
                        accPreviewData[i]["accountType"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.outstandingBal");
                    } else if (accountType === configManager.constants.DEPOSIT) {
                        accPreviewData[i]["availableBalance"] = accPreviewData[i]["currentBalance"];
                        accPreviewData[i]["accountType"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.currBal");
                    } else if (accountType === configManager.constants.MORTGAGE) {
                        accPreviewData[i]["accountType"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.outstandingBal");
                    } else if (accountType === configManager.constants.LOAN) {
                        accPreviewData[i]["availableBalance"] = accPreviewData[i]["outstandingBalance"];
                        accPreviewData[i]["accountType"] = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.outstandingBal");
                    }
                    accPreviewData[i]["bankImg"] = "konybanklogo.png";
                    accPreviewData[i]["account_type_name"] = accountType;
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

        function createPinSuccess(success) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var navManager = applicationManager.getNavigationManager();
            var userManager = applicationManager.getUserPreferencesManager();
            scope_AuthPresenter.setPinflag(true);
            userManager.getUserObj().isPinSet = "true";
            if (scope_AuthPresenter.flowType === "login") {
                var keys = scope_AuthPresenter.getAuthFlags();
                keys.popUpMsg = "";
                navManager.setCustomInfo("frmDevRegLoginType", keys);
                var msgData = {
                    popUpMsg: "Login PIN has been set successfully."
                };
                navManager.setCustomInfo("frmDevRegPinConfirmation", msgData);
                navManager.navigateTo("frmDevRegPinConfirmation");
            } else {
                var tempData = scope_AuthPresenter.getAuthFlags();
                navManager.setCustomInfo("frmPreferencesDefaultLogin", tempData);
                var msgData = {
                    popUpMsg: "Login PIN has been set successfully."
                };
                navManager.setCustomInfo("frmPreferencesPin", msgData);
                navManager.navigateTo("frmPreferencesPin");
            }
            scope_AuthPresenter.flowType = "";
        }

        function createPinError(err) {
            if (err["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
            else kony.ui.Alert(err.errorMessage)
        }
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        userPreferencesManager.setAppLoginPin(pin);
        createPinSuccess();
        //userPreferencesManager.createPin(pin, createPinSuccess, createPinError);
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
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
    Auth_PresentationController.prototype.forgotNavigationNew = function(enteredUserName) {
        scope_AuthPresenter.commonFunctionForNavigation("frmForgotEnterEmailID");
    };
    Auth_PresentationController.prototype.navigateToLogin = function(UserName) {
        var navManager = applicationManager.getNavigationManager();
        var loginData = navManager.getCustomInfo("frmLogin");
        if (UserName && UserName !== undefined && UserName !== "") {
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
        if (UserName && UserName !== undefined && UserName !== "") {
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
            scope_AuthPresenter.asyncManager.initiateAsyncProcess(2);
            scope_AuthPresenter.getPasswordRulesAndPolicy(scope_AuthPresenter.getPasswordRulesAndPolicySuccessCallback, scope_AuthPresenter.getPasswordRulesAndPolicyErrorCallback);
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
        scope_AuthPresenter.asyncManager.setSuccessStatus(0, resSuccess);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(2)) {
            var navManager = applicationManager.getNavigationManager();
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
    Auth_PresentationController.prototype.presentationCvvValidationError = function(err) {
        scope_AuthPresenter.asyncManager.setErrorStatus(0, err);
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
            var navManager = applicationManager.getNavigationManager();
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
        if (!validationUtilManager.isPasswordValidForPolicy(password)) {
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
        var username = scope_AuthPresenter.authManger.getForgotObject().UserName;
        scope_AuthPresenter.clearForgotObject();
        scope_AuthPresenter.navigateToLoginAfterPasswordUpdate(scope_AuthPresenter.authManger.getUserName());
    };
    Auth_PresentationController.prototype.presentationUpdatePasswordError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotCreatePassword', true);
            controller.bindGenericError(err.errorMessage);
        }
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
        if (err.errmsg["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err.errmsg);
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
            if (Object.keys(CommonUtilities.CLIENT_PROPERTIES).length === 0) {
                let configurationSvc = kony.sdk.getCurrentInstance().getConfigurationService();
                configurationSvc.getAllClientAppProperties(function(response) {
                    if (Object.keys(response).length === 0 || response.MB_ENABLE_INAPP_CAMPAIGNS === undefined || response.MB_ENABLE_POPUP_CAMPAIGNS === undefined) {
                        response = {...response,
                            "MB_ENABLE_INAPP_CAMPAIGNS": "false",
                            "MB_ENABLE_POPUP_CAMPAIGNS": "false",
                        };
                    }
                    CommonUtilities.CLIENT_PROPERTIES = response;
                    if (response.MB_ENABLE_INAPP_CAMPAIGNS && response.MB_ENABLE_INAPP_CAMPAIGNS.toUpperCase() === "TRUE") {
                        asyncManager.callAsync(
                            [
                                asyncManager.asyncItem(scope_AuthPresenter.dmManager, 'getPreLoginAds'),
                            ],
                            function(asyncResponses) {
                                scope.campaignsCallback(asyncResponses.responses[0].data);
                            });
                    }
                }, function() {});
                //scope_AuthPresenter.dmManager.getPreLoginAds(scope_AuthPresenter.fetchPreloginAdsSuccesCallback,scope_AuthPresenter.fetchPreloginAdsErrorCallback);
            } else if (CommonUtilities.CLIENT_PROPERTIES && CommonUtilities.CLIENT_PROPERTIES.MB_ENABLE_INAPP_CAMPAIGNS && CommonUtilities.CLIENT_PROPERTIES.MB_ENABLE_INAPP_CAMPAIGNS.toUpperCase() === "TRUE") {
                asyncManager.callAsync(
                    [
                        asyncManager.asyncItem(scope_AuthPresenter.dmManager, 'getPreLoginAds'),
                    ],
                    function(asyncResponses) {
                        scope.campaignsCallback(asyncResponses.responses[0].data);
                    });
            }
        } else {
            var preloginAdData = [];
            if (CommonUtilities.CLIENT_PROPERTIES && CommonUtilities.CLIENT_PROPERTIES.MB_ENABLE_INAPP_CAMPAIGNS && CommonUtilities.CLIENT_PROPERTIES.MB_ENABLE_INAPP_CAMPAIGNS.toUpperCase() === "TRUE") {
                preloginAdData = scope_AuthPresenter.dmManager.getPreLoginAds();
            }
            return preloginAdData;
        }
    };
    Auth_PresentationController.prototype.campaignsCallback = function(response) {
        if (response && response["isServerUnreachable"] == true) this.fetchPreloginAdsErrorCallback(response);
        else this.fetchPreloginAdsSuccesCallback(response);
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
    Auth_PresentationController.prototype.fetchPostloginAds = function() {
        var isPostLoginAdsEnabled = applicationManager.getConfigurationManager().getIsPostLoginAdsEnabled();
        if (isPostLoginAdsEnabled === "false" || isPostLoginAdsEnabled == false) { //if the backend value is either boolean or string
            scope_AuthPresenter.navigateToDashboardFromAds();
        }
        //     else if(!scope_AuthPresenter.dmManager.arePostLoginAdsFetched()) {
        //       scope_AuthPresenter.dmManager.getPostLoginAds(scope_AuthPresenter.fetchPostLoginAdsPresentationSuccessCallback,scope_AuthPresenter.fetchPostLoginAdsPresentationErrorCallback);
        //     }
        else {
            //       var postLoginAds = scope_AuthPresenter.dmManager.getPostLoginAds();
            //       if(postLoginAds.length!==0 && postLoginAds.length<=scope_AuthPresenter.dmManager.getMaxNumOfPostLoginAds()) {
            //         //  scope_AuthPresenter.commonFunctionForNavigation("frmFullScreenAds");
            //         var navManager =  applicationManager.getNavigationManager();
            //         navManager.navigateTo("frmFullScreenAds",true);
            //       }
            //       else {
            scope_AuthPresenter.navigateToDashboardFromAds();
            //       }
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
            navManager.navigateTo("frmFullScreenAds", true);
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
        //    var configManager = applicationManager.getConfigurationManager();
        //    var navManager = applicationManager.getNavigationManager();
        var accMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        //    if(configManager.isAggregatedExternalAccountEnabled())
        //    {
        accMod.presentationController.fetchAccountDashboardCampaignsForAggregatedDashboard();
        //     }
        //     else
        //    {
        //      accMod.presentationController.fetchInfeedAds();
        //   }
    };
    Auth_PresentationController.prototype.getMobileNo = function() {
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        return userPreferencesManager.getUserPhone();
    };
    Auth_PresentationController.prototype.getEmail = function() {
        var userPreferencesManager = applicationManager.getUserPreferencesManager();
        return userPreferencesManager.getUserEmail();
    };
    Auth_PresentationController.prototype.trackRegDevice = function() {
        function presentationSuccessCallback() {}

        function presentationErrorCallback() {}
        var registrationManager = applicationManager.getRegistrationManager();
        registrationManager.trackRegisteredDevice(presentationSuccessCallback, presentationErrorCallback);
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
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
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
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        }
    };
    Auth_PresentationController.prototype.fetchCaptcha = function(data) {
        scope_AuthPresenter.authManger.generateCaptcha(data, scope_AuthPresenter.fetchCaptchaSuccess, scope_AuthPresenter.fetchCaptchaFailure);
    };
    Auth_PresentationController.prototype.fetchCaptchaSuccess = function(res) {
        var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterEmailID', true);
        controller.fetchCaptchaSuccess(res);
    };
    Auth_PresentationController.prototype.fetchCaptchaFailure = function(err) {
        var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterEmailID', true);
        controller.fetchCaptchaFailure();
    };
    Auth_PresentationController.prototype.verifyDOB = function(verifyData) {
        var validationManager = applicationManager.getValidationUtilManager();
        var forUtility = applicationManager.getFormatUtilManager();
        var isValidDOB = validationManager.isDOBValid(verifyData.dob);
        if (isValidDOB === true) {
            var userDOB = forUtility.getDateForFormatting(verifyData.dob);
            var dateOfBirth = forUtility.getFormatedDateString(new Date(userDOB), forUtility.getBackendDateFormat());
            var phone = "";
            if (verifyData.code) {
                phone = verifyData.code + "-" + verifyData.phone;
            } else {
                phone = verifyData.phone;
            }
            var fetchUserNameJSON = {
                "Phone": phone,
                "Email": verifyData.email,
                "DateOfBirth": dateOfBirth,
                "serviceKey": verifyData.serviceKey,
                "captchaValue": verifyData.captcha
            };
            scope_AuthPresenter.authManger.verifyUserName(fetchUserNameJSON, scope_AuthPresenter.presentationUserVerifySuccess, scope_AuthPresenter.presentationUserVerifyError);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterDOB', true);
            controller.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validDOB"));
        }
    };
    Auth_PresentationController.prototype.presentationUserVerifySuccess = function(res) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (res !== null && res.isUserExists !== "false") {
            var username = res.user_attributes[0].UserName;
            var securitykey = res.user_attributes[0].securityKey;
            var serviceKey = res.serviceKey;
            var userlist = [];
            for (var i = 0; i < res.user_attributes.length; i++) {
                userlist[i] = [res.user_attributes[i].UserName, res.user_attributes[i].UserName];
            }
            var userMap = new Map();
            for (var i = 0; i < res.user_attributes.length; i++) {
                userMap.set(res.user_attributes[i].UserName, res.user_attributes[i]);
            }
            var data = {
                "UserNameList": userlist
            };
            scope_AuthPresenter.userList = userlist;
            scope_AuthPresenter.authManger.setPrimarykeyAttribute(data);
            scope_AuthPresenter.authManger.setUserName(userlist);
            scope_AuthPresenter.authManger.setServicekey(serviceKey);
            scope_AuthPresenter.authManger.setSecurityKey(securitykey);
            if (CommonUtilities.isSCAEnabled && CommonUtilities.isSCAEnabled()) {
                var controller = applicationManager.getPresentationUtility().getController('frmSCACantSignIn', true);
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("frmSCACantSignIn", userMap);
                scope_AuthPresenter.commonFunctionForNavigation("frmSCACantSignIn");
            } else {
                scope_AuthPresenter.commonFunctionForNavigation("frmForgotSelectUsername");
                var controller = applicationManager.getPresentationUtility().getController('frmForgotSelectUsername', true);
                controller.getUserList(userMap, serviceKey);
            }
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterDOB', true);
            controller.bindVerifyError();
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterEmailID', true);
            controller.verifyError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.usernameUnavailableMsg"));
        }
    };
    Auth_PresentationController.prototype.presentationUserVerifyError = function(err) {
        scope_AuthPresenter.logger.log("####Error while Fetching user : Forgot username flow");
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterDOB', true);
            controller.bindVerifyError();
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterEmailID', true);
            controller.verifyCaptchaFailure(err);
        }
    };
    Auth_PresentationController.prototype.verifyCaptcha = function(verifyData) {
        scope_AuthPresenter.authManger.verifyCaptcha(verifyData, scope_AuthPresenter.presentationCaptchaVerifySuccess, scope_AuthPresenter.presentationCaptchaVerifyError);
    };
    Auth_PresentationController.prototype.presentationCaptchaVerifySuccess = function(res) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterEmailID', true);
        controller.verifyCaptchaSuccess();
    };
    Auth_PresentationController.prototype.presentationCaptchaVerifyError = function(err) {
        scope_AuthPresenter.logger.log("####Error while Fetching user : Forgot username flow");
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotEnterEmailID', true);
            controller.verifyCaptchaFailure(err);
        }
    };
    Auth_PresentationController.prototype.getPasswordWarning = function() {
        var userObj = applicationManager.getUserPreferencesManager();
        return userObj.getPasswordWarning();
    };
    Auth_PresentationController.prototype.getLocaleDOB = function(dob) {
        var forUtility = applicationManager.getFormatUtilManager();
        var config = applicationManager.getConfigurationManager();
        var frontEndDateFormat = '';
        var locale = config.getLocale();
        if (locale === 'en' || locale === 'en_US') frontEndDateFormat = 'm/d/Y';
        else frontEndDateFormat = config.frontendDateFormat[locale];
        dob = dob.replace(/-/g, '\/');
        return forUtility.getFormatedDateString(new Date(dob), frontEndDateFormat);
    };
    Auth_PresentationController.prototype.navigateToMFA = function(selectedUserName) {
        //	 var authManger = applicationManager.getAuthManager();
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
            scope_AuthPresenter.authManger.setServicekey(servicekey);
            var controller = applicationManager.getPresentationUtility().getController('frmForgotMFAOption3', true);
            controller.setFormUI(res);
            scope_AuthPresenter.commonFunctionForNavigation("frmForgotMFAOption3");
        } else {
            var securitykey = res["MFAAttributes"].securityKey;
            var servicekey = res["MFAAttributes"].serviceKey;
            scope_AuthPresenter.unmaskedphoneNumber = res["MFAAttributes"]["customerCommunication"]["phone"]["unmasked"];
            scope_AuthPresenter.unmaskedemail = res["MFAAttributes"]["customerCommunication"]["email"]["unmasked"];
            scope_AuthPresenter.authManger.setServicekey(servicekey);
            scope_AuthPresenter.authManger.setSecurityKey(securitykey);
            var controller = applicationManager.getPresentationUtility().getController('frmForgotMFASecurityCode', true);
            controller.setFormUI(res);
            scope_AuthPresenter.commonFunctionForNavigation("frmForgotMFASecurityCode");
        }
    };
    Auth_PresentationController.prototype.navigateToMFAErrorCallback = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        }
    };
    Auth_PresentationController.prototype.navigateToOTPScreen = function(data) {
        //	 var authManger = applicationManager.getAuthManager();
        scope_AuthPresenter.unmaskedphoneNumber = data.phone;
        scope_AuthPresenter.unmaskedemail = data.email;
        var username = scope_AuthPresenter.authManger.getUserName();
        var servicekey = scope_AuthPresenter.authManger.getServicekey();
        var inputJSON = {
            "UserName": username,
            "MFAAttributes": {
                "serviceKey": servicekey,
                "OTP": {
                    "phone": scope_AuthPresenter.unmaskedphoneNumber,
                    "email": scope_AuthPresenter.unmaskedemail
                }
            }
        };
        scope_AuthPresenter.authManger.requestResetPasswordOTP(inputJSON, scope_AuthPresenter.navigateToOTPScreenSuccessCallback, scope_AuthPresenter.navigateToOTPScreenErrorCallback);
    };
    Auth_PresentationController.prototype.navigateToOTPScreenSuccessCallback = function(res) {
        var securitykey = res["MFAAttributes"].securityKey;
        scope_AuthPresenter.authManger.setSecurityKey(securitykey);
        scope_AuthPresenter.authManger.setMFAResponse(res);
        var communicationType = scope_AuthPresenter.authManger.getCommunicationType();
        res["MFAAttributes"]["communicationType"] = communicationType;
        res["MFAAttributes"]["phone"] = scope_AuthPresenter.maskedphoneNumber;
        res["MFAAttributes"]["email"] = scope_AuthPresenter.maskedemail;
        var controller = applicationManager.getPresentationUtility().getController('frmForgotMFASecurityCode', true);
        controller.setFormUI(res);
        scope_AuthPresenter.commonFunctionForNavigation("frmForgotMFASecurityCode");
    };
    Auth_PresentationController.prototype.navigateToOTPScreenErrorCallback = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        }
    };
    Auth_PresentationController.prototype.verifyMFAOTP = function(otp) {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var otp = otp;
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
        scope_AuthPresenter.authManger.setMFAResponse(res);
        scope_AuthPresenter.asyncManager.setSuccessStatus(0, res);
        if (scope_AuthPresenter.asyncManager.areAllservicesDone(2)) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
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
            var controller = applicationManager.getPresentationUtility().getController('frmForgotMFASecurityCode', true);
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
                    "phone": scope_AuthPresenter.phoneNumber,
                    "email": scope_AuthPresenter.email,
                    "securityKey": scope_AuthPresenter.authManger.getSecurityKey()
                }
            }
        };
        scope_AuthPresenter.authManger.requestResetPasswordOTP(inputJSON, scope_AuthPresenter.resendMFAOTPSuccessCallback, scope_AuthPresenter.resendMFAOTPScreenErrorCallback);
    };
    Auth_PresentationController.prototype.resendMFAOTPSuccessCallback = function(res) {
        scope_AuthPresenter.authManger.setSecurityKey(res["MFAAttributes"]["securityKey"]);
        scope_AuthPresenter.authManger.setMFAResponse(res);
        scope_AuthPresenter.MFAresponse = res;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
    Auth_PresentationController.prototype.resendMFAOTPScreenErrorCallback = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmForgotMFASecurityCode', true);
            controller.showIncorrectOTPError(err.serverErrorRes);
        }
    };
    Auth_PresentationController.prototype.setUsernamePasswordJSON = function(UsernamePasswordJSON) {
        Auth_PresentationController.UsernamePasswordJSON = UsernamePasswordJSON;
    };
    Auth_PresentationController.prototype.getCountryCodes = function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var userPrefManager = applicationManager.getUserPreferencesManager();
        userPrefManager.getCountryCodes(scope_AuthPresenter.getCountryCodesSuccess, scope_AuthPresenter.getCountryCodesError);
    };
    Auth_PresentationController.prototype.getCountryCodesSuccess = function(data) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var controller = applicationManager.getPresentationUtility().getController('frmForgotSelectCountry', true);
        controller.setFormUI(data.countrycode);
    };
    Auth_PresentationController.prototype.getCountryCodesError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
    Auth_PresentationController.prototype.regenerateActivationCode = function(data) {
        scope_AuthPresenter.authManger.regenerateActivationCode(data, scope_AuthPresenter.regenerateActivationCodeSuccess, scope_AuthPresenter.regenerateActivationCodeFailure);
    };
    Auth_PresentationController.prototype.regenerateActivationCodeSuccess = function(res) {
        var controller = applicationManager.getPresentationUtility().getController('frmForgotResetInformation', true);
        controller.regenerateActivationSuccess();
    };
    Auth_PresentationController.prototype.regenerateActivationCodeFailure = function(err) {
        var controller = applicationManager.getPresentationUtility().getController('frmForgotResetInformation', true);
        controller.regenerateActivationFailure();
    };
    return Auth_PresentationController;
});