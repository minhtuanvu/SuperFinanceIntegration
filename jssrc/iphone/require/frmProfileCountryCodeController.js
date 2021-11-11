 define("userfrmProfileCountryCodeController", {
     keypadString: '',
     frmSecurityCheckPreShow: function() {
         this.setFlowActions();
         this.setPreshowData();
     },
     setFlowActions: function() {
         var scopeObj = this;
         this.view.customHeader.flxBack.onClick = function() {
             var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
             settingsMod.presentationController.commonFunctionForNavigation("frmProfileSelectLocation");
         };
         this.view.customHeader.btnRight.onClick = function() {
             var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
             settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
         };
         this.view.flxPickCountry.onClick = function() {
             scopeObj.NavToCountry();
         };
         this.view.btnContinue.onClick = function() {
             scopeObj.NavToPhoneNumber();
         };
     },
     setPreshowData: function() {
         this.view.customHeader.flxBack.isVisible = true;
         if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
             this.view.flxHeader.isVisible = true;
             this.view.flxSecurityCheckMain.top = "56dp";
         } else {
             this.view.flxHeader.isVisible = false;
             this.view.flxSecurityCheckMain.top = "0dp";
         }
     },
     NavToCountry: function() {
         var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
         settingsMod.presentationController.commonFunctionForNavigation("frmProfileCountry");
     },
     NavToPhoneNumber: function() {
         var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
         settingsMod.presentationController.commonFunctionForNavigation("frmProfileEnterPhoneNumber");
     },
     setKeypadChar: function(char) {
         if (char === '.') {
             if (this.isPeriodUsed === false) {
                 this.isPeriodUsed = true;
             } else {
                 return;
             }
         }
         this.keypadString = this.keypadString + char;
         this.updateAmountValue();
     },
     clearKeypadChar: function() {
         if (this.keypadString.length === 1) {
             this.keypadString = '';
             this.updateAmountValue();
         } else if (this.keypadString.length !== 0) {
             if (this.keypadString[this.keypadString.length - 1] === '.') {
                 this.isPeriodUsed = false;
             }
             this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
             this.updateAmountValue();
         }
     },
     updateAmountValue: function() {
         if (this.keypadString === '') {
             this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
             this.view.btnContinue.setEnabled(false);
         } else {
             this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
             this.view.btnContinue.setEnabled(true);
             this.view.lblCode.text = this.keypadString;
         }
     },
 });
define("frmProfileCountryCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_d554736f080d4fe7875cbe20fcc4707c: function AS_Button_d554736f080d4fe7875cbe20fcc4707c(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_fb89972d2aa74401a351e90020f4aa5d: function AS_Button_fb89972d2aa74401a351e90020f4aa5d(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_ac5b796669e645ad8d3d3dce483eed8b: function AS_Button_ac5b796669e645ad8d3d3dce483eed8b(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_j919d3ded6db4f4f8fa89c1cfef4e8fc: function AS_Button_j919d3ded6db4f4f8fa89c1cfef4e8fc(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_i344da2ace4f4efc849cf050d6194439: function AS_Button_i344da2ace4f4efc849cf050d6194439(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_ee454c8d4a744e25a39dc387d30d9fa7: function AS_Button_ee454c8d4a744e25a39dc387d30d9fa7(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_b1b1f08c9fb8486b8e14dde8a86dfe2c: function AS_Button_b1b1f08c9fb8486b8e14dde8a86dfe2c(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_gee0aaaa5cd342f5bad22526e42dcb7b: function AS_Button_gee0aaaa5cd342f5bad22526e42dcb7b(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_ce6039f3d25848b58ad94ab79e36e485: function AS_Button_ce6039f3d25848b58ad94ab79e36e485(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_b9d828499e9d4d5691e1088276efb760: function AS_Button_b9d828499e9d4d5691e1088276efb760(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Form_c2a36d3fc53e47b6be96291a397866e3: function AS_Form_c2a36d3fc53e47b6be96291a397866e3(eventobject) {
        var self = this;
        this.frmSecurityCheckPreShow();
    },
    AS_BarButtonItem_e24821181ce94b42b22f8084570ae293: function AS_BarButtonItem_e24821181ce94b42b22f8084570ae293(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    }
});
define("frmProfileCountryCodeController", ["userfrmProfileCountryCodeController", "frmProfileCountryCodeControllerActions"], function() {
    var controller = require("userfrmProfileCountryCodeController");
    var controllerActions = ["frmProfileCountryCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
