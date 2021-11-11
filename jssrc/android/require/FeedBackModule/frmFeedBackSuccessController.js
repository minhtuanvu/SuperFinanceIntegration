define("FeedBackModule/userfrmFeedBackSuccessController", {
    preShow: function() {
        this.initActions();
        if (kony.os.deviceInfo().name !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.lblSuccessText.skin = "sknLbl424242SSP140prBold";
        this.view.flxSuccessContainer.centerY = "50%";
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.btnDone.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var navManager = applicationManager.getNavigationManager();
            var entryPoint = navManager.getEntryPoint("Feedback");
            navManager.navigateTo(entryPoint);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        }
    },
    animateFeedback: function() {
        /* this.view.flxSuccessContainer.animate(
         kony.ui.createAnimation({
           "0": {
                 "centerY": "60%",
                 "stepConfig": {
                     "timingFunction": kony.anim.EASE
                 }
             },
           "100": {
                 "centerY": "50%",
                 "stepConfig": {
                     "timingFunction": kony.anim.EASE
                 }
             }
         }), {
             "delay": 0,
             "iterationCount": 1,
             "fillMode": kony.anim.FILL_MODE_FORWARDS,
             "duration": 0.50
         }, {
             "animationEnd": function(){}
         });*/
    }
});
define("FeedBackModule/frmFeedBackSuccessControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ee8f69ff5abb41fd8322048793f5255b: function AS_Form_ee8f69ff5abb41fd8322048793f5255b(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_hc52ef30714c4b2a86bf3787990e8d08: function AS_Form_hc52ef30714c4b2a86bf3787990e8d08(eventobject) {
        var self = this;
        this.animateFeedback();
    },
    AS_Form_b8885dd877dd4435ba95083069289394: function AS_Form_b8885dd877dd4435ba95083069289394(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("FeedBackModule/frmFeedBackSuccessController", ["FeedBackModule/userfrmFeedBackSuccessController", "FeedBackModule/frmFeedBackSuccessControllerActions"], function() {
    var controller = require("FeedBackModule/userfrmFeedBackSuccessController");
    var controllerActions = ["FeedBackModule/frmFeedBackSuccessControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
