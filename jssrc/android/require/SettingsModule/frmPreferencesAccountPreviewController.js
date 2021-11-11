define("SettingsModule/userfrmPreferencesAccountPreviewController", {
    toggleBtnStatus: "",
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.frmAccpreviewPreshow();
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scopeObj = this;
        this.view.customHeader.btnRight.onClick = function() {
            var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
        };
        this.view.customHeader.flxBack.onClick = this.imgbackAction;
        this.view.switchPreview.onSlide = this.toggleBtnAction;
    },
    frmAccpreviewPreshow: function() {
        var navManager = applicationManager.getNavigationManager();
        var status = navManager.getCustomInfo("frmPreferencesAccountPreview");
        if (status.isRememberMeOn != true || status.deviceReg === false) {
            this.view.lblNote.text = kony.i18n.getLocalizedString("kony.mb.preferences.AccountPreviewCannotBeEnabled");
            this.view.flxSwitch.setVisibility(false);
        } else {
            this.view.lblNote.text = kony.i18n.getLocalizedString("kony.mb.See.your.account.and.card.balances.instantly.without.signing.on.the.login");
            this.view.flxSwitch.setVisibility(true);
            if (status.accPreview === true) this.view.switchPreview.selectedIndex = 0;
            else this.view.switchPreview.selectedIndex = 1;
        }
    },
    toggleBtnAction: function() {
        var navManager = applicationManager.getNavigationManager();
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        if (this.view.switchPreview.selectedIndex === 1) {
            authMode.presentationController.setAccountPreviewFlag(false);
        } else {
            authMode.presentationController.setAccountPreviewFlag(true);
        }
        settingsModule.presentationController.getDevDetails();
        var keys = navManager.getCustomInfo("frmSettings");
        keys.popUpMsg = "";
        navManager.setCustomInfo("frmSettings", keys);
    },
    imgbackAction: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    }
});
define("SettingsModule/frmPreferencesAccountPreviewControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d2c819a87694474d8440a0cf2c455b80: function AS_Form_d2c819a87694474d8440a0cf2c455b80(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_f509d93cdef04dc39b1c75b704de6171: function AS_BarButtonItem_f509d93cdef04dc39b1c75b704de6171(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    }
});
define("SettingsModule/frmPreferencesAccountPreviewController", ["SettingsModule/userfrmPreferencesAccountPreviewController", "SettingsModule/frmPreferencesAccountPreviewControllerActions"], function() {
    var controller = require("SettingsModule/userfrmPreferencesAccountPreviewController");
    var controllerActions = ["SettingsModule/frmPreferencesAccountPreviewControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
