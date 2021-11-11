/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "CoreMembership",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Customer_id: function(val, state) {
            context["field"] = "Customer_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Customer_id"] : null);
            state['Customer_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MemberId: function(val, state) {
            context["field"] = "MemberId";
            context["metadata"] = (objectMetadata ? objectMetadata["MemberId"] : null);
            state['MemberId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MemberType: function(val, state) {
            context["field"] = "MemberType";
            context["metadata"] = (objectMetadata ? objectMetadata["MemberType"] : null);
            state['MemberType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        IDType_id: function(val, state) {
            context["field"] = "IDType_id";
            context["metadata"] = (objectMetadata ? objectMetadata["IDType_id"] : null);
            state['IDType_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        IDValue: function(val, state) {
            context["field"] = "IDValue";
            context["metadata"] = (objectMetadata ? objectMetadata["IDValue"] : null);
            state['IDValue'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function CoreMembership(defaultValues) {
        var privateState = {};
        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ? (defaultValues["id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) : null) : null;
        context["field"] = "Customer_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Customer_id"] : null);
        privateState.Customer_id = defaultValues ? (defaultValues["Customer_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Customer_id"], context) : null) : null;
        context["field"] = "MemberId";
        context["metadata"] = (objectMetadata ? objectMetadata["MemberId"] : null);
        privateState.MemberId = defaultValues ? (defaultValues["MemberId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MemberId"], context) : null) : null;
        context["field"] = "MemberType";
        context["metadata"] = (objectMetadata ? objectMetadata["MemberType"] : null);
        privateState.MemberType = defaultValues ? (defaultValues["MemberType"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MemberType"], context) : null) : null;
        context["field"] = "IDType_id";
        context["metadata"] = (objectMetadata ? objectMetadata["IDType_id"] : null);
        privateState.IDType_id = defaultValues ? (defaultValues["IDType_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IDType_id"], context) : null) : null;
        context["field"] = "IDValue";
        context["metadata"] = (objectMetadata ? objectMetadata["IDValue"] : null);
        privateState.IDValue = defaultValues ? (defaultValues["IDValue"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IDValue"], context) : null) : null;
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
            "Customer_id": {
                get: function() {
                    context["field"] = "Customer_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Customer_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Customer_id, context);
                },
                set: function(val) {
                    setterFunctions['Customer_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MemberId": {
                get: function() {
                    context["field"] = "MemberId";
                    context["metadata"] = (objectMetadata ? objectMetadata["MemberId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MemberId, context);
                },
                set: function(val) {
                    setterFunctions['MemberId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MemberType": {
                get: function() {
                    context["field"] = "MemberType";
                    context["metadata"] = (objectMetadata ? objectMetadata["MemberType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MemberType, context);
                },
                set: function(val) {
                    setterFunctions['MemberType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "IDType_id": {
                get: function() {
                    context["field"] = "IDType_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["IDType_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IDType_id, context);
                },
                set: function(val) {
                    setterFunctions['IDType_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "IDValue": {
                get: function() {
                    context["field"] = "IDValue";
                    context["metadata"] = (objectMetadata ? objectMetadata["IDValue"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IDValue, context);
                },
                set: function(val) {
                    setterFunctions['IDValue'].call(this, val, privateState);
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
            privateState.Customer_id = value ? (value["Customer_id"] ? value["Customer_id"] : null) : null;
            privateState.MemberId = value ? (value["MemberId"] ? value["MemberId"] : null) : null;
            privateState.MemberType = value ? (value["MemberType"] ? value["MemberType"] : null) : null;
            privateState.IDType_id = value ? (value["IDType_id"] ? value["IDType_id"] : null) : null;
            privateState.IDValue = value ? (value["IDValue"] ? value["IDValue"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(CoreMembership);
    //Create new class level validator object
    BaseModel.Validator.call(CoreMembership);
    var registerValidatorBackup = CoreMembership.registerValidator;
    CoreMembership.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (CoreMembership.isValid(this, propName, val)) {
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
    CoreMembership.relations = relations;
    CoreMembership.prototype.isValid = function() {
        return CoreMembership.isValid(this);
    };
    CoreMembership.prototype.objModelName = "CoreMembership";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    CoreMembership.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "CoreMembership", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    CoreMembership.clone = function(objectToClone) {
        var clonedObj = new CoreMembership();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return CoreMembership;
});