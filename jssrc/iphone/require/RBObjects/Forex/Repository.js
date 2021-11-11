define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function ForexRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    ForexRepository.prototype = Object.create(BaseRepository.prototype);
    ForexRepository.prototype.constructor = ForexRepository;
    //For Operation 'fetchForexDetails' with service id 'fetchForexDetails4491'
    ForexRepository.prototype.fetchForexDetails = function(params, onCompletion) {
        return ForexRepository.prototype.customVerb('fetchForexDetails', params, onCompletion);
    };
    return ForexRepository;
})