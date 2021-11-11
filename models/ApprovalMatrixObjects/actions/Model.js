/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "actions", "objectService" : "ApprovalMatrixObjects"};

    var setterFunctions = {
        actionDescription: function(val, state) {
            context["field"] = "actionDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["actionDescription"] : null);
            state['actionDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        actionId: function(val, state) {
            context["field"] = "actionId";
            context["metadata"] = (objectMetadata ? objectMetadata["actionId"] : null);
            state['actionId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        actionName: function(val, state) {
            context["field"] = "actionName";
            context["metadata"] = (objectMetadata ? objectMetadata["actionName"] : null);
            state['actionName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function actions(defaultValues) {
        var privateState = {};
        context["field"] = "actionDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["actionDescription"] : null);
        privateState.actionDescription = defaultValues ?
            (defaultValues["actionDescription"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["actionDescription"], context) :
                null) :
            null;

        context["field"] = "actionId";
        context["metadata"] = (objectMetadata ? objectMetadata["actionId"] : null);
        privateState.actionId = defaultValues ?
            (defaultValues["actionId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["actionId"], context) :
                null) :
            null;

        context["field"] = "actionName";
        context["metadata"] = (objectMetadata ? objectMetadata["actionName"] : null);
        privateState.actionName = defaultValues ?
            (defaultValues["actionName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["actionName"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "actionDescription": {
                get: function() {
                    context["field"] = "actionDescription";
                    context["metadata"] = (objectMetadata ? objectMetadata["actionDescription"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.actionDescription, context);
                },
                set: function(val) {
                    setterFunctions['actionDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "actionId": {
                get: function() {
                    context["field"] = "actionId";
                    context["metadata"] = (objectMetadata ? objectMetadata["actionId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.actionId, context);
                },
                set: function(val) {
                    setterFunctions['actionId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "actionName": {
                get: function() {
                    context["field"] = "actionName";
                    context["metadata"] = (objectMetadata ? objectMetadata["actionName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.actionName, context);
                },
                set: function(val) {
                    setterFunctions['actionName'].call(this, val, privateState);
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
            privateState.actionDescription = value ? (value["actionDescription"] ? value["actionDescription"] : null) : null;
            privateState.actionId = value ? (value["actionId"] ? value["actionId"] : null) : null;
            privateState.actionName = value ? (value["actionName"] ? value["actionName"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(actions);

    //Create new class level validator object
    BaseModel.Validator.call(actions);

    var registerValidatorBackup = actions.registerValidator;

    actions.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(actions.isValid(this, propName, val)) {
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

    actions.relations = relations;

    actions.prototype.isValid = function() {
        return actions.isValid(this);
    };

    actions.prototype.objModelName = "actions";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    actions.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("ApprovalMatrixObjects", "actions", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    actions.clone = function(objectToClone) {
        var clonedObj = new actions();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return actions;
});