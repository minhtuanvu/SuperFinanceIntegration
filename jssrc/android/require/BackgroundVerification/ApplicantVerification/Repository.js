define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function ApplicantVerificationRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    ApplicantVerificationRepository.prototype = Object.create(BaseRepository.prototype);
    ApplicantVerificationRepository.prototype.constructor = ApplicantVerificationRepository;
    //For Operation 'verifyExistingUserByEmail' with service id 'ExpectEmail9082'
    ApplicantVerificationRepository.prototype.verifyExistingUserByEmail = function(params, onCompletion) {
        return ApplicantVerificationRepository.prototype.customVerb('verifyExistingUserByEmail', params, onCompletion);
    };
    //For Operation 'verifyPatroitAct' with service id 'ExpectIDPA4934'
    ApplicantVerificationRepository.prototype.verifyPatroitAct = function(params, onCompletion) {
        return ApplicantVerificationRepository.prototype.customVerb('verifyPatroitAct', params, onCompletion);
    };
    //For Operation 'verifyUserByGeotrace' with service id 'ExpectIDGeotrace4717'
    ApplicantVerificationRepository.prototype.verifyUserByGeotrace = function(params, onCompletion) {
        return ApplicantVerificationRepository.prototype.customVerb('verifyUserByGeotrace', params, onCompletion);
    };
    //For Operation 'verifyExistingUserName' with service id 'ExpectIDIQ1108'
    ApplicantVerificationRepository.prototype.verifyExistingUserName = function(params, onCompletion) {
        return ApplicantVerificationRepository.prototype.customVerb('verifyExistingUserName', params, onCompletion);
    };
    return ApplicantVerificationRepository;
})