define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function ConnectionsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    ConnectionsRepository.prototype = Object.create(BaseRepository.prototype);
    ConnectionsRepository.prototype.constructor = ConnectionsRepository;
    //For Operation 'loadConnections' with service id 'getConnections4533'
    ConnectionsRepository.prototype.loadConnections = function(params, onCompletion) {
        return ConnectionsRepository.prototype.customVerb('loadConnections', params, onCompletion);
    };
    //For Operation 'deleteConnections' with service id 'deleteConnection6998'
    ConnectionsRepository.prototype.deleteConnections = function(params, onCompletion) {
        return ConnectionsRepository.prototype.customVerb('deleteConnections', params, onCompletion);
    };
    return ConnectionsRepository;
})