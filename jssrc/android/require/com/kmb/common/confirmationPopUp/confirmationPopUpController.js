define("com/kmb/common/confirmationPopUp/userconfirmationPopUpController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("com/kmb/common/confirmationPopUp/confirmationPopUpControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/common/confirmationPopUp/confirmationPopUpController", ["com/kmb/common/confirmationPopUp/userconfirmationPopUpController", "com/kmb/common/confirmationPopUp/confirmationPopUpControllerActions"], function() {
    var controller = require("com/kmb/common/confirmationPopUp/userconfirmationPopUpController");
    var actions = require("com/kmb/common/confirmationPopUp/confirmationPopUpControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "lblMessage", function(val) {
            this.view.lblMsg.text = val;
        });
        defineGetter(this, "lblMessage", function() {
            return this.view.lblMsg.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onClickflxNo_bd0d842b5bb2404a910f97e982f6883d = function() {
        if (this.onClickflxNo) {
            this.onClickflxNo.apply(this, arguments);
        }
    }
    controller.AS_onClickflxYes_eb7984a57ee54eb38f24da996709e3b4 = function() {
        if (this.onClickflxYes) {
            this.onClickflxYes.apply(this, arguments);
        }
    }
    return controller;
});
