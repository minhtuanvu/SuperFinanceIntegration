define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function CampaignRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	CampaignRepository.prototype = Object.create(BaseRepository.prototype);
	CampaignRepository.prototype.constructor = CampaignRepository;

	//For Operation 'getCampaignSpecificationsPreLogin' with service id 'GetCampaignSpecificationsPreLogin3472'
	CampaignRepository.prototype.getCampaignSpecificationsPreLogin = function(params, onCompletion){
		return CampaignRepository.prototype.customVerb('getCampaignSpecificationsPreLogin', params, onCompletion);
	};

	//For Operation 'ignoreCampaignForCustomer' with service id 'IgnoreCampaignForCustomer2902'
	CampaignRepository.prototype.ignoreCampaignForCustomer = function(params, onCompletion){
		return CampaignRepository.prototype.customVerb('ignoreCampaignForCustomer', params, onCompletion);
	};

	//For Operation 'getCampaignSpecifications' with service id 'GetCampaignSpecifications8179'
	CampaignRepository.prototype.getCampaignSpecifications = function(params, onCompletion){
		return CampaignRepository.prototype.customVerb('getCampaignSpecifications', params, onCompletion);
	};

	return CampaignRepository;
})