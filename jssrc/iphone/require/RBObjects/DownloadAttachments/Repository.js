define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function DownloadAttachmentsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    DownloadAttachmentsRepository.prototype = Object.create(BaseRepository.prototype);
    DownloadAttachmentsRepository.prototype.constructor = DownloadAttachmentsRepository;
    //For Operation 'retrieveAttachments' with service id 'retrieveAttachments4400'
    DownloadAttachmentsRepository.prototype.retrieveAttachments = function(params, onCompletion) {
        return DownloadAttachmentsRepository.prototype.customVerb('retrieveAttachments', params, onCompletion);
    };
    return DownloadAttachmentsRepository;
})