define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function ReportsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    ReportsRepository.prototype = Object.create(BaseRepository.prototype);
    ReportsRepository.prototype.constructor = ReportsRepository;
    //For Operation 'getReportAndDownloadTypes' with service id 'getReportAndDownloadTypes2035'
    ReportsRepository.prototype.getReportAndDownloadTypes = function(params, onCompletion) {
        return ReportsRepository.prototype.customVerb('getReportAndDownloadTypes', params, onCompletion);
    };
    return ReportsRepository;
})