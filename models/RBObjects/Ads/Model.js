/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Ads", "objectService" : "RBObjects"};

    var setterFunctions = {
        action1: function(val, state) {
            context["field"] = "action1";
            context["metadata"] = (objectMetadata ? objectMetadata["action1"] : null);
            state['action1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        action2: function(val, state) {
            context["field"] = "action2";
            context["metadata"] = (objectMetadata ? objectMetadata["action2"] : null);
            state['action2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        actionType: function(val, state) {
            context["field"] = "actionType";
            context["metadata"] = (objectMetadata ? objectMetadata["actionType"] : null);
            state['actionType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        adType: function(val, state) {
            context["field"] = "adType";
            context["metadata"] = (objectMetadata ? objectMetadata["adType"] : null);
            state['adType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        description: function(val, state) {
            context["field"] = "description";
            context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
            state['description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        imageURL: function(val, state) {
            context["field"] = "imageURL";
            context["metadata"] = (objectMetadata ? objectMetadata["imageURL"] : null);
            state['imageURL'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        imageURL2: function(val, state) {
            context["field"] = "imageURL2";
            context["metadata"] = (objectMetadata ? objectMetadata["imageURL2"] : null);
            state['imageURL2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        title: function(val, state) {
            context["field"] = "title";
            context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
            state['title'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Ads(defaultValues) {
        var privateState = {};
        context["field"] = "action1";
        context["metadata"] = (objectMetadata ? objectMetadata["action1"] : null);
        privateState.action1 = defaultValues ?
            (defaultValues["action1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["action1"], context) :
                null) :
            null;

        context["field"] = "action2";
        context["metadata"] = (objectMetadata ? objectMetadata["action2"] : null);
        privateState.action2 = defaultValues ?
            (defaultValues["action2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["action2"], context) :
                null) :
            null;

        context["field"] = "actionType";
        context["metadata"] = (objectMetadata ? objectMetadata["actionType"] : null);
        privateState.actionType = defaultValues ?
            (defaultValues["actionType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["actionType"], context) :
                null) :
            null;

        context["field"] = "adType";
        context["metadata"] = (objectMetadata ? objectMetadata["adType"] : null);
        privateState.adType = defaultValues ?
            (defaultValues["adType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["adType"], context) :
                null) :
            null;

        context["field"] = "description";
        context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
        privateState.description = defaultValues ?
            (defaultValues["description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["description"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "imageURL";
        context["metadata"] = (objectMetadata ? objectMetadata["imageURL"] : null);
        privateState.imageURL = defaultValues ?
            (defaultValues["imageURL"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["imageURL"], context) :
                null) :
            null;

        context["field"] = "imageURL2";
        context["metadata"] = (objectMetadata ? objectMetadata["imageURL2"] : null);
        privateState.imageURL2 = defaultValues ?
            (defaultValues["imageURL2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["imageURL2"], context) :
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
            "action1": {
                get: function() {
                    context["field"] = "action1";
                    context["metadata"] = (objectMetadata ? objectMetadata["action1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.action1, context);
                },
                set: function(val) {
                    setterFunctions['action1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "action2": {
                get: function() {
                    context["field"] = "action2";
                    context["metadata"] = (objectMetadata ? objectMetadata["action2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.action2, context);
                },
                set: function(val) {
                    setterFunctions['action2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "actionType": {
                get: function() {
                    context["field"] = "actionType";
                    context["metadata"] = (objectMetadata ? objectMetadata["actionType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.actionType, context);
                },
                set: function(val) {
                    setterFunctions['actionType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "adType": {
                get: function() {
                    context["field"] = "adType";
                    context["metadata"] = (objectMetadata ? objectMetadata["adType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.adType, context);
                },
                set: function(val) {
                    setterFunctions['adType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "description": {
                get: function() {
                    context["field"] = "description";
                    context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.description, context);
                },
                set: function(val) {
                    setterFunctions['description'].call(this, val, privateState);
                },
                enumerable: true,
            },
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
            "imageURL": {
                get: function() {
                    context["field"] = "imageURL";
                    context["metadata"] = (objectMetadata ? objectMetadata["imageURL"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.imageURL, context);
                },
                set: function(val) {
                    setterFunctions['imageURL'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "imageURL2": {
                get: function() {
                    context["field"] = "imageURL2";
                    context["metadata"] = (objectMetadata ? objectMetadata["imageURL2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.imageURL2, context);
                },
                set: function(val) {
                    setterFunctions['imageURL2'].call(this, val, privateState);
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
            privateState.action1 = value ? (value["action1"] ? value["action1"] : null) : null;
            privateState.action2 = value ? (value["action2"] ? value["action2"] : null) : null;
            privateState.actionType = value ? (value["actionType"] ? value["actionType"] : null) : null;
            privateState.adType = value ? (value["adType"] ? value["adType"] : null) : null;
            privateState.description = value ? (value["description"] ? value["description"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.imageURL = value ? (value["imageURL"] ? value["imageURL"] : null) : null;
            privateState.imageURL2 = value ? (value["imageURL2"] ? value["imageURL2"] : null) : null;
            privateState.title = value ? (value["title"] ? value["title"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Ads);

    //Create new class level validator object
    BaseModel.Validator.call(Ads);

    var registerValidatorBackup = Ads.registerValidator;

    Ads.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Ads.isValid(this, propName, val)) {
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

    Ads.relations = relations;

    Ads.prototype.isValid = function() {
        return Ads.isValid(this);
    };

    Ads.prototype.objModelName = "Ads";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Ads.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Ads", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Ads.clone = function(objectToClone) {
        var clonedObj = new Ads();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Ads;
});