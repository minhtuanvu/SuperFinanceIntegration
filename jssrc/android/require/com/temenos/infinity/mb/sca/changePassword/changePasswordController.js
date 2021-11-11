define("com/temenos/infinity/mb/sca/changePassword/userchangePasswordController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        preShowChangePassword: function() {
            this.setTextAndSkinFromProperties();
            this.resetUI();
            this.setFlowActions();
        },
        setFlowActions: function() {
            this.view.flxBack.onClick = function() {
                const ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
                ntf.navigate();
            };
            this.view.btnCancel.onClick = function() {
                const ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
                ntf.navigate();
            };
        },
        resetUI: function() {
            this.view.flxMainContainer.setVisibility(true);
            this.view.flxSuccessContainer.setVisibility(false);
        },
        getStringFromi18n: function(stringValue) {
            return kony.i18n.getLocalizedString(stringValue) ? kony.i18n.getLocalizedString(stringValue) : stringValue;
        },
        setTextAndSkinFromProperties: function() {},
    };
});
define("com/temenos/infinity/mb/sca/changePassword/changePasswordControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/temenos/infinity/mb/sca/changePassword/changePasswordController", ["com/temenos/infinity/mb/sca/changePassword/userchangePasswordController", "com/temenos/infinity/mb/sca/changePassword/changePasswordControllerActions"], function() {
    var controller = require("com/temenos/infinity/mb/sca/changePassword/userchangePasswordController");
    var actions = require("com/temenos/infinity/mb/sca/changePassword/changePasswordControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
