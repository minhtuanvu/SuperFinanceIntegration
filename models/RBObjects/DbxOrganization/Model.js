/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "DbxOrganization", "objectService" : "RBObjects"};

    var setterFunctions = {
    };

    //Create the Model Class
    function DbxOrganization(defaultValues) {
        var privateState = {};

        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(DbxOrganization);

    //Create new class level validator object
    BaseModel.Validator.call(DbxOrganization);

    var registerValidatorBackup = DbxOrganization.registerValidator;

    DbxOrganization.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(DbxOrganization.isValid(this, propName, val)) {
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
    //For Operation 'updateOrganization' with service id 'UpdateOrganisation1311'
     DbxOrganization.updateOrganization = function(params, onCompletion){
        return DbxOrganization.customVerb('updateOrganization', params, onCompletion);
     };

    //For Operation 'getCompanyDetails' with service id 'GetMembershipDetails5563'
     DbxOrganization.getCompanyDetails = function(params, onCompletion){
        return DbxOrganization.customVerb('getCompanyDetails', params, onCompletion);
     };

    //For Operation 'CreateMicroOrganizationEmployeeForAdmin' with service id 'CreateMicroOrganizationEmployee6310'
     DbxOrganization.CreateMicroOrganizationEmployeeForAdmin = function(params, onCompletion){
        return DbxOrganization.customVerb('CreateMicroOrganizationEmployeeForAdmin', params, onCompletion);
     };

    //For Operation 'getListOfOrganizationsByStatus' with service id 'GetListOfOrganisationsByStatus9888'
     DbxOrganization.getListOfOrganizationsByStatus = function(params, onCompletion){
        return DbxOrganization.customVerb('getListOfOrganizationsByStatus', params, onCompletion);
     };

    //For Operation 'createOrganization' with service id 'CreateOrganisation3127'
     DbxOrganization.createOrganization = function(params, onCompletion){
        return DbxOrganization.customVerb('createOrganization', params, onCompletion);
     };

    //For Operation 'updateOrganizationStatus' with service id 'UpdateOrganizationStatus8049'
     DbxOrganization.updateOrganizationStatus = function(params, onCompletion){
        return DbxOrganization.customVerb('updateOrganizationStatus', params, onCompletion);
     };

    //For Operation 'updateOrganizationEmployee' with service id 'EditOrganizationEmployee9714'
     DbxOrganization.updateOrganizationEmployee = function(params, onCompletion){
        return DbxOrganization.customVerb('updateOrganizationEmployee', params, onCompletion);
     };

    //For Operation 'getOrganizationBusinessTypeSignatories' with service id 'getOrganizationBusinessTypeSignatoryList2613'
     DbxOrganization.getOrganizationBusinessTypeSignatories = function(params, onCompletion){
        return DbxOrganization.customVerb('getOrganizationBusinessTypeSignatories', params, onCompletion);
     };

    //For Operation 'unLinkOrgAccounts' with service id 'unlinkOrganizationAccounts7684'
     DbxOrganization.unLinkOrgAccounts = function(params, onCompletion){
        return DbxOrganization.customVerb('unLinkOrgAccounts', params, onCompletion);
     };

    //For Operation 'CreateSmallOrganizationEmployeeForAdmin' with service id 'CreateSmallOrganizationEmployee9037'
     DbxOrganization.CreateSmallOrganizationEmployeeForAdmin = function(params, onCompletion){
        return DbxOrganization.customVerb('CreateSmallOrganizationEmployeeForAdmin', params, onCompletion);
     };

    //For Operation 'EditOrganizationEmployeeForAdmin' with service id 'EditOrganizationEmployee5944'
     DbxOrganization.EditOrganizationEmployeeForAdmin = function(params, onCompletion){
        return DbxOrganization.customVerb('EditOrganizationEmployeeForAdmin', params, onCompletion);
     };

    //For Operation 'suspendOrganisationFeatures' with service id 'suspendOrganisationFeatures3023'
     DbxOrganization.suspendOrganisationFeatures = function(params, onCompletion){
        return DbxOrganization.customVerb('suspendOrganisationFeatures', params, onCompletion);
     };

    //For Operation 'getOrganizationAccountsHolderDetails' with service id 'GetOrganizationAccountHolderDetails7679'
     DbxOrganization.getOrganizationAccountsHolderDetails = function(params, onCompletion){
        return DbxOrganization.customVerb('getOrganizationAccountsHolderDetails', params, onCompletion);
     };

    var relations = [];

    DbxOrganization.relations = relations;

    DbxOrganization.prototype.isValid = function() {
        return DbxOrganization.isValid(this);
    };

    DbxOrganization.prototype.objModelName = "DbxOrganization";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    DbxOrganization.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "DbxOrganization", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    DbxOrganization.clone = function(objectToClone) {
        var clonedObj = new DbxOrganization();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return DbxOrganization;
});