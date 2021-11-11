/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "DemoData",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        newUsername: function(val, state) {
            context["field"] = "newUsername";
            context["metadata"] = (objectMetadata ? objectMetadata["newUsername"] : null);
            state['newUsername'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        newPassword: function(val, state) {
            context["field"] = "newPassword";
            context["metadata"] = (objectMetadata ? objectMetadata["newPassword"] : null);
            state['newPassword'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        email: function(val, state) {
            context["field"] = "email";
            context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
            state['email'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        countryCode: function(val, state) {
            context["field"] = "countryCode";
            context["metadata"] = (objectMetadata ? objectMetadata["countryCode"] : null);
            state['countryCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        adminUsername: function(val, state) {
            context["field"] = "adminUsername";
            context["metadata"] = (objectMetadata ? objectMetadata["adminUsername"] : null);
            state['adminUsername'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        adminPassword: function(val, state) {
            context["field"] = "adminPassword";
            context["metadata"] = (objectMetadata ? objectMetadata["adminPassword"] : null);
            state['adminPassword'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function DemoData(defaultValues) {
        var privateState = {};
        context["field"] = "newUsername";
        context["metadata"] = (objectMetadata ? objectMetadata["newUsername"] : null);
        privateState.newUsername = defaultValues ? (defaultValues["newUsername"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["newUsername"], context) : null) : null;
        context["field"] = "newPassword";
        context["metadata"] = (objectMetadata ? objectMetadata["newPassword"] : null);
        privateState.newPassword = defaultValues ? (defaultValues["newPassword"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["newPassword"], context) : null) : null;
        context["field"] = "email";
        context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
        privateState.email = defaultValues ? (defaultValues["email"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["email"], context) : null) : null;
        context["field"] = "countryCode";
        context["metadata"] = (objectMetadata ? objectMetadata["countryCode"] : null);
        privateState.countryCode = defaultValues ? (defaultValues["countryCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["countryCode"], context) : null) : null;
        context["field"] = "adminUsername";
        context["metadata"] = (objectMetadata ? objectMetadata["adminUsername"] : null);
        privateState.adminUsername = defaultValues ? (defaultValues["adminUsername"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["adminUsername"], context) : null) : null;
        context["field"] = "adminPassword";
        context["metadata"] = (objectMetadata ? objectMetadata["adminPassword"] : null);
        privateState.adminPassword = defaultValues ? (defaultValues["adminPassword"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["adminPassword"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "newUsername": {
                get: function() {
                    context["field"] = "newUsername";
                    context["metadata"] = (objectMetadata ? objectMetadata["newUsername"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.newUsername, context);
                },
                set: function(val) {
                    setterFunctions['newUsername'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "newPassword": {
                get: function() {
                    context["field"] = "newPassword";
                    context["metadata"] = (objectMetadata ? objectMetadata["newPassword"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.newPassword, context);
                },
                set: function(val) {
                    setterFunctions['newPassword'].call(this, val, privateState);
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
            "adminUsername": {
                get: function() {
                    context["field"] = "adminUsername";
                    context["metadata"] = (objectMetadata ? objectMetadata["adminUsername"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.adminUsername, context);
                },
                set: function(val) {
                    setterFunctions['adminUsername'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "adminPassword": {
                get: function() {
                    context["field"] = "adminPassword";
                    context["metadata"] = (objectMetadata ? objectMetadata["adminPassword"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.adminPassword, context);
                },
                set: function(val) {
                    setterFunctions['adminPassword'].call(this, val, privateState);
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
            privateState.newUsername = value ? (value["newUsername"] ? value["newUsername"] : null) : null;
            privateState.newPassword = value ? (value["newPassword"] ? value["newPassword"] : null) : null;
            privateState.email = value ? (value["email"] ? value["email"] : null) : null;
            privateState.countryCode = value ? (value["countryCode"] ? value["countryCode"] : null) : null;
            privateState.adminUsername = value ? (value["adminUsername"] ? value["adminUsername"] : null) : null;
            privateState.adminPassword = value ? (value["adminPassword"] ? value["adminPassword"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(DemoData);
    //Create new class level validator object
    BaseModel.Validator.call(DemoData);
    var registerValidatorBackup = DemoData.registerValidator;
    DemoData.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (DemoData.isValid(this, propName, val)) {
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
    DemoData.relations = relations;
    DemoData.prototype.isValid = function() {
        return DemoData.isValid(this);
    };
    DemoData.prototype.objModelName = "DemoData";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    DemoData.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "DemoData", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    DemoData.clone = function(objectToClone) {
        var clonedObj = new DemoData();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return DemoData;
});