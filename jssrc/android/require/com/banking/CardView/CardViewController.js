define("com/banking/CardView/userCardViewController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        initGettersSetters: function() {},
        setI18Text: function(i18Key) {
            this.setText(kony.i18n.getLocalizedString(i18Key));
        },
        setText: function(text) {
            this.view.rtxCardView.text = text;
        },
        onHandleClick: function() {
            if (this.isAPIInitialized(this.onSelected)) {
                this.onSelected();
            }
        },
        isAPIInitialized: function(API) {
            return API && (typeof API === "function");
        }
    };
});
define("com/banking/CardView/CardViewControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_a1907d08991a477fa21fb5705bac4e86: function AS_FlexContainer_a1907d08991a477fa21fb5705bac4e86(eventobject, x, y) {
        var self = this;
        return self.onHandleClick.call(this);
    }
});
define("com/banking/CardView/CardViewController", ["com/banking/CardView/userCardViewController", "com/banking/CardView/CardViewControllerActions"], function() {
    var controller = require("com/banking/CardView/userCardViewController");
    var actions = require("com/banking/CardView/CardViewControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "src", function(val) {
            this.view.imgIcon.src = val;
        });
        defineGetter(this, "src", function() {
            return this.view.imgIcon.src;
        });
        defineSetter(this, "text", function(val) {
            this.view.rtxCardView.text = val;
        });
        defineGetter(this, "text", function() {
            return this.view.rtxCardView.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
