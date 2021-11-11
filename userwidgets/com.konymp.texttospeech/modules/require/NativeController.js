define([],function (){
  	var konyLoggerModule = require('com/konymp/texttospeech/konyLogger');
    var konymp = konymp || {};
    konymp.logger = (new konyLoggerModule("Text To Speech Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;
  
   	var NativeController=function(componentInstance){
      	this.componentInstance = componentInstance;
    };
  	/**
     * @function getClasses
     * @private
     * @description: this function is implemented in platform native controller
     */
  	NativeController.prototype.speakTTS=function(){
		try {
            konymp.logger.trace("----------Entering stopRecognition Function---------", konymp.logger.FUNCTION_ENTRY);
            throw {
                  	"type":"DEV",
                    "Error": "Method doesn't implemented",
                    "message": "You have to implement the method speakTTS!"
            };
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            if(exception.type === "CUSTOM"){
            	throw exception;
            }
        }
    };
  	/**
     * @function getClasses
     * @private
     * @description: this function is implemented in platform native controller
     */
  	NativeController.prototype.stop=function(){
		try {
            konymp.logger.trace("----------Entering stopRecognition Function---------", konymp.logger.FUNCTION_ENTRY);
            throw {
                  	"type":"DEV",
                    "Error": "Method doesn't implemented",
                    "message": "You have to implement the method stop!"
            };
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            if(exception.type === "CUSTOM"){
            	throw exception;
            }
        }
    };
  	return NativeController;
});