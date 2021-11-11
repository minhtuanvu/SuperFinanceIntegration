define("TransferModule/userfrmWireTransferAccountNoController", {
    timerCounter: 0,
    keypadString: '',
    init: function() {},
    frmPreshow: function() {
        this.keypadString = '';
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        if (this.keypadString.length > 0 && this.keypadString.length < 17) {
            this.enterCodePostAction();
        } else if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        } else if (this.keypadString.length > 16) {
            this.keypadString = this.keypadString.slice(0, 16);
            return;
        }
        this.updateInputBullets("flxInputAccNo");
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets("flxInputAccNo");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 1) {
                this.incompleteCodeView();
            }
            this.updateInputBullets("flxInputAccNo");
        }
        if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        }
    },
    updateInputBullets: function(inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            // widgets[i].skin = "sknLbl484848sspReg50px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            //widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = '_';
        }
        this.view.forceLayout();
    },
    enterCodePostAction: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    incompleteCodeView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
});
define("TransferModule/frmWireTransferAccountNoControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_add9db7150c44206810426165d3c7e08: function AS_Form_add9db7150c44206810426165d3c7e08(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b658b6eefc79407295b277760a45f6c7: function AS_Form_b658b6eefc79407295b277760a45f6c7(eventobject) {
        var self = this;
        return self.frmPreshow.call(this);
    },
    AS_Button_i83f8ccf66d2418f8c4c2fe5dac7c534: function AS_Button_i83f8ccf66d2418f8c4c2fe5dac7c534(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_af3003a9bfe14c68858f3e4657d240d1: function AS_Button_af3003a9bfe14c68858f3e4657d240d1(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_eade531f6f0940c3a8d29749c25f1876: function AS_Button_eade531f6f0940c3a8d29749c25f1876(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_gea99a8e77b1450da4fb9af60de4b931: function AS_Button_gea99a8e77b1450da4fb9af60de4b931(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_d0c15a913bd443d4a81090d9e392f9ad: function AS_Button_d0c15a913bd443d4a81090d9e392f9ad(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_dfe7431e12784fdaadae9ce1e5d715af: function AS_Button_dfe7431e12784fdaadae9ce1e5d715af(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_b8627cbe7a74460da61abdc4a9f257e3: function AS_Button_b8627cbe7a74460da61abdc4a9f257e3(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_b8839b1314b9442aad80bc678f68b8e7: function AS_Button_b8839b1314b9442aad80bc678f68b8e7(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_d264ed33950a4e2caa509c00ae88d2d0: function AS_Button_d264ed33950a4e2caa509c00ae88d2d0(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_a46637e7734649748e005fc7cde82937: function AS_Button_a46637e7734649748e005fc7cde82937(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_c6cb2426b8a74f4dba798ce57c427347: function AS_Image_c6cb2426b8a74f4dba798ce57c427347(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("TransferModule/frmWireTransferAccountNoController", ["TransferModule/userfrmWireTransferAccountNoController", "TransferModule/frmWireTransferAccountNoControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferAccountNoController");
    var controllerActions = ["TransferModule/frmWireTransferAccountNoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
