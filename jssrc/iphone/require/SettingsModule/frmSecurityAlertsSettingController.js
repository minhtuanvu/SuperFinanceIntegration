define("SettingsModule/userfrmSecurityAlertsSettingController", {
    init: function() {},
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.setFlowActions();
    },
    setFlowActions: function() {
        var scope = this;
        this.view.flxSwitchSMS.onClick = function() {
            if (scope.view.flxSwitchToggleSMS.left === "4dp") scope.animate(scope.view.flxSwitchSMS, scope.view.flxSwitchToggleSMS, "21dp");
            else scope.animate(scope.view.flxSwitchSMS, scope.view.flxSwitchToggleSMS, "4dp");
        };
        this.view.flxSwitchEmail.onClick = function() {
            if (scope.view.flxSwitchToggleEmail.left === "4dp") scope.animate(scope.view.flxSwitchEmail, scope.view.flxSwitchToggleEmail, "21dp");
            else scope.animate(scope.view.flxSwitchEmail, scope.view.flxSwitchToggleEmail, "4dp");
        };
        this.view.flxSwitchPushNotification.onClick = function() {
            if (scope.view.flxSwitchTogglePushNotification.left === "4dp") scope.animate(scope.view.flxSwitchPushNotification, scope.view.flxSwitchTogglePushNotification, "21dp");
            else scope.animate(scope.view.flxSwitchPushNotification, scope.view.flxSwitchTogglePushNotification, "4dp");
        };
    },
    animate: function(parentWidget, widget, value) {
        var self = this;
        widget.animate(kony.ui.createAnimation({
            "100": {
                "left": value,
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": function() {
                if (widget.left === "4dp") {
                    parentWidget.skin = "sknflxffffffBordera0a0a010px";
                    widget.skin = "sknflxa0a0a0Bordera0a0a0Border100pxRadius";
                } else if (widget.left === "21dp") {
                    parentWidget.skin = "sknflxffffffBorder0095e4Border10px";
                    widget.skin = "sknflx0095e4Border0095e4Border100pxRadius";
                }
            }
        });
    }
});
define("SettingsModule/frmSecurityAlertsSettingControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_h6222240840541d89677ccda83ea74d2: function AS_Form_h6222240840541d89677ccda83ea74d2(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e80916da6e554f728fdb09637db27d2a: function AS_Form_e80916da6e554f728fdb09637db27d2a(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("SettingsModule/frmSecurityAlertsSettingController", ["SettingsModule/userfrmSecurityAlertsSettingController", "SettingsModule/frmSecurityAlertsSettingControllerActions"], function() {
    var controller = require("SettingsModule/userfrmSecurityAlertsSettingController");
    var controllerActions = ["SettingsModule/frmSecurityAlertsSettingControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
