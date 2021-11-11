define("TransferModuleEurope/userfrmBenCountryEuropeController", {
    segmentData: null,
    init: function() {
        this.initActions();
    },
    preShow: function() {
        this.showPreshowSearch();
        this.view.flxMainContainer.skin = "slFbox";
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
        var navManager = applicationManager.getNavigationManager();
        var countryList = navManager.getCustomInfo("frmBenCountryEurope");
        this.setSegmentData(countryList.records);
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        navManager.setEntryPoint("searchCountry", "frmBenCountryEurope");
    },
    initActions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.segCountry.onRowClick = function() {
            var rowid = scope.view.segCountry.selectedRowIndex[1];
            var selectedCountry = scope.view.segCountry.data[rowid];
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModulePresentationController.navigateToEnterSwiftCode(selectedCountry.lblFrequency);
        };
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
        this.view.tbxSearch.onTouchStart = function() {
            scope.showSearch();
        };
        this.view.customSearchbox.btnCancel.onClick = function() {
            scope.cancelSearch();
        };
        this.view.customSearchbox.tbxSearch.onTextChange = scope.tbxSearchOnTextChange;
    },
    showSearch: function() {
        this.view.flxNoTransactions.isVisible = false;
        this.view.flxMainContainer.skin = "sknFlxffffff";
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            if (this.view.flxHeaderSearchbox.isVisible === true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.top = "55dp";
            } else {
                this.view.customSearchbox.tbxSearch.text = "";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.flxSearch.isVisible = false;
                this.view.flxMainContainer.top = "110dp";
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
        } else {
            if (this.view.flxHeaderSearchbox.isVisible === true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
            } else {
                this.view.customSearchbox.tbxSearch.text = "";
                this.view.flxSearch.isVisible = false;
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
        }
    },
    cancelSearch: function() {
        this.view.flxNoTransactions.isVisible = false;
        this.view.flxMainContainer.skin = "slFbox";
        this.view.segCountry.isVisible = true;
        this.view.flxHeaderSearchbox.isVisible = false;
        this.view.flxSearch.isVisible = true;
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        } else {
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        }
        this.view.segCountry.setData(this.segmentData);
    },
    showSearch1: function() {
        if (this.view.flxHeaderSearchbox.isVisible === true) {
            this.view.flxHeaderSearchbox.isVisible = false;
            //           var data=[];
            //            for (var i = 0; i < this.segmentData.length; i++) {
            //             var temp = {
            //                 "lblFrequency": this.segmentData[i].Name,
            //                 "flxMain": {
            //                     "skin": "f9f9"
            //                 }
            //             };
            //             data.push(temp);
            //          }
            //               	this.view.segCountry.setData(data);
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "0dp";
            } else {
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
            }
            if (this.segmentData.length === 0) {
                //this.view.flxNoTransactions.isVisible=true;
                this.view.segCountry.isVisible = false;
            } else {
                //this.view.flxNoTransactions.isVisible=false;
                this.view.segCountry.isVisible = true;
                var data = [];
                for (var i = 0; i < this.segmentData.length; i++) {
                    var temp = {
                        "lblFrequency": this.segmentData[i].Name,
                        "flxMain": {
                            "skin": "f9f9"
                        }
                    };
                    data.push(temp);
                }
                this.view.segCountry.setData(data);
            }
            this.view.flxSearch.isVisible = true;
        } else {
            this.view.customSearchbox.tbxSearch.text = "";
            this.view.flxSearch.isVisible = false;
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "40dp";
            this.view.flxHeaderSearchbox.isVisible = true;
            this.view.customSearchbox.tbxSearch.setFocus(true);
        }
    },
    setSegmentData: function(countryList) {
        this.view.flxNoTransactions.isVisible = false;
        var data = [];
        for (var i = 0; i < countryList.length; i++) {
            var temp = {
                "lblFrequency": countryList[i].Name,
                "flxMain": {
                    "skin": "f9f9"
                }
            };
            data.push(temp);
        }
        this.view.segCountry.setData(data);
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var countryName = transferModulePresentationController.getCountryName();
        var index = 0;
        var formatData = this.view.segCountry.data;
        var newData = [];
        if (countryName) {
            data = [];
            for (var i = 0; i < countryList.length; i++) {
                if (countryList[i].Name === countryName) {
                    index = i;
                    break;
                }
            }
            for (var i = 0; i < formatData.length; i++) {
                if (i !== index) {
                    data.push({
                        "flxMain": {
                            "skin": "f9f9"
                        },
                        "lblFrequency": countryList[i].Name
                    });
                } else {
                    data.push({
                        "flxMain": {
                            "skin": "sknFlxf9f9f9"
                        },
                        "lblFrequency": countryList[i].Name
                    });
                }
            }
        }
        this.view.segCountry.setData(data);
        this.segmentData = this.view.segCountry.data;
    },
    getDataMap: function(type) {
        var dataMap = {};
        dataMap = {
            "lblFrequency": "Name"
        };
        return dataMap;
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("createEuropeExternalBenificiaries");
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.commonFunctionForNavigation(navigateToForm);
    },
    showPreshowSearch: function() {
        this.view.flxNoTransactions.isVisible = false;
        this.view.segCountry.isVisible = true;
        if (this.view.flxHeaderSearchbox.isVisible === true) {
            this.view.flxHeaderSearchbox.isVisible = false;
            this.view.flxSearch.isVisible = true;
            this.view.flxHeader.isVisible = true;
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxMainContainer.top = "0dp";
            } else {
                this.view.flxMainContainer.top = "56dp";
            }
        }
    },
    tbxSearchOnTextChange: function() {
        var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
        var data = this.segmentData;
        var searchSegmentData = applicationManager.getDataProcessorUtility().commonSegmentSearch("lblFrequency", searchtext, data);
        if (searchSegmentData.length === 0) {
            this.view.segCountry.isVisible = false;
            this.view.flxNoTransactions.isVisible = true;
        } else {
            this.view.flxNoTransactions.isVisible = false;
            this.view.segCountry.isVisible = true;
            this.view.segCountry.setData(searchSegmentData);
        }
    }
});
define("TransferModuleEurope/frmBenCountryEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c47d9d9303f34bcfb6546755f520e98f: function AS_Form_c47d9d9303f34bcfb6546755f520e98f(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d52d46a823e84fa7a769dc7fb38942ed: function AS_Form_d52d46a823e84fa7a769dc7fb38942ed(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ac0f95c90d47409fa2da1eda36dcdb9d: function AS_BarButtonItem_ac0f95c90d47409fa2da1eda36dcdb9d(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModuleEurope/frmBenCountryEuropeController", ["TransferModuleEurope/userfrmBenCountryEuropeController", "TransferModuleEurope/frmBenCountryEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmBenCountryEuropeController");
    var controllerActions = ["TransferModuleEurope/frmBenCountryEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
