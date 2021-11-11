/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "p2pregistration", "objectService" : "RBObjects"};

    var setterFunctions = {
        accountId: function(val, state) {
            context["field"] = "accountId";
            context["metadata"] = (objectMetadata ? objectMetadata["accountId"] : null);
            state['accountId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        displayName: function(val, state) {
            context["field"] = "displayName";
            context["metadata"] = (objectMetadata ? objectMetadata["displayName"] : null);
            state['displayName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        email: function(val, state) {
            context["field"] = "email";
            context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
            state['email'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isNpp: function(val, state) {
            context["field"] = "isNpp";
            context["metadata"] = (objectMetadata ? objectMetadata["isNpp"] : null);
            state['isNpp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isP2PRegistered: function(val, state) {
            context["field"] = "isP2PRegistered";
            context["metadata"] = (objectMetadata ? objectMetadata["isP2PRegistered"] : null);
            state['isP2PRegistered'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isZell: function(val, state) {
            context["field"] = "isZell";
            context["metadata"] = (objectMetadata ? objectMetadata["isZell"] : null);
            state['isZell'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        p2pRegId: function(val, state) {
            context["field"] = "p2pRegId";
            context["metadata"] = (objectMetadata ? objectMetadata["p2pRegId"] : null);
            state['p2pRegId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phone: function(val, state) {
            context["field"] = "phone";
            context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
            state['phone'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function p2pregistration(defaultValues) {
        var privateState = {};
        context["field"] = "accountId";
        context["metadata"] = (objectMetadata ? objectMetadata["accountId"] : null);
        privateState.accountId = defaultValues ?
            (defaultValues["accountId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountId"], context) :
                null) :
            null;

        context["field"] = "displayName";
        context["metadata"] = (objectMetadata ? objectMetadata["displayName"] : null);
        privateState.displayName = defaultValues ?
            (defaultValues["displayName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["displayName"], context) :
                null) :
            null;

        context["field"] = "email";
        context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
        privateState.email = defaultValues ?
            (defaultValues["email"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["email"], context) :
                null) :
            null;

        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ?
            (defaultValues["errmsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) :
                null) :
            null;

        context["field"] = "isNpp";
        context["metadata"] = (objectMetadata ? objectMetadata["isNpp"] : null);
        privateState.isNpp = defaultValues ?
            (defaultValues["isNpp"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isNpp"], context) :
                null) :
            null;

        context["field"] = "isP2PRegistered";
        context["metadata"] = (objectMetadata ? objectMetadata["isP2PRegistered"] : null);
        privateState.isP2PRegistered = defaultValues ?
            (defaultValues["isP2PRegistered"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isP2PRegistered"], context) :
                null) :
            null;

        context["field"] = "isZell";
        context["metadata"] = (objectMetadata ? objectMetadata["isZell"] : null);
        privateState.isZell = defaultValues ?
            (defaultValues["isZell"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isZell"], context) :
                null) :
            null;

        context["field"] = "p2pRegId";
        context["metadata"] = (objectMetadata ? objectMetadata["p2pRegId"] : null);
        privateState.p2pRegId = defaultValues ?
            (defaultValues["p2pRegId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["p2pRegId"], context) :
                null) :
            null;

        context["field"] = "phone";
        context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
        privateState.phone = defaultValues ?
            (defaultValues["phone"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phone"], context) :
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
            "accountId": {
                get: function() {
                    context["field"] = "accountId";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountId, context);
                },
                set: function(val) {
                    setterFunctions['accountId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "displayName": {
                get: function() {
                    context["field"] = "displayName";
                    context["metadata"] = (objectMetadata ? objectMetadata["displayName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.displayName, context);
                },
                set: function(val) {
                    setterFunctions['displayName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "email": {
                get: function() {
                    context["field"] = "email";
                    context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.email, context);
                },
                set: function(val) {
                    setterFunctions['email'].call(this, val, privateState);
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
            "isNpp": {
                get: function() {
                    context["field"] = "isNpp";
                    context["metadata"] = (objectMetadata ? objectMetadata["isNpp"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isNpp, context);
                },
                set: function(val) {
                    setterFunctions['isNpp'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isP2PRegistered": {
                get: function() {
                    context["field"] = "isP2PRegistered";
                    context["metadata"] = (objectMetadata ? objectMetadata["isP2PRegistered"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isP2PRegistered, context);
                },
                set: function(val) {
                    setterFunctions['isP2PRegistered'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isZell": {
                get: function() {
                    context["field"] = "isZell";
                    context["metadata"] = (objectMetadata ? objectMetadata["isZell"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isZell, context);
                },
                set: function(val) {
                    setterFunctions['isZell'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "p2pRegId": {
                get: function() {
                    context["field"] = "p2pRegId";
                    context["metadata"] = (objectMetadata ? objectMetadata["p2pRegId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.p2pRegId, context);
                },
                set: function(val) {
                    setterFunctions['p2pRegId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "phone": {
                get: function() {
                    context["field"] = "phone";
                    context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.phone, context);
                },
                set: function(val) {
                    setterFunctions['phone'].call(this, val, privateState);
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
            privateState.accountId = value ? (value["accountId"] ? value["accountId"] : null) : null;
            privateState.displayName = value ? (value["displayName"] ? value["displayName"] : null) : null;
            privateState.email = value ? (value["email"] ? value["email"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.isNpp = value ? (value["isNpp"] ? value["isNpp"] : null) : null;
            privateState.isP2PRegistered = value ? (value["isP2PRegistered"] ? value["isP2PRegistered"] : null) : null;
            privateState.isZell = value ? (value["isZell"] ? value["isZell"] : null) : null;
            privateState.p2pRegId = value ? (value["p2pRegId"] ? value["p2pRegId"] : null) : null;
            privateState.phone = value ? (value["phone"] ? value["phone"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(p2pregistration);

    //Create new class level validator object
    BaseModel.Validator.call(p2pregistration);

    var registerValidatorBackup = p2pregistration.registerValidator;

    p2pregistration.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(p2pregistration.isValid(this, propName, val)) {
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

    p2pregistration.relations = relations;

    p2pregistration.prototype.isValid = function() {
        return p2pregistration.isValid(this);
    };

    p2pregistration.prototype.objModelName = "p2pregistration";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    p2pregistration.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "p2pregistration", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    p2pregistration.clone = function(objectToClone) {
        var clonedObj = new p2pregistration();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return p2pregistration;
});