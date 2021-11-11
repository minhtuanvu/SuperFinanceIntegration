/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "Holidays",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        holidays: function(val, state) {
            context["field"] = "holidays";
            context["metadata"] = (objectMetadata ? objectMetadata["holidays"] : null);
            state['holidays'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        createdOn: function(val, state) {
            context["field"] = "createdOn";
            context["metadata"] = (objectMetadata ? objectMetadata["createdOn"] : null);
            state['createdOn'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        updatedOn: function(val, state) {
            context["field"] = "updatedOn";
            context["metadata"] = (objectMetadata ? objectMetadata["updatedOn"] : null);
            state['updatedOn'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        createdBy: function(val, state) {
            context["field"] = "createdBy";
            context["metadata"] = (objectMetadata ? objectMetadata["createdBy"] : null);
            state['createdBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        updatedBy: function(val, state) {
            context["field"] = "updatedBy";
            context["metadata"] = (objectMetadata ? objectMetadata["updatedBy"] : null);
            state['updatedBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        holidayDate: function(val, state) {
            context["field"] = "holidayDate";
            context["metadata"] = (objectMetadata ? objectMetadata["holidayDate"] : null);
            state['holidayDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function Holidays(defaultValues) {
        var privateState = {};
        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ? (defaultValues["id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) : null) : null;
        context["field"] = "holidays";
        context["metadata"] = (objectMetadata ? objectMetadata["holidays"] : null);
        privateState.holidays = defaultValues ? (defaultValues["holidays"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["holidays"], context) : null) : null;
        context["field"] = "createdOn";
        context["metadata"] = (objectMetadata ? objectMetadata["createdOn"] : null);
        privateState.createdOn = defaultValues ? (defaultValues["createdOn"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["createdOn"], context) : null) : null;
        context["field"] = "updatedOn";
        context["metadata"] = (objectMetadata ? objectMetadata["updatedOn"] : null);
        privateState.updatedOn = defaultValues ? (defaultValues["updatedOn"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["updatedOn"], context) : null) : null;
        context["field"] = "createdBy";
        context["metadata"] = (objectMetadata ? objectMetadata["createdBy"] : null);
        privateState.createdBy = defaultValues ? (defaultValues["createdBy"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["createdBy"], context) : null) : null;
        context["field"] = "updatedBy";
        context["metadata"] = (objectMetadata ? objectMetadata["updatedBy"] : null);
        privateState.updatedBy = defaultValues ? (defaultValues["updatedBy"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["updatedBy"], context) : null) : null;
        context["field"] = "holidayDate";
        context["metadata"] = (objectMetadata ? objectMetadata["holidayDate"] : null);
        privateState.holidayDate = defaultValues ? (defaultValues["holidayDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["holidayDate"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "id": {
                get: function() {
                    context["field"] = "id";
                    context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);
                },
                set: function(val) {
                    setterFunctions['id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "holidays": {
                get: function() {
                    context["field"] = "holidays";
                    context["metadata"] = (objectMetadata ? objectMetadata["holidays"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.holidays, context);
                },
                set: function(val) {
                    setterFunctions['holidays'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "createdOn": {
                get: function() {
                    context["field"] = "createdOn";
                    context["metadata"] = (objectMetadata ? objectMetadata["createdOn"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.createdOn, context);
                },
                set: function(val) {
                    setterFunctions['createdOn'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "updatedOn": {
                get: function() {
                    context["field"] = "updatedOn";
                    context["metadata"] = (objectMetadata ? objectMetadata["updatedOn"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.updatedOn, context);
                },
                set: function(val) {
                    setterFunctions['updatedOn'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "createdBy": {
                get: function() {
                    context["field"] = "createdBy";
                    context["metadata"] = (objectMetadata ? objectMetadata["createdBy"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.createdBy, context);
                },
                set: function(val) {
                    setterFunctions['createdBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "updatedBy": {
                get: function() {
                    context["field"] = "updatedBy";
                    context["metadata"] = (objectMetadata ? objectMetadata["updatedBy"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.updatedBy, context);
                },
                set: function(val) {
                    setterFunctions['updatedBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "holidayDate": {
                get: function() {
                    context["field"] = "holidayDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["holidayDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.holidayDate, context);
                },
                set: function(val) {
                    setterFunctions['holidayDate'].call(this, val, privateState);
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
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.holidays = value ? (value["holidays"] ? value["holidays"] : null) : null;
            privateState.createdOn = value ? (value["createdOn"] ? value["createdOn"] : null) : null;
            privateState.updatedOn = value ? (value["updatedOn"] ? value["updatedOn"] : null) : null;
            privateState.createdBy = value ? (value["createdBy"] ? value["createdBy"] : null) : null;
            privateState.updatedBy = value ? (value["updatedBy"] ? value["updatedBy"] : null) : null;
            privateState.holidayDate = value ? (value["holidayDate"] ? value["holidayDate"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Holidays);
    //Create new class level validator object
    BaseModel.Validator.call(Holidays);
    var registerValidatorBackup = Holidays.registerValidator;
    Holidays.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (Holidays.isValid(this, propName, val)) {
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
    Holidays.relations = relations;
    Holidays.prototype.isValid = function() {
        return Holidays.isValid(this);
    };
    Holidays.prototype.objModelName = "Holidays";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Holidays.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Holidays", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    Holidays.clone = function(objectToClone) {
        var clonedObj = new Holidays();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return Holidays;
});