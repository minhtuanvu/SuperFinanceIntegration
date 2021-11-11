define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function DbxUserAlertsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    DbxUserAlertsRepository.prototype = Object.create(BaseRepository.prototype);
    DbxUserAlertsRepository.prototype.constructor = DbxUserAlertsRepository;
    //For Operation 'getAlertChannels' with service id 'getAlertChannels9004'
    DbxUserAlertsRepository.prototype.getAlertChannels = function(params, onCompletion) {
        return DbxUserAlertsRepository.prototype.customVerb('getAlertChannels', params, onCompletion);
    };
    //For Operation 'getCustomerAlertTypePreference' with service id 'getCustomerAlertTypePreference6958'
    DbxUserAlertsRepository.prototype.getCustomerAlertTypePreference = function(params, onCompletion) {
        return DbxUserAlertsRepository.prototype.customVerb('getCustomerAlertTypePreference', params, onCompletion);
    };
    //For Operation 'getCustomerAccountAlertPreference' with service id 'getCustomerAccountAlertPreference1217'
    DbxUserAlertsRepository.prototype.getCustomerAccountAlertPreference = function(params, onCompletion) {
        return DbxUserAlertsRepository.prototype.customVerb('getCustomerAccountAlertPreference', params, onCompletion);
    };
    //For Operation 'getCustomerAlertCategoryPreference' with service id 'getCustomerAlertCategoryPreference9676'
    DbxUserAlertsRepository.prototype.getCustomerAlertCategoryPreference = function(params, onCompletion) {
        return DbxUserAlertsRepository.prototype.customVerb('getCustomerAlertCategoryPreference', params, onCompletion);
    };
    //For Operation 'setAlertPreferences' with service id 'setAlertPreferences9622'
    DbxUserAlertsRepository.prototype.setAlertPreferences = function(params, onCompletion) {
        return DbxUserAlertsRepository.prototype.customVerb('setAlertPreferences', params, onCompletion);
    };
    return DbxUserAlertsRepository;
})