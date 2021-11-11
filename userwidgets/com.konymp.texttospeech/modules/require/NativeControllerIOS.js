define(['./Inherits', './NativeController'], function(Inherits, NativeController) {
    var konymp = konymp || {};
    var konyLoggerModule = require("com/konymp/texttospeech/konyLogger");
    konymp.logger = (new konyLoggerModule("Text To Speech Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");

    var NativeControllerIOS = function(componentInstance) {
        this.componentInstance = componentInstance;
        NativeController(componentInstance);
		this.importClasses();
        this.avSpeechSynthesizer = this.utteranceDelegate.alloc().jsinit();
        this.avSpeechSynthesizer.delegate = this.avSpeechSynthesizer;
    };

    Inherits(NativeControllerIOS, NativeController);

    /**
     * @function importClasses
     * @private
     * @description: this function will import all the classes from the franeworks and store in the nativeClasses variable
     */
    NativeControllerIOS.prototype.importClasses = function() {
        try {
            konymp.logger.trace("----------Entering importClasses Function---------", konymp.logger.FUNCTION_ENTRY);
            this.seed = Math.random();
          	this.audioSession = objc.import('AVAudioSession').sharedInstance();
            this.avSpeechSynthesisVoice = objc.import("AVSpeechSynthesisVoice");
            this.avSpeechUtterance = objc.import("AVSpeechUtterance");
            var x = (Math.sin(this.seed++) * 10000);
            var randomNumber = x - Math.floor(x);
            this.utteranceDelegate = objc.newClass('utteranceDelegate' + randomNumber, 'AVSpeechSynthesizer', ['AVSpeechSynthesizerDelegate'], {
                speechSynthesizerDidFinishSpeechUtterance: this.componentInstance.endOfSpeech.bind(this.componentInstance),
                speechSynthesizerDidStartSpeechUtterance: this.componentInstance.onTTSSpeechStart.bind(this.componentInstance)
            });
            konymp.logger.trace("----------Exiting importClasses Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            if(exception.type === "CUSTOM"){
            	throw exception;
            }
        }
    };
    /**
     * @function speakTTS
     * @private
     * @description: this function start speaking
     */
    NativeControllerIOS.prototype.speakTTS = function(text) {
        try {
            konymp.logger.trace("----------Entering speakTTS Function---------", konymp.logger.FUNCTION_ENTRY);
          	this.audioSession.setModeError(AVAudioSessionModeSpokenAudio, undefined);
            this.audioSession.setActiveError(true, undefined);
            var avUtterance = this.avSpeechUtterance.speechUtteranceWithString(text);
            avUtterance.rate = Number(this.componentInstance.setRate);
            avUtterance.preUtteranceDelay = Number(this.componentInstance.preUtteranceDelay);
            avUtterance.postUtteranceDelay = Number(this.componentInstance.postUtteranceDelay);
            avUtterance.volume = Number(this.componentInstance.volume);
            avUtterance.pitchMultiplier = Number(this.componentInstance.pitchMultiplier);
            avUtterance.voice = this.avSpeechSynthesisVoice.voiceWithLanguage(this.componentInstance.setIphoneLanguage);
            this.avSpeechSynthesizer.speakUtterance(avUtterance);
            konymp.logger.trace("----------Exiting speakTTS Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            if(exception.type === "CUSTOM"){
            	throw exception;
            }
        }
    };
    /**
     * @function stop
     * @private
     * @description: this function stop speaking
     */
    NativeControllerIOS.prototype.stop = function() {
        try {
            konymp.logger.trace("----------Exiting stop Function---------", konymp.logger.FUNCTION_ENTRY);
            if (this.componentInstance.stopSpeechApibehaviour !== "stop after finishing current word") {
                this.avSpeechSynthesizer.stopSpeakingAtBoundary(AVSpeechBoundaryImmediate);
            } else {
                this.avSpeechSynthesizer.stopSpeakingAtBoundary(AVSpeechBoundaryWord);
            }
            konymp.logger.trace("----------Exiting stop Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            if(exception.type === "CUSTOM"){
            	throw exception;
            }
        }
    };

    return NativeControllerIOS;

});
