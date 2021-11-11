/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "Products",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        accountType: function(val, state) {
            context["field"] = "accountType";
            context["metadata"] = (objectMetadata ? objectMetadata["accountType"] : null);
            state['accountType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        productDescription: function(val, state) {
            context["field"] = "productDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["productDescription"] : null);
            state['productDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        productId: function(val, state) {
            context["field"] = "productId";
            context["metadata"] = (objectMetadata ? objectMetadata["productId"] : null);
            state['productId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        StateId: function(val, state) {
            context["field"] = "StateId";
            context["metadata"] = (objectMetadata ? objectMetadata["StateId"] : null);
            state['StateId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        features: function(val, state) {
            context["field"] = "features";
            context["metadata"] = (objectMetadata ? objectMetadata["features"] : null);
            state['features'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        info: function(val, state) {
            context["field"] = "info";
            context["metadata"] = (objectMetadata ? objectMetadata["info"] : null);
            state['info'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        productType: function(val, state) {
            context["field"] = "productType";
            context["metadata"] = (objectMetadata ? objectMetadata["productType"] : null);
            state['productType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        productTypeId: function(val, state) {
            context["field"] = "productTypeId";
            context["metadata"] = (objectMetadata ? objectMetadata["productTypeId"] : null);
            state['productTypeId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        rates: function(val, state) {
            context["field"] = "rates";
            context["metadata"] = (objectMetadata ? objectMetadata["rates"] : null);
            state['rates'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        termsAndConditions: function(val, state) {
            context["field"] = "termsAndConditions";
            context["metadata"] = (objectMetadata ? objectMetadata["termsAndConditions"] : null);
            state['termsAndConditions'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function Products(defaultValues) {
        var privateState = {};
        context["field"] = "accountType";
        context["metadata"] = (objectMetadata ? objectMetadata["accountType"] : null);
        privateState.accountType = defaultValues ? (defaultValues["accountType"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountType"], context) : null) : null;
        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) : null) : null;
        context["field"] = "productDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["productDescription"] : null);
        privateState.productDescription = defaultValues ? (defaultValues["productDescription"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["productDescription"], context) : null) : null;
        context["field"] = "productId";
        context["metadata"] = (objectMetadata ? objectMetadata["productId"] : null);
        privateState.productId = defaultValues ? (defaultValues["productId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["productId"], context) : null) : null;
        context["field"] = "StateId";
        context["metadata"] = (objectMetadata ? objectMetadata["StateId"] : null);
        privateState.StateId = defaultValues ? (defaultValues["StateId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["StateId"], context) : null) : null;
        context["field"] = "features";
        context["metadata"] = (objectMetadata ? objectMetadata["features"] : null);
        privateState.features = defaultValues ? (defaultValues["features"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["features"], context) : null) : null;
        context["field"] = "info";
        context["metadata"] = (objectMetadata ? objectMetadata["info"] : null);
        privateState.info = defaultValues ? (defaultValues["info"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["info"], context) : null) : null;
        context["field"] = "productType";
        context["metadata"] = (objectMetadata ? objectMetadata["productType"] : null);
        privateState.productType = defaultValues ? (defaultValues["productType"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["productType"], context) : null) : null;
        context["field"] = "productTypeId";
        context["metadata"] = (objectMetadata ? objectMetadata["productTypeId"] : null);
        privateState.productTypeId = defaultValues ? (defaultValues["productTypeId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["productTypeId"], context) : null) : null;
        context["field"] = "rates";
        context["metadata"] = (objectMetadata ? objectMetadata["rates"] : null);
        privateState.rates = defaultValues ? (defaultValues["rates"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["rates"], context) : null) : null;
        context["field"] = "termsAndConditions";
        context["metadata"] = (objectMetadata ? objectMetadata["termsAndConditions"] : null);
        privateState.termsAndConditions = defaultValues ? (defaultValues["termsAndConditions"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["termsAndConditions"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "accountType": {
                get: function() {
                    context["field"] = "accountType";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountType, context);
                },
                set: function(val) {
                    setterFunctions['accountType'].call(this, val, privateState);
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
            "productDescription": {
                get: function() {
                    context["field"] = "productDescription";
                    context["metadata"] = (objectMetadata ? objectMetadata["productDescription"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.productDescription, context);
                },
                set: function(val) {
                    setterFunctions['productDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "productId": {
                get: function() {
                    context["field"] = "productId";
                    context["metadata"] = (objectMetadata ? objectMetadata["productId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.productId, context);
                },
                set: function(val) {
                    setterFunctions['productId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "StateId": {
                get: function() {
                    context["field"] = "StateId";
                    context["metadata"] = (objectMetadata ? objectMetadata["StateId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.StateId, context);
                },
                set: function(val) {
                    setterFunctions['StateId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "features": {
                get: function() {
                    context["field"] = "features";
                    context["metadata"] = (objectMetadata ? objectMetadata["features"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.features, context);
                },
                set: function(val) {
                    setterFunctions['features'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "info": {
                get: function() {
                    context["field"] = "info";
                    context["metadata"] = (objectMetadata ? objectMetadata["info"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.info, context);
                },
                set: function(val) {
                    setterFunctions['info'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "productType": {
                get: function() {
                    context["field"] = "productType";
                    context["metadata"] = (objectMetadata ? objectMetadata["productType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.productType, context);
                },
                set: function(val) {
                    setterFunctions['productType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "productTypeId": {
                get: function() {
                    context["field"] = "productTypeId";
                    context["metadata"] = (objectMetadata ? objectMetadata["productTypeId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.productTypeId, context);
                },
                set: function(val) {
                    setterFunctions['productTypeId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "rates": {
                get: function() {
                    context["field"] = "rates";
                    context["metadata"] = (objectMetadata ? objectMetadata["rates"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.rates, context);
                },
                set: function(val) {
                    setterFunctions['rates'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "termsAndConditions": {
                get: function() {
                    context["field"] = "termsAndConditions";
                    context["metadata"] = (objectMetadata ? objectMetadata["termsAndConditions"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.termsAndConditions, context);
                },
                set: function(val) {
                    setterFunctions['termsAndConditions'].call(this, val, privateState);
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
            privateState.accountType = value ? (value["accountType"] ? value["accountType"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.productDescription = value ? (value["productDescription"] ? value["productDescription"] : null) : null;
            privateState.productId = value ? (value["productId"] ? value["productId"] : null) : null;
            privateState.StateId = value ? (value["StateId"] ? value["StateId"] : null) : null;
            privateState.features = value ? (value["features"] ? value["features"] : null) : null;
            privateState.info = value ? (value["info"] ? value["info"] : null) : null;
            privateState.productType = value ? (value["productType"] ? value["productType"] : null) : null;
            privateState.productTypeId = value ? (value["productTypeId"] ? value["productTypeId"] : null) : null;
            privateState.rates = value ? (value["rates"] ? value["rates"] : null) : null;
            privateState.termsAndConditions = value ? (value["termsAndConditions"] ? value["termsAndConditions"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Products);
    //Create new class level validator object
    BaseModel.Validator.call(Products);
    var registerValidatorBackup = Products.registerValidator;
    Products.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (Products.isValid(this, propName, val)) {
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
        //For Operation 'getProductList' with service id 'getProductList5507'
    Products.getProductList = function(params, onCompletion) {
        return Products.customVerb('getProductList', params, onCompletion);
    };
    var relations = [];
    Products.relations = relations;
    Products.prototype.isValid = function() {
        return Products.isValid(this);
    };
    Products.prototype.objModelName = "Products";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Products.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Products", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    Products.clone = function(objectToClone) {
        var clonedObj = new Products();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return Products;
});