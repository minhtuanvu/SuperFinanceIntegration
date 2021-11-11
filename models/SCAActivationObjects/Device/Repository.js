define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function DeviceRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	DeviceRepository.prototype = Object.create(BaseRepository.prototype);
	DeviceRepository.prototype.constructor = DeviceRepository;

	//For Operation 'fetch' with service id 'searchUser3702'
	DeviceRepository.prototype.fetch = function(params, onCompletion){
		return DeviceRepository.prototype.customVerb('fetch', params, onCompletion);
	};

	return DeviceRepository;
})