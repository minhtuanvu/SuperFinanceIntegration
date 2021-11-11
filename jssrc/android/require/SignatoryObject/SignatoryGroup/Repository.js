define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function SignatoryGroupRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    SignatoryGroupRepository.prototype = Object.create(BaseRepository.prototype);
    SignatoryGroupRepository.prototype.constructor = SignatoryGroupRepository;
    //For Operation 'updateSignatoryGroup' with service id 'updateSignatoryGroup8670'
    SignatoryGroupRepository.prototype.updateSignatoryGroup = function(params, onCompletion) {
        return SignatoryGroupRepository.prototype.customVerb('updateSignatoryGroup', params, onCompletion);
    };
    //For Operation 'fetchSignatoryGroupDetails' with service id 'fetchSignatoryGroupDetails6713'
    SignatoryGroupRepository.prototype.fetchSignatoryGroupDetails = function(params, onCompletion) {
        return SignatoryGroupRepository.prototype.customVerb('fetchSignatoryGroupDetails', params, onCompletion);
    };
    //For Operation 'createSignatoryGroup' with service id 'createSignatoryGroup5667'
    SignatoryGroupRepository.prototype.createSignatoryGroup = function(params, onCompletion) {
        return SignatoryGroupRepository.prototype.customVerb('createSignatoryGroup', params, onCompletion);
    };
    //For Operation 'fetchEligibleSignatoryUsers' with service id 'fetchEligibleSignatoryUsers8249'
    SignatoryGroupRepository.prototype.fetchEligibleSignatoryUsers = function(params, onCompletion) {
        return SignatoryGroupRepository.prototype.customVerb('fetchEligibleSignatoryUsers', params, onCompletion);
    };
    //For Operation 'fetchSignatoryGroups' with service id 'fetchSignatoryGroups7038'
    SignatoryGroupRepository.prototype.fetchSignatoryGroups = function(params, onCompletion) {
        return SignatoryGroupRepository.prototype.customVerb('fetchSignatoryGroups', params, onCompletion);
    };
    return SignatoryGroupRepository;
})