define("com/commom/customSecurityCode/usercustomSecurityCodeController", {
    maxNoOfChars: 8,
    keypadString: "",
    placeholder: "•",
    validateFun: null,
    preShow: function() {
        this.setSecurityCode();
    },
    setMaxNoOfChars: function(newMaxNoOfChars) {
        this.maxNoOfChars = newMaxNoOfChars;
        this.view["lblText0"].left = ((8 - this.maxNoOfChars) * 12.5) / 2 + "%";
        this.view["flxDash0"].left = ((8 - this.maxNoOfChars) * 12.5) / 2 + "%";
        for (i = 0; i < this.maxNoOfChars; i++) {
            this.view["lblText" + i].setVisibility(true);
            this.view["flxDash" + i].setVisibility(true);
        }
        for (i = this.maxNoOfChars; i < 8; i++) {
            this.view["lblText" + i].setVisibility(false);
            this.view["flxDash" + i].setVisibility(false);
        }
    },
    setSecurityCode: function(keypadString) {
        if (keypadString != null || keypadString != undefined) {
            this.keypadString = keypadString;
        }
        for (i = 0; i < this.keypadString.length; i++) {
            this.setSecurityCodeChar(i, this.keypadString[i]);
        }
        for (i; i < this.maxNoOfChars; i++) {
            this.setPlaceholder(i);
        }
        if (this.validateFun != null) {
            this.validateFun();
        }
    },
    setSecurityCodeChar: function(pos, char) {
        this.view["lblText" + pos].text = "•";
        this.view["lblText" + pos].skin = "sknLbl979797SSP60px";
    },
    setPlaceholder: function(pos) {
        if (pos === -1) return
        this.view["lblText" + pos].text = this.placeholder;
        this.view["lblText" + pos].skin = "lblWhiteDot";
    },
    getSecurityCode: function() {
        return this.keypadString;
    },
});
define("com/commom/customSecurityCode/customSecurityCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_cf094292300444b9adf37d0a9980f410: function AS_FlexContainer_cf094292300444b9adf37d0a9980f410(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("com/commom/customSecurityCode/customSecurityCodeController", ["com/commom/customSecurityCode/usercustomSecurityCodeController", "com/commom/customSecurityCode/customSecurityCodeControllerActions"], function() {
    var controller = require("com/commom/customSecurityCode/usercustomSecurityCodeController");
    var actions = require("com/commom/customSecurityCode/customSecurityCodeControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
