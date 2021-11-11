define("ManageCardsModule/userfrmManageNewCardNameController", {
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.txtNewPassword.setFocus(true);
        this.initActions();
        this.renderTitleBar();
        this.handleData();
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    renderTitleBar: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (!isIphone) {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    },
    handleData: function() {
        var cardobjIns = applicationManager.getCardsManager().getCardObject();
        if (!cardobjIns.cardDisplayName) {
            this.view.lblRemChars.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cards.newCardNameRemChar") + " " + 25
            this.view.txtNewPassword.text = "";
            this.view.btnUpdatePassword.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnUpdatePassword.setEnabled(false);
        }
    },
    initActions: function() {
        this.view.btnUpdatePassword.onClick = this.validateUserName;
        this.view.customHeader.flxBack.onClick = this.goBack;
        this.view.customHeader.btnRight.onClick = this.onCancel;
        this.view.txtNewPassword.onTextChange = this.onLastNameTextChange;
    },
    onLastNameTextChange: function() {
        if (this.view.txtNewPassword.text === "") {
            this.view.lblRemChars.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cards.newCardNameRemChar") + " " + 25
            this.view.btnUpdatePassword.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnUpdatePassword.setEnabled(false);
        } else {
            this.view.lblRemChars.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cards.newCardNameRemChar") + " " + (25 - this.view.txtNewPassword.text.length);
            this.view.btnUpdatePassword.skin = "sknBtn0095e426pxEnabled";
            this.view.btnUpdatePassword.setEnabled(true);
        }
    },
    validateUserName: function() {
        var nickname = this.view.txtNewPassword.text;
        var patt = nickname.match(/[a-zA-Z\s]*/);
        if (patt[0] === nickname) {
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.navigateToConfirm(this.view.txtNewPassword.text);
        } else {
            this.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.manageCards.validName"));
        }
    },
    bindViewError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    cancelCommon: function() {
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
        manageCardsModule.presentationController.cancelCommon();
    }
});
define("ManageCardsModule/frmManageNewCardNameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_a5850167cfc74ec5b699c37881261bc7: function AS_Button_a5850167cfc74ec5b699c37881261bc7(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_FlexContainer_a2a73473d43d43ef9a6364e467eb0503: function AS_FlexContainer_a2a73473d43d43ef9a6364e467eb0503(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_d0c57c37fb494c519c118826d7ebd15d: function AS_Form_d0c57c37fb494c519c118826d7ebd15d(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i81a8ada01504f3fb3f43df3e46b5777: function AS_Form_i81a8ada01504f3fb3f43df3e46b5777(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_jf7325c6e4414441b1c9f978cd1eb946: function AS_BarButtonItem_jf7325c6e4414441b1c9f978cd1eb946(eventobject) {
        var self = this;
        this.cancelCommon();
    }
});
define("ManageCardsModule/frmManageNewCardNameController", ["ManageCardsModule/userfrmManageNewCardNameController", "ManageCardsModule/frmManageNewCardNameControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmManageNewCardNameController");
    var controllerActions = ["ManageCardsModule/frmManageNewCardNameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
