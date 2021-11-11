define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function DocumentStorageRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	DocumentStorageRepository.prototype = Object.create(BaseRepository.prototype);
	DocumentStorageRepository.prototype.constructor = DocumentStorageRepository;

	//For Operation 'searchDocument' with service id 'searchDocument2925'
	DocumentStorageRepository.prototype.searchDocument = function(params, onCompletion){
		return DocumentStorageRepository.prototype.customVerb('searchDocument', params, onCompletion);
	};

	//For Operation 'downloadDocument' with service id 'downloadDocument7685'
	DocumentStorageRepository.prototype.downloadDocument = function(params, onCompletion){
		return DocumentStorageRepository.prototype.customVerb('downloadDocument', params, onCompletion);
	};

	//For Operation 'deleteDocument' with service id 'deleteDocument5699'
	DocumentStorageRepository.prototype.deleteDocument = function(params, onCompletion){
		return DocumentStorageRepository.prototype.customVerb('deleteDocument', params, onCompletion);
	};

	//For Operation 'uploadDocument' with service id 'uploadDocument1194'
	DocumentStorageRepository.prototype.uploadDocument = function(params, onCompletion){
		return DocumentStorageRepository.prototype.customVerb('uploadDocument', params, onCompletion);
	};

	return DocumentStorageRepository;
})