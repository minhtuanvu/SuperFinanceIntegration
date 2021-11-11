define("com/banking/inputAmount/userinputAmountController", function() {
    var constructAmountModeText = function() {
        var text = "";
        var enteredAmountLength = this.enteredDigits.length;
        if (enteredAmountLength === 0) {
            text = "0.00";
        } else if (enteredAmountLength === 1) {
            text = "0.0" + this.enteredDigits;
        } else if (enteredAmountLength === 2) {
            text = "0." + this.enteredDigits;
        } else {
            for (var i = 0; i < enteredAmountLength; i++) {
                var thousandIndex = enteredAmountLength - 5;
                var millionIndex = enteredAmountLength - 8;
                if ((thousandIndex > 0 && i === enteredAmountLength - 5) || (millionIndex > 0 && i === enteredAmountLength - 8)) {
                    text += ",";
                }
                if (i === enteredAmountLength - 2) {
                    text += ".";
                }
                text += this.enteredDigits.charAt(i);
            }
        }
        return text;
    };
    var constructDigitModeText = function() {
        var text = "";
        var enteredAmountLength = this.enteredDigits.length;
        if (enteredAmountLength === 0) {
            text = "00";
        } else if (enteredAmountLength === 1) {
            text = "0" + this.enteredDigits;
        } else {
            text = this.enteredDigits;
        }
        return text;
    };
    var updateAmountView = function() {
        var text = this.isAmountModeEnabled ? constructAmountModeText.call(this) : constructDigitModeText.call(this);
        this.view.lblAmount.text = text;
    };
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.isAmountModeEnabled = true;
            this.componentInfo = {
                currencySymbolSkin: "",
                currencyAmountSkin: "",
                mainFlx: "",
                defaultAmount: ""
            };
            this.enteredDigits = "";
            this.addDigit = function(char) {
                this.enteredDigits += char;
                updateAmountView.call(this);
            };
            this.removeDigit = function() {
                this.enteredDigits = this.enteredDigits.slice(0, -1);
                updateAmountView.call(this);
            };
            this.getAmount = function() {
                var amount = this.view.lblAmount.text;
                var regex = new RegExp(',', 'g');
                amount = amount.replace(regex, "");
                return amount;
            };
            this.setAmount = function(amount) {
                this.enteredDigits = amount.replace('.', '');
                updateAmountView.call(this);
            };
            this.clear = function() {
                this.enteredDigits = "";
                updateAmountView.call(this);
            };
        },
        initGettersSetters: function() {
            defineSetter(this, "currencySymbolSkin", function(val) {
                this.componentInfo.currencySymbolSkin = val;
            });
            defineSetter(this, "currencyAmountSkin", function(val) {
                this.componentInfo.currencyAmountSkin = val;
            });
            defineSetter(this, "mainFlx", function(val) {
                this.componentInfo.mainFlx = val;
            });
            defineSetter(this, "defaultAmount", function(val) {
                this.componentInfo.defaultAmount = val;
            });
            defineSetter(this, "enableAmountMode", function(val) {
                this.isAmountModeEnabled = val;
                this.view.flxSeparator.setVisibility(val);
            });
        },
        setupSkins: function() {
            this.view.lblDollar.skin = this.componentInfo.currencySymbolSkin;
            this.view.lblAmount.skin = this.componentInfo.currencyAmountSkin;
            this.view.skin = this.componentInfo.mainFlx;
            if (!this.enteredDigits) {
                this.view.lblAmount.text = this.componentInfo.defaultAmount;
            }
        }
    };
});
define("com/banking/inputAmount/inputAmountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_h81b53ad46c14c15b2463601284c7b95: function AS_FlexContainer_h81b53ad46c14c15b2463601284c7b95(eventobject) {
        var self = this;
        return self.setupSkins.call(this);
    }
});
define("com/banking/inputAmount/inputAmountController", ["com/banking/inputAmount/userinputAmountController", "com/banking/inputAmount/inputAmountControllerActions"], function() {
    var controller = require("com/banking/inputAmount/userinputAmountController");
    var actions = require("com/banking/inputAmount/inputAmountControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "defaultSymbol", function(val) {
            this.view.lblDollar.text = val;
        });
        defineGetter(this, "defaultSymbol", function() {
            return this.view.lblDollar.text;
        });
        defineSetter(this, "currencySymbolVisibility", function(val) {
            this.view.lblDollar.isVisible = val;
        });
        defineGetter(this, "currencySymbolVisibility", function() {
            return this.view.lblDollar.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
