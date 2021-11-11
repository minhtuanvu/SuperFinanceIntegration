/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "NewAccount", "objectService" : "RBObjects"};

    var setterFunctions = {
        accountType: function(val, state) {
            context["field"] = "accountType";
            context["metadata"] = (objectMetadata ? objectMetadata["accountType"] : null);
            state['accountType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        address: function(val, state) {
            context["field"] = "address";
            context["metadata"] = (objectMetadata ? objectMetadata["address"] : null);
            state['address'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dateOfBirth: function(val, state) {
            context["field"] = "dateOfBirth";
            context["metadata"] = (objectMetadata ? objectMetadata["dateOfBirth"] : null);
            state['dateOfBirth'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        productId: function(val, state) {
            context["field"] = "productId";
            context["metadata"] = (objectMetadata ? objectMetadata["productId"] : null);
            state['productId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        referenceId: function(val, state) {
            context["field"] = "referenceId";
            context["metadata"] = (objectMetadata ? objectMetadata["referenceId"] : null);
            state['referenceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ssn: function(val, state) {
            context["field"] = "ssn";
            context["metadata"] = (objectMetadata ? objectMetadata["ssn"] : null);
            state['ssn'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        stateId: function(val, state) {
            context["field"] = "stateId";
            context["metadata"] = (objectMetadata ? objectMetadata["stateId"] : null);
            state['stateId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function NewAccount(defaultValues) {
        var privateState = {};
        context["field"] = "accountType";
        context["metadata"] = (objectMetadata ? objectMetadata["accountType"] : null);
        privateState.accountType = defaultValues ?
            (defaultValues["accountType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountType"], context) :
                null) :
            null;

        context["field"] = "address";
        context["metadata"] = (objectMetadata ? objectMetadata["address"] : null);
        privateState.address = defaultValues ?
            (defaultValues["address"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["address"], context) :
                null) :
            null;

        context["field"] = "dateOfBirth";
        context["metadata"] = (objectMetadata ? objectMetadata["dateOfBirth"] : null);
        privateState.dateOfBirth = defaultValues ?
            (defaultValues["dateOfBirth"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dateOfBirth"], context) :
                null) :
            null;

        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ?
            (defaultValues["errmsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) :
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

        context["field"] = "productId";
        context["metadata"] = (objectMetadata ? objectMetadata["productId"] : null);
        privateState.productId = defaultValues ?
            (defaultValues["productId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["productId"], context) :
                null) :
            null;

        context["field"] = "referenceId";
        context["metadata"] = (objectMetadata ? objectMetadata["referenceId"] : null);
        privateState.referenceId = defaultValues ?
            (defaultValues["referenceId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["referenceId"], context) :
                null) :
            null;

        context["field"] = "ssn";
        context["metadata"] = (objectMetadata ? objectMetadata["ssn"] : null);
        privateState.ssn = defaultValues ?
            (defaultValues["ssn"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ssn"], context) :
                null) :
            null;

        context["field"] = "stateId";
        context["metadata"] = (objectMetadata ? objectMetadata["stateId"] : null);
        privateState.stateId = defaultValues ?
            (defaultValues["stateId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["stateId"], context) :
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
            "address": {
                get: function() {
                    context["field"] = "address";
                    context["metadata"] = (objectMetadata ? objectMetadata["address"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.address, context);
                },
                set: function(val) {
                    setterFunctions['address'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dateOfBirth": {
                get: function() {
                    context["field"] = "dateOfBirth";
                    context["metadata"] = (objectMetadata ? objectMetadata["dateOfBirth"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dateOfBirth, context);
                },
                set: function(val) {
                    setterFunctions['dateOfBirth'].call(this, val, privateState);
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
            "referenceId": {
                get: function() {
                    context["field"] = "referenceId";
                    context["metadata"] = (objectMetadata ? objectMetadata["referenceId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.referenceId, context);
                },
                set: function(val) {
                    setterFunctions['referenceId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ssn": {
                get: function() {
                    context["field"] = "ssn";
                    context["metadata"] = (objectMetadata ? objectMetadata["ssn"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ssn, context);
                },
                set: function(val) {
                    setterFunctions['ssn'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "stateId": {
                get: function() {
                    context["field"] = "stateId";
                    context["metadata"] = (objectMetadata ? objectMetadata["stateId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.stateId, context);
                },
                set: function(val) {
                    setterFunctions['stateId'].call(this, val, privateState);
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
            privateState.accountType = value ? (value["accountType"] ? value["accountType"] : null) : null;
            privateState.address = value ? (value["address"] ? value["address"] : null) : null;
            privateState.dateOfBirth = value ? (value["dateOfBirth"] ? value["dateOfBirth"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.firstName = value ? (value["firstName"] ? value["firstName"] : null) : null;
            privateState.lastName = value ? (value["lastName"] ? value["lastName"] : null) : null;
            privateState.productId = value ? (value["productId"] ? value["productId"] : null) : null;
            privateState.referenceId = value ? (value["referenceId"] ? value["referenceId"] : null) : null;
            privateState.ssn = value ? (value["ssn"] ? value["ssn"] : null) : null;
            privateState.stateId = value ? (value["stateId"] ? value["stateId"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(NewAccount);

    //Create new class level validator object
    BaseModel.Validator.call(NewAccount);

    var registerValidatorBackup = NewAccount.registerValidator;

    NewAccount.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(NewAccount.isValid(this, propName, val)) {
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

    NewAccount.relations = relations;

    NewAccount.prototype.isValid = function() {
        return NewAccount.isValid(this);
    };

    NewAccount.prototype.objModelName = "NewAccount";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    NewAccount.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "NewAccount", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    NewAccount.clone = function(objectToClone) {
        var clonedObj = new NewAccount();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return NewAccount;
});