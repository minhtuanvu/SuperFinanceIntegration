define("WealthModule/userfrmBenchmarkController", {
    dateRange: [],
    sortingData: [],
    selectedRow: "",
    customBenchmarkData: "",
    init: function() {
        this.view.preShow = this.preShow;
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    initActions: function() {
        var navManager = applicationManager.getNavigationManager();
        this.view.btnDone.onClick = this.onDoneClick;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.segSortingValues.onRowClick = this.onValueSelect;
        this.dateRange = scope_WealthPresentationController.selectedDateRangeDetails;
    },
    onValueSelect: function() {
        var rowIndex = this.view.segSortingValues.selectedRowIndex[1];
        this.sortingData = this.view.segSortingValues.data;
        this.selectedRow = rowIndex;
        this.sortingData.forEach(function(e) {
            e.isSelected = false;
            e.benchMark.skin = "sknlbl727272SSP17px";
            e.imageDetails.isVisible = false
        });
        this.sortingData[rowIndex].isSelected = true;
        this.sortingData[rowIndex].benchMark = {
            "skin": "sknLbl4176A4SSPReg26px",
            "text": this.sortingData[rowIndex].benchMark.text
        };
        this.sortingData[rowIndex].imageDetails = {
            "src": "correct.png",
            "isVisible": true
        };
        this.view.segSortingValues.setData(this.sortingData);
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        this.customBenchmarkData = navManager.getCustomInfo("frmBenchmark");
        var data = this.customBenchmarkData.benchmarkData;
        this.setSegData(data);
        this.initActions();
    },
    setSegData: function(data) {
        var segData = [];
        var storeData;
        for (var list in data) {
            if (data[list].benchMark == scope_WealthPresentationController.benchmark) {
                storeData = {
                    isSelected: true,
                    benchMark: {
                        text: data[list].benchMark,
                        skin: "sknLbl4176A4SSPReg26px"
                    },
                    imageDetails: {
                        src: "correct.png",
                        isVisible: true
                    }
                }
            } else {
                storeData = {
                    isSelected: false,
                    benchMark: {
                        text: data[list].benchMark,
                        skin: "sknlbl727272SSP17px"
                    },
                    imageDetails: {
                        isVisible: false
                    }
                }
            }
            segData.push(storeData);
        }
        this.view.segSortingValues.widgetDataMap = {
            lblSortFactor: "benchMark",
            imgTick: "imageDetails"
        }
        this.view.segSortingValues.removeAll();
        this.view.segSortingValues.setData(segData);
    },
    onDoneClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var isSelected = this.sortingData[this.selectedRow].isSelected;
        scope_WealthPresentationController.benchmark = this.sortingData[this.selectedRow].benchMark.text;
        var today = new Date();
        var endDate = today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2);
        var startDate = (today.getFullYear() - 1) + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2);
        var duration = "OneY";
        if (this.dateRange.startDate == undefined) {
            this.dateRange.startDate = startDate;
            this.dateRange.endDate = endDate;
            this.dateRange.duration = duration;
        } else {
            startDate = this.dateRange.startDate.replace(/-/g, '');
            endDate = this.dateRange.endDate.replace(/-/g, '');
            duration = this.dateRange.duration;
        }
        var params = {
            "portfolioId": scope_WealthPresentationController.portfolioId,
            "dateFrom": startDate,
            "dateTo": endDate,
            "benchMarkIndex": scope_WealthPresentationController.benchmark,
            "duration": this.dateRange.duration
        }
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.getPerformance(params);
    }
});
define("WealthModule/frmBenchmarkControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_hf25983f1be94db88fd7133ec99f3289: function AS_Form_hf25983f1be94db88fd7133ec99f3289(eventobject) {
        var self = this;
        this.init();
    }
});
define("WealthModule/frmBenchmarkController", ["WealthModule/userfrmBenchmarkController", "WealthModule/frmBenchmarkControllerActions"], function() {
    var controller = require("WealthModule/userfrmBenchmarkController");
    var controllerActions = ["WealthModule/frmBenchmarkControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
