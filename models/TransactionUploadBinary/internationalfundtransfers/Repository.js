define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function internationalfundtransfersRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	internationalfundtransfersRepository.prototype = Object.create(BaseRepository.prototype);
	internationalfundtransfersRepository.prototype.constructor = internationalfundtransfersRepository;

	//For Operation 'createBinary' with service id 'createBinaryinternationalfundtransfers8647'
	internationalfundtransfersRepository.prototype.createBinary = function(params, onCompletion){
		return internationalfundtransfersRepository.prototype.customVerb('createBinary', params, onCompletion);
	};

	//For Operation 'getBinary' with service id 'queryBinaryinternationalfundtransfers6271'
	internationalfundtransfersRepository.prototype.getBinary = function(params, onCompletion){
		return internationalfundtransfersRepository.prototype.customVerb('getBinary', params, onCompletion);
	};

	//For Operation 'updateBinary' with service id 'updateBinaryinternationalfundtransfers4638'
	internationalfundtransfersRepository.prototype.updateBinary = function(params, onCompletion){
		return internationalfundtransfersRepository.prototype.customVerb('updateBinary', params, onCompletion);
	};

	//For Operation 'deleteBinary' with service id 'deleteBinaryinternationalfundtransfers1875'
	internationalfundtransfersRepository.prototype.deleteBinary = function(params, onCompletion){
		return internationalfundtransfersRepository.prototype.customVerb('deleteBinary', params, onCompletion);
	};

	return internationalfundtransfersRepository;
})