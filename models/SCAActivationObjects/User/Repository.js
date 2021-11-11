define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function UserRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	UserRepository.prototype = Object.create(BaseRepository.prototype);
	UserRepository.prototype.constructor = UserRepository;

	//For Operation 'lostDevice' with service id 'validateLostDevice3437'
	UserRepository.prototype.lostDevice = function(params, onCompletion){
		return UserRepository.prototype.customVerb('lostDevice', params, onCompletion);
	};

	return UserRepository;
})