define("com/SuperFinance/StepsHeaderSF/userStepsHeaderSFController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("com/SuperFinance/StepsHeaderSF/StepsHeaderSFControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/SuperFinance/StepsHeaderSF/StepsHeaderSFController", ["com/SuperFinance/StepsHeaderSF/userStepsHeaderSFController", "com/SuperFinance/StepsHeaderSF/StepsHeaderSFControllerActions"], function() {
    var controller = require("com/SuperFinance/StepsHeaderSF/userStepsHeaderSFController");
    var actions = require("com/SuperFinance/StepsHeaderSF/StepsHeaderSFControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "stepNotext", function(val) {
            this.view.lblStepsNoSF.text = val;
        });
        defineGetter(this, "stepNotext", function() {
            return this.view.lblStepsNoSF.text;
        });
        defineSetter(this, "indicatorWidth", function(val) {
            this.view.flxStep1SF.width = val;
        });
        defineGetter(this, "indicatorWidth", function() {
            return this.view.flxStep1SF.width;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
