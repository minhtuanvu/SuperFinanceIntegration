/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
define("com/konymp/texttospeech/usertexttospeechController", ['./ControllerImplementation'], function(ControllerImplementation) {
    var konyLoggerModule = require('com/konymp/texttospeech/konyLogger');
    var konymp = konymp || {};
    konymp.logger = (new konyLoggerModule("Text To Speech Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    return {
        /**
         * @function constructor
         * @private
         * @params {Object} baseConfig, layoutConfig, pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            var analytics = require("com/konymp/" + "texttospeech" + "/analytics");
            analytics.notifyAnalytics();
            konymp.logger.trace("----------Entering constructor---------", konymp.logger.FUNCTION_ENTRY);
            this._minimumPitch = 0.5;
            this._deviceName = kony.os.deviceInfo().name;
            this.seed = Math.random();
            this._maximunPitch = 2.0;
            this._minimumSpeechRate = 0.0;
            this._maximumSpeechRate = 5.0;
            this._isSpeechOn = false;
            this.controllerImpl = new ControllerImplementation(this, baseConfig.id);
            konymp.logger.trace("----------Exiting constructor ---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function initGetterSetters
         * @private
         * @description: Logic for getters/setters of custom properties
         */
        initGettersSetters: function() {
            konymp.logger.trace("----------Entering initGetterSetters---------", konymp.logger.FUNCTION_ENTRY);
            defineGetter(this, "setRate", function() {
                return this._setRate;
            });
            defineSetter(this, "setRate", function(val) {
                this.setSpeechRate(parseFloat(val));
            });
            defineGetter(this, "setIphoneLanguage", function() {
                return this._iphoneLanguage;
            });
            defineSetter(this, "setIphoneLanguage", function(val) {
                this._iphoneLanguage = val;
            });
            defineGetter(this, "setAndroidLanguage", function() {
                return this._androidLanguage;
            });
            defineSetter(this, "setAndroidLanguage", function(val) {
                this._androidLanguage = val;
            });
            defineGetter(this, "volume", function() {
                return this._volume;
            });
            defineSetter(this, "volume", function(val) {
                this._volume = Number(val);
            });
            defineGetter(this, "preUtteranceDelay", function() {
                return this._preUtteranceDelay;
            });
            defineSetter(this, "preUtteranceDelay", function(val) {
                this._preUtteranceDelay = Number(val);
            });
            defineGetter(this, "postUtteranceDelay", function() {
                return this._postUtteranceDelay;
            });
            defineSetter(this, "postUtteranceDelay", function(val) {
                this._postUtteranceDelay = Number(val);
            });
            defineGetter(this, "pitchMultiplier", function() {
                return this._pitchMultiplier;
            });
            defineSetter(this, "pitchMultiplier", function(val) {
                this.setPitchValue(Number(val));
            });
            defineGetter(this, "stopSpeechApibehaviour", function() {
                return this._stopSpeechAt;
            });
            defineSetter(this, "stopSpeechApibehaviour", function(val) {
                this._stopSpeechAt = val;
            });
            defineGetter(this, "setWebLanguage", function() {
                return this._setWebLanguage;
            });
            defineSetter(this, "setWebLanguage", function(val) {
                this._setWebLanguage = val;
            });
            defineGetter(this, "setPitch", function() {
                return this._setPitch;
            });
            defineSetter(this, "setPitch", function(val) {
                this._setPitch = Number(val);
            });
            defineGetter(this, "setWebVolume", function() {
                return this._setWebVolume;
            });
            defineSetter(this, "setWebVolume", function(val) {
                this._setWebVolume = Number(val);
            });
            konymp.logger.trace("----------Exiting initGettersSetters ---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function setPitchValue
         * @private
         * @description: validate pitch value
         */
        setPitchValue: function(val) {
            try {
                konymp.logger.trace("----------Entering setPitchValue Function---------", konymp.logger.FUNCTION_ENTRY);
                if (val >= this._minimumPitch && val <= this._maximunPitch) {
                    this._pitchMultiplier = val;
                } else {
                    throw {
                        "type": "CUSTOM",
                        "Error": "InvalidValue",
                        "message": "pitch value is too high or too low"
                    };
                }
                konymp.logger.trace("----------Exiting setPitchValue Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function setSpeechRate
         * @private
         * @description: validate speech rate
         */
        setSpeechRate: function(val) {
            try {
                konymp.logger.trace("----------Entering setSpeechRate Function---------", konymp.logger.FUNCTION_ENTRY);
                if (this._deviceName === "iPhone") {
                    if (val > AVSpeechUtteranceMinimumSpeechRate && val < AVSpeechUtteranceMaximumSpeechRate) {
                        this._setRate = val;
                    } else {
                        throw {
                            "type": "CUSTOM",
                            "Error": "invalidvalue",
                            "message": "speech rate is too high or too low"
                        };
                    }
                }
                if (this._deviceName === "android") {
                    if (val > this._minimumSpeechRate && val < this._maximumSpeechRate) {
                        this._setRate = val;
                    } else {
                        throw {
                            "type": "CUSTOM",
                            "Error": "invalidvalue",
                            "message": "speech rate is too high or too low"
                        };
                    }
                } else if (this._deviceName.toLowerCase() === "thinclient") {
                    this._setRate = val;
                }
                konymp.logger.trace("----------Exiting setSpeechRate Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function background
         * @private
         * @description: for android component on destroy is handled
         */
        background: function() {
            try {
                konymp.logger.trace("----------Entering background Function---------", konymp.logger.FUNCTION_ENTRY);
                if (this._isSpeechOn) {
                    this.view.imgSpeechOn.setVisibility(false);
                    this.view.imgSpeechOff.setVisibility(true);
                    if (this.speechOff !== undefined && this.speechOff !== null) {
                        this.speechOff();
                    }
                    this._isSpeechOn = false;
                }
                this.stopSpeech();
                konymp.logger.trace("----------Exiting background Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function onTTSSpeechStart
         * @private
         * @description: this function is called when speech is started
         */
        onTTSSpeechStart: function(s) {
            try {
                konymp.logger.trace("----------Entering onAndroidSpeechStart Function---------", konymp.logger.FUNCTION_ENTRY);
                konymp.logger.info(s.toString(), konymp.logger.SUCCESS_CALLBACK);
                konymp.logger.trace("----------Exiting onAndroidSpeechStart Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function speakOut
         * @private
         * @description: This function call individual platform functions
         */
        speakOut: function(text) {
            try {
                konymp.logger.trace("----------Entering speakOut Function---------", konymp.logger.FUNCTION_ENTRY);
                if (text !== undefined && text !== null && text !== "") {
                    this.controllerImpl.speakTTS(text);
                } else {
                    throw {
                        "type": "CUSTOM",
                        "Error": "invalidText",
                        "message": "speakOut function doesn't accept null value"
                    };
                }
                konymp.logger.trace("----------Exiting speakOut Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function stopSpeech
         * @private
         * @description: this function stops speaking
         */
        stopSpeech: function() {
            try {
                konymp.logger.trace("----------Entering stopSpeech Function---------", konymp.logger.FUNCTION_ENTRY);
                this.controllerImpl.stop();
                konymp.logger.trace("----------Exiting stopSpeech Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function endOfSpeech
         * @private
         * @description: this function is called when an end os speech
         */
        endOfSpeech: function() {
            try {
                konymp.logger.trace("----------Entering endOfSpeech Function---------", konymp.logger.FUNCTION_ENTRY);
                if (this._isSpeechOn) {
                    this.speechOnClick();
                }
                konymp.logger.trace("----------Exiting endOfSpeech Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function speechClick
         * @private
         * @description: Ui changes
         */
        speechOnClick: function() {
            try {
                konymp.logger.trace("----------Entering speechOnClick Function---------", konymp.logger.FUNCTION_ENTRY);
                if (this._isSpeechOn) {
                    this.view.imgSpeechOn.setVisibility(false);
                    this.view.imgSpeechOff.setVisibility(true);
                    this.view.forceLayout();
                    if (this.speechOff !== undefined && this.speechOff !== null && typeof this.speechOff === 'function') {
                        this.speechOff();
                    }
                    this._isSpeechOn = false;
                } else {
                    this.view.imgSpeechOn.setVisibility(true);
                    this.view.imgSpeechOff.setVisibility(false);
                    this.view.forceLayout();
                    if (this.speechOn !== undefined && this.speechOn !== null && typeof this.speechOn === 'function') {
                        this.speechOn();
                    }
                    this._isSpeechOn = true;
                }
                konymp.logger.trace("----------Exiting speechOnClick Function---------", konymp.logger.FUNCTION_EXIT);
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        }
    };
});
define("com/konymp/texttospeech/texttospeechControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_e529f5a1dde7448bbf62fef8e3662139: function AS_FlexContainer_e529f5a1dde7448bbf62fef8e3662139(eventobject) {
        var self = this;
        return self.speechOnClick.call(this);
    },
    AS_FlexContainer_de67dcdd554b4d40902dcaa1da7a9691: function AS_FlexContainer_de67dcdd554b4d40902dcaa1da7a9691(eventobject) {
        var self = this;
        return self.stopSpeech.call(this);
    },
    AS_FlexContainer_e602f4e666f74e508f1f34758db6fa5c: function AS_FlexContainer_e602f4e666f74e508f1f34758db6fa5c(eventobject) {
        var self = this;
        return self.stopSpeech.call(this);
    }
});
define("com/konymp/texttospeech/texttospeechController", ["com/konymp/texttospeech/usertexttospeechController", "com/konymp/texttospeech/texttospeechControllerActions"], function() {
    var controller = require("com/konymp/texttospeech/usertexttospeechController");
    var actions = require("com/konymp/texttospeech/texttospeechControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "speechOnIcon", function(val) {
            this.view.imgSpeechOn.src = val;
        });
        defineGetter(this, "speechOnIcon", function() {
            return this.view.imgSpeechOn.src;
        });
        defineSetter(this, "speechOnIconScaleMode", function(val) {
            this.view.imgSpeechOn.imageScaleMode = val;
        });
        defineGetter(this, "speechOnIconScaleMode", function() {
            return this.view.imgSpeechOn.imageScaleMode;
        });
        defineSetter(this, "speechOffIcon", function(val) {
            this.view.imgSpeechOff.src = val;
        });
        defineGetter(this, "speechOffIcon", function() {
            return this.view.imgSpeechOff.src;
        });
        defineSetter(this, "speechOffIconScaleMode", function(val) {
            this.view.imgSpeechOff.imageScaleMode = val;
        });
        defineGetter(this, "speechOffIconScaleMode", function() {
            return this.view.imgSpeechOff.imageScaleMode;
        });
        defineSetter(this, "imageFlexSkin", function(val) {
            this.view.flxImage.skin = val;
        });
        defineGetter(this, "imageFlexSkin", function() {
            return this.view.flxImage.skin;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
