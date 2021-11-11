/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "UserAccountAlerts",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        accountName: function(val, state) {
            context["field"] = "accountName";
            context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
            state['accountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountNumber: function(val, state) {
            context["field"] = "accountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
            state['accountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountType: function(val, state) {
            context["field"] = "accountType";
            context["metadata"] = (objectMetadata ? objectMetadata["accountType"] : null);
            state['accountType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        alertId: function(val, state) {
            context["field"] = "alertId";
            context["metadata"] = (objectMetadata ? objectMetadata["alertId"] : null);
            state['alertId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        balanceUpdate: function(val, state) {
            context["field"] = "balanceUpdate";
            context["metadata"] = (objectMetadata ? objectMetadata["balanceUpdate"] : null);
            state['balanceUpdate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        balanceUpdateTypeId: function(val, state) {
            context["field"] = "balanceUpdateTypeId";
            context["metadata"] = (objectMetadata ? objectMetadata["balanceUpdateTypeId"] : null);
            state['balanceUpdateTypeId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        checkClearance: function(val, state) {
            context["field"] = "checkClearance";
            context["metadata"] = (objectMetadata ? objectMetadata["checkClearance"] : null);
            state['checkClearance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditLimit: function(val, state) {
            context["field"] = "creditLimit";
            context["metadata"] = (objectMetadata ? objectMetadata["creditLimit"] : null);
            state['creditLimit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debitLimit: function(val, state) {
            context["field"] = "debitLimit";
            context["metadata"] = (objectMetadata ? objectMetadata["debitLimit"] : null);
            state['debitLimit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        depositDueReminder: function(val, state) {
            context["field"] = "depositDueReminder";
            context["metadata"] = (objectMetadata ? objectMetadata["depositDueReminder"] : null);
            state['depositDueReminder'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        depositDueReminderTypeId: function(val, state) {
            context["field"] = "depositDueReminderTypeId";
            context["metadata"] = (objectMetadata ? objectMetadata["depositDueReminderTypeId"] : null);
            state['depositDueReminderTypeId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isEnabled: function(val, state) {
            context["field"] = "isEnabled";
            context["metadata"] = (objectMetadata ? objectMetadata["isEnabled"] : null);
            state['isEnabled'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        minimumBalance: function(val, state) {
            context["field"] = "minimumBalance";
            context["metadata"] = (objectMetadata ? objectMetadata["minimumBalance"] : null);
            state['minimumBalance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        paymentDueReminder: function(val, state) {
            context["field"] = "paymentDueReminder";
            context["metadata"] = (objectMetadata ? objectMetadata["paymentDueReminder"] : null);
            state['paymentDueReminder'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        paymentDueReminderTypeId: function(val, state) {
            context["field"] = "paymentDueReminderTypeId";
            context["metadata"] = (objectMetadata ? objectMetadata["paymentDueReminderTypeId"] : null);
            state['paymentDueReminderTypeId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        successfulTransfer: function(val, state) {
            context["field"] = "successfulTransfer";
            context["metadata"] = (objectMetadata ? objectMetadata["successfulTransfer"] : null);
            state['successfulTransfer'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function UserAccountAlerts(defaultValues) {
        var privateState = {};
        context["field"] = "accountName";
        context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
        privateState.accountName = defaultValues ? (defaultValues["accountName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountName"], context) : null) : null;
        context["field"] = "accountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
        privateState.accountNumber = defaultValues ? (defaultValues["accountNumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountNumber"], context) : null) : null;
        context["field"] = "accountType";
        context["metadata"] = (objectMetadata ? objectMetadata["accountType"] : null);
        privateState.accountType = defaultValues ? (defaultValues["accountType"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountType"], context) : null) : null;
        context["field"] = "alertId";
        context["metadata"] = (objectMetadata ? objectMetadata["alertId"] : null);
        privateState.alertId = defaultValues ? (defaultValues["alertId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["alertId"], context) : null) : null;
        context["field"] = "balanceUpdate";
        context["metadata"] = (objectMetadata ? objectMetadata["balanceUpdate"] : null);
        privateState.balanceUpdate = defaultValues ? (defaultValues["balanceUpdate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["balanceUpdate"], context) : null) : null;
        context["field"] = "balanceUpdateTypeId";
        context["metadata"] = (objectMetadata ? objectMetadata["balanceUpdateTypeId"] : null);
        privateState.balanceUpdateTypeId = defaultValues ? (defaultValues["balanceUpdateTypeId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["balanceUpdateTypeId"], context) : null) : null;
        context["field"] = "checkClearance";
        context["metadata"] = (objectMetadata ? objectMetadata["checkClearance"] : null);
        privateState.checkClearance = defaultValues ? (defaultValues["checkClearance"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["checkClearance"], context) : null) : null;
        context["field"] = "creditLimit";
        context["metadata"] = (objectMetadata ? objectMetadata["creditLimit"] : null);
        privateState.creditLimit = defaultValues ? (defaultValues["creditLimit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditLimit"], context) : null) : null;
        context["field"] = "debitLimit";
        context["metadata"] = (objectMetadata ? objectMetadata["debitLimit"] : null);
        privateState.debitLimit = defaultValues ? (defaultValues["debitLimit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debitLimit"], context) : null) : null;
        context["field"] = "depositDueReminder";
        context["metadata"] = (objectMetadata ? objectMetadata["depositDueReminder"] : null);
        privateState.depositDueReminder = defaultValues ? (defaultValues["depositDueReminder"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["depositDueReminder"], context) : null) : null;
        context["field"] = "depositDueReminderTypeId";
        context["metadata"] = (objectMetadata ? objectMetadata["depositDueReminderTypeId"] : null);
        privateState.depositDueReminderTypeId = defaultValues ? (defaultValues["depositDueReminderTypeId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["depositDueReminderTypeId"], context) : null) : null;
        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) : null) : null;
        context["field"] = "isEnabled";
        context["metadata"] = (objectMetadata ? objectMetadata["isEnabled"] : null);
        privateState.isEnabled = defaultValues ? (defaultValues["isEnabled"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isEnabled"], context) : null) : null;
        context["field"] = "minimumBalance";
        context["metadata"] = (objectMetadata ? objectMetadata["minimumBalance"] : null);
        privateState.minimumBalance = defaultValues ? (defaultValues["minimumBalance"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["minimumBalance"], context) : null) : null;
        context["field"] = "paymentDueReminder";
        context["metadata"] = (objectMetadata ? objectMetadata["paymentDueReminder"] : null);
        privateState.paymentDueReminder = defaultValues ? (defaultValues["paymentDueReminder"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["paymentDueReminder"], context) : null) : null;
        context["field"] = "paymentDueReminderTypeId";
        context["metadata"] = (objectMetadata ? objectMetadata["paymentDueReminderTypeId"] : null);
        privateState.paymentDueReminderTypeId = defaultValues ? (defaultValues["paymentDueReminderTypeId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["paymentDueReminderTypeId"], context) : null) : null;
        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ? (defaultValues["success"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) : null) : null;
        context["field"] = "successfulTransfer";
        context["metadata"] = (objectMetadata ? objectMetadata["successfulTransfer"] : null);
        privateState.successfulTransfer = defaultValues ? (defaultValues["successfulTransfer"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["successfulTransfer"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "accountNumber": {
                get: function() {
                    context["field"] = "accountNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountNumber, context);
                },
                set: function(val) {
                    setterFunctions['accountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
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
            "alertId": {
                get: function() {
                    context["field"] = "alertId";
                    context["metadata"] = (objectMetadata ? objectMetadata["alertId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.alertId, context);
                },
                set: function(val) {
                    setterFunctions['alertId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "balanceUpdate": {
                get: function() {
                    context["field"] = "balanceUpdate";
                    context["metadata"] = (objectMetadata ? objectMetadata["balanceUpdate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.balanceUpdate, context);
                },
                set: function(val) {
                    setterFunctions['balanceUpdate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "balanceUpdateTypeId": {
                get: function() {
                    context["field"] = "balanceUpdateTypeId";
                    context["metadata"] = (objectMetadata ? objectMetadata["balanceUpdateTypeId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.balanceUpdateTypeId, context);
                },
                set: function(val) {
                    setterFunctions['balanceUpdateTypeId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkClearance": {
                get: function() {
                    context["field"] = "checkClearance";
                    context["metadata"] = (objectMetadata ? objectMetadata["checkClearance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.checkClearance, context);
                },
                set: function(val) {
                    setterFunctions['checkClearance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditLimit": {
                get: function() {
                    context["field"] = "creditLimit";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditLimit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditLimit, context);
                },
                set: function(val) {
                    setterFunctions['creditLimit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debitLimit": {
                get: function() {
                    context["field"] = "debitLimit";
                    context["metadata"] = (objectMetadata ? objectMetadata["debitLimit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debitLimit, context);
                },
                set: function(val) {
                    setterFunctions['debitLimit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "depositDueReminder": {
                get: function() {
                    context["field"] = "depositDueReminder";
                    context["metadata"] = (objectMetadata ? objectMetadata["depositDueReminder"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.depositDueReminder, context);
                },
                set: function(val) {
                    setterFunctions['depositDueReminder'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "depositDueReminderTypeId": {
                get: function() {
                    context["field"] = "depositDueReminderTypeId";
                    context["metadata"] = (objectMetadata ? objectMetadata["depositDueReminderTypeId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.depositDueReminderTypeId, context);
                },
                set: function(val) {
                    setterFunctions['depositDueReminderTypeId'].call(this, val, privateState);
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
            "isEnabled": {
                get: function() {
                    context["field"] = "isEnabled";
                    context["metadata"] = (objectMetadata ? objectMetadata["isEnabled"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isEnabled, context);
                },
                set: function(val) {
                    setterFunctions['isEnabled'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "minimumBalance": {
                get: function() {
                    context["field"] = "minimumBalance";
                    context["metadata"] = (objectMetadata ? objectMetadata["minimumBalance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.minimumBalance, context);
                },
                set: function(val) {
                    setterFunctions['minimumBalance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "paymentDueReminder": {
                get: function() {
                    context["field"] = "paymentDueReminder";
                    context["metadata"] = (objectMetadata ? objectMetadata["paymentDueReminder"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.paymentDueReminder, context);
                },
                set: function(val) {
                    setterFunctions['paymentDueReminder'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "paymentDueReminderTypeId": {
                get: function() {
                    context["field"] = "paymentDueReminderTypeId";
                    context["metadata"] = (objectMetadata ? objectMetadata["paymentDueReminderTypeId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.paymentDueReminderTypeId, context);
                },
                set: function(val) {
                    setterFunctions['paymentDueReminderTypeId'].call(this, val, privateState);
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
            "successfulTransfer": {
                get: function() {
                    context["field"] = "successfulTransfer";
                    context["metadata"] = (objectMetadata ? objectMetadata["successfulTransfer"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.successfulTransfer, context);
                },
                set: function(val) {
                    setterFunctions['successfulTransfer'].call(this, val, privateState);
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
            privateState.accountName = value ? (value["accountName"] ? value["accountName"] : null) : null;
            privateState.accountNumber = value ? (value["accountNumber"] ? value["accountNumber"] : null) : null;
            privateState.accountType = value ? (value["accountType"] ? value["accountType"] : null) : null;
            privateState.alertId = value ? (value["alertId"] ? value["alertId"] : null) : null;
            privateState.balanceUpdate = value ? (value["balanceUpdate"] ? value["balanceUpdate"] : null) : null;
            privateState.balanceUpdateTypeId = value ? (value["balanceUpdateTypeId"] ? value["balanceUpdateTypeId"] : null) : null;
            privateState.checkClearance = value ? (value["checkClearance"] ? value["checkClearance"] : null) : null;
            privateState.creditLimit = value ? (value["creditLimit"] ? value["creditLimit"] : null) : null;
            privateState.debitLimit = value ? (value["debitLimit"] ? value["debitLimit"] : null) : null;
            privateState.depositDueReminder = value ? (value["depositDueReminder"] ? value["depositDueReminder"] : null) : null;
            privateState.depositDueReminderTypeId = value ? (value["depositDueReminderTypeId"] ? value["depositDueReminderTypeId"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.isEnabled = value ? (value["isEnabled"] ? value["isEnabled"] : null) : null;
            privateState.minimumBalance = value ? (value["minimumBalance"] ? value["minimumBalance"] : null) : null;
            privateState.paymentDueReminder = value ? (value["paymentDueReminder"] ? value["paymentDueReminder"] : null) : null;
            privateState.paymentDueReminderTypeId = value ? (value["paymentDueReminderTypeId"] ? value["paymentDueReminderTypeId"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
            privateState.successfulTransfer = value ? (value["successfulTransfer"] ? value["successfulTransfer"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(UserAccountAlerts);
    //Create new class level validator object
    BaseModel.Validator.call(UserAccountAlerts);
    var registerValidatorBackup = UserAccountAlerts.registerValidator;
    UserAccountAlerts.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (UserAccountAlerts.isValid(this, propName, val)) {
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
        //For Operation 'getUserAccountAlertsForAdmin' with service id 'GetUserAccountAlertsForAdmin4127'
    UserAccountAlerts.getUserAccountAlertsForAdmin = function(params, onCompletion) {
        return UserAccountAlerts.customVerb('getUserAccountAlertsForAdmin', params, onCompletion);
    };
    var relations = [];
    UserAccountAlerts.relations = relations;
    UserAccountAlerts.prototype.isValid = function() {
        return UserAccountAlerts.isValid(this);
    };
    UserAccountAlerts.prototype.objModelName = "UserAccountAlerts";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    UserAccountAlerts.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "UserAccountAlerts", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    UserAccountAlerts.clone = function(objectToClone) {
        var clonedObj = new UserAccountAlerts();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return UserAccountAlerts;
});