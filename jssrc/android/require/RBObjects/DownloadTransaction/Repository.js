define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function DownloadTransactionRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    DownloadTransactionRepository.prototype = Object.create(BaseRepository.prototype);
    DownloadTransactionRepository.prototype.constructor = DownloadTransactionRepository;
    //For Operation 'GenerateTransactionReport' with service id 'GenerateTransactionPDF3559'
    DownloadTransactionRepository.prototype.GenerateTransactionReport = function(params, onCompletion) {
        return DownloadTransactionRepository.prototype.customVerb('GenerateTransactionReport', params, onCompletion);
    };
    //For Operation 'generateTransactionDetails' with service id 'GenerateTransactionsDetails9283'
    DownloadTransactionRepository.prototype.generateTransactionDetails = function(params, onCompletion) {
        return DownloadTransactionRepository.prototype.customVerb('generateTransactionDetails', params, onCompletion);
    };
    return DownloadTransactionRepository;
})