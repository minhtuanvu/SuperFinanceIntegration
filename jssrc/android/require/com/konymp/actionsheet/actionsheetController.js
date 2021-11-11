/*
#
#  Created by Team Kony.
#  Copyright (c) 2017 Kony Inc. All rights reserved.
#
*/
define("com/konymp/actionsheet/useractionsheetController", function() {
    var konymp = konymp || {};
    var KonyLoggerModule = require("com/konymp/actionsheet/KonyLogger");
    konymp.logger = (new KonyLoggerModule("Action Sheet")) || function() {};
    return {
        /**
         * @constructor constructor
         * @param basicConfig
         * @param layoutConfig
         * @param pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            try {
                konymp.logger.info("Entered constructor of component", konymp.logger.FUNCTION_ENTRY);
                this.lastOption = 1;
                this.screenHeight = kony.os.deviceInfo().screenHeight;
                this.screenWidth = kony.os.deviceInfo().screenWidth;
                konymp.logger.info("Exiting constructor of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        },
        /**
         * @initGettersSetters Logic for getters/setters of custom properties
         */
        initGettersSetters: function() {
            try {
                konymp.logger.info("Entered initGettersSetters of component", konymp.logger.FUNCTION_ENTRY);
                konymp.logger.info("Exiting initGettersSetters of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        },
        /**
         * @function actionSheetPreshow
         * @scope private
         * @description this function is invoked each time the action sheet gets loaded.
         */
        actionSheetPreshow: function() {
            try {
                konymp.logger.info("Entered preshow function of component", konymp.logger.FUNCTION_ENTRY);
                this.view.isVisible = false;
                this.view.forceLayout();
                konymp.logger.info("Exiting preshow function of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        },
        /**
         * @function show
         * @scope private
         * @description this function is invoked to change the visibility of action sheet to true.
         */
        show: function() {
            try {
                konymp.logger.info("Entered show function of component", konymp.logger.FUNCTION_ENTRY);
                this.lastOption = 1;
                if (this.headerMainText === null || this.headerMainText === "") {
                    this.view.lblTitleText.isVisible = false;
                    this.view.lblDescriptionText.isVisible = false;
                    this.view.flxHeaderUnderline.isVisible = false;
                } else {
                    this.view.lblTitleText.isVisible = true;
                    this.view.flxHeaderUnderline.isVisible = true;
                    if (this.headerSubText === null || this.headerSubText === "") {
                        this.view.lblDescriptionText.isVisible = false;
                    } else {
                        this.view.lblDescriptionText.isVisible = true;
                    }
                }
                if (this.option1Text === null || this.option1Text === "") {
                    this.view.btnOption1.isVisible = false;
                    this.view.flxOption1Underline.isVisible = false;
                } else {
                    this.view.btnOption1.isVisible = true;
                    this.view.flxOption1Underline.isVisible = true;
                }
                if (this.option2Text === null || this.option2Text === "") {
                    this.view.btnOption2.isVisible = false;
                    this.view.flxOption2Underline.isVisible = false;
                } else {
                    this.view.btnOption2.isVisible = true;
                    this.view.flxOption2Underline.isVisible = true;
                    this.lastOption = 2;
                }
                if (this.option3Text === null || this.option3Text === "") {
                    this.view.btnOption3.isVisible = false;
                    this.view.flxOption3Underline.isVisible = false;
                } else {
                    this.view.btnOption3.isVisible = true;
                    this.view.flxOption3Underline.isVisible = true;
                    this.lastOption = 3;
                }
                if (this.option4Text === null || this.option4Text === "") {
                    this.view.btnOption4.isVisible = false;
                    this.view.flxOption4Underline.isVisible = false;
                } else {
                    this.view.btnOption4.isVisible = true;
                    this.view.flxOption4Underline.isVisible = true;
                    this.lastOption = 4;
                }
                if (this.option5Text === null || this.option5Text === "") {
                    this.view.btnOption5.isVisible = false;
                    this.view.flxOption5Underline.isVisible = false;
                } else {
                    this.view.btnOption5.isVisible = true;
                    this.view.flxOption5Underline.isVisible = true;
                    this.lastOption = 5;
                }
                if (this.option6Text === null || this.option6Text === "") {
                    this.view.btnOption6.isVisible = false;
                    this.view.flxOption6Underline.isVisible = false;
                } else {
                    this.view.btnOption6.isVisible = true;
                    this.view.flxOption6Underline.isVisible = true;
                    this.lastOption = 6;
                }
                if (this.option7Text === null || this.option7Text === "") {
                    this.view.btnOption7.isVisible = false;
                    this.view.flxOption7Underline.isVisible = false;
                } else {
                    this.view.btnOption7.isVisible = true;
                    this.view.flxOption7Underline.isVisible = true;
                    this.lastOption = 7;
                }
                if (this.option8Text === null || this.option8Text === "") {
                    this.view.btnOption8.isVisible = false;
                } else {
                    this.view.btnOption8.isVisible = true;
                    this.lastOption = 8;
                }
                if (this.lastOption !== 8) {
                    this.view["flxOption" + this.lastOption + "Underline"].isVisible = false;
                }
                this.view.centerX = "50%";
                this.view.centerY = "50%";
                this.view.height = "100%";
                this.view.width = "100%";
                this.view.flxActionSheetContent.bottom = "-100%";
                this.view.isVisible = true;
                var bottomToSet = (this.screenWidth / this.screenHeight) * 5;
                this.view.flxActionSheetContent.animate(kony.ui.createAnimation({
                    "100": {
                        "bottom": bottomToSet + "%",
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE
                        }
                    }
                }), {
                    "delay": 0,
                    "iterationCount": 1,
                    "fillMode": kony.anim.FILL_MODE_FORWARDS,
                    "duration": 0.5
                }, {});
                this.view.forceLayout();
                konymp.logger.info("Exiting show function of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        },
        /**
         * @function dismiss
         * @scope private
         * @description this function is invoked to change the visibility of action sheet to false.
         */
        dismiss: function() {
            try {
                konymp.logger.info("Entered dismiss function of component", konymp.logger.FUNCTION_ENTRY);
                this.view.flxActionSheetContent.animate(kony.ui.createAnimation({
                    "100": {
                        "bottom": "-100%",
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE
                        }
                    }
                }), {
                    "delay": 0,
                    "iterationCount": 1,
                    "fillMode": kony.anim.FILL_MODE_FORWARDS,
                    "duration": 0.4
                }, {
                    animationEnd: function() {
                        this.view.isVisible = false;
                    }.bind(this)
                });
                this.view.forceLayout();
                konymp.logger.info("Exiting dismiss function of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        },
        /**
         * @function option1Clicked
         * @scope private
         * @description this function is invoked when the first option of action sheeet is clicked.
         */
        option1Clicked: function() {
            try {
                konymp.logger.info("Entered option1Clicked function of component", konymp.logger.FUNCTION_ENTRY);
                this.dismiss();
                if (this.onClickOption1 !== undefined && this.onClickOption1 !== null) {
                    this.onClickOption1();
                }
                konymp.logger.info("Exiting option1Clicked of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        },
        /**
         * @function option2Clicked
         * @scope private
         * @description this function is invoked when the second option of action sheeet is clicked.
         */
        option2Clicked: function() {
            try {
                konymp.logger.info("Entered option2Clicked function of component", konymp.logger.FUNCTION_ENTRY);
                this.dismiss();
                if (this.onClickOption2 !== undefined && this.onClickOption2 !== null) {
                    this.onClickOption2();
                }
                konymp.logger.info("Exiting option2Clicked function of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        },
        /**
         * @function option3Clicked
         * @scope private
         * @description this function is invoked when the third option of action sheeet is clicked.
         */
        option3Clicked: function() {
            try {
                konymp.logger.info("Entered option3Clicked function of component", konymp.logger.FUNCTION_ENTRY);
                this.dismiss();
                if (this.onClickOption3 !== undefined && this.onClickOption3 !== null) {
                    this.onClickOption3();
                }
                konymp.logger.info("Exiting option3Clicked function of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        },
        /**
         * @function option4Clicked
         * @scope private
         * @description this function is invoked when the fourth option of action sheeet is clicked.
         */
        option4Clicked: function() {
            try {
                konymp.logger.info("Entered option4Clicked function of component", konymp.logger.FUNCTION_ENTRY);
                this.dismiss();
                if (this.onClickOption4 !== undefined && this.onClickOption4 !== null) {
                    this.onClickOption4();
                }
                konymp.logger.info("Exiting option4Clicked function of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        },
        /**
         * @function option5Clicked
         * @scope private
         * @description this function is invoked when the fifth option of action sheeet is clicked.
         */
        option5Clicked: function() {
            try {
                konymp.logger.info("Entered option5Clicked function of component", konymp.logger.FUNCTION_ENTRY);
                this.dismiss();
                if (this.onClickOption5 !== undefined && this.onClickOption5 !== null) {
                    this.onClickOption5();
                }
                konymp.logger.info("Exiting option5Clicked function of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        },
        /**
         * @function option6Clicked
         * @scope private
         * @description this function is invoked when the sixth option of action sheeet is clicked.
         */
        option6Clicked: function() {
            try {
                konymp.logger.info("Entered option6Clicked function of component", konymp.logger.FUNCTION_ENTRY);
                this.dismiss();
                if (this.onClickOption6 !== undefined && this.onClickOption6 !== null) {
                    this.onClickOption6();
                }
                konymp.logger.info("Exiting option6Clicked function of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        },
        /**
         * @function option7Clicked
         * @scope private
         * @description this function is invoked when the seventh option of action sheeet is clicked.
         */
        option7Clicked: function() {
            try {
                konymp.logger.info("Entered option7Clicked function of component", konymp.logger.FUNCTION_ENTRY);
                this.dismiss();
                if (this.onClickOption7 !== undefined && this.onClickOption7 !== null) {
                    this.onClickOption7();
                }
                konymp.logger.info("Exiting option7Clicked function of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        },
        /**
         * @function option8Clicked
         * @scope private
         * @description this function is invoked when the eighth option of action sheeet is clicked.
         */
        option8Clicked: function() {
            try {
                konymp.logger.info("Entered option8Clicked function of component", konymp.logger.FUNCTION_ENTRY);
                this.dismiss();
                if (this.onClickOption8 !== undefined && this.onClickOption8 !== null) {
                    this.onClickOption8();
                }
                konymp.logger.info("Exiting option8Clicked function of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        },
        /**
         * @function onCloseClick
         * @scope private
         * @description this function is invoked when the close of action sheeet is clicked.
         */
        onCloseClick: function() {
            try {
                konymp.logger.info("Entered onCloseClick function of component", konymp.logger.FUNCTION_ENTRY);
                this.dismiss();
                if (this.onClose !== undefined && this.onClose !== null) {
                    this.onClose();
                }
                konymp.logger.info("Exiting onCloseClick function of component", konymp.logger.FUNCTION_EXIT);
            } catch (e) {
                konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
                throw e;
            }
        }
    };
});
define("com/konymp/actionsheet/actionsheetControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_e5072739479b4bbcad78cfa9a2bea31d: function AS_FlexContainer_e5072739479b4bbcad78cfa9a2bea31d(eventobject) {
        var self = this;
        this.actionSheetPreshow();
    },
    AS_Button_j7cda652f86e4590bc37a45485396007: function AS_Button_j7cda652f86e4590bc37a45485396007(eventobject) {
        var self = this;
        this.onCloseClick();
    },
    AS_Button_dfb1c3d35811494cb20580696b7a6cab: function AS_Button_dfb1c3d35811494cb20580696b7a6cab(eventobject) {
        var self = this;
        this.option1Clicked();
    },
    AS_Button_i13ae042409c41a89117498086889be5: function AS_Button_i13ae042409c41a89117498086889be5(eventobject) {
        var self = this;
        this.option2Clicked();
    },
    AS_Button_gbd3b25fdd3343ffb324c0f3675bb6f2: function AS_Button_gbd3b25fdd3343ffb324c0f3675bb6f2(eventobject) {
        var self = this;
        this.option3Clicked();
    },
    AS_Button_ed3095ed534f4390b0835711f8bd9770: function AS_Button_ed3095ed534f4390b0835711f8bd9770(eventobject) {
        var self = this;
        this.option4Clicked();
    },
    AS_Button_f7569628024d4b2490aa7ae4aa603162: function AS_Button_f7569628024d4b2490aa7ae4aa603162(eventobject) {
        var self = this;
        this.option5Clicked();
    },
    AS_Button_fdcd16704c374b5aa8f6e034a737b9cf: function AS_Button_fdcd16704c374b5aa8f6e034a737b9cf(eventobject) {
        var self = this;
        this.option6Clicked();
    },
    AS_Button_ccbeb491bfb447b892b8573f2bf65a46: function AS_Button_ccbeb491bfb447b892b8573f2bf65a46(eventobject) {
        var self = this;
        this.option7Clicked();
    },
    AS_Button_hb0eca27b1e34e998ca984b8bfa86f6c: function AS_Button_hb0eca27b1e34e998ca984b8bfa86f6c(eventobject) {
        var self = this;
        this.option8Clicked();
    }
});
define("com/konymp/actionsheet/actionsheetController", ["com/konymp/actionsheet/useractionsheetController", "com/konymp/actionsheet/actionsheetControllerActions"], function() {
    var controller = require("com/konymp/actionsheet/useractionsheetController");
    var actions = require("com/konymp/actionsheet/actionsheetControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "sheetBackgroundSkin", function(val) {
            this.view.flxActionSheetOptions.skin = val;
        });
        defineGetter(this, "sheetBackgroundSkin", function() {
            return this.view.flxActionSheetOptions.skin;
        });
        defineSetter(this, "headerMainText", function(val) {
            this.view.lblTitleText.text = val;
        });
        defineGetter(this, "headerMainText", function() {
            return this.view.lblTitleText.text;
        });
        defineSetter(this, "option1Text", function(val) {
            this.view.btnOption1.text = val;
        });
        defineGetter(this, "option1Text", function() {
            return this.view.btnOption1.text;
        });
        defineSetter(this, "closeText", function(val) {
            this.view.btnClose.text = val;
        });
        defineGetter(this, "closeText", function() {
            return this.view.btnClose.text;
        });
        defineSetter(this, "option2Text", function(val) {
            this.view.btnOption2.text = val;
        });
        defineGetter(this, "option2Text", function() {
            return this.view.btnOption2.text;
        });
        defineSetter(this, "headerSubText", function(val) {
            this.view.lblDescriptionText.text = val;
        });
        defineGetter(this, "headerSubText", function() {
            return this.view.lblDescriptionText.text;
        });
        defineSetter(this, "footerBackgroundSkin", function(val) {
            this.view.flxCancel.skin = val;
        });
        defineGetter(this, "footerBackgroundSkin", function() {
            return this.view.flxCancel.skin;
        });
        defineSetter(this, "option3Text", function(val) {
            this.view.btnOption3.text = val;
        });
        defineGetter(this, "option3Text", function() {
            return this.view.btnOption3.text;
        });
        defineSetter(this, "headerMainTextSkin", function(val) {
            this.view.lblTitleText.skin = val;
        });
        defineGetter(this, "headerMainTextSkin", function() {
            return this.view.lblTitleText.skin;
        });
        defineSetter(this, "footerButtonSkin", function(val) {
            this.view.btnClose.skin = val;
        });
        defineGetter(this, "footerButtonSkin", function() {
            return this.view.btnClose.skin;
        });
        defineSetter(this, "footerButtonFocusSkin", function(val) {
            this.view.btnClose.focusSkin = val;
        });
        defineGetter(this, "footerButtonFocusSkin", function() {
            return this.view.btnClose.focusSkin;
        });
        defineSetter(this, "headerSubTextSkin", function(val) {
            this.view.lblDescriptionText.skin = val;
        });
        defineGetter(this, "headerSubTextSkin", function() {
            return this.view.lblDescriptionText.skin;
        });
        defineSetter(this, "option4Text", function(val) {
            this.view.btnOption4.text = val;
        });
        defineGetter(this, "option4Text", function() {
            return this.view.btnOption4.text;
        });
        defineSetter(this, "option5Text", function(val) {
            this.view.btnOption5.text = val;
        });
        defineGetter(this, "option5Text", function() {
            return this.view.btnOption5.text;
        });
        defineSetter(this, "separatorSkin", function(val) {
            this.view.flxHeaderUnderline.skin = val;
        });
        defineGetter(this, "separatorSkin", function() {
            return this.view.flxHeaderUnderline.skin;
        });
        defineSetter(this, "option6Text", function(val) {
            this.view.btnOption6.text = val;
        });
        defineGetter(this, "option6Text", function() {
            return this.view.btnOption6.text;
        });
        defineSetter(this, "option7Text", function(val) {
            this.view.btnOption7.text = val;
        });
        defineGetter(this, "option7Text", function() {
            return this.view.btnOption7.text;
        });
        defineSetter(this, "option8Text", function(val) {
            this.view.btnOption8.text = val;
        });
        defineGetter(this, "option8Text", function() {
            return this.view.btnOption8.text;
        });
        defineSetter(this, "optionsSkin", function(val) {
            this.view.btnOption1.skin = val;
        });
        defineGetter(this, "optionsSkin", function() {
            return this.view.btnOption1.skin;
        });
        defineSetter(this, "optionsFocusSkin", function(val) {
            this.view.btnOption1.focusSkin = val;
        });
        defineGetter(this, "optionsFocusSkin", function() {
            return this.view.btnOption1.focusSkin;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
