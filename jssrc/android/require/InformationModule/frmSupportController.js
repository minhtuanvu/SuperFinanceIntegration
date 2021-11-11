define("InformationModule/userfrmSupportController", ['CampaignUtility'], function(CampaignUtility) {
    return {
        preShow: function() {
            this.setSegmentData();
            this.initActions();
            this.view.customHeader.flxBack.onClick = this.backIcon;
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
            } else {
                this.view.flxHeader.isVisible = true;
            }
            //hard-coded version due to techincal limation of XXX.YYY.ZZZ
            this.view.lblAppVersion.text = kony.i18n.getLocalizedString("kony.mb.Support.AppVersion") + " " + "20" + appConfig.appVersion;
            //  this.enableOrDisableHamburger();
            var navManager = applicationManager.getNavigationManager();
            var configManager = applicationManager.getConfigurationManager();
            var MenuHandler = applicationManager.getMenuHandler();
            var userObj = applicationManager.getUserPreferencesManager();
            if (userObj.isUserLoggedin() === true) {
                MenuHandler.setUpHamburgerForForm(this, configManager.constants.MENUCONTACT);
            }
            this.enableOrDisableHamburger();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().logFormName(currentForm);
            var ContactUs = applicationManager.getLoggerManager();
            ContactUs.setCustomMetrics(this, false, "Support");
            let scopeObj = this;

            function campaignPopUpSuccess(response) {
                CampaignUtility.showCampaign(response, scopeObj.view);
            }

            function campaignPopUpError(response) {
                kony.print(response, "Campaign Not Found!");
            }
            if (applicationManager.getUserPreferencesManager().isUserLoggedin()) {
                CampaignUtility.fetchPopupCampaigns(campaignPopUpSuccess, campaignPopUpError);
            }
        },
        init: function() {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        },
        initActions: function() {
            var scope = this;
            this.view.btnCallBranch.onClick = function() {
                applicationManager.getPresentationUtility().showLoadingScreen();
                var infoCall = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
                infoCall.presentationController.onClickCallUs();
            }
        },
        enableOrDisableHamburger: function() {
            var userObj = applicationManager.getUserPreferencesManager();
            var Login = userObj.isUserLoggedin();
            if (Login === true) {
                this.view.customHeader.flxBack.imgBack.src = "hamburger.png";
                if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                    this.view.flxSupportMain.bottom = "60dp";
                    this.view.flxFooter.isVisible = true;
                } else {
                    this.view.flxSupportMain.bottom = "0dp";
                    this.view.flxFooter.isVisible = false;
                }
            } else {
                var scope = this;
                this.view.flxFooter.isVisible = false;
                this.view.flxSupportMain.bottom = "0dp";
                this.view.customHeader.flxBack.imgBack.src = "backbutton.png";
                this.view.customHeader.flxBack.onClick = function() {
                    scope.backIcon();
                };
            }
        },
        showDial: function(phoneNumber) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            kony.phone.dial(phoneNumber);
        },
        backIcon: function() {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                var userObj = applicationManager.getUserPreferencesManager();
                var Login = userObj.isUserLoggedin();
                if (Login === true) {
                    //           var navManager = applicationManager.getNavigationManager();
                    //           navManager.goBack();
                    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                    accountMod.presentationController.showDashboard();
                } else {
                    var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
                    informationPC.presentationController.commonFunctionForNavigation("frmLogin");
                }
            } else {
                var navManager = applicationManager.getNavigationManager();
                navManager.goBack();
            }
        },
        setSegmentData: function() {
            var scope = this;
            var configManager = applicationManager.getConfigurationManager();
            var data = [{
                "imgArrow": "chevron.png",
                "lblTitle": configManager.constants.FAQ
            }, {
                "imgArrow": "chevron.png",
                "lblTitle": configManager.constants.TERMS
            }, {
                "imgArrow": "chevron.png",
                "lblTitle": configManager.constants.PRIVACY
            }];
            this.view.segSupport.setData(data);
            this.view.segSupport.onRowClick = function() {
                var selectedvalue = scope.view.segSupport.selectedItems[0].lblTitle;
                if (selectedvalue === configManager.constants.PRIVACY) {
                    applicationManager.getPresentationUtility().showLoadingScreen();
                    var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
                    informationPC.presentationController.onClickPrivacyPolicy(selectedvalue);
                } else if (selectedvalue === configManager.constants.TERMS) {
                    applicationManager.getPresentationUtility().showLoadingScreen();
                    var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
                    informationPC.presentationController.onClickTermsAndConditions(selectedvalue);
                } else if (selectedvalue === configManager.constants.ABOUT) {
                    applicationManager.getPresentationUtility().showLoadingScreen();
                    var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
                    informationPC.presentationController.onClickAboutUs(selectedvalue);
                } else if (selectedvalue === configManager.constants.FAQ) {
                    applicationManager.getPresentationUtility().showLoadingScreen();
                    var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
                    informationPC.presentationController.onClickFAQs(selectedvalue);
                }
            }
        }
    };
});
define("InformationModule/frmSupportControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_hdedb5c748b04643a3fa32f841560020: function AS_Form_hdedb5c748b04643a3fa32f841560020(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a9b17a108586468d98ee88f097af2c2f: function AS_Form_a9b17a108586468d98ee88f097af2c2f(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_a978f01fea2044beb36efb7b220b7cd6: function AS_BarButtonItem_a978f01fea2044beb36efb7b220b7cd6(eventobject) {
        var self = this;
        this.backIcon();
    }
});
define("InformationModule/frmSupportController", ["InformationModule/userfrmSupportController", "InformationModule/frmSupportControllerActions"], function() {
    var controller = require("InformationModule/userfrmSupportController");
    var controllerActions = ["InformationModule/frmSupportControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
