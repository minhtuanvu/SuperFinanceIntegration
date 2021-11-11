define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function DownloadTransactionReportRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    DownloadTransactionReportRepository.prototype = Object.create(BaseRepository.prototype);
    DownloadTransactionReportRepository.prototype.constructor = DownloadTransactionReportRepository;
    //For Operation 'generateTransactionReport' with service id 'GenerateTransactionReport2120'
    DownloadTransactionReportRepository.prototype.generateTransactionReport = function(params, onCompletion) {
        return DownloadTransactionReportRepository.prototype.customVerb('generateTransactionReport', params, onCompletion);
    };
    //For Operation 'downloadTransactionReport' with service id 'DownloadTransactionReport6217'
    DownloadTransactionReportRepository.prototype.downloadTransactionReport = function(params, onCompletion) {
        return DownloadTransactionReportRepository.prototype.customVerb('downloadTransactionReport', params, onCompletion);
    };
    return DownloadTransactionReportRepository;
})