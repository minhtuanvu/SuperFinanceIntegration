define("com/konymp/barcodeqrscanner/userbarcodeqrscannerController", ['./ControllerImplementation.js', './KonyLogger'], function(ControllerImplementation, konyLoggerModule) {
    var konymp = konymp || {};
    konymp.logger = new konyLoggerModule("barcodeqrscanner/barcodeqrCascannerController");
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._cameraFacing = "Back";
            this.isCameaAdded = false;
            this.format = {
                "1": "CODE_128 or CONTACT_INFO",
                "2": "CODE_39 or EMAIL",
                "4": "CODE_93 or PHONE",
                "8": "CODABAR or URL",
                "16": "DATA_MATRIX",
                "32": "EAN_13",
                "64": "EAN_8",
                "128": "ITF",
                "256": "QR_CODE",
                "512": "UPC_A",
                "1024": "UPC_E",
                "2048": "PDF417",
                "4096": "AZTEC",
                "3": "ISBN",
                "5": "PRODUCT",
                "6": "SMS",
                "7": "TEXT",
                "9": "WIFI",
                "10": "GEO",
                "11": "CALENDAR_EVENT",
                "12": "DRIVER_LICENSE"
            };
            if (this.view.ncScan === undefined || this.view.ncScan === null) konymp.logger.trace("Unable to initiate component. Please refresh the project.", konymp.logger.FUNCTION_EXIT);
            this.handler = new ControllerImplementation(this, baseConfig.id);
        },
        myEventObj: "",
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineSetter(this, "cameraFacing", function(val) {
                try {
                    konymp.logger.trace("----------------------------- Setting imageName Start", konymp.logger.FUNCTION_ENTRY);
                    if (typeof(val) === 'string') {
                        this._cameraFacing = val;
                    } else {
                        throw {
                            error: "InvalidType",
                            message: "Invalid input type. Expecting string."
                        };
                    }
                } catch (e) {
                    konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                    if (e.error === "InvalidType") {
                        konymp.logger.trace(e.message, konymp.logger.FUNCTION_EXIT);
                    }
                }
                konymp.logger.trace("-----------------------------Setting imageName End", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "cameraFacing", function() {
                return this._cameraFacing;
            });
            defineSetter(this, "renderAutomatic", function(val) {
                try {
                    konymp.logger.trace("----------------------------- Setting render Start", konymp.logger.FUNCTION_ENTRY);
                    this._render = val;
                } catch (e) {
                    konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                }
                konymp.logger.trace("-----------------------------Setting render End", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "renderAutomatic", function() {
                return this._render;
            });
            defineSetter(this, "enableContinuousScanning", function(val) {
                try {
                    konymp.logger.trace("----------------------------- Setting enableContinuousScanning Start", konymp.logger.FUNCTION_ENTRY);
                    this._enableContinuousScanning = val;
                } catch (e) {
                    konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                }
                konymp.logger.trace("-----------------------------Setting enableContinuousScanning End", konymp.logger.FUNCTION_EXIT);
            });
            defineGetter(this, "enableContinuousScanning", function() {
                try {
                    return this._enableContinuousScanning;
                } catch (e) {
                    konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                }
            });
        },
        /**
         * @function scan
         * @private
         */
        scan: function(eventobject) {
            try {
                if (this._render && !this.isCameaAdded) {
                    this.handler.scan(eventobject, this._cameraFacing);
                    this.isCameaAdded = true;
                }
            } catch (e) {
                this.isCameaAdded = false;
                this.errorCallback(e);
            }
        },
        /**
         * @function resumeScan
         * @exposed
         * @description: API to resume the scan after 1 successful scan
         */
        resumeScan: function() {
            try {
                this.handler.resumeScan();
            } catch (e) {
                this.errorCallback(e);
            }
        },
        /**
         * @function flashControl
         * @exposed
         * @description: API to let user control the flash of camera
         */
        flashControl: function() {
            try {
                if (this.cameraFacing !== "Front") this.handler.flashControl();
                else throw {
                    "message": "Flash is not available for front camera"
                };
            } catch (e) {
                this.errorCallback(e);
            }
        },
        /**
         * @function release
         * @private
         */
        release: function(eventobject) {
            try {
                this.handler.release(eventobject);
                this.isCameaAdded = false;
            } catch (e) {
                this.isCameaAdded = true;
                this.errorCallback(e);
            }
        },
        renderScan: function() {
            try {
                if (!this.isCameaAdded) {
                    var eventobject = this.view.ncScan.getContainerView();
                    this.handler.scan(eventobject, this._cameraFacing);
                    this.isCameaAdded = true;
                    this.view.flxClose.isVisible = true;
                    this.view.flxFlash.isVisible = true;
                    this.view.flxCamera.isVisible = true;
                    this.view.forceLayout();
                }
            } catch (e) {
                this.isCameaAdded = false;
                this.errorCallback(e);
            }
        },
        stopScan: function() {
            try {
                var eventobject = this.view.ncScan.getContainerView();
                this.release(eventobject);
                this.view.flxClose.isVisible = false;
                this.view.flxFlash.isVisible = false;
                this.view.flxCamera.isVisible = false;
                this.view.forceLayout();
            } catch (e) {
                this.errorCallback(e);
            }
        },
        toggleCamera: function() {
            try {
                if (this.cameraFacing === "Back") this.cameraFacing = "Front";
                else this.cameraFacing = "Back";
                var eventobject = this.view.ncScan.getContainerView();
                this.release(eventobject);
                if (kony.os.deviceInfo().name.toLowerCase() === "android") kony.timer.schedule("konympBarcodeTimer", function() {
                    this.handler.scan(eventobject, this._cameraFacing);
                }.bind(this), 1, false);
                else this.handler.scan(eventobject, this._cameraFacing);
                this.isCameaAdded = true;
            } catch (e) {
                this.isCameaAdded = false;
                this.errorCallback(e);
            }
        },
        /**
         * @function afterScan
         * @exposed
         * @description: event exposed to get result after scan
         */
        afterScan: function(result) {},
        /**
         * @function errorCallback
         * @exposed
         * @description: event when any error is thrown in the component
         */
        errorCallback: function(error) {},
        /**
         * @function onClickClose
         * @exposed
         * @description: event when click on close button
         */
        onClickClose: function() {}
    };
});
define("com/konymp/barcodeqrscanner/barcodeqrscannerControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_c0b4981f42204767b8c06781f1d6e016: function AS_FlexContainer_c0b4981f42204767b8c06781f1d6e016(eventobject) {
        var self = this;
        this.toggleCamera();
    },
    AS_FlexContainer_f186359e1a1e4774a434bd5e475c21bf: function AS_FlexContainer_f186359e1a1e4774a434bd5e475c21bf(eventobject) {
        var self = this;
        this.stopScan();
        this.onClickClose();
    },
    AS_FlexContainer_j654c960f92a4e1ba498d832bde17d7f: function AS_FlexContainer_j654c960f92a4e1ba498d832bde17d7f(eventobject) {
        var self = this;
        this.flashControl();
    },
    AS_NativeContainer_ib1d2a18722c4a269eb3cc8152749836: function AS_NativeContainer_ib1d2a18722c4a269eb3cc8152749836(eventobject) {
        var self = this;
        this.release(eventobject);
    },
    AS_NativeContainer_d9228af85144405da7da7c3201ed7354: function AS_NativeContainer_d9228af85144405da7da7c3201ed7354(eventobject) {
        var self = this;
        this.scan(eventobject);
    }
});
define("com/konymp/barcodeqrscanner/barcodeqrscannerController", ["com/konymp/barcodeqrscanner/userbarcodeqrscannerController", "com/konymp/barcodeqrscanner/barcodeqrscannerControllerActions"], function() {
    var controller = require("com/konymp/barcodeqrscanner/userbarcodeqrscannerController");
    var actions = require("com/konymp/barcodeqrscanner/barcodeqrscannerControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "closeButtonVisibility", function(val) {
            this.view.flxClose.isVisible = val;
        });
        defineGetter(this, "closeButtonVisibility", function() {
            return this.view.flxClose.isVisible;
        });
        defineSetter(this, "closeButtonImage", function(val) {
            this.view.imgClose.src = val;
        });
        defineGetter(this, "closeButtonImage", function() {
            return this.view.imgClose.src;
        });
        defineSetter(this, "cameraToggleVisibility", function(val) {
            this.view.flxCamera.isVisible = val;
        });
        defineGetter(this, "cameraToggleVisibility", function() {
            return this.view.flxCamera.isVisible;
        });
        defineSetter(this, "cameraToggleImage", function(val) {
            this.view.imgCamera.src = val;
        });
        defineGetter(this, "cameraToggleImage", function() {
            return this.view.imgCamera.src;
        });
        defineSetter(this, "flashButtonVisibility", function(val) {
            this.view.flxFlash.isVisible = val;
        });
        defineGetter(this, "flashButtonVisibility", function() {
            return this.view.flxFlash.isVisible;
        });
        defineSetter(this, "flashButtonImage", function(val) {
            this.view.imgFlash.src = val;
        });
        defineGetter(this, "flashButtonImage", function() {
            return this.view.imgFlash.src;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
