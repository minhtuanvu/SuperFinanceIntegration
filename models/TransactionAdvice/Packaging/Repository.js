define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function PackagingRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	PackagingRepository.prototype = Object.create(BaseRepository.prototype);
	PackagingRepository.prototype.constructor = PackagingRepository;

	//For Operation 'download' with service id 'download7977'
	PackagingRepository.prototype.download = function(params, onCompletion){
		return PackagingRepository.prototype.customVerb('download', params, onCompletion);
	};

	//For Operation 'login' with service id 'login8711'
	PackagingRepository.prototype.login = function(params, onCompletion){
		return PackagingRepository.prototype.customVerb('login', params, onCompletion);
	};

	//For Operation 'searchByCUK' with service id 'searchByCUK2169'
	PackagingRepository.prototype.searchByCUK = function(params, onCompletion){
		return PackagingRepository.prototype.customVerb('searchByCUK', params, onCompletion);
	};

	return PackagingRepository;
})