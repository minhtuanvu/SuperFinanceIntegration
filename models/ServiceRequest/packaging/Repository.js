define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function packagingRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	packagingRepository.prototype = Object.create(BaseRepository.prototype);
	packagingRepository.prototype.constructor = packagingRepository;

	//For Operation 'createOrder' with service id 'createOrder8194'
	packagingRepository.prototype.createOrder = function(params, onCompletion){
		return packagingRepository.prototype.customVerb('createOrder', params, onCompletion);
	};

	//For Operation 'getOrderDetails' with service id 'getOrderDetails4258'
	packagingRepository.prototype.getOrderDetails = function(params, onCompletion){
		return packagingRepository.prototype.customVerb('getOrderDetails', params, onCompletion);
	};

	//For Operation 'triggerForStatus' with service id 'triggerForStatus2868'
	packagingRepository.prototype.triggerForStatus = function(params, onCompletion){
		return packagingRepository.prototype.customVerb('triggerForStatus', params, onCompletion);
	};

	//For Operation 'updateOrder' with service id 'updateOrder1240'
	packagingRepository.prototype.updateOrder = function(params, onCompletion){
		return packagingRepository.prototype.customVerb('updateOrder', params, onCompletion);
	};

	//For Operation 'getServiceConfigDetails' with service id 'getTemplateDetails7489'
	packagingRepository.prototype.getServiceConfigDetails = function(params, onCompletion){
		return packagingRepository.prototype.customVerb('getServiceConfigDetails', params, onCompletion);
	};

	return packagingRepository;
})