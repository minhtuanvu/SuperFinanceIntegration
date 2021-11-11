define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ConsentsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ConsentsRepository.prototype = Object.create(BaseRepository.prototype);
	ConsentsRepository.prototype.constructor = ConsentsRepository;

	//For Operation 'getCDPConsents' with service id 'getCDPConsentGateway1679'
	ConsentsRepository.prototype.getCDPConsents = function(params, onCompletion){
		return ConsentsRepository.prototype.customVerb('getCDPConsents', params, onCompletion);
	};

	//For Operation 'consents' with service id 'getCDPConsents6985'
	ConsentsRepository.prototype.consents = function(params, onCompletion){
		return ConsentsRepository.prototype.customVerb('consents', params, onCompletion);
	};

	//For Operation 'getPSDConsents' with service id 'getPSDConsentGateway2935'
	ConsentsRepository.prototype.getPSDConsents = function(params, onCompletion){
		return ConsentsRepository.prototype.customVerb('getPSDConsents', params, onCompletion);
	};

	//For Operation 'updateCDPConsent' with service id 'createOrder8799'
	ConsentsRepository.prototype.updateCDPConsent = function(params, onCompletion){
		return ConsentsRepository.prototype.customVerb('updateCDPConsent', params, onCompletion);
	};

	//For Operation 'updatePSDConsent' with service id 'createOrder2941'
	ConsentsRepository.prototype.updatePSDConsent = function(params, onCompletion){
		return ConsentsRepository.prototype.customVerb('updatePSDConsent', params, onCompletion);
	};

	return ConsentsRepository;
})