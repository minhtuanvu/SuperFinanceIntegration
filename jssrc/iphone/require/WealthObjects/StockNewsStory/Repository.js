define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function StockNewsStoryRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    StockNewsStoryRepository.prototype = Object.create(BaseRepository.prototype);
    StockNewsStoryRepository.prototype.constructor = StockNewsStoryRepository;
    //For Operation 'getStockNewsStory' with service id 'getNewsStory3954'
    StockNewsStoryRepository.prototype.getStockNewsStory = function(params, onCompletion) {
        return StockNewsStoryRepository.prototype.customVerb('getStockNewsStory', params, onCompletion);
    };
    return StockNewsStoryRepository;
})