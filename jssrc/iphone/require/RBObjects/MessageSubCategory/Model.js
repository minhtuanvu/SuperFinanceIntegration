/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "MessageSubCategory",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        categoryId: function(val, state) {
            context["field"] = "categoryId";
            context["metadata"] = (objectMetadata ? objectMetadata["categoryId"] : null);
            state['categoryId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        subcategoryId: function(val, state) {
            context["field"] = "subcategoryId";
            context["metadata"] = (objectMetadata ? objectMetadata["subcategoryId"] : null);
            state['subcategoryId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        subcategoryName: function(val, state) {
            context["field"] = "subcategoryName";
            context["metadata"] = (objectMetadata ? objectMetadata["subcategoryName"] : null);
            state['subcategoryName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function MessageSubCategory(defaultValues) {
        var privateState = {};
        context["field"] = "categoryId";
        context["metadata"] = (objectMetadata ? objectMetadata["categoryId"] : null);
        privateState.categoryId = defaultValues ? (defaultValues["categoryId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["categoryId"], context) : null) : null;
        context["field"] = "subcategoryId";
        context["metadata"] = (objectMetadata ? objectMetadata["subcategoryId"] : null);
        privateState.subcategoryId = defaultValues ? (defaultValues["subcategoryId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["subcategoryId"], context) : null) : null;
        context["field"] = "subcategoryName";
        context["metadata"] = (objectMetadata ? objectMetadata["subcategoryName"] : null);
        privateState.subcategoryName = defaultValues ? (defaultValues["subcategoryName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["subcategoryName"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "categoryId": {
                get: function() {
                    context["field"] = "categoryId";
                    context["metadata"] = (objectMetadata ? objectMetadata["categoryId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.categoryId, context);
                },
                set: function(val) {
                    setterFunctions['categoryId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "subcategoryId": {
                get: function() {
                    context["field"] = "subcategoryId";
                    context["metadata"] = (objectMetadata ? objectMetadata["subcategoryId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.subcategoryId, context);
                },
                set: function(val) {
                    setterFunctions['subcategoryId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "subcategoryName": {
                get: function() {
                    context["field"] = "subcategoryName";
                    context["metadata"] = (objectMetadata ? objectMetadata["subcategoryName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.subcategoryName, context);
                },
                set: function(val) {
                    setterFunctions['subcategoryName'].call(this, val, privateState);
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
            privateState.categoryId = value ? (value["categoryId"] ? value["categoryId"] : null) : null;
            privateState.subcategoryId = value ? (value["subcategoryId"] ? value["subcategoryId"] : null) : null;
            privateState.subcategoryName = value ? (value["subcategoryName"] ? value["subcategoryName"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(MessageSubCategory);
    //Create new class level validator object
    BaseModel.Validator.call(MessageSubCategory);
    var registerValidatorBackup = MessageSubCategory.registerValidator;
    MessageSubCategory.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (MessageSubCategory.isValid(this, propName, val)) {
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
    MessageSubCategory.relations = relations;
    MessageSubCategory.prototype.isValid = function() {
        return MessageSubCategory.isValid(this);
    };
    MessageSubCategory.prototype.objModelName = "MessageSubCategory";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    MessageSubCategory.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "MessageSubCategory", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    MessageSubCategory.clone = function(objectToClone) {
        var clonedObj = new MessageSubCategory();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return MessageSubCategory;
});