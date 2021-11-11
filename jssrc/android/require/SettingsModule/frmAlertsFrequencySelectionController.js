define("SettingsModule/userfrmAlertsFrequencySelectionController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.renderTitleBar();
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    renderTitleBar: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (isIphone) {
            this.view.flxHeader.setVisibility(false);
        }
    },
    initActions: function() {
        var scopeObj = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
    },
    /*
     * set frequency selection after navigation
     * @param {Object}: freqObj-{"id":"","value":"","time":""}
     * @param {Object}: setPreferenceData - request param for setAlertPreference
     */
    bindData: function(freqObj, setPreferenceData) {
        this.setFrequencyData(freqObj);
        this.view.segFrequency.rowFocusSkin = "";
        this.view.segFrequency.retainSelection = false;
        if (freqObj.id) {
            this.view.segFrequency.retainSelection = true;
        }
        this.view.segFrequency.onRowClick = this.segmentRowClick.bind(this, freqObj, setPreferenceData);
    },
    /*
     * on click of segment row
     * @param {Object}: freqObj-{"id":"","value":"","time":""}
     * @param {Object}: setPreferenceData - request param for setAlertPreference
     */
    segmentRowClick: function(freqObj, setPreferenceData) {
        var ind = this.view.segFrequency.selectedIndex[1];
        var selectedRowData = this.view.segFrequency.data[ind];
        this.changeSelectedRowSkin(selectedRowData.id);
        freqObj.id = selectedRowData.id;
        var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        if (selectedRowData.id === "DAILY") {
            freqObj.value = ""; //removes previously set value if any
            settingsModule.presentationController.navigateToAlertsTimeSelection(freqObj, setPreferenceData);
            settingsModule.presentationController.commonFunctionForNavigation("frmAlertsTimeSelection");
        } else {
            settingsModule.presentationController.navigateToAlertsDaySelection(freqObj, setPreferenceData);
            settingsModule.presentationController.commonFunctionForNavigation("frmAlertsDaySelection");
        }
    },
    /*
     * set frequency data to form
     * @param {Object}: freqObj-{"id":"","value":"","time":""}
     */
    setFrequencyData: function(freqObj) {
        var freqArr = [{
            "id": "DAILY",
            "name": "Daily"
        }, {
            "id": "WEEKLY",
            "name": "Weekly"
        }, {
            "id": "MONTHLY",
            "name": "Monthly"
        }];
        var widgetMap = {
            "lblFrequency": "lblFrequency",
            "flxFrequency": "flxFrequency",
            "flxMain": "flxMain"
        };
        this.view.segFrequency.widgetDataMap = widgetMap;
        var segDays = freqArr.map(function(rec) {
            return {
                "id": rec.id,
                "flxMain": freqObj.id === rec.id ? {
                    "skin": "sknFlxF6F6F6BgRadius29px"
                } : {
                    "skin": "slFbox"
                },
                "lblFrequency": rec.name,
                "template": "flxFrequency",
            };
        });
        this.view.segFrequency.setData(segDays);
        this.view.forceLayout();
    },
    /*
     * set selected row skin 
     * @param {Integer}: index
     */
    changeSelectedRowSkin: function(id) {
        var segData = this.view.segFrequency.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i].id === id) {
                segData[i].flxMain.skin = "sknFlxF6F6F6BgRadius29px";
                this.view.segFrequency.setDataAt(segData[i], i);
            } else if (segData[i].flxMain.skin === "sknFlxF6F6F6BgRadius29px") {
                segData[i].flxMain.skin = "slFbox";
                this.view.segFrequency.setDataAt(segData[i], i);
            }
        }
    },
});
define("SettingsModule/frmAlertsFrequencySelectionControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f87f984a2751406fb9c0cb9d979cc68e: function AS_Form_f87f984a2751406fb9c0cb9d979cc68e(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a5b2ea118e3141538505d3a9713db657: function AS_Form_a5b2ea118e3141538505d3a9713db657(eventobject) {
        var self = this;
        this.preShow();
    },
});
define("SettingsModule/frmAlertsFrequencySelectionController", ["SettingsModule/userfrmAlertsFrequencySelectionController", "SettingsModule/frmAlertsFrequencySelectionControllerActions"], function() {
    var controller = require("SettingsModule/userfrmAlertsFrequencySelectionController");
    var controllerActions = ["SettingsModule/frmAlertsFrequencySelectionControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
