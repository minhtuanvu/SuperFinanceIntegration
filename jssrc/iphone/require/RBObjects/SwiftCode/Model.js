/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "SwiftCode",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        bankName: function(val, state) {
            context["field"] = "bankName";
            context["metadata"] = (objectMetadata ? objectMetadata["bankName"] : null);
            state['bankName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        city: function(val, state) {
            context["field"] = "city";
            context["metadata"] = (objectMetadata ? objectMetadata["city"] : null);
            state['city'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        country: function(val, state) {
            context["field"] = "country";
            context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
            state['country'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        iban: function(val, state) {
            context["field"] = "iban";
            context["metadata"] = (objectMetadata ? objectMetadata["iban"] : null);
            state['iban'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        countryRegion: function(val, state) {
            context["field"] = "countryRegion";
            context["metadata"] = (objectMetadata ? objectMetadata["countryRegion"] : null);
            state['countryRegion'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bic: function(val, state) {
            context["field"] = "bic";
            context["metadata"] = (objectMetadata ? objectMetadata["bic"] : null);
            state['bic'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sepaMember: function(val, state) {
            context["field"] = "sepaMember";
            context["metadata"] = (objectMetadata ? objectMetadata["sepaMember"] : null);
            state['sepaMember'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        countryCode: function(val, state) {
            context["field"] = "countryCode";
            context["metadata"] = (objectMetadata ? objectMetadata["countryCode"] : null);
            state['countryCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function SwiftCode(defaultValues) {
        var privateState = {};
        context["field"] = "bankName";
        context["metadata"] = (objectMetadata ? objectMetadata["bankName"] : null);
        privateState.bankName = defaultValues ? (defaultValues["bankName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankName"], context) : null) : null;
        context["field"] = "city";
        context["metadata"] = (objectMetadata ? objectMetadata["city"] : null);
        privateState.city = defaultValues ? (defaultValues["city"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["city"], context) : null) : null;
        context["field"] = "country";
        context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
        privateState.country = defaultValues ? (defaultValues["country"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["country"], context) : null) : null;
        context["field"] = "iban";
        context["metadata"] = (objectMetadata ? objectMetadata["iban"] : null);
        privateState.iban = defaultValues ? (defaultValues["iban"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["iban"], context) : null) : null;
        context["field"] = "countryRegion";
        context["metadata"] = (objectMetadata ? objectMetadata["countryRegion"] : null);
        privateState.countryRegion = defaultValues ? (defaultValues["countryRegion"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["countryRegion"], context) : null) : null;
        context["field"] = "bic";
        context["metadata"] = (objectMetadata ? objectMetadata["bic"] : null);
        privateState.bic = defaultValues ? (defaultValues["bic"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bic"], context) : null) : null;
        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ? (defaultValues["id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) : null) : null;
        context["field"] = "sepaMember";
        context["metadata"] = (objectMetadata ? objectMetadata["sepaMember"] : null);
        privateState.sepaMember = defaultValues ? (defaultValues["sepaMember"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sepaMember"], context) : null) : null;
        context["field"] = "countryCode";
        context["metadata"] = (objectMetadata ? objectMetadata["countryCode"] : null);
        privateState.countryCode = defaultValues ? (defaultValues["countryCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["countryCode"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "bankName": {
                get: function() {
                    context["field"] = "bankName";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankName, context);
                },
                set: function(val) {
                    setterFunctions['bankName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "city": {
                get: function() {
                    context["field"] = "city";
                    context["metadata"] = (objectMetadata ? objectMetadata["city"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.city, context);
                },
                set: function(val) {
                    setterFunctions['city'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "country": {
                get: function() {
                    context["field"] = "country";
                    context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.country, context);
                },
                set: function(val) {
                    setterFunctions['country'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "iban": {
                get: function() {
                    context["field"] = "iban";
                    context["metadata"] = (objectMetadata ? objectMetadata["iban"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.iban, context);
                },
                set: function(val) {
                    setterFunctions['iban'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "countryRegion": {
                get: function() {
                    context["field"] = "countryRegion";
                    context["metadata"] = (objectMetadata ? objectMetadata["countryRegion"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.countryRegion, context);
                },
                set: function(val) {
                    setterFunctions['countryRegion'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bic": {
                get: function() {
                    context["field"] = "bic";
                    context["metadata"] = (objectMetadata ? objectMetadata["bic"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bic, context);
                },
                set: function(val) {
                    setterFunctions['bic'].call(this, val, privateState);
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
            "sepaMember": {
                get: function() {
                    context["field"] = "sepaMember";
                    context["metadata"] = (objectMetadata ? objectMetadata["sepaMember"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sepaMember, context);
                },
                set: function(val) {
                    setterFunctions['sepaMember'].call(this, val, privateState);
                },
                enumerable: true,
            },
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
        });
        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };
        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.bankName = value ? (value["bankName"] ? value["bankName"] : null) : null;
            privateState.city = value ? (value["city"] ? value["city"] : null) : null;
            privateState.country = value ? (value["country"] ? value["country"] : null) : null;
            privateState.iban = value ? (value["iban"] ? value["iban"] : null) : null;
            privateState.countryRegion = value ? (value["countryRegion"] ? value["countryRegion"] : null) : null;
            privateState.bic = value ? (value["bic"] ? value["bic"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.sepaMember = value ? (value["sepaMember"] ? value["sepaMember"] : null) : null;
            privateState.countryCode = value ? (value["countryCode"] ? value["countryCode"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(SwiftCode);
    //Create new class level validator object
    BaseModel.Validator.call(SwiftCode);
    var registerValidatorBackup = SwiftCode.registerValidator;
    SwiftCode.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (SwiftCode.isValid(this, propName, val)) {
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
        //For Operation 'getSwiftCode' with service id 'getIBANdetails4967'
    SwiftCode.getSwiftCode = function(params, onCompletion) {
        return SwiftCode.customVerb('getSwiftCode', params, onCompletion);
    };
    //For Operation 'getBICFromBankDetails' with service id 'getBICFromBankDetails6679'
    SwiftCode.getBICFromBankDetails = function(params, onCompletion) {
        return SwiftCode.customVerb('getBICFromBankDetails', params, onCompletion);
    };
    var relations = [];
    SwiftCode.relations = relations;
    SwiftCode.prototype.isValid = function() {
        return SwiftCode.isValid(this);
    };
    SwiftCode.prototype.objModelName = "SwiftCode";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    SwiftCode.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "SwiftCode", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    SwiftCode.clone = function(objectToClone) {
        var clonedObj = new SwiftCode();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return SwiftCode;
});