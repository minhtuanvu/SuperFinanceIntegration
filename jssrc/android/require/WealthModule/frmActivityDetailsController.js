define("WealthModule/userfrmActivityDetailsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        var activityDetail = navManager.getCustomInfo("frmActivityDetails");
        var actDetail = activityDetail.details;
        this.setDataToSegment(actDetail);
        this.initActions();
    },
    initActions: function() {
        this.view.customHeader.flxBack.onTouchEnd = this.onBack;
    },
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    setDataToSegment: function(activityDetail) {
        var result = [];
        for (var i in activityDetail) {
            let temp = {
                name: i + ":",
                value: activityDetail[i]
            };
            result.push(temp);
        }
        var currForm = kony.application.getCurrentForm();
        var segData = [];
        for (var list in result) {
            var storeData;
            storeData = {
                name: result[list].name,
                value: result[list].value
            };
            segData.push(storeData);
        }
        this.view.segActivityDetail.widgetDataMap = {
            lblName: "name",
            lblValue: "value"
        };
        this.view.segActivityDetail.setData(segData);
        currForm.forceLayout();
    }
});
define("WealthModule/frmActivityDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d2ec5da01f554f9faa595859c6b85a2b: function AS_Form_d2ec5da01f554f9faa595859c6b85a2b(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_dea3fd5b487c485f8f5d749540978d03: function AS_Form_dea3fd5b487c485f8f5d749540978d03(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("WealthModule/frmActivityDetailsController", ["WealthModule/userfrmActivityDetailsController", "WealthModule/frmActivityDetailsControllerActions"], function() {
    var controller = require("WealthModule/userfrmActivityDetailsController");
    var controllerActions = ["WealthModule/frmActivityDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
