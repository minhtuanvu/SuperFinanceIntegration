/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "uploadDocuments", "objectService" : "RBObjects"};

    var setterFunctions = {
        document: function(val, state) {
            context["field"] = "document";
            context["metadata"] = (objectMetadata ? objectMetadata["document"] : null);
            state['document'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        documentType: function(val, state) {
            context["field"] = "documentType";
            context["metadata"] = (objectMetadata ? objectMetadata["documentType"] : null);
            state['documentType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function uploadDocuments(defaultValues) {
        var privateState = {};
        context["field"] = "document";
        context["metadata"] = (objectMetadata ? objectMetadata["document"] : null);
        privateState.document = defaultValues ?
            (defaultValues["document"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["document"], context) :
                null) :
            null;

        context["field"] = "documentType";
        context["metadata"] = (objectMetadata ? objectMetadata["documentType"] : null);
        privateState.documentType = defaultValues ?
            (defaultValues["documentType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["documentType"], context) :
                null) :
            null;

        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ?
            (defaultValues["errmsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) :
                null) :
            null;

        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ?
            (defaultValues["success"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "document": {
                get: function() {
                    context["field"] = "document";
                    context["metadata"] = (objectMetadata ? objectMetadata["document"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.document, context);
                },
                set: function(val) {
                    setterFunctions['document'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "documentType": {
                get: function() {
                    context["field"] = "documentType";
                    context["metadata"] = (objectMetadata ? objectMetadata["documentType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.documentType, context);
                },
                set: function(val) {
                    setterFunctions['documentType'].call(this, val, privateState);
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
            "success": {
                get: function() {
                    context["field"] = "success";
                    context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.success, context);
                },
                set: function(val) {
                    setterFunctions['success'].call(this, val, privateState);
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
            privateState.document = value ? (value["document"] ? value["document"] : null) : null;
            privateState.documentType = value ? (value["documentType"] ? value["documentType"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(uploadDocuments);

    //Create new class level validator object
    BaseModel.Validator.call(uploadDocuments);

    var registerValidatorBackup = uploadDocuments.registerValidator;

    uploadDocuments.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(uploadDocuments.isValid(this, propName, val)) {
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

    uploadDocuments.relations = relations;

    uploadDocuments.prototype.isValid = function() {
        return uploadDocuments.isValid(this);
    };

    uploadDocuments.prototype.objModelName = "uploadDocuments";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    uploadDocuments.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "uploadDocuments", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    uploadDocuments.clone = function(objectToClone) {
        var clonedObj = new uploadDocuments();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return uploadDocuments;
});