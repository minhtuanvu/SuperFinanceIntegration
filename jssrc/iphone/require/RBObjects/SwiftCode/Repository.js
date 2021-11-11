define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function SwiftCodeRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    SwiftCodeRepository.prototype = Object.create(BaseRepository.prototype);
    SwiftCodeRepository.prototype.constructor = SwiftCodeRepository;
    //For Operation 'getSwiftCode' with service id 'getIBANdetails4967'
    SwiftCodeRepository.prototype.getSwiftCode = function(params, onCompletion) {
        return SwiftCodeRepository.prototype.customVerb('getSwiftCode', params, onCompletion);
    };
    //For Operation 'getBICFromBankDetails' with service id 'getBICFromBankDetails6679'
    SwiftCodeRepository.prototype.getBICFromBankDetails = function(params, onCompletion) {
        return SwiftCodeRepository.prototype.customVerb('getBICFromBankDetails', params, onCompletion);
    };
    return SwiftCodeRepository;
})