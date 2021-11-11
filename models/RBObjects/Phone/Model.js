/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Phone", "objectService" : "RBObjects"};

    var setterFunctions = {
        error: function(val, state) {
            context["field"] = "error";
            context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
            state['error'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        extension: function(val, state) {
            context["field"] = "extension";
            context["metadata"] = (objectMetadata ? objectMetadata["extension"] : null);
            state['extension'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPrimary: function(val, state) {
            context["field"] = "isPrimary";
            context["metadata"] = (objectMetadata ? objectMetadata["isPrimary"] : null);
            state['isPrimary'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phoneNumber: function(val, state) {
            context["field"] = "phoneNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["phoneNumber"] : null);
            state['phoneNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Description: function(val, state) {
            context["field"] = "Description";
            context["metadata"] = (objectMetadata ? objectMetadata["Description"] : null);
            state['Description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        result: function(val, state) {
            context["field"] = "result";
            context["metadata"] = (objectMetadata ? objectMetadata["result"] : null);
            state['result'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        IsPreferredContactMethod: function(val, state) {
            context["field"] = "IsPreferredContactMethod";
            context["metadata"] = (objectMetadata ? objectMetadata["IsPreferredContactMethod"] : null);
            state['IsPreferredContactMethod'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PreferredContactTime: function(val, state) {
            context["field"] = "PreferredContactTime";
            context["metadata"] = (objectMetadata ? objectMetadata["PreferredContactTime"] : null);
            state['PreferredContactTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        receivePromotions: function(val, state) {
            context["field"] = "receivePromotions";
            context["metadata"] = (objectMetadata ? objectMetadata["receivePromotions"] : null);
            state['receivePromotions'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        type: function(val, state) {
            context["field"] = "type";
            context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
            state['type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        countryType: function(val, state) {
            context["field"] = "countryType";
            context["metadata"] = (objectMetadata ? objectMetadata["countryType"] : null);
            state['countryType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Phone(defaultValues) {
        var privateState = {};
        context["field"] = "error";
        context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
        privateState.error = defaultValues ?
            (defaultValues["error"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error"], context) :
                null) :
            null;

        context["field"] = "extension";
        context["metadata"] = (objectMetadata ? objectMetadata["extension"] : null);
        privateState.extension = defaultValues ?
            (defaultValues["extension"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["extension"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "isPrimary";
        context["metadata"] = (objectMetadata ? objectMetadata["isPrimary"] : null);
        privateState.isPrimary = defaultValues ?
            (defaultValues["isPrimary"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPrimary"], context) :
                null) :
            null;

        context["field"] = "phoneNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["phoneNumber"] : null);
        privateState.phoneNumber = defaultValues ?
            (defaultValues["phoneNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phoneNumber"], context) :
                null) :
            null;

        context["field"] = "Description";
        context["metadata"] = (objectMetadata ? objectMetadata["Description"] : null);
        privateState.Description = defaultValues ?
            (defaultValues["Description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Description"], context) :
                null) :
            null;

        context["field"] = "result";
        context["metadata"] = (objectMetadata ? objectMetadata["result"] : null);
        privateState.result = defaultValues ?
            (defaultValues["result"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["result"], context) :
                null) :
            null;

        context["field"] = "IsPreferredContactMethod";
        context["metadata"] = (objectMetadata ? objectMetadata["IsPreferredContactMethod"] : null);
        privateState.IsPreferredContactMethod = defaultValues ?
            (defaultValues["IsPreferredContactMethod"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IsPreferredContactMethod"], context) :
                null) :
            null;

        context["field"] = "PreferredContactTime";
        context["metadata"] = (objectMetadata ? objectMetadata["PreferredContactTime"] : null);
        privateState.PreferredContactTime = defaultValues ?
            (defaultValues["PreferredContactTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PreferredContactTime"], context) :
                null) :
            null;

        context["field"] = "receivePromotions";
        context["metadata"] = (objectMetadata ? objectMetadata["receivePromotions"] : null);
        privateState.receivePromotions = defaultValues ?
            (defaultValues["receivePromotions"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["receivePromotions"], context) :
                null) :
            null;

        context["field"] = "type";
        context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
        privateState.type = defaultValues ?
            (defaultValues["type"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["type"], context) :
                null) :
            null;

        context["field"] = "countryType";
        context["metadata"] = (objectMetadata ? objectMetadata["countryType"] : null);
        privateState.countryType = defaultValues ?
            (defaultValues["countryType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["countryType"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "error": {
                get: function() {
                    context["field"] = "error";
                    context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.error, context);
                },
                set: function(val) {
                    setterFunctions['error'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "extension": {
                get: function() {
                    context["field"] = "extension";
                    context["metadata"] = (objectMetadata ? objectMetadata["extension"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.extension, context);
                },
                set: function(val) {
                    setterFunctions['extension'].call(this, val, privateState);
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
            "isPrimary": {
                get: function() {
                    context["field"] = "isPrimary";
                    context["metadata"] = (objectMetadata ? objectMetadata["isPrimary"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isPrimary, context);
                },
                set: function(val) {
                    setterFunctions['isPrimary'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "phoneNumber": {
                get: function() {
                    context["field"] = "phoneNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["phoneNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.phoneNumber, context);
                },
                set: function(val) {
                    setterFunctions['phoneNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Description": {
                get: function() {
                    context["field"] = "Description";
                    context["metadata"] = (objectMetadata ? objectMetadata["Description"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Description, context);
                },
                set: function(val) {
                    setterFunctions['Description'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "result": {
                get: function() {
                    context["field"] = "result";
                    context["metadata"] = (objectMetadata ? objectMetadata["result"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.result, context);
                },
                set: function(val) {
                    setterFunctions['result'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "IsPreferredContactMethod": {
                get: function() {
                    context["field"] = "IsPreferredContactMethod";
                    context["metadata"] = (objectMetadata ? objectMetadata["IsPreferredContactMethod"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IsPreferredContactMethod, context);
                },
                set: function(val) {
                    setterFunctions['IsPreferredContactMethod'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PreferredContactTime": {
                get: function() {
                    context["field"] = "PreferredContactTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["PreferredContactTime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PreferredContactTime, context);
                },
                set: function(val) {
                    setterFunctions['PreferredContactTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "receivePromotions": {
                get: function() {
                    context["field"] = "receivePromotions";
                    context["metadata"] = (objectMetadata ? objectMetadata["receivePromotions"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.receivePromotions, context);
                },
                set: function(val) {
                    setterFunctions['receivePromotions'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "type": {
                get: function() {
                    context["field"] = "type";
                    context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.type, context);
                },
                set: function(val) {
                    setterFunctions['type'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "countryType": {
                get: function() {
                    context["field"] = "countryType";
                    context["metadata"] = (objectMetadata ? objectMetadata["countryType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.countryType, context);
                },
                set: function(val) {
                    setterFunctions['countryType'].call(this, val, privateState);
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
            privateState.error = value ? (value["error"] ? value["error"] : null) : null;
            privateState.extension = value ? (value["extension"] ? value["extension"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.isPrimary = value ? (value["isPrimary"] ? value["isPrimary"] : null) : null;
            privateState.phoneNumber = value ? (value["phoneNumber"] ? value["phoneNumber"] : null) : null;
            privateState.Description = value ? (value["Description"] ? value["Description"] : null) : null;
            privateState.result = value ? (value["result"] ? value["result"] : null) : null;
            privateState.IsPreferredContactMethod = value ? (value["IsPreferredContactMethod"] ? value["IsPreferredContactMethod"] : null) : null;
            privateState.PreferredContactTime = value ? (value["PreferredContactTime"] ? value["PreferredContactTime"] : null) : null;
            privateState.receivePromotions = value ? (value["receivePromotions"] ? value["receivePromotions"] : null) : null;
            privateState.type = value ? (value["type"] ? value["type"] : null) : null;
            privateState.countryType = value ? (value["countryType"] ? value["countryType"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Phone);

    //Create new class level validator object
    BaseModel.Validator.call(Phone);

    var registerValidatorBackup = Phone.registerValidator;

    Phone.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Phone.isValid(this, propName, val)) {
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
    //For Operation 'createPhone' with service id 'createPhone5081'
     Phone.createPhone = function(params, onCompletion){
        return Phone.customVerb('createPhone', params, onCompletion);
     };

    //For Operation 'deletePhone' with service id 'deletePhone4418'
     Phone.deletePhone = function(params, onCompletion){
        return Phone.customVerb('deletePhone', params, onCompletion);
     };

    //For Operation 'getAllPhones' with service id 'getAllPhones4259'
     Phone.getAllPhones = function(params, onCompletion){
        return Phone.customVerb('getAllPhones', params, onCompletion);
     };

    //For Operation 'updatePhone' with service id 'updatePhone8527'
     Phone.updatePhone = function(params, onCompletion){
        return Phone.customVerb('updatePhone', params, onCompletion);
     };

    var relations = [];

    Phone.relations = relations;

    Phone.prototype.isValid = function() {
        return Phone.isValid(this);
    };

    Phone.prototype.objModelName = "Phone";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Phone.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Phone", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Phone.clone = function(objectToClone) {
        var clonedObj = new Phone();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Phone;
});