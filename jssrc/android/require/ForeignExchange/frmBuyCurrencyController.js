define("ForeignExchange/userfrmBuyCurrencyController", {
    onNavigate: function() {
        try {
            var navManager = applicationManager.getNavigationManager();
            this.navManager = navManager;
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            kony.print("onNavigate inside");
        } catch (er) {
            //alert(er);
            kony.print("onNavigate" + er);
        }
    },
    /*This function is called during the app lifecycle*/
    formPreShow: function() {
        try {
            this.view.txtSearch.setFocus(false);
            this.timerCounter = 0;
            this.contextValue;
            this.view.flxSearch.isVisible = true;
            this.view.flxPopup.isVisible = false;
            this.view.btnApply.setEnabled(false);
            this.view.btnApply.skin = "sknBtnOnBoardingInactive";
            this.currencyList = [];
            if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
                this.view.flxHeader.isVisible = true;
                this.view.flxFooter.isVisible = false;
            } else {
                this.view.flxHeader.isVisible = false;
            }
            this.view.txtSearch.onTextChange = this.searchCurrency.bind(this);
            this.view.SegRecentCurrency.onRowClick = this.onSegRowClick.bind(this);
            this.view.btnApply.onClick = this.onApplyUpdates.bind(this);
            var ForeignExchangetModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ForeignExchange");
            this.view.customHeader.flxBack.onClick = this.onBack;
            //this needs to be dynamic
            var params = {
                "baseCurrencyCode": "USD"
            }
            ForeignExchangetModule.presentationController.fetchDashboardCurrencyList(params);
        } catch (er) {
            //alert(er);
        }
    },
    onBack: function() {
        var ForeignExchangetModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ForeignExchange");
        ForeignExchangetModule.presentationController.navigateToforexDashboard();
    },
    /*This function is called during the app lifecycle*/
    formPostShow: function() {
        try {} catch (er) {}
    },
    //method to be calledwhen an error response is received
    setErrorPopup: function(response) {
        try {
            if (!kony.sdk.isNullOrUndefined(response)) {
                var scopeObj = this;
                var errorResponse;
                if (!kony.sdk.isNullOrUndefined(response.errorMessage)) {
                    errorResponse = response.errorMessage;
                } else {
                    errorResponse = kony.i18n.getLocalizedString("kony.mb.servicesErrormsg");
                }
                this.view.flxPopup.customPopup.lblPopup.text = errorResponse;
                this.timerCounter = parseInt(this.timerCounter) + 1;
                var timerId = "timerPopupError" + this.timerCounter;
                this.view.flxPopup.skin = "sknFlxf54b5e";
                this.view.customPopup.imgPopup.src = "errormessage.png";
                this.view.flxPopup.setVisibility(true);
                kony.timer.schedule(timerId, function() {
                    scopeObj.view.flxPopup.setVisibility(false);
                }, 1.5, false);
            }
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        } catch (error) {
            kony.print("frmBuyCurrency setErrorPopup-->" + error);
        }
    },
    // method is triggered when a text is searched.
    searchCurrency: function() {
        var searchQuery = this.view.txtSearch.text;
        var scopeObj = this;
        var segEachData = [];
        var currencyListtemp = this.currencyList;
        if (searchQuery.length > 0 && currencyListtemp.length > 4) {
            for (var i = 5; i < currencyListtemp.length; i++) {
                if ((!kony.sdk.isNullOrUndefined(currencyListtemp[i]["code"]) && typeof(currencyListtemp[i]["code"]) === "string") || (!kony.sdk.isNullOrUndefined(currencyListtemp[i]["name"]) && typeof(currencyListtemp[i]["name"]) === "string")) {
                    if (currencyListtemp[i]["code"].toUpperCase().indexOf(searchQuery.toUpperCase()) !== -1 || currencyListtemp[i]["name"].toUpperCase().indexOf(searchQuery.toUpperCase()) !== -1) {
                        segEachData.push(currencyListtemp[i]);
                    }
                }
            }
            scopeObj.setAllCurrencyData(segEachData, true);
        } else {
            scopeObj.setAllCurrencyData(currencyListtemp);
        }
    },
    /*This function is called after successfully fetching currencylist */
    onFetchCurrencyListSuccess: function(response) {
        if (response !== undefined && response !== null && response !== "") {
            this.setAllCurrencyData(response);
            this.currencyList = response;
        }
    },
    // method triggered to set Data for allcurrency segement.
    setAllCurrencyData: function(data, isSearch) {
        try {
            if (!kony.sdk.isNullOrUndefined(data) && data.length > 0) {
                this.view.flxRecentSegment.setVisibility(true);
                this.view.flxNoResult.setVisibility(false);
                var recentCurrencyData = [],
                    rowObj;
                var allCurrencyData = [];
                var map = this.dataWidgetMap();
                this.view.SegRecentCurrency.widgetDataMap = map;
                var finalData = [];
                for (i = 0; i < data.length; i++) {
                    rowObj = {
                        "lblCurrency": {
                            "text": kony.sdk.isNullOrUndefined(data[i].name) ? "" + data[i].code : "" + data[i].code + " - " + data[i].name,
                        },
                        "code": {
                            "text": data[i].code,
                        },
                        "quoteCurrencyValue": {
                            "text": kony.sdk.isNullOrUndefined(data[i].name) ? data[i].code : "" + data[i].name,
                        }
                    };
                    if (!kony.sdk.isNullOrUndefined(isSearch) && isSearch) {
                        allCurrencyData.push(rowObj); //push all the data for search results irrespective of allcurrency and recent currency.
                    } else {
                        if (i < 5) {
                            recentCurrencyData.push(rowObj);
                        } else {
                            allCurrencyData.push(rowObj);
                        }
                    }
                }
                if (!kony.sdk.isNullOrUndefined(isSearch) && isSearch) { //no recent currency section for search results
                    finalData = [
                        [{
                            "lblHeader": "All",
                            "flximgUp": {
                                isVisible: false
                            }
                        }, allCurrencyData]
                    ];
                } else {
                    finalData = [
                        [{
                            "lblHeader": "Recently Used",
                            "flximgUp": {
                                isVisible: false
                            }
                        }, recentCurrencyData],
                        [{
                            "lblHeader": "All",
                            "flximgUp": {
                                isVisible: false
                            }
                        }, allCurrencyData]
                    ];
                }
                this.view.SegRecentCurrency.setData(finalData);
            } else {
                this.view.flxRecentSegment.setVisibility(false);
                this.view.flxNoResult.setVisibility(true);
            }
        } catch (er) {}
    },
    dataWidgetMap: function() {
        try {
            var widgetDataMap = {
                "flxRecentHeader": "flxRecentHeader",
                "lblCurrency": "lblCurrency",
                "flxSeparator": "flxSeparator",
                "flximgUp": "flximgUp",
                "lblHeader": "lblHeader"
            };
            return widgetDataMap;
        } catch (er) {}
    },
    onSegRowClick: function(eventobject, sectionIndex, rowIndex) {
        this.contextValue = {
            "sectionIndex": sectionIndex,
            "rowIndex": rowIndex
        };
        this.view.btnApply.setEnabled(true);
        this.view.btnApply.skin = "sknBtn0095e426pxEnabled";
    },
    onApplyUpdates: function() {
        try {
            var rowIndex = this.contextValue.rowIndex;
            var sectionIndex = this.contextValue.sectionIndex;
            var selectedRowData = this.view.SegRecentCurrency.data[sectionIndex][1][rowIndex];
            var ForeignExchangetModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ForeignExchange");
            ForeignExchangetModule.presentationController.setQuoteCurrencyCode(selectedRowData.code.text);
            ForeignExchangetModule.presentationController.updateRecentCurrency(true);
        } catch (er) {}
    },
});
define("ForeignExchange/frmBuyCurrencyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b3d1a94d27f3400c9e598b844f7b1202: function AS_Form_b3d1a94d27f3400c9e598b844f7b1202(eventobject) {
        var self = this;
        this.formPostShow();
    },
    AS_Form_bbb4e25178464944973184cab23cb18b: function AS_Form_bbb4e25178464944973184cab23cb18b(eventobject) {
        var self = this;
        this.formPreShow();
    },
    AS_BarButtonItem_ecf39a1089124361bd96710cbd0b7dc8: function AS_BarButtonItem_ecf39a1089124361bd96710cbd0b7dc8(eventobject) {
        var self = this;
        this.onBack();
    }
});
define("ForeignExchange/frmBuyCurrencyController", ["ForeignExchange/userfrmBuyCurrencyController", "ForeignExchange/frmBuyCurrencyControllerActions"], function() {
    var controller = require("ForeignExchange/userfrmBuyCurrencyController");
    var controllerActions = ["ForeignExchange/frmBuyCurrencyControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
