define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function CustomerFeaturesRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    CustomerFeaturesRepository.prototype = Object.create(BaseRepository.prototype);
    CustomerFeaturesRepository.prototype.constructor = CustomerFeaturesRepository;
    //For Operation 'getCustomerFeatureDetails' with service id 'getCustomerFeatureDetails3559'
    CustomerFeaturesRepository.prototype.getCustomerFeatureDetails = function(params, onCompletion) {
        return CustomerFeaturesRepository.prototype.customVerb('getCustomerFeatureDetails', params, onCompletion);
    };
    return CustomerFeaturesRepository;
})