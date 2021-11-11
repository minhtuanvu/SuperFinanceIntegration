/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "approvers",
        "objectService": "ApprovalMatrixObjects"
    };
    var setterFunctions = {
        approverId: function(val, state) {
            context["field"] = "approverId";
            context["metadata"] = (objectMetadata ? objectMetadata["approverId"] : null);
            state['approverId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        approverName: function(val, state) {
            context["field"] = "approverName";
            context["metadata"] = (objectMetadata ? objectMetadata["approverName"] : null);
            state['approverName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function approvers(defaultValues) {
        var privateState = {};
        context["field"] = "approverId";
        context["metadata"] = (objectMetadata ? objectMetadata["approverId"] : null);
        privateState.approverId = defaultValues ? (defaultValues["approverId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["approverId"], context) : null) : null;
        context["field"] = "approverName";
        context["metadata"] = (objectMetadata ? objectMetadata["approverName"] : null);
        privateState.approverName = defaultValues ? (defaultValues["approverName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["approverName"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "approverId": {
                get: function() {
                    context["field"] = "approverId";
                    context["metadata"] = (objectMetadata ? objectMetadata["approverId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.approverId, context);
                },
                set: function(val) {
                    setterFunctions['approverId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "approverName": {
                get: function() {
                    context["field"] = "approverName";
                    context["metadata"] = (objectMetadata ? objectMetadata["approverName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.approverName, context);
                },
                set: function(val) {
                    setterFunctions['approverName'].call(this, val, privateState);
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
            privateState.approverId = value ? (value["approverId"] ? value["approverId"] : null) : null;
            privateState.approverName = value ? (value["approverName"] ? value["approverName"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(approvers);
    //Create new class level validator object
    BaseModel.Validator.call(approvers);
    var registerValidatorBackup = approvers.registerValidator;
    approvers.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (approvers.isValid(this, propName, val)) {
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
    approvers.relations = relations;
    approvers.prototype.isValid = function() {
        return approvers.isValid(this);
    };
    approvers.prototype.objModelName = "approvers";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    approvers.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("ApprovalMatrixObjects", "approvers", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    approvers.clone = function(objectToClone) {
        var clonedObj = new approvers();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return approvers;
});