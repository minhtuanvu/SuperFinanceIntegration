define("com/banking/SecureCode/userSecureCodeController", function() {
    var enableSSN = false;
    var requiredLength = 4;
    var securityCode = "";
    var unfilledSymbol;
    var filledSymbol;
    var ssnCodeSeparatorSymbol;
    var replaceAt = function(source, index, replacement) {
        return source.substr(0, index) + replacement + source.substr(index + replacement.length);
    };
    var initSecurityCodeView = function() {
        var initialText = "";
        var length = enableSSN ? 11 : requiredLength;
        for (var i = 0; i < length; i++) {
            var symbolToFill = (enableSSN && (i === 3 || i === 6)) ? ssnCodeSeparatorSymbol : unfilledSymbol;
            initialText = initialText + symbolToFill;
        }
        this.view.lblCode.textStyle = {
            "letterSpacing": 8
        };
        this.view.lblCode.text = initialText;
    };
    var updateSecurityCodeView = function() {
        var lblText = this.view.lblCode.text;
        var length = enableSSN ? 11 : requiredLength;
        var separatorCount = 0;
        for (var i = 0; i < length; i++) {
            if (enableSSN && (i === 3 || i === 6)) {
                lblText = replaceAt(lblText, i, ssnCodeSeparatorSymbol);
                separatorCount++;
            } else if (i < (securityCode.length + separatorCount)) {
                lblText = replaceAt(lblText, i, filledSymbol);
            } else {
                lblText = replaceAt(lblText, i, unfilledSymbol);
            }
        }
        this.view.lblCode.text = lblText;
    };
    var isAPIAvailable = function(API) {
        return API && (typeof API === "function");
    };
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        initGettersSetters: function() {
            defineSetter(this, "requiredLength", function(value) {
                requiredLength = value;
            });
            defineSetter(this, "unfilledSymbol", function(symbol) {
                unfilledSymbol = symbol;
            });
            defineSetter(this, "filledSymbol", function(symbol) {
                filledSymbol = symbol;
            });
            defineSetter(this, "enableSSN", function(enable) {
                enableSSN = enable;
            });
            defineSetter(this, "ssnCodeSeparator", function(symbol) {
                ssnCodeSeparatorSymbol = symbol;
            });
        },
        initializeView: function() {
            securityCode = "";
            initSecurityCodeView.call(this);
        },
        addDigit: function(digit) {
            if (securityCode.length < requiredLength) {
                securityCode += digit;
                updateSecurityCodeView.call(this);
                if (securityCode.length === requiredLength && isAPIAvailable(this.onCodeEntered)) {
                    this.onCodeEntered();
                }
            }
        },
        removeDigit: function() {
            var length = securityCode.length;
            if (length !== 0) {
                securityCode = securityCode.slice(0, -1);
                updateSecurityCodeView.call(this);
                if (length === requiredLength && isAPIAvailable(this.onCodeRevoked)) {
                    this.onCodeRevoked();
                }
            }
        },
        getEnteredCode: function() {
            return securityCode;
        },
        clear: function() {
            if (securityCode.length === requiredLength && isAPIAvailable(this.onCodeRevoked)) {
                this.onCodeRevoked();
            }
            securityCode = "";
            updateSecurityCodeView.call(this);
        },
    };
});
define("com/banking/SecureCode/SecureCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_g65d606b873b49159f56a1abc4c1b3ea: function AS_FlexContainer_g65d606b873b49159f56a1abc4c1b3ea(eventobject) {
        var self = this;
        return self.initializeView.call(this);
    }
});
define("com/banking/SecureCode/SecureCodeController", ["com/banking/SecureCode/userSecureCodeController", "com/banking/SecureCode/SecureCodeControllerActions"], function() {
    var controller = require("com/banking/SecureCode/userSecureCodeController");
    var actions = require("com/banking/SecureCode/SecureCodeControllerActions");
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
