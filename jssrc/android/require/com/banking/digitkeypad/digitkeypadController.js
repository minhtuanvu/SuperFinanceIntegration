define("com/banking/digitkeypad/userdigitkeypadController", function() {
    function setupButton(button) {
        var self = this;
        button.onClick = function() {
            var char = button.text;
            if (self.isAPIAvailable(self.onDigitEntered)) {
                self.onDigitEntered(char);
            }
        };
    }

    function setupActions(flxContainer) {
        var self = this;
        var buttons = flxContainer.widgets();
        buttons.forEach(function(button) {
            setupButton.call(self, button);
        });
    }
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            var self = this;
            setupActions.call(this, this.view.flxKeypadRowOne);
            setupActions.call(this, this.view.flxKeypadRowTwo);
            setupActions.call(this, this.view.flxKeypadRowThree);
            setupButton.call(this, this.view.btnZero);
            this.view.btnDot.onClick = function() {
                if (self.isAPIAvailable(self.onDigitEntered)) {
                    self.onDigitEntered(".");
                }
            };
            this.view.flxClear.onClick = function() {
                if (self.isAPIAvailable(self.onDigitRemoved)) {
                    self.onDigitRemoved();
                }
            };
        },
        initGettersSetters: function() {},
        isAPIAvailable: function(API) {
            return API && (typeof API === "function");
        }
    };
});
define("com/banking/digitkeypad/digitkeypadControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/banking/digitkeypad/digitkeypadController", ["com/banking/digitkeypad/userdigitkeypadController", "com/banking/digitkeypad/digitkeypadControllerActions"], function() {
    var controller = require("com/banking/digitkeypad/userdigitkeypadController");
    var actions = require("com/banking/digitkeypad/digitkeypadControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "isVisible1", function(val) {
            this.view.btnDot.isVisible = val;
        });
        defineGetter(this, "isVisible1", function() {
            return this.view.btnDot.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
