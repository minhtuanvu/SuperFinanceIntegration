define("ChequeManagementModule/userfrmCMSearchResultController", {
    initActions: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.customHeader.flxBack.onTouchEnd = scope.navigateToSearch;
    },
    navigateToSearch: function() {
        var search = applicationManager.getModulesPresentationController("ChequeManagementModule");
        search.commonFunctionForNavigation("frmCMSearch");
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        var transferObject = applicationManager.getTransactionManager().getTransactionObject();
        var navMan = applicationManager.getNavigationManager();
        var data = navMan.getCustomInfo("frmCMSearchResult");
        if (data.length === 0) {
            this.view.flxSearchSeg.isVisible = false;
            this.view.flxNoTransactions.isVisible = true;
            this.view.lblError.text = transferObject.errmsg;
        } else {
            this.view.flxSearchSeg.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
            this.bindTransactions(data);
        }
    },
    getWidgetDataMap: function() {
        return {
            "lblChequeNo": "lblChequeNo",
            "lblDate": "lblDate",
            "lblStatus": "lblStatus",
            "lblAccountNo": "lblAccountNo"
        };
    },
    bindTransactions: function(data) {
        this.view.segTransactionswidgetDataMap = this.getWidgetDataMap();
        this.view.segTransactions.setData(data);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
});
define("ChequeManagementModule/frmCMSearchResultControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ac9932802471414ca861af44ec408a7d: function AS_Form_ac9932802471414ca861af44ec408a7d(eventobject) {
        var self = this;
        this.initActions();
    },
    AS_Form_d11e8dbd3d944ca59a052fbf7cff97c8: function AS_Form_d11e8dbd3d944ca59a052fbf7cff97c8(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_cada51f330054a74bc909a955f904bce: function AS_Form_cada51f330054a74bc909a955f904bce(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("ChequeManagementModule/frmCMSearchResultController", ["ChequeManagementModule/userfrmCMSearchResultController", "ChequeManagementModule/frmCMSearchResultControllerActions"], function() {
    var controller = require("ChequeManagementModule/userfrmCMSearchResultController");
    var controllerActions = ["ChequeManagementModule/frmCMSearchResultControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
