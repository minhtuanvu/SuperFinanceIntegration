define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function TermsAndConditionsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    TermsAndConditionsRepository.prototype = Object.create(BaseRepository.prototype);
    TermsAndConditionsRepository.prototype.constructor = TermsAndConditionsRepository;
    //For Operation 'getCustomerTermsAndConditionsPostLogin' with service id 'getCustomerTermsAndConditions6250'
    TermsAndConditionsRepository.prototype.getCustomerTermsAndConditionsPostLogin = function(params, onCompletion) {
        return TermsAndConditionsRepository.prototype.customVerb('getCustomerTermsAndConditionsPostLogin', params, onCompletion);
    };
    //For Operation 'getCustomerTermsAndConditionsPreLogin' with service id 'getCustomerTermsAndConditionsPreLogin1594'
    TermsAndConditionsRepository.prototype.getCustomerTermsAndConditionsPreLogin = function(params, onCompletion) {
        return TermsAndConditionsRepository.prototype.customVerb('getCustomerTermsAndConditionsPreLogin', params, onCompletion);
    };
    //For Operation 'createCustomerTNCForLogin' with service id 'createCustomerTNCForLogin3804'
    TermsAndConditionsRepository.prototype.createCustomerTNCForLogin = function(params, onCompletion) {
        return TermsAndConditionsRepository.prototype.customVerb('createCustomerTNCForLogin', params, onCompletion);
    };
    return TermsAndConditionsRepository;
})