define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function intrabanktransfersRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    intrabanktransfersRepository.prototype = Object.create(BaseRepository.prototype);
    intrabanktransfersRepository.prototype.constructor = intrabanktransfersRepository;
    //For Operation 'createBinary' with service id 'createBinaryintrabanktransfers8307'
    intrabanktransfersRepository.prototype.createBinary = function(params, onCompletion) {
        return intrabanktransfersRepository.prototype.customVerb('createBinary', params, onCompletion);
    };
    //For Operation 'getBinary' with service id 'queryBinaryintrabanktransfers1072'
    intrabanktransfersRepository.prototype.getBinary = function(params, onCompletion) {
        return intrabanktransfersRepository.prototype.customVerb('getBinary', params, onCompletion);
    };
    //For Operation 'updateBinary' with service id 'updateBinaryintrabanktransfers3474'
    intrabanktransfersRepository.prototype.updateBinary = function(params, onCompletion) {
        return intrabanktransfersRepository.prototype.customVerb('updateBinary', params, onCompletion);
    };
    //For Operation 'deleteBinary' with service id 'deleteBinaryintrabanktransfers8713'
    intrabanktransfersRepository.prototype.deleteBinary = function(params, onCompletion) {
        return intrabanktransfersRepository.prototype.customVerb('deleteBinary', params, onCompletion);
    };
    return intrabanktransfersRepository;
})