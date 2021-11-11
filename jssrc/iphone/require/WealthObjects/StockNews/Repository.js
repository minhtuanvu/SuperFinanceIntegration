define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function StockNewsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    StockNewsRepository.prototype = Object.create(BaseRepository.prototype);
    StockNewsRepository.prototype.constructor = StockNewsRepository;
    //For Operation 'getstockNewsDetails' with service id 'getStockNewsWeb6277'
    StockNewsRepository.prototype.getstockNewsDetails = function(params, onCompletion) {
        return StockNewsRepository.prototype.customVerb('getstockNewsDetails', params, onCompletion);
    };
    //For Operation 'getStockNews' with service id 'getStockNews9939'
    StockNewsRepository.prototype.getStockNews = function(params, onCompletion) {
        return StockNewsRepository.prototype.customVerb('getStockNews', params, onCompletion);
    };
    return StockNewsRepository;
})