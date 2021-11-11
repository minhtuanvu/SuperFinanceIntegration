/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "UserSecurityQuestions",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        question: function(val, state) {
            context["field"] = "question";
            context["metadata"] = (objectMetadata ? objectMetadata["question"] : null);
            state['question'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        question_id: function(val, state) {
            context["field"] = "question_id";
            context["metadata"] = (objectMetadata ? objectMetadata["question_id"] : null);
            state['question_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userId: function(val, state) {
            context["field"] = "userId";
            context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
            state['userId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userName: function(val, state) {
            context["field"] = "userName";
            context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
            state['userName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        usersecurityli: function(val, state) {
            context["field"] = "usersecurityli";
            context["metadata"] = (objectMetadata ? objectMetadata["usersecurityli"] : null);
            state['usersecurityli'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function UserSecurityQuestions(defaultValues) {
        var privateState = {};
        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) : null) : null;
        context["field"] = "question";
        context["metadata"] = (objectMetadata ? objectMetadata["question"] : null);
        privateState.question = defaultValues ? (defaultValues["question"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["question"], context) : null) : null;
        context["field"] = "question_id";
        context["metadata"] = (objectMetadata ? objectMetadata["question_id"] : null);
        privateState.question_id = defaultValues ? (defaultValues["question_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["question_id"], context) : null) : null;
        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ? (defaultValues["success"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) : null) : null;
        context["field"] = "userId";
        context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
        privateState.userId = defaultValues ? (defaultValues["userId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userId"], context) : null) : null;
        context["field"] = "userName";
        context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
        privateState.userName = defaultValues ? (defaultValues["userName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userName"], context) : null) : null;
        context["field"] = "usersecurityli";
        context["metadata"] = (objectMetadata ? objectMetadata["usersecurityli"] : null);
        privateState.usersecurityli = defaultValues ? (defaultValues["usersecurityli"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["usersecurityli"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "question": {
                get: function() {
                    context["field"] = "question";
                    context["metadata"] = (objectMetadata ? objectMetadata["question"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.question, context);
                },
                set: function(val) {
                    setterFunctions['question'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "question_id": {
                get: function() {
                    context["field"] = "question_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["question_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.question_id, context);
                },
                set: function(val) {
                    setterFunctions['question_id'].call(this, val, privateState);
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
            "userId": {
                get: function() {
                    context["field"] = "userId";
                    context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userId, context);
                },
                set: function(val) {
                    setterFunctions['userId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userName": {
                get: function() {
                    context["field"] = "userName";
                    context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userName, context);
                },
                set: function(val) {
                    setterFunctions['userName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "usersecurityli": {
                get: function() {
                    context["field"] = "usersecurityli";
                    context["metadata"] = (objectMetadata ? objectMetadata["usersecurityli"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.usersecurityli, context);
                },
                set: function(val) {
                    setterFunctions['usersecurityli'].call(this, val, privateState);
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
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.question = value ? (value["question"] ? value["question"] : null) : null;
            privateState.question_id = value ? (value["question_id"] ? value["question_id"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
            privateState.userId = value ? (value["userId"] ? value["userId"] : null) : null;
            privateState.userName = value ? (value["userName"] ? value["userName"] : null) : null;
            privateState.usersecurityli = value ? (value["usersecurityli"] ? value["usersecurityli"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(UserSecurityQuestions);
    //Create new class level validator object
    BaseModel.Validator.call(UserSecurityQuestions);
    var registerValidatorBackup = UserSecurityQuestions.registerValidator;
    UserSecurityQuestions.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (UserSecurityQuestions.isValid(this, propName, val)) {
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
        //For Operation 'updateUserSecurityQuestions' with service id 'updateUserSecurityQuestions3263'
    UserSecurityQuestions.updateUserSecurityQuestions = function(params, onCompletion) {
        return UserSecurityQuestions.customVerb('updateUserSecurityQuestions', params, onCompletion);
    };
    //For Operation 'verifyUserSecurityQuestions' with service id 'verifyUserSecurityQuestions2404'
    UserSecurityQuestions.verifyUserSecurityQuestions = function(params, onCompletion) {
        return UserSecurityQuestions.customVerb('verifyUserSecurityQuestions', params, onCompletion);
    };
    var relations = [];
    UserSecurityQuestions.relations = relations;
    UserSecurityQuestions.prototype.isValid = function() {
        return UserSecurityQuestions.isValid(this);
    };
    UserSecurityQuestions.prototype.objModelName = "UserSecurityQuestions";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    UserSecurityQuestions.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "UserSecurityQuestions", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    UserSecurityQuestions.clone = function(objectToClone) {
        var clonedObj = new UserSecurityQuestions();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return UserSecurityQuestions;
});