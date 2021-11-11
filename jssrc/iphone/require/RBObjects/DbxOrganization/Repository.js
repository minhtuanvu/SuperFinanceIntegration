define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function DbxOrganizationRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    DbxOrganizationRepository.prototype = Object.create(BaseRepository.prototype);
    DbxOrganizationRepository.prototype.constructor = DbxOrganizationRepository;
    //For Operation 'updateOrganization' with service id 'UpdateOrganisation1311'
    DbxOrganizationRepository.prototype.updateOrganization = function(params, onCompletion) {
        return DbxOrganizationRepository.prototype.customVerb('updateOrganization', params, onCompletion);
    };
    //For Operation 'getCompanyDetails' with service id 'GetMembershipDetails5563'
    DbxOrganizationRepository.prototype.getCompanyDetails = function(params, onCompletion) {
        return DbxOrganizationRepository.prototype.customVerb('getCompanyDetails', params, onCompletion);
    };
    //For Operation 'CreateMicroOrganizationEmployeeForAdmin' with service id 'CreateMicroOrganizationEmployee6310'
    DbxOrganizationRepository.prototype.CreateMicroOrganizationEmployeeForAdmin = function(params, onCompletion) {
        return DbxOrganizationRepository.prototype.customVerb('CreateMicroOrganizationEmployeeForAdmin', params, onCompletion);
    };
    //For Operation 'getListOfOrganizationsByStatus' with service id 'GetListOfOrganisationsByStatus9888'
    DbxOrganizationRepository.prototype.getListOfOrganizationsByStatus = function(params, onCompletion) {
        return DbxOrganizationRepository.prototype.customVerb('getListOfOrganizationsByStatus', params, onCompletion);
    };
    //For Operation 'createOrganization' with service id 'CreateOrganisation3127'
    DbxOrganizationRepository.prototype.createOrganization = function(params, onCompletion) {
        return DbxOrganizationRepository.prototype.customVerb('createOrganization', params, onCompletion);
    };
    //For Operation 'updateOrganizationStatus' with service id 'UpdateOrganizationStatus8049'
    DbxOrganizationRepository.prototype.updateOrganizationStatus = function(params, onCompletion) {
        return DbxOrganizationRepository.prototype.customVerb('updateOrganizationStatus', params, onCompletion);
    };
    //For Operation 'updateOrganizationEmployee' with service id 'EditOrganizationEmployee9714'
    DbxOrganizationRepository.prototype.updateOrganizationEmployee = function(params, onCompletion) {
        return DbxOrganizationRepository.prototype.customVerb('updateOrganizationEmployee', params, onCompletion);
    };
    //For Operation 'getOrganizationBusinessTypeSignatories' with service id 'getOrganizationBusinessTypeSignatoryList2613'
    DbxOrganizationRepository.prototype.getOrganizationBusinessTypeSignatories = function(params, onCompletion) {
        return DbxOrganizationRepository.prototype.customVerb('getOrganizationBusinessTypeSignatories', params, onCompletion);
    };
    //For Operation 'unLinkOrgAccounts' with service id 'unlinkOrganizationAccounts7684'
    DbxOrganizationRepository.prototype.unLinkOrgAccounts = function(params, onCompletion) {
        return DbxOrganizationRepository.prototype.customVerb('unLinkOrgAccounts', params, onCompletion);
    };
    //For Operation 'CreateSmallOrganizationEmployeeForAdmin' with service id 'CreateSmallOrganizationEmployee9037'
    DbxOrganizationRepository.prototype.CreateSmallOrganizationEmployeeForAdmin = function(params, onCompletion) {
        return DbxOrganizationRepository.prototype.customVerb('CreateSmallOrganizationEmployeeForAdmin', params, onCompletion);
    };
    //For Operation 'EditOrganizationEmployeeForAdmin' with service id 'EditOrganizationEmployee5944'
    DbxOrganizationRepository.prototype.EditOrganizationEmployeeForAdmin = function(params, onCompletion) {
        return DbxOrganizationRepository.prototype.customVerb('EditOrganizationEmployeeForAdmin', params, onCompletion);
    };
    //For Operation 'suspendOrganisationFeatures' with service id 'suspendOrganisationFeatures3023'
    DbxOrganizationRepository.prototype.suspendOrganisationFeatures = function(params, onCompletion) {
        return DbxOrganizationRepository.prototype.customVerb('suspendOrganisationFeatures', params, onCompletion);
    };
    //For Operation 'getOrganizationAccountsHolderDetails' with service id 'GetOrganizationAccountHolderDetails7679'
    DbxOrganizationRepository.prototype.getOrganizationAccountsHolderDetails = function(params, onCompletion) {
        return DbxOrganizationRepository.prototype.customVerb('getOrganizationAccountsHolderDetails', params, onCompletion);
    };
    return DbxOrganizationRepository;
})