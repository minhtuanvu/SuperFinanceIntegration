define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function FeatureRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	FeatureRepository.prototype = Object.create(BaseRepository.prototype);
	FeatureRepository.prototype.constructor = FeatureRepository;

	//For Operation 'getAccessPolicies' with service id 'getAccessPolicies4424'
	FeatureRepository.prototype.getAccessPolicies = function(params, onCompletion){
		return FeatureRepository.prototype.customVerb('getAccessPolicies', params, onCompletion);
	};

	//For Operation 'getAllFeatures' with service id 'GetAllFeatures5841'
	FeatureRepository.prototype.getAllFeatures = function(params, onCompletion){
		return FeatureRepository.prototype.customVerb('getAllFeatures', params, onCompletion);
	};

	//For Operation 'getAllFeaturesAndActions' with service id 'getAllFeaturesAndActions4767'
	FeatureRepository.prototype.getAllFeaturesAndActions = function(params, onCompletion){
		return FeatureRepository.prototype.customVerb('getAllFeaturesAndActions', params, onCompletion);
	};

	//For Operation 'getLimitGroups' with service id 'getLimitGroups3567'
	FeatureRepository.prototype.getLimitGroups = function(params, onCompletion){
		return FeatureRepository.prototype.customVerb('getLimitGroups', params, onCompletion);
	};

	//For Operation 'getAllMonetaryActions' with service id 'getAllMonetaryActions1866'
	FeatureRepository.prototype.getAllMonetaryActions = function(params, onCompletion){
		return FeatureRepository.prototype.customVerb('getAllMonetaryActions', params, onCompletion);
	};

	//For Operation 'getFeatureActions' with service id 'getFeatureActions2032'
	FeatureRepository.prototype.getFeatureActions = function(params, onCompletion){
		return FeatureRepository.prototype.customVerb('getFeatureActions', params, onCompletion);
	};

	return FeatureRepository;
})