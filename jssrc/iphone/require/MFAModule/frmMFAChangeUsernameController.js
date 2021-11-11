define("MFAModule/userfrmMFAChangeUsernameController", {
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.tbxUsername.text = ""
        this.view.tbxUsername.setFocus = true;
        this.view.tbxUsername.onTextChange = this.setButton;
    },
    setButton: function() {
        if (this.view.tbxUsername.text === "") {
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        } else {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        }
    }
});
define("MFAModule/frmMFAChangeUsernameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a76a59d48882421da82ee65649383478: function AS_Form_a76a59d48882421da82ee65649383478(eventobject) {
        var self = this;
        //this.init();
    },
    AS_Form_def7973444104605876b6edbb9eefd02: function AS_Form_def7973444104605876b6edbb9eefd02(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_a6fb2b6af8834b45b7df7c1276e3a65a: function AS_BarButtonItem_a6fb2b6af8834b45b7df7c1276e3a65a(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    }
});
define("MFAModule/frmMFAChangeUsernameController", ["MFAModule/userfrmMFAChangeUsernameController", "MFAModule/frmMFAChangeUsernameControllerActions"], function() {
    var controller = require("MFAModule/userfrmMFAChangeUsernameController");
    var controllerActions = ["MFAModule/frmMFAChangeUsernameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
