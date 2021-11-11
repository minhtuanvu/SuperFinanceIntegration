/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ExternalBanks", "objectService" : "AccountAggregation"};

    var setterFunctions = {
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        BankName: function(val, state) {
            context["field"] = "BankName";
            context["metadata"] = (objectMetadata ? objectMetadata["BankName"] : null);
            state['BankName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        IdentityProvider: function(val, state) {
            context["field"] = "IdentityProvider";
            context["metadata"] = (objectMetadata ? objectMetadata["IdentityProvider"] : null);
            state['IdentityProvider'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Scheme: function(val, state) {
            context["field"] = "Scheme";
            context["metadata"] = (objectMetadata ? objectMetadata["Scheme"] : null);
            state['Scheme'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Address: function(val, state) {
            context["field"] = "Address";
            context["metadata"] = (objectMetadata ? objectMetadata["Address"] : null);
            state['Address'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Description: function(val, state) {
            context["field"] = "Description";
            context["metadata"] = (objectMetadata ? objectMetadata["Description"] : null);
            state['Description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Oauth2: function(val, state) {
            context["field"] = "Oauth2";
            context["metadata"] = (objectMetadata ? objectMetadata["Oauth2"] : null);
            state['Oauth2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        logo: function(val, state) {
            context["field"] = "logo";
            context["metadata"] = (objectMetadata ? objectMetadata["logo"] : null);
            state['logo'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function ExternalBanks(defaultValues) {
        var privateState = {};
        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "BankName";
        context["metadata"] = (objectMetadata ? objectMetadata["BankName"] : null);
        privateState.BankName = defaultValues ?
            (defaultValues["BankName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["BankName"], context) :
                null) :
            null;

        context["field"] = "IdentityProvider";
        context["metadata"] = (objectMetadata ? objectMetadata["IdentityProvider"] : null);
        privateState.IdentityProvider = defaultValues ?
            (defaultValues["IdentityProvider"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IdentityProvider"], context) :
                null) :
            null;

        context["field"] = "Scheme";
        context["metadata"] = (objectMetadata ? objectMetadata["Scheme"] : null);
        privateState.Scheme = defaultValues ?
            (defaultValues["Scheme"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Scheme"], context) :
                null) :
            null;

        context["field"] = "Address";
        context["metadata"] = (objectMetadata ? objectMetadata["Address"] : null);
        privateState.Address = defaultValues ?
            (defaultValues["Address"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Address"], context) :
                null) :
            null;

        context["field"] = "Description";
        context["metadata"] = (objectMetadata ? objectMetadata["Description"] : null);
        privateState.Description = defaultValues ?
            (defaultValues["Description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Description"], context) :
                null) :
            null;

        context["field"] = "Oauth2";
        context["metadata"] = (objectMetadata ? objectMetadata["Oauth2"] : null);
        privateState.Oauth2 = defaultValues ?
            (defaultValues["Oauth2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Oauth2"], context) :
                null) :
            null;

        context["field"] = "logo";
        context["metadata"] = (objectMetadata ? objectMetadata["logo"] : null);
        privateState.logo = defaultValues ?
            (defaultValues["logo"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["logo"], context) :
                null) :
            null;


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
            "BankName": {
                get: function() {
                    context["field"] = "BankName";
                    context["metadata"] = (objectMetadata ? objectMetadata["BankName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.BankName, context);
                },
                set: function(val) {
                    setterFunctions['BankName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "IdentityProvider": {
                get: function() {
                    context["field"] = "IdentityProvider";
                    context["metadata"] = (objectMetadata ? objectMetadata["IdentityProvider"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IdentityProvider, context);
                },
                set: function(val) {
                    setterFunctions['IdentityProvider'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Scheme": {
                get: function() {
                    context["field"] = "Scheme";
                    context["metadata"] = (objectMetadata ? objectMetadata["Scheme"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Scheme, context);
                },
                set: function(val) {
                    setterFunctions['Scheme'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Address": {
                get: function() {
                    context["field"] = "Address";
                    context["metadata"] = (objectMetadata ? objectMetadata["Address"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Address, context);
                },
                set: function(val) {
                    setterFunctions['Address'].call(this, val, privateState);
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
            "Oauth2": {
                get: function() {
                    context["field"] = "Oauth2";
                    context["metadata"] = (objectMetadata ? objectMetadata["Oauth2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Oauth2, context);
                },
                set: function(val) {
                    setterFunctions['Oauth2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "logo": {
                get: function() {
                    context["field"] = "logo";
                    context["metadata"] = (objectMetadata ? objectMetadata["logo"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.logo, context);
                },
                set: function(val) {
                    setterFunctions['logo'].call(this, val, privateState);
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
            privateState.BankName = value ? (value["BankName"] ? value["BankName"] : null) : null;
            privateState.IdentityProvider = value ? (value["IdentityProvider"] ? value["IdentityProvider"] : null) : null;
            privateState.Scheme = value ? (value["Scheme"] ? value["Scheme"] : null) : null;
            privateState.Address = value ? (value["Address"] ? value["Address"] : null) : null;
            privateState.Description = value ? (value["Description"] ? value["Description"] : null) : null;
            privateState.Oauth2 = value ? (value["Oauth2"] ? value["Oauth2"] : null) : null;
            privateState.logo = value ? (value["logo"] ? value["logo"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ExternalBanks);

    //Create new class level validator object
    BaseModel.Validator.call(ExternalBanks);

    var registerValidatorBackup = ExternalBanks.registerValidator;

    ExternalBanks.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(ExternalBanks.isValid(this, propName, val)) {
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

    ExternalBanks.relations = relations;

    ExternalBanks.prototype.isValid = function() {
        return ExternalBanks.isValid(this);
    };

    ExternalBanks.prototype.objModelName = "ExternalBanks";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ExternalBanks.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("AccountAggregation", "ExternalBanks", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    ExternalBanks.clone = function(objectToClone) {
        var clonedObj = new ExternalBanks();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return ExternalBanks;
});