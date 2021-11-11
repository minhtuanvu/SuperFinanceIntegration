define("WealthModule/userfrmTopNewsController", ['CommonUtilities'], function(CommonUtilities) {
    return {
        fromDashboard: false,
        init: function() {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        },
        preShow: function() {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.setVisibility(false);
            }
        }, //Typevar data=navManager.getCustomInfo('frmInstrumentDetails');
        initActions: function() {
            this.view.segNews.onRowClick = this.onRowClick;
            this.view.customHeader.flxBack.onClick = this.backOnClick;
        },
        backOnClick: function() {
            var navigationMan = applicationManager.getNavigationManager();
            navigationMan.goBack();
        },
        postShow: function() {
            this.initActions();
            var navigationMan = applicationManager.getNavigationManager();
            var prevForm = navigationMan.getPreviousForm();
            var data = {};
            var dataFromRes = navigationMan.getCustomInfo('frmTopNews');
            if (dataFromRes === undefined) {
                this.fromDashboard = false;
            } else {
                if (dataFromRes.fromDashboard && prevForm !== "frmInstrumentDetails") {
                    this.fromDashboard = dataFromRes.fromDashboard;
                } else {
                    this.fromDashboard = false;
                }
            }
            if (this.fromDashboard) {
                this.view.customHeader.lblLocateUs.text = "Top News";
                this.view.title = "Top News";
                var temp = dataFromRes.response.GetSummaryByTopic_Response_1.StoryMLResponse.STORYML;
                this.setStockNews(temp);
            } else {
                this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("i18n.wealth.stockNews");
                this.view.title = kony.i18n.getLocalizedString("i18n.wealth.stockNews");
                data = navigationMan.getCustomInfo('frmInstrumentDetails');
                this.setStockNews(data.instrumentDetails);
            }
        },
        setStockNews: function(data) {
            var news;
            if (this.fromDashboard) {
                news = data.HL;
            } else {
                news = data.stockNews;
            }
            var results = [];
            for (var num in news) {
                var storeData;
                var data = news[num];
                var time;
                if (this.fromDashboard) {
                    time = data.LT.split('T');
                } else {
                    time = data.RT.split('T');
                }
                var dateToString = data["RT"].replace(/\D/g, '');
                RT = CommonUtilities.getTimeDiferenceOfDate(dateToString.substring(0, 14));
                if (this.fromDashboard) {
                    storeData = {
                        Headline: data.HT,
                        Time: RT,
                        Provider: data.PR,
                        ID: data.ID,
                        detailedNews: data.TE
                    };
                } else {
                    storeData = {
                        Headline: data.HT,
                        Time: RT,
                        Provider: data.PR,
                        ID: data.ID
                    };
                }
                results.push(storeData);
            }
            this.view.segNews.widgetDataMap = {
                lblTitle: "Provider",
                lblTime: "Time",
                lblNews: "Headline",
                dummyData: "ID"
            };
            this.view.segNews.setData(results);
        },
        onRowClick: function() {
            var rowindex = this.view.segNews.selectedRowIndex[1];
            if (this.fromDashboard) {
                var newsData = {};
                newsData = this.view.segNews.data[rowindex];
                newsData.fromDashboard = true;
                var navMan = applicationManager.getNavigationManager();
                navMan.setCustomInfo("frmTopNewsDetails", newsData);
                var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
                wealthModule.commonFunctionForNavigation("frmTopNewsDetails");
            } else {
                var selnewsdata = [];
                //var news=data.stockNews;
                var frmnewsdata = this.view.segNews.data[rowindex];
                var navMan = applicationManager.getNavigationManager();
                var currencyData = navMan.getCustomInfo("frmTopNewsDetails");
                if (kony.sdk.isNullOrUndefined(currencyData)) {
                    var currencyData = {};
                    currencyData.time = frmnewsdata.Time;
                } else {
                    currencyData.time = frmnewsdata.Time;
                }
                currencyData.fromDashboard = false;
                navMan.setCustomInfo("frmTopNewsDetails", currencyData);
                var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
                //var news=data.stockNews;
                var param = {
                    "StoryId": frmnewsdata.ID
                }
                wealthMod.getStockNewsStory(param);
                //  }
            }
        }
    }
});
define("WealthModule/frmTopNewsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e9a0473a83744fa4a12761bd05d49262: function AS_Form_e9a0473a83744fa4a12761bd05d49262(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e89d532af9434184aa23331cf17c64af: function AS_Form_e89d532af9434184aa23331cf17c64af(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_a1657818a8fc4b77b799ca304849b0dd: function AS_Form_a1657818a8fc4b77b799ca304849b0dd(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_Segment_cd172109576f4fe291cf48ef821e52e4: function AS_Segment_cd172109576f4fe291cf48ef821e52e4(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onRowClick();
    }
});
define("WealthModule/frmTopNewsController", ["WealthModule/userfrmTopNewsController", "WealthModule/frmTopNewsControllerActions"], function() {
    var controller = require("WealthModule/userfrmTopNewsController");
    var controllerActions = ["WealthModule/frmTopNewsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
