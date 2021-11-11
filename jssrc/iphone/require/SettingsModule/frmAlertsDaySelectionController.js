define("SettingsModule/userfrmAlertsDaySelectionController", {
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
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
    },
    /*
     * set data to segment based on selectd frequency
     * @param {Object}: freqObj-{"id":"","value":"","time":""}
     * @param {Object}: setPreferenceData - request param for setAlertPreference
     */
    bindData: function(freqObj, setPreferenceData) {
        if (freqObj.id === "MONTHLY") { //set dates
            this.setDataForDates(freqObj);
        } else { //set days
            this.setDataForDays(freqObj);
        }
        this.view.segDayDatesList.onRowClick = this.segmentRowClick.bind(this, freqObj, setPreferenceData);
    },
    /*
     * set list of says data to segment
     * @param {Object}: freqObj-{"id":"","value":"","time":""}
     */
    setDataForDays: function(freqObj) {
        var days = [{
            "name": "Sunday",
            "id": "SUNDAY"
        }, {
            "name": "Monday",
            "id": "MONDAY"
        }, {
            "name": "Tuesday",
            "id": "TUESDAY"
        }, {
            "name": "Wednesday",
            "id": "WEDNESDAY"
        }, {
            "name": "Thursday",
            "id": "THURSDAY"
        }, {
            "name": "Friday",
            "id": "FRIDAY"
        }, {
            "name": "Saturday",
            "id": "SATURDAY"
        }, ];
        var widgetMap = {
            "id": "id",
            "lblFrequency": "lblFrequency",
            "flxFrequency": "flxFrequency",
            "flxMain": "flxMain"
        };
        this.view.segDayDatesList.widgetDataMap = widgetMap;
        this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.Alerts.SelectDay");
        this.view.lblDescription.text = kony.i18n.getLocalizedString("kony.mb.Alerts.PleaseChooseADay");
        var segDays = days.map(function(rec) {
            return {
                "id": rec.id,
                "lblFrequency": rec.name,
                "flxMain": freqObj.value === rec.id ? {
                    "skin": "sknFlxF6F6F6BgRadius29px"
                } : {
                    "skin": "slFbox"
                },
                "template": "flxFrequency",
            };
        });
        this.view.segDayDatesList.setData(segDays);
        this.view.forceLayout();
    },
    /*
     * set list of dates data to segment
     * @param {Object}: freqObj-{"id":"","value":"","time":""}
     */
    setDataForDates: function(freqObj) {
        var dates = [],
            ind = 1;
        var widgetMap = {
            "id": "id",
            "lblFrequency": "lblFrequency",
            "flxFrequency": "flxFrequency",
            "flxMain": "flxMain"
        };
        this.view.segDayDatesList.widgetDataMap = widgetMap;
        this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.Alerts.SelectDate");
        this.view.lblDescription.text = kony.i18n.getLocalizedString("kony.mb.Alerts.PleaseChooseADate");
        for (var i = 1; i <= 31; i++) {
            if (freqObj.value === i.toString()) ind = i;
            dates.push({
                "id": i,
                "lblFrequency": i + "",
                "flxMain": freqObj.value === i.toString() ? {
                    "skin": "sknFlxF6F6F6BgRadius29px"
                } : {
                    "skin": "slFbox"
                },
                "template": "flxFrequency",
            });
        }
        this.view.segDayDatesList.setData(dates);
        this.view.segDayDatesList.selectedRowIndex = [0, (ind - 1)];
        this.view.forceLayout();
    },
    /*
     * set selected row skin 
     * @param {Integer}: selected row item id
     */
    changeSelectedRowSkin: function(id) {
        var segData = this.view.segDayDatesList.data;
        for (var i = 0; i < segData.length; i++) {
            if (segData[i].id === id) {
                segData[i].flxMain.skin = "sknFlxF6F6F6BgRadius29px";
                this.view.segDayDatesList.setDataAt(segData[i], i);
                //this.view.segDayDatesList.selectedRowIndex = [0,i];
            } else if (segData[i].flxMain.skin === "sknFlxF6F6F6BgRadius29px") {
                segData[i].flxMain.skin = "slFbox";
                this.view.segDayDatesList.setDataAt(segData[i], i);
            }
        }
    },
    /*
     * on click of segment row
     * @param {Object}: freqObj-{"id":"","value":"","time":""}
     * @param {Object}: setPreferenceData - request param for setAlertPreference
     */
    segmentRowClick: function(freqObj, setPreferenceData) {
        var selectedRowData = this.view.segDayDatesList.data[this.view.segDayDatesList.selectedIndex[1]];
        freqObj.value = selectedRowData.id;
        this.changeSelectedRowSkin(selectedRowData.id);
        var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsModule.presentationController.navigateToAlertsTimeSelection(freqObj, setPreferenceData);
        settingsModule.presentationController.commonFunctionForNavigation("frmAlertsTimeSelection");
    },
});
define("SettingsModule/frmAlertsDaySelectionControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b1e66bd61f9d4cd6a044861b3e723184: function AS_Form_b1e66bd61f9d4cd6a044861b3e723184(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c6bd4d4c02ee4acd837debfdb2b24d04: function AS_Form_c6bd4d4c02ee4acd837debfdb2b24d04(eventobject) {
        var self = this;
        this.preShow();
    },
});
define("SettingsModule/frmAlertsDaySelectionController", ["SettingsModule/userfrmAlertsDaySelectionController", "SettingsModule/frmAlertsDaySelectionControllerActions"], function() {
    var controller = require("SettingsModule/userfrmAlertsDaySelectionController");
    var controllerActions = ["SettingsModule/frmAlertsDaySelectionControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
