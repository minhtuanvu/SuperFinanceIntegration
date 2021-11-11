define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function ownaccounttransfersRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    ownaccounttransfersRepository.prototype = Object.create(BaseRepository.prototype);
    ownaccounttransfersRepository.prototype.constructor = ownaccounttransfersRepository;
    //For Operation 'createBinary' with service id 'createBinaryownaccounttransfers3891'
    ownaccounttransfersRepository.prototype.createBinary = function(params, onCompletion) {
        return ownaccounttransfersRepository.prototype.customVerb('createBinary', params, onCompletion);
    };
    //For Operation 'getBinary' with service id 'queryBinaryownaccounttransfers9194'
    ownaccounttransfersRepository.prototype.getBinary = function(params, onCompletion) {
        return ownaccounttransfersRepository.prototype.customVerb('getBinary', params, onCompletion);
    };
    //For Operation 'updateBinary' with service id 'updateBinaryownaccounttransfers7374'
    ownaccounttransfersRepository.prototype.updateBinary = function(params, onCompletion) {
        return ownaccounttransfersRepository.prototype.customVerb('updateBinary', params, onCompletion);
    };
    //For Operation 'deleteBinary' with service id 'deleteBinaryownaccounttransfers9700'
    ownaccounttransfersRepository.prototype.deleteBinary = function(params, onCompletion) {
        return ownaccounttransfersRepository.prototype.customVerb('deleteBinary', params, onCompletion);
    };
    return ownaccounttransfersRepository;
})