define("com/kmb/common/confirmationAlertPopup/userconfirmationAlertPopupController", function() {
    return {};
});
define("com/kmb/common/confirmationAlertPopup/confirmationAlertPopupControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/kmb/common/confirmationAlertPopup/confirmationAlertPopupController", ["com/kmb/common/confirmationAlertPopup/userconfirmationAlertPopupController", "com/kmb/common/confirmationAlertPopup/confirmationAlertPopupControllerActions"], function() {
    var controller = require("com/kmb/common/confirmationAlertPopup/userconfirmationAlertPopupController");
    var actions = require("com/kmb/common/confirmationAlertPopup/confirmationAlertPopupControllerActions");
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
    controller.AS_onClickflxNo_ddda8e8204e4427e9d2fb8cbcbf7e138 = function() {
        if (this.onClickflxNo) {
            this.onClickflxNo.apply(this, arguments);
        }
    }
    controller.AS_onClickflxYes_e2696e02ec8345cd9e8ceb50cfd948cd = function() {
        if (this.onClickflxYes) {
            this.onClickflxYes.apply(this, arguments);
        }
    }
    return controller;
});
