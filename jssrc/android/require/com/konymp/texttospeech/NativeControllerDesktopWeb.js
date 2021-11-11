define(['./Inherits', './NativeController'], function(Inherits, NativeController) {
    var konyLoggerModule = require('com/konymp/texttospeech/konyLogger');
    var konymp = konymp || {};
    konymp.logger = (new konyLoggerModule("Text To Speech Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;
    var NativeControllerDesktop = function(componentInstance) {
        this.componentInstance = componentInstance;
        NativeController(this);
    };
    Inherits(NativeControllerDesktop, NativeController);
    /**
     * @function speechToText
     * @private
     * @description: This is first step for recognition
     */
    NativeControllerDesktop.prototype.speakTTS = function(text) {
        try {
            konymp.logger.trace("----------Entering speakTTS Function---------", konymp.logger.FUNCTION_ENTRY);
            this.speechSynthesisUtterance = new SpeechSynthesisUtterance();
            this.synth = window.speechSynthesis;
            this.speechSynthesisUtterance.text = text;
            this.speechSynthesisUtterance.volume = this.componentInstance.setWebVolume;
            this.speechSynthesisUtterance.rate = this.componentInstance.setRate;
            this.speechSynthesisUtterance.pitch = this.componentInstance.setPitch;
            this.speechSynthesisUtterance.lang = this.componentInstance.setWebLanguage;
            this.speechSynthesisUtterance.onstart = this.componentInstance.onTTSSpeechStart.bind(this.componentInstance);
            this.speechSynthesisUtterance.onend = this.componentInstance.endOfSpeech.bind(this.componentInstance);
            this.speechSynthesisUtterance.onError = this.onSpeechError.bind(this);
            this.synth.speak(this.speechSynthesisUtterance);
            konymp.logger.trace("----------Exiting speakTTS Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
        }
    };
    /**
     * @function onSpeechError
     * @private
     * @description: this event is invoked when an error occured while speaking or invkoing the tts
     */
    NativeControllerDesktop.prototype.onSpeechError = function(error) {
        try {
            konymp.logger.trace("----------Entering onSpeechError Function---------", konymp.logger.FUNCTION_ENTRY);
            konymp.logger.trace("----------Exiting onSpeechError Function---------", konymp.logger.FUNCTION_EXIT);
            throw error;
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            if (exception.type === "CUSTOM") {
                throw exception;
            }
        }
    };
    /**
     * @function stopRecognition
     * @private
     * @description: This function will stop the recognition and gives the final result of the speech
     */
    NativeControllerDesktop.prototype.stop = function() {
        try {
            konymp.logger.trace("----------Entering stop Function---------", konymp.logger.FUNCTION_ENTRY);
            this.synth.cancel();
            konymp.logger.trace("----------Exiting stop Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            if (exception.type === "CUSTOM") {
                throw exception;
            }
        }
    };
    return NativeControllerDesktop;
});