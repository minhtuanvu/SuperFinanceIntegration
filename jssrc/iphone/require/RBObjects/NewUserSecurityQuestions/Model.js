/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "NewUserSecurityQuestions",
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
        QuestionId: function(val, state) {
            context["field"] = "QuestionId";
            context["metadata"] = (objectMetadata ? objectMetadata["QuestionId"] : null);
            state['QuestionId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userSecurityQuestionsList: function(val, state) {
            context["field"] = "userSecurityQuestionsList";
            context["metadata"] = (objectMetadata ? objectMetadata["userSecurityQuestionsList"] : null);
            state['userSecurityQuestionsList'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function NewUserSecurityQuestions(defaultValues) {
        var privateState = {};
        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) : null) : null;
        context["field"] = "question";
        context["metadata"] = (objectMetadata ? objectMetadata["question"] : null);
        privateState.question = defaultValues ? (defaultValues["question"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["question"], context) : null) : null;
        context["field"] = "QuestionId";
        context["metadata"] = (objectMetadata ? objectMetadata["QuestionId"] : null);
        privateState.QuestionId = defaultValues ? (defaultValues["QuestionId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["QuestionId"], context) : null) : null;
        context["field"] = "userSecurityQuestionsList";
        context["metadata"] = (objectMetadata ? objectMetadata["userSecurityQuestionsList"] : null);
        privateState.userSecurityQuestionsList = defaultValues ? (defaultValues["userSecurityQuestionsList"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userSecurityQuestionsList"], context) : null) : null;
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
            "QuestionId": {
                get: function() {
                    context["field"] = "QuestionId";
                    context["metadata"] = (objectMetadata ? objectMetadata["QuestionId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.QuestionId, context);
                },
                set: function(val) {
                    setterFunctions['QuestionId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userSecurityQuestionsList": {
                get: function() {
                    context["field"] = "userSecurityQuestionsList";
                    context["metadata"] = (objectMetadata ? objectMetadata["userSecurityQuestionsList"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userSecurityQuestionsList, context);
                },
                set: function(val) {
                    setterFunctions['userSecurityQuestionsList'].call(this, val, privateState);
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
            privateState.QuestionId = value ? (value["QuestionId"] ? value["QuestionId"] : null) : null;
            privateState.userSecurityQuestionsList = value ? (value["userSecurityQuestionsList"] ? value["userSecurityQuestionsList"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(NewUserSecurityQuestions);
    //Create new class level validator object
    BaseModel.Validator.call(NewUserSecurityQuestions);
    var registerValidatorBackup = NewUserSecurityQuestions.registerValidator;
    NewUserSecurityQuestions.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (NewUserSecurityQuestions.isValid(this, propName, val)) {
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
    NewUserSecurityQuestions.relations = relations;
    NewUserSecurityQuestions.prototype.isValid = function() {
        return NewUserSecurityQuestions.isValid(this);
    };
    NewUserSecurityQuestions.prototype.objModelName = "NewUserSecurityQuestions";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    NewUserSecurityQuestions.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "NewUserSecurityQuestions", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    NewUserSecurityQuestions.clone = function(objectToClone) {
        var clonedObj = new NewUserSecurityQuestions();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return NewUserSecurityQuestions;
});