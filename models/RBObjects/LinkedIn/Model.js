/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "LinkedIn", "objectService" : "RBObjects"};

    var setterFunctions = {
        company: function(val, state) {
            context["field"] = "company";
            context["metadata"] = (objectMetadata ? objectMetadata["company"] : null);
            state['company'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        firstName: function(val, state) {
            context["field"] = "firstName";
            context["metadata"] = (objectMetadata ? objectMetadata["firstName"] : null);
            state['firstName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastName: function(val, state) {
            context["field"] = "lastName";
            context["metadata"] = (objectMetadata ? objectMetadata["lastName"] : null);
            state['lastName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        startDate: function(val, state) {
            context["field"] = "startDate";
            context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
            state['startDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        title: function(val, state) {
            context["field"] = "title";
            context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
            state['title'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function LinkedIn(defaultValues) {
        var privateState = {};
        context["field"] = "company";
        context["metadata"] = (objectMetadata ? objectMetadata["company"] : null);
        privateState.company = defaultValues ?
            (defaultValues["company"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["company"], context) :
                null) :
            null;

        context["field"] = "firstName";
        context["metadata"] = (objectMetadata ? objectMetadata["firstName"] : null);
        privateState.firstName = defaultValues ?
            (defaultValues["firstName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["firstName"], context) :
                null) :
            null;

        context["field"] = "lastName";
        context["metadata"] = (objectMetadata ? objectMetadata["lastName"] : null);
        privateState.lastName = defaultValues ?
            (defaultValues["lastName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastName"], context) :
                null) :
            null;

        context["field"] = "startDate";
        context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
        privateState.startDate = defaultValues ?
            (defaultValues["startDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["startDate"], context) :
                null) :
            null;

        context["field"] = "title";
        context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
        privateState.title = defaultValues ?
            (defaultValues["title"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["title"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "company": {
                get: function() {
                    context["field"] = "company";
                    context["metadata"] = (objectMetadata ? objectMetadata["company"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.company, context);
                },
                set: function(val) {
                    setterFunctions['company'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "firstName": {
                get: function() {
                    context["field"] = "firstName";
                    context["metadata"] = (objectMetadata ? objectMetadata["firstName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.firstName, context);
                },
                set: function(val) {
                    setterFunctions['firstName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastName": {
                get: function() {
                    context["field"] = "lastName";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastName, context);
                },
                set: function(val) {
                    setterFunctions['lastName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "startDate": {
                get: function() {
                    context["field"] = "startDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.startDate, context);
                },
                set: function(val) {
                    setterFunctions['startDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "title": {
                get: function() {
                    context["field"] = "title";
                    context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.title, context);
                },
                set: function(val) {
                    setterFunctions['title'].call(this, val, privateState);
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
            privateState.company = value ? (value["company"] ? value["company"] : null) : null;
            privateState.firstName = value ? (value["firstName"] ? value["firstName"] : null) : null;
            privateState.lastName = value ? (value["lastName"] ? value["lastName"] : null) : null;
            privateState.startDate = value ? (value["startDate"] ? value["startDate"] : null) : null;
            privateState.title = value ? (value["title"] ? value["title"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(LinkedIn);

    //Create new class level validator object
    BaseModel.Validator.call(LinkedIn);

    var registerValidatorBackup = LinkedIn.registerValidator;

    LinkedIn.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(LinkedIn.isValid(this, propName, val)) {
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

    LinkedIn.relations = relations;

    LinkedIn.prototype.isValid = function() {
        return LinkedIn.isValid(this);
    };

    LinkedIn.prototype.objModelName = "LinkedIn";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    LinkedIn.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "LinkedIn", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    LinkedIn.clone = function(objectToClone) {
        var clonedObj = new LinkedIn();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return LinkedIn;
});