define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function VerifyApplicantRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    VerifyApplicantRepository.prototype = Object.create(BaseRepository.prototype);
    VerifyApplicantRepository.prototype.constructor = VerifyApplicantRepository;
    //For Operation 'verifyApplicant' with service id 'verifyApplicant8797'
    VerifyApplicantRepository.prototype.verifyApplicant = function(params, onCompletion) {
        return VerifyApplicantRepository.prototype.customVerb('verifyApplicant', params, onCompletion);
    };
    return VerifyApplicantRepository;
})