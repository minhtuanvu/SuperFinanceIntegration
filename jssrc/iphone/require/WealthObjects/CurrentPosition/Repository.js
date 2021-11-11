define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function CurrentPositionRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    CurrentPositionRepository.prototype = Object.create(BaseRepository.prototype);
    CurrentPositionRepository.prototype.constructor = CurrentPositionRepository;
    //For Operation 'getCurrentPosition' with service id 'getCurrentPosition3980'
    CurrentPositionRepository.prototype.getCurrentPosition = function(params, onCompletion) {
        return CurrentPositionRepository.prototype.customVerb('getCurrentPosition', params, onCompletion);
    };
    return CurrentPositionRepository;
})