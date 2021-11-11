define("com/kmb/common/keypad/userkeypadController", function() {
    return {
        keypadChar: '',
        setChar: function(par) {
            this.keypadChar = par;
            this.view.txtKeypad.text = par;
        },
        clearChar: function() {
            this.view.txtKeypad.text = '';
            this.keypadChar = '';
        },
        formatAmount: function(keypadString) {
            var seperator, decimalPoint, amount;
            var tillPoint = keypadString.substring(0, keypadString.indexOf('.'));
            var afterPoint = keypadString.substring(keypadString.indexOf('.') + 1, keypadString.length);
            var locale = kony.i18n.getCurrentLocale();
            kony.print("current locale : " + locale);
            if (locale == 'en' || locale == "en_GB" || locale == "en_US") {
                kony.print("not formating the amount - keypad string : " + keypadString);
                return keypadString;
            } else if (locale == 'es_ES' || locale == "de_DE") {
                seperator = ',';
                decimalPoint = '.';
                amount = tillPoint.replace(/,/g, decimalPoint) + seperator + afterPoint;
                kony.print("amount is " + amount);
                return amount;
            } else if (locale == "fr_FR" || locale == "sv_SE") {
                seperator = ' ';
                decimalPoint = ',';
                amount = tillPoint.replace(/,/g, seperator) + decimalPoint + afterPoint;
                kony.print("amount is " + amount);
                return amount;
            }
        }
    };
});
define("com/kmb/common/keypad/keypadControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnOne **/
    AS_Button_iae593024ef64ff8b07abb6bc2d637a2: function AS_Button_iae593024ef64ff8b07abb6bc2d637a2(eventobject) {
        var self = this;
        this.setChar(1);
    },
    /** onClick defined for btnTwo **/
    AS_Button_a6bd1e76de9d41ce98d093910bc4fac3: function AS_Button_a6bd1e76de9d41ce98d093910bc4fac3(eventobject) {
        var self = this;
        this.setChar(2);
    },
    /** onClick defined for btnThree **/
    AS_Button_bcfc8fd4f224444281854a0f1ee0694a: function AS_Button_bcfc8fd4f224444281854a0f1ee0694a(eventobject) {
        var self = this;
        this.setChar(3);
    },
    /** onClick defined for btnFour **/
    AS_Button_cd3568b731d5476a8123c3602e5b1bc1: function AS_Button_cd3568b731d5476a8123c3602e5b1bc1(eventobject) {
        var self = this;
        this.setChar(4);
    },
    /** onClick defined for btnFive **/
    AS_Button_g0f1221e9a8f43b5b3abfaa8dfec37de: function AS_Button_g0f1221e9a8f43b5b3abfaa8dfec37de(eventobject) {
        var self = this;
        this.setChar(5);
    },
    /** onClick defined for btnSix **/
    AS_Button_ef6466d4ff144667b0ad0f251681136c: function AS_Button_ef6466d4ff144667b0ad0f251681136c(eventobject) {
        var self = this;
        this.setChar(6);
    },
    /** onClick defined for btnSeven **/
    AS_Button_g93c234b14f8412990f166c7cb2b93e0: function AS_Button_g93c234b14f8412990f166c7cb2b93e0(eventobject) {
        var self = this;
        this.setChar(7);
    },
    /** onClick defined for btnEight **/
    AS_Button_d8f24d3a215848acbc4fa5814264deb7: function AS_Button_d8f24d3a215848acbc4fa5814264deb7(eventobject) {
        var self = this;
        this.setChar(8);
    },
    /** onClick defined for btnNine **/
    AS_Button_ebba04e8613441c79eb979c5659c13af: function AS_Button_ebba04e8613441c79eb979c5659c13af(eventobject) {
        var self = this;
        this.setChar(9);
    },
    /** onClick defined for btnZero **/
    AS_Button_bf6c5de8a8ee4e54aed1e333bbe062c6: function AS_Button_bf6c5de8a8ee4e54aed1e333bbe062c6(eventobject) {
        var self = this;
        this.setChar(0);
    },
});
define("com/kmb/common/keypad/keypadController", ["com/kmb/common/keypad/userkeypadController", "com/kmb/common/keypad/keypadControllerActions"], function() {
    var controller = require("com/kmb/common/keypad/userkeypadController");
    var actions = require("com/kmb/common/keypad/keypadControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
