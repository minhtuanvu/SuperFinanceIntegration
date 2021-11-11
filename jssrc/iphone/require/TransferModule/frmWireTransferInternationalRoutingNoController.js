define("TransferModule/userfrmWireTransferInternationalRoutingNoController", {
    keypadString: '',
    init: function() {},
    frmPreshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.keypadString = '';
        this.updateInputBullets("flxInputRoutingNo");
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        if (this.keypadString.length > 0 && this.keypadString.length < 10) {
            this.enterCodePostAction();
        } else if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        } else if (this.keypadString.length > 9) {
            this.keypadString = this.keypadString.slice(0, 9);
            return;
        }
        this.updateInputBullets("flxInputRoutingNo");
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets("flxInputRoutingNo");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 1) {
                this.incompleteCodeView();
            }
            this.updateInputBullets("flxInputRoutingNo");
        }
        if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        }
    },
    updateInputBullets: function(inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            widgets[i].skin = "lblBlueFocus";
            widgets[i].text = '_';
        }
        this.view.forceLayout();
    },
    enterCodePostAction: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    incompleteCodeView: function() {
        this.view.lblBankName.setVisibility(false);
        this.view.lblAddLine1.setVisibility(false);
        this.view.lblAddLine2.setVisibility(false);
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
    preshowHideBankDetails: function() {
        this.view.lblBankName.setVisibility(false);
        this.view.lblAddLine1.setVisibility(false);
        this.view.lblAddLine2.setVisibility(false);
    },
});
define("TransferModule/frmWireTransferInternationalRoutingNoControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e904040670dc496eb52ea7554f5a9763: function AS_Form_e904040670dc496eb52ea7554f5a9763(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b3cc6904009a4b57b90a754433630660: function AS_Form_b3cc6904009a4b57b90a754433630660(eventobject) {
        var self = this;
        this.frmPreshow();
    },
    AS_Button_e496c96adbd046139c4194a38375b78b: function AS_Button_e496c96adbd046139c4194a38375b78b(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_ha80b8156f574013824639e7daed1d63: function AS_Button_ha80b8156f574013824639e7daed1d63(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_c22104b8081c49ca8a9f6b3b083a2089: function AS_Button_c22104b8081c49ca8a9f6b3b083a2089(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_if8f65ab6aa34b779eea3576c7b2d391: function AS_Button_if8f65ab6aa34b779eea3576c7b2d391(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_aa479eaacd0e4713b213ded0cb3801eb: function AS_Button_aa479eaacd0e4713b213ded0cb3801eb(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_e877b257ce4c43d7a5382cb3a804c72e: function AS_Button_e877b257ce4c43d7a5382cb3a804c72e(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_d0ec188fa09b43a688de2871391d5096: function AS_Button_d0ec188fa09b43a688de2871391d5096(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_ge6e3e4352bd4fa29b36b10b04eb63f0: function AS_Button_ge6e3e4352bd4fa29b36b10b04eb63f0(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_f8468fc8634b44c58970da9869a62975: function AS_Button_f8468fc8634b44c58970da9869a62975(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_ff73b43eb4f942b99726e26ea57674a6: function AS_Button_ff73b43eb4f942b99726e26ea57674a6(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_h8262926e76a4ad695ce6a16eb6421fd: function AS_Image_h8262926e76a4ad695ce6a16eb6421fd(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("TransferModule/frmWireTransferInternationalRoutingNoController", ["TransferModule/userfrmWireTransferInternationalRoutingNoController", "TransferModule/frmWireTransferInternationalRoutingNoControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferInternationalRoutingNoController");
    var controllerActions = ["TransferModule/frmWireTransferInternationalRoutingNoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
