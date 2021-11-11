define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function BusinessRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    BusinessRepository.prototype = Object.create(BaseRepository.prototype);
    BusinessRepository.prototype.constructor = BusinessRepository;
    //For Operation 'getBusinessTypeRoles' with service id 'GetBusinessTypeRoles3111'
    BusinessRepository.prototype.getBusinessTypeRoles = function(params, onCompletion) {
        return BusinessRepository.prototype.customVerb('getBusinessTypeRoles', params, onCompletion);
    };
    //For Operation 'getBusinessTypes' with service id 'GetBusinessTypes5523'
    BusinessRepository.prototype.getBusinessTypes = function(params, onCompletion) {
        return BusinessRepository.prototype.customVerb('getBusinessTypes', params, onCompletion);
    };
    return BusinessRepository;
})