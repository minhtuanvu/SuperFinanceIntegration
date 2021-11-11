define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function SavingsPotRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    SavingsPotRepository.prototype = Object.create(BaseRepository.prototype);
    SavingsPotRepository.prototype.constructor = SavingsPotRepository;
    //For Operation 'createSavingsPot' with service id 'createSavingsPot7507'
    SavingsPotRepository.prototype.createSavingsPot = function(params, onCompletion) {
        return SavingsPotRepository.prototype.customVerb('createSavingsPot', params, onCompletion);
    };
    //For Operation 'updateSavingsPot' with service id 'updateSavingsPot9306'
    SavingsPotRepository.prototype.updateSavingsPot = function(params, onCompletion) {
        return SavingsPotRepository.prototype.customVerb('updateSavingsPot', params, onCompletion);
    };
    //For Operation 'getAllSavingsPot' with service id 'getAllSavingsPot3916'
    SavingsPotRepository.prototype.getAllSavingsPot = function(params, onCompletion) {
        return SavingsPotRepository.prototype.customVerb('getAllSavingsPot', params, onCompletion);
    };
    //For Operation 'updateSavingsPotBalance' with service id 'updateSavingsPotBalance8223'
    SavingsPotRepository.prototype.updateSavingsPotBalance = function(params, onCompletion) {
        return SavingsPotRepository.prototype.customVerb('updateSavingsPotBalance', params, onCompletion);
    };
    //For Operation 'closeSavingsPot' with service id 'closeSavingsPot2736'
    SavingsPotRepository.prototype.closeSavingsPot = function(params, onCompletion) {
        return SavingsPotRepository.prototype.customVerb('closeSavingsPot', params, onCompletion);
    };
    return SavingsPotRepository;
})