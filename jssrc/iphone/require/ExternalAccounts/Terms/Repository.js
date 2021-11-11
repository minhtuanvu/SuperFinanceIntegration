define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function TermsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    TermsRepository.prototype = Object.create(BaseRepository.prototype);
    TermsRepository.prototype.constructor = TermsRepository;
    //For Operation 'getTermsAndConditions' with service id 'getTermsAndConditions8858'
    TermsRepository.prototype.getTermsAndConditions = function(params, onCompletion) {
        return TermsRepository.prototype.customVerb('getTermsAndConditions', params, onCompletion);
    };
    return TermsRepository;
})