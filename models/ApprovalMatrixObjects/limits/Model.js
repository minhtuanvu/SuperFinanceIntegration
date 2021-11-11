/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "limits", "objectService" : "ApprovalMatrixObjects"};

    var setterFunctions = {
        approvalRuleId: function(val, state) {
            context["field"] = "approvalRuleId";
            context["metadata"] = (objectMetadata ? objectMetadata["approvalRuleId"] : null);
            state['approvalRuleId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        approvalRuleName: function(val, state) {
            context["field"] = "approvalRuleName";
            context["metadata"] = (objectMetadata ? objectMetadata["approvalRuleName"] : null);
            state['approvalRuleName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lowerlimit: function(val, state) {
            context["field"] = "lowerlimit";
            context["metadata"] = (objectMetadata ? objectMetadata["lowerlimit"] : null);
            state['lowerlimit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        numberOfApprovals: function(val, state) {
            context["field"] = "numberOfApprovals";
            context["metadata"] = (objectMetadata ? objectMetadata["numberOfApprovals"] : null);
            state['numberOfApprovals'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        upperlimit: function(val, state) {
            context["field"] = "upperlimit";
            context["metadata"] = (objectMetadata ? objectMetadata["upperlimit"] : null);
            state['upperlimit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function limits(defaultValues) {
        var privateState = {};
        context["field"] = "approvalRuleId";
        context["metadata"] = (objectMetadata ? objectMetadata["approvalRuleId"] : null);
        privateState.approvalRuleId = defaultValues ?
            (defaultValues["approvalRuleId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["approvalRuleId"], context) :
                null) :
            null;

        context["field"] = "approvalRuleName";
        context["metadata"] = (objectMetadata ? objectMetadata["approvalRuleName"] : null);
        privateState.approvalRuleName = defaultValues ?
            (defaultValues["approvalRuleName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["approvalRuleName"], context) :
                null) :
            null;

        context["field"] = "lowerlimit";
        context["metadata"] = (objectMetadata ? objectMetadata["lowerlimit"] : null);
        privateState.lowerlimit = defaultValues ?
            (defaultValues["lowerlimit"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lowerlimit"], context) :
                null) :
            null;

        context["field"] = "numberOfApprovals";
        context["metadata"] = (objectMetadata ? objectMetadata["numberOfApprovals"] : null);
        privateState.numberOfApprovals = defaultValues ?
            (defaultValues["numberOfApprovals"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["numberOfApprovals"], context) :
                null) :
            null;

        context["field"] = "upperlimit";
        context["metadata"] = (objectMetadata ? objectMetadata["upperlimit"] : null);
        privateState.upperlimit = defaultValues ?
            (defaultValues["upperlimit"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["upperlimit"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "approvalRuleId": {
                get: function() {
                    context["field"] = "approvalRuleId";
                    context["metadata"] = (objectMetadata ? objectMetadata["approvalRuleId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.approvalRuleId, context);
                },
                set: function(val) {
                    setterFunctions['approvalRuleId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "approvalRuleName": {
                get: function() {
                    context["field"] = "approvalRuleName";
                    context["metadata"] = (objectMetadata ? objectMetadata["approvalRuleName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.approvalRuleName, context);
                },
                set: function(val) {
                    setterFunctions['approvalRuleName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lowerlimit": {
                get: function() {
                    context["field"] = "lowerlimit";
                    context["metadata"] = (objectMetadata ? objectMetadata["lowerlimit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lowerlimit, context);
                },
                set: function(val) {
                    setterFunctions['lowerlimit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "numberOfApprovals": {
                get: function() {
                    context["field"] = "numberOfApprovals";
                    context["metadata"] = (objectMetadata ? objectMetadata["numberOfApprovals"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.numberOfApprovals, context);
                },
                set: function(val) {
                    setterFunctions['numberOfApprovals'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "upperlimit": {
                get: function() {
                    context["field"] = "upperlimit";
                    context["metadata"] = (objectMetadata ? objectMetadata["upperlimit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.upperlimit, context);
                },
                set: function(val) {
                    setterFunctions['upperlimit'].call(this, val, privateState);
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
            privateState.approvalRuleId = value ? (value["approvalRuleId"] ? value["approvalRuleId"] : null) : null;
            privateState.approvalRuleName = value ? (value["approvalRuleName"] ? value["approvalRuleName"] : null) : null;
            privateState.lowerlimit = value ? (value["lowerlimit"] ? value["lowerlimit"] : null) : null;
            privateState.numberOfApprovals = value ? (value["numberOfApprovals"] ? value["numberOfApprovals"] : null) : null;
            privateState.upperlimit = value ? (value["upperlimit"] ? value["upperlimit"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(limits);

    //Create new class level validator object
    BaseModel.Validator.call(limits);

    var registerValidatorBackup = limits.registerValidator;

    limits.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(limits.isValid(this, propName, val)) {
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

    limits.relations = relations;

    limits.prototype.isValid = function() {
        return limits.isValid(this);
    };

    limits.prototype.objModelName = "limits";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    limits.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("ApprovalMatrixObjects", "limits", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    limits.clone = function(objectToClone) {
        var clonedObj = new limits();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return limits;
});