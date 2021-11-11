/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "InterestRates", "objectService" : "RBObjects"};

    var setterFunctions = {
        APY: function(val, state) {
            context["field"] = "APY";
            context["metadata"] = (objectMetadata ? objectMetadata["APY"] : null);
            state['APY'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CDTerm: function(val, state) {
            context["field"] = "CDTerm";
            context["metadata"] = (objectMetadata ? objectMetadata["CDTerm"] : null);
            state['CDTerm'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        minimumDeposit: function(val, state) {
            context["field"] = "minimumDeposit";
            context["metadata"] = (objectMetadata ? objectMetadata["minimumDeposit"] : null);
            state['minimumDeposit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function InterestRates(defaultValues) {
        var privateState = {};
        context["field"] = "APY";
        context["metadata"] = (objectMetadata ? objectMetadata["APY"] : null);
        privateState.APY = defaultValues ?
            (defaultValues["APY"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["APY"], context) :
                null) :
            null;

        context["field"] = "CDTerm";
        context["metadata"] = (objectMetadata ? objectMetadata["CDTerm"] : null);
        privateState.CDTerm = defaultValues ?
            (defaultValues["CDTerm"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CDTerm"], context) :
                null) :
            null;

        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ?
            (defaultValues["errmsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) :
                null) :
            null;

        context["field"] = "minimumDeposit";
        context["metadata"] = (objectMetadata ? objectMetadata["minimumDeposit"] : null);
        privateState.minimumDeposit = defaultValues ?
            (defaultValues["minimumDeposit"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["minimumDeposit"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "APY": {
                get: function() {
                    context["field"] = "APY";
                    context["metadata"] = (objectMetadata ? objectMetadata["APY"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.APY, context);
                },
                set: function(val) {
                    setterFunctions['APY'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CDTerm": {
                get: function() {
                    context["field"] = "CDTerm";
                    context["metadata"] = (objectMetadata ? objectMetadata["CDTerm"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CDTerm, context);
                },
                set: function(val) {
                    setterFunctions['CDTerm'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "errmsg": {
                get: function() {
                    context["field"] = "errmsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errmsg, context);
                },
                set: function(val) {
                    setterFunctions['errmsg'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "minimumDeposit": {
                get: function() {
                    context["field"] = "minimumDeposit";
                    context["metadata"] = (objectMetadata ? objectMetadata["minimumDeposit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.minimumDeposit, context);
                },
                set: function(val) {
                    setterFunctions['minimumDeposit'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.APY = value ? (value["APY"] ? value["APY"] : null) : null;
            privateState.CDTerm = value ? (value["CDTerm"] ? value["CDTerm"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.minimumDeposit = value ? (value["minimumDeposit"] ? value["minimumDeposit"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(InterestRates);

    //Create new class level validator object
    BaseModel.Validator.call(InterestRates);

    var registerValidatorBackup = InterestRates.registerValidator;

    InterestRates.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(InterestRates.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    var relations = [];

    InterestRates.relations = relations;

    InterestRates.prototype.isValid = function() {
        return InterestRates.isValid(this);
    };

    InterestRates.prototype.objModelName = "InterestRates";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    InterestRates.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "InterestRates", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    InterestRates.clone = function(objectToClone) {
        var clonedObj = new InterestRates();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return InterestRates;
});