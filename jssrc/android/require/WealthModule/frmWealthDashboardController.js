define("WealthModule/userfrmWealthDashboardController", {
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
    },
    postShow: function() {},
});
define("WealthModule/frmWealthDashboardControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ebef21cc490d4e41b8b804261cdd4e94: function AS_Form_ebef21cc490d4e41b8b804261cdd4e94(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_jdbd335e167e4639b4362a223c40364a: function AS_Form_jdbd335e167e4639b4362a223c40364a(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_f0cbbecd39834baf967f73176e410df6: function AS_Form_f0cbbecd39834baf967f73176e410df6(eventobject) {
        var self = this;
        this.preShow();
    },
});
define("WealthModule/frmWealthDashboardController", ["WealthModule/userfrmWealthDashboardController", "WealthModule/frmWealthDashboardControllerActions"], function() {
    var controller = require("WealthModule/userfrmWealthDashboardController");
    var controllerActions = ["WealthModule/frmWealthDashboardControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
