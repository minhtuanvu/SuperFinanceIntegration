define("WealthModule/userfrmTopNewsDetailsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.setVisibility(false);
        }
    },
    initActions: function() {
        this.view.customHeader.flxBack.onClick = this.backOnClick;
    },
    backOnClick: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    postShow: function() {
        this.initActions();
        var navigationMan = applicationManager.getNavigationManager();
        var stockdata = navigationMan.getCustomInfo('frmTopNewsDetails');
        this.setStockNewsDetails(stockdata);
        this.setFormTitle(stockdata.fromDashboard);
    },
    setStockNewsDetails: function(stockdata) {
        if (stockdata.fromDashboard) {
            this.view.lblDetails.text = stockdata.detailedNews;
            this.view.lblTime.text = stockdata.Time;
            this.view.lblProvider.text = stockdata.Provider;
            this.view.lblHeader.text = stockdata.Headline;
        } else {
            var data = stockdata.response;
            this.view.lblDetails.text = data.stockNewsStory.TE;
            this.view.lblTime.text = stockdata.time;
            this.view.lblProvider.text = data.stockNewsStory.PR;
            this.view.lblHeader.text = data.stockNewsStory.HT;
        }
    },
    setFormTitle: function(isFromDashboard) {
        if (isFromDashboard) {
            this.view.customHeader.lblLocateUs.text = "Top News";
            this.view.title = "Top News";
        } else {
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("i18n.wealth.stockNews");
            this.view.title = kony.i18n.getLocalizedString("i18n.wealth.stockNews");
        }
    }
});
define("WealthModule/frmTopNewsDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_hafd68ceeb9f4ca5aa45bcd87a26a0b4: function AS_Form_hafd68ceeb9f4ca5aa45bcd87a26a0b4(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f72e95c7a6ec464799093b97d949326c: function AS_Form_f72e95c7a6ec464799093b97d949326c(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_ed1420f1666c472e822afb18232b7bd9: function AS_Form_ed1420f1666c472e822afb18232b7bd9(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("WealthModule/frmTopNewsDetailsController", ["WealthModule/userfrmTopNewsDetailsController", "WealthModule/frmTopNewsDetailsControllerActions"], function() {
    var controller = require("WealthModule/userfrmTopNewsDetailsController");
    var controllerActions = ["WealthModule/frmTopNewsDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
