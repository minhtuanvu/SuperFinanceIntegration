define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function interbankfundtransfersRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    interbankfundtransfersRepository.prototype = Object.create(BaseRepository.prototype);
    interbankfundtransfersRepository.prototype.constructor = interbankfundtransfersRepository;
    //For Operation 'createBinary' with service id 'createBinaryinterbankfundtransfers5393'
    interbankfundtransfersRepository.prototype.createBinary = function(params, onCompletion) {
        return interbankfundtransfersRepository.prototype.customVerb('createBinary', params, onCompletion);
    };
    //For Operation 'getBinary' with service id 'queryBinaryinterbankfundtransfers1231'
    interbankfundtransfersRepository.prototype.getBinary = function(params, onCompletion) {
        return interbankfundtransfersRepository.prototype.customVerb('getBinary', params, onCompletion);
    };
    //For Operation 'updateBinary' with service id 'updateBinaryinterbankfundtransfers1397'
    interbankfundtransfersRepository.prototype.updateBinary = function(params, onCompletion) {
        return interbankfundtransfersRepository.prototype.customVerb('updateBinary', params, onCompletion);
    };
    //For Operation 'deleteBinary' with service id 'deleteBinaryinterbankfundtransfers1580'
    interbankfundtransfersRepository.prototype.deleteBinary = function(params, onCompletion) {
        return interbankfundtransfersRepository.prototype.customVerb('deleteBinary', params, onCompletion);
    };
    return interbankfundtransfersRepository;
})