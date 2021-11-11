/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "CheckOrder",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        accountID: function(val, state) {
            context["field"] = "accountID";
            context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
            state['accountID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountName: function(val, state) {
            context["field"] = "accountName";
            context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
            state['accountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountNickName: function(val, state) {
            context["field"] = "accountNickName";
            context["metadata"] = (objectMetadata ? objectMetadata["accountNickName"] : null);
            state['accountNickName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        checkOrderID: function(val, state) {
            context["field"] = "checkOrderID";
            context["metadata"] = (objectMetadata ? objectMetadata["checkOrderID"] : null);
            state['checkOrderID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        country: function(val, state) {
            context["field"] = "country";
            context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
            state['country'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        leafCount: function(val, state) {
            context["field"] = "leafCount";
            context["metadata"] = (objectMetadata ? objectMetadata["leafCount"] : null);
            state['leafCount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        name: function(val, state) {
            context["field"] = "name";
            context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
            state['name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        orderTime: function(val, state) {
            context["field"] = "orderTime";
            context["metadata"] = (objectMetadata ? objectMetadata["orderTime"] : null);
            state['orderTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        postboxNumber: function(val, state) {
            context["field"] = "postboxNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["postboxNumber"] : null);
            state['postboxNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        state: function(val, state) {
            context["field"] = "state";
            context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
            state['state'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        status: function(val, state) {
            context["field"] = "status";
            context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
            state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        zipcode: function(val, state) {
            context["field"] = "zipcode";
            context["metadata"] = (objectMetadata ? objectMetadata["zipcode"] : null);
            state['zipcode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function CheckOrder(defaultValues) {
        var privateState = {};
        context["field"] = "accountID";
        context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
        privateState.accountID = defaultValues ? (defaultValues["accountID"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountID"], context) : null) : null;
        context["field"] = "accountName";
        context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
        privateState.accountName = defaultValues ? (defaultValues["accountName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountName"], context) : null) : null;
        context["field"] = "accountNickName";
        context["metadata"] = (objectMetadata ? objectMetadata["accountNickName"] : null);
        privateState.accountNickName = defaultValues ? (defaultValues["accountNickName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountNickName"], context) : null) : null;
        context["field"] = "checkOrderID";
        context["metadata"] = (objectMetadata ? objectMetadata["checkOrderID"] : null);
        privateState.checkOrderID = defaultValues ? (defaultValues["checkOrderID"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["checkOrderID"], context) : null) : null;
        context["field"] = "country";
        context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
        privateState.country = defaultValues ? (defaultValues["country"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["country"], context) : null) : null;
        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) : null) : null;
        context["field"] = "leafCount";
        context["metadata"] = (objectMetadata ? objectMetadata["leafCount"] : null);
        privateState.leafCount = defaultValues ? (defaultValues["leafCount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["leafCount"], context) : null) : null;
        context["field"] = "name";
        context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
        privateState.name = defaultValues ? (defaultValues["name"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["name"], context) : null) : null;
        context["field"] = "orderTime";
        context["metadata"] = (objectMetadata ? objectMetadata["orderTime"] : null);
        privateState.orderTime = defaultValues ? (defaultValues["orderTime"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["orderTime"], context) : null) : null;
        context["field"] = "postboxNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["postboxNumber"] : null);
        privateState.postboxNumber = defaultValues ? (defaultValues["postboxNumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["postboxNumber"], context) : null) : null;
        context["field"] = "state";
        context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
        privateState.state = defaultValues ? (defaultValues["state"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["state"], context) : null) : null;
        context["field"] = "status";
        context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
        privateState.status = defaultValues ? (defaultValues["status"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context) : null) : null;
        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ? (defaultValues["success"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) : null) : null;
        context["field"] = "zipcode";
        context["metadata"] = (objectMetadata ? objectMetadata["zipcode"] : null);
        privateState.zipcode = defaultValues ? (defaultValues["zipcode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["zipcode"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "accountID": {
                get: function() {
                    context["field"] = "accountID";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountID, context);
                },
                set: function(val) {
                    setterFunctions['accountID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountName": {
                get: function() {
                    context["field"] = "accountName";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountName, context);
                },
                set: function(val) {
                    setterFunctions['accountName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountNickName": {
                get: function() {
                    context["field"] = "accountNickName";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountNickName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountNickName, context);
                },
                set: function(val) {
                    setterFunctions['accountNickName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkOrderID": {
                get: function() {
                    context["field"] = "checkOrderID";
                    context["metadata"] = (objectMetadata ? objectMetadata["checkOrderID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.checkOrderID, context);
                },
                set: function(val) {
                    setterFunctions['checkOrderID'].call(this, val, privateState);
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
            "leafCount": {
                get: function() {
                    context["field"] = "leafCount";
                    context["metadata"] = (objectMetadata ? objectMetadata["leafCount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.leafCount, context);
                },
                set: function(val) {
                    setterFunctions['leafCount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "name": {
                get: function() {
                    context["field"] = "name";
                    context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.name, context);
                },
                set: function(val) {
                    setterFunctions['name'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "orderTime": {
                get: function() {
                    context["field"] = "orderTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["orderTime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.orderTime, context);
                },
                set: function(val) {
                    setterFunctions['orderTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "postboxNumber": {
                get: function() {
                    context["field"] = "postboxNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["postboxNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.postboxNumber, context);
                },
                set: function(val) {
                    setterFunctions['postboxNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "state": {
                get: function() {
                    context["field"] = "state";
                    context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.state, context);
                },
                set: function(val) {
                    setterFunctions['state'].call(this, val, privateState);
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
            "zipcode": {
                get: function() {
                    context["field"] = "zipcode";
                    context["metadata"] = (objectMetadata ? objectMetadata["zipcode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.zipcode, context);
                },
                set: function(val) {
                    setterFunctions['zipcode'].call(this, val, privateState);
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
            privateState.accountID = value ? (value["accountID"] ? value["accountID"] : null) : null;
            privateState.accountName = value ? (value["accountName"] ? value["accountName"] : null) : null;
            privateState.accountNickName = value ? (value["accountNickName"] ? value["accountNickName"] : null) : null;
            privateState.checkOrderID = value ? (value["checkOrderID"] ? value["checkOrderID"] : null) : null;
            privateState.country = value ? (value["country"] ? value["country"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.leafCount = value ? (value["leafCount"] ? value["leafCount"] : null) : null;
            privateState.name = value ? (value["name"] ? value["name"] : null) : null;
            privateState.orderTime = value ? (value["orderTime"] ? value["orderTime"] : null) : null;
            privateState.postboxNumber = value ? (value["postboxNumber"] ? value["postboxNumber"] : null) : null;
            privateState.state = value ? (value["state"] ? value["state"] : null) : null;
            privateState.status = value ? (value["status"] ? value["status"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
            privateState.zipcode = value ? (value["zipcode"] ? value["zipcode"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(CheckOrder);
    //Create new class level validator object
    BaseModel.Validator.call(CheckOrder);
    var registerValidatorBackup = CheckOrder.registerValidator;
    CheckOrder.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (CheckOrder.isValid(this, propName, val)) {
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
    CheckOrder.relations = relations;
    CheckOrder.prototype.isValid = function() {
        return CheckOrder.isValid(this);
    };
    CheckOrder.prototype.objModelName = "CheckOrder";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    CheckOrder.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "CheckOrder", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    CheckOrder.clone = function(objectToClone) {
        var clonedObj = new CheckOrder();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return CheckOrder;
});