define("AlertsModule/userfrmAlertsLandingController", {
    //Type your controller code here
    segData: [],
    filteredData: [],
    filterOptions: [],
    contentOffset: "0dp",
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.storeFilterOptions();
    },
    storeFilterOptions: function() {
        this.filterOptions.push(this.view.flxOptions);
        this.filterOptions.push(this.view.flxOptions2);
        this.filterOptions.push(this.view.flxOptions3);
    },
    preshow: function() {
        this.setFlowActions();
        this.setPreshowData();
        var  alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
        var filterCategories = alertsModule.presentationController.getFilterCategories();
        this.setAppliedFilters(filterCategories);
        this.setFilterData(filterCategories);
    },
    setFlowActions: function() {
        this.view.customHeader.flxBack.onClick = this.flxBackOnclick;
        this.view.customSearchbox.tbxSearch.onTextChange = this.searchNotification;
        this.view.btnCancel.onClick = this.hideDeletePopUp;
        this.view.btnRemove.onClick = this.deleteNotificationConfirm;
        this.view.customSearchbox.flxSearch.onClick = this.showFilterOptions;
        this.view.onDeviceBack = this.flxBackOnclick;
        if (!kony.sdk.isNullOrUndefined(this.view.imgClose)) this.view.imgClose.onTouchStart = this.removeFilter.bind(this, "ALERT_CAT_ACCOUNTS");
        if (!kony.sdk.isNullOrUndefined(this.view.imgClose2)) this.view.imgClose2.onTouchStart = this.removeFilter.bind(this, "ALERT_CAT_SECURITY");
        if (!kony.sdk.isNullOrUndefined(this.view.imgClose3)) this.view.imgClose3.onTouchStart = this.removeFilter.bind(this, "ALERT_CAT_TRANSACTIONAL");
    },
    setFilterData: function(filterCategories) {
        var navManager = applicationManager.getNavigationManager();
        var  alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
        var data = alertsModule.presentationController.getNotificationData();
        var areAllFiltersChoosen = alertsModule.presentationController.allAlertsChoosen;
        if (areAllFiltersChoosen) {
            navManager.setCustomInfo("frmAlertsLanding", data);
            this.filteredData = data;
            this.setDataToSegment();
        } else {
            var filteredData = alertsModule.presentationController.filterNotifications("notificationCategory", filterCategories, data);
            navManager.setCustomInfo("frmAlertsLanding", filteredData);
            this.filteredData = filteredData;
            this.setDataToSegment();
        }
    },
    removeFilter: function(filterToDelete) {
        var  alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
        var appliedFilters = alertsModule.presentationController.getFilterCategories();
        var data = [];
        appliedFilters.forEach(function(filter) {
            if (filter !== filterToDelete) data.push(filter);
        });
        if (data.length == 0) {
            alertsModule.presentationController.allAlertsChoosen = true;
            var defaultFilters = alertsModule.presentationController.getDefaultFilterCategories();
            alertsModule.presentationController.setFilterCategories(defaultFilters);
            this.setAppliedFilters(defaultFilters);
            this.setFilterData(defaultFilters);
        } else {
            alertsModule.presentationController.setFilterCategories(data);
            this.setAppliedFilters(data);
            this.setFilterData(data);
        }
    },
    setAppliedFilters: function(filters) {
        var applyFilter = false;
        this.view.flxFilterdOptions.removeAll();
        for (var i = 0; i < filters.length; i++) {
            if (filters[i] === "ALERT_CAT_ACCOUNTS") {
                this.view.flxFilterdOptions.add(this.filterOptions[0]);
                applyFilter = true;
            } else if (filters[i] === "ALERT_CAT_SECURITY") {
                this.view.flxFilterdOptions.add(this.filterOptions[1]);
                applyFilter = true;
            } else if (filters[i] === "ALERT_CAT_TRANSACTIONAL") {
                this.view.flxFilterdOptions.add(this.filterOptions[2]);
                applyFilter = true;
            }
        }
        var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
        if (!alertsModule.presentationController.allAlertsChoosen && applyFilter) {
            this.view.flxFilterdOptions.setVisibility(true);
            this.view.flxSeparator.setVisibility(true);
        } else {
            this.view.flxFilterdOptions.setVisibility(false);
            this.view.flxSeparator.setVisibility(false);
        }
        this.view.forceLayout();
    },
    showFilterOptions: function() {
        this.contentOffset = this.view.flxMainContainer.contentOffsetMeasured.y + "dp";
        var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
        alertsModule.presentationController.retainSegmentoffset = true;
        alertsModule.presentationController.commonFunctionForNavigation("frmAlertFilter");
    },
    deleteNotificationConfirm: function() {
        this.hideDeletePopUp();
        this.deleteNotification();
    },
    setPreshowData: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.resetFormUI();
        this.view.customSearchbox.tbxSearch.text = "";
        var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
        if (alertsModule.presentationController.retainSegmentoffset) this.view.flxMainContainer.setContentOffset({
            "y": this.contentOffset
        });
        else this.view.flxMainContainer.setContentOffset({
            "y": "0dp"
        });
        this.hideDeletePopUp();
    },
    resetFormUI: function() {
        var scopeObj = this;
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (!isIphone) {
            scopeObj.view.flxHeader.isVisible = true;
            scopeObj.view.flxHeaderSearchbox.top = "56dp";
            scopeObj.view.flxFilterdOptions.top = "101dp";
            scopeObj.view.flxSeparator.top = "161dp";
            scopeObj.view.flxMainContainer.top = "162dp";
        } else {
            scopeObj.view.flxHeader.isVisible = false;
            scopeObj.view.flxHeaderSearchbox.top = "0dp";
            scopeObj.view.flxFilterdOptions.top = "45dp";
            scopeObj.view.flxSeparator.top = "105dp";
            scopeObj.view.flxMainContainer.top = "106dp";
        }
    },
    onSegmentRowClick: function(rowIndex) {
        this.contentOffset = this.view.flxMainContainer.contentOffsetMeasured.y + "dp";
        var data = this.view.segAlertsScreen.data[rowIndex];
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmAlertsDetails", data);
        var  alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
        if (data.isRead == "0") {
            alertsModule.presentationController.updateNotificationAsRead(data.userNotificationId);
        } else alertsModule.presentationController.commonFunctionForNavigation("frmAlertsDetails");
        alertsModule.presentationController.retainSegmentoffset = true;
    },
    getDataMap: function() {
        var dataMap = {
            "flxMain": "flxMain",
            "lblTitle": "lblTitle",
            "lblAlertDesc": "alertText",
            "imgCategory": "imgCategory",
            "lblTime": "dateReceived",
            "flxDelete": "flxDelete"
        };
        return dataMap;
    },
    searchNotification: function() {
        var searchText = this.view.customSearchbox.tbxSearch.text;
        var  alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
        alertsModule.presentationController.searchAlerts(this.filteredData, searchText);
    },
    deleteNotification: function() {
        var rowId = applicationManager.getPresentationUtility().rowIndexforSwipe;
        var data = this.segData[rowId];
        var alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
        alertsModule.presentationController.deleteNotification(data.userNotificationId);
    },
    deleteSpecifiedNotification: function(notificationId) {
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmAlertsLanding");
        var rowId = applicationManager.getPresentationUtility().rowIndexforSwipe;
        data.splice(rowId, 1);
        var newData = [];
        for (var i = 0; i < this.filteredData.length; i++) {
            if (this.filteredData[i].userNotificationId !== notificationId) newData.push(this.filteredData[i]);
        }
        this.filteredData = newData;
        this.setDataToSegment();
    },
    getCategoryImage: function(category) {
        var data = {
            "ALERT_CAT_ACCOUNTS": "account.png",
            "ALERT_CAT_SECURITY": "security.png",
            "ALERT_CAT_TRANSACTIONAL": "alerttransactional.png"
        };
        if (!kony.sdk.isNullOrUndefined(data[category])) return data[category];
        else return "alertgeneral.png";
    },
    setDataToSegment: function() {
        var navManager = applicationManager.getNavigationManager();
        var  alertsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AlertsModule");
        var data = navManager.getCustomInfo("frmAlertsLanding");
        if (data.length === 0) {
            applicationManager.getPresentationUtility().tapgestureEnabled = false;
            this.view.flxNoAlerts.setVisibility(true);
            this.view.segAlertsScreen.setVisibility(false);
        } else {
            this.view.segAlertsScreen.setVisibility(true);
            this.view.flxNoAlerts.setVisibility(false);
            var todaysdate = new Date();
            for (var i = 0; i < data.length; i++) {
                data[i].imgCategory = {
                    "src": this.getCategoryImage(data[i].notificationCategory)
                };
                if (data[i].isRead === "0") {
                    data[i].lblTitle = {
                        "skin": "sknLbl424242SSPSemiBold26px",
                        "text": data[i].notificationSubject
                    };
                    data[i].flxMain = {
                        "skin": "sknFlxBgF3F3F3",
                        "focusSkin": "sknFlxBgFFFFFF"
                    };
                } else {
                    data[i].lblTitle = {
                        "skin": "sknLbl424242SSPRegular26px",
                        "text": data[i].notificationSubject
                    };
                    data[i].flxMain = {
                        "skin": "sknFlxBgFFFFFF",
                        "focusSkin": "sknFlxBgFFFFFF"
                    };
                }
                var notificationText = data[i].notificationText;
                var formattedText = notificationText.replace(/<(.|\n)*?>/g, '');
                data[i].alertText = formattedText;
                var date = new Date(data[i].receivedDate);
                if (todaysdate.toDateString() === date.toDateString()) {
                    var option = {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    };
                    var time = new Intl.DateTimeFormat('en-US', option).format(date);
                    data[i].dateReceived = time;
                } else {
                    var forUtility = applicationManager.getFormatUtilManager();
                    data[i].dateReceived = forUtility.getFormattedCalendarDate(date);
                }
                data[i].flxDelete = {
                    "onClick": this.showDeletePopUp
                };
            }
            this.segData = data;
            this.view.segAlertsScreen.widgetDataMap = this.getDataMap();
            var deviceUtilManager = applicationManager.getDeviceUtilManager();
            var isIphone = deviceUtilManager.isIPhone();
            if (!alertsModule.presentationController.allAlertsChoosen) {
                if (!this.view.flxFilterdOptions.isVisible) {
                    this.view.flxFilterdOptions.setVisibility(true);
                    this.view.flxSeparator.setVisibility(true);
                }
                if (isIphone) this.view.flxMainContainer.top = "106dp";
                else this.view.flxMainContainer.top = "162dp";
            } else {
                if (this.view.flxFilterdOptions.isVisible) {
                    this.view.flxFilterdOptions.setVisibility(false);
                    this.view.flxSeparator.setVisibility(false);
                }
                if (isIphone) this.view.flxMainContainer.top = "45dp";
                else this.view.flxMainContainer.top = "101dp";
            }
            this.view.segAlertsScreen.setData(data);
            applicationManager.getPresentationUtility().tapgestureEnabled = true;
        }
    },
    showDeletePopUp: function() {
        applicationManager.getPresentationUtility().tapgestureEnabled = false;
        this.view.customSearchbox.tbxSearch.setEnabled(false);
        this.view.flxFilterdOptions.setEnabled(false);
        this.view.flxPopup1.setVisibility(true);
        this.view.flxMainContainer.setEnabled(false);
        this.view.flxMainContainer.enableScrolling = false;
        this.view.customSearchbox.flxSearch.setEnabled(false);
    },
    hideDeletePopUp: function() {
        applicationManager.getPresentationUtility().tapgestureEnabled = true;
        this.view.customSearchbox.tbxSearch.setEnabled(true);
        this.view.flxFilterdOptions.setEnabled(true);
        this.view.flxPopup1.setVisibility(false);
        this.view.flxMainContainer.setEnabled(true);
        this.view.flxMainContainer.enableScrolling = true;
        this.view.customSearchbox.flxSearch.setEnabled(true);
    },
    flxBackOnclick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    bindGenericSuccess: function(msg) {
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg.result);
    },
    showErrorPopUp: function(msg) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    }
});
define("AlertsModule/frmAlertsLandingControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_fe8adc2784bd40ca926fbefd7ad3cecf: function AS_Form_fe8adc2784bd40ca926fbefd7ad3cecf(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_gbd8438f20e4444c8afe22658b4a4a96: function AS_Form_gbd8438f20e4444c8afe22658b4a4a96(eventobject) {
        var self = this;
        this.preshow();
    }
});
define("AlertsModule/frmAlertsLandingController", ["AlertsModule/userfrmAlertsLandingController", "AlertsModule/frmAlertsLandingControllerActions"], function() {
    var controller = require("AlertsModule/userfrmAlertsLandingController");
    var controllerActions = ["AlertsModule/frmAlertsLandingControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
