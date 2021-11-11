define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function transactionRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    transactionRepository.prototype = Object.create(BaseRepository.prototype);
    transactionRepository.prototype.constructor = transactionRepository;
    //For Operation 'createBinary' with service id 'createBinarytransaction4374'
    transactionRepository.prototype.createBinary = function(params, onCompletion) {
        return transactionRepository.prototype.customVerb('createBinary', params, onCompletion);
    };
    //For Operation 'getBinary' with service id 'queryBinarytransaction8932'
    transactionRepository.prototype.getBinary = function(params, onCompletion) {
        return transactionRepository.prototype.customVerb('getBinary', params, onCompletion);
    };
    //For Operation 'deleteBinary' with service id 'deleteBinarytransaction5277'
    transactionRepository.prototype.deleteBinary = function(params, onCompletion) {
        return transactionRepository.prototype.customVerb('deleteBinary', params, onCompletion);
    };
    //For Operation 'updateBinary' with service id 'updateBinarytransaction6650'
    transactionRepository.prototype.updateBinary = function(params, onCompletion) {
        return transactionRepository.prototype.customVerb('updateBinary', params, onCompletion);
    };
    return transactionRepository;
})