define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function GetInstrumentMinimalRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    GetInstrumentMinimalRepository.prototype = Object.create(BaseRepository.prototype);
    GetInstrumentMinimalRepository.prototype.constructor = GetInstrumentMinimalRepository;
    //For Operation 'getInstrumentMinimal' with service id 'getInstrumentMinimal6469'
    GetInstrumentMinimalRepository.prototype.getInstrumentMinimal = function(params, onCompletion) {
        return GetInstrumentMinimalRepository.prototype.customVerb('getInstrumentMinimal', params, onCompletion);
    };
    return GetInstrumentMinimalRepository;
})