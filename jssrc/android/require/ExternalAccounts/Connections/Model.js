/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "Connections",
        "objectService": "ExternalAccounts"
    };
    var setterFunctions = {
        digitalProfileId: function(val, state) {
            context["field"] = "digitalProfileId";
            context["metadata"] = (objectMetadata ? objectMetadata["digitalProfileId"] : null);
            state['digitalProfileId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        providerCode: function(val, state) {
            context["field"] = "providerCode";
            context["metadata"] = (objectMetadata ? objectMetadata["providerCode"] : null);
            state['providerCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function Connections(defaultValues) {
        var privateState = {};
        context["field"] = "digitalProfileId";
        context["metadata"] = (objectMetadata ? objectMetadata["digitalProfileId"] : null);
        privateState.digitalProfileId = defaultValues ? (defaultValues["digitalProfileId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["digitalProfileId"], context) : null) : null;
        context["field"] = "providerCode";
        context["metadata"] = (objectMetadata ? objectMetadata["providerCode"] : null);
        privateState.providerCode = defaultValues ? (defaultValues["providerCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["providerCode"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "digitalProfileId": {
                get: function() {
                    context["field"] = "digitalProfileId";
                    context["metadata"] = (objectMetadata ? objectMetadata["digitalProfileId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.digitalProfileId, context);
                },
                set: function(val) {
                    setterFunctions['digitalProfileId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "providerCode": {
                get: function() {
                    context["field"] = "providerCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["providerCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.providerCode, context);
                },
                set: function(val) {
                    setterFunctions['providerCode'].call(this, val, privateState);
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
            privateState.digitalProfileId = value ? (value["digitalProfileId"] ? value["digitalProfileId"] : null) : null;
            privateState.providerCode = value ? (value["providerCode"] ? value["providerCode"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Connections);
    //Create new class level validator object
    BaseModel.Validator.call(Connections);
    var registerValidatorBackup = Connections.registerValidator;
    Connections.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (Connections.isValid(this, propName, val)) {
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
        //For Operation 'loadConnections' with service id 'getConnections4533'
    Connections.loadConnections = function(params, onCompletion) {
        return Connections.customVerb('loadConnections', params, onCompletion);
    };
    //For Operation 'deleteConnections' with service id 'deleteConnection6998'
    Connections.deleteConnections = function(params, onCompletion) {
        return Connections.customVerb('deleteConnections', params, onCompletion);
    };
    var relations = [];
    Connections.relations = relations;
    Connections.prototype.isValid = function() {
        return Connections.isValid(this);
    };
    Connections.prototype.objModelName = "Connections";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Connections.registerProcessors = function(options, successCallback, failureCallback) {
        if (!options) {
            options = {};
        }
        if (options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }
        if (options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }
        kony.mvc.util.ProcessorUtils.getMetadataForObject("ExternalAccounts", "Connections", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    Connections.clone = function(objectToClone) {
        var clonedObj = new Connections();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return Connections;
});