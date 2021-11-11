define("ManageCardsModule/userfrmManageNewCardOverviewController", {
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.initActions();
        this.renderTitleBar();
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.cancelCommon;
        this.handleData();
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
        var navMan = applicationManager.getNavigationManager();
        var data = navMan.getCustomInfo("frmManageNewCardOverview");
        this.view.lblCardName.text = data.productName;
        this.view.rtxDetails.text = data.featureDescription;
        // this.view.rtxFeatures.text = "Representative example" + "</br></br>" + "Representative &nbsp    22.9% APR (variable)" + "</br>" + "Purchase rate p.a.    &nbsp    22.9% (variable)" + "</br>" + "Based on credit limit of    &nbsp £1,200";
        this.view.imgCard.src = this.getCardImage(data.productName);
        this.view.segFeatures.widgetDataMap = {
            lblTitle: "lblTitle",
            lblValue: "lblValue",
        };
        var segdata = [{
            "lblTitle": data.representativeLabel1,
            "lblValue": data.representativeValue1
        }, {
            "lblTitle": data.representativeLabel2,
            "lblValue": data.representativeValue2
        }, {
            "lblTitle": data.representativeLabel3,
            "lblValue": data.representativeValue3
        }, ];
        this.view.segFeatures.setData(segdata);
    },
    initActions: function() {
        this.view.btnUpdatePassword.onClick = this.selectCard;
        this.view.customHeader.flxBack.onClick = this.goBack;
        this.view.customHeader.btnRight.onClick = this.onCancel;
    },
    getCardImage: function(cardProductName) {
        var cards = {
            "Classic Cashback Card": 'golden_card.png',
            "Rewards Priority Card": 'petro_card.png',
            "Shop@Ease Platinum Card": 'platinum_card.png',
            "Maverick Debit Card": 'shopping_card.png'
        };
        if (!kony.sdk.isNullOrUndefined(cards[cardProductName])) return cards[cardProductName];
        else return 'platinum_card.png';
    },
    selectCard: function() {
        var navMan = applicationManager.getNavigationManager();
        var data1 = navMan.getCustomInfo("frmManageNewCardOverview");
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
        manageCardsModule.presentationController.navigateToCardName(data1);
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
define("ManageCardsModule/frmManageNewCardOverviewControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_g2026ae6dbc743768eb6032ee805e7e1: function AS_Button_g2026ae6dbc743768eb6032ee805e7e1(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_FlexContainer_a23149f9fbcc45bb8c4830080a65963d: function AS_FlexContainer_a23149f9fbcc45bb8c4830080a65963d(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_f011d7c7ee004ac9825e29682809db68: function AS_Form_f011d7c7ee004ac9825e29682809db68(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i6021dc8e4b04b3aa2bebf6a29e1f060: function AS_Form_i6021dc8e4b04b3aa2bebf6a29e1f060(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_c62e0d80bed845e4be77cd5b896fd315: function AS_BarButtonItem_c62e0d80bed845e4be77cd5b896fd315(eventobject) {
        var self = this;
        this.cancancelCommon();
    }
});
define("ManageCardsModule/frmManageNewCardOverviewController", ["ManageCardsModule/userfrmManageNewCardOverviewController", "ManageCardsModule/frmManageNewCardOverviewControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmManageNewCardOverviewController");
    var controllerActions = ["ManageCardsModule/frmManageNewCardOverviewControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
