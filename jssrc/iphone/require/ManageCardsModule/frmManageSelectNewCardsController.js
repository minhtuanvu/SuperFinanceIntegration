define("ManageCardsModule/userfrmManageSelectNewCardsController", ['CampaignUtility'], function(CampaignUtility) {
    return {
        cardProducts: null,
        init: function() {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        },
        preShow: function() {
            if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
                this.view.flxHeader.isVisible = true;
            } else {
                this.view.flxHeader.isVisible = false;
            }
            this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
            this.view.customHeader.btnRight.onClick = this.cancelCommon;
            this.setSegmentData();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        setSegmentData: function() {
            var navMan = applicationManager.getNavigationManager();
            var data = navMan.getCustomInfo("frmManageSelectNewCards");
            data = data.cardProducts;
            this.cardProducts = data;
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    data[i]["imgCard"] = {
                        "src": this.getCardImage(data[i]["productName"])
                    }
                    data[i]["btnApply"] = {
                        "text": "Apply",
                        "onClick": function(widget, context) {
                            var r = context["rowIndex"];
                            var data1 = context.widgetInfo.data[r];
                            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
                            manageCardsModule.presentationController.navigateToCardName(data1);
                        }
                    }
                    data[i]["btnLearnMore"] = {
                        "onClick": function(widget, context) {
                            var r = context["rowIndex"];
                            var data1 = context.widgetInfo.data[r];
                            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
                            manageCardsModule.presentationController.navigateToLearnMore(data1);
                        }
                    }
                }
                this.view.segSelectProducts.widgetDataMap = {
                    "lblCardName": "productName",
                    "imgCard": "imgCard",
                    "rtxCardDetails": "featureOverview",
                    "btnLearnMore": "btnLearnMore",
                    "btnApply": "btnApply"
                };
                this.view.segSelectProducts.setData(data);
                this.view.flxNoProducts.setVisibility(false);
            } else {
                this.view.flxNoProducts.setVisibility(true);
            }
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
    };
});
define("ManageCardsModule/frmManageSelectNewCardsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a0e2ad783177417f9d9cdb03beda6915: function AS_Form_a0e2ad783177417f9d9cdb03beda6915(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c8d0e5c0d3004220bc2be77d2ed412ac: function AS_Form_c8d0e5c0d3004220bc2be77d2ed412ac(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_afafe2daf72740b0a5c539bcc7a66f01: function AS_BarButtonItem_afafe2daf72740b0a5c539bcc7a66f01(eventobject) {
        var self = this;
        this.cancelCommon();
    },
});
define("ManageCardsModule/frmManageSelectNewCardsController", ["ManageCardsModule/userfrmManageSelectNewCardsController", "ManageCardsModule/frmManageSelectNewCardsControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmManageSelectNewCardsController");
    var controllerActions = ["ManageCardsModule/frmManageSelectNewCardsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
