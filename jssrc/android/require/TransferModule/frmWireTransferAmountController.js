define("TransferModule/userfrmWireTransferAmountController", {
    keypadString: '0.00',
    isPeriodUsed: false,
    timerCounter: 0,
    init: function() {},
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
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
        var firstChar = this.keypadString[0];
        this.keypadString = this.keypadString.split("");
        for (var i = 1; i < this.keypadString.length; i++) {
            if (this.keypadString[i] === '.') {
                this.keypadString[i - 1] = this.keypadString[i + 1];
                i++;
            } else {
                this.keypadString[i - 1] = this.keypadString[i];
            }
        }
        this.keypadString = this.keypadString.join("");
        this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        if (firstChar !== '0') {
            this.keypadString = firstChar + this.keypadString;
        }
        this.updateAmountValue();
    },
    clearKeypadChar: function() {
        if (this.keypadString === '0.00') return;
        this.keypadString = this.keypadString.split("");
        for (var i = this.keypadString.length - 2; i >= 0; i--) {
            if (this.keypadString[i] === '.') {
                this.keypadString[i + 1] = this.keypadString[i - 1];
                i--;
            } else {
                this.keypadString[i + 1] = this.keypadString[i];
            }
        }
        this.keypadString = this.keypadString.join("");
        this.keypadString = this.keypadString.substr(1);
        if (this.keypadString[0] === '.') {
            this.keypadString = '0' + this.keypadString;
        }
        this.updateAmountValue();
    },
    updateAmountValue: function() {
        if (this.keypadString === '0.00') {
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
            this.view.lblAmount.text = this.view.keypad.formatAmount(this.keypadString);
        } else {
            var keypadStringCommas = '';
            var beforeDecimal = this.keypadString.split('.')[0];
            var afterDecimal = this.keypadString.split('.')[1];
            if (beforeDecimal.length > 3) {
                var withCommas = (beforeDecimal.length) / 3;
                var withoutCommas = (beforeDecimal.length) % 3;
                var temp = '';
                if (withoutCommas != 0) {
                    temp = beforeDecimal.substr(0, withoutCommas) + ',';
                }
                for (var i = withoutCommas; i < beforeDecimal.length; i += 3) {
                    temp += beforeDecimal.substr(i, 3) + ',';
                }
                beforeDecimal = temp.substr(0, temp.length - 1);
            }
            keypadStringCommas = beforeDecimal + '.' + afterDecimal;
            this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnContinue.setEnabled(true);
            this.view.lblAmount.text = this.view.keypad.formatAmount(keypadStringCommas);
        }
    },
});
define("TransferModule/frmWireTransferAmountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_f1492043c9404956ae04b13ef55b4d1e: function AS_Button_f1492043c9404956ae04b13ef55b4d1e(eventobject) {
        var self = this;
        this.setKeypadChar('.');
    },
    AS_Form_ha9ce51a44fc4f6fbba70494c5c7aecc: function AS_Form_ha9ce51a44fc4f6fbba70494c5c7aecc(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d5647fc425ee4c1d881a768790c79400: function AS_Form_d5647fc425ee4c1d881a768790c79400(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_icd2f7626c864540a80d1029a18b2da7: function AS_BarButtonItem_icd2f7626c864540a80d1029a18b2da7(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    AS_Button_ea20b19c4a954bcb839af055da06fd79: function AS_Button_ea20b19c4a954bcb839af055da06fd79(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_i47a4f60465041c9ade9d49f41f9af58: function AS_Button_i47a4f60465041c9ade9d49f41f9af58(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_da9721448d624fc1bf95e32aa51f7259: function AS_Button_da9721448d624fc1bf95e32aa51f7259(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_fe49e019341c4dffa90b9652438d1c12: function AS_Button_fe49e019341c4dffa90b9652438d1c12(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_a02c730007f84c278c0ef2658f1775a8: function AS_Button_a02c730007f84c278c0ef2658f1775a8(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_f06dbf5847644fe780d6c34726bf6af8: function AS_Button_f06dbf5847644fe780d6c34726bf6af8(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_e69e4921fe92461e85d73fd417ac3fc2: function AS_Button_e69e4921fe92461e85d73fd417ac3fc2(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_f61dd2c6be6b41a49e3448a0eca3b100: function AS_Button_f61dd2c6be6b41a49e3448a0eca3b100(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_ef645096537a47ff9f29a0a50129bbff: function AS_Button_ef645096537a47ff9f29a0a50129bbff(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_c05d905c8b6e4062992c84b4c04b8709: function AS_Button_c05d905c8b6e4062992c84b4c04b8709(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_ed83e0d4701a4a0da43a34f213a23622: function AS_Image_ed83e0d4701a4a0da43a34f213a23622(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar()
    }
});
define("TransferModule/frmWireTransferAmountController", ["TransferModule/userfrmWireTransferAmountController", "TransferModule/frmWireTransferAmountControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferAmountController");
    var controllerActions = ["TransferModule/frmWireTransferAmountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
