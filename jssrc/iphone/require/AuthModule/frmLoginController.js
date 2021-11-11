define("AuthModule/userfrmLoginController", ["CommonUtilities"], function(CommonUtilities) {
    return {
        timerCounter: 0,
        dialPadNo: "",
        lengthOfDialNo: 0,
        popupMsg: '',
        preloginAdData: [],
        gestID: "",
        gestIDs: [],
        numOfAds: 0,
        xOffset: 0,
        selectedLanguage: -1,
        imageObjArray: [],
        imageDownloadFailureCount: 0,
        imageDownloadSuccessCount: 0,
        currAdFlex: 1,
        adsHided: false,
        isSwipeDone: false,
        isTapDone: false,
        isAdsCallExecuted: false,
        isTimerOn: false,
        mfaSecureAccessKey: "",
        adsPreshow: function() {
            if (!this.adsHided) {
                this.resetAdsUI();
                var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
                if (authMode.presentationController.canPreloginAdsRenderedToUI()) {
                    var preloginAdData = authMode.presentationController.fetchPreloginAds();
                    if (preloginAdData) {
                        this.bindAdData(preloginAdData);
                    }
                }
                //this.view.flxBottom.skin = "sknFlxF4F4F4";
            } else {
                this.hideAds();
            }
        },
        resetAdsUI: function() {
            this.view.flxBottom.setVisibility(true);
            this.view.flxSelectLanguage.setVisibility(false);
            this.view.flxBottom.top = "72%";
            this.view.imgBg.setVisibility(false);
            this.removeGestureRecognisers();
            this.xOffset = 0;
            this.imageObjArray = [];
            this.currAdFlex = 1;
            this.imageDownloadFailureCount = 0;
            this.imageDownloadSuccessCount = 0;
            this.isSwipeDone = false;
            this.isTapDone = false;
            this.view.flxScrollContainerAds.setContentOffset({
                x: this.xOffset,
                y: 0
            }, true);
            this.view.flxBottom.skin = "sknFlxffffff";
            this.view.flxLoadingIndicator.setVisibility(true);
            let self = this;
            if (CommonUtilities.CLIENT_PROPERTIES && ((CommonUtilities.CLIENT_PROPERTIES.MB_ENABLE_INAPP_CAMPAIGNS === undefined) || (CommonUtilities.CLIENT_PROPERTIES.MB_ENABLE_INAPP_CAMPAIGNS && CommonUtilities.CLIENT_PROPERTIES.MB_ENABLE_INAPP_CAMPAIGNS.toUpperCase() === "FALSE"))) {
                self.view.flxLoadingIndicator.setVisibility(false);
            }
            this.view.imgLoadingIndicator.src = "loadersmall.gif";
            this.view.flxAdInfo.setVisibility(false);
            for (var i = 1; i <= 5; i++) {
                this.view["flxAd" + i].setVisibility(false);
                this.view["imgAd" + i].src = null;
                this.view["flxProgressBarButton" + i].setVisibility(false);
            }
            this.view.flxProgressBar.forceLayout();
            this.view.flxProgressBar.setVisibility(true);
        },
        bindAdData: function(preloginAdData) {
            if (preloginAdData && preloginAdData.length !== 0) {
                this.imageObjArray = [];
                this.preloginAdData = preloginAdData;
                this.numOfAds = preloginAdData.length;
                this.imageDownloadSuccessCount = 0;
                this.imageDownloadFailureCount = 0;
                var param;
                var date = new Date();
                var deviceUtilManager = applicationManager.getDeviceUtilManager();
                this.view.flxLoadingIndicator.setVisibility(true);
                for (var j = 1; j <= this.numOfAds; j++) {
                    param = date.getTime();
                    this.view["flxAd" + j].setVisibility(false);
                    this.view["flxAd" + j].left = parseInt(deviceUtilManager.getDeviceInfo().screenWidth) + "dp";
                    this.view["imgAd" + j].src = preloginAdData[j - 1].imageURL + "?Param=" + param;;
                }
            } else {
                this.hideAds();
            }
            var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMod.presentationController.setRenderPreloginAdsToTrue();
            // this.view.flxBottom.skin = "sknFlxF4F4F4";
        },
        removeGestureRecognisers: function() {
            if (this.gestIDs.length !== 0) {
                var swipeGestureID = this.gestIDs[0];
                var tapGestureID = this.gestIDs[1];
                this.view.flxScrollContainerAds.removeGestureRecognizer(swipeGestureID);
                this.view.flxScrollContainerAds.removeGestureRecognizer(tapGestureID);
                this.gestIDs = [];
            }
            if (this.gestID !== "") {
                this.view.flxBottom.removeGestureRecognizer(this.gestID);
            }
        },
        setGestureRecogniser: function() {
            if (this.gestIDs.length === 0) {
                var swipeGestID = this.view.flxScrollContainerAds.setGestureRecognizer(2, {
                    fingers: 1,
                    swipedistance: 20,
                    swipevelocity: 60
                }, this.onAdSwipe);
                var tapGestID = this.view.flxScrollContainerAds.setGestureRecognizer(1, {
                    fingers: 1,
                    taps: 1
                }, this.onAdTap);
                this.gestIDs[0] = swipeGestID;
                this.gestIDs[1] = tapGestID;
            }
            //this.setGestureForFlxBottom();
            this.view.rtxDetails.onClick = this.onAdTap;
        },
        onAdDownloadComplete: function(issuccess, adNumber) {
            var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            if (issuccess) {
                var i = this.imageDownloadSuccessCount; //this.imageObjArray.length;
                this.view["flxAd" + adNumber].setVisibility(true);
                this.alignFlexInScrollContainer(i + 1);
                if (i === 0) {
                    this.setGestureRecogniser();
                    this.setDataForAd(adNumber);
                    var loggerManager = applicationManager.getLoggerManager();
                    loggerManager.setCustomMetrics(this, true, "#PreLoginAds Displayed");
                    this.isAdsCallExecuted = true;
                    if (authMode.presentationController.isappInitDone()) {
                        this.view.flxLoadingIndicator.setVisibility(false);
                        if (authMode.presentationController.isFaceLoginInProgress === false) applicationManager.getPresentationUtility().dismissLoadingScreen();
                    }
                    //   this.view.flxBottom.skin = "sknFlxF4F4F4";
                }
                this.imageObjArray[adNumber - 1] = adNumber;
                this.imageDownloadSuccessCount++;
            } else {
                this.imageDownloadFailureCount++;
                this.isAdsCallExecuted = true;
                this.view["flxAd" + adNumber].setVisibility(false);
                if (this.imageDownloadFailureCount === this.numOfAds) {
                    var logger = applicationManager.getLoggerManager();
                    logger.log("####All Prelogin Ad's download failed\n####Therefore Hiding Them");
                    this.onAllAdsDownloadFailure();
                }
            }
            if (this.imageObjArray.length >= 1 && (this.imageDownloadSuccessCount + this.imageDownloadFailureCount) === this.numOfAds) {
                this.onAllAdsDownloadComplete();
            }
        },
        frmLoginOnHide: function() {
            kony.timer.cancel("slide5");
            this.isTimerOn = false;
        },
        slideCarousel: function() {
            let scWidth = applicationManager.getDeviceUtilManager().getDeviceInfo().screenWidth;
            let xVal = this.xOffset;
            if (this.currAdFlex >= 1 && this.currAdFlex < this.numOfAds) {
                xVal = xVal + scWidth;
                this.currAdFlex++;
            } else if (this.currAdFlex === this.numOfAds) {
                xVal = 0;
                this.currAdFlex = 1;
            }
            this.view.flxScrollContainerAds.setContentOffset({
                x: xVal,
                y: 0
            }, true);
            let adNumber = this.imageObjArray[this.currAdFlex - 1];
            this.setDataForAd(adNumber);
            for (let j = 1; j <= this.numOfAds; j++) {
                if (j === this.currAdFlex) {
                    this.view["flxProgressBarButton" + j].skin = "sknflx003e75Radius100px";
                } else {
                    this.view["flxProgressBarButton" + j].skin = "sknflxE3E3E3Radius100px";
                }
            }
            this.xOffset = xVal;
            this.isTimerOn = true;
        },
        onAllAdsDownloadComplete: function() {
            if (this.isTimerOn) kony.timer.cancel("slide5");
            var deviceUtilManager = applicationManager.getDeviceUtilManager();
            var visible = 0;
            for (var k = 1; k <= this.numOfAds; k++) {
                if (this.view["flxAd" + (k)].isVisible) {
                    visible++;
                    var leftVal = ((visible - 1) * parseInt(deviceUtilManager.getDeviceInfo().screenWidth));
                    this.view["flxAd" + k].left = leftVal + "dp";
                }
            }
            kony.timer.schedule("slide5", this.slideCarousel, 5, true);
            this.view.flxProgressBar.setVisibility(true);
            this.imageObjArray = this.imageObjArray.filter(function(el) {
                if (el) return el
            });
            this.view.flxLoadingIndicator.setVisibility(false);
        },
        onAllAdsDownloadFailure: function() {
            this.view.imgLoadingIndicator.src = "addownloadfailed.png";
            this.hideAds();
        },
        alignFlexInScrollContainer: function(noOfDownloadedAds) {
            if (noOfDownloadedAds > 1) {
                if (noOfDownloadedAds === 2) {
                    this.view.flxProgressBarButton1.setVisibility(true);
                    this.view.flxProgressBarButton2.setVisibility(true);
                    this.view.flxProgressBarButton1.left = "46%";
                    this.view.flxProgressBarButton1.skin = "sknflx003e75Radius100px";
                    this.view.flxProgressBarButton2.skin = "sknflxE3E3E3Radius100px";
                } else if (noOfDownloadedAds === 3) {
                    this.view.flxProgressBarButton3.setVisibility(true);
                    this.view.flxProgressBarButton3.skin = "sknflxE3E3E3Radius100px";
                    this.view.flxProgressBarButton1.left = "43.5%";
                } else if (noOfDownloadedAds === 4) {
                    this.view.flxProgressBarButton4.setVisibility(true);
                    this.view.flxProgressBarButton4.skin = "sknflxE3E3E3Radius100px";
                    this.view.flxProgressBarButton1.left = "41%";
                } else {
                    this.view.flxProgressBarButton5.setVisibility(true);
                    this.view.flxProgressBarButton5.skin = "sknflxE3E3E3Radius100px";
                    this.view.flxProgressBarButton1.left = "38%";
                }
                this.view.flxProgressBar.forceLayout();
            }
        },
        setDataForAd: function(adNumber) {
            var adData = this.preloginAdData[adNumber - 1];
            this.view.flxAdInfo.setVisibility(false);
            this.view.flxAdInfo.forceLayout();
            var loggerManager = applicationManager.getLoggerManager();
            loggerManager.setCustomMetrics(this, true, "#PreLogin Ad" + adNumber + " Displayed");
        },
        onAdSwipe: function(widget, gestureInfo, context) {
            var downloadedAdCount = this.imageDownloadSuccessCount;
            var xVal = this.xOffset;
            var scWidth = applicationManager.getDeviceUtilManager().getDeviceInfo().screenWidth;
            var isThereChange = false;
            if (!this.isSwipeDone) {
                var loggerManager = applicationManager.getLoggerManager();
                loggerManager.setCustomMetrics(this, true, "#PreLoginAds Swiped");
                this.isSwipeDone = true;
            }
            if (gestureInfo.swipeDirection === 1) {
                if (this.currAdFlex >= 1 && this.currAdFlex < downloadedAdCount) {
                    isThereChange = true;
                    xVal = xVal + scWidth;
                    this.currAdFlex++;
                }
            } else if (gestureInfo.swipeDirection === 2) {
                if (this.currAdFlex > 1 && this.currAdFlex <= downloadedAdCount) {
                    isThereChange = true;
                    xVal = xVal - scWidth;
                    this.currAdFlex--;
                }
            }
            if (isThereChange) {
                this.view.flxScrollContainerAds.setContentOffset({
                    x: xVal,
                    y: 0
                }, true);
                var adNumber = this.imageObjArray[this.currAdFlex - 1];
                this.setDataForAd(adNumber);
                for (var j = 1; j <= downloadedAdCount; j++) {
                    if (j === this.currAdFlex) {
                        this.view["flxProgressBarButton" + j].skin = "sknflx003e75Radius100px";
                    } else {
                        this.view["flxProgressBarButton" + j].skin = "sknflxE3E3E3Radius100px";
                    }
                }
                this.xOffset = xVal;
                this.view.flxProgressBar.forceLayout();
                this.view.flxScrollContainerAds.forceLayout();
            }
        },
        onAdTap: function() {
            var adNumber = this.imageObjArray[this.currAdFlex - 1];
            var navUrl;
            if (adNumber) {
                var adData = this.preloginAdData[adNumber - 1];
                navUrl = adData.destinationURL;
            }
            if (navUrl) {
                kony.application.openURL(navUrl);
                var loggerManager = applicationManager.getLoggerManager();
                if (!this.isTapDone) {
                    loggerManager.setCustomMetrics(this, true, "#PreLoginAds Tapped");
                    this.isTapDone = true;
                }
                loggerManager.setCustomMetrics(this, true, "#PreLogin Ad" + adNumber + " Image Tapped");
            }
        },
        hideAds: function() {
            this.adsHided = true;
            this.view.flxBottom.setVisibility(false);
            var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            if (authMode.presentationController.isappInitDone()) {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            }
            this.isAdsCallExecuted = true;
        },
        init: function() {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
            this.view.postShow = this.frmLoginPostshow;
        },
        frmLoginPostshow: function() {
            if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY) && !(this.isAdsCallExecuted)) {
                this.view.flxLoadingIndicator.setVisibility(true);
                applicationManager.getPresentationUtility().showLoadingScreen();
            }
            let self = this;
            if (CommonUtilities.CLIENT_PROPERTIES && ((CommonUtilities.CLIENT_PROPERTIES.MB_ENABLE_INAPP_CAMPAIGNS === undefined) || (CommonUtilities.CLIENT_PROPERTIES.MB_ENABLE_INAPP_CAMPAIGNS && CommonUtilities.CLIENT_PROPERTIES.MB_ENABLE_INAPP_CAMPAIGNS.toUpperCase() === "FALSE"))) {
                self.view.flxLoadingIndicator.setVisibility(false);
                if (!(self.isAdsCallExecuted)) {
                    applicationManager.getPresentationUtility().dismissLoadingScreen();
                }
            }
            var navManager = applicationManager.getNavigationManager();
            var appLaunchError = navManager.getCustomInfo("appLaunchError");
            if (!kony.sdk.isNullOrUndefined(appLaunchError)) {
                kony.ui.Alert(appLaunchError.basic, appLaunchError.psp);
                navManager.setCustomInfo("appLaunchError", undefined);
                return;
            }
            this.showErrorToastMessage();
            var loginData = navManager.getCustomInfo("frmLogin");
            var logindatatoast = navManager.getCustomInfo("frmLoginToast");
            if (logindatatoast !== undefined && logindatatoast.postupdateusernameandpassword !== undefined) {
                this.showUernamePasswordSuccessMessage(logindatatoast.postupdateusernameandpassword);
            }
            if (loginData.showPasswordUpdatedSuccessMessage) {
                this.showPasswordUpdatedSuccessMessage();
            }
            this.checkForEnrollSuccess();
            var newUserManager = applicationManager.getNewUserBusinessManager();
            newUserManager.resetEnrollObj();
            //     if((this.popupMsg!==null)&&(this.popupMsg!==''))
            //     {
            //       this.bindGenericSuccess(this.popupMsg);
            //     }           
        },
        showErrorToastMessage: function() {
            var navManager = applicationManager.getNavigationManager();
            var loginData = navManager.getCustomInfo("frmLoginToast");
            if (loginData && loginData.toastMessage && loginData.toastMessage !== "") {
                this.bindGenericError(loginData.toastMessage);
                loginData.toastMessage = "";
                navManager.setCustomInfo("frmLoginToast", loginData);
            }
        },
        initActions: function() {
            let scopeObj = this;
            //this.view.flxForgot.onClick=this.forgotNavigation;
            this.view.flxLanguageSelection.onClick = this.showLanguages;
            this.view.btnupdateLanguage.onClick = this.btnUpdateLanguageOnClick;
            this.view.btnCancel.onClick = this.btnCancelLanguageOnClick;
            this.view.segSelectLanguage.onRowClick = this.segSelectLanguageOnRowClick;
            this.view.login.onFocusStart = this.tbxOnTouchStart;
            this.view.login.onFocusEnd = this.animateflxContentAndWelcomeFlexBack;
            this.view.login.hideDashboardIcon = this.hideFlxDashboard;
            this.view.login.onLoginSuccess = function(loginSuccessObj) {
                scopeObj.loginSuccessNavigate(loginSuccessObj);
            };
            this.view.login.onLoginFailure = function(loginFailureObj) {
                scopeObj.bindGenericError(loginFailureObj);
            };
            this.view.login.setErrorStatus = function(errorData) {
                scopeObj.setErrorStatus(errorData);
            };
            this.view.login.forgotNavigation = function(enteredUsername) {
                scopeObj.forgotNavigation(enteredUsername);
            };
            this.view.login.setUIAtFormLevelEvent = function(loginType) {
                scopeObj.changeUIBasedOnLoginType(loginType);
            };
            this.view.login.initiateLoginFlow = function(loginType) {
                scopeObj.initiateLoginFlow(loginType);
            };
            this.view.loginPopups.onLoginSuccess = function(loginSuccessObj) {
                scopeObj.loginSuccessNavigate(loginSuccessObj);
            };
            this.view.loginPopups.onPopupVisible = function(isPopupVisible) {
                scopeObj.changeUIBasedOnLoginPopupVisibility(isPopupVisible);
            };
            this.view.loginPopups.onLoginFailure = function(loginFailureObj) {
                scopeObj.bindGenericError(loginFailureObj);
            };
        },
        showUernamePasswordSuccessMessage: function(msg) {
            var navManager = applicationManager.getNavigationManager();
            var loginData = navManager.getCustomInfo("frmLoginToast");
            this.bindGenericSuccess(msg);
            loginData.postupdateusernameandpassword = "";
            navManager.setCustomInfo("frmLoginToast", loginData);
        },
        showLanguages: function() {
            var self = this;
            this.view.flxSelectLanguage.isVisible = true;
            if (this.view.imgDropdown.src === "arrowup.png") {
                self.view.imgDropdown.src = "arrowdown.png";
                self.HideLanguages();
            } else {
                this.view.imgDropdown.src = "arrowup.png";
                var topValue, topback;
                if (this.view.flxWelcome.top === "20%") {
                    topValue = "26.9%";
                    topback = "20%"
                } else {
                    topValue = "22%";
                    topback = "15%"
                }
                this.view.flxSelectLanguage.animate(kony.ui.createAnimation({
                    "0": {
                        "anchorPoint": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE
                        },
                        "rectified": true,
                        "top": topback,
                        "opacity": 1
                    },
                    "100": {
                        "anchorPoint": {
                            "x": 0.5,
                            "y": 0.5
                        },
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE
                        },
                        "rectified": true,
                        "top": topValue,
                        "opacity": 1
                    }
                }), {
                    "delay": 0,
                    "iterationCount": 1,
                    "fillMode": kony.anim.FILL_MODE_FORWARDS,
                    "duration": 0.3
                }, {
                    "animationEnd": function() {}
                });
            }
        },
        HideLanguages: function() {
            var topValue, topback;
            if (this.view.flxWelcome.top === "20%") {
                topValue = "27%";
                topback = "20%";
            } else {
                topValue = "22%";
                topback = "15%";
                // alert(topback);
            }
            var scopeObj = this;
            this.view.flxSelectLanguage.animate(kony.ui.createAnimation({
                "0": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": topValue,
                    "opacity": 0
                },
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": topback,
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {
                    scopeObj.view.flxSelectLanguage.setVisibility(false);
                    scopeObj.view.imgDropdown.src = "arrowdown.png";
                }
            });
        },
        segSelectLanguageOnRowClick: function() {
            var navMan = applicationManager.getNavigationManager();
            var config = applicationManager.getConfigurationManager();
            var selectedSectionIndex = Math.floor(this.view.segSelectLanguage.selectedRowIndex[0]);
            var selectedRowIndex = Math.floor(this.view.segSelectLanguage.selectedRowIndex[1]);
            this.selectedLanguage = this.getBackendLanguage(this.view.segSelectLanguage.data[selectedRowIndex].lblLanguage);
            var currentLocale = kony.i18n.getCurrentLocale();
            if (currentLocale === 'en') currentLocale = 'en_US';
            if (currentLocale === config.locale[this.selectedLanguage]) {
                this.view.btnupdateLanguage.setEnabled(false);
                this.view.btnupdateLanguage.skin = "sknBtna0a0a0SSPReg26px";
            } else {
                this.view.btnupdateLanguage.setEnabled(true);
                this.view.btnupdateLanguage.skin = "sknBtn0095e4RoundedffffffSSP26px";
            }
        },
        btnUpdateLanguageOnClick: function() {
            var config = applicationManager.getConfigurationManager();
            var scope = this;
            var basicProperties = {
                "message": applicationManager.getPresentationUtility().getStringFromi18n("i18n.common.changeLanguageMessage") + " " + scope.selectedLanguage + " ?",
                "alertType": constants.ALERT_TYPE_CONFIRMATION,
                "alertTitle": "",
                "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.Yes"),
                "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
                "alertIcon": "",
                "alertHandler": function(response) {
                    if (response) {
                        scope.changeLanguage();
                    }
                }
            };
            applicationManager.getPresentationUtility().showAlertMessage(basicProperties, {});
        },
        changeLanguage: function() {
            var sm = applicationManager.getStorageManager();
            var config = applicationManager.getConfigurationManager();
            var index = Math.floor(this.view.segSelectLanguage.selectedRowIndex[1]);
            var langObj = {
                "language": this.selectedLanguage,
                "index": index,
                "flow": config.constants.LANG_CHANGE_FROM_LOGIN
            };
            this.view.flxLanguageSelection.lblLanguageValue.text = this.selectedLanguage;
            sm.setStoredItem("langObj", langObj);
            config.setLocaleAndDateFormat();
            var currentLocale = config.getLocale();
            if (currentLocale === 'en_US') currentLocale = 'en';
            if (currentLocale) {
                kony.i18n.setCurrentLocaleAsync(currentLocale, this.languageChangeOnSuccess, this.languageChangeOnFailure);
            }
            //this.HideLanguages();
        },
        languageChangeOnSuccess: function() {
            var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMod.presentationController.commonFunctionForNavigation("frmLanguageSelectionLoading");
        },
        languageChangeOnFailure: function() {
            kony.print("Fail");
        },
        btnCancelLanguageOnClick: function() {
            var sm = applicationManager.getStorageManager();
            var langObjFromStorage = sm.getStoredItem("langObj");
            var index = 0;
            if (!kony.sdk.isNullOrUndefined(langObjFromStorage)) {
                index = langObjFromStorage.index;
            }
            this.view.segSelectLanguage.selectedRowIndices = [
                [0, [index]]
            ];
            this.selectedLanguage = this.view.segSelectLanguage.data[index].lblLanguage;
            this.view.flxLanguageSelection.lblLanguageValue.text = this.selectedLanguage;
            this.HideLanguages();
        },
        getLanguageMasterData: function() {
            return {
                "US English": "en_US",
                "UK English": "en_GB",
                "Spanish": "es_ES",
                "German": "de_DE",
                "French": "fr_FR"
            }
        },
        getValueFromKey: function(value) {
            var configManager = applicationManager.getConfigurationManager();
            var langObject = configManager.locale;
            for (var key in langObject) {
                if (langObject.hasOwnProperty(key)) {
                    var shortLang = langObject[key];
                    if (shortLang === value) {
                        return key;
                    }
                }
            }
        },
        getBackendLanguage: function(lang) {
            var languageData = this.getLanguageMasterData();
            for (var key in languageData) {
                if (languageData.hasOwnProperty(key)) {
                    if (key === lang) {
                        return this.getValueFromKey(languageData[key]);
                    }
                }
            }
        },
        setDataToLanguage: function() {
            var languageData = this.getLanguageMasterData();
            var flags = {
                "US English": "us.png",
                "UK English": "uk.png",
                "Spanish": "spanish.png",
                "German": "german.png",
                "French": "french.png",
            };
            var data = [];
            for (var key in languageData) {
                if (languageData.hasOwnProperty(key)) {
                    var language = key;
                    var dataElt = {
                        "imgCheckbox": {
                            "src": "radiobuttonactive.png",
                        },
                        "lblLanguage": language,
                        "imgFlag": flags[language],
                        "template": "flxLanguage"
                    };
                    data.push(dataElt);
                }
            }
            //     this.view.segSelectLanguage.widgetDataMap = dataMap;
            this.view.segSelectLanguage.setData(data);
            var sm = applicationManager.getStorageManager();
            var langObjFromStorage = sm.getStoredItem("langObj");
            var index = 0;
            if (!kony.sdk.isNullOrUndefined(langObjFromStorage)) {
                index = langObjFromStorage.index;
            }
            this.view.segSelectLanguage.selectedRowIndices = [
                [0, [index]]
            ];
            this.selectedLanguage = this.view.segSelectLanguage.data[index].lblLanguage;
            this.view.flxLanguageSelection.lblLanguageValue.text = this.selectedLanguage;
            this.view.btnupdateLanguage.setEnabled(false);
            this.view.btnupdateLanguage.skin = "sknBtna0a0a0SSPReg26px";
            this.view.forceLayout();
        },
        setGestureForFlxBottom: function() {
            this.view.imgBg.setVisibility(true);
            var gestID = this.view.flxBottom.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
                fingers: 1
            }, function(widgetRef, gestureInfo) {
                if (gestureInfo.swipeDirection === 3) {
                    kony.print("animate Top");
                    this.animateflxBottomToTop();
                }
                if (gestureInfo.swipeDirection === 4) {
                    kony.print("animate Bottom");
                    this.animateflxBottomToBottom();
                }
            }.bind(this));
            this.gestID = gestID;
        },
        animateflxBottomToTop: function() {
            var scopeObj = this;
            this.view.flxBottom.animate(kony.ui.createAnimation({
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": "62%",
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {
                    scopeObj.view.imgBg.src = "swipeback.png";
                }
            });
        },
        animateflxBottomToBottom: function() {
            var scopeObj = this;
            this.view.flxBottom.animate(kony.ui.createAnimation({
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": "72%",
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {
                    scopeObj.view.imgBg.src = "swipeup.png";
                }
            });
        },
        bindAccountPreViewData: function(data, timestamp) {
            if (data.length == 0) {
                this.bindGenericError("Failed to fetch accounts");
            } else {
                var index;
                var businessIndex = false;
                var personalIndex = false;
                for (index = 0; index < data.length; ++index) {
                    var indexData = data[index];
                    if (kony.sdk.isNullOrUndefined(indexData["isBusinessAccount"])) {
                        indexData["isBusinessAccount"] = "false";
                    }
                    if (indexData["isBusinessAccount"] === "true") {
                        data[index]["imgBusinessAccount"] = "businessaccount.png";
                        businessIndex = true;
                    } else {
                        data[index]["imgBusinessAccount"] = "personalaccount.png";
                        personalIndex = true;
                    }
                }
                var isCombinedUser = personalIndex && businessIndex;
                if (isCombinedUser) {
                    this.view.segAccountPreview.rowTemplate = "flxAccountPreviewCombined";
                } else {
                    this.view.segAccountPreview.rowTemplate = "flxAccountPreview";
                }
                this.view.lblAccountPreviewTime.text = "As of " + timestamp;
                this.view.segAccountPreview.widgetDataMap = {
                    lblAccountName: "nickName",
                    lblAccountBalValue: "availableBalance",
                    lblBankName: "bankName",
                    lblAccountBal: "accountType",
                    imgBank: "bankImg",
                    imgBusinessAccount: "imgBusinessAccount",
                    lblAccountType: "account_type_name"
                };
                this.view.segAccountPreview.setData(data);
                this.flxDashboardOnClick();
            }
        },
        flxDashboardOnClick: function() {
            if (this.view.imgDashboard.src === "dashboardicon.png") {
                this.view.imgDashboard.src = "dbicon_up.png";
                this.view.flxDashboard.forceLayout();
                this.view.lblWelcomeMessage.setVisibility(false);
                this.view.lblAccountPreview.setVisibility(true);
                this.view.lblAccountPreviewTime.setVisibility(true);
                this.view.flxWelcome.forceLayout();
                this.view.flxAccountPreview.setVisibility(true);
                this.view.flxContent.setEnabled(false);
                this.animateAccountPreview();
                this.animateFlxContent();
            } else {
                this.view.imgDashboard.src = "dashboardicon.png";
                this.view.flxDashboard.forceLayout();
                this.view.lblWelcomeMessage.setVisibility(true);
                this.view.lblAccountPreview.setVisibility(false);
                this.view.lblAccountPreviewTime.setVisibility(false);
                //this.view.flxContent.setEnabled(true);
                this.view.flxWelcome.forceLayout();
                this.animateAccountPreviewBack();
                this.animateFlxContentBack();
            }
        },
        animateAccountPreview: function() {
            var topValue, topback;
            if (this.view.flxWelcome.top === "20%") {
                topValue = "26.9%";
                topback = "20%"
            } else {
                topValue = "22%";
                topback = "15%"
            }
            this.view.flxAccountPreview.animate(kony.ui.createAnimation({
                "0": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": topback,
                    "opacity": 1
                },
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": topValue,
                    "opacity": 1
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {}
            });
        },
        animateFlxContent: function() {
            //         this.view.flxContent.animate(
            //             kony.ui.createAnimation({
            //                 "100": {
            //                     "anchorPoint": {
            //                         "x": 0.5,
            //                         "y": 0.5
            //                     },
            //                     "stepConfig": {
            //                         "timingFunction": kony.anim.EASE
            //                     },
            //                     "rectified": true,
            //                     "top": "70.1%",
            //                 }
            //             }), {
            //                 "delay": 0,
            //                 "iterationCount": 1,
            //                 "fillMode": kony.anim.FILL_MODE_FORWARDS,
            //                 "duration": 0.3
            //             }, {
            //                 "animationEnd": function() {}
            //             });
        },
        animateAccountPreviewBack: function() {
            var topValue, topback;
            if (this.view.flxWelcome.top === "20%") {
                topValue = "27%";
                topback = "20%";
            } else {
                topValue = "22%";
                topback = "15%";
                // alert(topback);
            }
            var scopeObj = this;
            this.view.flxAccountPreview.animate(kony.ui.createAnimation({
                "0": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": topValue,
                    "opacity": 100
                },
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": topback,
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {
                    scopeObj.view.flxAccountPreview.setVisibility(false);
                }
            });
        },
        animateFlxContentBack: function() {
            var topValue;
            if (this.view.flxWelcome.top === "20%") {
                topValue = "27%";
            } else {
                topValue = "22%";
            }
            //         this.view.flxContent.animate(
            //             kony.ui.createAnimation({
            //                 "100": {
            //                     "anchorPoint": {
            //                         "x": 0.5,
            //                         "y": 0.5
            //                     },
            //                     "stepConfig": {
            //                         "timingFunction": kony.anim.EASE
            //                     },
            //                     "rectified": true,
            //                     "top": topValue,
            //                 }
            //             }), {
            //                 "delay": 0,
            //                 "iterationCount": 1,
            //                 "fillMode": kony.anim.FILL_MODE_FORWARDS,
            //                 "duration": 0.3
            //             }, {
            //                 "animationEnd": function() {}
            //             });
        },
        roundNum: function(num, decimals) {
            var t = Math.pow(10, decimals);
            return (Math.round((num * t) + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
        },
        flxOpenNewAccountOnClick: function() {
            this.view.flxFaceIdPopUp.setVisibility(true);
            this.view.flxFooter.setEnabled(false);
            this.view.flxContent.setEnabled(false);
            this.view.forceLayout();
        },
        customAlertPopUpFlxCancelOnClick: function() {
            this.view.customAlertPopUp.setVisibility(false);
            this.view.flxContent.setEnabled(true);
            this.view.flxFooter.setEnabled(true);
            this.view.flxWelcome.setEnabled(true);
            kony.localAuthentication.cancelAuthentication();
            this.view.flxPopup.setVisibility(false);
            this.view.forceLayout();
        },
        resetLoginUI: function() {
            //   applicationManager.getConfigurationManager().GoogleservicesSupported=false;
            if (applicationManager.getConfigurationManager().GoogleservicesSupported === false) {
                this.view.btnLocate.setVisibility(false);
                this.view.btnEnroll.setVisibility(true);
                this.view.btnSupport.setVisibility(true);
                this.view.btnEnroll.width = "50%";
                this.view.btnSupport.width = "50%";
                this.view.flxVerticalSeperator.setVisibility(true);
                this.view.flxVerticalSeperator.left = "-50%";
                this.view.flxVerticalSeperator2.setVisibility(false);
                this.view.flxBorderTopFooter.left = "-50%";
            } else {
                this.view.btnLocate.setVisibility(true);
                this.view.btnEnroll.setVisibility(true);
                this.view.btnSupport.setVisibility(true);
                this.view.btnLocate.width = "33.5%";
                this.view.btnEnroll.width = "33.5%";
                this.view.btnSupport.width = "33.5%";
                this.view.flxVerticalSeperator.setVisibility(true);
                this.view.flxVerticalSeperator.left = "-33.5%";
                this.view.flxVerticalSeperator2.setVisibility(true);
                this.view.flxVerticalSeperator2.left = "-33.5%";
                this.view.flxBorderTopFooter.left = "-35%";
            }
            this.view.flxAccountPreview.top = "27%";
            //this.view.flxContent.top="27%";
            this.view.imgKonyLogo.top = "3%";
            this.view.imgKonyLogo.height = "14%";
            this.view.flxWelcome.top = "20%";
            this.view.flxShadow.top = "18.5%";
            //this.view.flxAccountPreview.setVisibility(false);
            // this.view.tbxUsername.focusSkin="tbxBlueFocus";
            // this.view.tbxPassword.focusSkin="tbxBlueFocus";
            this.view.lblWelcomeMessage.setVisibility(true);
            this.view.lblAccountPreview.setVisibility(false);
            this.view.lblAccountPreviewTime.setVisibility(false);
            this.view.flxPopup.setVisibility(false);
            this.view.imgDashboard.src = "dashboardicon.png";
            //this.view.flxContent.forceLayout();
            this.view.customAlertPopUp.setVisibility(false);
            this.view.forceLayout();
            this.view.flxWelcome.setEnabled(true);
            //this.view.flxContent.setEnabled(true);
            this.view.flxFooter.setEnabled(true);
        },
        loginFunctionalPreshow: function() {
            var configManager = applicationManager.getConfigurationManager();
            this.view.lblWelcomeMessage.left = "20dp";
            if (configManager.appLaunchedMode.length === 0) {
                configManager.appLaunchedMode = "normal"
            }
            var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            var navData = applicationManager.getNavigationManager().getCustomInfo("frmLogin");
            if (!(navData.isFirstTimeLoginUname) && (navData.isRememberMeOn) && (navData.userName)) {
                var userPreferencesManager = applicationManager.getUserPreferencesManager();
                var firstname = userPreferencesManager.getUserFirstName();
                var lastname = userPreferencesManager.getUserLastName();
                this.view.lblWelcomeMessage.text = kony.i18n.getLocalizedString("kony.mb.Welcome") + " back " + firstname + " " + lastname;
            } else this.view.lblWelcomeMessage.text = kony.i18n.getLocalizedString("kony.mb.Welcome");
            this.view.lblWelcomeMessage.text = this.view.lblWelcomeMessage.text.trim() + ".";
            this.showWelcomeBackUser(navData);
            // authMod.presentationController.showLoginForm();
            if (navData.isAccountPreviewEnabled) {
                this.view.flxDashboard.setVisibility(true);
                this.view.lblWelcomeMessage.left = "60dp";
            } else {
                this.view.flxDashboard.setVisibility(false);
                this.view.lblWelcomeMessage.left = "20dp";
            }
        },
        showWelcomeBackUser: function(loginData) {
            if (loginData.usernameFromForgotUsername && (loginData.usernameFromForgotUsername !== undefined || loginData.usernameFromForgotUsername !== "")) {
                this.view.lblWelcomeMessage.text = "Welcome Back " + loginData.usernameFromForgotUsername;
            } else if (loginData.NUOUsername && (loginData.NUOUsername !== undefined || loginData.NUOUsername !== "")) {
                this.view.lblWelcomeMessage.text = "Welcome Back " + loginData.NUOUsername;
            }
        },
        accountPreview: function() {
            if (this.view.flxAccountPreview.isVisible === false) {
                var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
                authMod.presentationController.showAccountPreview();
            } else {
                this.flxDashboardOnClick();
            }
        },
        loginActionClicks: function() {
            this.view.flxDashboard.onClick = this.accountPreview;
        },
        frmLoginPreShow: function() {
            if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                applicationManager.getPresentationUtility().showLoadingScreen();
            }
            this.isAdsCallExecuted = false;
            //this.adsHided = false;
            var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMode.presentationController.startUpCompleted();
            this.view.flxWelcome.setVisibility(true);
            this.initActions();
            this.resetLoginUI();
            this.loginFunctionalPreshow();
            this.setDataToLanguage();
            this.adsPreshow();
            this.changeUIBasedOnLoginPopupVisibility(false); // TODO: Check if after removing this there is any impact or not.
            //if (authMode.presentationController.isappInitDone())
            //applicationManager.getPresentationUtility().dismissLoadingScreen();
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().logFormName(currentForm);
            this.view.flxWelcome.zIndex = 10;
            var loggerManager = applicationManager.getLoggerManager();
            loggerManager.setCustomMetrics(this, true, "#App Launch");
            this.loginActionClicks();
            this.view.SecurityQuestionsComponent.setVisibility(false);
            this.view.SecurityCodeComponent.setVisibility(false);
            this.view.login.top = "27%";
            this.setFlowActions();
        },
        setFlowActions: function() {
            // Method to capture Events of SecurityCode and SecurityQuestions MFA Components.
            let scopeObj = this;
            scopeObj.view.SecurityCodeComponent.rememberDeviceRegFlag = function(rememberDeviceReg) {
                scopeObj.setRememberDeviceRegFlag(rememberDeviceReg);
            };
            scopeObj.view.SecurityCodeComponent.onSuccessCallback = function(response) {
                scopeObj.mfaComponentsOnVerifySuccess(response);
            };
            scopeObj.view.SecurityCodeComponent.onFailureCallback = function(response) {
                scopeObj.mfaComponentsOnLogout(response);
            };
            scopeObj.view.SecurityCodeComponent.onCancel = function(response) {
                scopeObj.mfaComponentsOnLogout();
            };
            scopeObj.view.SecurityQuestionsComponent.rememberDeviceRegFlag = function(rememberDeviceReg) {
                scopeObj.setRememberDeviceRegFlag(rememberDeviceReg);
            };
            scopeObj.view.SecurityQuestionsComponent.onSuccessCallback = function(response) {
                scopeObj.mfaComponentsOnVerifySuccess(response);
            };
            scopeObj.view.SecurityQuestionsComponent.onFailureCallback = function(response) {
                scopeObj.mfaComponentsOnLogout(response);
            };
            scopeObj.view.SecurityQuestionsComponent.onCancel = function() {
                scopeObj.mfaComponentsOnLogout();
            };
            scopeObj.view.login.forgotNavigation = function() {
                scopeObj.forgotNavigation();
            }
        },
        toggleSwitch: function() {
            var self = this;
            if (this.view.flxSwitch.left === "0dp") {
                self.animate(self.view.flxSwitchBackground, self.view.flxSwitch, "20dp");
                self.animateShadow(self.view.flxSwitchShadow, "18dp");
            } else {
                self.animate(self.view.flxSwitchBackground, self.view.flxSwitch, "0dp");
                self.animateShadow(self.view.flxSwitchShadow, "0dp");
            }
        },
        animate: function(parentWidget, widget, value) {
            var self = this;
            widget.animate(kony.ui.createAnimation({
                "100": {
                    "left": value,
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function() {
                    if (widget.left === "0dp") {
                        parentWidget.skin = "sknflxa0a0a0Switch";
                        // widget.skin = "sknflxa0a0a0Bordera0a0a0Border100pxRadius";
                    } else if (widget.left === "20dp") {
                        parentWidget.skin = "sknflx0095e4B0095e4100pxRadius2";
                        //  widget.skin = "sknflx0095e4Border0095e4Border100pxRadius";
                    }
                }
            });
        },
        animateShadow: function(widget, value) {
            var self = this;
            widget.animate(kony.ui.createAnimation({
                "100": {
                    "left": value,
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function() {}
            });
        },
        showPasswordUpdatedSuccessMessage: function() {
            var msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.login.pwdUpdateMsg");
            this.bindGenericSuccess(msg);
            var navManager = applicationManager.getNavigationManager();
            var loginData = navManager.getCustomInfo("frmLogin");
            loginData.showPasswordUpdatedSuccessMessage = false;
            navManager.setCustomInfo("frmLogin", loginData);
        },
        bindGenericError: function(msg) {
            applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
        },
        bindGenericSuccess: function(msg) {
            applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
        },
        bindLoginErrorMessage(err) {
            var scope = this;
            //applicationManager.getDataProcessorUtility().showToastMessageError(this,err,scope.clearUsernamePwd);
        },
        bindPinError(err) {
            var scope = this;
            //applicationManager.getDataProcessorUtility().showToastMessageError(this,err,scope.clearProgressFlexLogin);
        },
        onLocateUSClick: function() {
            var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMode.presentationController.checkAppinit = true;
            var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
            locateUsModule.presentationController.presentLocateUsView(false, this);
            return;
            var scopeObj = this;
            var positionoptions = {
                timeout: 64000,
                fastestInterval: 0,
                minimumTime: 0
            };
            applicationManager.getPresentationUtility().showLoadingScreen();
            kony.location.getCurrentPosition(scopeObj.geoLocationSuccessCallBack.bind(scopeObj), scopeObj.geoLocationErrorCallBack.bind(scopeObj), positionoptions);
        },
        geoLocationSuccessCallBack: function(response) {
            try {
                var latitude, longitude;
                var latLongObj = {};
                if (response && response.coords && response.coords.latitude && response.coords.longitude) {
                    latitude = response.coords.latitude;
                    longitude = response.coords.longitude;
                    latLongObj.latitude = latitude;
                    latLongObj.longitude = longitude;
                    var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
                    locateUsModule.presentationController.getNearByLocations(latLongObj);
                    //applicationManager.getPresentationUtility().dismissLoadingScreen();
                }
            } catch (err) {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            }
        },
        geoLocationErrorCallBack: function(err) {
            var scopeObj = this;
            var deviceUtilManager = applicationManager.getDeviceUtilManager();
            var isIphone = deviceUtilManager.isIPhone();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            if (err.code == 1) {
                var i18nKey = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationPermissionDenied");
                scopeObj.bindGenericError(i18nKey);
            }
            if (err.code == 3 && !isIphone) {
                var i18n_timeOut = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationTimeOut");
                scopeObj.bindGenericError(i18n_timeOut);
            }
            if (err.code == 2 && !isIphone) {
                var i18n_turnOnLocationAlert = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.turnOnLocationAlert");
                kony.ui.Alert(i18n_turnOnLocationAlert, scopeObj.onClickSettingsOrCancelHandler.bind(scopeObj), constants.ALERT_TYPE_CONFIRMATION, "Cancel", "Settings", "");
            }
        },
        onClickSettingsOrCancelHandler: function(response) {
            if (response === false) {
                var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
                locateUsModule.presentationController.openLocationSettings();
            }
        },
        checkForEnrollSuccess: function() {
            this.popupMsg = "";
            var navManager = applicationManager.getNavigationManager();
            var enrollInfo = navManager.getCustomInfo("frmEnrollSignUp");
            if (enrollInfo !== null && enrollInfo !== undefined) {
                if (enrollInfo.isEnrollSuccess) {
                    var msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.Congrats") + " " + enrollInfo.userName + "! " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.successMessage");
                    this.popupMsg = msg;
                    this.bindGenericSuccess(msg);
                }
                navManager.setCustomInfo("frmEnrollSignUp", null);
            }
        },
        navToNUOPhone: function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
            NUOMod.presentationController.resetNewUserPresentationController();
            NUOMod.presentationController.getUsernameAndPasswordRules();
            //  NUOMod.presentationController.commonFunctionForNavigation("frmOBSignInWithPhoneNumber");
        },
        tbxOnTouchStart: function() {
            // Linked to onFocusStart Event of login COMPONENT
            this.view.flxWelcome.animate(kony.ui.createAnimation({
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": "15%",
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {}
            });
            //this.view.flxWelcome.zIndex = 1;
            this.view.imgKonyLogo.animate(kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "height": "9%"
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function() {}
            });
            //this.view.flxShadow.top = "18.5%";
            this.view.flxShadow.animate(kony.ui.createAnimation({
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": "13.5%",
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {}
            });
            this.view.login.animate(kony.ui.createAnimation({
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": "21.7%",
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {}
            });
            //this.view.imgKonyLogo.top="1%";
        },
        animateflxContentAndWelcomeFlexBack: function() {
            // Linked to onFocusEnd Event of login COMPONENT
            this.view.flxWelcome.animate(kony.ui.createAnimation({
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": "20%",
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {}
            });
            this.view.imgKonyLogo.animate(kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "height": "14%"
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function() {}
            });
            this.view.flxShadow.animate(kony.ui.createAnimation({
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": "18.5%",
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {}
            });
            this.view.login.animate(kony.ui.createAnimation({
                "100": {
                    "anchorPoint": {
                        "x": 0.5,
                        "y": 0.5
                    },
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true,
                    "top": "27%",
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {
                "animationEnd": function() {}
            });
            //this.view.imgKonyLogo.top="1%";
        },
        changeUIBasedOnLoginType: function(loginType) {
            /** ACCESSED: when setUIAtFormLevelEvent event raised from 'login' COMPONENT */
            if (this.view.loginPopups) {
                this.view.loginPopups.zIndex = 2;
                if (loginType === "password") {
                    this.view.loginPopups.setVisibility(false);
                    this.changeUIBasedOnLoginPopupVisibility(false);
                } else {
                    this.view.loginPopups.setVisibility(true);
                }
                this.view.loginPopups.setVisibilityForSpecificLoginType(loginType);
            } else {
                this.changeUIBasedOnLoginPopupVisibility(false);
            }
        },
        changeUIBasedOnLoginPopupVisibility: function(isPopupOpen) {
            // To change UI when opening/closing the popup in loginPopups Component.
            this.view.flxWelcome.setEnabled(!isPopupOpen);
            this.view.flxFooter.setEnabled(!isPopupOpen);
            this.view.login.setEnabled(!isPopupOpen);
            if (this.view.loginPopups) {
                if (isPopupOpen) {
                    this.view.loginPopups.zIndex = 800;
                } else {
                    this.view.loginPopups.zIndex = 2;
                }
            }
        },
        hideFlxDashboard: function() {
            // Linked to hideDashboardIcon Event of login COMPONENT
            this.view.flxDashboard.setVisibility(false);
            this.view.lblWelcomeMessage.left = "20dp";
        },
        setErrorStatus: function(response) {
            // Linked to setErrorStatus Event of login COMPONENT
            let authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMod.presentationController.asyncManager.setErrorStatus(response.serviceNumber, response.serviceResponse);
        },
        loginSuccessNavigate: function(data) {
            // Linked to onLoginSuccess Event of login COMPONENT
            let authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMode.presentationController.currentAuthMode = data["currentAuthMode"];
            authMode.presentationController.rememberdeviceregflag = data["rememberdeviceregflag"];
            authMode.presentationController.setUsernamePasswordJSON(data["UsernamePasswordJSON"]);
            authMode.presentationController.presentationLoginSuccess(data["resSuccess"]);
        },
        forgotNavigation: function(enteredUserName) {
            // Linked to forgotNavigation Event of login COMPONENT
            //applicationManager.getPresentationUtility().showLoadingScreen();
            const authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            //authMode.presentationController.checkAppinit = true;
            //const navManager = applicationManager.getNavigationManager();
            //const userNameDetails = applicationManager.getStorageManager().getStoredItem("maskUserName");
            //if (applicationManager.getDataProcessorUtility().isUserNameMasked(enteredUserName) && userNameDetails["maskedUserName"]==enteredUserName) {
            // enteredUserName=userNameDetails["backendUserName"];
            //}
            // authMode.presentationController.forgotNavigation(enteredUserName);
            authMode.presentationController.forgotNavigationNew(enteredUserName);
        },
        initiateLoginFlow: function(loginMode) {
            // Linked to 'initiateLoginFlow' event of login COMPONENT
            // This method executes certain methods for faceid/touchid login flow.
            if (loginMode === "faceid") {
                this.faceIdLogin();
            } else if (loginMode === "touchid") {
                this.touchIdLogin();
            } else if (loginMode === "pin") {
                this.changeUIBasedOnLoginPopupVisibility(true);
            }
        },
        faceIdLogin: function() {
            const scopeObj = this;
            let deviceManager = applicationManager.getDeviceUtilManager();
            let navData = applicationManager.getNavigationManager().getCustomInfo("frmLogin");
            let identifierTouch = {
                "identifier": navData.userName
            };
            var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            let authData = kony.keychain.retrieve(identifierTouch);
            if (deviceManager.isFaceIdAvilable() && !kony.sdk.isNullOrUndefined(authData) && !kony.sdk.isNullOrUndefined(authData.secureaccount) && !kony.sdk.isEmptyObject(authData.secureaccount) && !kony.sdk.isNullOrUndefined(authData.securedata)) {
                scopeObj.changeUIBasedOnLoginType("faceid"); // This will make the loginPopups Component Visible
                scopeObj.changeUIBasedOnLoginPopupVisibility(true); // Since popup has will open so changing zIndex of loginPopups Component
                scopeObj.view.loginPopups.initiateLoginFlow("faceid");
            } else {
                scopeObj.setFaceIdflag(false);
                scopeObj.setLoginPasswordUI();
                authMod.presentationController.isFaceLoginInProgress = false;
            }
        },
        touchIdLogin: function() {
            const scopeObj = this;
            let deviceManager = applicationManager.getDeviceUtilManager();
            let navData = applicationManager.getNavigationManager().getCustomInfo("frmLogin");
            let identifierTouch = {
                "identifier": navData.userName
            };
            let authData = kony.keychain.retrieve(identifierTouch);
            if (deviceManager.isTouchIDSupported()) {
                scopeObj.changeUIBasedOnLoginType("touchid");
                if (navData.isIphone && (!kony.sdk.isNullOrUndefined(authData.secureaccount) && !kony.sdk.isEmptyObject(authData.secureaccount) && !kony.sdk.isNullOrUndefined(authData.securedata))) {
                    scopeObj.view.loginPopups.initiateLoginFlow("touchid");
                } else if (navData.isIphone && !(!kony.sdk.isNullOrUndefined(authData.secureaccount) && !kony.sdk.isEmptyObject(authData.secureaccount) && !kony.sdk.isNullOrUndefined(authData.securedata))) {
                    scopeObj.setTouchIdflag(false);
                    scopeObj.setLoginPasswordUI();
                } else if (!navData.isIphone) {
                    scopeObj.view.loginPopups.initiateLoginFlow("touchid");
                }
            } else {
                scopeObj.setTouchIdflag(false);
                scopeObj.setLoginPasswordUI();
            }
        },
        setLoginPasswordUI: function() {
            this.setDefaultMode("password");
            this.changeUIBasedOnLoginPopupVisibility(false);
            this.changeUIBasedOnLoginType("password");
        },
        setDefaultMode: function(authMode) {
            let userManager = applicationManager.getUserPreferencesManager();
            userManager.setDefaultAuthMode(authMode);
        },
        setFaceIdflag: function(value) {
            let userManager = applicationManager.getUserPreferencesManager();
            userManager.updateFaceIdFlag(value);
        },
        setTouchIdflag: function(value) {
            let userManager = applicationManager.getUserPreferencesManager();
            userManager.upadateTouchIdFlag(value);
        },
        mfaComponentsOnVerifySuccess: function(response) {
            // Linked to onVerifySuccess Event of SecurityQuestions & SecurityCode COMPONENTS
            const authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMod.presentationController.mfaLoginFlow(response);
        },
        mfaComponentsOnLogout: function(response) {
            if (response) {
                let loginData = applicationManager.getNavigationManager().getCustomInfo("frmLoginToast");
                loginData = loginData ? loginData : {};
                loginData.toastMessage = response.errorMessage;
                applicationManager.getNavigationManager().setCustomInfo("frmLoginToast", loginData);
            }
            // Linked to onLogout Event of SecurityQuestions & SecurityCode COMPONENTS
            const authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMod.presentationController.onLogout();
        },
        setRememberDeviceRegFlag: function(flag) {
            // Linked to rememberDeviceRegFlag Event of SecurityQuestions & SecurityCode COMPONENTS
            const authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMod.presentationController.rememberdeviceregflag = flag;
        },
        initMFAFlow: function(mfaJSON) {
            // Invoked from Presentation Controller to decide which mfa COMPONENT to open
            let mfaAttributes = mfaJSON.response.MFAAttributes;
            let mfaType = mfaAttributes.MFAType;
            this.mfaSecureAccessKey = mfaAttributes.serviceKey;
            this.navigateBasedOnMFAType(mfaType, mfaJSON);
        },
        navigateBasedOnMFAType: function(mfaType, mfaJSON) {
            const scopeObj = this;
            switch (mfaType) {
                case "SECURE_ACCESS_CODE":
                    scopeObj.view.SecurityCodeComponent.setVisibility(true);
                    scopeObj.view.SecurityQuestionsComponent.setVisibility(false);
                    scopeObj.view.SecurityCodeComponent.setContext(mfaJSON);
                    break;
                case "SECURITY_QUESTIONS":
                    scopeObj.view.SecurityQuestionsComponent.setVisibility(true);
                    scopeObj.view.SecurityCodeComponent.setVisibility(false);
                    scopeObj.view.SecurityQuestionsComponent.setContext(mfaJSON);
                    break;
            }
        },
        getServicekey: function() {
            // Invoked from Presentation Controller
            return this.mfaSecureAccessKey;
        },
    };
});
define("AuthModule/frmLoginControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_f7fa01f6196a476bab10b8b1a1f46fd6: function AS_Button_f7fa01f6196a476bab10b8b1a1f46fd6(eventobject) {
        var self = this;
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.checkAppinit = true;
        authMode.presentationController.commonFunctionForNavigation("frmEnrollActivateProfile");
    },
    AS_Button_e871bfd24cd74f03b0880c9f934f9980: function AS_Button_e871bfd24cd74f03b0880c9f934f9980(eventobject) {
        var self = this;
        this.onLocateUSClick();
    },
    AS_Button_ddca20b68415486faf31bad9fd1fa798: function AS_Button_ddca20b68415486faf31bad9fd1fa798(eventobject) {
        var self = this;
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.checkAppinit = true;
        authMode.presentationController.commonFunctionForNavigation("frmSupport");
    },
    AS_FlexContainer_e8059ee060174b45b4f31a06f675663c: function AS_FlexContainer_e8059ee060174b45b4f31a06f675663c(eventobject) {
        var self = this;
        this.customAlertPopUpFlxCancelOnClick();
        //to enable the screen
        this.view.flxWelcome.setEnabled(true);
        this.view.flxContent.setEnabled(true);
        this.view.flxFooter.setEnabled(true);
    },
    AS_FlexContainer_g4eafa9b97c74a1c81c2eed992281565: function AS_FlexContainer_g4eafa9b97c74a1c81c2eed992281565(eventobject) {
        var self = this;
        this.navToNUOPhone();
    },
    AS_Form_i93d45a3a71a4e18b4c0123ddd1ff557: function AS_Form_i93d45a3a71a4e18b4c0123ddd1ff557(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_eb9b89592ac242958770cc625d8d058b: function AS_Form_eb9b89592ac242958770cc625d8d058b(eventobject) {
        var self = this;
        return self.frmLoginPreShow.call(this);
    },
    AS_Image_jd291611a9c34167af6f8b4970001df9: function AS_Image_jd291611a9c34167af6f8b4970001df9(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 1);
    },
    AS_Image_c3d9c988cf0d49bd8945b5190c359853: function AS_Image_c3d9c988cf0d49bd8945b5190c359853(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 2);
    },
    AS_Image_caf642f394ec4dc6ac32e850b6890c91: function AS_Image_caf642f394ec4dc6ac32e850b6890c91(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 3);
    },
    AS_Image_h2eb335453f64e20b873e1581f6ca411: function AS_Image_h2eb335453f64e20b873e1581f6ca411(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 4);
    },
    AS_Image_b6447e350f804c3198447f6ef626956c: function AS_Image_b6447e350f804c3198447f6ef626956c(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 5);
    },
    AS_UWI_c879a677a36e49a5bb4e677f7b9de35b: function AS_UWI_c879a677a36e49a5bb4e677f7b9de35b(enteredUsername) {
        var self = this;
        return self.forgotNavigation.call(this, enteredUsername);
    },
    AS_UWI_c92847fddf334e4ea77acad963cfb155: function AS_UWI_c92847fddf334e4ea77acad963cfb155() {
        var self = this;
        return self.hideFlxDashboard.call(this);
    },
    AS_UWI_j4838f66c9b04c4fa5401fe4b285bc15: function AS_UWI_j4838f66c9b04c4fa5401fe4b285bc15() {
        var self = this;
        return self.animateflxContentAndWelcomeFlexBack.call(this);
    },
    AS_UWI_c84d1f445dcc400980f1e7b38e3ae368: function AS_UWI_c84d1f445dcc400980f1e7b38e3ae368() {
        var self = this;
        return self.tbxOnTouchStart.call(this);
    },
    AS_UWI_a5e6e86715694f53980d99d1d774cc76: function AS_UWI_a5e6e86715694f53980d99d1d774cc76(loginSuccessObj) {
        var self = this;
        return self.loginSuccessNavigate.call(this, loginSuccessObj);
    },
    AS_UWI_h1921d30f65c4565b0725ffda75ecd92: function AS_UWI_h1921d30f65c4565b0725ffda75ecd92(errorData) {
        var self = this;
        return self.setErrorStatus.call(this, errorData);
    }
});
define("AuthModule/frmLoginController", ["AuthModule/userfrmLoginController", "AuthModule/frmLoginControllerActions"], function() {
    var controller = require("AuthModule/userfrmLoginController");
    var controllerActions = ["AuthModule/frmLoginControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
