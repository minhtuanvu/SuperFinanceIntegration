/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "Providers",
        "objectService": "ExternalAccounts"
    };
    var setterFunctions = {
        countryCode: function(val, state) {
            context["field"] = "countryCode";
            context["metadata"] = (objectMetadata ? objectMetadata["countryCode"] : null);
            state['countryCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        country_code: function(val, state) {
            context["field"] = "country_code";
            context["metadata"] = (objectMetadata ? objectMetadata["country_code"] : null);
            state['country_code'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        home_url: function(val, state) {
            context["field"] = "home_url";
            context["metadata"] = (objectMetadata ? objectMetadata["home_url"] : null);
            state['home_url'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        login_url: function(val, state) {
            context["field"] = "login_url";
            context["metadata"] = (objectMetadata ? objectMetadata["login_url"] : null);
            state['login_url'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        logo_url: function(val, state) {
            context["field"] = "logo_url";
            context["metadata"] = (objectMetadata ? objectMetadata["logo_url"] : null);
            state['logo_url'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        max_consent_days: function(val, state) {
            context["field"] = "max_consent_days";
            context["metadata"] = (objectMetadata ? objectMetadata["max_consent_days"] : null);
            state['max_consent_days'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        max_fetch_interval: function(val, state) {
            context["field"] = "max_fetch_interval";
            context["metadata"] = (objectMetadata ? objectMetadata["max_fetch_interval"] : null);
            state['max_fetch_interval'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        providerCode: function(val, state) {
            context["field"] = "providerCode";
            context["metadata"] = (objectMetadata ? objectMetadata["providerCode"] : null);
            state['providerCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        providerName: function(val, state) {
            context["field"] = "providerName";
            context["metadata"] = (objectMetadata ? objectMetadata["providerName"] : null);
            state['providerName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        refresh_timeout: function(val, state) {
            context["field"] = "refresh_timeout";
            context["metadata"] = (objectMetadata ? objectMetadata["refresh_timeout"] : null);
            state['refresh_timeout'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        status: function(val, state) {
            context["field"] = "status";
            context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
            state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        supported_account_extra_fields: function(val, state) {
            context["field"] = "supported_account_extra_fields";
            context["metadata"] = (objectMetadata ? objectMetadata["supported_account_extra_fields"] : null);
            state['supported_account_extra_fields'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        supported_account_natures: function(val, state) {
            context["field"] = "supported_account_natures";
            context["metadata"] = (objectMetadata ? objectMetadata["supported_account_natures"] : null);
            state['supported_account_natures'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        supported_account_types: function(val, state) {
            context["field"] = "supported_account_types";
            context["metadata"] = (objectMetadata ? objectMetadata["supported_account_types"] : null);
            state['supported_account_types'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        supported_fetch_scopes: function(val, state) {
            context["field"] = "supported_fetch_scopes";
            context["metadata"] = (objectMetadata ? objectMetadata["supported_fetch_scopes"] : null);
            state['supported_fetch_scopes'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        supported_transaction_extra_fields: function(val, state) {
            context["field"] = "supported_transaction_extra_fields";
            context["metadata"] = (objectMetadata ? objectMetadata["supported_transaction_extra_fields"] : null);
            state['supported_transaction_extra_fields'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        timezone: function(val, state) {
            context["field"] = "timezone";
            context["metadata"] = (objectMetadata ? objectMetadata["timezone"] : null);
            state['timezone'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function Providers(defaultValues) {
        var privateState = {};
        context["field"] = "countryCode";
        context["metadata"] = (objectMetadata ? objectMetadata["countryCode"] : null);
        privateState.countryCode = defaultValues ? (defaultValues["countryCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["countryCode"], context) : null) : null;
        context["field"] = "country_code";
        context["metadata"] = (objectMetadata ? objectMetadata["country_code"] : null);
        privateState.country_code = defaultValues ? (defaultValues["country_code"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["country_code"], context) : null) : null;
        context["field"] = "home_url";
        context["metadata"] = (objectMetadata ? objectMetadata["home_url"] : null);
        privateState.home_url = defaultValues ? (defaultValues["home_url"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["home_url"], context) : null) : null;
        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ? (defaultValues["id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) : null) : null;
        context["field"] = "login_url";
        context["metadata"] = (objectMetadata ? objectMetadata["login_url"] : null);
        privateState.login_url = defaultValues ? (defaultValues["login_url"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["login_url"], context) : null) : null;
        context["field"] = "logo_url";
        context["metadata"] = (objectMetadata ? objectMetadata["logo_url"] : null);
        privateState.logo_url = defaultValues ? (defaultValues["logo_url"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["logo_url"], context) : null) : null;
        context["field"] = "max_consent_days";
        context["metadata"] = (objectMetadata ? objectMetadata["max_consent_days"] : null);
        privateState.max_consent_days = defaultValues ? (defaultValues["max_consent_days"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["max_consent_days"], context) : null) : null;
        context["field"] = "max_fetch_interval";
        context["metadata"] = (objectMetadata ? objectMetadata["max_fetch_interval"] : null);
        privateState.max_fetch_interval = defaultValues ? (defaultValues["max_fetch_interval"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["max_fetch_interval"], context) : null) : null;
        context["field"] = "providerCode";
        context["metadata"] = (objectMetadata ? objectMetadata["providerCode"] : null);
        privateState.providerCode = defaultValues ? (defaultValues["providerCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["providerCode"], context) : null) : null;
        context["field"] = "providerName";
        context["metadata"] = (objectMetadata ? objectMetadata["providerName"] : null);
        privateState.providerName = defaultValues ? (defaultValues["providerName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["providerName"], context) : null) : null;
        context["field"] = "refresh_timeout";
        context["metadata"] = (objectMetadata ? objectMetadata["refresh_timeout"] : null);
        privateState.refresh_timeout = defaultValues ? (defaultValues["refresh_timeout"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["refresh_timeout"], context) : null) : null;
        context["field"] = "status";
        context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
        privateState.status = defaultValues ? (defaultValues["status"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context) : null) : null;
        context["field"] = "supported_account_extra_fields";
        context["metadata"] = (objectMetadata ? objectMetadata["supported_account_extra_fields"] : null);
        privateState.supported_account_extra_fields = defaultValues ? (defaultValues["supported_account_extra_fields"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["supported_account_extra_fields"], context) : null) : null;
        context["field"] = "supported_account_natures";
        context["metadata"] = (objectMetadata ? objectMetadata["supported_account_natures"] : null);
        privateState.supported_account_natures = defaultValues ? (defaultValues["supported_account_natures"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["supported_account_natures"], context) : null) : null;
        context["field"] = "supported_account_types";
        context["metadata"] = (objectMetadata ? objectMetadata["supported_account_types"] : null);
        privateState.supported_account_types = defaultValues ? (defaultValues["supported_account_types"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["supported_account_types"], context) : null) : null;
        context["field"] = "supported_fetch_scopes";
        context["metadata"] = (objectMetadata ? objectMetadata["supported_fetch_scopes"] : null);
        privateState.supported_fetch_scopes = defaultValues ? (defaultValues["supported_fetch_scopes"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["supported_fetch_scopes"], context) : null) : null;
        context["field"] = "supported_transaction_extra_fields";
        context["metadata"] = (objectMetadata ? objectMetadata["supported_transaction_extra_fields"] : null);
        privateState.supported_transaction_extra_fields = defaultValues ? (defaultValues["supported_transaction_extra_fields"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["supported_transaction_extra_fields"], context) : null) : null;
        context["field"] = "timezone";
        context["metadata"] = (objectMetadata ? objectMetadata["timezone"] : null);
        privateState.timezone = defaultValues ? (defaultValues["timezone"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["timezone"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "countryCode": {
                get: function() {
                    context["field"] = "countryCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["countryCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.countryCode, context);
                },
                set: function(val) {
                    setterFunctions['countryCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "country_code": {
                get: function() {
                    context["field"] = "country_code";
                    context["metadata"] = (objectMetadata ? objectMetadata["country_code"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.country_code, context);
                },
                set: function(val) {
                    setterFunctions['country_code'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "home_url": {
                get: function() {
                    context["field"] = "home_url";
                    context["metadata"] = (objectMetadata ? objectMetadata["home_url"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.home_url, context);
                },
                set: function(val) {
                    setterFunctions['home_url'].call(this, val, privateState);
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
            "login_url": {
                get: function() {
                    context["field"] = "login_url";
                    context["metadata"] = (objectMetadata ? objectMetadata["login_url"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.login_url, context);
                },
                set: function(val) {
                    setterFunctions['login_url'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "logo_url": {
                get: function() {
                    context["field"] = "logo_url";
                    context["metadata"] = (objectMetadata ? objectMetadata["logo_url"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.logo_url, context);
                },
                set: function(val) {
                    setterFunctions['logo_url'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "max_consent_days": {
                get: function() {
                    context["field"] = "max_consent_days";
                    context["metadata"] = (objectMetadata ? objectMetadata["max_consent_days"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.max_consent_days, context);
                },
                set: function(val) {
                    setterFunctions['max_consent_days'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "max_fetch_interval": {
                get: function() {
                    context["field"] = "max_fetch_interval";
                    context["metadata"] = (objectMetadata ? objectMetadata["max_fetch_interval"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.max_fetch_interval, context);
                },
                set: function(val) {
                    setterFunctions['max_fetch_interval'].call(this, val, privateState);
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
            "providerName": {
                get: function() {
                    context["field"] = "providerName";
                    context["metadata"] = (objectMetadata ? objectMetadata["providerName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.providerName, context);
                },
                set: function(val) {
                    setterFunctions['providerName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "refresh_timeout": {
                get: function() {
                    context["field"] = "refresh_timeout";
                    context["metadata"] = (objectMetadata ? objectMetadata["refresh_timeout"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.refresh_timeout, context);
                },
                set: function(val) {
                    setterFunctions['refresh_timeout'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "status": {
                get: function() {
                    context["field"] = "status";
                    context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.status, context);
                },
                set: function(val) {
                    setterFunctions['status'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "supported_account_extra_fields": {
                get: function() {
                    context["field"] = "supported_account_extra_fields";
                    context["metadata"] = (objectMetadata ? objectMetadata["supported_account_extra_fields"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.supported_account_extra_fields, context);
                },
                set: function(val) {
                    setterFunctions['supported_account_extra_fields'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "supported_account_natures": {
                get: function() {
                    context["field"] = "supported_account_natures";
                    context["metadata"] = (objectMetadata ? objectMetadata["supported_account_natures"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.supported_account_natures, context);
                },
                set: function(val) {
                    setterFunctions['supported_account_natures'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "supported_account_types": {
                get: function() {
                    context["field"] = "supported_account_types";
                    context["metadata"] = (objectMetadata ? objectMetadata["supported_account_types"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.supported_account_types, context);
                },
                set: function(val) {
                    setterFunctions['supported_account_types'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "supported_fetch_scopes": {
                get: function() {
                    context["field"] = "supported_fetch_scopes";
                    context["metadata"] = (objectMetadata ? objectMetadata["supported_fetch_scopes"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.supported_fetch_scopes, context);
                },
                set: function(val) {
                    setterFunctions['supported_fetch_scopes'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "supported_transaction_extra_fields": {
                get: function() {
                    context["field"] = "supported_transaction_extra_fields";
                    context["metadata"] = (objectMetadata ? objectMetadata["supported_transaction_extra_fields"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.supported_transaction_extra_fields, context);
                },
                set: function(val) {
                    setterFunctions['supported_transaction_extra_fields'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "timezone": {
                get: function() {
                    context["field"] = "timezone";
                    context["metadata"] = (objectMetadata ? objectMetadata["timezone"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.timezone, context);
                },
                set: function(val) {
                    setterFunctions['timezone'].call(this, val, privateState);
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
            privateState.countryCode = value ? (value["countryCode"] ? value["countryCode"] : null) : null;
            privateState.country_code = value ? (value["country_code"] ? value["country_code"] : null) : null;
            privateState.home_url = value ? (value["home_url"] ? value["home_url"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.login_url = value ? (value["login_url"] ? value["login_url"] : null) : null;
            privateState.logo_url = value ? (value["logo_url"] ? value["logo_url"] : null) : null;
            privateState.max_consent_days = value ? (value["max_consent_days"] ? value["max_consent_days"] : null) : null;
            privateState.max_fetch_interval = value ? (value["max_fetch_interval"] ? value["max_fetch_interval"] : null) : null;
            privateState.providerCode = value ? (value["providerCode"] ? value["providerCode"] : null) : null;
            privateState.providerName = value ? (value["providerName"] ? value["providerName"] : null) : null;
            privateState.refresh_timeout = value ? (value["refresh_timeout"] ? value["refresh_timeout"] : null) : null;
            privateState.status = value ? (value["status"] ? value["status"] : null) : null;
            privateState.supported_account_extra_fields = value ? (value["supported_account_extra_fields"] ? value["supported_account_extra_fields"] : null) : null;
            privateState.supported_account_natures = value ? (value["supported_account_natures"] ? value["supported_account_natures"] : null) : null;
            privateState.supported_account_types = value ? (value["supported_account_types"] ? value["supported_account_types"] : null) : null;
            privateState.supported_fetch_scopes = value ? (value["supported_fetch_scopes"] ? value["supported_fetch_scopes"] : null) : null;
            privateState.supported_transaction_extra_fields = value ? (value["supported_transaction_extra_fields"] ? value["supported_transaction_extra_fields"] : null) : null;
            privateState.timezone = value ? (value["timezone"] ? value["timezone"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Providers);
    //Create new class level validator object
    BaseModel.Validator.call(Providers);
    var registerValidatorBackup = Providers.registerValidator;
    Providers.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (Providers.isValid(this, propName, val)) {
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
        //For Operation 'getBankListForCountry' with service id 'getProvider9814'
    Providers.getBankListForCountry = function(params, onCompletion) {
        return Providers.customVerb('getBankListForCountry', params, onCompletion);
    };
    var relations = [];
    Providers.relations = relations;
    Providers.prototype.isValid = function() {
        return Providers.isValid(this);
    };
    Providers.prototype.objModelName = "Providers";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Providers.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("ExternalAccounts", "Providers", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    Providers.clone = function(objectToClone) {
        var clonedObj = new Providers();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return Providers;
});