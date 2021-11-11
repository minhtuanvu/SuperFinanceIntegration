define("com/temenos/infinity/termsAndConditions/usertermsAndConditionsController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            //contracts declarations
            //General
            this._tnc = "";
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            //setter method for tnc in the group:General
            defineSetter(this, "tnc", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._tnc = val;
                }
            });
            //getter method for tnc in the group:General
            defineGetter(this, "tnc", function() {
                return this._tnc;
            });
        },
        /**
         * Component setContext.
         * Responsible to setting the context
         */
        setContext: function(context) {
            this._context = context;
        },
        /**
         * setParentScope.
         * This Method is exposed to the form to pass the Form Scope.
         */
        setParentScope: function(scope) {
            this._parentScope = scope;
        },
        /**
         * Component preShow.
         */
        preshow: function() {
            this.view.rtxTermsConditionsValue.text = this._tnc;
        },
    };
});
define("com/temenos/infinity/termsAndConditions/termsAndConditionsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_e5b9c23cbeb04880ae15f408175864be: function AS_FlexContainer_e5b9c23cbeb04880ae15f408175864be(eventobject) {
        var self = this;
        return self.preshow.call(this);
    }
});
define("com/temenos/infinity/termsAndConditions/termsAndConditionsController", ["com/temenos/infinity/termsAndConditions/usertermsAndConditionsController", "com/temenos/infinity/termsAndConditions/termsAndConditionsControllerActions"], function() {
    var controller = require("com/temenos/infinity/termsAndConditions/usertermsAndConditionsController");
    var actions = require("com/temenos/infinity/termsAndConditions/termsAndConditionsControllerActions");
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
