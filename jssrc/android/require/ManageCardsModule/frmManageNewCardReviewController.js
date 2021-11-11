define("ManageCardsModule/userfrmManageNewCardReviewController", {
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
            this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
        }
        this.view.btnTransfer.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.btnTransfer.setEnabled(true);
        this.setSegmentData();
        this.view.imgToRightArrow.onTouchEnd = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.navigateTo("frmManageNewCardAccounts");
        };
        this.view.btnTransfer.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.navigateTo("frmManageNewCardPin");
        }
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    postShow: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setSegmentData: function() {
        var navMan = applicationManager.getNavigationManager();
        var data = navMan.getCustomInfo("frmManageNewCardReview");
        this.view.imgCard.src = this.getCardImage(data.cardProductName);
        this.view.lblCardName.text = data.cardProductName;
        this.view.lblToAccountValue.text = data.accountName.substr(0, 16) + "..." + data.accountId.substr(data.accountId.length - 4, data.accountId.length).trim();
        this.view.lblToAvailableBalance.text = data.accountBalanceType + ":";
        this.view.lblToBalanceValue.text = applicationManager.getFormatUtilManager().formatAmountandAppendCurrencySymbol(data.availableBalance);
        this.view.segDetails.widgetDataMap = {
            lblTitle: "lblTitle",
            lblValue: "lblValue",
            imgArrow: "imgArrow"
        };
        var data = [{
            "lblTitle": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cards.selectedCard"),
            "lblValue": data.cardProductName,
            "imgArrow": {
                "onTouchEnd": function(widgetRef) {
                    var navMan = applicationManager.getNavigationManager();
                    navMan.navigateTo("frmManageSelectNewCards");
                }
            }
        }, {
            "lblTitle": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cards.nameOnCard"),
            "lblValue": data.cardDisplayName,
            "imgArrow": {
                "onTouchEnd": function(widgetRef) {
                    var navMan = applicationManager.getNavigationManager();
                    navMan.navigateTo("frmManageNewCardName");
                }
            }
        }];
        this.view.segDetails.setData(data);
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
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    cancelCommon: function() {
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
        manageCardsModule.presentationController.cancelCommon();
    }
});
define("ManageCardsModule/frmManageNewCardReviewControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_g317f29829e44f9eafd7c8b076455862: function AS_Form_g317f29829e44f9eafd7c8b076455862(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b5a3c15bef324669900779501c46c7ac: function AS_Form_b5a3c15bef324669900779501c46c7ac(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_e1ad5f4b89c84046a1e927d67ed2c312: function AS_Form_e1ad5f4b89c84046a1e927d67ed2c312(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e60e476322b242c388d9ac7d28dbc925: function AS_BarButtonItem_e60e476322b242c388d9ac7d28dbc925(eventobject) {
        var self = this;
        this.flxBackOnClick();
    },
    AS_BarButtonItem_d78462bb53fd466d817749637c330c96: function AS_BarButtonItem_d78462bb53fd466d817749637c330c96(eventobject) {
        var self = this;
        this.cancelCommon();
    }
});
define("ManageCardsModule/frmManageNewCardReviewController", ["ManageCardsModule/userfrmManageNewCardReviewController", "ManageCardsModule/frmManageNewCardReviewControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmManageNewCardReviewController");
    var controllerActions = ["ManageCardsModule/frmManageNewCardReviewControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
