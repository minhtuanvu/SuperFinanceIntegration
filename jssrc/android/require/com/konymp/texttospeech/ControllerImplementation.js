define([], function() {
    var konyLoggerModule = require('com/konymp/texttospeech/konyLogger');
    var konymp = konymp || {};
    konymp.logger = (new konyLoggerModule("Text To Speech  Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;
    var ControllerImplementation = function(componentInstance, componentName) {
        konymp.logger.trace("----------Entering ControllerImplementation Function---------", konymp.logger.FUNCTION_ENTRY);
        this.componentInstance = componentInstance;
        this.getNativeController = function() {
            try {
                konymp.logger.trace("----------Entering getNativeController Function---------", konymp.logger.FUNCTION_ENTRY);
                if (this.nativeControllerInstance === undefined) {
                    var deviceName = kony.os.deviceInfo().name;
                    var platformName = null;
                    if (deviceName.toLowerCase() === 'iphone' || deviceName.toLowerCase() === 'ipad') {
                        platformName = 'IOS.js';
                    } else if (deviceName.toLowerCase() === 'android') {
                        platformName = 'Android.js';
                    } else if (deviceName.toLowerCase() === 'thinclient') {
                        platformName = 'DesktopWeb';
                    }
                    var nativeControllerPath = 'com/konymp/' + componentName + '/NativeController' + platformName;
                    var nativeController = require(nativeControllerPath);
                    this.nativeControllerInstance = new nativeController(this.componentInstance);
                }
                konymp.logger.trace("----------Exiting getNativeController Function---------", konymp.logger.FUNCTION_EXIT);
                return this.nativeControllerInstance;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        };
        /**
         * @function speakTTS
         * @private
         * @description: This function is for call speak
         */
        this.speakTTS = function(text) {
            try {
                konymp.logger.trace("----------Entering speakTTS Function---------", konymp.logger.FUNCTION_ENTRY);
                this.getNativeController().speakTTS(text);
                konymp.logger.trace("----------Exiting speakTTS Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        };
        this.stop = function() {
            try {
                konymp.logger.trace("----------Entering stop Function---------", konymp.logger.FUNCTION_ENTRY);
                this.getNativeController().stop();
                konymp.logger.trace("----------Exiting stop Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        };
        konymp.logger.trace("----------Exiting ControllerImplementation Function---------", konymp.logger.FUNCTION_EXIT);
    };
    return ControllerImplementation;
});