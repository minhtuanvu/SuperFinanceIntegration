define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function UserRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	UserRepository.prototype = Object.create(BaseRepository.prototype);
	UserRepository.prototype.constructor = UserRepository;

	//For Operation 'verifyUserId' with service id 'searchUser5607'
	UserRepository.prototype.verifyUserId = function(params, onCompletion){
		return UserRepository.prototype.customVerb('verifyUserId', params, onCompletion);
	};

	return UserRepository;
})