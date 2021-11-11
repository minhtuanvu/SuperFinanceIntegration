define("NewAccountOpeningModule/userfrmNAOAckController", {
    //Type your controller code here
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.lblGoToAccounts.onClick = function() {
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            accountMod.presentationController.showDashboard();
        };
        this.setSegmentData();
        this.view.btnChatbot.onClick = function() {
            var chatBotMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
            chatBotMode.presentationController.handleFirstTimeOpen();
        };
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setSegmentData: function() {
        var productslist = [];
        var navMan = applicationManager.getNavigationManager();
        var data = navMan.getCustomInfo("frmNAOReviewProduct");
        data = data.selectedProducts;
        for (i = 0; i < data.length; i++) {
            var msg = "Your account is now active";
            if (data[i]["productTypeId"].text === "3") msg = "Your card will be dispatched";
            var product = {
                "lblProduct": {
                    "text": data[i]["lblProductTitle"]
                },
                "lblProductInfo": {
                    "text": msg
                },
                "imgProduct": {
                    "src": "appicon.png"
                }
            }
            productslist.push(product);
        }
        this.view.segSelectedProducts.setData(productslist);
    }
});
define("NewAccountOpeningModule/frmNAOAckControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a83b4d06b1554d8295c5eea321942ff0: function AS_Form_a83b4d06b1554d8295c5eea321942ff0(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_baad6c1a63574216a810feb3baaa9dc9: function AS_Form_baad6c1a63574216a810feb3baaa9dc9(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("NewAccountOpeningModule/frmNAOAckController", ["NewAccountOpeningModule/userfrmNAOAckController", "NewAccountOpeningModule/frmNAOAckControllerActions"], function() {
    var controller = require("NewAccountOpeningModule/userfrmNAOAckController");
    var controllerActions = ["NewAccountOpeningModule/frmNAOAckControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
